import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  MusteriKayitModel } from './musteri-kayit';

@Injectable({
  providedIn: 'root'
})
export class MusteriKayitService {

  apiUrl = "https://localhost:44334/api/"  //base url = back end link   /api   + controller name
  constructor(private httpClient:HttpClient) { }

  register(musteriModel: MusteriKayitModel) {
    return this.httpClient.post(this.apiUrl+"Musteri/Register",musteriModel)
  }
}
