import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriIstekListeComponent } from './musteri-istek-liste.component';

describe('MusteriIstekListeComponent', () => {
  let component: MusteriIstekListeComponent;
  let fixture: ComponentFixture<MusteriIstekListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusteriIstekListeComponent]
    });
    fixture = TestBed.createComponent(MusteriIstekListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
