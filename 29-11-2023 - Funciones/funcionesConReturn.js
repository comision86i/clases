/* Función Convertir número a texto */
/* function convertirCastellano(numero){
    if( numero == 1){
        return "uno";
    } else if( numero == 2){
        return "dos";
    } else if( numero == 3){
        return "tres";
    } else if( numero == 4){
        return "cuatro";
    } else if( numero == 5){
        return "cinco";
    } else {
        return "Valor ingresado incorrecto o fuera de rango";
    }
}

let numeroIngresado = parseInt(prompt('Ingrese un valor entre 1 y 5'));
let numeroConvertido = convertirCastellano(numeroIngresado);
document.write(numeroConvertido); */

/* Función para formatear una fecha*/
/* function formaterFecha(dia, mes, anio) {
    let fecha = 'Hoy es ' + dia + ' de ';
    switch (mes) {
        case 1:
            fecha = fecha + ' enero ';
            break;
        case 2:
            fecha = fecha + ' febrero ';
            break;
        case 3:
            fecha = fecha + ' marzo ';
            break;
        case 4:
            fecha = fecha + ' abril ';
            break;
        case 5:
            fecha = fecha + ' mayo ';
            break;
        case 6:
            fecha = fecha + ' junio ';
            break;
        case 7:
            fecha = fecha + ' julio ';
            break;
        case 8:
            fecha = fecha + ' agosto ';
            break;
        case 9:
            fecha = fecha + ' septiembre ';
            break;
        case 10:
            fecha = fecha + ' octubre ';
            break;
        case 11:
            fecha = fecha + ' noviembre ';
            break;
        case 12:
            fecha = fecha + ' diciembre ';
            break;
    }
    fecha = fecha + ' de ' + anio;
    return fecha;
}

let dia = parseInt(prompt('Ingrese el numero de día: '));
let mes = parseInt(prompt('Ingrese el numero de mes: '));
let anio = parseInt(prompt('Ingrese el numero de año: '));
let fechaFormateada = formaterFecha(dia, mes, anio);
document.write(fechaFormateada); */

/*Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos. */
/* Solución de Nicolás Cáceres */
/* 
function enteros(numero1, numero2, numero3){
    if (numero1 > numero2 && numero1 > numero3){
        return numero1
    } else if (numero2 > numero1 && numero2 > numero3){
        return  numero2
    } else if (numero3 > numero1 && numero3 > numero2){
        return numero3
    } else {
        return document.write('Ingresó un número inválido')
    }
}

let numero1 = parseInt(prompt('Ingrese el primer número: '))
let numero2 = parseInt(prompt('Ingrese el segundo número: '))
let numero3 = parseInt(prompt('Ingrese el tercer número: '))
 
document.write(`El número mayor es: ${enteros(numero1, numero2, numero3)}`); */

/*Solución de Luka Cáceres*/
/*
function verMayor (num1, num2, num3){
    let numeroMayor
    if (num1 > num2 && num1 > num3){
        numeroMayor = num1;
        return numeroMayor;
    }
    else if(num2>num1 && num2>num3){
        numeroMayor = num2;
        return numeroMayor;
    }  
    else if(num3>num1 && num3>num2){
        numeroMayor = num3;
        return numeroMayor;
    }  
}

let numero1 = parseInt(prompt('ingrese el primer numero: '));
let numero2 = parseInt(prompt('ingrese el segundo numero: '));
let numero3 = parseInt(prompt('ingrese el tercer numero: '));

document.write(verMayor(numero1, numero2, numero3)); */