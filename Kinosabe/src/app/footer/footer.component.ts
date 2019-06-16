import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  movieQuote = "NO! Layers. Onions have layers. Ogres have layers... You get it? We both have layers.-Shrek"

  constructor() { }

  ngOnInit() {
  }

}
