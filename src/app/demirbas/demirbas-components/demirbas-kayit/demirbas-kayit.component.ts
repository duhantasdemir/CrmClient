import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemirbasKayitService } from './demirbas-kayit.service';

@Component({
  selector: 'app-demirbas-kayit',
  templateUrl: './demirbas-kayit.component.html',
  styleUrls: ['./demirbas-kayit.component.scss']
})
export class DemirbasKayitComponent implements OnInit {
  dregisterform!: FormGroup;
  toastrService: any;
  constructor(private formBuilder: FormBuilder, private demirbaskayitService: DemirbasKayitService) { }

  
  ngOnInit(): void {
    this.dregisterform = this.formBuilder.group({
      DemirbasAdi: ["" ,Validators.required],
      DemirbasTuru:["", Validators.required],
      DemirbasFiyati:["" ,Validators.required],
      DemirbasSeriNumarasi:["" ,Validators.required]
    })
  }
  register(){
    if(this.dregisterform.valid){
      console.log(this.dregisterform.value)
      let demirbaskayitModel = Object.assign({}, this.dregisterform.value)

      this.demirbaskayitService.register(demirbaskayitModel).subscribe(data=>{
        console.log(data)
         
      })
    }
  }

}
