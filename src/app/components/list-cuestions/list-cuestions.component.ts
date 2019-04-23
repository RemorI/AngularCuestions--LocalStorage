import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Cuestion } from '../../modelos/Cuestion';

@Component({
  selector: 'app-list-cuestions',
  templateUrl: './list-cuestions.component.html',
  styleUrls: ['./list-cuestions.component.css']
})
export class ListCuestionsComponent implements OnInit {
  cuestions:Cuestion[];

  constructor(public datosService:DatosService) { }

  ngOnInit() {
    this.cuestions = this.datosService.obteinCuestion();
  }

  plusCuestion(cuestion:Cuestion){
    //console.log("cuestion");
    this.datosService.plusCuestion(cuestion);
  }

}
