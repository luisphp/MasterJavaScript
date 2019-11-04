import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  constructor(

    private _PeticionesService: PeticionesService,

  ) {  }

  ngOnInit() {

    this._PeticionesService.getUser().subscribe(
        result => {
          console.log(result);
        },
        error=> {
          console.log(<any>error);
        }
    );
  }

}
