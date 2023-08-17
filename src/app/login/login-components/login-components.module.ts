import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login.module';
import { GirisModule } from './giris/giris.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GirisModule,
    FormsModule,
    ReactiveFormsModule,
    
],
exports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
]})
export class LoginComponentsModule { }
