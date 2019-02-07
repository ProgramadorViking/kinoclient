import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { query } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class KinoService {

  //Prod Api 
  api='https://kinoapi.herokuapp.com/'
  //Dev Api
  //api='http://kino.test/'

  constructor(private http: HttpClient) { }

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
  getFilms() {
    return this.getQuery('films').subscribe(data=>{
      console.log(data);
    })
  }
}
