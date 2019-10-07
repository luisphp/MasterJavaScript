'use strict';


//Fetch y peticiones asincronas 

window.addEventListener('load', ()=>{
/*
fetch('https://jsonplaceholder.typicode.com/todos/28')
  .then(response => response.json())
  .then(json => console.log(json));
*/

  //fetch y peticiones a servicios restfull<<<<<

  var usuarios = [];
  var div_usuarios = document.querySelector("#usuarios");
  var aviso = document.querySelector(".loading");

  	fetch('https://reqres.in/api/users?page=2')
  	.then(data => data.json())
  	.then(users => {
  		usuarios = users.data;
  		console.log(usuarios);

  		usuarios.map((user, i) => {

  			let nombre = document.createElement('h4');

  			nombre.innerHTML = i+ ". " + user.first_name + " " +user.last_name;

  			div_usuarios.appendChild(nombre);

  			aviso.style.display = 'none';
  		});


  	});





});

