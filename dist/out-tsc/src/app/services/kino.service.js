import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var KinoService = /** @class */ (function () {
    function KinoService(http) {
        this.http = http;
    }
    KinoService.prototype.login = function (email, password) {
        var http = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var user = { email: email, password: password };
        this.http.post('http://kino.test/auth/login', JSON.stringify(user), http).subscribe(function (data) {
            console.log(data['token']);
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