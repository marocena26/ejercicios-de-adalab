"use strict";

//En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.


for (let i = 2017; i <= 2017+15*3; i += 3) {
  console.log('Esta es la luna del año: ' + i);
}

  
//1-Inicializamos la variable en el año 2017 "let i =2017";
//2-La condición será que desde 2017 le sume 15 lunas más (15 lunas son 15*3, 45 años);
//3-Hacemos que la actualización se cada 3 años, "i += 3";