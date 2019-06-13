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
  // moviePictureURL: string; 
  // movieStarring: [];
  // movieDesc: string;
  // movieRating: number;
  // movieGenre: [];
  // movieComments: [];

  
  // TO DO: How to display number of comments?

  // result = [
  //   this.movieTitle,
  //   this.movieYear,
  //   this.movieStarring,
  //   this.movieRating,
  //   this.movieGenre,
  //   this.movieDesc,
  //   this.movieComments
  // ];

  results = [{
    movieId: 771923,
    movieTitle: "Batman",
    movieYear: 1966,
    moviePictureURL: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Batman1966Poster.jpg/220px-Batman1966Poster.jpg",
    movieStarring: ["Adam West", "Burt Ward", "Lee Meriwether", "Cesar Romero", "Burgess Meredith", "Frank Gorshin"],
    movieDesc: "For The First Time On The Motion Picture Screen In Color! Adam West as Batman and Burt Ward as Robin Together With All Their Fantastic Derring-Do And Their Dastardly Villians, Too!",
    movieRating: 100,
    movieGenre: ["comedy", "action", "superhero"],
    movieComments: ["comment1", "comment2", "comment3"]
  }];

  printInfo (results) {
    results.forEach(function (data) {
      console.log(data);
    });
  }
  

  constructor() { }

  ngOnInit() {
    this.printInfo(this.results);
  }

}
