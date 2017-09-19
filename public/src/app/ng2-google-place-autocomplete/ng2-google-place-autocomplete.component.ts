import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-ng2-google-place-autocomplete',
  templateUrl: './ng2-google-place-autocomplete.component.html',
  styleUrls: ['./ng2-google-place-autocomplete.component.css']
})
export class Ng2GooglePlaceAutocompleteComponent {

  public options = { types: ['address'], componentRestrictions: { country: 'IN' } }
  getAddress(place: Object) {
    console.log("Address", place);
  }

}
