import { EscritoresService } from './../../services/escritoresService';
import { LoginService } from './../../services/loginService';
import { Escritor } from './../../models/escritor';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminescritores',
  templateUrl: './adminescritores.component.html',
  styleUrls: ['./adminescritores.component.css']
})
export class AdminescritoresComponent implements OnInit, OnDestroy {

  public escritores: Array<Escritor>;
  private sub: any;
  private subLogin: any;

  constructor(
    private loginService: LoginService,
    private escritorService: EscritoresService,
    private router: Router
  ) {
    if (!this.loginService.getIslogin) {
      this.router.navigate(['login']);
    }
    this.escritores = this.escritorService.getListaEscritores();
  }
  ngOnDestroy(): void {
    this.subLogin.unsubscribe();
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.escritorService.getEscritoresSub().subscribe(
      (response: Array<Escritor>) => {
        this.escritores = response;
        console.log('ngOnInit');
      },
      error => {
        console.log(error);
      }
    );

    this.subLogin = this.loginService.getIsloginSub().subscribe(
      (response: boolean) => {
        if (response === false) {
          this.router.navigate(['login']);
        }
      },
      error => {
        console.log(error);
      }
    );

    this.escritorService.getEscritores();
  }

  public deleteEscritor(id: number): void {

    this.escritorService.deleteEscritor(id);
  }

}


