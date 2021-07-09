import { TestBed } from '@angular/core/testing';

import { EmotionsGuard } from './emotions.guard';

describe('EmotionsGuard', () => {
  let guard: EmotionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmotionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
