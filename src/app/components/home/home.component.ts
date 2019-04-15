import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthKinoService } from '../../services/authKino.service';
import { KinoService } from 'src/app/services/kino.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ultimas:any[]=[];
  vistas:any[]=[];

  constructor(public auth: AuthKinoService, private router: Router, private kino:KinoService) {
    if(!auth.logIn) {
      this.router.navigate(['inicio']);
    }
    this.kino.getLastFilms().subscribe((data:any)=>{
      this.ultimas=data;
    });
    this.kino.getLastViews().subscribe((data:any)=>{
      this.vistas=data;
    })
   }

  ngOnInit() {
  }

}
