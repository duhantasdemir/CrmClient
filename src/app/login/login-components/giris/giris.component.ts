import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})
export class GirisComponent implements OnInit {
  /* model: any= {};
  Email! : string ;
  password! :string ;
  username! : string; */
  username! : string;
  password! :string;
  isLoading: boolean = false;
  profilForm: any;

  ngOnInit(): void {
  }


  login(email: string, password: string) {
    console.log("E mail" , email);
    console.log("Pass" , password);
    if (this.profilForm.valid) {
      this.isLoading = true;
  }
    
  }}

