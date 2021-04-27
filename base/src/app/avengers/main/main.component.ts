import { Component } from '@angular/core';
import { Heroe } from '../interfaces/avengers.interfaces';
import { AvengersService } from '../services/avengers.service';

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

  addNewAvenger(e: Heroe) {
    this.crew.push(e);
  }

  constructor(private avengersService: AvengersService) {}
}
