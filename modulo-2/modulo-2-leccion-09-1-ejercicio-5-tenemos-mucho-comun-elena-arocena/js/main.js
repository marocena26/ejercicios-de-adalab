"use strict";

//Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.

const bookOne = document.querySelector('.js-book-one');
const bookTwo = document.querySelector('.js-book-two');
const btnSend = document.querySelector('.js-btn');
const textMessage = document.querySelector('.js-text');

function handleSend(event) {
  event.preventDefault();
  const book1 = bookOne.value;
  const book2 = bookTwo.value; 
  textMessage.innerHTML = `¡A mí también me encantó ${book1} y ${book2}! Tenemos mucho en común, humana.`;
}

btnSend.addEventListener("click", handleSend);