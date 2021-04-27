import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/avengers.interfaces';

@Injectable()
export class AvengersService {
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
  constructor() {
    console.log('Service has been started');
  }
}
