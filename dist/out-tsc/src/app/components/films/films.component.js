import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { KinoService } from '../../services/kino.service';
var FilmsComponent = /** @class */ (function () {
    function FilmsComponent(kino) {
        this.kino = kino;
        this.peliculas = [];
        this.loading = true;
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