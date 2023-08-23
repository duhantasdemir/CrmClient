import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Musteri } from './musteri-kayit';
import { MusteriKayitService } from './musteri-kayit.service';

@Component({
  selector: 'app-musteri-kayit',
  templateUrl: './musteri-kayit.component.html',
  styleUrls: ['./musteri-kayit.component.scss']
})
export class MusteriKayitComponent implements OnInit{

  frm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private musterikayitService: MusteriKayitService) { }

  
  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      Name: ["" ,Validators.required],
      Surname:["", Validators.required],
      MAdress:["" ,Validators.required],
      Password:["" ,Validators.required]
    })
  }


  get component() {
    return this.frm.controls;
  }

submitted: boolean = false;
onSubmit(musteri: Musteri) {
  this.submitted = true;

  debugger;
  if(this.frm.invalid)
  return;
  }
  
}
