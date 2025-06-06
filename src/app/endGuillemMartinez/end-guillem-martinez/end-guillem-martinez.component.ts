import { Component } from '@angular/core';

@Component({
  selector: 'app-end-guillem-martinez',
  standalone: true,
  imports: [],
  templateUrl: './end-guillem-martinez.component.html',
  styleUrl: './end-guillem-martinez.component.css'
})
export class EndGuillemMartinezComponent {
  jugadors: string[]
  punts: string[]
  constructor() {
    this.jugadors = this.getJugadors()
    this.punts = this.getPunts()

  }

  getJugadors(): string[]{
    let jugadors: string[] = []
    for(let i = 0; i < sessionStorage.length; i++){
      jugadors.push(sessionStorage.key(i)!)
    }
    return jugadors;
  }

  getPunts(): string[]{
    let punts : string[] = []
    for(let i = 0; i < sessionStorage.length; i++){
      punts.push(sessionStorage.getItem(this.getJugadors()[i])!)
    }
    return punts;
  }
  estaEliminat(punts: string): boolean{
    return Number(punts) > 21;
  }
}


