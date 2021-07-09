import { TestBed } from '@angular/core/testing';

import { DistinctionsGuard } from './distinctions.guard';

describe('DistinctionsGuard', () => {
  let guard: DistinctionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DistinctionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
