import { LibrosService } from './../../services/librosService';
import { LoginService } from './../../services/loginService';
import { Libro } from './../../models/libro';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlibros',
  templateUrl: './adminlibros.component.html',
  styleUrls: ['./adminlibros.component.css']
})
export class AdminlibrosComponent implements OnInit, OnDestroy {

  public libros: Array<Libro>;
  private sub: any;
  private subLogin: any;

  constructor(
    private loginService: LoginService,
    private libroService: LibrosService,
    private router: Router
  ) {
    if (!this.loginService.getIslogin) {
      this.router.navigate(['login']);
    }
    this.libros = this.libroService.getListaLibros();
  }
  ngOnDestroy(): void {
    this.subLogin.unsubscribe();
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.libroService.getLibrosSub().subscribe(
      (response: Array<Libro>) => {
        this.libros = response;
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

    this.libroService.getLibros();
  }

  public deleteLibro(id: number): void {

    this.libroService.deleteLibro(id);
  }

  public getDetalleLibros(id: number): void{

    this.libroService.getDetalleLibros(id);
    console.log(id);

  }

}
