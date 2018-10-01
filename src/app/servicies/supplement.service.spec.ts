import { TestBed } from '@angular/core/testing';

import { SupplementService } from './supplement.service';

describe('SupplementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplementService = TestBed.get(SupplementService);
    expect(service).toBeTruthy();
  });
});
