import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titles = 'Angular App # 1';
  public mostrar_videjuegos:boolean = true;

  ocultarVidejuegos(value){
    this.mostrar_videjuegos = value;
}


}

