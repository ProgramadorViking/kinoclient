import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { KinoService } from 'src/app/services/kino.service';
import { NationsService } from 'src/app/services/nations.service';
import { Film } from 'src/app/models/Films';

@Component({
  selector: 'app-director-edit',
  templateUrl: './director-edit.component.html',
  styleUrls: ['./director-edit.component.css']
})
export class DirectorEditComponent implements OnInit {

  forma:FormGroup;
  edit:boolean=false;
  nations:any;
  films:Film;
  loading:boolean=true;

  director:any = {
    id:0,
    name: '',
    image: '',
    birthday: new Date,
    nation: 0,
    filmography: []
  }

  constructor(private kino:KinoService, private route:Router, private activeRoute:ActivatedRoute, private Nat:NationsService) { 

    this.forma = new FormGroup({
      'name': new FormControl('',[Validators.required,Validators.minLength(5)]),
      'image': new FormControl('',Validators.required),
      'birthday': new FormControl('',Validators.required),
      'nation': new FormControl('',Validators.required),
      'filmography': new FormControl('',Validators.required)
    })
    this.Nat.getNations().subscribe(data=>{
      this.nations=data;
    })
    this.kino.getFilms().subscribe(data=>{
      this.films=data;
      this.loading=false;
    })

  }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    if(params.id) {
      this.kino.getDirector(params.id).subscribe(data=>{
        this.director=data;
        this.edit=true;
      });
    }
  }

  guardarCambios() {
    this.director.filmography = this.forma.value.filmography;
    if(this.edit) {
      this.kino.updateDirector(this.director.id, this.director).subscribe(res=>{
        this.route.navigate(['/directors']);
      })
    } else {
      delete this.director.id;
      this.kino.saveDirector(this.director).subscribe(res=>{
        this.route.navigate(['/directors']);
      })
    }
  }

}
