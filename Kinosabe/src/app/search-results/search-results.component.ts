import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  movieId: number;
  movieTitle: string;
  movieDesc: string;
  movieRating: number;
  movieGenre: string;
  movieComments: [];

  result = [
    this.movieId,
    this.movieTitle,
    this.movieDesc,
    this.movieRating,
    this.movieGenre
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
