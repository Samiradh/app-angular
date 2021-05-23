import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntClientComponent } from './int-client.component';

describe('IntClientComponent', () => {
  let component: IntClientComponent;
  let fixture: ComponentFixture<IntClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
