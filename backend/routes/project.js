'use strict'

var express = require('express');

var ProjectController = require('../controllers/project');

var router = express.Router();

//Middleware
var multipart = require('connect-multiparty');
var multiparMiddleware = multipart({
	uploadDir: './uploads'
});


//Ruta para ir a la home. //Se recomienda hacer estar rutas Home y test para ver si el servidor esta corriend bien
router.get('/home', ProjectController.home);

//Ruta para hacer test.
router.post('/test', ProjectController.test);

//Ruta para Crear proyectos.
router.post('/save-project', ProjectController.saveProject);


//Ruta para ver 1 proyecto en especifico / el parametro ID es opcional por tal motivo se debe 
//Crear la sentencia if en el controlador.
router.get('/project/:id?', ProjectController.getProject);


//Ruta para Ver/Listar todos los proyectos.
router.get('/projects', ProjectController.getAllProjects);

//Ruta para Actualizar proyectos.
router.put('/project/:id', ProjectController.updateProject);

//Ruta para Eliminar proyectos.
router.delete('/project/:id', ProjectController.deleteProject);

//Ruta para Subir imagen al proyecto.
router.post('/upload-image/:id', multiparMiddleware,ProjectController.uploadImage);

module.exports = router;