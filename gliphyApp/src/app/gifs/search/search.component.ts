import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searching() {
    console.log(this.txtSearch.nativeElement.value);
    this.gifsService.searchGifs(this.txtSearch.nativeElement.value);
    this.txtSearch.nativeElement.value = '';
  }
}
