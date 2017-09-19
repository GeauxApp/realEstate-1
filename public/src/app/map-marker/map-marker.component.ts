import { Component, ElementRef, NgZone, OnInit, ViewChild, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { GooglemapService } from './../services/googlemap.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { Observable } from 'rxjs/Observable';
import { } from 'googlemaps';

interface marker {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.css']
})

export class MapMarkerComponent implements OnInit, marker {

  constructor(private GoogleMapService: GooglemapService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
  }

  public markers: marker[] = [];
  userTestStatus: { lat: number, lng: number }[]
  title: string = 'Property data (just for cheching 1-way binding)';
  lat: number = -31.563910; lng: number = 140.154312; zoom: number = 1;
  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        var zoom = 1;
      });
    }
  }
  private getDatafromBackend(latitude, longitude) {
    //console.log("latitude,longitude>>",latitude,longitude)
    var p = this.GoogleMapService.getLocationsData(latitude, longitude)
      .subscribe(propertyDataFromService => {
        var jsObjectOfPropertyDataFromService = JSON.parse(propertyDataFromService['_body'])
        this.setMarkers(jsObjectOfPropertyDataFromService)
      })
  }
  private setMarkers(propertyDataFromService) {
    let tempMarker: marker[] = []
    propertyDataFromService.forEach(function (key) {
      tempMarker.push({ lat: Number(key.Property.Address.Latitude), lng: Number(key.Property.Address.Longitude) })
    });
    this.markers = []
    this.markers.push(...tempMarker);
  }



  ngOnInit() {
    this.zoom = 1;

    //create search FormControl
    this.searchControl = new FormControl();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 1;
          this.getDatafromBackend(this.lat, this.lng)
        });
      });
    });
  }
}













// constructor(private GoogleMapService: GooglemapService, private mapsAPILoader: MapsAPILoader,
//     private ngZone: NgZone) {
    // this.markers = [
    //   { lat: -31.563910, lng: 147.154312 },
    //   { lat: -33.718234, lng: 150.363181 },
    //   { lat: -33.727111, lng: 150.371124 },
    //   { lat: -33.848588, lng: 151.209834 },
    //   { lat: -33.851702, lng: 151.216968 },
    //   { lat: -34.671264, lng: 150.863657 },
    //   { lat: -35.304724, lng: 148.662905 },
    //   { lat: -36.817685, lng: 175.699196 },
    //   { lat: -36.828611, lng: 175.790222 },
    //   { lat: -37.750000, lng: 145.116667 },
    //   { lat: -37.759859, lng: 145.128708 },
    //   { lat: -37.765015, lng: 145.133858 },
    //   { lat: -37.770104, lng: 145.143299 },
    //   { lat: -37.773700, lng: 145.145187 },
    //   { lat: -37.774785, lng: 145.137978 },
    //   { lat: -37.819616, lng: 144.968119 },
    //   { lat: -38.330766, lng: 144.695692 },
    //   { lat: -39.927193, lng: 175.053218 },
    //   { lat: -41.330162, lng: 174.865694 },
    //   { lat: -42.734358, lng: 147.439506 },
    //   { lat: -42.734358, lng: 147.501315 },
    //   { lat: -42.735258, lng: 147.438000 },
    //   { lat: -43.999792, lng: 170.463352 }
    // ]
  // }
  // public markers: any = new Array();