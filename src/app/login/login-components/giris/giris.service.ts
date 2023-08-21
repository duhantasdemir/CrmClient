import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { login } from './giris';

@Injectable({ 
  providedIn: 'root'
 })
export class GirisService {
 httpClient: any;
// baseUrl : string = "https://localhost:44334";
 baseUrl : string = "https://8cfe-85-99-124-86.ngrok.io";

 async login(email: string, password: string ) {
   const observable: Observable<any> = this.httpClient.post({
      controller: "users",
      action: "login",

    }, { email, password } )

    await firstValueFrom(observable);
 }

 constructor(private http: HttpClient) {}
 CreateUser(email: string, password: string) {
  const authData:  login  = {email: email, password: password}  
    this.http.post(this.baseUrl + "/api/Login", authData);   //base url = back end link   /api   + controller name
 }
}

