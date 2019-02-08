import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
var KinoService = /** @class */ (function () {
    //Dev Api
    //api='http://kino.test/'
    function KinoService(http, router) {
        this.http = http;
        this.router = router;
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
        return this.getQuery('films');
    };
    //Otras funciones
    KinoService.prototype.validate = function (error) {
        if (error.status == 401) {
            localStorage.removeItem('token');
            this.router.navigate(['login']);
        }
    };
    KinoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], KinoService);
    return KinoService;
}());
export { KinoService };
//# sourceMappingURL=kino.service.js.map