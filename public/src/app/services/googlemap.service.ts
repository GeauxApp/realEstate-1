import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

//import { UsersSignUp } from './users_signup';

@Injectable()
export class GooglemapService {

  constructor(private http: Http, private router: Router) { }
  private headers = new Headers({ 'Content-Type': 'application/json' });

  getLocationsData(lat, lng) {
    return this.http.post('http://localhost:3000/property/propertyLocation', { lat: lat, lng: lng })
      .map((propertyDataToService) => { return propertyDataToService })
  }

}
