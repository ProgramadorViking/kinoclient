import { Component, OnInit } from '@angular/core';

import { Film } from 'src/app/models/Films';
import { Router, ActivatedRoute } from '@angular/router';
import { KinoService } from 'src/app/services/kino.service';

@Component({
  selector: 'app-filmview',
  templateUrl: './filmview.component.html',
  styleUrls: ['./filmview.component.css']
})
export class FilmviewComponent implements OnInit {

  film: Film;

  constructor(private kino:KinoService, private route:Router, private activateRoute:ActivatedRoute ) {
    const params = this.activateRoute.snapshot.params;
    this.kino.getFilm(params.id).subscribe((data:Film)=>{
      this.film=data;
    })
  }

  ngOnInit() {
  }

}
