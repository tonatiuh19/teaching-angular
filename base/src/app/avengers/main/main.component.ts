import { Component } from '@angular/core';

interface Personaje {
  name: string;
  level: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  new: Personaje = {
    name: 'Captain Marvel',
    level: 95,
  };

  add() {
    console.log(this.new);
  }

  //Optional
  /*changeName(e:any){
    console.log(e.target.value);
  }*/
}
