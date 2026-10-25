'use strict';
const select = document.getElementById('levelSelect');
const play = document.getElementById('loadLevel');
fetch('niveaux.json').then(r => { if (!r.ok) throw Error('Liste des niveaux indisponible'); return r.json(); }).then(levels => {
  for (const level of levels) select.add(new Option(level.label, level.file));
  select.value = 'LEVEL1.PSX';
}).catch(e => Module.setStatus(e.message));
play.addEventListener('click', async () => {
  play.disabled = true;
  try {
    userAction();
    Module.setStatus('Chargement du niveau…');
    const response = await fetch('level/1/' + select.value);
    if (!response.ok) throw Error('Niveau introuvable : ' + select.value);
    const bytes = new Uint8Array(await response.arrayBuffer());
    const pointer = Module._malloc(bytes.length);
    if (!pointer) throw Error('Mémoire insuffisante');
    // The native loader owns this buffer after game_level_load.
    Module.HEAPU8.set(bytes, pointer);
    Module.ccall('game_level_load', null, ['number', 'number'], [pointer, bytes.length]);
    window.arcadeMenu.close();
    Module.setStatus('');
  } catch (e) { Module.setStatus('Erreur : ' + e.message); }
  finally { play.disabled = false; }
});
