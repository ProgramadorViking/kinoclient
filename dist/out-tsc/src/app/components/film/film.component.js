import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var FilmComponent = /** @class */ (function () {
    function FilmComponent() {
        this.items = [];
    }
    FilmComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], FilmComponent.prototype, "items", void 0);
    FilmComponent = tslib_1.__decorate([
        Component({
            selector: 'app-film',
            templateUrl: './film.component.html',
            styleUrls: ['./film.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FilmComponent);
    return FilmComponent;
}());
export { FilmComponent };
//# sourceMappingURL=film.component.js.map