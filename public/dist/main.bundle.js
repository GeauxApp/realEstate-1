webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin-manage-property/admin-manage-property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-manage-property/admin-manage-property.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2 col-md-2\">\n    <app-adminsidebar></app-adminsidebar>\n  </div>\n  <div class=\"col-sm-10 col-md-10\">\n    <ngb-tabset [justify]=\"currentJustify\">\n\n      <ngb-tab>\n        <ng-template ngbTabTitle>\n          <span class=\"fa fa-users\">VIEW PROPERTIES</span></ng-template>\n        <ng-template ngbTabContent>\n          <app-admin-view-user></app-admin-view-user>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab>\n        <ng-template ngbTabTitle><span class=\"fa fa-home\">ADD PROPERTY</span></ng-template>\n        <ng-template ngbTabContent>\n          <!-- <app-admin-add-property></app-admin-add-property> -->\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin-manage-property/admin-manage-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminManagePropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminManagePropertyComponent = (function () {
    function AdminManagePropertyComponent() {
    }
    AdminManagePropertyComponent.prototype.ngOnInit = function () {
    };
    return AdminManagePropertyComponent;
}());
AdminManagePropertyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-manage-property',
        template: __webpack_require__("../../../../../src/app/admin-manage-property/admin-manage-property.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin-manage-property/admin-manage-property.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminManagePropertyComponent);

//# sourceMappingURL=admin-manage-property.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-manage-user/admin-manage-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-manage-user/admin-manage-user.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"button\" class=\"btn btn-outline-warning btn-lg fa fa-user-plus\" routerLink=\"/afteradding\" routerLinkActive=\"active\">Add User</button>\n\n\n<form (ngSubmit)=\"viewuser()\" style=\"display: inline-block;\" #loginForm=\"ngForm\">\n  <button type=\"\" class=\"btn btn-outline-warning btn-lg fa fa-users\">View users</button>\n</form> -->\n<div class=\"row\">\n  <div class=\"col-sm-2 col-md-2\">\n    <app-adminsidebar></app-adminsidebar>\n  </div>\n  <div class=\"col-sm-10 col-md-10\">\n    <ngb-tabset [justify]=\"currentJustify\">\n\n      <ngb-tab>\n        <ng-template ngbTabTitle>\n          <span class=\"fa fa-users\">VIEW USERS</span></ng-template>\n        <ng-template ngbTabContent>\n          <app-admin-view-user></app-admin-view-user>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab>\n        <ng-template ngbTabTitle><span class=\"fa fa-user-plus\">ADD USER</span></ng-template>\n        <ng-template ngbTabContent>\n          <app-signup></app-signup>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin-manage-user/admin-manage-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminManageUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminManageUserComponent = (function () {
    function AdminManageUserComponent() {
    }
    AdminManageUserComponent.prototype.ngOnInit = function () {
    };
    return AdminManageUserComponent;
}());
AdminManageUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-manage-user',
        template: __webpack_require__("../../../../../src/app/admin-manage-user/admin-manage-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin-manage-user/admin-manage-user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminManageUserComponent);

//# sourceMappingURL=admin-manage-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-view-property/admin-view-property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-view-property/admin-view-property.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Location</th>\n      <th>City</th>\n      <th>Area per sq. ft.</th>\n      <th>Price</th>\n      <th>Property Type</th>\n    </tr>\n  </thead>\n  <tbody>\n\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/admin-view-property/admin-view-property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminViewPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminViewPropertyComponent = (function () {
    function AdminViewPropertyComponent() {
    }
    AdminViewPropertyComponent.prototype.ngOnInit = function () {
    };
    return AdminViewPropertyComponent;
}());
AdminViewPropertyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-view-property',
        template: __webpack_require__("../../../../../src/app/admin-view-property/admin-view-property.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin-view-property/admin-view-property.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminViewPropertyComponent);

//# sourceMappingURL=admin-view-property.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-view-user/admin-view-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-view-user/admin-view-user.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Firstname</th>\n      <th>Lastname</th>\n      <th>Email</th>\n      <th>Contact</th>\n      <th>City</th>\n      <th>Membership Type</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Doe</td>\n      <td>john@example.com</td>\n      <td>1234567890</td>\n      <td>Nagpur</td>\n      <td>free</td>\n\n    </tr>\n    <tr>\n      <td>John</td>\n      <td>Doe</td>\n      <td>john@example.com</td>\n      <td>1234567890</td>\n      <td>Nagpur</td>\n      <td>free</td>\n\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/admin-view-user/admin-view-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminViewUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminViewUserComponent = (function () {
    function AdminViewUserComponent() {
    }
    return AdminViewUserComponent;
}());
AdminViewUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-view-user',
        template: __webpack_require__("../../../../../src/app/admin-view-user/admin-view-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin-view-user/admin-view-user.component.css")]
    })
], AdminViewUserComponent);

