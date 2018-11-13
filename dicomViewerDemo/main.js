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
        this.isCornerstoneEnabled = false;
    }
    Object.defineProperty(CornerstoneDirective.prototype, "windowingValue", {
        get: 
        // current image Instance #, to display on the overlay
        /**
         * @return {?}
         */
        function () {
            if (this.isCornerstoneEnabled) {
                /** @type {?} */
                var viewport = cornerstone.getViewport(this.element);
                if (this.currentImage && viewport) {
                    return Math.round(viewport.voi.windowWidth) + "/" + Math.round(viewport.voi.windowCenter);
                }
            }
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
            if (this.isCornerstoneEnabled) {
                /** @type {?} */
                var viewport = cornerstone.getViewport(this.element);
                if (this.currentImage && viewport) {
                    return viewport.scale.toFixed(2);
                }
            }
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
        if (this.isCornerstoneEnabled) {
            cornerstone.resize(this.element, true);
        }
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
        this.resetViewer();
    };
    //
    // reset the viewer, so only this current element is enabled
    //
    //
    // reset the viewer, so only this current element is enabled
    //
    /**
     * @return {?}
     */
    CornerstoneDirective.prototype.resetViewer = 
    //
    // reset the viewer, so only this current element is enabled
    //
    /**
     * @return {?}
     */
    function () {
        this.disableViewer();
        cornerstone.enable(this.element);
        this.isCornerstoneEnabled = true;
    };
    /**
     * @return {?}
     */
    CornerstoneDirective.prototype.disableViewer = /**
     * @return {?}
     */
    function () {
        this.element = this.elementRef.nativeElement;
        try {
            cornerstone.disable(this.element);
        }
        finally { }
        // Reset the element with Cornerstone
        /** @type {?} */
        var list = cornerstone.getEnabledElements();
        for (var index = 0; index < list.length; index++) {
            /** @type {?} */
            var element = list[index];
            cornerstone.disable(element);
        }
        this.isCornerstoneEnabled = false;
    };
    /**
     * @return {?}
     */
    CornerstoneDirective.prototype.resetImageCache = /**
     * @return {?}
     */
    function () {
        this.imageList = [];
        this.imageIdList = [];
        this.currentImage = null;
        this.currentIndex = 0;
        this.patientName = '';
        this.hospital = '';
        this.instanceNumber = '';
    };
    /**
     * @return {?}
     */
    CornerstoneDirective.prototype.previousImage = /**
     * @return {?}
     */
    function () {
        if (this.imageList.length > 0) {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            }
            this.displayImage(this.imageList[this.currentIndex]);
        }
    };
    /**
     * @return {?}
     */
    CornerstoneDirective.prototype.nextImage = /**
     * @return {?}
     */
    function () {
        if (this.imageList.length > 0) {
            this.currentIndex++;
            if (this.currentIndex >= this.imageList.length) {
                this.currentIndex = this.imageList.length - 1;
            }
            this.displayImage(this.imageList[this.currentIndex]);
        }
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
        this.element = this.elementRef.nativeElement;
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
        this.element = this.elementRef.nativeElement;
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
        this.targetImageCount = 0;
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
    DICOMViewerComponent.prototype.ngOnInit = /**
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
        this.element = this.viewPort.element;
        this.imageIdList = imageIdList;
        this.viewPort.resetViewer();
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
        this.targetImageCount = maxImages;
        for (var index = 0; index < maxImages; index++) {
            /** @type {?} */
            var imageId = imageIdList[index];
            cornerstone.loadAndCacheImage(imageId).then(function (imageData) { _this.imageLoaded(imageData); });
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
        this.element = this.viewPort.element;
        //
        // loop thru all imageIds, load and cache them for exhibition (up the the maximum limit defined)
        //
        /** @type {?} */
        var maxImages = (this.maxImagesToLoad <= 0) ? (this.imageIdList.length - this.loadedImages.length) : Math.min(this.maxImagesToLoad, this.imageIdList.length - this.loadedImages.length);
        this.loadingImages = true; // activate progress indicator
        this.targetImageCount += maxImages;
        /** @type {?} */
        var nextImageIndex = this.loadedImages.length;
        for (var index = 0; index < maxImages; index++) {
            /** @type {?} */
            var imageId = this.imageIdList[nextImageIndex++];
            cornerstone.loadAndCacheImage(imageId)
                .then(function (imageData) { _this.imageLoaded(imageData); })
                .catch(function (err) { _this.targetImageCount--; });
        }
    };
    /**
     *
     * @param imageData the dicom image data
     */
    /**
     *
     * @param {?} imageData the dicom image data
     * @return {?}
     */
    DICOMViewerComponent.prototype.imageLoaded = /**
     *
     * @param {?} imageData the dicom image data
     * @return {?}
     */
    function (imageData) {
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
            this.seriesList.sort(function (a, b) {
                if (a.seriesNumber > b.seriesNumber)
                    return 1;
                if (a.seriesNumber < b.seriesNumber)
                    return -1;
                return 0;
            });
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
        if (this.loadedImages.length >= this.targetImageCount) { // did we finish loading images?
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
        //        this.resetAllTools();
        this.currentSeriesIndex = index;
        this.currentSeries = this.seriesList[index];
        this.imageCount = this.currentSeries.imageCount; // get total image count
        this.viewPort.resetImageCache(); // clean up image cache
        //        this.loadingImages = true; // activate progress indicator
        for (var i = 0; i < this.currentSeries.imageList.length; i++) {
            /** @type {?} */
            var imageData = this.currentSeries.imageList[i];
            this.viewPort.addImageData(imageData);
        }
        //        this.loadingImages = false; // de-activate progress indicator
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
    /**
     * @return {?}
     */
    DICOMViewerComponent.prototype.clearImage = /**
     * @return {?}
     */
    function () {
        this.viewPort.resetViewer();
        this.viewPort.resetImageCache();
        this.seriesList = []; // list of series on the images being displayed
        this.currentSeriesIndex = 0;
        this.currentSeries = {};
        this.imageCount = 0; // total image count being viewed
    };
    DICOMViewerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'dicom-viewer',
                    template: "<div style=\"display: flex; width:100%; height: 100%;\">\n    <div class=\"thumbnailSelector\" *ngIf=\"seriesList.length > 1\" style=\"margin-right: 5px;\">\n        <div class=\"thumbnails list-group\" style=\"height: 100%;\">\n            <a *ngFor=\"let series of seriesList; let i=index\" [ngClass]=\"{'active': currentSeriesIndex === i}\" class=\"list-group-item\"\n                oncontextmenu=\"return false\" unselectable=\"on\" onselectstart=\"return false;\" onmousedown=\"return false;\"\n                (click)=\"showSeries(i)\">\n                <div thumbnail [imageData]=\"series.imageList[0]\" class=\"csthumbnail\" oncontextmenu=\"return false\"\n                    unselectable=\"on\" onselectstart=\"return false;\" onmousedown=\"return false;\">\n                </div>\n                <div class=\"text-center small\" style=\"color:white;\">{{series.seriesDescription}}</div>\n                <div id=\"mrtopright\" style=\"position: absolute;top:3px; right:3px\">\n                    <div id=\"imageCount\" style=\"color:red; font-size: 10pt\">{{series.imageCount}}</div>\n                </div>\n            </a>\n            <div class=\"version\">\n                <h6 style=\"color:white;\"><small>0.1.12</small></h6>\n            </div>\n        </div>\n    </div>\n\n    <!--container where image will be loaded-->\n    <div style=\"overflow: hidden; width: 100%; height: 100%; background-color: #424242;\">\n\n        <!-- Toolbar -->\n        <div>\n            <div class=\"btn-group\">\n                <div class=\"btn-group\" *ngIf=\"enableViewerTools\">\n\n                    <!-- WW/WL -->\n                    <button type=\"button\" (click)=\"enableWindowing()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Windowing\"><span class=\"fa fa-sun\"></span></button>\n                    <!-- Invert -->\n                    <button type=\"button\" (click)=\"invertImage()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Invert\"><span class=\"fa fa-adjust\"></span></button>\n                    <!-- Zoom -->\n                    <button type=\"  button\" (click)=\"enableZoom()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Zoom\"><span class=\"fa fa-search\"></span></button>\n                    <!-- Pan -->\n                    <button type=\"button\" (click)=\"enablePan()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Pan\"><span class=\"fa fa-arrows-alt\"></span></button>\n                    <!-- Stack scroll -->\n                    <button type=\"button\" (click)=\"enableScroll()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Scroll\"><span class=\"fa fa-bars\"></span></button>\n                    <!-- Length measurement -->\n                    <button type=\"button\" (click)=\"enableLength()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Length\"><span class=\"fa fa-arrows-alt-v\"></span></button>\n                    <!-- Angle measurement -->\n                    <button type=\"button\" (click)=\"enableAngle()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Angle\"><span class=\"fa fa-angle-left\"></span></button>\n                    <!-- Pixel probe -->\n                    <button type=\"button\" (click)=\"enableProbe()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Pixel Probe\"><span class=\"fa fa-dot-circle\"></span></button>\n                    <!-- Elliptical ROI -->\n                    <button type=\"button\" (click)=\"enableElliptical()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Elliptical ROI\"><span class=\"fa fa-circle\"></span></button>\n                    <!-- Rectangle ROI -->\n                    <button type=\"button\" (click)=\"enableRectangle()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Rectangle ROI\"><span class=\"fa fa-square\"></span></button>\n                    <!-- Reset Image -->\n                    <button type=\"button\" (click)=\"resetImage()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Reset Image\"><span class=\"fa fa-window-restore\"></span></button>\n                </div>\n                <div class=\"btn-group\">\n                    <!-- Play clip -->\n                    <button type=\"button\" (click)=\"playClip()\" style=\"border-left: 1px dotted white;\" class=\"btn btn-sm btn-default\"\n                        data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Play Clip\"><span\n                            class=\"fa fa-play\"></span></button>\n                    <!-- Stop clip -->\n                    <button type=\"button\" (click)=\"stopClip()\" class=\"btn btn-sm btn-default\" data-container='body'\n                        data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Stop Clip\"><span class=\"fa fa-stop\"></span></button>\n\n                    <!-- Layout -->\n                    <!--                 <button type=\"button\" style=\"border-left: 1px dotted white;\" [matMenuTriggerFor]=\"menu\" class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"dropdown\" aria-expanded=\"false\" data-placement=\"top\" title=\"Layout\"><span class=\"fa fa-th-large\"></span></button>\n                  <mat-menu #menu=\"matMenu\">\n                          <a mat-menu-item class=\"dropdown-item\" >1x1</a>\n                          <a mat-menu-item class=\"dropdown-item\" >2x1</a>\n                          <a mat-menu-item class=\"dropdown-item\" >1x2</a>\n                          <a mat-menu-item class=\"dropdown-item\" >2x2</a>\n\n                  </mat-menu> -->\n\n                    <!-- Download -->\n                    <a *ngIf=\"downloadImagesURL != ''\" [href]=\"downloadImagesURL\" download style=\"border-left: 1px dotted white;\"\n                        class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\"\n                        title=\"Download Imagens\">\n                        <span class=\"fa fa-download\"></span>\n                    </a>\n\n                    <!-- Imagem Anterior -->\n                    <button type=\"button\" (click)=\"previousImage()\" [ngStyle]=\"hidePreviousImage\" style=\"border-left: 1px dotted white;\"\n                        class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\"\n                        title=\"Imagem Anterior\"><span class=\"fa fa-backward\"></span></button>\n                    <!-- Pr\u00F3xima Imagem -->\n                    <button type=\"button\" (click)=\"nextImage()\" [ngStyle]=\"hideNextImage\" class=\"btn btn-sm btn-default\"\n                        data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Pr\u00F3xima Imagem\"><span\n                            class=\"fa fa-forward\"></span></button>\n\n                    <!-- Load Next Batch -->\n                    <a *ngIf=\"moreImagestoLoad != ''\" (click)=\"loadMoreImages()\" style=\"border-left: 1px dotted white;color: white;\"\n                        class=\"btn btn-sm btn-default\" data-container='body' data-toggle=\"tooltip\" data-placement=\"bottom\"\n                        title=\"Carrega mais imagens...\">\n                        pr\u00F3ximas {{moreImagestoLoad}} imagens\n                    </a>\n\n                    <!-- Progress Spinner -->\n                    <div style=\"padding-left: 15px; padding-top: 15px;\" [ngStyle]=\"showProgress\">\n                        <mat-spinner style=\"display: inline-block;\" diameter=\"30\" strokeWidth=\"5\" color=\"warn\"></mat-spinner>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n        <div style=\"width: 100%; height: calc(100% - 60px);position:relative;display:inline-block;color:white;\"\n            oncontextmenu=\"return false\" class='cornerstone-enabled-image' unselectable='on' onselectstart='return false;'\n            onmousedown='return false;'>\n            <div cornerstone style=\"width: 100%; height: 100%;top:0px;left:0px;position:absolute;outline:none;margin: 0 auto;\"\n                id=\"dicomImage\">\n            </div>\n            <div id=\"mrtopleft\" style=\"position: absolute;top:3px; left:3px\">\n                {{viewPort.patientName}}\n            </div>\n            <div id=\"mrtopright\" style=\"position: absolute;top:3px; right:3px\">\n                {{viewPort.hospital}}\n            </div>\n            <div id=\"mrbottomleft\" style=\"position: absolute;bottom:3px; left:3px\">\n                <div>\n                    {{viewPort.instanceNumber}}\n                </div>\n                <div>\n                    WW/WC: {{viewPort.windowingValue}}\n                </div>\n            </div>\n            <div id=\"mrbottomcenter\" style=\"position: absolute;bottom:3px; width: 100%;text-align: center; color:red\">\n                SOMENTE PARA VISUALIZA\u00C7\u00C3O, N\u00C3O PODE SER USADO PARA DIAGN\u00D3STICO.\n            </div>\n            <div id=\"mrbottomright\" style=\"position: absolute;bottom:6px; right:3px\">\n                <div id=\"zoomText\">Zoom: {{viewPort.zoomValue}}</div>\n                <div id=\"sliceText\">Image: {{(imageCount > 0)?viewPort.currentIndex+1:0}}/{{imageCount}}</div>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n",
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGljb212aWV3ZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWRpY29tdmlld2VyL2xpYi9jb3JuZXJzdG9uZS5kaXJlY3RpdmUudHMiLCJuZzovL25nLWRpY29tdmlld2VyL2xpYi9kaWNvbS12aWV3ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1kaWNvbXZpZXdlci9saWIvdGh1bWJuYWlsLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmctZGljb212aWV3ZXIvbGliL2RpY29tLXZpZXdlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmRlY2xhcmUgY29uc3QgY29ybmVyc3RvbmU7XG5kZWNsYXJlIGNvbnN0IGNvcm5lcnN0b25lVG9vbHM7XG5cblxuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb3JuZXJzdG9uZV0nLFxufSlcblxuZXhwb3J0IGNsYXNzIENvcm5lcnN0b25lRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgZWxlbWVudDogYW55O1xuXG4gIHB1YmxpYyBpbWFnZUxpc3QgPSBbXTtcbiAgcHJpdmF0ZSBpbWFnZUlkTGlzdCA9IFtdO1xuICBwdWJsaWMgY3VycmVudEluZGV4ID0gMDtcbiAgcHVibGljIGN1cnJlbnRJbWFnZTphbnk7XG4gIHB1YmxpYyBwYXRpZW50TmFtZSA9ICcnOyAvLyBjdXJyZW50IGltYWdlIFBhdGllbnQgbmFtZSwgZG8gZGlzcGxheSBvbiB0aGUgb3ZlcmxheVxuICBwdWJsaWMgaG9zcGl0YWwgPSAnJzsgLy8gY3VycmVudCBpbWFnZSBJbnN0aXR1dGlvbiBuYW1lLCB0byBkaXNwbGF5IG9uIHRoZSBvdmVybGF5XG4gIHB1YmxpYyBpbnN0YW5jZU51bWJlciA9ICcnOyAvLyBjdXJyZW50IGltYWdlIEluc3RhbmNlICMsIHRvIGRpc3BsYXkgb24gdGhlIG92ZXJsYXlcblxuICBwdWJsaWMgZ2V0IHdpbmRvd2luZ1ZhbHVlKCk6c3RyaW5nIHtcbiAgICBpZiAodGhpcy5pc0Nvcm5lcnN0b25lRW5hYmxlZCkge1xuICAgICAgbGV0IHZpZXdwb3J0ID0gY29ybmVyc3RvbmUuZ2V0Vmlld3BvcnQodGhpcy5lbGVtZW50KTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZSAmJiB2aWV3cG9ydCkge3JldHVybiBNYXRoLnJvdW5kKHZpZXdwb3J0LnZvaS53aW5kb3dXaWR0aCkgKyBcIi9cIiArIE1hdGgucm91bmQodmlld3BvcnQudm9pLndpbmRvd0NlbnRlcik7fVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHpvb21WYWx1ZSgpOnN0cmluZyB7XG4gICAgaWYgKHRoaXMuaXNDb3JuZXJzdG9uZUVuYWJsZWQpIHtcbiAgICAgIGxldCB2aWV3cG9ydCA9IGNvcm5lcnN0b25lLmdldFZpZXdwb3J0KHRoaXMuZWxlbWVudCk7XG4gICAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2UgJiYgdmlld3BvcnQpIHtyZXR1cm4gdmlld3BvcnQuc2NhbGUudG9GaXhlZCgyKTt9XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHByaXZhdGUgaXNDb3JuZXJzdG9uZUVuYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIGlmICh0aGlzLmlzQ29ybmVyc3RvbmVFbmFibGVkKSAge1xuICAgICAgY29ybmVyc3RvbmUucmVzaXplKHRoaXMuZWxlbWVudCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy9ASG9zdExpc3RlbmVyKCdtb3VzZXdoZWVsJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZVdoZWVsKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLmltYWdlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCAoZXZlbnQud2hlZWxEZWx0YSB8fCAtZXZlbnQuZGV0YWlsKSkpO1xuICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xuXG5cbiAgICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuaW1hZ2VMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5pbWFnZUxpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgdGhpcy5kaXNwbGF5SW1hZ2UodGhpcy5pbWFnZUxpc3RbdGhpcy5jdXJyZW50SW5kZXhdKTtcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLy8gUmV0cmlldmUgdGhlIERPTSBlbGVtZW50IGl0c2VsZlxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgLy8gRW5hYmxlIHRoZSBlbGVtZW50IHdpdGggQ29ybmVyc3RvbmVcbiAgICB0aGlzLnJlc2V0Vmlld2VyKCk7XG5cbiAgfVxuXG4gIC8vXG4gIC8vIHJlc2V0IHRoZSB2aWV3ZXIsIHNvIG9ubHkgdGhpcyBjdXJyZW50IGVsZW1lbnQgaXMgZW5hYmxlZFxuICAvL1xuICBwdWJsaWMgcmVzZXRWaWV3ZXIoKSB7XG4gICAgdGhpcy5kaXNhYmxlVmlld2VyKCk7XG4gICAgY29ybmVyc3RvbmUuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5pc0Nvcm5lcnN0b25lRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZGlzYWJsZVZpZXdlcigpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0cnkge1xuICAgICAgY29ybmVyc3RvbmUuZGlzYWJsZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgfSBmaW5hbGx5IHt9XG5cbiAgICAvLyBSZXNldCB0aGUgZWxlbWVudCB3aXRoIENvcm5lcnN0b25lXG4gICAgY29uc3QgbGlzdDpBcnJheTxhbnk+ID0gY29ybmVyc3RvbmUuZ2V0RW5hYmxlZEVsZW1lbnRzKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gbGlzdFtpbmRleF07XG4gICAgICBjb3JuZXJzdG9uZS5kaXNhYmxlKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuaXNDb3JuZXJzdG9uZUVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldEltYWdlQ2FjaGUoKSB7XG4gICAgdGhpcy5pbWFnZUxpc3QgPSBbXTtcbiAgICB0aGlzLmltYWdlSWRMaXN0ID0gW107XG4gICAgdGhpcy5jdXJyZW50SW1hZ2UgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICB0aGlzLnBhdGllbnROYW1lID0gJyc7XG4gICAgdGhpcy5ob3NwaXRhbCA9ICcnO1xuICAgIHRoaXMuaW5zdGFuY2VOdW1iZXIgPSAnJztcbiAgfVxuXG4gIHB1YmxpYyBwcmV2aW91c0ltYWdlKCkge1xuICAgIGlmICh0aGlzLmltYWdlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICB9XG4gICAgdGhpcy5kaXNwbGF5SW1hZ2UodGhpcy5pbWFnZUxpc3RbdGhpcy5jdXJyZW50SW5kZXhdKTtcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyBuZXh0SW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2VMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5pbWFnZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5pbWFnZUxpc3QubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgdGhpcy5kaXNwbGF5SW1hZ2UodGhpcy5pbWFnZUxpc3RbdGhpcy5jdXJyZW50SW5kZXhdKTtcbiAgICB9XG4gfVxuXG4gIHB1YmxpYyBhZGRJbWFnZURhdGEoaW1hZ2VEYXRhOiBhbnkpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAvL2lmICghdGhpcy5pbWFnZUxpc3QuZmlsdGVyKGltZyA9PiBpbWcuaW1hZ2VJZCA9PT0gaW1hZ2VEYXRhLmltYWdlSWQpLmxlbmd0aCkge1xuICAgICAgdGhpcy5pbWFnZUxpc3QucHVzaChpbWFnZURhdGEpO1xuICAgICAgdGhpcy5pbWFnZUlkTGlzdC5wdXNoKGltYWdlRGF0YS5pbWFnZUlkKTtcbiAgICAgIGlmICh0aGlzLmltYWdlTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB0aGlzLmRpc3BsYXlJbWFnZShpbWFnZURhdGEpO1xuICAgICAgfVxuICAgIC8vfVxuXG4gICAgY29ybmVyc3RvbmUucmVzaXplKHRoaXMuZWxlbWVudCwgdHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgZGlzcGxheUltYWdlKGltYWdlKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgdmlld3BvcnQgPSBjb3JuZXJzdG9uZS5nZXREZWZhdWx0Vmlld3BvcnRGb3JJbWFnZSh0aGlzLmVsZW1lbnQsIGltYWdlKTtcbiAgICBjb3JuZXJzdG9uZS5kaXNwbGF5SW1hZ2UodGhpcy5lbGVtZW50LCBpbWFnZSwgdmlld3BvcnQpO1xuICAgIHRoaXMuY3VycmVudEltYWdlID0gaW1hZ2U7XG4gICAgLy8gRml0IHRoZSBpbWFnZSB0byB0aGUgdmlld3BvcnQgd2luZG93XG4gICAgY29ybmVyc3RvbmUuZml0VG9XaW5kb3codGhpcy5lbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZS5yZXNpemUodGhpcy5lbGVtZW50LCB0cnVlKTtcblxuICAgIC8vIGdldCBpbWFnZSBpbmZvIHRvIGRpc3BsYXkgaW4gb3ZlcmxheXNcbiAgICB0aGlzLnBhdGllbnROYW1lID0gaW1hZ2UuZGF0YS5zdHJpbmcoJ3gwMDEwMDAxMCcpLnJlcGxhY2UoL1xcXi9nLCcnKTtcbiAgICB0aGlzLmhvc3BpdGFsID0gaW1hZ2UuZGF0YS5zdHJpbmcoJ3gwMDA4MDA4MCcpO1xuICAgIHRoaXMuaW5zdGFuY2VOdW1iZXIgPSBpbWFnZS5kYXRhLmludFN0cmluZygneDAwMjAwMDExJykgKyAnLycgKyBpbWFnZS5kYXRhLmludFN0cmluZygneDAwMjAwMDEzJyk7XG5cbiAgICAvLyBBY3RpdmF0ZSBtb3VzZSBjbGlja3MsIG1vdXNlIHdoZWVsIGFuZCB0b3VjaFxuICAgIGNvcm5lcnN0b25lVG9vbHMubW91c2VJbnB1dC5lbmFibGUodGhpcy5lbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLm1vdXNlV2hlZWxJbnB1dC5lbmFibGUodGhpcy5lbGVtZW50KTtcbiAgICAvL2Nvcm5lcnN0b25lVG9vbHMudG91Y2hJbnB1dC5lbmFibGUodGhpcy5lbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLmtleWJvYXJkSW5wdXQuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG5cbiAgICAvLyBFbmFibGUgYWxsIHRvb2xzIHdlIHdhbnQgdG8gdXNlIHdpdGggdGhpcyBlbGVtZW50XG4gICAgY29ybmVyc3RvbmVUb29scy53d3djLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7IC8vIHd3L3djIGlzIHRoZSBkZWZhdWx0IHRvb2wgZm9yIGxlZnQgbW91c2UgYnV0dG9uXG4gICAgY29ybmVyc3RvbmVUb29scy5wYW4uYWN0aXZhdGUodGhpcy5lbGVtZW50LCAyKTsgLy8gcGFuIGlzIHRoZSBkZWZhdWx0IHRvb2wgZm9yIG1pZGRsZSBtb3VzZSBidXR0b25cbiAgICBjb3JuZXJzdG9uZVRvb2xzLnpvb20uYWN0aXZhdGUodGhpcy5lbGVtZW50LCA0KTsgLy8gem9vbSBpcyB0aGUgZGVmYXVsdCB0b29sIGZvciByaWdodCBtb3VzZSBidXR0b25cbiAgICBjb3JuZXJzdG9uZVRvb2xzLnByb2JlLmVuYWJsZSh0aGlzLmVsZW1lbnQpO1xuICAgIGNvcm5lcnN0b25lVG9vbHMubGVuZ3RoLmVuYWJsZSh0aGlzLmVsZW1lbnQpO1xuICAgIGNvcm5lcnN0b25lVG9vbHMuYW5nbGUuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgY29ybmVyc3RvbmVUb29scy5zaW1wbGVBbmdsZS5lbmFibGUodGhpcy5lbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLmVsbGlwdGljYWxSb2kuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgY29ybmVyc3RvbmVUb29scy5yZWN0YW5nbGVSb2kuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgY29ybmVyc3RvbmVUb29scy53d3djVG91Y2hEcmFnLmFjdGl2YXRlKHRoaXMuZWxlbWVudCkgLy8gLSBEcmFnXG4gICAgY29ybmVyc3RvbmVUb29scy56b29tVG91Y2hQaW5jaC5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQpIC8vIC0gUGluY2hcbiAgICBjb3JuZXJzdG9uZVRvb2xzLnBhbk11bHRpVG91Y2guYWN0aXZhdGUodGhpcy5lbGVtZW50KSAvLyAtIE11bHRpICh4MilcblxuICAgIC8vIFN0YWNrIHRvb2xzXG5cbiAgICAvLyBEZWZpbmUgdGhlIFN0YWNrIG9iamVjdFxuICAgIGNvbnN0IHN0YWNrID0ge1xuICAgICAgY3VycmVudEltYWdlSWRJbmRleDogdGhpcy5jdXJyZW50SW5kZXgsXG4gICAgICBpbWFnZUlkczogdGhpcy5pbWFnZUlkTGlzdFxuICAgIH07XG5cbiAgICBjb3JuZXJzdG9uZVRvb2xzLmFkZFN0YWNrU3RhdGVNYW5hZ2VyKHRoaXMuZWxlbWVudCwgWydwbGF5Q2xpcCddKTtcbiAgICAvLyBBZGQgdGhlIHN0YWNrIHRvb2wgc3RhdGUgdG8gdGhlIGVuYWJsZWQgZWxlbWVudFxuICAgIGNvcm5lcnN0b25lVG9vbHMuYWRkU3RhY2tTdGF0ZU1hbmFnZXIodGhpcy5lbGVtZW50LCBbJ3N0YWNrJ10pO1xuICAgIGNvcm5lcnN0b25lVG9vbHMuYWRkVG9vbFN0YXRlKHRoaXMuZWxlbWVudCwgJ3N0YWNrJywgc3RhY2spO1xuICAgIGNvcm5lcnN0b25lVG9vbHMuc3RhY2tTY3JvbGxXaGVlbC5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgIC8vIEVuYWJsZSBhbGwgdG9vbHMgd2Ugd2FudCB0byB1c2Ugd2l0aCB0aGlzIGVsZW1lbnRcbiAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsS2V5Ym9hcmQuYWN0aXZhdGUodGhpcy5lbGVtZW50KTtcbiAgICAvL2Nvcm5lcnN0b25lVG9vbHMuc3RhY2tQcmVmZXRjaC5lbmFibGUodGhpcy5lbGVtZW50KTtcblxuICB9XG5cblxuICAvLyBjb3JuZXJzdG9uZS5kaXNwbGF5SW1hZ2UodGhpcy5lbGVtZW50LCBpbWFnZSk7XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JuZXJzdG9uZURpcmVjdGl2ZSB9IGZyb20gJy4vY29ybmVyc3RvbmUuZGlyZWN0aXZlJztcblxuXG5cbmRlY2xhcmUgY29uc3QgY29ybmVyc3RvbmU7XG5kZWNsYXJlIGNvbnN0IGNvcm5lcnN0b25lVG9vbHM7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZGljb20tdmlld2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGljb20tdmlld2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kaWNvbS12aWV3ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERJQ09NVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVWaWV3ZXJUb29scyA9IGZhbHNlOyAvLyBlbmFibGUgdmlld2VyIHRvb2xzXG4gICAgQElucHV0KCkgcHVibGljIGRvd25sb2FkSW1hZ2VzVVJMID0gJycgLy8gZG93bmxvYWQgaW1hZ2VzIFVSTFxuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXhJbWFnZXNUb0xvYWQgPSAyMDsgLy8gbGltaXQgZm9yIHRoZSBhdXRvbWF0aWMgbG9hZGluZyBvZiBzdHVkeSBpbWFnZXNcblxuICAgIHB1YmxpYyBzZXJpZXNMaXN0ID0gW107IC8vIGxpc3Qgb2Ygc2VyaWVzIG9uIHRoZSBpbWFnZXMgYmVpbmcgZGlzcGxheWVkXG4gICAgcHVibGljIGN1cnJlbnRTZXJpZXNJbmRleCA9IDA7XG4gICAgcHVibGljIGN1cnJlbnRTZXJpZXM6IGFueSA9IHt9O1xuICAgIHB1YmxpYyBpbWFnZUNvdW50ID0gMDsgLy8gdG90YWwgaW1hZ2UgY291bnQgYmVpbmcgdmlld2VkXG5cbiAgICAvLyBjb250cm9sIGVuYWJsZS9kaXNhYmxlIGltYWdlIHNjcm9sbCBidXR0b25zXG4gICAgcHVibGljIGdldCBoaWRlUHJldmlvdXNJbWFnZSgpOiBhbnkgeyByZXR1cm4geyBjb2xvcjogKHRoaXMudmlld1BvcnQuY3VycmVudEluZGV4IDwgMSkgPyAnYmxhY2snIDogJ3doaXRlJyB9OyB9XG4gICAgcHVibGljIGdldCBoaWRlTmV4dEltYWdlKCk6IGFueSB7IHJldHVybiB7IGNvbG9yOiAodGhpcy52aWV3UG9ydC5jdXJyZW50SW5kZXggPj0gKHRoaXMuaW1hZ2VDb3VudCAtIDEpKSA/ICdibGFjaycgOiAnd2hpdGUnIH07IH1cblxuICAgIC8vIGNvbnRyb2wgbWVzc2FnZSBmb3IgbW9yZSBpbWFnZXMgdG8gbG9hZFxuICAgIHB1YmxpYyBnZXQgbW9yZUltYWdlc3RvTG9hZCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5sb2FkZWRJbWFnZXMubGVuZ3RoIDwgdGhpcy5pbWFnZUlkTGlzdC5sZW5ndGggJiYgIXRoaXMubG9hZGluZ0ltYWdlcykgeyAvLyBhcmUgdGhlcmUgYW55IG1vcmUgaW1hZ2VzIHRvIGxvYWQ/XG4gICAgICAgICAgICBjb25zdCBpbWFnZXNUb0xvYWQgPSAodGhpcy5tYXhJbWFnZXNUb0xvYWQgPD0gMCkgPyAodGhpcy5pbWFnZUlkTGlzdC5sZW5ndGggLSB0aGlzLmxvYWRlZEltYWdlcy5sZW5ndGgpIDogTWF0aC5taW4odGhpcy5tYXhJbWFnZXNUb0xvYWQsIHRoaXMuaW1hZ2VJZExpc3QubGVuZ3RoIC0gdGhpcy5sb2FkZWRJbWFnZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiBpbWFnZXNUb0xvYWQudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvLyBjb250cm9sIGV4aGliaXRpb24gb2YgYSBsb2FkaW5nIGltYWdlcyBwcm9ncmVzcyBpbmRpY2F0b3JcbiAgICBwdWJsaWMgbG9hZGluZ0ltYWdlcyA9IGZhbHNlO1xuICAgIHB1YmxpYyBnZXQgc2hvd1Byb2dyZXNzKCk6IGFueSB7IHJldHVybiB7IGRpc3BsYXk6ICh0aGlzLmxvYWRpbmdJbWFnZXMpID8gJ2lubGluZS1ibG9jaycgOiAnbm9uZScgfSB9O1xuXG4gICAgQFZpZXdDaGlsZChDb3JuZXJzdG9uZURpcmVjdGl2ZSkgdmlld1BvcnQ6IENvcm5lcnN0b25lRGlyZWN0aXZlOyAvLyB0aGUgbWFpbiBjb3JuZXJ0b25lIHZpZXcgcG9ydFxuXG4gICAgcHJpdmF0ZSBsb2FkZWRJbWFnZXMgPSBbXTtcbiAgICBwcml2YXRlIGltYWdlSWRMaXN0ID0gW107XG4gICAgcHJpdmF0ZSBlbGVtZW50OiBhbnk7XG4gICAgcHJpdmF0ZSB0YXJnZXRJbWFnZUNvdW50ID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy52aWV3UG9ydC5lbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgZGljb20gaW1hZ2VzIGZvciBkaXNwbGF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW1hZ2VJZExpc3QgbGlzdCBvZiBpbWFnZUlkcyB0byBsb2FkIGFuZCBkaXNwbGF5XG4gICAgICovXG4gICAgbG9hZFN0dWR5SW1hZ2VzKGltYWdlSWRMaXN0OiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMudmlld1BvcnQuZWxlbWVudDtcbiAgICAgICAgdGhpcy5pbWFnZUlkTGlzdCA9IGltYWdlSWRMaXN0O1xuICAgICAgICB0aGlzLnZpZXdQb3J0LnJlc2V0Vmlld2VyKCk7XG4gICAgICAgIHRoaXMudmlld1BvcnQucmVzZXRJbWFnZUNhY2hlKCk7IC8vIGNsZWFuIHVwIGltYWdlIGNhY2hlXG4gICAgICAgIHRoaXMuc2VyaWVzTGlzdCA9IFtdOyAvLyBzdGFydCBhIG5ldyBzZXJpZXMgbGlzdFxuICAgICAgICB0aGlzLmN1cnJlbnRTZXJpZXNJbmRleCA9IDA7IC8vIGFsd2F5cyBkaXNwbGF5IGZpcnN0IHNlcmllc1xuICAgICAgICB0aGlzLmxvYWRlZEltYWdlcyA9IFtdOyAvLyByZXNldCBsaXN0IG9mIGltYWdlcyBhbHJlYWR5IGxvYWRlZFxuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGxvb3AgdGhydSBhbGwgaW1hZ2VJZHMsIGxvYWQgYW5kIGNhY2hlIHRoZW0gZm9yIGV4aGliaXRpb24gKHVwIHRoZSB0aGUgbWF4aW11bSBsaW1pdCBkZWZpbmVkKVxuICAgICAgICAvL1xuICAgICAgICBjb25zdCBtYXhJbWFnZXMgPSAodGhpcy5tYXhJbWFnZXNUb0xvYWQgPD0gMCkgPyBpbWFnZUlkTGlzdC5sZW5ndGggOiBNYXRoLm1pbih0aGlzLm1heEltYWdlc1RvTG9hZCwgaW1hZ2VJZExpc3QubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW1hZ2VzID0gdHJ1ZTsgLy8gYWN0aXZhdGUgcHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgICAgIHRoaXMudGFyZ2V0SW1hZ2VDb3VudCA9IG1heEltYWdlcztcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1heEltYWdlczsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VJZCA9IGltYWdlSWRMaXN0W2luZGV4XTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lLmxvYWRBbmRDYWNoZUltYWdlKGltYWdlSWQpLnRoZW4oaW1hZ2VEYXRhID0+IHsgdGhpcy5pbWFnZUxvYWRlZChpbWFnZURhdGEpIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHRoZSBuZXh0IGJhdGNoIG9mIGltYWdlc1xuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkTW9yZUltYWdlcygpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy52aWV3UG9ydC5lbGVtZW50O1xuICAgICAgICAvL1xuICAgICAgICAvLyBsb29wIHRocnUgYWxsIGltYWdlSWRzLCBsb2FkIGFuZCBjYWNoZSB0aGVtIGZvciBleGhpYml0aW9uICh1cCB0aGUgdGhlIG1heGltdW0gbGltaXQgZGVmaW5lZClcbiAgICAgICAgLy9cbiAgICAgICAgY29uc3QgbWF4SW1hZ2VzID0gKHRoaXMubWF4SW1hZ2VzVG9Mb2FkIDw9IDApID8gKHRoaXMuaW1hZ2VJZExpc3QubGVuZ3RoIC0gdGhpcy5sb2FkZWRJbWFnZXMubGVuZ3RoKSA6IE1hdGgubWluKHRoaXMubWF4SW1hZ2VzVG9Mb2FkLCB0aGlzLmltYWdlSWRMaXN0Lmxlbmd0aCAtIHRoaXMubG9hZGVkSW1hZ2VzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMubG9hZGluZ0ltYWdlcyA9IHRydWU7IC8vIGFjdGl2YXRlIHByb2dyZXNzIGluZGljYXRvclxuICAgICAgICB0aGlzLnRhcmdldEltYWdlQ291bnQgKz0gbWF4SW1hZ2VzO1xuICAgICAgICBsZXQgbmV4dEltYWdlSW5kZXggPSB0aGlzLmxvYWRlZEltYWdlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYXhJbWFnZXM7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlSWQgPSB0aGlzLmltYWdlSWRMaXN0W25leHRJbWFnZUluZGV4KytdO1xuICAgICAgICAgICAgY29ybmVyc3RvbmUubG9hZEFuZENhY2hlSW1hZ2UoaW1hZ2VJZClcbiAgICAgICAgICAgICAgLnRoZW4oaW1hZ2VEYXRhID0+IHsgdGhpcy5pbWFnZUxvYWRlZChpbWFnZURhdGEpIH0pXG4gICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge3RoaXMudGFyZ2V0SW1hZ2VDb3VudC0tO30pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbWFnZURhdGEgdGhlIGRpY29tIGltYWdlIGRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIGltYWdlTG9hZGVkKGltYWdlRGF0YSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGltYWdlRGF0YS5pbWFnZUlkKVxuICAgICAgICAvLyBidWlsZCBsaXN0IG9mIHNlcmllcyBpbiBhbGwgbG9hZGRlZCBpbWFnZXNcbiAgICAgICAgY29uc3Qgc2VyaWVzID0ge1xuICAgICAgICAgICAgc3R1ZHlJRDogaW1hZ2VEYXRhLmRhdGEuc3RyaW5nKCd4MDAyMDAwMGQnKSxcbiAgICAgICAgICAgIHNlcmllc0lEOiBpbWFnZURhdGEuZGF0YS5zdHJpbmcoJ3gwMDIwMDAwZScpLFxuICAgICAgICAgICAgc2VyaWVzTnVtYmVyOiBpbWFnZURhdGEuZGF0YS5pbnRTdHJpbmcoJ3gwMDIwMDAxMScpLFxuICAgICAgICAgICAgc3R1ZHlEZXNjcmlwdGlvbjogaW1hZ2VEYXRhLmRhdGEuc3RyaW5nKCd4MDAwODEwMzAnKSxcbiAgICAgICAgICAgIHNlcmllc0Rlc2NyaXB0aW9uOiBpbWFnZURhdGEuZGF0YS5zdHJpbmcoJ3gwMDA4MTAzZScpLFxuICAgICAgICAgICAgaW1hZ2VDb3VudDogMSxcbiAgICAgICAgICAgIGltYWdlTGlzdDogW2ltYWdlRGF0YV1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbmV3IHNlcmllcywgYWRkIGl0IHRvIHRoZSBsaXN0XG4gICAgICAgIGxldCBzZXJpZXNJbmRleCA9IHRoaXMuc2VyaWVzTGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnNlcmllc0lEID09PSBzZXJpZXMuc2VyaWVzSUQpO1xuICAgICAgICBpZiAoc2VyaWVzSW5kZXggPCAwKSB7XG4gICAgICAgICAgICBzZXJpZXNJbmRleCA9IHRoaXMuc2VyaWVzTGlzdC5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnNlcmllc0xpc3QucHVzaChzZXJpZXMpO1xuICAgICAgICAgICAgdGhpcy5zZXJpZXNMaXN0LnNvcnQoKGEsYikgPT4ge1xuICAgICAgICAgICAgICBpZiAoYS5zZXJpZXNOdW1iZXIgPiBiLnNlcmllc051bWJlcikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgIGlmIChhLnNlcmllc051bWJlciA8IGIuc2VyaWVzTnVtYmVyKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2VyaWVzSXRlbSA9IHRoaXMuc2VyaWVzTGlzdFtzZXJpZXNJbmRleF07XG4gICAgICAgICAgICBzZXJpZXNJdGVtLmltYWdlQ291bnQrKztcbiAgICAgICAgICAgIHNlcmllc0l0ZW0uaW1hZ2VMaXN0LnB1c2goaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIHNlcmllc0l0ZW0uaW1hZ2VMaXN0LnNvcnQoKGEsYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLmRhdGEuaW50U3RyaW5nKCd4MDAyMDAwMTMnKSA+IGIuZGF0YS5pbnRTdHJpbmcoJ3gwMDIwMDAxMycpKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICBpZiAoYS5kYXRhLmludFN0cmluZygneDAwMjAwMDEzJykgPCBiLmRhdGEuaW50U3RyaW5nKCd4MDAyMDAwMTMnKSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGVkSW1hZ2VzLnB1c2goaW1hZ2VEYXRhKTsgLy8gc2F2ZSB0byBpbWFnZXMgbG9hZGVkXG5cbiAgICAgICAgaWYgKHRoaXMubG9hZGVkSW1hZ2VzLmxlbmd0aCA+PSB0aGlzLnRhcmdldEltYWdlQ291bnQpIHsgLy8gZGlkIHdlIGZpbmlzaCBsb2FkaW5nIGltYWdlcz9cbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0ltYWdlcyA9IGZhbHNlOyAvLyBkZWFjdGl2YXRlIHByb2dyZXNzIGluZGljYXRvclxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlcmllc0luZGV4ID09PSB0aGlzLmN1cnJlbnRTZXJpZXNJbmRleCkge1xuICAgICAgICAgICAgLy90aGlzLmN1cnJlbnRTZXJpZXMgPSB0aGlzLnNlcmllc0xpc3Rbc2VyaWVzSW5kZXhdO1xuICAgICAgICAgICAgLy90aGlzLmltYWdlQ291bnQgPSB0aGlzLmN1cnJlbnRTZXJpZXMuaW1hZ2VDb3VudDsgLy8gZ2V0IHRvdGFsIGltYWdlIGNvdW50XG4gICAgICAgICAgICAvL3RoaXMudmlld1BvcnQuYWRkSW1hZ2VEYXRhKGltYWdlRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNob3dTZXJpZXModGhpcy5jdXJyZW50U2VyaWVzSW5kZXgpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93U2VyaWVzKGluZGV4KSB7XG4vLyAgICAgICAgdGhpcy5yZXNldEFsbFRvb2xzKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNlcmllc0luZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuY3VycmVudFNlcmllcyA9IHRoaXMuc2VyaWVzTGlzdFtpbmRleF07XG4gICAgICAgIHRoaXMuaW1hZ2VDb3VudCA9IHRoaXMuY3VycmVudFNlcmllcy5pbWFnZUNvdW50OyAvLyBnZXQgdG90YWwgaW1hZ2UgY291bnRcbiAgICAgICAgdGhpcy52aWV3UG9ydC5yZXNldEltYWdlQ2FjaGUoKTsgLy8gY2xlYW4gdXAgaW1hZ2UgY2FjaGVcbi8vICAgICAgICB0aGlzLmxvYWRpbmdJbWFnZXMgPSB0cnVlOyAvLyBhY3RpdmF0ZSBwcm9ncmVzcyBpbmRpY2F0b3JcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRTZXJpZXMuaW1hZ2VMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSB0aGlzLmN1cnJlbnRTZXJpZXMuaW1hZ2VMaXN0W2ldO1xuICAgICAgICAgICAgdGhpcy52aWV3UG9ydC5hZGRJbWFnZURhdGEoaW1hZ2VEYXRhKTtcbiAgICAgICAgfVxuLy8gICAgICAgIHRoaXMubG9hZGluZ0ltYWdlcyA9IGZhbHNlOyAvLyBkZS1hY3RpdmF0ZSBwcm9ncmVzcyBpbmRpY2F0b3JcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZUFzKCkge1xuICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnNhdmVBcyh0aGlzLmVsZW1lbnQsIFwidGVzdGUuanBnXCIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1hZ2Ugc2Nyb2xsIG1ldGhvZHNcbiAgICAgKi9cbiAgICBwdWJsaWMgbmV4dEltYWdlKCkge1xuICAgICAgICBpZiAodGhpcy52aWV3UG9ydC5jdXJyZW50SW5kZXggPCB0aGlzLmltYWdlQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMudmlld1BvcnQubmV4dEltYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcHJldmlvdXNJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlld1BvcnQuY3VycmVudEluZGV4ID4gMCkge1xuICAgICAgICAgICAgdGhpcy52aWV3UG9ydC5wcmV2aW91c0ltYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2RzIHRvIGFjdGl2YXRlL2RlYWN0aXZhdGUgdmlld2VyIHRvb2xzXG4gICAgICovXG5cbiAgICAvLyBkZWFjdGl2YXRlIGFsbCB0b29sc1xuICAgIHB1YmxpYyByZXNldEFsbFRvb2xzKCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy53d3djLmRlYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMucGFuLmRlYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuem9vbS5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnByb2JlLmRlYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMubGVuZ3RoLmRlYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuc2ltcGxlQW5nbGUuZGVhY3RpdmF0ZSh0aGlzLmVsZW1lbnQsIDEpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5lbGxpcHRpY2FsUm9pLmRlYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMucmVjdGFuZ2xlUm9pLmRlYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuc3RhY2tTY3JvbGwuZGVhY3RpdmF0ZSh0aGlzLmVsZW1lbnQsIDEpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy53d3djVG91Y2hEcmFnLmRlYWN0aXZhdGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuem9vbVRvdWNoRHJhZy5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnBhblRvdWNoRHJhZy5kZWFjdGl2YXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsVG91Y2hEcmFnLmRlYWN0aXZhdGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3RvcENsaXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFjdGl2YXRlIHdpbmRvd2luZ1xuICAgIHB1YmxpYyBlbmFibGVXaW5kb3dpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMud3d3Yy5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQsIDEpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy53d3djVG91Y2hEcmFnLmFjdGl2YXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhY3RpdmF0ZSB6b29tXG4gICAgcHVibGljIGVuYWJsZVpvb20oKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuem9vbS5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQsIDUpOyAvLyA1IGlzIHJpZ2h0IG1vdXNlIGJ1dHRvbiBhbmQgbGVmdCBtb3VzZSBidXR0b25cbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuem9vbVRvdWNoRHJhZy5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWN0aXZhdGUgcGFuXG4gICAgcHVibGljIGVuYWJsZVBhbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBbGxUb29scygpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5wYW4uYWN0aXZhdGUodGhpcy5lbGVtZW50LCAzKTsgLy8gMyBpcyBtaWRkbGUgbW91c2UgYnV0dG9uIGFuZCBsZWZ0IG1vdXNlIGJ1dHRvblxuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5wYW5Ub3VjaERyYWcuYWN0aXZhdGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFjdGl2YXRlIGltYWdlIHNjcm9sbFxuICAgIHB1YmxpYyBlbmFibGVTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWxsVG9vbHMoKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuc3RhY2tTY3JvbGwuYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuc3RhY2tTY3JvbGxUb3VjaERyYWcuYWN0aXZhdGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuc3RhY2tTY3JvbGxLZXlib2FyZC5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWN0aXZhdGUgbGVuZ3RoIG1lYXN1cmVtZW50XG4gICAgcHVibGljIGVuYWJsZUxlbmd0aCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBbGxUb29scygpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5sZW5ndGguYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFjdGl2YXRlIGFuZ2xlIG1lYXN1cmVtZW50XG4gICAgcHVibGljIGVuYWJsZUFuZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEFsbFRvb2xzKCk7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnNpbXBsZUFuZ2xlLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhY3RpdmF0ZSBwaXhlbCBwcm9iZVxuICAgIHB1YmxpYyBlbmFibGVQcm9iZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBbGxUb29scygpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5wcm9iZS5hY3RpdmF0ZSh0aGlzLmVsZW1lbnQsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWN0aXZhdGUgRWxsaXB0aWNhbCBST0lcbiAgICBwdWJsaWMgZW5hYmxlRWxsaXB0aWNhbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBbGxUb29scygpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5lbGxpcHRpY2FsUm9pLmFjdGl2YXRlKHRoaXMuZWxlbWVudCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhY3RpdmF0ZSBSZWN0YW5nbGUgUk9JXG4gICAgcHVibGljIGVuYWJsZVJlY3RhbmdsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBbGxUb29scygpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5yZWN0YW5nbGVSb2kuYWN0aXZhdGUodGhpcy5lbGVtZW50LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBsYXkgQ2xpcFxuICAgIHB1YmxpYyBwbGF5Q2xpcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGxldCBmcmFtZVJhdGUgPSAxMDtcbiAgICAgICAgICAgIGxldCBzdGFja1N0YXRlID0gY29ybmVyc3RvbmVUb29scy5nZXRUb29sU3RhdGUodGhpcy5lbGVtZW50LCAnc3RhY2snKTtcbiAgICAgICAgICAgIGlmIChzdGFja1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlID0gc3RhY2tTdGF0ZS5kYXRhWzBdLmZyYW1lUmF0ZTtcbiAgICAgICAgICAgICAgICAvLyBQbGF5IGF0IGEgZGVmYXVsdCAxMCBGUFMgaWYgdGhlIGZyYW1lcmF0ZSBpcyBub3Qgc3BlY2lmaWVkXG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lUmF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lUmF0ZSA9IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMucGxheUNsaXAodGhpcy5lbGVtZW50LCBmcmFtZVJhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RvcCBDbGlwXG4gICAgcHVibGljIHN0b3BDbGlwKCkge1xuICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLnN0b3BDbGlwKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gaW52ZXJ0IGltYWdlXG4gICAgcHVibGljIGludmVydEltYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgbGV0IHZpZXdwb3J0ID0gY29ybmVyc3RvbmUuZ2V0Vmlld3BvcnQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBpbnZlcnRcbiAgICAgICAgICAgIGlmICh2aWV3cG9ydC5pbnZlcnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB2aWV3cG9ydC5pbnZlcnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlld3BvcnQuaW52ZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvcm5lcnN0b25lLnNldFZpZXdwb3J0KHRoaXMuZWxlbWVudCwgdmlld3BvcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgaW1hZ2VcbiAgICBwdWJsaWMgcmVzZXRJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0b29sU3RhdGVNYW5hZ2VyID0gY29ybmVyc3RvbmVUb29scy5nZXRFbGVtZW50VG9vbFN0YXRlTWFuYWdlcih0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgb25seSB3b3JrcyBvbiBJbWFnZUlkLXNwZWNpZmljIHRvb2wgc3RhdGUgbWFuYWdlcnMgKGZvciBub3cpXG4gICAgICAgICAgICAvL3Rvb2xTdGF0ZU1hbmFnZXIuY2xlYXIodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuY2xlYXJUb29sU3RhdGUodGhpcy5lbGVtZW50LCBcImxlbmd0aFwiKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuY2xlYXJUb29sU3RhdGUodGhpcy5lbGVtZW50LCBcImFuZ2xlXCIpO1xuICAgICAgICAgICAgY29ybmVyc3RvbmVUb29scy5jbGVhclRvb2xTdGF0ZSh0aGlzLmVsZW1lbnQsIFwic2ltcGxlQW5nbGVcIik7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLmNsZWFyVG9vbFN0YXRlKHRoaXMuZWxlbWVudCwgXCJwcm9iZVwiKTtcbiAgICAgICAgICAgIGNvcm5lcnN0b25lVG9vbHMuY2xlYXJUb29sU3RhdGUodGhpcy5lbGVtZW50LCBcImVsbGlwdGljYWxSb2lcIik7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZVRvb2xzLmNsZWFyVG9vbFN0YXRlKHRoaXMuZWxlbWVudCwgXCJyZWN0YW5nbGVSb2lcIik7XG4gICAgICAgICAgICBjb3JuZXJzdG9uZS51cGRhdGVJbWFnZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5yZXNldEFsbFRvb2xzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJJbWFnZSgpIHtcbiAgICAgIHRoaXMudmlld1BvcnQucmVzZXRWaWV3ZXIoKTtcbiAgICAgIHRoaXMudmlld1BvcnQucmVzZXRJbWFnZUNhY2hlKCk7XG4gICAgICB0aGlzLnNlcmllc0xpc3QgPSBbXTsgLy8gbGlzdCBvZiBzZXJpZXMgb24gdGhlIGltYWdlcyBiZWluZyBkaXNwbGF5ZWRcbiAgICAgIHRoaXMuY3VycmVudFNlcmllc0luZGV4ID0gMDtcbiAgICAgIHRoaXMuY3VycmVudFNlcmllcyA9IHt9O1xuICAgICAgdGhpcy5pbWFnZUNvdW50ID0gMDsgLy8gdG90YWwgaW1hZ2UgY291bnQgYmVpbmcgdmlld2VkXG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5kZWNsYXJlIGNvbnN0IGNvcm5lcnN0b25lO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0aHVtYm5haWxdJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUaHVtYm5haWxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBpbWFnZURhdGE6IGFueTtcblxuICBwcml2YXRlIGVsZW1lbnQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuIC8vIFJldHJpZXZlIHRoZSBET00gZWxlbWVudCBpdHNlbGZcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgIFxuICAgIC8vIEVuYWJsZSB0aGUgZWxlbWVudCB3aXRoIENvcm5lcnN0b25lXG4gICAgY29ybmVyc3RvbmUuZW5hYmxlKHRoaXMuZWxlbWVudCk7XG4gICAgaWYgKHRoaXMuaW1hZ2VEYXRhICYmIHRoaXMuZWxlbWVudCkge1xuICAgICAgY29uc3Qgdmlld3BvcnQgPSBjb3JuZXJzdG9uZS5nZXREZWZhdWx0Vmlld3BvcnRGb3JJbWFnZSh0aGlzLmVsZW1lbnQsIHRoaXMuaW1hZ2VEYXRhKTtcbiAgICAgIGNvcm5lcnN0b25lLmRpc3BsYXlJbWFnZSh0aGlzLmVsZW1lbnQsIHRoaXMuaW1hZ2VEYXRhLCB2aWV3cG9ydCk7XG4gICAgICAvLyBGaXQgdGhlIGltYWdlIHRvIHRoZSB2aWV3cG9ydCB3aW5kb3dcbiAgICAgIGNvcm5lcnN0b25lLmZpdFRvV2luZG93KHRoaXMuZWxlbWVudCk7XG4gICAgICBjb3JuZXJzdG9uZS5yZXNpemUodGhpcy5lbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcblxuaW1wb3J0IHsgRElDT01WaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL2RpY29tLXZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29ybmVyc3RvbmVEaXJlY3RpdmUgfSBmcm9tICcuL2Nvcm5lcnN0b25lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUaHVtYm5haWxEaXJlY3RpdmUgfSBmcm9tICcuL3RodW1ibmFpbC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RJQ09NVmlld2VyQ29tcG9uZW50LCBDb3JuZXJzdG9uZURpcmVjdGl2ZSwgVGh1bWJuYWlsRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0RJQ09NVmlld2VyQ29tcG9uZW50LCBDb3JuZXJzdG9uZURpcmVjdGl2ZSwgVGh1bWJuYWlsRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBEaWNvbVZpZXdlck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUEyQ0UsOEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUExQm5DLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNsQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUVqQixnQkFBVyxHQUFHLEVBQUUsQ0FBQzs7UUFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQzs7UUFDZCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQWtCbkIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO0tBR3BDO0lBbkJELHNCQUFXLGdEQUFjOzs7Ozs7UUFBekI7WUFDRSxJ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

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
            this.viewPort.resetAllTools();
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