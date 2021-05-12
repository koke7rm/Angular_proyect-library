import { LoginService } from './loginService';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libro } from './../models/libro';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class LibrosService{

    private libros: Array<Libro>;
    private libros$: Subject<Array<Libro>>;

    private detalle: Libro;
    private detalle$: Subject<Libro>;

    private nuevo: Libro;
    private nuevo$: Subject<Libro>;

    private noexiste: string;


    constructor(
        private httpClient: HttpClient,
        private loginService: LoginService
    ){

        this.libros = new Array<Libro>();
        this.libros$ = new Subject<Array<Libro>>();

        this.detalle = new Libro();
        this.detalle$ = new Subject<Libro>();

        this.nuevo = new Libro();
        this.nuevo$ = new Subject<Libro>();

        this.noexiste = 'Libro no encontrado. Verifique que lo ha escrito bien';
    }

    public getLibrosSub(): Observable<any> {
        return this.libros$.asObservable();
    }

    public getListaLibros(): Array<Libro> {
        return this.libros;
    }

    public getDetalleLibrosSub(): Observable<any> {
        return this.detalle$.asObservable();
    }

    public getDetalleListaLibros(): Libro {
        return this.detalle;
    }

    public getLibros(): void {
        this.httpClient.get('http://localhost:8080/api/libros').subscribe(
            (response: any) => {
                console.log(JSON.stringify(response));
                this.libros = response;
                this.libros$.next(this.libros);
            },
            error => {
                console.log(error);

            }
        );
    }

    public getDetalleLibros(id: number): void {
        this.httpClient.get('http://localhost:8080/api/libros/' + id).subscribe(
            (response: any) => {
                console.log(JSON.stringify(response));
                console.log(response.escritor);
                this.detalle = response;
                this.detalle$.next(this.detalle);
            },
            error => {
                console.log(error);

            }
        );
    }

    public getDetalleLibrosTitulo(titulo: string): void {
        this.httpClient.get('http://localhost:8080/api/libro/' + titulo).subscribe(
            (response: any) => {
                console.log(JSON.stringify(response));
                console.log(response.escritor);
                this.detalle = response;
                this.detalle$.next(this.detalle);
            },
            error => {
                console.log(error);
                this.detalle.titulo = this.noexiste;

            }
        );
    }

    public deleteLibro(id: number): any {
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + this.loginService.getToken()
                }
            )
        };

        this.httpClient.delete('http://localhost:8080/api/libros/' + id, httpOptions).subscribe(
            (response: any) => {
                console.log(response);
                this.getLibros();
            },
            error => {
                console.log(error);
                this.loginService.logout();
            }
        );
    }

    public nuevoLibro(nuevo: Libro): void {
        console.log('oferta que recibe el service: ' + JSON.stringify(nuevo));
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + this.loginService.getToken(),
                    'Content-Type': 'application/json'
                }
            )
        };

        this.httpClient.post('http://localhost:8080/api/libros', JSON.stringify(nuevo), httpOptions).subscribe(
            (response: any) => {
                console.log(response);
                this.getLibros();
                this.nuevo = nuevo;
                this.nuevo = response;

            },
            error => {
                console.log(error);
                this.loginService.logout();
            }
        );
    }

    public editLibro(nuevo: Libro): void {
        console.log('oferta que recibe el service: ' + JSON.stringify(nuevo));
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + this.loginService.getToken(),
                    'Content-Type': 'application/json'
                }
            )
        };

        this.httpClient.put('http://localhost:8080/api/libros', JSON.stringify(nuevo), httpOptions).subscribe(
            (response: any) => {
                console.log(response);
                this.getLibros();
                this.nuevo = nuevo;
                this.nuevo = response;

            },
            error => {
                console.log(error);
                this.loginService.logout();
            }
        );
    }
}
