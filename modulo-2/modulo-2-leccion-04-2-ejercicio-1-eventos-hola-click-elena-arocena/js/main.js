"use strict";

//Para empezar, tendremos que recoger de HTML el elemento sobre el que queremos escuchar los eventos.

const button = document.querySelector('.button');

// A continuación, vamos a usar el método addEventListenerde los elementos de HTML para escuchar eventos. Le pasaremos 2 valores: el tipo de evento a escuchar y el código a ejecutarse cuando suceda el evento.

button.addEventListener('click', () => {
    console.log('Mi primer click, ¡ole yo y la mujer que me parió!'); //código a ejecutarse
  });



