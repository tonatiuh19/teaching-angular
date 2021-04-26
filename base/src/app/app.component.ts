import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base';
  counter:number = 0;
  base:number = 5;

  acumulate(val:number){
    this.counter += val;
  }
}
