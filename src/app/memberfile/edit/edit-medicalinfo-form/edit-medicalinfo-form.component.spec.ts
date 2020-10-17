import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicalinfoFormComponent } from './edit-medicalinfo-form.component';

describe('EditMedicalinfoFormComponent', () => {
  let component: EditMedicalinfoFormComponent;
  let fixture: ComponentFixture<EditMedicalinfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedicalinfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicalinfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
