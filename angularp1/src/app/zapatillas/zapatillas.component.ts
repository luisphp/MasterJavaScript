import {Component} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';


import {ZapatillaService} from '../services/zapatilla.service';



@Component({
    
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [
       ZapatillaService
    ]

})
export class ZapatillasComponent{

    //Propiedades
    public titulo: string;
    public listado: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: String;
    public mi_marca: Array<string>;


    
    


     constructor(private _zapatillaService: ZapatillaService){
        console.log("Se ha cargado el componente: zapatillas.component.ts");

        var ElTitulo = this.titulo = "Este es el componente de Zapatillas en Angular";
        var ElListado = this.listado = "Esta es la lista de componentes de zapatillas en Angular";
        this.marcas = new Array;
        //Zapatillas
        /*this.zapatillas =[
            new Zapatilla('Reebock Classic', 'Reebock', 'verde', 100,70),
            new Zapatilla('Nike', 'Nikes', 'blue', 90,40),
            new Zapatilla('rs21', 'adidas', 'verde', 50,30),
            new Zapatilla('Adidas', 'Nikes', 'yellow', 40,20),
            new Zapatilla('Nike rs21', 'adidas', 'cyan', 30,10),
       ];*/
       this.color = "green";    
     }

     ngOnInit(){
        //console.log(this.zapatillas);
        
        this.zapatillas = this._zapatillaService.getZapatillas();

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

     getBrand(){
        alert(this.mi_marca);
     }

     addBrand(la_marca:string){
        this.marcas.push(la_marca);
     }

     deleteBrand(index){
        //delete this.marcas[index];
        this.marcas.splice(index,1);
     }

     onBlur(){
        console.log("Has salido del input");
     }

     mostrarPalabra(){
        alert(this.mi_marca);
             }

        

}