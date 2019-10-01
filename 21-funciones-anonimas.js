'use strict'

//Funcion anonima es que no tiene nombre y esa instruccion se guarda dentro de una variable
//Es una funcion que no tiene nombre
var pelicula = function (nombre){

	return "La pelicula es: "+nombre+"</br>";

}

//Callback
/*
function sumame(num1, num2){
	var sumar = num1 + num2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

console.log(sumame(1,3)+"</br>");
*/
//Ejemplo:

function sumame(num1, num2, sumaYmuestra, sumaPorDos){
	var sumar = num1 + num2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(5,7, function(dato){
	console.log("La suma es: ",dato);
}, function(dato){
	console.log("La suma por dos es: ",(dato*2));
});


//las funcioens flechas se realizan de la siguiente forma:


function sumame(num1, num2, sumaYmuestra, sumaPorDos){
	var sumar = num1 + num2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(5,7, dato => {
	console.log("La suma es: ",dato);
}, dato => {
	console.log("La suma por dos es: ",(dato*2));
});



