import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntEmployeComponent } from './int-employe.component';

describe('IntEmployeComponent', () => {
  let component: IntEmployeComponent;
  let fixture: ComponentFixture<IntEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
