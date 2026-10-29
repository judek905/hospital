(() => {
  const root = document.documentElement;
  const themeBtn = document.querySelector('.theme-btn');
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.getElementById('site-nav');

  // Dark mode: remembered between visits (initial value is set in <head>)
  const setTheme = (theme) => {
    root.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch (e) {}
    if (themeBtn) {
      themeBtn.setAttribute('aria-pressed', theme === 'dark');
      themeBtn.firstElementChild.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  };
  setTheme(root.dataset.theme || 'light');
  if (themeBtn) {
    themeBtn.addEventListener('click', () =>
      setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  }

  // Mobile menu
  const closeMenu = () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  };
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menuBtn.focus(); }
    });
  }

  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
