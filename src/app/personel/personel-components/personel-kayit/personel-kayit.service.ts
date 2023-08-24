import { Injectable } from '@angular/core';
import { PersonelKayitModel } from './personel-kayit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonelKayitService {

  apiUrl = "https://localhost:7288/api/"  //base url = back end link   /api   + controller name
  constructor(private httpClient:HttpClient) { }

  register(personelModel: PersonelKayitModel) {
    return this.httpClient.post(this.apiUrl+"Personel/PersonelKayit",personelModel)
   }
}

