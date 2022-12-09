// Exercices https://slides.com/matthieumota/javascript#/31

// Exercice 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];

for (let number of numbers) {
    result.push(number);

    if (number % 2 == 0) {
        result.push(number * number);
    }
}

console.log(result);

// Solution alternative
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < numbers.length; index++) {
    let number = numbers[index];

    if (number % 2 == 0) {
        numbers.splice(index++ + 1, 0, number * number);
        // index++;
    }
}

console.log(numbers);

// Exercice 2
let quantity = prompt('Combien doit-on sortir de couleurs ?');
quantity = parseInt(quantity) || 5;
let references = ['rouge', 'jaune', 'bleu']; // Tableau de référence pour aller piocher une couleur aléatoire
let colors = []; // Tableau avec les couleurs aléatoires
let quantities = []; // Quantité de chaque couleurs
let selecteds = []; // Tableau qui sert à trouver les couleurs étant apparues le plus de fois.

for (let i in references) { // Permet d'initialiser le tableau de quantités
    quantities[i] = 0; // ou quantities.push(0);
}

// Remplir le tableau avec les couleurs aléatoires
for (let i = 0; i < quantity; i++) {
    let randomIndex = Math.floor(Math.random() * references.length); // Me permet d'avoir un index aléatoire
    colors.push(references[randomIndex]);
}

// Compter les quantités de chaque couleur
for (let color of colors) {
    let index = references.indexOf(color); // Index de la couleur dans le tableau de référence
    quantities[index]++; // On incrémente la couleur
}

// Garder la première couleur la plus apparue
let max = 0;
for (let index in quantities) {
    if (quantities[index] > max && quantities[index] >= 2) {
        selecteds[0] = index;
        max = quantities[index];
    }
}

// On va chercher la 2ème couleur s'il y en a une
let max2 = 0;
for (let index in quantities) {
    if (index === selecteds[0] || quantities[index] < 2) { // Si on tombe sur une valeur déjà présente dans selected, on la passe
        continue; // On arrête l'itération actuelle et on passe à l'itération suivante
    }

    if (quantities[index] === max) { // Couleur ex aequo avec la première
        selecteds[1] = index;
    }

    if (quantities[index] > max2) {
        selecteds[1] = index;
        max2 = quantities[index];
    }
}

console.log(quantity, references, colors, quantities, selecteds);

selecteds.forEach(selected => {
    console.log(`Couleur: ${references[selected]}`);
});
