import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingSearchComponent } from './floating-search.component';

describe('FloatingSearchComponent', () => {
  let component: FloatingSearchComponent;
  let fixture: ComponentFixture<FloatingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
