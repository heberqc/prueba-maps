import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  latitude = 0; // latitude
  longitude = 0; // longitude

  constructor(
    private geolocation: Geolocation
  ) {}

  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

}
