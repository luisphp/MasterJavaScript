


//String


let cadena: string = 'Luis Hurtado';

//Se puede usar el comparador logico para hacer las cosas multiple tipado
//let cadena: string | number = 'Luis Hurtado';



let edad:number = 20;


let verdadero:boolean = true;

let cualquiera:any = "Hola";


//Arrays
//Puede ser any, number, string
var lenguajes: Array<string> = ["PHP","SQL","JavaScript"];

let years:number[] = [12,14,16,18];

//Otro tipo de dato se genera con la palabra reservada type, asi:
type letrasonumeros  = string | number;


//direfencia entre let y var
//Let solo genera la variable dentro de la funcion utilizada
//y var genera o declara la variable a nivel global
var numero_uno = 10;
var numero_dos = 12;

if(numero_uno =  10){
	let numero_uno = 44;
	var numero_dos = 55;

	console.log(numero_uno, numero_dos);

}
	

console.log(cadena, edad, verdadero, cualquiera);

console.log(lenguajes, years);



