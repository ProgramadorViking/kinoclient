import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthKinoService } from '../../services/authKino.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthKinoService, private router: Router) {
    if(!auth.logIn) {
      this.router.navigate(['inicio']);
    }
   }

  ngOnInit() {
  }

}
