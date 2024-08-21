# Les petits plats 🍽️

## Description du projet

"Les petits plats" est une application web de recherche de recettes de cuisine, développée pour offrir une expérience utilisateur fluide et performante. Ce projet met l'accent sur un moteur de recherche rapide et efficace, permettant aux utilisateurs de trouver facilement des recettes en fonction de divers critères.

## Fonctionnalités principales 🚀

- **Recherche principale** : Recherche rapide par mots-clés dans les titres, ingrédients et descriptions des recettes.
- **Filtrage avancé** : Utilisation de tags pour filtrer par ingrédients, appareils et ustensiles.
- **Interface responsive** : Design adaptatif pour une expérience optimale sur tous les appareils.
- **Performance optimisée** : Algorithmes de recherche conçus pour une rapidité maximale.

## Technologies utilisées 💻

- HTML5
- CSS3
- JavaScript
- Git pour le contrôle de version

## Structure du projet 📁

```plaintext
PETITSPLATS2.0/
│
├── assets/
├── data/
│   └── recipes.js
├── docs/
├── images/
├── node_modules/
├── scripts/
│   ├── pages/
│   │   ├── index.js
│   │   ├── search.js
│   │   └── tag.js
│   └── templates/
│       └── recipe.js
├── .gitignore
├── eslint.config.js
├── index.html
├── README.md
├── styles.css
└── tag.css
```

## Installation et lancement 🚀

1. Clonez le repository : https://github.com/KevinDallancon/PetitsPlats2.0.git
2. Se déplacer dans le dossier du repo avec la commande suivante : cd PetitsPlats2.0
3. Lancer le "go live"

## Performance ⚡
Le moteur de recherche a été implémenté avec deux approches différentes pour comparer les performances :

Branche NATIVE **Approche avec boucles natives** : Utilisation de boucles `for` et `while`.
Branche MAIN. **Approche fonctionnelle** : Utilisation de méthodes comme `filter`, `map`, et `reduce`.

Les performances de ces deux approches ont été comparées pour choisir la plus efficace.

## Sécurité 🔒

Une attention particulière a été portée à la sécurité, notamment :

- Utilisation de `textContent` au lieu de `innerHTML` pour prévenir les injections XSS.
- Validation et assainissement des entrées utilisateur.
