import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { TheCrewComponent } from './the-crew/the-crew.component';
import { AddingAvengerComponent } from './adding-avenger/adding-avenger.component';

@NgModule({
  declarations: [MainComponent, TheCrewComponent, AddingAvengerComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainComponent],
})
export class AvengersModule {}
