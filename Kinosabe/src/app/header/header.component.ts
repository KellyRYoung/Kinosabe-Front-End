import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  siteTitle = document.getElementById('site-title');
  title="Kinosabe";
  fonts = [
    "Comfortaa",
    "Chewy",
    "Fredericka the Great",
    "Overlock",
    "Cabin Sketch",
    "Londrina Solid",
    "Happy Monkey",
    "Chelsea Market",
    "Pompiere",
    "Sniglet",
    "Mirza",
    "Expletus Sans",
    "ZCOOL KuaiLe",
    "Finger Paint",
    "McLaren",
    "Averia Libre",
    "Codystar",
    "Voces",
    "Life Savers",
    "Averia Sans Libre",
    "Nova Square",
    "Atma",
    "Kranky",
    "Yatra One",
    "Nova Round",
    "Gugi",
    "Flamenco",
    "Coiny",
    "Autour One",
    "Original Surfer",
    "Kirang Haerang",
    "Yeon Sung",
    "Londrina Sketch" 
  ]
  
  constructor() { }

  ngOnInit() {
  }
  
}
