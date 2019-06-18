import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { SimpleMovieCardComponent } from './simple-movie-card/simple-movie-card.component';
import { RegisterComponent } from './register/register.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { PopularSearchesComponent } from './popular-searches/popular-searches.component';
import { RecentCommentsComponent } from './recent-comments/recent-comments.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "comment-card", component: CommentCardComponent},
  {path: "home/:name", component: HomeComponent},
  //{path: "search/:query", component: SearchResultsComponent},
  {path: "search", component: SearchResultsComponent},
  {path: "movie-card", component: MovieCardComponent},
  {path: "simple-movie-card", component: SimpleMovieCardComponent},
  {path: "material-demo", component: MaterialDemoComponent},
  {path: "register", component: RegisterComponent},
  {path: "movie-thumbnail", component: MovieThumbnailComponent},
  {path: "popular-searches", component: PopularSearchesComponent},
  {path: "recent-comments", component: RecentCommentsComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
