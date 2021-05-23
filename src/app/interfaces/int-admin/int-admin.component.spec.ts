import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntAdminComponent } from './int-admin.component';

describe('IntAdminComponent', () => {
  let component: IntAdminComponent;
  let fixture: ComponentFixture<IntAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
