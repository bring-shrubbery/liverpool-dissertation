module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _signalsRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signalsRender */ \"./src/server/signalsRender.js\");\n/* harmony import */ var _testModel_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testModel.json */ \"./src/server/testModel.json\");\nvar _testModel_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./testModel.json */ \"./src/server/testModel.json\", 1);\n// Base Imports\n\n // Server Setup\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()(); // Middleware\n\n // Data Parsing\n\n\n // Static files\n\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static(__dirname + '/public')); // --- ROUTES ---\n\napp.get('/editor/:id', function (req, res) {\n  var projectId = req.params.id;\n  console.log(\"\\x1b[34m\", \"Requested to edit project \" + projectId);\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, './public/editor/editor.html'), 'utf8', function (err, data) {\n    if (err) {\n      console.error(err);\n      return res.status(500).send('An error occurred');\n    } // Set title\n\n\n    data = data.replace(\"<title></title>\", \"<title>\".concat(projectId, \"</title>\")); // Set data\n\n    data = data.replace('<script id=\"editor-data\"></script>', \"<script id=\\\"editor-data\\\">document.editorData = \".concat(JSON.stringify(_testModel_json__WEBPACK_IMPORTED_MODULE_5__), \"</script>\"));\n    res.setHeader('Content-Type', 'text/html');\n    res.send(data);\n  });\n});\napp.get('/projects', function (req, res) {\n  // TODO: return page with all the projects for the current user\n  res.end(\"projects\");\n}); // JSON Parser\n\napp.post('/render', body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());\napp.post('/render', function (req, res) {\n  console.log(\"\\x1b[34m\", \"POST /RENDER route requested\");\n  var reqJson = req.params.body;\n  var renderedString = Object(_signalsRender__WEBPACK_IMPORTED_MODULE_4__[\"renderSignals\"])(reqJson);\n  res.setHeader('Content-Type', 'text/plain');\n  res.end(renderedString);\n}); // Default test visualisation\n\napp.get('/render', function (req, res) {\n  console.log(\"\\x1b[34m\", \"GET /RENDER route requested\");\n  var renderedString = Object(_signalsRender__WEBPACK_IMPORTED_MODULE_4__[\"renderSignals\"])(_testModel_json__WEBPACK_IMPORTED_MODULE_5__);\n  res.setHeader('Content-Type', 'text/html');\n  res.end(renderedString);\n}); // Run server\n\nvar port = process.env.PORT || 5000;\napp.listen(port, function () {\n  console.log(\"\\x1b[32m\", \"\\nListening on: https://localhost:\" + port + \"\\n\");\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/signalsRender.js":
/*!*************************************!*\
  !*** ./src/server/signalsRender.js ***!
  \*************************************/
/*! exports provided: renderSignals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSignals\", function() { return renderSignals; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction scriptComposer(requestJson) {\n  // TODO: Parse json and return executable javascript\n  var executable = 'window.antoni = function() {alert(\"This website was created by Antoni Silvestrovic\")};';\n  return executable;\n}\n\nfunction renderHtml(requestJson) {\n  var ht = \"<script>\".concat(scriptComposer(requestJson), \"</script>\");\n  var jsx = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToStaticMarkup\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"canvas\", {\n    id: \"signals-renderer-canvas\"\n  })));\n  var scriptedHtml = jsx.slice(0, jsx.length - 6) + ht + \"</div>\";\n  return scriptedHtml;\n}\n\nfunction renderSignals(requestJson) {\n  return renderHtml(requestJson);\n}\n\n//# sourceURL=webpack:///./src/server/signalsRender.js?");

/***/ }),

/***/ "./src/server/testModel.json":
/*!***********************************!*\
  !*** ./src/server/testModel.json ***!
  \***********************************/
/*! exports provided: connectors, nodes, default */
/***/ (function(module) {

eval("module.exports = {\"connectors\":[{\"connectorStart\":{\"nodeId\":\"signalGenerator\",\"settingId\":\"sine\"},\"connectorEnd\":{\"nodeId\":\"scope\",\"settingId\":\"signal\"}}],\"nodes\":{\"signalGenerator\":{\"title\":\"Signal Generator\",\"x\":\"150\",\"y\":\"300\",\"width\":\"150\",\"inputs\":[{\"title\":\"phase\",\"type\":\"signal\"}],\"outputs\":[{\"title\":\"sine\",\"type\":\"signal\"}],\"generators\":{\"sine\":\"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])\"},\"settings\":{\"frequency\":\"1\",\"amplitude\":\"1\",\"phase\":\"0\"}},\"scope\":{\"title\":\"Scope\",\"x\":\"350\",\"y\":\"300\",\"width\":\"150\",\"inputs\":[{\"title\":\"signal\",\"type\":\"signal\"}],\"outputs\":[],\"settings\":{\"yScale\":\"1\",\"xScale\":\"1\"}}}};\n\n//# sourceURL=webpack:///./src/server/testModel.json?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });