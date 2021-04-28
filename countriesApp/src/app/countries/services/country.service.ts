import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  searching(val: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `https://restcountries.eu/rest/v2/name/${val}`
    );
  }
}