//# sourceMappingURL=admin-view-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/admindashboard/admindashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* body {\n  margin-top: 10px;\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admindashboard/admindashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"row\">\n    <div class=\"col-sm-2 col-md-3 col-sm-3\">\n      <app-adminsidebar></app-adminsidebar>\n    </div>\n    <div class=\"col-sm-10 col-md-9 col-sm-9\">\n      <!-- <app-adminwelcome></app-adminwelcome> -->\n      <!-- <app-admin-manage-user>\n    </app-admin-manage-user> -->\n      <!-- <app-admin-manage-property>\n    </app-admin-manage-property> -->\n      <app-adminwelcome></app-adminwelcome>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/admindashboard/admindashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmindashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdmindashboardComponent = (function () {
    function AdmindashboardComponent() {
    }
    AdmindashboardComponent.prototype.ngOnInit = function () {
    };
    return AdmindashboardComponent;
}());
AdmindashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admindashboard',
        template: __webpack_require__("../../../../../src/app/admindashboard/admindashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admindashboard/admindashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdmindashboardComponent);

//# sourceMappingURL=admindashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/adminsidebar/adminsidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  text-decoration: none !important;\n  color: #666666;\n  font-size: large;\n  font-family: 'Playfair Display', serif;\n  font-family: 'Alegreya', serif;\n}\n\np {\n  text-decoration: none !important;\n  color: black;\n  font-size: xx-large;\n  font-family: 'Playfair Display', serif;\n  font-family: 'Alegreya', serif;\n}\n\n.list-group-item {\n  background-color: #FDC600;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: .75rem 1.25rem;\n  margin-bottom: -1px;\n  /* background-color: #fff; */\n  border: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adminsidebar/adminsidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"w3-sidebar w3-bar-block w3-light-grey w3-card-2\">\n    <ul class=\"list-group\" type=none>\n      <li class=\"list-group-item list-group-item-action\">\n        <p>Sidebar Menu</p>\n      </li>\n      <li class=\"list-group-item list-group-item-action\"><a [routerLink]=\"['/admindashboard']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">HOME</a></li>\n      <li class=\"list-group-item list-group-item-action\"><a [routerLink]=\"['/manageuser']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Manage User</a></li>\n      <li class=\"list-group-item list-group-item-action\"><a [routerLink]=\"['/manageproperty']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Manage Property</a></li>\n      <li class=\"list-group-item list-group-item-action\"><a [routerLink]=\"['/home']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Payment Details</a></li>\n      <li class=\"list-group-item list-group-item-action\"><a [routerLink]=\"['/home']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">Testimonials</a></li>\n    </ul>\n  </div>\n</body>\n<!-- \n<a [routerLink]=\"/crisis-center\" [routerLink]Active=\"active\">Crisis Center</a> \n\n\n<a href=\"manageuser\" >Manage User</a>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/adminsidebar/adminsidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminsidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminsidebarComponent = (function () {
    function AdminsidebarComponent() {
    }
    AdminsidebarComponent.prototype.ngOnInit = function () {
    };
    return AdminsidebarComponent;
}());
AdminsidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adminsidebar',
        template: __webpack_require__("../../../../../src/app/adminsidebar/adminsidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/adminsidebar/adminsidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminsidebarComponent);

//# sourceMappingURL=adminsidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/adminwelcome/adminwelcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adminwelcome/adminwelcome.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Welcome Admin....!\n</h1>\n"

/***/ }),

