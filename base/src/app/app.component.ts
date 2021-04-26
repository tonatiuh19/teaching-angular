import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base';
  counter:number = 0;

  plusOne(){
    this.counter += 1;
  }

  lessOne(){
    this.counter -= 1;
  }
}
