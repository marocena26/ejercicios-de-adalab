'use strict'

let counter = 0;
let temp;

const time = document.querySelector(".time");
const session = document.querySelector(".text");

const incrementAndShowCounter = () => {
    counter++;
    if (counter <= 15){
        session.innerHTML = "¡Bienvenido!";
      }

    if (counter >= 16) {
      session.innerHTML = "Su sesión ha expirado";
    }
};

temp = setInterval(incrementAndShowCounter, 1000);