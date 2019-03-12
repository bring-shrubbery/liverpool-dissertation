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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderer */ "./src/server/renderer/index.js");
/* harmony import */ var _libraryNodes_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libraryNodes.json */ "./src/server/libraryNodes.json");
var _libraryNodes_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./libraryNodes.json */ "./src/server/libraryNodes.json", 1);
/* harmony import */ var _projects_modulation_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/modulation.json */ "./src/server/projects/modulation.json");
var _projects_modulation_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./projects/modulation.json */ "./src/server/projects/modulation.json", 1);
/* harmony import */ var _projects_fourierSeries_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/fourierSeries.json */ "./src/server/projects/fourierSeries.json");
var _projects_fourierSeries_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./projects/fourierSeries.json */ "./src/server/projects/fourierSeries.json", 1);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Base Imports

 // Server Setup


var app = express__WEBPACK_IMPORTED_MODULE_2___default()(); // Middleware

 // Data Parsing

 // import testModel from './testModel.json'
// Pre-made projects and library nodes





var dateNow = function dateNow() {
  return String(Date().toString()).substr(0, 24) + " | ";
};

var database = {
  projectsInfo: [{
    projectId: "1",
    title: "AM/FM Modulation",
    description: "Shows one signal modulated over other (carrier) signal using AM and FM modulation.",
    owner: "admin"
  }, {
    projectId: "2",
    title: "Fourier Series",
    description: "Attempt at creating fourier series using this tool.",
    owner: "admin"
  }],
  projectModels: [_objectSpread({}, _projects_modulation_json__WEBPACK_IMPORTED_MODULE_6__), _objectSpread({}, _projects_fourierSeries_json__WEBPACK_IMPORTED_MODULE_7__)],
  users: {
    admin: {
      username: "admin",
      password: "admin"
    }
  },
  newProject: function newProject(username, title, description) {
    // Find new id
    var newId = 0;

    for (var i in this.projectsInfo) {
      if (parseInt(this.projectsInfo[i].projectId) > newId) newId = this.projectsInfo[i].projectId;
    }

    newId++; // Add new projecy info

    this.projectsInfo.push({
      projectId: newId,
      title: title,
      description: description,
      owner: username
    });
    this.projectModels.push(_objectSpread({}, projectModelTemplate));
    return newId;
  },
  saveProject: function saveProject(projectId, json) {
    var newProjectVersion = {
      allConnections: json.allConnections,
      allNodes: json.allNodes,
      composerCoordinates: json.composerCoordinates,
      isCreatingConnection: json.composerCoordinates
    };
    this.projectModels[projectId - 1] = newProjectVersion;
  }
};
var projectModelTemplate = {
  allConnections: [],
  allNodes: {},
  composerCoordinates: {
    focused: true,
    gridSize: 50,
    height: 1,
    width: 1,
    x: 0,
    y: 0,
    zoomLevel: 1
  },
  isCreatingConnection: false // Static files

};
app.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static(__dirname + '/public/static')); // --- ROUTES ---

app.get('/editor/:username/:id', function (req, res) {
  var projectId = req.params.id;
  var username = req.params.username;
  console.log("".concat(dateNow(), "GET /editor/").concat(username, "/").concat(projectId));
  if (!database.users[username]) res.status(420).send("User with username " + username + " doesn't exist");
  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, './public/editor.html'), 'utf8', function (err, data) {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    } // Set title


    data = data.replace("<title></title>", "<title>".concat(projectId, "</title>"));
    var projectData;

    for (var i = 0; i < database.projectsInfo.length; i++) {
      var project = database.projectsInfo[i];

      if (project.owner == username && project.projectId == projectId) {
        var pid = parseInt(projectId) - 1;
        projectData = _objectSpread({}, database.projectModels[pid], {
          pid: projectId,
          owner: username
        });
      }
    } // Set data


    data = data.replace('<script id="editor-data"></script>', "<script id=\"project-data\">document.projectData = ".concat(JSON.stringify(projectData), "</script>\n            <script id=\"library-data\">document.libraryNodes = ").concat(JSON.stringify(_libraryNodes_json__WEBPACK_IMPORTED_MODULE_5__), "</script>"));
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
}); // Default test visualisation

app.get('/render/:username/:id', function (req, res) {
  var projectId = req.params.id;
  var username = req.params.username;
  console.log("".concat(dateNow(), "GET /render/").concat(username, "/").concat(projectId));
  if (!database.users[username]) res.status(420).send("User with username " + username + " doesn't exist");
  var renderedString = Object(_renderer__WEBPACK_IMPORTED_MODULE_4__["renderSignals"])(database.projectModels[projectId - 1]);
  res.setHeader('Content-Type', 'text/html');
  res.end(renderedString);
}); // For now, landing page is the projects page.

app.get("/", function (req, res) {
  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, './public/projects.html'), 'utf8', function (err, data) {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    } // Set title


    data = data.replace("<title></title>", "<title>Projects</title>");
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  });
});
app.get("/projects/info/:username", function (req, res) {
  var username = req.params.username;

  if (database.users[username]) {
    var projectsArray = [];

    for (var i = 0; i < database.projectsInfo.length; i++) {
      if (database.projectsInfo[i].owner === username) projectsArray.push(database.projectsInfo[i]);
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(projectsArray));
  } else {
    res.status(420).send("No user with username \"".concat(username, "\" was found."));
  }
});
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());
app.post("/save/:username/:id", function (req, res) {
  // Save existing project
  var username = req.params.username;
  var projectId = req.params.id;
  console.log("".concat(dateNow(), "POST /save/").concat(username, "/").concat(projectId));
  var projectJson = req.body;
  if (!database.users[username]) res.status(420).send("User with username ".concat(username, " doesn't exist"));
  if (!database.projectModels[projectId - 1]) res.status(421).send("Project with id ".concat(projectId, " doesn't exist"));
  database.saveProject(projectId, projectJson);
  res.status(200).end();
});
app.get("/createProject/:username/:title/:description", function (req, res) {
  var username = req.params.username;
  var title = req.params.title;
  var description = req.params.description;
  if (!database.users[username]) res.status(420).send("User with username ".concat(username, " doesn't exist"));
  var pid = database.newProject(username, title, description);
  res.status(301).send("/editor/".concat(username, "/").concat(pid));
}); // Run server

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("\nListening on: https://localhost:" + port + "\n");
});

/***/ }),

/***/ "./src/server/libraryNodes.json":
/*!**************************************!*\
  !*** ./src/server/libraryNodes.json ***!
  \**************************************/
/*! exports provided: input, processors, output, ui, default */
/***/ (function(module) {

module.exports = {"input":{"touchInput":{"title":"Touch Input","description":"Gets touch input from the scope.","inputs":[],"outputs":[{"title":"OffsetX","type":"number"},{"title":"OffsetY","type":"number"}],"generators":[],"default_settings":[{"title":"Sensitivity","value":"0.01","type":"number_uncontrolled"},{"title":"Scope","value":"","type":"scopeReference"}]},"scalar":{"title":"Scalar","description":"Single scalar output","inputs":[],"outputs":[{"title":"number","type":"number"}],"generators":[],"default_settings":[{"title":"number","value":"1","type":"number","isInput":false}]},"signalGenerator":{"title":"Signal Generator","description":"Generates a basic signal","inputs":[],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"default_settings":[{"title":"frequency","value":"20","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":false},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}]}},"processors":{"multiply":{"title":"Multiply","description":"Modulates two signals using AM modulation","inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]*[input2]","type":"signal"}],"default_settings":[]},"add":{"title":"Add","description":"Modulates two signals using AM modulation","inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]+[input2]","type":"signal"}],"default_settings":[]},"subtract":{"title":"Subtract","description":"Modulates two signals using AM modulation","inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]-[input2]","type":"signal"}],"default_settings":[]}},"output":{"scope":{"title":"Scope","description":"Displays a scope with the provided input signal.","inputs":[{"title":"signal","type":"signal"}],"outputs":[],"default_settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Title","value":"Carrier Signal","type":"text"},{"title":"# of Signals","value":"1","type":"number_of_signals"}]},"fft":{"title":"FFT Scope","description":"Displays frequency domain representation of the signal.","inputs":[{"title":"signal","type":"signal"}],"outputs":[],"default_settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Title","value":"Carrier Signal","type":"text"},{"title":"Max Freq (Hz)","value":"100","type":"number_uncontrolled"}]}},"ui":{"uiNumber":{"title":"UI Number","description":"Controller that appears on the renderer which allows to enter a number.","inputs":[],"outputs":[{"title":"output","type":"number"}],"default_settings":[{"title":"Category","value":"","type":"text"},{"title":"Label","value":"","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"0","type":"number_uncontrolled"},{"title":"Max","value":"0","type":"number_uncontrolled"},{"title":"Step","value":"1","type":"number_uncontrolled"}]},"uiSlider":{"title":"UI Slider","description":"Controller that appears on the renderer which grants control using slider.","inputs":[],"outputs":[{"title":"output","type":"number"}],"default_settings":[{"title":"Category","value":"","type":"text"},{"title":"Label","value":"","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"0","type":"number_uncontrolled"},{"title":"Max","value":"0","type":"number_uncontrolled"},{"title":"Step","value":"1","type":"number_uncontrolled"}]}}};

/***/ }),

/***/ "./src/server/projects/fourierSeries.json":
/*!************************************************!*\
  !*** ./src/server/projects/fourierSeries.json ***!
  \************************************************/
/*! exports provided: allNodes, allConnections, isCreatingConnection, composerCoordinates, default */
/***/ (function(module) {

module.exports = {"allNodes":{"uiSlider":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"1*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":6,"width":150,"height":100,"id":"uiSlider"},"uiSlider1":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"2*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":68,"width":150,"height":100,"id":"uiSlider1"},"uiSlider2":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"3*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":129,"width":150,"height":100,"id":"uiSlider2"},"uiSlider3":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"4*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":191,"width":150,"height":100,"id":"uiSlider3"},"uiSlider4":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"5*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":254,"width":150,"height":100,"id":"uiSlider4"},"uiSlider5":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"6*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":317,"width":150,"height":100,"id":"uiSlider5"},"uiSlider6":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"7*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":381,"width":150,"height":100,"id":"uiSlider6"},"uiSlider7":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"8*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":443,"width":150,"height":100,"id":"uiSlider7"},"uiSlider8":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"9*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":504,"width":150,"height":100,"id":"uiSlider8"},"signalGenerator":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"1","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":5,"width":150,"height":100},"signalGenerator1":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"2","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":67,"width":150,"height":100},"signalGenerator2":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"3","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":128,"width":150,"height":100},"signalGenerator3":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"4","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":190,"width":150,"height":100},"signalGenerator4":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"5","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":254,"width":150,"height":100},"signalGenerator5":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"6","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":317,"width":150,"height":100},"signalGenerator6":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"7","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":380,"width":150,"height":100},"signalGenerator7":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"8","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":442,"width":150,"height":100},"signalGenerator8":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"9","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":504,"width":150,"height":100},"scope":{"title":"Sines","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"#f27200","type":"color"},{"title":"Title","value":"Sines","type":"text"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":939,"y":299,"width":150,"height":100,"id":"scope"},"uiSlider9":{"title":"Bias","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"0*f","type":"text"},{"title":"Order","value":"-1","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":325,"y":573,"width":150,"height":100,"id":"uiSlider9"},"add":{"title":"Add","clickedDown":false,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]+[input3]+[input4]+[input5]+[input6]+[input7]+[input8]+[input9]+[input10]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"},{"title":"input3","type":"signal"},{"title":"input4","type":"signal"},{"title":"input5","type":"signal"},{"title":"input6","type":"signal"},{"title":"input7","type":"signal"},{"title":"input8","type":"signal"},{"title":"input9","type":"signal"},{"title":"input10","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":700,"y":198,"width":150,"height":100},"signalGenerator9":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"1","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":681,"width":150,"height":100},"signalGenerator10":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"2","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":743,"width":150,"height":100},"signalGenerator11":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"3","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":806,"width":150,"height":100},"signalGenerator12":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"4","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":869,"width":150,"height":100},"signalGenerator13":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"5","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":932,"width":150,"height":100},"signalGenerator14":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"6","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":996,"width":150,"height":100},"signalGenerator15":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"7","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1057,"width":150,"height":100},"signalGenerator16":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"8","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1122,"width":150,"height":100},"signalGenerator17":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"9","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1185,"width":150,"height":100},"uiSlider10":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":678,"width":150,"height":100,"id":"uiSlider10"},"uiSlider11":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"2*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":741,"width":150,"height":100,"id":"uiSlider11"},"uiSlider12":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"3*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":806,"width":150,"height":100,"id":"uiSlider12"},"uiSlider13":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"4*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":869,"width":150,"height":100,"id":"uiSlider13"},"uiSlider14":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"5*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":932,"width":150,"height":100,"id":"uiSlider14"},"uiSlider15":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"6*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":995,"width":150,"height":100,"id":"uiSlider15"},"uiSlider16":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"7*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1059,"width":150,"height":100,"id":"uiSlider16"},"uiSlider17":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"8*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1122,"width":150,"height":100,"id":"uiSlider17"},"uiSlider18":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"9*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1187,"width":150,"height":100,"id":"uiSlider18"},"uiSlider19":{"title":"Bias","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"0*f","type":"text"},{"title":"Order","value":"-1","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":334,"y":1263,"width":150,"height":100,"id":"uiSlider19"},"add1":{"title":"Add","clickedDown":false,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]+[input3]+[input4]+[input5]+[input6]+[input7]+[input8]+[input9]+[input10]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"},{"title":"input3","type":"signal"},{"title":"input4","type":"signal"},{"title":"input5","type":"signal"},{"title":"input6","type":"signal"},{"title":"input7","type":"signal"},{"title":"input8","type":"signal"},{"title":"input9","type":"signal"},{"title":"input10","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":619,"y":834,"width":150,"height":100},"scope1":{"title":"Cosines","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"#43d919","type":"color"},{"title":"Title","value":"Cosines","type":"text"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":893,"y":887,"width":150,"height":100,"id":"scope1"},"add2":{"title":"Add","clickedDown":true,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":886,"y":596,"width":150,"height":100},"scope2":{"title":"Time Domain","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"#13b3f2","type":"color"},{"title":"Title","value":"a","type":"text"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":1101,"y":581,"width":150,"height":100,"id":"scope2"},"fft":{"title":"Frequency Domain","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Title","value":"Carrier Signal","type":"text"},{"title":"Max Freq (Hz)","value":"10","type":"number_uncontrolled"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":1118,"y":672,"width":150,"height":100,"id":"fft"}},"allConnections":[{"connectorStart":{"nodeId":"uiSlider","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider1","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator1","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider2","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider3","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator3","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider4","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator4","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider5","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator5","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider6","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator6","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider7","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator7","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider8","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator8","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input1"}},{"connectorStart":{"nodeId":"signalGenerator1","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input2"}},{"connectorStart":{"nodeId":"signalGenerator2","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input3"}},{"connectorStart":{"nodeId":"signalGenerator3","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input4"}},{"connectorStart":{"nodeId":"signalGenerator4","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input5"}},{"connectorStart":{"nodeId":"signalGenerator5","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input6"}},{"connectorStart":{"nodeId":"signalGenerator6","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input7"}},{"connectorStart":{"nodeId":"signalGenerator7","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input8"}},{"connectorStart":{"nodeId":"signalGenerator8","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input9"}},{"connectorStart":{"nodeId":"uiSlider9","settingId":"output"},"connectorEnd":{"nodeId":"add","settingId":"input10"}},{"connectorStart":{"nodeId":"add","settingId":"output"},"connectorEnd":{"nodeId":"scope","settingId":"signal"}},{"connectorStart":{"nodeId":"uiSlider10","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator9","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider11","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator10","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider12","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator11","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider13","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator12","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider14","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator13","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider15","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator14","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider16","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator15","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider17","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator16","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider18","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator17","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator9","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input1"}},{"connectorStart":{"nodeId":"signalGenerator10","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input2"}},{"connectorStart":{"nodeId":"signalGenerator11","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input3"}},{"connectorStart":{"nodeId":"signalGenerator12","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input4"}},{"connectorStart":{"nodeId":"signalGenerator13","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input5"}},{"connectorStart":{"nodeId":"signalGenerator14","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input6"}},{"connectorStart":{"nodeId":"signalGenerator15","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input7"}},{"connectorStart":{"nodeId":"signalGenerator16","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input8"}},{"connectorStart":{"nodeId":"signalGenerator17","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input9"}},{"connectorStart":{"nodeId":"uiSlider19","settingId":"output"},"connectorEnd":{"nodeId":"add1","settingId":"input10"}},{"connectorStart":{"nodeId":"add1","settingId":"output"},"connectorEnd":{"nodeId":"scope1","settingId":"signal"}},{"connectorStart":{"nodeId":"add","settingId":"output"},"connectorEnd":{"nodeId":"add2","settingId":"input1"}},{"connectorStart":{"nodeId":"add1","settingId":"output"},"connectorEnd":{"nodeId":"add2","settingId":"input2"}},{"connectorStart":{"nodeId":"add2","settingId":"output"},"connectorEnd":{"nodeId":"scope2","settingId":"signal"}},{"connectorStart":{"nodeId":"add2","settingId":"output"},"connectorEnd":{"nodeId":"fft","settingId":"signal"}}],"isCreatingConnection":{"focused":true,"gridSize":50,"height":824,"width":1650,"x":-117,"y":-189,"zoomLevel":1},"composerCoordinates":{"focused":true,"gridSize":50,"height":824,"width":1650,"x":-117,"y":-189,"zoomLevel":1}};

/***/ }),

/***/ "./src/server/projects/modulation.json":
/*!*********************************************!*\
  !*** ./src/server/projects/modulation.json ***!
  \*********************************************/
/*! exports provided: allNodes, allConnections, isCreatingConnection, composerCoordinates, default */
/***/ (function(module) {

module.exports = {"allNodes":{"signalGenerator":{"title":"Signal Generator","x":665,"y":644,"width":"150","inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"sine","type":"signal"}],"generators":[{"title":"sine","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"settings":[{"title":"frequency","value":"15","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false}],"selected":false,"clickedDown":false},"touchInput":{"title":"Touch Input","clickedDown":false,"selected":false,"settings":[{"title":"Sensitivity","value":"0.01","type":"number_uncontrolled"},{"title":"Scope","value":"scope","type":"scopeReference"}],"generators":[],"inputs":[],"outputs":[{"title":"OffsetX","type":"number"},{"title":"OffsetY","type":"number"}],"x":113,"y":610,"width":150,"height":100},"signalGenerator1":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"20","type":"number","isInput":true},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"1","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"frequency","default_value":"20","type":"number"},{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":413,"y":629,"width":150,"height":100},"scope":{"title":"Scope","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"#ffe800","type":"color"},{"title":"Title","value":"AM Modulated Signal","type":"text"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":885,"y":612,"width":150,"height":100,"id":"scope"}},"allConnections":[{"connectorStart":{"nodeId":"touchInput","settingId":"OffsetX"},"connectorEnd":{"nodeId":"signalGenerator1","settingId":"frequency"}},{"connectorStart":{"nodeId":"touchInput","settingId":"OffsetY"},"connectorEnd":{"nodeId":"signalGenerator1","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator1","settingId":"signal"},"connectorEnd":{"nodeId":"signalGenerator","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator","settingId":"sine"},"connectorEnd":{"nodeId":"scope","settingId":"signal"}}],"isCreatingConnection":{"focused":true,"gridSize":50,"height":826,"width":1650,"x":28,"y":-317,"zoomLevel":1},"composerCoordinates":{"focused":true,"gridSize":50,"height":826,"width":1650,"x":28,"y":-317,"zoomLevel":1}};

/***/ }),

/***/ "./src/server/renderer/generatorTokenizer.ts":
/*!***************************************************!*\
  !*** ./src/server/renderer/generatorTokenizer.ts ***!
  \***************************************************/
/*! exports provided: tokenizeGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenizeGenerator", function() { return tokenizeGenerator; });
/* harmony import */ var _scopeFixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scopeFixer */ "./src/server/renderer/scopeFixer.js");
// ---------------------------------- Generator Code Tokeniser -----------------------------------
// Generator code tokeniser function is algorithmically simple, but produces a good representation
// of the provided code in JavaScript Object format (which can then be easily converted to JSON,
// since it's pretty much the same thing).
// When going through the code, it can detect several types of operators. These are:
//     * Variable
//     * Constant Number
//     * Math Operator
//     * Math Function
//     * Regular scope - everything inside brackets "(" and ")" should be executed first
// The Variables, Numbers and Math operators are just added as an object with appropriate type and
// value taken from the code.
// TODO:
// * Sanetise variable names !!! Javascript injection is possible now throun variable names...

function tokenizeGenerator(gen, nodeId) {
    // Get value of generator code and store in g
    var g = String(gen);
    g = String(Object(_scopeFixer__WEBPACK_IMPORTED_MODULE_0__["fixScopes"])(g));
    // Parsed Generator Code
    var pgen = [];
    // The stack
    var stack = [];
    var _loop_1 = function (i) {
        var topStackObject = stack.length > 0 ?
            stack[stack.length - 1] : null;
        // --------------- VARIABLE ----------------
        if (g[i] === "[") {
            // Move to next character
            i++;
            // Initialise empty variable
            var variable = "";
            // Scan until variable scope is closed
            while (g[i] !== "]") {
                variable += g[i];
                i++;
            }
            if (variable === "time" || variable === "PI") {
                // Do nothing ?
            }
            else {
                variable = nodeId + variable;
            }
            var variableSnippet = {
                type: "var",
                value: variable,
                code: null
            };
            if (topStackObject) {
                var topIndex = stack.length - 1;
                stack[topIndex].code.push(variableSnippet);
            }
            else {
                pgen.push(variableSnippet);
            }
            return out_i_1 = i, "continue";
        }
        // --------------- MATH OPERATOR ----------------
        if (g[i] === "*" || g[i] === "/" || g[i] === "+" || g[i] === "-") {
            var operatorSnippet = {
                type: "operator",
                value: g[i],
                code: null
            };
            if (topStackObject) {
                // If scope exists push it to the top scope
                var topIndex = stack.length - 1;
                stack[topIndex].code.push(operatorSnippet);
            }
            else {
                // Otherwise push it to root level
                pgen.push(operatorSnippet);
            }
            return out_i_1 = i, "continue";
        }
        // --------------- MATH FUNCTION ----------------
        if (g[i] === "s" || g[i] === "c" || g[i] === "t") {
            // Mathematical formulas are coded in three letters
            var nextThree = String(g[i] + g[i + 1] + g[i + 2]);
            // Check if next three chars are one of 
            if (nextThree === "sin" || nextThree === "cos" || nextThree === "tan") {
                // Adjust index to next character
                i += 3;
                // Search for opening brackets
                while (g[i] !== "(") {
                    i++;
                    if (i >= g.length) {
                        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        // TODO: throw error
                        // ERROR REASON: should provide brackets for math operators
                        console.error("should provide brackets for math operators");
                        return { value: null };
                    }
                }
                // Check if provided space or a character after three math chars
                // if (g[i+1] === "(") i++;
                var mathSnippet = {
                    type: "math",
                    value: nextThree,
                    code: []
                };
                if (topStackObject) {
                    // If scope exists push it to the top scope
                    var stackTopIndex = stack.length - 1;
                    stack[stackTopIndex].code.push(mathSnippet);
                    var scopeTopIndex = stack[stackTopIndex].code.length - 1;
                    stack.push(stack[stackTopIndex].code[scopeTopIndex]);
                }
                else {
                    // Otherwise push it to root level
                    pgen.push(mathSnippet);
                    stack.push(pgen[pgen.length - 1]);
                }
                return out_i_1 = i, "continue";
            }
        }
        // --------------- REGULAR SCOPE ----------------
        if (g[i] === "(") {
            // Begin regular scope
            var scopeSnippet = {
                type: "scope",
                value: "",
                code: []
            };
            if (topStackObject) {
                // If scope exists push it to the top scope
                var stackTopIndex = stack.length - 1;
                stack[stackTopIndex].code.push(scopeSnippet);
                var scopeTopIndex = stack[stackTopIndex].code.length - 1;
                stack.push(stack[stackTopIndex].code[scopeTopIndex]);
                return out_i_1 = i, "continue";
            }
            else {
                // Otherwise push it to root level
                pgen.push(scopeSnippet);
                stack.push(pgen[pgen.length - 1]);
                return out_i_1 = i, "continue";
            }
        }
        // --------------- END ANY SCOPE ----------------
        if (g[i] === ")" || g.charAt(i) === ")") {
            // End Scope
            if (topStackObject) {
                // Remove top item from stack if there is one
                stack.pop();
                return out_i_1 = i, "continue";
            }
            else {
                // Throw error if closed scope that wasn't opened
                // TODO:            throw ERROR
                // ERROR REASON:    non existent scope was closed
                console.error("non existent scope was closed");
                return { value: null };
            }
        }
        // --------------- NUBMER ----------------
        var maybeNumber = String(parseInt(g[i]));
        if (maybeNumber !== String(NaN) && typeof parseInt(maybeNumber) == "number") {
            var numberStart = i;
            // Is current char a number or a dot?
            var isNumber = function () { return (maybeNumber !== String(NaN) && typeof parseInt(maybeNumber) === "number"); };
            var isDot = function (index) { return String(g[index]) === "."; };
            // Was there a dot in current sequence of numbers?
            var wasDotAlready = false;
            while (isNumber() || isDot(i)) {
                // If current char is a dot
                if (isDot(i)) {
                    if (wasDotAlready) {
                        // If it there was a dot already, throw error, since it doesn't make sense
                        // TODO: throw ERROR
                        // ERROR REASON: invalid floating point number syntax
                    }
                    else {
                        // If not, set was dot already to true
                        wasDotAlready = true;
                    }
                }
                // Move to next index and 
                i++;
                maybeNumber = String(parseInt(g[i]));
            }
            var resultingNumber = g.slice(numberStart, i);
            var numberSnippet = {
                type: "number",
                value: resultingNumber,
                code: null
            };
            if (topStackObject) {
                // If scope exists push it to the top scope
                var topIndex = stack.length - 1;
                stack[topIndex].code.push(numberSnippet);
            }
            else {
                // Otherwise push it to root level
                pgen.push(numberSnippet);
            }
            i--;
            return out_i_1 = i, "continue";
        }
        out_i_1 = i;
    };
    var out_i_1;
    // Code tokeniser
    for (var i = 0; i < g.length; i++) {
        var state_1 = _loop_1(i);
        i = out_i_1;
        if (typeof state_1 === "object")
            return state_1.value;
    }
    // Return parsed generator array
    return pgen;
}


/***/ }),

/***/ "./src/server/renderer/index.js":
/*!**************************************!*\
  !*** ./src/server/renderer/index.js ***!
  \**************************************/
/*! exports provided: renderSignals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSignals", function() { return renderSignals; });
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scriptGenerator_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scriptGenerator.ts */ "./src/server/renderer/scriptGenerator.ts");
/* harmony import */ var _viewerDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewerDom */ "./src/server/renderer/viewerDom.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function renderHtml(requestJson) {
  // Separate nodes from connectors
  var allNodes = _objectSpread({}, requestJson.allNodes);

  var allConnections = _toConsumableArray(requestJson.allConnections); // Render HTML


  var jsx = Object(_viewerDom__WEBPACK_IMPORTED_MODULE_2__["jsxDom"])(allNodes);
  var jsxString = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_0__["renderToStaticMarkup"])(jsx); // Generate Scripts
  // console.time("Script Parser");

  var scriptArray = Object(_scriptGenerator_ts__WEBPACK_IMPORTED_MODULE_1__["scriptGenerator"])(allNodes, allConnections);
  var composedScriptString = "";

  for (var s in scriptArray) {
    if (s == 0) continue;
    composedScriptString += scriptArray[s];
  } // console.timeEnd("Script Parser");


  var scripts = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js\"></script>\n";
  scripts += "<script src=\"/fft.js\"></script>\n";
  scripts += "<script>".concat(scriptArray[0], "</script>\n");
  scripts += "<script>".concat(composedScriptString, "</script>\n"); // Combine former results

  var scriptedHtml = jsxString.slice(0, jsxString.length - 6) + scripts + "</div>"; // Return generated HTML as a string

  return scriptedHtml;
}

function renderSignals(requestJson) {
  return renderHtml(requestJson);
}

/***/ }),

/***/ "./src/server/renderer/scopeFixer.js":
/*!*******************************************!*\
  !*** ./src/server/renderer/scopeFixer.js ***!
  \*******************************************/
/*! exports provided: fixScopes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixScopes", function() { return fixScopes; });
// --------------------------------------- Scope Fixer ---------------------------------------
// Scope Fixer function is related to the gen variable parsing algorithm. Since the tokenizer 
// function does not take into accound that math operators * (multiplication) and / (division)
// are executed first, we need to put scopes around bits that should executed first. This is 
// not final solution, since it does not take following situations into account:
//     * there is a minus or plus sign before a number: -1*[variable]
//         - In this case it would return this: -(1*[variable]). This does not apply scopes
//           correctly.
//
//
// ---------------------------------------- Algorithm ----------------------------------------
// This algorithm makes only one general sweep through the string. This means that if no 
// scopes are needed, execution time will be minimal, i.e. it will take as much time as it
// takes to loop through the string once and check if the character is * or /. In the case of
// 34 character string, this function is executed in abount 0.3-0.5 ms. With an average of 
// around 0.4ms and 34 characters, we can approximate that one character takes 0.4 / 34 = 1.66
// micro seconds. This was tested on 2.7Ghz Intel Core i7. So it took around 4482 clock cycles
// to execute that according to following equation: 1.66us / (1 / 2.7G) = 4482. This could be 
// dramatically improved by using custom made Node.js c++ plugin which allows to run c++
// binaries from Node.js or by writing the whole renderer server in a compiled language like 
// python, c#, go, or swift. There is also a possibility to write it in Rust language, C or
// C++. This would allow to compile just this function to WebAssembly and run it in Node.js at 
// compiled speed. If further development will be done and there will be a decision to  switch
// to a compiled language server, I would suggest using GO language due to its simplicity.
//
// Algithm works in a following fashion:
//   1. Make sure passed text is of a String type
//   2. Set flags to false:
//       - border flags: indicate if on left or right, a + or - sign was found
//       - bracket flags: indicate if while sweeping left and right a scope was found
//   3. Initiate variables for left and right sweepers
//   4. Loop until whole string was scanned, in the loop:
//       1. If current character is "*"" or "/", continue, otherwise increase index by one and check again
//       2. Scan to the left from the current index.
//       3. If ran out of bounds of the string, stop scanning left, move to step 7
//       4. If hit closing bracket, set closing bracket flag to true.
//       5. If hit opening bracket, check if closing bracket was hit before:
//           - If closing bracket WAS hit, continue scanning and set closing bracket flag to false again.
//           - If closing bracket WAS NOT hit, stop scanning and move to step 7
//       6. If "+" or "-" sign was hit, check if closing bracket was hit before:
//           - If closing bracket WAS hit, continue scanning, since it means that the + or - sign is in another scope
//           - If closing bracket WAS NOT hit, stop scanning, move right by one step and reset left border flag
//       7. Scan to the right from the current index.
//       8. If ran out of bounds of the string, stop scanning left, move to step 12
//       9. If hit opening bracket, set opening bracket flag to true.
//       10. If hit closing bracket, check if opening bracket was hit before:
//           - If opening bracket WAS hit, continue scanning and set opening bracket flag to false again.
//           - If opening bracket WAS NOT hit, stop scanning and move to step 12
//       11. If "+" or "-" sign was hit, check if opening bracket was hit before:
//           - If opening bracket WAS hit, continue scanning, since it means that the + or - sign is in another scope
//           - If opening bracket WAS NOT hit, stop scanning and reset left border flag
function fixScopes(gen) {
  var g = String(gen); // Variable are taken outside of for loop, to increase performance.
  // In this way, variables are just rewritten in the same memory
  // location instead of creating new variable every time.

  var foundLeftBorder = false;
  var foundRightBorder = false;
  var justHitOpeningBracket = false;
  var justHitClosingBracket = false;
  var left;
  var right;

  for (var i = 0; i < g.length; i++) {
    if (g[i] === "*" || g[i] === "/") {
      // Scan left
      for (left = i; !foundLeftBorder; left--) {
        // Exit the scanning loop if hit left string wall
        if (left <= 0) {
          // This does not set foundLeftBorder variable to true,
          // since if both sides are brackets or outer walls of
          // the string, new brackets should not be inserted
          break;
        } // When it hits opening bracket, it checks if it hit closing bracket before


        if (g[left] === "(") {
          if (justHitClosingBracket) {
            // If it did, it skips current bracket and continues searching.
            // This basically prevents inserting bracket inside of the scope.
            justHitClosingBracket = false;
            continue;
          } else {
            // If it didn't, it's time to insert a bracket
            break;
          }
        } // Marks that it hit closing bracket, so that if opening bracket was hit later,
        // it knows that it shouldn't 


        if (g[left] === ")") justHitClosingBracket = true; // Exit scanning loop if hit plus or minus
        // Also, move right, so that brackes is inserted after + or - sign

        if (g[left] === "+" || g[left] === "-") {
          if (justHitClosingBracket) {
            // If it did, it skips current bracket and continues searching.
            // This basically prevents inserting bracket inside of the scope.
            continue;
          } else {
            // If it didn't, it's time to insert a bracket
            left++;
            foundLeftBorder = true;
            break;
          }
        }
      } // Scan right


      for (right = i; !foundRightBorder; right++) {
        // Exit the scanning loop if hit right string wall or closing bracket
        if (right >= g.length) {
          // This does not set foundRightBorder variable to true,
          // since if both sides are brackets or outer walls of
          // the string, new brackets should not be inserted
          break;
        } // When it hits closing bracket, it checks if it hit opening bracket before


        if (g[right] === ")") {
          if (justHitOpeningBracket) {
            // If it did, it skips current bracket and continues searching.
            // This basically prevents inserting bracket inside of the scope.
            justHitOpeningBracket = false;
            continue;
          } else {
            // If it didn't, it's time to insert a bracket
            break;
          }
        } // Marks that it hit closing bracket, so that if opening bracket was hit later,
        // it knows that it shouldn't 


        if (g[right] === "(") justHitOpeningBracket = true;

        if (g[right] === "+" || g[right] === "-") {
          if (justHitOpeningBracket) {
            // If it did, it skips current bracket and continues searching.
            // This basically prevents inserting bracket inside of the scope.
            continue;
          } else {
            // If it didn't, it's time to insert a bracket
            foundRightBorder = true;
            break;
          }
        }
      } // If on one of the sides there is + or - sign


      if (foundLeftBorder || foundRightBorder) {
        // Slice original string at the specified locations
        var one = g.slice(0, left);
        var two = g.slice(left, right);
        var three = g.slice(right, g.length); // Insert brackets between former three strings to form
        // new string with inserted brackets

        g = one + "(" + two + ")" + three;
      } // Reset border variables


      foundLeftBorder = false;
      foundRightBorder = false;
    }
  }

  return g;
}

/***/ }),

