import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { toCategory } from './pipes/category.pipe';
import { sanadorUrl } from './pipes/sanador.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CoverComponent } from './components/cover/cover.component';
import { FilmsComponent } from './components/film/films/films.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FilmComponent } from './components/film/film/film.component';
import { FilmEditComponent } from './components/film/film-edit/film-edit.component';
import { FilmviewComponent } from './components/film/filmview/filmview.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { IndexDirctorComponent } from './components/director/index-dirctor/index-dirctor.component';
import { DirectorComponent } from './components/director/director/director.component';
import { DirectorEditComponent } from './components/director/director-edit/director-edit.component';
import { CardDirectorComponent } from './components/director/card-director/card-director.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                toCategory,
                sanadorUrl,
                NavbarComponent,
                HomeComponent,
                CoverComponent,
                FilmsComponent,
                LoginComponent,
                RegisterComponent,
                FilmComponent,
                FilmEditComponent,
                FilmviewComponent,
                LoadingComponent,
                HeaderComponent,
                IndexDirctorComponent,
                DirectorComponent,
                DirectorEditComponent,
                CardDirectorComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                FormsModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map