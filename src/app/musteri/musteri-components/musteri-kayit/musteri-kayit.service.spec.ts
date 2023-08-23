import { TestBed } from '@angular/core/testing';

import { MusteriKayitService } from './musteri-kayit.service';

describe('MusteriKayitService', () => {
  let service: MusteriKayitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusteriKayitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
