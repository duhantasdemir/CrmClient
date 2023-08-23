import { TestBed } from '@angular/core/testing';

import { MusteriIstekListeService } from './musteri-istek-liste.service';

describe('MusteriIstekListeService', () => {
  let service: MusteriIstekListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusteriIstekListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
