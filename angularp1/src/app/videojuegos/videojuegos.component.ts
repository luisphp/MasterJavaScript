import {Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import {Configuracion} from '../models/configuracion';


@Component({
    
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html',

})
export class VideojuegosComponent implements OnInit, DoCheck, OnDestroy{

    //Propiedades
    public titulo: string;
    public listado: string;
    public color:string;
    
    
     constructor(){
        console.log("Se ha cargado el componente: videojuego.component.ts");

        this.titulo = "Este es el componente de Videjuegos en Angular";
        this.listado = "Esta es la lista de componentes en Angular";

        this.color = Configuracion.color;

        
        


     }
     ngOnDestroy(){
         //console.log("On destroy ejecutado");
     }

     ngDoCheck(){
         //console.log("DoCheck ejecutado");
     }

     ngOnInit(){
         //console.log(this.zapatillas);
     }

     cambiarTitulo(){
         this.titulo = "Videjuegos con DoCheck";
     }

}