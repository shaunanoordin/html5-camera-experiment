/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*  
	Starter JS
	==========

	Starter tempalte for JS projects

	(Shaun A. Noordin || shaunanoordin.com || 20160509)
	********************************************************************************
	 */

	//import {ImportExample} from "./importExample.js";

	/*  Primary App Class
	 */
	//==============================================================================
	var App = function App() {
	  _classCallCheck(this, App);

	  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function (stream) {
	    console.log("STREAM OK", stream);

	    var htmlVideo = document.getElementById("live-video");
	    htmlVideo.srcObject = stream;
	    htmlVideo.onloadedmetadata = function (e) {
	      htmlVideo.play();
	    };
	  }).catch(function (err) {
	    console.error(err);
	  });
	};
	//==============================================================================

	/*  Initialisations
	 */
	//==============================================================================


	var app;
	window.onload = function () {
	  window.app = new App();
	};
	//==============================================================================

/***/ }
/******/ ]);