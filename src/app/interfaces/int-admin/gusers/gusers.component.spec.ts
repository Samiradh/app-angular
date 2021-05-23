import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GusersComponent } from './gusers.component';

describe('GusersComponent', () => {
  let component: GusersComponent;
  let fixture: ComponentFixture<GusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
