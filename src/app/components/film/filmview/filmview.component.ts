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
  loading:boolean;
  item:number=0;

  constructor(private kino:KinoService, private route:Router, private activateRoute:ActivatedRoute ) {
    const params = this.activateRoute.snapshot.params;
    this.loading=true;
    this.kino.getFilm(params.id).subscribe((data:Film)=>{
      this.film=data;
      this.loading=false;
    })
    this.kino.getMyList(params.id).subscribe(data=>{
      this.item = data[0].status;
    })
  }

  ngOnInit() {
  }

  public changeStatus() {
    
    const params = this.activateRoute.snapshot.params;
    let status = {
      film_id: params.id,
      status: this.item
    }
    this.kino.addStatus(status).subscribe(data=>{})
  }

}
