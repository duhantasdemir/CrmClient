import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GirisComponent } from './giris.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GirisComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: GirisComponent}
    ])
  ]
})
export class GirisModule { }
