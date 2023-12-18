/* let myp = document.createElement('p');
myp.innerHTML = 'yet another';
myp.style.border = '2px dotted blue';
document.body.appendChild(myp); */

let li2 = document.getElementById('item2');
li2.style.backgroundColor = 'red';

let celda = document.getElementById('celda');
celda.style.backgroundColor = 'yellow';

let lista1 = document.getElementById('lista1');
for (const item of lista1.children) {
    item.style.fontFamily = 'Courier';
    item.style.fontSize = '2rem';
}
let fila = document.querySelector('.fila');
fila.style.backgroundColor='blue';

const itemList = document.querySelector('li');
itemList.style.backgroundColor = 'pink';

/* const li2 = document.querySelector('#item2');
li2.style.backgroundColor = 'red';

const celda = document.querySelector('#celda');
celda.style.backgroundColor = 'yellow';

const lista1 = document.querySelector('#lista1');
for (const item of lista1.children) {
    item.style.fontFamily = 'Courier';
    item.style.fontSize = '1rem';
} */

