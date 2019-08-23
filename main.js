(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apoteka/apoteka.component.css":
/*!***********************************************!*\
  !*** ./src/app/apoteka/apoteka.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 250px;\r\n}\r\ndiv{\r\n    display: inline-block;\r\n    padding: 2% 2% 2% 4%;\r\n\r\n}\r\n.card-body{\r\n    display: inline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBvdGVrYS9hcG90ZWthLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9COztBQUV4QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Fwb3Rla2EvYXBvdGVrYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG5kaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyJSAyJSAyJSA0JTtcclxuXHJcbn1cclxuLmNhcmQtYm9keXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/apoteka/apoteka.component.html":
/*!************************************************!*\
  !*** ./src/app/apoteka/apoteka.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"bg\">Apoteka Online</h1>\r\n\r\n        <div *ngFor=\"let artikal of artikliNiz\"\r\n        (click)=\"select(artikal)\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n                  <img class=\"card-img-top\" src=\"{{artikal.slik}}\">\r\n                  <div class=\"card-body\">\r\n                    <h5 class=\"card-title text-center\">{{artikal.ime}}</h5>\r\n                    <p class=\"card-text text-center\" ><strong>{{artikal.cena}} RSD </strong> </p>\r\n                    \r\n                  </div>\r\n                </div>\r\n            </div>"

/***/ }),

/***/ "./src/app/apoteka/apoteka.component.ts":
/*!**********************************************!*\
  !*** ./src/app/apoteka/apoteka.component.ts ***!
  \**********************************************/
/*! exports provided: ApotekaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApotekaComponent", function() { return ApotekaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dom-zdravlja.service */ "./src/app/dom-zdravlja.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ApotekaComponent = /** @class */ (function () {
    function ApotekaComponent(dz, router) {
        this.dz = dz;
        this.router = router;
        this.artikliNiz = [];
    }
    ApotekaComponent.prototype.get = function () {
        var _this = this;
        this.dz.getArtikal()
            .subscribe(function (response) {
            _this.artikliNiz = response;
        }, function (error) { return console.log(error); });
    };
    ApotekaComponent.prototype.ngOnInit = function () {
        this.get();
    };
    ApotekaComponent.prototype.select = function (artikal) {
        var _this = this;
        // console.log('artikal',artikal);
        setTimeout(function () {
            _this.dz.sendMessage(artikal);
        }, 100);
        this.router.navigate(['/artikal']);
    };
    ApotekaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'dz-apoteka',
            template: __webpack_require__(/*! ./apoteka.component.html */ "./src/app/apoteka/apoteka.component.html"),
            styles: [__webpack_require__(/*! ./apoteka.component.css */ "./src/app/apoteka/apoteka.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_1__["DomZdravljaService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApotekaComponent);
    return ApotekaComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _singup_singup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singup/singup.component */ "./src/app/singup/singup.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _apoteka_apoteka_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apoteka/apoteka.component */ "./src/app/apoteka/apoteka.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _artikal_details_artikal_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./artikal-details/artikal-details.component */ "./src/app/artikal-details/artikal-details.component.ts");
/* harmony import */ var _shop_cart_shop_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shop-cart/shop-cart.component */ "./src/app/shop-cart/shop-cart.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _galerija_galerija_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./galerija/galerija.component */ "./src/app/galerija/galerija.component.ts");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard.service.ts");
/* harmony import */ var _o_nama_o_nama_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./o-nama/o-nama.component */ "./src/app/o-nama/o-nama.component.ts");
/* harmony import */ var _blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blog/blog-post/blog-post.component */ "./src/app/blog/blog-post/blog-post.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");















