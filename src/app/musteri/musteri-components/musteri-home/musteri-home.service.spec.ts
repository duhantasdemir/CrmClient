import { TestBed } from '@angular/core/testing';

import { MusteriHomeService } from './musteri-home.service';

describe('MusteriHomeService', () => {
  let service: MusteriHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusteriHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
