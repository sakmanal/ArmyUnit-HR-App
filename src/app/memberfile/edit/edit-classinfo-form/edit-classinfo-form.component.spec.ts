import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassinfoFormComponent } from './edit-classinfo-form.component';

describe('EditClassinfoFormComponent', () => {
  let component: EditClassinfoFormComponent;
  let fixture: ComponentFixture<EditClassinfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClassinfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassinfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
