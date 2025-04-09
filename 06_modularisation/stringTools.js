/**
 * ##  ESM
Crée un fichier `stringTools.js` avec deux fonctions :
- `capitalize(str)` (première lettre en majuscule)
- `reverse(str)` (inverse la chaîne)
**/

// Fonction pour mettre la première lettre d'une chaîne en majuscule
export function capitalize(str) {
    if (typeof str !== 'string') return ''; // vérifie que l'entrée est une chaîne
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Fonction pour inverser une chaîne
export function reverse(str) {
    if (typeof str !== 'string') return ''; // vérifie que l'entrée est une chaîne
    return str.split('').reverse().join('');
}

