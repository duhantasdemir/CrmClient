import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GirisModule } from './giris/giris.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GirisModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginComponentsModule { }
