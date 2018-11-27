import { TestBed } from '@angular/core/testing';

import { TopCrimesDataService } from './top-crimes-data.service';

describe('TopCrimesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopCrimesDataService = TestBed.get(TopCrimesDataService);
    expect(service).toBeTruthy();
  });
});
