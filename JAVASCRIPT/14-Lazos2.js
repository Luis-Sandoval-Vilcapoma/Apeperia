const ciudadesDisponibles = new Array("Bogota","Lima","Santiago", "Montevideo");
const precioCiudad = new Array(500,400,380,200);
const datos = [
    {
        'ciudad':'Bogotá',
        'Precio': 500
    },
    {
        'ciudad':'Lima',
        'Precio': 400
    },
    {
        'ciudad':'Santiago',
        'Precio': 300
    },
    {
        'ciudad':'Montevideo',
        'Precio': 200
    },
    
];

const presupuestoDisponible = 400;
let i = 0;
/*
while(i< datos.length && datos[i].precio > presupuestoDisponible ){
    i++
}
*/
let ciudadSeleccionada = '';
do {
    if( datos[i].Precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
    i++;
} while(i < datos.length && ciudadSeleccionada  == '')
if ( ciudadSeleccionada == '')
    console.log("No tenemos pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: "+ciudadSeleccionada);
