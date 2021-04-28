import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerCapitalComponent } from './per-capital.component';

describe('PerCapitalComponent', () => {
  let component: PerCapitalComponent;
  let fixture: ComponentFixture<PerCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerCapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
