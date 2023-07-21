import { TestBed } from '@angular/core/testing';

import { CompingService } from './comping.service';

describe('CompingService', () => {
  let service: CompingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
