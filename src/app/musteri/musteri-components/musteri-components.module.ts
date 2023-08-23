import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusteriHomeModule } from './musteri-home/musteri-home.module';
import { MusteriIstekKayitModule } from './musteri-istek-kayit/musteri-istek-kayit.module';
import { MusteriIstekListeModule } from './musteri-istek-liste/musteri-istek-liste.module';
import { MusteriKayitModule } from './musteri-kayit/musteri-kayit.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MusteriHomeModule,
    MusteriIstekKayitModule,
    MusteriIstekListeModule,
    MusteriKayitModule
  ]
})
export class MusteriComponentsModule { }
