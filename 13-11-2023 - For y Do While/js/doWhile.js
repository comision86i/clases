/*Escribir un programa que solicite la carga de un número entre 0 y 999, y nos muestre un mensaje de cuántos dígitos tiene el mismo. Finalizar el programa cuando se cargue el valor 0.*/

let valor;
do {
    valor = parseInt(prompt('Ingrese un valor entre 0 y 999: ', ''));
    document.write(`El valor ${valor} tiene: `);
    if(valor >= 0 && valor < 10) {
        document.write('Tiene 1 dígito');
    } else if (valor < 100) {
        document.write('Tiene 2 dígitos');
    } else if (valor < 1000) {
        document.write('Tiene 3 dígitos');
    } else {
        document.write('El valor ingresado es incorrecto o no está dentro del rango solicitado');
    }
    document.write('<br>');
} while(valor != 0);