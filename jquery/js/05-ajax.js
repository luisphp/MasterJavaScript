$(document).ready(()=>{

	//Peticiones Ajax: Load;  Get - Post

	//Load

	//$("#datos").load('https://reqres.in/');

	//Get Post
	/*
	$.get('https://reqres.in/api/users', {page: 2}, function(response){
		console.log(response.data[0]);
		response.data.forEach((element, index)=>{
			$("#datos").append("<p>"+element.first_name+"</p>");
		});
	});
	*/
	//recibir datos de un reuqest POST usando un formulario en Jquery
	

	$("#formulario").submit(function(e){

		e.preventDefault();
		var usuario ={
		name: $('input[name="name"]').val(),
		web: $('input[name="web"]').val(),
		};

	//console.log(usuario);

	/*
	Peticion POST comun
	$.post($("#formulario").attr("action"),usuario, function(response){
		console.log(response);
	});
	return false;
	});
	Fin peticion POST comun 
	*/



	//Método $.ajax
	
	$.ajax({
		type: 'POST',
		data: usuario,
		url: $("#formulario").attr('action'),
		beforeSend: function(){
				console.log("Enviando usuario...");
		},
		success: function(response){
			console.log(response);
			console.log("registrado Correctamente"); 	
		},
		error: function(){
			console.log("bad request");
		},
		timeout: 2000

		//En caso de que la peticion se pase de los 2 segundos del time out
		//Se muestra el mensaje de error previamente configurado

	});
	
		return false;
	});
});