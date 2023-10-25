let nombre, nota;

nombre = prompt('Ingrese el nombre del alumno: ');
nota = parseInt(prompt('Ingrese la nota del alumno: '));

if(nota >= 4){
    document.write(`${nombre} está aprobado con un ${nota} <br>`);
    document.write(nombre + ' está aprobado con un ' + nota)

    alert(`${nombre} está aprobado con un ${nota}`);

    console.log(`${nombre} está aprobado con un ${nota}`);
}
