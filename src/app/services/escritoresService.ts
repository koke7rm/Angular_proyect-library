import { LoginService } from './loginService';
import { Escritor } from './../models/escritor';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class EscritoresService{

    private escritores: Array<Escritor>;
    private escritores$: Subject<Array<Escritor>>;

    private detalle: Escritor;
    private detalle$: Subject<Escritor>;

    private noexiste: string;


    constructor(
        private httpClient: HttpClient,
        private loginService: LoginService
    ){

        this.escritores = new Array<Escritor>();
        this.escritores$ = new Subject<Array<Escritor>>();

        this.detalle = new Escritor();
        this.detalle$ = new Subject<Escritor>();

        this.noexiste = 'Error en la busqueda. Intentelo de nuevo';
    }

    public getEscritoresSub(): Observable<any> {
        return this.escritores$.asObservable();
    }

    public getListaEscritores(): Array<Escritor> {
        return this.escritores;
    }



    public getDetalleEscritorSub(): Observable<any> {
        return this.detalle$.asObservable();
    }

    public getDetalleEscritorIdSub(): Observable<any> {
        return this.detalle$.asObservable();
    }


    public getDetalleListaEscritores(): Escritor {
        return this.detalle;
    }

    public getEscritores(): void {
        this.httpClient.get('http://localhost:8080/api/escritors').subscribe(
            (response: any) => {
                console.log(JSON.stringify(response));
                this.escritores = response;
                this.escritores$.next(this.escritores);
            },
            error => {
                console.log(error);

            }
        );
    }

    /* Recordar que esto es una busqueda jpa creada por mi en la api Res configurada con spring*/

    public getDetalleEscritor(nombre: any): any {
        this.httpClient.get('http://localhost:8080/api/escritor/' + nombre).subscribe(
            (response: any) => {
                console.log(JSON.stringify(response));
                this.detalle = response;
                this.detalle$.next(this.detalle);
            },
            error => {
                console.log(error);
                this.detalle.nombre = this.noexiste;
            }
        );
    }

    public getDetalleEscritorId(id: any): any {
        this.httpClient.get('http://localhost:8080/api/escritors/' + id).subscribe(
            (response: any) => {
                console.log(JSON.stringify(response));
                this.detalle = response;
                this.detalle$.next(this.detalle);
            },
            error => {
                console.log(error);

            }
        );
    }

    public deleteEscritor(id: number): any {
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + this.loginService.getToken()
                }
            )
        };

        this.httpClient.delete('http://localhost:8080/api/escritors/' + id, httpOptions).subscribe(
            (response: any) => {
                console.log(response);
                this.getEscritores();
            },
            error => {
                console.log(error);
                this.loginService.logout();
            }
        );
    }
}
