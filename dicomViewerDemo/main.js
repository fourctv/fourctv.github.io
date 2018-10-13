(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/dicom-viewer/fesm5/ng-dicomviewer.js":
/*!***************************************************!*\
  !*** ./dist/dicom-viewer/fesm5/ng-dicomviewer.js ***!
  \***************************************************/
/*! exports provided: DICOMViewerComponent, CornerstoneDirective, ThumbnailDirective, DicomViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DICOMViewerComponent", function() { return DICOMViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerstoneDirective", function() { return CornerstoneDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailDirective", function() { return ThumbnailDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DicomViewerModule", function() { return DicomViewerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        get: 
        // current image Institution name, to display on the overlay
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
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
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
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
    /**
     * @param {?} event
     * @return {?}
     */
    CornerstoneDirective.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        cornerstone.resize(this.element, true);
    };
    //@HostListener('mousewheel', ['$event'])
    //@HostListener('mousewheel', ['$event'])
    /**
     * @param {?} event
     * @return {?}
     */
    CornerstoneDirective.prototype.onMouseWheel = 
    //@HostListener('mousewheel', ['$event'])
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (this.imageList.length > 0) {
            /** @type {?} */
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
    /**
     * @return {?}
     */
    CornerstoneDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Retrieve the DOM element itself
        this.element = this.elementRef.nativeElement;
        // Enable the element with Cornerstone
        cornerstone.enable(this.element);
    };
    /**
     * @return {?}
     */
    CornerstoneDirective.prototype.resetImageCache = /**
     * @return {?}
     */
    function () {
        //cornerstone.imageCache.purgeCache();
        //cornerstone.reset(this.element);
        this.imageList = [];
        this.imageIdList = [];
    };
    /**
     * @return {?}
     */
    CornerstoneDirective.prototype.previousImage = /**
     * @return {?}
     */
    function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = 0;
        }
        this.displayImage(this.imageList[this.currentIndex]);
    };
    /**
     * @return {?}
     */
    CornerstoneDirective.prototype.nextImage = /**
     * @return {?}
     */
    function () {
        this.currentIndex++;
        if (this.currentIndex >= this.imageList.length) {
            this.currentIndex = this.imageList.length - 1;
        }
        this.displayImage(this.imageList[this.currentIndex]);
    };
    /**
     * @param {?} imageData
     * @return {?}
     */
    CornerstoneDirective.prototype.addImageData = /**
     * @param {?} imageData
     * @return {?}
     */
    function (imageData) {
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
    /**
     * @param {?} image
     * @return {?}
     */
    CornerstoneDirective.prototype.displayImage = /**
     * @param {?} image
     * @return {?}
     */
    function (image) {
        /** @type {?} */
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
        // - Multi (x2)
        // Stack tools
        // Define the Stack object
        /** @type {?} */
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
    CornerstoneDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cornerstone]',
                },] }
    ];
    CornerstoneDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    CornerstoneDirective.propDecorators = {
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event'],] }]
    };
    return CornerstoneDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        get: 
        // total image count being viewed
        // control enable/disable image scroll buttons
        /**
         * @return {?}
         */
        function () { return { color: (this.viewPort.currentIndex < 1) ? 'black' : 'white' }; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DICOMViewerComponent.prototype, "hideNextImage", {
        get: /**
         * @return {?}
         */
        function () { return { color: (this.viewPort.currentIndex >= (this.imageCount - 1)) ? 'black' : 'white' }; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DICOMViewerComponent.prototype, "showProgress", {
        get: /**
         * @return {?}
         */
        function () { return { display: (this.loadingImages) ? 'inline-block' : 'none' }; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.element = this.viewPort.element;
    };
    /**
     * Load dicom images for display
     *
     * @param imageList list of imageIs to load and display
     */
    /**
     * Load dicom images for display
     *
     * @param {?} imageList list of imageIs to load and display
     * @return {?}
     */
    DICOMViewerComponent.prototype.loadStudyImages = /**
     * Load dicom images for display
     *
     * @param {?} imageList list of imageIs to load and display
     * @return {?}
     */
    function (imageList) {
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
                /** @type {?} */
                var series = {
                    studyID: imageData.data.string('x0020000d'),
                    seriesID: imageData.data.string('x0020000d'),
                    seriesNumber: imageData.data.intString('x00200011'),
                    studyDescription: imageData.data.string('x00081030'),
                    seriesDescription: imageData.data.string('x0008103e'),
                    imageCount: 1,
                    imageList: [imageData]
                }
                // if this is a new series, add it to the list
                ;
                // if this is a new series, add it to the list
                /** @type {?} */
                var seriesIndex = _this.seriesList.findIndex(function (item) { return item.seriesID === series.seriesID; });
                if (seriesIndex < 0) {
                    seriesIndex = _this.seriesList.length;
                    _this.seriesList.push(series);
                }
                else {
                    /** @type {?} */
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
                }
            });
        });
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DICOMViewerComponent.prototype.showSeries = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.resetAllTools();
        this.currentSeriesIndex = index;
        this.currentSeries = this.seriesList[index];
        this.imageCount = this.currentSeries.imageCount; // get total image count
        this.viewPort.resetImageCache(); // clean up image cache
        this.loadingImages = true; // activate progress indicator
        for (var i = 0; i < this.currentSeries.imageList.length; i++) {
            /** @type {?} */
            var imageData = this.currentSeries.imageList[i];
            this.viewPort.addImageData(imageData);
        }
        this.loadingImages = false; // de-activate progress indicator
    };
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.saveAs = /**
     * @return {?}
     */
    function () {
        cornerstoneTools.saveAs(this.element, "teste.jpg");
    };
    /**
     * Image scroll methods
     */
    /**
     * Image scroll methods
     * @return {?}
     */
    DICOMViewerComponent.prototype.nextImage = /**
     * Image scroll methods
     * @return {?}
     */
    function () {
        if (this.viewPort.currentIndex < this.imageCount) {
            this.viewPort.nextImage();
        }
    };
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.previousImage = /**
     * @return {?}
     */
    function () {
        if (this.viewPort.currentIndex > 0) {
            this.viewPort.previousImage();
        }
    };
    /**
     * Methods to activate/deactivate viewer tools
     */
    // deactivate all tools
    /**
     * Methods to activate/deactivate viewer tools
     * @return {?}
     */
    // deactivate all tools
    DICOMViewerComponent.prototype.resetAllTools = /**
     * Methods to activate/deactivate viewer tools
     * @return {?}
     */
    // deactivate all tools
    function () {
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
    // activate windowing
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.enableWindowing = 
    // activate windowing
    /**
     * @return {?}
     */
    function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.wwwc.activate(this.element, 1);
            cornerstoneTools.wwwcTouchDrag.activate(this.element);
        }
    };
    // activate zoom
    // activate zoom
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.enableZoom = 
    // activate zoom
    /**
     * @return {?}
     */
    function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.zoom.activate(this.element, 5); // 5 is right mouse button and left mouse button
            cornerstoneTools.zoomTouchDrag.activate(this.element);
        }
    };
    // activate pan
    // activate pan
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.enablePan = 
    // activate pan
    /**
     * @return {?}
     */
    function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.pan.activate(this.element, 3); // 3 is middle mouse button and left mouse button
            cornerstoneTools.panTouchDrag.activate(this.element);
        }
    };
    // activate image scroll
    // activate image scroll
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.enableScroll = 
    // activate image scroll
    /**
     * @return {?}
     */
    function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.stackScroll.activate(this.element, 1);
            cornerstoneTools.stackScrollTouchDrag.activate(this.element);
            cornerstoneTools.stackScrollKeyboard.activate(this.element);
        }
    };
    // activate length measurement
    // activate length measurement
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.enableLength = 
    // activate length measurement
    /**
     * @return {?}
     */
    function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.length.activate(this.element, 1);
        }
    };
    // activate angle measurement
    // activate angle measurement
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.enableAngle = 
    // activate angle measurement
    /**
     * @return {?}
     */
    function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.simpleAngle.activate(this.element, 1);
        }
    };
    // activate pixel probe
    // activate pixel probe
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.enableProbe = 
    // activate pixel probe
    /**
     * @return {?}
     */
    function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.probe.activate(this.element, 1);
        }
    };
    // activate Elliptical ROI
    // activate Elliptical ROI
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.enableElliptical = 
    // activate Elliptical ROI
    /**
     * @return {?}
     */
    function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.ellipticalRoi.activate(this.element, 1);
        }
    };
    // activate Rectangle ROI
    // activate Rectangle ROI
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.enableRectangle = 
    // activate Rectangle ROI
    /**
     * @return {?}
     */
    function () {
        if (this.imageCount > 0) {
            this.resetAllTools();
            cornerstoneTools.rectangleRoi.activate(this.element, 1);
        }
    };
    // Play Clip
    // Play Clip
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.playClip = 
    // Play Clip
    /**
     * @return {?}
     */
    function () {
        if (this.imageCount > 0) {
            /** @type {?} */
            var frameRate = 10;
            /** @type {?} */
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
    // Stop Clip
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.stopClip = 
    // Stop Clip
    /**
     * @return {?}
     */
    function () {
        cornerstoneTools.stopClip(this.element);
    };
    // invert image
    // invert image
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.invertImage = 
    // invert image
    /**
     * @return {?}
     */
    function () {
        if (this.imageCount > 0) {
            /** @type {?} */
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
    // reset image
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.resetImage = 
    // reset image
    /**
     * @return {?}
     */
    function () {
        if (this.imageCount > 0) {
            /** @type {?} */
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
    DICOMViewerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dicom-viewer',
                    template: "<div style=\"display: flex; width:100%; height: 100%;\">\n    <div class=\"thumbnailSelector\">\n        <div class=\"thumbnails list-group\" style=\"height: 100%;\">\n            <a *ngFor=\"let series of seriesList; let i=index\" [ngClass]=\"{'active': currentSeriesIndex === i}\" class=\"list-group-item\" oncontextmenu=\"return false\" unselectable=\"on\" onselectstart=\"return false;\"\n                onmousedown=\"return false;\" (click)=\"showSeries(i)\">\n                <div thumbnail [imageData]=\"series.imageList[0]\" class=\"csthumbnail\" oncontextmenu=\"return false\" unselectable=\"on\" onselectstart=\"return false;\"\n                    onmousedown=\"return false;\">\n                </div>\n                <div class=\"text-center small\">{{series.seriesDescription}}</div>\n            </a>\n        </div>\n    </div>\n\n    <!--container where image will be loaded-->\n    <div style=\"margin-left: 5px; overflow: hidden; width: 100%; height: 100%; background-color: #424242;\">\n\n        <!-- Toolbar -->\n        <div>\n            <div class=\"btn-group\">\n                <div class=\"btn-group\" *ngIf=\"enableViewerTools\">\n                    \n                    <!-- WW/WL -->\n                    <button type=\"button\" (click)=\"enableWindowing()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Janelamento\"><span class=\"fa fa-sun\"></span></button>\n                    <!-- Invert -->\n                    <button type=\"button\" (click)=\"invertImage()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Inverte\"><span class=\"fa fa-adjust\"></span></button>\n                    <!-- Zoom -->\n                    <button type=\"  button\" (click)=\"enableZoom()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Zoom\"><span class=\"fa fa-search\"></span></button>\n                    <!-- Pan -->\n                    <button type=\"button\" (click)=\"enablePan()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Pan\"><span class=\"fa fa-arrows-alt\"></span></button>\n                    <!-- Stack scroll -->\n                    <button type=\"button\" (click)=\"enableScroll()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Navega\"><span class=\"fa fa-bars\"></span></button>\n                    <!-- Length measurement -->\n                    <button type=\"button\" (click)=\"enableLength()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tamanho\"><span class=\"fa fa-arrows-alt-v\"></span></button>\n                    <!-- Angle measurement -->\n                    <button type=\"button\" (click)=\"enableAngle()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\u00C2ngulo\"><span class=\"fa fa-angle-left\"></span></button>\n                    <!-- Pixel probe -->\n                    <button type=\"button\" (click)=\"enableProbe()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Pixel Probe\"><span class=\"fa fa-dot-circle\"></span></button>\n                    <!-- Elliptical ROI -->\n                    <button type=\"button\" (click)=\"enableElliptical()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Elliptical ROI\"><span class=\"fa fa-circle\"></span></button>\n                    <!-- Rectangle ROI -->\n                    <button type=\"button\" (click)=\"enableRectangle()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Rectangle ROI\"><span class=\"fa fa-square\"></span></button>\n                    <!-- Reset Image -->\n                    <button type=\"button\" (click)=\"resetImage()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Restaura Imagem\"><span class=\"fa fa-window-restore\"></span></button>\n                </div>\n                <div class=\"btn-group\">\n                    <!-- Play clip -->\n                    <button type=\"button\" (click)=\"playClip()\" style=\"border-left: 1px dotted white;\" class=\"btn btn-sm btn-default\"\n                        data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Play Clip\"><span class=\"fa fa-play\"></span></button>\n                    <!-- Stop clip -->\n                    <button type=\"button\" (click)=\"stopClip()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Stop Clip\"><span class=\"fa fa-stop\"></span></button>\n    \n                    <!-- Layout -->\n                    <!--                 <button type=\"button\" style=\"border-left: 1px dotted white;\" [matMenuTriggerFor]=\"menu\" class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"dropdown\" aria-expanded=\"false\" data-placement=\"top\" title=\"Layout\"><span class=\"fa fa-th-large\"></span></button>\n                  <mat-menu #menu=\"matMenu\">\n                          <a mat-menu-item class=\"dropdown-item\" >1x1</a>\n                          <a mat-menu-item class=\"dropdown-item\" >2x1</a>\n                          <a mat-menu-item class=\"dropdown-item\" >1x2</a>\n                          <a mat-menu-item class=\"dropdown-item\" >2x2</a>\n                    \n                  </mat-menu> -->\n                 \n                    <!-- Download -->               \n                    <a *ngIf=\"downloadImagesURL != ''\" [href]=\"downloadImagesURL\" download type=\"button\" style=\"border-left: 1px dotted white;\" class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Download\">\n                        <span class=\"fa fa-download\"></span>\n                    </a>\n\n                    <!-- Imagem Anterior -->\n                    <button type=\"button\" (click)=\"previousImage()\" [ngStyle]=\"hidePreviousImage\" style=\"border-left: 1px dotted white;\"\n                        class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\"\n                        title=\"Next Image\"><span class=\"fa fa-backward\"></span></button>\n                    <!-- Pr\u00F3xima Imagem -->\n                    <button type=\"button\" (click)=\"nextImage()\" [ngStyle]=\"hideNextImage\" class=\"btn btn-sm btn-default\"\n                        data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Previous Image\"><span class=\"fa fa-forward\"></span></button>\n                    <div style=\"padding-left: 15px; padding-top: 15px;\" [ngStyle]=\"showProgress\">\n                        <mat-spinner style=\"display: inline-block;\" diameter=\"30\" strokeWidth=\"5\" color=\"warn\"></mat-spinner>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n        <div style=\"width: 100%; height: calc(100% - 60px);position:relative;display:inline-block;color:white;\"\n            oncontextmenu=\"return false\" class='cornerstone-enabled-image' unselectable='on' onselectstart='return false;'\n            onmousedown='return false;'>\n            <div cornerstone style=\"width: 100%; height: 100%;top:0px;left:0px;position:absolute;outline:none;margin: 0 auto;\"\n                id=\"dicomImage\">\n            </div>\n            <div id=\"mrtopleft\" style=\"position: absolute;top:3px; left:3px\">\n                {{viewPort.patientName}}\n            </div>\n            <div id=\"mrtopright\" style=\"position: absolute;top:3px; right:3px\">\n                {{viewPort.hospital}}\n            </div>\n            <div id=\"mrbottomright\" style=\"position: absolute;bottom:6px; right:3px\">\n                <div id=\"zoomText\">Zoom: {{viewPort.zoomValue}}</div>\n                <div id=\"sliceText\">Image: {{viewPort.currentIndex+1}}/{{imageCount}}</div>\n            </div>\n            <div id=\"mrbottomleft\" style=\"position: absolute;bottom:3px; left:3px\">\n                WW/WC: {{viewPort.windowingValue}}\n            </div>\n        </div>\n\n    </div>\n\n</div>\n",
                    styles: [".btn-default{color:#fff;background-color:#424242;border-color:#424242;font-size:24pt;background-image:none;text-shadow:none}.thumbnailSelector{width:106px;float:left;margin-left:5px;height:100%;background-color:#424242}.thumbnails{margin:0;overflow-y:scroll;overflow-x:hidden}.csthumbnail{color:#fff;background-color:#000;width:100px;height:100px;border:0;padding:0}a.list-group-item{background-color:#000;padding:2px;border:1px solid #424242;z-index:5}a.list-group-item.active,a.list-group-item.active:focus,a.list-group-item.active:hover{background-color:#424242;border-color:#4e4e4e;background-image:linear-gradient(red,red,red)}"]
                }] }
    ];
    DICOMViewerComponent.ctorParameters = function () { return []; };
    DICOMViewerComponent.propDecorators = {
        enableViewerTools: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        downloadImagesURL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewPort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [CornerstoneDirective,] }]
    };
    return DICOMViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ThumbnailDirective = /** @class */ (function () {
    function ThumbnailDirective(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    ThumbnailDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Retrieve the DOM element itself
        this.element = this.elementRef.nativeElement;
        // Enable the element with Cornerstone
        cornerstone.enable(this.element);
        if (this.imageData && this.element) {
            /** @type {?} */
            var viewport = cornerstone.getDefaultViewportForImage(this.element, this.imageData);
            cornerstone.displayImage(this.element, this.imageData, viewport);
            // Fit the image to the viewport window
            cornerstone.fitToWindow(this.element);
            cornerstone.resize(this.element, true);
        }
    };
    ThumbnailDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[thumbnail]',
                },] }
    ];
    ThumbnailDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ThumbnailDirective.propDecorators = {
        imageData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ThumbnailDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DicomViewerModule = /** @class */ (function () {
    function DicomViewerModule() {
    }
    DicomViewerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]
                    ],
                    declarations: [DICOMViewerComponent, CornerstoneDirective, ThumbnailDirective],
                    exports: [DICOMViewerComponent, CornerstoneDirective, ThumbnailDirective]
                },] }
    ];
    return DicomViewerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGljb212aWV3ZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWRpY29tdmlld2VyL2xpYi9jb3JuZXJzdG9uZS5kaXJlY3RpdmUudHMiLCJuZzovL25nLWRpY29tdmlld2VyL2xpYi9kaWNvbS12aWV3ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1kaWNvbXZpZXdlci9saWIvdGh1bWJuYWlsLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmctZGljb212aWV3ZXIvbGliL2RpY29tLXZpZXdlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmRlY2xhcmUgY29uc3QgY29ybmVyc3RvbmU7XG5kZWNsYXJlIGNvbnN0IGNvcm5lcnN0b25lVG9vbHM7XG5cblxuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb3JuZXJzdG9uZV0nLFxufSlcblxuZXhwb3J0IGNsYXNzIENvcm5lcnN0b25lRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZWxlbWVudDogYW55O1xuXG4gIHB1YmxpYyBpbWFnZUxpc3QgPSBbXTtcbiAgcHJpdmF0ZSBpbWFnZUlkTGlzdCA9IFtdO1xuICBwdWJsaWMgY3VycmVudEluZGV4ID0gMDtcbiAgcHVibGljIHBhdGllbnROYW1lID0gJyc7IC8vIGN1cnJlbnQgaW1hZ2UgUGF0aWVudCBuYW1lLCBkbyBkaXNwbGF5IG9uIHRoZSBvdmVybGF5XG4gIHB1YmxpYyBob3NwaXRhbCA9ICcnOyAvLyBjdXJyZW50IGltYWdlIEluc3RpdHV0aW9uIG5hbWUsIHRvIGRpc3BsYXkgb24gdGhlIG92ZXJsYXlcblxuICBwdWJsaWMgZ2V0IHdpbmRvd2luZ1ZhbHVlKCk6c3RyaW5nIHtcbiAgICB2YXIgdmlld3BvcnQgPSBjb3JuZXJzdG9uZS5nZXRWaWV3cG9ydCh0aGlzLmVsZW1lbnQpO1xuICAgIGlmICh2aWV3cG9ydCkge3JldHVybiBNYXRoLnJvdW5kKHZpZXdwb3J0LnZvaS53aW5kb3dXaWR0aCkgKyBcIi9cIiArIE1hdGgucm91bmQodmlld3BvcnQudm9pLndpbmRvd0NlbnRlcik7fVxuICAgIGVsc2UgcmV0dXJuICcnO1xuICB9XG5cbiAgcHVibGljIGdldCB6b29tVmFsdWUoKTpzdHJpbmcge1xuICAgIHZhciB2aWV3cG9ydCA9IGNvcm5lcnN0b25lLmdldFZpZXdwb3J0KHRoaXMuZWxlbWVudCk7XG4gICAgaWYgKHZpZXdwb3J0KSB7cmV0dXJuIHZpZXdwb3J0LnNjYWxlLnRvRml4ZWQoMik7fVxuICAgIGVsc2UgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBjb3JuZXJzdG9uZS5yZXNpemUodGhpcy5lbGVtZW50LCB0cnVlKTtcbiAgfVxuXG4gIC8vQEhvc3RMaXN0ZW5lcignbW91c2V3aGVlbCcsIFsnJGV2ZW50J10pXG4gIG9uTW91c2VXaGVlbChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5pbWFnZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgKGV2ZW50LndoZWVsRGVsdGEgfHwgLWV2ZW50LmRldGFpbCkpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgXG4gIFxuICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5pbWFnZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLmltYWdlTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICBcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgtLTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgfVxuICBcbiAgICAgIH1cbiAgXG4gICAgICB0aGlzLmRpc3BsYXlJbWFnZSh0aGlzLmltYWdlTGlzdFt0aGlzLmN1cnJlbnRJbmRleF0pO1xuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvLyBSZXRyaWV2ZSB0aGUgRE9NIGVsZW1lbnQgaXRzZWxmXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBFbmFibGUgdGhlIGVsZW1lbnQgd2l0aCBDb3JuZXJzdG9uZVxuICAgIGNvcm5lcnN0b25lLmVuYWJsZSh0aGlzLmVsZW1lbnQpO1xuXG4gIH1cblxuICBwdWJsaWMgcmVzZXRJbWFnZUNhY2hlKCkge1xuICAgIC8vY29ybmVyc3RvbmUuaW1hZ2VDYWNoZS5wdXJnZUNhY2hlKCk7XG4gICAgLy9jb3JuZXJzdG9uZS5yZXNldCh0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMuaW1hZ2VMaXN0ID0gW107XG4gICAgdGhpcy5pbWFnZUlkTGlzdCA9IFtdO1xuICB9XG5cbiAgcHVibGljIHByZXZpb3VzSW1hZ2UoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICB9XG4gICAgdGhpcy5kaXNwbGF5SW1hZ2UodGhpcy5pbWFnZUxpc3RbdGhpcy5jdXJyZW50SW5kZXhdKTtcblxuICB9XG5cbiAgcHVibGljIG5leHRJbWFnZSgpIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5pbWFnZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5pbWFnZUxpc3QubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgdGhpcy5kaXNwbGF5SW1hZ2UodGhpcy5pbWFnZUxpc3RbdGhpcy5jdXJyZW50SW5kZXhdKTtcbiB9XG4gIFxuICBwdWJsaWMgYWRkSW1hZ2VEYXRhKGltYWdlRGF0YTogYW55KSB7XG4gICAgLy9pZiAoIXRoaXMuaW1hZ2VMaXN0LmZpbHRlcihpbWcgPT4gaW1nLmltYWdlSWQgPT09IGltYWdlRGF0YS5pbWFnZUlkKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW1hZ2VMaXN0LnB1c2goaW1hZ2VEYXRhKTtcbiAgICAgIHRoaXMuaW1hZ2VJZExpc3QucHVzaChpbWFnZURhdGEuaW1hZ2VJZCk7XG4gICAgICBpZiAodGhpcy5pbWFnZUxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5kaXNwbGF5SW1hZ2UoaW1hZ2VEYXRhKTtcbiAgICAgIH1cbiAgICAvL31cbiAgICBcbiAgICBjb3JuZXJzdG9uZS5yZXNpemUodGhpcy5lbGVtZW50LCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwbGF5SW1hZ2UoaW1hZ2UpIHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IGNvcm5lcnN0b25lLmdldERlZmF1bHRWaWV3cG9ydEZvckltYWdlKHRoaXMuZWxlbWVudCwgaW1hZ2UpO1xuICAgIGNvcm5lcnN0b25lLmRpc3BsYXlJbWFnZSh0aGlzLmVsZW1lbnQsIGltYWdlLCB2aWV3cG9ydCk7XG4gICAgLy8gRml0IHRoZSBpbWFnZSB0byB0aGUgdmlld3BvcnQgd2luZG93XG4gICAgY29ybmVyc3RvbmUuZml0VG9XaW5kb3codGhpcy5lbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZS5yZXNpemUodGhpcy5lbGVtZW50LCB0cnVlKTtcblxuICAgIC8vIGdldCBpbWFnZSBpbmZvIHRvIGRpc3BsYXkgaW4gb3ZlcmxheXNcbiAgICB0aGlzLnBhdGllbnROYW1lID0gaW1hZ2UuZGF0YS5zdHJpbmcoJ3gwMDEwMDAxMCcpLnJlcGxhY2UoL1xcXi9nLCcnKTtcbiAgICB0aGlzLmhvc3BpdGFsID0gaW1hZ2UuZGF0YS5zdHJpbmcoJ3gwMDA4MDA4MCcpO1xuXG4gICAgLy8gQWN0aXZhdGUgbW91c2UgY2xpY2tzLCBtb3VzZSB3aGVlbCBhbmQgdG91Y2hcbiAgICBjb3JuZXJzdG9uZVRvb2xzLm1vdXNlSW5wdXQuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgY29ybmVyc3RvbmVUb29scy5tb3VzZVdoZWVsSW5wdXQuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgLy9jb3JuZXJzdG9uZVRvb2xzLnRvdWNoSW5wdXQuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgY29ybmVyc3RvbmVUb29scy5rZXlib2FyZElucHV0LmVuYWJsZSh0aGlzLmVsZW1lbnQpO1xuXG4gICAgLy8gRW5hYmxlIGFsbCB0b29scyB3ZSB3YW50IHRvIHVzZSB3aXRoIHRoaXMgZWxlbWVudFxuICAgIGNvcm5lcnN0b25lVG9vbHMud3d3Yy5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQsIDEpOyAvLyB3dy93YyBpcyB0aGUgZGVmYXVsdCB0b29sIGZvciBsZWZ0IG1vdXNlIGJ1dHRvblxuICAgIGNvcm5lcnN0b25lVG9vbHMucGFuLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMik7IC8vIHBhbiBpcyB0aGUgZGVmYXVsdCB0b29sIGZvciBtaWRkbGUgbW91c2UgYnV0dG9uXG4gICAgY29ybmVyc3RvbmVUb29scy56b29tLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgNCk7IC8vIHpvb20gaXMgdGhlIGRlZmF1bHQgdG9vbCBmb3IgcmlnaHQgbW91c2UgYnV0dG9uXG4gICAgY29ybmVyc3RvbmVUb29scy5wcm9iZS5lbmFibGUodGhpcy5lbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLmxlbmd0aC5lbmFibGUodGhpcy5lbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLmFuZ2xlLmVuYWJsZSh0aGlzLmVsZW1lbnQpO1xuICAgIGNvcm5lcnN0b25lVG9vbHMuc2ltcGxlQW5nbGUuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgY29ybmVyc3RvbmVUb29scy5lbGxpcHRpY2FsUm9pLmVuYWJsZSh0aGlzLmVsZW1lbnQpO1xuICAgIGNvcm5lcnN0b25lVG9vbHMucmVjdGFuZ2xlUm9pLmVuYWJsZSh0aGlzLmVsZW1lbnQpO1xuICAgIGNvcm5lcnN0b25lVG9vbHMud3d3Y1RvdWNoRHJhZy5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQpIC8vIC0gRHJhZ1xuICAgIGNvcm5lcnN0b25lVG9vbHMuem9vbVRvdWNoUGluY2guYWN0aXZhdGUodGhpcy5lbGVtZW50KSAvLyAtIFBpbmNoXG4gICAgY29ybmVyc3RvbmVUb29scy5wYW5NdWx0aVRvdWNoLmFjdGl2YXRlKHRoaXMuZWxlbWVudCkgLy8gLSBNdWx0aSAoeDIpXG5cbiAgICAvLyBTdGFjayB0b29sc1xuXG4gICAgLy8gRGVmaW5lIHRoZSBTdGFjayBvYmplY3RcbiAgICBjb25zdCBzdGFjayA9IHtcbiAgICAgIGN1cnJlbnRJbWFnZUlkSW5kZXg6IHRoaXMuY3VycmVudEluZGV4LFxuICAgICAgaW1hZ2VJZHM6IHRoaXMuaW1hZ2VJZExpc3RcbiAgICB9O1xuXG4gICAgY29ybmVyc3RvbmVUb29scy5hZGRTdGFja1N0YXRlTWFuYWdlcih0aGlzLmVsZW1lbnQsIFsncGxheUNsaXAnXSk7XG4gICAgLy8gQWRkIHRoZSBzdGFjayB0b29sIHN0YXRlIHRvIHRoZSBlbmFibGVkIGVsZW1lbnRcbiAgICBjb3JuZXJzdG9uZVRvb2xzLmFkZFN0YWNrU3RhdGVNYW5hZ2VyKHRoaXMuZWxlbWVudCwgWydzdGFjayddKTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLmFkZFRvb2xTdGF0ZSh0aGlzLmVsZW1lbnQsICdzdGFjaycsIHN0YWNrKTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsV2hlZWwuYWN0aXZhdGUodGhpcy5lbGVtZW50KTtcbiAgICAvLyBFbmFibGUgYWxsIHRvb2xzIHdlIHdhbnQgdG8gdXNlIHdpdGggdGhpcyBlbGVtZW50XG4gICAgY29ybmVyc3RvbmVUb29scy5zdGFja1Njcm9sbEtleWJvYXJkLmFjdGl2YXRlKHRoaXMuZWxlbWVudCk7XG4gICAgLy9jb3JuZXJzdG9uZVRvb2xzLnN0YWNrUHJlZmV0Y2guZW5hYmxlKHRoaXMuZWxlbWVudCk7XG5cbiAgfVxuXG5cbiAgLy8gY29ybmVyc3RvbmUuZGlzcGxheUltYWdlKHRoaXMuZWxlbWVudCwgaW1hZ2UpO1xuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcm5lcnN0b25lRGlyZWN0aXZlIH0gZnJvbSAnLi9jb3JuZXJzdG9uZS5kaXJlY3RpdmUnO1xuXG5cblxuZGVjbGFyZSBjb25zdCBjb3JuZXJzdG9uZTtcbmRlY2xhcmUgY29uc3QgY29ybmVyc3RvbmVUb29scztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkaWNvbS12aWV3ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kaWNvbS12aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RpY29tLXZpZXdlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRElDT01WaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgpcHVibGljIGVuYWJsZVZpZXdlclRvb2xzID0gZmFsc2U7IC8vIGVuYWJsZSB2aWV3ZXIgdG9vbHNcbiAgICBASW5wdXQoKXB1YmxpYyBkb3dubG9hZEltYWdlc1VSTCA9ICcnIC8vIGRvd25sb2FkIGltYWdlcyBVUkxcblxuXG4gICAgcHVibGljIHNlcmllc0xpc3QgPSBbXTsgLy8gbGlzdCBvZiBzZXJpZXMgb24gdGhlIGltYWdlcyBiZWluZyBkaXNwbGF5ZWRcbiAgICBwdWJsaWMgY3VycmVudFNlcmllc0luZGV4ID0gMDtcbiAgICBwdWJsaWMgY3VycmVudFNlcmllczphbnkgPSB7fTtcbiAgICBwdWJsaWMgaW1hZ2VDb3VudCA9IDA7IC8vIHRvdGFsIGltYWdlIGNvdW50IGJlaW5nIHZpZXdlZFxuXG4gICAgLy8gY29udHJvbCBlbmFibGUvZGlzYWJsZSBpbWFnZSBzY3JvbGwgYnV0dG9uc1xuICAgIHB1YmxpYyBnZXQgaGlkZVByZXZpb3VzSW1hZ2UoKTogYW55IHsgcmV0dXJuIHsgY29sb3I6ICh0aGlzLnZpZXdQb3J0LmN1cnJlbnRJbmRleCA8IDEpID8gJ2JsYWNrJyA6ICd3aGl0ZScgfTsgfVxuICAgIHB1YmxpYyBnZXQgaGlkZU5leHRJbWFnZSgpOiBhbnkgeyByZXR1cm4geyBjb2xvcjogKHRoaXMudmlld1BvcnQuY3VycmVudEluZGV4ID49ICh0aGlzLmltYWdlQ291bnQgLSAxKSkgPyAnYmxhY2snIDogJ3doaXRlJyB9OyB9XG5cbiAgICAvLyBjb250cm9sIGV4aGliaXRpb24gb2YgYSBsb2FkaW5nIGltYWdlcyBwcm9ncmVzcyBpbmRpY2F0b3JcbiAgICBwdWJsaWMgbG9hZGluZ0ltYWdlcyA9IGZhbHNlO1xuICAgIHB1YmxpYyBnZXQgc2hvd1Byb2dyZXNzKCk6IGFueSB7IHJldHVybiB7IGRpc3BsYXk6ICh0aGlzLmxvYWRpbmdJbWFnZXMpID8gJ2lubGluZS1ibG9jaycgOiAnbm9uZScgfSB9O1xuXG4gICAgQFZpZXdDaGlsZChDb3JuZXJzdG9uZURpcmVjdGl2ZSkgdmlld1BvcnQ6IENvcm5lcnN0b25lRGlyZWN0aXZlOyAvLyB0aGUgbWFpbiBjb3JuZXJ0b25lIHZpZXcgcG9ydFxuICAgIFxuICAgIHByaXZhdGUgZWxlbWVudDphbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMudmlld1BvcnQuZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGRpY29tIGltYWdlcyBmb3IgZGlzcGxheVxuICAgICAqIFxuICAgICAqIEBwYXJhbSBpbWFnZUxpc3QgbGlzdCBvZiBpbWFnZUlzIHRvIGxvYWQgYW5kIGRpc3BsYXlcbiAgICAgKi9cbiAgICBsb2FkU3R1ZHlJbWFnZXMoaW1hZ2VMaXN0OiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHRoaXMudmlld1BvcnQucmVzZXRJbWFnZUNhY2hlKCk7IC8vIGNsZWFuIHVwIGltYWdlIGNhY2hlXG4gICAgICAgIHRoaXMubG9hZGluZ0ltYWdlcyA9IHRydWU7IC8vIGFjdGl2YXRlIHByb2dyZXNzIGluZGljYXRvclxuICAgICAgICB0aGlzLnNlcmllc0xpc3QgPSBbXTsgLy8gc3RhcnQgYSBuZXcgc2VyaWVzIGxpc3RcblxuICAgICAgICAvL1xuICAgICAgICAvLyBsb29wIHRocnUgYWxsIGltYWdlSWRzLCBsb2FkIGFuZCBjYWNoZSB0aGVtIGZvciBleGhpYml0aW9uXG4gICAgICAgIC8vXG4gICAgICAgIGltYWdlTGlzdC5mb3JFYWNoKChpbWFnZUlkLCBpbWFnZUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZS5sb2FkQW5kQ2FjaGVJbWFnZShpbWFnZUlkKS50aGVuKGltYWdlRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gYnVpbGQgbGlzdCBvZiBzZXJpZXMgaW4gYWxsIGxvYWRkZWQgaW1hZ2VzXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VyaWVzID0ge1xuICAgICAgICAgICAgICAgICAgICBzdHVkeUlEOiBpbWFnZURhdGEuZGF0YS5zdHJpbmcoJ3gwMDIwMDAwZCcpLFxuICAgICAgICAgICAgICAgICAgICBzZXJpZXNJRDogaW1hZ2VEYXRhLmRhdGEuc3RyaW5nKCd4MDAyMDAwMGQnKSxcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzTnVtYmVyOiBpbWFnZURhdGEuZGF0YS5pbnRTdHJpbmcoJ3gwMDIwMDAxMScpLFxuICAgICAgICAgICAgICAgICAgICBzdHVkeURlc2NyaXB0aW9uOiBpbWFnZURhdGEuZGF0YS5zdHJpbmcoJ3gwMDA4MTAzMCcpLFxuICAgICAgICAgICAgICAgICAgICBzZXJpZXNEZXNjcmlwdGlvbjogaW1hZ2VEYXRhLmRhdGEuc3RyaW5nKCd4MDAwODEwM2UnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VDb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VMaXN0OiBbaW1hZ2VEYXRhXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbmV3IHNlcmllcywgYWRkIGl0IHRvIHRoZSBsaXN0XG4gICAgICAgICAgICAgICAgbGV0IHNlcmllc0luZGV4ID0gdGhpcy5zZXJpZXNMaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uc2VyaWVzSUQgPT09IHNlcmllcy5zZXJpZXNJRCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlcmllc0luZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXJpZXNJbmRleCA9IHRoaXMuc2VyaWVzTGlzdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWVzTGlzdC5wdXNoKHNlcmllcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlcmllc0l0ZW0gPSB0aGlzLnNlcmllc0xpc3Rbc2VyaWVzSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBzZXJpZXNJdGVtLmltYWdlQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzSXRlbS5pbWFnZUxpc3QucHVzaChpbWFnZURhdGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzZXJpZXNJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXJpZXNJbmRleCA9IHNlcmllc0luZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXJpZXMgPSB0aGlzLnNlcmllc0xpc3Rbc2VyaWVzSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ291bnQgPSB0aGlzLmN1cnJlbnRTZXJpZXMuaW1hZ2VDb3VudDsgLy8gZ2V0IHRvdGFsIGltYWdlIGNvdW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1BvcnQuYWRkSW1hZ2VEYXRhKGltYWdlRGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKChpbWFnZUluZGV4KzEpID49IGltYWdlTGlzdC5sZW5ndGgpIHsgLy8gZGlkIHdlIGZpbmlzaCBsb2FkaW5nIGltYWdlcz9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW1hZ2VzID0gZmFsc2U7IC8vIGRlYWN0aXZhdGUgcHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93U2VyaWVzKGluZGV4KSB7XG4gICAgICAgIHRoaXMucmVzZXRBbGxUb29scygpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTZXJpZXNJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmN1cnJlbnRTZXJpZXMgPSB0aGlzLnNlcmllc0xpc3RbaW5kZXhdO1xuICAgICAgICB0aGlzLmltYWdlQ291bnQgPSB0aGlzLmN1cnJlbnRTZXJpZXMuaW1hZ2VDb3VudDsgLy8gZ2V0IHRvdGFsIGltYWdlIGNvdW50XG4gICAgICAgIHRoaXMudmlld1BvcnQucmVzZXRJbWFnZUNhY2hlKCk7IC8vIGNsZWFuIHVwIGltYWdlIGNhY2hlXG4gICAgICAgIHRoaXMubG9hZGluZ0ltYWdlcyA9IHRydWU7IC8vIGFjdGl2YXRlIHByb2dyZXNzIGluZGljYXRvclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFNlcmllcy5pbWFnZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IHRoaXMuY3VycmVudFNlcmllcy5pbWFnZUxpc3RbaV07XG4gICAgICAgICAgICB0aGlzLnZpZXdQb3J0LmFkZEltYWdlRGF0YShpbWFnZURhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGluZ0ltYWdlcyA9IGZhbHNlOyAvLyBkZS1hY3RpdmF0ZSBwcm9ncmVzcyBpbmRpY2F0b3JcbiAgIH1cblxuICAgcHVibGljIHNhdmVBcygpIHtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLnNhdmVBcyh0aGlzLmVsZW1lbnQsXCJ0ZXN0ZS5qcGdcIilcbiAgIH1cblxuICAgIC8qKlxuICAgICAqIEltYWdlIHNjcm9sbCBtZXRob2RzXG4gICAgICovXG4gICAgcHVibGljIG5leHRJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlld1BvcnQuY3VycmVudEluZGV4IDwgdGhpcy5pbWFnZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdQb3J0Lm5leHRJbWFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHByZXZpb3VzSW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdQb3J0LmN1cnJlbnRJbmRleCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudmlld1BvcnQucHJldmlvdXNJbWFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kcyB0byBhY3RpdmF0ZS9kZWFjdGl2YXRlIHZpZXdlciB0b29sc1xuICAgICAqL1xuXG4gICAgLy8gZGVhY3RpdmF0ZSBhbGwgdG9vbHNcbiAgICBwdWJsaWMgcmVzZXRBbGxUb29scygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMud3d3Yy5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnBhbi5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnpvb20uZGVhY3RpdmF0ZSh0aGlzLmVsZW1lbnQsIDEpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5wcm9iZS5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLmxlbmd0aC5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnNpbXBsZUFuZ2xlLmRlYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuZWxsaXB0aWNhbFJvaS5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnJlY3RhbmdsZVJvaS5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsLmRlYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMud3d3Y1RvdWNoRHJhZy5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnpvb21Ub3VjaERyYWcuZGVhY3RpdmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5wYW5Ub3VjaERyYWcuZGVhY3RpdmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5zdGFja1Njcm9sbFRvdWNoRHJhZy5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnN0b3BDbGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhY3RpdmF0ZSB3aW5kb3dpbmdcbiAgICBwdWJsaWMgZW5hYmxlV2luZG93aW5nKCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEFsbFRvb2xzKCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnd3d2MuYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMud3d3Y1RvdWNoRHJhZy5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWN0aXZhdGUgem9vbVxuICAgIHB1YmxpYyBlbmFibGVab29tKCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEFsbFRvb2xzKCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnpvb20uYWN0aXZhdGUodGhpcy5lbGVtZW50LCA1KTsgLy8gNSBpcyByaWdodCBtb3VzZSBidXR0b24gYW5kIGxlZnQgbW91c2UgYnV0dG9uXG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnpvb21Ub3VjaERyYWcuYWN0aXZhdGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFjdGl2YXRlIHBhblxuICAgIHB1YmxpYyBlbmFibGVQYW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMucGFuLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMyk7IC8vIDMgaXMgbWlkZGxlIG1vdXNlIGJ1dHRvbiBhbmQgbGVmdCBtb3VzZSBidXR0b25cbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMucGFuVG91Y2hEcmFnLmFjdGl2YXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhY3RpdmF0ZSBpbWFnZSBzY3JvbGxcbiAgICBwdWJsaWMgZW5hYmxlU2Nyb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEFsbFRvb2xzKCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsVG91Y2hEcmFnLmFjdGl2YXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsS2V5Ym9hcmQuYWN0aXZhdGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFjdGl2YXRlIGxlbmd0aCBtZWFzdXJlbWVudFxuICAgIHB1YmxpYyBlbmFibGVMZW5ndGgoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMubGVuZ3RoLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhY3RpdmF0ZSBhbmdsZSBtZWFzdXJlbWVudFxuICAgIHB1YmxpYyBlbmFibGVBbmdsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBbGxUb29scygpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5zaW1wbGVBbmdsZS5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWN0aXZhdGUgcGl4ZWwgcHJvYmVcbiAgICBwdWJsaWMgZW5hYmxlUHJvYmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMucHJvYmUuYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFjdGl2YXRlIEVsbGlwdGljYWwgUk9JXG4gICAgcHVibGljIGVuYWJsZUVsbGlwdGljYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuZWxsaXB0aWNhbFJvaS5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWN0aXZhdGUgUmVjdGFuZ2xlIFJPSVxuICAgIHB1YmxpYyBlbmFibGVSZWN0YW5nbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMucmVjdGFuZ2xlUm9pLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQbGF5IENsaXBcbiAgICBwdWJsaWMgcGxheUNsaXAoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBsZXQgZnJhbWVSYXRlID0gMTA7XG4gICAgICAgICAgICBsZXQgc3RhY2tTdGF0ZSA9IGNvcm5lcnN0b25lVG9vbHMuZ2V0VG9vbFN0YXRlKHRoaXMuZWxlbWVudCwgJ3N0YWNrJyk7XG4gICAgICAgICAgICBpZiAoc3RhY2tTdGF0ZSkge1xuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZSA9IHN0YWNrU3RhdGUuZGF0YVswXS5mcmFtZVJhdGU7XG4gICAgICAgICAgICAgICAgLy8gUGxheSBhdCBhIGRlZmF1bHQgMTAgRlBTIGlmIHRoZSBmcmFtZXJhdGUgaXMgbm90IHNwZWNpZmllZFxuICAgICAgICAgICAgICAgIGlmIChmcmFtZVJhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZVJhdGUgPSAxMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnBsYXlDbGlwKHRoaXMuZWxlbWVudCwgZnJhbWVSYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0b3AgQ2xpcFxuICAgIHB1YmxpYyBzdG9wQ2xpcCgpIHtcbiAgICAgICAgY29ybmVyc3RvbmVUb29scy5zdG9wQ2xpcCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIGludmVydCBpbWFnZVxuICAgIHB1YmxpYyBpbnZlcnRJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGxldCB2aWV3cG9ydCA9IGNvcm5lcnN0b25lLmdldFZpZXdwb3J0KHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAvLyBUb2dnbGUgaW52ZXJ0XG4gICAgICAgICAgICBpZiAodmlld3BvcnQuaW52ZXJ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmlld3BvcnQuaW52ZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmludmVydCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3JuZXJzdG9uZS5zZXRWaWV3cG9ydCh0aGlzLmVsZW1lbnQsIHZpZXdwb3J0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlc2V0IGltYWdlXG4gICAgcHVibGljIHJlc2V0SW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBsZXQgdG9vbFN0YXRlTWFuYWdlciA9IGNvcm5lcnN0b25lVG9vbHMuZ2V0RWxlbWVudFRvb2xTdGF0ZU1hbmFnZXIodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIG9ubHkgd29ya3Mgb24gSW1hZ2VJZC1zcGVjaWZpYyB0b29sIHN0YXRlIG1hbmFnZXJzIChmb3Igbm93KVxuICAgICAgICAgICAgLy90b29sU3RhdGVNYW5hZ2VyLmNsZWFyKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLmNsZWFyVG9vbFN0YXRlKHRoaXMuZWxlbWVudCwgXCJsZW5ndGhcIik7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLmNsZWFyVG9vbFN0YXRlKHRoaXMuZWxlbWVudCwgXCJhbmdsZVwiKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuY2xlYXJUb29sU3RhdGUodGhpcy5lbGVtZW50LCBcInNpbXBsZUFuZ2xlXCIpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5jbGVhclRvb2xTdGF0ZSh0aGlzLmVsZW1lbnQsIFwicHJvYmVcIik7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLmNsZWFyVG9vbFN0YXRlKHRoaXMuZWxlbWVudCwgXCJlbGxpcHRpY2FsUm9pXCIpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5jbGVhclRvb2xTdGF0ZSh0aGlzLmVsZW1lbnQsIFwicmVjdGFuZ2xlUm9pXCIpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmUudXBkYXRlSW1hZ2UodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBbGxUb29scygpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5kZWNsYXJlIGNvbnN0IGNvcm5lcnN0b25lO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0aHVtYm5haWxdJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUaHVtYm5haWxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBpbWFnZURhdGE6IGFueTtcblxuICBwcml2YXRlIGVsZW1lbnQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuIC8vIFJldHJpZXZlIHRoZSBET00gZWxlbWVudCBpdHNlbGZcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgIFxuICAgIC8vIEVuYWJsZSB0aGUgZWxlbWVudCB3aXRoIENvcm5lcnN0b25lXG4gICAgY29ybmVyc3RvbmUuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgaWYgKHRoaXMuaW1hZ2VEYXRhICYmIHRoaXMuZWxlbWVudCkge1xuICAgICAgY29uc3Qgdmlld3BvcnQgPSBjb3JuZXJzdG9uZS5nZXREZWZhdWx0Vmlld3BvcnRGb3JJbWFnZSh0aGlzLmVsZW1lbnQsIHRoaXMuaW1hZ2VEYXRhKTtcbiAgICAgIGNvcm5lcnN0b25lLmRpc3BsYXlJbWFnZSh0aGlzLmVsZW1lbnQsIHRoaXMuaW1hZ2VEYXRhLCB2aWV3cG9ydCk7XG4gICAgICAvLyBGaXQgdGhlIGltYWdlIHRvIHRoZSB2aWV3cG9ydCB3aW5kb3dcbiAgICAgIGNvcm5lcnN0b25lLmZpdFRvV2luZG93KHRoaXMuZWxlbWVudCk7XG4gICAgICBjb3JuZXJzdG9uZS5yZXNpemUodGhpcy5lbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcblxuaW1wb3J0IHsgRElDT01WaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL2RpY29tLXZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29ybmVyc3RvbmVEaXJlY3RpdmUgfSBmcm9tICcuL2Nvcm5lcnN0b25lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUaHVtYm5haWxEaXJlY3RpdmUgfSBmcm9tICcuL3RodW1ibmFpbC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RJQ09NVmlld2VyQ29tcG9uZW50LCBDb3JuZXJzdG9uZURpcmVjdGl2ZSwgVGh1bWJuYWlsRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0RJQ09NVmlld2VyQ29tcG9uZW50LCBDb3JuZXJzdG9uZURpcmVjdGl2ZSwgVGh1bWJuYWlsRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBEaWNvbVZpZXdlck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFtQ0UsOEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFsQm5DLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNsQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFB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

