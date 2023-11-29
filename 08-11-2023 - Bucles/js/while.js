/* let numero = 0;
let acumulador = 0;

while (numero < 3) {
    numero++;
    console.log(`Estamos en el número: ${numero}`)
    acumulador += numero
    console.log(`Llevamos acumulados: ${acumulador}`);
}

console.log('Esto se ejecuta fuera del bucle'); */

/* let numero = parseInt(prompt('Ingrese un número: '));
let acumulador = 0;

while (numero < 100) {
    numero++;
    console.log(`Estamos en el número: ${numero}`)
    acumulador += numero
    console.log(`Llevamos acumulados: ${acumulador}`);
}

console.log('Esto se ejecuta fuera del bucle'); */

/* Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado). */
let numeros = 0;
let contador = 1;

document.write(`La serie es: `);
document.write('<br>');
while (contador <= 25) {
    contador++;
    numeros = numeros + 11;
    document.write(numeros);
    document.write('<br>');
}