$(document).ready(function(){


	reloadLinks();
	//Trabajar con el DOM y los Textos

	var lista = [];
	
	$("#borrar").click(function(){
			$("#menu").remove('<a href="'+$("#add_link").val()+'"></a>');
	});

	$('#addButton').click(function(){
		//console.log($("#add_link").val());

		//Con HTML se añaden elementosy se borra lo demas y con append solo se añade 
		$("#menu").append('<a href="'+$("#add_link").val()+'"></a>');

		//lista.add($("#menu").html('<a href="'+$("#add_link").val()+'"></a>'));
		reloadLinks();
		$("#add_link").val('');
		
	});


	function reloadLinks(){

		$('a').each(function(index){

		var that = $(this);
		var enlace = that.attr("href");

		that.text(enlace);


	});

	}

	



});