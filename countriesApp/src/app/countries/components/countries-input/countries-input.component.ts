import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styleUrls: ['./countries-input.component.css'],
})
export class CountriesInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  search: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(250)).subscribe((val) => {
      this.onDebounce.emit(val);
    });
  }

  searching() {
    this.onEnter.emit(this.search);
  }

  keyPressed() {
    this.debouncer.next(this.search);
  }
}
