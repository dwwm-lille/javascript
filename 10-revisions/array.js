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

let countries = [];
countries.push('Pays');


let letters = ['C', 'B', 'A'];

for (let i = 0; i < letters.length; i++) {
    letters = letters.sort()[i];
}
