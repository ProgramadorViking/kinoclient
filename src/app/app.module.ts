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

@NgModule({
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
    LoadingComponent
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
export class AppModule { }
