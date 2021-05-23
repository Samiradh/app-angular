import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntReceptionnisteComponent } from './int-receptionniste.component';

describe('IntReceptionnisteComponent', () => {
  let component: IntReceptionnisteComponent;
  let fixture: ComponentFixture<IntReceptionnisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntReceptionnisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntReceptionnisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
