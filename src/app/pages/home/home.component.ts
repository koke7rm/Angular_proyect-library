import { Escritor } from './../../models/escritor';
import { EscritoresService } from './../../services/escritoresService';
import { LibrosService } from './../../services/librosService';
import { Libro } from './../../models/libro';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public libros: Array<Libro>;
  private sub: any;
  public escritorModel: Escritor;
  public libroModel: Libro;
  public detalle: Escritor;
  public escritores: Array<Escritor>;

  constructor(
    private librosService: LibrosService,
    private escritoresService: EscritoresService,
    private router: Router
  ) {

    this.libros = this.librosService.getListaLibros();
    this.escritores = this.escritoresService.getListaEscritores();
    this.escritorModel = new Escritor();
    this.libroModel = new Libro();
    this.detalle = this.escritoresService.getDetalleEscritor(String);
  }

  ngOnInit(): void {

    this.sub = this.librosService.getLibrosSub().subscribe(
      (response: Array<Libro>) => {
        this.libros = response;
      },
      error => {
        console.log(error);
    }
    );

    this.librosService.getLibros();

  }

  /* Se llama a getDetalleLibros para que al pulsar el boton del libro de la lista devuelva el detalle de ese libro mediante la id*/

  public getDetalleLibros(id: number): void{

    this.librosService.getDetalleLibros(id);
    console.log(id);

  }

  /** Se llama a getDetalleLibrosTitulo para que al buscar el libro en la barra de busqueda devuelva el libro mediante el titulo */
  public getDetalleLibrosTitulo(titulo: string): void{

    this.librosService.getDetalleLibrosTitulo(titulo);
    console.log(titulo);

  }

  /** Se llama a getDetalleEscritor para que al buscar el escritor en la barra de busqueda devuelva el escritor mediante el nombre */

  public getDetalleEscritor(nombre: string): void{

    this.escritoresService.getDetalleEscritor(nombre);
    console.log(nombre);

  }

}
