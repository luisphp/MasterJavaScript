'use strict'

//DOM - Document Object Model

//var elemento = document.getElementById("Caja");
//Conseguir un elemento por su ID concreto

var elemento2 = document.getElementById("Caja");

elemento2.innerHTML = "Cambio de texto";

elemento2.style.background = "red";
elemento2.style.padding = "20px";
elemento2.style.color = "white";



//console.log(elemento);
console.log(elemento2);

function cambiaColor(color){

	elemento2.style.background = color;
}


//Conseguir un elemento por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

todosLosDivs[2].style.background = "red";

console.log(todosLosDivs);

//Conseguir in elemento por su clase css

var divsRojos = document.getElementsByClassName('rojo');

console.log(divsRojos);

divsRojos[0].style.background = "yellow";
divsRojos[1].style.background = "blue";
