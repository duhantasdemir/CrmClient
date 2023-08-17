import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
 })
export class girisService {
 httpClientService: any;

 async login(email: string, password: string ) {
   const observable: Observable<any> = this.httpClientService.post({
      controller: "users",
      action: "login",
    }, { email, password } )

    await firstValueFrom(observable)
 }
}

