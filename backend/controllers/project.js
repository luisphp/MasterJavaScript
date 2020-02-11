'use strict'

var Project = require('../models/project');

var fs = require('fs');

var controller = {
	//Métodos de pruebas del servidor
	home: function(req, res){

		return res.status(200).send({
			message: 'Soy la home!',
		});

	},
	test: function(req, res){
		return res.status(200).send({
			message: 'Soy el método o acción del controlador project',
		});
	},


	//Método para guardar projects en la base de datos
	saveProject: function(req, res){

		var project = new Project();

		var params = req.body;

		project.name = params.name;
		project.description = params.description;
		project.category = params.category;
		project.year = params.year;
		project.langs = params.langs;
		project.image = null;

		project.save((err, projectStored) =>{
			if(err) return res.status(500).send({ message: 'Error en la peticion / Error al guardar' });

			if(!projectStored) return res.status(404).send({ message: 'No se ha guardado el Proyecto' });
			
			return res.status(200).send({ message: 'El proyecto se ha guardado exitosamente!', project: projectStored});
			
		});
	},

		/*
		return res.status(200).send({
			project: project,
			message: 'Método saveProject()',
		});
		*/

	//Método para listar los projectos de la base de datos en MongoDB
	getProject: function(req, res){

			var projectId = req.params.id;

			if(projectId == null) return res.status(404).send({ message: 'Proyecto / Documento NO encontrado - Campo ID Vacio', error: err });
			


			Project.findById(projectId, (err, project)=>{
				
				if(err) return res.status(500).send({ message: 'Error al devolver los datos', error: err });

				if(!project) return res.status(404).send({ message: 'Proyecto / Documento NO encontrado' });

				return res.status(200).send({ project });

			});
		},
	
	//Metodo para mostrar proyecto en especifico
	getAllProjects: function(req, res){

		//Este es el query de mongoose . puede incluir Project.find().sort('-year') para ordenar de menor a mayor del año por ejemplo
		Project.find().sort().exec((err, projects)=>{


			if(err) return res.status(500).send({ message: 'Error al devolver los datos', error: err });

			if(!projects) return res.status(404).send({ message: 'No hay proyectos para mostrar' });

			return res.status(200).send({ projects });

		});

	},
	
	//Metodo para actualizar un proyecto
	updateProject: function(req, res){

		var projectId = req.params.id;
		var update = req.body;

		//Query para actualizar un registro por ID *La opcion {new: true} es para que retorne el objeto actualizado

		Project.findByIdAndUpdate(projectId, update,{new:true},(err, projectUpdate)=>{

			if(err) return res.status(500).send({ message: 'Error al actualizar!' });

			if(!projectUpdate) return res.status(404).send({ message: 'Error (404) proyecto no actualizado' });

			//Es recomendable regresar el registro actualizado!
			return res.status(200).send({ message: 'Proyecto actualizado exitosamente!', project: projectUpdate });
		});

	},

	//Metodo para borrar un proyecto
	deleteProject: function(req, res){

		var projectId = req.params.id;

		Project.findByIdAndRemove(projectId, (err, projectRemoved)=>{

			if(err) return res.status(500).send({ message: 'Error al borrar proyecto' });

			if(!projectRemoved) return res.status(404).send({ message: 'Error (404) proyecto no borrado' });

			//Es recomendable regresar el registro borrado!
			return res.status(200).send({ message: 'Proyecto borrado exitosamente!', project: projectRemoved});
		});
	},

	uploadImage: function(req, res){

		var projectId = req.params.id;

		var fileName = 'Imagen subida ...';

		if(req.files){
			//Para guardar la ruta de la imagen en la base de datos:

			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];

			//Mejora en el codigo de la subida de imagen para comprobar que se esta subiendo una imagen como tal
			var extSplit = fileName.split('\.');

			var fileExt = extSplit[1];


			if(fileExt == 'jpg' || fileExt == 'png' || fileExt == 'jpg' || fileExt == 'gif'){

			//Actualizar el campo en el respectivo registro en la DB
			Project.findByIdAndUpdate(projectId, {image:fileName}, {new:true}, (err, projectUpdate)=>{

				if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

				if(!projectUpdate) return res.status(404).send({message: 'EL proyecto no existe'});

				return res.status(200).send({message: 'Imagen cargada exitosamente', project: projectUpdate});
			});	

			}else{
				fs.unlink(filePath, (err)=>{

					return res.status(200).send({message: 'El archivo cargado NO es una imagen'});
				});
				
			}

			/* Estas lineas se usan para probar la carga de la imagen en el servidor mas no la actualizacion en la DB
			console.log(req.files);
			return res.status(200).send({
				files: req.files,
				files_2: fileName

				
			});
			*/
		} else {

			return res.status(200).send({
				
				message: fileName
			});
		}
			
		
	}
};

module.exports = controller;
