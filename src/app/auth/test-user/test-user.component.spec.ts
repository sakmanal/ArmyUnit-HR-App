import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserComponent } from './test-user.component';

describe('TestUserComponent', () => {
  let component: TestUserComponent;
  let fixture: ComponentFixture<TestUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
