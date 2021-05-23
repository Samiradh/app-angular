import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteplanningsComponent } from './deleteplannings.component';

describe('DeleteplanningsComponent', () => {
  let component: DeleteplanningsComponent;
  let fixture: ComponentFixture<DeleteplanningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteplanningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteplanningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
