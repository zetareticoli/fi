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

  document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    btns.forEach(function(btn) { btn.addEventListener('click', toggle); });

    document.querySelectorAll('.animate-in').forEach(function(el) {
      el.classList.add('is-visible');
    });

    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
    }
  });
})();