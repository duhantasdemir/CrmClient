import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemirbasHomeComponent } from './demirbas-home.component';

describe('DemirbasHomeComponent', () => {
  let component: DemirbasHomeComponent;
  let fixture: ComponentFixture<DemirbasHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemirbasHomeComponent]
    });
    fixture = TestBed.createComponent(DemirbasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
