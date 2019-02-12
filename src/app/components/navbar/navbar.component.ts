import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthKinoService } from '../../services/authKino.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthKinoService, private router: Router) {
    if(!auth.logIn) {
      this.router.navigate(['inicio']);
    }
  }

  ngOnInit() {
    
  }

}
