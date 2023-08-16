import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GirisComponent } from './giris.component';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class girisService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private httpClient: HttpClient) {}
  readonly baseURL = 'https://localhost:7288/api/';

  getCustomersLarge() {
    return this.httpClient
      .get<any>('assets/customers-large.json')
      .toPromise()
      .then((res) => <GirisComponent[]>res.data)
      .then((data) => {
        return data;
      });
  }
  postEkle(giris:GirisComponent){
    return this.httpClient.post(this.baseURL + 'login/Post',giris,this.httpOptions);
     }

  getAll() {
    return this.httpClient.get<any>(
      environment.base_url + '/api/login/GetAll'
    );
  }
}
