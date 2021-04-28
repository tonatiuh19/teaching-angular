import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCountryComponent } from './review-country.component';

describe('ReviewCountryComponent', () => {
  let component: ReviewCountryComponent;
  let fixture: ComponentFixture<ReviewCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
