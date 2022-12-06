// Exercice 1
var age = prompt('Quel âge avez-vous ?');

if (age < 13) {
    console.log('Interdit');
} else if (age >= 13 && age <= 17) {
    console.log('Bientôt dans ' + (18 - age) + ' ans');
} else {
    console.log('Autoriser');
}

// Exercice 2
var frigo = {
    tomate: 3,
    oeuf: 4,
    pain: 1,
    jambon: 2,
    poulet: 1,
    fromage: 1,
};

console.log(frigo);

if (frigo.pain >= 1 && frigo.jambon >= 1 && (frigo.tomate >= 1 || frigo.fromage >= 1)) {
    alert('Je peux faire un sandwich');
} else if (frigo.poulet >= 1) {
    alert('Je mange le poulet');
} else if (frigo.oeuf >= 3) {
    alert('Je mange une omelette');
} else {
    alert('Je mange des chips');
}
