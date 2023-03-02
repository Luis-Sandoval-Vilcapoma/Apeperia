const ciudad1 = "Bogota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

const ciudadesDisponibles = new Array("Bogota","Lima","Santiago");


const   paisesDisponibles = ["Colombia","Peru","Chile","Brasil","Argentina"];


paisesDisponibles.push("Uruguay");
ciudadesDisponibles.push("Montevideo");
    
console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

paisesDisponibles.unshift("Ecuador");
ciudadesDisponibles.unshift("Quito");

//mostrando prrimer elemento de la lista
console.log(ciudadesDisponibles[0]);
console.log(paisesDisponibles[0]);

paisesDisponibles.splice(1,2,"Venezuela","Paraguay");
console.log(paisesDisponibles);


