import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel,} from './giris';

@Injectable({ 
  providedIn: 'root'
 })
export class GirisService {

  apiUrl = "https://localhost:7288/api/"  //base url = back end link   /api   + controller name
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel) {
    return this.httpClient.post(this.apiUrl+"Kullanici/Login",loginModel)
  }

  // isGirised(){
  //   if(localStorage.getItem("token")){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

//  httpClient: any;

//  async login(email: string, password: string ) {
//    const observable: Observable<any> = this.httpClient.post({
//       controller: "users",
//       action: "login",

//     }, { email, password } )

//     await firstValueFrom(observable)
//  }

//  constructor(private http: HttpClient) {}
//  CreateUser(email: string, password: string) {
//   const authData:  login  = {email: email, password: password}  
//     this.http.post("", authData);   //base url = back end link   /api   + controller name
//  }
}

