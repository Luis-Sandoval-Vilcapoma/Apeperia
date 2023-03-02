const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero = 17;
let estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);
if (edadPasajero >= 18 || estaAcompanado == true ) {
    if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) ) {
        console.log('Pasaje disponible para veenta');
    }
    else {
    console.log('Ciudad no disponible para viajar');
    }
} else {
    if(edadPasajero >= 16 && ciudadDestino == "Lima"){
        console.log('Pasaje disponiblee para venta');
    } 
    else {
        console.log('Pasajero no cumple las reglas');
    }
    
}