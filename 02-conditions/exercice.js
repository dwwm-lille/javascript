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

function verify() {
    console.log(frigo);

    if (frigo.pain >= 1 && frigo.jambon >= 1 && (frigo.tomate >= 1 || frigo.fromage >= 1)) {
        frigo.pain--; // frigo.pain = frigo.pain - 1;
        frigo.jambon--;
        if (frigo.tomate >= 1) {
            rest = frigo.tomate--;
        } else {
            rest = frigo.fromage--;
        }

        // Le ternaire... ? = if, : = else
        // rest = (frigo.tomate >= 1) ? frigo.tomate-- : frigo.fromage--;
        // (frigo.tomate >= 1) ? frigo.tomate-- : ((frigo.machin) ? '...' : '...');

        alert('Je peux faire un sandwich');
    } else if (frigo.poulet >= 1) {
        frigo.poulet--;
        alert('Je mange le poulet');
    } else if (frigo.oeuf >= 3) {
        frigo.oeuf -= 3;
        alert('Je mange une omelette');
    } else {
        alert('Je mange des chips');
    }
}

function fill() {
    frigo = {
        tomate: parseInt(prompt('Combien de tomate ?')),
        oeuf: parseInt(prompt('Combien d\'oeuf ?')),
        pain: parseInt(prompt('Combien de pain ?')),
        jambon: parseInt(prompt('Combien de jambon ?')),
        poulet: parseInt(prompt('Combien de poulet ?')),
        // parseInt va transformer une chaine en nombre
        fromage: parseInt(prompt('Combien de fromage ?')),
    };
}
