jQuery(document).ready(()=>{

	//alert("Efectos");

	//Efectos en Jquery

	jQuery("#mostrar").click(function(){
	  //$("#caja").show('slow');
	  jQuery("#caja").fadeIn();
	});

	jQuery("#ocultar").click(function(){
	  //$("#caja").hide('slow');
	  //jQuery("#caja").fadeOut();
	});

	jQuery("#ocultar").click(function(){
	  //$("#caja").hide('slow');
	  jQuery("#caja").animate({marginLeft: 500},'fast');
	  jQuery("#caja").animate({marginLeft: -450},'fast');
	  jQuery("#caja").animate({marginLeft: 350},'fast');
	  jQuery("#caja").animate({marginLeft: -250},'fast');
	  jQuery("#caja").animate({marginLeft: 150},'fast');
	  jQuery("#caja").animate({marginLeft: -50},'fast');
	  jQuery("#caja").animate({marginLeft: 0},'fast');
	});


		var cont = 1;
	jQuery("#animador").click(function(){
	  //$("#caja").hide('slow');

	  console.log($("#animador").height()+ " - "+
	  	$("#animador").css("font-size")); 
	  
	  if(cont == 1 ){
	  	jQuery("#animador").animate({marginLeft: '500px',
	  	fontSize: '50px',
	  	height: '200px',
	  },'fast');

	  cont = 0;
	  }else{
	  	jQuery("#animador").animate({marginLeft: '0px',
	  	fontSize: '16px',
	  	height: '38px',
	  },'fast');
	  	cont = 1;
	  }

	});

});