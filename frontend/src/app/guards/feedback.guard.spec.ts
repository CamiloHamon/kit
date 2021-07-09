import { TestBed } from '@angular/core/testing';

import { FeedbackGuard } from './feedback.guard';

describe('FeedbackGuard', () => {
  let guard: FeedbackGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FeedbackGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
