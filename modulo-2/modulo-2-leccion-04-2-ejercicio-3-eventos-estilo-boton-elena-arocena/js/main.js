"use strict";

//Para empezar, tendremos que recoger de HTML el elemento sobre el que queremos escuchar los eventos. Creamos variable del botón y del value del formulario

const button = document.querySelector('.button');


// A continuación, vamos a usar el método addEventListenerde los elementos de HTML para escuchar eventos. Le pasaremos 2 valores: el tipo de evento a escuchar y el código a ejecutarse cuando suceda el evento.

button.addEventListener('click', () => {
  button.classList.toggle('button'); 
});
  
//para añadir y quitar clases de CSS, usamos classList.toggle + la clase que hayamos puesto en CSS.
