import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GClientsComponent } from './gclients.component';

describe('GClientsComponent', () => {
  let component: GClientsComponent;
  let fixture: ComponentFixture<GClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
