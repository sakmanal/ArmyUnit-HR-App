import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInfoComponent } from './display-info.component';

describe('DisplayInfoComponent', () => {
  let component: DisplayInfoComponent;
  let fixture: ComponentFixture<DisplayInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
