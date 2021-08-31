import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  name: string;
  password: string;
  loginSuccess: string;
  loginError: boolean
  register: boolean
  errors: string[]

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
 
  onSubmit() {
    this.authService.doLogin(this.email, this.password).subscribe(response => {
      const access_token = JSON.stringify(response);
      localStorage.setItem('access_token', access_token)
      this.router.navigate(['/users-git']);

    }, errorResponse => {
      this.errors = ['Usuário ou Senha incorretos']
    })

  }

  toRegister(event: any) {
    event.preventDefault();
    this.register = true;
  }

  cancelRegister() {
    this.register = false;
  }

  newRegister() {
    const user: User = new User();
    user.email = this.email;
    user.name = this.name;
    user.password = this.password;
    this.authService.save(user)
      .subscribe(response => {
        this.loginSuccess = 'Usuário cadastrado com Sucesso!'
        this.loginError = false;
        this.name = ''
        this.email = ''
        this.password = ''
      }, error => {
        this.loginError = true;

      })
  }
}
