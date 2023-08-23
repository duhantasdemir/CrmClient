import { TestBed } from '@angular/core/testing';

import { DemirbasKayitService } from './demirbas-kayit.service';

describe('DemirbasKayitService', () => {
  let service: DemirbasKayitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemirbasKayitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
