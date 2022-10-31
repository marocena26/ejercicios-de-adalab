"use strict";

//Definición de los objetos

const adalaber1  = { //Objeto 1
    nameAda: 'Susana',
    age: 34,
    profession: 'periodista',
};

const adalaber2  = { //Objeto 2
    nameAda: 'Rocío',
    age: 25,
    profession: 'actriz',
};

//Para poder mostrarlo en pantalla tendré que traerme los elementos de HTML en los que voy a escribir la descripción de cada adalaber

const adalaber1Profile = document.querySelector('.adalaber1');
const adalaber2Profile = document.querySelector('.adalaber2');

//Los escribo en el HTML con la propiedad innerHTML

adalaber1Profile.innerHTML = `Mi nombre es ${adalaber1.nameAda}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}`;
adalaber2Profile.innerHTML = `Mi nombre es ${adalaber2.nameAda}, tengo ${adalaber2.age} años y soy ${adalaber2.profession}`;

