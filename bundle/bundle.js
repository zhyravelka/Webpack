/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://12/./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nReferenceError: document is not defined\\n    at Object.insertStyleElement (webpack://12/./node_modules/style-loader/dist/runtime/insertStyleElement.js?:5:17)\\n    at Object.domAPI (webpack://12/./node_modules/style-loader/dist/runtime/styleDomAPI.js?:59:30)\\n    at addElementStyle (webpack://12/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:57:21)\\n    at modulesToDom (webpack://12/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:41:21)\\n    at module.exports (webpack://12/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?:78:25)\\n    at eval (webpack://12/./src/styles.css?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js:39:120)\\n    at Object../node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/styles.css (C:\\\\Users\\\\Марінуся\\\\Desktop\\\\resume-project\\\\12\\\\node_modules\\\\style-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\Марінуся\\\\Desktop\\\\resume-project\\\\12\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\Марінуся\\\\Desktop\\\\resume-project\\\\12\\\\src\\\\styles.css:49:1)\\n    at __webpack_require__ (C:\\\\Users\\\\Марінуся\\\\Desktop\\\\resume-project\\\\12\\\\node_modules\\\\style-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\Марінуся\\\\Desktop\\\\resume-project\\\\12\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\Марінуся\\\\Desktop\\\\resume-project\\\\12\\\\src\\\\styles.css:133:41)\\n    at C:\\\\Users\\\\Марінуся\\\\Desktop\\\\resume-project\\\\12\\\\node_modules\\\\style-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\Марінуся\\\\Desktop\\\\resume-project\\\\12\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\Марінуся\\\\Desktop\\\\resume-project\\\\12\\\\src\\\\styles.css:185:37\\n    at Object.<anonymous> (C:\\\\Users\\\\Марінуся\\\\Desktop\\\\resume-project\\\\12\\\\node_modules\\\\style-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\Марінуся\\\\Desktop\\\\resume-project\\\\12\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\Марінуся\\\\Desktop\\\\resume-project\\\\12\\\\src\\\\styles.css:188:12)\");\n\n//# sourceURL=webpack://12/./src/styles.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;