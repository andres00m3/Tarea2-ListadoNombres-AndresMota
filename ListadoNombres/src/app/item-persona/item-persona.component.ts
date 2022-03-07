import { Component, Input, OnInit } from '@angular/core';
import { persona } from '../modelos/persona';

@Component({
  selector: 'app-item-persona',
  templateUrl: './item-persona.component.html',
  styleUrls: ['./item-persona.component.css']
})
export class ItemPersonaComponent implements OnInit {


 @Input()
persona:persona ={nombre:''};
  constructor() { }

  ngOnInit(): void {
  }

}
