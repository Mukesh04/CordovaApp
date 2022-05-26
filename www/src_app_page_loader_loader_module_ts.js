"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_loader_loader_module_ts"],{

/***/ 6633:
/*!******************************************************!*\
  !*** ./src/app/page/loader/loader-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPageRoutingModule": () => (/* binding */ LoaderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.page */ 231);




const routes = [
    {
        path: '',
        component: _loader_page__WEBPACK_IMPORTED_MODULE_0__.LoaderPage
    }
];
let LoaderPageRoutingModule = class LoaderPageRoutingModule {
};
LoaderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoaderPageRoutingModule);



/***/ }),

/***/ 2576:
/*!**********************************************!*\
  !*** ./src/app/page/loader/loader.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPageModule": () => (/* binding */ LoaderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _loader_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader-routing.module */ 6633);
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.page */ 231);







let LoaderPageModule = class LoaderPageModule {
};
LoaderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loader_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoaderPageRoutingModule
        ],
        declarations: [_loader_page__WEBPACK_IMPORTED_MODULE_1__.LoaderPage]
    })
], LoaderPageModule);



/***/ }),

/***/ 231:
/*!********************************************!*\
  !*** ./src/app/page/loader/loader.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPage": () => (/* binding */ LoaderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _loader_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.page.html?ngResource */ 3251);
/* harmony import */ var _loader_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.page.scss?ngResource */ 4367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let LoaderPage = class LoaderPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        const vm = this;
        setTimeout(() => {
            vm.router.navigate(['login']);
        }, 2000);
    }
};
LoaderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoaderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-loader',
        template: _loader_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loader_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoaderPage);



/***/ }),

/***/ 4367:
/*!*********************************************************!*\
  !*** ./src/app/page/loader/loader.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJsb2FkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY2VudGVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */";

/***/ }),

/***/ 3251:
/*!*********************************************************!*\
  !*** ./src/app/page/loader/loader.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"flex-center\">\n    <ion-spinner name=\"crescent\" color=\"success\"></ion-spinner>\n  </div> \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_loader_loader_module_ts.js.map