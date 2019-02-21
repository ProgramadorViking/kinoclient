import { Component, OnInit } from '@angular/core';

import { AuthKinoService } from 'src/app/services/authKino.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthKinoService) {}

  ngOnInit() {
  }

}
