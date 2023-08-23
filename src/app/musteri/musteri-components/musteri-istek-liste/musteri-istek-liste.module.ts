import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusteriIstekListeComponent } from './musteri-istek-liste.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ComponentsModule } from 'src/app/layout/components/components.module';




@NgModule({
  declarations: [
    MusteriIstekListeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: MusteriIstekListeComponent}
    ]),
    TableModule,
    ComponentsModule
  ]
})
export class MusteriIstekListeModule { }
