// Récap tableaux
let contacts = ['Fiorella', 'Marina', 'Matthieu', 'A'];

// of => valeurs, in => index
for (let contact of contacts) {
    console.log(contact);
    // contacts.indexOf(contact); // pour récupérer l'index
    const div = document.createElement('div');
    div.innerHTML = contact;
    document.body.appendChild(div);
}

// Méthode du .forEach() (Niveau intermédiaire)
contacts.forEach(function (contact) {
    const div = document.createElement('div');
    div.innerHTML = contact;
    document.body.appendChild(div);
});

// Quelques méthodes existent pour travailler avec les tableaux
// Le map permet de transformer chaque valeur du tableau et de renvoyer un nouveau
// tableau
console.log(contacts.map(c => `<h1>${c}</h1>`));
console.log(contacts);

// Le sort permet de trier un tableau
console.log(contacts.sort(function (contactB, contactA) {
    if (contactA.length < contactB.length) {
        return -1; // Inverse les 2 valeurs
    }

    return 1; // Garde le sens normal
}));

// Event... En fonction des events, on a pas le même objet event
document.querySelector('.keyboard').addEventListener('input', (event) => {
    console.log(event.data);
    console.log(event.target.value); // target est l'élément qui a "subit" l'événement
});

document.querySelector('.keyboard').addEventListener('keyup', (event) => {
    console.log(event.key);
    console.log(event);
});

// Exercice pays
let countries = [
	'france', 'italie', 'angleterre', 'espagne', 'portugal', 'belgique'
];
const ul = document.querySelector('#countries');

// On peut mettre la majuscule avec un .map
countries = countries.map(function (country) {
    return country.charAt(0).toUpperCase() + country.slice(1);
});

// Trier les pays
countries.sort();

// Afficher les pays avec images
for (let country of countries) {
    const li = document.createElement('li');
    li.innerHTML = country.charAt(0).toUpperCase() + country.slice(1);
    ul.appendChild(li);

    // Création de l'image
    const img = document.createElement('img');
    let iso = country.slice(0, 2).toLowerCase(); // On s'assure de toujours utiliser le nom du pays en minuscule

    // Gérer les exceptions
    if (country.toLowerCase() == 'angleterre') {
        iso = 'england';
    } else if (country.toLowerCase() == 'portugal') {
        iso = 'pt';
    }

    img.src = 'https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/75/country-4x3/'+iso+'.png';
    li.appendChild(img);
}

// Tableaux multidimensionnels
let car = ['Renault', 'Mégane']; // 1 dimension
car.push([]);

let garage = [ // 2 dimensions
    car,
    ['Alfa Roméo', 'Giulia', []],
    ['Peugeot', '308', ['Sac', 10, 'Roue']] // 3 dimensions
];

// Comment avoir le modèle de la 2ème voiture (Alfa Roméo) ?
console.log(garage[1][1]); // Giulia

// Comment chercher le sac ?
console.log( garage[2][2][0] );

// En modifiant la variable car, on modifie aussi le garage
car[2].push('Valise');

// On veut afficher Marque et modèle dans une liste
const ulCar = document.createElement('ul');
document.body.appendChild(ulCar);

// car est un tableau
for (let car of garage) {
    console.log(car);
    const liCar = document.createElement('li');
    liCar.innerHTML = car[0] + ' ' + car[1];

    // Comment afficher le coffre s'il n'est pas vide ?
    // Le ?. permet de s'assurer que l'index 2 existe bien dans le tableau
    if (car[2]?.length > 0) {
        liCar.innerHTML += '. Dans le coffre, il y a ' + car[2];

        // On va créer une liste dans la liste pour afficher le contenu du coffre
        const ulTrunk = document.createElement('ul');
        for (let item of car[2]) {
            const liTrunk = document.createElement('li');
            liTrunk.innerHTML = item;
            ulTrunk.appendChild(liTrunk);
        }
        liCar.appendChild(ulTrunk);
    }

    ulCar.appendChild(liCar);
}

// Tableau d'objets
let garage2 = [
    { brand: 'Renault', model: 'Mégane', trunk: [1, 2] },
    { brand: 'Alfa Roméo', model: 'Giulia', trunk: [] },
];

for (let car of garage2) {
    console.log(car.brand + ' ' + car.model);

    // Parcourir le coffre
    for (let item of car.trunk) {
        console.log(item);
    }
}
