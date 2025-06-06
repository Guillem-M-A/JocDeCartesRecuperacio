import {Component, OnInit} from '@angular/core';
import {Joc} from "../../models/joc";
import {JugadorComponent} from "../jugador/jugador.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-joc',
  standalone: true,
  imports: [
    JugadorComponent,
    NgStyle,
    NgForOf,
    NgIf
  ],
  templateUrl: './joc.component.html',
  styleUrl: './joc.component.css'
})
export class JocComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined | any = '';
  game: Joc | undefined;
  imatges: string[] = ['/assets/img/profile/monkey.png','/assets/img/profile/pinguin.svg','/assets/img/profile/serious-woman.svg'];
  punts : number[] = [0,0,0]
  fons!: string[];
  displayCarta!: HTMLElement;


  constructor(private router: Router) {}

  takeCard() {
    if(!this.pickCardAnimation){
      this.currentCard = this.game?.stack.pop();
      this.pickCardAnimation = true;

      this.punts[this.game?.currentPlayer!] += Number(this.currentCard.split("_")[1])
      if(this.punts[this.game?.currentPlayer!] > 21){
        this.cambiarTorn()
      }
      setTimeout(()=> {
        this.game?.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }
  cambiarTorn(){
    if(this.game?.currentPlayer !== undefined){
      console.log(this.game.currentPlayer);
      this.fons[this.game.currentPlayer] = "background-color: orange"
      this.game.currentPlayer += 1;
      if(this.game.currentPlayer > 2){
        for(let i = 0; i < 3; i++){
          sessionStorage.setItem(this.game.players[i], this.punts[i].toString())
        }
        this.router.navigate(["/end"])
      }
      this.fons[this.game.currentPlayer] = "background-color: red"

    }else{
      this.game = new Joc()
    }
  }

  mostrarCarta(){
    this.displayCarta.innerText = "Nom de la carta: " + this.game?.playedCards[this.game?.playedCards.length-1]
  }
  deixarDeMostrar(){
    this.displayCarta.innerText = ""
  }


  ngOnInit(): void {
    this.newGame();
    this.fons = ["background-color: red","background-color: orange","background-color: orange"];
    this.displayCarta = document.getElementById('displayCarta')!;
  }

  newGame() {
    this.game = new Joc();
    console.log(this.game)
  }

}
