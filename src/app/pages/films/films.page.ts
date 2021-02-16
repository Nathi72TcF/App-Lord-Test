import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './../service/starwars.service';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ViewfilmsPage } from './viewfilms/viewfilms.page';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  Films = [];

  constructor(
    private service: StarwarsService,
    private http: HttpClient,
    private modalController: ModalController,
  ) {
    // this.service.testC();
    this.getFilms();
   }

  ngOnInit() {

  }

  getFilms() {
    this.http.get('http://swapi.dev/api/films/').subscribe((response) => {
    // console.log(response);
    this.Films = []

    this.Films.push(response);
    console.log(response);
    
  })
  }

  seefilm(url) {
    console.log('im clicked');
    
    this.modalController.create({
      component: ViewfilmsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'url': url,
      }  
      
    }).then(modal => modal.present());
  }

}
