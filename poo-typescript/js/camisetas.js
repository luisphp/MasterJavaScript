//Interfaces
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Clases
var Camiseta = /** @class */ (function () {
    //Constructores
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //Métodos
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function (color) {
        return this.color;
    };
    return Camiseta;
}());
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
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    return Sudadera;
}(Camiseta));
{ }
this.capucha;
var camiseta = new Camiseta("fas", "fas", "fas", "L", 12);
console.log(camiseta);
