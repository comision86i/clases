/* Confeccionar un programa que solicite que ingrese un valor entre 1 y 5. Luego mostrar en castellano el valor ingresado. Mostrar un mensaje de error en caso de haber ingresado un valor que no se encuentre en dicho rango. */

/* let valor = parseInt(prompt('Ingrese un valor comprendido entre 1 y 5: '));
switch (valor) {
    case 1:
        document.write('uno');
        break;
    case 2:
        document.write('dos');
        break;
    case 3:
        document.write('tres');
        break;
    case 4:
        document.write('cuatro');
        break;
    case 5:
        document.write('cinco');
        break;
    default:
        document.write('Ingresó un valor fuera de rango o incorrecto');
        break;
} */

/*Ingresar por teclado el nombre de un color (rojo, verde o azul), luego mostraremos un mensaje indicando el color ingresado*/

let color = prompt('Ingrese alguno de estos colores (rojo, verde o azul): ');
switch (color) {
    case 'rojo':
        document.write('El color es rojo');
        console.log('El color es rojo');
        break;
    case 'verde':
        document.write('El color es verde');
        console.log('El color es verde');
        break;
    case 'azul':
        document.write('El color es azul');
        console.log('El color es azul');
        break;
    default:
        document.write('Dato ingresado incorrecto');
        console.log('Dato ingresado incorrecto');
        break;
}