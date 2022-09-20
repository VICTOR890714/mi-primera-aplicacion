const cedula = 94;
let retiro = 10;
let consignacion = 10;

const cliente = [
  { nombre: "victor ", cedula: 123, saldo: 2000, activo: true },
  { nombre: "alexander ", cedula: 94, saldo: 200, activo: true },
  { nombre: "mariana ", cedula: 500, saldo: 300, activo: true },
];



//consultar saldo
function consultarSaldo(usuario) {
  let consultarCliente = cliente.filter((cliente) => cliente.cedula === usuario);
  let { saldo, nombre, activo } = consultarCliente[0];
  const mensaje = `hola ${nombre} su saldo en estos momentos es de : ${saldo} su estado es ${activo}`;
  
  console.log(mensaje);

  validarEstado(activo);

  validarIngreso(activo);
}

consultarSaldo(cedula);

//validar estado
function validarEstado(estado) {
  if (estado) {
    console.log("si tienes acceso a la aplicacion");
  } else {
    console.log("no tienes acceso a la aplicacion");
  }
}
//

// consignacion
function consignar() {
  const consignarSaldo = consignacion;
  const mensajeConsigacion = `tu consigacion es de : ${consignarSaldo}`;
  console.log(mensajeConsigacion);
}

consignar();

//retirar saldo
function retirarSaldo() {
  const retiroSaldo = retiro;
  const RetiroCliente = `tu retiro fue de ${retiroSaldo}`;
  console.log(RetiroCliente);
}
retirarSaldo();

//saldo actual
function saldoActual(usuario) {
  let resultado = cliente.filter((cliente) => cliente.cedula === usuario);
  const { saldo } = resultado[0];
  const actualSaldo =( saldo + consignacion) - retiro;
  const actual = `despues un consigacion o retiro su saldo actual es de : ${actualSaldo}`;
  console.log(actual);
}

saldoActual(cedula);

//validar ingreso
function validarIngreso(estado) {
  if (estado) {
    console.log("pues hacer todo tipo de transaccion");
  } else {
    console.log("no puedes hacer ninguna transaccion");
  }
}


/*
let saldoCliente = 0;
let retirar = 20;

function ingresaSaldo (consignacion) {
   return saldoCliente += consignacion;
}


function retiroSaldo(saldoCliente) {
       return saldoCliente -= retirar;
}

saldoCliente = ingresaSaldo(200);
saldoCliente = ingresaSaldo(200);
saldoCliente = ingresaSaldo(200);
saldoCliente = ingresaSaldo(200);

console.log(`tu consignacion fue de ${saldoCliente}`)

console.log(`tu retiro fue de ${retirar}`)
const actualsaldo = retiroSaldo(saldoCliente)
console.log(`tu saldo actual es de ${actualsaldo}`)

*/


