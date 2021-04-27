import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsMainComponent } from './gifs-main/gifs-main.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [GifsMainComponent, SearchComponent, ResultsComponent],
  imports: [CommonModule],
  exports: [GifsMainComponent],
})
export class GifsModule {}
