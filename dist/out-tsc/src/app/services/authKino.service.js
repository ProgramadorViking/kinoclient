import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
var AuthKinoService = /** @class */ (function () {
    function AuthKinoService(http, router) {
        this.http = http;
        this.router = router;
        this.api = 'http://kino.test/auth';
    }
    AuthKinoService.prototype.login = function (email, password) {
        var _this = this;
        var http = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var user = { email: email, password: password };
        this.http.post('http://kino.test/auth/login', JSON.stringify(user), http).subscribe(function (data) {
            _this.router.navigate(['home']);
            localStorage.setItem('token', data['token']);
        });
    };
    AuthKinoService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    Object.defineProperty(AuthKinoService.prototype, "logIn", {
        get: function () {
            return (localStorage.getItem('token') !== null);
        },
        enumerable: true,
        configurable: true
    });
    AuthKinoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], AuthKinoService);
    return AuthKinoService;
}());
export { AuthKinoService };
//# sourceMappingURL=authKino.service.js.map