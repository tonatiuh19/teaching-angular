import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroe } from '../interfaces/avengers.interfaces';
import { AvengersService } from '../services/avengers.service';

@Component({
  selector: 'app-adding-avenger',
  templateUrl: './adding-avenger.component.html',
  styleUrls: ['./adding-avenger.component.css'],
})
export class AddingAvengerComponent {
  @Input() new: Heroe = { name: '', level: 0 };
  //@Output() onNewAvenger: EventEmitter<Heroe> = new EventEmitter();

  constructor(private avengersService: AvengersService) {}

  add() {
    if (this.new.name.trim().length === 0) {
      return;
    }

    this.avengersService.addAvenger(this.new);

    this.new = {
      name: '',
      level: 0,
    };
  }
}
