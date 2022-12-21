// Exo 1
function multiple(a, b) {
    let result = a * b;

    return `${a} multiplié par ${b} vaut ${result}`;
}

let a = document.querySelector('.multiplication .a');
let b = document.querySelector('.multiplication .b');

document.querySelector('.multiplication button').addEventListener('click', function () {
    document.querySelector('.multiplication .result').innerHTML = multiple(a.value, b.value);
});

// Exo 2
function daysFromAge(age) {
    let result = Math.round(age * 365.25); // On arrondit à l'entier supérieur

    return `${result} jours`;
}

let age = document.querySelector('.age input');

document.querySelector('.age button').addEventListener('click', function () {
    document.querySelector('.age .result').innerHTML = daysFromAge(age.value);
});

// Exo 3
const isLeapYear = (year) => {
    // On peut retourner une condition dans une fonction pour renvoyer un booléen directement
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
};

document.querySelector('.leap-year button').addEventListener('click', function () {
    let year = document.querySelector('.leap-year input');

    document.querySelector('.leap-year .result').innerHTML = isLeapYear(year.value) ? 'Oui' : 'Non';
});

// Exo 4
const isPalindrome = (word) => {
    // On considère que le mot est un palindrome par défaut
    let result = true;
    word = word.toLowerCase(); // Force les minuscules

    for (let index in word) {
        // Si à un moment, la lettre est différente de son opposé, c'est faux
        // kayak => k != k
        if (word[index] != word[(word.length - 1) - index]) {
            result = false;
        }
    }

    return result;
};

// ou bien...
function isPalindrome2(word) {
    // Si le mot en minuscule est égal à lui même à l'envers
    return word.toLowerCase() == word.toLowerCase().split('').reverse.join('');
}

// const isPalindrome2 = (word) => word.toLowerCase() == word.toLowerCase().split('').reverse.join('');

document.querySelector('.palindrome button').addEventListener('click', function () {
    let word = document.querySelector('.palindrome input');

    document.querySelector('.palindrome .result').innerHTML = isPalindrome(word.value) ? 'Oui' : 'Non';
});

// Exo 5
const isAnagram = (wordA, wordB) => {
    let result = true;

    for (let letter of wordA) {
        // Toutes les lettres du mot A doivent être B
        if (!wordB.includes(letter)) {
            result = false;
        }
    }

    // On s'assure que les 2 mots fassent la même taille
    return result && wordA.length == wordB.length;
}

const isAnagram2 = (wordA, wordB) => wordA.toLowerCase().split('').sort().join('') == wordB.toLowerCase().split('').sort().join('');

document.querySelector('.anagram button').addEventListener('click', function () {
    let word1 = document.querySelector('.anagram .a');
    let word2 = document.querySelector('.anagram .b');

    document.querySelector('.anagram .result').innerHTML = isAnagram(word1.value, word2.value) ? 'Oui' : 'Non';
});
