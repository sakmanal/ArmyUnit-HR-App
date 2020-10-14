import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPenaltiesFormComponent } from './edit-penalties-form.component';

describe('EditPenaltiesFormComponent', () => {
  let component: EditPenaltiesFormComponent;
  let fixture: ComponentFixture<EditPenaltiesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPenaltiesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPenaltiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
