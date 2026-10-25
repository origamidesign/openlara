# Volume général dans le menu ☰ — version 9, 25 octobre 2026

Curseur Volume de 0 à 100 % dans le panneau des niveaux. 0 coupe le son ; 100 conserve le niveau sonore initial du jeu. Il agit sur l'ensemble du son produit par le moteur (musiques, voix, bruitages), après les réglages internes du jeu. Pas d'amplification au-delà du niveau initial. Modifier le curseur ne recharge pas le niveau et ne ferme pas le panneau.

Le mixage du moteur traverse un GainNode Web Audio avant la sortie, avec un changement progressif sur 20 ms. Le pourcentage est mémorisé dans le stockage local du navigateur et restauré au prochain lancement. Il ne se synchronise pas entre utilisateurs ou navigateurs. Si le stockage est indisponible, le contrôle fonctionne quand même pendant la session. Un navigateur qui bloque le son jusqu'à une interaction peut nécessiter un clic.

Format 4:3, logo du menu et commandes du jeu conservés. Le moteur compilé, ses niveaux et l'audio source ne changent pas ; seule la sortie audio de la page est réglable. Préparation locale et publication manuelle dans GitHub Desktop. Niveau sonore réel et interaction sur la borne Second Life à vérifier après mise à jour.
