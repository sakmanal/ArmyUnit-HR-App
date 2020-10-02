import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDaysoffsComponent } from './display-daysoffs.component';

describe('DisplayDaysoffsComponent', () => {
  let component: DisplayDaysoffsComponent;
  let fixture: ComponentFixture<DisplayDaysoffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDaysoffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDaysoffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
