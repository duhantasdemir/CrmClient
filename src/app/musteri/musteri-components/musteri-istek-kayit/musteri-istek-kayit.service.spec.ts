import { TestBed } from '@angular/core/testing';

import { MusteriIstekKayitService } from './musteri-istek-kayit.service';

describe('MusteriIstekKayitService', () => {
  let service: MusteriIstekKayitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusteriIstekKayitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
