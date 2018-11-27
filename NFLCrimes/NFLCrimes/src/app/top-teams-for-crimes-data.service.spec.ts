import { TestBed } from '@angular/core/testing';

import { TopTeamsForCrimesDataService } from './top-teams-for-crimes-data.service';

describe('TopTeamsForCrimesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopTeamsForCrimesDataService = TestBed.get(TopTeamsForCrimesDataService);
    expect(service).toBeTruthy();
  });
});
