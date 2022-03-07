import { Component, Input, OnInit } from '@angular/core';
import { persona } from '../modelos/persona';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent  {
public personas: persona[]=[];
public nombre: string='';
  constructor() { }

agregar(){
  let persona: persona={
    nombre:this.nombre
  }
this.personas.push(persona);
}

}
