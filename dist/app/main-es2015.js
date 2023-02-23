(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Dylan/Downloads/iaqFrontend/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    //apiBaseUrl: 'http://iaqhub.eu-west-1.elasticbeanstalk.com/api/iaq',
    apiBaseUrl: 'http://myiaqhub.ddns.net:8080/api/iaq',
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

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DataService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiBaseUrl;
    }
    getData() {
        return this.http.get(`${this.apiServerUrl}`);
    }
    getKitchenData() {
        return this.http.get(`${this.apiServerUrl}/data/chart/kitchen`);
    }
    getBarData() {
        return this.http.get(`${this.apiServerUrl}/data/chart/bar`);
    }
    getOfficeData() {
        return this.http.get(`${this.apiServerUrl}/data/chart/office`);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/kitchen/kitchen.component */ "jVS5");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [src_app_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([{ path: 'kitchen', component: _components_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }]),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]] }); })();


/***/ }),

/***/ "jVS5":
/*!*********************************************************!*\
  !*** ./src/app/components/kitchen/kitchen.component.ts ***!
  \*********************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node_modules/chart.js */ "MO+k");
/* harmony import */ var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data.service */ "R7Hv");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.timestamp = [];
        this.temperature = [];
        this.gas = [];
        this.pres = [];
        this.hum = [];
        this.score = [];
        this.location = [];
        this.formattedTime = [];
        this.kitchenavg = [];
        this.kitchenhouravg = [];
        setInterval(() => {
            this.now = new Date().toString().split(' ')[4];
        }, 1);
    }
    ngOnInit() {
        this.getOfficeData();
        this.timestamp = [];
        this.temperature = [];
        this.gas = [];
        this.pres = [];
        this.hum = [];
        this.score = [];
        this.location = [];
        this.formattedTime = [];
        this.kitchenavg = [];
        this.kitchenhouravg = [];
        clearInterval(this.officeTimer);
        clearInterval(this.barTimer);
        clearInterval(this.kitchenTimer);
        clearInterval(this.countdownTimer);
        this.startTimer();
        jquery__WEBPACK_IMPORTED_MODULE_1__('#last-recorded').html('DATA LOADING..');
        this.kitchenTimer = setInterval(() => {
            clearInterval(this.countdownTimer);
            this.getOfficeData();
            this.startTimer();
        }, 60000);
    }
    kitchenFunc() {
        this.timestamp = [];
        this.temperature = [];
        this.gas = [];
        this.pres = [];
        this.hum = [];
        this.score = [];
        this.location = [];
        this.formattedTime = [];
        this.kitchenavg = [];
        this.kitchenhouravg = [];
        clearInterval(this.officeTimer);
        clearInterval(this.barTimer);
        clearInterval(this.kitchenTimer);
        clearInterval(this.countdownTimer);
        this.startTimer();
        jquery__WEBPACK_IMPORTED_MODULE_1__('#last-recorded').html('DATA LOADING..');
        this.kitchenTimer = setInterval(() => {
            clearInterval(this.countdownTimer);
            this.getKitchenData();
            this.startTimer();
        }, 60000);
    }
    officeFunc() {
        this.timestamp = [];
        this.temperature = [];
        this.gas = [];
        this.pres = [];
        this.hum = [];
        this.score = [];
        this.location = [];
        this.formattedTime = [];
        this.kitchenavg = [];
        this.kitchenhouravg = [];
        clearInterval(this.officeTimer);
        clearInterval(this.barTimer);
        clearInterval(this.kitchenTimer);
        clearInterval(this.countdownTimer);
        jquery__WEBPACK_IMPORTED_MODULE_1__('#last-recorded').html('DATA LOADING...');
        this.startTimer();
        this.officeTimer = setInterval(() => {
            clearInterval(this.countdownTimer);
            this.getOfficeData();
            this.startTimer();
        }, 60000);
    }
    barFunc() {
        this.timestamp = [];
        this.temperature = [];
        this.gas = [];
        this.pres = [];
        this.hum = [];
        this.score = [];
        this.location = [];
        this.formattedTime = [];
        this.kitchenavg = [];
        this.kitchenhouravg = [];
        clearInterval(this.officeTimer);
        clearInterval(this.barTimer);
        clearInterval(this.kitchenTimer);
        clearInterval(this.countdownTimer);
        jquery__WEBPACK_IMPORTED_MODULE_1__('#last-recorded').html('DATA LOADING...');
        this.startTimer();
        this.barTimer = setInterval(() => {
            clearInterval(this.countdownTimer);
            this.getBarData();
            this.startTimer();
        }, 60000);
    }
    stopDataFunc() {
        clearInterval(this.kitchenTimer);
        clearInterval(this.officeTimer);
        clearInterval(this.barTimer);
        clearInterval(this.countdownTimer);
        jquery__WEBPACK_IMPORTED_MODULE_1__('#last-recorded').html('LIVE DATA STOPPED');
    }
    startTimer() {
        this.counter = { sec: 60 }; // choose whatever you want
        this.countdownTimer = setInterval(() => {
            if (this.counter.sec - 1 == -1) {
                this.counter.sec = 59;
            }
            else
                this.counter.sec -= 1;
            if (this.counter.sec == 0)
                clearInterval(this.countdownTimer);
        }, 1000);
    }
    getKitchenData() {
        this.dataService.getKitchenData().subscribe((response) => {
            this.data = response;
            for (var i in response) {
                this.timestamp.push(response[i].timestamp);
                this.temperature.push(response[i].temp);
                this.gas.push(response[i].gas);
                this.pres.push(response[i].pres);
                this.hum.push(response[i].hum);
                this.score.push(response[i].score);
                this.location.push(response[i].location);
                this.kitchenavg.push(response[i].kitchenavg);
                this.kitchenhouravg.push(response[i].kitchenhouravg);
                this.formattedTime.push(moment__WEBPACK_IMPORTED_MODULE_2__(this.timestamp[this.timestamp.length - 1], 'YYYY-MM-DD HH:mm:ss').fromNow());
                jquery__WEBPACK_IMPORTED_MODULE_1__('#temp').html(this.temperature[this.temperature.length - 1] + '\u00B0C');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#hum').html(this.hum[this.hum.length - 1] + '%');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#pres').html(this.pres[this.pres.length - 1] + 'hPa');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#gas').html(this.gas[this.gas.length - 1] + 'k&#8486;');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#kitchenavg').html(this.kitchenavg[this.kitchenavg.length - 1] + 'k&#8486;');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#kitchenhouravg').html(this.kitchenhouravg[this.kitchenhouravg.length - 1] + 'k&#8486;');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#score').html(this.score[this.score.length - 1] + ' IAQ');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#last-recorded').html(this.formattedTime[this.formattedTime.length - 1]);
                jquery__WEBPACK_IMPORTED_MODULE_1__('#location').html(this.location[this.location.length - 1]);
                /* IAQ Alerts according BME680 datasheet */
                if (this.score[this.score.length - 1] <= 50) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-success" role="alert">Air Quality - Good!</div>');
                }
                else if (this.score[this.score.length - 1] >= 51 &&
                    this.score[this.score.length - 1] <= 100) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-success" role="alert">Air Quality - Average!</div>');
                }
                else if (this.score[this.score.length - 1] >= 101 &&
                    this.score[this.score.length - 1] <= 150) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-warning" role="alert">Air Quality - Unhealthy for Sensitive Groups!</div>');
                }
                else if (this.score[this.score.length - 1] >= 151 &&
                    this.score[this.score.length - 1] <= 200) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-warning" role="alert">Air Quality - Unhealthy!</div>');
                }
                else if (this.score[this.score.length - 1] >= 201 &&
                    this.score[this.score.length - 1] <= 300) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-danger" role="alert">Air Quality - Very Unhealthy!</div>');
                }
                else if (this.score[this.score.length - 1] >= 301) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-danger" role="alert">Air Quality - Hazardous!</div>');
                }
                if (this.timestamp.length == 60) {
                    this.timestamp.shift();
                }
                if (this.temperature.length == 60) {
                    this.temperature.shift();
                }
                if (this.hum.length == 60) {
                    this.hum.shift();
                }
                if (this.pres.length == 60) {
                    this.pres.shift();
                }
                if (this.gas.length == 60) {
                    this.gas.shift();
                }
                if (this.score.length == 60) {
                    this.score.shift();
                }
            }
            var tempGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('tempGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'Temperature Data (\u00B0C)',
                            backgroundColor: '#0275d8',
                            borderColor: '#0275d8',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.temperature,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: {
                        duration: 0,
                    },
                },
            });
            var presGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('presGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'Pressure Data (hPa)',
                            backgroundColor: '#5cb85c',
                            borderColor: '#5cb85c',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.pres,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: {
                        duration: 0,
                    },
                },
            });
            var humGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('humGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'Humidity Data (%)',
                            backgroundColor: '#5bc0de',
                            borderColor: '#5bc0de',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.hum,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: false,
                },
            });
            var gasGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('gasGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'Gas Resistance (k\u2126)',
                            backgroundColor: '#f0ad4e',
                            borderColor: '#f0ad4e',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.gas,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: {
                        duration: 0,
                    },
                },
            });
            var scoreGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('scoreGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'IAQ Score',
                            backgroundColor: '#ff0000',
                            borderColor: '#ff0000',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.score,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: {
                        duration: 0,
                    },
                },
            });
        });
    }
    getOfficeData() {
        this.dataService.getOfficeData().subscribe((response) => {
            this.data = response;
            for (var i in response) {
                this.timestamp.push(response[i].timestamp);
                this.temperature.push(response[i].temp);
                this.gas.push(response[i].gas);
                this.pres.push(response[i].pres);
                this.hum.push(response[i].hum);
                this.score.push(response[i].score);
                this.location.push(response[i].location);
                this.kitchenavg.push(response[i].kitchenavg);
                this.kitchenhouravg.push(response[i].kitchenhouravg);
                this.formattedTime.push(moment__WEBPACK_IMPORTED_MODULE_2__(this.timestamp[this.timestamp.length - 1], 'YYYY-MM-DD HH:mm:ss').fromNow());
                jquery__WEBPACK_IMPORTED_MODULE_1__('#temp').html(this.temperature[this.temperature.length - 1] + '\u00B0C');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#hum').html(this.hum[this.hum.length - 1] + '%');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#pres').html(this.pres[this.pres.length - 1] + 'hPa');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#gas').html(this.gas[this.gas.length - 1] + 'k&#8486;');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#kitchenavg').html(this.kitchenavg[this.kitchenavg.length - 1] + 'k&#8486;');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#kitchenhouravg').html(this.kitchenhouravg[this.kitchenhouravg.length - 1] + 'k&#8486;');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#score').html(this.score[this.score.length - 1] + ' IAQ');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#last-recorded').html(this.formattedTime[this.formattedTime.length - 1]);
                jquery__WEBPACK_IMPORTED_MODULE_1__('#location').html(this.location[this.location.length - 1]);
                /* IAQ Alerts according BME680 datasheet */
                if (this.score[this.score.length - 1] <= 50) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-success" role="alert">Air Quality - Good!</div>');
                }
                else if (this.score[this.score.length - 1] >= 51 &&
                    this.score[this.score.length - 1] <= 100) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-success" role="alert">Air Quality - Average!</div>');
                }
                else if (this.score[this.score.length - 1] >= 101 &&
                    this.score[this.score.length - 1] <= 150) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-warning" role="alert">Air Quality - Unhealthy for Sensitive Groups!</div>');
                }
                else if (this.score[this.score.length - 1] >= 151 &&
                    this.score[this.score.length - 1] <= 200) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-warning" role="alert">Air Quality - Unhealthy!</div>');
                }
                else if (this.score[this.score.length - 1] >= 201 &&
                    this.score[this.score.length - 1] <= 300) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-danger" role="alert">Air Quality - Very Unhealthy!</div>');
                }
                else if (this.score[this.score.length - 1] >= 301) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-danger" role="alert">Air Quality - Hazardous!</div>');
                }
                if (this.timestamp.length == 60) {
                    this.timestamp.shift();
                }
                if (this.temperature.length == 60) {
                    this.temperature.shift();
                }
                if (this.hum.length == 60) {
                    this.hum.shift();
                }
                if (this.pres.length == 60) {
                    this.pres.shift();
                }
                if (this.gas.length == 60) {
                    this.gas.shift();
                }
                if (this.score.length == 60) {
                    this.score.shift();
                }
            }
            var tempGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('tempGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'Temperature Data (\u00B0C)',
                            backgroundColor: '#0275d8',
                            borderColor: '#0275d8',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.temperature,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: {
                        duration: 0,
                    },
                },
            });
            var presGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('presGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'Pressure Data (hPa)',
                            backgroundColor: '#5cb85c',
                            borderColor: '#5cb85c',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.pres,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: {
                        duration: 0,
                    },
                },
            });
            var humGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('humGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'Humidity Data (%)',
                            backgroundColor: '#5bc0de',
                            borderColor: '#5bc0de',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.hum,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: false,
                },
            });
            var gasGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('gasGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'Gas Resistance (k\u2126)',
                            backgroundColor: '#f0ad4e',
                            borderColor: '#f0ad4e',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.gas,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: {
                        duration: 0,
                    },
                },
            });
            var scoreGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('scoreGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'IAQ Score',
                            backgroundColor: '#ff0000',
                            borderColor: '#ff0000',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.score,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: {
                        duration: 0,
                    },
                },
            });
        });
    }
    getBarData() {
        this.dataService.getBarData().subscribe((response) => {
            this.data = response;
            for (var i in response) {
                this.timestamp.push(response[i].timestamp);
                this.temperature.push(response[i].temp);
                this.gas.push(response[i].gas);
                this.pres.push(response[i].pres);
                this.hum.push(response[i].hum);
                this.score.push(response[i].score);
                this.location.push(response[i].location);
                this.kitchenavg.push(response[i].kitchenavg);
                this.kitchenhouravg.push(response[i].kitchenhouravg);
                this.formattedTime.push(moment__WEBPACK_IMPORTED_MODULE_2__(this.timestamp[this.timestamp.length - 1], 'YYYY-MM-DD HH:mm:ss').fromNow());
                jquery__WEBPACK_IMPORTED_MODULE_1__('#temp').html(this.temperature[this.temperature.length - 1] + '\u00B0C');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#hum').html(this.hum[this.hum.length - 1] + '%');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#pres').html(this.pres[this.pres.length - 1] + 'hPa');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#gas').html(this.gas[this.gas.length - 1] + 'k&#8486;');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#kitchenavg').html(this.kitchenavg[this.kitchenavg.length - 1] + 'k&#8486;');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#kitchenhouravg').html(this.kitchenhouravg[this.kitchenhouravg.length - 1] + 'k&#8486;');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#score').html(this.score[this.score.length - 1] + ' IAQ');
                jquery__WEBPACK_IMPORTED_MODULE_1__('#last-recorded').html(this.formattedTime[this.formattedTime.length - 1]);
                jquery__WEBPACK_IMPORTED_MODULE_1__('#location').html(this.location[this.location.length - 1]);
                /* IAQ Alerts according BME680 datasheet */
                if (this.score[this.score.length - 1] <= 50) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-success" role="alert">Air Quality - Good!</div>');
                }
                else if (this.score[this.score.length - 1] >= 51 &&
                    this.score[this.score.length - 1] <= 100) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-success" role="alert">Air Quality - Average!</div>');
                }
                else if (this.score[this.score.length - 1] >= 101 &&
                    this.score[this.score.length - 1] <= 150) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-warning" role="alert">Air Quality - Unhealthy for Sensitive Groups!</div>');
                }
                else if (this.score[this.score.length - 1] >= 151 &&
                    this.score[this.score.length - 1] <= 200) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-warning" role="alert">Air Quality - Unhealthy!</div>');
                }
                else if (this.score[this.score.length - 1] >= 201 &&
                    this.score[this.score.length - 1] <= 300) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-danger" role="alert">Air Quality - Very Unhealthy!</div>');
                }
                else if (this.score[this.score.length - 1] >= 301) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#IAQ-box').html('<div class="alert alert-danger" role="alert">Air Quality - Hazardous!</div>');
                }
                if (this.timestamp.length == 60) {
                    this.timestamp.shift();
                }
                if (this.temperature.length == 60) {
                    this.temperature.shift();
                }
                if (this.hum.length == 60) {
                    this.hum.shift();
                }
                if (this.pres.length == 60) {
                    this.pres.shift();
                }
                if (this.gas.length == 60) {
                    this.gas.shift();
                }
                if (this.score.length == 60) {
                    this.score.shift();
                }
            }
            var tempGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('tempGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'Temperature Data (\u00B0C)',
                            backgroundColor: '#0275d8',
                            borderColor: '#0275d8',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.temperature,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: {
                        duration: 0,
                    },
                },
            });
            var presGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('presGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'Pressure Data (hPa)',
                            backgroundColor: '#5cb85c',
                            borderColor: '#5cb85c',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.pres,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: {
                        duration: 0,
                    },
                },
            });
            var humGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('humGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'Humidity Data (%)',
                            backgroundColor: '#5bc0de',
                            borderColor: '#5bc0de',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.hum,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: false,
                },
            });
            var gasGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('gasGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'Gas Resistance (k\u2126)',
                            backgroundColor: '#f0ad4e',
                            borderColor: '#f0ad4e',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.gas,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: {
                        duration: 0,
                    },
                },
            });
            var scoreGraph = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('scoreGraph', {
                type: 'line',
                data: {
                    labels: this.timestamp,
                    datasets: [
                        {
                            label: 'IAQ Score',
                            backgroundColor: '#ff0000',
                            borderColor: '#ff0000',
                            hoverBackgroundColor: '#CCCCCC',
                            hoverBorderColor: '#666666',
                            data: this.score,
                            fill: false,
                        },
                    ],
                },
                options: {
                    animation: {
                        duration: 0,
                    },
                },
            });
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["kitchen-root"]], decls: 198, vars: 2, consts: [["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"], [1, "container-fluid"], [1, "row", 2, "width", "100%"], [1, "col-sm-12"], [1, "row"], [1, "col"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-grey"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", "type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", "type", "button", 1, "btn", "btn-outline-grey", 3, "click"], [1, "col-sm-2"], [1, "card", "shadow", "mb-10"], [1, "card-header", "py-3"], [1, "m-0", "font-weight-bold", "text-info", 2, "text-align", "center"], [1, "card", "border-left-info", "shadow"], [1, "card-body"], [1, "m-0", "font-weight-bold", "text-dark", 2, "text-align", "center"], [1, "col-sm-10"], [1, "col-sm-4"], [1, "m-0", "font-weight-bold", "text-danger", 2, "text-align", "center"], [1, "card", "border-left-danger", "shadow"], ["id", "location", 1, "m-0", "font-weight-bold", "text-dark", 2, "text-align", "center"], ["id", "score", 1, "m-0", "font-weight-bold", "text-dark", 2, "text-align", "center"], ["id", "IAQ-box", 2, "text-align", "center"], [1, "col-xl-3", "col-md-6", "mb-4"], [1, "card", "border-left-primary", "shadow", "h-100", "py-2"], [1, "row", "no-gutters", "align-items-center"], [1, "col", "mr-2"], [1, "text-xs", "font-weight-bold", "text-primary", "text-uppercase", "mb-1"], ["id", "temp", 1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], [1, "col-auto"], [1, "fa", "fa-thermometer-half", "fa-2x", "text-gray-300"], [1, "card", "border-left-success", "shadow", "h-100", "py-2"], [1, "text-xs", "font-weight-bold", "text-success", "text-uppercase", "mb-1"], ["id", "pres", 1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], [1, "fas", "fa-tachometer-alt", "fa-2x", "text-gray-300"], [1, "card", "border-left-info", "shadow", "h-100", "py-2"], [1, "text-xs", "font-weight-bold", "text-info", "text-uppercase", "mb-1"], ["id", "hum", 1, "h5", "mb-0", "mr-3", "font-weight-bold", "text-gray-800"], [1, "fas", "fa-tint", "fa-2x", "text-gray-300"], [1, "card", "border-left-warning", "shadow", "h-100", "py-2"], [1, "text-xs", "font-weight-bold", "text-warning", "text-uppercase", "mb-1"], ["id", "gas", 1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], [1, "fas", "fa-burn", "fa-2x", "text-gray-300"], [1, "card", "border-left-danger", "shadow", "h-100", "py-2"], [1, "text-xs", "font-weight-bold", "text-danger", "text-uppercase", "mb-1"], ["id", "kitchenavg", 1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], ["id", "kitchenhouravg", 1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], ["id", "last-recorded", 1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], [1, "fas", "fa-clock", "fa-2x", "text-gray-300"], [1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], [1, "col-xl-12"], [1, "card", "shadow", "mb-4"], [1, "card-header", "py-3", "d-flex", "flex-row", "align-items-center", "justify-content-between"], [1, "m-0", "font-weight-bold", "text-primary"], [1, "chart-area"], ["id", "tempGraph", 2, "display", "block", "height", "100%", "width", "100%"], [1, "m-0", "font-weight-bold", "text-success"], ["id", "presGraph", 2, "display", "block", "height", "100%", "width", "100%"], [1, "m-0", "font-weight-bold", "text-info"], ["id", "humGraph", 2, "display", "block", "height", "100%", "width", "100%"], [1, "m-0", "font-weight-bold", "text-warning"], ["id", "gasGraph", 2, "display", "block", "height", "100%", "width", "100%"], [1, "m-0", "font-weight-bold", "text-danger"], ["id", "scoreGraph", 2, "display", "block", "height", "100%", "width", "100%"], [1, "sticky-footer", "bg-white"], [1, "container", "my-auto"], [1, "copyright", "text-center", "my-auto"], ["href", "#page-top", 1, "scroll-to-top", "rounded"], [1, "fas", "fa-angle-up"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Change Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.kitchenFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Kitchen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() { return ctx.officeFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Office ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() { return ctx.barFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Bar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() { return ctx.stopDataFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Stop Live Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Data Update - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Location - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Indoor Air Quality (IAQ) Score - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, " Overall Air Quality - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Temperature (Celcius) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " \u00B0C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, " Pressure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " hPa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, " Humidity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, " % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, " Gas Resistance (\u2126) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, " 24 hour gas average (\u2126) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](112, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, " 1 Hour gas average (\u2126) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](120, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, " Last Updated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, " current time (BST) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](144, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "h6", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, " Temperature Time Series ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "canvas", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, " Pressure Time Series ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "canvas", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, " Humidity Time Series ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](171, "canvas", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, " Gas Resistance Time Series ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](180, "canvas", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, " Indoor Air Quality Score (IAQ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](189, "canvas", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](190, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "footer", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "IoT Air Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](197, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.counter.sec, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.now, " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJraXRjaGVuLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map