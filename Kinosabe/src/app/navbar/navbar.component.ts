import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dropdownVisibleL=false;
  dropdownVisibleR=false;

  currentUser= {
    username: "krydrita"
  };
  currentUserPicUrl="";
  siteName = "Kinosabe";
  navLinksLeftParent = "Browse";
  navLinksLeft = ["What's Trending", "New Releases", "Browse by Genre", "Surprise Me!"];

  navLinksRightParent = "My Profile";
  navLinksRight = ["My Wishlist", "My Comments", "Settings"];
  
  toggleDropdownL() {
    if (!this.dropdownVisibleL) {
      this.dropdownVisibleL=true;
    } else {
      this.dropdownVisibleL=false;
    }
  }

  toggleDropdownR() {
    if (!this.dropdownVisibleR) {
      this.dropdownVisibleR=true;
    } else {
      this.dropdownVisibleR=false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
