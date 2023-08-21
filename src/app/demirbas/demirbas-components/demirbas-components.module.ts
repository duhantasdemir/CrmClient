import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemirbasHomeModule } from './demirbas-home/demirbas-home.module';
import { DemirbasListeModule } from './demirbas-liste/demirbas-liste.module';
import { DemirbasKayitModule } from './demirbas-kayit/demirbas-kayit.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemirbasHomeModule,
    DemirbasListeModule,
    DemirbasKayitModule
  ]
})
export class DemirbasComponentsModule { }
