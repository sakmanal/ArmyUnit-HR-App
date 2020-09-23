import { TestBed } from '@angular/core/testing';

import { DailyRosterService } from './daily-roster.service';

describe('DailyRosterService', () => {
  let service: DailyRosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyRosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
