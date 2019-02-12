import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var sanadorUrl = /** @class */ (function () {
    function sanadorUrl(sanitizer) {
        this.sanitizer = sanitizer;
    }
    sanadorUrl.prototype.transform = function (data) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(data);
    };
    sanadorUrl = tslib_1.__decorate([
        Pipe({
            name: 'sanadorUrl'
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], sanadorUrl);
    return sanadorUrl;
}());
export { sanadorUrl };
//# sourceMappingURL=sanador.pipe.js.map