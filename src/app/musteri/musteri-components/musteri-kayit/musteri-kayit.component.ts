import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MusteriKayitService } from './musteri-kayit.service';


@Component({
  selector: 'app-musteri-kayit',
  templateUrl: './musteri-kayit.component.html',
  styleUrls: ['./musteri-kayit.component.scss']
})
export class MusteriKayitComponent implements OnInit{


  mregisterform!: FormGroup;
  toastrService: any;
  constructor(private formBuilder: FormBuilder, private musterikayitService: MusteriKayitService) { }

  
  ngOnInit(): void {
    this.mregisterform = this.formBuilder.group({
      Name: ["" ,Validators.required],
      Surname:["", Validators.required],
      MAdress:["" ,Validators.required],
      Password:["" ,Validators.required]
    })
  }
  register(){
    if(this.mregisterform.valid){
      console.log(this.mregisterform.value)
      let musterikayitModel = Object.assign({}, this.mregisterform.value)

      this.musterikayitService.register(musterikayitModel).subscribe(data=>{
        console.log(data)
         
      })
    }
  }

  
}
