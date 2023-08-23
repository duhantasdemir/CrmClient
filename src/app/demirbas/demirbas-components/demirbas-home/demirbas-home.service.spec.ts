import { TestBed } from '@angular/core/testing';

import { DemirbasHomeService } from './demirbas-home.service';

describe('DemirbasHomeService', () => {
  let service: DemirbasHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemirbasHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
