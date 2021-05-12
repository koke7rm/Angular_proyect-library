import { Escritor } from './../../models/escritor';
import { EscritoresService } from './../../services/escritoresService';
import { LibrosService } from './../../services/librosService';
import { LoginService } from './../../services/loginService';
import { Libro } from './../../models/libro';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-nuevolibro',
  templateUrl: './nuevolibro.component.html',
  styleUrls: ['./nuevolibro.component.css']
})
export class NuevolibroComponent implements OnInit {

  private sub: any;
  private subLogin: any;
  public libroModel: Libro;
  public escritorModel: Escritor;
  public escritores: Array<Escritor>;


  constructor(
    private loginService: LoginService,
    private libroService: LibrosService,
    private escritoresService: EscritoresService,
    private router: Router
  ) {
    this.libroModel = new Libro();
    this.escritorModel = new Escritor();
    this.escritores = this.escritoresService.getListaEscritores();

    if (!this.loginService.getIslogin) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    this.subLogin = this.loginService.getIsloginSub().subscribe(
      (response: boolean) => {
        if (response === false) {
          this.router.navigate(['login']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
    this.sub = this.escritoresService.getEscritoresSub().subscribe(
      (response: Array<Escritor>) => {
        this.escritores = response;
      },
      error => {
        console.log(error);
    }
    );

    this.escritoresService.getEscritores();
  }

  /* Metodo del envio del registro */
  public envioRegistro(): any{

    if (this.libroModel.titulo.length > 100) {

      this.libroModel.validarTitulo = true;
      console.log('Error en campo titulo');

    } else {
      this.libroModel.validarTitulo = false;
    }

    if (this.libroModel.sinopsis.length > 300) {

      this.libroModel.validarSinopsis = true;
      console.log('Error en campo sinopsis');

    } else {
      this.libroModel.validarSinopsis = false;
    }

    if (this.libroModel.vendidos <= 0) {

      this.libroModel.validarVendidos = true;
      console.log('Error en campo vendidos');

    } else {
      this.libroModel.validarVendidos = false;
    }

  }

  public onSubmit(f: NgForm): any {
    if (
      this.libroModel.validarTitulo === true ||
      this.libroModel.validarSinopsis === true ||
      this.libroModel.validarVendidos === true
    ) {
      return console.log('Error al enviar datos, uno o más campos incorrectos');

    } else {
      this.libroService.nuevoLibro(this.libroModel);
      this.router.navigate(['adminlibros']);
      console.log('Oferta que envio al service: ' + JSON.stringify(this.libroModel));
    }
  }

}
