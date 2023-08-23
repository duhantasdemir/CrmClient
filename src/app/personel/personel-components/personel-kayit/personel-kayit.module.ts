import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonelKayitComponent } from './personel-kayit.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../../../layout/components/components.module";



@NgModule({
    declarations: [
        PersonelKayitComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: "", component: PersonelKayitComponent }
        ]),
        ComponentsModule
    ]
})
export class PersonelKayitModule { }
