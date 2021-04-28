import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerCountryComponent } from './per-country.component';

describe('PerCountryComponent', () => {
  let component: PerCountryComponent;
  let fixture: ComponentFixture<PerCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
