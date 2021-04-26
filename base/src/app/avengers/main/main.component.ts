import { Component } from '@angular/core';

interface Heroe {
  name: string;
  level: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  crew: Heroe[] = [
    {
      name: 'Ironman',
      level: 98000,
    },
    {
      name: 'Captain America',
      level: 96000,
    },
    {
      name: 'Storm',
      level: 90000,
    },
  ];

  new: Heroe = {
    name: '',
    level: 0,
  };

  add() {
    if (this.new.name.trim().length === 0) {
      return;
    }
    this.crew.push(this.new);
    this.new = {
      name: '',
      level: 0,
    };
  }

  //Optional
  /*changeName(e:any){
    console.log(e.target.value);
  }*/
}
