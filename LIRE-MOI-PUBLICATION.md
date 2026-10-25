# OpenLara — version web 6, bouton adaptatif

Préparée le 25 octobre 2026 pour remplacer la présentation du site existant. Voir `BOUTON-ADAPTATIF-V6.md`, `LOGO-MENU-V5.md`, `MENU-INTERIEUR-V4.md` puis `ADAPTATION-ARCADE.md` pour les changements et tests. Le binaire du moteur, les niveaux, les commandes et l'audio sont conservés. Le pont JavaScript observe la lecture des niveaux pour afficher le logo uniquement sur l'écran titre.

## Mise à jour manuelle

Les fichiers sont préparés dans le dossier local `openlara/` du projet portable. Dans GitHub Desktop : sélectionner **openlara**, saisir le résumé **Cale le bouton dans le coin pendant le jeu**, cliquer **Commit to main**, puis **Push origin**. Les réglages GitHub Pages existants n'ont pas besoin d'être changés. Codex n'effectue ni connexion, ni commit, ni envoi pour cette version.

Après le déploiement, recharger https://origamidesign.github.io/openlara/ avec Ctrl+F5 dans un navigateur classique. Recharger également le média de la borne. Tester les commandes et la lisibilité depuis Second Life : le fonctionnement de cette nouvelle présentation sur la borne n'est pas encore confirmé.

Pour restaurer cette version : copier tout le contenu du présent dossier à la racine du dépôt du jeu, `.nojekyll` compris. Ne pas envoyer le ZIP à la place des fichiers extraits, ni les archives sources. Ne pas utiliser Git LFS pour les fichiers du site.

## Utilisation

Le jeu occupe la plus grande surface possible sans recadrage ni déformation. Les bandes noires nécessaires au maintien des proportions sont conservées. Le bouton ☰ en haut à droite de la zone centrale de l'image ouvre le choix de niveau ; choisir puis cliquer sur **Jouer à ce niveau**. Le panneau se ferme et rend le clavier au jeu. Les commandes se règlent dans le jeu.

Le bouton Plein écran est facultatif et peut être indisponible dans le navigateur média de Second Life. La page s'adapte déjà à la surface du média sans l'utiliser. Les sauvegardes du moteur restent locales au navigateur, sans synchronisation de compte.

## Contenu et provenance

- 16 niveaux sélectionnables de TR1 (maison et 15 principaux), quatre fichiers PSX de cinématiques ; TR2 à TR5 et Unfinished Business non inclus.
- Moteur officiel précompilé annonçant OpenLara (Aug 13 2022), téléchargé depuis http://xproger.info/projects/OpenLara/ ; projet https://github.com/XProger/OpenLara ; licence dans `LICENSE-OpenLara.txt`. Pas de compilation locale. HTTP a été utilisé après un échec TLS sur le serveur officiel HTTPS.
- Niveaux extraits de l'archive fournie `Tomb-Raider-1-2-3-4-5-Map-viewer-and-levels-master.zip`. Les notices consultées n'identifient pas de licence de redistribution des niveaux ; la licence BSD concerne le moteur.
- Images de chargement, musiques et voix FR/EN de la démo officielle, embarquées localement. Autres langues audio non incluses.
- Site statique, sans PHP ni Google Analytics. Aucun appel au serveur officiel nécessaire à l'exécution du jeu. Hébergement HTTP(S), navigateur avec WebGL et stockage navigateur requis. Le double clic sur `index.html` en `file://` ne remplace pas un hébergement.

Les archives et outils de préparation restent dans le projet portable, hors du dépôt du jeu. Aucune installation supplémentaire nécessaire pour publier. `SHA256.txt` décrit cette version. Contrôles dans un navigateur de bureau, sans validation de la borne Second Life ni test complet de progression, des pistes audio ou des sauvegardes.

