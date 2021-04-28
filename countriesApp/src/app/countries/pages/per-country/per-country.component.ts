import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
  styleUrls: ['./per-country.component.css'],
})
export class PerCountryComponent {
  search: string = '';
  errAPI: boolean = false;
  countries: Country[] = [];
  constructor(private countryService: CountryService) {}

  searching() {
    this.errAPI = false;
    this.countryService.searching(this.search).subscribe(
      (x) => {
        this.countries = x;
      },
      (err) => {
        this.errAPI = true;
        this.countries = [];
      }
    );
  }
}