/***/ }),

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

module.exports = ".choose_file{\n    padding:5px 10px;\n    background:#00ad2d;\n    border:1px solid #00ad2d;\n    position:relative;\n    color:#fff;\n    border-radius:2px;\n    text-align:center;\n    float:left;\n    cursor:pointer;\n    margin-left: 50px;\n  }\n  .hide_file {\n      position: absolute;\n      z-index: 1000;\n      opacity: 0;\n      cursor: pointer;\n      right: 0;\n      top: 0;\n      height: 100%;\n      font-size: 24px;\n      width: 100%;\n      \n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100%; width: 100%;\">\n  <div style=\"display: flex; margin-left: 120px; align-items: center;\">\n    <h1>\n      A demo DICOM Viewer, based on <a href=\"https://github.com/cornerstonejs\">Cornerstone</a>\n    </h1>\n      \n    <div class=\"choose_file\">\n      Choose Your DICOM Files\n      <input class=\"hide_file\" type=\"file\" multiple accept=\"application/dicom\" id=\"imagens\" title=\"selecione arquivos de imagens\"\n      (change)=\"loadDICOMImages($event.target.files)\">\n    </div>\n\n      \n\n  </div>\n\n  <div style=\"display: flex;height: calc(100% - 90px); width:100%;\">\n    <dicom-viewer [enableViewerTools]=\"true\" style=\"height:100%; width:100%; margin: 10px;\"></dicom-viewer>\n  </div>\n</div>"

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
/* harmony import */ var dicomViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dicomViewer */ "./dist/dicom-viewer/fesm5/ng-dicomviewer.js");
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
                    codecsPath: '../codecs/cornerstoneWADOImageLoaderCodecs.js'
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
            var fileList = Array.from(files);
            fileList.sort(function (a, b) {
                if (a.name > b.name)
                    return 1;
                if (b.name > a.name)
                    return -1;
                return 0;
            });
            //cornerstoneWADOImageLoader.wadouri.fileManager.purge();
            cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.purge();
            // loop thru the File list and build a list of wadouri imageIds (dicomfile:)
            for (var i = 0; i < fileList.length; i++) {
                var dicomFile = fileList[i];
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(dicomViewer__WEBPACK_IMPORTED_MODULE_1__["DICOMViewerComponent"]),
        __metadata("design:type", dicomViewer__WEBPACK_IMPORTED_MODULE_1__["DICOMViewerComponent"])
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
/* harmony import */ var dicomViewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dicomViewer */ "./dist/dicom-viewer/fesm5/ng-dicomviewer.js");
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
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                dicomViewer__WEBPACK_IMPORTED_MODULE_6__["DicomViewerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /Users/jcarneiro/dicomViewerLib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map