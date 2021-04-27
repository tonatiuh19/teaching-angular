import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse, GIF } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private gliphyAPIKey: string = 'TPxIgsPRshgrWl6h3jyocO8kO9au1z60';
  private _historic: string[] = [];
  public results: GIF[] = [];

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historic')) {
      this._historic = JSON.parse(localStorage.getItem('historic')!);
    }

    if (localStorage.getItem('results')) {
      this.results = JSON.parse(localStorage.getItem('results')!);
    }
  }

  get historial() {
    return [...this._historic];
  }

  searchGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!this._historic.includes(query)) {
      this._historic.unshift(query);
      this._historic = this._historic.splice(0, 10);
      localStorage.setItem('historic', JSON.stringify(this._historic));
    }

    this.http
      .get<SearchGIFResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=TPxIgsPRshgrWl6h3jyocO8kO9au1z60&q=${query}&limit=10`
      )
      .subscribe((x) => {
        console.log(x.data);
        this.results = x.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
