import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login.module';
import { GirisModule } from './giris/giris.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GirisModule
  ]
})
export class LoginComponentsModule { }
