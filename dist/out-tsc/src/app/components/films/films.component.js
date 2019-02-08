import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { KinoService } from '../../services/kino.service';
var FilmsComponent = /** @class */ (function () {
    function FilmsComponent(kino) {
        var _this = this;
        this.kino = kino;
        this.peliculas = [];
        if (localStorage.getItem('rol') != '0') {
            this.rol = true;
        }
        else {
            this.rol = false;
        }
        this.loading = true;
        this.kino.getFilms().subscribe(function (data) {
            _this.peliculas = data;
            console.log(data);
        }, function (error) {
            _this.kino.validate(error);
            console.log(error);
        });
    }
    FilmsComponent.prototype.ngOnInit = function () {
    };
    FilmsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-films',
            templateUrl: './films.component.html',
            styleUrls: ['./films.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [KinoService])
    ], FilmsComponent);
    return FilmsComponent;
}());
export { FilmsComponent };
//# sourceMappingURL=films.component.js.map