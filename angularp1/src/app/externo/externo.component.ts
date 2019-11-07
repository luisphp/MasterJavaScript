import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public fecha: any;
  public id_user: any;
  public first_name: any;
  public last_name: any;
  public avatar: any;

  public id_otorgado: any;


  public new_user: any;

  constructor(

    private _PeticionesService: PeticionesService,

  ) { this.id_otorgado = 1; }

  ngOnInit() {
    this.first_name = false;
    this.cargaUsuario();
    this.fecha = new Date();

    this.new_user =  
    {
    "name": "",
    "job": ""
    }
    
  }

  cargaUsuario(){

    this._PeticionesService.getUser(this.id_otorgado).subscribe(
      result => {
       this.id_user = result.data.id;
       this.first_name = result.data.first_name;
       this.last_name = result.data.last_name;
       this.avatar = result.data.avatar;
      },
      error=> {
        console.log(<any>error);
      }
  );

  }

  onSubmit(form){
    this._PeticionesService.addUser(this.new_user).subscribe(

      response => {
        console.log(response);
        form.reset();
        },
        error => {
          console.log(<any>error);
        }


      )

  }

}
