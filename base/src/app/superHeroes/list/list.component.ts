import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroes: string[] = ['Ironman', 'Cyclops', 'Hulk', 'Thor'];
  heroeLeft: string = '';

  eraseSuper() {
    const left: string = this.heroes.shift() || '';
    this.heroeLeft = left;
  }
}
