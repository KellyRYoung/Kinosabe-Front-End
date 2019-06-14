import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dropdownVisible=false;

  currentUser= {
    username: "krydrita"
  };
  currentUserPicUrl="";
  siteName = "Kinosabe";
  navLinksLeftParent = "Browse";
  navLinksLeft = ["What's Trending", "New Releases", "Browse by Genre", "Surprise Me!"];

  navLinksRightParent = "My Profile";
  navLinksRight = ["My Wishlist", "My Comments", "Settings"];
  
  toggleDropdown() {
    if (!this.dropdownVisible) {
      this.dropdownVisible=true;
    } else {
      this.dropdownVisible=false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
