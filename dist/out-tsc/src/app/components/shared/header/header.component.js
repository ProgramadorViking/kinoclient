import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthKinoService } from 'src/app/services/authKino.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
        this.login = auth.logIn;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthKinoService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map