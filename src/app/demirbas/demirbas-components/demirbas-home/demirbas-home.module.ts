import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemirbasHomeComponent } from './demirbas-home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DemirbasHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: DemirbasHomeComponent}
    ])
  ]
})
export class DemirbasHomeModule { }