/***/ "../../../../../src/app/adminwelcome/adminwelcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminwelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminwelcomeComponent = (function () {
    function AdminwelcomeComponent() {
    }
    AdminwelcomeComponent.prototype.ngOnInit = function () {
    };
    return AdminwelcomeComponent;
}());
AdminwelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adminwelcome',
        template: __webpack_require__("../../../../../src/app/adminwelcome/adminwelcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/adminwelcome/adminwelcome.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminwelcomeComponent);

//# sourceMappingURL=adminwelcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".companyName {\n  position: relative;\n  left: 30%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  font-size: 55px;\n  text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\"\n  crossorigin=\"anonymous\">\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js\" integrity=\"sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1\"\n  crossorigin=\"anonymous\"></script>\n<!-- <link href=\"https://fonts.googleapis.com/css?family=Abril+Fatface\" rel=\"stylesheet\"> -->\n<link href=\"https://fonts.googleapis.com/css?family=Alegreya|Playfair+Display\" rel=\"stylesheet\">\n\n\n<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<!-- <app-map-marker></app-map-marker>  -->\n\n<!-- <main-screen-top></main-screen-top> -->\n<!-- <app-signup></app-signup>\n<app-login></app-login> -->\n<!-- <a href=\"\" class=\"companyName\">COMPANY NAME</a> -->\n<!-- <app-main-screen-body></app-main-screen-body> -->\n<!-- <router-outlet></router-outlet> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//import Component from angular core

//import our Carousel Component
//import { CarousalComponent } from './carousal/carousal.component';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

// ,
//   //tell angular we are using the css-carousel tag in this component
//   directives: [CarousalComponent]
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_google_place_autocomplete__ = __webpack_require__("../../../../ng2-google-place-autocomplete/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng2_google_place_autocomplete_ng2_google_place_autocomplete_component__ = __webpack_require__("../../../../../src/app/ng2-google-place-autocomplete/ng2-google-place-autocomplete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_js_marker_clusterer__ = __webpack_require__("../../../../@agm/js-marker-clusterer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_screen_top_main_screen_top_component__ = __webpack_require__("../../../../../src/app/main-screen-top/main-screen-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_screen_body_main_screen_body_component__ = __webpack_require__("../../../../../src/app/main-screen-body/main-screen-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__companypage_companypage_component__ = __webpack_require__("../../../../../src/app/companypage/companypage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_signup_service__ = __webpack_require__("../../../../../src/app/services/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_googlemap_service__ = __webpack_require__("../../../../../src/app/services/googlemap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admindashboard_admindashboard_component__ = __webpack_require__("../../../../../src/app/admindashboard/admindashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__adminsidebar_adminsidebar_component__ = __webpack_require__("../../../../../src/app/adminsidebar/adminsidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__adminwelcome_adminwelcome_component__ = __webpack_require__("../../../../../src/app/adminwelcome/adminwelcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_manage_user_admin_manage_user_component__ = __webpack_require__("../../../../../src/app/admin-manage-user/admin-manage-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__admin_view_user_admin_view_user_component__ = __webpack_require__("../../../../../src/app/admin-view-user/admin-view-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__admin_view_property_admin_view_property_component__ = __webpack_require__("../../../../../src/app/admin-view-property/admin-view-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__admin_manage_property_admin_manage_property_component__ = __webpack_require__("../../../../../src/app/admin-manage-property/admin-manage-property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__map_marker_map_marker_component__ = __webpack_require__("../../../../../src/app/map-marker/map-marker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};































var providers = {
    "facebook": {
        "clientId": "1711465562483612",
        "apiVersion": "v2.10"
    }
};
//import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
var appRoutes = [
    // { path: '', component: MainScreenTopComponent },
    // { path: 'company', component: CompanypageComponent },
    // { path: 'admindashboard', component: AdmindashboardComponent },
    // { path: 'admindashboard/manageUser', component: AdminManageUserComponent },
    // { path: 'admindashboard/manageProperty', component: AdminManagePropertyComponent },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__main_screen_top_main_screen_top_component__["a" /* MainScreenTopComponent */] },
    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_17__companypage_companypage_component__["a" /* CompanypageComponent */] },
    { path: 'admindashboard', component: __WEBPACK_IMPORTED_MODULE_22__admindashboard_admindashboard_component__["a" /* AdmindashboardComponent */] },
    { path: 'manageuser', component: __WEBPACK_IMPORTED_MODULE_25__admin_manage_user_admin_manage_user_component__["a" /* AdminManageUserComponent */] },
    { path: 'manageproperty', component: __WEBPACK_IMPORTED_MODULE_28__admin_manage_property_admin_manage_property_component__["a" /* AdminManagePropertyComponent */] },
    { path: 'adminhome', component: __WEBPACK_IMPORTED_MODULE_24__adminwelcome_adminwelcome_component__["a" /* AdminwelcomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__main_screen_top_main_screen_top_component__["a" /* MainScreenTopComponent */],
            __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__main_screen_body_main_screen_body_component__["a" /* MainScreenBodyComponent */],
            __WEBPACK_IMPORTED_MODULE_8__ng2_google_place_autocomplete_ng2_google_place_autocomplete_component__["a" /* Ng2GooglePlaceAutocompleteComponent */],
            __WEBPACK_IMPORTED_MODULE_17__companypage_companypage_component__["a" /* CompanypageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__admindashboard_admindashboard_component__["a" /* AdmindashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_23__adminsidebar_adminsidebar_component__["a" /* AdminsidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_24__adminwelcome_adminwelcome_component__["a" /* AdminwelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_25__admin_manage_user_admin_manage_user_component__["a" /* AdminManageUserComponent */],
            __WEBPACK_IMPORTED_MODULE_26__admin_view_user_admin_view_user_component__["a" /* AdminViewUserComponent */],
            __WEBPACK_IMPORTED_MODULE_27__admin_view_property_admin_view_property_component__["a" /* AdminViewPropertyComponent */],
            __WEBPACK_IMPORTED_MODULE_28__admin_manage_property_admin_manage_property_component__["a" /* AdminManagePropertyComponent */],
            __WEBPACK_IMPORTED_MODULE_29__map_marker_map_marker_component__["a" /* MapMarkerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_7_ng2_google_place_autocomplete__["a" /* GooglePlaceModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_21_angular2_social_login__["a" /* Angular2SocialLoginModule */],
            __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyD1Gu7O8LhZ66dJkwYESPghbVd06iikxDc',
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_10__agm_js_marker_clusterer__["a" /* AgmJsMarkerClustererModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__services_signup_service__["a" /* SignupService */], __WEBPACK_IMPORTED_MODULE_18__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_20__services_googlemap_service__["a" /* GooglemapService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

__WEBPACK_IMPORTED_MODULE_21_angular2_social_login__["a" /* Angular2SocialLoginModule */].loadProvidersScripts(providers);
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/companypage/companypage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companypage/companypage.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <ngb-carousel>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider-image-4.jpg\" alt=\"Random third slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider1.jpg\" alt=\"Random first slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider3.jpg\" alt=\"Random second slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </ng-template>\n    <!-- <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider5.jpg\" alt=\"Random second slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider7.jpg\" alt=\"Random second slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider8.jpg\" alt=\"Random second slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider9.jpg\" alt=\"Random second slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </ng-template> -->\n\n  </ngb-carousel>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/companypage/companypage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanypageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanypageComponent = (function () {
    function CompanypageComponent(config) {
        // customize default values of carousels used by this component tree
        config.interval = 8000;
        config.wrap = false;
        config.keyboard = false;
    }
    CompanypageComponent.prototype.ngOnInit = function () {
    };
    return CompanypageComponent;
}());
CompanypageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-companypage',
        template: __webpack_require__("../../../../../src/app/companypage/companypage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/companypage/companypage.component.css")], providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]] // add NgbCarouselConfig to the component providers
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]) === "function" && _a || Object])
], CompanypageComponent);

