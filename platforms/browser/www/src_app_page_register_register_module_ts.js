"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_register_register_module_ts"],{

/***/ 7740:
/*!**********************************************************!*\
  !*** ./src/app/page/register/register-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 9411);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 8952:
/*!**************************************************!*\
  !*** ./src/app/page/register/register.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 7740);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 9411);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 9411:
/*!************************************************!*\
  !*** ./src/app/page/register/register.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 7849);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 3593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let RegisterPage = class RegisterPage {
    constructor() { }
    ngOnInit() {
    }
};
RegisterPage.ctorParameters = () => [];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 3593:
/*!*************************************************************!*\
  !*** ./src/app/page/register/register.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-success);\n}\n\nion-button {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbmlvbi1idXR0b257XG4gICAgbWFyZ2luOiAwcHhcbn0iXX0= */";

/***/ }),

/***/ 7849:
/*!*************************************************************!*\
  !*** ./src/app/page/register/register.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        What do you want to do with the recyclable waste?\n      </ion-card-title>\n    </ion-card-header>\n      <ion-radio-group value=\"client\">\n        <ion-item>\n          <ion-label>I want to buy it</ion-label>\n          <ion-radio value=\"client\" slot=\"start\"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>I want to sell it</ion-label>\n          <ion-radio value=\"partner\" slot=\"start\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Contact\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item color=\"white\">\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item color=\"white\">\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"Email\"></ion-input>\n      </ion-item>\n      <ion-item color=\"white\">\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"Password\"></ion-input>\n      </ion-item>\n      <ion-item color=\"white\">\n        <ion-label position=\"floating\">Confirm Password</ion-label>\n        <ion-input type=\"Password\"></ion-input>\n      </ion-item>\n      <ion-item color=\"white\">\n        <ion-label position=\"floating\">Phone Number</ion-label>\n        <ion-input type=\"tel\"></ion-input>\n      </ion-item>\n    </ion-card-content>  \n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Address Information\n      </ion-card-title>\n    </ion-card-header>\n      <ion-radio-group value=\"client\">\n        <ion-item color=\"white\">\n          <ion-label position=\"floating\">Address</ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item color=\"white\">\n          <ion-label position=\"floating\">Number</ion-label>\n          <ion-input type=\"tel\"></ion-input>\n        </ion-item>\n        <ion-item color=\"white\">\n          <ion-label position=\"floating\">Neighborhood</ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item color=\"white\">\n          <ion-label position=\"floating\">Complement</ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item color=\"white\">\n          <ion-label position=\"floating\">Zip-Code</ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item color=\"white\">\n          <ion-label position=\"floating\">State</ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item color=\"white\">\n          <ion-label position=\"floating\">City</ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n      </ion-radio-group>\n  </ion-card>\n\n  <ion-button size=\"full\" color=\"light\">Register</ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_register_register_module_ts.js.map