import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-jugador',
  standalone: true,
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent {

  @Input() name: any;
  @Input() posicio: any;
  @Input() imatgeURL: any;
  @Input() punts: number;
  @Input() fons: string;
  fonsHTML! : HTMLElement;

  constructor() {
    this.punts=0;
    this.fons = "background-color: orange"
  }
  ngOnInit() {
    this.fonsHTML = document.getElementById('fons')!;
  }
}
