'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var ProjectSchema = Schema({
	name : String,
	description: String,
	category: String,
	year: Number,
	langs: String,
	image: String,
});

module.exports = mongoose.model('Project',ProjectSchema);
//Esto guarda los datos en la collection projects de la base de datos en 
//MongoDB.

