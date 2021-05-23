import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteserivcesComponent } from './deleteserivces.component';

describe('DeleteserivcesComponent', () => {
  let component: DeleteserivcesComponent;
  let fixture: ComponentFixture<DeleteserivcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteserivcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteserivcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
