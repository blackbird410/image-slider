/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900);"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bgColor: #222327;\n  --arrowWidth: min(15%, 50px);\n}\n\n* {\n  font-family: "Poppins", sans-serif;\n}\n\nbody {\n  margin: 0;\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--bgColor);\n  height: calc(100vh - 2rem);\n}\n\n.slider-wrapper {\n  display: grid;\n  grid-template-rows: 1fr 30px;\n  grid-template-columns: var(--arrowWidth) 1fr var(--arrowWidth);\n  gap: 1rem;\n  width: min(95%, 600px);\n  align-self: stretch;\n}\n\n.slider-wrapper > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.slider-wrapper > .image-wrapper {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: background 4500ms ease;\n}\n\nion-icon {\n  font-size: 2.5rem;\n  color: orange;\n}\n\n.nav-circles-wrapper {\n  grid-column: 1 / -1;\n  gap: 0.5rem;\n}\n\n.nav-circle,\n.arrow {\n  opacity: 0.4;\n}\n\ndiv.active {\n  opacity: 1;\n}\n\n.nav-circle {\n  border-radius: 50%;\n  background: white;\n  padding: 0.3rem;\n}\n\n.nav-circle.active {\n  background: orange;\n}\n\n.arrow {\n  align-self: center;\n}\n\n.arrow.active:hover {\n  opacity: 0.7;\n}\n`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Image_slider/./src/style.css?./node_modules/css-loader/dist/cjs.js',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Image_slider/./node_modules/css-loader/dist/runtime/api.js?',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Image_slider/./node_modules/css-loader/dist/runtime/noSourceMaps.js?",
        );

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://Image_slider/./src/style.css?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Image_slider/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Image_slider/./node_modules/style-loader/dist/runtime/insertBySelector.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Image_slider/./node_modules/style-loader/dist/runtime/insertStyleElement.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Image_slider/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Image_slider/./node_modules/style-loader/dist/runtime/styleDomAPI.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Image_slider/./node_modules/style-loader/dist/runtime/styleTagTransform.js?",
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");\n/* harmony import */ var _img_albert_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/albert.jpg */ "./src/img/albert.jpg");\n/* harmony import */ var _img_tim_toomey_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/tim-toomey.jpg */ "./src/img/tim-toomey.jpg");\n/* harmony import */ var _img_davey_gravy_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/davey-gravy.jpg */ "./src/img/davey-gravy.jpg");\n/* harmony import */ var _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/amadeo-valar.jpg */ "./src/img/amadeo-valar.jpg");\n/* harmony import */ var _img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/clark-douglas.jpg */ "./src/img/clark-douglas.jpg");\n/* harmony import */ var _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/lee-myungseong.jpg */ "./src/img/lee-myungseong.jpg");\n/* harmony import */ var _img_the_storyteller_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/the-storyteller.jpg */ "./src/img/the-storyteller.jpg");\n/* harmony import */ var _img_pablo_merchan_montes_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/pablo-merchan-montes.jpg */ "./src/img/pablo-merchan-montes.jpg");\n/* harmony import */ var _img_alexandru_bogdan_ghita_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/alexandru-bogdan-ghita.jpg */ "./src/img/alexandru-bogdan-ghita.jpg");\n/* harmony import */ var _img_eugene_Xk0jQPZseMk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/eugene-Xk0jQPZseMk-unsplash.jpg */ "./src/img/eugene-Xk0jQPZseMk-unsplash.jpg");\n/* harmony import */ var _img_faisal_BS4Zeq7xDRk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/faisal-BS4Zeq7xDRk-unsplash.jpg */ "./src/img/faisal-BS4Zeq7xDRk-unsplash.jpg");\n/* harmony import */ var _img_casey_lee_awj7sRviVXo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/casey-lee-awj7sRviVXo-unsplash.jpg */ "./src/img/casey-lee-awj7sRviVXo-unsplash.jpg");\n/* harmony import */ var _img_jenn_kosar_jrWoDRmhwRY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/jenn-kosar-jrWoDRmhwRY-unsplash.jpg */ "./src/img/jenn-kosar-jrWoDRmhwRY-unsplash.jpg");\n/* harmony import */ var _img_spencer_davis_5dsZnCVDHd0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/spencer-davis-5dsZnCVDHd0-unsplash.jpg */ "./src/img/spencer-davis-5dsZnCVDHd0-unsplash.jpg");\n/* harmony import */ var _img_jonathan_borba_Gkc_xM3VY34_unsplash_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/jonathan-borba-Gkc_xM3VY34-unsplash.jpg */ "./src/img/jonathan-borba-Gkc_xM3VY34-unsplash.jpg");\n/* harmony import */ var _img_jay_wennington_N_Y88TWmGwA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/jay-wennington-N_Y88TWmGwA-unsplash.jpg */ "./src/img/jay-wennington-N_Y88TWmGwA-unsplash.jpg");\n/* harmony import */ var _img_mgg_vitchakorn_DDn9I5V1ubE_unsplash_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/mgg-vitchakorn-DDn9I5V1ubE-unsplash.jpg */ "./src/img/mgg-vitchakorn-DDn9I5V1ubE-unsplash.jpg");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst displayMain = () => {\n  const wrapper = document.createElement("div");\n  const imageWrapper = document.createElement("div");\n  const arrowLeftWrapper = document.createElement("div");\n  const arrowRightWrapper = document.createElement("div");\n  const navCircles = document.createElement("div");\n  const arrowLeft = document.createElement("ion-icon");\n  const arrowRight = document.createElement("ion-icon");\n\n  wrapper.classList.add("slider-wrapper");\n  imageWrapper.classList.add("image-wrapper");\n  arrowLeftWrapper.classList.add("arrow", "previous");\n  arrowRightWrapper.classList.add("arrow", "next", "active");\n  navCircles.classList.add("nav-circles-wrapper");\n  arrowLeft.setAttribute("name", "arrow-back-circle-outline");\n  arrowRight.setAttribute("name", "arrow-forward-circle-outline");\n\n  arrowLeftWrapper.appendChild(arrowLeft);\n  arrowRightWrapper.appendChild(arrowRight);\n\n  arrowLeftWrapper.addEventListener("click", previousImage);\n  arrowRightWrapper.addEventListener("click", nextImage);\n\n  imageWrapper.style.backgroundImage = `url(${_img_albert_jpg__WEBPACK_IMPORTED_MODULE_1__})`;\n\n  for (let i = 0; i < imageList.length; i += 1) {\n    const circle = document.createElement("div");\n    circle.classList.add("nav-circle");\n    circle.id = `circle-${i + 1}`;\n    if (!i) circle.classList.add("active");\n    circle.addEventListener("click", (e) => {\n      const target = e.currentTarget.id.split("-")[1];\n      imageIndex = target - 1;\n      updateImage();\n    });\n\n    navCircles.appendChild(circle);\n  }\n\n  wrapper.appendChild(arrowLeftWrapper);\n  wrapper.appendChild(imageWrapper);\n  wrapper.appendChild(arrowRightWrapper);\n  wrapper.appendChild(navCircles);\n  document.body.appendChild(wrapper);\n};\n\nconst updateImage = () => {\n  document.querySelector(".image-wrapper").style.backgroundImage =\n    `url(${imageList[imageIndex]})`;\n\n  const previousArrow = document.querySelector(".arrow.previous");\n  const nextArrow = document.querySelector(".arrow.next");\n\n  if (imageIndex > 0) previousArrow.classList.add("active");\n  else previousArrow.classList.remove("active");\n\n  if (imageIndex < imageList.length - 1) nextArrow.classList.add("active");\n  else nextArrow.classList.remove("active");\n\n  updateIndicator();\n};\n\nconst updateIndicator = () => {\n  const circles = document.querySelectorAll(".nav-circle");\n  Array.from(circles).forEach((circle) => {\n    circle.classList.remove("active");\n  });\n\n  document\n    .querySelector(`.nav-circle:nth-of-type(${imageIndex + 1})`)\n    .classList.add("active");\n};\n\nconst previousImage = (e) => {\n  if (e.currentTarget.classList.contains("active")) {\n    imageIndex -= 1;\n    updateImage();\n  }\n};\n\nconst nextImage = (e) => {\n  if (e.currentTarget.classList.contains("active")) {\n    imageIndex += 1;\n    updateImage();\n  }\n};\n\nconst imageList = [\n  _img_albert_jpg__WEBPACK_IMPORTED_MODULE_1__,\n  _img_tim_toomey_jpg__WEBPACK_IMPORTED_MODULE_2__,\n  _img_davey_gravy_jpg__WEBPACK_IMPORTED_MODULE_3__,\n  _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_4__,\n  _img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_5__,\n  _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_6__,\n  _img_the_storyteller_jpg__WEBPACK_IMPORTED_MODULE_7__,\n  _img_pablo_merchan_montes_jpg__WEBPACK_IMPORTED_MODULE_8__,\n  _img_alexandru_bogdan_ghita_jpg__WEBPACK_IMPORTED_MODULE_9__,\n  _img_eugene_Xk0jQPZseMk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_10__,\n  _img_faisal_BS4Zeq7xDRk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_11__,\n  _img_casey_lee_awj7sRviVXo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_12__,\n  _img_jenn_kosar_jrWoDRmhwRY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_13__,\n  _img_spencer_davis_5dsZnCVDHd0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_14__,\n  _img_jonathan_borba_Gkc_xM3VY34_unsplash_jpg__WEBPACK_IMPORTED_MODULE_15__,\n  _img_jay_wennington_N_Y88TWmGwA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_16__,\n  _img_mgg_vitchakorn_DDn9I5V1ubE_unsplash_jpg__WEBPACK_IMPORTED_MODULE_17__,\n];\nlet imageIndex = 0;\n\ndisplayMain();\nsetInterval(() => {\n  imageIndex = (imageIndex + 1) % imageList.length;\n  updateImage();\n}, 5000);\n\n\n//# sourceURL=webpack://Image_slider/./src/index.js?',
        );

        /***/
      },

    /***/ "./src/img/albert.jpg":
      /*!****************************!*\
  !*** ./src/img/albert.jpg ***!
  \****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "dd5268622da82ce97ef9.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/albert.jpg?',
        );

        /***/
      },

    /***/ "./src/img/alexandru-bogdan-ghita.jpg":
      /*!********************************************!*\
  !*** ./src/img/alexandru-bogdan-ghita.jpg ***!
  \********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "a0d04819cd742c12bff2.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/alexandru-bogdan-ghita.jpg?',
        );

        /***/
      },

    /***/ "./src/img/amadeo-valar.jpg":
      /*!**********************************!*\
  !*** ./src/img/amadeo-valar.jpg ***!
  \**********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "cf181fcc734bd8d41c93.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/amadeo-valar.jpg?',
        );

        /***/
      },

    /***/ "./src/img/casey-lee-awj7sRviVXo-unsplash.jpg":
      /*!****************************************************!*\
  !*** ./src/img/casey-lee-awj7sRviVXo-unsplash.jpg ***!
  \****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "09ccdcc1f1671aa9b3b1.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/casey-lee-awj7sRviVXo-unsplash.jpg?',
        );

        /***/
      },

    /***/ "./src/img/clark-douglas.jpg":
      /*!***********************************!*\
  !*** ./src/img/clark-douglas.jpg ***!
  \***********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "c50d1bbfe994608f71df.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/clark-douglas.jpg?',
        );

        /***/
      },

    /***/ "./src/img/davey-gravy.jpg":
      /*!*********************************!*\
  !*** ./src/img/davey-gravy.jpg ***!
  \*********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "ccca848ca5b8e70458bd.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/davey-gravy.jpg?',
        );

        /***/
      },

    /***/ "./src/img/eugene-Xk0jQPZseMk-unsplash.jpg":
      /*!*************************************************!*\
  !*** ./src/img/eugene-Xk0jQPZseMk-unsplash.jpg ***!
  \*************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "6e70ff5dbdeab22bc37c.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/eugene-Xk0jQPZseMk-unsplash.jpg?',
        );

        /***/
      },

    /***/ "./src/img/faisal-BS4Zeq7xDRk-unsplash.jpg":
      /*!*************************************************!*\
  !*** ./src/img/faisal-BS4Zeq7xDRk-unsplash.jpg ***!
  \*************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "aa1ab9528f878e56c7fd.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/faisal-BS4Zeq7xDRk-unsplash.jpg?',
        );

        /***/
      },

    /***/ "./src/img/jay-wennington-N_Y88TWmGwA-unsplash.jpg":
      /*!*********************************************************!*\
  !*** ./src/img/jay-wennington-N_Y88TWmGwA-unsplash.jpg ***!
  \*********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "1b134c6811df875ce2ff.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/jay-wennington-N_Y88TWmGwA-unsplash.jpg?',
        );

        /***/
      },

    /***/ "./src/img/jenn-kosar-jrWoDRmhwRY-unsplash.jpg":
      /*!*****************************************************!*\
  !*** ./src/img/jenn-kosar-jrWoDRmhwRY-unsplash.jpg ***!
  \*****************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "b4c0fcb569ccb1e44221.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/jenn-kosar-jrWoDRmhwRY-unsplash.jpg?',
        );

        /***/
      },

    /***/ "./src/img/jonathan-borba-Gkc_xM3VY34-unsplash.jpg":
      /*!*********************************************************!*\
  !*** ./src/img/jonathan-borba-Gkc_xM3VY34-unsplash.jpg ***!
  \*********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "71465e99807f235f5d47.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/jonathan-borba-Gkc_xM3VY34-unsplash.jpg?',
        );

        /***/
      },

    /***/ "./src/img/lee-myungseong.jpg":
      /*!************************************!*\
  !*** ./src/img/lee-myungseong.jpg ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "73f6bcaa6ee04c8f0620.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/lee-myungseong.jpg?',
        );

        /***/
      },

    /***/ "./src/img/mgg-vitchakorn-DDn9I5V1ubE-unsplash.jpg":
      /*!*********************************************************!*\
  !*** ./src/img/mgg-vitchakorn-DDn9I5V1ubE-unsplash.jpg ***!
  \*********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "53349555c7432cfac51c.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/mgg-vitchakorn-DDn9I5V1ubE-unsplash.jpg?',
        );

        /***/
      },

    /***/ "./src/img/pablo-merchan-montes.jpg":
      /*!******************************************!*\
  !*** ./src/img/pablo-merchan-montes.jpg ***!
  \******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "38e5ec6fd6d8a098548c.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/pablo-merchan-montes.jpg?',
        );

        /***/
      },

    /***/ "./src/img/spencer-davis-5dsZnCVDHd0-unsplash.jpg":
      /*!********************************************************!*\
  !*** ./src/img/spencer-davis-5dsZnCVDHd0-unsplash.jpg ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "7826a50358d573d6723e.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/spencer-davis-5dsZnCVDHd0-unsplash.jpg?',
        );

        /***/
      },

    /***/ "./src/img/the-storyteller.jpg":
      /*!*************************************!*\
  !*** ./src/img/the-storyteller.jpg ***!
  \*************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "85a72239e4fc43261d41.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/the-storyteller.jpg?',
        );

        /***/
      },

    /***/ "./src/img/tim-toomey.jpg":
      /*!********************************!*\
  !*** ./src/img/tim-toomey.jpg ***!
  \********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "901b797f27e3037d50b1.jpg";\n\n//# sourceURL=webpack://Image_slider/./src/img/tim-toomey.jpg?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
