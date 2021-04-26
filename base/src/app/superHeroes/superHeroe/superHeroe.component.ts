import { Component } from '@angular/core';

@Component({
  selector: 'app-superHeroe',
  templateUrl: 'superHeroe.component.html',
})
export class SuperHeroeComponent {
  name: string = 'Ironman';
  age: number = 40;

  get nameCapitalized() {
    return this.name.toUpperCase();
  }

  getAll(): string {
    return `${this.name} - ${this.age}`;
  }

  changeSuper() {
    this.name = 'Hulk';
  }

  changeAge() {
    this.age = 60;
  }
}
