"use strict";

let listNumbers = []; //Creamos el array vacío

function get100Numbers (){ //creamos una función get100Numbers que devolverá un array con números del 1 al 100
  
  for (let index = 1; index <= 100; index++) { //usaremos un bucle y el método push para ir guardándolos

    listNumbers.push([index]);
  }
};

get100Numbers ();
console.log(get100Numbers());

