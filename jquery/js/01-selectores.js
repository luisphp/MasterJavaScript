$(document).ready(function(){
	//console.log("Estamos listos");


	//Selector ID


	var rojo = $("#rojo").css("background","red");
	rojo.css("color","white");

	var amarillo = $("#amarillo").css("background","yellow");
	amarillo.css("color","green");


	var verde = $("#verde").css("background","blue");
	verde.css("color","white");

	var miclase = $(".zebra");

	console.log(miclase);

	console.log(rojo);

	//Evento Click en jquery

	/*$(".zebra").click(()=>{

		console.log("Click zebra");

	}); */


	//Selectores de etiqueta

	var parrafo = $('p');

	parrafo.click(function(){

		//Para optimizar codigo se debe acceder al DOM 1 vez

		var that = $(this);
		

		if(that.hasClass("grande")){
			that.removeClass("grande");
		}else{
			that.addClass("grande");
		}

	});

		//Selectores de atributos

		$('[title="Google"]').css('background','#ccc');
		$('[title="Facebook"]').css('background','blue');



});