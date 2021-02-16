import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewfilms',
  templateUrl: './viewfilms.page.html',
  styleUrls: ['./viewfilms.page.scss'],
})
export class ViewfilmsPage implements OnInit {

  url;

  viewMovie = [];

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
  ) {
    
   }

  ngOnInit() {
    console.log(this.url);

    this.getFilms();
  }

  getFilms() {
    this.http.get(this.url).subscribe((response) => {
    // console.log(response);
    this.viewMovie = []

    this.viewMovie.push(response);
    console.log(response);
    
  })
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
