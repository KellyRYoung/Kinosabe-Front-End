import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name=""
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // get the route parameter's name
    this.name = this.route.snapshot.params['name']
  }

}
