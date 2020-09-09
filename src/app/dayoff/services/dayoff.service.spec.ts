import { TestBed } from '@angular/core/testing';

import { DayoffService } from './dayoff.service';

describe('DayoffService', () => {
  let service: DayoffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayoffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
