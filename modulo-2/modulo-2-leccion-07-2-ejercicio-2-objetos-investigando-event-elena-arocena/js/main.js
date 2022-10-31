"use strict";

const button = document.querySelector('.js-btn');

button.addEventListener('click',(event) => {
    console.log(event);
    console.log(event.type);
});

