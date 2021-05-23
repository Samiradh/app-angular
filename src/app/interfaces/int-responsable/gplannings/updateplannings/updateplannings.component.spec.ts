import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateplanningsComponent } from './updateplannings.component';

describe('UpdateplanningsComponent', () => {
  let component: UpdateplanningsComponent;
  let fixture: ComponentFixture<UpdateplanningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateplanningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateplanningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
