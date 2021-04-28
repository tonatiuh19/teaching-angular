import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
  styleUrls: ['./per-country.component.css'],
})
export class PerCountryComponent {
  search: string = '';
  errAPI: boolean = false;
  constructor(private countryService: CountryService) {}

  searching() {
    this.errAPI = false;
    this.countryService.searching(this.search).subscribe(
      (x) => {
        console.log(x);
      },
      (err) => {
        this.errAPI = true;
      }
    );
  }
}
