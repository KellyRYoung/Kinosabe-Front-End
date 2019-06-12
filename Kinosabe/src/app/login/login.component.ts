import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  userLogin() {
    console.log(this.userUsername);
    console.log(this.userPassword);
    if(this.userUsername==="krydrita" && this.userPassword === "fish") {
      // Redirect to Home Page
      this.router.navigate(['home'])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

}
