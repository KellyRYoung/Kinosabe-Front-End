import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  movies = [
    {
      id: 771923,
      title: "Batman",
      year: 1966,
      pictureUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Batman1966Poster.jpg/220px-Batman1966Poster.jpg",
      directors: ["William Dozier"],
      starring: ["Adam West", "Burt Ward", "Lee Meriwether", "Cesar Romero", "Burgess Meredith", "Frank Gorshin"],
      description: "For The First Time On The Motion Picture Screen In Color! Adam West as Batman and Burt Ward as Robin Together With All Their Fantastic Derring-Do And Their Dastardly Villians, Too!",
      rating: 100,
      genres: ["comedy", "action", "superhero"],
      comments: ["comment1", "comment2", "comment3", "comment4"]
    },
    {
      id: 4211,
      title: "Superman",
      year: 1978,
      pictureUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Superman_ver1.jpg/220px-Superman_ver1.jpg",
      directors: ["Richard Donner"],
      starring: ["Marlon Brando", "Christopher Reeve", "Gene Hackman", "Margot Kidder", "Ned Beatty"],
      description: "An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home's first and greatest superhero.",
      rating: 78,
      genres: ["action", "adventure", "superhero", "drama"],
      comments: ["comment1", "comment2"]
    }
  ];

  printInfo (movies) {
    movies.forEach(function (data) {
      console.log(data);
    });
  }

  constructor() { }

  ngOnInit() {
    this.printInfo(this.movies);
  }

}
