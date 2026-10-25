'use strict';
(function () {
  const canvas = document.getElementById('canvas');
  const toggle = document.getElementById('menuToggle');
  const panel = document.getElementById('arcadeMenu');
  function fitCanvas() {
    const width = Math.max(1, window.innerWidth);
    const height = Math.max(1, window.innerHeight);
    const scale = Math.min(width / 854, height / 480);
    canvas.style.width = (854 * scale) + 'px';
    canvas.style.height = (480 * scale) + 'px';
  }
  // Register before the engine so it reads the fitted CSS size on resize.
  fitCanvas();
  window.addEventListener('resize', fitCanvas, true);
  document.addEventListener('fullscreenchange', fitCanvas);
  function closeMenu() {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu des niveaux');
    canvas.focus({preventScroll:true});
  }
  toggle.addEventListener('click', function () {
    if (!panel.hidden) { closeMenu(); return; }
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fermer le menu des niveaux');
    document.getElementById('levelSelect').focus({preventScroll:true});
  });
  document.getElementById('menuClose').addEventListener('click', closeMenu);
  document.querySelector('header').addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !panel.hidden) {
      event.preventDefault();
      closeMenu();
    }
  });
  canvas.addEventListener('pointerdown', function () {
    if (!panel.hidden) closeMenu();
    else canvas.focus({preventScroll:true});
  });
  window.arcadeMenu = {close:closeMenu};
})();
