import { TestBed } from '@angular/core/testing';

import { FetchProfileService } from './fetch-profile.service';

describe('FetchProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchProfileService = TestBed.get(FetchProfileService);
    expect(service).toBeTruthy();
  });
});
