import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageIndicatorComponent } from './garage-indicator.component';

describe('GarageIndicatorComponent', () => {
  let component: GarageIndicatorComponent;
  let fixture: ComponentFixture<GarageIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
