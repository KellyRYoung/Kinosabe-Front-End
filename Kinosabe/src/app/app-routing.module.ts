import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { SimpleMovieCardComponent } from './simple-movie-card/simple-movie-card.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "home/:name", component: HomeComponent},
  //{path: "search/:query", component: SearchResultsComponent},
  {path: "search", component: SearchResultsComponent},
  {path: "movie-card", component: MovieCardComponent},
  {path: "simple-movie-card", component: SimpleMovieCardComponent},
  {path: "material-demo", component: MaterialDemoComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
