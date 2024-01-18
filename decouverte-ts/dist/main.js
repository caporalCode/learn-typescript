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

/***/ "./src/character.ts":
/*!**************************!*\
  !*** ./src/character.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Character = void 0;\nclass Character {\n    constructor(_name) {\n        this._name = _name;\n    }\n    get name() {\n        return this._name;\n    }\n    set name(name) {\n        if (!name) {\n            throw new Error(\"Le nom est obligatoire\");\n        }\n        this._name = name;\n    }\n}\nexports.Character = Character;\n\n\n//# sourceURL=webpack://decouverte-ts/./src/character.ts?");

/***/ }),

/***/ "./src/enemy.ts":
/*!**********************!*\
  !*** ./src/enemy.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Enemy = void 0;\nconst character_1 = __webpack_require__(/*! ./character */ \"./src/character.ts\");\nclass Enemy extends character_1.Character {\n    constructor(name, evilLevel = 'MECHANT') {\n        super(name);\n        this.evilLevel = evilLevel;\n    }\n}\nexports.Enemy = Enemy;\n\n\n//# sourceURL=webpack://decouverte-ts/./src/enemy.ts?");

/***/ }),

/***/ "./src/hobbit.ts":
/*!***********************!*\
  !*** ./src/hobbit.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Hobbit = void 0;\nconst character_1 = __webpack_require__(/*! ./character */ \"./src/character.ts\");\nclass Hobbit extends character_1.Character {\n    manger(nourriture) {\n        console.log(\"Miam Miam! \", nourriture.pointsDeVie, \"points de vie!\");\n    }\n}\nexports.Hobbit = Hobbit;\nclass Test {\n}\n\n\n//# sourceURL=webpack://decouverte-ts/./src/hobbit.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst hobbit_1 = __webpack_require__(/*! ./hobbit */ \"./src/hobbit.ts\");\nconst orc_1 = __webpack_require__(/*! ./orc */ \"./src/orc.ts\");\nconst hobbit = new hobbit_1.Hobbit('Rivaland');\nhobbit.manger({ pointsDeVie: 10 });\nhobbit.manger({ pointsDeVie: 20 });\nlet orc = new orc_1.Orc(\"Almator\", 'TRES_TRES_MECHANT');\n\n\n//# sourceURL=webpack://decouverte-ts/./src/main.ts?");

/***/ }),

/***/ "./src/orc.ts":
/*!********************!*\
  !*** ./src/orc.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Orc = void 0;\nconst enemy_1 = __webpack_require__(/*! ./enemy */ \"./src/enemy.ts\");\nclass Orc extends enemy_1.Enemy {\n    manger() {\n        console.log(\"scrupmmff!\");\n    }\n}\nexports.Orc = Orc;\n\n\n//# sourceURL=webpack://decouverte-ts/./src/orc.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;