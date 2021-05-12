import { LoginForm } from './../models/loginForm';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {
    private token: string;
    private islogin: boolean;
    private islogin$: Subject<boolean>;

    constructor(
        private httpClient: HttpClient
    ) {
        this.token = '';
        this.islogin = false;
        this.islogin$ = new Subject<boolean>();
    }

    public getIslogin(): boolean {
        return this.islogin;
    }

    public getIsloginSub(): Observable<any> {
        return this.islogin$.asObservable();
    }

    public getToken(): string {
        return this.token;
    }

    public postLogin(loginModel: LoginForm): void {
        console.log('LoginService');
        console.log(JSON.stringify(loginModel));

        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json'
                }
            )
        };
        this.httpClient.post('http://localhost:8080/api/authenticate', JSON.stringify(loginModel), httpOptions).subscribe(
            (response: any) => {
                console.log(response);
                this.token = response.id_token;
                this.islogin = true;
                this.islogin$.next(this.islogin);
            },
            error => {
                this.islogin = false;
                console.log(error);
            }
        );
    }

    public logout(): void {
        this.islogin = false;
        this.token = '';
        this.islogin$.next(this.islogin);
    }
}
