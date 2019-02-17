import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Film } from '../models/Films'

@Injectable({
  providedIn: 'root'
})
export class KinoService {

  api:string;

  constructor(private http: HttpClient, private router: Router) {
    //Detecta el servidor
    if (location.hostname==="localhost" || location.hostname==="127.0.0.1") {
      this.api="http://kino.test/"
    } else {
      this.api="https://kinoapi.herokuapp.com/"
    }
  }

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

  postQuery(query:string, object:any) {
    let url = this.api+query;
    let headers:HttpHeaders=this.createHeader();
    return this.http.post(url,JSON.stringify(object),{headers: headers});
  }

  putQuery(query:string, object:any) {
    let url = this.api+query;
    let headers:HttpHeaders=this.createHeader();
    return this.http.put(url,JSON.stringify(object),{headers: headers});
  }

  // P E T I C I O N E S 
  // F I L M S ->
  getFilms():Observable <any> {
    return this.getQuery('films');
  }
  getFilm(id) {
    let string = 'films/'+id;
    return this.getQuery(string);
  }
  saveFilm(film:Film) {
    return this.postQuery('films',film);
  }
  updateFilm(id:number, film:Film) {
    let string='films/'+id;
    return this.putQuery(string,film);
  }
  // S T A T S ->
  getListUser(id) {
    let string = 'list/user/'+id;
    return this.getQuery(string);
  }
  getListFilm(id) {
    let string = 'list/film/'+id;
    return this.getQuery(string);
  }
  getMyList(id) {
    let string = 'list/my/'+id;
    return this.getQuery(string);
  }
  addStatus(status:any) {
    return this.postQuery('list',status);
  }

  //Otras funciones
  validate(error) {
    if(error.status==401) {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }
}