/* document.write("Cuidado<br>");
document.write("Ingrese su documento correctamente<br>");
document.write("Cuidado<br>");
document.write("Ingrese su documento correctamente<br>");
document.write("Cuidado<br>");
document.write("Ingrese su documento correctamente<br>"); */

/* function mostrarMensaje() {
    document.write("Cuidado<br>");
    document.write("Ingrese su documento como corresponde<br>");
}

mostrarMensaje();
mostrarMensaje();
mostrarMensaje(); */

/* Confeccionar una función que solicite el ingreso de un entero y nos muestre la tabla de multiplicar de dicho valor. Llamar luego una vez a la función. */

/* function tablaDeMultiplicar(){
    let valor = parseInt(prompt('Ingrese el número de la tabla de multiplicar que desee: '));
    for (let i = 0; i <= 100; i++) {
        let tabla = valor * i;
        document.write(`${i} * ${valor} = ${tabla}`);
        document.write('<br>');
    }
}

tablaDeMultiplicar(); */

/* FUNCIONES CON PARÁMETROS */
/* 
function mostrarComprendidos(inicio, fin){
    for(let i = inicio; i <= fin; i++){
        document.write(i + ' ');
    }
}

let valor1 = parseInt(prompt('Ingrese valor inferior: '));
let valor2 = parseInt(prompt('Ingrese valor superior: '));

/* let valor1 = 1;
let valor2 = 15; */

/* mostrarComprendidos(valor1, valor2);
document.write('<br>');
mostrarComprendidos(100, 120); */

/*Elaborar una función a la cual le enviemos tres enteros y muestre el menor.*/

function menorValor(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        document.write(`El menor de los tres es: ${num1}`);
    } else if(num2 < num3){
        document.write(`El menor de los tres es: ${num2}`);
    } else {
        document.write(`El menor de los tres es: ${num3}`);
    }
}

let valor1 = parseInt(prompt('Ingrese el primer valor: '));
let valor2 = parseInt(prompt('Ingrese el segundo valor: '));
let valor3 = parseInt(prompt('Ingrese el tercer valor: '));
menorValor(valor1, valor2, valor3);

document.write('<br>');
menorValor(5, 35, 6);

