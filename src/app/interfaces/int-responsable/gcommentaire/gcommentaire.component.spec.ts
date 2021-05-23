import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcommentaireComponent } from './gcommentaire.component';

describe('GcommentaireComponent', () => {
  let component: GcommentaireComponent;
  let fixture: ComponentFixture<GcommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcommentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
