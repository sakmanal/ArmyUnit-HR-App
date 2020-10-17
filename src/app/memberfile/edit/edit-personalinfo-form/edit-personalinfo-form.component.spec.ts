import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonalinfoFormComponent } from './edit-personalinfo-form.component';

describe('EditPersonalinfoFormComponent', () => {
  let component: EditPersonalinfoFormComponent;
  let fixture: ComponentFixture<EditPersonalinfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPersonalinfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonalinfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
