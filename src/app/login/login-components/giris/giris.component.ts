import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})
export class GirisComponent implements OnInit {

  isLoading = false;
  constructor(private router: Router) { }

  ngOnInit(): void
  {

  }
  goToPersonel(){
    this.router.navigateByUrl('/personel-home');
  }

  login = () => {
    this.isLoading = true;

  setTimeout(() =>  {
      this.isLoading = false;
    }, 3000);

  }

}


