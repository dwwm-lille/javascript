// Les conditions
var genre = confirm('Es-tu un garçon ?'); // confirm renvoie un booléen

if (genre) {
    console.log('Tu es un garçon');
} else {
    console.log('Tu es une fille');
}

// Les opérateurs logiques (table de vérité)
var ask = prompt('Petit pain, croissant ou chocolatine ?');
var place = prompt('D\'où venez-vous ? nord ou sud');

// OU == ||, ET == &&
// Si croissant ou pain, on dit bienvenue
// Sinon si chocolatine et sud, on dit sortez
// Sinon, on dit de dire petit pain
if (ask == 'Petit pain' || ask == 'croissant') {
    console.log('Bienvenue');
} else if (ask == 'chocolatine' && place == 'sud') {
    console.log('Sortez');
} else {
    console.log('Attention, on doit dire petit pain');
}
