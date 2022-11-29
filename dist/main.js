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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_loadApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadApi.js */ \"./src/modules/loadApi.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n\n\n\n\n// Fetch Data From API\n\nconst popup = document.querySelector('.popup');\n\nconst getMovieDetails = async (movieId) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);\n  const myJson = await response.json(); // extract JSON from the http response\n  return myJson;\n};\n\nconst movieTitle = document.querySelector('#main-card');\nconst apiData = (0,_modules_loadApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\n  data.forEach((movie) => {\n    // Get Movie Name\n    let imageUrl = 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg';\n    // Get Movie Image\n    if (movie.show.image) {\n      imageUrl = movie.show.image.medium;\n    }\n    // End Getting Movie Image    // movieTitle.insertAdjacentHTML(\"beforeend\", movie.show.name);\n    movieTitle.innerHTML += `\n    <div id=\"movie-card\">\n      <div id=\"movie-img\"><img src=\"${imageUrl}\" alt=\"${movie.show.name}\"> </div>\n      <div id=\"movie-info\">\n        <h2 id=\"movie-title\">${movie.show.name} <button class=\"like-icon\"><i class=\"fa-regular fa-heart\"></i></br>3</button></h2>\n        <p id=\"movie-description\"></p>\n        <button id=\"${movie.show.id}\" class=\"movie-button\">Comment</button>\n        <button id=\"${movie.show.id}\" class=\"movie-button\">Reservation</button>\n      </div>\n    </div>`;\n\n    const movieButtons = document.querySelectorAll('.movie-button');\n    movieButtons.forEach((button) => {\n      button.addEventListener('click', (e) => {\n        getMovieDetails(e.target.id).then((data) => {\n          const popupContainer = document.querySelector('.popup-container');\n          const movieName = data.name;\n          const movieDescription = data.summary;\n          const imageSrc = data.image.medium;\n          const popup = document.querySelector('.popup');\n          const movieId = data.id;\n          popup.classList.remove('hide');\n\n          const firstPart = `\n  <div class=\"popup-movie-banner\">\n        <img\n          class=\"popup-movie-banner-img\"\n          src=\"${imageSrc}\"\n          alt=\"${movieName} Banner\"\n        />\n      </div>\n      <div class=\"popup-details\">\n        <div class=\"popup-title\">\n          <h2>${movieName}</h2>\n        </div>\n        <div class=\"popup-description\">\n          ${movieDescription}\n        </div>\n\n        <div class=\"popup-comments\">\n          <h2 class=\"popup-comments-title\">\n            Comments<span id=\"commentConter\">(<span id=\"totalComment\">50</span>)</span>\n          </h2>\n          <div class=\"popu-comments-container\">\n            <ul class=\"comment-description\">\n            `;\n\n          let commentList = '';\n          const temp = '<li>12/11/22 Bhaskar: This is my comment</li>';\n          commentList += temp;\n          // }\n          const secondPart = `\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"add-comment-form\">\n          <h2 class=\"popup-comments-title\">\n            Add Comments<span id=\"addCOmment\"></span>\n          </h2>\n          <form id=\"addComment\">\n          <input type=\"text\" placeholder=\"Name\" name=\"name\" />\n          <input type=\"hidden\" placeholder=\"Name\" name=\"movieId\" value=\"${movieId}\" />\n          <textarea\n              name=\"comment\"\n              id=\"comment\"\n              cols=\"30\"\n              rows=\"8\"\n              placeholder=\"Comment\"\n              name=\"comment\"\n            >\n            </textarea>\n            <input type=\"submit\" value=\"Submit\" />\n          </form>\n        </div>\n      </div>`;\n\n          popupContainer.innerHTML = firstPart + commentList + secondPart;\n        });\n      });\n    });\n  });\n});\n\napiData();\n\nconst closeBtn = document.querySelector('.popup-close');\ncloseBtn.removeEventListener('click', () => {\n  console.log('close');\n});\n\n\n//# sourceURL=webpack://webpack-config/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\n\r\nconst getComments = async (movieId) => {\r\n  const response = await fetch(\r\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/comments?item_id=${movieId}`,\r\n  );\r\n  const myJson = await response.json(); // extract JSON from the http response\r\n\r\n  return myJson;\r\n};\r\n\r\nconst postComment = async (movieId, name, description) => {\r\n  const data = `{\"item_id\": \"${movieId}\", \"username\": \"${name}\", \"comment\": \"${description}\"}`;\r\n\r\n  const mBody = JSON.parse(data);\r\n\r\n  const response = await fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/comments/',\r\n    {\r\n      method: 'POST',\r\n      body: JSON.stringify(mBody),\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n    },\r\n  );\r\n  await response; // extract JSON from the http response\r\n  // do something with myJson\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/comments.js?");

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