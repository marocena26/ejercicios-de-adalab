"use strict";

//Definición de los objetos

const adalaber1  = { //Objeto 1
    nameAda: 'Susana',
    age: 34,
    profession: 'periodista',
   /* run: function () { --> Añadimos la función run en la primera parte del ejercicio
        console.log(`Estoy corriendo`);
    },*/

    runAMarathon: function (distance) { //Añadimos la función runAMarathon en la segunda parte del ejercicio junto con el parametro que queremos que se vea (la distancia)
        console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);
    }
};

console.log(adalaber1.runAMarathon(50)); //console.log del objeto 1, en concreto de runAMarathon.

const adalaber2 = { //Objeto 2
    nameAda: 'Rocío',
    age: 25,
    profession: 'actriz',
};


const adalaber1Profile = document.querySelector('.adalaber1');
const adalaber2Profile = document.querySelector('.adalaber2');

adalaber1Profile.innerHTML = `Mi nombre es ${adalaber1.nameAda}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}`;
adalaber2Profile.innerHTML = `Mi nombre es ${adalaber2.nameAda}, tengo ${adalaber2.age} años y soy ${adalaber2.profession}`;

