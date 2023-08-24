import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonelKayitService } from './personel-kayit.service';

@Component({
  selector: 'app-personel-kayit',
  templateUrl: './personel-kayit.component.html',
  styleUrls: ['./personel-kayit.component.scss']
})
export class PersonelKayitComponent implements OnInit{


  pregisterform!: FormGroup;
  toastrService: any;
  constructor(private formBuilder: FormBuilder, private personelkayitService: PersonelKayitService) { }

  ngOnInit(): void {
    this.pregisterform = this.formBuilder.group({
      Name: ["" ,Validators.required],
      Surname:["", Validators.required],
      MAdress:["" ,Validators.required],
      Password:["" ,Validators.required],
      PersonelCartNo: ["" ,Validators.required],
      DogumYeri:["" ,Validators.required],
      TCKimlikNo:["" ,Validators.required],
      DogumTarihi:["" ,Validators.required],
      SigortaSicilNo:["" ,Validators.required],
      IseGirisTarihi:["" ,Validators.required],
      Maas:["" ,Validators.required],
      Iban:["" ,Validators.required],
    })
  }
  register(){
    if(this.pregisterform.valid){
      console.log(this.pregisterform.value)
      let personelkayitModel = Object.assign({}, this.pregisterform.value)

      this.personelkayitService.register(personelkayitModel).subscribe(data=>{
        console.log(data)
         
      })
    }
  }



  
}


