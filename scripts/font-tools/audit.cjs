// Manual audit: NODE_PATH=... node scripts/font-tools/audit.cjs SITE OUTPUT [BASELINE_OUTPUT]
const fs=require('fs'),path=require('path'),http=require('http');
const {chromium}=require('playwright');
const {PNG}=require('pngjs');
(async()=>{
const [root,out,baseline]=process.argv.slice(2);fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{let p=path.join(root,decodeURIComponent(req.url.split('?')[0]));if(fs.existsSync(p)&&fs.statSync(p).isDirectory())p=path.join(p,'index.html');if(!fs.existsSync(p)){res.writeHead(404);return res.end();}res.setHeader('Content-Type',p.endsWith('.css')?'text/css':p.endsWith('.js')?'text/javascript':p.endsWith('.woff2')?'font/woff2':p.endsWith('.html')?'text/html':'application/octet-stream');fs.createReadStream(p).pipe(res);});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const origin=`http://127.0.0.1:${server.address().port}`;
const systemChrome='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser=await chromium.launch({executablePath:process.env.CHROME || (fs.existsSync(systemChrome)?systemChrome:undefined),headless:true});
fs.writeFileSync(path.join(out,'environment.json'),JSON.stringify({browser:browser.version(),platform:process.platform,architecture:process.arch,deviceScaleFactor:1,colorScheme:process.env.THEME||'light',frozenTime:'2026-10-30T10:00:00Z',externalRequests:'blocked',animations:'disabled; GIF first frame; video paused'},null,2));
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):e.name.endsWith('.html')?[path.join(d,e.name)]:[])}
const files=walk(root).filter(p=>!p.includes('/reports/')&&!p.includes('/vendor/')&&(!process.env.FILTER||p.includes(process.env.FILTER)));const results=[];
for(const width of (process.env.WIDTHS||'1440,390').split(',').map(Number))for(const file of files){
 const url='/'+path.relative(root,file).replace(/index.html$/,'');
 const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1,colorScheme:process.env.THEME||'light',reducedMotion:'reduce'});
 await context.addInitScript(() => { const NativeDate=Date; globalThis.Date=class extends NativeDate { constructor(...args){super(...(args.length?args:['2026-10-30T10:00:00Z']))} static now(){return new NativeDate('2026-10-30T10:00:00Z').getTime()} }; });
 const page=await context.newPage();await page.route('**/*',route=>route.request().url().startsWith(origin)?route.continue():route.abort());
 await page.goto(origin+url,{waitUntil:'load'});
 await page.addStyleTag({content:'*,*::before,*::after { animation:none!important;transition:none!important;caret-color:transparent!important; } .animate-in {opacity:1!important;transform:none!important}'});
 await page.evaluate(async()=>{document.querySelectorAll('video').forEach(v=>{v.pause();v.removeAttribute('autoplay')});document.querySelectorAll('img').forEach(i=>i.loading='eager');await Promise.all([...document.images].filter(i=>/\.gif($|\?)/i.test(i.src)).map(async i=>{try{const bitmap=await createImageBitmap(await (await fetch(i.src)).blob());const canvas=document.createElement('canvas');canvas.width=bitmap.width;canvas.height=bitmap.height;canvas.getContext('2d').drawImage(bitmap,0,0);i.removeAttribute('srcset');i.src=canvas.toDataURL();bitmap.close();}catch{}}));await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))});await page.waitForTimeout(80);
 const data=await page.evaluate(()=>{
 const runs={};const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
 while(n=walker.nextNode()){if(!n.textContent.trim()||['SCRIPT','STYLE','NOSCRIPT'].includes(n.parentElement.tagName))continue;const s=getComputedStyle(n.parentElement);const key=JSON.stringify(Object.fromEntries(['fontFamily','fontWeight','fontStyle','fontStretch','fontVariationSettings','fontFeatureSettings','fontVariant','fontVariantNumeric','fontOpticalSizing','hyphens'].map(k=>[k,s[k]])));runs[key]=[...new Set((runs[key]||'')+n.textContent)].sort().join('');}
 const pseudos={};for(const e of document.querySelectorAll('li,blockquote,code'))for(const pseudo of ['::marker','::before','::after']){const s=getComputedStyle(e,pseudo);if(pseudo==='::marker'&&e.tagName!=='LI')continue;if(pseudo!=='::marker'&&['none','normal'].includes(s.content))continue;const entry={pseudo,fontFamily:s.fontFamily,fontWeight:s.fontWeight,fontStyle:s.fontStyle,fontVariantNumeric:s.fontVariantNumeric,fontFeatureSettings:s.fontFeatureSettings,content:s.content};pseudos[JSON.stringify(entry)]=true;}const images=[...document.images].map(i=>{const r=i.getBoundingClientRect();return {src:i.getAttribute('src'),x:r.x,y:r.y,width:r.width,height:r.height}});return {runs,pseudos:Object.keys(pseudos).map(JSON.parse),images,preloads:[...document.querySelectorAll('link[as="font"]')].map(e=>new URL(e.href).pathname),fonts:performance.getEntriesByType('resource').filter(e=>/\.(woff2?|ttf)(\?|$)/.test(e.name)).map(e=>new URL(e.name).pathname)};
 });
 data.url=url;data.width=width;data.bytes=data.fonts.reduce((s,p)=>s+fs.statSync(path.join(root,p)).size,0);
 const name=width+'-'+(url.replace(/[^a-zA-Z0-9]+/g,'_')||'home')+'.png';
 if (!process.env.NO_SCREENSHOTS) {
 // Warm the full-page compositor so offscreen scaled images settle too.
 await page.screenshot({fullPage:true,animations:'disabled'});
 await page.waitForTimeout(150);
 await page.screenshot({path:path.join(out,name),fullPage:true,animations:'disabled'});
 if(baseline){const a=PNG.sync.read(fs.readFileSync(path.join(baseline,name))),b=PNG.sync.read(fs.readFileSync(path.join(out,name)));let changed=0,maxDelta=0;const diff=new PNG({width:b.width,height:b.height});if(a.width!==b.width||a.height!==b.height){data.diff={dimensions:[a.width,a.height,b.width,b.height]};}else {for(let i=0;i<a.data.length;i+=4){let delta=0;for(let c=0;c<3;c++)delta=Math.max(delta,Math.abs(a.data[i+c]-b.data[i+c]));if(delta)changed++;maxDelta=Math.max(maxDelta,delta);diff.data[i]=delta?255:b.data[i];diff.data[i+1]=delta?0:b.data[i+1];diff.data[i+2]=delta?0:b.data[i+2];diff.data[i+3]=255;}data.diff={changed,total:a.width*a.height,maxDelta};if(changed)fs.writeFileSync(path.join(out,name.replace('.png','.diff.png')),PNG.sync.write(diff));}}
 }
 results.push(data);await context.close();if(results.length%20===0)console.log(results.length,url,data.diff||'');
}
fs.writeFileSync(path.join(out,'pages.json'),JSON.stringify(results,null,2));await browser.close();server.close();
})();
