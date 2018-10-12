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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100%; margin-top: -10px;width: 100%;\">\n  <div style=\"display: flex; margin-left: 120px; align-items: center;\">\n    <h1>\n      DICOM Viewer!\n    </h1>\n      \n\n        <input style=\"font-size:12pt; margin-left:150px;\" type=\"file\" multiple accept=\"application/dicom\" id=\"imagens\" title=\"selecione arquivos de imagens\"\n        (change)=\"loadDICOMImages($event.target.files)\">\n\n      \n\n  </div>\n\n  <div style=\"display: flex;height: calc(100% - 90px); width:100%;\">\n    <dicom-viewer [enableViewerTools]=\"true\" style=\"height:100%; width:100%; margin: 10px;\"></dicom-viewer>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dicom_viewer_dicom_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dicom-viewer/dicom-viewer.component */ "./src/app/dicom-viewer/dicom-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        cornerstoneWADOImageLoader.external.cornerstone = cornerstone; // inicializa WADO Image loader
        // configura codecs e web workers
        cornerstoneWADOImageLoader.webWorkerManager.initialize({
            webWorkerPath: './assets/cornerstone/webworkers/cornerstoneWADOImageLoaderWebWorker.js',
            taskConfiguration: {
                'decodeTask': {
                    codecsPath: './assets/cornerstone/codecs/cornerstoneWADOImageLoaderCodecs.js'
                }
            }
        });
    };
    /**
     * Load selected DICOM images
     *
     * @param files list of selected dicom files
     */
    AppComponent.prototype.loadDICOMImages = function (files) {
        if (files && files.length > 0) {
            var imageList = [];
            //cornerstoneWADOImageLoader.wadouri.fileManager.purge();
            cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.purge();
            // loop thru the File list and build a list of wadouri imageIds (dicomfile:)
            for (var i = 0; i < files.length; i++) {
                var dicomFile = files[i];
                var imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(dicomFile);
                imageList.push(imageId);
            }
            // now load all Images, using their wadouri
            this.viewPort.loadStudyImages(imageList);
        }
        else
            alert('Escolha imagens DICOM a exibir.');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_dicom_viewer_dicom_viewer_component__WEBPACK_IMPORTED_MODULE_1__["DICOMViewerComponent"]),
        __metadata("design:type", _dicom_viewer_dicom_viewer_component__WEBPACK_IMPORTED_MODULE_1__["DICOMViewerComponent"])
    ], AppComponent.prototype, "viewPort", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dicom_viewer_dicom_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dicom-viewer/dicom-viewer.component */ "./src/app/dicom-viewer/dicom-viewer.component.ts");
/* harmony import */ var _directives_cornerstone_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/cornerstone.directive */ "./src/app/directives/cornerstone.directive.ts");
/* harmony import */ var _directives_thumbnail_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/thumbnail.directive */ "./src/app/directives/thumbnail.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dicom_viewer_dicom_viewer_component__WEBPACK_IMPORTED_MODULE_6__["DICOMViewerComponent"],
                _directives_cornerstone_directive__WEBPACK_IMPORTED_MODULE_7__["CornerstoneDirective"],
                _directives_thumbnail_directive__WEBPACK_IMPORTED_MODULE_8__["ThumbnailDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dicom-viewer/dicom-viewer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dicom-viewer/dicom-viewer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-default {\n    color: #ffffff;\n    background-color: #424242;\n    border-color: #424242;\n    font-size: 24pt;\n    background-image: none;\n    text-shadow: none;\n}\n\n.thumbnailSelector {\n    width:106px;\n    float:left;\n    margin-left:5px;\n    height: 100%;\n    background-color: #424242;\n}\n\n.thumbnails {\n    margin:0px;\n    margin-bottom: 0px;\n    overflow-y:scroll;\n    overflow-x:hidden;\n}\n\n.csthumbnail {\n    color: white;\n    background-color:black;\n    width:100px;\n    height:100px;\n    border: 0px;\n    padding: 0px;\n}\n\na.list-group-item {\n    background-color: black;\n    padding: 2px;\n    border: 1px solid #424242;\n    z-index: 5;\n}\n\na.list-group-item.active, a.list-group-item.active:hover, a.list-group-item.active:focus {\n    background-color: #424242;\n    border-color: #4e4e4e;\n    background-image: linear-gradient(red, red, red);\n}\n"

/***/ }),