/***/ "./src/server/renderer/scriptGenerator.ts":
/*!************************************************!*\
  !*** ./src/server/renderer/scriptGenerator.ts ***!
  \************************************************/
/*! exports provided: scriptGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scriptGenerator", function() { return scriptGenerator; });
/* harmony import */ var _scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scriptGeneratorFunctions */ "./src/server/renderer/scriptGeneratorFunctions.ts");

var SAMPLE_RATE = 512; // Samples per second
var DURATION = 2; // Seconds, ideally should be dividable by 2
var OFFSET = 0; // Which point should be the centre of the scope
function scriptGenerator(allNodes, allConnections) {
    // Executable to store generated javascript code. Any initialisation code should be here.
    var exeArray = [];
    var executable = "var graphs = {};\n";
    // Setup time
    executable += Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["initTime"])(OFFSET - DURATION / 2, OFFSET + DURATION / 2, 1 / SAMPLE_RATE);
    // Calculated nodes have following shape: "nodeId:outputId"
    var calculatedNodes = [];
    // Statistics object
    var statistics = {
        loopCounter: 0,
        initialTotalNodes: Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["objectSize"])(allNodes),
        initialTotalConnectors: allConnections.length,
        startTime: 0,
        endTime: 0
    };
    // Separates uncalculated nodes from scopes and UI at the start.
    var _a = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["separateNodes"])(allNodes), uncalculatedNodes = _a.uncalculatedNodes, allScopes = _a.allScopes, uiNodes = _a.uiNodes, fftNodes = _a.fftNodes;
    // Separate touch nodes form regular nodes
    var touchNodesSeparated = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["getTouchInputs"])(uncalculatedNodes);
    uncalculatedNodes = touchNodesSeparated.uncalculatedNodes;
    // Deal with touch Controls
    var touchNodes = touchNodesSeparated.touchNodes;
    executable += Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["generateTouchControllers"])(touchNodes);
    for (var t in touchNodes) {
        for (var o in touchNodes[t].outputs) {
            calculatedNodes.push(t + ":" + touchNodes[t].outputs[o].title);
        }
    }
    // Connection Dictionary contains connections in key: value format, where
    // both contain nodeId and settingId as strings separated by a colon.
    var connectionDictionary = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["generateConnectionDictionary"])(allConnections);
    // General rules for algorithm writing:
    // * use as many functions as possible (in performance bounds)
    // * 
    // 0. Loop through uncalculated nodes and find scopes. Scopes do not have outputs, so no need to find inputs.
    // 0.0 Do it in a function?
    // 1. Loop until all nodes are calculated
    // |   1. Check if node was calculated before, if yes go to next node. (function)
    // |   2. If was not calculated:
    // |   |   1. Check if all connected inputs are connected to the calculated nodes, if not - go to next node. (function)
    // |   |   2. If yes, save all unconnected inputs (value from default value). (function for each save)
    // |   |   3. Check if output is pointing to a generator. (function)
    // |   |   4. If yes, parse generator
    // |   |   |   1. Scan generator and save variables
    // |   |   |   2. If variable is a generator go to step 1.2.4
    // |   |   |   3. Loop until all generators were parsed
    // |   |   | ----------- In following, inputs are checked first since setting can be an input ----------------
    // |   |   5. Check if output is pointing to an input, if yes assign input variable to the output variable
    // |   |   6. Check if output is pointing to a setting, if yes assign constant to the setting
    // 2. For each scope:
    // |   1. Get all inputs and save them in variables (assumed to be calculated since termination condition from step 1 is based on all nodes being calculated.)
    // |   2. Parse first generator and generate scope output variable (making sure that all variables from generator were saved beforehand)
    // |   3. Generate an array of output data based on general (or connected) time array and save it into a variable
    // |   4. Create redraw function, inside that function:
    // |   |   1. Find appropriate canvas node in the dom
    // |   |   2. Get context
    // |   |   3. Repopulate graph array with new graphs.
    // |   5. Create updateData function, inside that function:
    // |   |   1. Loop through graph array and update graphs with new data.
    // 0.0 Loop through all ui nodes and save their output variable names
    for (var nodeKey in uiNodes) {
        // Save current node into a constant
        var currentNode = uiNodes[nodeKey];
        var outputKey = currentNode.outputs[0].title;
        executable += "document.getElementById(\"" + nodeKey + "Input\").oninput = function (e) {\n            " + nodeKey + outputKey + " = function (t) {\n                return parseFloat(e.target.value)\n            };\n            document.getElementById(\"" + nodeKey + "Indicator\").innerText = e.target.value;\n            update();\n        };\n";
        executable += "var " + nodeKey + outputKey + " = function (t) { return " + uiNodes[nodeKey].settings[3].value + "};\n";
        calculatedNodes.push(nodeKey + ":" + outputKey);
        delete uncalculatedNodes[nodeKey];
    }
    // 1. Loop until all nodes are calculated and count number of iterations for statistics
    for (statistics.loopCounter = 0; Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["objectSize"])(uncalculatedNodes) > 0; statistics.loopCounter++) {
        // Loop through all uncalculated nodes
        for (var nodeKey in uncalculatedNodes) {
            // Save current node into a constant
            var currentNode = uncalculatedNodes[nodeKey];
            // Go to next node if not all connected inputs were calculated already
            if (!Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["allInputsCalculated"])(nodeKey, currentNode.inputs, allConnections, calculatedNodes))
                continue;
            var currentNodeCalculatedOutputs = [];
            // Loop through every output of the node to calculate them
            for (var o = 0; o < currentNode.outputs.length; o++) {
                var outputKey = currentNode.outputs[o].title;
                // If current output was calculated already, skip to next one
                if (Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["wasCalculated"])(calculatedNodes, nodeKey, outputKey)) {
                    currentNodeCalculatedOutputs.push(nodeKey + ":" + outputKey);
                    continue;
                }
                // If not, calculate it and append to the executable text.
                var _b = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["calculateOutput"])(nodeKey, outputKey, currentNode, allConnections), exe = _b.exe, wasSuccessful = _b.wasSuccessful;
                if (wasSuccessful) {
                    executable += exe;
                    calculatedNodes.push(nodeKey + ":" + outputKey);
                }
                else {
                    console.error("Could not generate output code: " + nodeKey + " - " + outputKey + " | scriptGenerator.ts");
                }
            }
            if (currentNodeCalculatedOutputs.length === currentNode.outputs.length) {
                delete uncalculatedNodes[nodeKey];
            }
        }
    }
    // 2. Loop through all scopes and draw graphs
    exeArray.push(executable);
    executable = "";
    executable += "function update() {\n";
    // Loop through time scopes
    for (var s in allScopes) {
        var currentScope = allScopes[s];
        var _c = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["getOtherSideOfConnector"])(allConnections, null, { nodeId: s, settingId: "signal" }), otherNodeId = _c.otherNodeId, otherSettingId = _c.otherSettingId;
        executable += "\n        if(graphs." + s + ") {\n            let newData = [];\n            for(let i = 0; i < t.length; i++) {newData.push(" + otherNodeId + otherSettingId + "(t[i]));}\n            graphs." + s + ".data.datasets[0].data = newData;\n            graphs." + s + ".update();\n        } else {\n            let canvasNode = document.getElementById(\"" + s + "\");\n\n            var viewSize = {\n                x: canvasNode.parentNode.offsetWidth,\n                y: canvasNode.parentNode.offsetHeight\n            }\n            \n            var w = viewSize.x;\n            var h = viewSize.y;\n            \n            canvasNode.width = w;\n            canvasNode.height = h;\n            \n            var ctx = canvasNode.getContext(\"2d\");\n\n            let data = [];\n\n            for(let i = 0; i < t.length; i++) {\n                data.push(" + otherNodeId + otherSettingId + "(t[i]));\n            }\n\n            var myChart = new Chart(ctx, {\n                type: 'line',\n                data: {labels: t.map(ti => ti.toFixed(2)),\n                    datasets: [\n                        {\n                            label: \"signal\",\n                            backgroundColor: 'rgba(0, 0, 0, 0)',\n                            borderColor: '" + currentScope.settings[1].value + "',\n                            data: data\n                        }\n                    ]\n                }, options: {\n                    elements: {\n                        line: {\n                            tension: 0.4,\n                            stepped: false\n                        }, point: {\n                            radius: 0,\n                            hitRadius: 0,\n                            hoverRadius: 0\n                        }\n                    }, animation: {\n                        duration: 0\n                    }, tooltips: {\n                        enabled: false\n                    }, legend: {\n                        display: false\n                    }" + (currentScope.settings[0].value == "true" ? '' : ", scales: {\n                        xAxes: [{\n                            ticks: {\n                                max: 1,\n                                min: -1,\n                                stepSize: 0.01\n                            }\n                        }], yAxes: [{\n                            ticks: {\n                                max: 2,\n                                min: 0,\n                                stepSize: 0.5\n                            }\n                        }]\n                    }") + ", title: {\n                        display: true,\n                        text: '" + currentScope.title + "',\n                        position: 'left'\n                    }\n                }\n            });\n\n            graphs." + s + " = myChart;\n        }";
        exeArray.push(executable);
        executable = "";
    }
    // Loop through fft scopes
    for (var f in fftNodes) {
        var currentScope = fftNodes[f];
        var _d = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["getOtherSideOfConnector"])(allConnections, null, { nodeId: f, settingId: "signal" }), otherNodeId = _d.otherNodeId, otherSettingId = _d.otherSettingId;
        executable += "\n        if(graphs." + f + ") {\n            let data = [];\n            for(let i = 0; i < t.length; i++) {data.push(" + otherNodeId + otherSettingId + "(t[i]));}\n\n            let f = new FFT(data.length);\n            let complexOutput = f.createComplexArray();\n            f.realTransform(complexOutput, data);\n            let realOutput = new Array(data.length);\n            realOutput.fill(0);\n            f.fromComplexArray(complexOutput, realOutput);\n\n            realOutput = realOutput.filter((val, i) => i%2 == 0 || i == 0);\n\n            realOutput = realOutput.splice(0, " + currentScope.settings[3].value + ");\n            \n            realOutput = realOutput.map(val => val * 2 / data.length);\n\n            graphs." + f + ".data.datasets[0].data = realOutput;\n            graphs." + f + ".update();\n        } else {\n            let canvasNode = document.getElementById(\"" + f + "\");\n\n            var viewSize = {\n                x: canvasNode.parentNode.offsetWidth,\n                y: canvasNode.parentNode.offsetHeight\n            }\n            \n            var w = viewSize.x;\n            var h = viewSize.y;\n            \n            canvasNode.width = w;\n            canvasNode.height = h;\n            \n            var ctx = canvasNode.getContext(\"2d\");\n\n            let data = [];\n\n            for(let i = 0; i < t.length; i++) {\n                data.push(" + otherNodeId + otherSettingId + "(t[i]));\n            }\n\n            let f = new FFT(data.length);\n            let complexOutput = f.createComplexArray();\n            f.realTransform(complexOutput, data);\n            let realOutput = new Array(data.length);\n            realOutput.fill(0);\n            f.fromComplexArray(complexOutput, realOutput);\n\n            realOutput = realOutput.filter((val, i) => i%2 == 0 || i == 0);\n\n            realOutput = realOutput.splice(0, " + currentScope.settings[3].value + ");\n\n            realOutput = realOutput.map(val => val * 2 / data.length);\n\n            var myChart = new Chart(ctx, {\n                type: 'bar',\n                data: {\n                    labels: realOutput.splice(0, " + currentScope.settings[3].value + ").map((val, i) => i),\n                    datasets: [\n                        {\n                            label: \"signal\",\n                            backgroundColor: 'rgba(245, 23, 54, 0.4)',\n                            borderColor: 'rgb(0, 0, 0)',\n                            data: realOutput\n                        }\n                    ]\n                }, options: {\n                    animation: {\n                        duration: 0\n                    }, tooltips: {\n                        enabled: true\n                    }, legend: {\n                        display: " + (currentScope.inputs.length > 1) + "\n                    }, title: {\n                        display: true,\n                        text: '" + currentScope.title + "',\n                        position: 'left'\n                    }\n                }\n            });\n\n            graphs." + f + " = myChart;\n        }";
    }
    executable += "};\n";
    executable += "update();";
    exeArray.push(executable);
    executable = "";
    return exeArray;
}


/***/ }),

/***/ "./src/server/renderer/scriptGeneratorFunctions.ts":
/*!*********************************************************!*\
  !*** ./src/server/renderer/scriptGeneratorFunctions.ts ***!
  \*********************************************************/
/*! exports provided: separateNodes, generateConnectionDictionary, objectSize, wasCalculated, getOtherSideOfConnector, allInputsCalculated, calculateOutput, getTouchInputs, initTime, generateTouchControllers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateNodes", function() { return separateNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateConnectionDictionary", function() { return generateConnectionDictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectSize", function() { return objectSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wasCalculated", function() { return wasCalculated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOtherSideOfConnector", function() { return getOtherSideOfConnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allInputsCalculated", function() { return allInputsCalculated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateOutput", function() { return calculateOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchInputs", function() { return getTouchInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTime", function() { return initTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTouchControllers", function() { return generateTouchControllers; });
/* harmony import */ var _generatorTokenizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatorTokenizer */ "./src/server/renderer/generatorTokenizer.ts");
/* harmony import */ var _tokenToJs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenToJs */ "./src/server/renderer/tokenToJs.js");


// Get all nodes that are not scopes, and save scopes into their own collection
function separateNodes(allNodes) {
    var uncalculated = {};
    var scopes = {};
    var uiNodes = {};
    var fftNodes = {};
    for (var i in allNodes) {
        // Check if it is a UI node
        var isThirdLetterUpperCase = String(i).substr(2, 1).toUpperCase() === String(i).substr(2, 1);
        var isUI = String(i).substr(0, 2) === "ui";
        var isActualUI = isUI && isThirdLetterUpperCase;
        // Check if it is a scope
        var isScope = String(i).substr(0, 5) === "scope";
        // Check if it is an fft scope
        var isFFT = String(i).substr(0, 3) === "fft";
        // Do separation
        if (isScope) {
            scopes[i] = allNodes[i];
        }
        else if (isActualUI) {
            uiNodes[i] = allNodes[i];
        }
        else if (isFFT) {
            fftNodes[i] = allNodes[i];
        }
        else {
            uncalculated[i] = allNodes[i];
        }
    }
    // return results
    return {
        uncalculatedNodes: uncalculated,
        allScopes: scopes,
        uiNodes: uiNodes,
        fftNodes: fftNodes
    };
}
// Generate connection dictionary
function generateConnectionDictionary(allConnections) {
    var connectionDictionary = {};
    for (var i = 0; i < allConnections.length; i++) {
        var connectorStart = allConnections[i].connectorStart;
        var connectorEnd = allConnections[i].connectorEnd;
        var connectorStartCombined = connectorStart.nodeId + ":" + connectorStart.settingId;
        var connectorEndCombined = connectorEnd.nodeId + ":" + connectorEnd.settingId;
        connectionDictionary[connectorStartCombined] = connectorEndCombined;
    }
    return connectionDictionary;
}
// Calculate object size
function objectSize(obj) {
    var c = 0;
    for (var i in obj)
        c++;
    return c++;
}
// Check if node was calculated already
function wasCalculated(calculatedNodes, nodeKey, outputKey) {
    for (var i = 0; i < calculatedNodes.length; i++) {
        // Split string from calculated nodes array and get node and output keys
        var splitted = calculatedNodes[i].split(":");
        var calculatedNode = splitted[0];
        var calculatedOutput = splitted[1];
        if (calculatedNode === nodeKey && calculatedOutput === outputKey)
            return true;
    }
    return false;
}
// Get nodeId and settingId of the other side of the connection:
function getOtherSideOfConnector(allConnections, connectorInput, connectorOutput) {
    if (connectorInput) {
        // console.log("Scanning connector starts...");
        for (var i = 0; i < allConnections.length; i++) {
            var connector = allConnections[i];
            // Check if connector start
            if (connector.connectorStart.nodeId === connectorInput.nodeId) {
                if (connector.connectorStart.settingId === connectorInput.settingId) {
                    return {
                        otherNodeId: connector.connectorEnd.nodeId,
                        otherSettingId: connector.connectorEnd.settingId
                    };
                }
            }
        }
    }
    else if (connectorOutput) {
        // console.log("Scanning connector ends... ", allConnections.length);
        for (var i = 0; i < allConnections.length; i++) {
            var connector = allConnections[i];
            // console.log("Comparing following connectors: ", connector.connectorEnd, connectorOutput)
            // Check if connector end
            if (connector.connectorEnd.nodeId === connectorOutput.nodeId) {
                if (connector.connectorEnd.settingId === connectorOutput.settingId) {
                    return {
                        otherNodeId: connector.connectorStart.nodeId,
                        otherSettingId: connector.connectorStart.settingId
                    };
                }
            }
        }
    }
    return {
        otherNodeId: null,
        otherSettingId: null
    };
}
// Check if all connected inputs in the node are connected to the outputs that were already calculated or are not connected
function allInputsCalculated(nodeId, inputs, allConnections, calculatedNodes) {
    var data = [];
    for (var i = 0; i < inputs.length; i++) {
        var currentData = false;
        var _a = getOtherSideOfConnector(allConnections, null, { nodeId: nodeId, settingId: inputs[i].title }), otherNodeId = _a.otherNodeId, otherSettingId = _a.otherSettingId;
        // If the input is connected
        if (otherNodeId && otherSettingId) {
            // Check if was calculated
            if (wasCalculated(calculatedNodes, otherNodeId, otherSettingId)) {
                currentData = true;
            }
        }
        else {
            // If the input is not connected
            currentData = true;
        }
        data.push(currentData);
    }
    for (var d in data) {
        if (!data[d])
            return false;
    }
    return true;
}
// Function to calculate specific output of the node
function calculateOutput(nodeId, outputKey, currentNode, allConnections) {
    var e = "";
    var generatorId = isGenerator(currentNode, outputKey);
    // Check if output is a generator
    if (generatorId !== Infinity) {
        var outputGenerator = currentNode.generators[generatorId];
        // Generate tokens
        var tokens = Object(_generatorTokenizer__WEBPACK_IMPORTED_MODULE_0__["tokenizeGenerator"])(outputGenerator.value, nodeId);
        // Save variables first
        e += saveVariables(nodeId, currentNode, tokens, allConnections);
        // Save output
        e += Object(_tokenToJs__WEBPACK_IMPORTED_MODULE_1__["tokenToJs"])(nodeId, outputGenerator.title, tokens);
        return {
            exe: e,
            wasSuccessful: true
        };
    }
    var inputId = isInput(currentNode, outputKey);
    if (inputId !== Infinity) {
        e += saveInputVariable(currentNode, allConnections, nodeId, outputKey, inputId);
        e += "var " + nodeId + outputKey + " = function (time) { return " + nodeId + currentNode.inputs[inputId].title + "};\n";
        return {
            exe: e,
            wasSuccessful: true
        };
    }
    var settingId = isSetting(currentNode, outputKey);
    if (settingId !== Infinity) {
        e += "var " + nodeId + outputKey + " = function (time) { return " + currentNode.settings[settingId].value + "};\n";
        return {
            exe: e,
            wasSuccessful: true
        };
    }
    return {
        exe: "",
        wasSuccessful: false
    };
}
function saveVariables(nodeKey, node, code, allConnections) {
    var newExecutable = "";
    for (var s = 0; s < code.length; s++) {
        if (code[s].type === "var") {
            var varName = String(code[s].value);
            var variableName = varName.substr(nodeKey.length, varName.length);
            // -------------------- IF SPECIAL CASE ---------------------
            if (varName === "PI" || varName === "time")
                continue;
            // ----------------------- IF INPUT -------------------------
            // Get input index
            var inputKey = isInput(node, variableName);
            // If variable is the input (if not input it will be Infinity)
            if (inputKey !== Infinity) {
                // Save
                newExecutable += saveInputVariable(node, allConnections, nodeKey, variableName, inputKey);
                // console.log(`Found variable in inputs ${variableName} - ${nodeKey}`);
                // And continue to the next step in the tokenised generator code
                continue;
            }
            // ----------------------- IF GENERATOR -------------------------
            // Get generator index
            var generatorKey = isGenerator(node, variableName);
            // If generator index is not an Infinity, the setting is the generator, and should be processed as one
            if (generatorKey !== Infinity) {
                var generator = node.generators[generatorKey];
                var tokens = Object(_generatorTokenizer__WEBPACK_IMPORTED_MODULE_0__["tokenizeGenerator"])(generator.value, nodeKey);
                newExecutable += saveVariables(nodeKey, node, tokens, allConnections);
                // Save the generator title
                newExecutable += Object(_tokenToJs__WEBPACK_IMPORTED_MODULE_1__["tokenToJs"])(nodeKey, generator.title, tokens);
                // console.log(`Found variable in generators ${variableName} - ${nodeKey}`);
                // Continue to the next token
                continue;
            }
            // ----------------------- IF SETTING -------------------------
            // Get setting index
            var settingKey = isSetting(node, variableName);
            // If setting index is not infinity - it's a match!
            if (settingKey !== Infinity) {
                // console.log(`Found variable in settings ${variableName} - ${nodeKey}`);
                newExecutable += "var " + nodeKey + variableName + " = function (time) { return " + node.settings[settingKey].value + " };\n";
                continue;
            }
            // ----------------------- IF NOT ANY OF THREE -------------------------
            // If not one of previous three, alert user.
            newExecutable += "alert(\"Couldn't find generator variable in the inputs, generators or settings! " + nodeKey + " - " + varName + "\");\n";
        }
        else if (code[s].type === "math" || code[s].type === "scope") {
            newExecutable += saveVariables(nodeKey, node, code[s].code, allConnections);
        }
    }
    return newExecutable;
}
function saveInputVariable(node, allConnections, nodeKey, settingKey, index) {
    var newExecutable;
    var connectorEnd = {
        nodeId: nodeKey,
        settingId: settingKey
    };
    var _a = getOtherSideOfConnector(allConnections, null, connectorEnd), otherNodeId = _a.otherNodeId, otherSettingId = _a.otherSettingId;
    // console.log(`Tracing back the input: ${nodeKey}:${settingKey} -> ${otherNodeId}:${otherSettingId}`);
    // If node is connected
    if (otherNodeId && otherSettingId) {
        // Save 
        newExecutable = "var " + nodeKey + settingKey + " = function (time) { return " + otherNodeId + otherSettingId + "(time)};\n";
    }
    else {
        // Save default value
        newExecutable = "var " + nodeKey + settingKey + " = function (time) { return " + node.inputs[index].default + "};\n";
    }
    return newExecutable;
}
function isInput(node, settingKey) {
    // Check if variable is in inputs
    if (node.inputs) {
        for (var i = 0; i < node.inputs.length; i++) {
            // If variable is the input, return true
            if (node.inputs[i].title === settingKey) {
                return i;
            }
        }
    }
    return Infinity;
}
function isGenerator(node, settingKey) {
    // Scan generators
    if (node.generators) {
        if (node.generators.length > 0) {
            for (var g = 0; g < node.generators.length; g++) {
                if (node.generators[g].title === settingKey) {
                    return g;
                }
            }
        }
    }
    return Infinity;
}
function isSetting(node, settingKey) {
    // Scan generators
    if (node.settings) {
        for (var s = 0; s < node.settings.length; s++) {
            if (node.settings[s].title === settingKey) {
                return s;
            }
        }
    }
    return Infinity;
}
function getTouchInputs(allNodes) {
    var newCollection = {};
    var newTouchCollection = {};
    for (var n in allNodes) {
        if (n.substr(0, 10) === "touchInput") {
            newTouchCollection[n] = allNodes[n];
        }
        else {
            newCollection[n] = allNodes[n];
        }
    }
    return {
        uncalculatedNodes: newCollection,
        touchNodes: newTouchCollection
    };
}
function initTime(start, stop, step) {
    var e = "let t = ";
    e += "(function(){\n        let r = [];\n        for(let i = " + start + "; i < " + stop + "; i+=" + step + ") {\n            r.push(i);\n        }\n        return r;\n    })();";
    return e;
}
function generateTouchControllers(nodes) {
    var e = "";
    for (var i in nodes) {
        var node = nodes[i];
        var sensitivity = void 0;
        var attachedScope = void 0;
        // Separate settings
        for (var s in node.settings) {
            if (node.settings[s].title === "Sensitivity") {
                sensitivity = node.settings[s];
            }
            else if (node.settings[s].title === "Scope") {
                attachedScope = node.settings[s];
            }
            else {
                console.error("Touch node is not correctly formatted.");
            }
        }
        var offsetScript = "if(!didAttach" + i + ") {\n            document.getElementById(\"" + attachedScope.value + "\").onmousedown = function (e) {\n                window.onmouseup = function () {\n                    window.onmouseup = null;\n                    window.onmousemove = null;\n                }\n\n                window.onmousemove = function (e) {\n                    " + i + "OffsetXData += e.movementX*" + parseFloat(sensitivity.value) + ";\n                    " + i + "OffsetYData += e.movementY*" + parseFloat(sensitivity.value) + ";\n\n                    window.update();\n                }\n            }\n\n            document.getElementById(\"" + attachedScope.value + "\").ontouchstart = function (e) {\n                window.touchLastPositionX = e.touches[0].pageX;\n                window.touchLastPositionY= e.touches[0].pageY;\n\n                window.ontouchend = function () {\n                    window.ontouchend = null;\n                    window.ontouchmove = null;\n                }\n\n                window.ontouchmove = function (e) {\n                    let movementX = window.touchLastPositionX - e.changedTouches[0].pageX;\n                    let movementY = window.touchLastPositionY - e.changedTouches[0].pageY;\n                    \n                    " + i + "OffsetXData += movementX*" + parseFloat(sensitivity.value) + ";\n                    " + i + "OffsetYData += movementY*" + parseFloat(sensitivity.value) + ";\n\n                    window.update();\n\n                    window.touchLastPositionX = e.changedTouches[0].pageX;\n                    window.touchLastPositionY = e.changedTouches[0].pageY;\n                }\n            };\n\n            didAttach" + i + "OffsetX = true;\n            didAttach" + i + "OffsetY = true;\n        }\n";
        for (var o in node.outputs) {
            e += "var " + i + node.outputs[o].title + "Data = 1;\n";
            e += "var didAttach" + i + " = false;\n";
            e += "var " + i + node.outputs[o].title + " = function(time) { return " + i + node.outputs[o].title + "Data };\n";
        }
        e += offsetScript;
    }
    return e;
}


/***/ }),

/***/ "./src/server/renderer/tokenToJs.js":
/*!******************************************!*\
  !*** ./src/server/renderer/tokenToJs.js ***!
  \******************************************/
/*! exports provided: tokenToJs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenToJs", function() { return tokenToJs; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// As a reminder:
// One item in an array of tokens can only be an object and only have following parameters:
// * type           - for every token
// * value          - for every token
// * code  - for scopes (math/regular)
function tokenToJs(nodeId, variableName, jsonTokens) {
  var executableString = "var ".concat(nodeId).concat(variableName, " = function(time) { return ");
  executableString += calculateCode(_toConsumableArray(jsonTokens));
  return executableString + "};\n";
}

function calculateCode(json) {
  var executableString = "";
  if (json == null) return "";

  for (var i = 0; i < json.length; i++) {
    // Variables for convenience
    var token = json[i];
    var type = token.type;
    var value = token.value; // Actual logic

    if (type != "scope" && type != "math") {
      // One of the basic types
      if (value === 'PI') {
        executableString += "Math.PI";
      } else if (type === "var" && value !== "time") {
        executableString += "".concat(value, "(time)");
      } else {
        executableString += value;
      }
    } else if (type === "math") {
      // Math function
      if (value === "sin") {
        // If one of the supported functions, recursevly generate string from the code parameter
        executableString += "Math.sin(";
        executableString += calculateCode(token.code);
        executableString += ")";
      } else if (value === "cos") {
        // If one of the supported functions, recursevly generate string from the code parameter
        executableString += "Math.cos(";
        executableString += calculateCode(token.code);
        executableString += ")";
      } else if (value === "tan") {
        // If one of the supported functions, recursevly generate string from the code parameter
        executableString += "Math.tan(";
        executableString += calculateCode(token.code);
        executableString += ")";
      } else {
        // If not supported function, throw error to the console
        console.error("Unsupported math function !!!");
      }
    } else {
      // Regular scope
      executableString += "(" + calculateCode(token.code) + ")";
    }
  }

  return executableString;
}

/***/ }),

/***/ "./src/server/renderer/viewerDom.js":
/*!******************************************!*\
  !*** ./src/server/renderer/viewerDom.js ***!
  \******************************************/
