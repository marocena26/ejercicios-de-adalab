"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];
let evenNumber = [];
let oddNumber = [];

//Crear un nuevo array que contiene solo los números pares que hay en lostNumbers.

function bestLostNomber(){ 
  for (let index = 0; index = lostNumbers.length; index++) { 
    if (lostNumbers[index] %2 === 0) {
      evenNumber.push[index];
    } 
    else if (lostNumbers[index] %3 === 0){
    oddNumber.push[index]
    };
  };
};

bestLostNomber();
console.log(bestLostNomber());

const concatList = evenNumber.concat(oddNumber);
console.log(concatList);



/*function evenNumberList (){ 
  
  for (let index = 0; index = lostNumbers.length; index++) { 
    if (lostNumbers[index] %2 === 0) {
      evenNumber.push[index];
    }
    return evenNumber;
  };
};

//Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers.

function oddNumberList (){ 
  
  for (let index = 0; index = lostNumbers.length; index++) { 
    if (lostNumbers[index] %3 === 0) {
      oddNumber.push[index];
    }
    return oddNumber;
  };
};

//concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.

const concatList = evenNumberList.concat(oddNumberList);

//función bestLostNomber que nos devuelve algunos números del array.

*/