'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

//let userAvatar = ''; // Utilizo comillas vacias cuando NO quiero que se ve la imagen

const img = document.querySelector('.user__avatar'); 

img.src = userAvatar || DEFAULT_AVATAR; //No utilizamos innerHTML porque la img no tiene etiqueta de apertura y cierre, por eso aplicamos directamente el src.

/*Cómo entender el ejercicio:
1.-Primero creamos nuestra variable, nos piden que cambiemos el elemento imagen del HTML así que haremos uan variable de user__avatar, la clase de img
2.-Para que se vea la imagen le aplicamos el atributo src a la variable imagen (linea 11)
3.-Si queremos ocultar la imagen, hacemos otra variable de user__avatar y le ponemos comillas vacias para que no sea vea
4.-Para que se vea una imagen U otra, utilizaremos la condicional or (||). Volvemos a utilizar la línea 11 y añadimo el || y la otra condición que queremos comparar, en este caso: si no se ve la foto de Bill (user__avatar) queremos que se vea la otra (DEFAULT_AVATAR)*/





