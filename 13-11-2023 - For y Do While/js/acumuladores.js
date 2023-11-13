/* Desarrollar un programa que permita la carga de 5 valores por teclado y nos muestre posteriormente la suma. */

let numero, acumulador, contador;
contador = 1;
acumulador = 0;

while (contador <= 5) {
    numero = parseInt(prompt('Ingrese un número: '));
    acumulador = acumulador + numero;
    document.write(`La suma de los valores ingresados en la vuelta ${contador} es: ${acumulador}`);
    document.write('<br>');
    contador++;
}