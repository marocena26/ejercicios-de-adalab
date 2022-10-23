"use strict";

//Para empezar, tendremos que recoger de HTML el elemento sobre el que queremos escuchar los eventos. Creamos variable del botón y del value del formulario

const text = document.querySelector('.text');


// A continuación, vamos a usar el método addEventListenerde en los elementos de HTML para escuchar eventos. Le pasaremos 2 valores: el tipo de evento a escuchar y el código a ejecutarse cuando suceda el evento. Con mouseover se modificará el texto al pasar el ratón sobre el mismo.

text.addEventListener('mouseover', () => {
  console.log(text.innerHTML += 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aliquid vitae. Mollitia exercitationem quis labore molestias quo, ipsum quibusdam, provident, ipsam ex fugit architecto atque facilis veritatis ipsa quod excepturi.'); 
});
  
//para añadir el texto al que ya tenemos usaremos la propiedad innerHTML con += para que mantenga el texto original y además sume el que le incorporamos. 
