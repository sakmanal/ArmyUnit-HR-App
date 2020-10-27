import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterChartComponent } from './roster-chart.component';

describe('RosterChartComponent', () => {
  let component: RosterChartComponent;
  let fixture: ComponentFixture<RosterChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
