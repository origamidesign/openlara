# Affichage arcade — version 3, 25 octobre 2026

Le canvas du jeu est centré et agrandi au maximum dans la surface du navigateur en conservant son rapport original 854:480 (environ 16:9). L'image entière est gardée, y compris les indications dessinées dans ses zones noires, comme « ENTER — Choisir ». Les marges de la page, les bandeaux fixes et le défilement sont supprimés. Si la surface a d'autres proportions, des bandes noires restent nécessaires.

Un bouton ☰ de 34 pixels dans le coin supérieur droit ouvre un panneau flottant contenant la liste des niveaux, Jouer, le plein écran et le crédit du moteur. Le panneau ne réduit pas l'image du jeu. Il se ferme avec ×, avec Échap depuis le panneau, en cliquant dans le jeu ou après le lancement d'un niveau. Le menu, les niveaux et le moteur conservent leurs langues précédentes.

Le bouton Plein écran utilise le navigateur sur la page entière, pour garder le menu accessible et conserver le ratio. Sur une borne Second Life, la page occupe déjà toute la surface média disponible : ce bouton n'est pas indispensable et dépend de l'autorisation du navigateur intégré.

Le moteur, ses fichiers binaires, les niveaux, les commandes et l'audio ne sont pas modifiés. Le correctif du menu v2 est conservé. Les nouveaux fichiers de présentation sont `arcade.css` et `arcade.js`; `index.html` et `lanceur.js` sont adaptés, avec des paramètres de version pour leur cache.

Contrôles locaux : démarrage, menu ouvert et choix de la maison à la souris, lancement et fermeture automatique du panneau, focus rendu au canvas ; écran titre inspecté en surfaces 960×540, 800×600 et 480×640, avec le texte ENTER entièrement visible. Une vue de jeu en 1280×720 a également été inspectée. Pas de défilement sur la page directe ; ratio préservé à l'arrondi de rendu près. Validation dans Second Life encore à effectuer par l'utilisateur. Pas de nouveau test exhaustif des 16 niveaux ni de la progression.

Cette version est préparée localement. Aucune connexion ni publication GitHub n'est effectuée par Codex. Les versions v1 et v2 restent archivées dans le projet portable.
