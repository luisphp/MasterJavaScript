'use strict'

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

//Cargar configuracion de rutas
var project_routes = require('./routes/project');

//Middleware


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 

//CORS


//Cargar RUTAS

/*

A partir de la creacion del modelo y del controlador 
las rutas que aqui se escriben se comentan ya que se va a 
usar el controlador.

Inicio de las rutas

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

Fin de la rutas
*/


//Rutas
app.use('/api', project_routes);



//Exportar 
module.exports = app;
