import { TestBed } from '@angular/core/testing';

import { StaffInfoService } from './staff-info.service';

describe('StaffInfoService', () => {
  let service: StaffInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
