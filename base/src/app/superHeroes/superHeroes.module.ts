import { NgModule } from '@angular/core';
import { SuperHeroeComponent } from './superHeroe/superHeroe.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SuperHeroeComponent, ListComponent],
  exports: [ListComponent],
  imports: [CommonModule],
})
export class SuperHeroesModule {}
