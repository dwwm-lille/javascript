// https://slides.com/matthieumota/javascript#/46

// Exercice 1
var image = document.getElementById('image');

// Solution 1
image.addEventListener('mouseenter', function () {
    image.src = 'img/lion.png';
    image.alt = 'Lion';
});

image.addEventListener('mouseleave', function () {
    image.src = 'img/cat.png';
    image.alt = 'Chat';
});

// Solution 2
function changeImage(event) {
    if (event.type == 'mouseenter') {
        image.src = 'img/lion.png';
        image.alt = 'Lion';
    } else {
        image.src = 'img/cat.png';
        image.alt = 'Chat';
    }
}

image.addEventListener('mouseenter', changeImage);
image.addEventListener('mouseleave', changeImage);

// Exercice 2
function changeTitle(event) {
    let title = event.target;

    title.style.color = 'lightblue';
}

// Exercice 3
let button = document.getElementById('changeBody');
let isGrey = false;
button.addEventListener('click', () => {
    document.body.style.backgroundColor = isGrey ? '' : 'lightgrey';
    isGrey = !isGrey; // On inverse la valeur de isGrey à chaque clic
});

// Exercice 4
let form = document.getElementById('send');
// Méthode DOM-2
form.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le formulaire d'être envoyé

    // On peut avoir l'élément précédent le bouton
    let input = form.previousElementSibling;
    alert(input.value);
});

// Méthode DOM-0
function sendForm(e) {
    e.preventDefault(); // Empêche le formulaire d'être envoyé

    // On peut avoir l'élément précédent le bouton
    let input = form.previousElementSibling;
    alert(input.value);
}

// Exercice 5
let message = document.getElementById('message');
let h1 = document.createElement('h1');
// L'événement change se produit quand on quitte
// le focus sur un input
// Pour être plus précis, on peut utiliser l'événement
// input qui va se produire uniquement quand on saisit
// du texte...
message.addEventListener('keyup', (e) => {
    console.log(e.key);
    h1.innerHTML = message.value;
    message.before(h1); // Ajoute le h1 avant le message
});
