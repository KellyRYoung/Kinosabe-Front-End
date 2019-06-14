import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser= {
    username: "krydrita"
  };
  currentUserPicUrl="";
  siteName = "Kinosabe";
  navLinksLeftParent = "Browse";
  navLinksLeft = ["What's Trending", "New Releases", "Browse by Genre", "Surprise Me!"];

  navLinksRightParent = "My Profile";
  navLinksRight = ["My Wishlist", "My Comments", "Settings"];
  constructor() { }

  ngOnInit() {
  }

}
