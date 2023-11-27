const paises = ['Cuba', 'Chile', 'Ucrania', 'Australia'];

const salida = paises.filter(pais => pais.length > 6)
document.write(`Los países con más de 6 letras son: ${salida}`);

console.log(paises.length)