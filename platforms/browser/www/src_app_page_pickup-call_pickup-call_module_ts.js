"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_pickup-call_pickup-call_module_ts"],{

/***/ 5245:
/*!****************************************************************!*\
  !*** ./src/app/page/pickup-call/pickup-call-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PickupCallPageRoutingModule": () => (/* binding */ PickupCallPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pickup_call_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickup-call.page */ 5144);




const routes = [
    {
        path: '',
        component: _pickup_call_page__WEBPACK_IMPORTED_MODULE_0__.PickupCallPage
    }
];
let PickupCallPageRoutingModule = class PickupCallPageRoutingModule {
};
PickupCallPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PickupCallPageRoutingModule);



/***/ }),

/***/ 9598:
/*!********************************************************!*\
  !*** ./src/app/page/pickup-call/pickup-call.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PickupCallPageModule": () => (/* binding */ PickupCallPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pickup_call_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickup-call-routing.module */ 5245);
/* harmony import */ var _pickup_call_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pickup-call.page */ 5144);







let PickupCallPageModule = class PickupCallPageModule {
};
PickupCallPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pickup_call_routing_module__WEBPACK_IMPORTED_MODULE_0__.PickupCallPageRoutingModule
        ],
        declarations: [_pickup_call_page__WEBPACK_IMPORTED_MODULE_1__.PickupCallPage]
    })
], PickupCallPageModule);



/***/ }),

/***/ 5144:
/*!******************************************************!*\
  !*** ./src/app/page/pickup-call/pickup-call.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PickupCallPage": () => (/* binding */ PickupCallPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pickup_call_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickup-call.page.html?ngResource */ 8717);
/* harmony import */ var _pickup_call_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pickup-call.page.scss?ngResource */ 8312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PickupCallPage = class PickupCallPage {
    constructor() { }
    ngOnInit() {
    }
};
PickupCallPage.ctorParameters = () => [];
PickupCallPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pickup-call',
        template: _pickup_call_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pickup_call_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PickupCallPage);



/***/ }),

/***/ 8312:
/*!*******************************************************************!*\
  !*** ./src/app/page/pickup-call/pickup-call.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-buttons {\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2t1cC1jYWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJwaWNrdXAtY2FsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uc3tcbiAgICBtYXJnaW46IDE1cHg7XG59Il19 */";

/***/ }),

/***/ 8717:
/*!*******************************************************************!*\
  !*** ./src/app/page/pickup-call/pickup-call.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>PickupCall</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"../../../assets/icon/map.jpg\" alt=\"\">\n  <ion-card>\n    <ion-card-content>\n      <p>Address : Fake street</p>\n      <p>Complement: Abc</p>\n      <p>Neighborhood: Amitha Bachan</p>\n      <p>Zip-Code: 560064</p>\n      <p>City Name: Nittur </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-list>\n    <ion-item lines=\"inset\">\n      <ion-label position=\"floating\">Notes</ion-label>\n        <ion-textarea>\n\n        </ion-textarea>\n    </ion-item>\n  </ion-list>\n  <ion-button size=\"full\" color=\"success\">Create Pick up Call</ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_pickup-call_pickup-call_module_ts.js.map