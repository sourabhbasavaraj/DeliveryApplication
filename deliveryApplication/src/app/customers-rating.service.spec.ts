import { TestBed } from '@angular/core/testing';

import { CustomersRatingService } from './customers-rating.service';

describe('CustomersRatingService', () => {
  let service: CustomersRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
