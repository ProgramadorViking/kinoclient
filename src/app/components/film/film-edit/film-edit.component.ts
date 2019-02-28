import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Film } from 'src/app/models/Films';
import { KinoService } from 'src/app/services/kino.service';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css']
})
export class FilmEditComponent implements OnInit {

  forma:FormGroup;
  edit:boolean=false;

  film:Film = {
    id: 0,
    name: '',
    category:0,
    premiere:'',
    description:'',
    pegi:0,
    created_at: new Date,
    trailer: '',
    image: '',
    duration: 0
  }

  constructor(private kino:KinoService, private route:Router, private activeRoute:ActivatedRoute) { 

    this.forma = new FormGroup({
      'name': new FormControl('',[Validators.required,Validators.minLength(2)]),
      'category': new FormControl('',Validators.required),
      'premiere': new FormControl('',Validators.required),
      'description': new FormControl('',[Validators.required,Validators.minLength(50)]),
      'pegi': new FormControl('',Validators.required),
      'trailer': new FormControl('',Validators.required),
      'image': new FormControl('',Validators.required),
      'duration': new FormControl('',Validators.required)
    })
    
  }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    if(params.id) {
      this.kino.getFilm(params.id).subscribe((data:Film)=>{
        this.film=data;
        this.edit=true;
      });
    }
  }

  guardarCambios() {
    if(this.edit) {
      delete this.film.created_at;
      this.kino.updateFilm(this.film.id, this.film).subscribe(res=>{
        this.route.navigate(['/films']);
      })
    } else {
      delete this.film.created_at;
      delete this.film.id;
      this.kino.saveFilm(this.film).subscribe(res=>{
        this.route.navigate(['/films']);
      })
    }
  }

}
