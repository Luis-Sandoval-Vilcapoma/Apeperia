//Operadorees de comparacion
const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

//Palabra reserrvada if
//Evalua una condicion
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log('Pasaje disponible para venta');   
} else {
    console.log('Ciudad no disponible para viajar');
}

const valorrPasaje = 1000;
if (valorrPasaje == 1000) {
    console.log('El pasaje vale 1000');   
} else {
    console.log('Pasaje no disponible para viajar');
}

const edadPasajero = 17;
const estaAcompanado = true;

//Apliacacion llogica
if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || estaAcompanado == true )) {
    console.log('Pasaje disponiblee para veenta');
} else {
    console.log('Ciudad no disponible para viajar');
}

//aplicacion logica negativa
if (!((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || estaAcompanado == true ))) {
    console.log('Ciudad no disponible para viajar');
} else {
    console.log('Pasaje disponible para la venta');
}
