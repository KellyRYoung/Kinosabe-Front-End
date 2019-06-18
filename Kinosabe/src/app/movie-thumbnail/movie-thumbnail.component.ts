import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {

  moviePictureUrl = "http://www.reelviews.net/resources/img/posters/thumbs/godfather_poster.jpg"
  title = "The Godfather"
  constructor() { }

  ngOnInit() {
  }

}