/*! exports provided: jsxDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsxDom", function() { return jsxDom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var styles = function styles(settingsCount, scopeCount) {
  var isOnlyScopes = settingsCount === 0 && scopeCount > 0;
  var isOnlySettings = settingsCount > 0 && scopeCount === 0;
  var isSettingsAndScopes = settingsCount > 0 && scopeCount > 0;
  var isDividableByTwo = scopeCount % 2 == 0;
  return "#signals-embedding-container {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        ".concat(isSettingsAndScopes ? "display: grid;\n            grid-template-columns: 300px calc(100% - 300px);\n            grid-template-rows: 100%;" : '', "\n\n    }\n\n    .signals-canvas {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .canvas-container {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        position: relative;\n    }\n\n    #signals-views {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        display: grid;\n        ").concat(!isDividableByTwo ? "grid-template-rows: repeat(".concat(scopeCount, ", ").concat(parseFloat(100 / scopeCount).toFixed(2), "%);\n        grid-template-columns: auto;") : "grid-template-rows: repeat(".concat(scopeCount / 2, ", 1fr);\n        grid-template-columns: 50% 50%;"), "\n        ").concat(isSettingsAndScopes ? "grid-column: 2 / 3;" : '', "\n    }\n\n    ").concat(isSettingsAndScopes ? "#signals-settings {\n        margin: 0;\n        padding: 10px;\n        width: calc(100% - 20px);\n        height: calc(100% - 20px);\n        grid-column: 1 / 2;\n        overflow-x: hidden;\n        overflow-y: auto;\n    }\n\n    #signals-settings-list {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n\n        list-style: none;\n    }\n\n    .signals-settings-list-item {\n        display: grid;\n        grid-template-columns: 3fr 4fr;\n        grid-gap: 5px;\n    }\n\n    .signals-settings-slider {\n        grid-template-columns: 3fr 4fr 1fr;\n    }\n\n    .signals-settings-slider div {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .signals-settings-list-item h6 {\n        margin: 2px;\n        padding: 0;\n        grid-column: 1 / 2;\n        font-size: 12pt;\n        font-weight: normal;\n    }\n\n    .signals-settings-list-item input {\n\n    }\n    \n    .signals-settings-list-label {\n        width: 100%;\n        height: fit-content;\n        margin: 0;\n        padding: 0;\n        font-size: 16pt;\n        text-align: center;\n    }" : '', "\n");
};

function jsxDom(nodes) {
  var canvasNodes = []; // Get all kinds of output nodes

  for (var key in nodes) {
    var currentNode = nodes[key];

    if (String(key).substr(0, 5) === "scope" || String(key).substr(0, 3) === "fft") {
      currentNode.id = key;
      canvasNodes.push(currentNode);
    }
  }

  var settingsNodes = [];
  var categories = [];

  for (var _key in nodes) {
    var _currentNode = nodes[_key];
    var isThirdLetterUpperCase = String(_key).substr(2, 1).toUpperCase() === String(_key).substr(2, 1);
    var isUI = String(_key).substr(0, 2) === "ui";
    var isActualUI = isUI && isThirdLetterUpperCase;

    if (isActualUI) {
      var categorySavedAlready = false;
      var currentCategory = _currentNode.settings[0].value;

      for (var c in categories) {
        if (categories[c] == currentCategory) {
          categorySavedAlready = true;
          break;
        }
      }

      if (!categorySavedAlready) {
        categories.push(currentCategory);
      }

      _currentNode.id = _key;
      settingsNodes.push(_currentNode);
    }
  }

  settingsNodes.sort(function (a, b) {
    var cat1 = a.settings[0].value;
    var cat2 = b.settings[0].value;

    if (cat1 === cat2) {
      var order1 = parseInt(a.settings[2].value);
      var order2 = parseInt(b.settings[2].value);
      return order1 - order2;
    } else {
      var catArr = [cat1, cat2];
      catArr.sort();

      if (catArr[0] === cat1) {
        return -1;
      } else {
        return 1;
      }
    }
  }); // Sort by category:

  categories.sort();
  var newSettingsNodes = [];

  for (var _c in categories) {
    for (var s in settingsNodes) {
      var _currentNode2 = settingsNodes[s];

      if (_currentNode2.settings[0].value === categories[_c]) {
        newSettingsNodes.push(_currentNode2);
        delete settingsNodes[s];
      }
    }
  } // Generate Dynamic Stuff


  var canvasJsx = canvasNodes.length > 0 ? canvasNodes.map(function (node) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'canvas-container'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
      className: "signals-canvas",
      id: "".concat(node.id),
      key: node.id
    }));
  }) : null;
  var lastCategory = "";
  var settings = newSettingsNodes.length > 0 ? newSettingsNodes.map(function (node) {
    var inputElement;
    var isSlider = false;
    var shouldSaveCategory = false;
    var currentCategory = node.settings[0].value;

    if (lastCategory !== currentCategory) {
      shouldSaveCategory = true;
      lastCategory = currentCategory;
    }

    if (node.id.substr(0, 8) === "uiNumber") {
      // 'uiNumber' settings:
      // 0 : Category - Category that controllers are sorted by.
      // 1 : Label    - Label next to the controller.
      // 2 : Order    - Vertical position of the controller in the category.
      // 3 : Default  - Default value
      // 4 : Min      - Minimum value
      // 5 : Max      - Maximum value
      // 6 : Step     - Step of the value
      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: 'number',
        id: node.id + "Input",
        defaultValue: node.settings[3].value,
        min: node.settings[4].value,
        max: node.settings[5].value,
        step: node.settings[6].value,
        readOnly: true
      });
    } else if (node.id.substr(0, 8) === "uiSlider") {
      isSlider = true; // 'uiSlider' settings:
      // 0 : Category - Category that controllers are sorted by.
      // 1 : Label    - Label next to the controller.
      // 2 : Order    - Vertical position of the controller in the category.
      // 3 : Default  - Default value
      // 4 : Min      - Minimum value
      // 5 : Max      - Maximum value
      // 6 : Step     - Step of the value

      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: 'range',
        id: node.id + "Input",
        defaultValue: node.settings[3].value,
        min: node.settings[4].value,
        max: node.settings[5].value,
        step: node.settings[6].value,
        readOnly: true
      });
    } else {
      // Returns message if the type is unsopported
      inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, 'unsupported type');
    }

    if (shouldSaveCategory) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: node.id + currentCategory
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: currentCategory,
        className: 'signals-settings-list-label'
      }, currentCategory), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: 'signals-settings-list-item ' + (isSlider ? "signals-settings-slider" : ""),
        id: node.id,
        key: node.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: 'signals-settings-list-item-label',
        id: node.id + "Label"
      }, node.settings[1].value), inputElement, isSlider ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: node.id + "Indicator"
      }, node.settings[3].value) : null));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: 'signals-settings-list-item ' + (isSlider ? "signals-settings-slider" : ""),
        id: node.id,
        key: node.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: 'signals-settings-list-item-label',
        id: node.id + "Label"
      }, node.settings[1].value), inputElement, isSlider ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: node.id + "Indicator"
      }, node.settings[3].value) : null);
    }
  }) : null; // Generate Final JSX

  var SignalViews = canvasJsx ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "signals-views"
  }, canvasJsx) : null;
  var SettingsJsx = settings ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "signals-settings"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: 'signals-settings-list'
  }, settings)) : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "signals-embedding-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, styles(newSettingsNodes.length, canvasNodes.length)), SettingsJsx, SignalViews);
}

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2dlbmVyYXRvclRva2VuaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVuZGVyZXIvc2NvcGVGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3Rva2VuVG9Kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3ZpZXdlckRvbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiZGF0ZU5vdyIsIlN0cmluZyIsIkRhdGUiLCJ0b1N0cmluZyIsInN1YnN0ciIsImRhdGFiYXNlIiwicHJvamVjdHNJbmZvIiwicHJvamVjdElkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm93bmVyIiwicHJvamVjdE1vZGVscyIsIm1vZHVsYXRpb24iLCJmb3VyaWVyU2VyaWVzIiwidXNlcnMiLCJhZG1pbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJuZXdQcm9qZWN0IiwibmV3SWQiLCJpIiwicGFyc2VJbnQiLCJwdXNoIiwicHJvamVjdE1vZGVsVGVtcGxhdGUiLCJzYXZlUHJvamVjdCIsImpzb24iLCJuZXdQcm9qZWN0VmVyc2lvbiIsImFsbENvbm5lY3Rpb25zIiwiYWxsTm9kZXMiLCJjb21wb3NlckNvb3JkaW5hdGVzIiwiaXNDcmVhdGluZ0Nvbm5lY3Rpb24iLCJmb2N1c2VkIiwiZ3JpZFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsIngiLCJ5Iiwiem9vbUxldmVsIiwidXNlIiwic3RhdGljIiwiX19kaXJuYW1lIiwiZ2V0IiwicmVxIiwicmVzIiwicGFyYW1zIiwiaWQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2VuZCIsImZzIiwicmVhZEZpbGUiLCJwYXRoIiwicmVzb2x2ZSIsImVyciIsImRhdGEiLCJlcnJvciIsInJlcGxhY2UiLCJwcm9qZWN0RGF0YSIsImxlbmd0aCIsInByb2plY3QiLCJwaWQiLCJKU09OIiwic3RyaW5naWZ5IiwibGlicmFyeU5vZGVzIiwic2V0SGVhZGVyIiwicmVuZGVyZWRTdHJpbmciLCJyZW5kZXJTaWduYWxzIiwiZW5kIiwicHJvamVjdHNBcnJheSIsImJvZHlQYXJzZXIiLCJwb3N0IiwicHJvamVjdEpzb24iLCJib2R5IiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwicmVuZGVySHRtbCIsInJlcXVlc3RKc29uIiwianN4IiwianN4RG9tIiwianN4U3RyaW5nIiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJzY3JpcHRBcnJheSIsInNjcmlwdEdlbmVyYXRvciIsImNvbXBvc2VkU2NyaXB0U3RyaW5nIiwicyIsInNjcmlwdHMiLCJzY3JpcHRlZEh0bWwiLCJzbGljZSIsImZpeFNjb3BlcyIsImdlbiIsImciLCJmb3VuZExlZnRCb3JkZXIiLCJmb3VuZFJpZ2h0Qm9yZGVyIiwianVzdEhpdE9wZW5pbmdCcmFja2V0IiwianVzdEhpdENsb3NpbmdCcmFja2V0IiwibGVmdCIsInJpZ2h0Iiwib25lIiwidHdvIiwidGhyZWUiLCJ0b2tlblRvSnMiLCJub2RlSWQiLCJ2YXJpYWJsZU5hbWUiLCJqc29uVG9rZW5zIiwiZXhlY3V0YWJsZVN0cmluZyIsImNhbGN1bGF0ZUNvZGUiLCJ0b2tlbiIsInR5cGUiLCJ2YWx1ZSIsImNvZGUiLCJzdHlsZXMiLCJzZXR0aW5nc0NvdW50Iiwic2NvcGVDb3VudCIsImlzT25seVNjb3BlcyIsImlzT25seVNldHRpbmdzIiwiaXNTZXR0aW5nc0FuZFNjb3BlcyIsImlzRGl2aWRhYmxlQnlUd28iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIm5vZGVzIiwiY2FudmFzTm9kZXMiLCJrZXkiLCJjdXJyZW50Tm9kZSIsInNldHRpbmdzTm9kZXMiLCJjYXRlZ29yaWVzIiwiaXNUaGlyZExldHRlclVwcGVyQ2FzZSIsInRvVXBwZXJDYXNlIiwiaXNVSSIsImlzQWN0dWFsVUkiLCJjYXRlZ29yeVNhdmVkQWxyZWFkeSIsImN1cnJlbnRDYXRlZ29yeSIsInNldHRpbmdzIiwiYyIsInNvcnQiLCJhIiwiYiIsImNhdDEiLCJjYXQyIiwib3JkZXIxIiwib3JkZXIyIiwiY2F0QXJyIiwibmV3U2V0dGluZ3NOb2RlcyIsImNhbnZhc0pzeCIsIm1hcCIsIm5vZGUiLCJsYXN0Q2F0ZWdvcnkiLCJpbnB1dEVsZW1lbnQiLCJpc1NsaWRlciIsInNob3VsZFNhdmVDYXRlZ29yeSIsIlNpZ25hbFZpZXdzIiwiU2V0dGluZ3NKc3giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtDQUdBOztBQUNBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHQyw4Q0FBTyxFQUFuQixDLENBRUE7O0NBR0E7O0NBSUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFNQyxNQUFNLENBQUNDLElBQUksR0FBR0MsUUFBUCxFQUFELENBQU4sQ0FBMEJDLE1BQTFCLENBQWlDLENBQWpDLEVBQW9DLEVBQXBDLElBQTBDLEtBQWhEO0FBQUEsQ0FBaEI7O0FBRUEsSUFBSUMsUUFBUSxHQUFHO0FBQ1hDLGNBQVksRUFBRSxDQUFDO0FBQ1hDLGFBQVMsRUFBRSxHQURBO0FBRVhDLFNBQUssRUFBRSxrQkFGSTtBQUdYQyxlQUFXLEVBQUUsb0ZBSEY7QUFJWEMsU0FBSyxFQUFFO0FBSkksR0FBRCxFQUtYO0FBQ0NILGFBQVMsRUFBRSxHQURaO0FBRUNDLFNBQUssRUFBRSxnQkFGUjtBQUdDQyxlQUFXLEVBQUUscURBSGQ7QUFJQ0MsU0FBSyxFQUFFO0FBSlIsR0FMVyxDQURIO0FBWVhDLGVBQWEsRUFBRSxtQkFDSkMsc0RBREkscUJBSUpDLHlEQUpJLEVBWko7QUFtQlhDLE9BQUssRUFBRTtBQUNIQyxTQUFLLEVBQUU7QUFDSEMsY0FBUSxFQUFFLE9BRFA7QUFFSEMsY0FBUSxFQUFFO0FBRlA7QUFESixHQW5CSTtBQXlCWEMsWUFBVSxFQUFFLG9CQUFVRixRQUFWLEVBQW9CUixLQUFwQixFQUEyQkMsV0FBM0IsRUFBd0M7QUFDaEQ7QUFDQSxRQUFJVSxLQUFLLEdBQUcsQ0FBWjs7QUFFQSxTQUFLLElBQUlDLENBQVQsSUFBYyxLQUFLZCxZQUFuQixFQUFpQztBQUM3QixVQUFJZSxRQUFRLENBQUMsS0FBS2YsWUFBTCxDQUFrQmMsQ0FBbEIsRUFBcUJiLFNBQXRCLENBQVIsR0FBMkNZLEtBQS9DLEVBQXNEQSxLQUFLLEdBQUcsS0FBS2IsWUFBTCxDQUFrQmMsQ0FBbEIsRUFBcUJiLFNBQTdCO0FBQ3pEOztBQUVEWSxTQUFLLEdBUjJDLENBVWhEOztBQUNBLFNBQUtiLFlBQUwsQ0FBa0JnQixJQUFsQixDQUF1QjtBQUNuQmYsZUFBUyxFQUFFWSxLQURRO0FBRW5CWCxXQUFLLEVBQUVBLEtBRlk7QUFHbkJDLGlCQUFXLEVBQUVBLFdBSE07QUFJbkJDLFdBQUssRUFBRU07QUFKWSxLQUF2QjtBQU9BLFNBQUtMLGFBQUwsQ0FBbUJXLElBQW5CLG1CQUNPQyxvQkFEUDtBQUlBLFdBQU9KLEtBQVA7QUFDSCxHQWhEVTtBQWlEWEssYUFBVyxFQUFFLHFCQUFVakIsU0FBVixFQUFxQmtCLElBQXJCLEVBQTJCO0FBQ3BDLFFBQU1DLGlCQUFpQixHQUFHO0FBQ3RCQyxvQkFBYyxFQUFFRixJQUFJLENBQUNFLGNBREM7QUFFdEJDLGNBQVEsRUFBRUgsSUFBSSxDQUFDRyxRQUZPO0FBR3RCQyx5QkFBbUIsRUFBRUosSUFBSSxDQUFDSSxtQkFISjtBQUl0QkMsMEJBQW9CLEVBQUVMLElBQUksQ0FBQ0k7QUFKTCxLQUExQjtBQU9BLFNBQUtsQixhQUFMLENBQW1CSixTQUFTLEdBQUcsQ0FBL0IsSUFBb0NtQixpQkFBcEM7QUFDSDtBQTFEVSxDQUFmO0FBNkRBLElBQU1ILG9CQUFvQixHQUFHO0FBQ3pCSSxnQkFBYyxFQUFFLEVBRFM7QUFFekJDLFVBQVEsRUFBRSxFQUZlO0FBR3pCQyxxQkFBbUIsRUFBRTtBQUNqQkUsV0FBTyxFQUFFLElBRFE7QUFFakJDLFlBQVEsRUFBRSxFQUZPO0FBR2pCQyxVQUFNLEVBQUUsQ0FIUztBQUlqQkMsU0FBSyxFQUFFLENBSlU7QUFLakJDLEtBQUMsRUFBRSxDQUxjO0FBTWpCQyxLQUFDLEVBQUUsQ0FOYztBQU9qQkMsYUFBUyxFQUFFO0FBUE0sR0FISTtBQVl6QlAsc0JBQW9CLEVBQUUsS0FaRyxDQWU3Qjs7QUFmNkIsQ0FBN0I7QUFnQkFoQyxHQUFHLENBQUN3QyxHQUFKLENBQVF2Qyw4Q0FBTyxDQUFDd0MsTUFBUixDQUFlQyxTQUFTLEdBQUcsZ0JBQTNCLENBQVIsRSxDQUVBOztBQUNBMUMsR0FBRyxDQUFDMkMsR0FBSixDQUFRLHVCQUFSLEVBQWlDLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzNDLE1BQU1wQyxTQUFTLEdBQUdtQyxHQUFHLENBQUNFLE1BQUosQ0FBV0MsRUFBN0I7QUFDQSxNQUFNN0IsUUFBUSxHQUFHMEIsR0FBRyxDQUFDRSxNQUFKLENBQVc1QixRQUE1QjtBQUVBOEIsU0FBTyxDQUFDQyxHQUFSLFdBQWUvQyxPQUFPLEVBQXRCLHlCQUF1Q2dCLFFBQXZDLGNBQW1EVCxTQUFuRDtBQUVBLE1BQUksQ0FBQ0YsUUFBUSxDQUFDUyxLQUFULENBQWVFLFFBQWYsQ0FBTCxFQUErQjJCLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLHdCQUF3QmpDLFFBQXhCLEdBQW1DLGdCQUF4RDtBQUUvQmtDLDJDQUFFLENBQUNDLFFBQUgsQ0FBWUMsMkNBQUksQ0FBQ0MsT0FBTCxDQUFhYixTQUFiLEVBQXdCLHNCQUF4QixDQUFaLEVBQTZELE1BQTdELEVBQXFFLFVBQUNjLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ2hGLFFBQUlELEdBQUosRUFBUztBQUNMUixhQUFPLENBQUNVLEtBQVIsQ0FBY0YsR0FBZDtBQUNBLGFBQU9YLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLG1CQUFyQixDQUFQO0FBQ0gsS0FKK0UsQ0FNaEY7OztBQUNBTSxRQUFJLEdBQUdBLElBQUksQ0FBQ0UsT0FBTCxDQUNILGlCQURHLG1CQUVPbEQsU0FGUCxjQUFQO0FBS0EsUUFBSW1ELFdBQUo7O0FBRUEsU0FBSyxJQUFJdEMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2YsUUFBUSxDQUFDQyxZQUFULENBQXNCcUQsTUFBMUMsRUFBa0R2QyxDQUFDLEVBQW5ELEVBQXVEO0FBQ25ELFVBQU13QyxPQUFPLEdBQUd2RCxRQUFRLENBQUNDLFlBQVQsQ0FBc0JjLENBQXRCLENBQWhCOztBQUVBLFVBQUl3QyxPQUFPLENBQUNsRCxLQUFSLElBQWlCTSxRQUFqQixJQUE2QjRDLE9BQU8sQ0FBQ3JELFNBQVIsSUFBcUJBLFNBQXRELEVBQWlFO0FBQzdELFlBQUlzRCxHQUFHLEdBQUd4QyxRQUFRLENBQUNkLFNBQUQsQ0FBUixHQUFzQixDQUFoQztBQUNBbUQsbUJBQVcscUJBQ0pyRCxRQUFRLENBQUNNLGFBQVQsQ0FBdUJrRCxHQUF2QixDQURJO0FBRVBBLGFBQUcsRUFBRXRELFNBRkU7QUFHUEcsZUFBSyxFQUFFTTtBQUhBLFVBQVg7QUFLSDtBQUNKLEtBekIrRSxDQTJCaEY7OztBQUNBdUMsUUFBSSxHQUFHQSxJQUFJLENBQUNFLE9BQUwsQ0FDSCxvQ0FERywrREFFaURLLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxXQUFmLENBRmpELHdGQUdpREksSUFBSSxDQUFDQyxTQUFMLENBQWVDLCtDQUFmLENBSGpELGVBQVA7QUFNQXJCLE9BQUcsQ0FBQ3NCLFNBQUosQ0FBYyxjQUFkLEVBQThCLFdBQTlCO0FBQ0F0QixPQUFHLENBQUNNLElBQUosQ0FBU00sSUFBVDtBQUNILEdBcENEO0FBcUNILENBN0NELEUsQ0ErQ0E7O0FBQ0F6RCxHQUFHLENBQUMyQyxHQUFKLENBQVEsdUJBQVIsRUFBaUMsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDM0MsTUFBTXBDLFNBQVMsR0FBR21DLEdBQUcsQ0FBQ0UsTUFBSixDQUFXQyxFQUE3QjtBQUNBLE1BQU03QixRQUFRLEdBQUcwQixHQUFHLENBQUNFLE1BQUosQ0FBVzVCLFFBQTVCO0FBQ0E4QixTQUFPLENBQUNDLEdBQVIsV0FBZS9DLE9BQU8sRUFBdEIseUJBQXVDZ0IsUUFBdkMsY0FBbURULFNBQW5EO0FBRUEsTUFBSSxDQUFDRixRQUFRLENBQUNTLEtBQVQsQ0FBZUUsUUFBZixDQUFMLEVBQStCMkIsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsd0JBQXdCakMsUUFBeEIsR0FBbUMsZ0JBQXhEO0FBRy9CLE1BQU1rRCxjQUFjLEdBQUdDLCtEQUFhLENBQUM5RCxRQUFRLENBQUNNLGFBQVQsQ0FBdUJKLFNBQVMsR0FBRyxDQUFuQyxDQUFELENBQXBDO0FBRUFvQyxLQUFHLENBQUNzQixTQUFKLENBQWMsY0FBZCxFQUE4QixXQUE5QjtBQUNBdEIsS0FBRyxDQUFDeUIsR0FBSixDQUFRRixjQUFSO0FBQ0gsQ0FaRCxFLENBY0E7O0FBQ0FwRSxHQUFHLENBQUMyQyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3ZCTywyQ0FBRSxDQUFDQyxRQUFILENBQVlDLDJDQUFJLENBQUNDLE9BQUwsQ0FBYWIsU0FBYixFQUF3Qix3QkFBeEIsQ0FBWixFQUErRCxNQUEvRCxFQUF1RSxVQUFDYyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNsRixRQUFJRCxHQUFKLEVBQVM7QUFDTFIsYUFBTyxDQUFDVSxLQUFSLENBQWNGLEdBQWQ7QUFDQSxhQUFPWCxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixtQkFBckIsQ0FBUDtBQUNILEtBSmlGLENBTWxGOzs7QUFDQU0sUUFBSSxHQUFHQSxJQUFJLENBQUNFLE9BQUwsQ0FDSCxpQkFERyw0QkFBUDtBQUtBZCxPQUFHLENBQUNzQixTQUFKLENBQWMsY0FBZCxFQUE4QixXQUE5QjtBQUNBdEIsT0FBRyxDQUFDeUIsR0FBSixDQUFRYixJQUFSO0FBQ0gsR0FkRDtBQWVILENBaEJEO0FBa0JBekQsR0FBRyxDQUFDMkMsR0FBSixDQUFRLDBCQUFSLEVBQW9DLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzlDLE1BQU0zQixRQUFRLEdBQUcwQixHQUFHLENBQUNFLE1BQUosQ0FBVzVCLFFBQTVCOztBQUVBLE1BQUlYLFFBQVEsQ0FBQ1MsS0FBVCxDQUFlRSxRQUFmLENBQUosRUFBOEI7QUFDMUIsUUFBSXFELGFBQWEsR0FBRyxFQUFwQjs7QUFDQSxTQUFLLElBQUlqRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZixRQUFRLENBQUNDLFlBQVQsQ0FBc0JxRCxNQUExQyxFQUFrRHZDLENBQUMsRUFBbkQsRUFBdUQ7QUFDbkQsVUFBSWYsUUFBUSxDQUFDQyxZQUFULENBQXNCYyxDQUF0QixFQUF5QlYsS0FBekIsS0FBbUNNLFFBQXZDLEVBQ0lxRCxhQUFhLENBQUMvQyxJQUFkLENBQW1CakIsUUFBUSxDQUFDQyxZQUFULENBQXNCYyxDQUF0QixDQUFuQjtBQUNQOztBQUVEdUIsT0FBRyxDQUFDc0IsU0FBSixDQUFjLGNBQWQsRUFBOEIsa0JBQTlCO0FBQ0F0QixPQUFHLENBQUN5QixHQUFKLENBQVFOLElBQUksQ0FBQ0MsU0FBTCxDQUFlTSxhQUFmLENBQVI7QUFDSCxHQVRELE1BU087QUFDSDFCLE9BQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLG1DQUErQ2pDLFFBQS9DO0FBQ0g7QUFFSixDQWhCRDtBQW1CQWxCLEdBQUcsQ0FBQ3dDLEdBQUosQ0FBUWdDLGtEQUFVLENBQUM3QyxJQUFYLEVBQVI7QUFDQTNCLEdBQUcsQ0FBQ3lFLElBQUosQ0FBUyxxQkFBVCxFQUFnQyxVQUFVN0IsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ2hEO0FBQ0EsTUFBTTNCLFFBQVEsR0FBRzBCLEdBQUcsQ0FBQ0UsTUFBSixDQUFXNUIsUUFBNUI7QUFDQSxNQUFNVCxTQUFTLEdBQUdtQyxHQUFHLENBQUNFLE1BQUosQ0FBV0MsRUFBN0I7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLFdBQWUvQyxPQUFPLEVBQXRCLHdCQUFzQ2dCLFFBQXRDLGNBQWtEVCxTQUFsRDtBQUVBLE1BQU1pRSxXQUFXLEdBQUc5QixHQUFHLENBQUMrQixJQUF4QjtBQUVBLE1BQUksQ0FBQ3BFLFFBQVEsQ0FBQ1MsS0FBVCxDQUFlRSxRQUFmLENBQUwsRUFBK0IyQixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQiw4QkFBMkNqQyxRQUEzQztBQUUvQixNQUFJLENBQUNYLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QkosU0FBUyxHQUFHLENBQW5DLENBQUwsRUFBNENvQyxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQiwyQkFBd0MxQyxTQUF4QztBQUU1Q0YsVUFBUSxDQUFDbUIsV0FBVCxDQUFxQmpCLFNBQXJCLEVBQWdDaUUsV0FBaEM7QUFFQTdCLEtBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JvQixHQUFoQjtBQUVILENBakJEO0FBb0JBdEUsR0FBRyxDQUFDMkMsR0FBSixDQUFRLDhDQUFSLEVBQXdELFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2xFLE1BQU0zQixRQUFRLEdBQUcwQixHQUFHLENBQUNFLE1BQUosQ0FBVzVCLFFBQTVCO0FBQ0EsTUFBTVIsS0FBSyxHQUFHa0MsR0FBRyxDQUFDRSxNQUFKLENBQVdwQyxLQUF6QjtBQUNBLE1BQU1DLFdBQVcsR0FBR2lDLEdBQUcsQ0FBQ0UsTUFBSixDQUFXbkMsV0FBL0I7QUFFQSxNQUFJLENBQUNKLFFBQVEsQ0FBQ1MsS0FBVCxDQUFlRSxRQUFmLENBQUwsRUFBK0IyQixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQiw4QkFBMkNqQyxRQUEzQztBQUUvQixNQUFJNkMsR0FBRyxHQUFHeEQsUUFBUSxDQUFDYSxVQUFULENBQW9CRixRQUFwQixFQUE4QlIsS0FBOUIsRUFBcUNDLFdBQXJDLENBQVY7QUFFQWtDLEtBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLG1CQUFnQ2pDLFFBQWhDLGNBQTRDNkMsR0FBNUM7QUFDSCxDQVZELEUsQ0FZQTs7QUFDQSxJQUFNYSxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWpDO0FBQ0EvRSxHQUFHLENBQUNnRixNQUFKLENBQVdKLElBQVgsRUFBaUIsWUFBTTtBQUNuQjVCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHVDQUF1QzJCLElBQXZDLEdBQThDLElBQTFEO0FBQ0gsQ0FGRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvT0E7QUFBQTtBQUFBO0FBQUEsa0dBQWtHO0FBQ2xHLGtHQUFrRztBQUNsRyxnR0FBZ0c7QUFDaEcsMENBQTBDO0FBQzFDLG9GQUFvRjtBQUNwRixpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsd0ZBQXdGO0FBQ3hGLGtHQUFrRztBQUNsRyw2QkFBNkI7QUFFN0IsUUFBUTtBQUNSLDhGQUE4RjtBQUV2RDtBQUVoQyxTQUFTLGlCQUFpQixDQUFFLEdBQVcsRUFBRSxNQUFjO0lBQzFELDZDQUE2QztJQUM3QyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyw2REFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFekIsd0JBQXdCO0lBQ3hCLElBQUksSUFBSSxHQUF1QixFQUFFLENBQUM7SUFFbEMsWUFBWTtJQUNaLElBQUksS0FBSyxHQUF1QixFQUFFLENBQUM7NEJBRzNCLENBQUM7UUFDTCxJQUFNLGNBQWMsR0FBcUIsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2RCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRW5DLDRDQUE0QztRQUM1QyxJQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDYix5QkFBeUI7WUFDekIsQ0FBQyxFQUFFLENBQUM7WUFDSiw0QkFBNEI7WUFDNUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBRWxCLHNDQUFzQztZQUN0QyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQ2hCLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsRUFBRSxDQUFDO2FBQ1A7WUFFRCxJQUFHLFFBQVEsS0FBSyxNQUFNLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDekMsZUFBZTthQUNsQjtpQkFBTTtnQkFDSCxRQUFRLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQzthQUNoQztZQUVELElBQU0sZUFBZSxHQUFxQjtnQkFDdEMsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsSUFBSSxFQUFFLElBQUk7YUFDYjtZQUVELElBQUcsY0FBYyxFQUFFO2dCQUNmLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUM5QztpQkFBTTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQzlCOzZCQWxDRCxDQUFDO1NBcUNKO1FBRUQsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUM5RCxJQUFNLGVBQWUsR0FBcUI7Z0JBQ3RDLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFJLEVBQUUsSUFBSTthQUNiLENBQUM7WUFHRixJQUFHLGNBQWMsRUFBRTtnQkFDZiwyQ0FBMkM7Z0JBQzNDLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUM5QztpQkFBTTtnQkFDSCxrQ0FBa0M7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDOUI7NkJBdkRELENBQUM7U0EwREo7UUFFRCxpREFBaUQ7UUFDakQsSUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUM3QyxtREFBbUQ7WUFDbkQsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvQyx3Q0FBd0M7WUFDeEMsSUFBRyxTQUFTLEtBQUssS0FBSyxJQUFJLFNBQVMsS0FBSyxLQUFLLElBQUksU0FBUyxLQUFLLEtBQUssRUFBRTtnQkFDbEUsaUNBQWlDO2dCQUNqQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVQLDhCQUE4QjtnQkFDOUIsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUNoQixDQUFDLEVBQUUsQ0FBQztvQkFFSixJQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO3dCQUNkLDJEQUEyRDt3QkFDM0Qsb0JBQW9CO3dCQUNwQiwyREFBMkQ7d0JBQzNELE9BQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQzt3Q0FDckQsSUFBSTtxQkFDZDtpQkFDSjtnQkFFRCxnRUFBZ0U7Z0JBQ2hFLDJCQUEyQjtnQkFFM0IsSUFBTSxXQUFXLEdBQXFCO29CQUNsQyxJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsU0FBUztvQkFDaEIsSUFBSSxFQUFFLEVBQUU7aUJBQ1gsQ0FBQztnQkFFRixJQUFHLGNBQWMsRUFBRTtvQkFDZiwyQ0FBMkM7b0JBQzNDLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUN2QyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFFNUMsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUUzRCxLQUFLLENBQUMsSUFBSSxDQUNOLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQzNDO2lCQUNKO3FCQUFNO29CQUNILGtDQUFrQztvQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFFdkIsS0FBSyxDQUFDLElBQUksQ0FDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDeEIsQ0FBQztpQkFDTDtpQ0E3R0wsQ0FBQzthQWtIQTtTQUNKO1FBRUQsaURBQWlEO1FBQ2pELElBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNiLHNCQUFzQjtZQUN0QixJQUFNLFlBQVksR0FBcUI7Z0JBQ25DLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxFQUFFO2FBQ1g7WUFFRCxJQUFHLGNBQWMsRUFBRTtnQkFDZiwyQ0FBMkM7Z0JBQzNDLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFN0MsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUUzRCxLQUFLLENBQUMsSUFBSSxDQUNOLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQzNDLENBQUM7aUNBdklOLENBQUM7YUEwSUE7aUJBQU07Z0JBQ0gsa0NBQWtDO2dCQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUV4QixLQUFLLENBQUMsSUFBSSxDQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUN4QixDQUFDO2lDQWhKTixDQUFDO2FBbUpBO1NBQ0o7UUFFRCxpREFBaUQ7UUFDakQsSUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ3BDLFlBQVk7WUFFWixJQUFHLGNBQWMsRUFBRTtnQkFDZiw2Q0FBNkM7Z0JBQzdDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQ0E1SmhCLENBQUM7YUE4SkE7aUJBQU07Z0JBQ0gsaURBQWlEO2dCQUNqRCwrQkFBK0I7Z0JBQy9CLGlEQUFpRDtnQkFDakQsT0FBTyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2dDQUN4QyxJQUFJO2FBQ2Q7U0FDSjtRQUVELDBDQUEwQztRQUMxQyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekMsSUFBRyxXQUFXLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4RSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFFcEIscUNBQXFDO1lBQ3JDLElBQU0sUUFBUSxHQUFHLGNBQU0sUUFBQyxXQUFXLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUExRSxDQUEwRSxDQUFDO1lBQ2xHLElBQU0sS0FBSyxHQUFHLFVBQUMsS0FBYSxJQUFLLGFBQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQXhCLENBQXdCLENBQUM7WUFFMUQsa0RBQWtEO1lBQ2xELElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztZQUUxQixPQUFNLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDMUIsMkJBQTJCO2dCQUMzQixJQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDVCxJQUFHLGFBQWEsRUFBRTt3QkFDZCwwRUFBMEU7d0JBQzFFLG9CQUFvQjt3QkFDcEIscURBQXFEO3FCQUN4RDt5QkFBTTt3QkFDSCxzQ0FBc0M7d0JBQ3RDLGFBQWEsR0FBRyxJQUFJLENBQUM7cUJBQ3hCO2lCQUNKO2dCQUVELDBCQUEwQjtnQkFDMUIsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztZQUVELElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWhELElBQU0sYUFBYSxHQUFxQjtnQkFDcEMsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLElBQUksRUFBRSxJQUFJO2FBQ2IsQ0FBQztZQUVGLElBQUcsY0FBYyxFQUFFO2dCQUNmLDJDQUEyQztnQkFDM0MsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNILGtDQUFrQztnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM1QjtZQUVELENBQUMsRUFBRSxDQUFDOzZCQXZOSixDQUFDO1NBME5KO2tCQTFORyxDQUFDOzs7SUFEVCxpQkFBaUI7SUFDakIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFOzhCQUF4QixDQUFDO1FBQUQsQ0FBQzs7O0tBMk5SO0lBR0QsZ0NBQWdDO0lBQ2hDLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UEQ7QUFFQTtBQUNBOztBQUVBLFNBQVNLLFVBQVQsQ0FBcUJDLFdBQXJCLEVBQWtDO0FBQzlCO0FBQ0EsTUFBTXBELFFBQVEscUJBQU9vRCxXQUFXLENBQUNwRCxRQUFuQixDQUFkOztBQUNBLE1BQU1ELGNBQWMsc0JBQU9xRCxXQUFXLENBQUNyRCxjQUFuQixDQUFwQixDQUg4QixDQUs5Qjs7O0FBQ0EsTUFBTXNELEdBQUcsR0FBR0MseURBQU0sQ0FBQ3RELFFBQUQsQ0FBbEI7QUFDQSxNQUFNdUQsU0FBUyxHQUFHQyw2RUFBb0IsQ0FBQ0gsR0FBRCxDQUF0QyxDQVA4QixDQVM5QjtBQUNBOztBQUVBLE1BQU1JLFdBQVcsR0FBR0MsMkVBQWUsQ0FBQzFELFFBQUQsRUFBV0QsY0FBWCxDQUFuQztBQUNBLE1BQUk0RCxvQkFBb0IsR0FBRyxFQUEzQjs7QUFDQSxPQUFJLElBQUlDLENBQVIsSUFBYUgsV0FBYixFQUEwQjtBQUN0QixRQUFHRyxDQUFDLElBQUksQ0FBUixFQUFXO0FBQ1hELHdCQUFvQixJQUFJRixXQUFXLENBQUNHLENBQUQsQ0FBbkM7QUFDSCxHQWpCNkIsQ0FtQjlCOzs7QUFFQSxNQUFJQyxPQUFPLDBHQUFYO0FBQ0FBLFNBQU8seUNBQVA7QUFDQUEsU0FBTyxzQkFBZUosV0FBVyxDQUFDLENBQUQsQ0FBMUIsZ0JBQVA7QUFDQUksU0FBTyxzQkFBZUYsb0JBQWYsZ0JBQVAsQ0F4QjhCLENBMEI5Qjs7QUFDQSxNQUFNRyxZQUFZLEdBQUdQLFNBQVMsQ0FBQ1EsS0FBVixDQUFnQixDQUFoQixFQUFtQlIsU0FBUyxDQUFDeEIsTUFBVixHQUFtQixDQUF0QyxJQUEyQzhCLE9BQTNDLEdBQXFELFFBQTFFLENBM0I4QixDQTZCOUI7O0FBQ0EsU0FBT0MsWUFBUDtBQUNIOztBQUVNLFNBQVN2QixhQUFULENBQXdCYSxXQUF4QixFQUFxQztBQUN4QyxTQUFPRCxVQUFVLENBQUNDLFdBQUQsQ0FBakI7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUN4Q0Q7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNZLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQzNCLE1BQUlDLENBQUMsR0FBRzdGLE1BQU0sQ0FBQzRGLEdBQUQsQ0FBZCxDQUQyQixDQUczQjtBQUNBO0FBQ0E7O0FBQ0EsTUFBSUUsZUFBZSxHQUFHLEtBQXRCO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsS0FBdkI7QUFFQSxNQUFJQyxxQkFBcUIsR0FBRyxLQUE1QjtBQUNBLE1BQUlDLHFCQUFxQixHQUFHLEtBQTVCO0FBRUEsTUFBSUMsSUFBSjtBQUNBLE1BQUlDLEtBQUo7O0FBRUEsT0FBSyxJQUFJaEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzBFLENBQUMsQ0FBQ25DLE1BQXRCLEVBQThCdkMsQ0FBQyxFQUEvQixFQUFtQztBQUMvQixRQUFJMEUsQ0FBQyxDQUFDMUUsQ0FBRCxDQUFELEtBQVMsR0FBVCxJQUFnQjBFLENBQUMsQ0FBQzFFLENBQUQsQ0FBRCxLQUFTLEdBQTdCLEVBQWtDO0FBQzlCO0FBQ0EsV0FBSytFLElBQUksR0FBRy9FLENBQVosRUFBZSxDQUFDMkUsZUFBaEIsRUFBaUNJLElBQUksRUFBckMsRUFBeUM7QUFDckM7QUFDQSxZQUFJQSxJQUFJLElBQUksQ0FBWixFQUFlO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDSCxTQVBvQyxDQVNyQzs7O0FBQ0EsWUFBSUwsQ0FBQyxDQUFDSyxJQUFELENBQUQsS0FBWSxHQUFoQixFQUFxQjtBQUNqQixjQUFJRCxxQkFBSixFQUEyQjtBQUN2QjtBQUNBO0FBQ0FBLGlDQUFxQixHQUFHLEtBQXhCO0FBQ0E7QUFDSCxXQUxELE1BS087QUFDSDtBQUNBO0FBQ0g7QUFDSixTQXBCb0MsQ0FzQnJDO0FBQ0E7OztBQUNBLFlBQUlKLENBQUMsQ0FBQ0ssSUFBRCxDQUFELEtBQVksR0FBaEIsRUFBcUJELHFCQUFxQixHQUFHLElBQXhCLENBeEJnQixDQTBCckM7QUFDQTs7QUFDQSxZQUFJSixDQUFDLENBQUNLLElBQUQsQ0FBRCxLQUFZLEdBQVosSUFBbUJMLENBQUMsQ0FBQ0ssSUFBRCxDQUFELEtBQVksR0FBbkMsRUFBd0M7QUFDcEMsY0FBSUQscUJBQUosRUFBMkI7QUFDdkI7QUFDQTtBQUNBO0FBQ0gsV0FKRCxNQUlPO0FBQ0g7QUFDQUMsZ0JBQUk7QUFDSkosMkJBQWUsR0FBRyxJQUFsQjtBQUNBO0FBQ0g7QUFDSjtBQUNKLE9BMUM2QixDQTRDOUI7OztBQUNBLFdBQUtLLEtBQUssR0FBR2hGLENBQWIsRUFBZ0IsQ0FBQzRFLGdCQUFqQixFQUFtQ0ksS0FBSyxFQUF4QyxFQUE0QztBQUN4QztBQUNBLFlBQUlBLEtBQUssSUFBSU4sQ0FBQyxDQUFDbkMsTUFBZixFQUF1QjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNILFNBUHVDLENBU3hDOzs7QUFDQSxZQUFJbUMsQ0FBQyxDQUFDTSxLQUFELENBQUQsS0FBYSxHQUFqQixFQUFzQjtBQUNsQixjQUFJSCxxQkFBSixFQUEyQjtBQUN2QjtBQUNBO0FBQ0FBLGlDQUFxQixHQUFHLEtBQXhCO0FBQ0E7QUFDSCxXQUxELE1BS087QUFDSDtBQUNBO0FBQ0g7QUFDSixTQXBCdUMsQ0FzQnhDO0FBQ0E7OztBQUNBLFlBQUlILENBQUMsQ0FBQ00sS0FBRCxDQUFELEtBQWEsR0FBakIsRUFBc0JILHFCQUFxQixHQUFHLElBQXhCOztBQUV0QixZQUFJSCxDQUFDLENBQUNNLEtBQUQsQ0FBRCxLQUFhLEdBQWIsSUFBb0JOLENBQUMsQ0FBQ00sS0FBRCxDQUFELEtBQWEsR0FBckMsRUFBMEM7QUFDdEMsY0FBSUgscUJBQUosRUFBMkI7QUFDdkI7QUFDQTtBQUNBO0FBQ0gsV0FKRCxNQUlPO0FBQ0g7QUFDQUQsNEJBQWdCLEdBQUcsSUFBbkI7QUFDQTtBQUNIO0FBRUo7QUFDSixPQW5GNkIsQ0FxRjlCOzs7QUFDQSxVQUFJRCxlQUFlLElBQUlDLGdCQUF2QixFQUF5QztBQUNyQztBQUNBLFlBQUlLLEdBQUcsR0FBR1AsQ0FBQyxDQUFDSCxLQUFGLENBQVEsQ0FBUixFQUFXUSxJQUFYLENBQVY7QUFDQSxZQUFJRyxHQUFHLEdBQUdSLENBQUMsQ0FBQ0gsS0FBRixDQUFRUSxJQUFSLEVBQWNDLEtBQWQsQ0FBVjtBQUNBLFlBQUlHLEtBQUssR0FBR1QsQ0FBQyxDQUFDSCxLQUFGLENBQVFTLEtBQVIsRUFBZU4sQ0FBQyxDQUFDbkMsTUFBakIsQ0FBWixDQUpxQyxDQU1yQztBQUNBOztBQUNBbUMsU0FBQyxHQUFHTyxHQUFHLEdBQUcsR0FBTixHQUFZQyxHQUFaLEdBQWtCLEdBQWxCLEdBQXdCQyxLQUE1QjtBQUNILE9BL0Y2QixDQWlHOUI7OztBQUNBUixxQkFBZSxHQUFHLEtBQWxCO0FBQ0FDLHNCQUFnQixHQUFHLEtBQW5CO0FBQ0g7QUFDSjs7QUFFRCxTQUFPRixDQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDNUtEO0FBQUE7QUFBQTtBQVdvQztBQUVwQyxJQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyxxQkFBcUI7QUFDOUMsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsNENBQTRDO0FBQ2hFLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLGdEQUFnRDtBQUUzRCxTQUFTLGVBQWUsQ0FBQyxRQUF3QixFQUFFLGNBQTJCO0lBQ2pGLHlGQUF5RjtJQUN6RixJQUFJLFFBQVEsR0FBYSxFQUFFLENBQUM7SUFDNUIsSUFBSSxVQUFVLEdBQUcsb0JBQW9CLENBQUM7SUFFdEMsYUFBYTtJQUNiLFVBQVUsSUFBSSwwRUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUV0RiwyREFBMkQ7SUFDM0QsSUFBSSxlQUFlLEdBQWEsRUFBRSxDQUFDO0lBRW5DLG9CQUFvQjtJQUNwQixJQUFJLFVBQVUsR0FBRztRQUNiLFdBQVcsRUFBRSxDQUFDO1FBQ2QsaUJBQWlCLEVBQUUsNEVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDdkMsc0JBQXNCLEVBQUUsY0FBYyxDQUFDLE1BQU07UUFDN0MsU0FBUyxFQUFFLENBQUM7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiLENBQUM7SUFFRixnRUFBZ0U7SUFDNUQsa0dBQTZFLEVBQTNFLHdDQUFpQixFQUFFLHdCQUFTLEVBQUUsb0JBQU8sRUFBRSxzQkFBb0MsQ0FBQztJQUVsRiwwQ0FBMEM7SUFDMUMsSUFBSSxtQkFBbUIsR0FBRyxnRkFBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFNUQsaUJBQWlCLEdBQUcsbUJBQW1CLENBQUMsaUJBQWlCLENBQUM7SUFFMUQsMkJBQTJCO0lBQzNCLElBQUksVUFBVSxHQUFHLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztJQUVoRCxVQUFVLElBQUksMEZBQXdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFbkQsS0FBSyxJQUFJLENBQUMsSUFBSSxVQUFVLEVBQUU7UUFDdEIsS0FBSyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ2pDLGVBQWUsQ0FBQyxJQUFJLENBQUksQ0FBQyxTQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBTyxDQUFDO1NBQ2pFO0tBQ0o7SUFFRCx5RUFBeUU7SUFDekUscUVBQXFFO0lBQ3JFLElBQUksb0JBQW9CLEdBQUcsOEZBQTRCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFeEUsdUNBQXVDO0lBQ3ZDLDhEQUE4RDtJQUM5RCxLQUFLO0lBRUwsNkdBQTZHO0lBQzdHLDJCQUEyQjtJQUUzQix5Q0FBeUM7SUFDekMsaUZBQWlGO0lBQ2pGLGdDQUFnQztJQUNoQyx1SEFBdUg7SUFDdkgsc0dBQXNHO0lBQ3RHLG9FQUFvRTtJQUNwRSxxQ0FBcUM7SUFDckMsbURBQW1EO0lBQ25ELDZEQUE2RDtJQUM3RCx1REFBdUQ7SUFDdkQsOEdBQThHO0lBQzlHLDBHQUEwRztJQUMxRyw2RkFBNkY7SUFDN0YscUJBQXFCO0lBQ3JCLDhKQUE4SjtJQUM5Six3SUFBd0k7SUFDeEksaUhBQWlIO0lBQ2pILHVEQUF1RDtJQUN2RCxxREFBcUQ7SUFDckQseUJBQXlCO0lBQ3pCLHFEQUFxRDtJQUNyRCwyREFBMkQ7SUFDM0QsdUVBQXVFO0lBR3ZFLHFFQUFxRTtJQUNyRSxLQUFJLElBQUksT0FBTyxJQUFJLE9BQU8sRUFBRTtRQUN4QixvQ0FBb0M7UUFDcEMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRS9DLFVBQVUsSUFBSSwrQkFBNEIsT0FBTyx1REFDM0MsT0FBTyxHQUFHLFNBQVMsb0lBR00sT0FBTyxrRkFFakMsQ0FBQztRQUNOLFVBQVUsSUFBSSxTQUFPLE9BQU8sR0FBRyxTQUFTLGlDQUE0QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBTSxDQUFDO1FBRTdHLGVBQWUsQ0FBQyxJQUFJLENBQUksT0FBTyxTQUFJLFNBQVcsQ0FBQyxDQUFDO1FBRWhELE9BQU8saUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDckM7SUFDRCx1RkFBdUY7SUFDdkYsS0FBSyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRSw0RUFBVSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtRQUUxRixzQ0FBc0M7UUFDdEMsS0FBSyxJQUFJLE9BQU8sSUFBSSxpQkFBaUIsRUFBRTtZQUNuQyxvQ0FBb0M7WUFDcEMsSUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFL0Msc0VBQXNFO1lBQ3RFLElBQUksQ0FBQyxxRkFBbUIsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDO2dCQUFFLFNBQVM7WUFFakcsSUFBSSw0QkFBNEIsR0FBYSxFQUFFLENBQUM7WUFFaEQsMERBQTBEO1lBQzFELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQy9DLDZEQUE2RDtnQkFDN0QsSUFBSSwrRUFBYSxDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLEVBQUU7b0JBQ3BELDRCQUE0QixDQUFDLElBQUksQ0FBSSxPQUFPLFNBQUksU0FBVyxDQUFDLENBQUM7b0JBQzdELFNBQVM7aUJBQ1o7Z0JBRUQsMERBQTBEO2dCQUN0RCwySUFBeUYsRUFBdkYsWUFBRyxFQUFFLGdDQUFrRixDQUFDO2dCQUM5RixJQUFJLGFBQWEsRUFBRTtvQkFDZixVQUFVLElBQUksR0FBRyxDQUFDO29CQUVsQixlQUFlLENBQUMsSUFBSSxDQUFJLE9BQU8sU0FBSSxTQUFXLENBQUMsQ0FBQztpQkFDbkQ7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBbUMsT0FBTyxXQUFNLFNBQVMsMEJBQXVCLENBQUM7aUJBQ2xHO2FBQ0o7WUFFRCxJQUFJLDRCQUE0QixDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDcEUsT0FBTyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQztTQUNKO0tBQ0o7SUFFRCw2Q0FBNkM7SUFFN0MsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQixVQUFVLEdBQUcsRUFBRSxDQUFDO0lBRWhCLFVBQVUsSUFBSSx1QkFBdUIsQ0FBQztJQUV0QywyQkFBMkI7SUFDM0IsS0FBSyxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUU7UUFDckIsSUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLDRKQUFtSCxFQUFqSCw0QkFBVyxFQUFFLGtDQUFvRyxDQUFDO1FBRTFILFVBQVUsSUFBSSx5QkFDRixDQUFDLHdHQUV5QyxXQUFXLEdBQUcsY0FBYyxzQ0FDckUsQ0FBQyw4REFDRCxDQUFDLDZGQUVrQyxDQUFDLCtmQWtCN0IsV0FBVyxHQUFHLGNBQWMsa1lBVVosWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLG10QkFvQm5ELFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyx3aEJBY2pELDRGQUVXLFlBQVksQ0FBQyxLQUFLLHNJQU05QixDQUFDLDJCQUNaLENBQUM7UUFFSCxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFCLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FDbkI7SUFFRCwwQkFBMEI7SUFDMUIsS0FBSSxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7UUFDbkIsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLDRKQUFtSCxFQUFqSCw0QkFBVyxFQUFFLGtDQUFvRyxDQUFDO1FBRTFILFVBQVUsSUFBSSx5QkFDRixDQUFDLGtHQUVzQyxXQUFXLEdBQUcsY0FBYyw4YkFXdkMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLHVIQUl6RCxDQUFDLGlFQUNELENBQUMsNkZBRWtDLENBQUMsK2ZBa0I3QixXQUFXLEdBQUcsY0FBYyw0Y0FZUixZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssNE9BTzNCLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxrbUJBZTlDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsbUhBR2hDLFlBQVksQ0FBQyxLQUFLLHNJQU05QixDQUFDLDJCQUNaLENBQUM7S0FDTjtJQUVELFVBQVUsSUFBSSxNQUFNO0lBQ3BCLFVBQVUsSUFBSSxXQUFXO0lBRXpCLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUIsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUVoQixPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDeFZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJFO0FBQ25DO0FBRXhDLCtFQUErRTtBQUN4RSxTQUFTLGFBQWEsQ0FBRSxRQUF3QjtJQUtuRCxJQUFJLFlBQVksR0FBbUIsRUFBRSxDQUFDO0lBQ3RDLElBQUksTUFBTSxHQUFtQixFQUFFLENBQUM7SUFDaEMsSUFBSSxPQUFPLEdBQW1CLEVBQUUsQ0FBQztJQUNqQyxJQUFJLFFBQVEsR0FBbUIsRUFBRSxDQUFDO0lBRWxDLEtBQUksSUFBSSxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ25CLDJCQUEyQjtRQUMzQixJQUFNLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9GLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUM3QyxJQUFNLFVBQVUsR0FBRyxJQUFJLElBQUksc0JBQXNCLENBQUM7UUFFbEQseUJBQXlCO1FBQ3pCLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQztRQUVuRCw4QkFBOEI7UUFDOUIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDO1FBRS9DLGdCQUFnQjtRQUNoQixJQUFHLE9BQU8sRUFBRTtZQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0I7YUFBTSxJQUFHLFVBQVUsRUFBRTtZQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBRyxLQUFLLEVBQUU7WUFDYixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDSCxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0tBQ0o7SUFFRCxpQkFBaUI7SUFDakIsT0FBTztRQUNILGlCQUFpQixFQUFFLFlBQVk7UUFDL0IsU0FBUyxFQUFFLE1BQU07UUFDakIsT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQztBQUNOLENBQUM7QUFFRCxpQ0FBaUM7QUFDMUIsU0FBUyw0QkFBNEIsQ0FBRSxjQUEyQjtJQUNyRSxJQUFJLG9CQUFvQixHQUF1QyxFQUFFLENBQUM7SUFFbEUsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0MsSUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUN4RCxJQUFNLFlBQVksR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBRXBELElBQU0sc0JBQXNCLEdBQUcsY0FBYyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUN0RixJQUFNLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFFaEYsb0JBQW9CLENBQUMsc0JBQXNCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQztLQUN2RTtJQUVELE9BQU8sb0JBQW9CLENBQUM7QUFDaEMsQ0FBQztBQUVELHdCQUF3QjtBQUNqQixTQUFTLFVBQVUsQ0FBRSxHQUFXO0lBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLEtBQUksSUFBSSxDQUFDLElBQUksR0FBRztRQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDZixDQUFDO0FBRUQsdUNBQXVDO0FBQ2hDLFNBQVMsYUFBYSxDQUFDLGVBQXlCLEVBQUUsT0FBZSxFQUFFLFNBQWlCO0lBQ3ZGLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVDLHdFQUF3RTtRQUN4RSxJQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQyxJQUFHLGNBQWMsS0FBSyxPQUFPLElBQUksZ0JBQWdCLEtBQUssU0FBUztZQUFFLE9BQU8sSUFBSSxDQUFDO0tBQ2hGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELGdFQUFnRTtBQUN6RCxTQUFTLHVCQUF1QixDQUNuQyxjQUEyQixFQUMzQixjQUFvRCxFQUNwRCxlQUFxRDtJQUVyRCxJQUFHLGNBQWMsRUFBRTtRQUNmLCtDQUErQztRQUUvQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFNLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFcEMsMkJBQTJCO1lBQzNCLElBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssY0FBYyxDQUFDLE1BQU0sRUFBRTtnQkFDMUQsSUFBRyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsS0FBSyxjQUFjLENBQUMsU0FBUyxFQUFFO29CQUNoRSxPQUFPO3dCQUNILFdBQVcsRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU07d0JBQzFDLGNBQWMsRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVM7cUJBQ25EO2lCQUNKO2FBQ0o7U0FDSjtLQUNKO1NBQU0sSUFBSSxlQUFlLEVBQUU7UUFDeEIscUVBQXFFO1FBRXJFLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVwQywyRkFBMkY7WUFFM0YseUJBQXlCO1lBQ3pCLElBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDekQsSUFBRyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsS0FBSyxlQUFlLENBQUMsU0FBUyxFQUFFO29CQUMvRCxPQUFPO3dCQUNILFdBQVcsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU07d0JBQzVDLGNBQWMsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVM7cUJBQ3JEO2lCQUNKO2FBQ0o7U0FDSjtLQUNKO0lBRUQsT0FBTztRQUNILFdBQVcsRUFBRSxJQUFJO1FBQ2pCLGNBQWMsRUFBRSxJQUFJO0tBQ3ZCO0FBQ0wsQ0FBQztBQUdELDJIQUEySDtBQUNwSCxTQUFTLG1CQUFtQixDQUFDLE1BQWMsRUFBRSxNQUF3QixFQUFFLGNBQTJCLEVBQUUsZUFBeUI7SUFDaEksSUFBSSxJQUFJLEdBQWMsRUFBRSxDQUFDO0lBRXpCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztRQUVsQixzR0FBMkgsRUFBMUgsNEJBQVcsRUFBRSxrQ0FBNkcsQ0FBQztRQUVsSSw0QkFBNEI7UUFDNUIsSUFBRyxXQUFXLElBQUksY0FBYyxFQUFFO1lBQzlCLDBCQUEwQjtZQUMxQixJQUFHLGFBQWEsQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQyxFQUFFO2dCQUM1RCxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1NBQ0o7YUFBTTtZQUNILGdDQUFnQztZQUNoQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUMxQjtJQUVELEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ2YsSUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztLQUM3QjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxvREFBb0Q7QUFDN0MsU0FBUyxlQUFlLENBQzNCLE1BQWMsRUFDZCxTQUFpQixFQUNqQixXQUF1QixFQUN2QixjQUEyQjtJQUUzQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFWCxJQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRXhELGlDQUFpQztJQUNqQyxJQUFHLFdBQVcsS0FBSyxRQUFRLEVBQUU7UUFDekIsSUFBTSxlQUFlLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU1RCxrQkFBa0I7UUFDbEIsSUFBTSxNQUFNLEdBQUcsNkVBQWlCLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVoRSx1QkFBdUI7UUFDdkIsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUVoRSxjQUFjO1FBQ2QsQ0FBQyxJQUFJLDREQUFTLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdEQsT0FBTztZQUNILEdBQUcsRUFBRSxDQUFDO1lBQ04sYUFBYSxFQUFFLElBQUk7U0FDdEI7S0FDSjtJQUVELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFaEQsSUFBRyxPQUFPLEtBQUssUUFBUSxFQUFFO1FBQ3JCLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEYsQ0FBQyxJQUFJLFNBQU8sTUFBTSxHQUFHLFNBQVMsb0NBQStCLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssU0FBTSxDQUFDO1FBRTlHLE9BQU87WUFDSCxHQUFHLEVBQUUsQ0FBQztZQUNOLGFBQWEsRUFBRSxJQUFJO1NBQ3RCO0tBQ0o7SUFFRCxJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRXBELElBQUcsU0FBUyxLQUFLLFFBQVEsRUFBRTtRQUN2QixDQUFDLElBQUksU0FBTyxNQUFNLEdBQUcsU0FBUyxvQ0FBK0IsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLFNBQU0sQ0FBQztRQUV6RyxPQUFPO1lBQ0gsR0FBRyxFQUFFLENBQUM7WUFDTixhQUFhLEVBQUUsSUFBSTtTQUN0QjtLQUNKO0lBRUQsT0FBTztRQUNILEdBQUcsRUFBRSxFQUFFO1FBQ1AsYUFBYSxFQUFFLEtBQUs7S0FDdkI7QUFDTCxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsT0FBZSxFQUFFLElBQWdCLEVBQUUsSUFBd0IsRUFBRSxjQUEyQjtJQUMzRyxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFFdkIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtZQUN2QixJQUFNLE9BQU8sR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFcEUsNkRBQTZEO1lBQzdELElBQUcsT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssTUFBTTtnQkFBRSxTQUFTO1lBRXBELDZEQUE2RDtZQUM3RCxrQkFBa0I7WUFDbEIsSUFBSSxRQUFRLEdBQVcsT0FBTyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztZQUVuRCw4REFBOEQ7WUFDOUQsSUFBRyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUN0QixPQUFPO2dCQUNQLGFBQWEsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRTFGLHdFQUF3RTtnQkFFeEUsZ0VBQWdFO2dCQUNoRSxTQUFTO2FBQ1o7WUFFRCxpRUFBaUU7WUFDakUsc0JBQXNCO1lBQ3RCLElBQUksWUFBWSxHQUFXLFdBQVcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFM0Qsc0dBQXNHO1lBQ3RHLElBQUcsWUFBWSxLQUFLLFFBQVEsRUFBRTtnQkFDMUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFaEQsSUFBTSxNQUFNLEdBQUcsNkVBQWlCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFM0QsYUFBYSxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFFdEUsMkJBQTJCO2dCQUMzQixhQUFhLElBQUksNERBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFN0QsNEVBQTRFO2dCQUU1RSw2QkFBNkI7Z0JBQzdCLFNBQVM7YUFDWjtZQUVELCtEQUErRDtZQUMvRCxvQkFBb0I7WUFDcEIsSUFBSSxVQUFVLEdBQVcsU0FBUyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztZQUV2RCxtREFBbUQ7WUFDbkQsSUFBRyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUN4QiwwRUFBMEU7Z0JBQzFFLGFBQWEsSUFBSSxTQUFPLE9BQU8sR0FBRyxZQUFZLG9DQUErQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssVUFBTyxDQUFDO2dCQUNwSCxTQUFTO2FBQ1o7WUFFRCx3RUFBd0U7WUFDeEUsNENBQTRDO1lBQzVDLGFBQWEsSUFBSSxxRkFBa0YsT0FBTyxXQUFNLE9BQU8sV0FBTyxDQUFDO1NBQ2xJO2FBQU0sSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUMzRCxhQUFhLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMvRTtLQUNKO0lBRUQsT0FBTyxhQUFhLENBQUM7QUFDekIsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsSUFBZ0IsRUFBRSxjQUEyQixFQUFFLE9BQWUsRUFBRSxVQUFrQixFQUFFLEtBQWE7SUFDeEgsSUFBSSxhQUFxQixDQUFDO0lBQzFCLElBQU0sWUFBWSxHQUFHO1FBQ2pCLE1BQU0sRUFBRSxPQUFPO1FBQ2YsU0FBUyxFQUFFLFVBQVU7S0FDeEI7SUFFRyxvRUFBMkYsRUFBMUYsNEJBQVcsRUFBRSxrQ0FBNkUsQ0FBQztJQUVoRyx1R0FBdUc7SUFFdkcsdUJBQXVCO0lBQ3ZCLElBQUcsV0FBVyxJQUFJLGNBQWMsRUFBRTtRQUM5QixRQUFRO1FBQ1IsYUFBYSxHQUFHLFNBQU8sT0FBTyxHQUFHLFVBQVUsb0NBQStCLFdBQVcsR0FBRyxjQUFjLGVBQVksQ0FBQztLQUN0SDtTQUFNO1FBQ0gscUJBQXFCO1FBQ3JCLGFBQWEsR0FBRyxTQUFPLE9BQU8sR0FBRyxVQUFVLG9DQUErQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sU0FBTTtLQUM3RztJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3pCLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBRSxJQUFnQixFQUFFLFVBQWtCO0lBQ2xELGlDQUFpQztJQUNqQyxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsd0NBQXdDO1lBQ3hDLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFO2dCQUNwQyxPQUFPLENBQUMsQ0FBQzthQUNaO1NBQ0o7S0FDSjtJQUVELE9BQU8sUUFBUSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxJQUFnQixFQUFFLFVBQWtCO0lBQ3JELGtCQUFrQjtJQUNsQixJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDaEIsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTtvQkFDeEMsT0FBTyxDQUFDLENBQUM7aUJBQ1o7YUFDSjtTQUNKO0tBQ0o7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsSUFBZ0IsRUFBRSxVQUFrQjtJQUNuRCxrQkFBa0I7SUFDbEIsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2QsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFO2dCQUN0QyxPQUFPLENBQUMsQ0FBQzthQUNaO1NBQ0o7S0FDSjtJQUVELE9BQU8sUUFBUSxDQUFDO0FBQ3BCLENBQUM7QUFFTSxTQUFTLGNBQWMsQ0FBQyxRQUF3QjtJQUNuRCxJQUFJLGFBQWEsR0FBbUIsRUFBRSxDQUFDO0lBQ3ZDLElBQUksa0JBQWtCLEdBQW1CLEVBQUUsQ0FBQztJQUU1QyxLQUFJLElBQUksQ0FBQyxJQUFJLFFBQVEsRUFBRTtRQUNuQixJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLFlBQVksRUFBRTtZQUNqQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNILGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEM7S0FDSjtJQUVELE9BQU87UUFDSCxpQkFBaUIsRUFBRSxhQUFhO1FBQ2hDLFVBQVUsRUFBRSxrQkFBa0I7S0FDakM7QUFDTCxDQUFDO0FBRU0sU0FBUyxRQUFRLENBQUMsS0FBYSxFQUFFLElBQVksRUFBRSxJQUFZO0lBQzlELElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQztJQUVuQixDQUFDLElBQUcsNERBRWMsS0FBSyxjQUFTLElBQUksYUFBUSxJQUFJLHlFQUkxQztJQUVOLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVNLFNBQVMsd0JBQXdCLENBQUMsS0FBcUI7SUFDMUQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRVgsS0FBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7UUFDaEIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRCLElBQUksV0FBVyxTQUFtQixDQUFDO1FBQ25DLElBQUksYUFBYSxTQUFtQixDQUFDO1FBRXJDLG9CQUFvQjtRQUNwQixLQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDeEIsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxhQUFhLEVBQUU7Z0JBQ3pDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFO2dCQUMxQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQztpQkFBTTtnQkFDSCxPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDO2FBQzFEO1NBQ0o7UUFFRCxJQUFJLFlBQVksR0FBRyxrQkFBZ0IsQ0FBQyxtREFDTCxhQUFhLENBQUMsS0FBSyx3UkFPcEMsQ0FBQyxtQ0FBOEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsK0JBQzVELENBQUMsbUNBQThCLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLDZIQU0zQyxhQUFhLENBQUMsS0FBSyw0bUJBYXBDLENBQUMsaUNBQTRCLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLCtCQUMxRCxDQUFDLGlDQUE0QixVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyx1UUFTekQsQ0FBQyw4Q0FDRCxDQUFDLGlDQUNaLENBQUM7UUFFTCxLQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdkIsQ0FBQyxJQUFJLFNBQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxnQkFBYSxDQUFDO1lBQ25ELENBQUMsSUFBSSxrQkFBZ0IsQ0FBQyxnQkFBYSxDQUFDO1lBR3BDLENBQUMsSUFBSSxTQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssbUNBQThCLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBVztTQUMxRztRQUVELENBQUMsSUFBSSxZQUFZLENBQUM7S0FDckI7SUFFRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL2NEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTVSxTQUFULENBQW9CQyxNQUFwQixFQUE0QkMsWUFBNUIsRUFBMENDLFVBQTFDLEVBQXNEO0FBQ3pELE1BQUlDLGdCQUFnQixpQkFBVUgsTUFBVixTQUFtQkMsWUFBbkIsZ0NBQXBCO0FBRUFFLGtCQUFnQixJQUFJQyxhQUFhLG9CQUFLRixVQUFMLEVBQWpDO0FBRUEsU0FBT0MsZ0JBQWdCLEdBQUcsTUFBMUI7QUFDSDs7QUFFRCxTQUFTQyxhQUFULENBQXVCcEYsSUFBdkIsRUFBNkI7QUFDekIsTUFBSW1GLGdCQUFnQixHQUFHLEVBQXZCO0FBRUEsTUFBR25GLElBQUksSUFBSSxJQUFYLEVBQWlCLE9BQU8sRUFBUDs7QUFFakIsT0FBSSxJQUFJTCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdLLElBQUksQ0FBQ2tDLE1BQXhCLEVBQWdDdkMsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQztBQUNBLFFBQU0wRixLQUFLLEdBQUdyRixJQUFJLENBQUNMLENBQUQsQ0FBbEI7QUFDQSxRQUFNMkYsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQW5CO0FBQ0EsUUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNFLEtBQXBCLENBSmlDLENBTWpDOztBQUNBLFFBQUdELElBQUksSUFBSSxPQUFSLElBQW1CQSxJQUFJLElBQUksTUFBOUIsRUFBc0M7QUFDbEM7QUFFQSxVQUFHQyxLQUFLLEtBQUssSUFBYixFQUFtQjtBQUNmSix3QkFBZ0IsSUFBSSxTQUFwQjtBQUNILE9BRkQsTUFFTyxJQUFJRyxJQUFJLEtBQUssS0FBVCxJQUFrQkMsS0FBSyxLQUFLLE1BQWhDLEVBQXdDO0FBQzNDSix3QkFBZ0IsY0FBT0ksS0FBUCxXQUFoQjtBQUNILE9BRk0sTUFFQTtBQUNISix3QkFBZ0IsSUFBSUksS0FBcEI7QUFDSDtBQUNKLEtBVkQsTUFVTyxJQUFJRCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUN4QjtBQUVBLFVBQUdDLEtBQUssS0FBSyxLQUFiLEVBQW9CO0FBQ2hCO0FBQ0FKLHdCQUFnQixJQUFJLFdBQXBCO0FBQ0FBLHdCQUFnQixJQUFJQyxhQUFhLENBQUNDLEtBQUssQ0FBQ0csSUFBUCxDQUFqQztBQUNBTCx3QkFBZ0IsSUFBSSxHQUFwQjtBQUNILE9BTEQsTUFLTyxJQUFHSSxLQUFLLEtBQUssS0FBYixFQUFvQjtBQUN2QjtBQUNBSix3QkFBZ0IsSUFBSSxXQUFwQjtBQUNBQSx3QkFBZ0IsSUFBSUMsYUFBYSxDQUFDQyxLQUFLLENBQUNHLElBQVAsQ0FBakM7QUFDQUwsd0JBQWdCLElBQUksR0FBcEI7QUFDSCxPQUxNLE1BS0EsSUFBR0ksS0FBSyxLQUFLLEtBQWIsRUFBb0I7QUFDdkI7QUFDQUosd0JBQWdCLElBQUksV0FBcEI7QUFDQUEsd0JBQWdCLElBQUlDLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDRyxJQUFQLENBQWpDO0FBQ0FMLHdCQUFnQixJQUFJLEdBQXBCO0FBQ0gsT0FMTSxNQUtBO0FBQ0g7QUFDQTlELGVBQU8sQ0FBQ1UsS0FBUixDQUFjLCtCQUFkO0FBQ0g7QUFDSixLQXRCTSxNQXNCQTtBQUNIO0FBRUFvRCxzQkFBZ0IsSUFBSSxNQUFNQyxhQUFhLENBQUNDLEtBQUssQ0FBQ0csSUFBUCxDQUFuQixHQUFrQyxHQUF0RDtBQUNIO0FBQ0o7O0FBRUQsU0FBT0wsZ0JBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNsRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxhQUFELEVBQWdCQyxVQUFoQixFQUErQjtBQUMxQyxNQUFNQyxZQUFZLEdBQUlGLGFBQWEsS0FBSyxDQUFsQixJQUF1QkMsVUFBVSxHQUFHLENBQTFEO0FBQ0EsTUFBTUUsY0FBYyxHQUFJSCxhQUFhLEdBQUcsQ0FBaEIsSUFBcUJDLFVBQVUsS0FBSyxDQUE1RDtBQUNBLE1BQU1HLG1CQUFtQixHQUFJSixhQUFhLEdBQUcsQ0FBaEIsSUFBcUJDLFVBQVUsR0FBRyxDQUEvRDtBQUVBLE1BQU1JLGdCQUFnQixHQUFHSixVQUFVLEdBQUMsQ0FBWCxJQUFnQixDQUF6QztBQUVBLGlKQUtNRyxtQkFBbUIsMkhBSWYsRUFUVixpYkFtQ00sQ0FBQ0MsZ0JBQUQsd0NBQWtESixVQUFsRCxlQUFpRUssVUFBVSxDQUFDLE1BQUlMLFVBQUwsQ0FBVixDQUEyQk0sT0FBM0IsQ0FBbUMsQ0FBbkMsQ0FBakUsc0ZBRThCTixVQUFVLEdBQUMsQ0FGekMscURBbkNOLHVCQXVDTUcsbUJBQW1CLDJCQUEyQixFQXZDcEQsNEJBMENFQSxtQkFBbUIsMG9DQXVEbEIsRUFqR0g7QUFrR0YsQ0F6R0Y7O0FBMkdPLFNBQVNyQyxNQUFULENBQWlCeUMsS0FBakIsRUFBd0I7QUFDM0IsTUFBSUMsV0FBVyxHQUFHLEVBQWxCLENBRDJCLENBRzNCOztBQUNBLE9BQUksSUFBSUMsR0FBUixJQUFlRixLQUFmLEVBQXNCO0FBQ2xCLFFBQUlHLFdBQVcsR0FBR0gsS0FBSyxDQUFDRSxHQUFELENBQXZCOztBQUVBLFFBQUc1SCxNQUFNLENBQUM0SCxHQUFELENBQU4sQ0FBWXpILE1BQVosQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsTUFBNkIsT0FBN0IsSUFBd0NILE1BQU0sQ0FBQzRILEdBQUQsQ0FBTixDQUFZekgsTUFBWixDQUFtQixDQUFuQixFQUFzQixDQUF0QixNQUE2QixLQUF4RSxFQUErRTtBQUMzRTBILGlCQUFXLENBQUNqRixFQUFaLEdBQWlCZ0YsR0FBakI7QUFDQUQsaUJBQVcsQ0FBQ3RHLElBQVosQ0FBaUJ3RyxXQUFqQjtBQUNIO0FBQ0o7O0FBRUQsTUFBSUMsYUFBYSxHQUFHLEVBQXBCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLEVBQWpCOztBQUdBLE9BQUksSUFBSUgsSUFBUixJQUFlRixLQUFmLEVBQXNCO0FBQ2xCLFFBQUlHLFlBQVcsR0FBR0gsS0FBSyxDQUFDRSxJQUFELENBQXZCO0FBRUEsUUFBTUksc0JBQXNCLEdBQUdoSSxNQUFNLENBQUM0SCxJQUFELENBQU4sQ0FBWXpILE1BQVosQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUI4SCxXQUF6QixPQUEyQ2pJLE1BQU0sQ0FBQzRILElBQUQsQ0FBTixDQUFZekgsTUFBWixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUExRTtBQUNBLFFBQU0rSCxJQUFJLEdBQUdsSSxNQUFNLENBQUM0SCxJQUFELENBQU4sQ0FBWXpILE1BQVosQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsTUFBNkIsSUFBMUM7QUFDQSxRQUFNZ0ksVUFBVSxHQUFHRCxJQUFJLElBQUlGLHNCQUEzQjs7QUFFQSxRQUFHRyxVQUFILEVBQWU7QUFDWCxVQUFJQyxvQkFBb0IsR0FBRyxLQUEzQjtBQUVBLFVBQU1DLGVBQWUsR0FBR1IsWUFBVyxDQUFDUyxRQUFaLENBQXFCLENBQXJCLEVBQXdCdkIsS0FBaEQ7O0FBRUEsV0FBSSxJQUFJd0IsQ0FBUixJQUFhUixVQUFiLEVBQXlCO0FBQ3JCLFlBQUdBLFVBQVUsQ0FBQ1EsQ0FBRCxDQUFWLElBQWlCRixlQUFwQixFQUFxQztBQUNqQ0QsOEJBQW9CLEdBQUcsSUFBdkI7QUFDQTtBQUNIO0FBQ0o7O0FBRUQsVUFBRyxDQUFDQSxvQkFBSixFQUEwQjtBQUN0Qkwsa0JBQVUsQ0FBQzFHLElBQVgsQ0FBZ0JnSCxlQUFoQjtBQUNIOztBQUVEUixrQkFBVyxDQUFDakYsRUFBWixHQUFpQmdGLElBQWpCO0FBQ0FFLG1CQUFhLENBQUN6RyxJQUFkLENBQW1Cd0csWUFBbkI7QUFDSDtBQUNKOztBQUVEQyxlQUFhLENBQUNVLElBQWQsQ0FBbUIsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFDOUIsUUFBTUMsSUFBSSxHQUFHRixDQUFDLENBQUNILFFBQUYsQ0FBVyxDQUFYLEVBQWN2QixLQUEzQjtBQUNBLFFBQU02QixJQUFJLEdBQUdGLENBQUMsQ0FBQ0osUUFBRixDQUFXLENBQVgsRUFBY3ZCLEtBQTNCOztBQUVBLFFBQUc0QixJQUFJLEtBQUtDLElBQVosRUFBa0I7QUFDZCxVQUFNQyxNQUFNLEdBQUd6SCxRQUFRLENBQUNxSCxDQUFDLENBQUNILFFBQUYsQ0FBVyxDQUFYLEVBQWN2QixLQUFmLENBQXZCO0FBQ0EsVUFBTStCLE1BQU0sR0FBRzFILFFBQVEsQ0FBQ3NILENBQUMsQ0FBQ0osUUFBRixDQUFXLENBQVgsRUFBY3ZCLEtBQWYsQ0FBdkI7QUFFQSxhQUFPOEIsTUFBTSxHQUFHQyxNQUFoQjtBQUNILEtBTEQsTUFLTztBQUNILFVBQU1DLE1BQU0sR0FBRyxDQUFDSixJQUFELEVBQU9DLElBQVAsQ0FBZjtBQUNBRyxZQUFNLENBQUNQLElBQVA7O0FBRUEsVUFBR08sTUFBTSxDQUFDLENBQUQsQ0FBTixLQUFjSixJQUFqQixFQUF1QjtBQUNuQixlQUFPLENBQUMsQ0FBUjtBQUNILE9BRkQsTUFFTztBQUNILGVBQU8sQ0FBUDtBQUNIO0FBQ0o7QUFDSixHQW5CRCxFQTdDMkIsQ0FrRTNCOztBQUVBWixZQUFVLENBQUNTLElBQVg7QUFFQSxNQUFJUSxnQkFBZ0IsR0FBRyxFQUF2Qjs7QUFFQSxPQUFJLElBQUlULEVBQVIsSUFBYVIsVUFBYixFQUF5QjtBQUNyQixTQUFJLElBQUl4QyxDQUFSLElBQWF1QyxhQUFiLEVBQTRCO0FBQ3hCLFVBQU1ELGFBQVcsR0FBR0MsYUFBYSxDQUFDdkMsQ0FBRCxDQUFqQzs7QUFDQSxVQUFHc0MsYUFBVyxDQUFDUyxRQUFaLENBQXFCLENBQXJCLEVBQXdCdkIsS0FBeEIsS0FBa0NnQixVQUFVLENBQUNRLEVBQUQsQ0FBL0MsRUFBb0Q7QUFDaERTLHdCQUFnQixDQUFDM0gsSUFBakIsQ0FBc0J3RyxhQUF0QjtBQUNBLGVBQU9DLGFBQWEsQ0FBQ3ZDLENBQUQsQ0FBcEI7QUFDSDtBQUNKO0FBQ0osR0FoRjBCLENBa0YzQjs7O0FBQ0EsTUFBTTBELFNBQVMsR0FBR3RCLFdBQVcsQ0FBQ2pFLE1BQVosR0FBcUIsQ0FBckIsR0FBeUJpRSxXQUFXLENBQUN1QixHQUFaLENBQWdCLFVBQUFDLElBQUksRUFBSTtBQUMvRCxXQUFRO0FBQUssZUFBUyxFQUFFO0FBQWhCLE9BQW9DO0FBQVEsZUFBUyxFQUFDLGdCQUFsQjtBQUM1QixRQUFFLFlBQUtBLElBQUksQ0FBQ3ZHLEVBQVYsQ0FEMEI7QUFFNUIsU0FBRyxFQUFFdUcsSUFBSSxDQUFDdkc7QUFGa0IsTUFBcEMsQ0FBUjtBQUlILEdBTDBDLENBQXpCLEdBS2IsSUFMTDtBQU9BLE1BQUl3RyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxNQUFNZCxRQUFRLEdBQUdVLGdCQUFnQixDQUFDdEYsTUFBakIsR0FBMEIsQ0FBMUIsR0FBOEJzRixnQkFBZ0IsQ0FBQ0UsR0FBakIsQ0FBcUIsVUFBQUMsSUFBSSxFQUFJO0FBQ3hFLFFBQUlFLFlBQUo7QUFDQSxRQUFJQyxRQUFRLEdBQUcsS0FBZjtBQUNBLFFBQUlDLGtCQUFrQixHQUFHLEtBQXpCO0FBRUEsUUFBTWxCLGVBQWUsR0FBR2MsSUFBSSxDQUFDYixRQUFMLENBQWMsQ0FBZCxFQUFpQnZCLEtBQXpDOztBQUVBLFFBQUdxQyxZQUFZLEtBQUtmLGVBQXBCLEVBQXFDO0FBQ2pDa0Isd0JBQWtCLEdBQUcsSUFBckI7QUFDQUgsa0JBQVksR0FBR2YsZUFBZjtBQUNIOztBQUVELFFBQUdjLElBQUksQ0FBQ3ZHLEVBQUwsQ0FBUXpDLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLE1BQXlCLFVBQTVCLEVBQXdDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWtKLGtCQUFZLEdBQUk7QUFBUSxZQUFJLEVBQUUsUUFBZDtBQUNRLFVBQUUsRUFBRUYsSUFBSSxDQUFDdkcsRUFBTCxHQUFRLE9BRHBCO0FBRVEsb0JBQVksRUFBRXVHLElBQUksQ0FBQ2IsUUFBTCxDQUFjLENBQWQsRUFBaUJ2QixLQUZ2QztBQUdRLFdBQUcsRUFBRW9DLElBQUksQ0FBQ2IsUUFBTCxDQUFjLENBQWQsRUFBaUJ2QixLQUg5QjtBQUlRLFdBQUcsRUFBRW9DLElBQUksQ0FBQ2IsUUFBTCxDQUFjLENBQWQsRUFBaUJ2QixLQUo5QjtBQUtRLFlBQUksRUFBRW9DLElBQUksQ0FBQ2IsUUFBTCxDQUFjLENBQWQsRUFBaUJ2QixLQUwvQjtBQU1RLGdCQUFRLEVBQUU7QUFObEIsUUFBaEI7QUFPSCxLQWhCRCxNQWdCTyxJQUFHb0MsSUFBSSxDQUFDdkcsRUFBTCxDQUFRekMsTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsTUFBeUIsVUFBNUIsRUFBd0M7QUFDM0NtSixjQUFRLEdBQUcsSUFBWCxDQUQyQyxDQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBRCxrQkFBWSxHQUFJO0FBQVEsWUFBSSxFQUFFLE9BQWQ7QUFDUSxVQUFFLEVBQUVGLElBQUksQ0FBQ3ZHLEVBQUwsR0FBUSxPQURwQjtBQUVRLG9CQUFZLEVBQUV1RyxJQUFJLENBQUNiLFFBQUwsQ0FBYyxDQUFkLEVBQWlCdkIsS0FGdkM7QUFHUSxXQUFHLEVBQUVvQyxJQUFJLENBQUNiLFFBQUwsQ0FBYyxDQUFkLEVBQWlCdkIsS0FIOUI7QUFJUSxXQUFHLEVBQUVvQyxJQUFJLENBQUNiLFFBQUwsQ0FBYyxDQUFkLEVBQWlCdkIsS0FKOUI7QUFLUSxZQUFJLEVBQUVvQyxJQUFJLENBQUNiLFFBQUwsQ0FBYyxDQUFkLEVBQWlCdkIsS0FML0I7QUFNUSxnQkFBUSxFQUFFO0FBTmxCLFFBQWhCO0FBT0gsS0FqQk0sTUFpQkE7QUFDSDtBQUNBc0Msa0JBQVksR0FBRyx3RUFBTSxrQkFBTixDQUFmO0FBQ0g7O0FBRUQsUUFBR0Usa0JBQUgsRUFBdUI7QUFDbkIsYUFDSSwyREFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBZ0IsV0FBRyxFQUFFSixJQUFJLENBQUN2RyxFQUFMLEdBQVV5RjtBQUEvQixTQUNJO0FBQUksV0FBRyxFQUFFQSxlQUFUO0FBQTBCLGlCQUFTLEVBQUU7QUFBckMsU0FBcUVBLGVBQXJFLENBREosRUFFSTtBQUFJLGlCQUFTLEVBQUUsaUNBQWlDaUIsUUFBUSxHQUFHLHlCQUFILEdBQStCLEVBQXhFLENBQWY7QUFBNEYsVUFBRSxFQUFFSCxJQUFJLENBQUN2RyxFQUFyRztBQUF5RyxXQUFHLEVBQUV1RyxJQUFJLENBQUN2RztBQUFuSCxTQUNJO0FBQUksaUJBQVMsRUFBRSxrQ0FBZjtBQUFtRCxVQUFFLEVBQUV1RyxJQUFJLENBQUN2RyxFQUFMLEdBQVU7QUFBakUsU0FBMkV1RyxJQUFJLENBQUNiLFFBQUwsQ0FBYyxDQUFkLEVBQWlCdkIsS0FBNUYsQ0FESixFQUVLc0MsWUFGTCxFQUdLQyxRQUFRLEdBQUc7QUFBSyxVQUFFLEVBQUVILElBQUksQ0FBQ3ZHLEVBQUwsR0FBUTtBQUFqQixTQUErQnVHLElBQUksQ0FBQ2IsUUFBTCxDQUFjLENBQWQsRUFBaUJ2QixLQUFoRCxDQUFILEdBQWtFLElBSC9FLENBRkosQ0FESjtBQVVILEtBWEQsTUFXTztBQUNILGFBQVE7QUFBSSxpQkFBUyxFQUFFLGlDQUFpQ3VDLFFBQVEsR0FBRyx5QkFBSCxHQUErQixFQUF4RSxDQUFmO0FBQTRGLFVBQUUsRUFBRUgsSUFBSSxDQUFDdkcsRUFBckc7QUFBeUcsV0FBRyxFQUFFdUcsSUFBSSxDQUFDdkc7QUFBbkgsU0FDSjtBQUFJLGlCQUFTLEVBQUUsa0NBQWY7QUFBbUQsVUFBRSxFQUFFdUcsSUFBSSxDQUFDdkcsRUFBTCxHQUFVO0FBQWpFLFNBQTJFdUcsSUFBSSxDQUFDYixRQUFMLENBQWMsQ0FBZCxFQUFpQnZCLEtBQTVGLENBREksRUFFSHNDLFlBRkcsRUFHSEMsUUFBUSxHQUFHO0FBQUssVUFBRSxFQUFFSCxJQUFJLENBQUN2RyxFQUFMLEdBQVE7QUFBakIsU0FBK0J1RyxJQUFJLENBQUNiLFFBQUwsQ0FBYyxDQUFkLEVBQWlCdkIsS0FBaEQsQ0FBSCxHQUFrRSxJQUh2RSxDQUFSO0FBS0g7QUFDSixHQXBFOEMsQ0FBOUIsR0FvRVosSUFwRUwsQ0EzRjJCLENBaUszQjs7QUFDQSxNQUFNeUMsV0FBVyxHQUFHUCxTQUFTLEdBRXJCO0FBQUssTUFBRSxFQUFDO0FBQVIsS0FDS0EsU0FETCxDQUZxQixHQUtyQixJQUxSO0FBT0EsTUFBTVEsV0FBVyxHQUFHbkIsUUFBUSxHQUVwQjtBQUFLLE1BQUUsRUFBQztBQUFSLEtBQ0k7QUFBSSxNQUFFLEVBQUU7QUFBUixLQUNLQSxRQURMLENBREosQ0FGb0IsR0FPcEIsSUFQUjtBQVNBLFNBQ0k7QUFBSyxNQUFFLEVBQUU7QUFBVCxLQUNJLDBFQUFRckIsTUFBTSxDQUFDK0IsZ0JBQWdCLENBQUN0RixNQUFsQixFQUEwQmlFLFdBQVcsQ0FBQ2pFLE1BQXRDLENBQWQsQ0FESixFQUVLK0YsV0FGTCxFQUdLRCxXQUhMLENBREo7QUFPSCxDOzs7Ozs7Ozs7OztBQ3RTRCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiLy8gQmFzZSBJbXBvcnRzXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuXG4vLyBTZXJ2ZXIgU2V0dXBcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuLy8gTWlkZGxld2FyZVxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5cbi8vIERhdGEgUGFyc2luZ1xuaW1wb3J0IHtcbiAgICByZW5kZXJTaWduYWxzXG59IGZyb20gJy4vcmVuZGVyZXInXG4vLyBpbXBvcnQgdGVzdE1vZGVsIGZyb20gJy4vdGVzdE1vZGVsLmpzb24nXG5cbi8vIFByZS1tYWRlIHByb2plY3RzIGFuZCBsaWJyYXJ5IG5vZGVzXG5pbXBvcnQgbGlicmFyeU5vZGVzIGZyb20gJy4vbGlicmFyeU5vZGVzLmpzb24nXG5pbXBvcnQgbW9kdWxhdGlvbiBmcm9tICcuL3Byb2plY3RzL21vZHVsYXRpb24uanNvbidcbmltcG9ydCBmb3VyaWVyU2VyaWVzIGZyb20gJy4vcHJvamVjdHMvZm91cmllclNlcmllcy5qc29uJ1xuXG5jb25zdCBkYXRlTm93ID0gKCkgPT4gU3RyaW5nKERhdGUoKS50b1N0cmluZygpKS5zdWJzdHIoMCwgMjQpICsgXCIgfCBcIjtcblxubGV0IGRhdGFiYXNlID0ge1xuICAgIHByb2plY3RzSW5mbzogW3tcbiAgICAgICAgcHJvamVjdElkOiBcIjFcIixcbiAgICAgICAgdGl0bGU6IFwiQU0vRk0gTW9kdWxhdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG93cyBvbmUgc2lnbmFsIG1vZHVsYXRlZCBvdmVyIG90aGVyIChjYXJyaWVyKSBzaWduYWwgdXNpbmcgQU0gYW5kIEZNIG1vZHVsYXRpb24uXCIsXG4gICAgICAgIG93bmVyOiBcImFkbWluXCJcbiAgICB9LCB7XG4gICAgICAgIHByb2plY3RJZDogXCIyXCIsXG4gICAgICAgIHRpdGxlOiBcIkZvdXJpZXIgU2VyaWVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkF0dGVtcHQgYXQgY3JlYXRpbmcgZm91cmllciBzZXJpZXMgdXNpbmcgdGhpcyB0b29sLlwiLFxuICAgICAgICBvd25lcjogXCJhZG1pblwiXG4gICAgfV0sXG4gICAgcHJvamVjdE1vZGVsczogW3tcbiAgICAgICAgICAgIC4uLm1vZHVsYXRpb25cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLi4uZm91cmllclNlcmllc1xuICAgICAgICB9XG4gICAgXSxcbiAgICB1c2Vyczoge1xuICAgICAgICBhZG1pbjoge1xuICAgICAgICAgICAgdXNlcm5hbWU6IFwiYWRtaW5cIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcImFkbWluXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmV3UHJvamVjdDogZnVuY3Rpb24gKHVzZXJuYW1lLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgLy8gRmluZCBuZXcgaWRcbiAgICAgICAgbGV0IG5ld0lkID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMucHJvamVjdHNJbmZvKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5wcm9qZWN0c0luZm9baV0ucHJvamVjdElkKSA+IG5ld0lkKSBuZXdJZCA9IHRoaXMucHJvamVjdHNJbmZvW2ldLnByb2plY3RJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0lkKys7XG5cbiAgICAgICAgLy8gQWRkIG5ldyBwcm9qZWN5IGluZm9cbiAgICAgICAgdGhpcy5wcm9qZWN0c0luZm8ucHVzaCh7XG4gICAgICAgICAgICBwcm9qZWN0SWQ6IG5ld0lkLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3duZXI6IHVzZXJuYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvamVjdE1vZGVscy5wdXNoKHtcbiAgICAgICAgICAgIC4uLnByb2plY3RNb2RlbFRlbXBsYXRlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdJZDtcbiAgICB9LFxuICAgIHNhdmVQcm9qZWN0OiBmdW5jdGlvbiAocHJvamVjdElkLCBqc29uKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RWZXJzaW9uID0ge1xuICAgICAgICAgICAgYWxsQ29ubmVjdGlvbnM6IGpzb24uYWxsQ29ubmVjdGlvbnMsXG4gICAgICAgICAgICBhbGxOb2RlczoganNvbi5hbGxOb2RlcyxcbiAgICAgICAgICAgIGNvbXBvc2VyQ29vcmRpbmF0ZXM6IGpzb24uY29tcG9zZXJDb29yZGluYXRlcyxcbiAgICAgICAgICAgIGlzQ3JlYXRpbmdDb25uZWN0aW9uOiBqc29uLmNvbXBvc2VyQ29vcmRpbmF0ZXNcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSA9IG5ld1Byb2plY3RWZXJzaW9uO1xuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdE1vZGVsVGVtcGxhdGUgPSB7XG4gICAgYWxsQ29ubmVjdGlvbnM6IFtdLFxuICAgIGFsbE5vZGVzOiB7fSxcbiAgICBjb21wb3NlckNvb3JkaW5hdGVzOiB7XG4gICAgICAgIGZvY3VzZWQ6IHRydWUsXG4gICAgICAgIGdyaWRTaXplOiA1MCxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgem9vbUxldmVsOiAxXG4gICAgfSxcbiAgICBpc0NyZWF0aW5nQ29ubmVjdGlvbjogZmFsc2Vcbn1cblxuLy8gU3RhdGljIGZpbGVzXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvcHVibGljL3N0YXRpYycpKVxuXG4vLyAtLS0gUk9VVEVTIC0tLVxuYXBwLmdldCgnL2VkaXRvci86dXNlcm5hbWUvOmlkJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gcmVxLnBhcmFtcy5pZDtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG5cbiAgICBjb25zb2xlLmxvZyhgJHtkYXRlTm93KCl9R0VUIC9lZGl0b3IvJHt1c2VybmFtZX0vJHtwcm9qZWN0SWR9YCk7XG5cbiAgICBpZiAoIWRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkgcmVzLnN0YXR1cyg0MjApLnNlbmQoXCJVc2VyIHdpdGggdXNlcm5hbWUgXCIgKyB1c2VybmFtZSArIFwiIGRvZXNuJ3QgZXhpc3RcIik7XG5cbiAgICBmcy5yZWFkRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wdWJsaWMvZWRpdG9yLmh0bWwnKSwgJ3V0ZjgnLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdBbiBlcnJvciBvY2N1cnJlZCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGl0bGVcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgIFwiPHRpdGxlPjwvdGl0bGU+XCIsXG4gICAgICAgICAgICBgPHRpdGxlPiR7cHJvamVjdElkfTwvdGl0bGU+YFxuICAgICAgICApXG5cbiAgICAgICAgbGV0IHByb2plY3REYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YWJhc2UucHJvamVjdHNJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZGF0YWJhc2UucHJvamVjdHNJbmZvW2ldO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdC5vd25lciA9PSB1c2VybmFtZSAmJiBwcm9qZWN0LnByb2plY3RJZCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGlkID0gcGFyc2VJbnQocHJvamVjdElkKSAtIDE7XG4gICAgICAgICAgICAgICAgcHJvamVjdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGFiYXNlLnByb2plY3RNb2RlbHNbcGlkXSxcbiAgICAgICAgICAgICAgICAgICAgcGlkOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiB1c2VybmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBkYXRhXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICAnPHNjcmlwdCBpZD1cImVkaXRvci1kYXRhXCI+PC9zY3JpcHQ+JyxcbiAgICAgICAgICAgIGA8c2NyaXB0IGlkPVwicHJvamVjdC1kYXRhXCI+ZG9jdW1lbnQucHJvamVjdERhdGEgPSAke0pTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKX08L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgaWQ9XCJsaWJyYXJ5LWRhdGFcIj5kb2N1bWVudC5saWJyYXJ5Tm9kZXMgPSAke0pTT04uc3RyaW5naWZ5KGxpYnJhcnlOb2Rlcyl9PC9zY3JpcHQ+YFxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgICAgICByZXMuc2VuZChkYXRhKTtcbiAgICB9KVxufSk7XG5cbi8vIERlZmF1bHQgdGVzdCB2aXN1YWxpc2F0aW9uXG5hcHAuZ2V0KCcvcmVuZGVyLzp1c2VybmFtZS86aWQnLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zb2xlLmxvZyhgJHtkYXRlTm93KCl9R0VUIC9yZW5kZXIvJHt1c2VybmFtZX0vJHtwcm9qZWN0SWR9YCk7XG5cbiAgICBpZiAoIWRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkgcmVzLnN0YXR1cyg0MjApLnNlbmQoXCJVc2VyIHdpdGggdXNlcm5hbWUgXCIgKyB1c2VybmFtZSArIFwiIGRvZXNuJ3QgZXhpc3RcIik7XG5cblxuICAgIGNvbnN0IHJlbmRlcmVkU3RyaW5nID0gcmVuZGVyU2lnbmFscyhkYXRhYmFzZS5wcm9qZWN0TW9kZWxzW3Byb2plY3RJZCAtIDFdKTtcblxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICByZXMuZW5kKHJlbmRlcmVkU3RyaW5nKTtcbn0pXG5cbi8vIEZvciBub3csIGxhbmRpbmcgcGFnZSBpcyB0aGUgcHJvamVjdHMgcGFnZS5cbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGZzLnJlYWRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3B1YmxpYy9wcm9qZWN0cy5odG1sJyksICd1dGY4JywgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnQW4gZXJyb3Igb2NjdXJyZWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRpdGxlXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICBcIjx0aXRsZT48L3RpdGxlPlwiLFxuICAgICAgICAgICAgYDx0aXRsZT5Qcm9qZWN0czwvdGl0bGU+YFxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgICAgICByZXMuZW5kKGRhdGEpO1xuICAgIH0pXG59KVxuXG5hcHAuZ2V0KFwiL3Byb2plY3RzL2luZm8vOnVzZXJuYW1lXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcblxuICAgIGlmIChkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHtcbiAgICAgICAgbGV0IHByb2plY3RzQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhYmFzZS5wcm9qZWN0c0luZm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhYmFzZS5wcm9qZWN0c0luZm9baV0ub3duZXIgPT09IHVzZXJuYW1lKVxuICAgICAgICAgICAgICAgIHByb2plY3RzQXJyYXkucHVzaChkYXRhYmFzZS5wcm9qZWN0c0luZm9baV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MjApLnNlbmQoYE5vIHVzZXIgd2l0aCB1c2VybmFtZSBcIiR7dXNlcm5hbWV9XCIgd2FzIGZvdW5kLmApO1xuICAgIH1cblxufSlcblxuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC5wb3N0KFwiL3NhdmUvOnVzZXJuYW1lLzppZFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICAvLyBTYXZlIGV4aXN0aW5nIHByb2plY3RcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG4gICAgY29uc3QgcHJvamVjdElkID0gcmVxLnBhcmFtcy5pZDtcblxuICAgIGNvbnNvbGUubG9nKGAke2RhdGVOb3coKX1QT1NUIC9zYXZlLyR7dXNlcm5hbWV9LyR7cHJvamVjdElkfWApO1xuXG4gICAgY29uc3QgcHJvamVjdEpzb24gPSByZXEuYm9keTtcblxuICAgIGlmICghZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSByZXMuc3RhdHVzKDQyMCkuc2VuZChgVXNlciB3aXRoIHVzZXJuYW1lICR7dXNlcm5hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblxuICAgIGlmICghZGF0YWJhc2UucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSkgcmVzLnN0YXR1cyg0MjEpLnNlbmQoYFByb2plY3Qgd2l0aCBpZCAke3Byb2plY3RJZH0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgZGF0YWJhc2Uuc2F2ZVByb2plY3QocHJvamVjdElkLCBwcm9qZWN0SnNvbik7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG5cbn0pXG5cblxuYXBwLmdldChcIi9jcmVhdGVQcm9qZWN0Lzp1c2VybmFtZS86dGl0bGUvOmRlc2NyaXB0aW9uXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zdCB0aXRsZSA9IHJlcS5wYXJhbXMudGl0bGU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSByZXEucGFyYW1zLmRlc2NyaXB0aW9uO1xuXG4gICAgaWYgKCFkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHJlcy5zdGF0dXMoNDIwKS5zZW5kKGBVc2VyIHdpdGggdXNlcm5hbWUgJHt1c2VybmFtZX0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgbGV0IHBpZCA9IGRhdGFiYXNlLm5ld1Byb2plY3QodXNlcm5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbik7XG5cbiAgICByZXMuc3RhdHVzKDMwMSkuc2VuZChgL2VkaXRvci8ke3VzZXJuYW1lfS8ke3BpZH1gKTtcbn0pXG5cbi8vIFJ1biBzZXJ2ZXJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlxcbkxpc3RlbmluZyBvbjogaHR0cHM6Ly9sb2NhbGhvc3Q6XCIgKyBwb3J0ICsgXCJcXG5cIik7XG59KTsiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdlbmVyYXRvciBDb2RlIFRva2VuaXNlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR2VuZXJhdG9yIGNvZGUgdG9rZW5pc2VyIGZ1bmN0aW9uIGlzIGFsZ29yaXRobWljYWxseSBzaW1wbGUsIGJ1dCBwcm9kdWNlcyBhIGdvb2QgcmVwcmVzZW50YXRpb25cbi8vIG9mIHRoZSBwcm92aWRlZCBjb2RlIGluIEphdmFTY3JpcHQgT2JqZWN0IGZvcm1hdCAod2hpY2ggY2FuIHRoZW4gYmUgZWFzaWx5IGNvbnZlcnRlZCB0byBKU09OLFxuLy8gc2luY2UgaXQncyBwcmV0dHkgbXVjaCB0aGUgc2FtZSB0aGluZykuXG4vLyBXaGVuIGdvaW5nIHRocm91Z2ggdGhlIGNvZGUsIGl0IGNhbiBkZXRlY3Qgc2V2ZXJhbCB0eXBlcyBvZiBvcGVyYXRvcnMuIFRoZXNlIGFyZTpcbi8vICAgICAqIFZhcmlhYmxlXG4vLyAgICAgKiBDb25zdGFudCBOdW1iZXJcbi8vICAgICAqIE1hdGggT3BlcmF0b3Jcbi8vICAgICAqIE1hdGggRnVuY3Rpb25cbi8vICAgICAqIFJlZ3VsYXIgc2NvcGUgLSBldmVyeXRoaW5nIGluc2lkZSBicmFja2V0cyBcIihcIiBhbmQgXCIpXCIgc2hvdWxkIGJlIGV4ZWN1dGVkIGZpcnN0XG4vLyBUaGUgVmFyaWFibGVzLCBOdW1iZXJzIGFuZCBNYXRoIG9wZXJhdG9ycyBhcmUganVzdCBhZGRlZCBhcyBhbiBvYmplY3Qgd2l0aCBhcHByb3ByaWF0ZSB0eXBlIGFuZFxuLy8gdmFsdWUgdGFrZW4gZnJvbSB0aGUgY29kZS5cblxuLy8gVE9ETzpcbi8vICogU2FuZXRpc2UgdmFyaWFibGUgbmFtZXMgISEhIEphdmFzY3JpcHQgaW5qZWN0aW9uIGlzIHBvc3NpYmxlIG5vdyB0aHJvdW4gdmFyaWFibGUgbmFtZXMuLi5cblxuaW1wb3J0IHtmaXhTY29wZXN9IGZyb20gJy4vc2NvcGVGaXhlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZUdlbmVyYXRvciAoZ2VuOiBzdHJpbmcsIG5vZGVJZDogc3RyaW5nKTogR2VuZXJhdG9yU2VnbWVudFtdIHtcbiAgICAvLyBHZXQgdmFsdWUgb2YgZ2VuZXJhdG9yIGNvZGUgYW5kIHN0b3JlIGluIGdcbiAgICBsZXQgZyA9IFN0cmluZyhnZW4pO1xuICAgIGcgPSBTdHJpbmcoZml4U2NvcGVzKGcpKTtcblxuICAgIC8vIFBhcnNlZCBHZW5lcmF0b3IgQ29kZVxuICAgIGxldCBwZ2VuOiBHZW5lcmF0b3JTZWdtZW50W10gPSBbXTtcbiAgICBcbiAgICAvLyBUaGUgc3RhY2tcbiAgICBsZXQgc3RhY2s6IEdlbmVyYXRvclNlZ21lbnRbXSA9IFtdO1xuXG4gICAgLy8gQ29kZSB0b2tlbmlzZXJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b3BTdGFja09iamVjdDogR2VuZXJhdG9yU2VnbWVudCA9IHN0YWNrLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gOiBudWxsO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBWQVJJQUJMRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiW1wiKSB7XG4gICAgICAgICAgICAvLyBNb3ZlIHRvIG5leHQgY2hhcmFjdGVyXG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIGVtcHR5IHZhcmlhYmxlXG4gICAgICAgICAgICBsZXQgdmFyaWFibGUgPSBcIlwiO1xuXG4gICAgICAgICAgICAvLyBTY2FuIHVudGlsIHZhcmlhYmxlIHNjb3BlIGlzIGNsb3NlZFxuICAgICAgICAgICAgd2hpbGUoZ1tpXSAhPT0gXCJdXCIpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSArPSBnW2ldO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodmFyaWFibGUgPT09IFwidGltZVwiIHx8IHZhcmlhYmxlID09PSBcIlBJXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nID9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBub2RlSWQgKyB2YXJpYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidmFyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhcmlhYmxlLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbdG9wSW5kZXhdLmNvZGUucHVzaCh2YXJpYWJsZVNuaXBwZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2godmFyaWFibGVTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBNQVRIIE9QRVJBVE9SIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYgKGdbaV0gPT09IFwiKlwiIHx8IGdbaV0gPT09IFwiL1wiIHx8IGdbaV0gPT09IFwiK1wiIHx8IGdbaV0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvclNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBnW2ldLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2gob3BlcmF0b3JTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChvcGVyYXRvclNuaXBwZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE1BVEggRlVOQ1RJT04gLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcInNcIiB8fCBnW2ldID09PSBcImNcIiB8fCBnW2ldID09PSBcInRcIikge1xuICAgICAgICAgICAgLy8gTWF0aGVtYXRpY2FsIGZvcm11bGFzIGFyZSBjb2RlZCBpbiB0aHJlZSBsZXR0ZXJzXG4gICAgICAgICAgICBsZXQgbmV4dFRocmVlID0gU3RyaW5nKGdbaV0gKyBnW2krMV0gKyBnW2krMl0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBuZXh0IHRocmVlIGNoYXJzIGFyZSBvbmUgb2YgXG4gICAgICAgICAgICBpZihuZXh0VGhyZWUgPT09IFwic2luXCIgfHwgbmV4dFRocmVlID09PSBcImNvc1wiIHx8IG5leHRUaHJlZSA9PT0gXCJ0YW5cIikge1xuICAgICAgICAgICAgICAgIC8vIEFkanVzdCBpbmRleCB0byBuZXh0IGNoYXJhY3RlclxuICAgICAgICAgICAgICAgIGkgKz0gMztcblxuICAgICAgICAgICAgICAgIC8vIFNlYXJjaCBmb3Igb3BlbmluZyBicmFja2V0c1xuICAgICAgICAgICAgICAgIHdoaWxlKGdbaV0gIT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcblxuICAgICAgICAgICAgICAgICAgICBpZihpID49IGcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdGhyb3cgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVSUk9SIFJFQVNPTjogc2hvdWxkIHByb3ZpZGUgYnJhY2tldHMgZm9yIG1hdGggb3BlcmF0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwic2hvdWxkIHByb3ZpZGUgYnJhY2tldHMgZm9yIG1hdGggb3BlcmF0b3JzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBwcm92aWRlZCBzcGFjZSBvciBhIGNoYXJhY3RlciBhZnRlciB0aHJlZSBtYXRoIGNoYXJzXG4gICAgICAgICAgICAgICAgLy8gaWYgKGdbaSsxXSA9PT0gXCIoXCIpIGkrKztcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGhTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1hdGhcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5leHRUaHJlZSxcbiAgICAgICAgICAgICAgICAgICAgY29kZTogW11cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFja1RvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5wdXNoKG1hdGhTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY29wZVRvcEluZGV4ID0gc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlW3Njb3BlVG9wSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCB0byByb290IGxldmVsXG4gICAgICAgICAgICAgICAgICAgIHBnZW4ucHVzaChtYXRoU25pcHBldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBnZW5bcGdlbi5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHBhcnNpbmcgY29kZVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIFJFR1VMQVIgU0NPUEUgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcIihcIikge1xuICAgICAgICAgICAgLy8gQmVnaW4gcmVndWxhciBzY29wZVxuICAgICAgICAgICAgY29uc3Qgc2NvcGVTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwic2NvcGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgICBjb2RlOiBbXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFja1RvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLnB1c2goc2NvcGVTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNjb3BlVG9wSW5kZXggPSBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlW3Njb3BlVG9wSW5kZXhdXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCB0byByb290IGxldmVsXG4gICAgICAgICAgICAgICAgcGdlbi5wdXNoKHNjb3BlU25pcHBldCk7XG5cbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBwZ2VuW3BnZW4ubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gRU5EIEFOWSBTQ09QRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiKVwiIHx8IGcuY2hhckF0KGkpID09PSBcIilcIikge1xuICAgICAgICAgICAgLy8gRW5kIFNjb3BlXG5cbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRvcCBpdGVtIGZyb20gc3RhY2sgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGNsb3NlZCBzY29wZSB0aGF0IHdhc24ndCBvcGVuZWRcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiAgICAgICAgICAgIHRocm93IEVSUk9SXG4gICAgICAgICAgICAgICAgLy8gRVJST1IgUkVBU09OOiAgICBub24gZXhpc3RlbnQgc2NvcGUgd2FzIGNsb3NlZFxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJub24gZXhpc3RlbnQgc2NvcGUgd2FzIGNsb3NlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBOVUJNRVIgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBsZXQgbWF5YmVOdW1iZXIgPSBTdHJpbmcocGFyc2VJbnQoZ1tpXSkpO1xuXG4gICAgICAgIGlmKG1heWJlTnVtYmVyICE9PSBTdHJpbmcoTmFOKSAmJiB0eXBlb2YgcGFyc2VJbnQobWF5YmVOdW1iZXIpID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGxldCBudW1iZXJTdGFydCA9IGk7XG5cbiAgICAgICAgICAgIC8vIElzIGN1cnJlbnQgY2hhciBhIG51bWJlciBvciBhIGRvdD9cbiAgICAgICAgICAgIGNvbnN0IGlzTnVtYmVyID0gKCkgPT4gKG1heWJlTnVtYmVyICE9PSBTdHJpbmcoTmFOKSAmJiB0eXBlb2YgcGFyc2VJbnQobWF5YmVOdW1iZXIpID09PSBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGNvbnN0IGlzRG90ID0gKGluZGV4OiBudW1iZXIpID0+IFN0cmluZyhnW2luZGV4XSkgPT09IFwiLlwiO1xuXG4gICAgICAgICAgICAvLyBXYXMgdGhlcmUgYSBkb3QgaW4gY3VycmVudCBzZXF1ZW5jZSBvZiBudW1iZXJzP1xuICAgICAgICAgICAgbGV0IHdhc0RvdEFscmVhZHkgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2hpbGUoaXNOdW1iZXIoKSB8fCBpc0RvdChpKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGN1cnJlbnQgY2hhciBpcyBhIGRvdFxuICAgICAgICAgICAgICAgIGlmKGlzRG90KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHdhc0RvdEFscmVhZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IHRoZXJlIHdhcyBhIGRvdCBhbHJlYWR5LCB0aHJvdyBlcnJvciwgc2luY2UgaXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0aHJvdyBFUlJPUlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRVJST1IgUkVBU09OOiBpbnZhbGlkIGZsb2F0aW5nIHBvaW50IG51bWJlciBzeW50YXhcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIG5vdCwgc2V0IHdhcyBkb3QgYWxyZWFkeSB0byB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXNEb3RBbHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1vdmUgdG8gbmV4dCBpbmRleCBhbmQgXG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIG1heWJlTnVtYmVyID0gU3RyaW5nKHBhcnNlSW50KGdbaV0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0aW5nTnVtYmVyID0gZy5zbGljZShudW1iZXJTdGFydCwgaSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG51bWJlclNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0aW5nTnVtYmVyLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBzdGFja1t0b3BJbmRleF0uY29kZS5wdXNoKG51bWJlclNuaXBwZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCB0byByb290IGxldmVsXG4gICAgICAgICAgICAgICAgcGdlbi5wdXNoKG51bWJlclNuaXBwZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpLS07XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBSZXR1cm4gcGFyc2VkIGdlbmVyYXRvciBhcnJheVxuICAgIHJldHVybiBwZ2VuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlbmVyYXRvclNlZ21lbnQge1xuICAgIHR5cGU6IHN0cmluZyxcbiAgICB2YWx1ZTogKHN0cmluZ3xudW1iZXIpLFxuICAgIGNvZGU6IEdlbmVyYXRvclNlZ21lbnRbXVxufSIsImltcG9ydCB7IHJlbmRlclRvU3RyaW5nLCByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG5pbXBvcnQgeyBzY3JpcHRHZW5lcmF0b3IgfSBmcm9tICcuL3NjcmlwdEdlbmVyYXRvci50cyc7XG5pbXBvcnQgeyBqc3hEb20gfSBmcm9tICcuL3ZpZXdlckRvbSc7XG5cbmZ1bmN0aW9uIHJlbmRlckh0bWwgKHJlcXVlc3RKc29uKSB7XG4gICAgLy8gU2VwYXJhdGUgbm9kZXMgZnJvbSBjb25uZWN0b3JzXG4gICAgY29uc3QgYWxsTm9kZXMgPSB7Li4ucmVxdWVzdEpzb24uYWxsTm9kZXN9O1xuICAgIGNvbnN0IGFsbENvbm5lY3Rpb25zID0gWy4uLnJlcXVlc3RKc29uLmFsbENvbm5lY3Rpb25zXTtcblxuICAgIC8vIFJlbmRlciBIVE1MXG4gICAgY29uc3QganN4ID0ganN4RG9tKGFsbE5vZGVzKTtcbiAgICBjb25zdCBqc3hTdHJpbmcgPSByZW5kZXJUb1N0YXRpY01hcmt1cChqc3gpO1xuXG4gICAgLy8gR2VuZXJhdGUgU2NyaXB0c1xuICAgIC8vIGNvbnNvbGUudGltZShcIlNjcmlwdCBQYXJzZXJcIik7XG5cbiAgICBjb25zdCBzY3JpcHRBcnJheSA9IHNjcmlwdEdlbmVyYXRvcihhbGxOb2RlcywgYWxsQ29ubmVjdGlvbnMpO1xuICAgIGxldCBjb21wb3NlZFNjcmlwdFN0cmluZyA9IFwiXCI7XG4gICAgZm9yKGxldCBzIGluIHNjcmlwdEFycmF5KSB7XG4gICAgICAgIGlmKHMgPT0gMCkgY29udGludWU7XG4gICAgICAgIGNvbXBvc2VkU2NyaXB0U3RyaW5nICs9IHNjcmlwdEFycmF5W3NdO1xuICAgIH1cbiAgICBcbiAgICAvLyBjb25zb2xlLnRpbWVFbmQoXCJTY3JpcHQgUGFyc2VyXCIpO1xuXG4gICAgbGV0IHNjcmlwdHMgPSBgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9DaGFydC5qcy8yLjcuMy9DaGFydC5idW5kbGUubWluLmpzXCI+PC9zY3JpcHQ+XFxuYDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0IHNyYz1cIi9mZnQuanNcIj48L3NjcmlwdD5cXG5gO1xuICAgIHNjcmlwdHMgKz0gYDxzY3JpcHQ+JHtzY3JpcHRBcnJheVswXX08L3NjcmlwdD5cXG5gO1xuICAgIHNjcmlwdHMgKz0gYDxzY3JpcHQ+JHtjb21wb3NlZFNjcmlwdFN0cmluZ308L3NjcmlwdD5cXG5gO1xuICAgIFxuICAgIC8vIENvbWJpbmUgZm9ybWVyIHJlc3VsdHNcbiAgICBjb25zdCBzY3JpcHRlZEh0bWwgPSBqc3hTdHJpbmcuc2xpY2UoMCwganN4U3RyaW5nLmxlbmd0aCAtIDYpICsgc2NyaXB0cyArIFwiPC9kaXY+XCI7XG4gICAgXG4gICAgLy8gUmV0dXJuIGdlbmVyYXRlZCBIVE1MIGFzIGEgc3RyaW5nXG4gICAgcmV0dXJuIHNjcmlwdGVkSHRtbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNpZ25hbHMgKHJlcXVlc3RKc29uKSB7XG4gICAgcmV0dXJuIHJlbmRlckh0bWwocmVxdWVzdEpzb24pO1xufSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTY29wZSBGaXhlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNjb3BlIEZpeGVyIGZ1bmN0aW9uIGlzIHJlbGF0ZWQgdG8gdGhlIGdlbiB2YXJpYWJsZSBwYXJzaW5nIGFsZ29yaXRobS4gU2luY2UgdGhlIHRva2VuaXplciBcbi8vIGZ1bmN0aW9uIGRvZXMgbm90IHRha2UgaW50byBhY2NvdW5kIHRoYXQgbWF0aCBvcGVyYXRvcnMgKiAobXVsdGlwbGljYXRpb24pIGFuZCAvIChkaXZpc2lvbilcbi8vIGFyZSBleGVjdXRlZCBmaXJzdCwgd2UgbmVlZCB0byBwdXQgc2NvcGVzIGFyb3VuZCBiaXRzIHRoYXQgc2hvdWxkIGV4ZWN1dGVkIGZpcnN0LiBUaGlzIGlzIFxuLy8gbm90IGZpbmFsIHNvbHV0aW9uLCBzaW5jZSBpdCBkb2VzIG5vdCB0YWtlIGZvbGxvd2luZyBzaXR1YXRpb25zIGludG8gYWNjb3VudDpcbi8vICAgICAqIHRoZXJlIGlzIGEgbWludXMgb3IgcGx1cyBzaWduIGJlZm9yZSBhIG51bWJlcjogLTEqW3ZhcmlhYmxlXVxuLy8gICAgICAgICAtIEluIHRoaXMgY2FzZSBpdCB3b3VsZCByZXR1cm4gdGhpczogLSgxKlt2YXJpYWJsZV0pLiBUaGlzIGRvZXMgbm90IGFwcGx5IHNjb3Blc1xuLy8gICAgICAgICAgIGNvcnJlY3RseS5cbi8vXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBbGdvcml0aG0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBhbGdvcml0aG0gbWFrZXMgb25seSBvbmUgZ2VuZXJhbCBzd2VlcCB0aHJvdWdoIHRoZSBzdHJpbmcuIFRoaXMgbWVhbnMgdGhhdCBpZiBubyBcbi8vIHNjb3BlcyBhcmUgbmVlZGVkLCBleGVjdXRpb24gdGltZSB3aWxsIGJlIG1pbmltYWwsIGkuZS4gaXQgd2lsbCB0YWtlIGFzIG11Y2ggdGltZSBhcyBpdFxuLy8gdGFrZXMgdG8gbG9vcCB0aHJvdWdoIHRoZSBzdHJpbmcgb25jZSBhbmQgY2hlY2sgaWYgdGhlIGNoYXJhY3RlciBpcyAqIG9yIC8uIEluIHRoZSBjYXNlIG9mXG4vLyAzNCBjaGFyYWN0ZXIgc3RyaW5nLCB0aGlzIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIGluIGFib3VudCAwLjMtMC41IG1zLiBXaXRoIGFuIGF2ZXJhZ2Ugb2YgXG4vLyBhcm91bmQgMC40bXMgYW5kIDM0IGNoYXJhY3RlcnMsIHdlIGNhbiBhcHByb3hpbWF0ZSB0aGF0IG9uZSBjaGFyYWN0ZXIgdGFrZXMgMC40IC8gMzQgPSAxLjY2XG4vLyBtaWNybyBzZWNvbmRzLiBUaGlzIHdhcyB0ZXN0ZWQgb24gMi43R2h6IEludGVsIENvcmUgaTcuIFNvIGl0IHRvb2sgYXJvdW5kIDQ0ODIgY2xvY2sgY3ljbGVzXG4vLyB0byBleGVjdXRlIHRoYXQgYWNjb3JkaW5nIHRvIGZvbGxvd2luZyBlcXVhdGlvbjogMS42NnVzIC8gKDEgLyAyLjdHKSA9IDQ0ODIuIFRoaXMgY291bGQgYmUgXG4vLyBkcmFtYXRpY2FsbHkgaW1wcm92ZWQgYnkgdXNpbmcgY3VzdG9tIG1hZGUgTm9kZS5qcyBjKysgcGx1Z2luIHdoaWNoIGFsbG93cyB0byBydW4gYysrXG4vLyBiaW5hcmllcyBmcm9tIE5vZGUuanMgb3IgYnkgd3JpdGluZyB0aGUgd2hvbGUgcmVuZGVyZXIgc2VydmVyIGluIGEgY29tcGlsZWQgbGFuZ3VhZ2UgbGlrZSBcbi8vIHB5dGhvbiwgYyMsIGdvLCBvciBzd2lmdC4gVGhlcmUgaXMgYWxzbyBhIHBvc3NpYmlsaXR5IHRvIHdyaXRlIGl0IGluIFJ1c3QgbGFuZ3VhZ2UsIEMgb3Jcbi8vIEMrKy4gVGhpcyB3b3VsZCBhbGxvdyB0byBjb21waWxlIGp1c3QgdGhpcyBmdW5jdGlvbiB0byBXZWJBc3NlbWJseSBhbmQgcnVuIGl0IGluIE5vZGUuanMgYXQgXG4vLyBjb21waWxlZCBzcGVlZC4gSWYgZnVydGhlciBkZXZlbG9wbWVudCB3aWxsIGJlIGRvbmUgYW5kIHRoZXJlIHdpbGwgYmUgYSBkZWNpc2lvbiB0byAgc3dpdGNoXG4vLyB0byBhIGNvbXBpbGVkIGxhbmd1YWdlIHNlcnZlciwgSSB3b3VsZCBzdWdnZXN0IHVzaW5nIEdPIGxhbmd1YWdlIGR1ZSB0byBpdHMgc2ltcGxpY2l0eS5cbi8vXG4vLyBBbGdpdGhtIHdvcmtzIGluIGEgZm9sbG93aW5nIGZhc2hpb246XG4vLyAgIDEuIE1ha2Ugc3VyZSBwYXNzZWQgdGV4dCBpcyBvZiBhIFN0cmluZyB0eXBlXG4vLyAgIDIuIFNldCBmbGFncyB0byBmYWxzZTpcbi8vICAgICAgIC0gYm9yZGVyIGZsYWdzOiBpbmRpY2F0ZSBpZiBvbiBsZWZ0IG9yIHJpZ2h0LCBhICsgb3IgLSBzaWduIHdhcyBmb3VuZFxuLy8gICAgICAgLSBicmFja2V0IGZsYWdzOiBpbmRpY2F0ZSBpZiB3aGlsZSBzd2VlcGluZyBsZWZ0IGFuZCByaWdodCBhIHNjb3BlIHdhcyBmb3VuZFxuLy8gICAzLiBJbml0aWF0ZSB2YXJpYWJsZXMgZm9yIGxlZnQgYW5kIHJpZ2h0IHN3ZWVwZXJzXG4vLyAgIDQuIExvb3AgdW50aWwgd2hvbGUgc3RyaW5nIHdhcyBzY2FubmVkLCBpbiB0aGUgbG9vcDpcbi8vICAgICAgIDEuIElmIGN1cnJlbnQgY2hhcmFjdGVyIGlzIFwiKlwiXCIgb3IgXCIvXCIsIGNvbnRpbnVlLCBvdGhlcndpc2UgaW5jcmVhc2UgaW5kZXggYnkgb25lIGFuZCBjaGVjayBhZ2FpblxuLy8gICAgICAgMi4gU2NhbiB0byB0aGUgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGluZGV4LlxuLy8gICAgICAgMy4gSWYgcmFuIG91dCBvZiBib3VuZHMgb2YgdGhlIHN0cmluZywgc3RvcCBzY2FubmluZyBsZWZ0LCBtb3ZlIHRvIHN0ZXAgN1xuLy8gICAgICAgNC4gSWYgaGl0IGNsb3NpbmcgYnJhY2tldCwgc2V0IGNsb3NpbmcgYnJhY2tldCBmbGFnIHRvIHRydWUuXG4vLyAgICAgICA1LiBJZiBoaXQgb3BlbmluZyBicmFja2V0LCBjaGVjayBpZiBjbG9zaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcgYW5kIHNldCBjbG9zaW5nIGJyYWNrZXQgZmxhZyB0byBmYWxzZSBhZ2Fpbi5cbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgbW92ZSB0byBzdGVwIDdcbi8vICAgICAgIDYuIElmIFwiK1wiIG9yIFwiLVwiIHNpZ24gd2FzIGhpdCwgY2hlY2sgaWYgY2xvc2luZyBicmFja2V0IHdhcyBoaXQgYmVmb3JlOlxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBoaXQsIGNvbnRpbnVlIHNjYW5uaW5nLCBzaW5jZSBpdCBtZWFucyB0aGF0IHRoZSArIG9yIC0gc2lnbiBpcyBpbiBhbm90aGVyIHNjb3BlXG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIE5PVCBoaXQsIHN0b3Agc2Nhbm5pbmcsIG1vdmUgcmlnaHQgYnkgb25lIHN0ZXAgYW5kIHJlc2V0IGxlZnQgYm9yZGVyIGZsYWdcbi8vICAgICAgIDcuIFNjYW4gdG8gdGhlIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgaW5kZXguXG4vLyAgICAgICA4LiBJZiByYW4gb3V0IG9mIGJvdW5kcyBvZiB0aGUgc3RyaW5nLCBzdG9wIHNjYW5uaW5nIGxlZnQsIG1vdmUgdG8gc3RlcCAxMlxuLy8gICAgICAgOS4gSWYgaGl0IG9wZW5pbmcgYnJhY2tldCwgc2V0IG9wZW5pbmcgYnJhY2tldCBmbGFnIHRvIHRydWUuXG4vLyAgICAgICAxMC4gSWYgaGl0IGNsb3NpbmcgYnJhY2tldCwgY2hlY2sgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgYmVmb3JlOlxuLy8gICAgICAgICAgIC0gSWYgb3BlbmluZyBicmFja2V0IFdBUyBoaXQsIGNvbnRpbnVlIHNjYW5uaW5nIGFuZCBzZXQgb3BlbmluZyBicmFja2V0IGZsYWcgdG8gZmFsc2UgYWdhaW4uXG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIE5PVCBoaXQsIHN0b3Agc2Nhbm5pbmcgYW5kIG1vdmUgdG8gc3RlcCAxMlxuLy8gICAgICAgMTEuIElmIFwiK1wiIG9yIFwiLVwiIHNpZ24gd2FzIGhpdCwgY2hlY2sgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgYmVmb3JlOlxuLy8gICAgICAgICAgIC0gSWYgb3BlbmluZyBicmFja2V0IFdBUyBoaXQsIGNvbnRpbnVlIHNjYW5uaW5nLCBzaW5jZSBpdCBtZWFucyB0aGF0IHRoZSArIG9yIC0gc2lnbiBpcyBpbiBhbm90aGVyIHNjb3BlXG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIE5PVCBoaXQsIHN0b3Agc2Nhbm5pbmcgYW5kIHJlc2V0IGxlZnQgYm9yZGVyIGZsYWdcblxuZXhwb3J0IGZ1bmN0aW9uIGZpeFNjb3BlcyhnZW4pIHtcbiAgICBsZXQgZyA9IFN0cmluZyhnZW4pO1xuXG4gICAgLy8gVmFyaWFibGUgYXJlIHRha2VuIG91dHNpZGUgb2YgZm9yIGxvb3AsIHRvIGluY3JlYXNlIHBlcmZvcm1hbmNlLlxuICAgIC8vIEluIHRoaXMgd2F5LCB2YXJpYWJsZXMgYXJlIGp1c3QgcmV3cml0dGVuIGluIHRoZSBzYW1lIG1lbW9yeVxuICAgIC8vIGxvY2F0aW9uIGluc3RlYWQgb2YgY3JlYXRpbmcgbmV3IHZhcmlhYmxlIGV2ZXJ5IHRpbWUuXG4gICAgbGV0IGZvdW5kTGVmdEJvcmRlciA9IGZhbHNlO1xuICAgIGxldCBmb3VuZFJpZ2h0Qm9yZGVyID0gZmFsc2U7XG5cbiAgICBsZXQganVzdEhpdE9wZW5pbmdCcmFja2V0ID0gZmFsc2U7XG4gICAgbGV0IGp1c3RIaXRDbG9zaW5nQnJhY2tldCA9IGZhbHNlO1xuXG4gICAgbGV0IGxlZnQ7XG4gICAgbGV0IHJpZ2h0O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChnW2ldID09PSBcIipcIiB8fCBnW2ldID09PSBcIi9cIikge1xuICAgICAgICAgICAgLy8gU2NhbiBsZWZ0XG4gICAgICAgICAgICBmb3IgKGxlZnQgPSBpOyAhZm91bmRMZWZ0Qm9yZGVyOyBsZWZ0LS0pIHtcbiAgICAgICAgICAgICAgICAvLyBFeGl0IHRoZSBzY2FubmluZyBsb29wIGlmIGhpdCBsZWZ0IHN0cmluZyB3YWxsXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGRvZXMgbm90IHNldCBmb3VuZExlZnRCb3JkZXIgdmFyaWFibGUgdG8gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgaWYgYm90aCBzaWRlcyBhcmUgYnJhY2tldHMgb3Igb3V0ZXIgd2FsbHMgb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN0cmluZywgbmV3IGJyYWNrZXRzIHNob3VsZCBub3QgYmUgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBoaXRzIG9wZW5pbmcgYnJhY2tldCwgaXQgY2hlY2tzIGlmIGl0IGhpdCBjbG9zaW5nIGJyYWNrZXQgYmVmb3JlXG4gICAgICAgICAgICAgICAgaWYgKGdbbGVmdF0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0Q2xvc2luZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RIaXRDbG9zaW5nQnJhY2tldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1hcmtzIHRoYXQgaXQgaGl0IGNsb3NpbmcgYnJhY2tldCwgc28gdGhhdCBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBsYXRlcixcbiAgICAgICAgICAgICAgICAvLyBpdCBrbm93cyB0aGF0IGl0IHNob3VsZG4ndCBcbiAgICAgICAgICAgICAgICBpZiAoZ1tsZWZ0XSA9PT0gXCIpXCIpIGp1c3RIaXRDbG9zaW5nQnJhY2tldCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvLyBFeGl0IHNjYW5uaW5nIGxvb3AgaWYgaGl0IHBsdXMgb3IgbWludXNcbiAgICAgICAgICAgICAgICAvLyBBbHNvLCBtb3ZlIHJpZ2h0LCBzbyB0aGF0IGJyYWNrZXMgaXMgaW5zZXJ0ZWQgYWZ0ZXIgKyBvciAtIHNpZ25cbiAgICAgICAgICAgICAgICBpZiAoZ1tsZWZ0XSA9PT0gXCIrXCIgfHwgZ1tsZWZ0XSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRDbG9zaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZExlZnRCb3JkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNjYW4gcmlnaHRcbiAgICAgICAgICAgIGZvciAocmlnaHQgPSBpOyAhZm91bmRSaWdodEJvcmRlcjsgcmlnaHQrKykge1xuICAgICAgICAgICAgICAgIC8vIEV4aXQgdGhlIHNjYW5uaW5nIGxvb3AgaWYgaGl0IHJpZ2h0IHN0cmluZyB3YWxsIG9yIGNsb3NpbmcgYnJhY2tldFxuICAgICAgICAgICAgICAgIGlmIChyaWdodCA+PSBnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGRvZXMgbm90IHNldCBmb3VuZFJpZ2h0Qm9yZGVyIHZhcmlhYmxlIHRvIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIGlmIGJvdGggc2lkZXMgYXJlIGJyYWNrZXRzIG9yIG91dGVyIHdhbGxzIG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdHJpbmcsIG5ldyBicmFja2V0cyBzaG91bGQgbm90IGJlIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgaGl0cyBjbG9zaW5nIGJyYWNrZXQsIGl0IGNoZWNrcyBpZiBpdCBoaXQgb3BlbmluZyBicmFja2V0IGJlZm9yZVxuICAgICAgICAgICAgICAgIGlmIChnW3JpZ2h0XSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRPcGVuaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdEhpdE9wZW5pbmdCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFya3MgdGhhdCBpdCBoaXQgY2xvc2luZyBicmFja2V0LCBzbyB0aGF0IGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGxhdGVyLFxuICAgICAgICAgICAgICAgIC8vIGl0IGtub3dzIHRoYXQgaXQgc2hvdWxkbid0IFxuICAgICAgICAgICAgICAgIGlmIChnW3JpZ2h0XSA9PT0gXCIoXCIpIGp1c3RIaXRPcGVuaW5nQnJhY2tldCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ1tyaWdodF0gPT09IFwiK1wiIHx8IGdbcmlnaHRdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdE9wZW5pbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kUmlnaHRCb3JkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBvbiBvbmUgb2YgdGhlIHNpZGVzIHRoZXJlIGlzICsgb3IgLSBzaWduXG4gICAgICAgICAgICBpZiAoZm91bmRMZWZ0Qm9yZGVyIHx8IGZvdW5kUmlnaHRCb3JkZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBTbGljZSBvcmlnaW5hbCBzdHJpbmcgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbnNcbiAgICAgICAgICAgICAgICBsZXQgb25lID0gZy5zbGljZSgwLCBsZWZ0KTtcbiAgICAgICAgICAgICAgICBsZXQgdHdvID0gZy5zbGljZShsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICAgICAgbGV0IHRocmVlID0gZy5zbGljZShyaWdodCwgZy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IGJyYWNrZXRzIGJldHdlZW4gZm9ybWVyIHRocmVlIHN0cmluZ3MgdG8gZm9ybVxuICAgICAgICAgICAgICAgIC8vIG5ldyBzdHJpbmcgd2l0aCBpbnNlcnRlZCBicmFja2V0c1xuICAgICAgICAgICAgICAgIGcgPSBvbmUgKyBcIihcIiArIHR3byArIFwiKVwiICsgdGhyZWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlc2V0IGJvcmRlciB2YXJpYWJsZXNcbiAgICAgICAgICAgIGZvdW5kTGVmdEJvcmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgZm91bmRSaWdodEJvcmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGc7XG59IiwiaW1wb3J0IHtcbiAgICBzZXBhcmF0ZU5vZGVzLFxuICAgIGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnksXG4gICAgb2JqZWN0U2l6ZSxcbiAgICB3YXNDYWxjdWxhdGVkLFxuICAgIGFsbElucHV0c0NhbGN1bGF0ZWQsXG4gICAgY2FsY3VsYXRlT3V0cHV0LFxuICAgIGdldFRvdWNoSW5wdXRzLFxuICAgIGluaXRUaW1lLFxuICAgIGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyxcbiAgICBnZXRPdGhlclNpZGVPZkNvbm5lY3RvclxufSBmcm9tICcuL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucyc7XG5cbmNvbnN0IFNBTVBMRV9SQVRFID0gNTEyOyAvLyBTYW1wbGVzIHBlciBzZWNvbmRcbmNvbnN0IERVUkFUSU9OID0gMjsgLy8gU2Vjb25kcywgaWRlYWxseSBzaG91bGQgYmUgZGl2aWRhYmxlIGJ5IDJcbmNvbnN0IE9GRlNFVCA9IDA7IC8vIFdoaWNoIHBvaW50IHNob3VsZCBiZSB0aGUgY2VudHJlIG9mIHRoZSBzY29wZVxuXG5leHBvcnQgZnVuY3Rpb24gc2NyaXB0R2VuZXJhdG9yKGFsbE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdKSB7XG4gICAgLy8gRXhlY3V0YWJsZSB0byBzdG9yZSBnZW5lcmF0ZWQgamF2YXNjcmlwdCBjb2RlLiBBbnkgaW5pdGlhbGlzYXRpb24gY29kZSBzaG91bGQgYmUgaGVyZS5cbiAgICBsZXQgZXhlQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IGV4ZWN1dGFibGUgPSBcInZhciBncmFwaHMgPSB7fTtcXG5cIjtcblxuICAgIC8vIFNldHVwIHRpbWVcbiAgICBleGVjdXRhYmxlICs9IGluaXRUaW1lKE9GRlNFVCAtIERVUkFUSU9OIC8gMiwgT0ZGU0VUICsgRFVSQVRJT04gLyAyLCAxIC8gU0FNUExFX1JBVEUpO1xuXG4gICAgLy8gQ2FsY3VsYXRlZCBub2RlcyBoYXZlIGZvbGxvd2luZyBzaGFwZTogXCJub2RlSWQ6b3V0cHV0SWRcIlxuICAgIGxldCBjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAvLyBTdGF0aXN0aWNzIG9iamVjdFxuICAgIGxldCBzdGF0aXN0aWNzID0ge1xuICAgICAgICBsb29wQ291bnRlcjogMCxcbiAgICAgICAgaW5pdGlhbFRvdGFsTm9kZXM6IG9iamVjdFNpemUoYWxsTm9kZXMpLFxuICAgICAgICBpbml0aWFsVG90YWxDb25uZWN0b3JzOiBhbGxDb25uZWN0aW9ucy5sZW5ndGgsXG4gICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgZW5kVGltZTogMFxuICAgIH07XG5cbiAgICAvLyBTZXBhcmF0ZXMgdW5jYWxjdWxhdGVkIG5vZGVzIGZyb20gc2NvcGVzIGFuZCBVSSBhdCB0aGUgc3RhcnQuXG4gICAgbGV0IHsgdW5jYWxjdWxhdGVkTm9kZXMsIGFsbFNjb3BlcywgdWlOb2RlcywgZmZ0Tm9kZXMgfSA9IHNlcGFyYXRlTm9kZXMoYWxsTm9kZXMpO1xuXG4gICAgLy8gU2VwYXJhdGUgdG91Y2ggbm9kZXMgZm9ybSByZWd1bGFyIG5vZGVzXG4gICAgbGV0IHRvdWNoTm9kZXNTZXBhcmF0ZWQgPSBnZXRUb3VjaElucHV0cyh1bmNhbGN1bGF0ZWROb2Rlcyk7XG5cbiAgICB1bmNhbGN1bGF0ZWROb2RlcyA9IHRvdWNoTm9kZXNTZXBhcmF0ZWQudW5jYWxjdWxhdGVkTm9kZXM7XG5cbiAgICAvLyBEZWFsIHdpdGggdG91Y2ggQ29udHJvbHNcbiAgICBsZXQgdG91Y2hOb2RlcyA9IHRvdWNoTm9kZXNTZXBhcmF0ZWQudG91Y2hOb2RlcztcblxuICAgIGV4ZWN1dGFibGUgKz0gZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzKHRvdWNoTm9kZXMpO1xuXG4gICAgZm9yIChsZXQgdCBpbiB0b3VjaE5vZGVzKSB7XG4gICAgICAgIGZvciAobGV0IG8gaW4gdG91Y2hOb2Rlc1t0XS5vdXRwdXRzKSB7XG4gICAgICAgICAgICBjYWxjdWxhdGVkTm9kZXMucHVzaChgJHt0fToke3RvdWNoTm9kZXNbdF0ub3V0cHV0c1tvXS50aXRsZX1gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29ubmVjdGlvbiBEaWN0aW9uYXJ5IGNvbnRhaW5zIGNvbm5lY3Rpb25zIGluIGtleTogdmFsdWUgZm9ybWF0LCB3aGVyZVxuICAgIC8vIGJvdGggY29udGFpbiBub2RlSWQgYW5kIHNldHRpbmdJZCBhcyBzdHJpbmdzIHNlcGFyYXRlZCBieSBhIGNvbG9uLlxuICAgIGxldCBjb25uZWN0aW9uRGljdGlvbmFyeSA9IGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnkoYWxsQ29ubmVjdGlvbnMpO1xuXG4gICAgLy8gR2VuZXJhbCBydWxlcyBmb3IgYWxnb3JpdGhtIHdyaXRpbmc6XG4gICAgLy8gKiB1c2UgYXMgbWFueSBmdW5jdGlvbnMgYXMgcG9zc2libGUgKGluIHBlcmZvcm1hbmNlIGJvdW5kcylcbiAgICAvLyAqIFxuXG4gICAgLy8gMC4gTG9vcCB0aHJvdWdoIHVuY2FsY3VsYXRlZCBub2RlcyBhbmQgZmluZCBzY29wZXMuIFNjb3BlcyBkbyBub3QgaGF2ZSBvdXRwdXRzLCBzbyBubyBuZWVkIHRvIGZpbmQgaW5wdXRzLlxuICAgIC8vIDAuMCBEbyBpdCBpbiBhIGZ1bmN0aW9uP1xuXG4gICAgLy8gMS4gTG9vcCB1bnRpbCBhbGwgbm9kZXMgYXJlIGNhbGN1bGF0ZWRcbiAgICAvLyB8ICAgMS4gQ2hlY2sgaWYgbm9kZSB3YXMgY2FsY3VsYXRlZCBiZWZvcmUsIGlmIHllcyBnbyB0byBuZXh0IG5vZGUuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgMi4gSWYgd2FzIG5vdCBjYWxjdWxhdGVkOlxuICAgIC8vIHwgICB8ICAgMS4gQ2hlY2sgaWYgYWxsIGNvbm5lY3RlZCBpbnB1dHMgYXJlIGNvbm5lY3RlZCB0byB0aGUgY2FsY3VsYXRlZCBub2RlcywgaWYgbm90IC0gZ28gdG8gbmV4dCBub2RlLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIHwgICAyLiBJZiB5ZXMsIHNhdmUgYWxsIHVuY29ubmVjdGVkIGlucHV0cyAodmFsdWUgZnJvbSBkZWZhdWx0IHZhbHVlKS4gKGZ1bmN0aW9uIGZvciBlYWNoIHNhdmUpXG4gICAgLy8gfCAgIHwgICAzLiBDaGVjayBpZiBvdXRwdXQgaXMgcG9pbnRpbmcgdG8gYSBnZW5lcmF0b3IuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgfCAgIDQuIElmIHllcywgcGFyc2UgZ2VuZXJhdG9yXG4gICAgLy8gfCAgIHwgICB8ICAgMS4gU2NhbiBnZW5lcmF0b3IgYW5kIHNhdmUgdmFyaWFibGVzXG4gICAgLy8gfCAgIHwgICB8ICAgMi4gSWYgdmFyaWFibGUgaXMgYSBnZW5lcmF0b3IgZ28gdG8gc3RlcCAxLjIuNFxuICAgIC8vIHwgICB8ICAgfCAgIDMuIExvb3AgdW50aWwgYWxsIGdlbmVyYXRvcnMgd2VyZSBwYXJzZWRcbiAgICAvLyB8ICAgfCAgIHwgLS0tLS0tLS0tLS0gSW4gZm9sbG93aW5nLCBpbnB1dHMgYXJlIGNoZWNrZWQgZmlyc3Qgc2luY2Ugc2V0dGluZyBjYW4gYmUgYW4gaW5wdXQgLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHwgICB8ICAgNS4gQ2hlY2sgaWYgb3V0cHV0IGlzIHBvaW50aW5nIHRvIGFuIGlucHV0LCBpZiB5ZXMgYXNzaWduIGlucHV0IHZhcmlhYmxlIHRvIHRoZSBvdXRwdXQgdmFyaWFibGVcbiAgICAvLyB8ICAgfCAgIDYuIENoZWNrIGlmIG91dHB1dCBpcyBwb2ludGluZyB0byBhIHNldHRpbmcsIGlmIHllcyBhc3NpZ24gY29uc3RhbnQgdG8gdGhlIHNldHRpbmdcbiAgICAvLyAyLiBGb3IgZWFjaCBzY29wZTpcbiAgICAvLyB8ICAgMS4gR2V0IGFsbCBpbnB1dHMgYW5kIHNhdmUgdGhlbSBpbiB2YXJpYWJsZXMgKGFzc3VtZWQgdG8gYmUgY2FsY3VsYXRlZCBzaW5jZSB0ZXJtaW5hdGlvbiBjb25kaXRpb24gZnJvbSBzdGVwIDEgaXMgYmFzZWQgb24gYWxsIG5vZGVzIGJlaW5nIGNhbGN1bGF0ZWQuKVxuICAgIC8vIHwgICAyLiBQYXJzZSBmaXJzdCBnZW5lcmF0b3IgYW5kIGdlbmVyYXRlIHNjb3BlIG91dHB1dCB2YXJpYWJsZSAobWFraW5nIHN1cmUgdGhhdCBhbGwgdmFyaWFibGVzIGZyb20gZ2VuZXJhdG9yIHdlcmUgc2F2ZWQgYmVmb3JlaGFuZClcbiAgICAvLyB8ICAgMy4gR2VuZXJhdGUgYW4gYXJyYXkgb2Ygb3V0cHV0IGRhdGEgYmFzZWQgb24gZ2VuZXJhbCAob3IgY29ubmVjdGVkKSB0aW1lIGFycmF5IGFuZCBzYXZlIGl0IGludG8gYSB2YXJpYWJsZVxuICAgIC8vIHwgICA0LiBDcmVhdGUgcmVkcmF3IGZ1bmN0aW9uLCBpbnNpZGUgdGhhdCBmdW5jdGlvbjpcbiAgICAvLyB8ICAgfCAgIDEuIEZpbmQgYXBwcm9wcmlhdGUgY2FudmFzIG5vZGUgaW4gdGhlIGRvbVxuICAgIC8vIHwgICB8ICAgMi4gR2V0IGNvbnRleHRcbiAgICAvLyB8ICAgfCAgIDMuIFJlcG9wdWxhdGUgZ3JhcGggYXJyYXkgd2l0aCBuZXcgZ3JhcGhzLlxuICAgIC8vIHwgICA1LiBDcmVhdGUgdXBkYXRlRGF0YSBmdW5jdGlvbiwgaW5zaWRlIHRoYXQgZnVuY3Rpb246XG4gICAgLy8gfCAgIHwgICAxLiBMb29wIHRocm91Z2ggZ3JhcGggYXJyYXkgYW5kIHVwZGF0ZSBncmFwaHMgd2l0aCBuZXcgZGF0YS5cblxuXG4gICAgLy8gMC4wIExvb3AgdGhyb3VnaCBhbGwgdWkgbm9kZXMgYW5kIHNhdmUgdGhlaXIgb3V0cHV0IHZhcmlhYmxlIG5hbWVzXG4gICAgZm9yKGxldCBub2RlS2V5IGluIHVpTm9kZXMpIHtcbiAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG5vZGUgaW50byBhIGNvbnN0YW50XG4gICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gdWlOb2Rlc1tub2RlS2V5XTtcbiAgICAgICAgY29uc3Qgb3V0cHV0S2V5ID0gY3VycmVudE5vZGUub3V0cHV0c1swXS50aXRsZTtcblxuICAgICAgICBleGVjdXRhYmxlICs9IGBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7bm9kZUtleX1JbnB1dFwiKS5vbmlucHV0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICR7bm9kZUtleX0ke291dHB1dEtleX0gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHtub2RlS2V5fUluZGljYXRvclwiKS5pbm5lclRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9O1xcbmA7XG4gICAgICAgIGV4ZWN1dGFibGUgKz0gYHZhciAke25vZGVLZXl9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuICR7dWlOb2Rlc1tub2RlS2V5XS5zZXR0aW5nc1szXS52YWx1ZX19O1xcbmA7XG5cbiAgICAgICAgY2FsY3VsYXRlZE5vZGVzLnB1c2goYCR7bm9kZUtleX06JHtvdXRwdXRLZXl9YCk7XG4gICAgICAgIFxuICAgICAgICBkZWxldGUgdW5jYWxjdWxhdGVkTm9kZXNbbm9kZUtleV07XG4gICAgfVxuICAgIC8vIDEuIExvb3AgdW50aWwgYWxsIG5vZGVzIGFyZSBjYWxjdWxhdGVkIGFuZCBjb3VudCBudW1iZXIgb2YgaXRlcmF0aW9ucyBmb3Igc3RhdGlzdGljc1xuICAgIGZvciAoc3RhdGlzdGljcy5sb29wQ291bnRlciA9IDA7IG9iamVjdFNpemUodW5jYWxjdWxhdGVkTm9kZXMpID4gMDsgc3RhdGlzdGljcy5sb29wQ291bnRlcisrKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHVuY2FsY3VsYXRlZCBub2Rlc1xuICAgICAgICBmb3IgKGxldCBub2RlS2V5IGluIHVuY2FsY3VsYXRlZE5vZGVzKSB7XG4gICAgICAgICAgICAvLyBTYXZlIGN1cnJlbnQgbm9kZSBpbnRvIGEgY29uc3RhbnRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gdW5jYWxjdWxhdGVkTm9kZXNbbm9kZUtleV07XG5cbiAgICAgICAgICAgIC8vIEdvIHRvIG5leHQgbm9kZSBpZiBub3QgYWxsIGNvbm5lY3RlZCBpbnB1dHMgd2VyZSBjYWxjdWxhdGVkIGFscmVhZHlcbiAgICAgICAgICAgIGlmICghYWxsSW5wdXRzQ2FsY3VsYXRlZChub2RlS2V5LCBjdXJyZW50Tm9kZS5pbnB1dHMsIGFsbENvbm5lY3Rpb25zLCBjYWxjdWxhdGVkTm9kZXMpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlQ2FsY3VsYXRlZE91dHB1dHM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBldmVyeSBvdXRwdXQgb2YgdGhlIG5vZGUgdG8gY2FsY3VsYXRlIHRoZW1cbiAgICAgICAgICAgIGZvciAobGV0IG8gPSAwOyBvIDwgY3VycmVudE5vZGUub3V0cHV0cy5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dEtleSA9IGN1cnJlbnROb2RlLm91dHB1dHNbb10udGl0bGU7XG4gICAgICAgICAgICAgICAgLy8gSWYgY3VycmVudCBvdXRwdXQgd2FzIGNhbGN1bGF0ZWQgYWxyZWFkeSwgc2tpcCB0byBuZXh0IG9uZVxuICAgICAgICAgICAgICAgIGlmICh3YXNDYWxjdWxhdGVkKGNhbGN1bGF0ZWROb2Rlcywgbm9kZUtleSwgb3V0cHV0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZUNhbGN1bGF0ZWRPdXRwdXRzLnB1c2goYCR7bm9kZUtleX06JHtvdXRwdXRLZXl9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIG5vdCwgY2FsY3VsYXRlIGl0IGFuZCBhcHBlbmQgdG8gdGhlIGV4ZWN1dGFibGUgdGV4dC5cbiAgICAgICAgICAgICAgICBsZXQgeyBleGUsIHdhc1N1Y2Nlc3NmdWwgfSA9IGNhbGN1bGF0ZU91dHB1dChub2RlS2V5LCBvdXRwdXRLZXksIGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHdhc1N1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhlY3V0YWJsZSArPSBleGU7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlZE5vZGVzLnB1c2goYCR7bm9kZUtleX06JHtvdXRwdXRLZXl9YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ291bGQgbm90IGdlbmVyYXRlIG91dHB1dCBjb2RlOiAke25vZGVLZXl9IC0gJHtvdXRwdXRLZXl9IHwgc2NyaXB0R2VuZXJhdG9yLnRzYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZUNhbGN1bGF0ZWRPdXRwdXRzLmxlbmd0aCA9PT0gY3VycmVudE5vZGUub3V0cHV0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdW5jYWxjdWxhdGVkTm9kZXNbbm9kZUtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBMb29wIHRocm91Z2ggYWxsIHNjb3BlcyBhbmQgZHJhdyBncmFwaHNcblxuICAgIGV4ZUFycmF5LnB1c2goZXhlY3V0YWJsZSk7XG4gICAgZXhlY3V0YWJsZSA9IFwiXCI7XG5cbiAgICBleGVjdXRhYmxlICs9IFwiZnVuY3Rpb24gdXBkYXRlKCkge1xcblwiO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRpbWUgc2NvcGVzXG4gICAgZm9yIChsZXQgcyBpbiBhbGxTY29wZXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gYWxsU2NvcGVzW3NdO1xuICAgICAgICBjb25zdCB7IG90aGVyTm9kZUlkLCBvdGhlclNldHRpbmdJZCB9ID0gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoYWxsQ29ubmVjdGlvbnMsIG51bGwsIHsgbm9kZUlkOiBzLCBzZXR0aW5nSWQ6IFwic2lnbmFsXCIgfSk7XG5cbiAgICAgICAgZXhlY3V0YWJsZSArPSBgXG4gICAgICAgIGlmKGdyYXBocy4ke3N9KSB7XG4gICAgICAgICAgICBsZXQgbmV3RGF0YSA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtuZXdEYXRhLnB1c2goJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0W2ldKSk7fVxuICAgICAgICAgICAgZ3JhcGhzLiR7c30uZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgICAgIGdyYXBocy4ke3N9LnVwZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNhbnZhc05vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7c31cIik7XG5cbiAgICAgICAgICAgIHZhciB2aWV3U2l6ZSA9IHtcbiAgICAgICAgICAgICAgICB4OiBjYW52YXNOb2RlLnBhcmVudE5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgeTogY2FudmFzTm9kZS5wYXJlbnROb2RlLm9mZnNldEhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdyA9IHZpZXdTaXplLng7XG4gICAgICAgICAgICB2YXIgaCA9IHZpZXdTaXplLnk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbnZhc05vZGUud2lkdGggPSB3O1xuICAgICAgICAgICAgY2FudmFzTm9kZS5oZWlnaHQgPSBoO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzTm9kZS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gW107XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKCR7b3RoZXJOb2RlSWR9JHtvdGhlclNldHRpbmdJZH0odFtpXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgICAgZGF0YToge2xhYmVsczogdC5tYXAodGkgPT4gdGkudG9GaXhlZCgyKSksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2lnbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcke2N1cnJlbnRTY29wZS5zZXR0aW5nc1sxXS52YWx1ZX0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLjQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcHBlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpdFJhZGl1czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlclJhZGl1czogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LCBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0ke2N1cnJlbnRTY29wZS5zZXR0aW5nc1swXS52YWx1ZSA9PSBcInRydWVcIiA/ICcnIDogYCwgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV0sIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMC41XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfWB9LCB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICcke2N1cnJlbnRTY29wZS50aXRsZX0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdyYXBocy4ke3N9ID0gbXlDaGFydDtcbiAgICAgICAgfWA7XG5cbiAgICAgICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICAgICAgZXhlY3V0YWJsZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGZmdCBzY29wZXNcbiAgICBmb3IobGV0IGYgaW4gZmZ0Tm9kZXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gZmZ0Tm9kZXNbZl07XG4gICAgICAgIGNvbnN0IHsgb3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkIH0gPSBnZXRPdGhlclNpZGVPZkNvbm5lY3RvcihhbGxDb25uZWN0aW9ucywgbnVsbCwgeyBub2RlSWQ6IGYsIHNldHRpbmdJZDogXCJzaWduYWxcIiB9KTtcblxuICAgICAgICBleGVjdXRhYmxlICs9IGBcbiAgICAgICAgaWYoZ3JhcGhzLiR7Zn0pIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge2RhdGEucHVzaCgke290aGVyTm9kZUlkfSR7b3RoZXJTZXR0aW5nSWR9KHRbaV0pKTt9XG5cbiAgICAgICAgICAgIGxldCBmID0gbmV3IEZGVChkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgY29tcGxleE91dHB1dCA9IGYuY3JlYXRlQ29tcGxleEFycmF5KCk7XG4gICAgICAgICAgICBmLnJlYWxUcmFuc2Zvcm0oY29tcGxleE91dHB1dCwgZGF0YSk7XG4gICAgICAgICAgICBsZXQgcmVhbE91dHB1dCA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICByZWFsT3V0cHV0LmZpbGwoMCk7XG4gICAgICAgICAgICBmLmZyb21Db21wbGV4QXJyYXkoY29tcGxleE91dHB1dCwgcmVhbE91dHB1dCk7XG5cbiAgICAgICAgICAgIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0LmZpbHRlcigodmFsLCBpKSA9PiBpJTIgPT0gMCB8fCBpID09IDApO1xuXG4gICAgICAgICAgICByZWFsT3V0cHV0ID0gcmVhbE91dHB1dC5zcGxpY2UoMCwgJHtjdXJyZW50U2NvcGUuc2V0dGluZ3NbM10udmFsdWV9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVhbE91dHB1dCA9IHJlYWxPdXRwdXQubWFwKHZhbCA9PiB2YWwgKiAyIC8gZGF0YS5sZW5ndGgpO1xuXG4gICAgICAgICAgICBncmFwaHMuJHtmfS5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSByZWFsT3V0cHV0O1xuICAgICAgICAgICAgZ3JhcGhzLiR7Zn0udXBkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY2FudmFzTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHtmfVwiKTtcblxuICAgICAgICAgICAgdmFyIHZpZXdTaXplID0ge1xuICAgICAgICAgICAgICAgIHg6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICB5OiBjYW52YXNOb2RlLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB3ID0gdmlld1NpemUueDtcbiAgICAgICAgICAgIHZhciBoID0gdmlld1NpemUueTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FudmFzTm9kZS53aWR0aCA9IHc7XG4gICAgICAgICAgICBjYW52YXNOb2RlLmhlaWdodCA9IGg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXNOb2RlLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0W2ldKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBmID0gbmV3IEZGVChkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgY29tcGxleE91dHB1dCA9IGYuY3JlYXRlQ29tcGxleEFycmF5KCk7XG4gICAgICAgICAgICBmLnJlYWxUcmFuc2Zvcm0oY29tcGxleE91dHB1dCwgZGF0YSk7XG4gICAgICAgICAgICBsZXQgcmVhbE91dHB1dCA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICByZWFsT3V0cHV0LmZpbGwoMCk7XG4gICAgICAgICAgICBmLmZyb21Db21wbGV4QXJyYXkoY29tcGxleE91dHB1dCwgcmVhbE91dHB1dCk7XG5cbiAgICAgICAgICAgIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0LmZpbHRlcigodmFsLCBpKSA9PiBpJTIgPT0gMCB8fCBpID09IDApO1xuXG4gICAgICAgICAgICByZWFsT3V0cHV0ID0gcmVhbE91dHB1dC5zcGxpY2UoMCwgJHtjdXJyZW50U2NvcGUuc2V0dGluZ3NbM10udmFsdWV9KTtcblxuICAgICAgICAgICAgcmVhbE91dHB1dCA9IHJlYWxPdXRwdXQubWFwKHZhbCA9PiB2YWwgKiAyIC8gZGF0YS5sZW5ndGgpO1xuXG4gICAgICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogcmVhbE91dHB1dC5zcGxpY2UoMCwgJHtjdXJyZW50U2NvcGUuc2V0dGluZ3NbM10udmFsdWV9KS5tYXAoKHZhbCwgaSkgPT4gaSksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2lnbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNDUsIDIzLCA1NCwgMC40KScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMCwgMCwgMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlYWxPdXRwdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMFxuICAgICAgICAgICAgICAgICAgICB9LCB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LCBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7Y3VycmVudFNjb3BlLmlucHV0cy5sZW5ndGggPiAxfVxuICAgICAgICAgICAgICAgICAgICB9LCB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICcke2N1cnJlbnRTY29wZS50aXRsZX0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdyYXBocy4ke2Z9ID0gbXlDaGFydDtcbiAgICAgICAgfWA7XG4gICAgfVxuXG4gICAgZXhlY3V0YWJsZSArPSBcIn07XFxuXCJcbiAgICBleGVjdXRhYmxlICs9IFwidXBkYXRlKCk7XCJcblxuICAgIGV4ZUFycmF5LnB1c2goZXhlY3V0YWJsZSk7XG4gICAgZXhlY3V0YWJsZSA9IFwiXCI7XG5cbiAgICByZXR1cm4gZXhlQXJyYXk7XG59IiwiaW1wb3J0IHsgdG9rZW5pemVHZW5lcmF0b3IsIEdlbmVyYXRvclNlZ21lbnQgfSBmcm9tICcuL2dlbmVyYXRvclRva2VuaXplcic7XG5pbXBvcnQgeyB0b2tlblRvSnMgfSBmcm9tICcuL3Rva2VuVG9Kcyc7XG5cbi8vIEdldCBhbGwgbm9kZXMgdGhhdCBhcmUgbm90IHNjb3BlcywgYW5kIHNhdmUgc2NvcGVzIGludG8gdGhlaXIgb3duIGNvbGxlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZU5vZGVzIChhbGxOb2RlczogTm9kZUNvbGxlY3Rpb24pOiB7XG4gICAgICAgIHVuY2FsY3VsYXRlZE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgXG4gICAgICAgIGFsbFNjb3BlczogTm9kZUNvbGxlY3Rpb24sXG4gICAgICAgIHVpTm9kZXM6IE5vZGVDb2xsZWN0aW9uLFxuICAgICAgICBmZnROb2RlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgdW5jYWxjdWxhdGVkOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCBzY29wZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG4gICAgbGV0IHVpTm9kZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG4gICAgbGV0IGZmdE5vZGVzOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuXG4gICAgZm9yKGxldCBpIGluIGFsbE5vZGVzKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGlzIGEgVUkgbm9kZVxuICAgICAgICBjb25zdCBpc1RoaXJkTGV0dGVyVXBwZXJDYXNlID0gU3RyaW5nKGkpLnN1YnN0cigyLCAxKS50b1VwcGVyQ2FzZSgpID09PSBTdHJpbmcoaSkuc3Vic3RyKDIsIDEpO1xuICAgICAgICBjb25zdCBpc1VJID0gU3RyaW5nKGkpLnN1YnN0cigwLCAyKSA9PT0gXCJ1aVwiO1xuICAgICAgICBjb25zdCBpc0FjdHVhbFVJID0gaXNVSSAmJiBpc1RoaXJkTGV0dGVyVXBwZXJDYXNlO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGlzIGEgc2NvcGVcbiAgICAgICAgY29uc3QgaXNTY29wZSA9IFN0cmluZyhpKS5zdWJzdHIoMCwgNSkgPT09IFwic2NvcGVcIjtcblxuICAgICAgICAvLyBDaGVjayBpZiBpdCBpcyBhbiBmZnQgc2NvcGVcbiAgICAgICAgY29uc3QgaXNGRlQgPSBTdHJpbmcoaSkuc3Vic3RyKDAsIDMpID09PSBcImZmdFwiO1xuXG4gICAgICAgIC8vIERvIHNlcGFyYXRpb25cbiAgICAgICAgaWYoaXNTY29wZSkge1xuICAgICAgICAgICAgc2NvcGVzW2ldID0gYWxsTm9kZXNbaV07XG4gICAgICAgIH0gZWxzZSBpZihpc0FjdHVhbFVJKSB7XG4gICAgICAgICAgICB1aU5vZGVzW2ldID0gYWxsTm9kZXNbaV07XG4gICAgICAgIH0gZWxzZSBpZihpc0ZGVCkge1xuICAgICAgICAgICAgZmZ0Tm9kZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuY2FsY3VsYXRlZFtpXSA9IGFsbE5vZGVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIHJlc3VsdHNcbiAgICByZXR1cm4ge1xuICAgICAgICB1bmNhbGN1bGF0ZWROb2RlczogdW5jYWxjdWxhdGVkLFxuICAgICAgICBhbGxTY29wZXM6IHNjb3BlcyxcbiAgICAgICAgdWlOb2RlczogdWlOb2RlcyxcbiAgICAgICAgZmZ0Tm9kZXM6IGZmdE5vZGVzXG4gICAgfTtcbn1cblxuLy8gR2VuZXJhdGUgY29ubmVjdGlvbiBkaWN0aW9uYXJ5XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb25uZWN0aW9uRGljdGlvbmFyeSAoYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdKToge1tjb25uZWN0b3JTdGFydDogc3RyaW5nXTogc3RyaW5nfSB7XG4gICAgbGV0IGNvbm5lY3Rpb25EaWN0aW9uYXJ5OiB7W2Nvbm5lY3RvclN0YXJ0OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29ubmVjdG9yU3RhcnQgPSBhbGxDb25uZWN0aW9uc1tpXS5jb25uZWN0b3JTdGFydDtcbiAgICAgICAgY29uc3QgY29ubmVjdG9yRW5kID0gYWxsQ29ubmVjdGlvbnNbaV0uY29ubmVjdG9yRW5kO1xuXG4gICAgICAgIGNvbnN0IGNvbm5lY3RvclN0YXJ0Q29tYmluZWQgPSBjb25uZWN0b3JTdGFydC5ub2RlSWQgKyBcIjpcIiArIGNvbm5lY3RvclN0YXJ0LnNldHRpbmdJZDtcbiAgICAgICAgY29uc3QgY29ubmVjdG9yRW5kQ29tYmluZWQgPSBjb25uZWN0b3JFbmQubm9kZUlkICsgXCI6XCIgKyBjb25uZWN0b3JFbmQuc2V0dGluZ0lkO1xuXG4gICAgICAgIGNvbm5lY3Rpb25EaWN0aW9uYXJ5W2Nvbm5lY3RvclN0YXJ0Q29tYmluZWRdID0gY29ubmVjdG9yRW5kQ29tYmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbm5lY3Rpb25EaWN0aW9uYXJ5O1xufVxuXG4vLyBDYWxjdWxhdGUgb2JqZWN0IHNpemVcbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RTaXplIChvYmo6IG9iamVjdCk6IG51bWJlciB7XG4gICAgbGV0IGMgPSAwO1xuICAgIGZvcihsZXQgaSBpbiBvYmopIGMrKztcbiAgICByZXR1cm4gYysrO1xufVxuXG4vLyBDaGVjayBpZiBub2RlIHdhcyBjYWxjdWxhdGVkIGFscmVhZHlcbmV4cG9ydCBmdW5jdGlvbiB3YXNDYWxjdWxhdGVkKGNhbGN1bGF0ZWROb2Rlczogc3RyaW5nW10sIG5vZGVLZXk6IHN0cmluZywgb3V0cHV0S2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FsY3VsYXRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIFNwbGl0IHN0cmluZyBmcm9tIGNhbGN1bGF0ZWQgbm9kZXMgYXJyYXkgYW5kIGdldCBub2RlIGFuZCBvdXRwdXQga2V5c1xuICAgICAgICBjb25zdCBzcGxpdHRlZCA9IGNhbGN1bGF0ZWROb2Rlc1tpXS5zcGxpdChcIjpcIik7XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWROb2RlID0gc3BsaXR0ZWRbMF07XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRPdXRwdXQgPSBzcGxpdHRlZFsxXTtcblxuICAgICAgICBpZihjYWxjdWxhdGVkTm9kZSA9PT0gbm9kZUtleSAmJiBjYWxjdWxhdGVkT3V0cHV0ID09PSBvdXRwdXRLZXkpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gR2V0IG5vZGVJZCBhbmQgc2V0dGluZ0lkIG9mIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBjb25uZWN0aW9uOlxuZXhwb3J0IGZ1bmN0aW9uIGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKFxuICAgIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSwgXG4gICAgY29ubmVjdG9ySW5wdXQ/OiB7bm9kZUlkOiBzdHJpbmcsIHNldHRpbmdJZDogc3RyaW5nfSxcbiAgICBjb25uZWN0b3JPdXRwdXQ/OiB7bm9kZUlkOiBzdHJpbmcsIHNldHRpbmdJZDogc3RyaW5nfSk6IHtvdGhlck5vZGVJZDogc3RyaW5nLCBvdGhlclNldHRpbmdJZDogc3RyaW5nfSB7XG5cbiAgICBpZihjb25uZWN0b3JJbnB1dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNjYW5uaW5nIGNvbm5lY3RvciBzdGFydHMuLi5cIik7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFsbENvbm5lY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb25uZWN0b3IgPSBhbGxDb25uZWN0aW9uc1tpXTtcbiAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGNvbm5lY3RvciBzdGFydFxuICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0Lm5vZGVJZCA9PT0gY29ubmVjdG9ySW5wdXQubm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0LnNldHRpbmdJZCA9PT0gY29ubmVjdG9ySW5wdXQuc2V0dGluZ0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlck5vZGVJZDogY29ubmVjdG9yLmNvbm5lY3RvckVuZC5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclNldHRpbmdJZDogY29ubmVjdG9yLmNvbm5lY3RvckVuZC5zZXR0aW5nSWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29ubmVjdG9yT3V0cHV0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgY29ubmVjdG9yIGVuZHMuLi4gXCIsIGFsbENvbm5lY3Rpb25zLmxlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RvciA9IGFsbENvbm5lY3Rpb25zW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNvbXBhcmluZyBmb2xsb3dpbmcgY29ubmVjdG9yczogXCIsIGNvbm5lY3Rvci5jb25uZWN0b3JFbmQsIGNvbm5lY3Rvck91dHB1dClcbiAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGNvbm5lY3RvciBlbmRcbiAgICAgICAgICAgIGlmKGNvbm5lY3Rvci5jb25uZWN0b3JFbmQubm9kZUlkID09PSBjb25uZWN0b3JPdXRwdXQubm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvckVuZC5zZXR0aW5nSWQgPT09IGNvbm5lY3Rvck91dHB1dC5zZXR0aW5nSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZUlkOiBjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJTZXR0aW5nSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5zZXR0aW5nSWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG90aGVyTm9kZUlkOiBudWxsLFxuICAgICAgICBvdGhlclNldHRpbmdJZDogbnVsbFxuICAgIH1cbn1cblxuXG4vLyBDaGVjayBpZiBhbGwgY29ubmVjdGVkIGlucHV0cyBpbiB0aGUgbm9kZSBhcmUgY29ubmVjdGVkIHRvIHRoZSBvdXRwdXRzIHRoYXQgd2VyZSBhbHJlYWR5IGNhbGN1bGF0ZWQgb3IgYXJlIG5vdCBjb25uZWN0ZWRcbmV4cG9ydCBmdW5jdGlvbiBhbGxJbnB1dHNDYWxjdWxhdGVkKG5vZGVJZDogc3RyaW5nLCBpbnB1dHM6IE5vZGVJbnB1dFNoYXBlW10sIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSwgY2FsY3VsYXRlZE5vZGVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIGxldCBkYXRhOiBib29sZWFuW10gPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnREYXRhID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qge290aGVyTm9kZUlkLCBvdGhlclNldHRpbmdJZH0gPSBnZXRPdGhlclNpZGVPZkNvbm5lY3RvcihhbGxDb25uZWN0aW9ucywgbnVsbCwge25vZGVJZDogbm9kZUlkLCBzZXR0aW5nSWQ6IGlucHV0c1tpXS50aXRsZX0pO1xuXG4gICAgICAgIC8vIElmIHRoZSBpbnB1dCBpcyBjb25uZWN0ZWRcbiAgICAgICAgaWYob3RoZXJOb2RlSWQgJiYgb3RoZXJTZXR0aW5nSWQpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdhcyBjYWxjdWxhdGVkXG4gICAgICAgICAgICBpZih3YXNDYWxjdWxhdGVkKGNhbGN1bGF0ZWROb2Rlcywgb3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBpbnB1dCBpcyBub3QgY29ubmVjdGVkXG4gICAgICAgICAgICBjdXJyZW50RGF0YSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLnB1c2goY3VycmVudERhdGEpO1xuICAgIH1cblxuICAgIGZvcihsZXQgZCBpbiBkYXRhKSB7XG4gICAgICAgIGlmKCFkYXRhW2RdKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBzcGVjaWZpYyBvdXRwdXQgb2YgdGhlIG5vZGVcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVPdXRwdXQoXG4gICAgbm9kZUlkOiBzdHJpbmcsIFxuICAgIG91dHB1dEtleTogc3RyaW5nLCBcbiAgICBjdXJyZW50Tm9kZTogU2lnbmFsTm9kZSxcbiAgICBhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10pOiB7IGV4ZTogc3RyaW5nLCB3YXNTdWNjZXNzZnVsOiBib29sZWFuIH0ge1xuICAgIFxuICAgIGxldCBlID0gXCJcIjtcblxuICAgIGNvbnN0IGdlbmVyYXRvcklkID0gaXNHZW5lcmF0b3IoY3VycmVudE5vZGUsIG91dHB1dEtleSk7XG5cbiAgICAvLyBDaGVjayBpZiBvdXRwdXQgaXMgYSBnZW5lcmF0b3JcbiAgICBpZihnZW5lcmF0b3JJZCAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0R2VuZXJhdG9yID0gY3VycmVudE5vZGUuZ2VuZXJhdG9yc1tnZW5lcmF0b3JJZF07XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgdG9rZW5zXG4gICAgICAgIGNvbnN0IHRva2VucyA9IHRva2VuaXplR2VuZXJhdG9yKG91dHB1dEdlbmVyYXRvci52YWx1ZSwgbm9kZUlkKTtcblxuICAgICAgICAvLyBTYXZlIHZhcmlhYmxlcyBmaXJzdFxuICAgICAgICBlICs9IHNhdmVWYXJpYWJsZXMobm9kZUlkLCBjdXJyZW50Tm9kZSwgdG9rZW5zLCBhbGxDb25uZWN0aW9ucyk7XG5cbiAgICAgICAgLy8gU2F2ZSBvdXRwdXRcbiAgICAgICAgZSArPSB0b2tlblRvSnMobm9kZUlkLCBvdXRwdXRHZW5lcmF0b3IudGl0bGUsIHRva2Vucyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4ZTogZSxcbiAgICAgICAgICAgIHdhc1N1Y2Nlc3NmdWw6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0SWQgPSBpc0lucHV0KGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuXG4gICAgaWYoaW5wdXRJZCAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgZSArPSBzYXZlSW5wdXRWYXJpYWJsZShjdXJyZW50Tm9kZSwgYWxsQ29ubmVjdGlvbnMsIG5vZGVJZCwgb3V0cHV0S2V5LCBpbnB1dElkKTtcbiAgICAgICAgZSArPSBgdmFyICR7bm9kZUlkfSR7b3V0cHV0S2V5fSA9IGZ1bmN0aW9uICh0aW1lKSB7IHJldHVybiAke25vZGVJZH0ke2N1cnJlbnROb2RlLmlucHV0c1tpbnB1dElkXS50aXRsZX19O1xcbmA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4ZTogZSxcbiAgICAgICAgICAgIHdhc1N1Y2Nlc3NmdWw6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldHRpbmdJZCA9IGlzU2V0dGluZyhjdXJyZW50Tm9kZSwgb3V0cHV0S2V5KTtcblxuICAgIGlmKHNldHRpbmdJZCAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgZSArPSBgdmFyICR7bm9kZUlkfSR7b3V0cHV0S2V5fSA9IGZ1bmN0aW9uICh0aW1lKSB7IHJldHVybiAke2N1cnJlbnROb2RlLnNldHRpbmdzW3NldHRpbmdJZF0udmFsdWV9fTtcXG5gO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleGU6IGUsXG4gICAgICAgICAgICB3YXNTdWNjZXNzZnVsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBleGU6IFwiXCIsXG4gICAgICAgIHdhc1N1Y2Nlc3NmdWw6IGZhbHNlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzYXZlVmFyaWFibGVzKG5vZGVLZXk6IHN0cmluZywgbm9kZTogU2lnbmFsTm9kZSwgY29kZTogR2VuZXJhdG9yU2VnbWVudFtdLCBhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10pOiBzdHJpbmcge1xuICAgIGxldCBuZXdFeGVjdXRhYmxlID0gXCJcIjtcblxuICAgIGZvcihsZXQgcyA9IDA7IHMgPCBjb2RlLmxlbmd0aDsgcysrKSB7XG4gICAgICAgIGlmKGNvZGVbc10udHlwZSA9PT0gXCJ2YXJcIikge1xuICAgICAgICAgICAgY29uc3QgdmFyTmFtZTogc3RyaW5nID0gU3RyaW5nKGNvZGVbc10udmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyTmFtZS5zdWJzdHIobm9kZUtleS5sZW5ndGgsIHZhck5hbWUubGVuZ3RoKTtcblxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gSUYgU1BFQ0lBTCBDQVNFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgaWYodmFyTmFtZSA9PT0gXCJQSVwiIHx8IHZhck5hbWUgPT09IFwidGltZVwiKSBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSUYgSU5QVVQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgLy8gR2V0IGlucHV0IGluZGV4XG4gICAgICAgICAgICBsZXQgaW5wdXRLZXk6IG51bWJlciA9IGlzSW5wdXQobm9kZSwgdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgLy8gSWYgdmFyaWFibGUgaXMgdGhlIGlucHV0IChpZiBub3QgaW5wdXQgaXQgd2lsbCBiZSBJbmZpbml0eSlcbiAgICAgICAgICAgIGlmKGlucHV0S2V5ICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICAgIC8vIFNhdmVcbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVJbnB1dFZhcmlhYmxlKG5vZGUsIGFsbENvbm5lY3Rpb25zLCBub2RlS2V5LCB2YXJpYWJsZU5hbWUsIGlucHV0S2V5KTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBGb3VuZCB2YXJpYWJsZSBpbiBpbnB1dHMgJHt2YXJpYWJsZU5hbWV9IC0gJHtub2RlS2V5fWApO1xuXG4gICAgICAgICAgICAgICAgLy8gQW5kIGNvbnRpbnVlIHRvIHRoZSBuZXh0IHN0ZXAgaW4gdGhlIHRva2VuaXNlZCBnZW5lcmF0b3IgY29kZVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBHRU5FUkFUT1IgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgLy8gR2V0IGdlbmVyYXRvciBpbmRleFxuICAgICAgICAgICAgbGV0IGdlbmVyYXRvcktleTogbnVtYmVyID0gaXNHZW5lcmF0b3Iobm9kZSwgdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgLy8gSWYgZ2VuZXJhdG9yIGluZGV4IGlzIG5vdCBhbiBJbmZpbml0eSwgdGhlIHNldHRpbmcgaXMgdGhlIGdlbmVyYXRvciwgYW5kIHNob3VsZCBiZSBwcm9jZXNzZWQgYXMgb25lXG4gICAgICAgICAgICBpZihnZW5lcmF0b3JLZXkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2VuZXJhdG9yID0gbm9kZS5nZW5lcmF0b3JzW2dlbmVyYXRvcktleV07XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbnMgPSB0b2tlbml6ZUdlbmVyYXRvcihnZW5lcmF0b3IudmFsdWUsIG5vZGVLZXkpO1xuXG4gICAgICAgICAgICAgICAgbmV3RXhlY3V0YWJsZSArPSBzYXZlVmFyaWFibGVzKG5vZGVLZXksIG5vZGUsIHRva2VucywgYWxsQ29ubmVjdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgZ2VuZXJhdG9yIHRpdGxlXG4gICAgICAgICAgICAgICAgbmV3RXhlY3V0YWJsZSArPSB0b2tlblRvSnMobm9kZUtleSwgZ2VuZXJhdG9yLnRpdGxlLCB0b2tlbnMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEZvdW5kIHZhcmlhYmxlIGluIGdlbmVyYXRvcnMgJHt2YXJpYWJsZU5hbWV9IC0gJHtub2RlS2V5fWApO1xuXG4gICAgICAgICAgICAgICAgLy8gQ29udGludWUgdG8gdGhlIG5leHQgdG9rZW5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSUYgU0VUVElORyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgc2V0dGluZyBpbmRleFxuICAgICAgICAgICAgbGV0IHNldHRpbmdLZXk6IG51bWJlciA9IGlzU2V0dGluZyhub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiBzZXR0aW5nIGluZGV4IGlzIG5vdCBpbmZpbml0eSAtIGl0J3MgYSBtYXRjaCFcbiAgICAgICAgICAgIGlmKHNldHRpbmdLZXkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEZvdW5kIHZhcmlhYmxlIGluIHNldHRpbmdzICR7dmFyaWFibGVOYW1lfSAtICR7bm9kZUtleX1gKTtcbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IGB2YXIgJHtub2RlS2V5fSR7dmFyaWFibGVOYW1lfSA9IGZ1bmN0aW9uICh0aW1lKSB7IHJldHVybiAke25vZGUuc2V0dGluZ3Nbc2V0dGluZ0tleV0udmFsdWV9IH07XFxuYDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSUYgTk9UIEFOWSBPRiBUSFJFRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBJZiBub3Qgb25lIG9mIHByZXZpb3VzIHRocmVlLCBhbGVydCB1c2VyLlxuICAgICAgICAgICAgbmV3RXhlY3V0YWJsZSArPSBgYWxlcnQoXCJDb3VsZG4ndCBmaW5kIGdlbmVyYXRvciB2YXJpYWJsZSBpbiB0aGUgaW5wdXRzLCBnZW5lcmF0b3JzIG9yIHNldHRpbmdzISAke25vZGVLZXl9IC0gJHt2YXJOYW1lfVwiKTtcXG5gO1xuICAgICAgICB9IGVsc2UgaWYoY29kZVtzXS50eXBlID09PSBcIm1hdGhcIiB8fCBjb2RlW3NdLnR5cGUgPT09IFwic2NvcGVcIikge1xuICAgICAgICAgICAgbmV3RXhlY3V0YWJsZSArPSBzYXZlVmFyaWFibGVzKG5vZGVLZXksIG5vZGUsIGNvZGVbc10uY29kZSwgYWxsQ29ubmVjdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0V4ZWN1dGFibGU7XG59XG5cbmZ1bmN0aW9uIHNhdmVJbnB1dFZhcmlhYmxlKG5vZGU6IFNpZ25hbE5vZGUsIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSwgbm9kZUtleTogc3RyaW5nLCBzZXR0aW5nS2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBuZXdFeGVjdXRhYmxlOiBzdHJpbmc7XG4gICAgY29uc3QgY29ubmVjdG9yRW5kID0ge1xuICAgICAgICBub2RlSWQ6IG5vZGVLZXksXG4gICAgICAgIHNldHRpbmdJZDogc2V0dGluZ0tleVxuICAgIH1cbiAgICBcbiAgICBsZXQge290aGVyTm9kZUlkLCBvdGhlclNldHRpbmdJZH0gPSBnZXRPdGhlclNpZGVPZkNvbm5lY3RvcihhbGxDb25uZWN0aW9ucywgbnVsbCwgY29ubmVjdG9yRW5kKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGBUcmFjaW5nIGJhY2sgdGhlIGlucHV0OiAke25vZGVLZXl9OiR7c2V0dGluZ0tleX0gLT4gJHtvdGhlck5vZGVJZH06JHtvdGhlclNldHRpbmdJZH1gKTtcbiAgICBcbiAgICAvLyBJZiBub2RlIGlzIGNvbm5lY3RlZFxuICAgIGlmKG90aGVyTm9kZUlkICYmIG90aGVyU2V0dGluZ0lkKSB7XG4gICAgICAgIC8vIFNhdmUgXG4gICAgICAgIG5ld0V4ZWN1dGFibGUgPSBgdmFyICR7bm9kZUtleX0ke3NldHRpbmdLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7b3RoZXJOb2RlSWR9JHtvdGhlclNldHRpbmdJZH0odGltZSl9O1xcbmA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2F2ZSBkZWZhdWx0IHZhbHVlXG4gICAgICAgIG5ld0V4ZWN1dGFibGUgPSBgdmFyICR7bm9kZUtleX0ke3NldHRpbmdLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZS5pbnB1dHNbaW5kZXhdLmRlZmF1bHR9fTtcXG5gXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0V4ZWN1dGFibGU7XG59XG5cbmZ1bmN0aW9uIGlzSW5wdXQgKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gQ2hlY2sgaWYgdmFyaWFibGUgaXMgaW4gaW5wdXRzXG4gICAgaWYobm9kZS5pbnB1dHMpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG5vZGUuaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBJZiB2YXJpYWJsZSBpcyB0aGUgaW5wdXQsIHJldHVybiB0cnVlXG4gICAgICAgICAgICBpZihub2RlLmlucHV0c1tpXS50aXRsZSA9PT0gc2V0dGluZ0tleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEluZmluaXR5O1xufVxuXG5mdW5jdGlvbiBpc0dlbmVyYXRvcihub2RlOiBTaWduYWxOb2RlLCBzZXR0aW5nS2V5OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIC8vIFNjYW4gZ2VuZXJhdG9yc1xuICAgIGlmKG5vZGUuZ2VuZXJhdG9ycykge1xuICAgICAgICBpZihub2RlLmdlbmVyYXRvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yKGxldCBnID0gMDsgZyA8IG5vZGUuZ2VuZXJhdG9ycy5sZW5ndGg7IGcrKykge1xuICAgICAgICAgICAgICAgIGlmKG5vZGUuZ2VuZXJhdG9yc1tnXS50aXRsZSA9PT0gc2V0dGluZ0tleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW5maW5pdHk7XG59XG5cbmZ1bmN0aW9uIGlzU2V0dGluZyhub2RlOiBTaWduYWxOb2RlLCBzZXR0aW5nS2V5OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIC8vIFNjYW4gZ2VuZXJhdG9yc1xuICAgIGlmKG5vZGUuc2V0dGluZ3MpIHtcbiAgICAgICAgZm9yKGxldCBzID0gMDsgcyA8IG5vZGUuc2V0dGluZ3MubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICAgIGlmKG5vZGUuc2V0dGluZ3Nbc10udGl0bGUgPT09IHNldHRpbmdLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdWNoSW5wdXRzKGFsbE5vZGVzOiBOb2RlQ29sbGVjdGlvbik6IHt1bmNhbGN1bGF0ZWROb2RlczogTm9kZUNvbGxlY3Rpb24sIHRvdWNoTm9kZXM6IE5vZGVDb2xsZWN0aW9ufSB7XG4gICAgbGV0IG5ld0NvbGxlY3Rpb246IE5vZGVDb2xsZWN0aW9uID0ge307XG4gICAgbGV0IG5ld1RvdWNoQ29sbGVjdGlvbjogTm9kZUNvbGxlY3Rpb24gPSB7fTtcblxuICAgIGZvcihsZXQgbiBpbiBhbGxOb2Rlcykge1xuICAgICAgICBpZihuLnN1YnN0cigwLCAxMCkgPT09IFwidG91Y2hJbnB1dFwiKSB7XG4gICAgICAgICAgICBuZXdUb3VjaENvbGxlY3Rpb25bbl0gPSBhbGxOb2Rlc1tuXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0NvbGxlY3Rpb25bbl0gPSBhbGxOb2Rlc1tuXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHVuY2FsY3VsYXRlZE5vZGVzOiBuZXdDb2xsZWN0aW9uLFxuICAgICAgICB0b3VjaE5vZGVzOiBuZXdUb3VjaENvbGxlY3Rpb25cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VGltZShzdGFydDogbnVtYmVyLCBzdG9wOiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xuICAgIGxldCBlID0gXCJsZXQgdCA9IFwiO1xuXG4gICAgZSs9IGAoZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHIgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gJHtzdGFydH07IGkgPCAke3N0b3B9OyBpKz0ke3N0ZXB9KSB7XG4gICAgICAgICAgICByLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfSkoKTtgXG5cbiAgICByZXR1cm4gZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyhub2RlczogTm9kZUNvbGxlY3Rpb24pOiBzdHJpbmcge1xuICAgIGxldCBlID0gXCJcIjtcblxuICAgIGZvcihsZXQgaSBpbiBub2Rlcykge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG5cbiAgICAgICAgbGV0IHNlbnNpdGl2aXR5OiBOb2RlU2V0dGluZ3NTaGFwZTtcbiAgICAgICAgbGV0IGF0dGFjaGVkU2NvcGU6IE5vZGVTZXR0aW5nc1NoYXBlO1xuXG4gICAgICAgIC8vIFNlcGFyYXRlIHNldHRpbmdzXG4gICAgICAgIGZvcihsZXQgcyBpbiBub2RlLnNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIlNlbnNpdGl2aXR5XCIpIHtcbiAgICAgICAgICAgICAgICBzZW5zaXRpdml0eSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJTY29wZVwiKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoZWRTY29wZSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb3VjaCBub2RlIGlzIG5vdCBjb3JyZWN0bHkgZm9ybWF0dGVkLlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgb2Zmc2V0U2NyaXB0ID0gYGlmKCFkaWRBdHRhY2gke2l9KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7YXR0YWNoZWRTY29wZS52YWx1ZX1cIikub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRYRGF0YSArPSBlLm1vdmVtZW50WCoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFlEYXRhICs9IGUubW92ZW1lbnRZKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHthdHRhY2hlZFNjb3BlLnZhbHVlfVwiKS5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWT0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNoZW5kID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZW1lbnRYID0gd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCAtIGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudFkgPSB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRYRGF0YSArPSBtb3ZlbWVudFgqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG4gICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRZRGF0YSArPSBtb3ZlbWVudFkqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkaWRBdHRhY2gke2l9T2Zmc2V0WCA9IHRydWU7XG4gICAgICAgICAgICBkaWRBdHRhY2gke2l9T2Zmc2V0WSA9IHRydWU7XG4gICAgICAgIH1cXG5gO1xuXG4gICAgICAgIGZvcihsZXQgbyBpbiBub2RlLm91dHB1dHMpIHtcbiAgICAgICAgICAgIGUgKz0gYHZhciAke2l9JHtub2RlLm91dHB1dHNbb10udGl0bGV9RGF0YSA9IDE7XFxuYDtcbiAgICAgICAgICAgIGUgKz0gYHZhciBkaWRBdHRhY2gke2l9ID0gZmFsc2U7XFxuYDtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlICs9IGB2YXIgJHtpfSR7bm9kZS5vdXRwdXRzW29dLnRpdGxlfSA9IGZ1bmN0aW9uKHRpbWUpIHsgcmV0dXJuICR7aX0ke25vZGUub3V0cHV0c1tvXS50aXRsZX1EYXRhIH07XFxuYFxuICAgICAgICB9XG5cbiAgICAgICAgZSArPSBvZmZzZXRTY3JpcHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGU7XG59IiwiLy8gQXMgYSByZW1pbmRlcjpcbi8vIE9uZSBpdGVtIGluIGFuIGFycmF5IG9mIHRva2VucyBjYW4gb25seSBiZSBhbiBvYmplY3QgYW5kIG9ubHkgaGF2ZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbi8vICogdHlwZSAgICAgICAgICAgLSBmb3IgZXZlcnkgdG9rZW5cbi8vICogdmFsdWUgICAgICAgICAgLSBmb3IgZXZlcnkgdG9rZW5cbi8vICogY29kZSAgLSBmb3Igc2NvcGVzIChtYXRoL3JlZ3VsYXIpXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlblRvSnMgKG5vZGVJZCwgdmFyaWFibGVOYW1lLCBqc29uVG9rZW5zKSB7XG4gICAgbGV0IGV4ZWN1dGFibGVTdHJpbmcgPSBgdmFyICR7bm9kZUlkfSR7dmFyaWFibGVOYW1lfSA9IGZ1bmN0aW9uKHRpbWUpIHsgcmV0dXJuIGA7XG4gICAgXG4gICAgZXhlY3V0YWJsZVN0cmluZyArPSBjYWxjdWxhdGVDb2RlKFsuLi5qc29uVG9rZW5zXSlcblxuICAgIHJldHVybiBleGVjdXRhYmxlU3RyaW5nICsgXCJ9O1xcblwiO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVDb2RlKGpzb24pIHtcbiAgICBsZXQgZXhlY3V0YWJsZVN0cmluZyA9IFwiXCI7XG5cbiAgICBpZihqc29uID09IG51bGwpIHJldHVybiBcIlwiO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gVmFyaWFibGVzIGZvciBjb252ZW5pZW5jZVxuICAgICAgICBjb25zdCB0b2tlbiA9IGpzb25baV07XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0b2tlbi50eXBlO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRva2VuLnZhbHVlO1xuXG4gICAgICAgIC8vIEFjdHVhbCBsb2dpY1xuICAgICAgICBpZih0eXBlICE9IFwic2NvcGVcIiAmJiB0eXBlICE9IFwibWF0aFwiKSB7XG4gICAgICAgICAgICAvLyBPbmUgb2YgdGhlIGJhc2ljIHR5cGVzXG5cbiAgICAgICAgICAgIGlmKHZhbHVlID09PSAnUEknKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguUElcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ2YXJcIiAmJiB2YWx1ZSAhPT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGAke3ZhbHVlfSh0aW1lKWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJtYXRoXCIpIHtcbiAgICAgICAgICAgIC8vIE1hdGggZnVuY3Rpb25cblxuICAgICAgICAgICAgaWYodmFsdWUgPT09IFwic2luXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmdW5jdGlvbnMsIHJlY3Vyc2V2bHkgZ2VuZXJhdGUgc3RyaW5nIGZyb20gdGhlIGNvZGUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguc2luKFwiO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKTtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09PSBcImNvc1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBzdXBwb3J0ZWQgZnVuY3Rpb25zLCByZWN1cnNldmx5IGdlbmVyYXRlIHN0cmluZyBmcm9tIHRoZSBjb2RlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLmNvcyhcIjtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PT0gXCJ0YW5cIikge1xuICAgICAgICAgICAgICAgIC8vIElmIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZ1bmN0aW9ucywgcmVjdXJzZXZseSBnZW5lcmF0ZSBzdHJpbmcgZnJvbSB0aGUgY29kZSBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC50YW4oXCI7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIpXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIElmIG5vdCBzdXBwb3J0ZWQgZnVuY3Rpb24sIHRocm93IGVycm9yIHRvIHRoZSBjb25zb2xlXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuc3VwcG9ydGVkIG1hdGggZnVuY3Rpb24gISEhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVndWxhciBzY29wZVxuXG4gICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKFwiICsgY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4ZWN1dGFibGVTdHJpbmc7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc3R5bGVzID0gKHNldHRpbmdzQ291bnQsIHNjb3BlQ291bnQpID0+IHtcbiAgICBjb25zdCBpc09ubHlTY29wZXMgPSAoc2V0dGluZ3NDb3VudCA9PT0gMCAmJiBzY29wZUNvdW50ID4gMCk7XG4gICAgY29uc3QgaXNPbmx5U2V0dGluZ3MgPSAoc2V0dGluZ3NDb3VudCA+IDAgJiYgc2NvcGVDb3VudCA9PT0gMCk7XG4gICAgY29uc3QgaXNTZXR0aW5nc0FuZFNjb3BlcyA9IChzZXR0aW5nc0NvdW50ID4gMCAmJiBzY29wZUNvdW50ID4gMCk7XG4gICAgXG4gICAgY29uc3QgaXNEaXZpZGFibGVCeVR3byA9IHNjb3BlQ291bnQlMiA9PSAwO1xuXG4gICAgcmV0dXJuIGAjc2lnbmFscy1lbWJlZGRpbmctY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAke2lzU2V0dGluZ3NBbmRTY29wZXMgP1xuICAgICAgICAgICAgYGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGNhbGMoMTAwJSAtIDMwMHB4KTtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtgIFxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuc2lnbmFscy1jYW52YXMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNhbnZhcy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjc2lnbmFscy12aWV3cyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgJHshaXNEaXZpZGFibGVCeVR3byA/IGBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgke3Njb3BlQ291bnR9LCAke3BhcnNlRmxvYXQoMTAwL3Njb3BlQ291bnQpLnRvRml4ZWQoMil9JSk7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztgXG4gICAgICAgIDogYGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KCR7c2NvcGVDb3VudC8yfSwgMWZyKTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO2B9XG4gICAgICAgICR7aXNTZXR0aW5nc0FuZFNjb3BlcyA/IGBncmlkLWNvbHVtbjogMiAvIDM7YCA6ICcnfVxuICAgIH1cblxuICAgICR7aXNTZXR0aW5nc0FuZFNjb3BlcyA/IGAjc2lnbmFscy1zZXR0aW5ncyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAjc2lnbmFscy1zZXR0aW5ncy1saXN0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNGZyO1xuICAgICAgICBncmlkLWdhcDogNXB4O1xuICAgIH1cblxuICAgIC5zaWduYWxzLXNldHRpbmdzLXNsaWRlciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDRmciAxZnI7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtc2V0dGluZ3Mtc2xpZGVyIGRpdiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0gaDYge1xuICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgICBmb250LXNpemU6IDEycHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtIGlucHV0IHtcblxuICAgIH1cbiAgICBcbiAgICAuc2lnbmFscy1zZXR0aW5ncy1saXN0LWxhYmVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB0O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfWA6Jyd9XG5gfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGpzeERvbSAobm9kZXMpIHtcbiAgICBsZXQgY2FudmFzTm9kZXMgPSBbXTtcblxuICAgIC8vIEdldCBhbGwga2luZHMgb2Ygb3V0cHV0IG5vZGVzXG4gICAgZm9yKGxldCBrZXkgaW4gbm9kZXMpIHtcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZXNba2V5XTtcblxuICAgICAgICBpZihTdHJpbmcoa2V5KS5zdWJzdHIoMCwgNSkgPT09IFwic2NvcGVcIiB8fCBTdHJpbmcoa2V5KS5zdWJzdHIoMCwgMykgPT09IFwiZmZ0XCIpIHtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLmlkID0ga2V5O1xuICAgICAgICAgICAgY2FudmFzTm9kZXMucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc2V0dGluZ3NOb2RlcyA9IFtdO1xuICAgIGxldCBjYXRlZ29yaWVzID0gW107XG5cbiAgICBcbiAgICBmb3IobGV0IGtleSBpbiBub2Rlcykge1xuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2Rlc1trZXldO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaXNUaGlyZExldHRlclVwcGVyQ2FzZSA9IFN0cmluZyhrZXkpLnN1YnN0cigyLCAxKS50b1VwcGVyQ2FzZSgpID09PSBTdHJpbmcoa2V5KS5zdWJzdHIoMiwgMSk7XG4gICAgICAgIGNvbnN0IGlzVUkgPSBTdHJpbmcoa2V5KS5zdWJzdHIoMCwgMikgPT09IFwidWlcIjtcbiAgICAgICAgY29uc3QgaXNBY3R1YWxVSSA9IGlzVUkgJiYgaXNUaGlyZExldHRlclVwcGVyQ2FzZTtcbiAgICAgICAgXG4gICAgICAgIGlmKGlzQWN0dWFsVUkpIHtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNhdmVkQWxyZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBjdXJyZW50Tm9kZS5zZXR0aW5nc1swXS52YWx1ZTtcblxuICAgICAgICAgICAgZm9yKGxldCBjIGluIGNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgICAgICBpZihjYXRlZ29yaWVzW2NdID09IGN1cnJlbnRDYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVNhdmVkQWxyZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIWNhdGVnb3J5U2F2ZWRBbHJlYWR5KSB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGN1cnJlbnRDYXRlZ29yeSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnROb2RlLmlkID0ga2V5O1xuICAgICAgICAgICAgc2V0dGluZ3NOb2Rlcy5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZXR0aW5nc05vZGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBjb25zdCBjYXQxID0gYS5zZXR0aW5nc1swXS52YWx1ZTtcbiAgICAgICAgY29uc3QgY2F0MiA9IGIuc2V0dGluZ3NbMF0udmFsdWU7XG5cbiAgICAgICAgaWYoY2F0MSA9PT0gY2F0Mikge1xuICAgICAgICAgICAgY29uc3Qgb3JkZXIxID0gcGFyc2VJbnQoYS5zZXR0aW5nc1syXS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBvcmRlcjIgPSBwYXJzZUludChiLnNldHRpbmdzWzJdLnZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIG9yZGVyMSAtIG9yZGVyMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdEFyciA9IFtjYXQxLCBjYXQyXTtcbiAgICAgICAgICAgIGNhdEFyci5zb3J0KCk7XG5cbiAgICAgICAgICAgIGlmKGNhdEFyclswXSA9PT0gY2F0MSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNvcnQgYnkgY2F0ZWdvcnk6XG5cbiAgICBjYXRlZ29yaWVzLnNvcnQoKTtcblxuICAgIGxldCBuZXdTZXR0aW5nc05vZGVzID0gW107XG5cbiAgICBmb3IobGV0IGMgaW4gY2F0ZWdvcmllcykge1xuICAgICAgICBmb3IobGV0IHMgaW4gc2V0dGluZ3NOb2Rlcykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSBzZXR0aW5nc05vZGVzW3NdO1xuICAgICAgICAgICAgaWYoY3VycmVudE5vZGUuc2V0dGluZ3NbMF0udmFsdWUgPT09IGNhdGVnb3JpZXNbY10pIHtcbiAgICAgICAgICAgICAgICBuZXdTZXR0aW5nc05vZGVzLnB1c2goY3VycmVudE5vZGUpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzZXR0aW5nc05vZGVzW3NdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGUgRHluYW1pYyBTdHVmZlxuICAgIGNvbnN0IGNhbnZhc0pzeCA9IGNhbnZhc05vZGVzLmxlbmd0aCA+IDAgPyBjYW52YXNOb2Rlcy5tYXAobm9kZSA9PiB7XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9eydjYW52YXMtY29udGFpbmVyJ30+PGNhbnZhcyBjbGFzc05hbWU9XCJzaWduYWxzLWNhbnZhc1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake25vZGUuaWR9YH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25vZGUuaWR9XG4gICAgICAgID48L2NhbnZhcz48L2Rpdj4pXG4gICAgfSkgOiBudWxsO1xuXG4gICAgbGV0IGxhc3RDYXRlZ29yeSA9IFwiXCI7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBuZXdTZXR0aW5nc05vZGVzLmxlbmd0aCA+IDAgPyBuZXdTZXR0aW5nc05vZGVzLm1hcChub2RlID0+IHtcbiAgICAgICAgbGV0IGlucHV0RWxlbWVudDtcbiAgICAgICAgbGV0IGlzU2xpZGVyID0gZmFsc2U7XG4gICAgICAgIGxldCBzaG91bGRTYXZlQ2F0ZWdvcnkgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBub2RlLnNldHRpbmdzWzBdLnZhbHVlO1xuXG4gICAgICAgIGlmKGxhc3RDYXRlZ29yeSAhPT0gY3VycmVudENhdGVnb3J5KSB7XG4gICAgICAgICAgICBzaG91bGRTYXZlQ2F0ZWdvcnkgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdENhdGVnb3J5ID0gY3VycmVudENhdGVnb3J5O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihub2RlLmlkLnN1YnN0cigwLCA4KSA9PT0gXCJ1aU51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyAndWlOdW1iZXInIHNldHRpbmdzOlxuICAgICAgICAgICAgLy8gMCA6IENhdGVnb3J5IC0gQ2F0ZWdvcnkgdGhhdCBjb250cm9sbGVycyBhcmUgc29ydGVkIGJ5LlxuICAgICAgICAgICAgLy8gMSA6IExhYmVsICAgIC0gTGFiZWwgbmV4dCB0byB0aGUgY29udHJvbGxlci5cbiAgICAgICAgICAgIC8vIDIgOiBPcmRlciAgICAtIFZlcnRpY2FsIHBvc2l0aW9uIG9mIHRoZSBjb250cm9sbGVyIGluIHRoZSBjYXRlZ29yeS5cbiAgICAgICAgICAgIC8vIDMgOiBEZWZhdWx0ICAtIERlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIC8vIDQgOiBNaW4gICAgICAtIE1pbmltdW0gdmFsdWVcbiAgICAgICAgICAgIC8vIDUgOiBNYXggICAgICAtIE1heGltdW0gdmFsdWVcbiAgICAgICAgICAgIC8vIDYgOiBTdGVwICAgICAtIFN0ZXAgb2YgdGhlIHZhbHVlXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQgPSAoPGlucHV0ICB0eXBlPXsnbnVtYmVyJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bm9kZS5pZCtcIklucHV0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25vZGUuc2V0dGluZ3NbM10udmFsdWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtub2RlLnNldHRpbmdzWzRdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtub2RlLnNldHRpbmdzWzVdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17bm9kZS5zZXR0aW5nc1s2XS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfS8+KTtcbiAgICAgICAgfSBlbHNlIGlmKG5vZGUuaWQuc3Vic3RyKDAsIDgpID09PSBcInVpU2xpZGVyXCIpIHtcbiAgICAgICAgICAgIGlzU2xpZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICd1aVNsaWRlcicgc2V0dGluZ3M6XG4gICAgICAgICAgICAvLyAwIDogQ2F0ZWdvcnkgLSBDYXRlZ29yeSB0aGF0IGNvbnRyb2xsZXJzIGFyZSBzb3J0ZWQgYnkuXG4gICAgICAgICAgICAvLyAxIDogTGFiZWwgICAgLSBMYWJlbCBuZXh0IHRvIHRoZSBjb250cm9sbGVyLlxuICAgICAgICAgICAgLy8gMiA6IE9yZGVyICAgIC0gVmVydGljYWwgcG9zaXRpb24gb2YgdGhlIGNvbnRyb2xsZXIgaW4gdGhlIGNhdGVnb3J5LlxuICAgICAgICAgICAgLy8gMyA6IERlZmF1bHQgIC0gRGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgLy8gNCA6IE1pbiAgICAgIC0gTWluaW11bSB2YWx1ZVxuICAgICAgICAgICAgLy8gNSA6IE1heCAgICAgIC0gTWF4aW11bSB2YWx1ZVxuICAgICAgICAgICAgLy8gNiA6IFN0ZXAgICAgIC0gU3RlcCBvZiB0aGUgdmFsdWVcbiAgICAgICAgICAgIGlucHV0RWxlbWVudCA9ICg8aW5wdXQgIHR5cGU9eydyYW5nZSd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e25vZGUuaWQrXCJJbnB1dFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtub2RlLnNldHRpbmdzWzNdLnZhbHVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17bm9kZS5zZXR0aW5nc1s0XS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17bm9kZS5zZXR0aW5nc1s1XS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e25vZGUuc2V0dGluZ3NbNl0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX0vPik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXR1cm5zIG1lc3NhZ2UgaWYgdGhlIHR5cGUgaXMgdW5zb3Bwb3J0ZWRcbiAgICAgICAgICAgIGlucHV0RWxlbWVudCA9IDxkaXY+eyd1bnN1cHBvcnRlZCB0eXBlJ308L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHNob3VsZFNhdmVDYXRlZ29yeSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtub2RlLmlkICsgY3VycmVudENhdGVnb3J5fT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y3VycmVudENhdGVnb3J5fSBjbGFzc05hbWU9eydzaWduYWxzLXNldHRpbmdzLWxpc3QtbGFiZWwnfT57Y3VycmVudENhdGVnb3J5fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eydzaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbSAnICsgKGlzU2xpZGVyID8gXCJzaWduYWxzLXNldHRpbmdzLXNsaWRlclwiIDogXCJcIil9IGlkPXtub2RlLmlkfSBrZXk9e25vZGUuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17J3NpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtLWxhYmVsJ30gaWQ9e25vZGUuaWQgKyBcIkxhYmVsXCJ9Pntub2RlLnNldHRpbmdzWzFdLnZhbHVlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRFbGVtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAge2lzU2xpZGVyID8gPGRpdiBpZD17bm9kZS5pZCtcIkluZGljYXRvclwifT57bm9kZS5zZXR0aW5nc1szXS52YWx1ZX08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDxsaSBjbGFzc05hbWU9eydzaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbSAnICsgKGlzU2xpZGVyID8gXCJzaWduYWxzLXNldHRpbmdzLXNsaWRlclwiIDogXCJcIil9IGlkPXtub2RlLmlkfSBrZXk9e25vZGUuaWR9PlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9eydzaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbS1sYWJlbCd9IGlkPXtub2RlLmlkICsgXCJMYWJlbFwifT57bm9kZS5zZXR0aW5nc1sxXS52YWx1ZX08L2g2PlxuICAgICAgICAgICAgICAgIHtpbnB1dEVsZW1lbnR9XG4gICAgICAgICAgICAgICAge2lzU2xpZGVyID8gPGRpdiBpZD17bm9kZS5pZCtcIkluZGljYXRvclwifT57bm9kZS5zZXR0aW5nc1szXS52YWx1ZX08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgPC9saT4pO1xuICAgICAgICB9XG4gICAgfSkgOiBudWxsO1xuXG4gICAgLy8gR2VuZXJhdGUgRmluYWwgSlNYXG4gICAgY29uc3QgU2lnbmFsVmlld3MgPSBjYW52YXNKc3ggP1xuICAgICAgICAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2lnbmFscy12aWV3c1wiPlxuICAgICAgICAgICAgICAgIHtjYW52YXNKc3h9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICBjb25zdCBTZXR0aW5nc0pzeCA9IHNldHRpbmdzID9cbiAgICAgICAgKFxuICAgICAgICAgICAgPGRpdiBpZD1cInNpZ25hbHMtc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9eydzaWduYWxzLXNldHRpbmdzLWxpc3QnfT5cbiAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPXtcInNpZ25hbHMtZW1iZWRkaW5nLWNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxzdHlsZT57c3R5bGVzKG5ld1NldHRpbmdzTm9kZXMubGVuZ3RoLCBjYW52YXNOb2Rlcy5sZW5ndGgpfTwvc3R5bGU+XG4gICAgICAgICAgICB7U2V0dGluZ3NKc3h9XG4gICAgICAgICAgICB7U2lnbmFsVmlld3N9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9