var routes = [
    { path: 'pocetna', component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'apoteka', component: _apoteka_apoteka_component__WEBPACK_IMPORTED_MODULE_5__["ApotekaComponent"] },
    { path: 'signup', component: _singup_singup_component__WEBPACK_IMPORTED_MODULE_1__["SingupComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"] },
    { path: 'artikal', component: _artikal_details_artikal_details_component__WEBPACK_IMPORTED_MODULE_7__["ArtikalDetailsComponent"] },
    { path: 'viewCart', component: _shop_cart_shop_cart_component__WEBPACK_IMPORTED_MODULE_8__["ShopCartComponent"], canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_11__["GuardService"]] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"] },
    { path: 'galerija', component: _galerija_galerija_component__WEBPACK_IMPORTED_MODULE_10__["GalerijaComponent"] },
    { path: 'oNama', component: _o_nama_o_nama_component__WEBPACK_IMPORTED_MODULE_12__["ONamaComponent"] },
    { path: 'blogPost', component: _blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_13__["BlogPostComponent"], canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_11__["GuardService"]] },
    { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    overflow: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<dz-navbar></dz-navbar>\n\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'DomZdravlja';
    }
    AppComponent.prototype.ngOnInit = function () {
        //firebase.initializeApp({
        // apiKey:"AIzaSyBT_4_8r9oSSXzZpuTjvM0HxR9p6Sbolnc",
        // authDomain:"domzdravlja-1c736.firebaseapp.com"
        //});
    };
    AppComponent.prototype.signOut = function () {
        this.authService.signout();
        this.router.navigate(['/signin']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-zdravlja.service */ "./src/app/dom-zdravlja.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _apoteka_apoteka_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./apoteka/apoteka.component */ "./src/app/apoteka/apoteka.component.ts");
/* harmony import */ var _singup_singup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./singup/singup.component */ "./src/app/singup/singup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _shop_cart_shop_cart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shop-cart/shop-cart.component */ "./src/app/shop-cart/shop-cart.component.ts");
/* harmony import */ var _artikal_details_artikal_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./artikal-details/artikal-details.component */ "./src/app/artikal-details/artikal-details.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blog/blog-post/blog-post.component */ "./src/app/blog/blog-post/blog-post.component.ts");
/* harmony import */ var _galerija_galerija_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./galerija/galerija.component */ "./src/app/galerija/galerija.component.ts");
/* harmony import */ var _o_nama_o_nama_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./o-nama/o-nama.component */ "./src/app/o-nama/o-nama.component.ts");
/* harmony import */ var _blog_current_blog_current_blog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./blog/current-blog/current-blog.component */ "./src/app/blog/current-blog/current-blog.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modal_blog_modal_blog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modal-blog/modal-blog.component */ "./src/app/modal-blog/modal-blog.component.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _core_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _apoteka_apoteka_component__WEBPACK_IMPORTED_MODULE_17__["ApotekaComponent"],
                _singup_singup_component__WEBPACK_IMPORTED_MODULE_18__["SingupComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_19__["SigninComponent"],
                _shop_cart_shop_cart_component__WEBPACK_IMPORTED_MODULE_20__["ShopCartComponent"],
                _artikal_details_artikal_details_component__WEBPACK_IMPORTED_MODULE_21__["ArtikalDetailsComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_22__["BlogComponent"],
                _blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_23__["BlogPostComponent"],
                _galerija_galerija_component__WEBPACK_IMPORTED_MODULE_24__["GalerijaComponent"],
                _o_nama_o_nama_component__WEBPACK_IMPORTED_MODULE_25__["ONamaComponent"],
                _blog_current_blog_current_blog_component__WEBPACK_IMPORTED_MODULE_26__["CurrentBlogComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_27__["PageNotFoundComponent"],
                _modal_blog_modal_blog_component__WEBPACK_IMPORTED_MODULE_29__["ModalBlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD1kkUtBsge1k6hPsdwTtM2xlF1zousILo'
                }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["NO_ERRORS_SCHEMA"]],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_1__["DomZdravljaService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/artikal-details/artikal-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/artikal-details/artikal-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slika{\r\n    width: 300px;\r\n    position: relative;\r\n    left: 25%;\r\n}\r\n.container{\r\n    padding: 0 20%;\r\n}\r\n.form-control{\r\n    width: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWthbC1kZXRhaWxzL2FydGlrYWwtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FydGlrYWwtZGV0YWlscy9hcnRpa2FsLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlrYXtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDI1JTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMCAyMCU7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/artikal-details/artikal-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/artikal-details/artikal-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"bg\">Apoteka Online</h1>\n\n  <div class='container'>\n    <img class=\"slika\" src=\"{{ovajArtikal?.slik}}\" alt=\"{{ovajArtikal?.ime}}\">\n    <h1>{{ovajArtikal?.ime}}</h1>\n    <p style=\"font-size: 26px; font-weight: bold\">{{ovajArtikal?.cena}} RSD <span><i class=\"fa fa-tag\"></i></span> </p>\n    <ng-template [ngIf]= \"authService.prijavljen()\">\n    <label for=\"kolicina\"> Kolicina:</label> <input id=\"kolicina\" [(ngModel)]=\"broj\" name=\"broj\" type=\"number\"\n    class='form-control' >  <br>\n\n    <button  (click)=\"staviUKorpu(ovajArtikal)\" class=\"btn btn-primary\">Add to cart</button>\n\n  </ng-template>\n    <p>Sifra proizvoda: {{ovajArtikal?.sifra}} <span style=\"font-size: 26px;\"><i class=\"fa fa-barcode\"></i></span></p>\n    <h4>Opis proizvoda:</h4>\n    <p>{{ovajArtikal?.opis}}</p>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/artikal-details/artikal-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/artikal-details/artikal-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ArtikalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtikalDetailsComponent", function() { return ArtikalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dom-zdravlja.service */ "./src/app/dom-zdravlja.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");






var ArtikalDetailsComponent = /** @class */ (function () {
    function ArtikalDetailsComponent(dz, router, authService) {
        var _this = this;
        this.dz = dz;
        this.router = router;
        this.authService = authService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.subscription = this.subject.asObservable();
        this.broj = 1;
        this.korpa = [];
        this.subscription = this.dz.getMessage();
        this.subscription.subscribe(function (message) {
            console.log('poruka unutar detailsa componente', message);
            _this.ovajArtikal = message;
        });
        console.log('subscription', this.subscription);
        console.log('ovaj artikallll', this.ovajArtikal);
    }
    ArtikalDetailsComponent.prototype.ngOnInit = function () {
    };
    ArtikalDetailsComponent.prototype.staviUKorpu = function (proizvod) {
        this.ovajArtikal.kolicina = this.broj;
        this.dz.dodajUKorpu(proizvod);
    };
    ArtikalDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'dz-artikal-details',
            template: __webpack_require__(/*! ./artikal-details.component.html */ "./src/app/artikal-details/artikal-details.component.html"),
            styles: [__webpack_require__(/*! ./artikal-details.component.css */ "./src/app/artikal-details/artikal-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_1__["DomZdravljaService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ArtikalDetailsComponent);
    return ArtikalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.registrujKorisnika = function (email, sifra) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, sifra)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.prijaviKorisnika = function (email, sifra) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, sifra)
            .then(function (response) {
            _this.router.navigate(['/']);
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
                .then(function (token) { return _this.token = token; });
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.vratiToken = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.prijavljen = function () {
        return this.token != null;
    };
    AuthService.prototype.signout = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut;
        this.token = null;
        this.router.navigate(['/signin']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/blog/blog-post/blog-post.component.css":
/*!********************************************************!*\
  !*** ./src/app/blog/blog-post/blog-post.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    float:right;\r\n}\r\nimg{\r\n    width:auto;\r\n    height: 180px;\r\n}\r\n.text{\r\n    width: 60%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    line-height: 16px;\r\n    max-height: 50px;\r\n    -webkit-line-clamp: 3;\r\n    text-align: justify;\r\n}\r\n.blog{\r\n    margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLXBvc3QvYmxvZy1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFFckIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2ctcG9zdC9ibG9nLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcbi50ZXh0e1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLmJsb2d7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/blog/blog-post/blog-post.component.html":
/*!*********************************************************!*\
  !*** ./src/app/blog/blog-post/blog-post.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"openModal()\" class=\"btn btn-primary\">Create new post</button>\n\n<br>\n\n<div class=\"row\">\n<h3>Svi postovi</h3>\n</div>\n\n<br>\n\n<div class=\" set container\" >\n  <div class=\"well\" >\n      <div class=\"media blog\" *ngFor=\"let post of postoviNiz\" [ngClass]=\"{'list-group-item-secondary':post === currentPost}\" style=\"border: 1px solid rgb(216, 200, 200)\" >\n        <a class=\"pull-left\" href=\"#\">\n        <img class=\"media-object\"  src=\"{{post.slika}}\">\n      </a>\n      <div class=\"media-body\" style=\"padding-left: 10px;\">\n        <h4 class=\"media-heading\">{{post.naslov}}</h4>\n          <p class=\"text\">{{post.tekst}}</p>\n          <p class=\"text-right\"> <i class=\"fa fa-user-circle\"></i>By Pera</p>\n        <button class=\"btn btn-primary\"  (click)=\"edit(post)\" >Edit post</button>\n       </div>\n    </div>\n  </div>\n  <hr>\n  <dz-current-blog [post]=\"currentPost\"></dz-current-blog>\n</div>\n\n"

/***/ }),

/***/ "./src/app/blog/blog-post/blog-post.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/blog/blog-post/blog-post.component.ts ***!
  \*******************************************************/
/*! exports provided: BlogPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostComponent", function() { return BlogPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dom-zdravlja.service */ "./src/app/dom-zdravlja.service.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_blog_modal_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modal-blog/modal-blog.component */ "./src/app/modal-blog/modal-blog.component.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");







var BlogPostComponent = /** @class */ (function () {
    function BlogPostComponent(dz, authService, modalService, storage) {
        this.dz = dz;
        this.modalService = modalService;
        this.storage = storage;
    }
    BlogPostComponent.prototype.get = function () {
        var _this = this;
        /* this.dz.getPosts()
         .subscribe(
           (response) => {
             this.postoviNiz = response;
           },
           (error) => console.log(error)
         )*/
        this.dz.getImageDetailList();
        this.dz.imageDetailList.snapshotChanges().subscribe(function (list) {
            _this.postoviNiz = list.map(function (item) { return item.payload.val(); });
        });
    };
    BlogPostComponent.prototype.edit = function (post) {
        this.currentPost = post;
    };
    BlogPostComponent.prototype.openModal = function () {
        var modalRef = this.modalService.open(_modal_blog_modal_blog_component__WEBPACK_IMPORTED_MODULE_5__["ModalBlogComponent"]);
        modalRef.result.then(function (result) {
            console.log(result);
        }).catch(function (error) {
            console.log(error);
        });
    };
    BlogPostComponent.prototype.ngOnInit = function () {
        this.get();
    };
    BlogPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dz-blog-post',
            template: __webpack_require__(/*! ./blog-post.component.html */ "./src/app/blog/blog-post/blog-post.component.html"),
            styles: [__webpack_require__(/*! ./blog-post.component.css */ "./src/app/blog/blog-post/blog-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_2__["DomZdravljaService"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
    ], BlogPostComponent);
    return BlogPostComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".set{\r\n    margin: auto;\r\n    padding: 5% 10%;\r\n}\r\nimg{\r\n    width: 200 px;\r\n    height: 220px;\r\n}\r\n.text{\r\n    \r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    line-height: 16px;     /* fallback */\r\n    max-height: 66px;      /* fallback */\r\n    -webkit-line-clamp: 4; /* number of lines to show */\r\n    text-align: justify;\r\n\r\n}\r\n.blog{\r\n    border: 2px solid rgb(210, 230, 230);\r\n    margin: 2em 0;\r\n    padding-right: 15px;\r\n}\r\n.media-body{\r\n    padding-left: 25px;\r\n   }\r\nli{\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixpQkFBaUIsTUFBTSxhQUFhO0lBQ3BDLGdCQUFnQixPQUFPLGFBQWE7SUFDcEMscUJBQXFCLEVBQUUsNEJBQTRCO0lBRW5ELG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7R0FDbkI7QUFDSDtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDUlIDEwJTtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogMjAwIHB4O1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgICBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7ICAgICAvKiBmYWxsYmFjayAqL1xyXG4gICAgbWF4LWhlaWdodDogNjZweDsgICAgICAvKiBmYWxsYmFjayAqL1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiA0OyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblxyXG59XHJcbi5ibG9ne1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIxMCwgMjMwLCAyMzApO1xyXG4gICAgbWFyZ2luOiAyZW0gMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuLm1lZGlhLWJvZHl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgIH1cclxubGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <div class=\" set container\"> \n   <ng-template [ngIf]=\"authService.prijavljen()\"> \n  <i class=\"fa fa-edit\" (click)=\"dodajBlog()\" style=\"font-size: 30px; color:gray; float:right;\"></i>  \n </ng-template>      \n     <div class=\"well\">\n        <div class=\"media blog\" *ngFor=\"let post of postoviNiz\">\n          <a class=\"pull-left\" href=\"#\">\n          <img class=\"media-object\"  src=\"{{post.slika}}\">\n        </a>\n      \n        <div class=\"media-body\" >\n          <h4 class=\"media-heading\">{{post.naslov}}</h4>\n            <p class=\"text-right\"> <i class=\"fa fa-user-circle\"></i>By Pera</p>\n            <p class=\"text\">{{post.tekst}}</p>\n            <ul class=\"list-inline list-unstyled\">\n          <li><span><i class=\"fa fa-calendar\"></i> 2 days, 8 hours </span></li>\n              <li>|</li>\n              <span><i class=\"fa fa-comment\"></i> 2 comments</span>\n              <li>|</li>\n              <li>\n                 <span class=\"fa fa-star\"></span>\n                          <span class=\"fa fa-star\"></span>\n                          <span class=\"fa fa-star\"></span>\n                          <span class=\"fa fa-star\"></span>\n                          <span class=\"fa fa-star-empty\"></span>\n              </li>\n              <li>|</li>\n              <li>\n          \n                <span><i class=\"fa fa-facebook-square\"></i></span>\n                <span><i class=\"fa fa-twitter-square\"></i></span>\n                <span><i class=\"fa fa-google-plus-square\"></i></span>\n              </li>\n        </ul>\n         </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-zdravlja.service */ "./src/app/dom-zdravlja.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var BlogComponent = /** @class */ (function () {
    function BlogComponent(dz, router, authService) {
        this.dz = dz;
        this.router = router;
        this.authService = authService;
    }
    BlogComponent.prototype.dodajBlog = function () {
        this.router.navigate(['/blogPost']);
    };
    /*get(){
      this.dz.getPosts()
      .subscribe(
        (response) => {
          this.postoviNiz = response;
        },
        (error) => console.log(error)
      )
    }*/
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dz.getImageDetailList();
        this.dz.imageDetailList.snapshotChanges().subscribe(function (list) {
            _this.postoviNiz = list.map(function (item) { return item.payload.val(); });
        });
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dz-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_2__["DomZdravljaService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog.model.ts":
/*!************************************!*\
  !*** ./src/app/blog/blog.model.ts ***!
  \************************************/
/*! exports provided: Blog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blog", function() { return Blog; });
var Blog = /** @class */ (function () {
    function Blog(naslov, slika, tekst) {
        this.naslov = naslov;
        this.slika = slika;
        this.tekst = tekst;
    }
    return Blog;
}());



/***/ }),

/***/ "./src/app/blog/current-blog/current-blog.component.css":
/*!**************************************************************!*\
  !*** ./src/app/blog/current-blog/current-blog.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvY3VycmVudC1ibG9nL2N1cnJlbnQtYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog/current-blog/current-blog.component.html":
/*!***************************************************************!*\
  !*** ./src/app/blog/current-blog/current-blog.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n  <h1>Naziv: {{post.naslov}}</h1>\n  <div class=\"input-group\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.naslov\">\n  </div>\n  <h4>url: {{post.slika}} </h4>\n  <div class=\"input-group\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.slika\">\n  </div>\n  <h4>Tekst: {{post.tekst}} </h4>\n  <div class=\"input-group\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"post.tekst\">\n  </div>\n  <br>\n  <button type=\"button\"\n  class=\"btn btn-secondary float-right\">Save</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/blog/current-blog/current-blog.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/blog/current-blog/current-blog.component.ts ***!
  \*************************************************************/
/*! exports provided: CurrentBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentBlogComponent", function() { return CurrentBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dom-zdravlja.service */ "./src/app/dom-zdravlja.service.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _blog_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blog.model */ "./src/app/blog/blog.model.ts");





var CurrentBlogComponent = /** @class */ (function () {
    function CurrentBlogComponent(dz, authService) {
        this.dz = dz;
    }
    CurrentBlogComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _blog_model__WEBPACK_IMPORTED_MODULE_4__["Blog"])
    ], CurrentBlogComponent.prototype, "post", void 0);
    CurrentBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dz-current-blog',
            template: __webpack_require__(/*! ./current-blog.component.html */ "./src/app/blog/current-blog/current-blog.component.html"),
            styles: [__webpack_require__(/*! ./current-blog.component.css */ "./src/app/blog/current-blog/current-blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_2__["DomZdravljaService"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CurrentBlogComponent);
    return CurrentBlogComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/core/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n  width: 100%;\r\n  margin-top: 5%;\r\n}\r\n.medic{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.text-justify{\r\n  text-align: center;\r\n  position: relative;\r\n  left: 5%;\r\n  top:20%;\r\n}\r\n.text-center{\r\n  position: relative;\r\n  top:10%;\r\n}\r\n.card{\r\n  height: 180px;\r\n  width: auto;\r\n  text-align: center;\r\n  top: 10%;\r\n}\r\n.card-body{\r\n padding: 0;\r\n}\r\n.btn {\r\n  border-radius: 5%;\r\n  text-align: center;\r\n  margin-right: 10px;\r\n  font-weight: bold;\r\n  color: #5f4203;\r\n  font-size: 15px;\r\n  \r\n\r\n}\r\n.card-title{\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  padding-bottom: 10px\r\n}\r\n.card-img-top {\r\n  height: 300px;\r\n  width: 290x;\r\n}\r\n#car-indicators {\r\n  margin-top: 50px;\r\n}\r\n.carousel-indicators li {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 10px;\r\n  text-indent: 0;\r\n  cursor: pointer;\r\n  background-color:black;\r\n  \r\n}\r\n.carousel-indicators .active {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 10px;\r\n \r\n}\r\n.divcar .carousel-control-prev,  .carousel-control-next  {\r\n  font-size: 60px;\r\n  color:black;\r\n  height: 470px;\r\n  width: 80px;\r\n}\r\n.carousel-control-next{\r\nright: 3%;\r\n}\r\n#bigdiv {\r\n  margin-bottom: 30px;\r\n  margin-top: 15px;\r\n  padding-left: 50px;\r\n}\r\n#sale  {\r\n  width: 100px;\r\n  height: 100px;\r\n  margin-left: 80px;\r\n  margin-right: 150px;\r\n}\r\n#sale2  {\r\n  width: 300px;\r\n  height: auto;\r\n  \r\n \r\n}\r\nvideo {\r\nheight: 300px;\r\nwidth: 600px;\r\npadding: 10px;\r\n}\r\n.audio {\r\nwidth: 400px;\r\n\r\n}\r\ntable {\r\n\r\n    margin-left:auto; \r\n    margin-right:auto;\r\n  \r\n}\r\ntd {\r\nfont-weight: bold;\r\n}\r\n#about{\r\nwidth: 80%;\r\nheight: 250px;\r\nbackground-image: url('medical-563427_1920.jpg');\r\nbackground-size: cover;\r\nposition: relative;\r\nleft:10%;\r\nmargin-bottom: 3em;\r\n\r\n}\r\nh5{\r\nposition: relative;\r\nleft:45%;\r\npadding-bottom: 1em;\r\ncolor:tomato;\r\n}\r\n.about{\r\ncolor: tomato;\r\nposition: relative;\r\ntop:20%;\r\ntext-align: justify;\r\nwidth:80%;\r\nfont-size: 18px;\r\n}\r\n.adresa{\r\nposition: relative;\r\nleft:10%;\r\n}\r\n.forma{\r\nmargin-top: 5em;\r\n}\r\ninput{\r\nwidth:60%;\r\nfloat: right;\r\n}\r\nlabel{\r\npadding: 1em;\r\n}\r\n.showMore{\r\nposition: relative;\r\nleft:46%;\r\n}\r\n.gal{\r\nwidth:150px;\r\nheight: 150px;\r\npadding: 5px;\r\n}\r\n.galeryItems{\r\nposition: relative;\r\nleft:30%;\r\n}\r\n.alert{\r\ntext-align: center;\r\nleft: 50%;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztBQUNUO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztBQUNUO0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFHQTtDQUNDLFVBQVU7QUFDWDtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlOzs7QUFHakI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Y7QUFDRjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixzQkFBc0I7O0FBRXhCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7O0FBRWQ7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0FBQ0EsU0FBUztBQUNUO0FBSUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUdBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTs7O0FBR2Q7QUFLQTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1osYUFBYTtBQUNiO0FBRUE7QUFDQSxZQUFZOztBQUVaO0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUdBO0FBQ0EsVUFBVTtBQUNWLGFBQWE7QUFDYixnREFBb0U7QUFDcEUsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixRQUFRO0FBQ1Isa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixtQkFBbUI7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLE9BQU87QUFDUCxtQkFBbUI7QUFDbkIsU0FBUztBQUNULGVBQWU7QUFDZjtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUjtBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBRUE7QUFDQSxTQUFTO0FBQ1QsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixRQUFRO0FBQ1I7QUFDQTtBQUNBLFdBQVc7QUFDWCxhQUFhO0FBQ2IsWUFBWTtBQUNaO0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsUUFBUTtBQUNSO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLm1lZGlje1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4udGV4dC1qdXN0aWZ5e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNSU7XHJcbiAgdG9wOjIwJTtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDoxMCU7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRvcDogMTAlO1xyXG59XHJcblxyXG5cclxuLmNhcmQtYm9keXtcclxuIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM1ZjQyMDM7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIFxyXG5cclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3Age1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDI5MHg7XHJcbn1cclxuXHJcbiNjYXItaW5kaWNhdG9ycyB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHRleHQtaW5kZW50OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gIFxyXG59XHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiBcclxufVxyXG5cclxuLmRpdmNhciAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LCAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCAge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBjb2xvcjpibGFjaztcclxuICBoZWlnaHQ6IDQ3MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0e1xyXG5yaWdodDogMyU7XHJcbn1cclxuXHJcblxyXG5cclxuI2JpZ2RpdiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG5cclxuXHJcbiNzYWxlICB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuI3NhbGUyICB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBcclxuIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG52aWRlbyB7XHJcbmhlaWdodDogMzAwcHg7XHJcbndpZHRoOiA2MDBweDtcclxucGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmF1ZGlvIHtcclxud2lkdGg6IDQwMHB4O1xyXG5cclxufVxyXG5cclxudGFibGUge1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgXHJcbn1cclxuXHJcbnRkIHtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4jYWJvdXR7XHJcbndpZHRoOiA4MCU7XHJcbmhlaWdodDogMjUwcHg7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbWVkaWNhbC01NjM0MjdfMTkyMC5qcGdcIik7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxubGVmdDoxMCU7XHJcbm1hcmdpbi1ib3R0b206IDNlbTtcclxuXHJcbn1cclxuaDV7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxubGVmdDo0NSU7XHJcbnBhZGRpbmctYm90dG9tOiAxZW07XHJcbmNvbG9yOnRvbWF0bztcclxufVxyXG4uYWJvdXR7XHJcbmNvbG9yOiB0b21hdG87XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOjIwJTtcclxudGV4dC1hbGlnbjoganVzdGlmeTtcclxud2lkdGg6ODAlO1xyXG5mb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5hZHJlc2F7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxubGVmdDoxMCU7XHJcbn1cclxuXHJcbi5mb3JtYXtcclxubWFyZ2luLXRvcDogNWVtO1xyXG59XHJcblxyXG5pbnB1dHtcclxud2lkdGg6NjAlO1xyXG5mbG9hdDogcmlnaHQ7XHJcbn1cclxubGFiZWx7XHJcbnBhZGRpbmc6IDFlbTtcclxufVxyXG4uc2hvd01vcmV7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxubGVmdDo0NiU7XHJcbn1cclxuLmdhbHtcclxud2lkdGg6MTUwcHg7XHJcbmhlaWdodDogMTUwcHg7XHJcbnBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmdhbGVyeUl0ZW1ze1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmxlZnQ6MzAlO1xyXG59XHJcbi5hbGVydHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5sZWZ0OiA1MCU7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/core/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\n  <div class=\"row bg-primary\" style=\"width: 100%; margin:0 ; padding: 0\">\n        <div class=\"col-6\" style=\"padding-left: 0; padding-right: 0;\" >\n              <img  class=\"medic\" src=\"../../../assets/img/medical-563427_1920.jpg\" alt=\"\">\n        </div>\n        <div class=\"col-6 bg-dark \" style=\"padding: 0 10% \" >\n              <h1 class=\"text-center\" style=\"color:tomato;\">LavMedic</h1>\n              <p  class=\"text-justify text-white \"> LavMedic je specijalistička ordinacija iz oblasti interne medicine.\n                    Tim lekara,koji pruža najkvalitetniju zdravstvenu uslugu u ordinaciji LavMedic,  dokazani su stručnjaci u svojim oblastima i poseduju dugogodišnje kliničko iskustvo.\n                    Naši konsultanti u kratkom vremenskom roku, dijagnostikuju zdravstveni problem, predlažu dalji tok lečenja i prate pacijenta kroz obavezne kontrole.</p>\n        </div>\n  </div>\n  \n  <div id=\"bigdiv\" class=\"container py-3 bg-dark\" >\n          <div class=\"carousel slide\" data-ride=\"carousel\" id=\"multi_item\">\n            <div class=\"carousel-inner v-2\" role=\"listbox\">\n              <div class=\"carousel-item active\" >\n                <div class=\"row\">\n                  <div class=\"col-12 col-md-4 item\">\n                    <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                      <a  [routerLink]=\"['/apoteka']\">\n                        <img class=\"card-img-top\" src=\"../../../assets/img/slika_6.jpg\" alt=\"Solgar Folat\">\n                      </a>\n                      <div class=\"card-body\">\n                        <h4 class=\"card-title\">Folat 400</h4>\n                        <p class=\"card-info\">1800 RSD </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                        <a [routerLink]=\"['/apoteka']\">\n                          <img class=\"card-img-top\" src=\"../../../assets/img/slika_5.jpg\" alt=\"Magnezijum\">\n                        </a>\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">Magnezijum</h4>\n                            <p class=\"card-info\">1800 RSD </p>\n                          </div>\n                        </div>\n                  </div>\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                        <a [routerLink]=\"['/apoteka']\">\n                          <img class=\"card-img-top\" src=\"../../../assets/img/slika_4.jpg\" alt=\"B-Complex\">\n                        </a>\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">B-Complex</h4>\n                            <p class=\"card-info\">1800 RSD </p>\n                          </div>\n                      </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"carousel-item\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                        <a [routerLink]=\"['/apoteka']\">\n                          <img class=\"card-img-top\" src=\"../../../assets/img/slika_3.jpg\" alt=\"Selen 100\">\n                        </a>\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">Selen 100</h4>\n                            <p class=\"card-info\">1800 RSD </p>\n                          </div>\n                        </div>\n                  </div>\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                        <a [routerLink]=\"['/apoteka']\">\n                          <img class=\"card-img-top\" src=\"../../../assets/slika_2.jpg\" alt=\"Vitamin D3\">\n                        </a>\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">Vitamin D3</h4>\n                            <p class=\"card-info\">1800 RSD </p>\n                          </div>\n                        </div>\n                  </div>\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                        <a [routerLink]=\"['/apoteka']\">\n                          <img class=\"card-img-top\" src=\"../../../assets/slika_1.jpg\" alt=\"Antioksidant\">\n                        </a>\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">Antioksidant</h4>\n                            <p class=\"card-info\">1800 RSD </p>\n                          </div>\n                        </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n  \n  \n            <div class=\"divcar\" >\n            <a class=\"carousel-control-prev\" href=\"#multi_item\" role=\"button\" data-slide=\"prev\">\n                <i class=\"fa fa-chevron-circle-left\"></i>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n          </div >\n          <div>\n              <a class=\"carousel-control-next\" href=\"#multi_item\" role=\"button\" data-slide=\"next\">\n                  <i class=\"fa fa-chevron-circle-right\"></i>\n                <span class=\"sr-only\">Next</span>\n              </a>\n          </div>\n  \n            <div id=\"car-indicators\">\n                <ol class=\"carousel-indicators\">\n                  <li data-target=\"#multi_item\" data-slide-to=\"0\" class=\"active\"></li>\n                  <li data-target=\"#multi_item\" data-slide-to=\"1\"></li>\n                </ol>\n              </div>\n          </div>\n        </div>\n  \n        <div class=\"text-center video \">\n          <video controls src=\"../../../assets/video/Prvi ginekoloski pregled.mp4\">\n          </video>\n  \n          <table>\n            <tr>\n              <th></th>\n              <th></th>\n            </tr>\n            <tr>\n              <td>Anksioznost</td>\n              <td>\n                  <audio controls=\"controls\" id=\"audio\">\n                      <source src=\"../../../assets/audio/y2mate.com - anksioznost_simptomi_KWBE2wQggNo.mp3\" type=\"audio/mp3\"/>\n               </audio>\n              </td>\n          </tr>\n          <tr>\n            <td>Endometrioza</td>\n            <td>\n                <audio controls=\"controls\" id=\"audio\">\n                    <source src=\"../../../assets/audio/y2mate.com - endometrioza_kao_uzrok_neplodnosti_new_life_o3wHhkyWKfs.mp3\" type=\"audio/mp3\"/>\n             </audio>\n            </td>\n        </tr>\n        <tr>\n          <td>Epilepsija</td>\n          <td>\n              <audio controls=\"controls\" id=\"audio\">\n                  <source src=\"../../../assets/audio/y2mate.com - epilepsije__0Yjc7VCdbo.mp3\" type=\"audio/mp3\"/>\n           </audio>\n          </td>\n      </tr>\n      <tr>\n        <td>Trudnoca</td>\n        <td>\n            <audio controls=\"controls\" id=\"audio\">\n                <source src=\"../../../assets/audio/y2mate.com - prvi_korak_prvi_simptomi_trudnoe_9ZDBJt_NXBU.mp3\" type=\"audio/mp3\"/>\n         </audio>\n        </td>\n    </tr>\n          </table>\n        </div>\n        <hr>\n  <!---Kraj video/audio-->\n  <!----Galerija-->\n  <div class=\"galerijaDiv\">\n    <div class=\"galeryItems\" >\n        <a href=\"assets/img/gallery/1.jpg\" data-lightbox=\"gal\"><img class=\"gal\" src=\"assets/img/gallery/1.jpg\" alt=\"Image 1\"></a>\n        <a href=\"assets/img/gallery/2.jpg\" data-lightbox=\"gal\"><img class=\"gal\" src=\"assets/img/gallery/2.jpg\" alt=\"Image 2\"></a>\n        <a href=\"assets/img/gallery/3.jpg\" data-lightbox=\"gal\"><img class=\"gal\" src=\"assets/img/gallery/3.jpg\" alt=\"Image 3\"></a>\n         <br>\n        <a href=\"assets/img/gallery/4.jpg\" data-lightbox=\"gal\"><img class=\"gal\" src=\"assets/img/gallery/4.jpg\" alt=\"Image 4\"></a>\n        <a href=\"assets/img/gallery/5.jpg\" data-lightbox=\"gal\"><img class=\"gal\" src=\"assets/img/gallery/5.jpg\" alt=\"Image 5\"></a>\n        <a href=\"assets/img/gallery/6.jpg\" data-lightbox=\"gal\"><img class=\"gal\" src=\"assets/img/gallery/6.jpg\" alt=\"Image 6\"></a>\n      </div>\n      <button (click)=\"vidiGaleriju()\" class=\"btn btn-primary text-dark showMore \">Show more</button>\n  </div>\n  \n  <!---Kraj galerije-->\n       <br>\n       <!--About-->\n       <div class=\"row\" id=\"about\" (click)=\"about()\">\n       <h5 class=\"text-center\"> <strong> Vise o nama...</strong></h5>\n       <br>\n       <p class=\"about text-center\"> LavMedic organuzuje i <strong> kućnu posetu</strong> za pacijente koji nisu u mogućnosti da zbog složenosti svog zdravstvenog stanja dođu do ordinacije.\n        <br>\n        Pored navedenih usluga, ordinacija pruža usluge psihologa, kao i porodičnog i bračnog psihoterapeuta.\n        <br>\n        LavMedic ima  mogućnost organizovanja <strong> sistematskih pregleda</strong>.\n        <br>\n        Kod nas možete uraditi laboratorijske analize <strong> krvi </strong> i <strong> urina</strong>.\n      </p>\n    </div>\n    <!---Kraj about-->\n      <!--Forma-->\n       <div class=\"row forma\">\n  \n         <div class=\"col-md-4 text-left pt-2 adresa\">\n          <h3>Adresa</h3>\n        <p>Novi Sad,Čerevićka 40<br>\n            21124 Adice,<br>\n            Volej.<br>\n  \n            Contact: +381638764321<br>\n            Email: lavmedic@gmail.com<br>\n  \n         </p>\n         </div>\n            <div class=\"col-md-8 text-right\">\n  \n  \n  \n            <form role=\"form\" class=\"contact-form\"  #forma=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\" >\n  \n          <div class=\"form-group\">\n              <i class=\"fa fa-user\" ></i> <label for=\"name\">Ime:</label>\n              <input type=\"text\" class=\"form-control\" name=\"ime\" id=\"ime\" placeholder=\"Unesite ime\" ngModel #ime=\"ngModel\" required>\n              <div *ngIf=\"ime.errors && (ime.dirty || ime.touched)\" class=\"alert alert-danger col-md-6\">\n                  <div [hidden]=\"!ime.errors.required\">Unesite ime.</div>\n              </div>\n            </div>\n          <div class=\"form-group\">\n            <i class=\"fa fa-envelope-square\"></i><label for=\"email\">Email:</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Unesite email\" ngModel #email =\"ngModel\" required>\n            <div *ngIf=\"email.errors && (email.dirty ||email.touched)\" class=\"alert alert-danger col-md-6\">\n                <div [hidden]=\"!email.errors.required\">Unesite email.</div>\n                <div [hidden]=\"!email.errors.email\">Unesite validan email.</div>\n         </div>\n    </div>\n          <div class=\"form-group\">\n            <i class=\"fa fa-phone\"></i><label for=\"mobile\">Telefon :</label>\n            <input type=\"tel\" class=\"form-control\" name=\"tel\" id=\"tel\"  placeholder=\"Unesite broj telefona\" ngModel #tel=\"ngModel\" required>\n          <div *ngIf=\"tel.errors && (tel.dirty || tel.touched)\" class=\"alert alert-danger col-md-6\">\n              <div [hidden]=\"!tel.errors.required\">Unesite broj telefona.</div>\n            </div>\n          </div>\n  \n          <div class=\"form-group\">\n            <label for=\"messages\">Message :</label>\n          <textarea class=\"form-control\" name=\"message\" id=\"message\" rows=\"2\"></textarea>\n  \n          </div>\n  \n  \n          <button class=\"btn btn-dark text-light\" type=\"submit\" [disabled]=\"!forma.form.valid\">Submit</button>\n  \n            </form>\n  \n            </div>\n            <!--Kraj forme-->\n  \n            <!--  <div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe width=\"600\" height=\"500\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=cerevicka%2040&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a href=\"https://www.embedgooglemap.net/blog/best-wordpress-themes/\"></a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div> -->\n  \n  \n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" (mapClick)=\"onLocation($event)\">\n              <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n            </agm-map>\n  \n            </div>\n  "

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dom-zdravlja.service */ "./src/app/dom-zdravlja.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(dz, router) {
        this.dz = dz;
        this.router = router;
        this.lat = 45.2254364;
        this.lng = 19.8063578;
        this.artikliNiz = [];
    }
    HomeComponent.prototype.vidiGaleriju = function () {
        this.router.navigate(['/galerija']);
    };
    HomeComponent.prototype.get = function () {
        var _this = this;
        this.dz.getArtikal()
            .subscribe(function (response) {
            _this.artikliNiz = response;
        }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.get();
    };
    HomeComponent.prototype.about = function () {
        this.router.navigate(['/oNama']);
    };
    HomeComponent.prototype.onSubmit = function () {
        alert("Forma uspesno poslata!");
    };
    HomeComponent.prototype.onLocation = function (event) {
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dz-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/core/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_2__["DomZdravljaService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    \r\n    font-size: 20px;\r\n}\r\n.lav {\r\n    font-size: 30px;\r\n}\r\n.social{\r\n    color:tomato;\r\n    padding-right: 1em;\r\n    font-size:20px;\r\n}\r\n.fb{\r\n    padding-right: 2em;\r\n}\r\n.btn {\r\n    background-color: tomato;\r\n    color: white;\r\n}\r\n.sign{\r\n    font-size: 12px;\r\n}\r\n.cart {\r\n    padding-right: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpe1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmxhdiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnNvY2lhbHtcclxuICAgIGNvbG9yOnRvbWF0bztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG59XHJcbi5mYntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcclxufVxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2lnbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2FydCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-primary\" style=\"margin-bottom: 2em;\">\n  <a class=\"navbar-brand text-white lav\" routerLink =\"pocetna\">\n    <span style=\"font-size: 1em; color: Tomato;\"> <i class=\"fa fa-heartbeat\"></i> </span>  LavMedic</a>\n\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link text-white\" routerLink =\"pocetna\" >Početna</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-white\" routerLink =\"oNama\">O nama</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link text-white\" routerLink =\"blog\">Blog</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link text-white\" routerLink =\"galerija\">Galerija</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link text-white\" routerLink =\"apoteka\">Apoteka</a>\n        </li>\n    </ul>\n    <div class=\"fb\">\n    <a href=\"#\"><span class=\"social\"><i class=\"fa fa-facebook\"></i></span></a>\n    <a href=\"\"><span class=\"social\"><i class=\"fa fa-instagram\"></i></span></a>\n    <a href=\"\"><span class=\"social\"><i class=\"fa fa-linkedin\"></i></span></a>\n  </div>\n  <div>\n    <a class=\"text-white cart\" routerLink =\"viewCart\"><span><i class=\"fa fa-shopping-cart\"></i></span></a>\n\n  </div>\n    <ng-template   [ngIf]=\"!authService.prijavljen()\" >\n  <ul class=\"nav navbar-nav navbar-right\">\n    <li class=\"nav-item\"><a class=\"nav-link text-white sign\" routerLink =\"signup\"><span><i class=\"fa fa-user\"></i></span> Sign Up</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link text-white sign\" routerLink = \"signin\"><span><i class=\"fa fa-sign-in\"></i></span> Sign In</a></li>\n  </ul>\n</ng-template>\n<ng-template   [ngIf]=\"authService.prijavljen()\">\n  <ul class=\"nav navbar-nav navbar-right\">\n    <li class=\"nav-item\" style=\"cursor: pointer\" (click)=\"signout()\"><a class=\"nav-link text-white sign\" ><span><i class=\"fa fa-sign-in\"></i></span> Sign out</a></li>\n  </ul>\n</ng-template>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.signout = function () {
        this.authService.signout();
        this.router.navigate(['/signin']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dz-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/core/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/core/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/dom-zdravlja.service.ts":
/*!*****************************************!*\
  !*** ./src/app/dom-zdravlja.service.ts ***!
  \*****************************************/
/*! exports provided: DomZdravljaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomZdravljaService", function() { return DomZdravljaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");






var DomZdravljaService = /** @class */ (function () {
    function DomZdravljaService(httpClient, authService, firebase) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.firebase = firebase;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.korpa = [];
    }
    DomZdravljaService.prototype.getImageDetailList = function () {
        this.imageDetailList = this.firebase.list('imageDetails');
    };
    DomZdravljaService.prototype.insertImageDetails = function (imageDetails) {
        this.imageDetailList.push(imageDetails);
    };
    DomZdravljaService.prototype.getArtikal = function () {
        return this.httpClient.get('https://domzdravlja-1c736.firebaseio.com/Artikal.json');
    };
    DomZdravljaService.prototype.sendMessage = function (message) {
        console.log(' send message servisa', message);
        this.subject.next(message);
    };
    DomZdravljaService.prototype.clearMessage = function () {
        this.subject.next();
    };
    DomZdravljaService.prototype.getMessage = function () {
        console.log('get message metoda servisa');
        return this.subject.asObservable();
    };
    DomZdravljaService.prototype.dodajUKorpu = function (proizvod) {
        this.korpa.push(proizvod);
    };
    DomZdravljaService.prototype.uzmiPredmete = function () {
        return this.korpa;
    };
    DomZdravljaService.prototype.ocistiKorpu = function () {
        this.korpa = [];
        return this.korpa;
    };
    DomZdravljaService.prototype.getPosts = function () {
        return this.httpClient.get('https://domzdravlja-1c736.firebaseio.com/Blog.json');
    };
    DomZdravljaService.prototype.savePosts = function (posts) {
        var token = this.authService.vratiToken();
        return this.httpClient.put('https://domzdravlja-1c736.firebaseio.com/Blog.json?auth=' + token, posts);
    };
    DomZdravljaService.prototype.saveOrders = function (order) {
        var token = this.authService.vratiToken();
        return this.httpClient.put('https://domzdravlja-1c736.firebaseio.com/porudzbine.json?auth=' + token, order);
    };
    DomZdravljaService.prototype.getOrders = function () {
        return this.httpClient.get('https://domzdravlja-1c736.firebaseio.com/porudzbine.json');
    };
    DomZdravljaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], DomZdravljaService);
    return DomZdravljaService;
}());



/***/ }),

/***/ "./src/app/galerija/galerija.component.css":
/*!*************************************************!*\
  !*** ./src/app/galerija/galerija.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width:200px;\r\n    height: 200px;\r\n    padding: 5px;\r\n    -webkit-filter:grayscale(100%);\r\n            filter:grayscale(100%);\r\n    transition: 1s;\r\n}\r\nimg:hover{\r\n    -webkit-filter:grayscale(0);\r\n            filter:grayscale(0);\r\n    transform:scale(1.1)\r\n}\r\nsection{\r\n    position:relative;\r\n    left:3%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsZXJpamEvZ2FsZXJpamEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQjtBQUNKO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsT0FBTztBQUNYIiwiZmlsZSI6InNyYy9hcHAvZ2FsZXJpamEvZ2FsZXJpamEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZpbHRlcjpncmF5c2NhbGUoMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5pbWc6aG92ZXJ7XHJcbiAgICBmaWx0ZXI6Z3JheXNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMSlcclxufVxyXG5zZWN0aW9ue1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBsZWZ0OjMlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/galerija/galerija.component.html":
/*!**************************************************!*\
  !*** ./src/app/galerija/galerija.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"portfolio\" id=\"portfolio\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"gallery col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <h1 class=\"gallery-title text-center\">Galerija</h1>\n      </div>\n\n\n\n<div class=\"gallery_product col-sm-3 col-xs-6 filter category1\">\n  <a class=\"fancybox\" rel=\"ligthbox\" href=\"assets/img/gallery/1.jpg\"data-lightbox=\"gallery\">\n      <img class=\"img-responsive\" alt=\"\" src=\"assets/img/gallery/1.jpg\" />\n      </a>\n</div>\n\n<div class=\"gallery_product col-sm-3 col-xs-6 filter category2\">\n  <a class=\"fancybox\" rel=\"ligthbox\" href=\"assets/img/gallery/2.jpg\" data-lightbox=\"gallery\">\n      <img class=\"img-responsive\" alt=\"\" src=\"assets/img/gallery/2.jpg\" />\n  </a>\n</div>\n\n<div class=\"gallery_product col-sm-3 col-xs-6 filter category3\">\n   <a class=\"fancybox\" rel=\"ligthbox\" href=\"assets/img/gallery/3.jpg\" data-lightbox=\"gallery\">\n      <img class=\"img-responsive\" alt=\"\" src=\"assets/img/gallery/3.jpg\" />\n      </a>\n</div>\n\n<div class=\"gallery_product col-sm-3 col-xs-6 filter category1\">\n  <a class=\"fancybox\" rel=\"ligthbox\" href=\"assets/img/gallery/4.jpg\" data-lightbox=\"gallery\">\n      <img class=\"img-responsive\" alt=\"\" src=\"assets/img/gallery/4.jpg\" />\n      </a>\n</div>\n\n<div class=\"gallery_product col-sm-3 col-xs-6 filter category2\">\n  <a class=\"fancybox\" rel=\"ligthbox\" href=\"assets/img/gallery/5.jpg\" data-lightbox=\"gallery\">\n      <img class=\"img-responsive\" alt=\"\" src=\"assets/img/gallery/5.jpg\" />\n      </a>\n</div>\n\n<div class=\"gallery_product col-sm-3 col-xs-6 filter category3\">\n  <a class=\"fancybox\" rel=\"ligthbox\" href=\"assets/img/gallery/6.jpg\" data-lightbox=\"gallery\">\n      <img class=\"img-responsive\" alt=\"\" src=\"assets/img/gallery/6.jpg\" />\n      </a>\n</div>\n\n<div class=\"gallery_product col-sm-3 col-xs-6 filter category3\">\n<a class=\"fancybox\" rel=\"ligthbox\" href=\"assets/img/gallery/7.jpg\" data-lightbox=\"gallery\">\n    <img class=\"img-responsive\" alt=\"\" src=\"assets/img/gallery/7.jpg\" />\n</a>\n</div>\n\n<div class=\"gallery_product col-sm-3 col-xs-6 filter category3\">\n<a class=\"fancybox\" rel=\"ligthbox\" href=\"assets/img/gallery/8.jpg\" data-lightbox=\"gallery\">\n    <img class=\"img-responsive\" alt=\"\" src=\"assets/img/gallery/8.jpg\" />\n</a>\n</div>\n\n</div>\n</div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/galerija/galerija.component.ts":
/*!************************************************!*\
  !*** ./src/app/galerija/galerija.component.ts ***!
  \************************************************/
/*! exports provided: GalerijaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalerijaComponent", function() { return GalerijaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalerijaComponent = /** @class */ (function () {
    function GalerijaComponent() {
    }
    GalerijaComponent.prototype.ngOnInit = function () {
    };
    GalerijaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dz-galerija',
            template: __webpack_require__(/*! ./galerija.component.html */ "./src/app/galerija/galerija.component.html"),
            styles: [__webpack_require__(/*! ./galerija.component.css */ "./src/app/galerija/galerija.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalerijaComponent);
    return GalerijaComponent;
}());



/***/ }),

/***/ "./src/app/guard.service.ts":
/*!**********************************!*\
  !*** ./src/app/guard.service.ts ***!
  \**********************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var GuardService = /** @class */ (function () {
    function GuardService(authService) {
        this.authService = authService;
    }
    GuardService.prototype.canActivate = function (route, state) {
        return this.authService.prijavljen();
    };
    GuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/modal-blog/modal-blog.component.css":
/*!*****************************************************!*\
  !*** ./src/app/modal-blog/modal-blog.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWJsb2cvbW9kYWwtYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal-blog/modal-blog.component.html":
/*!******************************************************!*\
  !*** ./src/app/modal-blog/modal-blog.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\n  <h4 class=\"modal-title\">Dodaj blog:</h4>\n  <button class=\"close\" type=\"button\" aria-label=\"Close\"\n          (click)=\"activeModal.dismiss('Cross click')\">\n    </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"formTemplate\" (submit)=\"onSubmit(formTemplate.value)\">\n    <div class=\"form-group\">\n    <label for=\"naslov\">Naslov:</label>\n    <input type=\"text\" class=\"form-control\" formControlName='naslov'>\n    <div class=\"text-danger\" *ngIf=\"isSubmited && formControls.naslov.errors?.required\">\n        This field is required.\n      </div>\n  </div>\n  <div class=\"text-center\">\n  <img [src]=\"imgSrc\" width=\"300px\" height=\"250px\" (click)=\"fileUploader.click()\" >\n</div>\n  <div class=\"form-group\">\n    <label for=\"slika\">Slika:</label>\n    <input type=\"file\" class=\"form-control\" #fileUploader  formControlName='slika' id=\"file1\" (change)=\"ucitajSliku($event)\" accept=\"image/*\">\n    <div class=\"text-danger\" *ngIf=\"isSubmited && formControls.slika.errors?.required\">\n      This field is required.\n    </div>\n  </div>\n    <br>\n    <div class=\"form-group\">\n        <label for=\"tekst\">Tekst:</label>\n        <input type=\"text\" class=\"form-control\"  formControlName='tekst' id=\"tekst\" >\n        <br>\n        <div class=\"text-danger\" *ngIf=\"isSubmited && formControls.tekst.errors?.required\">\n            This field is required.\n          </div>\n      </div>\n    <br>\n<div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-success float-right\">Upload</button>\n  </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button (click)= \"activeModal.dismiss('Close clicked')\"></button>\n</div>\n"

/***/ }),

/***/ "./src/app/modal-blog/modal-blog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modal-blog/modal-blog.component.ts ***!
  \****************************************************/
/*! exports provided: ModalBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBlogComponent", function() { return ModalBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dom-zdravlja.service */ "./src/app/dom-zdravlja.service.ts");








var ModalBlogComponent = /** @class */ (function () {
    function ModalBlogComponent(http, activeModal, storage, dz) {
        this.http = http;
        this.activeModal = activeModal;
        this.storage = storage;
        this.dz = dz;
        this.selectedImage = null;
        this.formTemplate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            naslov: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            slika: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            tekst: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    ModalBlogComponent.prototype.ucitajSliku = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) { return _this.imgSrc = e.target.result; };
            reader.readAsDataURL(event.target.files[0]);
            this.selectedImage = event.target.files[0];
        }
        else {
            this.imgSrc = '../../assets/placeholder.jpg';
            this.selectedImage = null;
        }
    };
    ModalBlogComponent.prototype.closeModal = function () {
        this.activeModal.close('Modal closed');
    };
    Object.defineProperty(ModalBlogComponent.prototype, "formControls", {
        get: function () {
            return this.formTemplate['controls'];
        },
        enumerable: true,
        configurable: true
    });
    ModalBlogComponent.prototype.resetForm = function () {
        this.formTemplate.reset();
        this.formTemplate.setValue({
            naslov: '',
            slika: '',
            tekst: ''
        });
        this.imgSrc = '../../assets/placeholder.jpg';
        this.selectedImage = null;
        this.isSubmited = false;
    };
    ModalBlogComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        this.isSubmited = true;
        if (this.formTemplate.valid) {
            var filePath = "images/" + this.selectedImage.name.split('.').slice(0, -1).join('.') + "_" + new Date().getTime();
            var fileRef_1 = this.storage.ref(filePath);
            this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                fileRef_1.getDownloadURL().subscribe(function (url) {
                    formValue['slika'] = url;
                    _this.dz.insertImageDetails(formValue);
                    _this.resetForm();
                });
            })).subscribe();
        }
    };
    ModalBlogComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    ModalBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dz-modal-blog',
            template: __webpack_require__(/*! ./modal-blog.component.html */ "./src/app/modal-blog/modal-blog.component.html"),
            styles: [__webpack_require__(/*! ./modal-blog.component.css */ "./src/app/modal-blog/modal-blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"], _dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_7__["DomZdravljaService"]])
    ], ModalBlogComponent);
    return ModalBlogComponent;
}());



