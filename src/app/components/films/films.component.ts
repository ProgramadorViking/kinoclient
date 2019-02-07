import { Component, OnInit } from '@angular/core';

import { KinoService } from '../../services/kino.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  peliculas:any[]=[];
  loading:boolean;

  constructor(private kino: KinoService) {
    this.loading=true;
    
   }

  ngOnInit() {
  }

}
