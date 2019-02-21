import { Component, OnInit } from '@angular/core';

import { AuthKinoService } from 'src/app/services/authKino.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login:boolean;

  constructor(private auth:AuthKinoService) {
    this.login=auth.logIn;
  }

  ngOnInit() {
  }

}
