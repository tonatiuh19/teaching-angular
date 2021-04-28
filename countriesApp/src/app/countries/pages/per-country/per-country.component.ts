import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
  styleUrls: ['./per-country.component.css'],
})
export class PerCountryComponent {
  search: string = '';
  constructor(private countryService: CountryService) {}

  searching() {
    this.countryService.searching(this.search).subscribe((x) => console.log(x));
  }
}
