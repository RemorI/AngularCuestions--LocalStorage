import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cuestion } from '../../modelos/Cuestion';

@Component({
  selector: 'app-plus-cuestions',
  templateUrl: './plus-cuestions.component.html',
  styleUrls: ['./plus-cuestions.component.css']
})
export class PlusCuestionsComponent implements OnInit {
@Output() cuestionPlus = new EventEmitter<Cuestion>();

cuestion:string;
answer:string;

  constructor() { }

  ngOnInit() {
  }
  plusCuestion(){
    this.cuestionPlus.emit({text:this.cuestion, answer:this.answer, hide:true});
  }
}
