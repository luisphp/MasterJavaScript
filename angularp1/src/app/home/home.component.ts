import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identificado: boolean;

  constructor() {
    this.identificado = false;
   }

  ngOnInit() {
  }

  setIdentificado(valor){
    this.identificado = valor;
  }

  

}
