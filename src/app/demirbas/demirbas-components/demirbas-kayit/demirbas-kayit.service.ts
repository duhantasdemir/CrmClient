import { Injectable } from '@angular/core';
import { DemirbasKayitModel } from './demirbas-kayit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemirbasKayitService {

  apiUrl = "https://localhost:7288/api/"  //base url = back end link   /api   + controller name
  constructor(private httpClient:HttpClient) { }

  register(demirbasModel: DemirbasKayitModel) {
    return this.httpClient.post(this.apiUrl+"Demirbas/DemirbasEkleme",demirbasModel)
   }
}
