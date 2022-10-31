"use strict";

//Vamos a crear un objeto para almacenar la información de un usuario y una constante llamada job donde guardaremos el valor 'developer'.

const job = {
  profession: 'developer',
}; 

//Usando la notación con punto o la notación con corchetes añadiremos: 

job.firstName = 'Elena';
job.lastName  = 'Arocena';
job.age = 30;
job.job = job;

//Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto

console.log(job);

//Cambiaremos el nombre del usuario por otro distinto
job.firstName = 'Natalia';

//Aumentaremos en 1 la edad del usuario
job.age = job.age + 1;

//Comprobaremos de nuevo que todo sigue funcionando correctamente
console.log(job);
