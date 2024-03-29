import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { SimpleMovieCardComponent } from './simple-movie-card/simple-movie-card.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    HomeComponent, 
    ErrorComponent, 
    SearchResultsComponent, 
    NavbarComponent, 
    HeaderComponent, 
    MovieCardComponent, 
    MaterialDemoComponent, 
    MatNavbarComponent, SimpleMovieCardComponent, CommentCardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
