(() => {
  'use strict';
  const svg = document.querySelector('#inventory-scene');
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
  function setup() {
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
    document.getElementById('progress-fill').style.transform=`scaleX(${p})`;
    const phase=p<.18?0:p<.79?1:2;
    if(phase!==activePhase){
      activePhase=phase;
      document.getElementById('phase-number').textContent=`0${phase+1} / 03`;
      document.getElementById('phase-text').textContent=['Un prodotto, tanti elementi da riconoscere.','Isola gli elementi. Fai emergere le relazioni.','Nove elementi. Tre categorie. Una visione comune.'][phase];
      document.getElementById('scroll-label').textContent=['SCORRI PER SCOMPORRE','CONTINUA A ESPLORARE','IL SISTEMA PRENDE FORMA'][phase];
      document.querySelectorAll('.masthead [data-step]').forEach(a=>{
        if(Number(a.dataset.step)===phase) a.setAttribute('aria-current','location');
        else a.removeAttribute('aria-current');
      });
    }
  }
  function goToStep(step, smoothScroll=true) {
    const top=journey.getBoundingClientRect().top+scrollY;
    const offset=parseFloat(getComputedStyle(scene).top)||0;
    const travel=Math.max(0,journey.offsetHeight-scene.offsetHeight);
    scrollTo({top:top-offset+travel*[0,.47,.94][step],behavior:reduced.matches||!smoothScroll?'instant':'smooth'});
  }
  document.querySelectorAll('[data-step]').forEach(a=>a.addEventListener('click',e=>{
    e.preventDefault(); history.pushState(null,'',a.getAttribute('href'));goToStep(Number(a.dataset.step));
  }));
  function handleHash(){const step=['#osserva','#scomponi','#riordina'].indexOf(location.hash);if(step!==-1)goToStep(step,false);}
  addEventListener('scroll',()=>{if(!framePending){framePending=true;requestAnimationFrame(update);}},{passive:true});
  let resizeWidth=innerWidth;
  addEventListener('resize',()=>{if(innerWidth!==resizeWidth){resizeWidth=innerWidth;setup();}else update();});
  addEventListener('hashchange',handleHash);
  // Restore the requested phase after the browser has finished initial layout.
  addEventListener('load',()=>requestAnimationFrame(handleHash),{once:true});
  reduced.addEventListener('change',setup);
  setup(); handleHash();
})();
