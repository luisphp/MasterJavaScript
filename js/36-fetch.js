'use strict';


//Fetch y peticiones asincronas 

window.addEventListener('load', ()=>{
/*
fetch('https://jsonplaceholder.typicode.com/todos/28')
  .then(response => response.json())
  .then(json => console.log(json));
*/

  //fetch y peticiones a servicios restfull<<<<<


  var div_usuarios = document.querySelector("#usuarios");
  var aviso = document.querySelector(".loading");
  var div_janet = document.querySelector("#janet");
  var div_profesor = document.querySelector("#profesor");

  	
  	getUsuarios().then(data => data.json())
  				 .then(users => {	
  					listadoUsuarios(users.data);


  					
  					return getInfo();
  			})
  			.then(data => {
  				  	console.log(data);

  				  	div_profesor.innerHTML = data;

  				  	return getJanet();

  				  })	 
  			.then(data => data.json())
  			.then(user => {
  				console.log(user)
  				  		mostrarJanet(user.data[0]);

  				  		
  				  		//Cargar o mostrar error en las promesas se usa el
  				  		//metodo catch parecido que en php
  				  }).catch(error => {
  				  	console.log(error + "Error JavScript!");
  				  });

  	function getJanet(){
  		return fetch('https://reqres.in/api/users?page=2');
  	}			  	

  	function getUsuarios(){

  		return fetch('https://reqres.in/api/users?page=1');

  	}

  	function getInfo(){

  		var  profesor = {
  			nombre: 'Luis',
  			apellidos: 'Hurtado',
  			url: 'www.laravel.com'};

  		return new Promise((resolve, reject)=>{	

  		var profesor_string = "";
  		
  		setTimeout(function(){
  		
  			profesor_string = JSON.stringify(profesor);
  			
  			if(typeof profesor_string != 'string') return reject('Error');

  			return resolve(profesor_string);

  			
  			}, 3000);

  		});

  	}

  	function listadoUsuarios(usuarios){
  		usuarios.map((user, i) => {

  			let nombre = document.createElement('h4');
  			let avatar = document.createElement('img');

  			nombre.innerHTML = i+ ". " + user.first_name + " " +user.last_name;

  			div_usuarios.appendChild(nombre).appendChild(avatar);

  			avatar.src = user.avatar;
  			avatar.width="50";

  			aviso.style.display = 'none';
  		});
  	}

  	function mostrarJanet(user){
  		

  			let nombre = document.createElement('h4');
  			let aviso2 = document.querySelector("#loading2");
  			let avatar = document.createElement('img');

  			nombre.innerHTML =  user.first_name + " " +user.last_name;

  			avatar.src = user.avatar;
  			avatar.width="50";

  			div_janet.appendChild(nombre).appendChild(avatar);

  			aviso2.style.display = 'none';
  		
  	}





});

