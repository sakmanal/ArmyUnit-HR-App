import { TestBed } from '@angular/core/testing';

import { MemberfileService } from './memberfile.service';

describe('MemberfileService', () => {
  let service: MemberfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
