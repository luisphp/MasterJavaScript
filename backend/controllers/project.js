'use strict'

var Project = require('../models/project');

var controller = {

	home: function(req, res){

		return res.status(200).send({
			message: 'Soy la home!',
		});

	},
	test: function(req, res){
		return res.status(200).send({
			message: "Soy el método o acción del controlador project",
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
			if(err){
				return res.status(500).send({ message: "Error en la peticion / Error al guardar" });
			}else if(!projectStored){
				return res.status(404).send({ message: "No se ha guardado el Proyecto" });
			}else if(projectStored){
				return res.status(200).send({ message: "El proyecto se ha guardado exitosamente!", project: projectStored});
			}
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

			Project.findByID(projectId, (err, project)=>{
				
				if(err) return res.status(500).send({ message: "Error al devolver los datos" });

				if(!project) return res.status(404).send({ message: "Proyecto / Documento no encontrado" });

				return res.status(200).send({ project });

			});
		}
};

module.exports = controller;