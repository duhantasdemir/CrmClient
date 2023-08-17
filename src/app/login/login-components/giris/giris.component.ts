import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { girisService } from './giris.service';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})

export class GirisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  login(email: string, password: string) {
    console.log("E mail" , email);
    console.log("Pass" , password);
  }
    
}


