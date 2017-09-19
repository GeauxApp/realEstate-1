import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { GooglePlaceModule } from 'ng2-google-place-autocomplete';
import { Ng2GooglePlaceAutocompleteComponent } from './ng2-google-place-autocomplete/ng2-google-place-autocomplete.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';


import { AppComponent } from './app.component';
import { MainScreenTopComponent } from './main-screen-top/main-screen-top.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MainScreenBodyComponent } from './main-screen-body/main-screen-body.component';
import { CompanypageComponent } from './companypage/companypage.component';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { GooglemapService } from './services/googlemap.service';
import { Component, OnDestroy } from '@angular/core';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { AbstractControl } from '@angular/forms';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';
import { AdminManageUserComponent } from './admin-manage-user/admin-manage-user.component';
import { AdminViewUserComponent } from './admin-view-user/admin-view-user.component';
import { AdminViewPropertyComponent } from './admin-view-property/admin-view-property.component';
import { AdminManagePropertyComponent } from './admin-manage-property/admin-manage-property.component';
import { MapMarkerComponent } from './map-marker/map-marker.component';





let providers = {
  "facebook": {
    "clientId": "1711465562483612",
    "apiVersion": "v2.10"
  }
};

//import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
const appRoutes: Routes = [
  // { path: '', component: MainScreenTopComponent },
  // { path: 'company', component: CompanypageComponent },
  // { path: 'admindashboard', component: AdmindashboardComponent },
  // { path: 'admindashboard/manageUser', component: AdminManageUserComponent },
  // { path: 'admindashboard/manageProperty', component: AdminManagePropertyComponent },
  { path: '', component: MainScreenTopComponent },
  { path: 'company', component: CompanypageComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'manageuser', component: AdminManageUserComponent },
  { path: 'manageproperty', component: AdminManagePropertyComponent },
  { path: 'adminhome', component: AdminwelcomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MainScreenTopComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    MainScreenBodyComponent,
    Ng2GooglePlaceAutocompleteComponent,
    CompanypageComponent,
    AdmindashboardComponent,
    AdminsidebarComponent,
    AdminwelcomeComponent,
    AdminManageUserComponent,
    AdminViewUserComponent,
    AdminViewPropertyComponent,
    AdminManagePropertyComponent,
    MapMarkerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    GooglePlaceModule,
    FormsModule,
    Angular2SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1Gu7O8LhZ66dJkwYESPghbVd06iikxDc',
      libraries: ["places"]
    }),
    AgmJsMarkerClustererModule,
  ],
  providers: [SignupService, LoginService, GooglemapService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() { }

}

Angular2SocialLoginModule.loadProvidersScripts(providers);

