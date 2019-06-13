import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  // movieId: number;
  // movieTitle: string;
  // movieYear: number;
  // movieStarring: [];
  // movieDesc: string;
  // movieRating: number;
  // movieGenre: [];
  // movieComments: [];

  movieId: 771923;
  movieTitle: "Batman";
  movieYear: 1966;
  movieStarring: ["Adam West", "Burt Ward", "Lee Meriwether", "Cesar Romero", "Burgess Meredith", "Frank Gorshin"];
  movieDesc: "For The First Time On The Motion Picture Screen In Color! Adam West as Batman and Burt Ward as Robin Together With All Their Fantastic Derring-Do And Their Dastardly Villians, Too!";
  movieRating: 100;
  movieGenre: ["comedy", "action", "superhero"];
  movieComments: ["comment1", "comment2", "comment3"];

  result = [
    this.movieTitle,
    this.movieYear,
    this.movieStarring,
    this.movieRating,
    this.movieGenre,
    this.movieDesc,
    this.movieComments.length
  ];
  

  constructor() { }

  ngOnInit() {
  }

}