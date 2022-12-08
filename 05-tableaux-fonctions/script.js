// Les tableaux en JS
var firstnames = ['Fiorella', 'Marina', 'Matthieu'];

console.log(firstnames);

// Parcourir un tableau avec une fonction de callback
firstnames.forEach(function (firstname) {
    console.log(firstname);
});

// Méthode standard pour parcourir un tableau
for (let firstname of firstnames) {
    console.log(firstname);
}

for (let index in firstnames) {
    console.log(index + ': ' + firstnames[index]);
}

// Parcourir un tableau avec une boucle avec Index et valeur (Avancé++)
// entries() permet de transformer le tableau afin qu'on puisse récupèrer à la fois sa clé et sa valeur
for (let [index, firstname] of firstnames.entries()) {
    console.log(`${index}: ${firstname}`);
}

// On peut "modifier" le contenu d'un tableau
function add() {
    // Si mon tableau ne contient pas Bianca, on l'ajoute
    if (!firstnames.includes('Bianca')) {
        firstnames.push('Bianca');
    }

    firstnames.splice(1, 0, 'Mina');

    // Question ?? Comment faire un push avec le splice ?
    firstnames.splice(firstnames.length, 0, 'Toto');
}

// Quelques méthodes de tableaux...
var numbers = [1, 2, 3];
numbers = numbers.map(function (number) {
    console.log(number);
    return number * 2; // Une fonction retourne toujours quelque chose
}); // [2, 4, 6]
console.log(numbers);

numbers = numbers.filter(function (number) {
    return number > 2; // Je garde le nombre dans le tableau
    // Seulement s'il est supérieur à 2
}); // [4, 6]
console.log(numbers);

// Syntaxe Arrow functions (fonctions fléchées)
let alpha = ['a', 'b', 'c'].filter(function (letter) {
    return letter != 'c';
});

alpha = ['a', 'b', 'c'].filter((letter) => letter != 'c');

// Les fonctions
function addition(number1 = 0, number2 = 0) {
    console.log(number1 + number2); // Affiche dans la console
    return number1 + number2; // Retourne la valeur en dehors de la fonction
    // Le return arrête la fonction et n'exécute donc pas le code qui suit
}

console.log(addition() + addition()); // 0 + 0 + 0 + 0
// On peut ajouter des paramètres aux fonctions
console.log(addition(5, 4));
console.log(addition(10));

// Déclaration d'une fonction qui permet de dire bonjour
function hello(firstname, lang = 'fr') {
    if (lang == 'en') {
        return `Hello ${firstname}`;
    }

    return 'Bonjour ' + firstname;
}

// Equivalent en arrow function
let goodBye = () => {
    return 'Au revoir';
};

// On appelle la fonction pour dire bonjour
console.log(hello('Fiorella'));
console.log(hello('Toto', 'en'));

// La portée des variables
var number = 10; // Variable globale

function myFunction() {
    var other = 20; // Variable locale
    console.log(number);
    console.log(other);

    function otherFunction() {
        console.log('Inception');
    }
    otherFunction();
}

console.log(number);
myFunction();
console.log(other);
