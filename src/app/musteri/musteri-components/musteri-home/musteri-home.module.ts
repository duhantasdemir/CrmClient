import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusteriHomeComponent } from './musteri-home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../../../layout/components/components.module";



@NgModule({
    declarations: [
        MusteriHomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: "", component: MusteriHomeComponent }
        ]),
        ComponentsModule
    ]
})
export class MusteriHomeModule { }
