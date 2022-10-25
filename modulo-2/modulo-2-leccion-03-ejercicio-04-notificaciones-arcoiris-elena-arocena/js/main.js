'use stric';

const component = document.querySelector('.js-component');
const title = document.querySelector('.js-title');
const text = document.querySelector('.js-text');

if (component.classList.contains('warning')) {
    title.innerHTML = 'AVISO';
    text.innerHTML = 'Tenga cuidado'; 
} 

else if (component.classList.contains('error')) {
        title.innerHTML = 'ERROR';
        text.innerHTML = 'Ha surgido un error'; 
}

else if (component.classList.contains('success')) {
    title.innerHTML = 'CORRECTO';
    text.innerHTML = 'Los datos son correctos'; 
}


// Utilizamos clasList.contains para comprobar que clases tiene dentro.
// Se encadenan varios "else if" porque quiero que si no se cumple la primera condición pase a la siguiente, y así hasta que dé con la que le estoy solicitando.