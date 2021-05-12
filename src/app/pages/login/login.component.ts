import { LoginService } from './../../services/loginService';
import { LoginForm } from './../../models/loginForm';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginModel: LoginForm;
  sub: any;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginModel = new LoginForm();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.loginService.getIsloginSub().subscribe(
      response => {
        console.log('ngOnInit');
        console.log(response);
        if (response){
           this.router.navigate(['adminlibros']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  public envioLogin(): void{

    if (this.loginModel.username !== 'admin') {

      this.loginModel.validarUsuario = true;

    } else {
      this.loginModel.validarUsuario = false;
    }

    if (this.loginModel.password !== 'admin') {

      this.loginModel.validarContrasena = true;

    } else {
      this.loginModel.validarContrasena = false;
    }
  }

  public onSubmit(f: NgForm): any{
    this.loginService.postLogin(this.loginModel);
  }

}
