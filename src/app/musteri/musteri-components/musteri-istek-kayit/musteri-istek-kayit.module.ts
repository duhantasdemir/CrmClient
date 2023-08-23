import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusteriIstekKayitComponent } from './musteri-istek-kayit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MusteriIstekKayitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component: MusteriIstekKayitComponent}
    ]),
    
  ]
})
export class MusteriIstekKayitModule { }
