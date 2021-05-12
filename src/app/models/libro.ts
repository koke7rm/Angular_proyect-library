import { Escritor } from './escritor';

export class Libro{

    public id!: number;
    public titulo!: string;
    public sinopsis!: string;
    public vendidos!: number;
    public publicacion!: Date;
    public escritor!: Escritor;
    public nombre!: string;

    public validarTitulo: boolean;
    public validarSinopsis: boolean;
    public validarVendidos: boolean;
    public validarPublicacion: boolean;

    constructor(){

        this.validarTitulo = false;
        this.validarSinopsis = false;
        this.validarVendidos = false;
        this.validarPublicacion = false;
    }

}
