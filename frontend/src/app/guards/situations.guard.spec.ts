import { TestBed } from '@angular/core/testing';

import { SituationsGuard } from './situations.guard';

describe('SituationsGuard', () => {
  let guard: SituationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SituationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
