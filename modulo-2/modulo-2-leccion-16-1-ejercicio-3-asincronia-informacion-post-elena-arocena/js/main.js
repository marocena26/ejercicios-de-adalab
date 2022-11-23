'use strict'

let counter = 0;
const mesaggeElement = document.querySelector(".js-mesagge");

const incrementAndShowCounter = () => {
  counter++;
  if (counter < 60) {
    mesaggeElement.innerHTML = `Mensaje escrito hace ${counter} segundos`;
  } else if (counter < 3600) {
    mesaggeElement.innerHTML = `Mensaje escrito hace ${Math.round(
      counter / 60
    )} minuto`;
  };
}

setInterval(incrementAndShowCounter, 1000);