import { Component  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthenticateResponseModelDataResponse } from '../services/models/AuthenticateResponseModelDataResponse';
import { LocalStorageService } from '../services/LocalStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginFormGroup: FormGroup;
  authService: AuthService;
  localStorageService: LocalStorageService;
  
  constructor(
    formBuilder: FormBuilder,
    newAuthService: AuthService,
    localStorageServiceDI: LocalStorageService
  ){
    console.log ('konstr')
    this.authService = newAuthService;
    this.localStorageService = localStorageServiceDI;
    this.loginFormGroup = formBuilder.group({
      email: '',
      password: ''
    });
  }

 onSubmit(){
  console.log ('onSubmit')
  this.authService.login(this.loginFormGroup.value.email,this.loginFormGroup.value.password).subscribe({
    next: (response:AuthenticateResponseModelDataResponse) => {
      console.log('next:');
      console.log(response); 

    },
    error: (e) => {
      console.error(e);
       alert(e.error.status + " " + e.error.title)
      },
    complete: () => console.info('complete') 
  });
 }
}

