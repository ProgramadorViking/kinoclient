import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
var NationsService = /** @class */ (function () {
    function NationsService(http, router) {
        this.http = http;
        this.router = router;
        this.api = "https://restcountries.eu/rest/v2/all?fields=translations;flag;cioc;numericCode;";
    }
    NationsService.prototype.getNations = function () {
        return this.http.get(this.api);
    };
    NationsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], NationsService);
    return NationsService;
}());
export { NationsService };
//# sourceMappingURL=nations.service.js.map