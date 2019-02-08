import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KinoService {

  //Prod Api 
  api='https://kinoapi.herokuapp.com/'
  //Dev Api
  //api='http://kino.test/'

  constructor(private http: HttpClient, private router: Router) { }

  //Creación de la cabecera
  createHeader() {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+localStorage.getItem('token'),
      'Content-Type':  'application/json'
    })
    return headers;
  }

  //tipo de peticiones
  getQuery(query:string) {
    let url = this.api+query;
    let headers:HttpHeaders = this.createHeader();
    return this.http.get(url,{headers: headers});
  }

  postQuery(query:string, object:string) {
    let url = this.api+query;
    let headers:HttpHeaders=this.createHeader();
    return this.http.post(url,JSON.stringify(object),{headers: headers});
  }

  //peticiones
  getFilms():Observable <any> {
    return this.getQuery('films');
  }

  //Otras funciones
  validate(error) {
    if(error.status==401) {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }
}
