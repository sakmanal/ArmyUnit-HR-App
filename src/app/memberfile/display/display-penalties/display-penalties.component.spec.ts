import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPenaltiesComponent } from './display-penalties.component';

describe('DisplayPenaltiesComponent', () => {
  let component: DisplayPenaltiesComponent;
  let fixture: ComponentFixture<DisplayPenaltiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPenaltiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPenaltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
