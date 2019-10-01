'use strict'

/*
que pida 6 numeros, que los guarde en un array
1- Mostrar el array completo en pagina yen consola.
2- Ordenarlo y mostrarlo
3- Invertir su orden y mostrarlo
4- Cuantos elementos tiene el array
5- Busqueda de un valor introducido por el usuario, valor y su indice

*/

var arreglo = [];

while( arreglo.length < 6){
	var numero = prompt("Dame un valor");
	arreglo.push(numero);
}

var arreglado= arreglo.sort();

console.log(arreglo);
console.log("El arreglo ordenado es: "+arreglado);
console.log("El arreglo al reves es: "+arreglado.reverse());
console.log("El array tiene: "+arreglo.length+" &aacutemeros");