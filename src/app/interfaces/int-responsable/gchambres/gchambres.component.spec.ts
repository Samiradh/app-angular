import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GChambresComponent } from './gchambres.component';

describe('GChambresComponent', () => {
  let component: GChambresComponent;
  let fixture: ComponentFixture<GChambresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GChambresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GChambresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
