"use strict";

//Definición de los objetos

const adalaber1  = { //Objeto 1
    nameAda: 'Susana',
    age: 34,
    profession: 'periodista',
    showBio: function () {
        return 'Mi nombre es ' + this.nameAda + ', tengo ' + this.age + ' años y soy ' + this.profession;},
};

console.log(adalaber1.showBio());

const adalaber2 = { //Objeto 2
    nameAda: 'Rocío',
    age: 25,
    profession: 'actriz',
    showBio2: function () { 
        return 'Mi nombre es ' + this.nameAda + ', tengo ' + this.age + ' años y soy ' + this.profession;},
};

console.log(adalaber2.showBio2());



const adalaber1Profile = document.querySelector('.adalaber1');
const adalaber2Profile = document.querySelector('.adalaber2');

adalaber1Profile.innerHTML = `Mi nombre es ${adalaber1.nameAda}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}`;
adalaber2Profile.innerHTML = `Mi nombre es ${adalaber2.nameAda}, tengo ${adalaber2.age} años y soy ${adalaber2.profession}`;

