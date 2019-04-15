import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { KinoService } from 'src/app/services/kino.service';
import { NationsService } from 'src/app/services/nations.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  director: any;
  loading:boolean;
  nation:string;

  constructor(private nat:NationsService, private kino:KinoService, private route:Router, private activateRoute:ActivatedRoute) {
    const params = this.activateRoute.snapshot.params;
    this.loading=true;
    this.kino.getDirectorWithFilms(params.id).subscribe((data:any)=>{
      this.director=data;
      this.loading=false;
      this.nation=data.nation;
      console.log(this.director.filmography);
      this.nat.getNations().subscribe((nation:any)=>{
        for(let i=0;i<nation.length;i++) {
          if(nation[i].numericCode==this.nation) {
            this.nation=nation[i];
            break;
          }
        }
      });
      
    });
    
   }

  ngOnInit() {
  }

}
