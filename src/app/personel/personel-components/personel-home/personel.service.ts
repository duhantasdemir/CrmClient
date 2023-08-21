import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonelHomeModule } from './personel-home.module';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { personel } from './personel';
import { PersonelHomeComponent } from './personel-home.component';
import { PersonelComponentsModule } from '../personel-components.module';


@Injectable({ providedIn: 'root' })
export class personelService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  personelList: any;
  constructor(private httpClient: HttpClient) {}
  readonly baseURL = 'https://localhost:44394/api/';

  getCustomersLarge() {
    return this.httpClient
      .get<any>('assets/customers-large.json')
      .toPromise()
      .then((res) => <personel[]>res.data)
      .then((data) => {
        return data;
      });
  }
  personelAdd(personel:personel){
    return this.httpClient.post(this.baseURL + 'personel/Post',personel,this.httpOptions);
     }

  updatePersonel(index: number, updatedPerson: any) {
  
    this.personelList[index] = updatedPerson;
    }

    deletePersonel(index: number) {
      this.personelList.splice(index, 1);
    }
  getAll() {
    return this.httpClient.get<any>(
      environment.base_url + '/api/personel/GetAll'
    );
  }
}
