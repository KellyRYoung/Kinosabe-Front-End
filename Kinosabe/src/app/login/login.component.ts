import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';


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
      console.log("you are in the userLogin")
      // Redirect to Home Page
      this.router.navigate(['home', this.userUsername])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  usernameFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

}
