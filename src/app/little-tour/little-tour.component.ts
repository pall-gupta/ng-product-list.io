import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-tour',
  templateUrl: './little-tour.component.html',
  styleUrls: ['./little-tour.component.css']
})
export class LittleTourComponent {
heroes=['Pallavi', 'Jorav', 'Varun', 'Radha']
addHero(newHero:string){
  if(newHero){
    this.heroes.push(newHero);
  }
}
deleteHero(addHero:string){
       var index = this.heroes.indexOf(addHero);
      this.heroes.splice(index, 1)
      }
}
