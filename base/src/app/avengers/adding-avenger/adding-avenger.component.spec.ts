import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingAvengerComponent } from './adding-avenger.component';

describe('AddingAvengerComponent', () => {
  let component: AddingAvengerComponent;
  let fixture: ComponentFixture<AddingAvengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingAvengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingAvengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
