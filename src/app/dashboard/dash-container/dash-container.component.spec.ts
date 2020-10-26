import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContainerComponent } from './dash-container.component';

describe('DashContainerComponent', () => {
  let component: DashContainerComponent;
  let fixture: ComponentFixture<DashContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
