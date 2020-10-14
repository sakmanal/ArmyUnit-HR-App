import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartEndDatepickerComponent } from './start-end-datepicker.component';

describe('StartEndDatepickerComponent', () => {
  let component: StartEndDatepickerComponent;
  let fixture: ComponentFixture<StartEndDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartEndDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartEndDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
