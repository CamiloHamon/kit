import { TestBed } from '@angular/core/testing';

import { DistinctionsService } from './distinctions.service';

describe('DistinctionsService', () => {
  let service: DistinctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistinctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
