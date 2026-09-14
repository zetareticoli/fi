(() => {
  'use strict';
  const svg = document.querySelector('#inventory-scene');
  if (!svg) return;
  const tokens = document.body.dataset.course === 'tokens';
  const config = JSON.parse(document.getElementById('course-animation-config').textContent);
  const journey = document.querySelector('.journey');
  const scene = document.querySelector('.scene');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const ns = 'http://www.w3.org/2000/svg';
  const clamp = n => Math.max(0, Math.min(1, n));
  const smooth = n => { n = clamp(n); return n * n * (3 - 2 * n); };
  const lerp = (a, b, t) => a + (b - a) * t;
  const pieces = [
    { x:28,y:270,w:138,h:40,col:0,row:0, label:'Pulsante primario', html:'<rect width="138" height="40" rx="7" fill="#245bcd"/><text x="69" y="25" text-anchor="middle" fill="white" font-size="12">Esplora i percorsi ↗</text>' },
    { x:179,y:270,w:115,h:40,col:0,row:1, label:'Pulsante secondario', html:'<rect x=".5" y=".5" width="114" height="39" rx="7" fill="#fff" stroke="#9cafd0"/><text x="57" y="25" text-anchor="middle" fill="#315178" font-size="12">Salva la raccolta</text>' },
    { x:310,y:275,w:67,h:29,col:0,row:2, label:'Etichetta', html:'<rect width="67" height="29" rx="14" fill="#d7e7dd"/><circle cx="13" cy="14.5" r="3" fill="#498968"/><text x="24" y="19" fill="#397054" font-size="10">Nuovo</text>' },
    { x:28,y:92,w:345,h:36,col:1,row:0, label:'Campo di ricerca', html:'<rect x=".5" y=".5" width="344" height="35" rx="6" fill="white" stroke="#c0cbdc"/><circle cx="18" cy="16" r="5" fill="none" stroke="#7890af"/><path d="M22 20l4 4" stroke="#7890af"/><text x="37" y="22" font-size="11" fill="#74839c">Cerca la tua prossima destinazione</text>' },
    { x:28,y:44,w:230,h:30,col:1,row:1, label:'Navigazione a schede', html:'<rect width="230" height="30" rx="6" fill="#e0e7f2"/><rect x="3" y="3" width="72" height="24" rx="4" fill="white"/><text x="16" y="19" font-size="10" fill="#245bcd">Per te</text><text x="89" y="19" font-size="10" fill="#72839d">Popolari</text><text x="163" y="19" font-size="10" fill="#72839d">Salvati</text>' },
    { x:305,y:48,w:68,h:23,col:1,row:2, label:'Interruttore', html:'<text x="0" y="15" font-size="9" fill="#7a88a0">Mappa</text><rect x="36" width="32" height="21" rx="11" fill="#245bcd"/><circle cx="57" cy="10.5" r="7.5" fill="white"/>' },
    { x:28,y:147,w:163,h:106,col:2,row:0, label:'Card destinazione', html:'<rect width="163" height="106" rx="7" fill="white" stroke="#d5deeb"/><path d="M7 0h149q7 0 7 7v58H0V7q0-7 7-7" fill="url(#tile-fill)"/><circle cx="124" cy="20" r="10" fill="#f4eccf"/><path d="M0 65l47-46 40 39 29-27 47 34" fill="#6b91c7"/><path d="M0 65l42-24 31 24" fill="#416daa"/><text x="12" y="83" font-size="11" fill="#244574">Sentieri di montagna</text><text x="12" y="97" font-size="8" fill="#8795aa">12 percorsi · Esplora</text>' },
    { x:210,y:147,w:163,h:106,col:2,row:1, label:'Card destinazione', html:'<rect width="163" height="106" rx="7" fill="white" stroke="#d5deeb"/><path d="M7 0h149q7 0 7 7v58H0V7q0-7 7-7" fill="#d6e6e5"/><path d="M0 42q35-25 77 0t86-5v28H0" fill="#8dbaba"/><path d="M0 58q39-25 87-5t76-3v15H0" fill="#588f9a"/><text x="12" y="83" font-size="11" fill="#244574">Un respiro sul mare</text><text x="12" y="97" font-size="8" fill="#8795aa">8 percorsi · Esplora</text>' },
    { x:340,y:7,w:34,h:29,col:2,row:2, label:'Avatar', html:'<circle cx="17" cy="14" r="14" fill="#e8cfb0"/><circle cx="17" cy="11" r="5" fill="#9d7960"/><path d="M7 25q0-11 10-11t10 11" fill="#8b9fbd"/>' }
  ];
  const groups = Object.fromEntries(['board','device','paths','ghosts','pieces','annotations'].map(id => [id,document.getElementById(id)]));
  let layout, framePending = false, activePhase = -1;
  let tokenPieces = [];
  function setupTokens() {
    const mobile=innerWidth<=600;
    svg.setAttribute('viewBox',mobile?'0 0 620 880':'0 0 1200 560');
    Object.values(groups).forEach(g=>g.innerHTML='');
    const target=mobile?{x:65,y:425,w:490,h:340}:{x:695,y:80,w:450,h:350};
    groups.board.innerHTML=`<rect x="${target.x-14}" y="${target.y-35}" width="${target.w+28}" height="${target.h+60}" rx="18" fill="#344156" stroke="#637087"/><circle cx="${target.x+2}" cy="${target.y-18}" r="3" fill="#8490a2"/><circle cx="${target.x+14}" cy="${target.y-18}" r="3" fill="#8490a2"/><circle cx="${target.x+26}" cy="${target.y-18}" r="3" fill="#8490a2"/><text x="${target.x+48}" y="${target.y-14}" font-size="10" fill="#bdc6d4">L’interfaccia prende forma</text>`;
    const blocks=[
      {x:0,y:0,w:450,h:40,name:'color.surface',value:'#657487',color:'#657487'},
      {x:0,y:57,w:255,h:33,name:'type.heading',value:'24 / 32',color:'#8994a5'},
      {x:273,y:57,w:177,h:90,name:'radius.card',value:'12 px',color:'#bec5cf'},
      {x:0,y:107,w:255,h:190,name:'color.brand',value:'#E7AD45',color:'#e7ad45'},
      {x:273,y:164,w:177,h:75,name:'space.stack',value:'16 px',color:'#8795a8'},
      {x:273,y:257,w:177,h:40,name:'color.action',value:'#F4A900',color:'#f4a900'}
    ];
    tokenPieces=blocks.map((block,i)=>{
      const source=mobile?{x:90+(i%3)*165,y:60+Math.floor(i/3)*120}:{x:90+(i%2)*125+(i%3-1)*12,y:100+Math.floor(i/2)*115+(i%2)*15};
      const middle=mobile?{x:70+(i%3)*180,y:65+Math.floor(i/3)*140}:{x:385+(i%2)*137,y:80+Math.floor(i/2)*135};
      const factor=target.w/450;
      const end={x:target.x+block.x*factor,y:target.y+block.y*factor};
      const g=document.createElementNS(ns,'g');
      const glyph='<path d="M30 0 56 15v30L30 60 4 45V15Z" fill="#F4A900"/><path d="M30 9 48 19v22L30 51 12 41V19Z M12 19l18 11 18-11 M30 30v21" stroke="white" stroke-width="2" stroke-linejoin="round" fill="none"/><circle cx="30" cy="29" r="6" fill="#F4A900" stroke="white" stroke-width="2"/>';
      let detail='';
      if(i===0)detail='<circle cx="22" cy="20" r="7" fill="#f4a900"/><path d="M44 16h65m-65 8h40M320 20h24m20 0h24" stroke="#cdd4df" stroke-width="3" stroke-linecap="round"/>';
      if(i===1)detail='<text x="14" y="22" font-size="16" font-weight="600" fill="#fff">Il tuo prossimo progetto.</text>';
      if(i===3)detail='<circle cx="193" cy="42" r="19" fill="#fff" opacity=".65"/><path d="M0 190 82 61l79 98 35-41 59 72" fill="#a76b21"/><path d="M0 190 62 122l55 68" fill="#835522"/>';
      if(i===2||i===4)detail='<path d="M18 20h95m-95 12h125m-125 12h74" stroke="#e9edf4" stroke-width="4" stroke-linecap="round" opacity=".8"/>';
      if(i===5)detail='<text x="88" y="25" font-size="12" text-anchor="middle" fill="#263347">Inizia il progetto ↗</text>';
      g.innerHTML=`<g class="token-block"><rect width="${block.w}" height="${block.h}" rx="8" fill="${block.color}"/><g class="block-details">${detail}</g></g><g class="token-symbol">${glyph}</g><g class="token-label"><text y="82" x="30" text-anchor="middle" font-size="10" fill="#d5dce6">${block.name}</text><text y="98" x="30" text-anchor="middle" font-size="9" fill="#f6bf50">${block.value}</text></g>`;
      groups.pieces.appendChild(g);
      return{...block,source,middle,end,factor,g};
    });
    groups.annotations.innerHTML=mobile?'':`<text x="145" y="495" text-anchor="middle" fill="#b2becf" font-size="12">VALORI</text><text x="495" y="495" text-anchor="middle" fill="#b2becf" font-size="12">RUOLI</text><text x="920" y="495" text-anchor="middle" fill="#b2becf" font-size="12">INTERFACCIA</text><path d="M285 270h48m-12-12 12 12-12 12M620 270h42m-12-12 12 12-12 12" stroke="#8b98ac" stroke-width="2" fill="none"/>`;
  }
  function renderTokens(p) {
    const mobile=innerWidth<=600;
    const organize=smooth((p-.1)/.27);
    const build=smooth((p-.43)/.52);
    if(mobile){const zoom=smooth((p-.5)/.45);svg.setAttribute('viewBox',`0 ${355*zoom} 620 ${880-400*zoom}`);}
    groups.board.style.opacity=.12+.88*build;
    groups.annotations.style.opacity=1-smooth((p-.65)/.3);
    if(!mobile){const camera=smooth((p-.6)/.35);svg.setAttribute('viewBox',`${580*camera} ${40*camera} ${1200-580*camera} ${560-110*camera}`);}
    tokenPieces.forEach((b,i)=>{
      const t=smooth((p-.4-i*.018)/.44);
      const midX=lerp(b.source.x,b.middle.x,organize);
      const midY=lerp(b.source.y,b.middle.y,organize);
      const x=lerp(midX,b.end.x,t),y=lerp(midY,b.end.y,t)-Math.sin(t*Math.PI)*35;
      b.g.setAttribute('transform',`translate(${x} ${y})`);
      const block=b.g.querySelector('.token-block');
      block.setAttribute('opacity',organize);
      block.setAttribute('transform',`scale(${lerp(.23,b.factor,t)})`);
      b.g.querySelector('.block-details').setAttribute('opacity',smooth((t-.4)/.55));
      const icon=b.g.querySelector('.token-symbol');
      icon.setAttribute('transform',`translate(${lerp(0,b.w*b.factor-21,t)} ${lerp(0,-10,t)}) scale(${lerp(1,.38,t)})`);
      b.g.querySelector('.token-label').setAttribute('opacity',1-smooth(t/.45));
      b.g.querySelector('.token-label text').setAttribute('opacity',organize);
    });
  }
  function setup() {
    if(tokens){setupTokens();update();return;}
    const mobile = innerWidth <= 600;
    layout = mobile ? { dx:75,dy:37,bx:20,by:475,bw:540,bh:465 } : { dx:70,dy:130,bx:625,by:70,bw:540,bh:465 };
    const {dx,dy,bx,by,bw,bh} = layout;
    svg.setAttribute('viewBox', mobile ? '0 0 580 995' : '0 0 1200 610');
    groups.device.innerHTML = `<g filter="url(#device-shadow)"><rect x="${dx-12}" y="${dy-15}" width="430" height="365" rx="24" fill="#20314e"/><rect x="${dx-7}" y="${dy-10}" width="420" height="355" rx="20" fill="#344663"/><rect x="${dx}" y="${dy}" width="406" height="334" rx="15" fill="url(#screen-fill)"/><circle cx="${dx+203}" cy="${dy-6}" r="2" fill="#75849d"/></g><text x="${dx+28}" y="${dy+25}" fill="#214478" font-size="15" font-weight="700">altrove<tspan font-size="16" fill="#5e88cb"> ✳</tspan></text><text x="${dx}" y="${dy+382}" class="mono" font-size="10" fill="#667b9a">IL PRODOTTO / 01</text><text x="${dx}" y="${dy+400}" font-size="11" fill="#8793a5">Un’interfaccia da esplorare.</text>`;
    groups.board.innerHTML = `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="12" fill="#fbfcfe" stroke="#b8c8df"/><rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="12" fill="url(#dots)"/><path d="M${bx} ${by+49}h${bw}" stroke="#dce3ee"/><circle cx="${bx+22}" cy="${by+25}" r="4" fill="#245bcd"/><text x="${bx+36}" y="${by+29}" font-size="12" fill="#28466f">Interface inventory</text><text id="item-count" x="${bx+bw-18}" y="${by+29}" font-size="10" fill="#6e829e" text-anchor="end">0 / 9 ELEMENTI</text>`;
    ['AZIONI','CONTROLLI','CONTENUTI'].forEach((title,col) => {
      groups.board.innerHTML += `<rect x="${bx+14+col*174}" y="${by+68}" width="164" height="${bh-84}" rx="6" fill="${['#eef3fd','#eef3f1','#f5f1e9'][col]}" fill-opacity=".85"/><text class="category" x="${bx+27+col*174}" y="${by+91}">${title}</text><text x="${bx+27+col*174}" y="${by+111}" font-size="9" fill="#8b99ab">${['Guidano l’interazione','Raccolgono le scelte','Danno informazioni'][col]}</text>`;
    });
    groups.ghosts.innerHTML = ''; groups.pieces.innerHTML = ''; groups.paths.innerHTML = '';
    pieces.forEach((p,i) => {
      p.sx=dx+p.x; p.sy=dy+p.y;
      p.scale=Math.min(1,138/p.w,84/p.h);
      p.tx=bx+27+p.col*174; p.ty=by+140+p.row*102;
      const node=document.createElementNS(ns,'g'); node.classList.add('piece'); node.innerHTML=p.html;
      groups.pieces.appendChild(node); p.node=node;
      groups.ghosts.innerHTML += `<rect x="${p.sx}" y="${p.sy}" width="${p.w}" height="${p.h}" rx="6" fill="none" stroke="#8aa5cd" stroke-dasharray="4 5" opacity=".5"/>`;
      groups.paths.innerHTML += `<path d="M${p.sx+p.w/2} ${p.sy+p.h/2}Q${(p.sx+p.tx)/2} ${Math.min(p.sy,p.ty)-90} ${p.tx+p.w*p.scale/2} ${p.ty+p.h*p.scale/2}"/>`;
    });
    groups.annotations.innerHTML = `<g id="selection"><rect x="${dx+17}" y="${dy+38}" width="368" height="283" rx="3" fill="none" stroke="#376dda" stroke-dasharray="5 5"/>${[[17,38],[385,38],[17,321],[385,321]].map(([x,y])=>`<rect x="${dx+x-3}" y="${dy+y-3}" width="6" height="6" fill="white" stroke="#376dda"/>`).join('')}</g>`;
    update();
  }
  function progress() {
    if (reduced.matches) return 1;
    const top = parseFloat(getComputedStyle(scene).top) || 0;
    return clamp((top-journey.getBoundingClientRect().top)/(journey.offsetHeight-scene.offsetHeight));
  }
  function update() {
    framePending=false;
    const p=progress();
    if(tokens){renderTokens(p);renderPhase(p);return;}
    // On a phone, follow the extracted elements and finish closer to the canvas.
    if(innerWidth<=600){
      const camera=smooth((p-.5)/.45);
      svg.setAttribute('viewBox',`0 ${420*camera} 580 ${995-420*camera}`);
    }
    groups.board.style.opacity = lerp(.3,1,smooth(p/.48));
    const deviceVisibility=innerWidth<=600 ? 1-smooth((p-.65)/.25) : 1;
    groups.device.style.opacity = lerp(1,.42,smooth((p-.45)/.5))*deviceVisibility;
    groups.ghosts.style.opacity=smooth(p/.3)*deviceVisibility;
    groups.paths.style.opacity=Math.sin(clamp((p-.15)/.7)*Math.PI)*.36;
    document.getElementById('selection').style.opacity = Math.sin(clamp(p/.55)*Math.PI);
    let settled=0;
    pieces.forEach((piece,i)=>{
      const t=smooth((p-.13-i*.026)/.48);
      const arc=Math.sin(t*Math.PI);
      const x=lerp(piece.sx,piece.tx,t);
      const y=lerp(piece.sy,piece.ty,t)-arc*(innerWidth<=600?35:65+i%3*18);
      const scale=lerp(1,piece.scale,t)+arc*.06;
      const rotation=arc*(i%2?5:-5);
      piece.node.setAttribute('transform',`translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${rotation.toFixed(2)} ${piece.w*scale/2} ${piece.h*scale/2}) scale(${scale.toFixed(4)})`);
      piece.node.style.filter = t>.01 && t<.99 ? 'url(#lift)' : '';
      if(t>.99) settled++;
    });
    document.getElementById('item-count').textContent=`${settled} / 9 ELEMENTI`;
    renderPhase(p);
  }
  function renderPhase(p) {
    document.getElementById('progress-fill').style.transform=`scaleX(${p})`;
    const phase=tokens ? (p<.18?0:p<.5?1:2) : (p<.18?0:p<.79?1:2);
    if(phase!==activePhase){
      activePhase=phase;
      document.getElementById('phase-title').textContent=config.titles[phase];
      document.getElementById('phase-number').textContent=`0${phase+1} / 03`;
      document.getElementById('phase-text').textContent=(tokens ? ['Valori distinti, ancora senza una relazione.','Ogni token esprime una decisione di design.','Le decisioni diventano un’interfaccia coerente.'] : ['Un prodotto, tanti elementi da riconoscere.','Isola gli elementi. Fai emergere le relazioni.','Nove elementi. Tre categorie. Una visione comune.'])[phase];
      document.querySelectorAll('.phase-links [data-step]').forEach(a=>{
        if(Number(a.dataset.step)===phase) a.setAttribute('aria-current','location');
        else a.removeAttribute('aria-current');
      });
    }
  }
  function goToStep(step, smoothScroll=true) {
    const top=journey.getBoundingClientRect().top+scrollY;
    const offset=parseFloat(getComputedStyle(scene).top)||0;
    const travel=Math.max(0,journey.offsetHeight-scene.offsetHeight);
    scrollTo({top:top-offset+travel*(tokens ? [0,.3,.98] : [0,.47,.94])[step],behavior:reduced.matches||!smoothScroll?'instant':'smooth'});
  }
  document.querySelectorAll('[data-step]').forEach(a=>a.addEventListener('click',e=>{
    e.preventDefault(); history.pushState(null,'',a.getAttribute('href'));goToStep(Number(a.dataset.step));
  }));
  function handleHash(){const step=config.ids.map(id=>'#'+id).indexOf(location.hash);if(step!==-1)goToStep(step,false);}
  addEventListener('scroll',()=>{if(!framePending){framePending=true;requestAnimationFrame(update);}},{passive:true});
  let resizeWidth=innerWidth;
  addEventListener('resize',()=>{if(innerWidth!==resizeWidth){resizeWidth=innerWidth;setup();}else update();});
  addEventListener('hashchange',handleHash);
  // Restore the requested phase after the browser has finished initial layout.
  addEventListener('load',()=>requestAnimationFrame(handleHash),{once:true});
  reduced.addEventListener('change',setup);
  setup(); handleHash();
})();
