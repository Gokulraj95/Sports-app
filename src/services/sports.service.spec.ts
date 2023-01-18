import { TestBed } from '@angular/core/testing';

import { SportsService } from './sports.service';

describe('SportsServiceTsService', () => {
  let service: SportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
