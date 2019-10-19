
    $(document).ready(function(){
     


    	//Slider
      if(window.location.href.indexOf('index') > -1){
      $('.slider').bxSlider();
      }

      //Posts
      if(window.location.href.indexOf('index') > -1){
      var posts = [
      {
      	title: 'Prueba de titulo 1',
      	date: moment().format("MMM Do YY"),
      	content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum'
      },
      {
      	title: 'Prueba de titulo 2',
      	date: moment().format("MMM Do YY"),
      	content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum'
      },
      {
      	title: 'Prueba de titulo 3',
      	date: moment().format("MMM Do YY"),
      	content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum'
      },
      {
      	title: 'Prueba de titulo 4',
      	date: moment().format("MMM Do YY"),
      	content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum'
      }];

      
      //Rellenar posts con un arreglo
      posts.forEach((item, index)=>{
      	var post = `
      	<article class="post">
 				<h2>${item.title}</h2>
 				<span class="date">${item.date}</span>
 				<p>
 				${item.content}
 				</p>
 				<a href="#" class="boton-mas">Leer Más</a>

 			</article>
      	`;

      	$("#posts").append(post);
      });
    }

    //console.log(window.location.href);


     //Cambiador de temas
     var theme = $("#theme");

     $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
     });

     $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
     });

     $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
     });


     //Scroll arriba de la web


     $(".subir").click(function(e){

      e.preventDefault();
        $('html, body').animate({
          scrollTop: 0,
        },500);
        return false;
     });  


     //Login Falso

     $("#login form").submit(function(){

      var form_name = $("#form_name").val();

      localStorage.setItem("form_name", form_name);

     });



     var form_name = localStorage.getItem("form_name");

     if(form_name != null && form_name != 'undefined'){
      var parrafo = $("#about");
     parrafo.html("Bienvenido, "+form_name);
     $("#login").hide();
     parrafo.append("<a href=`#` id='log_out'>Cerrar Sesion</a> ");
  }else{
     $("#login").show();
  }

    $("#log_out").click(function(){
      localStorage.clear();
      //window.reload();
      location.reload();
    });

    //Uso de acordeon cuando se esta en la pantalla about
    if(window.location.href.indexOf('about') > -1){

      $("#acordeon").accordion();

    }

    //Uso de acordeon cuando se esta en la pantalla about
    if(window.location.href.indexOf('reloj') > -1){
     
      setInterval(function(){
          
          var reloj = moment().format("hh:mm:ss");


          $("#reloj").html(reloj);

      },1000);

      
      
    }

    //Validacion de formulario con la libreria form validator que se copio
    //y pego como CDN

    if(window.location.href.indexOf('contact') > -1){


      $("#datepicker").datepicker({
        dateFormat: 'dd-mm-yy',
      });

        $.validate({


          lang: 'es',
          errorMessagePosition: 'top',
          scrollToTopOnError: true



        });



    }


     

    });
