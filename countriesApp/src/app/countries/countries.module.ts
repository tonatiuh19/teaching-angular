import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerCapitalComponent } from './pages/per-capital/per-capital.component';
import { PerCountryComponent } from './pages/per-country/per-country.component';
import { PerRegionComponent } from './pages/per-region/per-region.component';
import { ReviewCountryComponent } from './pages/review-country/review-country.component';

@NgModule({
  declarations: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    ReviewCountryComponent,
  ],
  imports: [CommonModule],
  exports: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    ReviewCountryComponent,
  ],
})
export class CountriesModule {}
