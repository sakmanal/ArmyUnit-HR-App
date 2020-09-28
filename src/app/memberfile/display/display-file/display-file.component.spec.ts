import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFileComponent } from './display-file.component';

describe('DisplayFileComponent', () => {
  let component: DisplayFileComponent;
  let fixture: ComponentFixture<DisplayFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
