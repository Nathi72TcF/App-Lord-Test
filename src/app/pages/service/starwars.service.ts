import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  movies = [];

  constructor(
    private http: HttpClient
  ) {
    this.testC();
   }

  testC() {
    this.http.get('http://swapi.dev/api/').subscribe((response) => {
    // console.log(response);
    this.movies = []

    this.movies.push(response);
    console.log(response);
    
  })
  }

}
