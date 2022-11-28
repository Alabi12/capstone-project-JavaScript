/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-config/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_loadApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadApi.js */ \"./src/modules/loadApi.js\");\n\r\n\r\n// Fetch Data From API\r\nconst getMovieDetails = async (movieId) => {\r\n  const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);\r\n  const myJson = await response.json(); // extract JSON from the http response\r\n  return myJson;\r\n};\r\n\r\nconst movieTitle = document.querySelector(\"#movie-title\");\r\nconst apiData = (0,_modules_loadApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n  console.log(data);\r\n  data.forEach((movie) => {\r\n    // Get Movie Name\r\n    let imageUrl =\r\n      \"https://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg\";\r\n    // Get Movie Image\r\n    if (movie.show.image) {\r\n      imageUrl = movie.show.image.medium;\r\n    }\r\n    // End Getting Movie Image    // movieTitle.insertAdjacentHTML(\"beforeend\", movie.show.name);\r\n    movieTitle.innerHTML += `<div id=\"main-card\">\r\n    <div id=\"movie-card card\">\r\n      <div id=\"movie-img\"><img src=\"${imageUrl}\" alt=\"${movie.show.name}\"> </div>\r\n      <div id=\"movie-info\">\r\n        <h2 id=\"movie-title\">${movie.show.name}</h2>\r\n        <p id=\"movie-description\"></p>\r\n        <button value=\"${movie.show.id}\" class=\"movie-button\">Comment</button>\r\n      </div>\r\n    </div>\r\n  </div>`;\r\n\r\n    const movieButtons = document.querySelectorAll(\".movie-button\");\r\n    movieButtons.forEach((button) => {\r\n      button.addEventListener(\"click\", (e) => {\r\n        getMovieDetails(e.target.value).then((data) => {\r\n          console.log(data.summary);\r\n        });\r\n      });\r\n    });\r\n  });\r\n});\r\n\r\napiData();\r\n\n\n//# sourceURL=webpack://webpack-config/./src/index.js?");

/***/ }),

/***/ "./src/modules/loadApi.js":
/*!********************************!*\
  !*** ./src/modules/loadApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadApi = async () => {\r\n  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');\r\n  const myJson = await response.json(); // extract JSON from the http response\r\n  return myJson;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadApi);\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/loadApi.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/css/style.css");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;