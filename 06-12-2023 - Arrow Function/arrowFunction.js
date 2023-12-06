/*Ejemplo 1*/
/* function (a){
    return a + 100;
}

a => a + 100; */

/*Ejemplo 2*/
/* function (a, b){
    return a + b + 100;
}

(a, b) => a + b + 100; */


/*Ejemplo 3*/
/* let a = 4;
let b = 2;
function (){
    return a + b + 100;
}

() => a + b + 100; */

/* let valor = parseInt(prompt('Ingrese un número: '));

document.write(Bob(valor));

function Bob(a){
    return a + 100
} */

let valor = parseInt(prompt('Ingrese un número: '));
let Bob = (a) => a + 100;

document.write(Bob(valor));

