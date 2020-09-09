import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOffComponent } from './day-off.component';

describe('DayOffComponent', () => {
  let component: DayOffComponent;
  let fixture: ComponentFixture<DayOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
