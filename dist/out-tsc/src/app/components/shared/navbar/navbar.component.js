import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthKinoService } from 'src/app/services/authKino.service';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        if (!auth.logIn) {
            this.router.navigate(['inicio']);
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthKinoService, Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map