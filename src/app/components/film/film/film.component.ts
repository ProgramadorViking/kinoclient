import { Component, OnInit, Input } from '@angular/core';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  page=1;
  pageSize=30;
  rol:boolean;

  @Input() items: any[]=[];

  constructor() { 
    if(localStorage.getItem('rol')!='0') {
      this.rol=true;
    } else {
      this.rol=false;
    }
  }

  ngOnInit() {
  }

}