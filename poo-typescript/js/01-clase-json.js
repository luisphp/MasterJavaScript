

var bicicleta = {

	color: 'rojo',
	modelo: 'bmx',
	freno: 'disco',
	velocidad: '60 kms',

	cambiaColor: function(nuevo_color){

		//bicicleta.color = nuevo_color;

		this.color = nuevo_color;

		console.log(this);
	}

};


	bicicleta.cambiaColor("azul");




