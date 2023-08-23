import { Component, OnInit } from '@angular/core';
import { GirisService } from './giris.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})

export class GirisComponent implements OnInit {
  
  
  loginForm!: FormGroup;
  toastrService: any;
  constructor(private formBuilder:FormBuilder, private girisService:GirisService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password: ["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      let loginModel = Object.assign({}, this.loginForm.value)

      this.girisService.login(loginModel).subscribe(response=>{
        // this.toastrService.info(response.message)
         
      })
    }
  }
    
  

  

// constructor(public authService: login) {}

//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
// <<<<<<< HEAD
//   /* model: any= {};
//   Email! : string ;
//   password! :string ;
//   username! : string; */
//   username! : string;
//   password! :string;
//   isLoading: boolean = false;
//   profilForm: any;
// =======
//   constructor(public girisService: GirisService) { }
// >>>>>>> 61c6680f9f9e38fcf721ee22afbc61060a287f94

//   ngOnInit(): void {
    
//   }


// <<<<<<< HEAD
//   login(email: string, password: string) {
//     console.log("E mail" , email);
//     console.log("Pass" , password);
//     if (this.profilForm.valid) {
//       this.isLoading = true;
//   }
    
//   }}
// =======

//   login(arg0: string,arg1: string){  
//     // if(form.invalid){  
//     //   return;  
//     // }  
//     console.log("form başarılı");
//     this.girisService.CreateUser(arg0, arg1);  
//   }  

  }
    


// >>>>>>> 61c6680f9f9e38fcf721ee22afbc61060a287f94

