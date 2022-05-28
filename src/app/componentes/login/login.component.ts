import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private userLogged:String = 'invalid_form';

  login() {
    console.log('Valores del form --> ', this.loginForm.value);
    if(this.loginForm.valid) {
      if (this.loginForm.value.email === 'test@test.com' && this.loginForm.value.password === '123456') {
        this.userLogged = 'login_valid';
      } else {
        this.userLogged = 'login_invalid';
      }
      console.log('Respuesta del servicio de login --> ', this.userLogged);
    }

    return this.userLogged;
    
  }

  public habilitarAdmin:boolean = false;
  public quitarLogin:boolean = true;

  switchLogin(){
  
   if (this.userLogged === 'login_valid'){
      this.habilitarAdmin = true;
      this.quitarLogin = false;
      this.alternarLogin()
    }

   else {
     this.habilitarAdmin = false;
     alert('Nombre de Usuario o Contraseña incorrectas!');
   }

}

@Output()  cambiarLog: EventEmitter<string> = new EventEmitter();
alternarLogin(){
     this.cambiarLog.emit();
}


}
