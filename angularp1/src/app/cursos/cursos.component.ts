import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public nombre:string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 

    
  }

  ngOnInit() {

    this._route.params.subscribe((params: Params)=>{
      
      this.nombre = params.nombre;
      
      //Esta es otra forma de capturar los parametros por consola
      this.nombre = params['nombre'];

      console.log("El nombre es: "+ this.nombre);
    });
  }

}
