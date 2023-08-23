import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemirbasListeComponent } from './demirbas-liste.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    DemirbasListeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: DemirbasListeComponent}
    ]),
    TableModule
  ]
})
export class DemirbasListeModule { }
