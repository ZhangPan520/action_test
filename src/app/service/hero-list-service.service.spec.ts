import { TestBed } from '@angular/core/testing';

import { HeroListServiceService } from './hero-list-service.service';

describe('HeroListServiceService', () => {
  let service: HeroListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
