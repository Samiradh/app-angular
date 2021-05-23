import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GservicesComponent } from './gservices.component';

describe('GservicesComponent', () => {
  let component: GservicesComponent;
  let fixture: ComponentFixture<GservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
