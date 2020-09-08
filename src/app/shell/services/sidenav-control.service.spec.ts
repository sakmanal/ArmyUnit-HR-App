import { TestBed } from '@angular/core/testing';

import { SidenavControlService } from './sidenav-control.service';

describe('SidenavControlService', () => {
  let service: SidenavControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
