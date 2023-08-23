import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Musteri } from './musteri-kayit';

@Injectable({
  providedIn: 'root'
})
export class MusteriKayitService {

  constructor(private httpClient: HttpClient) { }

  create(musteri: Musteri) {

  }
}
