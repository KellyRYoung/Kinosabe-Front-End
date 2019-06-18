import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpclient: HttpClient) { }

  getSearchResults(): Observable<any> {
    // let params1 = new HttpParams().set('apikey', "955d83e8");
    return this.httpclient.get("http://www.omdbapi.com/?apikey=955d83e8&s=Shrek&type=movie&plot=short");
    // http://www.omdbapi.com/
  }

  // getSearchResults = async () => {
  //   console.log('Inside getSearchResults: ')
  //   let response = await fetch('http://www.omdbapi.com/?apikey=955d83e8&s=Shrek&type=movie&plot=short', {
  //     method: 'GET'
  //     // headers: {

  //     // }
  //   });
  //   let movieList = await response.json();
  //   return movieList;
      
  // }
}
