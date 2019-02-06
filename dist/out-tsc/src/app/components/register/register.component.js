import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthKinoService } from '../../services/authKino.service';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth) {
        this.auth = auth;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (name, email, password, repeat) {
        if (password == repeat) {
            this.auth.register(name, email, password);
        }
        else {
            this.error = true;
            this.message = "las contraseñas no coinciden";
        }
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthKinoService])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map