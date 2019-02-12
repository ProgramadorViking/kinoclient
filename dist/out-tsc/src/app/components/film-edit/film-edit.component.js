import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { KinoService } from '../../services/kino.service';
import { Router, ActivatedRoute } from '@angular/router';
var FilmEditComponent = /** @class */ (function () {
    function FilmEditComponent(kino, route, activeRoute) {
        this.kino = kino;
        this.route = route;
        this.activeRoute = activeRoute;
        this.film = {
            id: 0,
            name: '',
            category: 0,
            premiere: '',
            description: '',
            pegi: 0,
            created_at: new Date,
            trailer: '',
            image: ''
        };
        this.edit = false;
    }
    FilmEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.activeRoute.snapshot.params;
        if (params.id) {
            this.kino.getFilm(params.id).subscribe(function (data) {
                _this.film = data;
                _this.edit = true;
            });
        }
    };
    FilmEditComponent.prototype.saveNewFilm = function () {
        var _this = this;
        delete this.film.created_at;
        delete this.film.id;
        this.kino.saveFilm(this.film).subscribe(function (res) {
            _this.route.navigate(['/films']);
        });
    };
    FilmEditComponent.prototype.updateFilm = function () {
        var _this = this;
        delete this.film.created_at;
        this.kino.updateFilm(this.film.id, this.film).subscribe(function (res) {
            _this.route.navigate(['/films']);
        });
    };
    FilmEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-film-edit',
            templateUrl: './film-edit.component.html',
            styleUrls: ['./film-edit.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [KinoService, Router, ActivatedRoute])
    ], FilmEditComponent);
    return FilmEditComponent;
}());
export { FilmEditComponent };
//# sourceMappingURL=film-edit.component.js.map