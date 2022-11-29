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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_loadApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadApi.js */ \"./src/modules/loadApi.js\");\n\n\n// Fetch Data From API\nconst getMovieDetails = async (movieId) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);\n  const myJson = await response.json(); // extract JSON from the http response\n  return myJson;\n};\n\nconst movieTitle = document.querySelector('#main-card');\nconst apiData = (0,_modules_loadApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\n  data.forEach((movie) => {\n    // Get Movie Name\n    let imageUrl = 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg';\n    // Get Movie Image\n    if (movie.show.image) {\n      imageUrl = movie.show.image.medium;\n    }\n    // End Getting Movie Image    // movieTitle.insertAdjacentHTML(\"beforeend\", movie.show.name);\n    movieTitle.innerHTML += `\n    <div id=\"movie-card\">\n      <div id=\"movie-img\"><img src=\"${imageUrl}\" alt=\"${movie.show.name}\"> </div>\n      <div id=\"movie-info\">\n        <h2 id=\"movie-title\">${movie.show.name}</h2>\n        <p id=\"movie-description\"></p>\n        <button id=\"${movie.show.id}\" class=\"movie-button\">Comment</button>\n        <button id=\"${movie.show.id}\" class=\"movie-button\">Reservation</button>\n      </div>\n    </div>`;\n\n    const movieButtons = document.querySelectorAll('.movie-button');\n    movieButtons.forEach((button) => {\n      button.addEventListener('click', (e) => {\n        getMovieDetails(e.target.id).then((data) => {\n          const movieDescription = document.querySelector('#movie-description');\n          movieDescription.innerHTML = data.summary;\n        });\n      });\n    });\n  });\n});\n\napiData();\n\n\n//# sourceURL=webpack://webpack-config/./src/index.js?");

/***/ }),

/***/ "./src/modules/loadApi.js":
/*!********************************!*\
  !*** ./src/modules/loadApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadApi = async () => {\n  const response = await fetch('https://api.tvmaze.com/search/shows?q=comedy');\n  const myJson = await response.json(); // extract JSON from the http response\n  return myJson;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadApi);\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/loadApi.js?");

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