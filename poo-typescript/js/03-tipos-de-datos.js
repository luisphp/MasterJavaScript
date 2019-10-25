//String
var cadena = 'Luis Hurtado';
//Se puede usar el comparador logico para hacer las cosas multiple tipado
//let cadena: string | number = 'Luis Hurtado';
var edad = 20;
var verdadero = true;
var cualquiera = "Hola";
//Arrays
//Puede ser any, number, string
var lenguajes = ["PHP", "SQL", "JavaScript"];
var years = [12, 14, 16, 18];
//direfencia entre let y var
//Let solo genera la variable dentro de la funcion utilizada
//y var genera o declara la variable a nivel global
var numero_uno = 10;
var numero_dos = 12;
if (numero_uno = 10) {
    var numero_uno_1 = 44;
    var numero_dos = 55;
    console.log(numero_uno_1, numero_dos);
}
console.log(cadena, edad, verdadero, cualquiera);
console.log(lenguajes, years);