/***/ }),

/***/ "./src/app/o-nama/o-nama.component.css":
/*!*********************************************!*\
  !*** ./src/app/o-nama/o-nama.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL28tbmFtYS9vLW5hbWEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/o-nama/o-nama.component.html":
/*!**********************************************!*\
  !*** ./src/app/o-nama/o-nama.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4 style=\"text-align: center\">O nama</h4>\n  <img src=\"../../assets/img/servicios-medicos.jpg\" alt=\"\" style=\"width:100%; padding-top:1em;\" >\n  <p>\n      Lav Medic je specijalistička ordinacija iz oblasti interne medicine.\n      \n      Tim lekara,koji pruža najkvalitetniju zdravstvenu uslugu u ordinaciji MEDIC M,  dokazani su stručnjaci u svojim oblastima i poseduju dugogodišnje kliničko iskustvo.\n  \n      \n      Naši konsultanti u kratkom vremenskom roku, dijagnostikuju zdravstveni problem, predlažu dalji tok lečenja i prate pacijenta kroz obavezne kontrole.\n      </p>\n      <br>\n     <h4> U internističkoj ordinaciji LAV MEDIC, uz pomoć nove i najsavremenije dijagnostičke opreme mogu se obaviti pregledi iz: </h4>\n    <ul>      \n      <li>kardiologije </li>\n      <li>endokrinologije</li>\n      <li>gastroenterologije</li>\n      <li>nefrologije</li>\n      <li>reumatologije</li>\n      <li>alergologije</li>\n      <li>pulmologije</li>\n      <li>fizijatrije</li>\n    </ul>\n\n      <br>\n     <h4> Ordinacija obavlja kompletnu ultrazvucnu dijagnostiku:</h4>\n      <br>\n      <li> ultrazvuk srca sa kolor doplerom i tkivnim doplerom </li>\n      <li> ultrazvuk štitne žlezde </li>\n      <li> ultrazvuk abdomena i male karlice/jetra, slezina,žučna kesa, pankreas, bubezi, nedbubrežna žlezda, limfne žlezde, abdominalna aorta, mokraćna bešika </li>\n      <li> ultrazvuk urotrakta sa prostatom </li>\n      <li> ultrazvuk dojke </li>\n      <li> ultrazvuk zglobnih struktura/mišićno-tetivnih </li>\n      <li> kolor dopler krvnih sudova vrata/karotidne arterije/glave </li>\n      <li> kolor doppler gornjih i donjih ekstremiteta </li>\n\n      <strong> U ordinaciji možete uraditi gastroskopiju i kolonoskopiju sa ili bez anestezije. </strong>\n      \n      <p> LavMedic organuzuje i <strong> kućnu posetu</strong> za pacijente koji nisu u mogućnosti da zbog složenosti svog zdravstvenog stanja dođu do ordinacije.\n      <br>\n      Pored navedenih usluga, ordinacija pruža usluge psihologa, kao i porodičnog i bračnog psihoterapeuta.\n      <br>\n      LavMedic ima  mogućnost organizovanja <strong> sistematskih pregleda</strong>.\n      <br>\n      Kod nas možete uraditi laboratorijske analize <strong> krvi </strong> i <strong> urina</strong>.\n    </p>\n</div>"

/***/ }),

