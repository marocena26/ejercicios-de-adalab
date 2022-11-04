"use strict";


// Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.

const users = [
    { name: "María", isPremium: false },
    { name: "Lucía", isPremium: true },
    { name: "Susana", isPremium: true },
    { name: "Rocío", isPremium: false },
    { name: "Inmaculada", isPremium: false },
  ];

//Tenemos que crear un nuevo array con los saludos: a los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.

const greetings = users.map((user) => {
    if (user.isPremium){
        return 'Bienvenida ' + user.name + '. Gracias por confiar en nosotros.'
    } else {
        return 'Bienvenida ' + user.name
    }
})

console.log(greetings);