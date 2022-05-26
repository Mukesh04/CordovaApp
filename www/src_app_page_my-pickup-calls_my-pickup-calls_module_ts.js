"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_my-pickup-calls_my-pickup-calls_module_ts"],{

/***/ 9363:
/*!************************************************************************!*\
  !*** ./src/app/page/my-pickup-calls/my-pickup-calls-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPickupCallsPageRoutingModule": () => (/* binding */ MyPickupCallsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _my_pickup_calls_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-pickup-calls.page */ 4408);




const routes = [
    {
        path: '',
        component: _my_pickup_calls_page__WEBPACK_IMPORTED_MODULE_0__.MyPickupCallsPage
    }
];
let MyPickupCallsPageRoutingModule = class MyPickupCallsPageRoutingModule {
};
MyPickupCallsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyPickupCallsPageRoutingModule);



/***/ }),

/***/ 5232:
/*!****************************************************************!*\
  !*** ./src/app/page/my-pickup-calls/my-pickup-calls.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPickupCallsPageModule": () => (/* binding */ MyPickupCallsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _my_pickup_calls_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-pickup-calls-routing.module */ 9363);
/* harmony import */ var _my_pickup_calls_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-pickup-calls.page */ 4408);
/* harmony import */ var src_app_components_pickup_call_card_pickup_call_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/pickup-call-card/pickup-call-card.component */ 2793);








let MyPickupCallsPageModule = class MyPickupCallsPageModule {
};
MyPickupCallsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _my_pickup_calls_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyPickupCallsPageRoutingModule
        ],
        declarations: [_my_pickup_calls_page__WEBPACK_IMPORTED_MODULE_1__.MyPickupCallsPage, src_app_components_pickup_call_card_pickup_call_card_component__WEBPACK_IMPORTED_MODULE_2__.PickupCallCardComponent]
    })
], MyPickupCallsPageModule);



/***/ }),

/***/ 4408:
/*!**************************************************************!*\
  !*** ./src/app/page/my-pickup-calls/my-pickup-calls.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPickupCallsPage": () => (/* binding */ MyPickupCallsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _my_pickup_calls_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-pickup-calls.page.html?ngResource */ 4618);
/* harmony import */ var _my_pickup_calls_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-pickup-calls.page.scss?ngResource */ 8184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MyPickupCallsPage = class MyPickupCallsPage {
    constructor() { }
    ngOnInit() {
    }
};
MyPickupCallsPage.ctorParameters = () => [];
MyPickupCallsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-my-pickup-calls',
        template: _my_pickup_calls_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_pickup_calls_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyPickupCallsPage);



/***/ }),

/***/ 8184:
/*!***************************************************************************!*\
  !*** ./src/app/page/my-pickup-calls/my-pickup-calls.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "p {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBpY2t1cC1jYWxscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6Im15LXBpY2t1cC1jYWxscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59Il19 */";

/***/ }),

/***/ 4618:
/*!***************************************************************************!*\
  !*** ./src/app/page/my-pickup-calls/my-pickup-calls.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Pickup Calls</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-pickup-call-card status=\"hold\" updateAt=\"25-05-2022 16:20\" createdAt=\"23-05-2022\" notes=\"we have two bags that are full one with plastic and other with glass\"></app-pickup-call-card>\n\n  <app-pickup-call-card status=\"processing\" updateAt=\"26-05-2022  16:20\" createdAt=\"24-05-2022\" notes=\"we have two bags that are \"></app-pickup-call-card>\n\n  <app-pickup-call-card status=\"finished\" updateAt=\"27-05-2022  16:20\" createdAt=\"25-05-2022\" notes=\"we have  one with plastic and other with glass\" value=\"15,000\"></app-pickup-call-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_my-pickup-calls_my-pickup-calls_module_ts.js.map