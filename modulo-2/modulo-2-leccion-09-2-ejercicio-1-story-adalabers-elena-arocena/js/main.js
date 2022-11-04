"use strict";

//En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.

//Lista de objetos dentro de un array

const adalabers =[
  {
    name: 'María',
    age: 29 ,
    job: 'diseñadora',
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'ingeniera química',
  },
  {
    name: 'Susana',
    age: 34   ,
    job: 'periodista',
  },
  {
    name: 'Rocío',
    age: 25  ,
    job: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21  ,
    job: 'diseñadora',
  },
];


//FUNCIONES
//Una función countAdalabers que devuelve el número de adalabers en el listado.

function countAdalabers (){
  adalabers.length;
  return adalabers.length;
};

countAdalabers();
console.log(countAdalabers());

//Una función averageAge que devuelve la media de edad de listado.

//Una función theYoungest que devuelve el nombre de la adalaber más joven.

//Una función countDesigners que devuelve el número de adalabers que son diseñadoras.
