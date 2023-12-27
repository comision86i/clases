localStorage.setItem('nombre', 'Julio');
localStorage.setItem('nombre2', 'Mikael');

const array = [{nombre: "Nicolas", edad: 24}, {nombre: "Christian", edad: 32}];

localStorage.setItem('usuarios', JSON.stringify(array));

let usuarios = JSON.parse(localStorage.getItem('usuarios'));
console.log(usuarios)
usuarios.push({nombre: "Ramiro", edad: 22})
localStorage.setItem('usuarios', JSON.stringify(usuarios));

//localStorage.removeItem('usuarios2');
//localStorage.clear()