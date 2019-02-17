import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
var KinoService = /** @class */ (function () {
    function KinoService(http, router) {
        this.http = http;
        this.router = router;
        //Detecta el servidor
        if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
            this.api = "http://kino.test/";
        }
        else {
            this.api = "https://kinoapi.herokuapp.com/";
        }
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
    KinoService.prototype.putQuery = function (query, object) {
        var url = this.api + query;
        var headers = this.createHeader();
        return this.http.put(url, JSON.stringify(object), { headers: headers });
    };
    // P E T I C I O N E S 
    // F I L M S ->
    KinoService.prototype.getFilms = function () {
        return this.getQuery('films');
    };
    KinoService.prototype.getFilm = function (id) {
        var string = 'films/' + id;
        return this.getQuery(string);
    };
    KinoService.prototype.saveFilm = function (film) {
        return this.postQuery('films', film);
    };
    KinoService.prototype.updateFilm = function (id, film) {
        var string = 'films/' + id;
        return this.putQuery(string, film);
    };
    // S T A T S ->
    KinoService.prototype.getListUser = function (id) {
        var string = 'list/user/' + id;
        return this.getQuery(string);
    };
    KinoService.prototype.getListFilm = function (id) {
        var string = 'list/film/' + id;
        return this.getQuery(string);
    };
    KinoService.prototype.getMyList = function (id) {
        var string = 'list/my/' + id;
        return this.getQuery(string);
    };
    KinoService.prototype.addStatus = function (status) {
        return this.postQuery('list', status);
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