import { Injectable } from '@angular/core';
import { Cuestion } from "../modelos/Cuestion";

@Injectable({
  providedIn: 'root'
})
export class DatosService {
cuestions:Cuestion[];
  constructor() {
    /*
    this.cuestions = [
      {
        text:"¿Cuál es tu nombre?",
        answer: "Mi nombre es Ignacio",
        hide: true
      },
      {
        text:"¿Cuál es tu color favorito?",
        answer: "El negro",
        hide: true
      },
      {
        text:"¿Cuál es el nombre de tu perro?",
        answer: "Su nombre es Dana",
        hide: true
      },
    ];*/
  }

  obteinCuestion(){
    if(localStorage.getItem('cuestions') == null){
      this.cuestions = [];
    }
    else{
      this.cuestions = JSON.parse(localStorage.getItem('cuestions'));
    }
    return this.cuestions;
  }

  plusCuestion(cuestion){
    this.cuestions.unshift(cuestion);

    let cuestions;

    if(localStorage.getItem('cuestions') == null){
      cuestions=[];

      cuestions.unshift(cuestion);
      localStorage.setItem('cuestions', JSON.stringify(cuestions));
    }
    else{
      cuestions = JSON.parse(localStorage.getItem('cuestions'));
      cuestions.unshift(cuestion);
      localStorage.setItem('cuestions', JSON.stringify(cuestions));
    }
  }

  deleteCuestion(cuestion:Cuestion){
    for(let i = 0; i <this.cuestions.length; i++){
      if(cuestion == this.cuestions[i]){
        this.cuestions.splice(i, 1);
        localStorage.setItem('cuestions', JSON.stringify(this.cuestions));
      }
    }
  }
}
