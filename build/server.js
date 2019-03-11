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

module.exports = {"input":{"touchInput":{"title":"Touch Input","description":"Gets touch input from the scope.","inputs":[],"outputs":[{"title":"OffsetX","type":"number"},{"title":"OffsetY","type":"number"}],"generators":[],"default_settings":[{"title":"Sensitivity","value":"0.01","type":"number_uncontrolled"},{"title":"Scope","value":"","type":"scopeReference"}]},"scalar":{"title":"Scalar","description":"Single scalar output","inputs":[],"outputs":[{"title":"number","type":"number"}],"generators":[],"default_settings":[{"title":"number","value":"1","type":"number","isInput":false}]},"signalGenerator":{"title":"Signal Generator","description":"Generates a basic signal","inputs":[],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"default_settings":[{"title":"frequency","value":"20","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":false},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}]}},"processors":{"multiply":{"title":"Multiply","description":"Modulates two signals using AM modulation","inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]*[input2]","type":"signal"}],"default_settings":[]},"add":{"title":"Add","description":"Modulates two signals using AM modulation","inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]+[input2]","type":"signal"}],"default_settings":[]},"subtract":{"title":"Subtract","description":"Modulates two signals using AM modulation","inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]-[input2]","type":"signal"}],"default_settings":[]}},"output":{"scope":{"title":"Scope","description":"Displays a scope with the provided input signal.","inputs":[{"title":"signal","type":"signal"}],"outputs":[],"default_settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Title","value":"Carrier Signal","type":"text"}]}},"ui":{"uiNumber":{"title":"UI Number","description":"Controller that appears on the renderer which allows to enter a number.","inputs":[],"outputs":[{"title":"output","type":"number"}],"default_settings":[{"title":"Category","value":"","type":"text"},{"title":"Label","value":"","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"0","type":"number_uncontrolled"},{"title":"Max","value":"0","type":"number_uncontrolled"},{"title":"Step","value":"1","type":"number_uncontrolled"}]},"uiSlider":{"title":"UI Slider","description":"Controller that appears on the renderer which grants control using slider.","inputs":[],"outputs":[{"title":"output","type":"number"}],"default_settings":[{"title":"Category","value":"","type":"text"},{"title":"Label","value":"","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"0","type":"number_uncontrolled"},{"title":"Max","value":"0","type":"number_uncontrolled"},{"title":"Step","value":"1","type":"number_uncontrolled"}]}}};

/***/ }),

/***/ "./src/server/projects/fourierSeries.json":
/*!************************************************!*\
  !*** ./src/server/projects/fourierSeries.json ***!
  \************************************************/
/*! exports provided: allNodes, allConnections, isCreatingConnection, composerCoordinates, default */
/***/ (function(module) {

module.exports = {"allNodes":{"uiSlider":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"1*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":6,"width":150,"height":100,"id":"uiSlider"},"uiSlider1":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"2*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":68,"width":150,"height":100,"id":"uiSlider1"},"uiSlider2":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"3*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":129,"width":150,"height":100,"id":"uiSlider2"},"uiSlider3":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"4*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":191,"width":150,"height":100,"id":"uiSlider3"},"uiSlider4":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"5*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":254,"width":150,"height":100,"id":"uiSlider4"},"uiSlider5":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"6*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":317,"width":150,"height":100,"id":"uiSlider5"},"uiSlider6":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"7*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":381,"width":150,"height":100,"id":"uiSlider6"},"uiSlider7":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"8*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":443,"width":150,"height":100,"id":"uiSlider7"},"uiSlider8":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"9*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":504,"width":150,"height":100,"id":"uiSlider8"},"signalGenerator":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"1","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":5,"width":150,"height":100},"signalGenerator1":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"2","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":67,"width":150,"height":100},"signalGenerator2":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"3","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":128,"width":150,"height":100},"signalGenerator3":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"4","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":190,"width":150,"height":100},"signalGenerator4":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"5","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":254,"width":150,"height":100},"signalGenerator5":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"6","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":317,"width":150,"height":100},"signalGenerator6":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"7","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":380,"width":150,"height":100},"signalGenerator7":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"8","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":442,"width":150,"height":100},"signalGenerator8":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"9","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":504,"width":150,"height":100},"scope":{"title":"Scope","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"#f27200","type":"color"},{"title":"Title","value":"Sines","type":"text"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":939,"y":299,"width":150,"height":100,"id":"scope"},"uiSlider9":{"title":"Bias","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"0*f","type":"text"},{"title":"Order","value":"-1","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":325,"y":573,"width":150,"height":100,"id":"uiSlider9"},"add":{"title":"Add","clickedDown":false,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]+[input3]+[input4]+[input5]+[input6]+[input7]+[input8]+[input9]+[input10]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"},{"title":"input3","type":"signal"},{"title":"input4","type":"signal"},{"title":"input5","type":"signal"},{"title":"input6","type":"signal"},{"title":"input7","type":"signal"},{"title":"input8","type":"signal"},{"title":"input9","type":"signal"},{"title":"input10","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":700,"y":198,"width":150,"height":100},"signalGenerator9":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"1","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":681,"width":150,"height":100},"signalGenerator10":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"2","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":743,"width":150,"height":100},"signalGenerator11":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"3","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":806,"width":150,"height":100},"signalGenerator12":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"4","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":869,"width":150,"height":100},"signalGenerator13":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"5","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":932,"width":150,"height":100},"signalGenerator14":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"6","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":996,"width":150,"height":100},"signalGenerator15":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"7","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1057,"width":150,"height":100},"signalGenerator16":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"8","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1122,"width":150,"height":100},"signalGenerator17":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"9","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1185,"width":150,"height":100},"uiSlider10":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":678,"width":150,"height":100,"id":"uiSlider10"},"uiSlider11":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"2*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":741,"width":150,"height":100,"id":"uiSlider11"},"uiSlider12":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"3*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":806,"width":150,"height":100,"id":"uiSlider12"},"uiSlider13":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"4*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":869,"width":150,"height":100,"id":"uiSlider13"},"uiSlider14":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"5*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":932,"width":150,"height":100,"id":"uiSlider14"},"uiSlider15":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"6*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":995,"width":150,"height":100,"id":"uiSlider15"},"uiSlider16":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"7*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1059,"width":150,"height":100,"id":"uiSlider16"},"uiSlider17":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"8*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1122,"width":150,"height":100,"id":"uiSlider17"},"uiSlider18":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"9*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1187,"width":150,"height":100,"id":"uiSlider18"},"uiSlider19":{"title":"Bias","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"0*f","type":"text"},{"title":"Order","value":"-1","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":334,"y":1263,"width":150,"height":100,"id":"uiSlider19"},"add1":{"title":"Add","clickedDown":false,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]+[input3]+[input4]+[input5]+[input6]+[input7]+[input8]+[input9]+[input10]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"},{"title":"input3","type":"signal"},{"title":"input4","type":"signal"},{"title":"input5","type":"signal"},{"title":"input6","type":"signal"},{"title":"input7","type":"signal"},{"title":"input8","type":"signal"},{"title":"input9","type":"signal"},{"title":"input10","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":619,"y":834,"width":150,"height":100},"scope1":{"title":"Scope","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"#43d919","type":"color"},{"title":"Title","value":"Cosines","type":"text"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":893,"y":887,"width":150,"height":100,"id":"scope1"},"add2":{"title":"Add","clickedDown":true,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":886,"y":596,"width":150,"height":100},"scope2":{"title":"Scope","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"#13b3f2","type":"color"},{"title":"Title","value":"Time Domain","type":"text"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":1129,"y":585,"width":150,"height":100}},"allConnections":[{"connectorStart":{"nodeId":"uiSlider","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider1","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator1","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider2","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider3","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator3","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider4","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator4","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider5","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator5","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider6","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator6","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider7","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator7","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider8","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator8","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input1"}},{"connectorStart":{"nodeId":"signalGenerator1","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input2"}},{"connectorStart":{"nodeId":"signalGenerator2","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input3"}},{"connectorStart":{"nodeId":"signalGenerator3","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input4"}},{"connectorStart":{"nodeId":"signalGenerator4","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input5"}},{"connectorStart":{"nodeId":"signalGenerator5","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input6"}},{"connectorStart":{"nodeId":"signalGenerator6","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input7"}},{"connectorStart":{"nodeId":"signalGenerator7","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input8"}},{"connectorStart":{"nodeId":"signalGenerator8","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input9"}},{"connectorStart":{"nodeId":"uiSlider9","settingId":"output"},"connectorEnd":{"nodeId":"add","settingId":"input10"}},{"connectorStart":{"nodeId":"add","settingId":"output"},"connectorEnd":{"nodeId":"scope","settingId":"signal"}},{"connectorStart":{"nodeId":"uiSlider10","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator9","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider11","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator10","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider12","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator11","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider13","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator12","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider14","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator13","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider15","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator14","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider16","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator15","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider17","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator16","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider18","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator17","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator9","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input1"}},{"connectorStart":{"nodeId":"signalGenerator10","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input2"}},{"connectorStart":{"nodeId":"signalGenerator11","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input3"}},{"connectorStart":{"nodeId":"signalGenerator12","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input4"}},{"connectorStart":{"nodeId":"signalGenerator13","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input5"}},{"connectorStart":{"nodeId":"signalGenerator14","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input6"}},{"connectorStart":{"nodeId":"signalGenerator15","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input7"}},{"connectorStart":{"nodeId":"signalGenerator16","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input8"}},{"connectorStart":{"nodeId":"signalGenerator17","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input9"}},{"connectorStart":{"nodeId":"uiSlider19","settingId":"output"},"connectorEnd":{"nodeId":"add1","settingId":"input10"}},{"connectorStart":{"nodeId":"add1","settingId":"output"},"connectorEnd":{"nodeId":"scope1","settingId":"signal"}},{"connectorStart":{"nodeId":"add","settingId":"output"},"connectorEnd":{"nodeId":"add2","settingId":"input1"}},{"connectorStart":{"nodeId":"add1","settingId":"output"},"connectorEnd":{"nodeId":"add2","settingId":"input2"}},{"connectorStart":{"nodeId":"add2","settingId":"output"},"connectorEnd":{"nodeId":"scope2","settingId":"signal"}}],"isCreatingConnection":{"focused":true,"gridSize":50,"height":826,"width":1650,"x":83,"y":-317,"zoomLevel":1},"composerCoordinates":{"focused":true,"gridSize":50,"height":826,"width":1650,"x":-116,"y":-189,"zoomLevel":1}};

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
  scripts += "<script>".concat(scriptArray[0], "</script>");
  scripts += "<script>".concat(composedScriptString, "</script>"); // Combine former results

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

var SAMPLE_RATE = 500; // Samples per second
function scriptGenerator(allNodes, allConnections) {
    // Executable to store generated javascript code. Any initialisation code should be here.
    var exeArray = [];
    var executable = "var graphs = {};\n";
    // Setup time
    executable += Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["initTime"])(-1, 1, 1 / SAMPLE_RATE);
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
    var _a = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["getUncalculatedNodes"])(allNodes), uncalculatedNodes = _a.uncalculatedNodes, allScopes = _a.allScopes, uiNodes = _a.uiNodes;
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
    for (var s in allScopes) {
        var currentScope = allScopes[s];
        // const outputGenerator = currentScope.generators[0];
        // const outputTokens = tokenizeGenerator(outputGenerator.value, s);
        var _c = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["getOtherSideOfConnector"])(allConnections, null, { nodeId: s, settingId: "signal" }), otherNodeId = _c.otherNodeId, otherSettingId = _c.otherSettingId;
        executable += "\n            if(graphs." + s + ") {\n                let newData = [];\n                for(let i = 0; i < t.length; i++) {newData.push(" + otherNodeId + otherSettingId + "(t[i]));}\n                graphs." + s + ".data.datasets[0].data = newData;\n                graphs." + s + ".update();\n            } else {\n                let canvasNode = document.getElementById(\"" + s + "\");\n\n                var viewSize = {\n                    x: canvasNode.parentNode.offsetWidth,\n                    y: canvasNode.parentNode.offsetHeight\n                }\n\n                var ctx = canvasNode.getContext(\"2d\");\n\n                var w = viewSize.x;\n                var h = viewSize.y / " + Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["objectSize"])(allScopes) + ";\n\n                canvasNode.width = w;\n                canvasNode.height = h;\n\n                let data = [];\n\n                for(let i = 0; i < t.length; i++) {\n                    data.push(" + otherNodeId + otherSettingId + "(t[i]));\n                }\n                var myChart = new Chart(ctx, {\n                    type: 'line',\n                    data: {labels: t.map(ti => ti.toFixed(2)),\n                        datasets: [\n                            {\n                                label: \"signal\",\n                                backgroundColor: 'rgba(0, 0, 0, 0)',\n                                borderColor: '" + scopeColor(currentScope.settings[1].value) + "',\n                                data: data\n                            }\n                        ]\n                    }, options: {\n                        elements: {\n                            line: {\n                                tension: 0.4,\n                                stepped: false\n                            }, point: {\n                                radius: 0,\n                                hitRadius: 0,\n                                hoverRadius: 0\n                            }\n                        }, animation: {\n                            duration: 0\n                        }, tooltips: {\n                            enabled: false\n                        }, legend: {\n                            display: false\n                        }" + (currentScope.settings[0].value == "true" ? '' : ", scales: {\n                            xAxes: [{\n                                ticks: {\n                                    max: 1,\n                                    min: -1,\n                                    stepSize: 0.01\n                                }\n                            }], yAxes: [{\n                                ticks: {\n                                    max: 2,\n                                    min: 0,\n                                    stepSize: 0.5\n                                }\n                            }]\n                        }") + generateTitle(currentScope.settings[2]) + "\n                    }\n                });\n    \n                graphs." + s + " = myChart;\n            }\n        ";
        exeArray.push(executable);
        executable = "";
    }
    executable += "};\n";
    executable += "update();";
    exeArray.push(executable);
    executable = "";
    // return UglifyJS.minify(executable);
    return exeArray;
}
function scopeColor(color) {
    return color;
    switch (color) {
        case "red": return 'rgb(255, 120, 132)';
        case "blue": return 'rgb(132, 120, 255)';
        case "green": return 'rgb(50, 210, 60)';
        default: return 'rgb(255, 120, 132)';
    }
}
function generateTitle(setting) {
    switch (setting.title) {
        case "": return "";
        default: {
            return (", title: {\n                display: true,\n                text: '" + setting.value + "',\n                position: 'left'\n            }");
        }
    }
}


/***/ }),

/***/ "./src/server/renderer/scriptGeneratorFunctions.ts":
/*!*********************************************************!*\
  !*** ./src/server/renderer/scriptGeneratorFunctions.ts ***!
  \*********************************************************/
