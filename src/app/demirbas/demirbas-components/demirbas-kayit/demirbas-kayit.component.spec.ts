import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemirbasKayitComponent } from './demirbas-kayit.component';

describe('DemirbasKayitComponent', () => {
  let component: DemirbasKayitComponent;
  let fixture: ComponentFixture<DemirbasKayitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemirbasKayitComponent]
    });
    fixture = TestBed.createComponent(DemirbasKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
