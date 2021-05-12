import { EscritoresService } from './../../services/escritoresService';
import { LibrosService } from './../../services/librosService';
import { Escritor } from './../../models/escritor';
import { Libro } from './../../models/libro';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editlibro',
  templateUrl: './editlibro.component.html',
  styleUrls: ['./editlibro.component.css']
})
export class EditlibroComponent implements OnInit, OnDestroy {

  public sub: any;
  public detalle: Libro;
  public detalleescritor: Escritor;
  public libroModel: Libro;
  public escritorModel: Escritor;
  public escritores: Array<Escritor>;

  constructor(
    private librosService: LibrosService,
    private escritoresService: EscritoresService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.detalle = this.librosService.getDetalleListaLibros();
    this.detalleescritor = this.escritoresService.getDetalleEscritor(String);
    this.libroModel = new Libro();
    this.escritorModel = new Escritor();
    this.escritores = this.escritoresService.getListaEscritores();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {

    this.sub = this.librosService.getDetalleLibrosSub().subscribe(
      (response: Libro) => {
        this.detalle = response;
        console.log(JSON.stringify(this.detalle));

      },
      error => {
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

  public onSubmit(f: NgForm): any {

      this.librosService.editLibro(this.libroModel);
      this.router.navigate(['adminlibros']);
      console.log('Oferta que envio al service: ' + JSON.stringify(this.libroModel));
    }
  }


