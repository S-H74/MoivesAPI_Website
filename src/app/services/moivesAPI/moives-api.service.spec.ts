import { TestBed } from '@angular/core/testing';

import { MoivesAPIService } from './moives-api.service';

describe('MoivesAPIService', () => {
  let service: MoivesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoivesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
