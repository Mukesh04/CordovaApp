"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_home_home_module_ts"],{

/***/ 7520:
/*!**************************************************!*\
  !*** ./src/app/page/home/home-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 8261);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 2040:
/*!******************************************!*\
  !*** ./src/app/page/home/home.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 7520);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 8261);
/* harmony import */ var src_app_components_pickup_call_card_pickup_call_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/pickup-call-card/pickup-call-card.component */ 2793);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage, src_app_components_pickup_call_card_pickup_call_card_component__WEBPACK_IMPORTED_MODULE_2__.PickupCallCardComponent]
    })
], HomePageModule);



/***/ }),

/***/ 8261:
/*!****************************************!*\
  !*** ./src/app/page/home/home.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 7572);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 9841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    seePickupCall() {
        const vm = this;
        vm.router.navigate(['my-pickup-calls']);
    }
    goToNewPickupCall() {
        const vm = this;
        vm.router.navigate(['pickup-call']);
    }
    getLocation() {
        const vm = this;
        vm.router.navigate(['locations']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 9841:
/*!*****************************************************!*\
  !*** ./src/app/page/home/home.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-list {\n  padding: 0%;\n  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2);\n}\nion-list .money {\n  font-weight: bold;\n}\nion-card-subtitle {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLDRDQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0FBRVI7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0e1xuICAgIHBhZGRpbmc6IDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAxcHggcmdiKDAgMCAwIC8gMjAlKTtcbiAgICAubW9uZXl7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn0gXG5cbmlvbi1jYXJkLXN1YnRpdGxle1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 7572:
/*!*****************************************************!*\
  !*** ./src/app/page/home/home.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title (click)=\"homePage()\">Sinar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/icon/admin.jpg\" alt=\"\">\n      </ion-avatar>\n      <ion-label>\n        <h1>Mukesh Jain</h1>\n        <p>Gathered <span class=\"money\">$ 150000</span></p>\n      </ion-label>\n    </ion-item> \n  </ion-list>\n\n  <!-- <app-pickup-call-card [hasHeader]=\"true\" [hasFooter]=\"true\" status=\"hold\" updateAt=\"25-05-2022 16:20\" createdAt=\"23-05-2022\" notes=\"we have two bags that are full one with plastic and other with glass\"></app-pickup-call-card> -->\n\n  <app-pickup-call-card status=\"hold\" updatedAt=\"26/05/2022 15:00:01\" createdAt=\"26/05/2022 15:00:01\"\n  notes=\"we have only two glass of water\">\n    <ion-card-header header>\n      <ion-card-subtitle>Last Pick Up Call </ion-card-subtitle>\n    </ion-card-header>\n    <ion-button color=\"success\" fill=\"clear\" size=\"full\" footer (click)=\"seePickupCall()\">See All ....</ion-button>\n  </app-pickup-call-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"  (click)=\"goToNewPickupCall()\">\n    <ion-fab-button color=\"success\">\n      <ion-icon name=\"Add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-button color=\"primary\" fill=\"clear\" size=\"full\" footer (click)=\"getLocation()\">Get Location</ion-button>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_home_home_module_ts.js.map