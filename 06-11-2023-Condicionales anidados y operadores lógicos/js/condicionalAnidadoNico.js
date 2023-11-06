/* Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el mensaje 'Promocionado'.*/

let numero1 = parseInt(prompt('ingrese el primer numero'));
let numero2 = parseInt(prompt('ingrese el segundo numero'));
let numero3 = parseInt(prompt('ingrese el tercer numero'));
let suma = numero1 + numero2 + numero3 + numero4;

if ((suma/4) >= 7){
    console.log(`su nota es ${suma} esta aprobado`)
}
else if ((suma/4) <=5){
    console.log(`su nota es ${suma} esta desaprobado`)
}
else  {
    console.log(`ingrese una nota valida`)
}