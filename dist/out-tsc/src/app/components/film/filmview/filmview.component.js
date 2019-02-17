import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KinoService } from 'src/app/services/kino.service';
var FilmviewComponent = /** @class */ (function () {
    function FilmviewComponent(kino, route, activateRoute) {
        var _this = this;
        this.kino = kino;
        this.route = route;
        this.activateRoute = activateRoute;
        this.item = 0;
        var params = this.activateRoute.snapshot.params;
        this.loading = true;
        this.kino.getFilm(params.id).subscribe(function (data) {
            _this.film = data;
            _this.loading = false;
        });
        this.kino.getMyList(params.id).subscribe(function (data) {
            _this.item = data[0].status;
        });
    }
    FilmviewComponent.prototype.ngOnInit = function () {
    };
    FilmviewComponent.prototype.changeStatus = function () {
        var params = this.activateRoute.snapshot.params;
        var status = {
            film_id: params.id,
            status: this.item
        };
        this.kino.addStatus(status).subscribe(function (data) { });
    };
    FilmviewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-filmview',
            templateUrl: './filmview.component.html',
            styleUrls: ['./filmview.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [KinoService, Router, ActivatedRoute])
    ], FilmviewComponent);
    return FilmviewComponent;
}());
export { FilmviewComponent };
//# sourceMappingURL=filmview.component.js.map