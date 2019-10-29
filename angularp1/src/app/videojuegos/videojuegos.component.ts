import {Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


@Component({
    
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html',

})
export class VideojuegosComponent implements OnInit, DoCheck, OnDestroy{

    //Propiedades
    public titulo: string;
    public listado: string;
    



     constructor(){
        console.log("Se ha cargado el componente: videojuego.component.ts");

        this.titulo = "Este es el componente de Videjuegos en Angular";
        this.listado = "Esta es la lista de componentes en Angular";

     }

     

     ngOnDestroy(){
         console.log("On destroy ejecutado");
     }

     ngDoCheck(){
         console.log("DoCheck ejecutado");
     }

     ngOnInit(){
         console.log("On init ejecutado");
     }

     cambiarTitulo(){
         this.titulo = "Videjuegos con DoCheck";
     }


}