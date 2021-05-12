import { EscritoresService } from './../../services/escritoresService';
import { LibrosService } from './../../services/librosService';
import { Libro } from './../../models/libro';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escritor } from 'src/app/models/escritor';

@Component({
  selector: 'app-vistadetallelibro',
  templateUrl: './vistadetallelibro.component.html',
  styleUrls: ['./vistadetallelibro.component.css']
})
export class VistadetallelibroComponent implements OnInit, OnDestroy {

  public sub: any;
  public detalle: Libro;
  public detalleescritor: Escritor;

  constructor(
    private librosService: LibrosService,
    private escritoresService: EscritoresService,
    private router: Router,
    private route: ActivatedRoute
  ){

    this.detalle = this.librosService.getDetalleListaLibros();
    this.detalleescritor = this.escritoresService.getDetalleEscritor(String);
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

  }

  /** Se llama a getDetalleEscritor para que al pulsar el nombre del escritor recoja su id y se la pase al server
   * Se hace a traves del id para evitar fallos en nombres repetidos
   */
  public getDetalleEscritorId(id: number): void{

    this.escritoresService.getDetalleEscritorId(id);
    console.log(id);

  }


}
