import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriHomeComponent } from './musteri-home.component';

describe('MusteriHomeComponent', () => {
  let component: MusteriHomeComponent;
  let fixture: ComponentFixture<MusteriHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusteriHomeComponent]
    });
    fixture = TestBed.createComponent(MusteriHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
