import { TestBed } from '@angular/core/testing';

import { BarchService } from './barch.service';

describe('BarchService', () => {
  let service: BarchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
