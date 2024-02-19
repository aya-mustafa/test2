"use strict";
(self["webpackChunkinterviewTask"] = self["webpackChunkinterviewTask"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ 544);
/* harmony import */ var _component_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/card-component/card-component.component */ 7711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: "",
  component: _component_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_1__.CardComponentComponent
}, {
  path: "dashboard",
  component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/header/header.component */ 2073);



class AppComponent {
  constructor() {
    this.title = 'InterviewTask';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _component_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/header/header.component */ 2073);
/* harmony import */ var _component_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/card-component/card-component.component */ 7711);
/* harmony import */ var _component_card_component_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/card-component/pages/main-page/main-page.component */ 6504);
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ 544);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 1060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _component_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_3__.CardComponentComponent, _component_card_component_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__.MainPageComponent, _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule]
  });
})();

/***/ }),

/***/ 7711:
/*!**********************************************************************!*\
  !*** ./src/app/component/card-component/card-component.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponentComponent: () => (/* binding */ CardComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ 6504);


class CardComponentComponent {
  constructor() {
    this.cards = [{
      icon: "fa-solid fa-screwdriver-wrench",
      name: "صيانة السيارة"
    }, {
      icon: "fa-solid fa-car",
      name: " احقيقه خصم تأمين ايارات "
    }, {
      icon: "fa-solid fa-scale-balanced",
      name: " بلاغ عن احتيال"
    }, {
      icon: "fa-solid fa-car-burst",
      name: " الأبلاغ عن حادث"
    }, {
      icon: "fa-solid fa-car",
      name: " ملخص تقييم الأضرار"
    }, {
      icon: "fa-solid fa-scale-balanced",
      name: "بلاغ عن احتيال"
    }, {
      icon: "fa-solid fa-car-burst",
      name: " الأبلاغ عن حادث"
    }, {
      icon: "fa-solid fa-screwdriver-wrench",
      name: "صيانة السيارة"
    }, {
      icon: "fa-solid fa-car",
      name: " احقيقه خصم تأمين السيارات "
    }, {
      icon: "fa-solid fa-car",
      name: " ملخص تقييم الأضرار"
    }];
  }
  static #_ = this.ɵfac = function CardComponentComponent_Factory(t) {
    return new (t || CardComponentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardComponentComponent,
    selectors: [["app-card-component"]],
    decls: 5,
    vars: 1,
    consts: [[1, "mt-2", "container", "pt-3"], [1, "w-75", "m-auto"], [1, "text-center", "my-4"], [3, "cards"]],
    template: function CardComponentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0623\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0634\u0643\u0648\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-main-page", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cards", ctx.cards);
      }
    },
    dependencies: [_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6504:
/*!*********************************************************************************!*\
  !*** ./src/app/component/card-component/pages/main-page/main-page.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



const _c0 = function (a0) {
  return {
    "selected": a0
  };
};
const _c1 = function (a0) {
  return {
    "title-selected": a0
  };
};
const _c2 = function (a0) {
  return {
    "icon-selected": a0
  };
};
const _c3 = function (a0) {
  return {
    "name-selected": a0
  };
};
function MainPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const card_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.selectCard(card_r1, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5)(2, "div", 6)(3, "div")(4, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, card_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, card_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](card_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, card_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, card_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.name);
  }
}
const _c4 = function (a0) {
  return {
    "button-selected": a0
  };
};
class MainPageComponent {
  constructor(_Router) {
    this._Router = _Router;
    this.cards = "";
    this.isSelected = false;
    this.arr = [];
  }
  selectCard(card, i) {
    this.cards.forEach(c => c.isSelected = false);
    card.isSelected = true;
    this.isSelected = true;
    this.currentElement = this.cards[i];
  }
  okButton() {
    console.log(this.currentElement);
    if (this.currentElement != undefined) {
      this.arr.push(this.currentElement);
    }
    console.log(this.arr);
    this._Router.navigateByUrl('/dashboard');
  }
  static #_ = this.ɵfac = function MainPageComponent_Factory(t) {
    return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MainPageComponent,
    selectors: [["app-main-page"]],
    inputs: {
      cards: "cards"
    },
    decls: 5,
    vars: 4,
    consts: [[1, "row", "pt-2"], ["class", "col", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-center", "mb-3"], [1, "button-submit", "mt-2", "btn", "btn-block", 3, "ngClass", "click"], [1, "col", 3, "click"], [1, "card", "text-center", "mb-4", 3, "ngClass"], [1, "card-body", "d-flex", "justify-content-center", "align-items-center"], [1, "card-title", 3, "ngClass"], [3, "ngClass"], [1, "card-text", 3, "ngClass"]],
    template: function MainPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_1_Template, 8, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_3_listener() {
          return ctx.okButton();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u062A\u0623\u0643\u064A\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx.isSelected));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".card[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  width: 45px;\n  border: 1px solid #E2E2E2;\n  border-radius: 4px;\n  padding: 5px;\n  margin: auto;\n  margin-bottom: 5px;\n  color: #878686;\n}\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n\n.button-submit[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 300px;\n  height: 45px;\n  border: 1px solid #cecccc;\n  border-radius: 4px;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: rgb(52, 137, 79);\n}\n\n.name-selected[_ngcontent-%COMP%], .title-selected[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n.button-selected[_ngcontent-%COMP%] {\n  color: white;\n  background-color: rgb(52, 137, 79);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L2NhcmQtY29tcG9uZW50L3BhZ2VzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9FR1klMjBUZWNoL0Rlc2t0b3AvSW50ZXJ2aWV3LVRhc2svaW50ZXJ2aWV3VGFzay9zcmMvYXBwL2NvbXBvbmVudC9jYXJkLWNvbXBvbmVudC9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBSjtBRENJO0VBRUksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FSO0FERUk7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ0RSOztBREtBO0VBRUksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURLQTtFQUNJLGtDQUFBO0FDRko7O0FESUE7RUFFSSxzQkFBQTtBQ0ZKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGtDQUFBO0FDREoiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFxyXG57XHJcbiAgICB3aWR0aCA6IDE0MHB4O1xyXG4gICAgaGVpZ2h0IDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzIDo0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAuY2FyZC10aXRsZVxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOjQ1cHg7XHJcbiAgICAgICAgYm9yZGVyIDogMXB4IHNvbGlkICNFMkUyRTI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHBhZGRpbmcgOjVweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGNvbG9yOiM4Nzg2ODZcclxuICAgIH1cclxuICAgIC5jYXJkLXRpdGxlIGlcclxuICAgIHtcclxuICAgICAgICB3aWR0aDozMnB4O1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbi1zdWJtaXRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgd2lkdGggOjMwMHB4O1xyXG4gICAgaGVpZ2h0OjQ1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDEzNywgNzkpO1xyXG59XHJcbi5uYW1lLXNlbGVjdGVkLC50aXRsZS1zZWxlY3RlZFxyXG57XHJcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnRcclxufVxyXG4uYnV0dG9uLXNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgMTM3LCA3OSk7XHJcbn0iLCIuY2FyZCB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZCAuY2FyZC10aXRsZSB7XG4gIHdpZHRoOiA0NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTJFMkUyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjODc4Njg2O1xufVxuLmNhcmQgLmNhcmQtdGl0bGUgaSB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5idXR0b24tc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCAxMzcsIDc5KTtcbn1cblxuLm5hbWUtc2VsZWN0ZWQsIC50aXRsZS1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tc2VsZWN0ZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgMTM3LCA3OSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 544:
/*!************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 1060);



function DashboardComponent_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td")(15, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25)(18, "div", 26)(19, "div", 27)(20, "div", 28)(21, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 30)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u0627\u0644\u0634\u0643\u0648\u064A \u0645\u0642\u062F\u0645\u0647 \u0641 \u0641\u0631\u0639 \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0647 \u0645\u0646 \u0645 \u0645 \u0639 \u064A\u0642\u0648\u0644 \u0628\u0623\u0646 \u0647\u0646\u0627\u0643 \u062D\u0627\u062F\u062A \u0644\u0644\u0633\u064A\u0627\u0631\u0647 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 31)(30, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u063A\u0644\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, item_r1.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.leaderCity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 10, item_r1.date));
  }
}
const _c0 = function (a0, a1) {
  return {
    itemsPerPage: a0,
    currentPage: a1
  };
};
class DashboardComponent {
  constructor() {
    this.today = Date.now();
    this.items = [{
      type: "شكوي1",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "شكوي2",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "شكوي3",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "شكوي4",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "5شكوي",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "شكوي6",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }];
    this.p = 1; // Current page number
    this.pageSize = 3; // Number of items to display per page
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 87,
    vars: 7,
    consts: [[1, "container", "mt-4", "pt-4", "text-center", "text-white"], [1, "row"], [1, "col-md-3", "mb-3"], [1, "newComplaints"], [1, "mt-2"], [1, "acceptedComplaints"], [1, "rejectedComplaints1"], [1, "col-md-3"], [1, "rejectedComplaints"], [1, "d-flex", "justify-content-between", "text-black", "my-3", "filteration"], [1, "date"], [1, "ms-3"], ["name", "", "id", ""], ["selected", "", "value", ""], ["value", ""], [1, "filter"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "text-center", "paginati"], [3, "pageChange"], ["scope", "row"], [1, "status"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "border", "border-0", "bg-transparent"], [1, "fa-solid", "fa-eye"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0634\u0643\u0627\u0648\u064A \u062C\u062F\u064A\u062F\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "150");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "div", 5)(10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0634\u0643\u0627\u0648\u064A \u0645\u0631\u0641\u0648\u0636\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "div", 6)(16, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0634\u0643\u0627\u0648\u064A \u062A\u0645 \u0627\u0639\u062A\u0645\u0627\u062F\u0647\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0634\u0643\u0627\u0648\u064A \u0645\u0631\u0641\u0648\u0636\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "44");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9)(27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u062C\u062F\u064A\u062F\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10)(30, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 12)(33, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0627\u0644\u0643\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Feb 17, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Feb 17, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Feb 17, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Feb 17, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15)(44, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 12)(47, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0627\u0644\u0643\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u062C\u062F\u064A\u062F\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u0645\u0642\u0628\u0648\u0644\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u0645\u0631\u0641\u0648\u0636\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15)(56, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0627\u0644\u062D\u0627\u0644\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 12)(59, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0627\u0644\u0643\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u0645\u0642\u0628\u0648\u0644\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u0645\u0631\u0641\u0648\u0636\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 16)(66, "thead")(67, "tr")(68, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u0631\u0642\u0645 \u0627\u0644\u0634\u0643\u0648\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0646\u0648\u0639 \u0627\u0644\u0634\u0643\u0648\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0634\u0643\u0648\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u0627\u0644\u0645\u062F\u064A\u0646\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u0627\u0644\u0627\u062F\u0627\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u0627\u0644\u062D\u0627\u0644\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u0639\u0631\u0636");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, DashboardComponent_tr_83_Template, 32, 12, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 19)(86, "pagination-controls", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function DashboardComponent_Template_pagination_controls_pageChange_86_listener($event) {
          return ctx.p = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](84, 1, ctx.items, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.pageSize, ctx.p)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginatePipe],
    styles: [".col-md-3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 5px 7px;\n}\n\n.newComplaints[_ngcontent-%COMP%] {\n  background-color: #FDBE7B;\n}\n\n.acceptedComplaints[_ngcontent-%COMP%] {\n  background-color: #12AA77;\n}\n\n.rejectedComplaints1[_ngcontent-%COMP%] {\n  background-color: #FF6A6F;\n}\n\n.rejectedComplaints[_ngcontent-%COMP%] {\n  background-color: #43A7D8;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #12AA77 !important;\n  color: #fff;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n}\n\n.status[_ngcontent-%COMP%] {\n  color: #FDBE7B;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #E7FFF3;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #9c9999;\n}\n\n.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #12AA77;\n  color: #fff;\n}\n\n.searchInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 640px) {\n  .filteration[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .filteration[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .filteration[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n  .filteration[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .container[_ngcontent-%COMP%] {\n    padding-top: 120px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9FR1klMjBUZWNoL0Rlc2t0b3AvSW50ZXJ2aWV3LVRhc2svaW50ZXJ2aWV3VGFzay9zcmMvYXBwL2NvbXBvbmVudC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBRUkseUJBQUE7QUNBSjs7QURFQTtFQUVJLHlCQUFBO0FDQUo7O0FER0E7RUFFSSx5QkFBQTtBQ0RKOztBREdBO0VBRUkseUJBQUE7QUNESjs7QURJQTtFQUVJLG9DQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBRElBO0VBRUksaUJBQUE7QUNGSjs7QURJQTtFQUVJLGNBQUE7QUNGSjs7QURJQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ0RKOztBREdBO0VBRUksZUFBQTtFQUNBLGNBQUE7QUNESjs7QURHQTtFQUVJLHlCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREdBO0VBRUksYUFBQTtBQ0RKOztBRElBO0VBQ0k7SUFFSSx5QkFBQTtFQ0ZOO0VER007SUFNSSxtQkFBQTtFQ05WO0VERVU7SUFFSSxXQUFBO0VDRGQ7RURJVTtJQUVJLFlBQUE7RUNIZDtFRE9FO0lBRUksNkJBQUE7RUNOTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZC0zPmRpdlxyXG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDdweDtcclxufVxyXG4ubmV3Q29tcGxhaW50c1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRCRTdCO1xyXG59XHJcbi5hY2NlcHRlZENvbXBsYWludHNcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTJBQTc3O1xyXG4gICAgXHJcbn1cclxuLnJlamVjdGVkQ29tcGxhaW50czFcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNkE2RlxyXG59XHJcbi5yZWplY3RlZENvbXBsYWludHNcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDNBN0Q4XHJcbn1cclxuXHJcbnRoZWFkIHRoXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMkFBNzcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxudGRcclxue1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbn1cclxuLnN0YXR1c1xyXG57XHJcbiAgICBjb2xvcjojRkRCRTdCXHJcbn1cclxuc2VsZWN0e1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFN0ZGRjM7XHJcbn1cclxubGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBjb2xvcjojOWM5OTk5XHJcbn1cclxuLm1vZGFsLWZvb3RlciBidXR0b25cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyQUE3NztcclxuICAgIGNvbG9yIDogI2ZmZlxyXG59XHJcbi5zZWFyY2hJbnB1dFxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XHJcbiAgICAuZmlsdGVyYXRpb25cclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpdlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6NTBweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59IiwiLmNvbC1tZC0zID4gZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgcGFkZGluZzogNXB4IDdweDtcbn1cblxuLm5ld0NvbXBsYWludHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRCRTdCO1xufVxuXG4uYWNjZXB0ZWRDb21wbGFpbnRzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyQUE3Nztcbn1cblxuLnJlamVjdGVkQ29tcGxhaW50czEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2QTZGO1xufVxuXG4ucmVqZWN0ZWRDb21wbGFpbnRzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzQTdEODtcbn1cblxudGhlYWQgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJBQTc3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xufVxuXG4uc3RhdHVzIHtcbiAgY29sb3I6ICNGREJFN0I7XG59XG5cbnNlbGVjdCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3RkZGMztcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjOWM5OTk5O1xufVxuXG4ubW9kYWwtZm9vdGVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMkFBNzc7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VhcmNoSW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuZmlsdGVyYXRpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZpbHRlcmF0aW9uIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuZmlsdGVyYXRpb24gZGl2IGxhYmVsIHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAuZmlsdGVyYXRpb24gZGl2IHNlbGVjdCB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAxMjBweCAhaW1wb3J0YW50O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 2073:
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




function HeaderComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15)(3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0641\u0647\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0645\u062F\u0642\u0642 \u0627\u0644\u0634\u0643\u0627\u0648\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class HeaderComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        this.showElement = this.router.url === '/dashboard';
      }
    });
  }
  getHeaderStyles() {
    const url = this.router.url;
    const styles = [];
    if (url.includes('/dashboard')) {
      styles.push('dashboard-header');
    }
    if (url.includes('/mainpage')) {
      styles.push('mainpage-header');
    }
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 12,
    vars: 3,
    consts: [[1, "header", 3, "ngClass"], [1, "container"], [1, "d-flex", "justify-content-between", "nav"], [1, "pt-0"], ["src", "../../../assets/images/download 1.png", "alt", ""], ["class", "searchInput", 4, "ngIf"], [1, "d-flex", "align-items-center", "header-right"], [1, "notification", "ms-3", "d-flex", "justify-content-center", "align-items-center"], [1, "fa-regular", "fa-bell"], [1, "language", "d-flex", "justify-content-center", "align-items-center"], ["class", " leader d-flex", 4, "ngIf"], [1, "searchInput"], ["placeholder", "\u0645\u0627 \u0627\u0644\u0630\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0629\u061F", 1, "form-control"], [1, "leader", "d-flex"], ["src", "../../../assets/images/download.jpeg", "alt", "", 1, "rounded-circle", "mt-2"], [1, "mt-4", "pt-3", "me-2", "leaderInfo"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 7, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getHeaderStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showElement);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showElement);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".header[_ngcontent-%COMP%] {\n  background-color: #F4F4F4;\n  box-shadow: 0px 0px 10px #cdcbcb;\n  height: 105px;\n}\n.header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  transform: translateY(-10%);\n}\n.header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #E1E3E6;\n  width: 62px;\n  height: 48px;\n  border-radius: 8px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 450px;\n  margin-top: 38px;\n  border-radius: 18px;\n}\n\n.leader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 90px;\n}\n\n.leader[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  line-height: 0px;\n}\n\n@media screen and (max-width: 640px) {\n  .nav[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .leader[_ngcontent-%COMP%] {\n    display: block !important;\n    text-align: center;\n    order: 1;\n  }\n  .leader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .leader[_ngcontent-%COMP%]   .leaderInfo[_ngcontent-%COMP%] {\n    margin-top: 0px !important;\n  }\n  .searchInput[_ngcontent-%COMP%] {\n    order: 4;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9FR1klMjBUZWNoL0Rlc2t0b3AvSW50ZXJ2aWV3LVRhc2svaW50ZXJ2aWV3VGFzay9zcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUNBSjtBRENJO0VBRUksMkJBQUE7QUNBUjtBRENRO0VBRUksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBWjs7QURLQTtFQUVJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FES0E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ0hKOztBREtBO0VBRUksZ0JBQUE7QUNISjs7QURLQTtFQUNJO0lBRUksY0FBQTtFQ0hOO0VES0U7SUFFSSxhQUFBO0VDSk47RURNRTtJQUVJLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0VDTE47RURNTTtJQUVJLFdBQUE7SUFDQSxZQUFBO0VDTFY7RURRTTtJQUVJLDBCQUFBO0VDUFY7RURVRTtJQUVJLFFBQUE7RUNUTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAgMTBweCAjY2RjYmNiO1xyXG4gICAgaGVpZ2h0OiAxMDVweDtcclxuICAgIC5oZWFkZXItcmlnaHRcclxuICAgIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XHJcbiAgICAgICAgLmxhbmd1YWdlLC5ub3RpZmljYXRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMUUzRTY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbmlucHV0XHJcbntcclxuICAgIHdpZHRoOjQ1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbn1cclxuLmxlYWRlciBpbWdcclxue1xyXG4gICAgd2lkdGg6ODBweDtcclxuICAgIGhlaWdodDo5MHB4O1xyXG59XHJcbi5sZWFkZXIgaDZcclxue1xyXG4gICAgbGluZS1oZWlnaHQ6MHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuICAgIC5uYXYgXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuZGFzaGJvYXJkLWhlYWRlclxyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICAubGVhZGVyXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgaW1nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZWFkZXJJbmZvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoSW5wdXRcclxuICAgIHtcclxuICAgICAgICBvcmRlcjogNDtcclxuICAgIH1cclxufSIsIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2NkY2JjYjtcbiAgaGVpZ2h0OiAxMDVweDtcbn1cbi5oZWFkZXIgLmhlYWRlci1yaWdodCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn1cbi5oZWFkZXIgLmhlYWRlci1yaWdodCAubGFuZ3VhZ2UsIC5oZWFkZXIgLmhlYWRlci1yaWdodCAubm90aWZpY2F0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRTNFNjtcbiAgd2lkdGg6IDYycHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWFyZ2luLXRvcDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbn1cblxuLmxlYWRlciBpbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4ubGVhZGVyIGg2IHtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLm5hdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmRhc2hib2FyZC1oZWFkZXIge1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbiAgLmxlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3JkZXI6IDE7XG4gIH1cbiAgLmxlYWRlciBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICAubGVhZGVyIC5sZWFkZXJJbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VhcmNoSW5wdXQge1xuICAgIG9yZGVyOiA0O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map