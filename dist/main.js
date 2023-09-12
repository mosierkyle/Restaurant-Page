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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! dimaggios.png */ \"./src/dimaggios.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n/* header css */\n#header {\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    height: 12vh;\n    min-height: 100px;\n    gap: 2rem;\n    background-color: white;\n    color: rgb(217,160,88);\n    border-bottom: 1px solid gray;\n}\n\n#title {\n    font-size: 3rem;\n    display: flex;\n    align-items: center;\n}\n\n#tabs-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    gap: 1.5rem;\n    justify-content: center;\n}\n\n.tab {\n    font-size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab:hover {\n    cursor: pointer;\n    position: relative;\n    bottom: 2px;\n}\n\n#home {\n    text-decoration: underline;\n}\n\n/* initial page css */\n#page1 {\n    width: 100vw;\n    min-height: fit-content;\n}\n\n#hero-div {\n    width: 100vw;\n    height: 85vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n    justify-content: center;\n    align-items: center;\n    background-image: url(https://www.thrillist.com/stories/best-italian-restaurants-in-america/assets/7.webp);\n    background-size: cover;\n    background-position: center;\n    color: white;\n}\n\n#hero-div h1{\n    display: flex;\n    justify-content: center;\n}\n\n#headline-intro {\n    background-color: rgba(0,0,0,0.5);\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: end;\n    color: rgb(217,160,88);\n    font-size: 2rem;\n    grid-row: 1 / 3;\n}\n\n#headline {\n    font-size: 5rem;\n    color: white;\n    font-weight: 900;\n    background-color: rgba(0,0,0,0.5);\n    width: 100vw;\n    height: 100%;\n    display: flex;\n    align-items: start;\n    letter-spacing: .25rem;\n    grid-row: 3 / 4;\n}\n\n#hero-copy {\n    display: flex;\n    justify-content: center;\n    color: white;\n    font-size: 1.5rem;\n    font-weight: 500;\n    height: 100%;\n    background-color: rgba(0,0,0,0.5);\n    align-items: start;\n    padding-top: -1rem;\n    grid-row: 4 / 6;\n}\n\n/* about section css */\n#about {\n    display: grid;\n    grid-template: .5fr 5fr / 3fr 1fr;\n    width: 100vw;\n    column-gap: 1rem;\n    padding: 1.5rem;\n    background-color: white;\n    min-height: fit-content;\n    justify-content: center;\n}\n\n#about-header {\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    justify-content: center;\n    font-size: 3rem;\n    color: rgb(217,160,88);\n    align-items: center;\n}\n\n#about-copy-div {\n    grid-area: 2 / 1 / 3 / 2;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n}\n\n#about-image {\n    grid-area: 2 / 2 / 3 / 3;\n    background-image: url(https://www.syracuse.com/resizer/1KeIO6evBqwW6xV2xDa00W9tk3k=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/WMLJRVYVAVEW5GJP7WNXWPV3QY.jpg);\n    background-size: cover;\n    border-radius: 5px;\n    background-position: 30% 75%;\n    max-height: 600px;\n}\n\n.about-copy-header {\n    font-size: 1.5rem;\n    color: rgb(217,160,88)\n}\n\n.about-copy {\n    font-size: 1.2rem;\n    color: rgba(0,0,0,0.8)\n}\n\n/* Page 2 css */\n#page2 {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 3fr 5fr;\n}\n\n#mains-header {\n    width: 100vw;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(https://popmenucloud.com/cdn-cgi/image/width%3D2880%2Cheight%3D2880%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D20/joshbwcd/0b01a392-897d-4ed4-ac73-b91fe0989e90.jpeg);\n    background-size: cover;\n    background-position: 40% 60%;\n    max-height: 350px;\n}\n\n#mains-header-headline {\n    color: white;\n    font-size: 5rem;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0,0,0,0.5);\n}\n\n#mains-items {\n    width: 100vw;\n    height: 100%;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n}\n\n#pizzas {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: repeat(5,1fr);\n    padding: 2rem;\n}\n\n#pastas {\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-rows: repeat(5,1fr);\n    padding: 2rem;\n}\n\n.meal-div {\n    display: grid;\n    grid-template: 1fr 2fr / 5fr 1fr;\n    width: 100%;\n    max-height: 75px;\n    padding: .5rem;\n    row-gap: .25rem;\n}\n\n.meal-div-name {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    align-items: center;\n    font-size: 1.2rem;\n    font-weight: 545;\n}\n\n.meal-div-desc {\n    grid-area: 2 / 1 / 3 / 2;\n    display: flex;\n    align-items: center;\n    font-size: 0.8rem;\n    color: rgba(0,0,0,0.6);\n}\n\n.meal-div-price {\n    grid-area: 1 / 2 / 2 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: rgb(217,160,88);\n}\n\n/* contact page css  */\n#page3 {\n    width: 100vw;\n    height: 90vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#info {\n    width: 100vw;\n    height: 40vh;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-content:center;\n    align-items: center;\n    padding: 2rem;\n}\n\n\n#contact-us {\n    display: grid;\n    height: 80%;\n    justify-content: center;\n}\n\n#contact-us-header {\n    font-size: 2rem;\n    color: rgb(217,160,88);\n}\n\n#hours {\n    display: grid;\n    height: 80%;\n    justify-content: center;\n}\n\n#hours-header {\n    font-size: 2rem;\n    color:rgb(217,160,88);\n}\n\n.contact-item {\n    height: 45px;\n    width: 100%;\n    font-size: 1.2rem;\n    color:rgba(0,0,0,0.8);\n}\n\n#map {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) ;\n    width: 85vw;\n    height: 45vh;\n    background-position: center;\n    background-size: cover;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)\n/* harmony export */ });\nconst loadContactPage = () => {\n    const content = document.querySelector('#content');\n    const page3 = document.createElement('div');\n    const info = document.createElement('div');\n    const map =  document.createElement('div');\n\n    const contactUs =  document.createElement('div');\n    const constactUsHeader = document.createElement('h3');\n    const address =  document.createElement('p');\n    const telephone =  document.createElement('p');\n    const email =  document.createElement('p');\n    const hours = document.createElement('div');\n    const hoursHeader = document.createElement('h3');\n    const weekHours = document.createElement('p');\n    const saturdayHours = document.createElement('p');\n    const sundayHours = document.createElement('p');\n\n    content.appendChild(page3);\n    page3.appendChild(info);\n    page3.appendChild(map);\n    info.appendChild(contactUs);\n    info.appendChild(hours);\n    contactUs.appendChild(constactUsHeader);\n    contactUs.appendChild(address);\n    contactUs.appendChild(telephone);\n    contactUs.appendChild(email);\n    hours.appendChild(hoursHeader)\n    hours.appendChild(weekHours);\n    hours.appendChild(saturdayHours);\n    hours.appendChild(sundayHours);\n\n    page3.setAttribute('id', 'page3');\n    map.setAttribute('id', 'map');\n    info.setAttribute('id', 'info')\n    contactUs.setAttribute('id', 'contact-us')\n    hours.setAttribute('id', 'hours')\n    constactUsHeader.setAttribute('id', 'contact-us-header')\n    address.setAttribute('class', 'contact-item');\n    email.setAttribute('class', 'contact-item');\n    telephone.setAttribute('class', 'contact-item');\n    hoursHeader.setAttribute('id', 'hours-header')\n    weekHours.setAttribute('class', 'contact-item');\n    saturdayHours.setAttribute('class', 'contact-item');\n    sundayHours.setAttribute('class', 'contact-item');\n\n    constactUsHeader.textContent = \"Contact Us\";\n    hoursHeader.textContent = \"Hours\";\n    address.textContent = `44 Canal Center Plaza #200, New York, NY 22314, USA`;\n    telephone.textContent = `555.836.5245`;\n    email.textContent = `mosierkyle@gmail.com`;\n    weekHours.textContent = `WeekDays: 11:00 am - 7:00 pm`\n    saturdayHours.textContent = `Saturday: 11:00 am - 5:00 pm`\n    sundayHours.textContent = `Sunday: 1:00 pm - 5:00 pm`   \n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHeader: () => (/* binding */ loadHeader)\n/* harmony export */ });\nconst loadHeader = () => {\n    const header = document.querySelector('#header');\n\n    const title = document.createElement ('h1')\n    const tabs = document.createElement('div')\n    const home = document.createElement('p')\n    const menu = document.createElement('p')\n    const contact = document.createElement('p')\n\n    title.setAttribute('id', 'title')\n    tabs.setAttribute('id', 'tabs-container')\n    home.setAttribute('class', 'tab')\n    home.setAttribute('id', 'home')\n    menu.setAttribute('class', 'tab')\n    menu.setAttribute('id', 'menu')\n    contact.setAttribute('class', 'tab')\n    contact.setAttribute('id', 'contact')\n\n    title.textContent = `Dimaggio's`\n    home.textContent = `Home`\n    menu.textContent = `Menu`\n    contact.textContent = `Contact`\n\n    tabs.appendChild(home)\n    tabs.appendChild(menu)\n    tabs.appendChild(contact)\n    header.appendChild(title)\n    header.appendChild(tabs)\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-page */ \"./src/initial-page.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();\n(0,_initial_page__WEBPACK_IMPORTED_MODULE_1__.loadInitialPage)()\n\nconst content = document.querySelector('#content');\nconst home = document.querySelector('#home');\nconst menu = document.querySelector('#menu');\nconst contact = document.querySelector('#contact');\n\nconst clearPage = () => {\n    while(content.firstChild){\n        content.removeChild(content.firstChild);\n    }\n}\n\nhome.addEventListener('click', () => displayPage(home));\nmenu.addEventListener('click', () => displayPage(menu));\ncontact.addEventListener('click', () => displayPage(contact));\n\nconst displayPage = (page) => {\n    clearPage()\n    home.style.textDecoration = 'none'\n    menu.style.textDecoration = 'none'\n    contact.style.textDecoration = 'none'\n    if(page == home) {\n        (0,_initial_page__WEBPACK_IMPORTED_MODULE_1__.loadInitialPage)()\n        home.style.textDecoration = 'underline'\n    } else if (page == menu) {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)()\n        menu.style.textDecoration = 'underline'\n    } else if (page == contact) {\n        (0,_contact__WEBPACK_IMPORTED_MODULE_4__.loadContactPage)()\n        contact.style.textDecoration = 'underline'\n    }\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadInitialPage: () => (/* binding */ loadInitialPage)\n/* harmony export */ });\nconst loadInitialPage = () => {\n    const content = document.querySelector('#content');\n    const page1 = document.createElement('div');\n    \n    const heroDiv = document.createElement('div');\n    const headline = document.createElement('h1');\n    const headlineIntro = document.createElement('p');\n    const heroCopy = document.createElement('p');\n    \n    const about = document.createElement('div');\n    const aboutHeader = document.createElement('h1');\n    const aboutCopyDiv = document.createElement('div');\n    const aboutCopyHeader1 = document.createElement('h6');\n    const aboutCopyHeader2 = document.createElement('h6');\n    const aboutCopyHeader3 = document.createElement('h6');\n    const aboutCopyHeader4 = document.createElement('h6');\n    const aboutCopy1 = document.createElement('p')\n    const aboutCopy2 = document.createElement('p')\n    const aboutCopy3 = document.createElement('p')\n    const aboutCopy4 = document.createElement('p')\n    const aboutImage = document.createElement('div');\n\n    about.setAttribute('id', 'about');\n    aboutHeader.setAttribute('id', 'about-header')\n    aboutCopyDiv.setAttribute('id', 'about-copy-div');\n    aboutCopyHeader1.setAttribute('class', 'about-copy-header')\n    aboutCopyHeader2.setAttribute('class', 'about-copy-header')\n    aboutCopyHeader3.setAttribute('class', 'about-copy-header')\n    aboutCopyHeader4.setAttribute('class', 'about-copy-header')\n    aboutCopy1.setAttribute('class', 'about-copy')\n    aboutCopy2.setAttribute('class', 'about-copy')\n    aboutCopy3.setAttribute('class', 'about-copy')\n    aboutCopy4.setAttribute('class', 'about-copy')\n    aboutImage.setAttribute('id', 'about-image')\n\n    page1.setAttribute('id', 'page1');\n    heroDiv.setAttribute('id', 'hero-div')\n    headline.setAttribute('id', 'headline')\n    headlineIntro.setAttribute('id', 'headline-intro')\n    heroCopy.setAttribute('id', 'hero-copy')\n    \n    headlineIntro.textContent = `Welcome to`\n    headline.textContent = `Little Sicily`\n    heroCopy.textContent = `We're not Italian... We're Sicilian`\n    \n    aboutHeader.textContent = `About`\n    \n    aboutCopyHeader1.textContent = `About Us`\n    aboutCopyHeader2.textContent = `Our Story`\n    aboutCopyHeader3.textContent = `Sicilian Culinary Heritage`\n    aboutCopyHeader4.textContent = `Our Menu`\n    aboutCopy1.textContent =  `Welcome to Dimaggio's, your passport to an authentic Sicilian culinary journey in the heart of New York. Nestled in the vibrant Italian food scene of our city, we take immense pride in bringing the rich flavors and warm hospitality of Sicily to your table.`\n    aboutCopy2.textContent =  `At Dimaggio's, our story is rooted in a deep love for the traditions of Italian cuisine, particularly the bold and flavorful dishes of Sicily. Our journey began with a passionate chef's dream to share the authentic tastes of his homeland with the world. From our humble beginnings as a family-run trattoria, we've grown into a beloved restaurant, cherished by locals and sought after by those who appreciate genuine Italian fare.`\n    aboutCopy3.textContent =  `Sicilian cuisine is a tantalizing fusion of Mediterranean flavors, influenced by centuries of diverse cultural influences, from Greek and Roman to Arab and Norman. Our kitchen pays homage to these historical connections while crafting dishes that showcase the island's distinctive ingredients. From the citrus groves of Catania to the seafood-rich waters of the Mediterranean, each ingredient is carefully selected to bring a piece of Sicily to your plate.`\n    aboutCopy4.textContent =  `Prepare your taste buds for an unforgettable journey through our menu. Our chefs artfully prepare dishes that capture the essence of Sicilian cuisine, with an emphasis on freshness and quality. From the classic arancini and pasta alla norma to our mouthwatering seafood creations and delectable cannoli for dessert, every dish is a tribute to the flavors of Sicily.`\n\n    content.appendChild(page1);\n    page1.appendChild(heroDiv);\n    heroDiv.appendChild(headlineIntro)\n    heroDiv.appendChild(headline);\n    heroDiv.appendChild(heroCopy);\n    page1.appendChild(about);\n    about.appendChild(aboutHeader)\n    about.appendChild(aboutCopyDiv)\n    about.appendChild(aboutImage)\n    aboutCopyDiv.appendChild(aboutCopyHeader1)\n    aboutCopyDiv.appendChild(aboutCopy1)\n    aboutCopyDiv.appendChild(aboutCopyHeader2)\n    aboutCopyDiv.appendChild(aboutCopy2)\n    aboutCopyDiv.appendChild(aboutCopyHeader3)\n    aboutCopyDiv.appendChild(aboutCopy3)\n    aboutCopyDiv.appendChild(aboutCopyHeader4)\n    aboutCopyDiv.appendChild(aboutCopy4)\n    \n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/initial-page.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nconst loadMenuPage = () => {\n    const content = document.querySelector('#content');\n    const page2 = document.createElement('div');\n    const mains = document.createElement('div');\n    const mainsHeader = document.createElement('div');\n    const mainsHeaderHeadline = document.createElement('h1');\n    const mainsItems = document.createElement('div')\n    const pizzas = document.createElement('div')\n    const pastas = document.createElement('div')\n\n    mains.setAttribute('id', 'mains');\n    mainsHeader.setAttribute('id', 'mains-header');\n    mainsHeaderHeadline.setAttribute('id', 'mains-header-headline');\n    mainsItems.setAttribute('id', 'mains-items');\n    page2.setAttribute('id', 'page2')\n    pastas.setAttribute('id', 'pastas')\n    pizzas.setAttribute('id', 'pizzas')\n\n    mainsHeaderHeadline.textContent = 'MERENDA'\n\n    content.appendChild(page2);\n    page2.appendChild(mains);\n    mains.appendChild(mainsHeader);\n    mainsHeader.appendChild(mainsHeaderHeadline)\n    mains.appendChild(mainsItems);\n    mainsItems.appendChild(pizzas);\n    mainsItems.appendChild(pastas);\n\n    //pizzas \n\n    //meal 1\n    const mealDiv1 = document.createElement('div');\n    const mealDivName1 = document.createElement('p')\n    const mealDivDesc1 = document.createElement('p')\n    const mealDivPrice1 = document.createElement('p')\n\n    mealDiv1.setAttribute('class', 'meal-div')\n    mealDivName1.setAttribute('class', 'meal-div-name')\n    mealDivDesc1.setAttribute('class', 'meal-div-desc')\n    mealDivPrice1.setAttribute('class', 'meal-div-price')\n\n    mealDivName1.textContent = `Suspendisse`\n    mealDivDesc1.textContent = `Mozzarella, garlic-infused olive oil & our authentic pizza sauce`\n    mealDivPrice1.textContent = `19.99`\n\n    pizzas.appendChild(mealDiv1);\n    mealDiv1.appendChild(mealDivName1)\n    mealDiv1.appendChild(mealDivDesc1)\n    mealDiv1.appendChild(mealDivPrice1)\n\n    //meal 2\n    const mealDiv2 = document.createElement('div');\n    const mealDivName2 = document.createElement('p')\n    const mealDivDesc2 = document.createElement('p')\n    const mealDivPrice2 = document.createElement('p')\n\n    mealDiv2.setAttribute('class', 'meal-div')\n    mealDivName2.setAttribute('class', 'meal-div-name')\n    mealDivDesc2.setAttribute('class', 'meal-div-desc')\n    mealDivPrice2.setAttribute('class', 'meal-div-price')\n\n    mealDivName2.textContent = `Pizza con Formaggio`\n    mealDivDesc2.textContent = `Large slices of pepperoni, mozzarella, provolone & our authentic pizza sauce`\n    mealDivPrice2.textContent = `19.99`\n\n    pizzas.appendChild(mealDiv2);\n    mealDiv2.appendChild(mealDivName2)\n    mealDiv2.appendChild(mealDivDesc2)\n    mealDiv2.appendChild(mealDivPrice2)\n\n    //meal 3\n    const mealDiv3 = document.createElement('div');\n    const mealDivName3 = document.createElement('p')\n    const mealDivDesc3 = document.createElement('p')\n    const mealDivPrice3 = document.createElement('p')\n\n    mealDiv3.setAttribute('class', 'meal-div')\n    mealDivName3.setAttribute('class', 'meal-div-name')\n    mealDivDesc3.setAttribute('class', 'meal-div-desc')\n    mealDivPrice3.setAttribute('class', 'meal-div-price')\n\n    mealDivName3.textContent = `Margherita`\n    mealDivDesc3.textContent = `fresh mozzarella, fresh basil & our authentic pizza sauce`\n    mealDivPrice3.textContent = `19.99`\n\n    pizzas.appendChild(mealDiv3);\n    mealDiv3.appendChild(mealDivName3)\n    mealDiv3.appendChild(mealDivDesc3)\n    mealDiv3.appendChild(mealDivPrice3)\n\n    //meal 4\n    const mealDiv4 = document.createElement('div');\n    const mealDivName4 = document.createElement('p')\n    const mealDivDesc4 = document.createElement('p')\n    const mealDivPrice4 = document.createElement('p')\n\n    mealDiv4.setAttribute('class', 'meal-div')\n    mealDivName4.setAttribute('class', 'meal-div-name')\n    mealDivDesc4.setAttribute('class', 'meal-div-desc')\n    mealDivPrice4.setAttribute('class', 'meal-div-price')\n\n    mealDivName4.textContent = `Spicy Arrabbiata`\n    mealDivDesc4.textContent = `spicy Italian sausage, pepperoni, caramelized red onions, Gorgonzola, mozzarella, provolone & our authentic pizza sauce`\n    mealDivPrice4.textContent = `19.99`\n\n    pizzas.appendChild(mealDiv4);\n    mealDiv4.appendChild(mealDivName4)\n    mealDiv4.appendChild(mealDivDesc4)\n    mealDiv4.appendChild(mealDivPrice4)\n\n    //meal 2\n    const mealDiv5 = document.createElement('div');\n    const mealDivName5 = document.createElement('p')\n    const mealDivDesc5 = document.createElement('p')\n    const mealDivPrice5 = document.createElement('p')\n\n    mealDiv5.setAttribute('class', 'meal-div')\n    mealDivName5.setAttribute('class', 'meal-div-name')\n    mealDivDesc5.setAttribute('class', 'meal-div-desc')\n    mealDivPrice5.setAttribute('class', 'meal-div-price')\n\n    mealDivName5.textContent = `Meatball Rollato`\n    mealDivDesc5.textContent = `sliced famous meatballs, pepperoni, spinach, ricotta, mozzarella, provolone & our authentic marinara on the side`\n    mealDivPrice5.textContent = `19.99`\n\n    pizzas.appendChild(mealDiv5);\n    mealDiv5.appendChild(mealDivName5)\n    mealDiv5.appendChild(mealDivDesc5)\n    mealDiv5.appendChild(mealDivPrice5)\n    //pastas\n\n    //meal6\n    const mealDiv6 = document.createElement('div');\n    const mealDivName6 = document.createElement('p')\n    const mealDivDesc6 = document.createElement('p')\n    const mealDivPrice6 = document.createElement('p')\n\n    mealDiv6.setAttribute('class', 'meal-div')\n    mealDivName6.setAttribute('class', 'meal-div-name')\n    mealDivDesc6.setAttribute('class', 'meal-div-desc')\n    mealDivPrice6.setAttribute('class', 'meal-div-price')\n\n    mealDivName6.textContent = `Quattro al Forno`\n    mealDivDesc6.textContent = `Cheese Manicotti, Chicken Cannelloni, Cheese Ravioli & Stuffed Shells`\n    mealDivPrice6.textContent = `19.99`\n\n    pastas.appendChild(mealDiv6);\n    mealDiv6.appendChild(mealDivName6)\n    mealDiv6.appendChild(mealDivDesc6)\n    mealDiv6.appendChild(mealDivPrice6)\n\n    //meal 7\n    const mealDiv7 = document.createElement('div');\n    const mealDivName7 = document.createElement('p')\n    const mealDivDesc7 = document.createElement('p')\n    const mealDivPrice7 = document.createElement('p')\n\n    mealDiv7.setAttribute('class', 'meal-div')\n    mealDivName7.setAttribute('class', 'meal-div-name')\n    mealDivDesc7.setAttribute('class', 'meal-div-desc')\n    mealDivPrice7.setAttribute('class', 'meal-div-price')\n\n    mealDivName7.textContent = `Chicken Cannelloni`\n    mealDivDesc7.textContent = `Spinach pasta tubes filled with chicken, ricotta & mozzarella with rosa sauce`\n    mealDivPrice7.textContent = `19.99`\n\n    pastas.appendChild(mealDiv7);\n    mealDiv7.appendChild(mealDivName7)\n    mealDiv7.appendChild(mealDivDesc7)\n    mealDiv7.appendChild(mealDivPrice7)\n\n    //meal 8\n    const mealDiv8 = document.createElement('div');\n    const mealDivName8 = document.createElement('p')\n    const mealDivDesc8 = document.createElement('p')\n    const mealDivPrice8 = document.createElement('p')\n\n    mealDiv8.setAttribute('class', 'meal-div')\n    mealDivName8.setAttribute('class', 'meal-div-name')\n    mealDivDesc8.setAttribute('class', 'meal-div-desc')\n    mealDivPrice8.setAttribute('class', 'meal-div-price')\n\n    mealDivName8.textContent = `Ravioli with Meat Sauce`\n    mealDivDesc8.textContent = `Cheese-filled ravioli with our savory meat sauce`\n    mealDivPrice8.textContent = `19.99`\n\n    pastas.appendChild(mealDiv8);\n    mealDiv8.appendChild(mealDivName8)\n    mealDiv8.appendChild(mealDivDesc8)\n    mealDiv8.appendChild(mealDivPrice8)\n\n    //meal 9\n    const mealDiv9 = document.createElement('div');\n    const mealDivName9 = document.createElement('p')\n    const mealDivDesc9 = document.createElement('p')\n    const mealDivPrice9 = document.createElement('p')\n\n    mealDiv9.setAttribute('class', 'meal-div')\n    mealDivName9.setAttribute('class', 'meal-div-name')\n    mealDivDesc9.setAttribute('class', 'meal-div-desc')\n    mealDivPrice9.setAttribute('class', 'meal-div-price')\n\n    mealDivName9.textContent = `Penne Basilica`\n    mealDivDesc9.textContent = `Chicken breast, broccoli, Parmesan & pesto cream sauce`\n    mealDivPrice9.textContent = `19.99`\n\n    pastas.appendChild(mealDiv9);\n    mealDiv9.appendChild(mealDivName9)\n    mealDiv9.appendChild(mealDivDesc9)\n    mealDiv9.appendChild(mealDivPrice9)\n\n    //meal 10\n    const mealDiv10 = document.createElement('div');\n    const mealDivName10 = document.createElement('p')\n    const mealDivDesc10 = document.createElement('p')\n    const mealDivPrice10 = document.createElement('p')\n\n    mealDiv10.setAttribute('class', 'meal-div')\n    mealDivName10.setAttribute('class', 'meal-div-name')\n    mealDivDesc10.setAttribute('class', 'meal-div-desc')\n    mealDivPrice10.setAttribute('class', 'meal-div-price')\n\n    mealDivName10.textContent = `Shrimp Fra Diavolo`\n    mealDivDesc10.textContent = `Chicken breast, artichoke hearts, sun-dried tomatoes & peas in white wine cream sauce`\n    mealDivPrice10.textContent = `19.99`\n\n    pastas.appendChild(mealDiv10);\n    mealDiv10.appendChild(mealDivName10)\n    mealDiv10.appendChild(mealDivDesc10)\n    mealDiv10.appendChild(mealDivPrice10)\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/dimaggios.png":
/*!***************************!*\
  !*** ./src/dimaggios.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"211bcaed49a13574958e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/dimaggios.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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