/***/ "./src/app/dicom-viewer/dicom-viewer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dicom-viewer/dicom-viewer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; width:100%; height: 100%;\">\n    <div class=\"thumbnailSelector\">\n        <div class=\"thumbnails list-group\" style=\"height: 100%;\">\n            <a *ngFor=\"let series of seriesList; let i=index\" [ngClass]=\"{'active': currentSeriesIndex === i}\" class=\"list-group-item\" oncontextmenu=\"return false\" unselectable=\"on\" onselectstart=\"return false;\"\n                onmousedown=\"return false;\" (click)=\"showSeries(i)\">\n                <div thumbnail [imageData]=\"series.imageList[0]\" class=\"csthumbnail\" oncontextmenu=\"return false\" unselectable=\"on\" onselectstart=\"return false;\"\n                    onmousedown=\"return false;\">\n                </div>\n                <div class=\"text-center small\">{{series.seriesDescription}}</div>\n            </a>\n        </div>\n    </div>\n\n    <!--container where image will be loaded-->\n    <div style=\"margin-left: 5px; overflow: hidden; width: 100%; height: 100%; background-color: #424242;\">\n\n        <!-- Toolbar -->\n        <div>\n            <div class=\"btn-group\">\n                <div class=\"btn-group\" *ngIf=\"enableViewerTools\">\n                    \n                    <!-- WW/WL -->\n                    <button type=\"button\" (click)=\"enableWindowing()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Janelamento\"><span class=\"fa fa-sun\"></span></button>\n                    <!-- Invert -->\n                    <button type=\"button\" (click)=\"invertImage()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Inverte\"><span class=\"fa fa-adjust\"></span></button>\n                    <!-- Zoom -->\n                    <button type=\"  button\" (click)=\"enableZoom()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Zoom\"><span class=\"fa fa-search\"></span></button>\n                    <!-- Pan -->\n                    <button type=\"button\" (click)=\"enablePan()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Pan\"><span class=\"fa fa-arrows-alt\"></span></button>\n                    <!-- Stack scroll -->\n                    <button type=\"button\" (click)=\"enableScroll()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Navega\"><span class=\"fa fa-bars\"></span></button>\n                    <!-- Length measurement -->\n                    <button type=\"button\" (click)=\"enableLength()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tamanho\"><span class=\"fa fa-arrows-alt-v\"></span></button>\n                    <!-- Angle measurement -->\n                    <button type=\"button\" (click)=\"enableAngle()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Ângulo\"><span class=\"fa fa-angle-left\"></span></button>\n                    <!-- Pixel probe -->\n                    <button type=\"button\" (click)=\"enableProbe()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Pixel Probe\"><span class=\"fa fa-dot-circle\"></span></button>\n                    <!-- Elliptical ROI -->\n                    <button type=\"button\" (click)=\"enableElliptical()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Elliptical ROI\"><span class=\"fa fa-circle\"></span></button>\n                    <!-- Rectangle ROI -->\n                    <button type=\"button\" (click)=\"enableRectangle()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Rectangle ROI\"><span class=\"fa fa-square\"></span></button>\n                    <!-- Reset Image -->\n                    <button type=\"button\" (click)=\"resetImage()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Restaura Imagem\"><span class=\"fa fa-window-restore\"></span></button>\n                </div>\n                <div class=\"btn-group\">\n                    <!-- Play clip -->\n                    <button type=\"button\" (click)=\"playClip()\" style=\"border-left: 1px dotted white;\" class=\"btn btn-sm btn-default\"\n                        data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Play Clip\"><span class=\"fa fa-play\"></span></button>\n                    <!-- Stop clip -->\n                    <button type=\"button\" (click)=\"stopClip()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Stop Clip\"><span class=\"fa fa-stop\"></span></button>\n    \n                    <!-- Layout -->\n                    <!--                 <button type=\"button\" style=\"border-left: 1px dotted white;\" [matMenuTriggerFor]=\"menu\" class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"dropdown\" aria-expanded=\"false\" data-placement=\"top\" title=\"Layout\"><span class=\"fa fa-th-large\"></span></button>\n                  <mat-menu #menu=\"matMenu\">\n                          <a mat-menu-item class=\"dropdown-item\" >1x1</a>\n                          <a mat-menu-item class=\"dropdown-item\" >2x1</a>\n                          <a mat-menu-item class=\"dropdown-item\" >1x2</a>\n                          <a mat-menu-item class=\"dropdown-item\" >2x2</a>\n                    \n                  </mat-menu> -->\n                 \n                    <!-- Download -->               \n                    <a *ngIf=\"downloadImagesURL != ''\" [href]=\"downloadImagesURL\" download type=\"button\" style=\"border-left: 1px dotted white;\" class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Download\">\n                        <span class=\"fa fa-download\"></span>\n                    </a>\n\n                    <!-- Imagem Anterior -->\n                    <button type=\"button\" (click)=\"previousImage()\" [ngStyle]=\"hidePreviousImage\" style=\"border-left: 1px dotted white;\"\n                        class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\"\n                        title=\"Next Image\"><span class=\"fa fa-backward\"></span></button>\n                    <!-- Próxima Imagem -->\n                    <button type=\"button\" (click)=\"nextImage()\" [ngStyle]=\"hideNextImage\" class=\"btn btn-sm btn-default\"\n                        data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Previous Image\"><span class=\"fa fa-forward\"></span></button>\n                    <div style=\"padding-left: 15px; padding-top: 15px;\" [ngStyle]=\"showProgress\">\n                        <mat-spinner style=\"display: inline-block;\" diameter=\"30\" strokeWidth=\"5\" color=\"warn\"></mat-spinner>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n        <div style=\"width: 100%; height: calc(100% - 60px);position:relative;display:inline-block;color:white;\"\n            oncontextmenu=\"return false\" class='cornerstone-enabled-image' unselectable='on' onselectstart='return false;'\n            onmousedown='return false;'>\n            <div cornerstone style=\"width: 100%; height: 100%;top:0px;left:0px;position:absolute;outline:none;margin: 0 auto;\"\n                id=\"dicomImage\">\n            </div>\n            <div id=\"mrtopleft\" style=\"position: absolute;top:3px; left:3px\">\n                {{viewPort.patientName}}\n            </div>\n            <div id=\"mrtopright\" style=\"position: absolute;top:3px; right:3px\">\n                {{viewPort.hospital}}\n            </div>\n            <div id=\"mrbottomright\" style=\"position: absolute;bottom:6px; right:3px\">\n                <div id=\"zoomText\">Zoom: {{viewPort.zoomValue}}</div>\n                <div id=\"sliceText\">Image: {{viewPort.currentIndex+1}}/{{imageCount}}</div>\n            </div>\n            <div id=\"mrbottomleft\" style=\"position: absolute;bottom:3px; left:3px\">\n                WW/WC: {{viewPort.windowingValue}}\n            </div>\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dicom-viewer/dicom-viewer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dicom-viewer/dicom-viewer.component.ts ***!
  \********************************************************/
