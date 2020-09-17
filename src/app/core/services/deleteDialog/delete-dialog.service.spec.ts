import { TestBed } from '@angular/core/testing';

import { DeleteDiaologService } from './delete-dialog.service';

describe('DeleteDiaologService', () => {
  let service: DeleteDiaologService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteDiaologService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
