//Previamente instalar librerias usando el comando npm install
// npm install socket.io, express, nodemon --save


//Cargar Librerias
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


//Cargar middleware
app.use(express.static('client'));


//Lanzar Servidor -> Usar en consola el comando npm start

server.listen(6677, function(){
	console.log('Servidor funcionando en http://localhost:6677');
});


//Acceder a la ruta basica seria localhost:6677/hello
app.get('/hello', function(req, res){
	res.status(200).send('Ruta principal cargada exitosamente!');
});


//Lanzar eventos

io.on('connection', function(socket){

	console.log("El nodo con IP: "+socket.handshake.address+ " se ha conectado.");

	socket.emit('messages', messages);
});


//Envia un mensaje cuando se conecte un cliente

var messages = [{
	id: 1,
	text: 'Bienvenido al chat privado',
	nickname: 'RoBot'
}];