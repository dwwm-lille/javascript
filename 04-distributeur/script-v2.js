// Déclarer les variables en haut du script
var drink;
var sugar;
var milk = 0;
var price;
var result;
var distributor = {
    money: 0,
    caf: 5,
    the: 5,
    cho: 5,
    sugar: 5,
    milk: 5,
    usage: 0,
    state: true,
};
var quantity;

function distribute() {
    do {
        // Le ? permet juste de s'assurer que le prompt ne renvoie pas "rien" et que le toLowerCase se fait
        // bien sur une chaine.
        drink = prompt('Que voulez-vous boire ? Café (caf), thé (the) ou chocolat (cho) ?')?.toLowerCase();

        if (!distributor.state) {
            alert('La machine est en panne...');
            drink = ''; // Force la boucle à se relancer
        } else if (distributor[drink] <= 0 || distributor.sugar < 2 || distributor.milk < 1) {
            alert('Cette boisson n\'est plus en stock / Panne sucre / Panne lait.');
            drink = ''; // Force la boucle à se relancer
        }
    } while (drink != 'caf' && drink != 'the' && drink != 'cho');

    sugar = prompt('Quelle dose de sucre souhaitez-vous ? 0, 1 ou 2');
    // On s'assure que le sucre est entre 0 et 2
    if (sugar != 0 && sugar != 1 && sugar != 2) {
        sugar = 0;
        alert('Sucre invalide, donc pas de sucre');
    }

    if (drink != 'cho') {
        milk = prompt('Souhaitez-vous du lait ? 0 ou 1');
        if (milk != 1) {
            milk = 0;
        }
    }

    price = 40;
    if (drink == 'cho') {
        price = 60;
    }

    // Calcul du prix: 40 + 2 * 5 + 1 * 15
    price += sugar * 5 + milk * 15;

    // Génération de la phrase
    // Votre café très sucré sans lait est prêt.
    result = 'Votre ';

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

    // On ajoute l'argent dans le distributeur
    distributor.money += price;
    // console.log(distributor);

    // Réduire les doses du distributeur
    if (drink == 'caf') {
        distributor.caf--;
    } else if (drink == 'the') {
        distributor.the--;
    } else {
        distributor.cho--;
    }
    // distributor[drink]--; // Ou une condition
    distributor.sugar -= sugar;
    distributor.milk -= milk;

    // Panne de la machine
    distributor.usage++;

    let breakdown = Math.random() > 0.5;
    if (distributor.usage >= 2 && breakdown || distributor.usage >= 4) {
        distributor.state = false;
        distributor.usage = 0;
    }

    // alert('Vous devez payer ' + price + ' centimes.');
    alert(`Vous devez payer ${price} centimes. ${result}`);

    console.log(distributor);
}

function showBank() {
    // 1.5 => '1.50' (fixed) => '1,50' (replace qui ne fonctionne que sur des chaines)
    let money = (distributor.money / 100).toFixed(2).replace('.', ',');

    alert(`Il y a ${money}€ dans la caisse.`);
}

function fill() {
    do {
        drink = prompt('Que voulez-vous ajouter ? Café (caf), thé (the), chocolat (cho), sucre (sugar), lait (milk) ?').toLowerCase();
    } while (drink != 'caf' && drink != 'the' && drink != 'cho' && drink != 'sugar' && drink != 'milk');

    quantity = prompt('Quelle quantité ? Un entier');
    // Permet de s'assurer que la quantité est un entier
    quantity = parseInt(quantity) || 0;

    distributor[drink] += quantity;
}

function repair() {
    if (!distributor.state) {
        distributor.state = true;
        alert('La machine est réparée');
    } else {
        alert('La machine est OK');
    }
}
