// Déclarer les variables en haut du script
var drink;

do {
    drink = prompt('Que voulez-vous boire ? Café (caf), thé (the) ou chocolat (cho) ?').toLowerCase();
} while (drink != 'caf' && drink != 'the' && drink != 'cho');

var sugar = prompt('Quelle dose de sucre souhaitez-vous ? 0, 1 ou 2');
// On s'assure que le sucre est entre 0 et 2
if (sugar != 0 && sugar != 1 && sugar != 2) {
    sugar = 0;
    alert('Sucre invalide, donc pas de sucre');
}

var milk = 0;

if (drink != 'cho') {
    milk = prompt('Souhaitez-vous du lait ? 0 ou 1');
    if (milk != 1) {
        milk = 0;
    }
}

var price = 40;

if (drink == 'cho') {
    price = 60;
}

// Calcul du prix: 40 + 2 * 5 + 1 * 15
price += sugar * 5 + milk * 15;

// Génération de la phrase
// Votre café très sucré sans lait est prêt.
var result = 'Votre ';

if (drink == 'caf') {
    result += 'café ';
} else if (drink == 'the') {
    result += 'thé ';
} else {
    result += 'chocolat ';
}

switch (sugar) {
    case '1':
        result += 'sucré ';
    break;
    case '2':
        result += 'très sucré ';
    break;
    default:
        result += 'non sucré ';
}

result += (milk == 1) ? 'avec lait' : 'sans lait';
result += ' est prêt.';

// alert('Vous devez payer ' + price + ' centimes.');
alert(`Vous devez payer ${price} centimes. ${result}`);
