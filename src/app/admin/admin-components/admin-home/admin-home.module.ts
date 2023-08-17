import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../../../layout/components/components.module";



@NgModule({
    declarations: [
        AdminHomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: "", component: AdminHomeComponent }
        ]),
        ComponentsModule
    ]
})
export class AdminHomeModule { }
