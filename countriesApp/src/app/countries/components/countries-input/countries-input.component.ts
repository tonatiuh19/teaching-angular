import { Component } from '@angular/core';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styleUrls: ['./countries-input.component.css'],
})
export class CountriesInputComponent {
  search: string = '';

  searching() {}
}
