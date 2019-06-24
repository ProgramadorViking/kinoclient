import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthKinoService {

  api:string;

  constructor(private http: HttpClient, private router: Router) { 
    //Detecta el servidor
    if (location.hostname==="localhost" || location.hostname==="127.0.0.1") {
      this.api="http://kino.test/auth/"
    } else {
      this.api="http://kino.rastler.net/api/public/auth/"
    }
  }

  login(email:string,password:string) {
    let http = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    let user = {email: email, password: password};
    let url = this.api+'login';
    this.http.post(url, JSON.stringify(user), http).subscribe(data => {
      this.router.navigate(['home']);
      localStorage.setItem('token',data['token']);
      localStorage.setItem('rol',data['rol']);
    });
  }

  register(name:string,email:string,password:string) {
    let http = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    let user = {name: name, email: email, password: password};
    let url = this.api+'register';
    this.http.post(url, JSON.stringify(user), http).subscribe(data=> {
      this.router.navigate(['login']);
    })
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn():boolean {
    return (localStorage.getItem('token')!==null);
  }
}
