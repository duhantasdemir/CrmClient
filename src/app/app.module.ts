import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { MusteriModule } from './musteri/musteri.module';
import { PersonelModule } from './personel/personel.module';
import { LayoutModule } from "./layout/layout.module";
import { LoginModule } from './login/login.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule, MusteriModule, PersonelModule,LoginModule,
        LayoutModule
    ]
})
export class AppModule { }
