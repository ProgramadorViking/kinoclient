import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CoverComponent } from './components/cover/cover.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { FilmsComponent } from './components/film/films/films.component';
import { FilmEditComponent } from './components/film/film-edit/film-edit.component';
import { FilmviewComponent } from './components/film/filmview/filmview.component';

import { IndexDirctorComponent } from './components/director/index-dirctor/index-dirctor.component';
import { DirectorComponent } from './components/director/director/director.component';
import { DirectorEditComponent } from './components/director/director-edit/director-edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'inicio', component: CoverComponent },
  //LINKS Pelicula
  { path: 'films/new', component: FilmEditComponent},
  { path: 'films/edit/:id', component: FilmEditComponent},
  { path: 'films/:id', component: FilmviewComponent},
  //LINKS Directors
  { path: 'director', component: IndexDirctorComponent },
  { path: 'director/new', component: DirectorEditComponent },
  { path: 'director/edit/:id', component: DirectorEditComponent },
  { path: 'director/:id', component: DirectorComponent },
  //LINKS NO ENCONTRADOS
  { path: '**', pathMatch: 'full', redirectTo:'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
