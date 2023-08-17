import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { girisService } from './giris.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { login } from './giris';
@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})
export class GirisComponent implements OnInit {
  model: any= {};
  Email! : string ;
  password! :string ;

  constructor(private router: Router, 
    private girisService: girisService,
    public service: girisService, 
    private fb: FormBuilder) { }

  profileForm = this.fb.group({
    username: [''],
    password: [''],
  });

  isLoading = false;
  getData!: boolean;
  

  ngOnInit(): void
  {
  }
  //  goToPersonel(){
  //    this.router.navigateByUrl('/personel-home');
  //  }

  login()  {
    console.log(this.Email);
    console.log(this.password);
  //   this.girisService.postEkle(this.model.Email, this.model.password).subscribe((res : any)=>{
  //   this.getData = res; //0 or 1

  //    })
  //  setTimeout(() =>  {
  //      this.isLoading = false;
  //    }, 3000);

  }

}
