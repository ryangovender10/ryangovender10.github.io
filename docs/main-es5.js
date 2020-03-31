function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Components/home/fivesteps/fivesteps.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Components/home/fivesteps/fivesteps.component.ts ***!
    \******************************************************************/

  /*! exports provided: FivestepsComponent */

  /***/
  function srcAppComponentsHomeFivestepsFivestepsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivestepsComponent", function () {
      return FivestepsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FivestepsComponent =
    /*#__PURE__*/
    function () {
      function FivestepsComponent() {
        _classCallCheck(this, FivestepsComponent);
      }

      _createClass(FivestepsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FivestepsComponent;
    }();

    FivestepsComponent.ɵfac = function FivestepsComponent_Factory(t) {
      return new (t || FivestepsComponent)();
    };

    FivestepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FivestepsComponent,
      selectors: [["app-fivesteps"]],
      decls: 55,
      vars: 0,
      consts: [[1, "media", "mt-4", "x", 2, "margin-left", "37%"], [1, "d-flex"], ["src", "https://sabrozoncatering.com/wp-content/uploads/2020/03/Do-The-Five-1.gif", "height", "50", "width", "50", "alt", ""], [1, "media-body", "text-dark", 2, "text-align", "start!important"], [2, "color", "#e94235"], [1, "row", "mt-5"], [1, "card", "text-white", 2, "border-color", "transparent"], ["src", "https://workstack.io/img/color-splash.jpg", "alt", "", 1, "card-img", "imgStuff"], [1, "card-img-overlay"], [1, "container"], [1, "row", "py-2", "mt-4", "mb-4"], [1, "col-md-1"], [1, "col-md-2"], [1, "card"], ["src", "https://image.flaticon.com/icons/svg/2741/2741175.svg", "width", "150", "height", "150", "alt", "", 1, "card-img-top"], [1, "card-body", "text-dark"], [1, "card-titl", "theFive"], [1, "card-text"], ["src", "https://image.flaticon.com/icons/svg/2750/2750774.svg", "width", "150", "height", "150", "alt", "", 1, "card-img-top"], ["src", "https://image.flaticon.com/icons/svg/2741/2741148.svg", "width", "150", "height", "150", "alt", "", 1, "card-img-top"], ["src", "https://image.flaticon.com/icons/svg/2750/2750393.svg", "width", "150", "height", "150", "alt", "", 1, "card-img-top"], ["src", "https://image.flaticon.com/icons/svg/2731/2731265.svg", "width", "150", "height", "150", "alt", "", 1, "card-img-top"]],
      template: function FivestepsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DO THE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " FIVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1 HANDS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Wash them often.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "2 ELBOW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cough into it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "3 FACE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Don't touch it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "4 SPACE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Keep safe distance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "5 HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Stay if you can.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".col-md-2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    padding: 3px;\r\n    border-color: transparent;\r\n}\r\n.theFive[_ngcontent-%COMP%]{\r\n    color: #e94235;\r\n    text-shadow: 1px 1px black;\r\n}\r\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  font-weight: 500;\r\n}\r\n.imgStuff[_ngcontent-%COMP%]{\r\n    max-height: 456px; \r\n      transform: rotate(180)!important; \r\n      transform: scaleX(1.5)\r\n}\r\n.x[_ngcontent-%COMP%]{\r\n margin-left: 37%!important;\r\n}\r\n@media(max-width:560px)\r\n{\r\n     .x[_ngcontent-%COMP%]{\r\n         margin-left: 15%!important;\r\n     }\r\n}\r\n@media(max-width:500px)\r\n{\r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2ZpdmVzdGVwcy9maXZlc3RlcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxrQkFBa0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7TUFDZixnQ0FBZ0M7TUFDaEM7QUFDTjtBQUVBO0NBQ0MsMEJBQTBCO0FBQzNCO0FBQ0E7O0tBRUs7U0FDSSwwQkFBMEI7S0FDOUI7QUFDTDtBQUNBOzs7QUFHQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaG9tZS9maXZlc3RlcHMvZml2ZXN0ZXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLW1kLTIgLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnRoZUZpdmV7XHJcbiAgICBjb2xvcjogI2U5NDIzNTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZCBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmltZ1N0dWZme1xyXG4gICAgbWF4LWhlaWdodDogNDU2cHg7IFxyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODApIWltcG9ydGFudDsgXHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuNSlcclxufVxyXG5cclxuLnh7XHJcbiBtYXJnaW4tbGVmdDogMzclIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjU2MHB4KVxyXG57XHJcbiAgICAgLnh7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNSUhaW1wb3J0YW50O1xyXG4gICAgIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjUwMHB4KVxyXG57XHJcbiAgIFxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FivestepsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fivesteps',
          templateUrl: './fivesteps.component.html',
          styleUrls: ['./fivesteps.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/home/heroimage/heroimage.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Components/home/heroimage/heroimage.component.ts ***!
    \******************************************************************/

  /*! exports provided: HeroimageComponent */

  /***/
  function srcAppComponentsHomeHeroimageHeroimageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroimageComponent", function () {
      return HeroimageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeroimageComponent =
    /*#__PURE__*/
    function () {
      function HeroimageComponent() {
        _classCallCheck(this, HeroimageComponent);
      }

      _createClass(HeroimageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroimageComponent;
    }();

    HeroimageComponent.ɵfac = function HeroimageComponent_Factory(t) {
      return new (t || HeroimageComponent)();
    };

    HeroimageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroimageComponent,
      selectors: [["app-heroimage"]],
      decls: 43,
      vars: 0,
      consts: [[1, "row", "mb-3", "mt-5"], [1, "col-md-12"], [1, "card", "bg-dark", "text-white", 2, "border-color", "transparent!important", "background-color", "transparent!important"], ["src", "https://workstack.io/img/color-splash.jpg", "width", "100%", 1, "card-img"], [1, "card-img-overlay", "hero"], [1, "card-title", "mt-4", "text-dark"], [1, "container"], [1, "row", "mt-5"], [1, "col-md-6"], [1, "media", "p-3"], [1, "d-flex"], ["src", "https://image.flaticon.com/icons/svg/506/506890.svg", "height", "60", "width", "80", "alt", ""], [1, "media-body", "text-dark"], [1, "row"], [1, "media"], ["href", "#", 1, "d-flex"], ["src", "https://image.flaticon.com/icons/svg/2718/2718069.svg", "width", "60", "height", "80", "alt", ""], ["src", "https://image.flaticon.com/icons/svg/2741/2741128.svg", "height", "60", "width", "80", "alt", ""], [1, "card", "bg-transparent", "text-white", 2, "border-color", "transparent"], ["src", "https://pluspng.com/img-png/free-png-sick-boy-sick-in-bed-with-the-flu-royalty-free-vector-clip-art-illustration-445.png", "height", "350px", "alt", "", 1, "card-img"]],
      template: function HeroimageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "WHAT IS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " The name corona refers to a crown because these viruses have crown like spikes on thier surface when viewed under an electron microscope. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Human coronaviruses are common thoughout the world. There are may different coronaviruses identified in animals but only a small number of these can cause disease in humans. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Some coronaviruses such as 229E, NL69, OC43 and HUKU1 are common causes of illness, including respiratory illness, in humans throughtout the world. Sometimes coronaviruses infecting animals can evolve to cause disease in humans and become a new (novel) cornoavirus for humans. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " The name corona refers to a crown because these viruses have crown like spikes on thier surface when viewed under an electron microscope. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".hero[_ngcontent-%COMP%]{\r\n    text-align: center!important;\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n   font-weight: 500!important;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%]{\r\n    text-shadow: 2px 2px #1f421a;\r\n    color: #62d152;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hlcm9pbWFnZS9oZXJvaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtHQUNHLDBCQUEwQjtBQUM3Qjs7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hlcm9pbWFnZS9oZXJvaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlcm8gcHtcclxuICAgZm9udC13ZWlnaHQ6IDUwMCFpbXBvcnRhbnQ7XHJcbn1cclxuc3Ryb25ne1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIzFmNDIxYTtcclxuICAgIGNvbG9yOiAjNjJkMTUyO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroimageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-heroimage',
          templateUrl: './heroimage.component.html',
          styleUrls: ['./heroimage.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/Components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Services/home.service */
    "./src/app/Services/home.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/Components/home/navbar/navbar.component.ts");
    /* harmony import */


    var _heroimage_heroimage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./heroimage/heroimage.component */
    "./src/app/Components/home/heroimage/heroimage.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fivesteps_fivesteps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fivesteps/fivesteps.component */
    "./src/app/Components/home/fivesteps/fivesteps.component.ts");
    /* harmony import */


    var _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./symptoms/symptoms.component */
    "./src/app/Components/home/symptoms/symptoms.component.ts");
    /* harmony import */


    var _videolinks_videolinks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./videolinks/videolinks.component */
    "./src/app/Components/home/videolinks/videolinks.component.ts");

    function HomeComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "COVID-19");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Statistics");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total Number Of Cases ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Active Cases ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Today's Cases");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Number Recovered ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Critical Cases");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Deaths Today ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Total Deaths ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "app-fivesteps");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-symptoms");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h1", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "COVID-19");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Timeline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h5", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "p", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h4", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "p", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h5", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "app-videolinks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.country.country, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.country.cases);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.country.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.country.todayCases);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.country.recovered);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.country.critical);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.country.todayDeaths);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.country.deaths);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.country.country, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.country.firstCase, " - First Reported Case");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](110, 11, ctx_r0.Date, "MMM dd"), " - 1452 Active cases");
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(homeService) {
        _classCallCheck(this, HomeComponent);

        this.homeService = homeService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountries();
          this.getDate();
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this = this;

          return this.homeService.getCountryData().subscribe(function (data) {
            _this.country = data;
          });
        }
      }, {
        key: "getDate",
        value: function getDate() {
          var date = new Date();
          this.Date = date;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 3,
      vars: 1,
      consts: [[4, "ngIf"], [1, "container", "mb-3", "resize"], [2, "text-align", "center"], [1, "row"], [1, "col-md-3"], [1, "media", "border", "p-3"], [1, "d-flex"], ["src", "https://image.flaticon.com/icons/svg/2750/2750258.svg", "height", "50", "width", "50", "alt", ""], [1, "media-body"], ["src", "https://www.flaticon.com/premium-icon/icons/svg/2746/2746245.svg", "height", "50", "width", "50", "alt", ""], ["src", "https://image.flaticon.com/icons/svg/2746/2746372.svg", "height", "50", "width", "50", "alt", ""], ["src", "https://image.flaticon.com/icons/svg/2750/2750844.svg", "height", "50", "width", "50", "alt", ""], [1, "row", "mt-2"], [1, "col-md-4"], ["src", "https://image.flaticon.com/icons/svg/2615/2615180.svg", "height", "50", "width", "50", "alt", ""], ["src", "https://image.flaticon.com/icons/svg/1515/1515235.svg", "height", "50", "width", "50", "alt", ""], ["src", "https://image.flaticon.com/icons/svg/1515/1515233.svg", "height", "50", "width", "50", "alt", ""], [1, "text-center", "py-3", "timeline"], [1, "container", "py-2", "mt-4", "mb-4"], [1, "row", "no-gutters"], [1, "col-sm"], [1, "col-sm-1", "text-center", "flex-column", "d-none", "d-sm-flex"], [1, "row", "h-50"], [1, "col"], [1, "m-2"], [1, "badge", "badge-pill", "bg-danger", "border"], [1, "col", "border-right"], [1, "col-sm", "py-2"], [1, "card", "shadow", 2, "border-color", "#e94235"], [1, "card-body"], [1, "float-right", "text-muted", "small"], [1, "card-title"], [1, "card-text"], [1, "card", "border-warning", "shadow"], [1, "float-right", "text-warning", "small"], [1, "card-title", "text-dark"], [1, "card-text", "text-dark"], [1, "badge", "badge-pill", "bg-warning"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-heroimage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 128, 14, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.country);
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _heroimage_heroimage_component__WEBPACK_IMPORTED_MODULE_3__["HeroimageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fivesteps_fivesteps_component__WEBPACK_IMPORTED_MODULE_5__["FivestepsComponent"], _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_6__["SymptomsComponent"], _videolinks_videolinks_component__WEBPACK_IMPORTED_MODULE_7__["VideolinksComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".mediaCard[_ngcontent-%COMP%]{\r\n\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    color: black;\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]{\r\n     text-align: center!important;\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-weight: 500!important;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%]{\r\n    text-shadow: 2px 2px #1f421a;\r\n    color: #62d152;\r\n}\r\n\r\n.media-body[_ngcontent-%COMP%]{\r\n   \r\n  text-align: center!important;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    text-shadow: 1px 1px #1f421a;\r\n}\r\n\r\n.media-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n\r\n}\r\n\r\n.theFive[_ngcontent-%COMP%]{\r\n    color: #e94235;\r\n    text-shadow: 1px 1px black;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  font-weight: 500;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    padding: 3px;\r\n    border-color: transparent;\r\n}\r\n\r\n@media(max-width:1125px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 20%!important;\r\n    }\r\n}\r\n\r\n@media(max-width:990px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 40%!important;\r\n    }\r\n}\r\n\r\n@media(max-width:850px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 60%!important;\r\n    }\r\n}\r\n\r\n@media(max-width:766px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 100%!important;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]{\r\n        margin-top: 80%!important;\r\n    }\r\n}\r\n\r\n@media(max-width:632px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 125%!important;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]{\r\n        margin-top: 100%!important;\r\n    }\r\n\r\n}\r\n\r\n@media(max-width:560px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 160%!important;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]{\r\n        margin-top: 130%!important;\r\n    }\r\n}\r\n\r\n@media(max-width:500px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 180%!important;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]{\r\n        margin-top: 140%!important;\r\n    }\r\n}\r\n\r\n@media(max-width:480px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 225%!important;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]{\r\n        margin-top: 160%!important;\r\n    }\r\n}\r\n\r\n@media(max-width:440px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 280%!important;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]{\r\n        margin-top: 180%!important;\r\n    }\r\n}\r\n\r\n@media(max-width:400px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 320%!important;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]{\r\n        margin-top: 200%!important;\r\n    }\r\n}\r\n\r\n@media(max-width:380px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 360%!important;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]{\r\n        margin-top: 220%!important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7S0FDSyw0QkFBNEI7QUFDakM7O0FBRUM7SUFDRywwQkFBMEI7QUFDOUI7O0FBRUM7SUFDRyw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjs7QUFDQTs7RUFFRSw0QkFBNEI7QUFDOUI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBR0E7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBOztJQUVJO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7O0FBQ0E7O0lBRUk7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjs7QUFDQTs7SUFFSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5Qjs7QUFFSjs7QUFDQTs7SUFFSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7O0FBQ0E7O0lBRUk7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjs7QUFDQTs7SUFFSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7O0FBQ0E7O0lBRUk7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUNBOztJQUVJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVkaWFDYXJke1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmhlcm97XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG5cclxuIC5oZXJvIHB7XHJcbiAgICBmb250LXdlaWdodDogNTAwIWltcG9ydGFudDtcclxufVxyXG5cclxuIHN0cm9uZ3tcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMxZjQyMWE7XHJcbiAgICBjb2xvcjogIzYyZDE1MjtcclxufVxyXG4ubWVkaWEtYm9keXtcclxuICAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG5cclxuaDF7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjMWY0MjFhO1xyXG59XHJcblxyXG5cclxuLm1lZGlhLWJvZHkgcHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG59XHJcblxyXG4udGhlRml2ZXtcclxuICAgIGNvbG9yOiAjZTk0MjM1O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkIHB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY29sLW1kLTIgLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MTEyNXB4KVxyXG57XHJcbiAgICAucmVzaXple1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTkwcHgpXHJcbntcclxuICAgIC5yZXNpemV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDAlIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjg1MHB4KVxyXG57XHJcbiAgICAucmVzaXple1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo3NjZweClcclxue1xyXG4gICAgLnJlc2l6ZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDAlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50aW1lbGluZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjYzMnB4KVxyXG57XHJcbiAgICAucmVzaXple1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEyNSUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5le1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjU2MHB4KVxyXG57XHJcbiAgICAucmVzaXple1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2MCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5le1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzMCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6NTAwcHgpXHJcbntcclxuICAgIC5yZXNpemV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTgwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTQwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NDgwcHgpXHJcbntcclxuICAgIC5yZXNpemV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjI1JSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTYwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0NDBweClcclxue1xyXG4gICAgLnJlc2l6ZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyODAlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50aW1lbGluZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxODAlIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjQwMHB4KVxyXG57XHJcbiAgICAucmVzaXple1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMyMCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5le1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwMCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6MzgwcHgpXHJcbntcclxuICAgIC5yZXNpemV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzYwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjIwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/home/navbar/navbar.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/Components/home/navbar/navbar.component.ts ***!
    \************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsHomeNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 9,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-sm", "navbar-light", "bg-light", "fixed-top"], ["href", "#", 1, "navbar-brand"], ["src", "https://image.flaticon.com/icons/svg/630/630633.svg", "width", "30", "height", "30", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavId", "aria-controls", "collapsibleNavId", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "d-lg-none"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavId", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " COVID-19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["nav[_ngcontent-%COMP%]{\r\n    background-color: transparent!important;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%]{\r\n   text-shadow: 2px 2px #81f0af;\r\n   font-size: x-large!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtHQUNHLDRCQUE0QjtHQUM1Qiw0QkFBNEI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2hvbWUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zdHJvbmd7XHJcbiAgIHRleHQtc2hhZG93OiAycHggMnB4ICM4MWYwYWY7XHJcbiAgIGZvbnQtc2l6ZTogeC1sYXJnZSFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/home/symptoms/symptoms.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Components/home/symptoms/symptoms.component.ts ***!
    \****************************************************************/

  /*! exports provided: SymptomsComponent */

  /***/
  function srcAppComponentsHomeSymptomsSymptomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SymptomsComponent", function () {
      return SymptomsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SymptomsComponent =
    /*#__PURE__*/
    function () {
      function SymptomsComponent() {
        _classCallCheck(this, SymptomsComponent);
      }

      _createClass(SymptomsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SymptomsComponent;
    }();

    SymptomsComponent.ɵfac = function SymptomsComponent_Factory(t) {
      return new (t || SymptomsComponent)();
    };

    SymptomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SymptomsComponent,
      selectors: [["app-symptoms"]],
      decls: 40,
      vars: 0,
      consts: [[1, "media", "mt-4", "resize", "x"], [1, "d-flex"], ["src", "https://media0.giphy.com/media/KZxeKkHp0zmyaD5a9u/source.gif", "height", "50", "width", "50", "alt", ""], [1, "media-body", "text-dark", 2, "text-align", "start!important"], [2, "color", "#e94235"], [1, "row", "mt-5"], [1, "card", "text-white", 2, "border-color", "transparent"], ["src", "https://workstack.io/img/color-splash.jpg", "alt", "", 1, "card-img", "imgStuff"], [1, "card-img-overlay"], [1, "container"], [1, "row", "py-2", "mt-4", "mb-4"], [1, "col-md-3"], [1, "card"], ["src", "https://image.flaticon.com/icons/svg/2660/2660009.svg", "width", "150", "height", "150", "alt", "", 1, "card-img-top"], [1, "card-body", "text-dark"], [1, "card-titl", "theFive"], ["src", "https://image.flaticon.com/icons/svg/2750/2750262.svg ", "width", "150", "height", "150", "alt", "", 1, "card-img-top"], ["src", "https://image.flaticon.com/icons/svg/2750/2750351.svg", "width", "150", "height", "150", "alt", "", 1, "card-img-top"], ["src", "https://image.flaticon.com/icons/svg/1995/1995849.svg", "width", "150", "height", "150", "alt", "", 1, "card-img-top"], [1, "card-text"]],
      template: function SymptomsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " COVID-19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " SYMPTOMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cough");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "FEVER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tiredness");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Difficulty breathing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "(severe cases)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    padding: 3px;\r\n    border-color: transparent;\r\n}\r\n.theFive[_ngcontent-%COMP%]{\r\n    color: #e94235;\r\n    text-shadow: 1px 1px black;\r\n}\r\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  font-weight: 500;\r\n}\r\nstrong[_ngcontent-%COMP%]{\r\n    text-shadow: 2px 2px #1f421a;\r\n    color: #62d152;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n    text-align: center!important;\r\n}\r\n.imgStuff[_ngcontent-%COMP%]{\r\n    max-height: 456px; \r\n      transform: rotate(180)!important; \r\n      transform: scaleX(1.5)\r\n}\r\n.x[_ngcontent-%COMP%]{\r\n    margin-left: 32%!important;\r\n   }\r\n@media(max-width:1125px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 20%!important;\r\n    }\r\n}\r\n@media(max-width:990px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 40%!important;\r\n    }\r\n}\r\n@media(max-width:850px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        \r\n    }\r\n}\r\n@media(max-width:766px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 150%!important;\r\n    }\r\n}\r\n@media(max-width:632px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 185%!important;\r\n    }\r\n    .imgStuff[_ngcontent-%COMP%]{\r\n        transform: scaleX(1)!important;\r\n    }\r\n}\r\n@media(max-width:560px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 200%!important;\r\n    }\r\n    .imgStuff[_ngcontent-%COMP%]{\r\n        transform: scaleX(1)!important;\r\n    }\r\n    .x[_ngcontent-%COMP%]{\r\n        margin-left: 15%!important;\r\n    }\r\n}\r\n@media(max-width:500px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 260%!important;\r\n    }\r\n    .imgStuff[_ngcontent-%COMP%]{\r\n        transform: scaleX(1)!important;\r\n        \r\n    }\r\n}\r\n@media(max-width:480px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 285%!important;\r\n    }\r\n}\r\n@media(max-width:440px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 280%!important;\r\n    }\r\n}\r\n@media(max-width:400px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 320%!important;\r\n    }\r\n    .x[_ngcontent-%COMP%]{\r\n        margin-left: 5%!important;\r\n    }\r\n}\r\n@media(max-width:380px)\r\n{\r\n    .resize[_ngcontent-%COMP%]{\r\n        margin-top: 360%!important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL3N5bXB0b21zL3N5bXB0b21zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksa0JBQWtCO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksaUJBQWlCO01BQ2YsZ0NBQWdDO01BQ2hDO0FBQ047QUFDQTtJQUNJLDBCQUEwQjtHQUMzQjtBQUVIOztJQUVJO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7QUFFQTs7SUFFSTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKO0FBQ0E7O0lBRUk7UUFDSSwrQkFBK0I7SUFDbkM7QUFDSjtBQUNBOztJQUVJO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7QUFFQTs7SUFFSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0o7QUFDQTs7SUFFSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjtBQUNBOztJQUVJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSw4QkFBOEI7O0lBRWxDO0FBQ0o7QUFDQTs7SUFFSTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKO0FBQ0E7O0lBRUk7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjtBQUNBOztJQUVJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjtBQUNBOztJQUVJO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2hvbWUvc3ltcHRvbXMvc3ltcHRvbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtMyAuY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4udGhlRml2ZXtcclxuICAgIGNvbG9yOiAjZTk0MjM1O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkIHB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5zdHJvbmd7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMWY0MjFhO1xyXG4gICAgY29sb3I6ICM2MmQxNTI7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1nU3R1ZmZ7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NTZweDsgXHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MCkhaW1wb3J0YW50OyBcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS41KVxyXG59XHJcbi54e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMyJSFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MTEyNXB4KVxyXG57XHJcbiAgICAucmVzaXple1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTkwcHgpXHJcbntcclxuICAgIC5yZXNpemV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDAlIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjg1MHB4KVxyXG57XHJcbiAgICAucmVzaXple1xyXG4gICAgICAgIC8qIG1hcmdpbi10b3A6IDYwJSFpbXBvcnRhbnQ7ICovXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo3NjZweClcclxue1xyXG4gICAgLnJlc2l6ZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTAlIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo2MzJweClcclxue1xyXG4gICAgLnJlc2l6ZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxODUlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbWdTdHVmZntcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo1NjBweClcclxue1xyXG4gICAgLnJlc2l6ZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMDAlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbWdTdHVmZntcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAueHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTUlIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjUwMHB4KVxyXG57XHJcbiAgICAucmVzaXple1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI2MCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmltZ1N0dWZme1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjQ4MHB4KVxyXG57XHJcbiAgICAucmVzaXple1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4NSUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6NDQwcHgpXHJcbntcclxuICAgIC5yZXNpemV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjgwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0MDBweClcclxue1xyXG4gICAgLnJlc2l6ZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMjAlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC54e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDozODBweClcclxue1xyXG4gICAgLnJlc2l6ZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNjAlIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SymptomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-symptoms',
          templateUrl: './symptoms.component.html',
          styleUrls: ['./symptoms.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Components/home/videolinks/videolinks.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Components/home/videolinks/videolinks.component.ts ***!
    \********************************************************************/

  /*! exports provided: VideolinksComponent */

  /***/
  function srcAppComponentsHomeVideolinksVideolinksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideolinksComponent", function () {
      return VideolinksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VideolinksComponent =
    /*#__PURE__*/
    function () {
      function VideolinksComponent() {
        _classCallCheck(this, VideolinksComponent);
      }

      _createClass(VideolinksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VideolinksComponent;
    }();

    VideolinksComponent.ɵfac = function VideolinksComponent_Factory(t) {
      return new (t || VideolinksComponent)();
    };

    VideolinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideolinksComponent,
      selectors: [["app-videolinks"]],
      decls: 30,
      vars: 0,
      consts: [[1, "card", "xcard", "text-white", "mt-5"], ["src", "https://workstack.io/img/color-splash.jpg", "alt", "", 1, "card-img", 2, "transform", "rotate(180deg)"], [1, "card-img-overlay", 2, "text-align", "center"], [1, "card-title", "text-dark", "mt-4", 2, "margin-top", "13%!important"], [1, "container"], [1, "row", "mt-5"], [1, "col-md-4"], [1, "card", "p-3"], [1, "embed-responsive", "embed-responsive-16by9"], ["src", "https://www.youtube.com/embed/1APwq1df6Mw?rel=0", "allowfullscreen", "", 1, "embed-responsive-item"], [1, "card-body"], [1, "card-title"], ["src", "https://www.youtube.com/embed/oGruT7Fd54E?rel=0", "allowfullscreen", "", 1, "embed-responsive-item"], ["src", "https://www.youtube.com/embed/BtN-goy9VOY?rel=0", "allowfullscreen", "", 1, "embed-responsive-item"]],
      template: function VideolinksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "HELPFUL VIDEOS ON ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "How to protect yourself against COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "iframe", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Symptoms of Coronavirus Disease 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "iframe", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "The Coronavirus Explained");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".xcard[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border-color: transparent!important;\r\n}\r\n\r\n.embed-responsive[_ngcontent-%COMP%]{\r\n    border-radius: 10px!important;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    \r\n    background-color: transparent;\r\n    border-color: transparent;\r\n    color: black;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    text-shadow: 2px 2px black;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%]{\r\n    text-shadow: 2px 2px #1f421a;\r\n    color: #62d152;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL3ZpZGVvbGlua3MvdmlkZW9saW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaG9tZS92aWRlb2xpbmtzL3ZpZGVvbGlua3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi54Y2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lbWJlZC1yZXNwb25zaXZle1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbnN0cm9uZ3tcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMxZjQyMWE7XHJcbiAgICBjb2xvcjogIzYyZDE1MjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideolinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-videolinks',
          templateUrl: './videolinks.component.html',
          styleUrls: ['./videolinks.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/home.service.ts":
  /*!******************************************!*\
    !*** ./src/app/Services/home.service.ts ***!
    \******************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppServicesHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HomeService =
    /*#__PURE__*/
    function () {
      function HomeService(_http) {
        _classCallCheck(this, HomeService);

        this._http = _http;
      }

      _createClass(HomeService, [{
        key: "getCountryData",
        value: function getCountryData() {
          return this._http.get('https://coronavirus-19-api.herokuapp.com/countries/south%20africa');
        }
      }]);

      return HomeService;
    }();

    HomeService.ɵfac = function HomeService_Factory(t) {
      return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HomeService,
      factory: HomeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Components/home/home.component */
    "./src/app/Components/home/home.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'covidWebsite';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
        }
      },
      directives: [_Components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Components/home/home.component */
    "./src/app/Components/home/home.component.ts");
    /* harmony import */


    var _Components_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/home/navbar/navbar.component */
    "./src/app/Components/home/navbar/navbar.component.ts");
    /* harmony import */


    var _Components_home_heroimage_heroimage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Components/home/heroimage/heroimage.component */
    "./src/app/Components/home/heroimage/heroimage.component.ts");
    /* harmony import */


    var _Components_home_fivesteps_fivesteps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Components/home/fivesteps/fivesteps.component */
    "./src/app/Components/home/fivesteps/fivesteps.component.ts");
    /* harmony import */


    var _Components_home_videolinks_videolinks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Components/home/videolinks/videolinks.component */
    "./src/app/Components/home/videolinks/videolinks.component.ts");
    /* harmony import */


    var _Components_home_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Components/home/symptoms/symptoms.component */
    "./src/app/Components/home/symptoms/symptoms.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _Components_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _Components_home_heroimage_heroimage_component__WEBPACK_IMPORTED_MODULE_6__["HeroimageComponent"], _Components_home_fivesteps_fivesteps_component__WEBPACK_IMPORTED_MODULE_7__["FivestepsComponent"], _Components_home_videolinks_videolinks_component__WEBPACK_IMPORTED_MODULE_8__["VideolinksComponent"], _Components_home_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_9__["SymptomsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _Components_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _Components_home_heroimage_heroimage_component__WEBPACK_IMPORTED_MODULE_6__["HeroimageComponent"], _Components_home_fivesteps_fivesteps_component__WEBPACK_IMPORTED_MODULE_7__["FivestepsComponent"], _Components_home_videolinks_videolinks_component__WEBPACK_IMPORTED_MODULE_8__["VideolinksComponent"], _Components_home_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_9__["SymptomsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\21614\Desktop\Angular\Covid\covidWebsite\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map