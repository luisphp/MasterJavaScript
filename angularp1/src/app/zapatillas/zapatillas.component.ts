import {Component} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';


@Component({
    
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',

})
export class ZapatillasComponent{

    //Propiedades
    public titulo: string;
    public listado: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];


     constructor(){
        console.log("Se ha cargado el componente: zapatillas.component.ts");

        var ElTitulo = this.titulo = "Este es el componente de Zapatillas en Angular";
        var ElListado = this.listado = "Esta es la lista de componentes de zapatillas en Angular";
        this.marcas = new Array;
        //Zapatillas
        this.zapatillas =[
            new Zapatilla('Reebock Classic', 'Reebock', 'Blancos', 100,70),
            new Zapatilla('Nike', 'Nikes', 'Red Product', 90,40),
            new Zapatilla('rs21', 'adidas', 'Red Product', 50,30),
            new Zapatilla('Adidas', 'Nikes', 'Red Product', 40,20),
            new Zapatilla('Nike rs21', 'adidas', 'Red Product', 30,10),
       ];

     }

     ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
     }

     getMarcas(){
        this.zapatillas.forEach((zapatilla, index)=>{
            if(this.marcas.indexOf(zapatilla.brand)<0){
                this.marcas.push(zapatilla.brand);
            }
        });

        console.log(this.marcas);
     }
}