var _a;
//# sourceMappingURL=companypage.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".txt {\n  color: #b9b8b8;\n}\n\n.icon {\n  margin-left: 2%;\n  margin-right: 2%;\n  font-size: 30px\n}\n\n.icon1 {\n  margin-left: 4%;\n  margin-right: 2%;\n}\n\n.header-call p {\n  color: #b9b8b8;\n}\n\n.header-call p span {\n  margin-right: 15px;\n  font-weight: 300;\n}\n\n.header-call p span i {\n  margin-right: 4px;\n  font-size: 20px;\n  position: relative;\n  bottom: -3px;\n}\n\n.header-social ul {\n  padding-top: 5px\n}\n\n.header-social ul li a {\n  color: #b9b8b8;\n  font-size: 22px\n}\n\n.header-social ul li a:hover {\n  color: #FDC600\n}\n\n.fa {\n  font-size: 18px;\n}\n\nhr.style13 {\n  height: 10px;\n  border: 0;\n  box-shadow: 0 10px 10px -10px #8c8b8b inset;\n  margin-top: 0rem;\n  margin-bottom: auto;\n}\n\nbody {\n  /* background-color: rgb(28, 11, 115); */\n  background-color: #003873;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html class=\"no-js\">\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>Real Estate</title>\n  <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\"\n    crossorigin=\"anonymous\">\n\n</head>\n\n<body>\n  <div id=\"preloader\">\n    <div id=\"status\">&nbsp;</div>\n  </div>\n  <!-- Body content -->\n  <div class=\"container\">\n    <div class=\"header-connect\">\n      <div class=\"row\">\n        <div class=\"col-md-8 col-sm-9  col-xs-12\">\n          <div class=\"header-half header-call txt\">\n            <span><i class=\"fa fa-phone icon\"></i>+1 234 567 7890</span>\n            <span><i class=\"fa fa-envelope icon1\"></i>your@company.com</span>\n          </div>\n        </div>\n        <div class=\"col-md-4  col-sm-3 col-xs-12\">\n          <div class=\"header-half header-social\">\n            <ul class=\"list-inline\" style=\"list-style-type:none\">\n              <li><a class=\"icon\" href=\"www.facebook.com\"><i class=\"fa fa-facebook\"></i></a>\n                <a class=\"icon\" href=\"www.twitter.com\"><i class=\"fa fa-twitter\"></i></a>\n                <a class=\"icon\" href=\"www.linkedin.com\"><i class=\"fa fa-linkedin\"></i></a>\n                <a class=\"icon\" href=\"www.instagram.com\"><i class=\"fa fa-instagram\"></i></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr class=\"style13\">\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid.required {\n  border-left: 5px solid pink;\n  /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */\n}\n\n.ng-valid:not(form) {\n  border-left: 5px solid #42A948;\n  /* red */\n}\n\n.submit_button {\n  position: relative;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.form__socialButton:first-of-type {\n  margin-bottom: 10px;\n}\n\n.buttonFacebook {\n  background-color: #3b5998;\n  background-image: url(https://static.canva.com/static/images/facebook_button_icon.png);\n  background-image: url(https://static.canva.com/static/images/facebook_button_icon.svg);\n  background-repeat: no-repeat;\n  background-position: 10px;\n  background-size: 30px;\n  padding-left: 40px;\n  overflow: hidden;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"./../../../node_modules/core-js/client/shim.min.js\"></script>\n<script src=\"./../../../node_modules/zone.js/dist/zone.js\"></script>\n<script src=\"./../../../node_modules/reflect-metadata/Reflect.js\"></script>\n<script src=\"./../../../node_modules/systemjs/dist/system.src.js\"></script>\n\n<!-- 2. Configure SystemJS -->\n<script src=\"systemjs.config.js\"></script>\n<script>\n  System.import('app').catch(function (err) {\n    console.error(err);\n  });\n\n</script>\n<div class=\"contrainer\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\n      <form [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"onSubmit(loginForm.value) \">\n        <div class=\"container\">\n          <div class=\"row\">\n\n\n            <div class=\"col\">\n              <div class=\"form-group\">\n\n                <input type=\"email\" name=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter Your Email 'example@abc.com'\">\n\n              </div>\n            </div>\n\n            <div class=\"col\">\n              <div class=\"form-group\">\n\n                <input type=\"password\" name=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Your Password\">\n\n              </div>\n            </div>\n\n            <div class=\"col\">\n              <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"submit_button btn btn-primary\">Login</button>\n            </div>\n          </div>\n\n        </div>\n      </form>\n    </div>\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\n      {{status}}\n      <button type=\"button\" (click)=\"signIn('facebook')\" class=\"button btn btn-default buttonBlock buttonFacebook js-socialAuth__facebookButton form__socialButton\">Login with Facebook</button>\n      <br>\n      <button (click)=\"logout()\">logout</button>\n      <div *ngIf=\"User\">\n        <table>\n          <tr>\n            <td>Name:</td>\n            <td>{{User.name}}</td>\n          </tr>\n          <tr>\n            <td>Email</td>\n            <td>{{User.email}}</td>\n          </tr>\n          <tr>\n            <td>UID</td>\n            <td>{{User.uid}}</td>\n          </tr>\n          <tr>\n            <td>Provider</td>\n            <td>{{User.provider}}</td>\n          </tr>\n          <tr>\n            <td>Image</td>\n            <td>{{User.image}}</td>\n          </tr>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(user, _auth) {
        this.user = user;
        this._auth = _auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30)]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(15), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9]*$')]),
        });
    };
    LoginComponent.prototype.onSubmit = function (data) {
        console.log("Inside ADDD-----------------", data);
        this.user.save(data);
    };
    LoginComponent.prototype.signIn = function (provider) {
        var _this = this;
        this.sub = this._auth.login(provider).subscribe(function (data) {
            console.log(data);
            _this.User = data;
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this._auth.logout().subscribe(function (data) { console.log(data); _this.User = null; });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_social_login__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_social_login__["b" /* AuthService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-screen-body/main-screen-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rotatingImage {\n  position: relative;\n  width: 100%;\n  /* height: auto;\n  overflow: hidden; */\n  /* Full height */\n  height: 50%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.carousel-caption {\n  position: fixed;\n  right: 12%;\n  bottom: 55%;\n  left: 8%;\n  z-index: 10;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  color: #666666;\n  text-align: center;\n  font-size: 1.8vw;\n  font-family: 'Abril Fatface', cursive;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-screen-body/main-screen-body.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <ngb-carousel>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider-image-4.jpg\" alt=\"Random third slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n        <div class=\"searchbar\">\n          <app-ng2-google-place-autocomplete></app-ng2-google-place-autocomplete>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider1.jpg\" alt=\"Random first slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n        <div class=\"searchbar\">\n          <app-ng2-google-place-autocomplete></app-ng2-google-place-autocomplete>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider3.jpg\" alt=\"Random second slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n        <div class=\"searchbar\">\n          <app-ng2-google-place-autocomplete></app-ng2-google-place-autocomplete>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider5.jpg\" alt=\"Random second slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n        <div class=\"searchbar\">\n          <app-ng2-google-place-autocomplete></app-ng2-google-place-autocomplete>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider7.jpg\" alt=\"Random second slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n        <div class=\"searchbar\">\n          <app-ng2-google-place-autocomplete></app-ng2-google-place-autocomplete>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider8.jpg\" alt=\"Random second slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n        <div class=\"searchbar\">\n          <app-ng2-google-place-autocomplete></app-ng2-google-place-autocomplete>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"../../assets/images/slider9.jpg\" alt=\"Random second slide\" class=\"rotatingImage\">\n      <div class=\"carousel-caption\">\n\n        <div class=\"searchbar\">\n          <app-ng2-google-place-autocomplete></app-ng2-google-place-autocomplete>\n        </div>\n      </div>\n    </ng-template>\n\n  </ngb-carousel>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/main-screen-body/main-screen-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainScreenBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainScreenBodyComponent = (function () {
    function MainScreenBodyComponent(config) {
        // customize default values of carousels used by this component tree
        config.interval = 8000;
        config.wrap = false;
        config.keyboard = false;
    }
    MainScreenBodyComponent.prototype.ngOnInit = function () {
    };
    return MainScreenBodyComponent;
}());
MainScreenBodyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-screen-body',
        template: __webpack_require__("../../../../../src/app/main-screen-body/main-screen-body.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-screen-body/main-screen-body.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]] // add NgbCarouselConfig to the component providers
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */]) === "function" && _a || Object])
], MainScreenBodyComponent);

