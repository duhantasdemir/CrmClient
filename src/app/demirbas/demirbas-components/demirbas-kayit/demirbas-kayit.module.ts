import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemirbasKayitComponent } from './demirbas-kayit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DemirbasKayitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: DemirbasKayitComponent}
    ])
  ]
})
export class DemirbasKayitModule { }
