import { Component  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginFormGroup: FormGroup;

  constructor(formBuilder: FormBuilder, private authService: AuthService) {
    console.log ('konstr')
    this.loginFormGroup = formBuilder.group({
      email: '',
      password: ''
    });
  }

 onSubmit(){
  console.log ('onSubmit')
  this.authService.login(this.loginFormGroup.value.email,this.loginFormGroup.value.password).subscribe({
    next: (odpowiedzSerwera) => {
      console.log('next:');
      console.log(odpowiedzSerwera);
    },
    error: (e) => {
      console.error(e);
       alert(e.error.status + " " + e.error.title)
      },
    complete: () => console.info('complete') 
  });
 }
}

