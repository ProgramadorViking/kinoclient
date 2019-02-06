import { Component, OnInit } from '@angular/core';

import { AuthKinoService } from '../../services/authKino.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message:string;
  error:boolean;

  constructor(private auth: AuthKinoService) { }

  ngOnInit() {
  }

  register(name, email, password, repeat) {
    if(password==repeat) {
      this.auth.register(name,email,password);
    } else {
      this.error=true;
      this.message="las contraseñas no coinciden";
    }
  }
}
