import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerCapitalComponent } from './pages/per-capital/per-capital.component';
import { PerCountryComponent } from './pages/per-country/per-country.component';
import { PerRegionComponent } from './pages/per-region/per-region.component';
import { ReviewCountryComponent } from './pages/review-country/review-country.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountriesInputComponent } from './components/countries-input/countries-input.component';

@NgModule({
  declarations: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    ReviewCountryComponent,
    CountriesTableComponent,
    CountriesInputComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule],
  exports: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    ReviewCountryComponent,
  ],
})
export class CountriesModule {}
