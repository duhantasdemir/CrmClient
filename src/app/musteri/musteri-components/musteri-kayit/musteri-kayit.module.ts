import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusteriKayitComponent } from './musteri-kayit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MusteriKayitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component: MusteriKayitComponent}
    ])
  ]
})
export class MusteriKayitModule { }
