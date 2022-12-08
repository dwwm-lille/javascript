// Exercices https://slides.com/matthieumota/javascript#/30

// Exercice 1
var numbers = [5, 10, 15].map(function (value) {
    return value * value;
    // return Math.pow(value, 2);
    // return value ** 2;
});
numbers = [5, 10, 15].map(value => value * value);
console.log(numbers);

// Exercice 2
var words = ['aa', 'bb', 'c', 'é'].filter(word => {
    console.log(word.length);
    return word.length == 1;
});
console.log(words);

// Exercice 3
var firstnames = ['fiorella', 'marina', 'matthieu'].map(firstname => {
    let firstLetter = firstname.charAt().toUpperCase();

    return firstLetter + firstname.slice(1);
});
console.log(firstnames);

// Exercice 4
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumbers = [];
let size = generateRandom(10, 15);

for (let i = 1; i <= size; i++) {
    randomNumbers.push(generateRandom(0, 100));
}

console.log(randomNumbers);

// Exercice 5
let contacts = [
    { firstname: 'Fiorella', name: 'Mota' },
    { firstname: 'Marina', name: 'Mota' },
];

console.log(contacts);

let transformed = contacts.map(contact => {
    // console.log(contact.firstname);
    return `${contact.firstname} ${contact.name}`;
});

console.log(transformed);
