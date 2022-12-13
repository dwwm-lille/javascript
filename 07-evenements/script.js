function display(e) {
    alert(`Salut le ${e.target.tagName}`);
    // e.target me donne l'élément ciblé par l'événement
    console.log(e.target.textContent);

    // On veut mettre le contenu du target dans le input
    let input = document.getElementById('name');
    input.value = e.target.textContent;
}

// let input = document.getElementById('name');
// input.onkeyup = hit;

function hit(e) {
    let input = e.target;
    // value est un attribut html du input
    console.log(input.value);

    console.log(e.key); // Récupère la touche saisie

    if (e.key == 'f') {
        document.body.style.backgroundColor = 'blue';
    }
}

// Syntaxe DOM-2 pour écouter les événements
let title = document.getElementById('title');
// Dans le event listener, on peut "mettre" une fonction
// sans les parenthèses si elle a déjà été définie.
title.addEventListener('click', display);
title.addEventListener('click', function (e) {
    console.log(e);
    title.textContent = 'Cliqué';
});

let link = document.getElementById('link');
link.addEventListener('click', function (e) {
    // Annule le comportement par défaut du lien
    e.preventDefault();

    alert('LIEN');
});
