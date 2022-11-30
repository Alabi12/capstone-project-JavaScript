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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_loadApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadApi.js */ \"./src/modules/loadApi.js\");\n/* harmony import */ var _modules_postComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/postComment.js */ \"./src/modules/postComment.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _modules_liked_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/liked.js */ \"./src/modules/liked.js\");\n/* harmony import */ var _modules_checkForLikes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkForLikes.js */ \"./src/modules/checkForLikes.js\");\n/* harmony import */ var _modules_filmCounter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filmCounter.js */ \"./src/modules/filmCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Likes\r\nconst getLikesFirst = new Promise((resolve) => {\r\n  (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  setTimeout(() => {\r\n    resolve('done');\r\n  }, 300);\r\n});\r\n\r\ngetLikesFirst.then(() => {\r\n  new Promise((resolve) => {\r\n    (0,_modules_loadApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    setTimeout(() => {\r\n      resolve('done');\r\n    }, 300);\r\n  }).then(() => {\r\n    (0,_modules_postComment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n});\r\n\r\n// Fetch Data From API\r\n\r\nconst popup = document.querySelector('.popup');\r\n\r\nconst getMovieDetails = async (movieId) => {\r\n  const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);\r\n  const myJson = await response.json(); // extract JSON from the http response\r\n  return myJson;\r\n};\r\n\r\nconst movieTitle = document.querySelector('#main-card');\r\nconst apiData = (0,_modules_loadApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n  data.forEach((movie) => {\r\n    // Get Movie Name\r\n    let imageUrl = 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg';\r\n    // Get Movie Image\r\n    if (movie.show.image) {\r\n      imageUrl = movie.show.image.medium;\r\n    }\r\n    // End Getting Movie Image    // movieTitle.insertAdjacentHTML(\"beforeend\", movie.show.name);\r\n    movieTitle.innerHTML += `\r\n    <div id=\"movie-card\">\r\n      <div id=\"movie-img\"><img src=\"${imageUrl}\" alt=\"${movie.show.name}\"> </div>\r\n      <div id=\"movie-info\">\r\n        <h2 id=\"movie-title\">${movie.show.name} <button id=\"${movie.show.id}\" class=\"like-icon\"><i id=\"${movie.show.id}\" class=\"fa-regular fa-heart\"></i></br><p id=\"${movie.show.id}\" class=\"like-p\">${(0,_modules_checkForLikes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(movie.show.id)}</p></button></h2>\r\n        <p id=\"movie-description\"></p>\r\n        <button id=\"${movie.show.id}\" class=\"movie-button\">Comment</button>\r\n      </div>\r\n    </div>`;\r\n\r\n    const likeAdd = (container) => {\r\n      const idParse = `${movie.show.id}`;\r\n      container.addEventListener('click', (event) => {\r\n        if (event.target.classList.contains('fa-regular') && event.target.id === idParse) {\r\n          (0,_modules_liked_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(movie.show.id);\r\n          const icon = event.target;\r\n          icon.classList.remove('fa-regular');\r\n          icon.classList.add('fa-solid');\r\n        }\r\n      });\r\n    };\r\n\r\n    likeAdd(movieTitle);\r\n\r\n    const linksUl = document.querySelector('.navigation');\r\n    const filmCounterLoad = () => {\r\n      linksUl.innerHTML = `            <li class=\"active\">\r\n          <a href=\"#\">Home(${(0,_modules_filmCounter_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(movieTitle)})<span id=\"totalMovies\"></span></a>\r\n        </li>\r\n        <li><a href=\"#\">Movies</a></li>\r\n        <li><a href=\"#\">TV Shows</a></li>\r\n        <li><a href=\"#\">My List</a></li>`;\r\n    };\r\n    filmCounterLoad();\r\n\r\n    const movieButtons = document.querySelectorAll('.movie-button');\r\n    movieButtons.forEach((button) => {\r\n      button.addEventListener('click', (e) => {\r\n        getMovieDetails(e.target.id).then((data) => {\r\n          const popupContainer = document.querySelector('.popup-container');\r\n          const movieName = data.name;\r\n          const movieDescription = data.summary;\r\n          let imageSrc = '';\r\n          if (data.image) {\r\n            imageSrc = data.image.medium;\r\n          }\r\n\r\n          const movieId = data.id;\r\n          popup.classList.remove('hide');\r\n\r\n          const firstPart = `\r\n  <div class=\"popup-movie-banner\">\r\n        <img\r\n          class=\"popup-movie-banner-img\"\r\n          src=\"${imageSrc}\"\r\n          alt=\"${movieName} Banner\"\r\n        />\r\n      </div>\r\n      <div class=\"popup-details\">\r\n        <div class=\"popup-title\">\r\n          <h2>${movieName}</h2>\r\n        </div>\r\n        <div class=\"popup-description\">\r\n          ${movieDescription}\r\n        </div>\r\n\r\n        <div class=\"popup-comments\">\r\n          <h2 class=\"popup-comments-title\">\r\n            Comments<span id=\"commentConter\">(<span id=\"totalComment\"></span>)</span>\r\n          </h2>\r\n          <div class=\"popup-comments-container\">\r\n            <ul class=\"comment-description\">\r\n            `;\r\n          let commentList = '';\r\n          (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(movieId).then((data) => {\r\n            const commentCount = document.querySelector('#totalComment');\r\n            commentCount.innerHTML = data.length;\r\n\r\n            data.forEach((comment) => {\r\n              commentList += `<li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>`;\r\n            });\r\n            const commentListContainer = document.querySelector(\r\n              '.comment-description',\r\n            );\r\n            commentListContainer.innerHTML = commentList;\r\n          });\r\n\r\n          const secondPart = `\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"add-comment-form\">\r\n          <h2 class=\"popup-comments-title\">\r\n            Add Comments<span id=\"addCOmment\"></span>\r\n          </h2>\r\n          <form id=\"addCommentForm\">\r\n          <input type=\"text\" placeholder=\"Your name...\" name=\"name\" />\r\n          <input type=\"hidden\" placeholder=\"Your name...\" name=\"movieId\" value=\"${movieId}\" />\r\n          <textarea\r\n              name=\"comment\"\r\n              id=\"comment\"\r\n              cols=\"30\"\r\n              rows=\"8\"\r\n              placeholder=\"Your comment...\"\r\n              name=\"comment\"\r\n            ></textarea>\r\n            <input type=\"submit\" value=\"Submit\" />\r\n          </form>\r\n        </div>\r\n      </div>`;\r\n\r\n          popupContainer.innerHTML = firstPart + commentList + secondPart;\r\n\r\n          const closeBtn = document.querySelector('#popup-close');\r\n          closeBtn.addEventListener('click', () => {\r\n            popup.classList.add('hide');\r\n          });\r\n\r\n          const addCommentForm = document.querySelector('#addCommentForm');\r\n          addCommentForm.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n            const name = e.target.name.value;\r\n            const comment = e.target.comment.value;\r\n            const movieId = e.target.movieId.value;\r\n            // console.log(name, comment, movieId);\r\n            (0,_modules_postComment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movieId, name, comment);\r\n            const d = new Date();\r\n            const commentDescription = document.querySelector(\r\n              '.comment-description',\r\n            );\r\n            const commentConter = document.querySelector('#totalComment');\r\n\r\n            const ye = new Intl.DateTimeFormat('en', {\r\n              year: 'numeric',\r\n            }).format(d);\r\n            const mo = new Intl.DateTimeFormat('en', {\r\n              month: '2-digit',\r\n            }).format(d);\r\n            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(\r\n              d,\r\n            );\r\n            commentDescription.innerHTML += `<li>${ye}-${mo}-${da} ${name}: ${comment}</li>`;\r\n            commentConter.innerHTML = Number(commentConter.innerHTML) + 1;\r\n          });\r\n        });\r\n      });\r\n    });\r\n  });\r\n});\r\nconst refreshPage = () => {\r\n  const likeBtns = document.querySelectorAll('.like-p');\r\n  likeBtns.forEach((btn) => {\r\n    const count = (0,_modules_checkForLikes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(parseInt(btn.id, 10));\r\n    btn.innerHTML = count;\r\n  });\r\n};\r\n\r\nsetInterval(refreshPage, 100);\r\napiData();\r\n\n\n//# sourceURL=webpack://webpack-config/./src/index.js?");

