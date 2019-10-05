'use strict'

window.addEventListener('load', ()=>{
	console.log("DOM cargado!");


var form = document.querySelector("#formulario");
var nombre = document.querySelector("#nombre").value;
var apellido = document.querySelector("#apellido").value;
var edad = document.querySelector("#edad").value;

 form.addEventListener("submit",function(){

 	console.log("Evento Submit capturado"+nombre+apellido+edad);

 	

 });


 	




});//Final del evento load