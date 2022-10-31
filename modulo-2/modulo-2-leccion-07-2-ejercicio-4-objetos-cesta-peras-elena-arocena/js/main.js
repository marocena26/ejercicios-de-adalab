"use strict";

//cesta de peras con distintas propiedades:

const pears = {
    max: 10,
    min: 1,
    actually: 8,
    initial: 6,
  };

//métodos que hagan:
//Añadir al cesto una pera
pears.actually = pears.actually + 1;
console.log(pears.actually);

//Sacar del cesto una pera
pears.actually = pears.actually - 1;
console.log(pears.actually);

//Restablecer el número de peras al valor inicial.
pears.actually = pears.initial;
console.log(pears.actually);