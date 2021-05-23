import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GplanningsComponent } from './gplannings.component';

describe('GplanningsComponent', () => {
  let component: GplanningsComponent;
  let fixture: ComponentFixture<GplanningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GplanningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GplanningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
