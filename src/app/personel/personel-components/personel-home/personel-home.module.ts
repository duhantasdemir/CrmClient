import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonelHomeComponent } from './personel-home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../../../layout/components/components.module";



@NgModule({
    declarations: [
        PersonelHomeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: "", component: PersonelHomeComponent }
        ]),
        ComponentsModule
    ]
})
export class PersonelHomeModule { }
