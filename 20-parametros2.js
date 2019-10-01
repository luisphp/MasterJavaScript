'use strict'

//Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta1: ", fruta1);
	console.log("Fruta2: ", fruta2);
	console.log("Fruta2: ", resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Fresa", "Tomate", "Pera", "Melon");

//Para pasar mas parametros de los que estan predefinidos se usa el REST

var frutas = ['Naranja','Manzana'];
listadoFrutas(...frutas, "Manzana", "Fresa", "Tomate");

//Para organizar los parametros en el orden que estan en el array
//a un listado, se debe usar ... antes del nombre del arreglo
//a eso se le conoce como SPREAD