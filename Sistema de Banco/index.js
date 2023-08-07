/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { CuentaCorriente } from './CuentaCorriente.js';
import { CuentaAhorro } from './CuentaAhorro.js'
import { CuentaNomina} from './CuentaNomina.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('Maria', '16979808', '8989');

const cuentaDeLeonardo = new CuentaCorriente( cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente( cliente2, '2', '002');

const cuentaAhorroLeonardo = new CuentaAhorro( cliente, '9985', '001',0);

const cuentaSimple = new Cuenta(cliente, '432', '001', 0);



const CuentaNominaLeonardo = new CuentaNomina( cliente, '9985', '001',100);

CuentaNominaLeonardo.depositoEnCuenta(150);

console.log(CuentaNominaLeonardo.verSaldo());