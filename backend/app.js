'use strict'

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

//Configuracion de Rutas


//Middleware


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS


//Cargar RUTAS
app.get('/',(req, res)=>{
	res.status(200).send(

		//Podemos mostrar codigo HTML solo

		"<h2>Pagina de inicio</h2>"

	);
});



app.post('/test',(req, res)=>{

	console.log(req.param('name'));

	var nombre = req.param('name');

	res.status(200).send(


	{
		
		//Podemos mostrar un JSON
		message: "Hola mundo desde mi API de NodeJS",
		parametro: req.param('name'),

	});
});

//Exportar 
module.exports = app;
