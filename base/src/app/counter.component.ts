import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h1>{{title}}</h1>
        <strong>{{base}}</strong>
        <button (click)="acumulate(+base);">+{{base}}</button>
        <span>{{counter}}</span>
        <button (click)="acumulate(-base);">-{{base}}</button>`
})
export class CounterComponent{
    title = 'base';
    counter:number = 0;
    base:number = 5;

    acumulate(val:number){
        this.counter += val;
    }
}