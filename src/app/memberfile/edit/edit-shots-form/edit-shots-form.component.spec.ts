import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShotsFormComponent } from './edit-shots-form.component';

describe('EditShotsFormComponent', () => {
  let component: EditShotsFormComponent;
  let fixture: ComponentFixture<EditShotsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShotsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShotsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
