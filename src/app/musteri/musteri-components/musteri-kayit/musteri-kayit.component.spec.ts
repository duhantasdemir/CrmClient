import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriKayitComponent } from './musteri-kayit.component';

describe('MusteriKayitComponent', () => {
  let component: MusteriKayitComponent;
  let fixture: ComponentFixture<MusteriKayitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusteriKayitComponent]
    });
    fixture = TestBed.createComponent(MusteriKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
