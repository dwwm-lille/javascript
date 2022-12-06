// 1. Grâce à la boucle for, écrire les nombres de 1 à 10.
if (true) {
    let j = 1;
    while (j <= 10) {
        console.log(j++);
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// console.log(i); // i vaut 11 ou undefined avec le let
// let vs var => let permet de vérouiller la variable dans le if ou le for

// 2. Grâce à la boucle for, écrire les nombres de 10 à 2.
for (let i = 10; i >= 2; i--) {
    console.log(i);
}

// 3. Grâce à la boucle for, afficher les nombres de 1 à 100 mais uniquement les nombres pairs.
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 4. Grâce au while, demandez à l'utilisateur s'il veut continuer sur le site, il doit répondre "oui", "non", "o" ou "n". Tant qu'il ne répond pas une de ces valeurs, lui reposer la question.
let answer = prompt('Veux-tu continuer sur le site ? oui, non, o ou n');

// while (['oui', 'non', 'o', 'n'].includes(answer)) {
while (answer != 'oui' && answer != 'non' && answer != 'o' && answer != 'n') {
    answer = prompt('Veux-tu continuer sur le site ? oui, non, o ou n');
}

if (answer == 'oui' || answer == 'o') {
    console.log('On entre sur le site');
} else {
    console.log('On entre pas sur le site');
}
