"use strict";

//EJERCICIO ANTERIOR

let listNumbers = []; //Creamos el array vacío

function get100Numbers (){ //creamos una función get100Numbers que devolverá un array con números del 1 al 100
  
  for (let index = 1; index <= 100; index++) { //usaremos un bucle y el método push para ir guardándolos

    listNumbers.push([index]);
  }
};

get100Numbers (); 
console.log(get100Numbers());

//EJERCICIO NUEVO

function getReversed100Numbers (){ //Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden.
  return get100Numbers.reverse;
};

getReversed100Numbers();
console.log(getReversed100Numbers());

