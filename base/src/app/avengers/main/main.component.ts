import { Component } from '@angular/core';
import { Heroe } from '../interfaces/avengers.interfaces';
import { AvengersService } from '../services/avengers.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  new: Heroe = {
    name: '',
    level: 0,
  };

  addNewAvenger(e: Heroe) {
    this.crew.push(e);
  }

  get crew(): Heroe[] {
    return this.avengersService.crew;
  }

  constructor(private avengersService: AvengersService) {}
}
