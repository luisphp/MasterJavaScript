import { Injectable } from "@angular/core";
import {Zapatilla} from '../models/zapatilla';




@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        
        this.zapatillas =[
            new Zapatilla('Reebock Classic', 'Reebock', 'verde', 100,70),
            new Zapatilla('Nike', 'Nikes', 'blue', 90,40),
            new Zapatilla('rs21', 'adidas', 'verde', 50,30),
            new Zapatilla('Adidas', 'Nikes', 'yellow', 40,20),
            new Zapatilla('Nike rs21', 'adidas', 'cyan', 30,100),
       ];
     
     }

     getZapatillas(){
         return this.zapatillas;
     }

     getTexto(){
         return "Hola mundo";
     }
}