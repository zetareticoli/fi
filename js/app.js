// assets/js/app.js
(function() {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = stored ? stored === 'dark' : prefersDark;
  document.documentElement.classList.toggle('dark', isDark);

  function toggle() {
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  function loadVideo(video) {
    if (video.dataset.loaded === 'true') return;
    video.querySelectorAll('source[data-src]').forEach(function(source) {
      source.src = source.dataset.src;
      source.removeAttribute('data-src');
    });
    video.load();
    video.dataset.loaded = 'true';
  }

  function initializeDeferredVideos() {
    const videos = document.querySelectorAll('video[data-autoplay-video]');
    if (!videos.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    if (!('IntersectionObserver' in window)) {
      videos.forEach(function(video) {
        loadVideo(video);
        video.play().catch(function() {});
      });
      return;
    }

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        const video = entry.target;
        if (entry.isIntersecting) {
          loadVideo(video);
          video.play().catch(function() {});
        } else {
          video.pause();
        }
      });
    }, { rootMargin: '200px 0px', threshold: 0.01 });

    videos.forEach(function(video) { observer.observe(video); });
  }

  document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    btns.forEach(function(btn) { btn.addEventListener('click', toggle); });

    document.querySelectorAll('.animate-in').forEach(function(el) {
      el.classList.add('is-visible');
    });

    initializeDeferredVideos();

    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
    }
  });
})();
