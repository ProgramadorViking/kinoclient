import { Component, OnInit } from '@angular/core';

import { KinoService } from 'src/app/services/kino.service';

@Component({
  selector: 'app-index-dirctor',
  templateUrl: './index-dirctor.component.html',
  styleUrls: ['./index-dirctor.component.css']
})
export class IndexDirctorComponent implements OnInit {

  directores:any[]=[];
  loading:boolean;
  rol:boolean;

  constructor(private kino:KinoService) {
    if(localStorage.getItem('rol')!='0') {
      this.rol=true;
    } else {
      this.rol=false;
    }
    this.loading=true;
    this.kino.getDirectors().subscribe((data:any)=>{
      this.directores=data;
      this.loading=false;
    }, error=>{
      this.kino.validate(error);
    })
  }

  ngOnInit() {
  }

}