/*! exports provided: getUncalculatedNodes, generateConnectionDictionary, objectSize, wasCalculated, getOtherSideOfConnector, allInputsCalculated, calculateOutput, getTouchInputs, initTime, generateTouchControllers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUncalculatedNodes", function() { return getUncalculatedNodes; });
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
function getUncalculatedNodes(allNodes) {
    var uncalculated = {};
    var scopes = {};
    var uiNodes = {};
    for (var i in allNodes) {
        // Check if it is a UI node
        var isThirdLetterUpperCase = String(i).substr(2, 1).toUpperCase() === String(i).substr(2, 1);
        var isUI = String(i).substr(0, 2) === "ui";
        var isActualUI = isUI && isThirdLetterUpperCase;
        // Check if it is a scope
        var isScope = String(i).substr(0, 5) === "scope";
        // Do separation
        if (isScope) {
            scopes[i] = allNodes[i];
        }
        else if (isActualUI) {
            uiNodes[i] = allNodes[i];
        }
        else {
            uncalculated[i] = allNodes[i];
        }
    }
    // return results
    return {
        uncalculatedNodes: uncalculated,
        allScopes: scopes,
        uiNodes: uiNodes
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
  return "\n    #signals-embedding-container {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        ".concat(settingsCount > 0 && scopeCount > 0 ? "display: grid;\n            grid-template-columns: 300px auto;" : '', "\n\n    }\n\n    .signals-canvas {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    #signals-views {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        display: grid;\n        grid-tempate-columns: auto;\n        ").concat(settingsCount > 0 && scopeCount > 0 ? "grid-column: 2 / 3;" : '', "\n    }\n\n    ").concat(settingsCount > 0 && scopeCount > 0 ? "#signals-settings {\n        margin: 0;\n        padding: 10px;\n        width: calc(100% - 20px);\n        height: calc(100% - 20px);\n        grid-column: 1 / 2;\n        overflow-x: hidden;\n        overflow-y: auto;\n    }\n\n    #signals-settings-list {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n\n        list-style: none;\n    }\n\n    .signals-settings-list-item {\n        display: grid;\n        grid-template-columns: 3fr 4fr;\n        grid-gap: 5px;\n    }\n\n    .signals-settings-slider {\n        grid-template-columns: 3fr 4fr 1fr;\n    }\n\n    .signals-settings-slider div {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .signals-settings-list-item h6 {\n        margin: 2px;\n        padding: 0;\n        grid-column: 1 / 2;\n        font-size: 12pt;\n        font-weight: normal;\n    }\n\n    .signals-settings-list-item input {\n\n    }\n    \n    .signals-settings-list-label {\n        width: 100%;\n        height: fit-content;\n        margin: 0;\n        padding: 0;\n        font-size: 16pt;\n        text-align: center;\n    }" : '', "\n");
};

function jsxDom(nodes) {
  var canvasNodes = []; // Get all kinds of output nodes

  for (var key in nodes) {
    var currentNode = nodes[key];

    if (String(key).substr(0, 5) === "scope") {
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
      className: "signals-canvas",
      id: "".concat(node.id),
      key: node.id
    });
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
    id: "signals-views",
    style: {
      gridTemplateRows: "repeat(".concat(canvasNodes.length, ", 1fr)")
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2dlbmVyYXRvclRva2VuaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVuZGVyZXIvc2NvcGVGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3Rva2VuVG9Kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3ZpZXdlckRvbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiZGF0ZU5vdyIsIlN0cmluZyIsIkRhdGUiLCJ0b1N0cmluZyIsInN1YnN0ciIsImRhdGFiYXNlIiwicHJvamVjdHNJbmZvIiwicHJvamVjdElkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm93bmVyIiwicHJvamVjdE1vZGVscyIsIm1vZHVsYXRpb24iLCJmb3VyaWVyU2VyaWVzIiwidXNlcnMiLCJhZG1pbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJuZXdQcm9qZWN0IiwibmV3SWQiLCJpIiwicGFyc2VJbnQiLCJwdXNoIiwicHJvamVjdE1vZGVsVGVtcGxhdGUiLCJzYXZlUHJvamVjdCIsImpzb24iLCJuZXdQcm9qZWN0VmVyc2lvbiIsImFsbENvbm5lY3Rpb25zIiwiYWxsTm9kZXMiLCJjb21wb3NlckNvb3JkaW5hdGVzIiwiaXNDcmVhdGluZ0Nvbm5lY3Rpb24iLCJmb2N1c2VkIiwiZ3JpZFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsIngiLCJ5Iiwiem9vbUxldmVsIiwidXNlIiwic3RhdGljIiwiX19kaXJuYW1lIiwiZ2V0IiwicmVxIiwicmVzIiwicGFyYW1zIiwiaWQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2VuZCIsImZzIiwicmVhZEZpbGUiLCJwYXRoIiwicmVzb2x2ZSIsImVyciIsImRhdGEiLCJlcnJvciIsInJlcGxhY2UiLCJwcm9qZWN0RGF0YSIsImxlbmd0aCIsInByb2plY3QiLCJwaWQiLCJKU09OIiwic3RyaW5naWZ5IiwibGlicmFyeU5vZGVzIiwic2V0SGVhZGVyIiwicmVuZGVyZWRTdHJpbmciLCJyZW5kZXJTaWduYWxzIiwiZW5kIiwicHJvamVjdHNBcnJheSIsImJvZHlQYXJzZXIiLCJwb3N0IiwicHJvamVjdEpzb24iLCJib2R5IiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwicmVuZGVySHRtbCIsInJlcXVlc3RKc29uIiwianN4IiwianN4RG9tIiwianN4U3RyaW5nIiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJzY3JpcHRBcnJheSIsInNjcmlwdEdlbmVyYXRvciIsImNvbXBvc2VkU2NyaXB0U3RyaW5nIiwicyIsInNjcmlwdHMiLCJzY3JpcHRlZEh0bWwiLCJzbGljZSIsImZpeFNjb3BlcyIsImdlbiIsImciLCJmb3VuZExlZnRCb3JkZXIiLCJmb3VuZFJpZ2h0Qm9yZGVyIiwianVzdEhpdE9wZW5pbmdCcmFja2V0IiwianVzdEhpdENsb3NpbmdCcmFja2V0IiwibGVmdCIsInJpZ2h0Iiwib25lIiwidHdvIiwidGhyZWUiLCJ0b2tlblRvSnMiLCJub2RlSWQiLCJ2YXJpYWJsZU5hbWUiLCJqc29uVG9rZW5zIiwiZXhlY3V0YWJsZVN0cmluZyIsImNhbGN1bGF0ZUNvZGUiLCJ0b2tlbiIsInR5cGUiLCJ2YWx1ZSIsImNvZGUiLCJzdHlsZXMiLCJzZXR0aW5nc0NvdW50Iiwic2NvcGVDb3VudCIsIm5vZGVzIiwiY2FudmFzTm9kZXMiLCJrZXkiLCJjdXJyZW50Tm9kZSIsInNldHRpbmdzTm9kZXMiLCJjYXRlZ29yaWVzIiwiaXNUaGlyZExldHRlclVwcGVyQ2FzZSIsInRvVXBwZXJDYXNlIiwiaXNVSSIsImlzQWN0dWFsVUkiLCJjYXRlZ29yeVNhdmVkQWxyZWFkeSIsImN1cnJlbnRDYXRlZ29yeSIsInNldHRpbmdzIiwiYyIsInNvcnQiLCJhIiwiYiIsImNhdDEiLCJjYXQyIiwib3JkZXIxIiwib3JkZXIyIiwiY2F0QXJyIiwibmV3U2V0dGluZ3NOb2RlcyIsImNhbnZhc0pzeCIsIm1hcCIsIm5vZGUiLCJsYXN0Q2F0ZWdvcnkiLCJpbnB1dEVsZW1lbnQiLCJpc1NsaWRlciIsInNob3VsZFNhdmVDYXRlZ29yeSIsIlNpZ25hbFZpZXdzIiwiZ3JpZFRlbXBsYXRlUm93cyIsIlNldHRpbmdzSnN4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gs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QUFDM0QsTUFBeEI7QUFBakI7QUFBL0IsS0FDS2lGLFNBREwsQ0FGcUIsR0FLckIsSUFMUjtBQU9BLE1BQU1TLFdBQVcsR0FBR3BCLFFBQVEsR0FFcEI7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUNJO0FBQUksTUFBRSxFQUFFO0FBQVIsS0FDS0EsUUFETCxDQURKLENBRm9CLEdBT3BCLElBUFI7QUFTQSxTQUNJO0FBQUssTUFBRSxFQUFFO0FBQVQsS0FDSSwwRUFBUWYsTUFBTSxDQUFDeUIsZ0JBQWdCLENBQUNoRixNQUFsQixFQUEwQjJELFdBQVcsQ0FBQzNELE1BQXRDLENBQWQsQ0FESixFQUVLMEYsV0FGTCxFQUdLRixXQUhMLENBREo7QUFPSCxDOzs7Ozs7Ozs7OztBQ3BSRCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiLy8gQmFzZSBJbXBvcnRzXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuXG4vLyBTZXJ2ZXIgU2V0dXBcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuLy8gTWlkZGxld2FyZVxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5cbi8vIERhdGEgUGFyc2luZ1xuaW1wb3J0IHtcbiAgICByZW5kZXJTaWduYWxzXG59IGZyb20gJy4vcmVuZGVyZXInXG4vLyBpbXBvcnQgdGVzdE1vZGVsIGZyb20gJy4vdGVzdE1vZGVsLmpzb24nXG5cbi8vIFByZS1tYWRlIHByb2plY3RzIGFuZCBsaWJyYXJ5IG5vZGVzXG5pbXBvcnQgbGlicmFyeU5vZGVzIGZyb20gJy4vbGlicmFyeU5vZGVzLmpzb24nXG5pbXBvcnQgbW9kdWxhdGlvbiBmcm9tICcuL3Byb2plY3RzL21vZHVsYXRpb24uanNvbidcbmltcG9ydCBmb3VyaWVyU2VyaWVzIGZyb20gJy4vcHJvamVjdHMvZm91cmllclNlcmllcy5qc29uJ1xuXG5jb25zdCBkYXRlTm93ID0gKCkgPT4gU3RyaW5nKERhdGUoKS50b1N0cmluZygpKS5zdWJzdHIoMCwgMjQpICsgXCIgfCBcIjtcblxubGV0IGRhdGFiYXNlID0ge1xuICAgIHByb2plY3RzSW5mbzogW3tcbiAgICAgICAgcHJvamVjdElkOiBcIjFcIixcbiAgICAgICAgdGl0bGU6IFwiQU0vRk0gTW9kdWxhdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG93cyBvbmUgc2lnbmFsIG1vZHVsYXRlZCBvdmVyIG90aGVyIChjYXJyaWVyKSBzaWduYWwgdXNpbmcgQU0gYW5kIEZNIG1vZHVsYXRpb24uXCIsXG4gICAgICAgIG93bmVyOiBcImFkbWluXCJcbiAgICB9LCB7XG4gICAgICAgIHByb2plY3RJZDogXCIyXCIsXG4gICAgICAgIHRpdGxlOiBcIkZvdXJpZXIgU2VyaWVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkF0dGVtcHQgYXQgY3JlYXRpbmcgZm91cmllciBzZXJpZXMgdXNpbmcgdGhpcyB0b29sLlwiLFxuICAgICAgICBvd25lcjogXCJhZG1pblwiXG4gICAgfV0sXG4gICAgcHJvamVjdE1vZGVsczogW3tcbiAgICAgICAgICAgIC4uLm1vZHVsYXRpb25cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLi4uZm91cmllclNlcmllc1xuICAgICAgICB9XG4gICAgXSxcbiAgICB1c2Vyczoge1xuICAgICAgICBhZG1pbjoge1xuICAgICAgICAgICAgdXNlcm5hbWU6IFwiYWRtaW5cIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcImFkbWluXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmV3UHJvamVjdDogZnVuY3Rpb24gKHVzZXJuYW1lLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgLy8gRmluZCBuZXcgaWRcbiAgICAgICAgbGV0IG5ld0lkID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMucHJvamVjdHNJbmZvKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5wcm9qZWN0c0luZm9baV0ucHJvamVjdElkKSA+IG5ld0lkKSBuZXdJZCA9IHRoaXMucHJvamVjdHNJbmZvW2ldLnByb2plY3RJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0lkKys7XG5cbiAgICAgICAgLy8gQWRkIG5ldyBwcm9qZWN5IGluZm9cbiAgICAgICAgdGhpcy5wcm9qZWN0c0luZm8ucHVzaCh7XG4gICAgICAgICAgICBwcm9qZWN0SWQ6IG5ld0lkLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3duZXI6IHVzZXJuYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvamVjdE1vZGVscy5wdXNoKHtcbiAgICAgICAgICAgIC4uLnByb2plY3RNb2RlbFRlbXBsYXRlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdJZDtcbiAgICB9LFxuICAgIHNhdmVQcm9qZWN0OiBmdW5jdGlvbiAocHJvamVjdElkLCBqc29uKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RWZXJzaW9uID0ge1xuICAgICAgICAgICAgYWxsQ29ubmVjdGlvbnM6IGpzb24uYWxsQ29ubmVjdGlvbnMsXG4gICAgICAgICAgICBhbGxOb2RlczoganNvbi5hbGxOb2RlcyxcbiAgICAgICAgICAgIGNvbXBvc2VyQ29vcmRpbmF0ZXM6IGpzb24uY29tcG9zZXJDb29yZGluYXRlcyxcbiAgICAgICAgICAgIGlzQ3JlYXRpbmdDb25uZWN0aW9uOiBqc29uLmNvbXBvc2VyQ29vcmRpbmF0ZXNcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSA9IG5ld1Byb2plY3RWZXJzaW9uO1xuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdE1vZGVsVGVtcGxhdGUgPSB7XG4gICAgYWxsQ29ubmVjdGlvbnM6IFtdLFxuICAgIGFsbE5vZGVzOiB7fSxcbiAgICBjb21wb3NlckNvb3JkaW5hdGVzOiB7XG4gICAgICAgIGZvY3VzZWQ6IHRydWUsXG4gICAgICAgIGdyaWRTaXplOiA1MCxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgem9vbUxldmVsOiAxXG4gICAgfSxcbiAgICBpc0NyZWF0aW5nQ29ubmVjdGlvbjogZmFsc2Vcbn1cblxuLy8gU3RhdGljIGZpbGVzXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvcHVibGljL3N0YXRpYycpKVxuXG4vLyAtLS0gUk9VVEVTIC0tLVxuYXBwLmdldCgnL2VkaXRvci86dXNlcm5hbWUvOmlkJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gcmVxLnBhcmFtcy5pZDtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG5cbiAgICBjb25zb2xlLmxvZyhgJHtkYXRlTm93KCl9R0VUIC9lZGl0b3IvJHt1c2VybmFtZX0vJHtwcm9qZWN0SWR9YCk7XG5cbiAgICBpZiAoIWRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkgcmVzLnN0YXR1cyg0MjApLnNlbmQoXCJVc2VyIHdpdGggdXNlcm5hbWUgXCIgKyB1c2VybmFtZSArIFwiIGRvZXNuJ3QgZXhpc3RcIik7XG5cbiAgICBmcy5yZWFkRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wdWJsaWMvZWRpdG9yLmh0bWwnKSwgJ3V0ZjgnLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdBbiBlcnJvciBvY2N1cnJlZCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGl0bGVcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgIFwiPHRpdGxlPjwvdGl0bGU+XCIsXG4gICAgICAgICAgICBgPHRpdGxlPiR7cHJvamVjdElkfTwvdGl0bGU+YFxuICAgICAgICApXG5cbiAgICAgICAgbGV0IHByb2plY3REYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YWJhc2UucHJvamVjdHNJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZGF0YWJhc2UucHJvamVjdHNJbmZvW2ldO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdC5vd25lciA9PSB1c2VybmFtZSAmJiBwcm9qZWN0LnByb2plY3RJZCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGlkID0gcGFyc2VJbnQocHJvamVjdElkKSAtIDE7XG4gICAgICAgICAgICAgICAgcHJvamVjdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGFiYXNlLnByb2plY3RNb2RlbHNbcGlkXSxcbiAgICAgICAgICAgICAgICAgICAgcGlkOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiB1c2VybmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBkYXRhXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICAnPHNjcmlwdCBpZD1cImVkaXRvci1kYXRhXCI+PC9zY3JpcHQ+JyxcbiAgICAgICAgICAgIGA8c2NyaXB0IGlkPVwicHJvamVjdC1kYXRhXCI+ZG9jdW1lbnQucHJvamVjdERhdGEgPSAke0pTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKX08L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgaWQ9XCJsaWJyYXJ5LWRhdGFcIj5kb2N1bWVudC5saWJyYXJ5Tm9kZXMgPSAke0pTT04uc3RyaW5naWZ5KGxpYnJhcnlOb2Rlcyl9PC9zY3JpcHQ+YFxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgICAgICByZXMuc2VuZChkYXRhKTtcbiAgICB9KVxufSk7XG5cbi8vIERlZmF1bHQgdGVzdCB2aXN1YWxpc2F0aW9uXG5hcHAuZ2V0KCcvcmVuZGVyLzp1c2VybmFtZS86aWQnLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zb2xlLmxvZyhgJHtkYXRlTm93KCl9R0VUIC9yZW5kZXIvJHt1c2VybmFtZX0vJHtwcm9qZWN0SWR9YCk7XG5cbiAgICBpZiAoIWRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkgcmVzLnN0YXR1cyg0MjApLnNlbmQoXCJVc2VyIHdpdGggdXNlcm5hbWUgXCIgKyB1c2VybmFtZSArIFwiIGRvZXNuJ3QgZXhpc3RcIik7XG5cblxuICAgIGNvbnN0IHJlbmRlcmVkU3RyaW5nID0gcmVuZGVyU2lnbmFscyhkYXRhYmFzZS5wcm9qZWN0TW9kZWxzW3Byb2plY3RJZCAtIDFdKTtcblxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICByZXMuZW5kKHJlbmRlcmVkU3RyaW5nKTtcbn0pXG5cbi8vIEZvciBub3csIGxhbmRpbmcgcGFnZSBpcyB0aGUgcHJvamVjdHMgcGFnZS5cbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGZzLnJlYWRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3B1YmxpYy9wcm9qZWN0cy5odG1sJyksICd1dGY4JywgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnQW4gZXJyb3Igb2NjdXJyZWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRpdGxlXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICBcIjx0aXRsZT48L3RpdGxlPlwiLFxuICAgICAgICAgICAgYDx0aXRsZT5Qcm9qZWN0czwvdGl0bGU+YFxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgICAgICByZXMuZW5kKGRhdGEpO1xuICAgIH0pXG59KVxuXG5hcHAuZ2V0KFwiL3Byb2plY3RzL2luZm8vOnVzZXJuYW1lXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcblxuICAgIGlmIChkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHtcbiAgICAgICAgbGV0IHByb2plY3RzQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhYmFzZS5wcm9qZWN0c0luZm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhYmFzZS5wcm9qZWN0c0luZm9baV0ub3duZXIgPT09IHVzZXJuYW1lKVxuICAgICAgICAgICAgICAgIHByb2plY3RzQXJyYXkucHVzaChkYXRhYmFzZS5wcm9qZWN0c0luZm9baV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MjApLnNlbmQoYE5vIHVzZXIgd2l0aCB1c2VybmFtZSBcIiR7dXNlcm5hbWV9XCIgd2FzIGZvdW5kLmApO1xuICAgIH1cblxufSlcblxuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC5wb3N0KFwiL3NhdmUvOnVzZXJuYW1lLzppZFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICAvLyBTYXZlIGV4aXN0aW5nIHByb2plY3RcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG4gICAgY29uc3QgcHJvamVjdElkID0gcmVxLnBhcmFtcy5pZDtcblxuICAgIGNvbnNvbGUubG9nKGAke2RhdGVOb3coKX1QT1NUIC9zYXZlLyR7dXNlcm5hbWV9LyR7cHJvamVjdElkfWApO1xuXG4gICAgY29uc3QgcHJvamVjdEpzb24gPSByZXEuYm9keTtcblxuICAgIGlmICghZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSByZXMuc3RhdHVzKDQyMCkuc2VuZChgVXNlciB3aXRoIHVzZXJuYW1lICR7dXNlcm5hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblxuICAgIGlmICghZGF0YWJhc2UucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSkgcmVzLnN0YXR1cyg0MjEpLnNlbmQoYFByb2plY3Qgd2l0aCBpZCAke3Byb2plY3RJZH0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgZGF0YWJhc2Uuc2F2ZVByb2plY3QocHJvamVjdElkLCBwcm9qZWN0SnNvbik7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG5cbn0pXG5cblxuYXBwLmdldChcIi9jcmVhdGVQcm9qZWN0Lzp1c2VybmFtZS86dGl0bGUvOmRlc2NyaXB0aW9uXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zdCB0aXRsZSA9IHJlcS5wYXJhbXMudGl0bGU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSByZXEucGFyYW1zLmRlc2NyaXB0aW9uO1xuXG4gICAgaWYgKCFkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHJlcy5zdGF0dXMoNDIwKS5zZW5kKGBVc2VyIHdpdGggdXNlcm5hbWUgJHt1c2VybmFtZX0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgbGV0IHBpZCA9IGRhdGFiYXNlLm5ld1Byb2plY3QodXNlcm5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbik7XG5cbiAgICByZXMuc3RhdHVzKDMwMSkuc2VuZChgL2VkaXRvci8ke3VzZXJuYW1lfS8ke3BpZH1gKTtcbn0pXG5cbi8vIFJ1biBzZXJ2ZXJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlxcbkxpc3RlbmluZyBvbjogaHR0cHM6Ly9sb2NhbGhvc3Q6XCIgKyBwb3J0ICsgXCJcXG5cIik7XG59KTsiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdlbmVyYXRvciBDb2RlIFRva2VuaXNlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR2VuZXJhdG9yIGNvZGUgdG9rZW5pc2VyIGZ1bmN0aW9uIGlzIGFsZ29yaXRobWljYWxseSBzaW1wbGUsIGJ1dCBwcm9kdWNlcyBhIGdvb2QgcmVwcmVzZW50YXRpb25cbi8vIG9mIHRoZSBwcm92aWRlZCBjb2RlIGluIEphdmFTY3JpcHQgT2JqZWN0IGZvcm1hdCAod2hpY2ggY2FuIHRoZW4gYmUgZWFzaWx5IGNvbnZlcnRlZCB0byBKU09OLFxuLy8gc2luY2UgaXQncyBwcmV0dHkgbXVjaCB0aGUgc2FtZSB0aGluZykuXG4vLyBXaGVuIGdvaW5nIHRocm91Z2ggdGhlIGNvZGUsIGl0IGNhbiBkZXRlY3Qgc2V2ZXJhbCB0eXBlcyBvZiBvcGVyYXRvcnMuIFRoZXNlIGFyZTpcbi8vICAgICAqIFZhcmlhYmxlXG4vLyAgICAgKiBDb25zdGFudCBOdW1iZXJcbi8vICAgICAqIE1hdGggT3BlcmF0b3Jcbi8vICAgICAqIE1hdGggRnVuY3Rpb25cbi8vICAgICAqIFJlZ3VsYXIgc2NvcGUgLSBldmVyeXRoaW5nIGluc2lkZSBicmFja2V0cyBcIihcIiBhbmQgXCIpXCIgc2hvdWxkIGJlIGV4ZWN1dGVkIGZpcnN0XG4vLyBUaGUgVmFyaWFibGVzLCBOdW1iZXJzIGFuZCBNYXRoIG9wZXJhdG9ycyBhcmUganVzdCBhZGRlZCBhcyBhbiBvYmplY3Qgd2l0aCBhcHByb3ByaWF0ZSB0eXBlIGFuZFxuLy8gdmFsdWUgdGFrZW4gZnJvbSB0aGUgY29kZS5cblxuLy8gVE9ETzpcbi8vICogU2FuZXRpc2UgdmFyaWFibGUgbmFtZXMgISEhIEphdmFzY3JpcHQgaW5qZWN0aW9uIGlzIHBvc3NpYmxlIG5vdyB0aHJvdW4gdmFyaWFibGUgbmFtZXMuLi5cblxuaW1wb3J0IHtmaXhTY29wZXN9IGZyb20gJy4vc2NvcGVGaXhlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZUdlbmVyYXRvciAoZ2VuOiBzdHJpbmcsIG5vZGVJZDogc3RyaW5nKTogR2VuZXJhdG9yU2VnbWVudFtdIHtcbiAgICAvLyBHZXQgdmFsdWUgb2YgZ2VuZXJhdG9yIGNvZGUgYW5kIHN0b3JlIGluIGdcbiAgICBsZXQgZyA9IFN0cmluZyhnZW4pO1xuICAgIGcgPSBTdHJpbmcoZml4U2NvcGVzKGcpKTtcblxuICAgIC8vIFBhcnNlZCBHZW5lcmF0b3IgQ29kZVxuICAgIGxldCBwZ2VuOiBHZW5lcmF0b3JTZWdtZW50W10gPSBbXTtcbiAgICBcbiAgICAvLyBUaGUgc3RhY2tcbiAgICBsZXQgc3RhY2s6IEdlbmVyYXRvclNlZ21lbnRbXSA9IFtdO1xuXG4gICAgLy8gQ29kZSB0b2tlbmlzZXJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b3BTdGFja09iamVjdDogR2VuZXJhdG9yU2VnbWVudCA9IHN0YWNrLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gOiBudWxsO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBWQVJJQUJMRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiW1wiKSB7XG4gICAgICAgICAgICAvLyBNb3ZlIHRvIG5leHQgY2hhcmFjdGVyXG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIGVtcHR5IHZhcmlhYmxlXG4gICAgICAgICAgICBsZXQgdmFyaWFibGUgPSBcIlwiO1xuXG4gICAgICAgICAgICAvLyBTY2FuIHVudGlsIHZhcmlhYmxlIHNjb3BlIGlzIGNsb3NlZFxuICAgICAgICAgICAgd2hpbGUoZ1tpXSAhPT0gXCJdXCIpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSArPSBnW2ldO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodmFyaWFibGUgPT09IFwidGltZVwiIHx8IHZhcmlhYmxlID09PSBcIlBJXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nID9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBub2RlSWQgKyB2YXJpYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidmFyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhcmlhYmxlLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbdG9wSW5kZXhdLmNvZGUucHVzaCh2YXJpYWJsZVNuaXBwZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2godmFyaWFibGVTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBNQVRIIE9QRVJBVE9SIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYgKGdbaV0gPT09IFwiKlwiIHx8IGdbaV0gPT09IFwiL1wiIHx8IGdbaV0gPT09IFwiK1wiIHx8IGdbaV0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvclNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBnW2ldLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2gob3BlcmF0b3JTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChvcGVyYXRvclNuaXBwZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE1BVEggRlVOQ1RJT04gLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcInNcIiB8fCBnW2ldID09PSBcImNcIiB8fCBnW2ldID09PSBcInRcIikge1xuICAgICAgICAgICAgLy8gTWF0aGVtYXRpY2FsIGZvcm11bGFzIGFyZSBjb2RlZCBpbiB0aHJlZSBsZXR0ZXJzXG4gICAgICAgICAgICBsZXQgbmV4dFRocmVlID0gU3RyaW5nKGdbaV0gKyBnW2krMV0gKyBnW2krMl0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBuZXh0IHRocmVlIGNoYXJzIGFyZSBvbmUgb2YgXG4gICAgICAgICAgICBpZihuZXh0VGhyZWUgPT09IFwic2luXCIgfHwgbmV4dFRocmVlID09PSBcImNvc1wiIHx8IG5leHRUaHJlZSA9PT0gXCJ0YW5cIikge1xuICAgICAgICAgICAgICAgIC8vIEFkanVzdCBpbmRleCB0byBuZXh0IGNoYXJhY3RlclxuICAgICAgICAgICAgICAgIGkgKz0gMztcblxuICAgICAgICAgICAgICAgIC8vIFNlYXJjaCBmb3Igb3BlbmluZyBicmFja2V0c1xuICAgICAgICAgICAgICAgIHdoaWxlKGdbaV0gIT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcblxuICAgICAgICAgICAgICAgICAgICBpZihpID49IGcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdGhyb3cgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVSUk9SIFJFQVNPTjogc2hvdWxkIHByb3ZpZGUgYnJhY2tldHMgZm9yIG1hdGggb3BlcmF0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwic2hvdWxkIHByb3ZpZGUgYnJhY2tldHMgZm9yIG1hdGggb3BlcmF0b3JzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBwcm92aWRlZCBzcGFjZSBvciBhIGNoYXJhY3RlciBhZnRlciB0aHJlZSBtYXRoIGNoYXJzXG4gICAgICAgICAgICAgICAgLy8gaWYgKGdbaSsxXSA9PT0gXCIoXCIpIGkrKztcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGhTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1hdGhcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5leHRUaHJlZSxcbiAgICAgICAgICAgICAgICAgICAgY29kZTogW11cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFja1RvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5wdXNoKG1hdGhTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY29wZVRvcEluZGV4ID0gc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlW3Njb3BlVG9wSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCB0byByb290IGxldmVsXG4gICAgICAgICAgICAgICAgICAgIHBnZW4ucHVzaChtYXRoU25pcHBldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBnZW5bcGdlbi5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHBhcnNpbmcgY29kZVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIFJFR1VMQVIgU0NPUEUgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcIihcIikge1xuICAgICAgICAgICAgLy8gQmVnaW4gcmVndWxhciBzY29wZVxuICAgICAgICAgICAgY29uc3Qgc2NvcGVTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwic2NvcGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgICBjb2RlOiBbXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFja1RvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLnB1c2goc2NvcGVTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNjb3BlVG9wSW5kZXggPSBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlW3Njb3BlVG9wSW5kZXhdXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCB0byByb290IGxldmVsXG4gICAgICAgICAgICAgICAgcGdlbi5wdXNoKHNjb3BlU25pcHBldCk7XG5cbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBwZ2VuW3BnZW4ubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gRU5EIEFOWSBTQ09QRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiKVwiIHx8IGcuY2hhckF0KGkpID09PSBcIilcIikge1xuICAgICAgICAgICAgLy8gRW5kIFNjb3BlXG5cbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRvcCBpdGVtIGZyb20gc3RhY2sgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGNsb3NlZCBzY29wZSB0aGF0IHdhc24ndCBvcGVuZWRcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiAgICAgICAgICAgIHRocm93IEVSUk9SXG4gICAgICAgICAgICAgICAgLy8gRVJST1IgUkVBU09OOiAgICBub24gZXhpc3RlbnQgc2NvcGUgd2FzIGNsb3NlZFxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJub24gZXhpc3RlbnQgc2NvcGUgd2FzIGNsb3NlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBOVUJNRVIgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBsZXQgbWF5YmVOdW1iZXIgPSBTdHJpbmcocGFyc2VJbnQoZ1tpXSkpO1xuXG4gICAgICAgIGlmKG1heWJlTnVtYmVyICE9PSBTdHJpbmcoTmFOKSAmJiB0eXBlb2YgcGFyc2VJbnQobWF5YmVOdW1iZXIpID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGxldCBudW1iZXJTdGFydCA9IGk7XG5cbiAgICAgICAgICAgIC8vIElzIGN1cnJlbnQgY2hhciBhIG51bWJlciBvciBhIGRvdD9cbiAgICAgICAgICAgIGNvbnN0IGlzTnVtYmVyID0gKCkgPT4gKG1heWJlTnVtYmVyICE9PSBTdHJpbmcoTmFOKSAmJiB0eXBlb2YgcGFyc2VJbnQobWF5YmVOdW1iZXIpID09PSBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGNvbnN0IGlzRG90ID0gKGluZGV4OiBudW1iZXIpID0+IFN0cmluZyhnW2luZGV4XSkgPT09IFwiLlwiO1xuXG4gICAgICAgICAgICAvLyBXYXMgdGhlcmUgYSBkb3QgaW4gY3VycmVudCBzZXF1ZW5jZSBvZiBudW1iZXJzP1xuICAgICAgICAgICAgbGV0IHdhc0RvdEFscmVhZHkgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2hpbGUoaXNOdW1iZXIoKSB8fCBpc0RvdChpKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGN1cnJlbnQgY2hhciBpcyBhIGRvdFxuICAgICAgICAgICAgICAgIGlmKGlzRG90KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHdhc0RvdEFscmVhZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IHRoZXJlIHdhcyBhIGRvdCBhbHJlYWR5LCB0aHJvdyBlcnJvciwgc2luY2UgaXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0aHJvdyBFUlJPUlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRVJST1IgUkVBU09OOiBpbnZhbGlkIGZsb2F0aW5nIHBvaW50IG51bWJlciBzeW50YXhcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIG5vdCwgc2V0IHdhcyBkb3QgYWxyZWFkeSB0byB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXNEb3RBbHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1vdmUgdG8gbmV4dCBpbmRleCBhbmQgXG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIG1heWJlTnVtYmVyID0gU3RyaW5nKHBhcnNlSW50KGdbaV0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0aW5nTnVtYmVyID0gZy5zbGljZShudW1iZXJTdGFydCwgaSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG51bWJlclNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0aW5nTnVtYmVyLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBzdGFja1t0b3BJbmRleF0uY29kZS5wdXNoKG51bWJlclNuaXBwZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCB0byByb290IGxldmVsXG4gICAgICAgICAgICAgICAgcGdlbi5wdXNoKG51bWJlclNuaXBwZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpLS07XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBSZXR1cm4gcGFyc2VkIGdlbmVyYXRvciBhcnJheVxuICAgIHJldHVybiBwZ2VuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlbmVyYXRvclNlZ21lbnQge1xuICAgIHR5cGU6IHN0cmluZyxcbiAgICB2YWx1ZTogKHN0cmluZ3xudW1iZXIpLFxuICAgIGNvZGU6IEdlbmVyYXRvclNlZ21lbnRbXVxufSIsImltcG9ydCB7IHJlbmRlclRvU3RyaW5nLCByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG5pbXBvcnQgeyBzY3JpcHRHZW5lcmF0b3IgfSBmcm9tICcuL3NjcmlwdEdlbmVyYXRvci50cyc7XG5pbXBvcnQgeyBqc3hEb20gfSBmcm9tICcuL3ZpZXdlckRvbSc7XG5cbmZ1bmN0aW9uIHJlbmRlckh0bWwgKHJlcXVlc3RKc29uKSB7XG4gICAgLy8gU2VwYXJhdGUgbm9kZXMgZnJvbSBjb25uZWN0b3JzXG4gICAgY29uc3QgYWxsTm9kZXMgPSB7Li4ucmVxdWVzdEpzb24uYWxsTm9kZXN9O1xuICAgIGNvbnN0IGFsbENvbm5lY3Rpb25zID0gWy4uLnJlcXVlc3RKc29uLmFsbENvbm5lY3Rpb25zXTtcblxuICAgIC8vIFJlbmRlciBIVE1MXG4gICAgY29uc3QganN4ID0ganN4RG9tKGFsbE5vZGVzKTtcbiAgICBjb25zdCBqc3hTdHJpbmcgPSByZW5kZXJUb1N0YXRpY01hcmt1cChqc3gpO1xuXG4gICAgLy8gR2VuZXJhdGUgU2NyaXB0c1xuICAgIC8vIGNvbnNvbGUudGltZShcIlNjcmlwdCBQYXJzZXJcIik7XG5cbiAgICBjb25zdCBzY3JpcHRBcnJheSA9IHNjcmlwdEdlbmVyYXRvcihhbGxOb2RlcywgYWxsQ29ubmVjdGlvbnMpO1xuICAgIGxldCBjb21wb3NlZFNjcmlwdFN0cmluZyA9IFwiXCI7XG4gICAgZm9yKGxldCBzIGluIHNjcmlwdEFycmF5KSB7XG4gICAgICAgIGlmKHMgPT0gMCkgY29udGludWU7XG4gICAgICAgIGNvbXBvc2VkU2NyaXB0U3RyaW5nICs9IHNjcmlwdEFycmF5W3NdO1xuICAgIH1cbiAgICBcbiAgICAvLyBjb25zb2xlLnRpbWVFbmQoXCJTY3JpcHQgUGFyc2VyXCIpO1xuXG4gICAgbGV0IHNjcmlwdHMgPSBgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9DaGFydC5qcy8yLjcuMy9DaGFydC5idW5kbGUubWluLmpzXCI+PC9zY3JpcHQ+XFxuYDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0PiR7c2NyaXB0QXJyYXlbMF19PC9zY3JpcHQ+YDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0PiR7Y29tcG9zZWRTY3JpcHRTdHJpbmd9PC9zY3JpcHQ+YDtcbiAgICBcbiAgICAvLyBDb21iaW5lIGZvcm1lciByZXN1bHRzXG4gICAgY29uc3Qgc2NyaXB0ZWRIdG1sID0ganN4U3RyaW5nLnNsaWNlKDAsIGpzeFN0cmluZy5sZW5ndGggLSA2KSArIHNjcmlwdHMgKyBcIjwvZGl2PlwiO1xuICAgIFxuICAgIC8vIFJldHVybiBnZW5lcmF0ZWQgSFRNTCBhcyBhIHN0cmluZ1xuICAgIHJldHVybiBzY3JpcHRlZEh0bWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaWduYWxzIChyZXF1ZXN0SnNvbikge1xuICAgIHJldHVybiByZW5kZXJIdG1sKHJlcXVlc3RKc29uKTtcbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU2NvcGUgRml4ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTY29wZSBGaXhlciBmdW5jdGlvbiBpcyByZWxhdGVkIHRvIHRoZSBnZW4gdmFyaWFibGUgcGFyc2luZyBhbGdvcml0aG0uIFNpbmNlIHRoZSB0b2tlbml6ZXIgXG4vLyBmdW5jdGlvbiBkb2VzIG5vdCB0YWtlIGludG8gYWNjb3VuZCB0aGF0IG1hdGggb3BlcmF0b3JzICogKG11bHRpcGxpY2F0aW9uKSBhbmQgLyAoZGl2aXNpb24pXG4vLyBhcmUgZXhlY3V0ZWQgZmlyc3QsIHdlIG5lZWQgdG8gcHV0IHNjb3BlcyBhcm91bmQgYml0cyB0aGF0IHNob3VsZCBleGVjdXRlZCBmaXJzdC4gVGhpcyBpcyBcbi8vIG5vdCBmaW5hbCBzb2x1dGlvbiwgc2luY2UgaXQgZG9lcyBub3QgdGFrZSBmb2xsb3dpbmcgc2l0dWF0aW9ucyBpbnRvIGFjY291bnQ6XG4vLyAgICAgKiB0aGVyZSBpcyBhIG1pbnVzIG9yIHBsdXMgc2lnbiBiZWZvcmUgYSBudW1iZXI6IC0xKlt2YXJpYWJsZV1cbi8vICAgICAgICAgLSBJbiB0aGlzIGNhc2UgaXQgd291bGQgcmV0dXJuIHRoaXM6IC0oMSpbdmFyaWFibGVdKS4gVGhpcyBkb2VzIG5vdCBhcHBseSBzY29wZXNcbi8vICAgICAgICAgICBjb3JyZWN0bHkuXG4vL1xuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQWxnb3JpdGhtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgYWxnb3JpdGhtIG1ha2VzIG9ubHkgb25lIGdlbmVyYWwgc3dlZXAgdGhyb3VnaCB0aGUgc3RyaW5nLiBUaGlzIG1lYW5zIHRoYXQgaWYgbm8gXG4vLyBzY29wZXMgYXJlIG5lZWRlZCwgZXhlY3V0aW9uIHRpbWUgd2lsbCBiZSBtaW5pbWFsLCBpLmUuIGl0IHdpbGwgdGFrZSBhcyBtdWNoIHRpbWUgYXMgaXRcbi8vIHRha2VzIHRvIGxvb3AgdGhyb3VnaCB0aGUgc3RyaW5nIG9uY2UgYW5kIGNoZWNrIGlmIHRoZSBjaGFyYWN0ZXIgaXMgKiBvciAvLiBJbiB0aGUgY2FzZSBvZlxuLy8gMzQgY2hhcmFjdGVyIHN0cmluZywgdGhpcyBmdW5jdGlvbiBpcyBleGVjdXRlZCBpbiBhYm91bnQgMC4zLTAuNSBtcy4gV2l0aCBhbiBhdmVyYWdlIG9mIFxuLy8gYXJvdW5kIDAuNG1zIGFuZCAzNCBjaGFyYWN0ZXJzLCB3ZSBjYW4gYXBwcm94aW1hdGUgdGhhdCBvbmUgY2hhcmFjdGVyIHRha2VzIDAuNCAvIDM0ID0gMS42NlxuLy8gbWljcm8gc2Vjb25kcy4gVGhpcyB3YXMgdGVzdGVkIG9uIDIuN0doeiBJbnRlbCBDb3JlIGk3LiBTbyBpdCB0b29rIGFyb3VuZCA0NDgyIGNsb2NrIGN5Y2xlc1xuLy8gdG8gZXhlY3V0ZSB0aGF0IGFjY29yZGluZyB0byBmb2xsb3dpbmcgZXF1YXRpb246IDEuNjZ1cyAvICgxIC8gMi43RykgPSA0NDgyLiBUaGlzIGNvdWxkIGJlIFxuLy8gZHJhbWF0aWNhbGx5IGltcHJvdmVkIGJ5IHVzaW5nIGN1c3RvbSBtYWRlIE5vZGUuanMgYysrIHBsdWdpbiB3aGljaCBhbGxvd3MgdG8gcnVuIGMrK1xuLy8gYmluYXJpZXMgZnJvbSBOb2RlLmpzIG9yIGJ5IHdyaXRpbmcgdGhlIHdob2xlIHJlbmRlcmVyIHNlcnZlciBpbiBhIGNvbXBpbGVkIGxhbmd1YWdlIGxpa2UgXG4vLyBweXRob24sIGMjLCBnbywgb3Igc3dpZnQuIFRoZXJlIGlzIGFsc28gYSBwb3NzaWJpbGl0eSB0byB3cml0ZSBpdCBpbiBSdXN0IGxhbmd1YWdlLCBDIG9yXG4vLyBDKysuIFRoaXMgd291bGQgYWxsb3cgdG8gY29tcGlsZSBqdXN0IHRoaXMgZnVuY3Rpb24gdG8gV2ViQXNzZW1ibHkgYW5kIHJ1biBpdCBpbiBOb2RlLmpzIGF0IFxuLy8gY29tcGlsZWQgc3BlZWQuIElmIGZ1cnRoZXIgZGV2ZWxvcG1lbnQgd2lsbCBiZSBkb25lIGFuZCB0aGVyZSB3aWxsIGJlIGEgZGVjaXNpb24gdG8gIHN3aXRjaFxuLy8gdG8gYSBjb21waWxlZCBsYW5ndWFnZSBzZXJ2ZXIsIEkgd291bGQgc3VnZ2VzdCB1c2luZyBHTyBsYW5ndWFnZSBkdWUgdG8gaXRzIHNpbXBsaWNpdHkuXG4vL1xuLy8gQWxnaXRobSB3b3JrcyBpbiBhIGZvbGxvd2luZyBmYXNoaW9uOlxuLy8gICAxLiBNYWtlIHN1cmUgcGFzc2VkIHRleHQgaXMgb2YgYSBTdHJpbmcgdHlwZVxuLy8gICAyLiBTZXQgZmxhZ3MgdG8gZmFsc2U6XG4vLyAgICAgICAtIGJvcmRlciBmbGFnczogaW5kaWNhdGUgaWYgb24gbGVmdCBvciByaWdodCwgYSArIG9yIC0gc2lnbiB3YXMgZm91bmRcbi8vICAgICAgIC0gYnJhY2tldCBmbGFnczogaW5kaWNhdGUgaWYgd2hpbGUgc3dlZXBpbmcgbGVmdCBhbmQgcmlnaHQgYSBzY29wZSB3YXMgZm91bmRcbi8vICAgMy4gSW5pdGlhdGUgdmFyaWFibGVzIGZvciBsZWZ0IGFuZCByaWdodCBzd2VlcGVyc1xuLy8gICA0LiBMb29wIHVudGlsIHdob2xlIHN0cmluZyB3YXMgc2Nhbm5lZCwgaW4gdGhlIGxvb3A6XG4vLyAgICAgICAxLiBJZiBjdXJyZW50IGNoYXJhY3RlciBpcyBcIipcIlwiIG9yIFwiL1wiLCBjb250aW51ZSwgb3RoZXJ3aXNlIGluY3JlYXNlIGluZGV4IGJ5IG9uZSBhbmQgY2hlY2sgYWdhaW5cbi8vICAgICAgIDIuIFNjYW4gdG8gdGhlIGxlZnQgZnJvbSB0aGUgY3VycmVudCBpbmRleC5cbi8vICAgICAgIDMuIElmIHJhbiBvdXQgb2YgYm91bmRzIG9mIHRoZSBzdHJpbmcsIHN0b3Agc2Nhbm5pbmcgbGVmdCwgbW92ZSB0byBzdGVwIDdcbi8vICAgICAgIDQuIElmIGhpdCBjbG9zaW5nIGJyYWNrZXQsIHNldCBjbG9zaW5nIGJyYWNrZXQgZmxhZyB0byB0cnVlLlxuLy8gICAgICAgNS4gSWYgaGl0IG9wZW5pbmcgYnJhY2tldCwgY2hlY2sgaWYgY2xvc2luZyBicmFja2V0IHdhcyBoaXQgYmVmb3JlOlxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBoaXQsIGNvbnRpbnVlIHNjYW5uaW5nIGFuZCBzZXQgY2xvc2luZyBicmFja2V0IGZsYWcgdG8gZmFsc2UgYWdhaW4uXG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIE5PVCBoaXQsIHN0b3Agc2Nhbm5pbmcgYW5kIG1vdmUgdG8gc3RlcCA3XG4vLyAgICAgICA2LiBJZiBcIitcIiBvciBcIi1cIiBzaWduIHdhcyBoaXQsIGNoZWNrIGlmIGNsb3NpbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZywgc2luY2UgaXQgbWVhbnMgdGhhdCB0aGUgKyBvciAtIHNpZ24gaXMgaW4gYW5vdGhlciBzY29wZVxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nLCBtb3ZlIHJpZ2h0IGJ5IG9uZSBzdGVwIGFuZCByZXNldCBsZWZ0IGJvcmRlciBmbGFnXG4vLyAgICAgICA3LiBTY2FuIHRvIHRoZSByaWdodCBmcm9tIHRoZSBjdXJyZW50IGluZGV4LlxuLy8gICAgICAgOC4gSWYgcmFuIG91dCBvZiBib3VuZHMgb2YgdGhlIHN0cmluZywgc3RvcCBzY2FubmluZyBsZWZ0LCBtb3ZlIHRvIHN0ZXAgMTJcbi8vICAgICAgIDkuIElmIGhpdCBvcGVuaW5nIGJyYWNrZXQsIHNldCBvcGVuaW5nIGJyYWNrZXQgZmxhZyB0byB0cnVlLlxuLy8gICAgICAgMTAuIElmIGhpdCBjbG9zaW5nIGJyYWNrZXQsIGNoZWNrIGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZyBhbmQgc2V0IG9wZW5pbmcgYnJhY2tldCBmbGFnIHRvIGZhbHNlIGFnYWluLlxuLy8gICAgICAgICAgIC0gSWYgb3BlbmluZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCBtb3ZlIHRvIHN0ZXAgMTJcbi8vICAgICAgIDExLiBJZiBcIitcIiBvciBcIi1cIiBzaWduIHdhcyBoaXQsIGNoZWNrIGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZywgc2luY2UgaXQgbWVhbnMgdGhhdCB0aGUgKyBvciAtIHNpZ24gaXMgaW4gYW5vdGhlciBzY29wZVxuLy8gICAgICAgICAgIC0gSWYgb3BlbmluZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCByZXNldCBsZWZ0IGJvcmRlciBmbGFnXG5cbmV4cG9ydCBmdW5jdGlvbiBmaXhTY29wZXMoZ2VuKSB7XG4gICAgbGV0IGcgPSBTdHJpbmcoZ2VuKTtcblxuICAgIC8vIFZhcmlhYmxlIGFyZSB0YWtlbiBvdXRzaWRlIG9mIGZvciBsb29wLCB0byBpbmNyZWFzZSBwZXJmb3JtYW5jZS5cbiAgICAvLyBJbiB0aGlzIHdheSwgdmFyaWFibGVzIGFyZSBqdXN0IHJld3JpdHRlbiBpbiB0aGUgc2FtZSBtZW1vcnlcbiAgICAvLyBsb2NhdGlvbiBpbnN0ZWFkIG9mIGNyZWF0aW5nIG5ldyB2YXJpYWJsZSBldmVyeSB0aW1lLlxuICAgIGxldCBmb3VuZExlZnRCb3JkZXIgPSBmYWxzZTtcbiAgICBsZXQgZm91bmRSaWdodEJvcmRlciA9IGZhbHNlO1xuXG4gICAgbGV0IGp1c3RIaXRPcGVuaW5nQnJhY2tldCA9IGZhbHNlO1xuICAgIGxldCBqdXN0SGl0Q2xvc2luZ0JyYWNrZXQgPSBmYWxzZTtcblxuICAgIGxldCBsZWZ0O1xuICAgIGxldCByaWdodDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZ1tpXSA9PT0gXCIqXCIgfHwgZ1tpXSA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgIC8vIFNjYW4gbGVmdFxuICAgICAgICAgICAgZm9yIChsZWZ0ID0gaTsgIWZvdW5kTGVmdEJvcmRlcjsgbGVmdC0tKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhpdCB0aGUgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgbGVmdCBzdHJpbmcgd2FsbFxuICAgICAgICAgICAgICAgIGlmIChsZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCBzZXQgZm91bmRMZWZ0Qm9yZGVyIHZhcmlhYmxlIHRvIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIGlmIGJvdGggc2lkZXMgYXJlIGJyYWNrZXRzIG9yIG91dGVyIHdhbGxzIG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdHJpbmcsIG5ldyBicmFja2V0cyBzaG91bGQgbm90IGJlIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgaGl0cyBvcGVuaW5nIGJyYWNrZXQsIGl0IGNoZWNrcyBpZiBpdCBoaXQgY2xvc2luZyBicmFja2V0IGJlZm9yZVxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdENsb3NpbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0SGl0Q2xvc2luZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYXJrcyB0aGF0IGl0IGhpdCBjbG9zaW5nIGJyYWNrZXQsIHNvIHRoYXQgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgbGF0ZXIsXG4gICAgICAgICAgICAgICAgLy8gaXQga25vd3MgdGhhdCBpdCBzaG91bGRuJ3QgXG4gICAgICAgICAgICAgICAgaWYgKGdbbGVmdF0gPT09IFwiKVwiKSBqdXN0SGl0Q2xvc2luZ0JyYWNrZXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gRXhpdCBzY2FubmluZyBsb29wIGlmIGhpdCBwbHVzIG9yIG1pbnVzXG4gICAgICAgICAgICAgICAgLy8gQWxzbywgbW92ZSByaWdodCwgc28gdGhhdCBicmFja2VzIGlzIGluc2VydGVkIGFmdGVyICsgb3IgLSBzaWduXG4gICAgICAgICAgICAgICAgaWYgKGdbbGVmdF0gPT09IFwiK1wiIHx8IGdbbGVmdF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0Q2xvc2luZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRMZWZ0Qm9yZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTY2FuIHJpZ2h0XG4gICAgICAgICAgICBmb3IgKHJpZ2h0ID0gaTsgIWZvdW5kUmlnaHRCb3JkZXI7IHJpZ2h0KyspIHtcbiAgICAgICAgICAgICAgICAvLyBFeGl0IHRoZSBzY2FubmluZyBsb29wIGlmIGhpdCByaWdodCBzdHJpbmcgd2FsbCBvciBjbG9zaW5nIGJyYWNrZXRcbiAgICAgICAgICAgICAgICBpZiAocmlnaHQgPj0gZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCBzZXQgZm91bmRSaWdodEJvcmRlciB2YXJpYWJsZSB0byB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpZiBib3RoIHNpZGVzIGFyZSBicmFja2V0cyBvciBvdXRlciB3YWxscyBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RyaW5nLCBuZXcgYnJhY2tldHMgc2hvdWxkIG5vdCBiZSBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGhpdHMgY2xvc2luZyBicmFja2V0LCBpdCBjaGVja3MgaWYgaXQgaGl0IG9wZW5pbmcgYnJhY2tldCBiZWZvcmVcbiAgICAgICAgICAgICAgICBpZiAoZ1tyaWdodF0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0T3BlbmluZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RIaXRPcGVuaW5nQnJhY2tldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1hcmtzIHRoYXQgaXQgaGl0IGNsb3NpbmcgYnJhY2tldCwgc28gdGhhdCBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBsYXRlcixcbiAgICAgICAgICAgICAgICAvLyBpdCBrbm93cyB0aGF0IGl0IHNob3VsZG4ndCBcbiAgICAgICAgICAgICAgICBpZiAoZ1tyaWdodF0gPT09IFwiKFwiKSBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIitcIiB8fCBnW3JpZ2h0XSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRPcGVuaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFJpZ2h0Qm9yZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgb24gb25lIG9mIHRoZSBzaWRlcyB0aGVyZSBpcyArIG9yIC0gc2lnblxuICAgICAgICAgICAgaWYgKGZvdW5kTGVmdEJvcmRlciB8fCBmb3VuZFJpZ2h0Qm9yZGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gU2xpY2Ugb3JpZ2luYWwgc3RyaW5nIGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgbGV0IG9uZSA9IGcuc2xpY2UoMCwgbGVmdCk7XG4gICAgICAgICAgICAgICAgbGV0IHR3byA9IGcuc2xpY2UobGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIGxldCB0aHJlZSA9IGcuc2xpY2UocmlnaHQsIGcubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIC8vIEluc2VydCBicmFja2V0cyBiZXR3ZWVuIGZvcm1lciB0aHJlZSBzdHJpbmdzIHRvIGZvcm1cbiAgICAgICAgICAgICAgICAvLyBuZXcgc3RyaW5nIHdpdGggaW5zZXJ0ZWQgYnJhY2tldHNcbiAgICAgICAgICAgICAgICBnID0gb25lICsgXCIoXCIgKyB0d28gKyBcIilcIiArIHRocmVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXNldCBib3JkZXIgdmFyaWFibGVzXG4gICAgICAgICAgICBmb3VuZExlZnRCb3JkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvdW5kUmlnaHRCb3JkZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBnO1xufSIsImltcG9ydCB7XG4gICAgZ2V0VW5jYWxjdWxhdGVkTm9kZXMsXG4gICAgZ2VuZXJhdGVDb25uZWN0aW9uRGljdGlvbmFyeSxcbiAgICBvYmplY3RTaXplLFxuICAgIHdhc0NhbGN1bGF0ZWQsXG4gICAgYWxsSW5wdXRzQ2FsY3VsYXRlZCxcbiAgICBjYWxjdWxhdGVPdXRwdXQsXG4gICAgZ2V0VG91Y2hJbnB1dHMsXG4gICAgaW5pdFRpbWUsXG4gICAgZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzLFxuICAgIGdldE90aGVyU2lkZU9mQ29ubmVjdG9yXG59IGZyb20gJy4vc2NyaXB0R2VuZXJhdG9yRnVuY3Rpb25zJztcblxuY29uc3QgU0FNUExFX1JBVEUgPSA1MDA7IC8vIFNhbXBsZXMgcGVyIHNlY29uZFxuXG5leHBvcnQgZnVuY3Rpb24gc2NyaXB0R2VuZXJhdG9yKGFsbE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdKSB7XG4gICAgLy8gRXhlY3V0YWJsZSB0byBzdG9yZSBnZW5lcmF0ZWQgamF2YXNjcmlwdCBjb2RlLiBBbnkgaW5pdGlhbGlzYXRpb24gY29kZSBzaG91bGQgYmUgaGVyZS5cbiAgICBsZXQgZXhlQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IGV4ZWN1dGFibGUgPSBcInZhciBncmFwaHMgPSB7fTtcXG5cIjtcblxuICAgIC8vIFNldHVwIHRpbWVcbiAgICBleGVjdXRhYmxlICs9IGluaXRUaW1lKC0xLCAxLCAxL1NBTVBMRV9SQVRFKTtcblxuICAgIC8vIENhbGN1bGF0ZWQgbm9kZXMgaGF2ZSBmb2xsb3dpbmcgc2hhcGU6IFwibm9kZUlkOm91dHB1dElkXCJcbiAgICBsZXQgY2FsY3VsYXRlZE5vZGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgLy8gU3RhdGlzdGljcyBvYmplY3RcbiAgICBsZXQgc3RhdGlzdGljcyA9IHtcbiAgICAgICAgbG9vcENvdW50ZXI6IDAsXG4gICAgICAgIGluaXRpYWxUb3RhbE5vZGVzOiBvYmplY3RTaXplKGFsbE5vZGVzKSxcbiAgICAgICAgaW5pdGlhbFRvdGFsQ29ubmVjdG9yczogYWxsQ29ubmVjdGlvbnMubGVuZ3RoLFxuICAgICAgICBzdGFydFRpbWU6IDAsXG4gICAgICAgIGVuZFRpbWU6IDBcbiAgICB9O1xuXG4gICAgLy8gU2VwYXJhdGVzIHVuY2FsY3VsYXRlZCBub2RlcyBmcm9tIHNjb3BlcyBhbmQgVUkgYXQgdGhlIHN0YXJ0LlxuICAgIGxldCB7IHVuY2FsY3VsYXRlZE5vZGVzLCBhbGxTY29wZXMsIHVpTm9kZXMgfSA9IGdldFVuY2FsY3VsYXRlZE5vZGVzKGFsbE5vZGVzKTtcblxuICAgIC8vIFNlcGFyYXRlIHRvdWNoIG5vZGVzIGZvcm0gcmVndWxhciBub2Rlc1xuICAgIGxldCB0b3VjaE5vZGVzU2VwYXJhdGVkID0gZ2V0VG91Y2hJbnB1dHModW5jYWxjdWxhdGVkTm9kZXMpO1xuXG4gICAgdW5jYWxjdWxhdGVkTm9kZXMgPSB0b3VjaE5vZGVzU2VwYXJhdGVkLnVuY2FsY3VsYXRlZE5vZGVzO1xuXG4gICAgLy8gRGVhbCB3aXRoIHRvdWNoIENvbnRyb2xzXG4gICAgbGV0IHRvdWNoTm9kZXMgPSB0b3VjaE5vZGVzU2VwYXJhdGVkLnRvdWNoTm9kZXM7XG5cbiAgICBleGVjdXRhYmxlICs9IGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyh0b3VjaE5vZGVzKTtcblxuICAgIGZvciAobGV0IHQgaW4gdG91Y2hOb2Rlcykge1xuICAgICAgICBmb3IgKGxldCBvIGluIHRvdWNoTm9kZXNbdF0ub3V0cHV0cykge1xuICAgICAgICAgICAgY2FsY3VsYXRlZE5vZGVzLnB1c2goYCR7dH06JHt0b3VjaE5vZGVzW3RdLm91dHB1dHNbb10udGl0bGV9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbm5lY3Rpb24gRGljdGlvbmFyeSBjb250YWlucyBjb25uZWN0aW9ucyBpbiBrZXk6IHZhbHVlIGZvcm1hdCwgd2hlcmVcbiAgICAvLyBib3RoIGNvbnRhaW4gbm9kZUlkIGFuZCBzZXR0aW5nSWQgYXMgc3RyaW5ncyBzZXBhcmF0ZWQgYnkgYSBjb2xvbi5cbiAgICBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnkgPSBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5KGFsbENvbm5lY3Rpb25zKTtcblxuICAgIC8vIEdlbmVyYWwgcnVsZXMgZm9yIGFsZ29yaXRobSB3cml0aW5nOlxuICAgIC8vICogdXNlIGFzIG1hbnkgZnVuY3Rpb25zIGFzIHBvc3NpYmxlIChpbiBwZXJmb3JtYW5jZSBib3VuZHMpXG4gICAgLy8gKiBcblxuICAgIC8vIDAuIExvb3AgdGhyb3VnaCB1bmNhbGN1bGF0ZWQgbm9kZXMgYW5kIGZpbmQgc2NvcGVzLiBTY29wZXMgZG8gbm90IGhhdmUgb3V0cHV0cywgc28gbm8gbmVlZCB0byBmaW5kIGlucHV0cy5cbiAgICAvLyAwLjAgRG8gaXQgaW4gYSBmdW5jdGlvbj9cblxuICAgIC8vIDEuIExvb3AgdW50aWwgYWxsIG5vZGVzIGFyZSBjYWxjdWxhdGVkXG4gICAgLy8gfCAgIDEuIENoZWNrIGlmIG5vZGUgd2FzIGNhbGN1bGF0ZWQgYmVmb3JlLCBpZiB5ZXMgZ28gdG8gbmV4dCBub2RlLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIDIuIElmIHdhcyBub3QgY2FsY3VsYXRlZDpcbiAgICAvLyB8ICAgfCAgIDEuIENoZWNrIGlmIGFsbCBjb25uZWN0ZWQgaW5wdXRzIGFyZSBjb25uZWN0ZWQgdG8gdGhlIGNhbGN1bGF0ZWQgbm9kZXMsIGlmIG5vdCAtIGdvIHRvIG5leHQgbm9kZS4gKGZ1bmN0aW9uKVxuICAgIC8vIHwgICB8ICAgMi4gSWYgeWVzLCBzYXZlIGFsbCB1bmNvbm5lY3RlZCBpbnB1dHMgKHZhbHVlIGZyb20gZGVmYXVsdCB2YWx1ZSkuIChmdW5jdGlvbiBmb3IgZWFjaCBzYXZlKVxuICAgIC8vIHwgICB8ICAgMy4gQ2hlY2sgaWYgb3V0cHV0IGlzIHBvaW50aW5nIHRvIGEgZ2VuZXJhdG9yLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIHwgICA0LiBJZiB5ZXMsIHBhcnNlIGdlbmVyYXRvclxuICAgIC8vIHwgICB8ICAgfCAgIDEuIFNjYW4gZ2VuZXJhdG9yIGFuZCBzYXZlIHZhcmlhYmxlc1xuICAgIC8vIHwgICB8ICAgfCAgIDIuIElmIHZhcmlhYmxlIGlzIGEgZ2VuZXJhdG9yIGdvIHRvIHN0ZXAgMS4yLjRcbiAgICAvLyB8ICAgfCAgIHwgICAzLiBMb29wIHVudGlsIGFsbCBnZW5lcmF0b3JzIHdlcmUgcGFyc2VkXG4gICAgLy8gfCAgIHwgICB8IC0tLS0tLS0tLS0tIEluIGZvbGxvd2luZywgaW5wdXRzIGFyZSBjaGVja2VkIGZpcnN0IHNpbmNlIHNldHRpbmcgY2FuIGJlIGFuIGlucHV0IC0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB8ICAgfCAgIDUuIENoZWNrIGlmIG91dHB1dCBpcyBwb2ludGluZyB0byBhbiBpbnB1dCwgaWYgeWVzIGFzc2lnbiBpbnB1dCB2YXJpYWJsZSB0byB0aGUgb3V0cHV0IHZhcmlhYmxlXG4gICAgLy8gfCAgIHwgICA2LiBDaGVjayBpZiBvdXRwdXQgaXMgcG9pbnRpbmcgdG8gYSBzZXR0aW5nLCBpZiB5ZXMgYXNzaWduIGNvbnN0YW50IHRvIHRoZSBzZXR0aW5nXG4gICAgLy8gMi4gRm9yIGVhY2ggc2NvcGU6XG4gICAgLy8gfCAgIDEuIEdldCBhbGwgaW5wdXRzIGFuZCBzYXZlIHRoZW0gaW4gdmFyaWFibGVzIChhc3N1bWVkIHRvIGJlIGNhbGN1bGF0ZWQgc2luY2UgdGVybWluYXRpb24gY29uZGl0aW9uIGZyb20gc3RlcCAxIGlzIGJhc2VkIG9uIGFsbCBub2RlcyBiZWluZyBjYWxjdWxhdGVkLilcbiAgICAvLyB8ICAgMi4gUGFyc2UgZmlyc3QgZ2VuZXJhdG9yIGFuZCBnZW5lcmF0ZSBzY29wZSBvdXRwdXQgdmFyaWFibGUgKG1ha2luZyBzdXJlIHRoYXQgYWxsIHZhcmlhYmxlcyBmcm9tIGdlbmVyYXRvciB3ZXJlIHNhdmVkIGJlZm9yZWhhbmQpXG4gICAgLy8gfCAgIDMuIEdlbmVyYXRlIGFuIGFycmF5IG9mIG91dHB1dCBkYXRhIGJhc2VkIG9uIGdlbmVyYWwgKG9yIGNvbm5lY3RlZCkgdGltZSBhcnJheSBhbmQgc2F2ZSBpdCBpbnRvIGEgdmFyaWFibGVcbiAgICAvLyB8ICAgNC4gQ3JlYXRlIHJlZHJhdyBmdW5jdGlvbiwgaW5zaWRlIHRoYXQgZnVuY3Rpb246XG4gICAgLy8gfCAgIHwgICAxLiBGaW5kIGFwcHJvcHJpYXRlIGNhbnZhcyBub2RlIGluIHRoZSBkb21cbiAgICAvLyB8ICAgfCAgIDIuIEdldCBjb250ZXh0XG4gICAgLy8gfCAgIHwgICAzLiBSZXBvcHVsYXRlIGdyYXBoIGFycmF5IHdpdGggbmV3IGdyYXBocy5cbiAgICAvLyB8ICAgNS4gQ3JlYXRlIHVwZGF0ZURhdGEgZnVuY3Rpb24sIGluc2lkZSB0aGF0IGZ1bmN0aW9uOlxuICAgIC8vIHwgICB8ICAgMS4gTG9vcCB0aHJvdWdoIGdyYXBoIGFycmF5IGFuZCB1cGRhdGUgZ3JhcGhzIHdpdGggbmV3IGRhdGEuXG5cblxuICAgIC8vIDAuMCBMb29wIHRocm91Z2ggYWxsIHVpIG5vZGVzIGFuZCBzYXZlIHRoZWlyIG91dHB1dCB2YXJpYWJsZSBuYW1lc1xuICAgIGZvcihsZXQgbm9kZUtleSBpbiB1aU5vZGVzKSB7XG4gICAgICAgIC8vIFNhdmUgY3VycmVudCBub2RlIGludG8gYSBjb25zdGFudFxuICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHVpTm9kZXNbbm9kZUtleV07XG4gICAgICAgIGNvbnN0IG91dHB1dEtleSA9IGN1cnJlbnROb2RlLm91dHB1dHNbMF0udGl0bGU7XG5cbiAgICAgICAgZXhlY3V0YWJsZSArPSBgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke25vZGVLZXl9SW5wdXRcIikub25pbnB1dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAke25vZGVLZXl9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7bm9kZUtleX1JbmRpY2F0b3JcIikuaW5uZXJUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfTtcXG5gO1xuICAgICAgICBleGVjdXRhYmxlICs9IGB2YXIgJHtub2RlS2V5fSR7b3V0cHV0S2V5fSA9IGZ1bmN0aW9uICh0KSB7IHJldHVybiAke3VpTm9kZXNbbm9kZUtleV0uc2V0dGluZ3NbM10udmFsdWV9fTtcXG5gO1xuXG4gICAgICAgIGNhbGN1bGF0ZWROb2Rlcy5wdXNoKGAke25vZGVLZXl9OiR7b3V0cHV0S2V5fWApO1xuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuICAgIH1cbiAgICAvLyAxLiBMb29wIHVudGlsIGFsbCBub2RlcyBhcmUgY2FsY3VsYXRlZCBhbmQgY291bnQgbnVtYmVyIG9mIGl0ZXJhdGlvbnMgZm9yIHN0YXRpc3RpY3NcbiAgICBmb3IgKHN0YXRpc3RpY3MubG9vcENvdW50ZXIgPSAwOyBvYmplY3RTaXplKHVuY2FsY3VsYXRlZE5vZGVzKSA+IDA7IHN0YXRpc3RpY3MubG9vcENvdW50ZXIrKykge1xuICAgICAgICBcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB1bmNhbGN1bGF0ZWQgbm9kZXNcbiAgICAgICAgZm9yIChsZXQgbm9kZUtleSBpbiB1bmNhbGN1bGF0ZWROb2Rlcykge1xuICAgICAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG5vZGUgaW50byBhIGNvbnN0YW50XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuXG4gICAgICAgICAgICAvLyBHbyB0byBuZXh0IG5vZGUgaWYgbm90IGFsbCBjb25uZWN0ZWQgaW5wdXRzIHdlcmUgY2FsY3VsYXRlZCBhbHJlYWR5XG4gICAgICAgICAgICBpZiAoIWFsbElucHV0c0NhbGN1bGF0ZWQobm9kZUtleSwgY3VycmVudE5vZGUuaW5wdXRzLCBhbGxDb25uZWN0aW9ucywgY2FsY3VsYXRlZE5vZGVzKSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZUNhbGN1bGF0ZWRPdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggZXZlcnkgb3V0cHV0IG9mIHRoZSBub2RlIHRvIGNhbGN1bGF0ZSB0aGVtXG4gICAgICAgICAgICBmb3IgKGxldCBvID0gMDsgbyA8IGN1cnJlbnROb2RlLm91dHB1dHMubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRLZXkgPSBjdXJyZW50Tm9kZS5vdXRwdXRzW29dLnRpdGxlO1xuICAgICAgICAgICAgICAgIC8vIElmIGN1cnJlbnQgb3V0cHV0IHdhcyBjYWxjdWxhdGVkIGFscmVhZHksIHNraXAgdG8gbmV4dCBvbmVcbiAgICAgICAgICAgICAgICBpZiAod2FzQ2FsY3VsYXRlZChjYWxjdWxhdGVkTm9kZXMsIG5vZGVLZXksIG91dHB1dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0cy5wdXNoKGAke25vZGVLZXl9OiR7b3V0cHV0S2V5fWApO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBub3QsIGNhbGN1bGF0ZSBpdCBhbmQgYXBwZW5kIHRvIHRoZSBleGVjdXRhYmxlIHRleHQuXG4gICAgICAgICAgICAgICAgbGV0IHsgZXhlLCB3YXNTdWNjZXNzZnVsIH0gPSBjYWxjdWxhdGVPdXRwdXQobm9kZUtleSwgb3V0cHV0S2V5LCBjdXJyZW50Tm9kZSwgYWxsQ29ubmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmICh3YXNTdWNjZXNzZnVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWN1dGFibGUgKz0gZXhlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWROb2Rlcy5wdXNoKGAke25vZGVLZXl9OiR7b3V0cHV0S2V5fWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCBnZW5lcmF0ZSBvdXRwdXQgY29kZTogJHtub2RlS2V5fSAtICR7b3V0cHV0S2V5fSB8IHNjcmlwdEdlbmVyYXRvci50c2ApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0cy5sZW5ndGggPT09IGN1cnJlbnROb2RlLm91dHB1dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gTG9vcCB0aHJvdWdoIGFsbCBzY29wZXMgYW5kIGRyYXcgZ3JhcGhzXG5cbiAgICBleGVBcnJheS5wdXNoKGV4ZWN1dGFibGUpO1xuICAgIGV4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZXhlY3V0YWJsZSArPSBcImZ1bmN0aW9uIHVwZGF0ZSgpIHtcXG5cIjtcblxuICAgIGZvciAobGV0IHMgaW4gYWxsU2NvcGVzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29wZSA9IGFsbFNjb3Blc1tzXTtcblxuICAgICAgICAvLyBjb25zdCBvdXRwdXRHZW5lcmF0b3IgPSBjdXJyZW50U2NvcGUuZ2VuZXJhdG9yc1swXTtcblxuICAgICAgICAvLyBjb25zdCBvdXRwdXRUb2tlbnMgPSB0b2tlbml6ZUdlbmVyYXRvcihvdXRwdXRHZW5lcmF0b3IudmFsdWUsIHMpO1xuXG4gICAgICAgIGNvbnN0IHsgb3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkIH0gPSBnZXRPdGhlclNpZGVPZkNvbm5lY3RvcihhbGxDb25uZWN0aW9ucywgbnVsbCwgeyBub2RlSWQ6IHMsIHNldHRpbmdJZDogXCJzaWduYWxcIiB9KTtcblxuICAgICAgICBleGVjdXRhYmxlICs9IGBcbiAgICAgICAgICAgIGlmKGdyYXBocy4ke3N9KSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge25ld0RhdGEucHVzaCgke290aGVyTm9kZUlkfSR7b3RoZXJTZXR0aW5nSWR9KHRbaV0pKTt9XG4gICAgICAgICAgICAgICAgZ3JhcGhzLiR7c30uZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgICAgICAgICBncmFwaHMuJHtzfS51cGRhdGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhc05vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7c31cIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgdmlld1NpemUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogY2FudmFzTm9kZS5wYXJlbnROb2RlLm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXNOb2RlLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAgICAgICAgIHZhciB3ID0gdmlld1NpemUueDtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHZpZXdTaXplLnkgLyAke29iamVjdFNpemUoYWxsU2NvcGVzKX07XG5cbiAgICAgICAgICAgICAgICBjYW52YXNOb2RlLndpZHRoID0gdztcbiAgICAgICAgICAgICAgICBjYW52YXNOb2RlLmhlaWdodCA9IGg7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKCR7b3RoZXJOb2RlSWR9JHtvdGhlclNldHRpbmdJZH0odFtpXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7bGFiZWxzOiB0Lm1hcCh0aSA9PiB0aS50b0ZpeGVkKDIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaWduYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnJHtzY29wZUNvbG9yKGN1cnJlbnRTY29wZS5zZXR0aW5nc1sxXS52YWx1ZSl9JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbnNpb246IDAuNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcHBlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpdFJhZGl1czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJSYWRpdXM6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0ke2N1cnJlbnRTY29wZS5zZXR0aW5nc1swXS52YWx1ZSA9PSBcInRydWVcIiA/ICcnIDogYCwgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFNpemU6IDAuMDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dLCB5QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAwLjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH0ke2dlbmVyYXRlVGl0bGUoY3VycmVudFNjb3BlLnNldHRpbmdzWzJdKX1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgIGdyYXBocy4ke3N9ID0gbXlDaGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgICBleGVBcnJheS5wdXNoKGV4ZWN1dGFibGUpO1xuICAgICAgICBleGVjdXRhYmxlID0gXCJcIjtcbiAgICB9XG5cbiAgICBleGVjdXRhYmxlICs9IFwifTtcXG5cIlxuICAgIGV4ZWN1dGFibGUgKz0gXCJ1cGRhdGUoKTtcIlxuXG4gICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICBleGVjdXRhYmxlID0gXCJcIjtcblxuICAgIC8vIHJldHVybiBVZ2xpZnlKUy5taW5pZnkoZXhlY3V0YWJsZSk7XG5cbiAgICByZXR1cm4gZXhlQXJyYXk7XG59XG5cblxuZnVuY3Rpb24gc2NvcGVDb2xvcihjb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY29sb3I7XG4gICAgXG4gICAgc3dpdGNoIChjb2xvcikge1xuICAgICAgICBjYXNlIFwicmVkXCI6IHJldHVybiAncmdiKDI1NSwgMTIwLCAxMzIpJztcbiAgICAgICAgY2FzZSBcImJsdWVcIjogcmV0dXJuICdyZ2IoMTMyLCAxMjAsIDI1NSknO1xuICAgICAgICBjYXNlIFwiZ3JlZW5cIjogcmV0dXJuICdyZ2IoNTAsIDIxMCwgNjApJztcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICdyZ2IoMjU1LCAxMjAsIDEzMiknO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUaXRsZShzZXR0aW5nOiBOb2RlU2V0dGluZ3NTaGFwZSk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChzZXR0aW5nLnRpdGxlKSB7XG4gICAgICAgIGNhc2UgXCJcIjogcmV0dXJuIFwiXCI7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiAoYCwgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6ICcke3NldHRpbmcudmFsdWV9JyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnXG4gICAgICAgICAgICB9YClcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyB0b2tlbml6ZUdlbmVyYXRvciwgR2VuZXJhdG9yU2VnbWVudCB9IGZyb20gJy4vZ2VuZXJhdG9yVG9rZW5pemVyJztcbmltcG9ydCB7IHRva2VuVG9KcyB9IGZyb20gJy4vdG9rZW5Ub0pzJztcblxuLy8gR2V0IGFsbCBub2RlcyB0aGF0IGFyZSBub3Qgc2NvcGVzLCBhbmQgc2F2ZSBzY29wZXMgaW50byB0aGVpciBvd24gY29sbGVjdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuY2FsY3VsYXRlZE5vZGVzIChhbGxOb2RlczogTm9kZUNvbGxlY3Rpb24pIDoge3VuY2FsY3VsYXRlZE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgYWxsU2NvcGVzOiBOb2RlQ29sbGVjdGlvbiwgdWlOb2RlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgdW5jYWxjdWxhdGVkOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCBzY29wZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG4gICAgbGV0IHVpTm9kZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG5cbiAgICBmb3IobGV0IGkgaW4gYWxsTm9kZXMpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBVSSBub2RlXG4gICAgICAgIGNvbnN0IGlzVGhpcmRMZXR0ZXJVcHBlckNhc2UgPSBTdHJpbmcoaSkuc3Vic3RyKDIsIDEpLnRvVXBwZXJDYXNlKCkgPT09IFN0cmluZyhpKS5zdWJzdHIoMiwgMSk7XG4gICAgICAgIGNvbnN0IGlzVUkgPSBTdHJpbmcoaSkuc3Vic3RyKDAsIDIpID09PSBcInVpXCI7XG4gICAgICAgIGNvbnN0IGlzQWN0dWFsVUkgPSBpc1VJICYmIGlzVGhpcmRMZXR0ZXJVcHBlckNhc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBzY29wZVxuICAgICAgICBjb25zdCBpc1Njb3BlID0gU3RyaW5nKGkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiO1xuXG4gICAgICAgIC8vIERvIHNlcGFyYXRpb25cbiAgICAgICAgaWYoaXNTY29wZSkge1xuICAgICAgICAgICAgc2NvcGVzW2ldID0gYWxsTm9kZXNbaV07XG4gICAgICAgIH0gZWxzZSBpZihpc0FjdHVhbFVJKSB7XG4gICAgICAgICAgICB1aU5vZGVzW2ldID0gYWxsTm9kZXNbaV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bmNhbGN1bGF0ZWRbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiByZXN1bHRzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IHVuY2FsY3VsYXRlZCxcbiAgICAgICAgYWxsU2NvcGVzOiBzY29wZXMsXG4gICAgICAgIHVpTm9kZXM6IHVpTm9kZXNcbiAgICB9O1xufVxuXG4vLyBHZW5lcmF0ZSBjb25uZWN0aW9uIGRpY3Rpb25hcnlcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5IChhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10pOiB7W2Nvbm5lY3RvclN0YXJ0OiBzdHJpbmddOiBzdHJpbmd9IHtcbiAgICBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnk6IHtbY29ubmVjdG9yU3RhcnQ6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb25uZWN0b3JTdGFydCA9IGFsbENvbm5lY3Rpb25zW2ldLmNvbm5lY3RvclN0YXJ0O1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmQgPSBhbGxDb25uZWN0aW9uc1tpXS5jb25uZWN0b3JFbmQ7XG5cbiAgICAgICAgY29uc3QgY29ubmVjdG9yU3RhcnRDb21iaW5lZCA9IGNvbm5lY3RvclN0YXJ0Lm5vZGVJZCArIFwiOlwiICsgY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkO1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmRDb21iaW5lZCA9IGNvbm5lY3RvckVuZC5ub2RlSWQgKyBcIjpcIiArIGNvbm5lY3RvckVuZC5zZXR0aW5nSWQ7XG5cbiAgICAgICAgY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdG9yU3RhcnRDb21iaW5lZF0gPSBjb25uZWN0b3JFbmRDb21iaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29ubmVjdGlvbkRpY3Rpb25hcnk7XG59XG5cbi8vIENhbGN1bGF0ZSBvYmplY3Qgc2l6ZVxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFNpemUgKG9iajogb2JqZWN0KTogbnVtYmVyIHtcbiAgICBsZXQgYyA9IDA7XG4gICAgZm9yKGxldCBpIGluIG9iaikgYysrO1xuICAgIHJldHVybiBjKys7XG59XG5cbi8vIENoZWNrIGlmIG5vZGUgd2FzIGNhbGN1bGF0ZWQgYWxyZWFkeVxuZXhwb3J0IGZ1bmN0aW9uIHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzOiBzdHJpbmdbXSwgbm9kZUtleTogc3RyaW5nLCBvdXRwdXRLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYWxjdWxhdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU3BsaXQgc3RyaW5nIGZyb20gY2FsY3VsYXRlZCBub2RlcyBhcnJheSBhbmQgZ2V0IG5vZGUgYW5kIG91dHB1dCBrZXlzXG4gICAgICAgIGNvbnN0IHNwbGl0dGVkID0gY2FsY3VsYXRlZE5vZGVzW2ldLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE5vZGUgPSBzcGxpdHRlZFswXTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE91dHB1dCA9IHNwbGl0dGVkWzFdO1xuXG4gICAgICAgIGlmKGNhbGN1bGF0ZWROb2RlID09PSBub2RlS2V5ICYmIGNhbGN1bGF0ZWRPdXRwdXQgPT09IG91dHB1dEtleSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBHZXQgbm9kZUlkIGFuZCBzZXR0aW5nSWQgb2YgdGhlIG90aGVyIHNpZGUgb2YgdGhlIGNvbm5lY3Rpb246XG5leHBvcnQgZnVuY3Rpb24gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoXG4gICAgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBcbiAgICBjb25uZWN0b3JJbnB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9LFxuICAgIGNvbm5lY3Rvck91dHB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9KToge290aGVyTm9kZUlkOiBzdHJpbmcsIG90aGVyU2V0dGluZ0lkOiBzdHJpbmd9IHtcblxuICAgIGlmKGNvbm5lY3RvcklucHV0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgY29ubmVjdG9yIHN0YXJ0cy4uLlwiKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RvciA9IGFsbENvbm5lY3Rpb25zW2ldO1xuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIHN0YXJ0XG4gICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQubm9kZUlkID09PSBjb25uZWN0b3JJbnB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkID09PSBjb25uZWN0b3JJbnB1dC5zZXR0aW5nSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZUlkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyU2V0dGluZ0lkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChjb25uZWN0b3JPdXRwdXQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTY2FubmluZyBjb25uZWN0b3IgZW5kcy4uLiBcIiwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29ubmVjdG9yID0gYWxsQ29ubmVjdGlvbnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ29tcGFyaW5nIGZvbGxvd2luZyBjb25uZWN0b3JzOiBcIiwgY29ubmVjdG9yLmNvbm5lY3RvckVuZCwgY29ubmVjdG9yT3V0cHV0KVxuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIGVuZFxuICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvckVuZC5ub2RlSWQgPT09IGNvbm5lY3Rvck91dHB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZCA9PT0gY29ubmVjdG9yT3V0cHV0LnNldHRpbmdJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclNldHRpbmdJZDogY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0LnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3RoZXJOb2RlSWQ6IG51bGwsXG4gICAgICAgIG90aGVyU2V0dGluZ0lkOiBudWxsXG4gICAgfVxufVxuXG5cbi8vIENoZWNrIGlmIGFsbCBjb25uZWN0ZWQgaW5wdXRzIGluIHRoZSBub2RlIGFyZSBjb25uZWN0ZWQgdG8gdGhlIG91dHB1dHMgdGhhdCB3ZXJlIGFscmVhZHkgY2FsY3VsYXRlZCBvciBhcmUgbm90IGNvbm5lY3RlZFxuZXhwb3J0IGZ1bmN0aW9uIGFsbElucHV0c0NhbGN1bGF0ZWQobm9kZUlkOiBzdHJpbmcsIGlucHV0czogTm9kZUlucHV0U2hhcGVbXSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgbGV0IGRhdGE6IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudERhdGEgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7bm9kZUlkOiBub2RlSWQsIHNldHRpbmdJZDogaW5wdXRzW2ldLnRpdGxlfSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGNvbm5lY3RlZFxuICAgICAgICBpZihvdGhlck5vZGVJZCAmJiBvdGhlclNldHRpbmdJZCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2FzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIGlmKHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzLCBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIG5vdCBjb25uZWN0ZWRcbiAgICAgICAgICAgIGN1cnJlbnREYXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaChjdXJyZW50RGF0YSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBkIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGFbZF0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIHNwZWNpZmljIG91dHB1dCBvZiB0aGUgbm9kZVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU91dHB1dChcbiAgICBub2RlSWQ6IHN0cmluZywgXG4gICAgb3V0cHV0S2V5OiBzdHJpbmcsIFxuICAgIGN1cnJlbnROb2RlOiBTaWduYWxOb2RlLFxuICAgIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHsgZXhlOiBzdHJpbmcsIHdhc1N1Y2Nlc3NmdWw6IGJvb2xlYW4gfSB7XG4gICAgXG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgY29uc3QgZ2VuZXJhdG9ySWQgPSBpc0dlbmVyYXRvcihjdXJyZW50Tm9kZSwgb3V0cHV0S2V5KTtcblxuICAgIC8vIENoZWNrIGlmIG91dHB1dCBpcyBhIGdlbmVyYXRvclxuICAgIGlmKGdlbmVyYXRvcklkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBjb25zdCBvdXRwdXRHZW5lcmF0b3IgPSBjdXJyZW50Tm9kZS5nZW5lcmF0b3JzW2dlbmVyYXRvcklkXTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSB0b2tlbnNcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdG9rZW5pemVHZW5lcmF0b3Iob3V0cHV0R2VuZXJhdG9yLnZhbHVlLCBub2RlSWQpO1xuXG4gICAgICAgIC8vIFNhdmUgdmFyaWFibGVzIGZpcnN0XG4gICAgICAgIGUgKz0gc2F2ZVZhcmlhYmxlcyhub2RlSWQsIGN1cnJlbnROb2RlLCB0b2tlbnMsIGFsbENvbm5lY3Rpb25zKTtcblxuICAgICAgICAvLyBTYXZlIG91dHB1dFxuICAgICAgICBlICs9IHRva2VuVG9Kcyhub2RlSWQsIG91dHB1dEdlbmVyYXRvci50aXRsZSwgdG9rZW5zKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRJZCA9IGlzSW5wdXQoY3VycmVudE5vZGUsIG91dHB1dEtleSk7XG5cbiAgICBpZihpbnB1dElkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IHNhdmVJbnB1dFZhcmlhYmxlKGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUlkLCBvdXRwdXRLZXksIGlucHV0SWQpO1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZUlkfSR7Y3VycmVudE5vZGUuaW5wdXRzW2lucHV0SWRdLnRpdGxlfX07XFxuYDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dGluZ0lkID0gaXNTZXR0aW5nKGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuXG4gICAgaWYoc2V0dGluZ0lkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7Y3VycmVudE5vZGUuc2V0dGluZ3Nbc2V0dGluZ0lkXS52YWx1ZX19O1xcbmA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4ZTogZSxcbiAgICAgICAgICAgIHdhc1N1Y2Nlc3NmdWw6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGV4ZTogXCJcIixcbiAgICAgICAgd2FzU3VjY2Vzc2Z1bDogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVWYXJpYWJsZXMobm9kZUtleTogc3RyaW5nLCBub2RlOiBTaWduYWxOb2RlLCBjb2RlOiBHZW5lcmF0b3JTZWdtZW50W10sIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBzID0gMDsgcyA8IGNvZGUubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgaWYoY29kZVtzXS50eXBlID09PSBcInZhclwiKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJOYW1lOiBzdHJpbmcgPSBTdHJpbmcoY29kZVtzXS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJOYW1lLnN1YnN0cihub2RlS2V5Lmxlbmd0aCwgdmFyTmFtZS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTUEVDSUFMIENBU0UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZih2YXJOYW1lID09PSBcIlBJXCIgfHwgdmFyTmFtZSA9PT0gXCJ0aW1lXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBJTlBVVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgaW5wdXQgaW5kZXhcbiAgICAgICAgICAgIGxldCBpbnB1dEtleTogbnVtYmVyID0gaXNJbnB1dChub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiB2YXJpYWJsZSBpcyB0aGUgaW5wdXQgKGlmIG5vdCBpbnB1dCBpdCB3aWxsIGJlIEluZmluaXR5KVxuICAgICAgICAgICAgaWYoaW5wdXRLZXkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZVxuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gc2F2ZUlucHV0VmFyaWFibGUobm9kZSwgYWxsQ29ubmVjdGlvbnMsIG5vZGVLZXksIHZhcmlhYmxlTmFtZSwgaW5wdXRLZXkpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEZvdW5kIHZhcmlhYmxlIGluIGlucHV0cyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBbmQgY29udGludWUgdG8gdGhlIG5leHQgc3RlcCBpbiB0aGUgdG9rZW5pc2VkIGdlbmVyYXRvciBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIEdFTkVSQVRPUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgZ2VuZXJhdG9yIGluZGV4XG4gICAgICAgICAgICBsZXQgZ2VuZXJhdG9yS2V5OiBudW1iZXIgPSBpc0dlbmVyYXRvcihub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiBnZW5lcmF0b3IgaW5kZXggaXMgbm90IGFuIEluZmluaXR5LCB0aGUgc2V0dGluZyBpcyB0aGUgZ2VuZXJhdG9yLCBhbmQgc2hvdWxkIGJlIHByb2Nlc3NlZCBhcyBvbmVcbiAgICAgICAgICAgIGlmKGdlbmVyYXRvcktleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSBub2RlLmdlbmVyYXRvcnNbZ2VuZXJhdG9yS2V5XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHRva2VuaXplR2VuZXJhdG9yKGdlbmVyYXRvci52YWx1ZSwgbm9kZUtleSk7XG5cbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgdG9rZW5zLCBhbGxDb25uZWN0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBnZW5lcmF0b3IgdGl0bGVcbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHRva2VuVG9Kcyhub2RlS2V5LCBnZW5lcmF0b3IudGl0bGUsIHRva2Vucyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gZ2VuZXJhdG9ycyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0byB0aGUgbmV4dCB0b2tlblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTRVRUSU5HIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBzZXR0aW5nIGluZGV4XG4gICAgICAgICAgICBsZXQgc2V0dGluZ0tleTogbnVtYmVyID0gaXNTZXR0aW5nKG5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHNldHRpbmcgaW5kZXggaXMgbm90IGluZmluaXR5IC0gaXQncyBhIG1hdGNoIVxuICAgICAgICAgICAgaWYoc2V0dGluZ0tleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gc2V0dGluZ3MgJHt2YXJpYWJsZU5hbWV9IC0gJHtub2RlS2V5fWApO1xuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gYHZhciAke25vZGVLZXl9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZS5zZXR0aW5nc1tzZXR0aW5nS2V5XS52YWx1ZX0gfTtcXG5gO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBOT1QgQU5ZIE9GIFRIUkVFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIElmIG5vdCBvbmUgb2YgcHJldmlvdXMgdGhyZWUsIGFsZXJ0IHVzZXIuXG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IGBhbGVydChcIkNvdWxkbid0IGZpbmQgZ2VuZXJhdG9yIHZhcmlhYmxlIGluIHRoZSBpbnB1dHMsIGdlbmVyYXRvcnMgb3Igc2V0dGluZ3MhICR7bm9kZUtleX0gLSAke3Zhck5hbWV9XCIpO1xcbmA7XG4gICAgICAgIH0gZWxzZSBpZihjb2RlW3NdLnR5cGUgPT09IFwibWF0aFwiIHx8IGNvZGVbc10udHlwZSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgY29kZVtzXS5jb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gc2F2ZUlucHV0VmFyaWFibGUobm9kZTogU2lnbmFsTm9kZSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBub2RlS2V5OiBzdHJpbmcsIHNldHRpbmdLZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGU6IHN0cmluZztcbiAgICBjb25zdCBjb25uZWN0b3JFbmQgPSB7XG4gICAgICAgIG5vZGVJZDogbm9kZUtleSxcbiAgICAgICAgc2V0dGluZ0lkOiBzZXR0aW5nS2V5XG4gICAgfVxuICAgIFxuICAgIGxldCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCBjb25uZWN0b3JFbmQpO1xuXG4gICAgLy8gY29uc29sZS5sb2coYFRyYWNpbmcgYmFjayB0aGUgaW5wdXQ6ICR7bm9kZUtleX06JHtzZXR0aW5nS2V5fSAtPiAke290aGVyTm9kZUlkfToke290aGVyU2V0dGluZ0lkfWApO1xuICAgIFxuICAgIC8vIElmIG5vZGUgaXMgY29ubmVjdGVkXG4gICAgaWYob3RoZXJOb2RlSWQgJiYgb3RoZXJTZXR0aW5nSWQpIHtcbiAgICAgICAgLy8gU2F2ZSBcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0aW1lKX07XFxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTYXZlIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtub2RlLmlucHV0c1tpbmRleF0uZGVmYXVsdH19O1xcbmBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gaXNJbnB1dCAobm9kZTogU2lnbmFsTm9kZSwgc2V0dGluZ0tleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBDaGVjayBpZiB2YXJpYWJsZSBpcyBpbiBpbnB1dHNcbiAgICBpZihub2RlLmlucHV0cykge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZS5pbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIElmIHZhcmlhYmxlIGlzIHRoZSBpbnB1dCwgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIGlmKG5vZGUuaW5wdXRzW2ldLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW5maW5pdHk7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5nZW5lcmF0b3JzKSB7XG4gICAgICAgIGlmKG5vZGUuZ2VuZXJhdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IobGV0IGcgPSAwOyBnIDwgbm9kZS5nZW5lcmF0b3JzLmxlbmd0aDsgZysrKSB7XG4gICAgICAgICAgICAgICAgaWYobm9kZS5nZW5lcmF0b3JzW2ddLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cblxuZnVuY3Rpb24gaXNTZXR0aW5nKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5zZXR0aW5ncykge1xuICAgICAgICBmb3IobGV0IHMgPSAwOyBzIDwgbm9kZS5zZXR0aW5ncy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gc2V0dGluZ0tleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEluZmluaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hJbnB1dHMoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKToge3VuY2FsY3VsYXRlZE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgdG91Y2hOb2RlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgbmV3Q29sbGVjdGlvbjogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgbmV3VG91Y2hDb2xsZWN0aW9uOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuXG4gICAgZm9yKGxldCBuIGluIGFsbE5vZGVzKSB7XG4gICAgICAgIGlmKG4uc3Vic3RyKDAsIDEwKSA9PT0gXCJ0b3VjaElucHV0XCIpIHtcbiAgICAgICAgICAgIG5ld1RvdWNoQ29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IG5ld0NvbGxlY3Rpb24sXG4gICAgICAgIHRvdWNoTm9kZXM6IG5ld1RvdWNoQ29sbGVjdGlvblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lKHN0YXJ0OiBudW1iZXIsIHN0b3A6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgbGV0IGUgPSBcImxldCB0ID0gXCI7XG5cbiAgICBlKz0gYChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgciA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAke3N0YXJ0fTsgaSA8ICR7c3RvcH07IGkrPSR7c3RlcH0pIHtcbiAgICAgICAgICAgIHIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9KSgpO2BcblxuICAgIHJldHVybiBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzKG5vZGVzOiBOb2RlQ29sbGVjdGlvbik6IHN0cmluZyB7XG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBpIGluIG5vZGVzKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblxuICAgICAgICBsZXQgc2Vuc2l0aXZpdHk6IE5vZGVTZXR0aW5nc1NoYXBlO1xuICAgICAgICBsZXQgYXR0YWNoZWRTY29wZTogTm9kZVNldHRpbmdzU2hhcGU7XG5cbiAgICAgICAgLy8gU2VwYXJhdGUgc2V0dGluZ3NcbiAgICAgICAgZm9yKGxldCBzIGluIG5vZGUuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmKG5vZGUuc2V0dGluZ3Nbc10udGl0bGUgPT09IFwiU2Vuc2l0aXZpdHlcIikge1xuICAgICAgICAgICAgICAgIHNlbnNpdGl2aXR5ID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIlNjb3BlXCIpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hlZFNjb3BlID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRvdWNoIG5vZGUgaXMgbm90IGNvcnJlY3RseSBmb3JtYXR0ZWQuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBvZmZzZXRTY3JpcHQgPSBgaWYoIWRpZEF0dGFjaCR7aX0pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHthdHRhY2hlZFNjb3BlLnZhbHVlfVwiKS5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFhEYXRhICs9IGUubW92ZW1lbnRYKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuICAgICAgICAgICAgICAgICAgICAke2l9T2Zmc2V0WURhdGEgKz0gZS5tb3ZlbWVudFkqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke2F0dGFjaGVkU2NvcGUudmFsdWV9XCIpLm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudFggPSB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25YIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50WSA9IHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgLSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFhEYXRhICs9IG1vdmVtZW50WCoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFlEYXRhICs9IG1vdmVtZW50WSoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpZEF0dGFjaCR7aX1PZmZzZXRYID0gdHJ1ZTtcbiAgICAgICAgICAgIGRpZEF0dGFjaCR7aX1PZmZzZXRZID0gdHJ1ZTtcbiAgICAgICAgfVxcbmA7XG5cbiAgICAgICAgZm9yKGxldCBvIGluIG5vZGUub3V0cHV0cykge1xuICAgICAgICAgICAgZSArPSBgdmFyICR7aX0ke25vZGUub3V0cHV0c1tvXS50aXRsZX1EYXRhID0gMTtcXG5gO1xuICAgICAgICAgICAgZSArPSBgdmFyIGRpZEF0dGFjaCR7aX0gPSBmYWxzZTtcXG5gO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUgKz0gYHZhciAke2l9JHtub2RlLm91dHB1dHNbb10udGl0bGV9ID0gZnVuY3Rpb24odGltZSkgeyByZXR1cm4gJHtpfSR7bm9kZS5vdXRwdXRzW29dLnRpdGxlfURhdGEgfTtcXG5gXG4gICAgICAgIH1cblxuICAgICAgICBlICs9IG9mZnNldFNjcmlwdDtcbiAgICB9XG5cbiAgICByZXR1cm4gZTtcbn0iLCIvLyBBcyBhIHJlbWluZGVyOlxuLy8gT25lIGl0ZW0gaW4gYW4gYXJyYXkgb2YgdG9rZW5zIGNhbiBvbmx5IGJlIGFuIG9iamVjdCBhbmQgb25seSBoYXZlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuLy8gKiB0eXBlICAgICAgICAgICAtIGZvciBldmVyeSB0b2tlblxuLy8gKiB2YWx1ZSAgICAgICAgICAtIGZvciBldmVyeSB0b2tlblxuLy8gKiBjb2RlICAtIGZvciBzY29wZXMgKG1hdGgvcmVndWxhcilcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuVG9KcyAobm9kZUlkLCB2YXJpYWJsZU5hbWUsIGpzb25Ub2tlbnMpIHtcbiAgICBsZXQgZXhlY3V0YWJsZVN0cmluZyA9IGB2YXIgJHtub2RlSWR9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24odGltZSkgeyByZXR1cm4gYDtcbiAgICBcbiAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUoWy4uLmpzb25Ub2tlbnNdKVxuXG4gICAgcmV0dXJuIGV4ZWN1dGFibGVTdHJpbmcgKyBcIn07XFxuXCI7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNvZGUoanNvbikge1xuICAgIGxldCBleGVjdXRhYmxlU3RyaW5nID0gXCJcIjtcblxuICAgIGlmKGpzb24gPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBWYXJpYWJsZXMgZm9yIGNvbnZlbmllbmNlXG4gICAgICAgIGNvbnN0IHRva2VuID0ganNvbltpXTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRva2VuLnR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdG9rZW4udmFsdWU7XG5cbiAgICAgICAgLy8gQWN0dWFsIGxvZ2ljXG4gICAgICAgIGlmKHR5cGUgIT0gXCJzY29wZVwiICYmIHR5cGUgIT0gXCJtYXRoXCIpIHtcbiAgICAgICAgICAgIC8vIE9uZSBvZiB0aGUgYmFzaWMgdHlwZXNcblxuICAgICAgICAgICAgaWYodmFsdWUgPT09ICdQSScpIHtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC5QSVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInZhclwiICYmIHZhbHVlICE9PSBcInRpbWVcIikge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gYCR7dmFsdWV9KHRpbWUpYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIm1hdGhcIikge1xuICAgICAgICAgICAgLy8gTWF0aCBmdW5jdGlvblxuXG4gICAgICAgICAgICBpZih2YWx1ZSA9PT0gXCJzaW5cIikge1xuICAgICAgICAgICAgICAgIC8vIElmIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZ1bmN0aW9ucywgcmVjdXJzZXZseSBnZW5lcmF0ZSBzdHJpbmcgZnJvbSB0aGUgY29kZSBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC5zaW4oXCI7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIpXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT09IFwiY29zXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmdW5jdGlvbnMsIHJlY3Vyc2V2bHkgZ2VuZXJhdGUgc3RyaW5nIGZyb20gdGhlIGNvZGUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguY29zKFwiO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKTtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09PSBcInRhblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBzdXBwb3J0ZWQgZnVuY3Rpb25zLCByZWN1cnNldmx5IGdlbmVyYXRlIHN0cmluZyBmcm9tIHRoZSBjb2RlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLnRhbihcIjtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm90IHN1cHBvcnRlZCBmdW5jdGlvbiwgdGhyb3cgZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5zdXBwb3J0ZWQgbWF0aCBmdW5jdGlvbiAhISFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZWd1bGFyIHNjb3BlXG5cbiAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIoXCIgKyBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXhlY3V0YWJsZVN0cmluZztcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSAoc2V0dGluZ3NDb3VudCwgc2NvcGVDb3VudCkgPT4gYFxuICAgICNzaWduYWxzLWVtYmVkZGluZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICR7KHNldHRpbmdzQ291bnQgPiAwICYmIHNjb3BlQ291bnQgPiAwKSA/XG4gICAgICAgICAgICBgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0bztgIFxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuc2lnbmFscy1jYW52YXMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgI3NpZ25hbHMtdmlld3Mge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgICAgICAkeyhzZXR0aW5nc0NvdW50ID4gMCAmJiBzY29wZUNvdW50ID4gMCkgPyBgZ3JpZC1jb2x1bW46IDIgLyAzO2AgOiAnJ31cbiAgICB9XG5cbiAgICAkeyhzZXR0aW5nc0NvdW50ID4gMCAmJiBzY29wZUNvdW50ID4gMCkgPyBgI3NpZ25hbHMtc2V0dGluZ3Mge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuXG4gICAgI3NpZ25hbHMtc2V0dGluZ3MtbGlzdCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIC5zaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDRmcjtcbiAgICAgICAgZ3JpZC1nYXA6IDVweDtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1zbGlkZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA0ZnIgMWZyO1xuICAgIH1cblxuICAgIC5zaWduYWxzLXNldHRpbmdzLXNsaWRlciBkaXYge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtIGg2IHtcbiAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgIC5zaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbSBpbnB1dCB7XG5cbiAgICB9XG4gICAgXG4gICAgLnNpZ25hbHMtc2V0dGluZ3MtbGlzdC1sYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1gOicnfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIGpzeERvbSAobm9kZXMpIHtcbiAgICBsZXQgY2FudmFzTm9kZXMgPSBbXTtcblxuICAgIC8vIEdldCBhbGwga2luZHMgb2Ygb3V0cHV0IG5vZGVzXG4gICAgZm9yKGxldCBrZXkgaW4gbm9kZXMpIHtcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZXNba2V5XTtcblxuICAgICAgICBpZihTdHJpbmcoa2V5KS5zdWJzdHIoMCwgNSkgPT09IFwic2NvcGVcIikge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuaWQgPSBrZXk7XG4gICAgICAgICAgICBjYW52YXNOb2Rlcy5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzZXR0aW5nc05vZGVzID0gW107XG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcblxuICAgIFxuICAgIGZvcihsZXQga2V5IGluIG5vZGVzKSB7XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGVzW2tleV07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc1RoaXJkTGV0dGVyVXBwZXJDYXNlID0gU3RyaW5nKGtleSkuc3Vic3RyKDIsIDEpLnRvVXBwZXJDYXNlKCkgPT09IFN0cmluZyhrZXkpLnN1YnN0cigyLCAxKTtcbiAgICAgICAgY29uc3QgaXNVSSA9IFN0cmluZyhrZXkpLnN1YnN0cigwLCAyKSA9PT0gXCJ1aVwiO1xuICAgICAgICBjb25zdCBpc0FjdHVhbFVJID0gaXNVSSAmJiBpc1RoaXJkTGV0dGVyVXBwZXJDYXNlO1xuICAgICAgICBcbiAgICAgICAgaWYoaXNBY3R1YWxVSSkge1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2F2ZWRBbHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IGN1cnJlbnROb2RlLnNldHRpbmdzWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICBmb3IobGV0IGMgaW4gY2F0ZWdvcmllcykge1xuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3JpZXNbY10gPT0gY3VycmVudENhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5U2F2ZWRBbHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighY2F0ZWdvcnlTYXZlZEFscmVhZHkpIHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY3VycmVudENhdGVnb3J5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudE5vZGUuaWQgPSBrZXk7XG4gICAgICAgICAgICBzZXR0aW5nc05vZGVzLnB1c2goY3VycmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNldHRpbmdzTm9kZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIGNvbnN0IGNhdDEgPSBhLnNldHRpbmdzWzBdLnZhbHVlO1xuICAgICAgICBjb25zdCBjYXQyID0gYi5zZXR0aW5nc1swXS52YWx1ZTtcblxuICAgICAgICBpZihjYXQxID09PSBjYXQyKSB7XG4gICAgICAgICAgICBjb25zdCBvcmRlcjEgPSBwYXJzZUludChhLnNldHRpbmdzWzJdLnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyMiA9IHBhcnNlSW50KGIuc2V0dGluZ3NbMl0udmFsdWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gb3JkZXIxIC0gb3JkZXIyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0QXJyID0gW2NhdDEsIGNhdDJdO1xuICAgICAgICAgICAgY2F0QXJyLnNvcnQoKTtcblxuICAgICAgICAgICAgaWYoY2F0QXJyWzBdID09PSBjYXQxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU29ydCBieSBjYXRlZ29yeTpcblxuICAgIGNhdGVnb3JpZXMuc29ydCgpO1xuXG4gICAgbGV0IG5ld1NldHRpbmdzTm9kZXMgPSBbXTtcblxuICAgIGZvcihsZXQgYyBpbiBjYXRlZ29yaWVzKSB7XG4gICAgICAgIGZvcihsZXQgcyBpbiBzZXR0aW5nc05vZGVzKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHNldHRpbmdzTm9kZXNbc107XG4gICAgICAgICAgICBpZihjdXJyZW50Tm9kZS5zZXR0aW5nc1swXS52YWx1ZSA9PT0gY2F0ZWdvcmllc1tjXSkge1xuICAgICAgICAgICAgICAgIG5ld1NldHRpbmdzTm9kZXMucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNldHRpbmdzTm9kZXNbc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBEeW5hbWljIFN0dWZmXG4gICAgY29uc3QgY2FudmFzSnN4ID0gY2FudmFzTm9kZXMubGVuZ3RoID4gMCA/IGNhbnZhc05vZGVzLm1hcChub2RlID0+IHtcbiAgICAgICAgcmV0dXJuICg8Y2FudmFzIGNsYXNzTmFtZT1cInNpZ25hbHMtY2FudmFzXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7bm9kZS5pZH1gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bm9kZS5pZH1cbiAgICAgICAgPjwvY2FudmFzPilcbiAgICB9KSA6IG51bGw7XG5cbiAgICBsZXQgbGFzdENhdGVnb3J5ID0gXCJcIjtcbiAgICBjb25zdCBzZXR0aW5ncyA9IG5ld1NldHRpbmdzTm9kZXMubGVuZ3RoID4gMCA/IG5ld1NldHRpbmdzTm9kZXMubWFwKG5vZGUgPT4ge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50O1xuICAgICAgICBsZXQgaXNTbGlkZXIgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNob3VsZFNhdmVDYXRlZ29yeSA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IG5vZGUuc2V0dGluZ3NbMF0udmFsdWU7XG5cbiAgICAgICAgaWYobGFzdENhdGVnb3J5ICE9PSBjdXJyZW50Q2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHNob3VsZFNhdmVDYXRlZ29yeSA9IHRydWU7XG4gICAgICAgICAgICBsYXN0Q2F0ZWdvcnkgPSBjdXJyZW50Q2F0ZWdvcnk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKG5vZGUuaWQuc3Vic3RyKDAsIDgpID09PSBcInVpTnVtYmVyXCIpIHtcbiAgICAgICAgICAgIC8vICd1aU51bWJlcicgc2V0dGluZ3M6XG4gICAgICAgICAgICAvLyAwIDogQ2F0ZWdvcnkgLSBDYXRlZ29yeSB0aGF0IGNvbnRyb2xsZXJzIGFyZSBzb3J0ZWQgYnkuXG4gICAgICAgICAgICAvLyAxIDogTGFiZWwgICAgLSBMYWJlbCBuZXh0IHRvIHRoZSBjb250cm9sbGVyLlxuICAgICAgICAgICAgLy8gMiA6IE9yZGVyICAgIC0gVmVydGljYWwgcG9zaXRpb24gb2YgdGhlIGNvbnRyb2xsZXIgaW4gdGhlIGNhdGVnb3J5LlxuICAgICAgICAgICAgLy8gMyA6IERlZmF1bHQgIC0gRGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgLy8gNCA6IE1pbiAgICAgIC0gTWluaW11bSB2YWx1ZVxuICAgICAgICAgICAgLy8gNSA6IE1heCAgICAgIC0gTWF4aW11bSB2YWx1ZVxuICAgICAgICAgICAgLy8gNiA6IFN0ZXAgICAgIC0gU3RlcCBvZiB0aGUgdmFsdWVcbiAgICAgICAgICAgIGlucHV0RWxlbWVudCA9ICg8aW5wdXQgIHR5cGU9eydudW1iZXInfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtub2RlLmlkK1wiSW5wdXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bm9kZS5zZXR0aW5nc1szXS52YWx1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e25vZGUuc2V0dGluZ3NbNF0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e25vZGUuc2V0dGluZ3NbNV0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtub2RlLnNldHRpbmdzWzZdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9Lz4pO1xuICAgICAgICB9IGVsc2UgaWYobm9kZS5pZC5zdWJzdHIoMCwgOCkgPT09IFwidWlTbGlkZXJcIikge1xuICAgICAgICAgICAgaXNTbGlkZXIgPSB0cnVlO1xuICAgICAgICAgICAgLy8gJ3VpU2xpZGVyJyBzZXR0aW5nczpcbiAgICAgICAgICAgIC8vIDAgOiBDYXRlZ29yeSAtIENhdGVnb3J5IHRoYXQgY29udHJvbGxlcnMgYXJlIHNvcnRlZCBieS5cbiAgICAgICAgICAgIC8vIDEgOiBMYWJlbCAgICAtIExhYmVsIG5leHQgdG8gdGhlIGNvbnRyb2xsZXIuXG4gICAgICAgICAgICAvLyAyIDogT3JkZXIgICAgLSBWZXJ0aWNhbCBwb3NpdGlvbiBvZiB0aGUgY29udHJvbGxlciBpbiB0aGUgY2F0ZWdvcnkuXG4gICAgICAgICAgICAvLyAzIDogRGVmYXVsdCAgLSBEZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICAvLyA0IDogTWluICAgICAgLSBNaW5pbXVtIHZhbHVlXG4gICAgICAgICAgICAvLyA1IDogTWF4ICAgICAgLSBNYXhpbXVtIHZhbHVlXG4gICAgICAgICAgICAvLyA2IDogU3RlcCAgICAgLSBTdGVwIG9mIHRoZSB2YWx1ZVxuICAgICAgICAgICAgaW5wdXRFbGVtZW50ID0gKDxpbnB1dCAgdHlwZT17J3JhbmdlJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bm9kZS5pZCtcIklucHV0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25vZGUuc2V0dGluZ3NbM10udmFsdWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtub2RlLnNldHRpbmdzWzRdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtub2RlLnNldHRpbmdzWzVdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17bm9kZS5zZXR0aW5nc1s2XS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfS8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJldHVybnMgbWVzc2FnZSBpZiB0aGUgdHlwZSBpcyB1bnNvcHBvcnRlZFxuICAgICAgICAgICAgaW5wdXRFbGVtZW50ID0gPGRpdj57J3Vuc3VwcG9ydGVkIHR5cGUnfTwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgaWYoc2hvdWxkU2F2ZUNhdGVnb3J5KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e25vZGUuaWQgKyBjdXJyZW50Q2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjdXJyZW50Q2F0ZWdvcnl9IGNsYXNzTmFtZT17J3NpZ25hbHMtc2V0dGluZ3MtbGlzdC1sYWJlbCd9PntjdXJyZW50Q2F0ZWdvcnl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17J3NpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtICcgKyAoaXNTbGlkZXIgPyBcInNpZ25hbHMtc2V0dGluZ3Mtc2xpZGVyXCIgOiBcIlwiKX0gaWQ9e25vZGUuaWR9IGtleT17bm9kZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0tbGFiZWwnfSBpZD17bm9kZS5pZCArIFwiTGFiZWxcIn0+e25vZGUuc2V0dGluZ3NbMV0udmFsdWV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dEVsZW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNTbGlkZXIgPyA8ZGl2IGlkPXtub2RlLmlkK1wiSW5kaWNhdG9yXCJ9Pntub2RlLnNldHRpbmdzWzNdLnZhbHVlfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoPGxpIGNsYXNzTmFtZT17J3NpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtICcgKyAoaXNTbGlkZXIgPyBcInNpZ25hbHMtc2V0dGluZ3Mtc2xpZGVyXCIgOiBcIlwiKX0gaWQ9e25vZGUuaWR9IGtleT17bm9kZS5pZH0+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17J3NpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtLWxhYmVsJ30gaWQ9e25vZGUuaWQgKyBcIkxhYmVsXCJ9Pntub2RlLnNldHRpbmdzWzFdLnZhbHVlfTwvaDY+XG4gICAgICAgICAgICAgICAge2lucHV0RWxlbWVudH1cbiAgICAgICAgICAgICAgICB7aXNTbGlkZXIgPyA8ZGl2IGlkPXtub2RlLmlkK1wiSW5kaWNhdG9yXCJ9Pntub2RlLnNldHRpbmdzWzNdLnZhbHVlfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgICA8L2xpPik7XG4gICAgICAgIH1cbiAgICB9KSA6IG51bGw7XG5cbiAgICAvLyBHZW5lcmF0ZSBGaW5hbCBKU1hcbiAgICBjb25zdCBTaWduYWxWaWV3cyA9IGNhbnZhc0pzeCA/XG4gICAgICAgIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduYWxzLXZpZXdzXCIgc3R5bGU9e3tncmlkVGVtcGxhdGVSb3dzOiBgcmVwZWF0KCR7Y2FudmFzTm9kZXMubGVuZ3RofSwgMWZyKWB9fT5cbiAgICAgICAgICAgICAgICB7Y2FudmFzSnN4fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgY29uc3QgU2V0dGluZ3NKc3ggPSBzZXR0aW5ncyA/XG4gICAgICAgIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduYWxzLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgPHVsIGlkPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0J30+XG4gICAgICAgICAgICAgICAgICAgIHtzZXR0aW5nc31cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17XCJzaWduYWxzLWVtYmVkZGluZy1jb250YWluZXJcIn0+XG4gICAgICAgICAgICA8c3R5bGU+e3N0eWxlcyhuZXdTZXR0aW5nc05vZGVzLmxlbmd0aCwgY2FudmFzTm9kZXMubGVuZ3RoKX08L3N0eWxlPlxuICAgICAgICAgICAge1NldHRpbmdzSnN4fVxuICAgICAgICAgICAge1NpZ25hbFZpZXdzfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==