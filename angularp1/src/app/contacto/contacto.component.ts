import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario'


@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public usuario: ContactoUsuario;

  

  constructor() { 

    this.usuario = new ContactoUsuario('','','','');

  }



  ngOnInit() {
  }

  onSubmit(formContacto){
    //console.log("Evento Submit lanzado");
    formContacto.reset();
    console.log(this.usuario);
  }

}
