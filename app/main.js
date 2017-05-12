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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*  
	Starter JS
	==========

	Starter tempalte for JS projects

	(Shaun A. Noordin || shaunanoordin.com || 20160509)
	********************************************************************************
	 */

	/*  Primary App Class
	 */
	//==============================================================================
	var App = function () {
	  function App() {
	    var _this = this;

	    _classCallCheck(this, App);

	    this.html = {
	      video: document.getElementById("live-video"),
	      console: document.getElementById("console")
	    };

	    navigator.mediaDevices && navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function (stream) {
	      console.log("VIDEO OK", stream);
	      _this.print("VIDEO OK");

	      _this.html.video.srcObject = stream;
	      _this.html.video.onloadedmetadata = function (e) {
	        _this.html.video.play();
	      };
	    }).catch(function (err) {
	      console.error(err);
	      _this.print("VIDEO ERROR");
	    });
	  }

	  _createClass(App, [{
	    key: "print",
	    value: function print(msg) {
	      var p = document.createElement("p");
	      p.innerHTML = msg;
	      this.html.console.appendChild(p);
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.html.console.innerHTML = "";
	    }
	  }]);

	  return App;
	}();
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