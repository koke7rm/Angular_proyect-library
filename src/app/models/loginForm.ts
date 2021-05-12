
export class LoginForm{
    username: string;
    password: string;
    rememberMe: boolean;

    validarUsuario: boolean;
    validarContrasena: boolean;

    constructor(){
        this.username = '';
        this.password = '';
        this.rememberMe = false;

        this.validarUsuario = false;
        this.validarContrasena = false;
    }
}
