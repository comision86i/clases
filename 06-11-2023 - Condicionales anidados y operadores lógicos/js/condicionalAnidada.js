/*Confeccionar un programa que pida por teclado tres notas de un alumno, calcule el promedio e imprima alguno de estos mensajes:

Si el promedio es >=7 mostrar "Promocionado".
Si el promedio es >=4 y <7 mostrar "Regular".
Si el promedio es <4 mostrar "Reprobado".*/

let nota1, nota2, nota3, suma, promedio;
nota1 = parseFloat(prompt('Ingrese 1ra nota: '));
nota2 = parseFloat(prompt('Ingrese 2da nota: '));
nota3 = parseFloat(prompt('Ingrese 3ra nota: '));

suma = nota1 + nota2 + nota3;
promedio = suma / 3;

/* if(promedio >= 7){
    alert(`El alumno está PROMOCIONADO con nota ${promedio}`);
} else if(promedio >= 4 && promedio < 7){
    alert(`El alumno está REGULAR con nota ${promedio}`);
} else if(promedio < 4){
    alert(`El alumno está REPROBADO con nota ${promedio}`);
} else {
    alert(`Los valores ingresados son incorrectos`);
} */

switch (true) {
    case (promedio >= 7):
        console.log('Promocionado');
        break;
    case (promedio >= 4 && promedio < 7):
        console.log('Regular');
        break;
    case (promedio < 4):
        console.log('Reprobado');
        break;
    default:
        console.log('No son valores correctos');
        break;
}