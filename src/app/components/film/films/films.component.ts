import { Component, OnInit } from '@angular/core';

import { KinoService } from 'src/app/services/kino.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  peliculas:any[]=[];
  loading:boolean;
  rol:boolean;

  constructor(private kino: KinoService) {
    if(localStorage.getItem('rol')!='0') {
      this.rol=true;
    } else {
      this.rol=false;
    }
    this.loading=true;
    this.kino.getFilms().subscribe((data:any)=>{
      this.peliculas=data;
      this.loading=false;
    }, error=>{
      this.kino.validate(error);
    });
   }

  ngOnInit() {
  }

}
