import { TestBed } from '@angular/core/testing';

import { CreatepdfService } from './createpdf.service';

describe('CreatepdfService', () => {
  let service: CreatepdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatepdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
