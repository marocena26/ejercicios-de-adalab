'use strict'

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  if(counter <= 12) {
  time.innerHTML = counter;}
};

setInterval(incrementAndShowCounter, 1000);