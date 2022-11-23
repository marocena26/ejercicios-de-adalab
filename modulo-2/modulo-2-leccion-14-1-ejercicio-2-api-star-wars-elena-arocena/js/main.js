"use strict";

const btn = document.querySelector('.js_btn');
const search = document.querySelector('.js_nameCharacter');
const list = document.querySelector('.js_list');

let nameCharacter = ''; //Necesitamos una variable (let) que guarde los datos que vamos a traernos de la API de Star Wars. 

//FUNCIÓN PARA PINTAR EN EL HTML

function renderlist() {
  let liElement = ''; //Variable vacía donde vamos a guardar estos personajes.
  for (let i = 0; i < nameCharacter.length; i++) {
    //i representa cada elemento del array, en este caso cada posible personaje que contenga lo que escribe en el buscador
    
    liElement += `<li> Nombre personaje: ${nameCharacter[i].name}</li>`+`<li> Género: ${nameCharacter[i].gender}</li>`; 
    
    // le digo que a esta variable vacia (liElement) le pinte una lista de dos elementos: el nombre del personaje, el género del personaje. 

    list.innerHTML = liElement; //pinto en el ul (list) mis nuevos li's. 
  }
}

//FUNCIÓN MANEJADORA

function handleClick() {
  fetch(`https://swapi.py4e.com/api/people/?search=${search.value}`) 

    .then((response) => response.json())

    .then((data) => {
      nameCharacter = data.results;
      renderlist();
    });
}

btn.addEventListener('click', handleClick);
