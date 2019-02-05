import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CoverComponent } from './components/cover/cover.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: CoverComponent },
  { path: '**', pathMatch: 'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
