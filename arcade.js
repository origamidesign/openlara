'use strict';
(function () {
  const canvas = document.getElementById('canvas');
  const toggle = document.getElementById('menuToggle');
  const panel = document.getElementById('arcadeMenu');
  const controls = document.querySelector('header');
  const titleLogo = document.getElementById('titleLogo');
  Module.onArcadeLevelRead = function (path) {
    if (!/\.(psx|phd|tr2|tr4)$/i.test(path)) return;
    titleLogo.hidden = !/(^|\/)TITLE\.(psx|phd|tr2|tr4)$/i.test(path);
    fitCanvas();
  };
  function fitCanvas() {
    const width = Math.max(1, window.innerWidth);
    const height = Math.max(1, window.innerHeight);
    const scale = Math.min(width / 854, height / 480);
    canvas.style.width = (854 * scale) + 'px';
    canvas.style.height = (480 * scale) + 'px';
    // Stay inside the 4:3 artwork on the title; use the full render in gameplay.
    const controlsWidth = titleLogo.hidden ? 854 * scale : Math.min(854 * scale, 480 * scale * 4 / 3);
    controls.style.width = controlsWidth + 'px';
    controls.style.height = (480 * scale) + 'px';
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
