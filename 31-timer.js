'use strict'


window.addEventListener('load', function(){

	var titulo = document.querySelector("#titulo");
	var stop = document.querySelector("#button2");

	var size = 10;
	//Timers
	//Permite ejecutar codigo JS cada cierto tiempo que tu estipulas
	var tiempo = setInterval(function(){
		console.log("Set interval ejecutado");

		titulo.style.fontSize = size+"px";

		size = size + 10;


	}, 3000);



	//Para detener el interval


	stop.addEventListener("mouseover", function(){
		
		clearInterval(tiempo);

		alert("Detuviste el interval");
});
});