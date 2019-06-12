import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userUsername = "";
  userPassword = "";

  errorMessage = "Invalid credentials"
  invalidLogin = false;

  constructor() { }

  ngOnInit() {
  }

  userLogin() {
    if(this.userUsername==="krydrita" && this.userPassword === "fish") {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

}
