import { ComponentFixture, TestBed } from '@angular/core/testing';

import { errorAlert } from './error-alert.component';

describe('ErrorAlertComponent', () => {
  let component: errorAlert;
  let fixture: ComponentFixture<errorAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ errorAlert ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(errorAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
