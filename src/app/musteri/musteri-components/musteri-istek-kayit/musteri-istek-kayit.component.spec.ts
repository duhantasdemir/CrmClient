import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriIstekKayitComponent } from './musteri-istek-kayit.component';

describe('MusteriIstekKayitComponent', () => {
  let component: MusteriIstekKayitComponent;
  let fixture: ComponentFixture<MusteriIstekKayitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusteriIstekKayitComponent]
    });
    fixture = TestBed.createComponent(MusteriIstekKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
