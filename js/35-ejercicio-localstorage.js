'use strict'

//Añadir peliculas desde un form al local storage y mostrarlo en pantalla

window.addEventListener('load', ()=>{


	console.log("Local Storage Ejercio");

	var form = document.querySelector("#elformulario");
	

	form.addEventListener('submit',()=>{

		var titulo = document.querySelector("#addpelicula").value;

		if(titulo.length >= 1){
				localStorage.setItem(titulo,titulo);
		}

		

	});

	var ul = document.querySelector("#peliculas-list");

	for(var i in localStorage){
		console.log(localStorage[i]);

			if(typeof localStorage[i] == 'string'){
				var li = document.createElement("li");

		li.append(localStorage[i]);
		ul.append(li);
			}
		
	}

	var formulario = document.querySelector("#formularioBorrar");

	formulario.addEventListener('submit',()=>{

		var titulos = document.querySelector("#Pborra").value;

		if(titulos.length >= 1){
				localStorage.removeItem(titulos);
		}

	});




});