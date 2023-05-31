import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { PasswordErrorStateMatcher } from '../Error/error-state-matcher';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
   
  registrationFormGroup: FormGroup;
  authService: AuthService;



  matcher = new PasswordErrorStateMatcher();


  constructor(
    private formBuilder: FormBuilder, 
    newAuthService: AuthService,
    ){
    this.authService = newAuthService;
    this.registrationFormGroup = formBuilder.group({
      email: '',
      name: '',
      password: ['',[Validators.required]],
      confirmPassword: ['']

    } ,{validator: this.checkPassword});
    
    
  }

  checkPassword(group: FormGroup){
    console.log ('checkPassword')
    let pass = group.controls['password'].value;
    let confirmPass = group.controls['confirmPassword'].value;

    return pass === confirmPass ? null : { notSame: true }
  }


  onSubmit(){
    this.authService.registration(
      this.registrationFormGroup.value.email, 
      this.registrationFormGroup.value.name,
      this.registrationFormGroup.value.password
      ).subscribe({
        next: (response)=>{
          console.log('next2');
          console.log(response);

          response.Success

        },
        error: (e) => {
          console.error(e);
          alert(e.error.status + " " + e.error.title)
        },
        complete: () => console.info('complete')
      });
      
  }
  onClickBtn(){
        alert('FUNKCJONALNOŚĆ W PRZYGOTOWANIU');
      }
}
