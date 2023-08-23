import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusteriKayitComponent } from './musteri-kayit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MusteriKayitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component: MusteriKayitComponent}
    ]),
    ReactiveFormsModule
  ]
})
export class MusteriKayitModule { }
