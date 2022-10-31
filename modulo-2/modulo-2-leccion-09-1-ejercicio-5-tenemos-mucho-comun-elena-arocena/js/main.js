"use strict";

//a) Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.

const numbers = [12,24,31,53,60]; 

//1-Recorrer todas los números
//2-Sumar los números 
//3-Calcular la longitud de la lista 
//4-Dividir entre el número de elementos 

let suma = 0; //creamos una variable fuera para que no se sobreescriba
for (let index = 0; index < numbers.length; index++) {
    suma += numbers[index];  
}

const media = suma/numbers.length; //variable para obtener la media

console.log(media);

//b) Ahora vamos añadir un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.

numbers[5] = 77; //añadimos un nuevo número al array

let suma2 = 0; 
for (let index = 0; index < numbers.length; index++) {
    suma2 += numbers[index];  
}

const media2 = suma2/numbers.length; 

console.log(media2);

//c) Vamos a generalizar el código anterior creando una función average. Esta función toma como parámetro un array numbers, calcula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.

function average (numbersList) {
  const numbersList = [3,10,52,24,6,];
  const sumaList = 0;
  for (let index = 0; index < numbersList.length; index++) {
    sumaList += numbersList[index];  
  };
  const mediaList = sumaList/numbersList.length;
}

console.log(average (numbersList));
