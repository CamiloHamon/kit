import { TestBed } from '@angular/core/testing';

import { SensationsGuard } from './sensations.guard';

describe('SensationsGuard', () => {
  let guard: SensationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SensationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
