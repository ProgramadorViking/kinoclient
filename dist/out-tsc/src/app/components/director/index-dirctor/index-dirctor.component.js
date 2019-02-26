import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { KinoService } from 'src/app/services/kino.service';
var IndexDirctorComponent = /** @class */ (function () {
    function IndexDirctorComponent(kino) {
        var _this = this;
        this.kino = kino;
        this.directores = [];
        if (localStorage.getItem('rol') != '0') {
            this.rol = true;
        }
        else {
            this.rol = false;
        }
        this.loading = true;
        this.kino.getDirectors().subscribe(function (data) {
            _this.directores = data;
            _this.loading = false;
        }, function (error) {
            _this.kino.validate(error);
        });
    }
    IndexDirctorComponent.prototype.ngOnInit = function () {
    };
    IndexDirctorComponent = tslib_1.__decorate([
        Component({
            selector: 'app-index-dirctor',
            templateUrl: './index-dirctor.component.html',
            styleUrls: ['./index-dirctor.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [KinoService])
    ], IndexDirctorComponent);
    return IndexDirctorComponent;
}());
export { IndexDirctorComponent };
//# sourceMappingURL=index-dirctor.component.js.map