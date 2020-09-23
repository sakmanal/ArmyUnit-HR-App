import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterReportComponent } from './roster-report.component';

describe('RosterReportComponent', () => {
  let component: RosterReportComponent;
  let fixture: ComponentFixture<RosterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
