import { Component, OnInit } from '@angular/core';
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

	

  constructor() { }

  ngOnInit() {

  	let idea = '';

  	$("#logo_principal").click(function(e){
  		e.preventDefault();

  		if(idea === 1){
  			$("html").css("background","black");
  			idea = 0;
  		}else{
  			$("html").css("background","white");
  			idea = 1;
  		}
			});
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
