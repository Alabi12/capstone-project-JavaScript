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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_loadApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadApi.js */ \"./src/modules/loadApi.js\");\n/* harmony import */ var _modules_postComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/postComment.js */ \"./src/modules/postComment.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _modules_liked_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/liked.js */ \"./src/modules/liked.js\");\n/* harmony import */ var _modules_checkForLikes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkForLikes.js */ \"./src/modules/checkForLikes.js\");\n\n\n\n\n\n\n\n\n// Likes\nconst getLikesFirst = new Promise((resolve) => {\n  (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  setTimeout(() => {\n    resolve('done');\n  }, 300);\n});\n\ngetLikesFirst.then(() => {\n  new Promise((resolve) => {\n    (0,_modules_loadApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    setTimeout(() => {\n      resolve('done');\n    }, 300);\n  }).then(() => {\n    (0,_modules_postComment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n});\n\n// Fetch Data From API\n\nconst popup = document.querySelector('.popup');\n\nconst getMovieDetails = async (movieId) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);\n  const myJson = await response.json(); // extract JSON from the http response\n  return myJson;\n};\n\nconst movieTitle = document.querySelector('#main-card');\nconst apiData = (0,_modules_loadApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\n  data.forEach((movie) => {\n    // Get Movie Name\n    let imageUrl = 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg';\n    // Get Movie Image\n    if (movie.show.image) {\n      imageUrl = movie.show.image.medium;\n    }\n    // End Getting Movie Image    // movieTitle.insertAdjacentHTML(\"beforeend\", movie.show.name);\n    movieTitle.innerHTML += `\n    <div id=\"movie-card\">\n      <div id=\"movie-img\"><img src=\"${imageUrl}\" alt=\"${movie.show.name}\"> </div>\n      <div id=\"movie-info\">\n        <h2 id=\"movie-title\">${movie.show.name} <button class=\"like-icon like-${movie.show.id}\"><i class=\"fa-regular fa-heart\"></i></br>${(0,_modules_checkForLikes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(movie.show.id)}</button></h2>\n        <p id=\"movie-description\"></p>\n        <button id=\"${movie.show.id}\" class=\"movie-button\">Comment</button>\n        <button id=\"${movie.show.id}\" class=\"movie-button\">Reservation</button>\n      </div>\n    </div>`;\n\n    const likeAdd = (container) => {\n      container.addEventListener('click', (event) => {\n        if (event.target.classList.contains(`like-${movie.show.id}`)) {\n          (0,_modules_liked_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(movie.show.id);\n        }\n      });\n    };\n\n    likeAdd(movieTitle);\n\n    const movieButtons = document.querySelectorAll('.movie-button');\n    movieButtons.forEach((button) => {\n      button.addEventListener('click', (e) => {\n        getMovieDetails(e.target.id).then((data) => {\n          const popupContainer = document.querySelector('.popup-container');\n          const movieName = data.name;\n          const movieDescription = data.summary;\n          let imageSrc = '';\n          if (data.image) {\n            imageSrc = data.image.medium;\n          }\n\n          const movieId = data.id;\n          popup.classList.remove('hide');\n\n          const firstPart = `\n  <div class=\"popup-movie-banner\">\n        <img\n          class=\"popup-movie-banner-img\"\n          src=\"${imageSrc}\"\n          alt=\"${movieName} Banner\"\n        />\n      </div>\n      <div class=\"popup-details\">\n        <div class=\"popup-title\">\n          <h2>${movieName}</h2>\n        </div>\n        <div class=\"popup-description\">\n          ${movieDescription}\n        </div>\n\n        <div class=\"popup-comments\">\n          <h2 class=\"popup-comments-title\">\n            Comments<span id=\"commentConter\">(<span id=\"totalComment\"></span>)</span>\n          </h2>\n          <div class=\"popup-comments-container\">\n            <ul class=\"comment-description\">\n            `;\n          let commentList = '';\n          (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(movieId).then((data) => {\n            const commentCount = document.querySelector('#totalComment');\n            commentCount.innerHTML = data.length;\n\n            data.forEach((comment) => {\n              commentList += `<li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>`;\n            });\n            const commentListContainer = document.querySelector(\n              '.comment-description',\n            );\n            commentListContainer.innerHTML = commentList;\n          });\n\n          const secondPart = `\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"add-comment-form\">\n          <h2 class=\"popup-comments-title\">\n            Add Comments<span id=\"addCOmment\"></span>\n          </h2>\n          <form id=\"addCommentForm\">\n          <input type=\"text\" placeholder=\"Name\" name=\"name\" />\n          <input type=\"hidden\" placeholder=\"Name\" name=\"movieId\" value=\"${movieId}\" />\n          <textarea\n              name=\"comment\"\n              id=\"comment\"\n              cols=\"30\"\n              rows=\"8\"\n              placeholder=\"Comment\"\n              name=\"comment\"\n            ></textarea>\n            <input type=\"submit\" value=\"Submit\" />\n          </form>\n        </div>\n      </div>`;\n\n          popupContainer.innerHTML = firstPart + commentList + secondPart;\n\n          const closeBtn = document.querySelector('#popup-close');\n          closeBtn.addEventListener('click', () => {\n            popup.classList.add('hide');\n          });\n\n          const addCommentForm = document.querySelector('#addCommentForm');\n          addCommentForm.addEventListener('submit', (e) => {\n            e.preventDefault();\n            const name = e.target.name.value;\n            const comment = e.target.comment.value;\n            const movieId = e.target.movieId.value;\n            // console.log(name, comment, movieId);\n            (0,_modules_postComment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movieId, name, comment);\n            const d = new Date();\n            const commentDescription = document.querySelector(\n              '.comment-description',\n            );\n            const commentConter = document.querySelector('#totalComment');\n\n            const ye = new Intl.DateTimeFormat('en', {\n              year: 'numeric',\n            }).format(d);\n            const mo = new Intl.DateTimeFormat('en', {\n              month: '2-digit',\n            }).format(d);\n            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(\n              d,\n            );\n            commentDescription.innerHTML += `<li>${ye}-${mo}-${da} ${name}: ${comment}</li>`;\n            commentConter.innerHTML = Number(commentConter.innerHTML) + 1;\n          });\n        });\n      });\n    });\n  });\n});\n\napiData();\n\n// const refreshLike = () => {\n//   likeButtons = document.querySelectorAll('.like-icon');\n// };\n\n//# sourceURL=webpack://webpack-config/./src/index.js?");

