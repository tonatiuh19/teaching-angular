import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCrewComponent } from './the-crew.component';

describe('TheCrewComponent', () => {
  let component: TheCrewComponent;
  let fixture: ComponentFixture<TheCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheCrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
