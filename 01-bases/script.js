// On peut déclarer des variables en JS
var firstname = 'Fiorella';

// On peut afficher une chose dans la console
console.log('Salut ' + firstname);

// PopUp navigateur
alert('Salut JavaScript');

// Demander une chose à l'utilisateur
var username = prompt('Quel est ton nom ?');
console.log('Tu te nommes ' + username);

// On peut créer des tableaux
var bag = [15, 4, 12, 'toto'];

// Affiche tout le tableau
console.log(bag);

// Pour afficher 12, on utilise l'index 2
console.log(bag[2]);

// On peut créer des objets (littéral)
var person = {
    name: 'Mota',
    firstname: 'Fiorella',
    birthday: [31, 12, 2019],
};

// Pour afficher l'objet
console.log(person);

// On peut afficher la clé (propriété) d'un objet
console.log(person.name);
console.log(person['firstname']);

// On peut manipuler les tableaux (ou les chaines)
console.log(bag.length); // Affiche le nombre de notes

// Ici, toUpperCase est une méthode qu'on appelle sur une chaine
// Tout est objet en JS
console.log(person.firstname.toUpperCase());
