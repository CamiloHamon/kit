import { TestBed } from '@angular/core/testing';

import { SituationsService } from './situations.service';

describe('SituationsService', () => {
  let service: SituationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SituationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
