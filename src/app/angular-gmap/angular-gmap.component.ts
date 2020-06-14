import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from 
  '@angular/core';

@Component({
  selector: 'app-angular-gmap',
  templateUrl: './angular-gmap.component.html',
  styleUrls: ['./angular-gmap.component.scss']
})
export class AngularGmapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;

  markers = [
    {
      position: new google.maps.LatLng(40.73061, 73.935242),
      map: this.map,
      title: "Marker 1"
    },
    {
      position: new google.maps.LatLng(32.06485, 34.763226),
      map: this.map,
      title: "Marker 2"
    }
  ];

  constructor() { }
  

  lat = 40.730610;
  lng = -73.935242;

  coordinates = new google.maps.LatLng(this.lat, this.lng);
 
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    
    //Adding Click event to default marker
    this.marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    //Adding default marker to map
    this.marker.setMap(this.map);

    //Adding other markers
    this.loadAllMarkers();
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.mapInitializer()
  }
  loadAllMarkers(){
    this.markers.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      //Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);
    });
  }
}
