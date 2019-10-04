'use strict'


window.addEventListener('load', ()=>{
	//Al usar este evento puedes escribir la etiqueta script en el Head ya que 
	//se va a esperar a que se cargue la pagina para cargar los scripts y que no se produzca 
	//algun error


var button = document.querySelector("#button");

	button.classList.toggle('btn-primary');

function cambioColor(){


	if(button.classList.contains('btn-primary')){
		button.classList.toggle('btn-success');
	}else{
		button.classList.toggle('btn-primary');
	}
	
}

//En lugar de llamar al onClick desde el propio HTML se puede usar el onClickListener

button.addEventListener('click', function(){
	cambioColor();
});


//Mouse over

button.addEventListener('mouseover', function(){
	cambioColor();
});


//Presionar teclas y Focus



//Focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus', function(){
	console.log("Estas haciendo focus en el input");
});

//Blur
var input = document.querySelector("#campo_nombre");
input.addEventListener('blur', function(){
	console.log("Estas estas fuera del input");
});




//Keydown
var input = document.querySelector("#campo_nombre");
input.addEventListener('keydown', function(event){
	console.log("Estas pulsando una tecla", String.fromCharCode(event.keyCode));
	
});

//keypress
var input = document.querySelector("#campo_nombre");
input.addEventListener('keypress', function(event){
	console.log("Tecla presionada", String.fromCharCode(event.keyCode));
	
});

//keyup
var input = document.querySelector("#campo_nombre");
input.addEventListener('keyup', function(event){
	console.log("Tecla soltada", String.fromCharCode(event.keyCode));
	
});


}); //Final del evento load()