var _a;
//# sourceMappingURL=main-screen-body.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-screen-top/main-screen-top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n  background-color: #333333;\n  opacity: 0.8;\n  /* I ADDED THIS LINE  */\n\n.buttons {\n  text-align: right;\n  margin-top: 30px\n}\n\n.modal-content {\n  display: initial;\n}\n\n.logo {\n  width: 100px;\n  height: 70px;\n}\n\na {\n  color: #ffc107;\n  font-size: -webkit-xxx-large;\n  font-family: 'Abril Fatface', cursive;\n  text-decoration: none !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-screen-top/main-screen-top.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8 col-md-8 col-xs-8\">\n      <!-- <a name=\"companyName\" href=\"company\">Company Name</a> -->\n      <a routerLink=\"/company\" routerLinkActive=\"active\">Company Name</a>\n\n    </div>\n\n    <div class=\"col-sm-4 col-md-4 col-xs-4\">\n      <div class=\"buttons\">\n        <button class=\"btn btn-lg btn-outline-warning \" (click)=\"open(signup)\">Sign up</button>\n        <button class=\"btn btn-lg btn-outline-warning \" (click)=\"open(login)\">Log In</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n<ng-template #signup let-c=\"close \" let-d=\"dismiss \">\n  <!-- <div class=\"modal-header \">\n     <h4 class=\"modal-title \">Modal title</h4> \n    \n  </div> -->\n  <div class=\"modal-content\">\n    <div class=\"modal-body \">\n      <button type=\"button \" class=\"close \" aria-label=\"Close \" (click)=\"d( 'Cross click') \">\n      <span aria-hidden=\"true \">&times;</span>\n    </button>\n      <app-signup></app-signup>\n    </div>\n    <!-- <div class=\"modal-footer \">\n      <button type=\"button \" class=\"btn btn-outline-dark \" (click)=\"c( 'Close click') \">Close</button>\n    </div> -->\n  </div>\n</ng-template>\n\n\n\n\n<ng-template #login let-c=\"close \" let-d=\"dismiss \">\n  <div class=\"modal-header \">\n    <button type=\"button \" class=\"close \" aria-label=\"Close \" (click)=\"d( 'Cross click') \">\n      <span aria-hidden=\"true \">&times;</span>\n    </button>\n\n  </div>\n  <div class=\"modal-body \">\n\n    <app-login></app-login>\n  </div>\n\n</ng-template>\n<app-main-screen-body></app-main-screen-body>\n"

