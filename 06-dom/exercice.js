// https://slides.com/matthieumota/javascript#/40

// Exo 1
var title = document.getElementById('title');
title.innerHTML = 'Hey, j\'ai changé mon titre en JavaScript';

// Exo 2
var p = document.createElement('p');
p.innerHTML = 'Un super paragraphe en JS';
p.id = 'paragraph';
p.setAttribute('id', 'paragraph');

var containers = document.getElementsByClassName('container');
containers[0].appendChild(p);

// Exo 3
var squares = document.querySelectorAll('.square');

for (let square of squares) {
    square.textContent = square.textContent * square.textContent;
}
