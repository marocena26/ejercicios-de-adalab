"use strict";

//Para empezar, tendremos que recoger de HTML el elemento sobre el que queremos escuchar los eventos. Creamos variable del botón y del value del formulario

const input_name = document.querySelector('.name');
const button = document.querySelector('.button');
const hello = document.querySelector('.hello')


//Recogemos el valor del input en una variable.

input_name.value = ', Elena Arocena';
const descrName = input_name.value;

// A continuación, vamos a usar el método addEventListenerde los elementos de HTML para escuchar eventos. Le pasaremos 2 valores: el tipo de evento a escuchar y el código a ejecutarse cuando suceda el evento.

button.addEventListener('click', () => {
    console.log(hello.innerHTML += input_name.value); 
  });

//para añadir el texto al que ya tenemos usaremos la propiedad innerHTML con += para que mantenga el texto original y además sume el que le incorporamos. 

