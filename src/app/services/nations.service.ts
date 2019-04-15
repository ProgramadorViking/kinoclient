import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NationsService {

  api:string="https://restcountries.eu/rest/v2/all?fields=translations;flag;cioc;numericCode;";
  constructor(private http: HttpClient, private router: Router) { }

  getNations() {
    return this.http.get(this.api);
  }
}