/***/ }),

/***/ "./src/modules/checkForLikes.js":
/*!**************************************!*\
  !*** ./src/modules/checkForLikes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst checkForLikes = (movieId) => {\r\n  const likes = JSON.parse(localStorage.getItem('likes'));\r\n  let like = 0;\r\n  likes.forEach((element) => {\r\n    if (element.item_id === movieId) {\r\n      like = element.likes;\r\n    }\r\n  });\r\n  return like;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkForLikes);\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/checkForLikes.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (movieId) => {\r\n  const response = await fetch(\r\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/comments?item_id=${movieId}`,\r\n  );\r\n  const myJson = await response.json(); // extract JSON from the http response\r\n\r\n  return myJson;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/filmCounter.js":
/*!************************************!*\
  !*** ./src/modules/filmCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst filmCounter = (cont) => {\r\n  const filmsLength = cont.childElementCount;\r\n  return filmsLength;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filmCounter);\n\n//# sourceURL=webpack://webpack-config/./src/modules/filmCounter.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async () => {\r\n  const response = await fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/likes/',\r\n  );\r\n  const myJson = await response.json(); // extract JSON from the http response\r\n  localStorage.setItem('likes', JSON.stringify(myJson));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/liked.js":
/*!******************************!*\
  !*** ./src/modules/liked.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n\r\n\r\nconst liked = async (movieId) => {\r\n  const mBody = JSON.parse(`{\"item_id\": ${movieId}}`);\r\n  const response = await fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/likes/',\r\n    {\r\n      method: 'POST',\r\n      body: JSON.stringify(mBody),\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n    },\r\n  );\r\n  await response; // extract JSON from the http response\r\n  // do something with myJson\r\n  (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (liked);\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/liked.js?");

/***/ }),

/***/ "./src/modules/loadApi.js":
/*!********************************!*\
  !*** ./src/modules/loadApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadApi = async () => {\r\n  const response = await fetch('https://api.tvmaze.com/search/shows?q=comedy');\r\n  const myJson = await response.json(); // extract JSON from the http response\r\n  return myJson;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadApi);\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/loadApi.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postComment = async (movieId, name, description) => {\r\n  const data = `{\"item_id\": \"${movieId}\", \"username\": \"${name}\", \"comment\": \"${description}\"}`;\r\n\r\n  const newData = JSON.parse(data);\r\n\r\n  const response = await fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/comments/',\r\n    {\r\n      method: 'POST',\r\n      body: JSON.stringify(newData),\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n    },\r\n  );\r\n  await response; // extract JSON from the http response\r\n  // do something with myJson\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/postComment.js?");

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