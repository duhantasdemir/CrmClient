import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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
  profileForm: FormGroup;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  

  ngOnInit(): void
  {
  }
  //  goToPersonel(){
  //    this.router.navigateByUrl('/personel-home');
  //  }


  
  login()  {
    console.log(this.username);
    console.log(this.password);
    if (this.profileForm.valid) {
    this.isLoading = true;
  //   this.girisService.postEkle(this.model.Email, this.model.password).subscribe((res : any)=>{
  //   this.getData = res; //0 or 1

  //    })
    setTimeout(() =>  {
        this.isLoading = false;
      }, 3000);

  }

  }}
