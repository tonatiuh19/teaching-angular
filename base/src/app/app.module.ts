import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SuperHeroesModule } from './superHeroes/superHeroes.module';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, SuperHeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
