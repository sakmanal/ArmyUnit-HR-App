import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBasicinfoFormComponent } from './edit-basicinfo-form.component';

describe('EditBasicinfoFormComponent', () => {
  let component: EditBasicinfoFormComponent;
  let fixture: ComponentFixture<EditBasicinfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBasicinfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBasicinfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
