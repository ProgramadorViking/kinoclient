import { Component, OnInit, Input } from '@angular/core';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-director',
  templateUrl: './card-director.component.html',
  styleUrls: ['./card-director.component.css']
})
export class CardDirectorComponent implements OnInit {

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
