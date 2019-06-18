import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MatNavbarComponent } from './mat-navbar/mat-navbar.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { SimpleMovieCardComponent } from './simple-movie-card/simple-movie-card.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { PopularSearchesComponent } from './popular-searches/popular-searches.component';
import { RecentCommentsComponent } from './recent-comments/recent-comments.component';


@NgModule({
  declarations: [
    RegisterComponent,
    AppComponent,
    LoginComponent, 
    HomeComponent, 
    ErrorComponent, 
    SearchResultsComponent, 
    NavbarComponent, 
    HeaderComponent, 
    MovieCardComponent, 
    MaterialDemoComponent, 
    MatNavbarComponent, FooterComponent,
    MatNavbarComponent, SimpleMovieCardComponent, CommentCardComponent, MovieThumbnailComponent, PopularSearchesComponent, RecentCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
