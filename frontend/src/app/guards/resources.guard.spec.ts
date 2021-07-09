import { TestBed } from '@angular/core/testing';

import { ResourcesGuard } from './resources.guard';

describe('ResourcesGuard', () => {
  let guard: ResourcesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResourcesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
