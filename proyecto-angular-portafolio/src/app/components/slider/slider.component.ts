import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
selector: 'slider',
templateUrl: './slider.component.html',
styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

@Input() anchura: number;
@Output() conseguirAuthor= new EventEmitter();

public author: any;



constructor() { 

	this.author = {
		nombre : "Luis Hurtado",
		website : "Luis.hurtado",
		yotube : "esLuisDev"
	}

}
ngOnInit() {
	

	$('.slider').bxSlider({
		slideWidth: this.anchura
		});

	
}
	
	lanzar(event){
		console.log(event);
		this.conseguirAuthor.emit(this.author);
	}



}