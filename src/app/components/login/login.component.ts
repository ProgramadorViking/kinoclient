import { Component, OnInit } from '@angular/core';

import { AuthKinoService } from 'src/app/services/authKino.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthKinoService) { }

  ngOnInit() {
  }

  login(email, password)  {
    console.log(email);
    console.log(password);
    this.auth.login(email,password);
  }

}
