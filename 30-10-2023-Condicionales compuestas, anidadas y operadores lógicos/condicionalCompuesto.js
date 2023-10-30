/* Realizar un programa que solicite dos números y muestre el mayor de ellos */

let num1, num2;

num1 = parseInt(prompt('Ingrese el primer número: '));
num2 = parseInt(prompt('Ingrese el segundo número: '));

if(num1 > num2){
    console.log(`El número ${num1} es mayor que ${num2} `);
} else {
    console.log(`El número ${num2} es mayor que ${num1} `);
}