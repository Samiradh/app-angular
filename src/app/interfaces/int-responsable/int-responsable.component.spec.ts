import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntResponsableComponent } from './int-responsable.component';

describe('IntResponsableComponent', () => {
  let component: IntResponsableComponent;
  let fixture: ComponentFixture<IntResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
