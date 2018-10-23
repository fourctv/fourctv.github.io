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
        // current image Patient name, do display on the overlay
        this.hospital = ''; // current image Institution name, to display on the overlay
        // current image Institution name, to display on the overlay
        this.instanceNumber = ''; // current image Instance #, to display on the overlay
    }
    Object.defineProperty(CornerstoneDirective.prototype, "windowingValue", {
        get: 
        // current image Instance #, to display on the overlay
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
        this.currentImage = null;
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
        this.currentImage = image;
        // Fit the image to the viewport window
        cornerstone.fitToWindow(this.element);
        cornerstone.resize(this.element, true);
        // get image info to display in overlays
        this.patientName = image.data.string('x00100010').replace(/\^/g, '');
        this.hospital = image.data.string('x00080080');
        this.instanceNumber = image.data.intString('x00200011') + '/' + image.data.intString('x00200013');
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
    /** @nocollapse */
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
        // enable viewer tools
        this.downloadImagesURL = ''; // download images URL
        // download images URL
        this.maxImagesToLoad = 20; // limit for the automatic loading of study images
        // limit for the automatic loading of study images
        this.seriesList = []; // list of series on the images being displayed
        // list of series on the images being displayed
        this.currentSeriesIndex = 0;
        this.currentSeries = {};
        this.imageCount = 0; // total image count being viewed
        // control exhibition of a loading images progress indicator
        this.loadingImages = false;
        // the main cornertone view port
        this.loadedImages = [];
        this.imageIdList = [];
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
    Object.defineProperty(DICOMViewerComponent.prototype, "moreImagestoLoad", {
        // control message for more images to load
        get: 
        // control message for more images to load
        /**
         * @return {?}
         */
        function () {
            if (this.loadedImages.length < this.imageIdList.length && !this.loadingImages) { // are there any more images to load?
                // are there any more images to load?
                /** @type {?} */
                var imagesToLoad = (this.maxImagesToLoad <= 0) ? (this.imageIdList.length - this.loadedImages.length) : Math.min(this.maxImagesToLoad, this.imageIdList.length - this.loadedImages.length);
                return imagesToLoad.toString();
            }
            else
                return '';
        },
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
     * @param imageIdList list of imageIds to load and display
     */
    /**
     * Load dicom images for display
     *
     * @param {?} imageIdList list of imageIds to load and display
     * @return {?}
     */
    DICOMViewerComponent.prototype.loadStudyImages = /**
     * Load dicom images for display
     *
     * @param {?} imageIdList list of imageIds to load and display
     * @return {?}
     */
    function (imageIdList) {
        var _this = this;
        this.imageIdList = imageIdList;
        this.viewPort.resetImageCache(); // clean up image cache
        this.seriesList = []; // start a new series list
        this.currentSeriesIndex = 0; // always display first series
        this.loadedImages = []; // reset list of images already loaded
        // reset list of images already loaded
        //
        // loop thru all imageIds, load and cache them for exhibition (up the the maximum limit defined)
        //
        /** @type {?} */
        var maxImages = (this.maxImagesToLoad <= 0) ? imageIdList.length : Math.min(this.maxImagesToLoad, imageIdList.length);
        this.loadingImages = true; // activate progress indicator
        var _loop_1 = function (index) {
            /** @type {?} */
            var imageId = imageIdList[index];
            cornerstone.loadAndCacheImage(imageId).then(function (imageData) { _this.imageLoaded(imageData, index, maxImages); });
        };
        for (var index = 0; index < maxImages; index++) {
            _loop_1(index);
        }
    };
    /**
     * Load the next batch of images
     */
    /**
     * Load the next batch of images
     * @return {?}
     */
    DICOMViewerComponent.prototype.loadMoreImages = /**
     * Load the next batch of images
     * @return {?}
     */
    function () {
        var _this = this;
        //
        // loop thru all imageIds, load and cache them for exhibition (up the the maximum limit defined)
        //
        /** @type {?} */
        var maxImages = (this.maxImagesToLoad <= 0) ? (this.imageIdList.length - this.loadedImages.length) : Math.min(this.maxImagesToLoad, this.imageIdList.length - this.loadedImages.length);
        this.loadingImages = true; // activate progress indicator
        // activate progress indicator
        /** @type {?} */
        var nextImageIndex = this.loadedImages.length;
        var _loop_2 = function (index) {
            /** @type {?} */
            var imageId = this_1.imageIdList[nextImageIndex++];
            cornerstone.loadAndCacheImage(imageId).then(function (imageData) { _this.imageLoaded(imageData, index, maxImages); });
        };
        var this_1 = this;
        for (var index = 0; index < maxImages; index++) {
            _loop_2(index);
        }
    };
    /**
     *
     * @param imageData the dicom image data
     * @param imageIndex the image index loades
     * @param maxImages max images to load
     */
    /**
     *
     * @param {?} imageData the dicom image data
     * @param {?} imageIndex the image index loades
     * @param {?} maxImages max images to load
     * @return {?}
     */
    DICOMViewerComponent.prototype.imageLoaded = /**
     *
     * @param {?} imageData the dicom image data
     * @param {?} imageIndex the image index loades
     * @param {?} maxImages max images to load
     * @return {?}
     */
    function (imageData, imageIndex, maxImages) {
        //console.log(imageData.imageId)
        // build list of series in all loadded images
        /** @type {?} */
        var series = {
            studyID: imageData.data.string('x0020000d'),
            seriesID: imageData.data.string('x0020000e'),
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
        var seriesIndex = this.seriesList.findIndex(function (item) { return item.seriesID === series.seriesID; });
        if (seriesIndex < 0) {
            seriesIndex = this.seriesList.length;
            this.seriesList.push(series);
        }
        else {
            /** @type {?} */
            var seriesItem = this.seriesList[seriesIndex];
            seriesItem.imageCount++;
            seriesItem.imageList.push(imageData);
            seriesItem.imageList.sort(function (a, b) {
                if (a.data.intString('x00200013') > b.data.intString('x00200013'))
                    return 1;
                if (a.data.intString('x00200013') < b.data.intString('x00200013'))
                    return -1;
                return 0;
            });
        }
        this.loadedImages.push(imageData); // save to images loaded
        if ((imageIndex + 1) >= maxImages) { // did we finish loading images?
            this.loadingImages = false; // deactivate progress indicator
        }
        if (seriesIndex === this.currentSeriesIndex) {
            //this.currentSeries = this.seriesList[seriesIndex];
            //this.imageCount = this.currentSeries.imageCount; // get total image count
            //this.viewPort.addImageData(imageData);
            this.showSeries(this.currentSeriesIndex);
        }
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
                    template: "<div style=\"display: flex; width:100%; height: 100%;\">\n    <div class=\"thumbnailSelector\" *ngIf=\"seriesList.length > 1\">\n        <div class=\"thumbnails list-group\" style=\"height: 100%;\">\n            <a *ngFor=\"let series of seriesList; let i=index\" [ngClass]=\"{'active': currentSeriesIndex === i}\" class=\"list-group-item\"\n                oncontextmenu=\"return false\" unselectable=\"on\" onselectstart=\"return false;\" onmousedown=\"return false;\"\n                (click)=\"showSeries(i)\">\n                <div thumbnail [imageData]=\"series.imageList[0]\" class=\"csthumbnail\" oncontextmenu=\"return false\"\n                    unselectable=\"on\" onselectstart=\"return false;\" onmousedown=\"return false;\">\n                </div>\n                <div class=\"text-center small\" style=\"color:white;\">{{series.seriesDescription}}</div>\n                <div id=\"mrtopright\" style=\"position: absolute;top:3px; right:3px\">\n                    <div id=\"imageCount\" style=\"color:red; font-size: 10pt\">{{series.imageCount}}</div>\n                </div>\n            </a>\n            <div class=\"version\">\n                <h6 style=\"color:white;\"><small>0.1.12</small></h6>\n            </div>\n        </div>\n    </div>\n\n    <!--container where image will be loaded-->\n    <div style=\"margin-left: 5px; overflow: hidden; width: 100%; height: 100%; background-color: #424242;\">\n\n        <!-- Toolbar -->\n        <div>\n            <div class=\"btn-group\">\n                <div class=\"btn-group\" *ngIf=\"enableViewerTools\">\n\n                    <!-- WW/WL -->\n                    <button type=\"button\" (click)=\"enableWindowing()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Windowing\"><span class=\"fa fa-sun\"></span></button>\n                    <!-- Invert -->\n                    <button type=\"button\" (click)=\"invertImage()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Invert\"><span class=\"fa fa-adjust\"></span></button>\n                    <!-- Zoom -->\n                    <button type=\"  button\" (click)=\"enableZoom()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Zoom\"><span class=\"fa fa-search\"></span></button>\n                    <!-- Pan -->\n                    <button type=\"button\" (click)=\"enablePan()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Pan\"><span class=\"fa fa-arrows-alt\"></span></button>\n                    <!-- Stack scroll -->\n                    <button type=\"button\" (click)=\"enableScroll()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Scroll\"><span class=\"fa fa-bars\"></span></button>\n                    <!-- Length measurement -->\n                    <button type=\"button\" (click)=\"enableLength()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Length\"><span class=\"fa fa-arrows-alt-v\"></span></button>\n                    <!-- Angle measurement -->\n                    <button type=\"button\" (click)=\"enableAngle()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Angle\"><span class=\"fa fa-angle-left\"></span></button>\n                    <!-- Pixel probe -->\n                    <button type=\"button\" (click)=\"enableProbe()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Pixel Probe\"><span class=\"fa fa-dot-circle\"></span></button>\n                    <!-- Elliptical ROI -->\n                    <button type=\"button\" (click)=\"enableElliptical()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Elliptical ROI\"><span class=\"fa fa-circle\"></span></button>\n                    <!-- Rectangle ROI -->\n                    <button type=\"button\" (click)=\"enableRectangle()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Rectangle ROI\"><span class=\"fa fa-square\"></span></button>\n                    <!-- Reset Image -->\n                    <button type=\"button\" (click)=\"resetImage()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Reset Image\"><span class=\"fa fa-window-restore\"></span></button>\n                </div>\n                <div class=\"btn-group\">\n                    <!-- Play clip -->\n                    <button type=\"button\" (click)=\"playClip()\" style=\"border-left: 1px dotted white;\" class=\"btn btn-sm btn-default\"\n                        data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Play Clip\"><span\n                            class=\"fa fa-play\"></span></button>\n                    <!-- Stop clip -->\n                    <button type=\"button\" (click)=\"stopClip()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Stop Clip\"><span class=\"fa fa-stop\"></span></button>\n\n                    <!-- Layout -->\n                    <!--                 <button type=\"button\" style=\"border-left: 1px dotted white;\" [matMenuTriggerFor]=\"menu\" class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"dropdown\" aria-expanded=\"false\" data-placement=\"top\" title=\"Layout\"><span class=\"fa fa-th-large\"></span></button>\n                  <mat-menu #menu=\"matMenu\">\n                          <a mat-menu-item class=\"dropdown-item\" >1x1</a>\n                          <a mat-menu-item class=\"dropdown-item\" >2x1</a>\n                          <a mat-menu-item class=\"dropdown-item\" >1x2</a>\n                          <a mat-menu-item class=\"dropdown-item\" >2x2</a>\n                    \n                  </mat-menu> -->\n\n                    <!-- Download -->\n                    <a *ngIf=\"downloadImagesURL != ''\" [href]=\"downloadImagesURL\" download style=\"border-left: 1px dotted white;\"\n                        class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\"\n                        title=\"Download Imagens\">\n                        <span class=\"fa fa-download\"></span>\n                    </a>\n\n                    <!-- Imagem Anterior -->\n                    <button type=\"button\" (click)=\"previousImage()\" [ngStyle]=\"hidePreviousImage\" style=\"border-left: 1px dotted white;\"\n                        class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\"\n                        title=\"Imagem Anterior\"><span class=\"fa fa-backward\"></span></button>\n                    <!-- Pr\u00F3xima Imagem -->\n                    <button type=\"button\" (click)=\"nextImage()\" [ngStyle]=\"hideNextImage\" class=\"btn btn-sm btn-default\"\n                        data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Pr\u00F3xima Imagem\"><span\n                            class=\"fa fa-forward\"></span></button>\n\n                    <!-- Load Next Batch -->\n                    <a *ngIf=\"moreImagestoLoad != ''\" (click)=\"loadMoreImages()\" style=\"border-left: 1px dotted white;color: white;\"\n                        class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\"\n                        title=\"Carrega mais imagens...\">\n                        pr\u00F3ximas {{moreImagestoLoad}} imagens\n                    </a>\n\n                    <!-- Progress Spinner -->\n                    <div style=\"padding-left: 15px; padding-top: 15px;\" [ngStyle]=\"showProgress\">\n                        <mat-spinner style=\"display: inline-block;\" diameter=\"30\" strokeWidth=\"5\" color=\"warn\"></mat-spinner>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n        <div style=\"width: 100%; height: calc(100% - 60px);position:relative;display:inline-block;color:white;\"\n            oncontextmenu=\"return false\" class='cornerstone-enabled-image' unselectable='on' onselectstart='return false;'\n            onmousedown='return false;'>\n            <div cornerstone style=\"width: 100%; height: 100%;top:0px;left:0px;position:absolute;outline:none;margin: 0 auto;\"\n                id=\"dicomImage\">\n            </div>\n            <div id=\"mrtopleft\" style=\"position: absolute;top:3px; left:3px\">\n                {{viewPort.patientName}}\n            </div>\n            <div id=\"mrtopright\" style=\"position: absolute;top:3px; right:3px\">\n                {{viewPort.hospital}}\n            </div>\n            <div id=\"mrbottomleft\" style=\"position: absolute;bottom:3px; left:3px\">\n                <div>\n                    {{viewPort.instanceNumber}}\n                </div>\n                <div>\n                    WW/WC: {{viewPort.windowingValue}}\n                </div>\n            </div>\n            <div id=\"mrbottomcenter\" style=\"position: absolute;bottom:3px; width: 100%;text-align: center; color:red\">\n                SOMENTE PARA VISUALIZA\u00C7\u00C3O, N\u00C3O PODE SER USADO PARA DIAGN\u00D3STICO.\n            </div>\n            <div id=\"mrbottomright\" style=\"position: absolute;bottom:6px; right:3px\">\n                <div id=\"zoomText\">Zoom: {{viewPort.zoomValue}}</div>\n                <div id=\"sliceText\">Image: {{(imageCount > 0)?viewPort.currentIndex+1:0}}/{{imageCount}}</div>\n            </div>\n        </div>\n\n    </div>\n\n</div>",
                    styles: [".btn-default{color:#fff;background-color:#424242;border-color:#424242;font-size:24pt;background-image:none;text-shadow:none}.thumbnailSelector{width:106px;float:left;margin-left:5px;height:100%;background-color:#424242}.thumbnails{margin:0;overflow-y:scroll;overflow-x:hidden}.csthumbnail{color:#fff;background-color:#000;width:100px;height:100px;border:0;padding:0}.version{position:absolute;bottom:20px;width:106px;text-align:center}a.list-group-item{background-color:#000;padding:2px;border:1px solid #424242;z-index:5;margin-bottom:3px}a.list-group-item.active,a.list-group-item.active:focus,a.list-group-item.active:hover{background-color:#424242;border-color:#4e4e4e;background-image:linear-gradient(red,red,red)}"]
                }] }
    ];
    /** @nocollapse */
    DICOMViewerComponent.ctorParameters = function () { return []; };
    DICOMViewerComponent.propDecorators = {
        enableViewerTools: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        downloadImagesURL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxImagesToLoad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
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
    /** @nocollapse */
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGljb212aWV3ZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWRpY29tdmlld2VyL2xpYi9jb3JuZXJzdG9uZS5kaXJlY3RpdmUudHMiLCJuZzovL25nLWRpY29tdmlld2VyL2xpYi9kaWNvbS12aWV3ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1kaWNvbXZpZXdlci9saWIvdGh1bWJuYWlsLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmctZGljb212aWV3ZXIvbGliL2RpY29tLXZpZXdlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmRlY2xhcmUgY29uc3QgY29ybmVyc3RvbmU7XG5kZWNsYXJlIGNvbnN0IGNvcm5lcnN0b25lVG9vbHM7XG5cblxuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb3JuZXJzdG9uZV0nLFxufSlcblxuZXhwb3J0IGNsYXNzIENvcm5lcnN0b25lRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZWxlbWVudDogYW55O1xuXG4gIHB1YmxpYyBpbWFnZUxpc3QgPSBbXTtcbiAgcHJpdmF0ZSBpbWFnZUlkTGlzdCA9IFtdO1xuICBwdWJsaWMgY3VycmVudEluZGV4ID0gMDtcbiAgcHVibGljIGN1cnJlbnRJbWFnZTphbnk7XG4gIHB1YmxpYyBwYXRpZW50TmFtZSA9ICcnOyAvLyBjdXJyZW50IGltYWdlIFBhdGllbnQgbmFtZSwgZG8gZGlzcGxheSBvbiB0aGUgb3ZlcmxheVxuICBwdWJsaWMgaG9zcGl0YWwgPSAnJzsgLy8gY3VycmVudCBpbWFnZSBJbnN0aXR1dGlvbiBuYW1lLCB0byBkaXNwbGF5IG9uIHRoZSBvdmVybGF5XG4gIHB1YmxpYyBpbnN0YW5jZU51bWJlciA9ICcnOyAvLyBjdXJyZW50IGltYWdlIEluc3RhbmNlICMsIHRvIGRpc3BsYXkgb24gdGhlIG92ZXJsYXlcblxuICBwdWJsaWMgZ2V0IHdpbmRvd2luZ1ZhbHVlKCk6c3RyaW5nIHtcbiAgICB2YXIgdmlld3BvcnQgPSBjb3JuZXJzdG9uZS5nZXRWaWV3cG9ydCh0aGlzLmVsZW1lbnQpO1xuICAgIGlmICh2aWV3cG9ydCkge3JldHVybiBNYXRoLnJvdW5kKHZpZXdwb3J0LnZvaS53aW5kb3dXaWR0aCkgKyBcIi9cIiArIE1hdGgucm91bmQodmlld3BvcnQudm9pLndpbmRvd0NlbnRlcik7fVxuICAgIGVsc2UgcmV0dXJuICcnO1xuICB9XG5cbiAgcHVibGljIGdldCB6b29tVmFsdWUoKTpzdHJpbmcge1xuICAgIHZhciB2aWV3cG9ydCA9IGNvcm5lcnN0b25lLmdldFZpZXdwb3J0KHRoaXMuZWxlbWVudCk7XG4gICAgaWYgKHZpZXdwb3J0KSB7cmV0dXJuIHZpZXdwb3J0LnNjYWxlLnRvRml4ZWQoMik7fVxuICAgIGVsc2UgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBjb3JuZXJzdG9uZS5yZXNpemUodGhpcy5lbGVtZW50LCB0cnVlKTtcbiAgfVxuXG4gIC8vQEhvc3RMaXN0ZW5lcignbW91c2V3aGVlbCcsIFsnJGV2ZW50J10pXG4gIG9uTW91c2VXaGVlbChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5pbWFnZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgKGV2ZW50LndoZWVsRGVsdGEgfHwgLWV2ZW50LmRldGFpbCkpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgXG4gIFxuICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5pbWFnZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLmltYWdlTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICBcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgtLTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgfVxuICBcbiAgICAgIH1cbiAgXG4gICAgICB0aGlzLmRpc3BsYXlJbWFnZSh0aGlzLmltYWdlTGlzdFt0aGlzLmN1cnJlbnRJbmRleF0pO1xuICAgIH1cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvLyBSZXRyaWV2ZSB0aGUgRE9NIGVsZW1lbnQgaXRzZWxmXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBFbmFibGUgdGhlIGVsZW1lbnQgd2l0aCBDb3JuZXJzdG9uZVxuICAgIGNvcm5lcnN0b25lLmVuYWJsZSh0aGlzLmVsZW1lbnQpO1xuXG4gIH1cblxuICBwdWJsaWMgcmVzZXRJbWFnZUNhY2hlKCkge1xuICAgIC8vY29ybmVyc3RvbmUuaW1hZ2VDYWNoZS5wdXJnZUNhY2hlKCk7XG4gICAgLy9jb3JuZXJzdG9uZS5yZXNldCh0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMuaW1hZ2VMaXN0ID0gW107XG4gICAgdGhpcy5pbWFnZUlkTGlzdCA9IFtdO1xuICAgIHRoaXMuY3VycmVudEltYWdlID0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBwcmV2aW91c0ltYWdlKCkge1xuICAgICAgdGhpcy5jdXJyZW50SW5kZXgtLTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgfVxuICAgIHRoaXMuZGlzcGxheUltYWdlKHRoaXMuaW1hZ2VMaXN0W3RoaXMuY3VycmVudEluZGV4XSk7XG5cbiAgfVxuXG4gIHB1YmxpYyBuZXh0SW1hZ2UoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuaW1hZ2VMaXN0Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuaW1hZ2VMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgIHRoaXMuZGlzcGxheUltYWdlKHRoaXMuaW1hZ2VMaXN0W3RoaXMuY3VycmVudEluZGV4XSk7XG4gfVxuICBcbiAgcHVibGljIGFkZEltYWdlRGF0YShpbWFnZURhdGE6IGFueSkge1xuICAgIC8vaWYgKCF0aGlzLmltYWdlTGlzdC5maWx0ZXIoaW1nID0+IGltZy5pbWFnZUlkID09PSBpbWFnZURhdGEuaW1hZ2VJZCkubGVuZ3RoKSB7XG4gICAgICB0aGlzLmltYWdlTGlzdC5wdXNoKGltYWdlRGF0YSk7XG4gICAgICB0aGlzLmltYWdlSWRMaXN0LnB1c2goaW1hZ2VEYXRhLmltYWdlSWQpO1xuICAgICAgaWYgKHRoaXMuaW1hZ2VMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuZGlzcGxheUltYWdlKGltYWdlRGF0YSk7XG4gICAgICB9XG4gICAgLy99XG4gICAgXG4gICAgY29ybmVyc3RvbmUucmVzaXplKHRoaXMuZWxlbWVudCwgdHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgZGlzcGxheUltYWdlKGltYWdlKSB7XG4gICAgY29uc3Qgdmlld3BvcnQgPSBjb3JuZXJzdG9uZS5nZXREZWZhdWx0Vmlld3BvcnRGb3JJbWFnZSh0aGlzLmVsZW1lbnQsIGltYWdlKTtcbiAgICBjb3JuZXJzdG9uZS5kaXNwbGF5SW1hZ2UodGhpcy5lbGVtZW50LCBpbWFnZSwgdmlld3BvcnQpO1xuICAgIHRoaXMuY3VycmVudEltYWdlID0gaW1hZ2U7XG4gICAgLy8gRml0IHRoZSBpbWFnZSB0byB0aGUgdmlld3BvcnQgd2luZG93XG4gICAgY29ybmVyc3RvbmUuZml0VG9XaW5kb3codGhpcy5lbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZS5yZXNpemUodGhpcy5lbGVtZW50LCB0cnVlKTtcblxuICAgIC8vIGdldCBpbWFnZSBpbmZvIHRvIGRpc3BsYXkgaW4gb3ZlcmxheXNcbiAgICB0aGlzLnBhdGllbnROYW1lID0gaW1hZ2UuZGF0YS5zdHJpbmcoJ3gwMDEwMDAxMCcpLnJlcGxhY2UoL1xcXi9nLCcnKTtcbiAgICB0aGlzLmhvc3BpdGFsID0gaW1hZ2UuZGF0YS5zdHJpbmcoJ3gwMDA4MDA4MCcpO1xuICAgIHRoaXMuaW5zdGFuY2VOdW1iZXIgPSBpbWFnZS5kYXRhLmludFN0cmluZygneDAwMjAwMDExJykgKyAnLycgKyBpbWFnZS5kYXRhLmludFN0cmluZygneDAwMjAwMDEzJyk7XG5cbiAgICAvLyBBY3RpdmF0ZSBtb3VzZSBjbGlja3MsIG1vdXNlIHdoZWVsIGFuZCB0b3VjaFxuICAgIGNvcm5lcnN0b25lVG9vbHMubW91c2VJbnB1dC5lbmFibGUodGhpcy5lbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLm1vdXNlV2hlZWxJbnB1dC5lbmFibGUodGhpcy5lbGVtZW50KTtcbiAgICAvL2Nvcm5lcnN0b25lVG9vbHMudG91Y2hJbnB1dC5lbmFibGUodGhpcy5lbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLmtleWJvYXJkSW5wdXQuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG5cbiAgICAvLyBFbmFibGUgYWxsIHRvb2xzIHdlIHdhbnQgdG8gdXNlIHdpdGggdGhpcyBlbGVtZW50XG4gICAgY29ybmVyc3RvbmVUb29scy53d3djLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7IC8vIHd3L3djIGlzIHRoZSBkZWZhdWx0IHRvb2wgZm9yIGxlZnQgbW91c2UgYnV0dG9uXG4gICAgY29ybmVyc3RvbmVUb29scy5wYW4uYWN0aXZhdGUodGhpcy5lbGVtZW50LCAyKTsgLy8gcGFuIGlzIHRoZSBkZWZhdWx0IHRvb2wgZm9yIG1pZGRsZSBtb3VzZSBidXR0b25cbiAgICBjb3JuZXJzdG9uZVRvb2xzLnpvb20uYWN0aXZhdGUodGhpcy5lbGVtZW50LCA0KTsgLy8gem9vbSBpcyB0aGUgZGVmYXVsdCB0b29sIGZvciByaWdodCBtb3VzZSBidXR0b25cbiAgICBjb3JuZXJzdG9uZVRvb2xzLnByb2JlLmVuYWJsZSh0aGlzLmVsZW1lbnQpO1xuICAgIGNvcm5lcnN0b25lVG9vbHMubGVuZ3RoLmVuYWJsZSh0aGlzLmVsZW1lbnQpO1xuICAgIGNvcm5lcnN0b25lVG9vbHMuYW5nbGUuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgY29ybmVyc3RvbmVUb29scy5zaW1wbGVBbmdsZS5lbmFibGUodGhpcy5lbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLmVsbGlwdGljYWxSb2kuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgY29ybmVyc3RvbmVUb29scy5yZWN0YW5nbGVSb2kuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgY29ybmVyc3RvbmVUb29scy53d3djVG91Y2hEcmFnLmFjdGl2YXRlKHRoaXMuZWxlbWVudCkgLy8gLSBEcmFnXG4gICAgY29ybmVyc3RvbmVUb29scy56b29tVG91Y2hQaW5jaC5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQpIC8vIC0gUGluY2hcbiAgICBjb3JuZXJzdG9uZVRvb2xzLnBhbk11bHRpVG91Y2guYWN0aXZhdGUodGhpcy5lbGVtZW50KSAvLyAtIE11bHRpICh4MilcblxuICAgIC8vIFN0YWNrIHRvb2xzXG5cbiAgICAvLyBEZWZpbmUgdGhlIFN0YWNrIG9iamVjdFxuICAgIGNvbnN0IHN0YWNrID0ge1xuICAgICAgY3VycmVudEltYWdlSWRJbmRleDogdGhpcy5jdXJyZW50SW5kZXgsXG4gICAgICBpbWFnZUlkczogdGhpcy5pbWFnZUlkTGlzdFxuICAgIH07XG5cbiAgICBjb3JuZXJzdG9uZVRvb2xzLmFkZFN0YWNrU3RhdGVNYW5hZ2VyKHRoaXMuZWxlbWVudCwgWydwbGF5Q2xpcCddKTtcbiAgICAvLyBBZGQgdGhlIHN0YWNrIHRvb2wgc3RhdGUgdG8gdGhlIGVuYWJsZWQgZWxlbWVudFxuICAgIGNvcm5lcnN0b25lVG9vbHMuYWRkU3RhY2tTdGF0ZU1hbmFnZXIodGhpcy5lbGVtZW50LCBbJ3N0YWNrJ10pO1xuICAgIGNvcm5lcnN0b25lVG9vbHMuYWRkVG9vbFN0YXRlKHRoaXMuZWxlbWVudCwgJ3N0YWNrJywgc3RhY2spO1xuICAgIGNvcm5lcnN0b25lVG9vbHMuc3RhY2tTY3JvbGxXaGVlbC5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgIC8vIEVuYWJsZSBhbGwgdG9vbHMgd2Ugd2FudCB0byB1c2Ugd2l0aCB0aGlzIGVsZW1lbnRcbiAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsS2V5Ym9hcmQuYWN0aXZhdGUodGhpcy5lbGVtZW50KTtcbiAgICAvL2Nvcm5lcnN0b25lVG9vbHMuc3RhY2tQcmVmZXRjaC5lbmFibGUodGhpcy5lbGVtZW50KTtcblxuICB9XG5cblxuICAvLyBjb3JuZXJzdG9uZS5kaXNwbGF5SW1hZ2UodGhpcy5lbGVtZW50LCBpbWFnZSk7XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29ybmVyc3RvbmVEaXJlY3RpdmUgfSBmcm9tICcuL2Nvcm5lcnN0b25lLmRpcmVjdGl2ZSc7XG5cblxuXG5kZWNsYXJlIGNvbnN0IGNvcm5lcnN0b25lO1xuZGVjbGFyZSBjb25zdCBjb3JuZXJzdG9uZVRvb2xzO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RpY29tLXZpZXdlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RpY29tLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGljb20tdmlld2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBESUNPTVZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVZpZXdlclRvb2xzID0gZmFsc2U7IC8vIGVuYWJsZSB2aWV3ZXIgdG9vbHNcbiAgICBASW5wdXQoKSBwdWJsaWMgZG93bmxvYWRJbWFnZXNVUkwgPSAnJyAvLyBkb3dubG9hZCBpbWFnZXMgVVJMXG4gICAgQElucHV0KCkgcHVibGljIG1heEltYWdlc1RvTG9hZCA9IDIwOyAvLyBsaW1pdCBmb3IgdGhlIGF1dG9tYXRpYyBsb2FkaW5nIG9mIHN0dWR5IGltYWdlc1xuXG4gICAgcHVibGljIHNlcmllc0xpc3QgPSBbXTsgLy8gbGlzdCBvZiBzZXJpZXMgb24gdGhlIGltYWdlcyBiZWluZyBkaXNwbGF5ZWRcbiAgICBwdWJsaWMgY3VycmVudFNlcmllc0luZGV4ID0gMDtcbiAgICBwdWJsaWMgY3VycmVudFNlcmllczogYW55ID0ge307XG4gICAgcHVibGljIGltYWdlQ291bnQgPSAwOyAvLyB0b3RhbCBpbWFnZSBjb3VudCBiZWluZyB2aWV3ZWRcblxuICAgIC8vIGNvbnRyb2wgZW5hYmxlL2Rpc2FibGUgaW1hZ2Ugc2Nyb2xsIGJ1dHRvbnNcbiAgICBwdWJsaWMgZ2V0IGhpZGVQcmV2aW91c0ltYWdlKCk6IGFueSB7IHJldHVybiB7IGNvbG9yOiAodGhpcy52aWV3UG9ydC5jdXJyZW50SW5kZXggPCAxKSA/ICdibGFjaycgOiAnd2hpdGUnIH07IH1cbiAgICBwdWJsaWMgZ2V0IGhpZGVOZXh0SW1hZ2UoKTogYW55IHsgcmV0dXJuIHsgY29sb3I6ICh0aGlzLnZpZXdQb3J0LmN1cnJlbnRJbmRleCA+PSAodGhpcy5pbWFnZUNvdW50IC0gMSkpID8gJ2JsYWNrJyA6ICd3aGl0ZScgfTsgfVxuXG4gICAgLy8gY29udHJvbCBtZXNzYWdlIGZvciBtb3JlIGltYWdlcyB0byBsb2FkXG4gICAgcHVibGljIGdldCBtb3JlSW1hZ2VzdG9Mb2FkKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRlZEltYWdlcy5sZW5ndGggPCB0aGlzLmltYWdlSWRMaXN0Lmxlbmd0aCAmJiAhdGhpcy5sb2FkaW5nSW1hZ2VzKSB7IC8vIGFyZSB0aGVyZSBhbnkgbW9yZSBpbWFnZXMgdG8gbG9hZD9cbiAgICAgICAgICAgIGNvbnN0IGltYWdlc1RvTG9hZCA9ICh0aGlzLm1heEltYWdlc1RvTG9hZCA8PSAwKSA/ICh0aGlzLmltYWdlSWRMaXN0Lmxlbmd0aCAtIHRoaXMubG9hZGVkSW1hZ2VzLmxlbmd0aCkgOiBNYXRoLm1pbih0aGlzLm1heEltYWdlc1RvTG9hZCwgdGhpcy5pbWFnZUlkTGlzdC5sZW5ndGggLSB0aGlzLmxvYWRlZEltYWdlcy5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIGltYWdlc1RvTG9hZC50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8vIGNvbnRyb2wgZXhoaWJpdGlvbiBvZiBhIGxvYWRpbmcgaW1hZ2VzIHByb2dyZXNzIGluZGljYXRvclxuICAgIHB1YmxpYyBsb2FkaW5nSW1hZ2VzID0gZmFsc2U7XG4gICAgcHVibGljIGdldCBzaG93UHJvZ3Jlc3MoKTogYW55IHsgcmV0dXJuIHsgZGlzcGxheTogKHRoaXMubG9hZGluZ0ltYWdlcykgPyAnaW5saW5lLWJsb2NrJyA6ICdub25lJyB9IH07XG5cbiAgICBAVmlld0NoaWxkKENvcm5lcnN0b25lRGlyZWN0aXZlKSB2aWV3UG9ydDogQ29ybmVyc3RvbmVEaXJlY3RpdmU7IC8vIHRoZSBtYWluIGNvcm5lcnRvbmUgdmlldyBwb3J0XG5cbiAgICBwcml2YXRlIGxvYWRlZEltYWdlcyA9IFtdO1xuICAgIHByaXZhdGUgaW1hZ2VJZExpc3QgPSBbXTtcbiAgICBwcml2YXRlIGVsZW1lbnQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMudmlld1BvcnQuZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGRpY29tIGltYWdlcyBmb3IgZGlzcGxheVxuICAgICAqIFxuICAgICAqIEBwYXJhbSBpbWFnZUlkTGlzdCBsaXN0IG9mIGltYWdlSWRzIHRvIGxvYWQgYW5kIGRpc3BsYXlcbiAgICAgKi9cbiAgICBsb2FkU3R1ZHlJbWFnZXMoaW1hZ2VJZExpc3Q6IEFycmF5PGFueT4pIHtcbiAgICAgICAgdGhpcy5pbWFnZUlkTGlzdCA9IGltYWdlSWRMaXN0O1xuICAgICAgICB0aGlzLnZpZXdQb3J0LnJlc2V0SW1hZ2VDYWNoZSgpOyAvLyBjbGVhbiB1cCBpbWFnZSBjYWNoZVxuICAgICAgICB0aGlzLnNlcmllc0xpc3QgPSBbXTsgLy8gc3RhcnQgYSBuZXcgc2VyaWVzIGxpc3RcbiAgICAgICAgdGhpcy5jdXJyZW50U2VyaWVzSW5kZXggPSAwOyAvLyBhbHdheXMgZGlzcGxheSBmaXJzdCBzZXJpZXNcbiAgICAgICAgdGhpcy5sb2FkZWRJbWFnZXMgPSBbXTsgLy8gcmVzZXQgbGlzdCBvZiBpbWFnZXMgYWxyZWFkeSBsb2FkZWRcblxuICAgICAgICAvL1xuICAgICAgICAvLyBsb29wIHRocnUgYWxsIGltYWdlSWRzLCBsb2FkIGFuZCBjYWNoZSB0aGVtIGZvciBleGhpYml0aW9uICh1cCB0aGUgdGhlIG1heGltdW0gbGltaXQgZGVmaW5lZClcbiAgICAgICAgLy9cbiAgICAgICAgY29uc3QgbWF4SW1hZ2VzID0gKHRoaXMubWF4SW1hZ2VzVG9Mb2FkIDw9IDApID8gaW1hZ2VJZExpc3QubGVuZ3RoIDogTWF0aC5taW4odGhpcy5tYXhJbWFnZXNUb0xvYWQsIGltYWdlSWRMaXN0Lmxlbmd0aCk7XG4gICAgICAgIHRoaXMubG9hZGluZ0ltYWdlcyA9IHRydWU7IC8vIGFjdGl2YXRlIHByb2dyZXNzIGluZGljYXRvclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWF4SW1hZ2VzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZUlkID0gaW1hZ2VJZExpc3RbaW5kZXhdO1xuICAgICAgICAgICAgY29ybmVyc3RvbmUubG9hZEFuZENhY2hlSW1hZ2UoaW1hZ2VJZCkudGhlbihpbWFnZURhdGEgPT4geyB0aGlzLmltYWdlTG9hZGVkKGltYWdlRGF0YSwgaW5kZXgsIG1heEltYWdlcykgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIG5leHQgYmF0Y2ggb2YgaW1hZ2VzXG4gICAgICovXG4gICAgcHVibGljIGxvYWRNb3JlSW1hZ2VzKCkge1xuICAgICAgICAvL1xuICAgICAgICAvLyBsb29wIHRocnUgYWxsIGltYWdlSWRzLCBsb2FkIGFuZCBjYWNoZSB0aGVtIGZvciBleGhpYml0aW9uICh1cCB0aGUgdGhlIG1heGltdW0gbGltaXQgZGVmaW5lZClcbiAgICAgICAgLy9cbiAgICAgICAgY29uc3QgbWF4SW1hZ2VzID0gKHRoaXMubWF4SW1hZ2VzVG9Mb2FkIDw9IDApID8gKHRoaXMuaW1hZ2VJZExpc3QubGVuZ3RoIC0gdGhpcy5sb2FkZWRJbWFnZXMubGVuZ3RoKSA6IE1hdGgubWluKHRoaXMubWF4SW1hZ2VzVG9Mb2FkLCB0aGlzLmltYWdlSWRMaXN0Lmxlbmd0aCAtIHRoaXMubG9hZGVkSW1hZ2VzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMubG9hZGluZ0ltYWdlcyA9IHRydWU7IC8vIGFjdGl2YXRlIHByb2dyZXNzIGluZGljYXRvclxuICAgICAgICBsZXQgbmV4dEltYWdlSW5kZXggPSB0aGlzLmxvYWRlZEltYWdlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYXhJbWFnZXM7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlSWQgPSB0aGlzLmltYWdlSWRMaXN0W25leHRJbWFnZUluZGV4KytdO1xuICAgICAgICAgICAgY29ybmVyc3RvbmUubG9hZEFuZENhY2hlSW1hZ2UoaW1hZ2VJZCkudGhlbihpbWFnZURhdGEgPT4geyB0aGlzLmltYWdlTG9hZGVkKGltYWdlRGF0YSwgaW5kZXgsIG1heEltYWdlcykgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBpbWFnZURhdGEgdGhlIGRpY29tIGltYWdlIGRhdGFcbiAgICAgKiBAcGFyYW0gaW1hZ2VJbmRleCB0aGUgaW1hZ2UgaW5kZXggbG9hZGVzXG4gICAgICogQHBhcmFtIG1heEltYWdlcyBtYXggaW1hZ2VzIHRvIGxvYWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGltYWdlTG9hZGVkKGltYWdlRGF0YSwgaW1hZ2VJbmRleCwgbWF4SW1hZ2VzKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coaW1hZ2VEYXRhLmltYWdlSWQpXG4gICAgICAgIC8vIGJ1aWxkIGxpc3Qgb2Ygc2VyaWVzIGluIGFsbCBsb2FkZGVkIGltYWdlc1xuICAgICAgICBjb25zdCBzZXJpZXMgPSB7XG4gICAgICAgICAgICBzdHVkeUlEOiBpbWFnZURhdGEuZGF0YS5zdHJpbmcoJ3gwMDIwMDAwZCcpLFxuICAgICAgICAgICAgc2VyaWVzSUQ6IGltYWdlRGF0YS5kYXRhLnN0cmluZygneDAwMjAwMDBlJyksXG4gICAgICAgICAgICBzZXJpZXNOdW1iZXI6IGltYWdlRGF0YS5kYXRhLmludFN0cmluZygneDAwMjAwMDExJyksXG4gICAgICAgICAgICBzdHVkeURlc2NyaXB0aW9uOiBpbWFnZURhdGEuZGF0YS5zdHJpbmcoJ3gwMDA4MTAzMCcpLFxuICAgICAgICAgICAgc2VyaWVzRGVzY3JpcHRpb246IGltYWdlRGF0YS5kYXRhLnN0cmluZygneDAwMDgxMDNlJyksXG4gICAgICAgICAgICBpbWFnZUNvdW50OiAxLFxuICAgICAgICAgICAgaW1hZ2VMaXN0OiBbaW1hZ2VEYXRhXVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBuZXcgc2VyaWVzLCBhZGQgaXQgdG8gdGhlIGxpc3RcbiAgICAgICAgbGV0IHNlcmllc0luZGV4ID0gdGhpcy5zZXJpZXNMaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uc2VyaWVzSUQgPT09IHNlcmllcy5zZXJpZXNJRCk7XG4gICAgICAgIGlmIChzZXJpZXNJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHNlcmllc0luZGV4ID0gdGhpcy5zZXJpZXNMaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuc2VyaWVzTGlzdC5wdXNoKHNlcmllcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2VyaWVzSXRlbSA9IHRoaXMuc2VyaWVzTGlzdFtzZXJpZXNJbmRleF07XG4gICAgICAgICAgICBzZXJpZXNJdGVtLmltYWdlQ291bnQrKztcbiAgICAgICAgICAgIHNlcmllc0l0ZW0uaW1hZ2VMaXN0LnB1c2goaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIHNlcmllc0l0ZW0uaW1hZ2VMaXN0LnNvcnQoKGEsYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLmRhdGEuaW50U3RyaW5nKCd4MDAyMDAwMTMnKSA+IGIuZGF0YS5pbnRTdHJpbmcoJ3gwMDIwMDAxMycpKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICBpZiAoYS5kYXRhLmludFN0cmluZygneDAwMjAwMDEzJykgPCBiLmRhdGEuaW50U3RyaW5nKCd4MDAyMDAwMTMnKSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5sb2FkZWRJbWFnZXMucHVzaChpbWFnZURhdGEpOyAvLyBzYXZlIHRvIGltYWdlcyBsb2FkZWRcbiAgICAgICAgXG4gICAgICAgIGlmICgoaW1hZ2VJbmRleCArIDEpID49IG1heEltYWdlcykgeyAvLyBkaWQgd2UgZmluaXNoIGxvYWRpbmcgaW1hZ2VzP1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW1hZ2VzID0gZmFsc2U7IC8vIGRlYWN0aXZhdGUgcHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VyaWVzSW5kZXggPT09IHRoaXMuY3VycmVudFNlcmllc0luZGV4KSB7XG4gICAgICAgICAgICAvL3RoaXMuY3VycmVudFNlcmllcyA9IHRoaXMuc2VyaWVzTGlzdFtzZXJpZXNJbmRleF07XG4gICAgICAgICAgICAvL3RoaXMuaW1hZ2VDb3VudCA9IHRoaXMuY3VycmVudFNlcmllcy5pbWFnZUNvdW50OyAvLyBnZXQgdG90YWwgaW1hZ2UgY291bnRcbiAgICAgICAgICAgIC8vdGhpcy52aWV3UG9ydC5hZGRJbWFnZURhdGEoaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Nlcmllcyh0aGlzLmN1cnJlbnRTZXJpZXNJbmRleClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1NlcmllcyhpbmRleCkge1xuICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VyaWVzSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VyaWVzID0gdGhpcy5zZXJpZXNMaXN0W2luZGV4XTtcbiAgICAgICAgdGhpcy5pbWFnZUNvdW50ID0gdGhpcy5jdXJyZW50U2VyaWVzLmltYWdlQ291bnQ7IC8vIGdldCB0b3RhbCBpbWFnZSBjb3VudFxuICAgICAgICB0aGlzLnZpZXdQb3J0LnJlc2V0SW1hZ2VDYWNoZSgpOyAvLyBjbGVhbiB1cCBpbWFnZSBjYWNoZVxuICAgICAgICB0aGlzLmxvYWRpbmdJbWFnZXMgPSB0cnVlOyAvLyBhY3RpdmF0ZSBwcm9ncmVzcyBpbmRpY2F0b3JcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRTZXJpZXMuaW1hZ2VMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSB0aGlzLmN1cnJlbnRTZXJpZXMuaW1hZ2VMaXN0W2ldO1xuICAgICAgICAgICAgdGhpcy52aWV3UG9ydC5hZGRJbWFnZURhdGEoaW1hZ2VEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmdJbWFnZXMgPSBmYWxzZTsgLy8gZGUtYWN0aXZhdGUgcHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVBcygpIHtcbiAgICAgICAgY29ybmVyc3RvbmVUb29scy5zYXZlQXModGhpcy5lbGVtZW50LCBcInRlc3RlLmpwZ1wiKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEltYWdlIHNjcm9sbCBtZXRob2RzXG4gICAgICovXG4gICAgcHVibGljIG5leHRJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlld1BvcnQuY3VycmVudEluZGV4IDwgdGhpcy5pbWFnZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdQb3J0Lm5leHRJbWFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHByZXZpb3VzSW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdQb3J0LmN1cnJlbnRJbmRleCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudmlld1BvcnQucHJldmlvdXNJbWFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kcyB0byBhY3RpdmF0ZS9kZWFjdGl2YXRlIHZpZXdlciB0b29sc1xuICAgICAqL1xuXG4gICAgLy8gZGVhY3RpdmF0ZSBhbGwgdG9vbHNcbiAgICBwdWJsaWMgcmVzZXRBbGxUb29scygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMud3d3Yy5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnBhbi5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnpvb20uZGVhY3RpdmF0ZSh0aGlzLmVsZW1lbnQsIDEpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5wcm9iZS5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLmxlbmd0aC5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnNpbXBsZUFuZ2xlLmRlYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuZWxsaXB0aWNhbFJvaS5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnJlY3RhbmdsZVJvaS5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsLmRlYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMud3d3Y1RvdWNoRHJhZy5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnpvb21Ub3VjaERyYWcuZGVhY3RpdmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5wYW5Ub3VjaERyYWcuZGVhY3RpdmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5zdGFja1Njcm9sbFRvdWNoRHJhZy5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnN0b3BDbGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhY3RpdmF0ZSB3aW5kb3dpbmdcbiAgICBwdWJsaWMgZW5hYmxlV2luZG93aW5nKCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEFsbFRvb2xzKCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnd3d2MuYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMud3d3Y1RvdWNoRHJhZy5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWN0aXZhdGUgem9vbVxuICAgIHB1YmxpYyBlbmFibGVab29tKCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEFsbFRvb2xzKCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnpvb20uYWN0aXZhdGUodGhpcy5lbGVtZW50LCA1KTsgLy8gNSBpcyByaWdodCBtb3VzZSBidXR0b24gYW5kIGxlZnQgbW91c2UgYnV0dG9uXG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnpvb21Ub3VjaERyYWcuYWN0aXZhdGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFjdGl2YXRlIHBhblxuICAgIHB1YmxpYyBlbmFibGVQYW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMucGFuLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMyk7IC8vIDMgaXMgbWlkZGxlIG1vdXNlIGJ1dHRvbiBhbmQgbGVmdCBtb3VzZSBidXR0b25cbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMucGFuVG91Y2hEcmFnLmFjdGl2YXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhY3RpdmF0ZSBpbWFnZSBzY3JvbGxcbiAgICBwdWJsaWMgZW5hYmxlU2Nyb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEFsbFRvb2xzKCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsVG91Y2hEcmFnLmFjdGl2YXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsS2V5Ym9hcmQuYWN0aXZhdGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFjdGl2YXRlIGxlbmd0aCBtZWFzdXJlbWVudFxuICAgIHB1YmxpYyBlbmFibGVMZW5ndGgoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMubGVuZ3RoLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhY3RpdmF0ZSBhbmdsZSBtZWFzdXJlbWVudFxuICAgIHB1YmxpYyBlbmFibGVBbmdsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBbGxUb29scygpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5zaW1wbGVBbmdsZS5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWN0aXZhdGUgcGl4ZWwgcHJvYmVcbiAgICBwdWJsaWMgZW5hYmxlUHJvYmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMucHJvYmUuYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFjdGl2YXRlIEVsbGlwdGljYWwgUk9JXG4gICAgcHVibGljIGVuYWJsZUVsbGlwdGljYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuZWxsaXB0aWNhbFJvaS5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWN0aXZhdGUgUmVjdGFuZ2xlIFJPSVxuICAgIHB1YmxpYyBlbmFibGVSZWN0YW5nbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMucmVjdGFuZ2xlUm9pLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQbGF5IENsaXBcbiAgICBwdWJsaWMgcGxheUNsaXAoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBsZXQgZnJhbWVSYXRlID0gMTA7XG4gICAgICAgICAgICBsZXQgc3RhY2tTdGF0ZSA9IGNvcm5lcnN0b25lVG9vbHMuZ2V0VG9vbFN0YXRlKHRoaXMuZWxlbWVudCwgJ3N0YWNrJyk7XG4gICAgICAgICAgICBpZiAoc3RhY2tTdGF0ZSkge1xuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZSA9IHN0YWNrU3RhdGUuZGF0YVswXS5mcmFtZVJhdGU7XG4gICAgICAgICAgICAgICAgLy8gUGxheSBhdCBhIGRlZmF1bHQgMTAgRlBTIGlmIHRoZSBmcmFtZXJhdGUgaXMgbm90IHNwZWNpZmllZFxuICAgICAgICAgICAgICAgIGlmIChmcmFtZVJhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZVJhdGUgPSAxMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnBsYXlDbGlwKHRoaXMuZWxlbWVudCwgZnJhbWVSYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0b3AgQ2xpcFxuICAgIHB1YmxpYyBzdG9wQ2xpcCgpIHtcbiAgICAgICAgY29ybmVyc3RvbmVUb29scy5zdG9wQ2xpcCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIGludmVydCBpbWFnZVxuICAgIHB1YmxpYyBpbnZlcnRJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGxldCB2aWV3cG9ydCA9IGNvcm5lcnN0b25lLmdldFZpZXdwb3J0KHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAvLyBUb2dnbGUgaW52ZXJ0XG4gICAgICAgICAgICBpZiAodmlld3BvcnQuaW52ZXJ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmlld3BvcnQuaW52ZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0LmludmVydCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3JuZXJzdG9uZS5zZXRWaWV3cG9ydCh0aGlzLmVsZW1lbnQsIHZpZXdwb3J0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlc2V0IGltYWdlXG4gICAgcHVibGljIHJlc2V0SW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBsZXQgdG9vbFN0YXRlTWFuYWdlciA9IGNvcm5lcnN0b25lVG9vbHMuZ2V0RWxlbWVudFRvb2xTdGF0ZU1hbmFnZXIodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIG9ubHkgd29ya3Mgb24gSW1hZ2VJZC1zcGVjaWZpYyB0b29sIHN0YXRlIG1hbmFnZXJzIChmb3Igbm93KVxuICAgICAgICAgICAgLy90b29sU3RhdGVNYW5hZ2VyLmNsZWFyKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLmNsZWFyVG9vbFN0YXRlKHRoaXMuZWxlbWVudCwgXCJsZW5ndGhcIik7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLmNsZWFyVG9vbFN0YXRlKHRoaXMuZWxlbWVudCwgXCJhbmdsZVwiKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuY2xlYXJUb29sU3RhdGUodGhpcy5lbGVtZW50LCBcInNpbXBsZUFuZ2xlXCIpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5jbGVhclRvb2xTdGF0ZSh0aGlzLmVsZW1lbnQsIFwicHJvYmVcIik7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLmNsZWFyVG9vbFN0YXRlKHRoaXMuZWxlbWVudCwgXCJlbGxpcHRpY2FsUm9pXCIpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5jbGVhclRvb2xTdGF0ZSh0aGlzLmVsZW1lbnQsIFwicmVjdGFuZ2xlUm9pXCIpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmUudXBkYXRlSW1hZ2UodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBbGxUb29scygpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5kZWNsYXJlIGNvbnN0IGNvcm5lcnN0b25lO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0aHVtYm5haWxdJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUaHVtYm5haWxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBpbWFnZURhdGE6IGFueTtcblxuICBwcml2YXRlIGVsZW1lbnQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuIC8vIFJldHJpZXZlIHRoZSBET00gZWxlbWVudCBpdHNlbGZcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgIFxuICAgIC8vIEVuYWJsZSB0aGUgZWxlbWVudCB3aXRoIENvcm5lcnN0b25lXG4gICAgY29ybmVyc3RvbmUuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgaWYgKHRoaXMuaW1hZ2VEYXRhICYmIHRoaXMuZWxlbWVudCkge1xuICAgICAgY29uc3Qgdmlld3BvcnQgPSBjb3JuZXJzdG9uZS5nZXREZWZhdWx0Vmlld3BvcnRGb3JJbWFnZSh0aGlzLmVsZW1lbnQsIHRoaXMuaW1hZ2VEYXRhKTtcbiAgICAgIGNvcm5lcnN0b25lLmRpc3BsYXlJbWFnZSh0aGlzLmVsZW1lbnQsIHRoaXMuaW1hZ2VEYXRhLCB2aWV3cG9ydCk7XG4gICAgICAvLyBGaXQgdGhlIGltYWdlIHRvIHRoZSB2aWV3cG9ydCB3aW5kb3dcbiAgICAgIGNvcm5lcnN0b25lLmZpdFRvV2luZG93KHRoaXMuZWxlbWVudCk7XG4gICAgICBjb3JuZXJzdG9uZS5yZXNpemUodGhpcy5lbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcblxuaW1wb3J0IHsgRElDT01WaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL2RpY29tLXZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29ybmVyc3RvbmVEaXJlY3RpdmUgfSBmcm9tICcuL2Nvcm5lcnN0b25lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUaHVtYm5haWxEaXJlY3RpdmUgfSBmcm9tICcuL3RodW1ibmFpbC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RJQ09NVmlld2VyQ29tcG9uZW50LCBDb3JuZXJzdG9uZURpcmVjdGl2ZSwgVGh1bWJuYWlsRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0RJQ09NVmlld2VyQ29tcG9uZW50LCBDb3JuZXJzdG9uZURpcmVjdGl2ZSwgVGh1bWJuYWlsRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBEaWNvbVZpZXdlck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFxQ0UsOEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFwQm5DLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNsQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUVqQixnQkFBVyxHQUFHLEVBQUUsQ0FBQzs7UUFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQzs7UUFDZCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztLQWUxQjtJQWJELHNCQUFXLGdEQUFjOzs7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

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

module.exports = ".choose_file{\n    padding:5px 10px;\n    background:#00ad2d;\n    border:1px solid #00ad2d;\n    position:relative;\n    color:#fff;\n    border-radius:2px;\n    text-align:center;\n    float:left;\n    cursor:pointer;\n    margin-left: 50px;\n  }\n  .hide_file {\n      position: absolute;\n      z-index: 1000;\n      opacity: 0;\n      cursor: pointer;\n      right: 0;\n      top: 0;\n      height: 100%;\n      font-size: 24px;\n      width: 100%;\n      \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7R0FDbkI7RUFDRDtNQUNJLG1CQUFtQjtNQUNuQixjQUFjO01BQ2QsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixTQUFTO01BQ1QsT0FBTztNQUNQLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsWUFBWTs7R0FFZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNob29zZV9maWxle1xuICAgIHBhZGRpbmc6NXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDojMDBhZDJkO1xuICAgIGJvcmRlcjoxcHggc29saWQgIzAwYWQyZDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBjb2xvcjojZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6MnB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cbiAgLmhpZGVfZmlsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100%; width: 100%;\">\n  <div style=\"display: flex; margin-left: 120px; align-items: center;\">\n    <h1>\n      A demo DICOM Viewer, based on <a href=\"https://github.com/cornerstonejs\">Cornerstone</a>\n    </h1>\n      \n    <div class=\"choose_file\">\n      Choose Your DICOM Files\n      <input class=\"hide_file\" type=\"file\" multiple accept=\"application/dicom\" id=\"imagens\" title=\"selecione arquivos de imagens\"\n      (change)=\"loadDICOMImages($event.target.files)\">\n    </div>\n\n      \n\n  </div>\n\n  <div style=\"display: flex;height: calc(100% - 90px); width:100%;\">\n    <dicom-viewer [enableViewerTools]=\"true\" [maxImagesToLoad]=\"20\" style=\"height:100%; width:100%; margin: 10px;\"></dicom-viewer>\n  </div>\n</div>"

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