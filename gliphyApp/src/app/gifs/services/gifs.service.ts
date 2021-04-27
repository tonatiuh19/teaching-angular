import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse, GIF } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private gliphyAPIKey: string = 'TPxIgsPRshgrWl6h3jyocO8kO9au1z60';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
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

    const params = new HttpParams()
      .set('api_key', this.gliphyAPIKey)
      .set('limit', '10')
      .set('query', query);

    this.http
      .get<SearchGIFResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((x) => {
        console.log(x.data);
        this.results = x.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
