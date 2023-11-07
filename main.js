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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoaders_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoaders/home.js */ \"./src/pageLoaders/home.js\");\n/* harmony import */ var _pageLoaders_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoaders/menu.js */ \"./src/pageLoaders/menu.js\");\n/* harmony import */ var _pageLoaders_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageLoaders/contact.js */ \"./src/pageLoaders/contact.js\");\n/* harmony import */ var _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageLoaders/template.js */ \"./src/pageLoaders/template.js\");\nconsole.log('start of the project');\r\n\r\n\r\n\r\n\r\n\r\n\r\n(function initialLoad() {\r\n\r\n    console.log('initialLoad started');\r\n    _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].page.replaceChildren(_pageLoaders_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].homeTabE.classList.add('selected');\r\n\r\n    _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].homeTabE.addEventListener('click', function () {\r\n        _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].page.replaceChildren(_pageLoaders_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n        _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].homeTabE.classList.add('selected');\r\n        _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aboutTabE.classList.remove('selected');\r\n        _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].contactTabE.classList.remove('selected');\r\n    });\r\n\r\n    _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aboutTabE.addEventListener('click', function () {\r\n        _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].page.replaceChildren(_pageLoaders_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n        _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aboutTabE.classList.add('selected');\r\n        _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].homeTabE.classList.remove('selected');\r\n        _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].contactTabE.classList.remove('selected');\r\n    });\r\n\r\n\r\n    _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].contactTabE.addEventListener('click', function () {\r\n        _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].page.replaceChildren(_pageLoaders_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n        _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].contactTabE.classList.add('selected');\r\n        _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].homeTabE.classList.remove('selected');\r\n        _pageLoaders_template_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aboutTabE.classList.remove('selected');\r\n    });\r\n\r\n    console.log('initialLoad ended');\r\n})();\r\n\r\nconsole.log('end of the project');\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/pageLoaders/contact.js":
/*!************************************!*\
  !*** ./src/pageLoaders/contact.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function contactPage() {\r\n    let container = document.createElement('div');\r\n    container.id = 'contact';\r\n\r\n    let header1 = document.createElement('h1');\r\n    header1.textContent = `\r\n    This is the Contact Page\r\n    `;\r\n    header1.classList.add('header-1');\r\n\r\n    let para1 = document.createElement('p');\r\n    para1.textContent = `\r\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis laudantium eius rerum impedit. Fuga dolorem asperiores voluptate quibusdam pariatur sed ipsam deserunt. Ea sit pariatur rerum, nisi recusandae iure.\r\n    `;\r\n    para1.classList.add('para-1');\r\n\r\n    container.appendChild(header1);\r\n    container.appendChild(para1);\r\n    return container;\r\n})());\n\n//# sourceURL=webpack://restaurantpage/./src/pageLoaders/contact.js?");

/***/ }),

/***/ "./src/pageLoaders/home.js":
/*!*********************************!*\
  !*** ./src/pageLoaders/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function homePage() {\r\n    let container = document.createElement('div');\r\n    container.id = 'home';\r\n\r\n    let header1 = document.createElement('h1');\r\n    header1.textContent = `\r\n    This is the Home Page\r\n    `;\r\n    header1.classList.add('header-1');\r\n\r\n    let para1 = document.createElement('p');\r\n    para1.textContent = `\r\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perspiciatis laudantium eius rerum impedit. Fuga dolorem asperiores voluptate quibusdam pariatur sed ipsam deserunt. Ea sit pariatur rerum, nisi recusandae iure.\r\n    `;\r\n    para1.classList.add('para-1');\r\n\r\n    container.appendChild(header1);\r\n    container.appendChild(para1);\r\n    return container;\r\n})());\n\n//# sourceURL=webpack://restaurantpage/./src/pageLoaders/home.js?");

/***/ }),

/***/ "./src/pageLoaders/menu.js":
/*!*********************************!*\
  !*** ./src/pageLoaders/menu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function menuPage() {\r\n\r\n    function menuItem(src, name, describtion , width , height) {\r\n        let card = document.createElement('div');\r\n        card.classList.add('card');\r\n\r\n        let title = document.createElement('h1');\r\n        title.textContent = name;\r\n        title.classList.add('name');\r\n        card.appendChild(title);\r\n\r\n        let image = new Image();\r\n        image.src = `../../dist/images/${src}`;\r\n        image.width = width;\r\n        image.height = height;\r\n        card.appendChild(image);\r\n\r\n        let itemDescribtion = document.createElement('p');\r\n        itemDescribtion.textContent = describtion;\r\n        card.appendChild(itemDescribtion);\r\n\r\n        return card;\r\n    }\r\n\r\n    let container = document.createElement('div');\r\n    container.id = 'menu';\r\n\r\n    let header1 = document.createElement('h1');\r\n    header1.textContent = `\r\n    The Menu\r\n    `;\r\n    header1.classList.add('header-1');\r\n    container.appendChild(header1);\r\n\r\n    let para1 = document.createElement('p');\r\n    para1.textContent = `\r\n    Enjoy our wide selection on the best italian food in italy made with all the love for you\r\n    `;\r\n    para1.classList.add('para-1');\r\n    container.appendChild(para1);\r\n\r\n    let menuList = document.createElement('div');\r\n    menuList.classList.add('menu-list');\r\n    container.appendChild(menuList);\r\n\r\n    let pastaImage1 = menuItem('pasta1.jpg','The best Pasta','This is the best Pasta in italy',500,500);\r\n    menuList.appendChild(pastaImage1);\r\n\r\n    let pizzaImage1 = menuItem('pizza1.jpg', 'The best Pizza', 'This is the best Pasta in italy', 500, 500);\r\n    menuList.appendChild(pizzaImage1);\r\n\r\n    return container;\r\n})());\n\n//# sourceURL=webpack://restaurantpage/./src/pageLoaders/menu.js?");

/***/ }),

/***/ "./src/pageLoaders/template.js":
/*!*************************************!*\
  !*** ./src/pageLoaders/template.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function Template() {\r\n\r\n    let container = document.querySelector(\"#content\");\r\n\r\n    let header = document.createElement('h1');\r\n    header.classList.add('main-header');\r\n    header.textContent = 'The best Italian restaurant ever';\r\n\r\n    let page = document.createElement('div');\r\n    page.classList.add('page');\r\n\r\n    let tabsE = document.createElement('div');\r\n    tabsE.classList.add('tabs');\r\n\r\n    let homeTabE = document.createElement('button');\r\n    homeTabE.classList.add('home');\r\n    homeTabE.textContent = 'home';\r\n\r\n\r\n    let aboutTabE = document.createElement('button');\r\n    aboutTabE.classList.add('menu');\r\n    aboutTabE.textContent = 'menu';\r\n\r\n    let contactTabE = document.createElement('button');\r\n    contactTabE.classList.add('contact');\r\n    contactTabE.textContent = 'contact';\r\n\r\n    tabsE.appendChild(homeTabE);\r\n    tabsE.appendChild(aboutTabE);\r\n    tabsE.appendChild(contactTabE);\r\n    container.appendChild(header);\r\n    container.appendChild(tabsE);\r\n    container.appendChild(page);\r\n\r\n    return {homeTabE,aboutTabE,contactTabE,page}\r\n})());\n\n//# sourceURL=webpack://restaurantpage/./src/pageLoaders/template.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;