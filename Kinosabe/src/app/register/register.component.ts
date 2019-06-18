import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usernameFormControl = new FormControl('', [
    Validators.required
  ]);
  firstnameFormControl = new FormControl('', [
    Validators.required
  ]);
    lastnameFormControl = new FormControl('', [
      Validators.required
    ]);
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    passwordFormControl = new FormControl('', [
      Validators.required
    ]);
}
