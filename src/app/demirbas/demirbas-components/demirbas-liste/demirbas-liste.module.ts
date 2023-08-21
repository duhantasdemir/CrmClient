import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemirbasListeComponent } from './demirbas-liste.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DemirbasListeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: DemirbasListeComponent}
    ])
  ]
})
export class DemirbasListeModule { }
