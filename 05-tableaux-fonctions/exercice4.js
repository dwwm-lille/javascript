// https://slides.com/matthieumota/javascript#/34

// Exo 1
// Déclaration de la fonction
function square(number) {
    return number * number;
}

// Déclaration avec une fonction fléchée...
// let square = (number) => number * number;

// Utilisation de la fonction
console.log(square(5));
console.log(square(10));

// var n = prompt('Saisir un nombre');
// console.log(square(n));
// console.log(square(prompt('Saisir encore un nombre')));

// Exo 2
function convert(amount, currency = 'eur') {
    let rate = 16050;

    if (currency == 'btc') {
        return amount * rate;
    }

    return amount / rate;
}

console.log(convert(100)); // 100 euros en bitcoins (0.006)
console.log(convert(100, 'btc')); // 100 bitcoins en euros (1605000)
// var a = prompt('Quelle valeur en bitcoin ?');
// var c = prompt('Quelle devise ? eur ou btc');
// console.log(convert(a, c));

// Exemple inutile mais indispensable pour mieux comprendre le return
console.log(convert(convert(100, 'btc')));

// Exo 3
function pgcd(number1, number2) {
    while (number2 != 0) {
        let tmp = number2;
        number2 = number1 % number2;
        number1 = tmp;
    }

    return number1;
}

console.log(pgcd(6, 12));
console.log(pgcd(56, 987));

// Exo 4
function even(number) {
    if (number % 2 == 0) {
        console.log(`${number} est pair`);
        return true;
    } else {
        console.log(`${number} est impair`);
        return false;
    }

    return number % 2 == 0;
}

console.log(even(2));
console.log(even(7));

if (even(10)) {

}

// Exo 5
function first(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}

console.log(first(1)); // false
console.log(first(3)); // true
console.log(first(6)); // false
console.log(first(9)); // false

// Exo 6
// Une fonction peut être en récursive
function fibonacci(number) {
    if (number == 0) {
        return 0;
    } else if (number == 1) {
        return 1;
    }

    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(8)); // 21
console.log(fibonacci(9)); // 34
