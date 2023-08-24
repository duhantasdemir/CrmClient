import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel,} from './giris';

@Injectable({ 
  providedIn: 'root'
})
export class GirisService {

  apiUrl = "https://localhost:44334/api/"  //base url = back end link   /api   + controller name
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel) {
    return this.httpClient.post(this.apiUrl+"Kullanici/Login",loginModel)
  }
}

