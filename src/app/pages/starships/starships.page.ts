import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './../service/starwars.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {

  starShips = [];

  constructor(
    private service: StarwarsService,
    private http: HttpClient
  ) {
    this.getStarship();
   }

  ngOnInit() {
  }

  getStarship() {
    this.http.get('http://swapi.dev/api/starships/').subscribe((response) => {
    // console.log(response);
    this.starShips = []

    this.starShips.push(response);
    console.log(response);
    
  })
  }

}
