(() => {
  const links = [...document.querySelectorAll('.masthead nav a')];
  const sections = links.map(a => document.querySelector(a.hash)).filter(Boolean);
  if (!sections.length) return;
  let pending = false;
  function update() {
    pending = false;
    const offset = document.querySelector('.masthead').getBoundingClientRect().height + 80;
    let current = null;
    sections.forEach(section => { if (section.getBoundingClientRect().top <= offset) current = section.id; });
    links.forEach(link => {
      if (link.hash === '#' + current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  addEventListener('scroll', () => { if (!pending) { pending = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
})();
