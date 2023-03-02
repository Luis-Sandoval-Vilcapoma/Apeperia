const ciudadesDisponibles = new Array("Bogota","Lima","Santiago", "Montevideo");
const ciudadDestino = "Bogota";

let valorPasaje = 0;


console.log(`Verificando pasajes para ${ciudadDestino}`);

if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
    //Coondicion con if
    /*
    if(ciudadDestino === "Bogota") {
        valorPasaje = 500;
    } else if (ciudadDestino == "Lima") {
        valorPasaje = 400;
    } else if (ciudadDestino == "Santiago") {
        valorPasaje = 300;
    } else if (ciudadDestino == "Montevideo") {
        valorPasaje = 200;
    }*/
    switch(ciudadDestino){
        case    "Bogota": valorPasaje= 500;
        break;
        case    "Lima": valorPasaje= 400;
        break;
        case    "Santiago": valorPasaje= 380;
        break;
        case    "Montevideo": valorPasaje= 200;
        break;
        default: valorPasaje= 0;
        break;
    }
    console.log(`El valor del pasaje es : ${valorPasaje}`);
} else {
    console.log(`Ciudad no está disponible`);
}
