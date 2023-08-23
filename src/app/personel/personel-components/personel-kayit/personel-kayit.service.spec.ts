import { TestBed } from '@angular/core/testing';

import { PersonelKayitService } from './personel-kayit.service';

describe('PersonelKayitService', () => {
  let service: PersonelKayitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonelKayitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
