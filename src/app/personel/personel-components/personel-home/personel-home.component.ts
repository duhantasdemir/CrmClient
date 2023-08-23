import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Location } from '@angular/common';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { personelService } from './personel.service';
import { personel } from './personel';

@Component({
  selector: 'app-personel-home',
  templateUrl: './personel-home.component.html',
  styleUrls: ['./personel-home.component.scss']
})
export class PersonelHomeComponent implements OnInit {
  items!: MenuItem[];
  value1!: string;
  value2!: string;
  value3!: string;
  home!: MenuItem;
  list: any = [];
  cols!: any[];
  costomer!: any;
  btnekle!: any;
  router!: any;
  editedPerson: any = {};
  selectedIndex!: number;
  
  constructor(
    private personelservice: personelService,
    private _location: Location,
    private formbuilder: FormBuilder){}

    form!: FormGroup;
    ngOnInit(): void {
      this.form = this.formbuilder.group({
        isimSoyisim: ["", Validators.required],
        Email: ["", Validators.required],
        Telefon:["", Validators.required],
        Pozisyon:["", Validators.required],
      })
      this.personelservice.getAll().subscribe(list => {
        this.list = list;
        console.log(list)
      });
    this.getAllData();
    this.home = { icon: 'pi pi-home', url: 'http://localhost:4200/personel' };
    this.items = [{ label: 'Personel' }];

    this.cols = [
      { field: '', header: '' },
      { field: '', header: '' },
      { field: '', header: ''}
    ];
  }
  getAllData() {
    this.personelservice.getAll().subscribe((result: any) => {
      console.log(result);
      this.list = result;
    });
  }
  personelAdd(){
    const gonderilecek = new personel();
    //   console.log("ererre");
          gonderilecek.isimSoyisim = this.form.controls['isimSoyisim'].value;
          gonderilecek.Email = this.form.controls['Email'].value
          gonderilecek.Telefon = this.form.controls['Telefon'].value
          gonderilecek.Pozisyon = this.form.controls['Pozisyon'].value
      this.personelservice.personelAdd(gonderilecek).subscribe((result: any) => {
      this.list = result;
      this.getAllData();
      this.btnekle = 'Ekle'
    });
  }
  

  deletePersonel() {
    if (confirm('Silmek istediğinizden emin misiniz?')) {
      this.personelservice.deletePersonel(this.selectedIndex);
      this.list = this.personelservice.getAll();
    }}

    updatePersonel() {
      this.personelservice.updatePersonel(this.selectedIndex, this.editedPerson);
      this.router.navigate(['/personel-list']);
  //backClicked() {
    //this._location.back();
  }
}
