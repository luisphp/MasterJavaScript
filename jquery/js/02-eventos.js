$(document).ready(function(){


	//Eventos MouseOver y MouseOut

	var caja = $('#caja');

	/*
	caja.mouseover(function(){
		$(this).css("background-color","black");
	});

	caja.mouseout(function(){
		$(this).css("background-color","yellow");
	});
	*/
	/*
	$("#caja").mouseover(function(){
	  $("#caja").css("background-color", "red");
	});
	*/

	//hover

	/*
	function cambiaNegro(){
		$("#caja").css("background-color","black");
	}

	function cambiaAmarillo(){
		$("#caja").css("background-color","yellow");
	}
	*/

	//caja.hover(cambiaNegro,cambiaAmarillo);
		var n = 1;

	caja.click(function(){

		

		if(n == 1){
			$("#caja").css("background-color","blue").css("color","white");
			n = 0;
		}else{
			$("#caja").css("background-color","green").css("color","yellow");
			n = 1;
		}
		
		//console.log("Hey");
	});


	//Eventos doble click

	caja.dblclick(()=>{
		$("#caja").css("background-color","White").css("color","black");
			n = 0;
	});

	//Eventos Focus y BLur

	
	
	
	//MouseUp y el MouseDown



});