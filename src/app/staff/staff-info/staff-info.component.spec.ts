import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffInfoComponent } from './staff-info.component';

describe('StaffInfoComponent', () => {
  let component: StaffInfoComponent;
  let fixture: ComponentFixture<StaffInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
