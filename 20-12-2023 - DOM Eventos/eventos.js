/* let btnEnviar = document.getElementById('enviarDatos');
let btnCalcular = document.getElementById('calcularDatos');
let btnRefrescar = document.getElementById('refrescarPantalla');

btnEnviar.addEventListener('click', enviarDatos, false);
btnCalcular.addEventListener('click', calcularDatos, false);
btnRefrescar.addEventListener('click', refrescarpantalla, false);

function enviarDatos(e){
    console.log('enviar datos...' + e.target);
}

function calcularDatos(e){
    console.log('calcular datos...' + e.target);
}

function refrescarpantalla(e){
    console.log('refrescar pantalla...' + e.target);
} */

let boton1 = document.getElementById('boton1');
let boton2 = document.getElementById('boton2');
let boton3 = document.getElementById('boton3');
let btnEliminar = document.getElementById('botoneliminar');

boton1.addEventListener('click', mostrarMsg ,false);
boton2.addEventListener('click', mostrarMsgGonza,false);
boton3.addEventListener('click', mostrarMsgNico,false);
btnEliminar.removeEventListener('click', eliminarMensaje, false );

function mostrarMsg(e){
    alert('Hola Julio!');
}

function mostrarMsgGonza(e){
    alert('Hola Gonza!');
}

function mostrarMsgNico(e){
    alert('Hola Nico!');
}

function eliminarMensaje(e) {
    console.log("Mensaje eliminado");
}