import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	public title:string;
	public subtitle:string;
	public email: string;

  constructor() { 
  	this.title = "Luis Hurtado";
  	this.subtitle = "Portafolio de desarrollo web y movil";
  	this.email = "oneillvilla@gmail.com";
  }

  ngOnInit() {
  }

}
