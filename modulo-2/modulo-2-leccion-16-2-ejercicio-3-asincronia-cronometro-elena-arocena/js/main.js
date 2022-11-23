'use strict'

const time = document.querySelector(".time")

let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const btn = document.querySelector(".btn");
  time.innerHTML = counter;
  if (counter === 12) {
    clearInterval(temp);
  }
};

temp = setInterval(incrementAndShowCounter, 1000);