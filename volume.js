'use strict';
(function () {
  const slider = document.getElementById('masterVolume');
  const output = document.getElementById('volumeValue');
  const storageKey = 'origamidesign.openlara.masterVolume';
  let percent = 100;
  let gain = null;
  let context = null;
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null && saved.trim() !== '' && Number.isFinite(Number(saved))) {
      percent = Math.max(0, Math.min(100, Number(saved)));
    }
  } catch (_) { /* The control still works if browser storage is unavailable. */ }
  function showValue() {
    slider.value = percent;
    output.value = percent + ' %';
    slider.setAttribute('aria-valuetext', percent === 0 ? 'Son coupé' : percent + ' %');
  }
  showValue();
  slider.addEventListener('input', function () {
    percent = Math.max(0, Math.min(100, Number(slider.value)));
    showValue();
    if (gain && context) {
      const now = context.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(percent / 100, now + 0.02);
    }
    if (typeof userAction === 'function') userAction();
    try { localStorage.setItem(storageKey, String(percent)); } catch (_) {}
  });
  window.arcadeAudio = {
    connect: function (source, audioContext) {
      context = audioContext;
      gain = context.createGain();
      gain.gain.value = percent / 100;
      source.connect(gain);
      gain.connect(context.destination);
    }
  };
})();
