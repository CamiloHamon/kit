import { TestBed } from '@angular/core/testing';

import { SensationService } from './sensation.service';

describe('SensationService', () => {
  let service: SensationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
