import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './../service/starwars.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {

  vehicles = [];

  constructor(
    private service: StarwarsService,
    private http: HttpClient
  ) {
    this.getVehicles();
   }

  ngOnInit() {
  }

  getVehicles() {
    this.http.get('http://swapi.dev/api/vehicles/').subscribe((response) => {
    // console.log(response);
    this.vehicles = []

    this.vehicles.push(response);
    console.log(response);
    
  })
  }

}
