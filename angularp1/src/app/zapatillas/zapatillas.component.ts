import {Component} from '@angular/core';


@Component({
    
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',

})
export class ZapatillasComponent{

    //Propiedades
    public titulo: string;
    public listado: string;


     constructor(){
        console.log("Se ha cargado el componente: zapatillas.component.ts");

        var ElTitulo = this.titulo = "Este es el componente de Zapatillas en Angular";
        var ElListado = this.listado = "Esta es la lista de componentes de zapatillas en Angular";

     }
}