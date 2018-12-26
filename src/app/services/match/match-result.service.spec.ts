import { TestBed } from '@angular/core/testing';

import { MatchResultService } from './match-result.service';

describe('MatchResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchResultService = TestBed.get(MatchResultService);
    expect(service).toBeTruthy();
  });
});
