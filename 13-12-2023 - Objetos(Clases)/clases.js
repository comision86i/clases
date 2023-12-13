/* class Auto {
    constructor(color, modelo, tipo, anio){
        this.color = color;
        this.modelo = modelo;
        this.tipo = tipo;
        this.anio = anio;
    }

    //Metodos de la clase
    marchar(){
        alert('Mi auto está andando');
    }
    apagar(){
        alert('Mi auto está apagandose');
    }
    frenar(){
        alert('Mi auto está frenando');
    }
}

let fiatPalio = new Auto('Negro', 'Fire', 'Hatchback', 2016);
let ferrari = new Auto('Rojo', '458', 'Spider', 2010);

console.log(fiatPalio.tipo);
console.log(ferrari); */


/* Plantear una clase Cliente que permita almacenar el nombre de un cliente y el saldo actual. Definir además del constructor otros dos métodos que permitan depositar y extraer dinero. */


/*EJEMPLO CLIENTE BANCARIO*/
/* class Cliente { 
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    depositar(dinero){
        this.saldo = this.saldo + dinero;
    }

    extraer(dinero){
        this.saldo = this.saldo - dinero;
    }
}

const cliente1 = new Cliente('Julio', 1200);
document.write(`Nombre del cliente: ${cliente1.nombre}`, '<br>');
document.write(`Saldo del cliente: ${cliente1.saldo}`, '<br>');

cliente1.depositar(parseInt(prompt('Ingrese el monto a depositar: ')));
document.write(`Saldo del cliente después de depositar: ${cliente1.saldo}`, '<br>');
cliente1.extraer(parseInt(prompt('Ingrese el monto a extraer: ')));
document.write(`Saldo del cliente después de extraer: ${cliente1.saldo}`, '<br>');
cliente1.depositar(parseInt(prompt('Ingrese el monto a depositar: ')));
document.write(`Saldo del cliente después de depositar: ${cliente1.saldo}`, '<br>');

const cliente2 = new Cliente('Christian', 3000);
document.write(`Nombre del cliente: ${cliente2.nombre}`, '<br>');
document.write(`Saldo del cliente: ${cliente2.saldo}`, '<br>');

cliente2.depositar(parseInt(prompt(`Ingrese el monto a depositar a ${cliente2.nombre}: `)));
document.write(`Saldo del cliente después de depositar: ${cliente2.saldo}`, '<br>');
cliente2.extraer(parseInt(prompt(`Ingrese el monto a depositar a ${cliente2.nombre}: `)));
document.write(`Saldo del cliente después de extraer: ${cliente2.saldo}`, '<br>');
cliente2.depositar(parseInt(prompt(`Ingrese el monto a depositar a ${cliente2.nombre}: `)));
document.write(`Saldo del cliente después de depositar: ${cliente2.saldo}`, '<br>');
 */