import { TestBed } from '@angular/core/testing';

import { ChakaService } from './chaka.service';

describe('ChakaService', () => {
  let service: ChakaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChakaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
