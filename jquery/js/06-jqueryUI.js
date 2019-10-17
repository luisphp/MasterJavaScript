$(document).ready(function(){
		console.log("Listo Jquery UI");

//Mover elementos por la pagina
$(".elemento").draggable();


//Redimensionar
$(".elemento").resizable();	

//selectable 
//$(".lista_seleccionable").selectable();

//sorting
$(".lista_seleccionable").sortable({
	update: function(event, ui){
		console.log("Ha cambiado el arreglo");
	}
});

//dropable
$("#elemento_movido").draggable();
$("#area").droppable({
	drop: function(){
		console.log("Has soltado algo dentro del área");
	}

});


//efectos

$("#mostrar").click(function(){
	$(".caja-efectos").toggle("shake", 300);
});


//Tooltops
$(document).tooltip();

//Dialog

$( "#dialog" ).dialog();


//DAte picker
$( "#datepicker" ).datepicker();



});