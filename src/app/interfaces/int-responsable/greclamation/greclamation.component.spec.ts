import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreclamationComponent } from './greclamation.component';

describe('GreclamationComponent', () => {
  let component: GreclamationComponent;
  let fixture: ComponentFixture<GreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
