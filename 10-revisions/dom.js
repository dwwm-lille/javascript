// Le fond des cours terminés devient vert si on survole le ul et ils restent comme cela.
document.querySelector('ul').addEventListener('mouseenter', () => {
    document.querySelectorAll('.done').forEach(function (li) {
        li.style.backgroundColor = 'green';
    });
});

// Le fond des cours en cours devient jaune si on clique sur le h2.
let h2 = document.querySelector('h2');
h2.addEventListener('click', function () {
    let ongoings = document.querySelectorAll('.ongoing');

    for (let li of ongoings) {
        li.style.backgroundColor = 'yellow';
    }
});

// Le fond des cours non vus devient rouge si on clique 3 fois sur le h2. Vous pouvez utiliser un compteur à incrémenter pour savoir que cela fait 3 fois.
let i = 0;
h2.addEventListener('click', function () {
    i++;

    if (i == 3) { // Si on a cliqué 3 fois sur le h2
        // Le :not est du css, on peut y mettre plusieurs classes (attention navigateurs compatibles)
        document.querySelectorAll('li:not(.done, .ongoing)').forEach(function (li) {
            li.style.backgroundColor = 'red';
        });
    }
});

// Changer la couleur de l'année toutes les 3 secondes 4 fois seulement. Vous pouvez arrêter l’intervalle grâce à un compteur.
let year = document.querySelector('#year');
let count = 0;
function randomColor() {
    let letters = '0123456789abcdef';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * letters.length); // Nombre aléatoire entre 0 et 15
        color += letters[randomIndex];
    }

    return color; // #a3fe62
}

let interval = setInterval(function () {
    year.style.backgroundColor = randomColor();
    count++;

    // Au bout de 4 fois, on supprime le setInterval...
    if (count == 4) {
        clearInterval(interval);
    }
}, 3000);

// Exo vache
let button = document.querySelector('#button-change');
let cowName = document.querySelector('#input-name');
let cowColor = document.querySelector('#input-color');
let spans = document.querySelectorAll('.cow-color');

// Au clic sur le bouton
button.addEventListener('click', function () {
    // On modifie le HTML de chaque span
    spans.forEach(function (span) {
        // La value permet de récupèrer la valeur saisie dans le input
        span.innerHTML = cowName.value;
        span.style.color = cowColor.value;
    });
});