/*! exports provided: DICOMViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DICOMViewerComponent", function() { return DICOMViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_cornerstone_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/cornerstone.directive */ "./src/app/directives/cornerstone.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DICOMViewerComponent = /** @class */ (function () {
    function DICOMViewerComponent() {
        this.enableViewerTools = false; // enable viewer tools
        this.downloadImagesURL = ''; // download images URL
        this.seriesList = []; // list of series on the images being displayed
        this.currentSeriesIndex = 0;
        this.currentSeries = {};
        this.imageCount = 0; // total image count being viewed
        // control exhibition of a loading images progress indicator
        this.loadingImages = false;
    }
    Object.defineProperty(DICOMViewerComponent.prototype, "hidePreviousImage", {
        // control enable/disable image scroll buttons
        get: function () { return { color: (this.viewPort.currentIndex < 1) ? 'black' : 'white' }; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DICOMViewerComponent.prototype, "hideNextImage", {
        get: function () { return { color: (this.viewPort.currentIndex >= (this.imageCount - 1)) ? 'black' : 'white' }; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DICOMViewerComponent.prototype, "showProgress", {
        get: function () { return { display: (this.loadingImages) ? 'inline-block' : 'none' }; },
        enumerable: true,
        configurable: true
    });
    ;
    DICOMViewerComponent.prototype.ngAfterViewInit = function () {
        this.element = this.viewPort.element;
    };
    /**
     * Load dicom images for display
     *
     * @param imageList list of imageIs to load and display
     */
    DICOMViewerComponent.prototype.loadStudyImages = function (imageList) {
        var _this = this;
        this.viewPort.resetImageCache(); // clean up image cache
        this.loadingImages = true; // activate progress indicator
        this.seriesList = []; // start a new series list
        //
        // loop thru all imageIds, load and cache them for exhibition
        //
        imageList.forEach(function (imageId, imageIndex) {
            cornerstone.loadAndCacheImage(imageId).then(function (imageData) {
                // build list of series in all loadded images
                var series = {
                    studyID: imageData.data.string('x0020000d'),
                    seriesID: imageData.data.string('x0020000d'),
                    seriesNumber: imageData.data.intString('x00200011'),
                    studyDescription: imageData.data.string('x00081030'),
                    seriesDescription: imageData.data.string('x0008103e'),
                    imageCount: 1,
                    imageList: [imageData]
                };
                // if this is a new series, add it to the list
                var seriesIndex = _this.seriesList.findIndex(function (item) { return item.seriesID === series.seriesID; });
                if (seriesIndex < 0) {
                    seriesIndex = _this.seriesList.length;
                    _this.seriesList.push(series);
                }
                else {
                    var seriesItem = _this.seriesList[seriesIndex];
                    seriesItem.imageCount++;
                    seriesItem.imageList.push(imageData);
                }
                if (seriesIndex === 0) {
                    _this.currentSeriesIndex = seriesIndex;
                    _this.currentSeries = _this.seriesList[seriesIndex];
                    _this.imageCount = _this.currentSeries.imageCount; // get total image count
                    _this.viewPort.addImageData(imageData);
                }
                if ((imageIndex + 1) >= imageList.length) { // did we finish loading images?
                    _this.loadingImages = false; // deactivate progress indicator
                    console.log(_this.seriesList);
                }
            });
        });
    };
    DICOMViewerComponent.prototype.showSeries = function (index) {
        this.resetAllTools();
        this.currentSeriesIndex = index;
        this.currentSeries = this.seriesList[index];
        this.imageCount = this.currentSeries.imageCount; // get total image count
        this.viewPort.resetImageCache(); // clean up image cache
        this.loadingImages = true; // activate progress indicator
        for (var i = 0; i < this.currentSeries.imageList.length; i++) {
            var imageData = this.currentSeries.imageList[i];
            this.viewPort.addImageData(imageData);
        }
        this.loadingImages = false; // de-activate progress indicator
    };
    DICOMViewerComponent.prototype.saveAs = function () {
        cornerstoneTools.saveAs(this.element, "teste.jpg");
    };
    /**
     * Image scroll methods
     */
    DICOMViewerComponent.prototype.nextImage = function () {
        if (this.viewPort.currentIndex < this.imageCount) {
            this.viewPort.nextImage();
        }
    };
    DICOMViewerComponent.prototype.previousImage = function () {
        if (this.viewPort.currentIndex > 0) {
            this.viewPort.previousImage();
        }
    };
    /**
     * Methods to activate/deactivate viewer tools
     */
    // deactivate all tools
    DICOMViewerComponent.prototype.resetAllTools = function () {
        if (this.imageCount > 0) {
            cornerstoneTools.wwwc.deactivate(this.element, 1);
            cornerstoneTools.pan.deactivate(this.element, 1);
            cornerstoneTools.zoom.deactivate(this.element, 1);
            cornerstoneTools.probe.deactivate(this.element, 1);
            cornerstoneTools.length.deactivate(this.element, 1);
            cornerstoneTools.simpleAngle.deactivate(this.element, 1);
            cornerstoneTools.ellipticalRoi.deactivate(this.element, 1);
            cornerstoneTools.rectangleRoi.deactivate(this.element, 1);
            cornerstoneTools.stackScroll.deactivate(this.element, 1);
            cornerstoneTools.wwwcTouchDrag.deactivate(this.element);
            cornerstoneTools.zoomTouchDrag.deactivate(this.element);
            cornerstoneTools.panTouchDrag.deactivate(this.element);
            cornerstoneTools.stackScrollTouchDrag.deactivate(this.element);
            this.stopClip();
        }
    };
    // activate windowing
    DICOMViewerComponent.prototype.enableWindowing = function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.wwwc.activate(this.element, 1);
            cornerstoneTools.wwwcTouchDrag.activate(this.element);
        }
    };
    // activate zoom
    DICOMViewerComponent.prototype.enableZoom = function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.zoom.activate(this.element, 5); // 5 is right mouse button and left mouse button
            cornerstoneTools.zoomTouchDrag.activate(this.element);
        }
    };
    // activate pan
    DICOMViewerComponent.prototype.enablePan = function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.pan.activate(this.element, 3); // 3 is middle mouse button and left mouse button
            cornerstoneTools.panTouchDrag.activate(this.element);
        }
    };
    // activate image scroll
    DICOMViewerComponent.prototype.enableScroll = function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.stackScroll.activate(this.element, 1);
            cornerstoneTools.stackScrollTouchDrag.activate(this.element);
            cornerstoneTools.stackScrollKeyboard.activate(this.element);
        }
    };
    // activate length measurement
    DICOMViewerComponent.prototype.enableLength = function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.length.activate(this.element, 1);
        }
    };
    // activate angle measurement
    DICOMViewerComponent.prototype.enableAngle = function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.simpleAngle.activate(this.element, 1);
        }
    };
    // activate pixel probe
    DICOMViewerComponent.prototype.enableProbe = function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.probe.activate(this.element, 1);
        }
    };
    // activate Elliptical ROI
    DICOMViewerComponent.prototype.enableElliptical = function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.ellipticalRoi.activate(this.element, 1);
        }
    };
    // activate Rectangle ROI
    DICOMViewerComponent.prototype.enableRectangle = function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.rectangleRoi.activate(this.element, 1);
        }
    };
    // Play Clip
    DICOMViewerComponent.prototype.playClip = function () {
        if (this.imageCount > 0) {
            var frameRate = 10;
            var stackState = cornerstoneTools.getToolState(this.element, 'stack');
            if (stackState) {
                frameRate = stackState.data[0].frameRate;
                // Play at a default 10 FPS if the framerate is not specified
                if (frameRate === undefined) {
                    frameRate = 10;
                }
            }
            cornerstoneTools.playClip(this.element, frameRate);
        }
    };
    // Stop Clip
    DICOMViewerComponent.prototype.stopClip = function () {
        cornerstoneTools.stopClip(this.element);
    };
    // invert image
    DICOMViewerComponent.prototype.invertImage = function () {
        if (this.imageCount > 0) {
            var viewport = cornerstone.getViewport(this.element);
            // Toggle invert
            if (viewport.invert === true) {
                viewport.invert = false;
            }
            else {
                viewport.invert = true;
            }
            cornerstone.setViewport(this.element, viewport);
        }
    };
    // reset image
    DICOMViewerComponent.prototype.resetImage = function () {
        if (this.imageCount > 0) {
            var toolStateManager = cornerstoneTools.getElementToolStateManager(this.element);
            // Note that this only works on ImageId-specific tool state managers (for now)
            //toolStateManager.clear(this.element);
            cornerstoneTools.clearToolState(this.element, "length");
            cornerstoneTools.clearToolState(this.element, "angle");
            cornerstoneTools.clearToolState(this.element, "simpleAngle");
            cornerstoneTools.clearToolState(this.element, "probe");
            cornerstoneTools.clearToolState(this.element, "ellipticalRoi");
            cornerstoneTools.clearToolState(this.element, "rectangleRoi");
            cornerstone.updateImage(this.element);
            this.resetAllTools();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DICOMViewerComponent.prototype, "enableViewerTools", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DICOMViewerComponent.prototype, "downloadImagesURL", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_directives_cornerstone_directive__WEBPACK_IMPORTED_MODULE_1__["CornerstoneDirective"]),
        __metadata("design:type", _directives_cornerstone_directive__WEBPACK_IMPORTED_MODULE_1__["CornerstoneDirective"])
    ], DICOMViewerComponent.prototype, "viewPort", void 0);
    DICOMViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dicom-viewer',
            template: __webpack_require__(/*! ./dicom-viewer.component.html */ "./src/app/dicom-viewer/dicom-viewer.component.html"),
            styles: [__webpack_require__(/*! ./dicom-viewer.component.css */ "./src/app/dicom-viewer/dicom-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DICOMViewerComponent);
    return DICOMViewerComponent;
}());



