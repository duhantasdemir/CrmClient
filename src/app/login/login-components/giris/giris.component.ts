import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { girisService } from './giris.service';
@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})
export class GirisComponent implements OnInit {
  model: any= {};
  isLoading = false;
  getData!: boolean;
  constructor(private router: Router, private girisService: girisService) { }

  ngOnInit(): void
  {

  }
  goToPersonel(){
    this.router.navigateByUrl('/personel-home');
  }

  login = () => {
    var Email = this.model.Email;
    var password = this.model.password;
    this.girisService.postEkle(this.model.Email, this.model.password).subscribe((res : any)=>{
      this.getData = res; //0 or 1
      
    })
  setTimeout(() =>  {
      this.isLoading = false;
    }, 3000);

  }

}


