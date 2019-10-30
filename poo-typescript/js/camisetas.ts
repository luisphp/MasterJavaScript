//Interfaces

interface CamisetaBase{
	setColor(color:string);
	getColor(color:string);
}

//Decoradores
//Solo se añade funcionalidad a una clase
function estampar(logo:string){
	return function(target: Function){
		target.prototype.estampacion = function():void{
			console.log("Camiseta estampada con el logo de mi equipo"+logo);
		}
	}
}


//Clases
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{

	//Propiedades
	
	private color:string;
	public modelo:string;
	public marca:string;
	public talla:string;
	public precio:number; 

	//Constructores
	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	//Métodos
	public setColor(color:string){
		this.color = color;
	}

	public getColor(color:string){
		return this.color;
	}
}



/*

El el caso de que lo atributos esten definidos como publicos 
podemos ingresar de la siguiente forma a los atributos
var camiseta = new Camiseta();


camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 100;
*/
/*
var playera = new Camiseta();

playera.color = "Rojo";
playera.modelo = "Manga Larga";
playera.marca = "Nike";
playera.talla = "L";
playera.precio = 100;
*/


/*

Imprimiendo valores en typeScript

var camiseta = new Camiseta();
camiseta.setColor("Red");

var playera = new Camiseta();
playera.setColor("blue");


console.log(camiseta.getColor(), playera.getColor());
console.log(camiseta, playera);

*/

class Sudadera extends Camiseta{
	public capucha: boolean;

	setCapucha(capucha:boolean){
		this.capucha = capucha;
	}

	getCapucha(){
		this.capucha;
	}
}

var camiseta = new Camiseta("fas", "fas", "fas", "L", 12);
console .log(camiseta);
camiseta.estampacion();

var sudadera = new Sudadera("fas", "fas", "fas", "L", 12);
console.log(sudadera);

