// Les boucles (for et while)
// Le for a 3 instructions
// - Initialisation (i = 0)
// - Condition jusqu'à (i < 10)
// - Incrémentation (i++ ou i = i + 1)
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var products = ['Café', 'Thé'];
for (var product of products) {
    console.log(product);
}

// le in récupère la clé seulement
for (var index in products) {
    console.log(index + ' ' + products[index]);
}

var person = {
    name: 'Fiorella',
    age: 3,
};

// in est utile pour parcourir un objet
for (var attribute in person) {
    console.log(person[attribute]);
}

// Le while
var weather = true;
while (weather) {
    console.log('Je sors dehors');
    weather = confirm('Fait-il beau ?');
}

// Le do while se fait au moins 1 fois
var night = false;
do {
    night = confirm('Fait-il nuit ?');
    if (night) {
        console.log('On voit rien');
    }
} while (night);
