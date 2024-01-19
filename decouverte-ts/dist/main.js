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

/***/ "./src/domains/game.ts":
/*!*****************************!*\
  !*** ./src/domains/game.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Game = void 0;\nclass Game {\n    constructor(_player, afficher, requestString) {\n        this._player = _player;\n        this.afficher = afficher;\n        this.requestString = requestString;\n    }\n    init() {\n        const nickNameCharacter = this.requestString(\"Quel est le nom de ton personnage?\");\n        if (nickNameCharacter) {\n            this.afficher(nickNameCharacter);\n        }\n    }\n    /**\n     * Start the function.\n     *\n     * @return {void} No return value.\n     */\n    start() {\n        this.afficher(`Bienvenue ${this.player.prenom}!`);\n    }\n    get player() {\n        return this._player;\n    }\n}\nexports.Game = Game;\n\n\n//# sourceURL=webpack://decouverte-ts/./src/domains/game.ts?");

/***/ }),

/***/ "./src/domains/player.ts":
/*!*******************************!*\
  !*** ./src/domains/player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nclass Player {\n    constructor(prenom) {\n        this.prenom = prenom;\n    }\n    get prenom() {\n        return this._prenom;\n    }\n    set prenom(prenom) {\n        if (!prenom) {\n            throw new Error(\"Le prénom est obligatoire\");\n        }\n        this._prenom = prenom;\n    }\n}\nexports.Player = Player;\n\n\n//# sourceURL=webpack://decouverte-ts/./src/domains/player.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst player_1 = __webpack_require__(/*! ./domains/player */ \"./src/domains/player.ts\");\nconst game_1 = __webpack_require__(/*! ./domains/game */ \"./src/domains/game.ts\");\nconst callBack = (mess) => console.log(mess);\nconst requestString = (mess) => prompt(mess);\n// const orc = new Orc(\"orrrk\", 'MECHANT', console.log)\n// orc.manger()\n// const enemies: Enemy[] = [\n//     new Orc(\"Almator\", 'TRES_TRES_MECHANT', callBack),\n//     new Orc(\"orrccc\", 'PAS_MECHANT', (mess: any) => {\n//         callBack(mess.toUpperCase())\n//     })\n// ]\nconst pseudo = requestString(\"Quel est le votre prénom?\");\nconst player = new player_1.Player(pseudo);\nconst game = new game_1.Game(player, callBack, requestString);\ngame.init();\n\n\n//# sourceURL=webpack://decouverte-ts/./src/main.ts?");

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