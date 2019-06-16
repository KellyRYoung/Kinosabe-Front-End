import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-navbar',
  templateUrl: './mat-navbar.component.html',
  styleUrls: ['./mat-navbar.component.css']
})
export class MatNavbarComponent implements OnInit {

  siteName = "Kinosabe";
  loggedIn = true;

  logout() {
    this.loggedIn = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
