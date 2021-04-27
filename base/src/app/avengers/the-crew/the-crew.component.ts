import { Component, Input } from '@angular/core';
import { Heroe } from '../interfaces/avengers.interfaces';

@Component({
  selector: 'app-the-crew',
  templateUrl: './the-crew.component.html',
  styleUrls: ['./the-crew.component.css'],
})
export class TheCrewComponent {
  @Input() crew: Heroe[] = [];
}
