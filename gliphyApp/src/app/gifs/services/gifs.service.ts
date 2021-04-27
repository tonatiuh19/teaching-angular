import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private gliphyAPIKey: string = 'TPxIgsPRshgrWl6h3jyocO8kO9au1z60';
  private _historial: string[] = [];
  public results: any[] = [];

  constructor(private http: HttpClient) {}

  get historial() {
    return [...this._historial];
  }

  searchGifs(query: string) {
    if (!this._historial.includes(query.trim().toLowerCase())) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=TPxIgsPRshgrWl6h3jyocO8kO9au1z60&q=${query}&limit=10`
      )
      .subscribe((x: any) => {
        console.log(x.data);
        this.results = x.data;
      });
  }
}
