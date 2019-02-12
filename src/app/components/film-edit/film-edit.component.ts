import { Component, OnInit } from '@angular/core';

import { Film } from '../../models/Films';
import { KinoService } from '../../services/kino.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css']
})
export class FilmEditComponent implements OnInit {

  film: Film = {
    id: 0,
    name: '',
    category:0,
    premiere:'',
    description:'',
    pegi:0,
    created_at: new Date,
    trailer: '',
    image: ''
  }

  edit:boolean=false;

  constructor(private kino:KinoService, private route:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    if(params.id) {
      this.kino.getFilm(params.id).subscribe((data:Film)=>{
        this.film=data;
        this.edit=true;
      });
    }
  }

  saveNewFilm() {
    delete this.film.created_at;
    delete this.film.id;
    this.kino.saveFilm(this.film).subscribe(res=>{
      this.route.navigate(['/films']);
    })
  }

  updateFilm() {
    delete this.film.created_at;
    this.kino.updateFilm(this.film.id, this.film).subscribe(res=>{
      this.route.navigate(['/films']);
    })
  }

}
