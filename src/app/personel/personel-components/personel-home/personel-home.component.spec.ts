import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelHomeComponent } from './personel-home.component';

describe('PersonelHomeComponent', () => {
  let component: PersonelHomeComponent;
  let fixture: ComponentFixture<PersonelHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonelHomeComponent]
    });
    fixture = TestBed.createComponent(PersonelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
