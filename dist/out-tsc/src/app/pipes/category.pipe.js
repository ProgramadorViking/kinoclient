import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var toCategory = /** @class */ (function () {
    function toCategory() {
    }
    toCategory.prototype.transform = function (data) {
        var string;
        switch (data) {
            case '0':
                string = "Sin categoria";
                break;
            case '1':
                string = "Acción";
                break;
            case '2':
                string = "Ciencia Ficción";
                break;
            case '3':
                string = "Comedia";
                break;
            case '4':
                string = "Drama";
                break;
            case '5':
                string = "Fantasía";
                break;
            case '6':
                string = "Musical";
                break;
            case '7':
                string = "Romance";
                break;
            case '8':
                string = "Suspense";
                break;
            case '9':
                string = "Terror";
                break;
            case '10':
                string = "Documental";
                break;
            case '11':
                string = "Adulto";
                break;
        }
        return string;
    };
    toCategory = tslib_1.__decorate([
        Pipe({
            name: 'toCategory'
        })
    ], toCategory);
    return toCategory;
}());
export { toCategory };
//# sourceMappingURL=category.pipe.js.map