/***/ }),

/***/ "../../../../../src/app/main-screen-top/main-screen-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainScreenTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Router } from "@angular/router";


var MainScreenTopComponent = (function () {
    function MainScreenTopComponent(modalService) {
        this.modalService = modalService;
    }
    MainScreenTopComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    MainScreenTopComponent.prototype.ngOnInit = function () {
    };
    return MainScreenTopComponent;
}());
MainScreenTopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'main-screen-top',
        template: __webpack_require__("../../../../../src/app/main-screen-top/main-screen-top.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-screen-top/main-screen-top.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], MainScreenTopComponent);

var _a;
//# sourceMappingURL=main-screen-top.component.js.map

/***/ }),

/***/ "../../../../../src/app/map-marker/map-marker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n      height: 300px;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map-marker/map-marker.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: \n\n  CSS styling is required-----------------\n\nIt is really important that you define a height component `agm-map`. Otherwise, you won't see a map on the page!\n-->\n<div class=\"form-group\">\n  <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\"\n    #search [formControl]=\"searchControl\">\n</div>\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker-cluster [imagePath]=\"'https://googlemaps.github.io/js-marker-clusterer/images/m'\">\n    <agm-marker *ngFor=\"let marker of markers\" [latitude]=\"marker.lat\" [longitude]=\"marker.lng\"></agm-marker>\n    <!-- <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker> -->\n  </agm-marker-cluster>\n</agm-map>\n\n<script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyD1Gu7O8LhZ66dJkwYESPghbVd06iikxDc&callback=initMap\"\n  type=\"text/javascript\"></script>"

/***/ }),

/***/ "../../../../../src/app/map-marker/map-marker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapMarkerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_googlemap_service__ = __webpack_require__("../../../../../src/app/services/googlemap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapMarkerComponent = (function () {
    function MapMarkerComponent(GoogleMapService, mapsAPILoader, ngZone) {
        this.GoogleMapService = GoogleMapService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.markers = [];
        this.title = 'Property data (just for cheching 1-way binding)';
        this.lat = -31.563910;
        this.lng = 140.154312;
        this.zoom = 1;
    }
    MapMarkerComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                var zoom = 1;
            });
        }
    };
    MapMarkerComponent.prototype.getDatafromBackend = function (latitude, longitude) {
        var _this = this;
        //console.log("latitude,longitude>>",latitude,longitude)
        var p = this.GoogleMapService.getLocationsData(latitude, longitude)
            .subscribe(function (propertyDataFromService) {
            var jsObjectOfPropertyDataFromService = JSON.parse(propertyDataFromService['_body']);
            _this.setMarkers(jsObjectOfPropertyDataFromService);
        });
    };
    MapMarkerComponent.prototype.setMarkers = function (propertyDataFromService) {
        var tempMarker = [];
        propertyDataFromService.forEach(function (key) {
            tempMarker.push({ lat: Number(key.Property.Address.Latitude), lng: Number(key.Property.Address.Longitude) });
        });
        this.markers = [];
        (_a = this.markers).push.apply(_a, tempMarker);
        var _a;
    };
    MapMarkerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zoom = 1;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.lat = place.geometry.location.lat();
                    _this.lng = place.geometry.location.lng();
                    _this.zoom = 1;
                    _this.getDatafromBackend(_this.lat, _this.lng);
                });
            });
        });
    };
    return MapMarkerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], MapMarkerComponent.prototype, "searchElementRef", void 0);
MapMarkerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-map-marker',
        template: __webpack_require__("../../../../../src/app/map-marker/map-marker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map-marker/map-marker.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_googlemap_service__["a" /* GooglemapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_googlemap_service__["a" /* GooglemapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _d || Object])
], MapMarkerComponent);

var _a, _b, _c, _d;
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
//# sourceMappingURL=map-marker.component.js.map

/***/ }),

