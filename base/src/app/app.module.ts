import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SuperHeroeComponent } from './superHeroes/superHeroe/superHeroe.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, SuperHeroeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
