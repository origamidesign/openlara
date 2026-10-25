# Correctif du menu — v2, 25 octobre 2026

Le moteur interceptait les clics et touches de la page en phase de capture et annulait le comportement natif du sélecteur de niveaux. Les événements provenant des commandes de la page (en-tête, bouton plein écran, liens de crédits) sont maintenant exclus des callbacks du moteur. Les événements du canvas restent transmis au jeu.

Le moteur JavaScript porte un paramètre de version dans la page pour éviter de réutiliser sa version précédente en cache. Choisir un niveau puis cliquer sur « Jouer à ce niveau ».

Le reste du contenu vient de la version v1. Cette note remplace son numéro de version pour ce correctif ; les archives v1 sont conservées intactes.
