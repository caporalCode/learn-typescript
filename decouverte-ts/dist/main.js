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

/***/ "./src/arme.ts":
/*!*********************!*\
  !*** ./src/arme.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.afficherPuissance = exports.Arme = void 0;\nclass Arme {\n    constructor() {\n        this.puissance = 10;\n        this.bouclier = 0;\n    }\n}\nexports.Arme = Arme;\n/**\n * Prints the power of a given weapon.\n *\n * @param {object} arme - The weapon object.\n * @param {number} arme.puissance - The power of the weapon.\n */\nfunction afficherPuissance(arme) {\n    console.log(`Puissance : ${arme.puissance}`);\n}\nexports.afficherPuissance = afficherPuissance;\n\n\n//# sourceURL=webpack://decouverte-ts/./src/arme.ts?");

/***/ }),

/***/ "./src/hobbit.ts":
/*!***********************!*\
  !*** ./src/hobbit.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Hobbit = void 0;\nclass Hobbit {\n    manger(nourriture) {\n        console.log(\"Miam Miam! \", nourriture.pointsDeVie, \"points de vie!\");\n    }\n}\nexports.Hobbit = Hobbit;\nclass Test {\n}\n\n\n//# sourceURL=webpack://decouverte-ts/./src/hobbit.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst hobbit_1 = __webpack_require__(/*! ./hobbit */ \"./src/hobbit.ts\");\nconst orc_1 = __webpack_require__(/*! ./orc */ \"./src/orc.ts\");\nconst arme_1 = __webpack_require__(/*! ./arme */ \"./src/arme.ts\");\nconst hobbit = new hobbit_1.Hobbit();\nhobbit.manger({ pointsDeVie: 10 });\nhobbit.manger({ pointsDeVie: 20 });\nlet orc = new orc_1.Orc();\nconst arme = new arme_1.Arme();\nconst arc = {\n    puissance: 10\n};\n(0, arme_1.afficherPuissance)(arme);\n(0, arme_1.afficherPuissance)(arc);\n(0, arme_1.afficherPuissance)({ puissance: 56 });\n\n\n//# sourceURL=webpack://decouverte-ts/./src/main.ts?");

/***/ }),

/***/ "./src/orc.ts":
/*!********************!*\
  !*** ./src/orc.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Orc = void 0;\nclass Orc {\n    manger() {\n        console.log(\"scrupmmff!\");\n    }\n}\nexports.Orc = Orc;\n\n\n//# sourceURL=webpack://decouverte-ts/./src/orc.ts?");

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