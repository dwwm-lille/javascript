// Exercice https://slides.com/matthieumota/javascript#/29

// Exercice 1
var days = ['mardi', 'mercredi', 'jeudi', 'samedi', 'dimanche'];
var days2 = days; // days2 est une référence à days (si on change days, on change days2)
var days2 = days.slice(); // days2 est une copie du tableau days (2 emplacements mémoire)
console.log(days);
days.unshift('lundi');
console.log(days);
days.splice(days.length - 2, 0, 'vendredi');
console.log(days);

console.log('Le 3ème jour de la semaine est ' + days[2]);
console.log('Dans une semaine, on a ' + days.length + ' jours');

// Exercice 2
var foods = ['Poulet', 'Frites', 'Chocolat'];

function eat() {
    var choice = prompt('Que veux-tu manger ?');

    if (foods.includes(choice)) {
        // indexOf va chercher l'index de la valeur dans le tableau
        // splice supprime, à partir de cet index, 1 élément dans le tableau
        foods.splice(foods.indexOf(choice), 1); // Méthode 1
        // filter va permettre de filtrer le tableau (nouveau tableau)
        // On ne garde que les aliments dont le nom est différent de celui choisi
        foods = foods.filter(food => food != choice); // Méthode 2
        alert(`Le ${choice} est disponible.`);
    } else {
        alert(`Le ${choice} n'est pas disponible.`);
    }
}

// Exercice 3
var numbers = [];

for (let i = 1; i <= 5; i++) {
    let choice = prompt(`Saisir le nombre ${i}:`);
    // On s'assure avec le parseInt qu'on a saisi un nombre (|| 0 avec)
    numbers.push(parseInt(choice) || 0);
}

for (let number of numbers) {
    // On vérifie si le nombre est pair avec un ternaire
    let type = (number % 2 == 0) ? 'pair' : 'impair';
    console.log(`${number} est ${type}.`);
}

// Exercice 4
// var notes = [10, 14, 18, 2, 10];
var notes = [];

do {
    var choice = prompt(`Ajouter la note ${notes.length + 1}`);
    if (!isNaN(parseInt(choice))) { // On vérifie NOT IS NOT A NUMBER autrement dit que c'est un nombre
        notes.push(parseInt(choice));
    }
} while (choice != ''); // On arrête de saisir les notes si on mets une chaine vide

let sum = 0;
for (let note of notes) {
    sum += note;
}

let average = sum / notes.length;

// BONUS: Le reduce prend une valeur initiale et il va parcourir chaque valeur du tableau
// A chaque iteration, le retour va être stocké dans la valeur initialie
average = notes.reduce((previous, current) => previous + current, 0) / notes.length;
console.log(average);

console.log(`La moyenne de ${notes} est ${average}.`);

// note max, note min
let max = 0;
let min = 20;

for (let note of notes) {
    if (note > max) {
        max = note;
    }

    if (note < min) {
        min = note;
    }
}

max = Math.max.apply(null, notes);
// Math.min(10, 14, 18, 2, 10);
min = Math.min(...notes); // Spread operator => Décompose un tableau en arguments [1, 2] devient 1, 2

console.log(`La note max est ${max}.`);
console.log(`La note min est ${min}.`);
