import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SuperHeroeComponent } from './superHeroes/superHeroe/superHeroe.component';
import { ListComponent } from './superHeroes/list/list.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, SuperHeroeComponent, ListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
