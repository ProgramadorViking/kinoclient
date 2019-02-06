import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthKinoService {

  api = 'http://kino.test/auth';
  token;

  constructor(private http: HttpClient, private router: Router) { }

  login(email:string,password:string) {
    let http = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    let user = {email: email, password: password};
    this.http.post('http://kino.test/auth/login', JSON.stringify(user), http).subscribe(data => {
      this.router.navigate(['home']);
      localStorage.setItem('token',data['token']);
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn():boolean {
    return (localStorage.getItem('token')!==null);
  }
}
