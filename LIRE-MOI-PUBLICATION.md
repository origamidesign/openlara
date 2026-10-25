# Tomb Raider 1 avec OpenLara — version web v1

Préparée le 25 octobre 2026. Ce dossier contient le site à publier : aucun compilateur ni installation supplémentaire n'est nécessaire pour l'héberger.

## Publier sur GitHub Pages

1. Créer un dépôt pour ce jeu, par exemple `openlara`. Ce nom est une proposition, aucun dépôt n'a été créé par cette préparation.
2. Copier **tout le contenu de ce dossier** dans la racine du dépôt : `index.html`, `.nojekyll`, les scripts, les données et les dossiers `level` et `audio`. Ne pas envoyer uniquement le ZIP, ni le placer à la place des fichiers extraits. Ne pas envoyer les deux grosses archives sources.
3. Enregistrer les fichiers dans le dépôt (Commit, puis Publish repository ou Push origin si GitHub Desktop est utilisé). Ne pas utiliser Git LFS pour les fichiers du site.
4. Sur GitHub : **Settings → Pages → Deploy from a branch → main → / (root) → Save**.
5. Attendre le déploiement et ouvrir l'adresse affichée par GitHub Pages.

Si le dépôt s'appelle `openlara` sur le compte `origamidesign`, l'adresse attendue serait `https://origamidesign.github.io/openlara/`. Cette adresse est un exemple : sa publication n'a pas été effectuée ni vérifiée.

Documentation officielle consultée le 25 octobre 2026 : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Jouer

Attendre le démarrage, choisir un niveau puis cliquer sur **Jouer à ce niveau**. Cliquer dans le jeu pour le clavier et le son. **Plein écran** agrandit le jeu ; Échap permet de revenir à la page. Les commandes peuvent être consultées ou modifiées dans les options du moteur. Les touches des jeux Fuckerman n'ont pas été appliquées.

16 niveaux sélectionnables de Tomb Raider 1 : les 15 niveaux principaux et la maison de Lara. Quatre fichiers de cinématiques sont aussi présents pour les transitions. Les jeux Tomb Raider 2 à 5 et Unfinished Business ne sont pas inclus dans cette version.

Ouvrir `index.html` par double clic (adresse `file://`) ne remplace pas un hébergement : utiliser GitHub Pages ou un serveur HTTP local. L'aperçu lancé par Codex est temporaire, ce n'est pas l'adresse publique.

## Provenance et dépendances

- Moteur compilé récupéré depuis la démo officielle : http://xproger.info/projects/OpenLara/ ; fichier JavaScript, fichier mémoire, données initiales, paquet moteur et worker. Le moteur se présente comme **OpenLara (Aug 13 2022)** au démarrage. Il n'a pas été recompilé localement. Le serveur HTTPS officiel a échoué lors de cette préparation ; les téléchargements ont utilisé son adresse HTTP.
- Projet moteur : https://github.com/XProger/OpenLara ; licence BSD à deux clauses conservée dans `LICENSE-OpenLara.txt`. La page a été adaptée à un hébergement statique, sans PHP ni Google Analytics.
- Niveaux PSX extraits du ZIP fourni `Tomb-Raider-1-2-3-4-5-Map-viewer-and-levels-master.zip`, dossier `Tomb-Raider-1-PSX-Files`. La licence du moteur concerne son code ; aucune autorisation de redistribution des données Tomb Raider n'a été identifiée dans les notices du ZIP.
- Images de chargement, musiques et voix françaises/anglaises récupérées dans les répertoires de la démo officielle. Les autres langues de voix ne sont pas embarquées.
- Tous les fichiers nécessaires au test sont locaux au site ; aucun chargement du moteur depuis un autre domaine n'est nécessaire à l'exécution. Connexion à l'hébergement et navigateur avec WebGL requis. Les sauvegardes du moteur utilisent le stockage du navigateur et ne sont pas synchronisées à un compte.

Les deux ZIP d'origine restent conservés à la racine du projet portable, hors de ce dossier de publication. Les scripts de préparation et journaux de test sont dans `../../travail/`.

## Validation et limites

Tests locaux sous Microsoft Edge (Chromium), le 25 octobre 2026 : démarrage, chargement des 16 niveaux sélectionnables, image modifiée après une commande de déplacement, changement de niveau et plein écran. Le test final n'a signalé aucune exception JavaScript ni réponse HTTP 404. Le journal et les captures sont conservés dans le dossier de travail.

Ce contrôle ne constitue pas une partie complète : progression entre tous les niveaux, cinématiques, combats, chaque piste audio et persistance des sauvegardes non validés exhaustivement. Aucun test dans Second Life. Aucun dépôt GitHub créé, aucun transfert ni déploiement GitHub Pages effectué pendant la préparation.