/***/ }),

/***/ "./src/app/directives/cornerstone.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/cornerstone.directive.ts ***!
  \*****************************************************/
/*! exports provided: CornerstoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerstoneDirective", function() { return CornerstoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CornerstoneDirective = /** @class */ (function () {
    function CornerstoneDirective(elementRef) {
        this.elementRef = elementRef;
        this.imageList = [];
        this.imageIdList = [];
        this.currentIndex = 0;
        this.patientName = ''; // current image Patient name, do display on the overlay
        this.hospital = ''; // current image Institution name, to display on the overlay
    }
    Object.defineProperty(CornerstoneDirective.prototype, "windowingValue", {
        get: function () {
            var viewport = cornerstone.getViewport(this.element);
            if (viewport) {
                return Math.round(viewport.voi.windowWidth) + "/" + Math.round(viewport.voi.windowCenter);
            }
            else
                return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CornerstoneDirective.prototype, "zoomValue", {
        get: function () {
            var viewport = cornerstone.getViewport(this.element);
            if (viewport) {
                return viewport.scale.toFixed(2);
            }
            else
                return '';
        },
        enumerable: true,
        configurable: true
    });
    CornerstoneDirective.prototype.onResize = function (event) {
        cornerstone.resize(this.element, true);
    };
    //@HostListener('mousewheel', ['$event'])
    CornerstoneDirective.prototype.onMouseWheel = function (event) {
        event.preventDefault();
        if (this.imageList.length > 0) {
            var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
            // console.log(event);
            if (delta > 0) {
                this.currentIndex++;
                if (this.currentIndex >= this.imageList.length) {
                    this.currentIndex = this.imageList.length - 1;
                }
            }
            else {
                this.currentIndex--;
                if (this.currentIndex < 0) {
                    this.currentIndex = 0;
                }
            }
            this.displayImage(this.imageList[this.currentIndex]);
        }
    };
    CornerstoneDirective.prototype.ngOnInit = function () {
        // Retrieve the DOM element itself
        this.element = this.elementRef.nativeElement;
        // Enable the element with Cornerstone
        cornerstone.enable(this.element);
    };
    CornerstoneDirective.prototype.resetImageCache = function () {
        //cornerstone.imageCache.purgeCache();
        //cornerstone.reset(this.element);
        this.imageList = [];
        this.imageIdList = [];
    };
    CornerstoneDirective.prototype.previousImage = function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = 0;
        }
        this.displayImage(this.imageList[this.currentIndex]);
    };
    CornerstoneDirective.prototype.nextImage = function () {
        this.currentIndex++;
        if (this.currentIndex >= this.imageList.length) {
            this.currentIndex = this.imageList.length - 1;
        }
        this.displayImage(this.imageList[this.currentIndex]);
    };
    CornerstoneDirective.prototype.addImageData = function (imageData) {
        //if (!this.imageList.filter(img => img.imageId === imageData.imageId).length) {
        this.imageList.push(imageData);
        this.imageIdList.push(imageData.imageId);
        if (this.imageList.length === 1) {
            this.currentIndex = 0;
            this.displayImage(imageData);
        }
        //}
        cornerstone.resize(this.element, true);
    };
    CornerstoneDirective.prototype.displayImage = function (image) {
        var viewport = cornerstone.getDefaultViewportForImage(this.element, image);
        cornerstone.displayImage(this.element, image, viewport);
        // Fit the image to the viewport window
        cornerstone.fitToWindow(this.element);
        cornerstone.resize(this.element, true);
        // get image info to display in overlays
        this.patientName = image.data.string('x00100010').replace(/\^/g, '');
        this.hospital = image.data.string('x00080080');
        // Activate mouse clicks, mouse wheel and touch
        cornerstoneTools.mouseInput.enable(this.element);
        cornerstoneTools.mouseWheelInput.enable(this.element);
        //cornerstoneTools.touchInput.enable(this.element);
        cornerstoneTools.keyboardInput.enable(this.element);
        // Enable all tools we want to use with this element
        cornerstoneTools.wwwc.activate(this.element, 1); // ww/wc is the default tool for left mouse button
        cornerstoneTools.pan.activate(this.element, 2); // pan is the default tool for middle mouse button
        cornerstoneTools.zoom.activate(this.element, 4); // zoom is the default tool for right mouse button
        cornerstoneTools.probe.enable(this.element);
        cornerstoneTools.length.enable(this.element);
        cornerstoneTools.angle.enable(this.element);
        cornerstoneTools.simpleAngle.enable(this.element);
        cornerstoneTools.ellipticalRoi.enable(this.element);
        cornerstoneTools.rectangleRoi.enable(this.element);
        cornerstoneTools.wwwcTouchDrag.activate(this.element); // - Drag
        cornerstoneTools.zoomTouchPinch.activate(this.element); // - Pinch
        cornerstoneTools.panMultiTouch.activate(this.element); // - Multi (x2)
        // Stack tools
        // Define the Stack object
        var stack = {
            currentImageIdIndex: this.currentIndex,
            imageIds: this.imageIdList
        };
        cornerstoneTools.addStackStateManager(this.element, ['playClip']);
        // Add the stack tool state to the enabled element
        cornerstoneTools.addStackStateManager(this.element, ['stack']);
        cornerstoneTools.addToolState(this.element, 'stack', stack);
        cornerstoneTools.stackScrollWheel.activate(this.element);
        // Enable all tools we want to use with this element
        cornerstoneTools.stackScrollKeyboard.activate(this.element);
        //cornerstoneTools.stackPrefetch.enable(this.element);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CornerstoneDirective.prototype, "onResize", null);
    CornerstoneDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[cornerstone]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CornerstoneDirective);
    return CornerstoneDirective;
}());



/***/ }),

/***/ "./src/app/directives/thumbnail.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/thumbnail.directive.ts ***!
  \***************************************************/
/*! exports provided: ThumbnailDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailDirective", function() { return ThumbnailDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThumbnailDirective = /** @class */ (function () {
    function ThumbnailDirective(elementRef) {
        this.elementRef = elementRef;
    }
    ThumbnailDirective.prototype.ngOnInit = function () {
        // Retrieve the DOM element itself
        this.element = this.elementRef.nativeElement;
        // Enable the element with Cornerstone
        cornerstone.enable(this.element);
        if (this.imageData && this.element) {
            var viewport = cornerstone.getDefaultViewportForImage(this.element, this.imageData);
            cornerstone.displayImage(this.element, this.imageData, viewport);
            // Fit the image to the viewport window
            cornerstone.fitToWindow(this.element);
            cornerstone.resize(this.element, true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ThumbnailDirective.prototype, "imageData", void 0);
    ThumbnailDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[thumbnail]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ThumbnailDirective);
    return ThumbnailDirective;
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

module.exports = __webpack_require__(/*! /Users/jcarneiro/DICOMViewer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map