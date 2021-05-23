import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GReservationsComponent } from './greservations.component';

describe('GReservationsComponent', () => {
  let component: GReservationsComponent;
  let fixture: ComponentFixture<GReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