/***/ }),

/***/ "./src/modules/checkForLikes.js":
/*!**************************************!*\
  !*** ./src/modules/checkForLikes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst checkForLikes = (movieId) => {\n  const likes = JSON.parse(localStorage.getItem('likes'));\n  let like = 0;\n  likes.forEach((element) => {\n    if (element.item_id === movieId) {\n      like = element.likes;\n    }\n  });\n  return like;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkForLikes);\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/checkForLikes.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (movieId) => {\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/comments?item_id=${movieId}`,\n  );\n  const myJson = await response.json(); // extract JSON from the http response\n\n  return myJson;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async () => {\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/likes/',\n  );\n  const myJson = await response.json(); // extract JSON from the http response\n  localStorage.setItem('likes', JSON.stringify(myJson));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/liked.js":
/*!******************************!*\
  !*** ./src/modules/liked.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst liked = async (movieId) => {\n  const mBody = JSON.parse(`{\"item_id\": ${movieId}}`);\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/likes/',\n    {\n      method: 'POST',\n      body: JSON.stringify(mBody),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    },\n  );\n  await response; // extract JSON from the http response\n  // do something with myJson\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (liked);\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/liked.js?");

/***/ }),

/***/ "./src/modules/loadApi.js":
/*!********************************!*\
  !*** ./src/modules/loadApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadApi = async () => {\n  const response = await fetch('https://api.tvmaze.com/search/shows?q=comedy');\n  const myJson = await response.json(); // extract JSON from the http response\n  return myJson;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadApi);\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/loadApi.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postComment = async (movieId, name, description) => {\n  const data = `{\"item_id\": \"${movieId}\", \"username\": \"${name}\", \"comment\": \"${description}\"}`;\n\n  const newData = JSON.parse(data);\n\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/comments/',\n    {\n      method: 'POST',\n      body: JSON.stringify(newData),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    },\n  );\n  await response; // extract JSON from the http response\n  // do something with myJson\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/postComment.js?");

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