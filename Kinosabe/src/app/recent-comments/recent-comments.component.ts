import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-comments',
  templateUrl: './recent-comments.component.html',
  styleUrls: ['./recent-comments.component.css']
})
export class RecentCommentsComponent implements OnInit {

   comments = [
    {
      username: "Shrek",
      commentText: "That movie Shrek was amazing, and I am not just saying that because I am in it. Donkey was"
      + "annoying at first but in the long run we became best friends. I got the girl, Princess Fiona!" +
      "Gingy went back to the muffin man and now me and Donkey are gonna wake up in the morning after gazing" +
      "at the stars tonight and make some waffles!"
    },
    {
      username: "Shrek",
      commentText: "That movie Shrek was amazing, and I am not just saying that because I am in it. Donkey was"
      + "annoying at first but in the long run we became best friends. I got the girl, Princess Fiona!" +
      "Gingy went back to the muffin man and now me and Donkey are gonna wake up in the morning after gazing" +
      "at the stars tonight and make some waffles!"
    },
  ];

  //   printInfo (comment){
  //     comment.forEach(function (data) {
  //       console.log(data);
  //     });
  //   }
  
  // constructor() { }

  ngOnInit() {
  //   this.printInfo(this.comment);
  }

}

