import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var KinoService = /** @class */ (function () {
    //Dev Api
    //api='http://kino.test/'
    function KinoService(http) {
        this.http = http;
        //Prod Api 
        this.api = 'https://kinoapi.herokuapp.com/';
    }
    //Creación de la cabecera
    KinoService.prototype.createHeader = function () {
        var headers = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        });
        return headers;
    };
    //tipo de peticiones
    KinoService.prototype.getQuery = function (query) {
        var url = this.api + query;
        var headers = this.createHeader();
        return this.http.get(url, { headers: headers });
    };
    KinoService.prototype.postQuery = function (query, object) {
        var url = this.api + query;
        var headers = this.createHeader();
        return this.http.post(url, JSON.stringify(object), { headers: headers });
    };
    //peticiones
    KinoService.prototype.getFilms = function () {
        return this.getQuery('films').subscribe(function (data) {
            console.log(data);
        });
    };
    KinoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], KinoService);
    return KinoService;
}());
export { KinoService };
//# sourceMappingURL=kino.service.js.map