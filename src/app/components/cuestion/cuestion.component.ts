import { Component, OnInit, Input } from '@angular/core';
import { Cuestion } from '../../modelos/Cuestion';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-cuestion',
  templateUrl: './cuestion.component.html',
  styleUrls: ['./cuestion.component.css']
})
export class CuestionComponent implements OnInit {
  @Input('cuestion') cuestion:Cuestion;
  constructor(public datosService:DatosService) { }

  ngOnInit() {
  }

  deleteCuestion(cuestion){
    this.datosService.deleteCuestion(cuestion);
  }

}
