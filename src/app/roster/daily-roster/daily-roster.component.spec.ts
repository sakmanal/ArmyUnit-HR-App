import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRosterComponent } from './daily-roster.component';

describe('DailyRosterComponent', () => {
  let component: DailyRosterComponent;
  let fixture: ComponentFixture<DailyRosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyRosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
