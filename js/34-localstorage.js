'use strict'

//Local Storage
//Memoria para persistir datos

window.addEventListener('load', ()=>{


	//Comprobar disponibilidad del localstorage
	 if(typeof(Storage) !== 'undefined'){
	 	console.log("Local storage disponible");
	 }else{
	 	console.log("Local storage NO disponible");	
	 }

	 //Como guardar datos en el navegador
	 localStorage.setItem("titulo","Curso JavaScript");


	 //Recuperar elementos y mostrarlo en pagina web

	 var guardado = localStorage.getItem("titulo");

	 //document.write(guardado);
	 document.querySelector("#titulo").innerHTML = 
	 localStorage.getItem("titulo");

	 //Guardar objecto JSON en localStorage

	 var usuario ={

	 	nombre: "Luis",
	 	mail: "luis@gmail.com",
	 	web: "Pagina"
	 }

	 localStorage.setItem("usuario", JSON.stringify(usuario));

	 //Recuperar el objeto

	 

	 var userJS = JSON.parse(localStorage.getItem("usuario"));

	 console.log(userJS.mail);

	 //Borar del local storage

	 localStorage.removeItem("usuario");

	 //Vaciar todo el localstorage
	 //localStorage.clear();

	 


});