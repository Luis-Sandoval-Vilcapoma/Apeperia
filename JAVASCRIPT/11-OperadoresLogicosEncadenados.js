const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero = 17;
let estaAcompanado = true;
let tienePasaporte = true;
let estaCasado = true;

console.log(`Verificando pasajes parra ${ciudadDestino}`);


//Apliacacion llogica
if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18  && tienePasaporter && !estaCasado)) {
    console.log('Paquete parar solteros disponiblee para la venta');
} else {
    console.log('Ciudad no disponible para viajar');
}