/***/ "../../../../../src/app/ng2-google-place-autocomplete/ng2-google-place-autocomplete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button,\ninput {\n  overflow: auto;\n  color: #666666;\n  padding-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ng2-google-place-autocomplete/ng2-google-place-autocomplete.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"locationField\">\n  <input type=\"text\" size=\"100\" [(ngModel)]=\"address\" [options]='options' (setAddress)=\"getAddress($event)\" (street_number)='street_number=$event'\n    (street)='street=$event' (city)='city=$event' (state)='state=$event' (district)='district=$event' (country)='country=$event'\n    (postal_code)='postal_code=$event' (lat)='lat=$event' (lng)='lng=$event' (adr_address)='adr_address=$event' (name)='name=$event'\n    (place_id)='place_id=$event' (types)='types=$event' (url)='url=$event' (utc_offset)='utc_offset=$event' (vicinity)='vicinity=$event'\n    (photos)='photos=$event' (airport)='airport=$event' (CountryCodes)='CountryCodes=$event' id=\"autocomplete\" ng2-google-place-autocomplete/>\n"

/***/ }),

/***/ "../../../../../src/app/ng2-google-place-autocomplete/ng2-google-place-autocomplete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2GooglePlaceAutocompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Ng2GooglePlaceAutocompleteComponent = (function () {
    function Ng2GooglePlaceAutocompleteComponent() {
        this.options = { types: ['address'], componentRestrictions: { country: 'IN' } };
    }
    Ng2GooglePlaceAutocompleteComponent.prototype.getAddress = function (place) {
        console.log("Address", place);
    };
    return Ng2GooglePlaceAutocompleteComponent;
}());
Ng2GooglePlaceAutocompleteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ng2-google-place-autocomplete',
        template: __webpack_require__("../../../../../src/app/ng2-google-place-autocomplete/ng2-google-place-autocomplete.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ng2-google-place-autocomplete/ng2-google-place-autocomplete.component.css")]
    })
], Ng2GooglePlaceAutocompleteComponent);

//# sourceMappingURL=ng2-google-place-autocomplete.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/googlemap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglemapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { UsersSignUp } from './users_signup';
var GooglemapService = (function () {
    function GooglemapService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    GooglemapService.prototype.getLocationsData = function (lat, lng) {
        return this.http.post('http://localhost:3000/property/propertyLocation', { lat: lat, lng: lng })
            .map(function (propertyDataToService) { return propertyDataToService; });
    };
    return GooglemapService;
}());
GooglemapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], GooglemapService);

var _a, _b;
//# sourceMappingURL=googlemap.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.connection = 'http://localhost:3000/api/login';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    LoginService.prototype.save = function (data) {
        console.log(data);
        this.http.post(this.connection, data, { headers: this.headers }).subscribe(function (result) {
            if (result.status == 200) {
                //console.log(result["_body"])
                localStorage.setItem('user_token', result["_body"]);
                alert("Login successfully!!!!!!!!!!!");
                // this.router.navigate(['/userDash']);
            }
            if (result.status == 299) {
                alert("Enter valid username or password");
                //this.router.navigate(['/login']);
            }
        });
        return;
    };
    LoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/signup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupService = (function () {
    function SignupService(http, router) {
        this.http = http;
        this.router = router;
        this.connection = 'http://localhost:3000/api/signup';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    SignupService.prototype.save = function (data) {
        console.log(data);
        // this.http.get(this.connection).toPromise();
        this.http.post(this.connection, data, { headers: this.headers }).toPromise();
        //.then(res => res.json())
        //.catch(this.handleError);
        // this.router.navigate(['/']);
        return;
    };
    SignupService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return SignupService;
}());
SignupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SignupService);

