import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonelHomeModule } from './personel-components/personel-home/personel-home.module';
import { PersonelKayitModule } from './personel-components/personel-kayit/personel-kayit.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PersonelHomeModule,
    PersonelKayitModule
  ]
})
export class PersonelModule { }
