var min = 1;
var max = 100;
var good = Math.floor(Math.random() * (max - min + 1)) + min; // 0.991234 * 100 = 99.1234 = 99
var retry = 1;
// var choice = prompt('Saisir un nombre entre ' + min + ' et ' + max);
var choice = prompt(`Saisir un nombre entre ${min} et ${max}`);

console.log(good);

while (choice != good) {
    retry++;
    let message;

    if (choice < good) {
        message = `C'est plus`;
    } else {
        message = `C'est moins`;
    }
    // let message = (choice < good) ? `C'est plus` : `C'est moins`;

    // On utilise la template de string (` => backtick => Alt gr + 7)
    choice = prompt(`${message} Saisir un nombre entre ${min} et ${max}`);
}

alert(`Tu as trouvé le nombre ${good} en ${retry} fois.`);
