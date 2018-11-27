import { TestBed } from '@angular/core/testing';

import { TopPlayersForCrimesDataService } from './top-players-for-crimes-data.service';

describe('TopPlayersForCrimesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopPlayersForCrimesDataService = TestBed.get(TopPlayersForCrimesDataService);
    expect(service).toBeTruthy();
  });
});
