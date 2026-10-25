# Logo du menu initial — version 5, 25 octobre 2026

Logo fourni : `Origami Design logo horizontal.png`, copié intact dans `assets/origami-design.png`. En bas à droite de la zone centrale 4:3 (à l'intérieur de l'image, pas des bandes noires), avec 16 pixels de marge et une largeur de 18 %, plafonnée à 170 pixels. Le PNG transparent n'est pas retouché ; son contour transparent est masqué par le conteneur CSS pour aligner le graphisme visible. Le logo ne bloque pas les clics.

Le logo est masqué par défaut. Un observateur en lecture seule du système de fichiers du runtime identifie la lecture du niveau TITLE.PSX et affiche le logo. La lecture d'un autre niveau le masque ; le lanceur manuel le masque également au chargement d'un niveau depuis le panneau. L'observation porte sur la lecture effective du fichier, y compris depuis le cache, pas sur une temporisation ou sur la seule touche Entrée. Les menus d'options de l'écran titre conservent le logo. Le menu d'inventaire pendant la partie ne doit pas l'afficher.

Seul le pont JavaScript du moteur notifie ces lectures ; le binaire du moteur, les niveaux et l'audio restent inchangés. Publication manuelle, aucun envoi ou accès GitHub par Codex. La vérification dans Second Life reste à effectuer.
