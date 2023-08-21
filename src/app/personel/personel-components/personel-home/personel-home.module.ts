import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonelHomeComponent } from './personel-home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../../../layout/components/components.module";
import { TableModule } from 'primeng/table';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,TableModule,
        RouterModule.forChild([
            { path: "", component: PersonelHomeComponent }
        ]),
        ComponentsModule
    ]
})
export class PersonelHomeModule { }
