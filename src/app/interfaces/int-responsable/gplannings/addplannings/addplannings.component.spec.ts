import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplanningsComponent } from './addplannings.component';

describe('AddplanningsComponent', () => {
  let component: AddplanningsComponent;
  let fixture: ComponentFixture<AddplanningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddplanningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplanningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
