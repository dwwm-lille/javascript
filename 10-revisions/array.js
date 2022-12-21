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

// Quelques helpers de folie
let $ = (el) => document.querySelector(el);

/**
 * Permet de créer un élément dans le DOM
 */
let create = (el) => document.createElement(el);

// function $(element) {
//     return document.querySelector(element);
// }

// Fonction pour la moyenne
const average = (numbers) => {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return (sum / numbers.length).toFixed(2);
}

const averageWithReduce = (numbers) => numbers.reduce((previous, current) => previous + current, 0) / numbers.length;

// Exercice apprenants
let students = [
    ['Fiorella', [10, 12, 13]],
    ['Marina', [15, 11, 19]],
];

// Le p avec Fiorella
let p = create('p');
p.innerHTML = `${students[0][0]} a eu ${students[0][1].join(' / ')}`;
$('#students').after(p); // J'ajoute le p après le ul

// Liste des apprenants
let ulStudents = $('#students');

// Boucle normale pour afficher les apprenants
students.forEach((student) => {
    let li = create('li');
    li.innerHTML = `${student[0]} a eu ${student[1].join(', ')}`;
    ulStudents.appendChild(li);

    // Le bouton moyenne pour chaque apprenant
    let button = document.createElement('button');
    let span = document.createElement('span');
    button.addEventListener('click', function () {
        let avg = average(student[1]);
        console.log(avg);
        span.innerHTML = avg;
        button.after(span);
    });
    button.innerHTML = 'Moyenne';
    li.appendChild(button);
});

// Boucle en mode super sayan (Méthode avancée...)
// ulStudents.innerHTML = students.map(function (student) {
//     return `<li>${student[0]} a eu ${student[1].join(', ')}</li>`;
// }).join('');

// Le bouton moyenne
let h1 = create('h1'); // On crée le h1
$('.average').addEventListener('click', (event) => {
    // Calcule la moyenne
    // let sum = 0;
    // let notes = students[0][1];

    // for (let note of notes) {
    //     sum += note;
    // }

    // Méthode avancée (Reduce)
    // notes.reduce(function (previous, current) {
    //     return previous + current;
    // }, 0) / notes.length;

    // Ajoute le h1 avant le bouton (event.target est la même chose que $('.average'))
    // h1.innerHTML = (sum / notes.length).toFixed(2);
    h1.innerHTML = average(students[0][1]);
    event.target.before(h1);
});
