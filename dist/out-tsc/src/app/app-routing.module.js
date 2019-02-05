import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoverComponent } from './components/cover/cover.component';
var routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: CoverComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map