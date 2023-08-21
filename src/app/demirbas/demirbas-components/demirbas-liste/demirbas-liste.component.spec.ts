import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemirbasListeComponent } from './demirbas-liste.component';

describe('DemirbasListeComponent', () => {
  let component: DemirbasListeComponent;
  let fixture: ComponentFixture<DemirbasListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemirbasListeComponent]
    });
    fixture = TestBed.createComponent(DemirbasListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
