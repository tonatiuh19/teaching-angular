import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerRegionComponent } from './per-region.component';

describe('PerRegionComponent', () => {
  let component: PerRegionComponent;
  let fixture: ComponentFixture<PerRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
