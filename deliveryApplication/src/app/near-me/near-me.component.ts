import { Component, OnInit, ViewChild  } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

declare const L:any;

@Component({
  selector: 'app-near-me',
  templateUrl: './near-me.component.html',
  styleUrls: ['./near-me.component.css']
})

export class NearMeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

    if(!navigator.geolocation){
      console.log('location is not supported');
    }

    //Taking the current Location
    navigator.geolocation.getCurrentPosition((position)=>{
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let map = L.map('map').setView([latitude,longitude ], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      //Adding the marker and the circle
      let marker = L.marker([latitude, longitude]).addTo(map);
      var circle = L.circle([latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 300
    }).addTo(map);
    marker.bindPopup("<b>You are here!</b>").openPopup();

    //Multiple locations marker 
    var locations = [
      ["D2D Lake Shore Warehouse", 41.840729, -87.620087],
      ["D2D Fuller Park Warehouse", 41.815082, -87.639999],
      ["D2D Bridgeport Warehouse", 41.835293, -87.651157],
      ["D2D Lake View", 41.850192, -87.617748],
      ["D2D Downtown Park", 41.880298, -87.629893],
      ["D2D Cicero", 41.84092, -87.755356],
      ["D2D Midway International DropOff",41.779505, -87.749176],
      ["D2D Aurora", 41.740578, -88.316345]
    ];

      for (var i = 0; i < locations.length; i++) {
        marker = new L.marker([locations[i][1], locations[i][2]])
          .bindPopup(locations[i][0])
          .addTo(map);
      }
   })
    this.watchPosition();
  }

  watchPosition(){
    let desLat= 0;
    let desLon =0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      if(position.coords.latitude === desLat){
        navigator.geolocation.clearWatch(id);
      }
      }, 
      (err)=> {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout:5000,
        maximumAge:0
      }
    )}
    
}
