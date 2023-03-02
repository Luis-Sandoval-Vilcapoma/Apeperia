
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

const   paisesDisponibles = ["Colombia","Peru","Chile","Brasil","Argentina","Uruguay","Venezuel"];

const cantidadCiudades = ciudadesDisponibles.length;


console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

//remover el prrimer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemoos ${ciudadesDisponibles.length} elementos`);

//remover e ultimo elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemoos ${ciudadesDisponibles.length} elementos`);

//filtrar un elemento de la lista
const paisesFiltrados = paisesDisponibles.filter((e)=> e == 'Brasil');
console.log(paisesFiltrados); 

// Unificar los lementos en una cadena de caracteres
console.log(paisesDisponibles.join('-'));


//Ordenar una lita alfabeticamente
console.log(paisesDisponibles.sort());
console.log(paisesDisponibles);

//Conociendo la posicion
console.log(`Peru esta en la posicion ${paisesDisponibles.indexOf('Peru')}`);

//Unificar dos listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);

console.log(listaPaisesYCiudades);