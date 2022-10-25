'use stric';
// 1- Elementos de la página que voy a usar.

const button = document.querySelector('.js-btn');
const listBox = document.querySelector('.js-list');
const selectedBox = document.querySelector('.js-selected');

// 2- Variables globales: contiene los datos de la aplicación. 

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

// 3- Funciones.


// 4- Eventos.

button.addEventListener('click', () => {
    //Trocito de código que se ejecuta cuando pulsa la usuaria el botón 
    //Primera parte del código: llamamos a nuestra lista de películas pulsando el botón "Empezar". Ahora nos aparece nuestra lista en pantalla.
    listBox.innerHTML = 
    `<li class="js-film1">${inception}</li>
    <li class="js-film2">${theButterFlyEffect}</li>
    <li class="js-film3">${eternalSunshineOfTheSM}</li>
    <li class="js-film4">${blueVelvet}</li>
    <li class="js-film5">${split}</li>`;
    
    //Segunda parte del código, llamamos al párrafo pulsando la lista de películas. Ahora al pulsar una película podré ver su descripción. 

    listBox.addEventListener('click',(event) => { //1.escucho el evento.
    
        const jsFilms = event.target; //2.creo una variable que lo englobe todo, con event.target le digo que seleccione aquello que estoy clicando. 
        
        const film = jsFilms.innerHTML; //3.con esta nueva variable obtengo el nombre de la película (si pulso inception, la variable film ahora se llama 'inception').
        selectedBox.innerHTML = `La peli seleccionada es ${film}`; //4.utilizo la variable que engloba todas las descripciones y con ${film} le digo el nombre específico de la que he seleccionado.
    })
})


