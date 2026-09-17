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
  let tokenHeadings = [];
  function setupTokens() {
    const mobile = innerWidth <= 600;
    svg.setAttribute('viewBox', mobile ? '0 0 660 880' : '0 0 1200 560');
    Object.values(groups).forEach(group => { group.innerHTML = ''; });
    const target = mobile ? { x:105, y:360 } : { x:375, y:100 };
    const blocks = [
      {x:0,y:0,w:450,h:40,global:'color.slate.500',semantic:'color.surface',component:'header.background',value:'#657487',color:'#657487'},
      {x:0,y:57,w:255,h:33,global:'font.size.24',semantic:'font.heading',component:'title.fontSize',value:'24 px',color:'#8994a5'},
      {x:273,y:57,w:177,h:90,global:'radius.12',semantic:'radius.container',component:'card.borderRadius',value:'12 px',color:'#bec5cf'},
      {x:0,y:107,w:255,h:190,global:'color.amber.300',semantic:'color.brand',component:'cover.background',value:'#E7AD45',color:'#e7ad45'},
      {x:273,y:164,w:177,h:75,global:'space.16',semantic:'space.content',component:'card.padding',value:'16 px',color:'#8795a8'},
      {x:273,y:257,w:177,h:40,global:'color.amber.500',semantic:'color.action',component:'button.background',value:'#F4A900',color:'#f4a900'}
    ];
    // Three explicit reference levels: primitive → semantic alias → component.
    const position = (level, row) => mobile
      ? {x:25+(row%2)*320, y:80+level*285+Math.floor(row/2)*70}
      : {x:45+level*390, y:100+row*65};
    const pillWidth = mobile ? 290 : 330;
    const titles = ['01  GLOBALI', '02  SEMANTICI', '03  COMPONENTI'];
    const subtitles = ['Il valore di base', 'L’intenzione di design', 'Il punto di applicazione'];
    let architecture = `<defs><linearGradient id="token-surface" x2="0" y2="1"><stop stop-color="#ffffff"/><stop offset="1" stop-color="#f6f5f2"/></linearGradient><filter id="token-shadow" x="-15%" y="-35%" width="130%" height="190%"><feDropShadow dy="2" stdDeviation="2" flood-color="#263347" flood-opacity=".06"/></filter><filter id="product-shadow" x="-25%" y="-25%" width="150%" height="170%"><feDropShadow dy="12" stdDeviation="16" flood-color="#263347" flood-opacity=".10"/></filter></defs>`;
    for (let level=0; level<3; level++) {
      const heading = mobile ? {x:25,y:45+level*285} : {x:45+level*390,y:48};
      architecture += `<g data-token-heading="${level}"><text x="${heading.x}" y="${heading.y}" font-size="${mobile?24:15}" font-weight="600" fill="#86550e">${titles[level]}</text><text x="${heading.x}" y="${heading.y+22}" font-size="${mobile?18:12}" fill="#697587">${subtitles[level]}</text></g>`;
      blocks.forEach((b,i) => {
        const point = position(level,i);
        const name = [b.global,b.semantic,b.component][level];
        const reference = [b.value,`{${b.global}}`,`{${b.semantic}}`][level];
        if(level>0) architecture += `<g data-token-level="${level}" data-token-row="${i}"><rect width="${pillWidth}" height="58" rx="29" fill="url(#token-surface)" stroke="#d6d5d1" filter="url(#token-shadow)"/><rect x="1.5" y="1.5" width="${pillWidth-3}" height="55" rx="27.5" fill="none" stroke="#fff" stroke-opacity=".8"/><text x="22" y="25" font-size="${mobile?22:16}" fill="#263347">${name}</text><text x="22" y="43" font-size="${mobile?17:12}" fill="#7c8390">${reference}</text></g>`;
      });
    }
    groups.board.innerHTML = architecture;
    tokenHeadings = [...groups.board.querySelectorAll('[data-token-heading]')];
    groups.device.innerHTML = `<rect x="${target.x-14}" y="${target.y-35}" width="478" height="382" rx="18" fill="url(#token-surface)" stroke="#c6cdd5" filter="url(#product-shadow)"/><circle cx="${target.x+2}" cy="${target.y-18}" r="3" fill="#b6bdc7"/><circle cx="${target.x+14}" cy="${target.y-18}" r="3" fill="#b6bdc7"/><circle cx="${target.x+26}" cy="${target.y-18}" r="3" fill="#b6bdc7"/><text x="${target.x+48}" y="${target.y-14}" font-size="11" fill="#697587">Un sistema di decisioni, un’interfaccia.</text>`;
    tokenPieces = blocks.map((b,i) => {
      const source = mobile ? {x:90+(i%2)*270,y:230+Math.floor(i/2)*125+(i%2)*22}
        : {x:210+(i%3)*290+(i%2)*15,y:160+Math.floor(i/3)*150+(i%3)*18};
      const start = position(0,i), component = position(2,i);
      const end = {x:target.x+b.x+b.w-16,y:target.y+b.y-9};
      const preview = b.value.startsWith('#')
        ? `<circle cx="30" cy="29" r="15" fill="${b.value}" stroke="#000" stroke-opacity=".08"/>`
        : i===1 ? '<text x="15" y="36" font-family="Georgia,serif" font-size="25" fill="#53657d">Aa</text>'
          : i===2 ? '<rect x="16" y="15" width="28" height="28" rx="10" fill="none" stroke="#9b712f" stroke-width="2"/>'
            : '<path d="M16 17v24m28-24v24M16 29h28m-5-4 5 4-5 4m-18-8-5 4 5 4" fill="none" stroke="#9b712f" stroke-width="2"/>';
      const raw = document.createElementNS(ns,'g');
      raw.innerHTML = `<rect width="205" height="58" rx="29" fill="url(#token-surface)" stroke="#d6d5d1" filter="url(#token-shadow)"/><g data-preview>${preview}</g><text data-raw-value x="59" y="35" font-size="${mobile?24:18}" fill="#344156" font-family="monospace">${b.value}</text><g data-global-label opacity="0"><text x="59" y="25" font-size="${mobile?22:16}" fill="#263347">${b.global}</text><text x="59" y="43" font-size="${mobile?17:12}" fill="#7c8390">${b.value}</text></g>`;
      groups.pieces.appendChild(raw);
      const icon = document.createElementNS(ns,'g');
      icon.innerHTML = '<path d="M30 0 56 15v30L30 60 4 45V15Z" fill="#F4A900"/><path d="M30 9 48 19v22L30 51 12 41V19Z M12 19l18 11 18-11 M30 30v21" stroke="white" stroke-width="2" stroke-linejoin="round" fill="none"/><circle cx="30" cy="29" r="6" fill="#F4A900" stroke="white" stroke-width="2"/>';
      groups.annotations.appendChild(icon);
      let detail = '';
      if(i===0) detail='<circle cx="22" cy="20" r="7" fill="#f4a900"/><path d="M44 16h65m-65 8h40M320 20h24m20 0h24" stroke="#cdd4df" stroke-width="3" stroke-linecap="round"/>';
      if(i===1) detail='<text x="14" y="24" font-size="24" font-weight="600" fill="#fff">Il tuo progetto.</text>';
      if(i===3) detail='<circle cx="193" cy="42" r="19" fill="#fff" opacity=".65"/><path d="M0 190 82 61l79 98 35-41 59 72" fill="#a76b21"/><path d="M0 190 62 122l55 68" fill="#835522"/>';
      if(i===2||i===4) detail='<path d="M16 20h95m-95 12h125m-125 12h74" stroke="#e9edf4" stroke-width="4" stroke-linecap="round" opacity=".8"/>';
      if(i===5) detail='<text x="88" y="25" font-size="12" text-anchor="middle" fill="#263347">Inizia il progetto ↗</text>';
      const ui = document.createElementNS(ns,'g');
      ui.innerHTML=`<rect width="${b.w}" height="${b.h}" rx="${i===2?12:8}" fill="${b.color}"/>${detail}`;
      ui.setAttribute('transform',`translate(${target.x+b.x} ${target.y+b.y})`);
      groups.device.appendChild(ui);
      return {...b,source,start,component,end,raw,icon,ui,pillWidth,
        rawRect:raw.querySelector('rect'), rawValue:raw.querySelector('[data-raw-value]'), globalLabel:raw.querySelector('[data-global-label]'),
        levels:[1,2].map(level=>({node:groups.board.querySelector(`[data-token-level="${level}"][data-token-row="${i}"]`),point:position(level,i)}))};
    });
  }
  function renderTokens(p) {
    const mobile = innerWidth<=600;
    // Overlapping, staggered intervals keep identity visible throughout the journey.
    const camera = smooth((p-.82)/.18);
    svg.setAttribute('viewBox',mobile
      ? `0 ${290*camera} 660 ${880-380*camera}`
      : `${235*camera} ${25*camera} ${1200-470*camera} ${560-95*camera}`);
    groups.board.style.opacity = 1;
    groups.annotations.style.opacity = 1;
    groups.device.style.opacity = smooth((p-.77)/.14);
    groups.device.setAttribute('transform',`translate(0 ${24*(1-smooth((p-.77)/.17))})`);
    tokenHeadings.forEach((heading,level)=> {
      const enter=smooth((p-[.10,.29,.45][level])/.08);
      const leave=smooth((p-.76-level*.025)/.15);
      heading.setAttribute('opacity',enter*(1-leave));
      heading.setAttribute('transform',`translate(0 ${12*(1-enter)-35*leave})`);
    });
    tokenPieces.forEach((b,i) => {
      const organize=smooth((p-.07-i*.015)/.20);
      const name=smooth((p-.17-i*.015)/.12);
      const leave=smooth((p-.75-i*.009)/.15);
      b.raw.setAttribute('transform',`translate(${lerp(b.source.x,b.start.x,organize)} ${lerp(b.source.y,b.start.y,organize)-55*leave})`);
      b.raw.setAttribute('opacity',1-leave);
      b.rawRect.setAttribute('width',lerp(205,b.pillWidth,organize));
      b.rawValue.setAttribute('opacity',1-name);
      b.globalLabel.setAttribute('opacity',name);
      b.levels.forEach(({node,point},level)=> {
        const enter=smooth((p-[.30,.47][level]-i*.018)/.10);
        const exit=smooth((p-.77-level*.025-i*.009)/.14);
        node.setAttribute('opacity',enter*(1-exit));
        node.setAttribute('transform',`translate(${point.x-22*(1-enter)} ${point.y+12*(1-enter)-55*exit})`);
      });
      // Icons first settle onto the component pills, then detach as the lists leave.
      const appear=smooth((p-.68-i*.008)/.055);
      const t=smooth((p-.79-i*.012)/.15);
      const from={x:b.component.x+b.pillWidth-22,y:b.component.y-10};
      b.icon.setAttribute('opacity',appear);
      b.icon.setAttribute('transform',`translate(${lerp(from.x,b.end.x,t)} ${lerp(from.y,b.end.y,t)-Math.sin(t*Math.PI)*45}) scale(${lerp(.54,.38,t)*lerp(.85,1,appear)})`);
      b.ui.setAttribute('opacity',lerp(.16,1,smooth((t-.1)/.8)));
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
    const phase=tokens ? (p<.25?0:p<.68?1:2) : (p<.18?0:p<.79?1:2);
    if(phase!==activePhase){
      activePhase=phase;
      document.getElementById('phase-title').textContent=config.titles[phase];
      document.getElementById('phase-number').textContent=`0${phase+1} / 03`;
      document.getElementById('phase-text').textContent=(tokens ? ['Colori, misure e forme: parti dai valori grezzi.','Globali → semantici → componenti: ogni livello fa riferimento al precedente.','I token portano le decisioni dentro l’interfaccia.'] : ['Un prodotto, tanti elementi da riconoscere.','Isola gli elementi. Fai emergere le relazioni.','Nove elementi. Tre categorie. Una visione comune.'])[phase];
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
    scrollTo({top:top-offset+travel*(tokens ? [0,.66,1] : [0,.47,.94])[step],behavior:reduced.matches||!smoothScroll?'instant':'smooth'});
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
