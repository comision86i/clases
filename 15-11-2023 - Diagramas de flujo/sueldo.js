let horasTrabajadas, sueldo;
const costoHora = 30;
horasTrabajadas = parseInt(prompt('Ingrese la cantidad de horas trabajadas por el empleado: '));
/* costoHora = parseFloat(prompt('Ingrese el costo de la hora')); */

sueldo = horasTrabajadas * costoHora;

document.write(`El sueldo del empleado es: U$S ${sueldo}`);