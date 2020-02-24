import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public widthSlider: number;
	public anchuraToSlider: any;
  public author: any;

  @ViewChild('textos', {static: false}) textos;

	

  constructor() { }

  ngOnInit() {

  	let idea = '';

  	$("#logo_principal").click(function(e){
  		e.preventDefault();

			});

    console.log(this.textos);
  }
  	cargarSlider(){
  		this.anchuraToSlider = null;
  		this.anchuraToSlider = this.widthSlider;
  }

  resetSlider(){
  		this.anchuraToSlider = false;

  }

  getAuthor(event){
    console.log(event);
    this.author = event;
  }

}
