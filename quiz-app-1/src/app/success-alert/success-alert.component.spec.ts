import { ComponentFixture, TestBed } from '@angular/core/testing';

import { successAlert } from './success-alert.component';

describe('successAlert', () => {
  let component: successAlert;
  let fixture: ComponentFixture<successAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ successAlert ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(successAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