/***/ "./src/app/o-nama/o-nama.component.ts":
/*!********************************************!*\
  !*** ./src/app/o-nama/o-nama.component.ts ***!
  \********************************************/
/*! exports provided: ONamaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONamaComponent", function() { return ONamaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ONamaComponent = /** @class */ (function () {
    function ONamaComponent() {
    }
    ONamaComponent.prototype.ngOnInit = function () {
    };
    ONamaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dz-o-nama',
            template: __webpack_require__(/*! ./o-nama.component.html */ "./src/app/o-nama/o-nama.component.html"),
            styles: [__webpack_require__(/*! ./o-nama.component.css */ "./src/app/o-nama/o-nama.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ONamaComponent);
    return ONamaComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"error-template\">\n          <h1>\n            Oops!</h1>\n          <h2>\n            404 Page Not Found</h2>\n          <div class=\"error-details\">\n            Sorry, an error has occured, Requested page not found!\n          </div>\n          <div class=\"error-actions\">\n            <a href=\"/\" class=\"btn btn-primary btn-lg\">\n              <span class=\"fa fa-home\"></span>\n              Take Me Home </a>\n            <a href=\"/\" class=\"btn btn-default btn-lg\">\n              <span class=\"fa fa-envelope\"></span> Contact Support </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dz-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shop-cart/shop-cart.component.css":
/*!***************************************************!*\
  !*** ./src/app/shop-cart/shop-cart.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".korpaSlike{\r\n    width: 60px;\r\n}\r\n.continue{\r\n    text-decoration: none;\r\n    background-color: red;\r\n    box-shadow: 0 5px 0 darkred;\r\n    color: white;\r\n    width: 17%;\r\n    padding: .5em;\r\n}\r\n.continue:hover {\r\n    background-color: #ce0606;\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1jYXJ0L3Nob3AtY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2hvcC1jYXJ0L3Nob3AtY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtvcnBhU2xpa2V7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG4uY29udGludWV7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAwIGRhcmtyZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTclO1xyXG4gICAgcGFkZGluZzogLjVlbTtcclxufVxyXG4uY29udGludWU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlMDYwNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/shop-cart/shop-cart.component.html":
/*!****************************************************!*\
  !*** ./src/app/shop-cart/shop-cart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>View Cart</h1>\n<br>\n<p> <a class=\"continue form-control\" [routerLink]=\"['/apoteka']\" routerLinkActive=\"router-link-active\" ><i class=\"fa fa-cart-plus\"></i> Continue shopping </a></p>\n<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-10 col-md-offset-1\">\n            <table class=\"table table-hover\">\n                <thead>\n                    <tr>\n                        <th>Product</th>\n                        <th>Quantity</th>\n                        <th class=\"text-center\">Price</th>\n                        <th class=\"text-center\">Total</th>\n                        <th> </th>\n                    </tr>\n                </thead>\n                <tbody>\n                   <tr *ngFor= \"let i of korpa\">\n                        <td class=\"col-sm-8 col-md-6\">\n                        <div class=\"media\">\n                            <a class=\"thumbnail pull-left\" href=\"#\"> <img class=\"media-object rounded-circle korpaSlike\" src=\"{{i.slik}}\"> </a>\n                            <div class=\"media-body\">\n                                <h4 class=\"media-heading\">{{i.ime}}</h4>\n                                <h5 class=\"media-heading\">SKU:{{i.sifra}}</h5>\n                                <span>Status: </span><span class=\"text-success\"><strong>Na stanju</strong></span>\n                            </div>\n                        </div></td>\n                        <td class=\"col-sm-1 col-md-1\" style=\"text-align: center\">\n                        <input type=\"number\" [(ngModel)]=\"i.kolicina\" (ngModelChange)=\"ukupnaCena()\" class=\"form-control\" id=\"kol\">\n                        </td>\n                        <td class=\"col-sm-1 col-md-1 text-center\"><strong>{{i.cena}}</strong></td>\n                        <td class=\"col-sm-1 col-md-1 text-center\"><strong>{{i.cena*i.kolicina}}</strong></td>\n                        <td class=\"col-sm-1 col-md-1\">\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(i)\">\n                            <span class=\"fa fa-remove\"></span> Remove\n                        </button></td>\n                    </tr>\n\n                    <tr>\n                        <td>   </td>\n                        <td>   </td>\n                        <td>   </td>\n                        <td><h5>Subtotal</h5></td>\n                        <td class=\"text-right\"><h5><strong>{{total}}</strong></h5></td>\n                    </tr>\n                    <tr>\n                        <td>   </td>\n                        <td>   </td>\n                        <td>   </td>\n                        <td><h5>Shipping</h5></td>\n                        <td class=\"text-right\"><h5><strong>FREE</strong></h5></td>\n                    </tr>\n                    <tr>\n                        <td>   </td>\n                        <td>   </td>\n                        <td>   </td>\n                        <td><h3>Total</h3></td>\n                        <td class=\"text-right\"><h3><strong>{{total}}</strong></h3></td>\n                    </tr>\n                    <tr>\n                        <td>   </td>\n                        <td>   </td>\n                        <td>   </td>\n\n                        <td>\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"check()\">\n                            Checkout <span class=\"fa fa-play\"></span>\n                        </button></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n<div class=\"alert alert-danger\" *ngIf ='showDeletedMessage'>Proizvod je obrisan</div>\n"

/***/ }),

/***/ "./src/app/shop-cart/shop-cart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shop-cart/shop-cart.component.ts ***!
  \**************************************************/
/*! exports provided: ShopCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCartComponent", function() { return ShopCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-zdravlja.service */ "./src/app/dom-zdravlja.service.ts");



var ShopCartComponent = /** @class */ (function () {
    function ShopCartComponent(dz) {
        this.dz = dz;
        this.orders = [];
        this.korpa = this.dz.uzmiPredmete();
    }
    ShopCartComponent.prototype.delete = function (i) {
        var _this = this;
        if (confirm('Da li ste sigurni da zelite da obrisete ovaj proizvod?')) {
            var index = this.korpa.indexOf(i);
            this.korpa.splice(index, 1);
            this.showDeletedMessage = true;
            setTimeout(function () { return _this.showDeletedMessage = false; }, 3000);
            this.ukupnaCena();
        }
    };
    ShopCartComponent.prototype.ngOnInit = function () {
        this.ukupnaCena();
        this.get();
    };
    ShopCartComponent.prototype.ukupnaCena = function () {
        this.total = 0;
        for (var i = 0; i < this.korpa.length; i++) {
            this.total += this.korpa[i].cena * this.korpa[i].kolicina;
        }
        return this.total;
    };
    ShopCartComponent.prototype.check = function () {
        this.orders.push(this.korpa);
        this.dz.saveOrders(this.orders)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        alert("Uspesno ste porucili");
        this.dz.ocistiKorpu();
    };
    ShopCartComponent.prototype.get = function () {
        var _this = this;
        this.dz.getOrders()
            .subscribe(function (response) {
            _this.orders = response;
        }, function (error) { return console.log(error); });
    };
    ShopCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dz-shop-cart',
            template: __webpack_require__(/*! ./shop-cart.component.html */ "./src/app/shop-cart/shop-cart.component.html"),
            styles: [__webpack_require__(/*! ./shop-cart.component.css */ "./src/app/shop-cart/shop-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dom_zdravlja_service__WEBPACK_IMPORTED_MODULE_2__["DomZdravljaService"]])
    ], ShopCartComponent);
    return ShopCartComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-8 col-md-2\">\n  <form  (ngSubmit)=\"prijaviSe(f)\" #f=\"ngForm\">\n\t<div class=\"form-group\">\n  <label for=\"email\">Email</label>\n  <input type=\"email\" name=\"email\" id=\"email\" ngModel class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n  <label for=\"pass\">Password</label>\n  <input type=\"password\" name=\"pass\" id=\"pass\" ngModel class=\"form-control\">\n  </div>\n  <button type=\"submit\">Prijavi se</button>\n  \n  </form>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.prijaviSe = function (form) {
        var email = form.value.email;
        var sifra = form.value.pass;
        this.authService.prijaviKorisnika(email, sifra);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dz-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/singup/singup.component.css":
/*!*********************************************!*\
  !*** ./src/app/singup/singup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Npbmd1cC9zaW5ndXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/singup/singup.component.html":
/*!**********************************************!*\
  !*** ./src/app/singup/singup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-8 col-md-2\">\n  <form  (ngSubmit)=\"registrujSe(f)\" #f=\"ngForm\">\n\t<div class=\"form-group\">\n  <label for=\"email\">Email</label>\n  <input type=\"email\" name=\"email\" id=\"email\" ngModel class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n  <label for=\"pass\">Password</label>\n  <input type=\"password\" name=\"pass\" id=\"pass\" ngModel class=\"form-control\">\n  </div>\n  <button type=\"submit\">Registruj se</button>\n  \n  </form>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/singup/singup.component.ts":
/*!********************************************!*\
  !*** ./src/app/singup/singup.component.ts ***!
  \********************************************/
/*! exports provided: SingupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupComponent", function() { return SingupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var SingupComponent = /** @class */ (function () {
    function SingupComponent(authService) {
        this.authService = authService;
    }
    SingupComponent.prototype.ngOnInit = function () {
    };
    SingupComponent.prototype.registrujSe = function (form) {
        var email = form.value.email;
        var sifra = form.value.pass;
        this.authService.registrujKorisnika(email, sifra);
    };
    SingupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dz-singup',
            template: __webpack_require__(/*! ./singup.component.html */ "./src/app/singup/singup.component.html"),
            styles: [__webpack_require__(/*! ./singup.component.css */ "./src/app/singup/singup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SingupComponent);
    return SingupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBT_4_8r9oSSXzZpuTjvM0HxR9p6Sbolnc",
        authDomain: "domzdravlja-1c736.firebaseapp.com",
        databaseURL: "https://domzdravlja-1c736.firebaseio.com",
        projectId: "domzdravlja-1c736",
        storageBucket: "domzdravlja-1c736.appspot.com",
        messagingSenderId: "254094983813",
        appId: "1:254094983813:web:61bbd93c54a37aea"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lav\Desktop\SmartInIt\Domaci Angular\LavMedic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map