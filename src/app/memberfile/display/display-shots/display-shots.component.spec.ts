import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShotsComponent } from './display-shots.component';

describe('DisplayShotsComponent', () => {
  let component: DisplayShotsComponent;
  let fixture: ComponentFixture<DisplayShotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayShotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
