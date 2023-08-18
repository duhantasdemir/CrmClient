import { Component, OnInit } from '@angular/core';
import { GirisService } from './giris.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})

export class GirisComponent implements OnInit {
  constructor(public girisService: GirisService) { }

  ngOnInit(): void {
    
  }



  login(arg0: string,arg1: string){  
    // if(form.invalid){  
    //   return;  
    // }  
    console.log("form başarılı");
    this.girisService.CreateUser(arg0, arg1);  
  }  

  }
    



