import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ToastService = /** @class */ (function () {
    function ToastService() {
    }
    ToastService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ToastService);
    return ToastService;
}());
export { ToastService };
var Message = /** @class */ (function () {
    function Message(content, style) {
        this.dismissed = false;
        this.content = content;
        this.style = style || 'info';
    }
    return Message;
}());
export { Message };
//# sourceMappingURL=toast.service.js.map