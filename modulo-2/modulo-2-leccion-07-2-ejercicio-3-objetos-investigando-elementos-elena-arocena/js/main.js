"use strict";

const textElement = document.querySelector('.js-text');

console.dir(textElement);

console.dir(textElement.value); //value nos da el valor del input
console.dir(typeof(textElement.value)); //tipo cadena

console.dir(textElement.nodeName); //nodeName escribe el nombre del input en mayúsculas
console.dir(typeof(textElement.nodeName)); //tipo cadena

console.dir(textElement.required); //required nos dice si el input es obligatorio o no
console.dir(typeof(textElement.required)); //tipo booleano
