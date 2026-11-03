// Compare font-only changes in the same settled DOM; measure cold requests separately.
// node verify.cjs BASELINE_SITE CANDIDATE_SITE OUTPUT
const fs = require('fs');
const path = require('path');
const http = require('http');
const crypto = require('crypto');
const { chromium } = require('playwright');
const { PNG } = require('pngjs');
const [beforeRoot, afterRoot, output] = process.argv.slice(2);
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? walk(path.join(dir, e.name)) : e.name.endsWith('.html') ? [path.join(dir, e.name)] : []);
function diff(aBuffer, bBuffer, destination) {
  const a = PNG.sync.read(aBuffer), b = PNG.sync.read(bBuffer);
  if (a.width !== b.width || a.height !== b.height) return { dimensions: [a.width, a.height, b.width, b.height] };
  const delta = new PNG({ width: a.width, height: a.height });
  let changed = 0, maxDelta = 0;
  for (let i = 0; i < a.data.length; i += 4) {
    const d = Math.max(...[0, 1, 2, 3].map(c => Math.abs(a.data[i + c] - b.data[i + c])));
    if (d) changed++;
    maxDelta = Math.max(maxDelta, d);
    delta.data[i] = d ? 255 : b.data[i];
    delta.data[i + 1] = d ? 0 : b.data[i + 1];
    delta.data[i + 2] = d ? 0 : b.data[i + 2];
    delta.data[i + 3] = 255;
  }
  if (changed && destination) fs.writeFileSync(destination, PNG.sync.write(delta));
  return { changed, total: a.width * a.height, maxDelta };
}
async function stableCapture(page) {
  let previous = await page.screenshot({ fullPage: true, animations: 'disabled' });
  for (let attempt = 0; attempt < 8; attempt++) {
    await page.waitForTimeout(150);
    const next = await page.screenshot({ fullPage: true, animations: 'disabled' });
    if (diff(previous, next).changed === 0) return next;
    previous = next;
  }
  throw new Error('The unchanged page did not produce two identical consecutive captures');
}
async function requests(page, root) {
  await page.evaluate(() => document.fonts.ready);
  const result = await page.evaluate(() => ({
    preloads: [...document.querySelectorAll('link[as="font"]')].map(x => { const u=new URL(x.href); return u.pathname+u.search; }),
    fonts: [...new Set(performance.getEntriesByType('resource')
      .filter(x => /\.(woff2?|ttf)(\?|$)/.test(x.name)).map(x => { const u=new URL(x.name); return u.pathname+u.search; }))]
  }));
  result.bytes = result.fonts.reduce((sum, file) => sum + fs.statSync(path.join(root, file.split('?')[0])).size, 0);
  return result;
}
(async () => {
  fs.mkdirSync(output, { recursive: true });
  const cssWithoutFaces = root => fs.readFileSync(path.join(root, 'css/style.css'), 'utf8')
    .replace(/@font-face\s*\{[^}]*\}/g, '').replace(/\s+/g, '');
  if (cssWithoutFaces(beforeRoot) !== cssWithoutFaces(afterRoot)) throw new Error('Non-font CSS changed');
  const server = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://local');
    const root = u.searchParams.has('candidate') || /-(core|extended)\.woff2$/.test(u.pathname) ? afterRoot : beforeRoot;
    let file = path.join(root, decodeURIComponent(u.pathname));
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) { res.writeHead(404); res.end(); return; }
    const types = { '.css': 'text/css', '.js': 'text/javascript', '.html': 'text/html', '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.end(fs.readFileSync(file));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const systemChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const browser = await chromium.launch({ headless: true, args: ['--disable-gpu'], executablePath: process.env.CHROME || (fs.existsSync(systemChrome) ? systemChrome : undefined) });
  fs.writeFileSync(path.join(output, 'environment.json'), JSON.stringify({ browser: browser.version(), platform: process.platform, architecture: process.arch, deviceScaleFactor: 1, theme: process.env.THEME || 'light', renderer: 'software compositing (--disable-gpu)', frozenTime: '2026-11-03T10:00:00Z', method: 'Same DOM, original CSS replaced by candidate CSS; separate cold context for candidate network; two identical consecutive captures required on each side; no masks or tolerance', media: 'External requests and video playback blocked; GIF first frame; CSS transitions/animations disabled' }, null, 2));
  const results = [];
  try {
    for (const width of (process.env.WIDTHS || '1440,390').split(',').map(Number)) {
      for (const file of walk(beforeRoot).filter(f => !process.env.FILTER || f.includes(process.env.FILTER))) {
        const relative = path.relative(beforeRoot, file);
        const beforeHTML = fs.readFileSync(file, 'utf8'), afterHTML = fs.readFileSync(path.join(afterRoot, relative), 'utf8');
        const body = text => text.match(/<body\b[^>]*>[\s\S]*<\/body>/i)?.[0];
        if (!body(beforeHTML) || body(beforeHTML) !== body(afterHTML)) throw new Error(`Content differs: ${relative}`);
        const url = '/' + relative.replace(/index.html$/, '');
        const name = width + '-' + url.replace(/[^a-zA-Z0-9]+/g, '_');
        const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce', colorScheme: process.env.THEME || 'light' });
        await context.addInitScript(() => {
          const NativeDate = Date;
          globalThis.Date = class extends NativeDate {
            constructor(...args) { super(...(args.length ? args : ['2026-11-03T10:00:00Z'])); }
            static now() { return new NativeDate('2026-11-03T10:00:00Z').getTime(); }
          };
          HTMLMediaElement.prototype.play = () => Promise.resolve();
        });
        const page = await context.newPage();
        await page.route('**/*', route => route.request().url().startsWith(origin) && route.request().resourceType() !== 'media' ? route.continue() : route.abort());
        await page.goto(origin + url, { waitUntil: 'load' });
        await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}.animate-in{opacity:1!important;transform:none!important}' });
        await page.evaluate(async () => {
          document.querySelectorAll('img').forEach(i => i.loading = 'eager');
          await Promise.all([...document.images].filter(i => /\.gif($|\?)/i.test(i.src)).map(async i => {
            const bitmap = await createImageBitmap(await (await fetch(i.src)).blob());
            const canvas = document.createElement('canvas'); canvas.width = bitmap.width; canvas.height = bitmap.height;
            canvas.getContext('2d').drawImage(bitmap, 0, 0); i.removeAttribute('srcset'); i.src = canvas.toDataURL(); bitmap.close();
          }));
          await document.fonts.ready;
          await Promise.all([...document.images].map(i => i.decode().catch(() => {})));
        });
        let cdp;
        async function cjkFonts() {
          if (!url.includes('/font-fixtures/cjk.html')) return undefined;
          if (!cdp) { cdp=await context.newCDPSession(page); await cdp.send('DOM.enable'); await cdp.send('CSS.enable'); }
          const {root}=await cdp.send('DOM.getDocument');
          const {nodeId}=await cdp.send('DOM.querySelector',{nodeId:root.nodeId,selector:'section p'});
          return (await cdp.send('CSS.getPlatformFontsForNode',{nodeId})).fonts;
        }
        const before = await requests(page, beforeRoot);
        const platformFontsBefore=await cjkFonts();
        const beforePNG = await stableCapture(page);
        fs.writeFileSync(path.join(output, name + '.before.png'), beforePNG);
        const preloadPaths = [...afterHTML.matchAll(/<link\b(?=[^>]*\bas=["']font["'])[^>]*href=["']([^"']+)/g)].map(x => x[1]);
        await page.evaluate(async paths => {
          document.querySelectorAll('link[as="font"]').forEach(x => x.remove());
          for (const href of paths) { const link = document.createElement('link'); Object.assign(link, { rel: 'preload', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous', href }); document.head.append(link); }
          const link = [...document.querySelectorAll('link[rel="stylesheet"]')].find(x => new URL(x.href).pathname === '/css/style.css');
          await new Promise((resolve, reject) => { link.onload = resolve; link.onerror = reject; link.href = '/css/style.css?candidate'; });
          await document.fonts.ready;
        }, preloadPaths);
        const afterPNG = await stableCapture(page);
        const platformFontsAfter=await cjkFonts();
        fs.writeFileSync(path.join(output, name + '.after.png'), afterPNG);
        const pixelDiff = diff(beforePNG, afterPNG, path.join(output, name + '.diff.png'));
        await context.close();
        // A new context has no HTTP/font cache. It measures the deployed page, not the CSS-swap session.
        const cold = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: process.env.THEME || 'light' });
        const coldPage = await cold.newPage();
        await coldPage.route('**/*', route => {
          const req = route.request();
          if (!req.url().startsWith(origin) || req.resourceType() === 'media') return route.abort();
          const u = new URL(req.url());
          if (req.isNavigationRequest() || u.pathname === '/css/style.css') { u.searchParams.set('candidate', '1'); return route.continue({ url: u.href }); }
          return route.continue();
        });
        await coldPage.goto(origin + url, { waitUntil: 'load' });
        const after = await requests(coldPage, afterRoot);
        await cold.close();
        results.push({ url, width, bodySha256: hash(body(beforeHTML)), before, after, platformFontsBefore, platformFontsAfter, diff: pixelDiff, beforeSha256: hash(beforePNG), afterSha256: hash(afterPNG) });
        fs.writeFileSync(path.join(output, 'pages.json'), JSON.stringify(results, null, 2));
        if (results.length % 10 === 0 || pixelDiff.changed !== 0) console.log(results.length, url, pixelDiff);
      }
    }
  } finally { await browser.close(); server.close(); }
  if (results.some(row => row.diff.changed !== 0)) process.exitCode = 1;
})();
