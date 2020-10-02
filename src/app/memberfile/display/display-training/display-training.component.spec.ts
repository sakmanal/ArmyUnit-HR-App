import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrainingComponent } from './display-training.component';

describe('DisplayTrainingComponent', () => {
  let component: DisplayTrainingComponent;
  let fixture: ComponentFixture<DisplayTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
