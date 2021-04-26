import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { SuperHeroesModule } from './superHeroes/superHeroes.module';
import { CounterModule } from './counter/counter.module';
import { AvengersModule } from './avengers/avengers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SuperHeroesModule, CounterModule, AvengersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