var _a, _b;
//# sourceMappingURL=signup.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup/password-validation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidation; });
var PasswordValidation = (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchReconfirmation = function (AC) {
        var email = AC.get('email').value;
        //console.log("email>>>>>>>>>>>>>", email);
        var re_email = AC.get('re_email').value;
        //console.log("re_email>>>>>>>>>>>", re_email);
        var password = AC.get('password').value; // to get value in input tag
        //console.log("password>>>>>>>>>>>>", password);
        var re_password = AC.get('re_password').value; // to get value in input tag
        //console.log("re-password>>>>>>>>>>>>>>", re_password);
        if (email != re_email) {
            AC.get('re_email').setErrors({ MatchEmail: true });
        }
        if (password != re_password) {
            AC.get('re_password').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());

//# sourceMappingURL=password-validation.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid.required {\n  border-left: 5px solid pink;\n  /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */\n}\n\n.ng-valid:not(form) {\n  border-left: 5px solid #42A948;\n  /* red */\n}\n\n.button {\n  position: relative;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.submit_button {\n  position: relative;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.form__socialButton:first-of-type {\n  margin-bottom: 10px;\n}\n\n.buttonFacebook {\n  background-color: #3b5998;\n  background-image: url(https://static.canva.com/static/images/facebook_button_icon.png);\n  background-image: url(https://static.canva.com/static/images/facebook_button_icon.svg);\n  background-repeat: no-repeat;\n  background-position: 10px;\n  background-size: 30px;\n  padding-left: 40px;\n  overflow: hidden;\n  margin-top: 10px\n}\n\n.membership {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: #fffff0;\n}\n\n.para {\n  color: brown;\n  font-size: 20px;\n  text-align: center;\n}\n\n.btn-circle {\n  width: 70px;\n  height: 70px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  border-radius: 20px;\n}\n\n.btn-circle.btn-lg {\n  width: 70px;\n  height: 70px;\n  padding: 10px 16px;\n  font-size: 12px;\n  line-height: 1.33;\n  border-radius: 25px;\n}\n\n.btn-circle.btn-lg {\n  width: 90px;\n  height: 90px;\n  padding: 10px 16px;\n  font-size: 12px;\n  line-height: 1.33;\n  border-radius: 35px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"./../../../node_modules/core-js/client/shim.min.js\"></script>\n<script src=\"./../../../node_modules/zone.js/dist/zone.js\"></script>\n<script src=\"./../../../node_modules/reflect-metadata/Reflect.js\"></script>\n<script src=\"./../../../node_modules/systemjs/dist/system.src.js\"></script>\n\n<!-- 2. Configure SystemJS -->\n<script src=\"systemjs.config.js\"></script>\n<script>\n  System.import('app').catch(function (err) {\n    console.error(err);\n  });\n\n</script>\n\n\n{{status}}\n<button type=\"button\" (click)=\"signIn('facebook')\" class=\"button btn btn-default buttonBlock buttonFacebook js-socialAuth__facebookButton form__socialButton\">signUp with Facebook</button>\n<br>\n<!-- <button (click)=\"logout()\">logout</button> -->\n<div *ngIf=\"User\">\n  <table>\n    <tr>\n      <td>Name:</td>\n      <td>{{User.name}}</td>\n    </tr>\n    <tr>\n      <td>Email</td>\n      <td>{{User.email}}</td>\n    </tr>\n    <tr>\n      <td>UID</td>\n      <td>{{User.uid}}</td>\n    </tr>\n    <tr>\n      <td>Provider</td>\n      <td>{{User.provider}}</td>\n    </tr>\n    <tr>\n      <td>Image</td>\n      <td>{{User.image}}</td>\n    </tr>\n  </table>\n</div>\n\n<!-- <button type=\"button\" class=\"button btn btn-default buttonBlock buttonFacebook js-socialAuth__facebookButton form__socialButton\">Sign up with Facebook</button> -->\n<hr>\n<form [formGroup]=\"signupForm\" novalidate (ngSubmit)=\"onSubmit(signupForm.value)\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n\n          <input type=\"text\" name=\"firstname\" formControlName=\"firstname\" class=\"form-control\" id=\"firstname\" placeholder=\"Enter Your First Name\">\n\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n\n          <input type=\"text\" name=\"lastname\" formControlName=\"lastname\" class=\"form-control\" id=\"lastname\" placeholder=\"Enter Your Last Name\">\n\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n\n          <input type=\"email\" name=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter Your Email 'example@abc.com'\">\n\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n\n          <input type=\"email\" name=\"re_email\" formControlName=\"re_email\" class=\"form-control\" id=\"re_email\" placeholder=\"Re-Enter Your Email \">\n\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n\n          <input type=\"password\" name=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Your Password\">\n\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n\n          <input type=\"password\" name=\"re_password\" formControlName=\"re_password\" class=\"form-control\" id=\"re_password\" placeholder=\"Re-Enter Your Password\">\n\n        </div>\n      </div>\n      <!-- <div class=\"alert alert-danger\" *ngIf=\"signupForm.controls.re_password.errors?.MatchPassword\">\n        Password not match\n      </div> -->\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n\n          <input type=\"number\" name=\"contact\" formControlName=\"contact\" class=\"form-control\" id=\"contact\" placeholder=\"Enter Your Contact Number\">\n\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n\n          <input type=\"text\" name=\"city\" formControlName=\"city\" class=\"form-control\" id=\"city\" placeholder=\"Enter Your City\">\n\n        </div>\n      </div>\n      <div class=\"membership container\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <button type=\"button\" class=\"button btn btn-lg btn-outline-warning btn-circle\">FREE</button>\n          </div>\n          <div class=\"col\">\n            <p class=\"para\">Membership Options</p>\n          </div>\n          <div class=\"col\">\n            <button type=\"button\" class=\"button btn btn-lg btn-outline-warning btn-circle\">PROFESH</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"submit_button btn-lg btn btn-danger\">Register</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_signup_service__ = __webpack_require__("../../../../../src/app/services/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__password_validation__ = __webpack_require__("../../../../../src/app/signup/password-validation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = (function () {
    function SignupComponent(user, _auth, fb) {
        this.user = user;
        this._auth = _auth;
        this.fb = fb;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            firstname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[a-zA-Z]+')]),
            lastname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[a-zA-Z]+')]),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(30)]),
            re_email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(30)]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(15), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9]*$')]),
            re_password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(15), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9]*$')]),
            city: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[a-zA-Z]+')]),
            contact: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(10)]),
        }, {
            //validator: PasswordValidation.MatchPassword// your validation method
            validator: __WEBPACK_IMPORTED_MODULE_5__password_validation__["a" /* PasswordValidation */].MatchReconfirmation // your validation method
        });
    };
    SignupComponent.prototype.onSubmit = function (data) {
        alert("Registered Successfully.....");
        //console.log("Inside ADDD-----------------", data);
        this.user.save(data);
    };
    SignupComponent.prototype.signIn = function (provider) {
        var _this = this;
        this.sub = this._auth.login(provider).subscribe(function (data) {
            console.log(data);
            _this.User = data;
        });
    };
    SignupComponent.prototype.logout = function () {
        var _this = this;
        this._auth.logout().subscribe(function (data) { console.log(data); _this.User = null; });
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_signup_service__["a" /* SignupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_social_login__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_social_login__["b" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map