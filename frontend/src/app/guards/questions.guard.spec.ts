import { TestBed } from '@angular/core/testing';

import { QuestionsGuard } from './questions.guard';

describe('QuestionsGuard', () => {
  let guard: QuestionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QuestionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
