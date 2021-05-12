import { LibrosService } from './../../services/librosService';
import { Libro } from './../../models/libro';
import { EscritoresService } from './../../services/escritoresService';
import { Escritor } from './../../models/escritor';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vistaescritor',
  templateUrl: './vistaescritor.component.html',
  styleUrls: ['./vistaescritor.component.css']
})
export class VistaescritorComponent implements OnInit, OnDestroy {

  public sub: any;
  public detalle: Escritor; /** Variable de tipo Escritor donde se guardaran los datos que se reciban del service */
  public detallelibro: Libro; /** Variable de tipo Libro donde se guardaran los datos que se reciban del service */

  constructor(
    private escritoresService: EscritoresService,
    private librosService: LibrosService,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.detalle = this.escritoresService.getDetalleListaEscritores(); /*la variable detalle se iguala al metodo getDetalleListaEscritores
                                                                          con esto los datos del service se guardaran en esta variable*/
    this.detallelibro = this.librosService.getDetalleListaLibros();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {

    this.sub = this.escritoresService.getDetalleEscritorSub().subscribe(
      (response: Escritor) => {
        this.detalle = response;
        console.log(this.detalle);
      },
      error => {
        console.log(error);
        this.detalle = error;
    }
    );

  }
}


