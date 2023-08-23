import { TestBed } from '@angular/core/testing';

import { DemirbasListeService } from './demirbas-liste.service';

describe('DemirbasListeService', () => {
  let service: DemirbasListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemirbasListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
