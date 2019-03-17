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
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderer */ "./src/server/renderer/index.js");
/* harmony import */ var _libraryNodes_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libraryNodes.json */ "./src/server/libraryNodes.json");
var _libraryNodes_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./libraryNodes.json */ "./src/server/libraryNodes.json", 1);
/* harmony import */ var _project_presets_modulation_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project_presets/modulation.json */ "./src/server/project_presets/modulation.json");
var _project_presets_modulation_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./project_presets/modulation.json */ "./src/server/project_presets/modulation.json", 1);
/* harmony import */ var _project_presets_fourierSeries_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project_presets/fourierSeries.json */ "./src/server/project_presets/fourierSeries.json");
var _project_presets_fourierSeries_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./project_presets/fourierSeries.json */ "./src/server/project_presets/fourierSeries.json", 1);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Base Imports

 // Server Setup



var app = express__WEBPACK_IMPORTED_MODULE_2___default()(); // Middleware

 // Data Parsing

 // import testModel from './testModel.json'
// Library nodes

 // Project presets



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
  }, {
    projectId: "2",
    title: "Fourier Series",
    description: "Attempt at creating fourier series using this tool.",
    owner: "admin"
  }, {
    projectId: "2",
    title: "Fourier Series",
    description: "Attempt at creating fourier series using this tool.",
    owner: "admin"
  }, {
    projectId: "2",
    title: "Fourier Series",
    description: "Attempt at creating fourier series using this tool.",
    owner: "admin"
  }],
  projectModels: [_objectSpread({}, _project_presets_modulation_json__WEBPACK_IMPORTED_MODULE_7__), _objectSpread({}, _project_presets_fourierSeries_json__WEBPACK_IMPORTED_MODULE_8__)],
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
app.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static(__dirname + '/public/static')); // Logging

app.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('tiny')); // --- ROUTES ---

app.get('/editor/:username/:id', function (req, res) {
  var projectId = req.params.id;
  var username = req.params.username;
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


    data = data.replace('<script id="editor-data"></script>', "<script id=\"project-data\">document.projectData = ".concat(JSON.stringify(projectData), "</script>\n            <script id=\"library-data\">document.libraryNodes = ").concat(JSON.stringify(_libraryNodes_json__WEBPACK_IMPORTED_MODULE_6__), "</script>"));
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
}); // Default test visualisation

app.get('/render/:username/:id', function (req, res) {
  var projectId = req.params.id;
  var username = req.params.username;
  if (!database.users[username]) res.status(420).send("User with username " + username + " doesn't exist");
  var renderedString = Object(_renderer__WEBPACK_IMPORTED_MODULE_5__["renderSignals"])(database.projectModels[projectId - 1]);
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
app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json());
app.post("/save/:username/:id", function (req, res) {
  // Save existing project
  var username = req.params.username;
  var projectId = req.params.id;
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

module.exports = {"input":{"touchInput":{"title":"Touch Input","description":"Gets touch input from the scope.","inputs":[],"outputs":[{"title":"OffsetX","type":"number"},{"title":"OffsetY","type":"number"}],"generators":[],"default_settings":[{"title":"Sensitivity","value":"0.01","type":"number_uncontrolled"},{"title":"Scope","value":"","type":"scopeReference"}]},"scalar":{"title":"Scalar","description":"Single scalar output","inputs":[],"outputs":[{"title":"number","type":"number"}],"generators":[],"default_settings":[{"title":"number","value":"1","type":"number","isInput":false}]},"signalGenerator":{"title":"Signal Generator","description":"Generates a basic signal","inputs":[],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"default_settings":[{"title":"frequency","value":"20","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":false},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}]}},"processors":{"multiply":{"title":"Multiply","description":"Modulates two signals using AM modulation","inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]*[input2]","type":"signal"}],"default_settings":[]},"add":{"title":"Add","description":"Modulates two signals using AM modulation","inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]+[input2]","type":"signal"}],"default_settings":[]},"subtract":{"title":"Subtract","description":"Modulates two signals using AM modulation","inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]-[input2]","type":"signal"}],"default_settings":[]}},"output":{"scope":{"title":"Scope","description":"Displays a scope with the provided input signal.","inputs":[{"title":"signal","type":"signal"}],"outputs":[],"default_settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Title","value":"Carrier Signal","type":"text"},{"title":"# of Signals","value":"1","type":"number_of_signals"}]},"fft":{"title":"FFT Scope","description":"Displays frequency domain representation of the signal.","inputs":[{"title":"signal","type":"signal"}],"outputs":[],"default_settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Title","value":"Carrier Signal","type":"text"},{"title":"Max Freq (Hz)","value":"100","type":"number_uncontrolled"}]}},"ui":{"uiNumber":{"title":"UI Number","description":"Controller that appears on the renderer which allows to enter a number.","inputs":[],"outputs":[{"title":"output","type":"number"}],"default_settings":[{"title":"Category","value":"","type":"text"},{"title":"Label","value":"","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"0","type":"number_uncontrolled"},{"title":"Max","value":"0","type":"number_uncontrolled"},{"title":"Step","value":"1","type":"number_uncontrolled"}]},"uiSlider":{"title":"UI Slider","description":"Controller that appears on the renderer which grants control using slider.","inputs":[],"outputs":[{"title":"output","type":"number"}],"default_settings":[{"title":"Category","value":"","type":"text"},{"title":"Label","value":"","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"0","type":"number_uncontrolled"},{"title":"Max","value":"0","type":"number_uncontrolled"},{"title":"Step","value":"1","type":"number_uncontrolled"}]},"uiLabel":{"title":"UI Label","description":"Displays a provided number into the console.","inputs":[{"title":"input","type":"number"}],"outputs":[],"default_settings":[{"title":"Category","value":"","type":"text"},{"title":"Label","value":"","type":"text"}]}}};

/***/ }),

/***/ "./src/server/project_presets/fourierSeries.json":
/*!*******************************************************!*\
  !*** ./src/server/project_presets/fourierSeries.json ***!
  \*******************************************************/
/*! exports provided: allNodes, allConnections, isCreatingConnection, composerCoordinates, default */
/***/ (function(module) {

module.exports = {"allNodes":{"uiSlider":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"1*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":6,"width":150,"height":100,"id":"uiSlider"},"uiSlider1":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"2*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":68,"width":150,"height":100,"id":"uiSlider1"},"uiSlider2":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"3*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":129,"width":150,"height":100,"id":"uiSlider2"},"uiSlider3":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"4*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":191,"width":150,"height":100,"id":"uiSlider3"},"uiSlider4":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"5*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":254,"width":150,"height":100,"id":"uiSlider4"},"uiSlider5":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"6*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":317,"width":150,"height":100,"id":"uiSlider5"},"uiSlider6":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"7*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":381,"width":150,"height":100,"id":"uiSlider6"},"uiSlider7":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"8*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":443,"width":150,"height":100,"id":"uiSlider7"},"uiSlider8":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"9*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":504,"width":150,"height":100,"id":"uiSlider8"},"signalGenerator":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"1","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":5,"width":150,"height":100},"signalGenerator1":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"2","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":67,"width":150,"height":100},"signalGenerator2":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"3","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":128,"width":150,"height":100},"signalGenerator3":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"4","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":190,"width":150,"height":100},"signalGenerator4":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"5","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":254,"width":150,"height":100},"signalGenerator5":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"6","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":317,"width":150,"height":100},"signalGenerator6":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"7","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":380,"width":150,"height":100},"signalGenerator7":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"8","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":442,"width":150,"height":100},"signalGenerator8":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"9","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":504,"width":150,"height":100},"scope":{"title":"Sines","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"#f27200","type":"color"},{"title":"Title","value":"Sines","type":"text"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":939,"y":299,"width":150,"height":100,"id":"scope"},"uiSlider9":{"title":"Bias","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"0*f","type":"text"},{"title":"Order","value":"-1","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":325,"y":573,"width":150,"height":100,"id":"uiSlider9"},"add":{"title":"Add","clickedDown":false,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]+[input3]+[input4]+[input5]+[input6]+[input7]+[input8]+[input9]+[input10]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"},{"title":"input3","type":"signal"},{"title":"input4","type":"signal"},{"title":"input5","type":"signal"},{"title":"input6","type":"signal"},{"title":"input7","type":"signal"},{"title":"input8","type":"signal"},{"title":"input9","type":"signal"},{"title":"input10","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":700,"y":198,"width":150,"height":100},"signalGenerator9":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"1","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":681,"width":150,"height":100},"signalGenerator10":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"2","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":743,"width":150,"height":100},"signalGenerator11":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"3","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":806,"width":150,"height":100},"signalGenerator12":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"4","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":869,"width":150,"height":100},"signalGenerator13":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"5","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":932,"width":150,"height":100},"signalGenerator14":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"6","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":996,"width":150,"height":100},"signalGenerator15":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"7","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1057,"width":150,"height":100},"signalGenerator16":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"8","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1122,"width":150,"height":100},"signalGenerator17":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"9","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1185,"width":150,"height":100},"uiSlider10":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":678,"width":150,"height":100,"id":"uiSlider10"},"uiSlider11":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"2*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":741,"width":150,"height":100,"id":"uiSlider11"},"uiSlider12":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"3*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":806,"width":150,"height":100,"id":"uiSlider12"},"uiSlider13":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"4*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":869,"width":150,"height":100,"id":"uiSlider13"},"uiSlider14":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"5*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":932,"width":150,"height":100,"id":"uiSlider14"},"uiSlider15":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"6*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":995,"width":150,"height":100,"id":"uiSlider15"},"uiSlider16":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"7*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1059,"width":150,"height":100,"id":"uiSlider16"},"uiSlider17":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"8*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1122,"width":150,"height":100,"id":"uiSlider17"},"uiSlider18":{"title":"UI Slider","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"9*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1187,"width":150,"height":100,"id":"uiSlider18"},"uiSlider19":{"title":"Bias","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"0*f","type":"text"},{"title":"Order","value":"-1","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":334,"y":1263,"width":150,"height":100,"id":"uiSlider19"},"add1":{"title":"Add","clickedDown":false,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]+[input3]+[input4]+[input5]+[input6]+[input7]+[input8]+[input9]+[input10]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"},{"title":"input3","type":"signal"},{"title":"input4","type":"signal"},{"title":"input5","type":"signal"},{"title":"input6","type":"signal"},{"title":"input7","type":"signal"},{"title":"input8","type":"signal"},{"title":"input9","type":"signal"},{"title":"input10","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":619,"y":834,"width":150,"height":100},"scope1":{"title":"Cosines","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"#43d919","type":"color"},{"title":"Title","value":"Cosines","type":"text"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":893,"y":887,"width":150,"height":100,"id":"scope1"},"add2":{"title":"Add","clickedDown":true,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":886,"y":596,"width":150,"height":100},"scope2":{"title":"Time Domain","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"#13b3f2","type":"color"},{"title":"Title","value":"a","type":"text"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":1101,"y":581,"width":150,"height":100,"id":"scope2"},"fft":{"title":"Frequency Domain","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Title","value":"Carrier Signal","type":"text"},{"title":"Max Freq (Hz)","value":"10","type":"number_uncontrolled"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":1118,"y":672,"width":150,"height":100,"id":"fft"}},"allConnections":[{"connectorStart":{"nodeId":"uiSlider","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider1","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator1","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider2","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider3","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator3","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider4","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator4","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider5","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator5","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider6","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator6","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider7","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator7","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider8","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator8","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input1"}},{"connectorStart":{"nodeId":"signalGenerator1","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input2"}},{"connectorStart":{"nodeId":"signalGenerator2","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input3"}},{"connectorStart":{"nodeId":"signalGenerator3","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input4"}},{"connectorStart":{"nodeId":"signalGenerator4","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input5"}},{"connectorStart":{"nodeId":"signalGenerator5","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input6"}},{"connectorStart":{"nodeId":"signalGenerator6","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input7"}},{"connectorStart":{"nodeId":"signalGenerator7","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input8"}},{"connectorStart":{"nodeId":"signalGenerator8","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input9"}},{"connectorStart":{"nodeId":"uiSlider9","settingId":"output"},"connectorEnd":{"nodeId":"add","settingId":"input10"}},{"connectorStart":{"nodeId":"add","settingId":"output"},"connectorEnd":{"nodeId":"scope","settingId":"signal"}},{"connectorStart":{"nodeId":"uiSlider10","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator9","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider11","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator10","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider12","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator11","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider13","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator12","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider14","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator13","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider15","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator14","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider16","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator15","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider17","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator16","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider18","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator17","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator9","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input1"}},{"connectorStart":{"nodeId":"signalGenerator10","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input2"}},{"connectorStart":{"nodeId":"signalGenerator11","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input3"}},{"connectorStart":{"nodeId":"signalGenerator12","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input4"}},{"connectorStart":{"nodeId":"signalGenerator13","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input5"}},{"connectorStart":{"nodeId":"signalGenerator14","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input6"}},{"connectorStart":{"nodeId":"signalGenerator15","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input7"}},{"connectorStart":{"nodeId":"signalGenerator16","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input8"}},{"connectorStart":{"nodeId":"signalGenerator17","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input9"}},{"connectorStart":{"nodeId":"uiSlider19","settingId":"output"},"connectorEnd":{"nodeId":"add1","settingId":"input10"}},{"connectorStart":{"nodeId":"add1","settingId":"output"},"connectorEnd":{"nodeId":"scope1","settingId":"signal"}},{"connectorStart":{"nodeId":"add","settingId":"output"},"connectorEnd":{"nodeId":"add2","settingId":"input1"}},{"connectorStart":{"nodeId":"add1","settingId":"output"},"connectorEnd":{"nodeId":"add2","settingId":"input2"}},{"connectorStart":{"nodeId":"add2","settingId":"output"},"connectorEnd":{"nodeId":"scope2","settingId":"signal"}},{"connectorStart":{"nodeId":"add2","settingId":"output"},"connectorEnd":{"nodeId":"fft","settingId":"signal"}}],"isCreatingConnection":{"focused":true,"gridSize":50,"height":824,"width":1650,"x":-117,"y":-189,"zoomLevel":1},"composerCoordinates":{"focused":true,"gridSize":50,"height":824,"width":1650,"x":-117,"y":-189,"zoomLevel":1}};

/***/ }),

/***/ "./src/server/project_presets/modulation.json":
/*!****************************************************!*\
  !*** ./src/server/project_presets/modulation.json ***!
  \****************************************************/
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
        executable += "\n        if(graphs." + f + ") {\n            let data = [];\n            for(let i = 0; i < t.length; i++) {data.push(" + otherNodeId + otherSettingId + "(t[i]));}\n\n            let f = new FFT(data.length);\n            let complexOutput = f.createComplexArray();\n            f.realTransform(complexOutput, data);\n            let realOutput = new Array(data.length);\n            realOutput.fill(0);\n            f.fromComplexArray(complexOutput, realOutput);\n\n            // realOutput = realOutput.filter((val, i) => i%2 == 0 || i == 0);\n\n            realOutput = realOutput.splice(0, " + currentScope.settings[3].value + ");\n            \n            realOutput = realOutput.map(val => val * 2 / data.length);\n\n            graphs." + f + ".data.datasets[0].data = realOutput;\n            graphs." + f + ".update();\n        } else {\n            let canvasNode = document.getElementById(\"" + f + "\");\n\n            var viewSize = {\n                x: canvasNode.parentNode.offsetWidth,\n                y: canvasNode.parentNode.offsetHeight\n            }\n            \n            var w = viewSize.x;\n            var h = viewSize.y;\n            \n            canvasNode.width = w;\n            canvasNode.height = h;\n            \n            var ctx = canvasNode.getContext(\"2d\");\n\n            let data = [];\n\n            for(let i = 0; i < t.length; i++) {\n                data.push(" + otherNodeId + otherSettingId + "(t[i]));\n            }\n\n            let f = new FFT(data.length);\n            let complexOutput = f.createComplexArray();\n            f.realTransform(complexOutput, data);\n            let realOutput = new Array(data.length);\n            realOutput.fill(0);\n            f.fromComplexArray(complexOutput, realOutput);\n\n            // realOutput = realOutput.filter((val, i) => i%2 == 0 || i == 0);\n\n            realOutput = realOutput.splice(0, " + currentScope.settings[3].value + ");\n\n            realOutput = realOutput.map(val => val * 2 / data.length);\n\n            var myChart = new Chart(ctx, {\n                type: 'bar',\n                data: {\n                    labels: realOutput.map((val, i) => parseFloat(i/2).toFixed(1)),\n                    datasets: [\n                        {\n                            label: \"signal\",\n                            backgroundColor: 'rgba(245, 23, 54, 0.4)',\n                            borderColor: 'rgb(0, 0, 0)',\n                            data: realOutput\n                        }\n                    ]\n                }, options: {\n                    animation: {\n                        duration: 0\n                    }, tooltips: {\n                        enabled: true\n                    }, legend: {\n                        display: " + (currentScope.inputs.length > 1) + "\n                    }, title: {\n                        display: true,\n                        text: '" + currentScope.title + "',\n                        position: 'left'\n                    }\n                }\n            });\n\n            graphs." + f + " = myChart;\n        }";
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
  // const isOnlyScopes = (settingsCount === 0 && scopeCount > 0);
  // const isOnlySettings = (settingsCount > 0 && scopeCount === 0);
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
      className: 'canvas-container',
      key: node.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
      className: "signals-canvas",
      id: "".concat(node.id)
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
        className: 'signals-settings-list-label'
      }, currentCategory), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: 'signals-settings-list-item ' + (isSlider ? "signals-settings-slider" : ""),
        id: node.id
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

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2dlbmVyYXRvclRva2VuaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVuZGVyZXIvc2NvcGVGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3Rva2VuVG9Kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3ZpZXdlckRvbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiZGF0YWJhc2UiLCJwcm9qZWN0c0luZm8iLCJwcm9qZWN0SWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3duZXIiLCJwcm9qZWN0TW9kZWxzIiwibW9kdWxhdGlvbiIsImZvdXJpZXJTZXJpZXMiLCJ1c2VycyIsImFkbWluIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm5ld1Byb2plY3QiLCJuZXdJZCIsImkiLCJwYXJzZUludCIsInB1c2giLCJwcm9qZWN0TW9kZWxUZW1wbGF0ZSIsInNhdmVQcm9qZWN0IiwianNvbiIsIm5ld1Byb2plY3RWZXJzaW9uIiwiYWxsQ29ubmVjdGlvbnMiLCJhbGxOb2RlcyIsImNvbXBvc2VyQ29vcmRpbmF0ZXMiLCJpc0NyZWF0aW5nQ29ubmVjdGlvbiIsImZvY3VzZWQiLCJncmlkU2l6ZSIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJ6b29tTGV2ZWwiLCJ1c2UiLCJzdGF0aWMiLCJfX2Rpcm5hbWUiLCJtb3JnYW4iLCJnZXQiLCJyZXEiLCJyZXMiLCJwYXJhbXMiLCJpZCIsInN0YXR1cyIsInNlbmQiLCJmcyIsInJlYWRGaWxlIiwicGF0aCIsInJlc29sdmUiLCJlcnIiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwicmVwbGFjZSIsInByb2plY3REYXRhIiwibGVuZ3RoIiwicHJvamVjdCIsInBpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaWJyYXJ5Tm9kZXMiLCJzZXRIZWFkZXIiLCJyZW5kZXJlZFN0cmluZyIsInJlbmRlclNpZ25hbHMiLCJlbmQiLCJwcm9qZWN0c0FycmF5IiwiYm9keVBhcnNlciIsInBvc3QiLCJwcm9qZWN0SnNvbiIsImJvZHkiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJsb2ciLCJyZW5kZXJIdG1sIiwicmVxdWVzdEpzb24iLCJqc3giLCJqc3hEb20iLCJqc3hTdHJpbmciLCJyZW5kZXJUb1N0YXRpY01hcmt1cCIsInNjcmlwdEFycmF5Iiwic2NyaXB0R2VuZXJhdG9yIiwiY29tcG9zZWRTY3JpcHRTdHJpbmciLCJzIiwic2NyaXB0cyIsInNjcmlwdGVkSHRtbCIsInNsaWNlIiwiZml4U2NvcGVzIiwiZ2VuIiwiZyIsIlN0cmluZyIsImZvdW5kTGVmdEJvcmRlciIsImZvdW5kUmlnaHRCb3JkZXIiLCJqdXN0SGl0T3BlbmluZ0JyYWNrZXQiLCJqdXN0SGl0Q2xvc2luZ0JyYWNrZXQiLCJsZWZ0IiwicmlnaHQiLCJvbmUiLCJ0d28iLCJ0aHJlZSIsInRva2VuVG9KcyIsIm5vZGVJZCIsInZhcmlhYmxlTmFtZSIsImpzb25Ub2tlbnMiLCJleGVjdXRhYmxlU3RyaW5nIiwiY2FsY3VsYXRlQ29kZSIsInRva2VuIiwidHlwZSIsInZhbHVlIiwiY29kZSIsInN0eWxlcyIsInNldHRpbmdzQ291bnQiLCJzY29wZUNvdW50IiwiaXNTZXR0aW5nc0FuZFNjb3BlcyIsImlzRGl2aWRhYmxlQnlUd28iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIm5vZGVzIiwiY2FudmFzTm9kZXMiLCJrZXkiLCJjdXJyZW50Tm9kZSIsInN1YnN0ciIsInNldHRpbmdzTm9kZXMiLCJjYXRlZ29yaWVzIiwiaXNUaGlyZExldHRlclVwcGVyQ2FzZSIsInRvVXBwZXJDYXNlIiwiaXNVSSIsImlzQWN0dWFsVUkiLCJjYXRlZ29yeVNhdmVkQWxyZWFkeSIsImN1cnJlbnRDYXRlZ29yeSIsInNldHRpbmdzIiwiYyIsInNvcnQiLCJhIiwiYiIsImNhdDEiLCJjYXQyIiwib3JkZXIxIiwib3JkZXIyIiwiY2F0QXJyIiwibmV3U2V0dGluZ3NOb2RlcyIsImNhbnZhc0pzeCIsIm1hcCIsIm5vZGUiLCJsYXN0Q2F0ZWdvcnkiLCJpbnB1dEVsZW1lbnQiLCJpc1NsaWRlciIsInNob3VsZFNhdmVDYXRlZ29yeSIsIlNpZ25hbFZpZXdzIiwiU2V0dGluZ3NKc3giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsIi8vIEJhc2UgSW1wb3J0c1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcydcblxuLy8gU2VydmVyIFNldHVwXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuLy8gTWlkZGxld2FyZVxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5cbi8vIERhdGEgUGFyc2luZ1xuaW1wb3J0IHtcbiAgICByZW5kZXJTaWduYWxzXG59IGZyb20gJy4vcmVuZGVyZXInXG4vLyBpbXBvcnQgdGVzdE1vZGVsIGZyb20gJy4vdGVzdE1vZGVsLmpzb24nXG5cbi8vIExpYnJhcnkgbm9kZXNcbmltcG9ydCBsaWJyYXJ5Tm9kZXMgZnJvbSAnLi9saWJyYXJ5Tm9kZXMuanNvbidcblxuLy8gUHJvamVjdCBwcmVzZXRzXG5pbXBvcnQgbW9kdWxhdGlvbiBmcm9tICcuL3Byb2plY3RfcHJlc2V0cy9tb2R1bGF0aW9uLmpzb24nXG5pbXBvcnQgZm91cmllclNlcmllcyBmcm9tICcuL3Byb2plY3RfcHJlc2V0cy9mb3VyaWVyU2VyaWVzLmpzb24nXG5cbmxldCBkYXRhYmFzZSA9IHtcbiAgICBwcm9qZWN0c0luZm86IFt7XG4gICAgICAgIHByb2plY3RJZDogXCIxXCIsXG4gICAgICAgIHRpdGxlOiBcIkFNL0ZNIE1vZHVsYXRpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU2hvd3Mgb25lIHNpZ25hbCBtb2R1bGF0ZWQgb3ZlciBvdGhlciAoY2Fycmllcikgc2lnbmFsIHVzaW5nIEFNIGFuZCBGTSBtb2R1bGF0aW9uLlwiLFxuICAgICAgICBvd25lcjogXCJhZG1pblwiXG4gICAgfSwge1xuICAgICAgICBwcm9qZWN0SWQ6IFwiMlwiLFxuICAgICAgICB0aXRsZTogXCJGb3VyaWVyIFNlcmllc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBdHRlbXB0IGF0IGNyZWF0aW5nIGZvdXJpZXIgc2VyaWVzIHVzaW5nIHRoaXMgdG9vbC5cIixcbiAgICAgICAgb3duZXI6IFwiYWRtaW5cIlxuICAgIH0sIHtcbiAgICAgICAgcHJvamVjdElkOiBcIjJcIixcbiAgICAgICAgdGl0bGU6IFwiRm91cmllciBTZXJpZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQXR0ZW1wdCBhdCBjcmVhdGluZyBmb3VyaWVyIHNlcmllcyB1c2luZyB0aGlzIHRvb2wuXCIsXG4gICAgICAgIG93bmVyOiBcImFkbWluXCJcbiAgICB9LCB7XG4gICAgICAgIHByb2plY3RJZDogXCIyXCIsXG4gICAgICAgIHRpdGxlOiBcIkZvdXJpZXIgU2VyaWVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkF0dGVtcHQgYXQgY3JlYXRpbmcgZm91cmllciBzZXJpZXMgdXNpbmcgdGhpcyB0b29sLlwiLFxuICAgICAgICBvd25lcjogXCJhZG1pblwiXG4gICAgfSwge1xuICAgICAgICBwcm9qZWN0SWQ6IFwiMlwiLFxuICAgICAgICB0aXRsZTogXCJGb3VyaWVyIFNlcmllc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBdHRlbXB0IGF0IGNyZWF0aW5nIGZvdXJpZXIgc2VyaWVzIHVzaW5nIHRoaXMgdG9vbC5cIixcbiAgICAgICAgb3duZXI6IFwiYWRtaW5cIlxuICAgIH1dLFxuICAgIHByb2plY3RNb2RlbHM6IFt7XG4gICAgICAgICAgICAuLi5tb2R1bGF0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC4uLmZvdXJpZXJTZXJpZXNcbiAgICAgICAgfVxuICAgIF0sXG4gICAgdXNlcnM6IHtcbiAgICAgICAgYWRtaW46IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcImFkbWluXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJhZG1pblwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5ld1Byb2plY3Q6IGZ1bmN0aW9uICh1c2VybmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIC8vIEZpbmQgbmV3IGlkXG4gICAgICAgIGxldCBuZXdJZCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnByb2plY3RzSW5mbykge1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMucHJvamVjdHNJbmZvW2ldLnByb2plY3RJZCkgPiBuZXdJZCkgbmV3SWQgPSB0aGlzLnByb2plY3RzSW5mb1tpXS5wcm9qZWN0SWQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdJZCsrO1xuXG4gICAgICAgIC8vIEFkZCBuZXcgcHJvamVjeSBpbmZvXG4gICAgICAgIHRoaXMucHJvamVjdHNJbmZvLnB1c2goe1xuICAgICAgICAgICAgcHJvamVjdElkOiBuZXdJZCxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG93bmVyOiB1c2VybmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2plY3RNb2RlbHMucHVzaCh7XG4gICAgICAgICAgICAuLi5wcm9qZWN0TW9kZWxUZW1wbGF0ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3SWQ7XG4gICAgfSxcbiAgICBzYXZlUHJvamVjdDogZnVuY3Rpb24gKHByb2plY3RJZCwganNvbikge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0VmVyc2lvbiA9IHtcbiAgICAgICAgICAgIGFsbENvbm5lY3Rpb25zOiBqc29uLmFsbENvbm5lY3Rpb25zLFxuICAgICAgICAgICAgYWxsTm9kZXM6IGpzb24uYWxsTm9kZXMsXG4gICAgICAgICAgICBjb21wb3NlckNvb3JkaW5hdGVzOiBqc29uLmNvbXBvc2VyQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICBpc0NyZWF0aW5nQ29ubmVjdGlvbjoganNvbi5jb21wb3NlckNvb3JkaW5hdGVzXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2plY3RNb2RlbHNbcHJvamVjdElkIC0gMV0gPSBuZXdQcm9qZWN0VmVyc2lvbjtcbiAgICB9XG59XG5cbmNvbnN0IHByb2plY3RNb2RlbFRlbXBsYXRlID0ge1xuICAgIGFsbENvbm5lY3Rpb25zOiBbXSxcbiAgICBhbGxOb2Rlczoge30sXG4gICAgY29tcG9zZXJDb29yZGluYXRlczoge1xuICAgICAgICBmb2N1c2VkOiB0cnVlLFxuICAgICAgICBncmlkU2l6ZTogNTAsXG4gICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHpvb21MZXZlbDogMVxuICAgIH0sXG4gICAgaXNDcmVhdGluZ0Nvbm5lY3Rpb246IGZhbHNlXG59XG5cbi8vIFN0YXRpYyBmaWxlc1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyAnL3B1YmxpYy9zdGF0aWMnKSlcblxuLy8gTG9nZ2luZ1xuYXBwLnVzZShtb3JnYW4oJ3RpbnknKSk7XG5cbi8vIC0tLSBST1VURVMgLS0tXG5hcHAuZ2V0KCcvZWRpdG9yLzp1c2VybmFtZS86aWQnLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcblxuICAgIGlmICghZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSByZXMuc3RhdHVzKDQyMCkuc2VuZChcIlVzZXIgd2l0aCB1c2VybmFtZSBcIiArIHVzZXJuYW1lICsgXCIgZG9lc24ndCBleGlzdFwiKTtcblxuICAgIGZzLnJlYWRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3B1YmxpYy9lZGl0b3IuaHRtbCcpLCAndXRmOCcsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0FuIGVycm9yIG9jY3VycmVkJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aXRsZVxuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgXCI8dGl0bGU+PC90aXRsZT5cIixcbiAgICAgICAgICAgIGA8dGl0bGU+JHtwcm9qZWN0SWR9PC90aXRsZT5gXG4gICAgICAgIClcblxuICAgICAgICBsZXQgcHJvamVjdERhdGE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhYmFzZS5wcm9qZWN0c0luZm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkYXRhYmFzZS5wcm9qZWN0c0luZm9baV07XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm93bmVyID09IHVzZXJuYW1lICYmIHByb2plY3QucHJvamVjdElkID09IHByb2plY3RJZCkge1xuICAgICAgICAgICAgICAgIGxldCBwaWQgPSBwYXJzZUludChwcm9qZWN0SWQpIC0gMTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YWJhc2UucHJvamVjdE1vZGVsc1twaWRdLFxuICAgICAgICAgICAgICAgICAgICBwaWQ6IHByb2plY3RJZCxcbiAgICAgICAgICAgICAgICAgICAgb3duZXI6IHVzZXJuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGRhdGFcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgICc8c2NyaXB0IGlkPVwiZWRpdG9yLWRhdGFcIj48L3NjcmlwdD4nLFxuICAgICAgICAgICAgYDxzY3JpcHQgaWQ9XCJwcm9qZWN0LWRhdGFcIj5kb2N1bWVudC5wcm9qZWN0RGF0YSA9ICR7SlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpfTwvc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBpZD1cImxpYnJhcnktZGF0YVwiPmRvY3VtZW50LmxpYnJhcnlOb2RlcyA9ICR7SlNPTi5zdHJpbmdpZnkobGlicmFyeU5vZGVzKX08L3NjcmlwdD5gXG4gICAgICAgIClcblxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgICAgIHJlcy5zZW5kKGRhdGEpO1xuICAgIH0pXG59KTtcblxuLy8gRGVmYXVsdCB0ZXN0IHZpc3VhbGlzYXRpb25cbmFwcC5nZXQoJy9yZW5kZXIvOnVzZXJuYW1lLzppZCcsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgY29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lO1xuXG4gICAgaWYgKCFkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHJlcy5zdGF0dXMoNDIwKS5zZW5kKFwiVXNlciB3aXRoIHVzZXJuYW1lIFwiICsgdXNlcm5hbWUgKyBcIiBkb2Vzbid0IGV4aXN0XCIpO1xuXG5cbiAgICBjb25zdCByZW5kZXJlZFN0cmluZyA9IHJlbmRlclNpZ25hbHMoZGF0YWJhc2UucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSk7XG5cbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgcmVzLmVuZChyZW5kZXJlZFN0cmluZyk7XG59KVxuXG4vLyBGb3Igbm93LCBsYW5kaW5nIHBhZ2UgaXMgdGhlIHByb2plY3RzIHBhZ2UuXG5hcHAuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcbiAgICBmcy5yZWFkRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wdWJsaWMvcHJvamVjdHMuaHRtbCcpLCAndXRmOCcsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0FuIGVycm9yIG9jY3VycmVkJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aXRsZVxuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgXCI8dGl0bGU+PC90aXRsZT5cIixcbiAgICAgICAgICAgIGA8dGl0bGU+UHJvamVjdHM8L3RpdGxlPmBcbiAgICAgICAgKVxuXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgcmVzLmVuZChkYXRhKTtcbiAgICB9KVxufSlcblxuYXBwLmdldChcIi9wcm9qZWN0cy9pbmZvLzp1c2VybmFtZVwiLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG5cbiAgICBpZiAoZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSB7XG4gICAgICAgIGxldCBwcm9qZWN0c0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YWJhc2UucHJvamVjdHNJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YWJhc2UucHJvamVjdHNJbmZvW2ldLm93bmVyID09PSB1c2VybmFtZSlcbiAgICAgICAgICAgICAgICBwcm9qZWN0c0FycmF5LnB1c2goZGF0YWJhc2UucHJvamVjdHNJbmZvW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDIwKS5zZW5kKGBObyB1c2VyIHdpdGggdXNlcm5hbWUgXCIke3VzZXJuYW1lfVwiIHdhcyBmb3VuZC5gKTtcbiAgICB9XG5cbn0pXG5cblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAucG9zdChcIi9zYXZlLzp1c2VybmFtZS86aWRcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgLy8gU2F2ZSBleGlzdGluZyBwcm9qZWN0XG4gICAgY29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHJlcS5wYXJhbXMuaWQ7XG5cbiAgICBjb25zdCBwcm9qZWN0SnNvbiA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKCFkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHJlcy5zdGF0dXMoNDIwKS5zZW5kKGBVc2VyIHdpdGggdXNlcm5hbWUgJHt1c2VybmFtZX0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgaWYgKCFkYXRhYmFzZS5wcm9qZWN0TW9kZWxzW3Byb2plY3RJZCAtIDFdKSByZXMuc3RhdHVzKDQyMSkuc2VuZChgUHJvamVjdCB3aXRoIGlkICR7cHJvamVjdElkfSBkb2Vzbid0IGV4aXN0YCk7XG5cbiAgICBkYXRhYmFzZS5zYXZlUHJvamVjdChwcm9qZWN0SWQsIHByb2plY3RKc29uKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcblxufSlcblxuXG5hcHAuZ2V0KFwiL2NyZWF0ZVByb2plY3QvOnVzZXJuYW1lLzp0aXRsZS86ZGVzY3JpcHRpb25cIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lO1xuICAgIGNvbnN0IHRpdGxlID0gcmVxLnBhcmFtcy50aXRsZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHJlcS5wYXJhbXMuZGVzY3JpcHRpb247XG5cbiAgICBpZiAoIWRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkgcmVzLnN0YXR1cyg0MjApLnNlbmQoYFVzZXIgd2l0aCB1c2VybmFtZSAke3VzZXJuYW1lfSBkb2Vzbid0IGV4aXN0YCk7XG5cbiAgICBsZXQgcGlkID0gZGF0YWJhc2UubmV3UHJvamVjdCh1c2VybmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uKTtcblxuICAgIHJlcy5zdGF0dXMoMzAxKS5zZW5kKGAvZWRpdG9yLyR7dXNlcm5hbWV9LyR7cGlkfWApO1xufSlcblxuLy8gUnVuIHNlcnZlclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiXFxuTGlzdGVuaW5nIG9uOiBodHRwczovL2xvY2FsaG9zdDpcIiArIHBvcnQgKyBcIlxcblwiKTtcbn0pOyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gR2VuZXJhdG9yIENvZGUgVG9rZW5pc2VyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHZW5lcmF0b3IgY29kZSB0b2tlbmlzZXIgZnVuY3Rpb24gaXMgYWxnb3JpdGhtaWNhbGx5IHNpbXBsZSwgYnV0IHByb2R1Y2VzIGEgZ29vZCByZXByZXNlbnRhdGlvblxuLy8gb2YgdGhlIHByb3ZpZGVkIGNvZGUgaW4gSmF2YVNjcmlwdCBPYmplY3QgZm9ybWF0ICh3aGljaCBjYW4gdGhlbiBiZSBlYXNpbHkgY29udmVydGVkIHRvIEpTT04sXG4vLyBzaW5jZSBpdCdzIHByZXR0eSBtdWNoIHRoZSBzYW1lIHRoaW5nKS5cbi8vIFdoZW4gZ29pbmcgdGhyb3VnaCB0aGUgY29kZSwgaXQgY2FuIGRldGVjdCBzZXZlcmFsIHR5cGVzIG9mIG9wZXJhdG9ycy4gVGhlc2UgYXJlOlxuLy8gICAgICogVmFyaWFibGVcbi8vICAgICAqIENvbnN0YW50IE51bWJlclxuLy8gICAgICogTWF0aCBPcGVyYXRvclxuLy8gICAgICogTWF0aCBGdW5jdGlvblxuLy8gICAgICogUmVndWxhciBzY29wZSAtIGV2ZXJ5dGhpbmcgaW5zaWRlIGJyYWNrZXRzIFwiKFwiIGFuZCBcIilcIiBzaG91bGQgYmUgZXhlY3V0ZWQgZmlyc3Rcbi8vIFRoZSBWYXJpYWJsZXMsIE51bWJlcnMgYW5kIE1hdGggb3BlcmF0b3JzIGFyZSBqdXN0IGFkZGVkIGFzIGFuIG9iamVjdCB3aXRoIGFwcHJvcHJpYXRlIHR5cGUgYW5kXG4vLyB2YWx1ZSB0YWtlbiBmcm9tIHRoZSBjb2RlLlxuXG4vLyBUT0RPOlxuLy8gKiBTYW5ldGlzZSB2YXJpYWJsZSBuYW1lcyAhISEgSmF2YXNjcmlwdCBpbmplY3Rpb24gaXMgcG9zc2libGUgbm93IHRocm91biB2YXJpYWJsZSBuYW1lcy4uLlxuXG5pbXBvcnQge2ZpeFNjb3Blc30gZnJvbSAnLi9zY29wZUZpeGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplR2VuZXJhdG9yIChnZW46IHN0cmluZywgbm9kZUlkOiBzdHJpbmcpOiBHZW5lcmF0b3JTZWdtZW50W10ge1xuICAgIC8vIEdldCB2YWx1ZSBvZiBnZW5lcmF0b3IgY29kZSBhbmQgc3RvcmUgaW4gZ1xuICAgIGxldCBnID0gU3RyaW5nKGdlbik7XG4gICAgZyA9IFN0cmluZyhmaXhTY29wZXMoZykpO1xuXG4gICAgLy8gUGFyc2VkIEdlbmVyYXRvciBDb2RlXG4gICAgbGV0IHBnZW46IEdlbmVyYXRvclNlZ21lbnRbXSA9IFtdO1xuICAgIFxuICAgIC8vIFRoZSBzdGFja1xuICAgIGxldCBzdGFjazogR2VuZXJhdG9yU2VnbWVudFtdID0gW107XG5cbiAgICAvLyBDb2RlIHRva2VuaXNlclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRvcFN0YWNrT2JqZWN0OiBHZW5lcmF0b3JTZWdtZW50ID0gc3RhY2subGVuZ3RoID4gMCA/XG4gICAgICAgICAgICBzdGFja1tzdGFjay5sZW5ndGggLSAxXSA6IG51bGw7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIFZBUklBQkxFIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCJbXCIpIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdG8gbmV4dCBjaGFyYWN0ZXJcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIC8vIEluaXRpYWxpc2UgZW1wdHkgdmFyaWFibGVcbiAgICAgICAgICAgIGxldCB2YXJpYWJsZSA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8vIFNjYW4gdW50aWwgdmFyaWFibGUgc2NvcGUgaXMgY2xvc2VkXG4gICAgICAgICAgICB3aGlsZShnW2ldICE9PSBcIl1cIikge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlICs9IGdbaV07XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih2YXJpYWJsZSA9PT0gXCJ0aW1lXCIgfHwgdmFyaWFibGUgPT09IFwiUElcIikge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgP1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IG5vZGVJZCArIHZhcmlhYmxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZVNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ2YXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFyaWFibGUsXG4gICAgICAgICAgICAgICAgY29kZTogbnVsbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBzdGFja1t0b3BJbmRleF0uY29kZS5wdXNoKHZhcmlhYmxlU25pcHBldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBnZW4ucHVzaCh2YXJpYWJsZVNuaXBwZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE1BVEggT1BFUkFUT1IgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZiAoZ1tpXSA9PT0gXCIqXCIgfHwgZ1tpXSA9PT0gXCIvXCIgfHwgZ1tpXSA9PT0gXCIrXCIgfHwgZ1tpXSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGdbaV0sXG4gICAgICAgICAgICAgICAgY29kZTogbnVsbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbdG9wSW5kZXhdLmNvZGUucHVzaChvcGVyYXRvclNuaXBwZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCB0byByb290IGxldmVsXG4gICAgICAgICAgICAgICAgcGdlbi5wdXNoKG9wZXJhdG9yU25pcHBldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gTUFUSCBGVU5DVElPTiAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwic1wiIHx8IGdbaV0gPT09IFwiY1wiIHx8IGdbaV0gPT09IFwidFwiKSB7XG4gICAgICAgICAgICAvLyBNYXRoZW1hdGljYWwgZm9ybXVsYXMgYXJlIGNvZGVkIGluIHRocmVlIGxldHRlcnNcbiAgICAgICAgICAgIGxldCBuZXh0VGhyZWUgPSBTdHJpbmcoZ1tpXSArIGdbaSsxXSArIGdbaSsyXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIG5leHQgdGhyZWUgY2hhcnMgYXJlIG9uZSBvZiBcbiAgICAgICAgICAgIGlmKG5leHRUaHJlZSA9PT0gXCJzaW5cIiB8fCBuZXh0VGhyZWUgPT09IFwiY29zXCIgfHwgbmV4dFRocmVlID09PSBcInRhblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRqdXN0IGluZGV4IHRvIG5leHQgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgaSArPSAzO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VhcmNoIGZvciBvcGVuaW5nIGJyYWNrZXRzXG4gICAgICAgICAgICAgICAgd2hpbGUoZ1tpXSAhPT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPj0gZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0aHJvdyBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRVJST1IgUkVBU09OOiBzaG91bGQgcHJvdmlkZSBicmFja2V0cyBmb3IgbWF0aCBvcGVyYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJzaG91bGQgcHJvdmlkZSBicmFja2V0cyBmb3IgbWF0aCBvcGVyYXRvcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHByb3ZpZGVkIHNwYWNlIG9yIGEgY2hhcmFjdGVyIGFmdGVyIHRocmVlIG1hdGggY2hhcnNcbiAgICAgICAgICAgICAgICAvLyBpZiAoZ1tpKzFdID09PSBcIihcIikgaSsrO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0aFNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWF0aFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV4dFRocmVlLFxuICAgICAgICAgICAgICAgICAgICBjb2RlOiBbXVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrVG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLnB1c2gobWF0aFNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjb3BlVG9wSW5kZXggPSBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGVbc2NvcGVUb3BJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgcGdlbi5wdXNoKG1hdGhTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGdlbltwZ2VuLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLy8gQ29udGludWUgcGFyc2luZyBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gUkVHVUxBUiBTQ09QRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAvLyBCZWdpbiByZWd1bGFyIHNjb3BlXG4gICAgICAgICAgICBjb25zdCBzY29wZVNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzY29wZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvZGU6IFtdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrVG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUucHVzaChzY29wZVNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVUb3BJbmRleCA9IHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGVbc2NvcGVUb3BJbmRleF1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2goc2NvcGVTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHBnZW5bcGdlbi5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBFTkQgQU5ZIFNDT1BFIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCIpXCIgfHwgZy5jaGFyQXQoaSkgPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAvLyBFbmQgU2NvcGVcblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdG9wIGl0ZW0gZnJvbSBzdGFjayBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgY2xvc2VkIHNjb3BlIHRoYXQgd2Fzbid0IG9wZW5lZFxuICAgICAgICAgICAgICAgIC8vIFRPRE86ICAgICAgICAgICAgdGhyb3cgRVJST1JcbiAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046ICAgIG5vbiBleGlzdGVudCBzY29wZSB3YXMgY2xvc2VkXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vbiBleGlzdGVudCBzY29wZSB3YXMgY2xvc2VkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE5VQk1FUiAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGxldCBtYXliZU51bWJlciA9IFN0cmluZyhwYXJzZUludChnW2ldKSk7XG5cbiAgICAgICAgaWYobWF5YmVOdW1iZXIgIT09IFN0cmluZyhOYU4pICYmIHR5cGVvZiBwYXJzZUludChtYXliZU51bWJlcikgPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgbGV0IG51bWJlclN0YXJ0ID0gaTtcblxuICAgICAgICAgICAgLy8gSXMgY3VycmVudCBjaGFyIGEgbnVtYmVyIG9yIGEgZG90P1xuICAgICAgICAgICAgY29uc3QgaXNOdW1iZXIgPSAoKSA9PiAobWF5YmVOdW1iZXIgIT09IFN0cmluZyhOYU4pICYmIHR5cGVvZiBwYXJzZUludChtYXliZU51bWJlcikgPT09IFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgaXNEb3QgPSAoaW5kZXg6IG51bWJlcikgPT4gU3RyaW5nKGdbaW5kZXhdKSA9PT0gXCIuXCI7XG5cbiAgICAgICAgICAgIC8vIFdhcyB0aGVyZSBhIGRvdCBpbiBjdXJyZW50IHNlcXVlbmNlIG9mIG51bWJlcnM/XG4gICAgICAgICAgICBsZXQgd2FzRG90QWxyZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aGlsZShpc051bWJlcigpIHx8IGlzRG90KGkpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgY3VycmVudCBjaGFyIGlzIGEgZG90XG4gICAgICAgICAgICAgICAgaWYoaXNEb3QoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYod2FzRG90QWxyZWFkeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgdGhlcmUgd2FzIGEgZG90IGFscmVhZHksIHRocm93IGVycm9yLCBzaW5jZSBpdCBkb2Vzbid0IG1ha2Ugc2Vuc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRocm93IEVSUk9SXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046IGludmFsaWQgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIHN5bnRheFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm90LCBzZXQgd2FzIGRvdCBhbHJlYWR5IHRvIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhc0RvdEFscmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTW92ZSB0byBuZXh0IGluZGV4IGFuZCBcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgbWF5YmVOdW1iZXIgPSBTdHJpbmcocGFyc2VJbnQoZ1tpXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXN1bHRpbmdOdW1iZXIgPSBnLnNsaWNlKG51bWJlclN0YXJ0LCBpKTtcblxuICAgICAgICAgICAgY29uc3QgbnVtYmVyU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHRpbmdOdW1iZXIsXG4gICAgICAgICAgICAgICAgY29kZTogbnVsbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2gobnVtYmVyU25pcHBldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2gobnVtYmVyU25pcHBldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGktLTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIFJldHVybiBwYXJzZWQgZ2VuZXJhdG9yIGFycmF5XG4gICAgcmV0dXJuIHBnZW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXJhdG9yU2VnbWVudCB7XG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHZhbHVlOiAoc3RyaW5nfG51bWJlciksXG4gICAgY29kZTogR2VuZXJhdG9yU2VnbWVudFtdXG59IiwiaW1wb3J0IHsgcmVuZGVyVG9TdGF0aWNNYXJrdXAgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuaW1wb3J0IHsgc2NyaXB0R2VuZXJhdG9yIH0gZnJvbSAnLi9zY3JpcHRHZW5lcmF0b3IudHMnO1xuaW1wb3J0IHsganN4RG9tIH0gZnJvbSAnLi92aWV3ZXJEb20nO1xuXG5mdW5jdGlvbiByZW5kZXJIdG1sIChyZXF1ZXN0SnNvbikge1xuICAgIC8vIFNlcGFyYXRlIG5vZGVzIGZyb20gY29ubmVjdG9yc1xuICAgIGNvbnN0IGFsbE5vZGVzID0gey4uLnJlcXVlc3RKc29uLmFsbE5vZGVzfTtcbiAgICBjb25zdCBhbGxDb25uZWN0aW9ucyA9IFsuLi5yZXF1ZXN0SnNvbi5hbGxDb25uZWN0aW9uc107XG5cbiAgICAvLyBSZW5kZXIgSFRNTFxuICAgIGNvbnN0IGpzeCA9IGpzeERvbShhbGxOb2Rlcyk7XG4gICAgY29uc3QganN4U3RyaW5nID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoanN4KTtcblxuICAgIC8vIEdlbmVyYXRlIFNjcmlwdHNcbiAgICAvLyBjb25zb2xlLnRpbWUoXCJTY3JpcHQgUGFyc2VyXCIpO1xuXG4gICAgY29uc3Qgc2NyaXB0QXJyYXkgPSBzY3JpcHRHZW5lcmF0b3IoYWxsTm9kZXMsIGFsbENvbm5lY3Rpb25zKTtcbiAgICBsZXQgY29tcG9zZWRTY3JpcHRTdHJpbmcgPSBcIlwiO1xuICAgIGZvcihsZXQgcyBpbiBzY3JpcHRBcnJheSkge1xuICAgICAgICBpZihzID09IDApIGNvbnRpbnVlO1xuICAgICAgICBjb21wb3NlZFNjcmlwdFN0cmluZyArPSBzY3JpcHRBcnJheVtzXTtcbiAgICB9XG4gICAgXG4gICAgLy8gY29uc29sZS50aW1lRW5kKFwiU2NyaXB0IFBhcnNlclwiKTtcblxuICAgIGxldCBzY3JpcHRzID0gYDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvQ2hhcnQuanMvMi43LjMvQ2hhcnQuYnVuZGxlLm1pbi5qc1wiPjwvc2NyaXB0PlxcbmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdCBzcmM9XCIvZmZ0LmpzXCI+PC9zY3JpcHQ+XFxuYDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0PiR7c2NyaXB0QXJyYXlbMF19PC9zY3JpcHQ+XFxuYDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0PiR7Y29tcG9zZWRTY3JpcHRTdHJpbmd9PC9zY3JpcHQ+XFxuYDtcbiAgICBcbiAgICAvLyBDb21iaW5lIGZvcm1lciByZXN1bHRzXG4gICAgY29uc3Qgc2NyaXB0ZWRIdG1sID0ganN4U3RyaW5nLnNsaWNlKDAsIGpzeFN0cmluZy5sZW5ndGggLSA2KSArIHNjcmlwdHMgKyBcIjwvZGl2PlwiO1xuICAgIFxuICAgIC8vIFJldHVybiBnZW5lcmF0ZWQgSFRNTCBhcyBhIHN0cmluZ1xuICAgIHJldHVybiBzY3JpcHRlZEh0bWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaWduYWxzIChyZXF1ZXN0SnNvbikge1xuICAgIHJldHVybiByZW5kZXJIdG1sKHJlcXVlc3RKc29uKTtcbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU2NvcGUgRml4ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTY29wZSBGaXhlciBmdW5jdGlvbiBpcyByZWxhdGVkIHRvIHRoZSBnZW4gdmFyaWFibGUgcGFyc2luZyBhbGdvcml0aG0uIFNpbmNlIHRoZSB0b2tlbml6ZXIgXG4vLyBmdW5jdGlvbiBkb2VzIG5vdCB0YWtlIGludG8gYWNjb3VuZCB0aGF0IG1hdGggb3BlcmF0b3JzICogKG11bHRpcGxpY2F0aW9uKSBhbmQgLyAoZGl2aXNpb24pXG4vLyBhcmUgZXhlY3V0ZWQgZmlyc3QsIHdlIG5lZWQgdG8gcHV0IHNjb3BlcyBhcm91bmQgYml0cyB0aGF0IHNob3VsZCBleGVjdXRlZCBmaXJzdC4gVGhpcyBpcyBcbi8vIG5vdCBmaW5hbCBzb2x1dGlvbiwgc2luY2UgaXQgZG9lcyBub3QgdGFrZSBmb2xsb3dpbmcgc2l0dWF0aW9ucyBpbnRvIGFjY291bnQ6XG4vLyAgICAgKiB0aGVyZSBpcyBhIG1pbnVzIG9yIHBsdXMgc2lnbiBiZWZvcmUgYSBudW1iZXI6IC0xKlt2YXJpYWJsZV1cbi8vICAgICAgICAgLSBJbiB0aGlzIGNhc2UgaXQgd291bGQgcmV0dXJuIHRoaXM6IC0oMSpbdmFyaWFibGVdKS4gVGhpcyBkb2VzIG5vdCBhcHBseSBzY29wZXNcbi8vICAgICAgICAgICBjb3JyZWN0bHkuXG4vL1xuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQWxnb3JpdGhtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgYWxnb3JpdGhtIG1ha2VzIG9ubHkgb25lIGdlbmVyYWwgc3dlZXAgdGhyb3VnaCB0aGUgc3RyaW5nLiBUaGlzIG1lYW5zIHRoYXQgaWYgbm8gXG4vLyBzY29wZXMgYXJlIG5lZWRlZCwgZXhlY3V0aW9uIHRpbWUgd2lsbCBiZSBtaW5pbWFsLCBpLmUuIGl0IHdpbGwgdGFrZSBhcyBtdWNoIHRpbWUgYXMgaXRcbi8vIHRha2VzIHRvIGxvb3AgdGhyb3VnaCB0aGUgc3RyaW5nIG9uY2UgYW5kIGNoZWNrIGlmIHRoZSBjaGFyYWN0ZXIgaXMgKiBvciAvLiBJbiB0aGUgY2FzZSBvZlxuLy8gMzQgY2hhcmFjdGVyIHN0cmluZywgdGhpcyBmdW5jdGlvbiBpcyBleGVjdXRlZCBpbiBhYm91bnQgMC4zLTAuNSBtcy4gV2l0aCBhbiBhdmVyYWdlIG9mIFxuLy8gYXJvdW5kIDAuNG1zIGFuZCAzNCBjaGFyYWN0ZXJzLCB3ZSBjYW4gYXBwcm94aW1hdGUgdGhhdCBvbmUgY2hhcmFjdGVyIHRha2VzIDAuNCAvIDM0ID0gMS42NlxuLy8gbWljcm8gc2Vjb25kcy4gVGhpcyB3YXMgdGVzdGVkIG9uIDIuN0doeiBJbnRlbCBDb3JlIGk3LiBTbyBpdCB0b29rIGFyb3VuZCA0NDgyIGNsb2NrIGN5Y2xlc1xuLy8gdG8gZXhlY3V0ZSB0aGF0IGFjY29yZGluZyB0byBmb2xsb3dpbmcgZXF1YXRpb246IDEuNjZ1cyAvICgxIC8gMi43RykgPSA0NDgyLiBUaGlzIGNvdWxkIGJlIFxuLy8gZHJhbWF0aWNhbGx5IGltcHJvdmVkIGJ5IHVzaW5nIGN1c3RvbSBtYWRlIE5vZGUuanMgYysrIHBsdWdpbiB3aGljaCBhbGxvd3MgdG8gcnVuIGMrK1xuLy8gYmluYXJpZXMgZnJvbSBOb2RlLmpzIG9yIGJ5IHdyaXRpbmcgdGhlIHdob2xlIHJlbmRlcmVyIHNlcnZlciBpbiBhIGNvbXBpbGVkIGxhbmd1YWdlIGxpa2UgXG4vLyBweXRob24sIGMjLCBnbywgb3Igc3dpZnQuIFRoZXJlIGlzIGFsc28gYSBwb3NzaWJpbGl0eSB0byB3cml0ZSBpdCBpbiBSdXN0IGxhbmd1YWdlLCBDIG9yXG4vLyBDKysuIFRoaXMgd291bGQgYWxsb3cgdG8gY29tcGlsZSBqdXN0IHRoaXMgZnVuY3Rpb24gdG8gV2ViQXNzZW1ibHkgYW5kIHJ1biBpdCBpbiBOb2RlLmpzIGF0IFxuLy8gY29tcGlsZWQgc3BlZWQuIElmIGZ1cnRoZXIgZGV2ZWxvcG1lbnQgd2lsbCBiZSBkb25lIGFuZCB0aGVyZSB3aWxsIGJlIGEgZGVjaXNpb24gdG8gIHN3aXRjaFxuLy8gdG8gYSBjb21waWxlZCBsYW5ndWFnZSBzZXJ2ZXIsIEkgd291bGQgc3VnZ2VzdCB1c2luZyBHTyBsYW5ndWFnZSBkdWUgdG8gaXRzIHNpbXBsaWNpdHkuXG4vL1xuLy8gQWxnaXRobSB3b3JrcyBpbiBhIGZvbGxvd2luZyBmYXNoaW9uOlxuLy8gICAxLiBNYWtlIHN1cmUgcGFzc2VkIHRleHQgaXMgb2YgYSBTdHJpbmcgdHlwZVxuLy8gICAyLiBTZXQgZmxhZ3MgdG8gZmFsc2U6XG4vLyAgICAgICAtIGJvcmRlciBmbGFnczogaW5kaWNhdGUgaWYgb24gbGVmdCBvciByaWdodCwgYSArIG9yIC0gc2lnbiB3YXMgZm91bmRcbi8vICAgICAgIC0gYnJhY2tldCBmbGFnczogaW5kaWNhdGUgaWYgd2hpbGUgc3dlZXBpbmcgbGVmdCBhbmQgcmlnaHQgYSBzY29wZSB3YXMgZm91bmRcbi8vICAgMy4gSW5pdGlhdGUgdmFyaWFibGVzIGZvciBsZWZ0IGFuZCByaWdodCBzd2VlcGVyc1xuLy8gICA0LiBMb29wIHVudGlsIHdob2xlIHN0cmluZyB3YXMgc2Nhbm5lZCwgaW4gdGhlIGxvb3A6XG4vLyAgICAgICAxLiBJZiBjdXJyZW50IGNoYXJhY3RlciBpcyBcIipcIlwiIG9yIFwiL1wiLCBjb250aW51ZSwgb3RoZXJ3aXNlIGluY3JlYXNlIGluZGV4IGJ5IG9uZSBhbmQgY2hlY2sgYWdhaW5cbi8vICAgICAgIDIuIFNjYW4gdG8gdGhlIGxlZnQgZnJvbSB0aGUgY3VycmVudCBpbmRleC5cbi8vICAgICAgIDMuIElmIHJhbiBvdXQgb2YgYm91bmRzIG9mIHRoZSBzdHJpbmcsIHN0b3Agc2Nhbm5pbmcgbGVmdCwgbW92ZSB0byBzdGVwIDdcbi8vICAgICAgIDQuIElmIGhpdCBjbG9zaW5nIGJyYWNrZXQsIHNldCBjbG9zaW5nIGJyYWNrZXQgZmxhZyB0byB0cnVlLlxuLy8gICAgICAgNS4gSWYgaGl0IG9wZW5pbmcgYnJhY2tldCwgY2hlY2sgaWYgY2xvc2luZyBicmFja2V0IHdhcyBoaXQgYmVmb3JlOlxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBoaXQsIGNvbnRpbnVlIHNjYW5uaW5nIGFuZCBzZXQgY2xvc2luZyBicmFja2V0IGZsYWcgdG8gZmFsc2UgYWdhaW4uXG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIE5PVCBoaXQsIHN0b3Agc2Nhbm5pbmcgYW5kIG1vdmUgdG8gc3RlcCA3XG4vLyAgICAgICA2LiBJZiBcIitcIiBvciBcIi1cIiBzaWduIHdhcyBoaXQsIGNoZWNrIGlmIGNsb3NpbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZywgc2luY2UgaXQgbWVhbnMgdGhhdCB0aGUgKyBvciAtIHNpZ24gaXMgaW4gYW5vdGhlciBzY29wZVxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nLCBtb3ZlIHJpZ2h0IGJ5IG9uZSBzdGVwIGFuZCByZXNldCBsZWZ0IGJvcmRlciBmbGFnXG4vLyAgICAgICA3LiBTY2FuIHRvIHRoZSByaWdodCBmcm9tIHRoZSBjdXJyZW50IGluZGV4LlxuLy8gICAgICAgOC4gSWYgcmFuIG91dCBvZiBib3VuZHMgb2YgdGhlIHN0cmluZywgc3RvcCBzY2FubmluZyBsZWZ0LCBtb3ZlIHRvIHN0ZXAgMTJcbi8vICAgICAgIDkuIElmIGhpdCBvcGVuaW5nIGJyYWNrZXQsIHNldCBvcGVuaW5nIGJyYWNrZXQgZmxhZyB0byB0cnVlLlxuLy8gICAgICAgMTAuIElmIGhpdCBjbG9zaW5nIGJyYWNrZXQsIGNoZWNrIGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZyBhbmQgc2V0IG9wZW5pbmcgYnJhY2tldCBmbGFnIHRvIGZhbHNlIGFnYWluLlxuLy8gICAgICAgICAgIC0gSWYgb3BlbmluZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCBtb3ZlIHRvIHN0ZXAgMTJcbi8vICAgICAgIDExLiBJZiBcIitcIiBvciBcIi1cIiBzaWduIHdhcyBoaXQsIGNoZWNrIGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZywgc2luY2UgaXQgbWVhbnMgdGhhdCB0aGUgKyBvciAtIHNpZ24gaXMgaW4gYW5vdGhlciBzY29wZVxuLy8gICAgICAgICAgIC0gSWYgb3BlbmluZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCByZXNldCBsZWZ0IGJvcmRlciBmbGFnXG5cbmV4cG9ydCBmdW5jdGlvbiBmaXhTY29wZXMoZ2VuKSB7XG4gICAgbGV0IGcgPSBTdHJpbmcoZ2VuKTtcblxuICAgIC8vIFZhcmlhYmxlIGFyZSB0YWtlbiBvdXRzaWRlIG9mIGZvciBsb29wLCB0byBpbmNyZWFzZSBwZXJmb3JtYW5jZS5cbiAgICAvLyBJbiB0aGlzIHdheSwgdmFyaWFibGVzIGFyZSBqdXN0IHJld3JpdHRlbiBpbiB0aGUgc2FtZSBtZW1vcnlcbiAgICAvLyBsb2NhdGlvbiBpbnN0ZWFkIG9mIGNyZWF0aW5nIG5ldyB2YXJpYWJsZSBldmVyeSB0aW1lLlxuICAgIGxldCBmb3VuZExlZnRCb3JkZXIgPSBmYWxzZTtcbiAgICBsZXQgZm91bmRSaWdodEJvcmRlciA9IGZhbHNlO1xuXG4gICAgbGV0IGp1c3RIaXRPcGVuaW5nQnJhY2tldCA9IGZhbHNlO1xuICAgIGxldCBqdXN0SGl0Q2xvc2luZ0JyYWNrZXQgPSBmYWxzZTtcblxuICAgIGxldCBsZWZ0O1xuICAgIGxldCByaWdodDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZ1tpXSA9PT0gXCIqXCIgfHwgZ1tpXSA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgIC8vIFNjYW4gbGVmdFxuICAgICAgICAgICAgZm9yIChsZWZ0ID0gaTsgIWZvdW5kTGVmdEJvcmRlcjsgbGVmdC0tKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhpdCB0aGUgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgbGVmdCBzdHJpbmcgd2FsbFxuICAgICAgICAgICAgICAgIGlmIChsZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCBzZXQgZm91bmRMZWZ0Qm9yZGVyIHZhcmlhYmxlIHRvIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIGlmIGJvdGggc2lkZXMgYXJlIGJyYWNrZXRzIG9yIG91dGVyIHdhbGxzIG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdHJpbmcsIG5ldyBicmFja2V0cyBzaG91bGQgbm90IGJlIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgaGl0cyBvcGVuaW5nIGJyYWNrZXQsIGl0IGNoZWNrcyBpZiBpdCBoaXQgY2xvc2luZyBicmFja2V0IGJlZm9yZVxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdENsb3NpbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0SGl0Q2xvc2luZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYXJrcyB0aGF0IGl0IGhpdCBjbG9zaW5nIGJyYWNrZXQsIHNvIHRoYXQgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgbGF0ZXIsXG4gICAgICAgICAgICAgICAgLy8gaXQga25vd3MgdGhhdCBpdCBzaG91bGRuJ3QgXG4gICAgICAgICAgICAgICAgaWYgKGdbbGVmdF0gPT09IFwiKVwiKSBqdXN0SGl0Q2xvc2luZ0JyYWNrZXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gRXhpdCBzY2FubmluZyBsb29wIGlmIGhpdCBwbHVzIG9yIG1pbnVzXG4gICAgICAgICAgICAgICAgLy8gQWxzbywgbW92ZSByaWdodCwgc28gdGhhdCBicmFja2VzIGlzIGluc2VydGVkIGFmdGVyICsgb3IgLSBzaWduXG4gICAgICAgICAgICAgICAgaWYgKGdbbGVmdF0gPT09IFwiK1wiIHx8IGdbbGVmdF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0Q2xvc2luZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRMZWZ0Qm9yZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTY2FuIHJpZ2h0XG4gICAgICAgICAgICBmb3IgKHJpZ2h0ID0gaTsgIWZvdW5kUmlnaHRCb3JkZXI7IHJpZ2h0KyspIHtcbiAgICAgICAgICAgICAgICAvLyBFeGl0IHRoZSBzY2FubmluZyBsb29wIGlmIGhpdCByaWdodCBzdHJpbmcgd2FsbCBvciBjbG9zaW5nIGJyYWNrZXRcbiAgICAgICAgICAgICAgICBpZiAocmlnaHQgPj0gZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCBzZXQgZm91bmRSaWdodEJvcmRlciB2YXJpYWJsZSB0byB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpZiBib3RoIHNpZGVzIGFyZSBicmFja2V0cyBvciBvdXRlciB3YWxscyBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RyaW5nLCBuZXcgYnJhY2tldHMgc2hvdWxkIG5vdCBiZSBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGhpdHMgY2xvc2luZyBicmFja2V0LCBpdCBjaGVja3MgaWYgaXQgaGl0IG9wZW5pbmcgYnJhY2tldCBiZWZvcmVcbiAgICAgICAgICAgICAgICBpZiAoZ1tyaWdodF0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0T3BlbmluZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RIaXRPcGVuaW5nQnJhY2tldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1hcmtzIHRoYXQgaXQgaGl0IGNsb3NpbmcgYnJhY2tldCwgc28gdGhhdCBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBsYXRlcixcbiAgICAgICAgICAgICAgICAvLyBpdCBrbm93cyB0aGF0IGl0IHNob3VsZG4ndCBcbiAgICAgICAgICAgICAgICBpZiAoZ1tyaWdodF0gPT09IFwiKFwiKSBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIitcIiB8fCBnW3JpZ2h0XSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRPcGVuaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFJpZ2h0Qm9yZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgb24gb25lIG9mIHRoZSBzaWRlcyB0aGVyZSBpcyArIG9yIC0gc2lnblxuICAgICAgICAgICAgaWYgKGZvdW5kTGVmdEJvcmRlciB8fCBmb3VuZFJpZ2h0Qm9yZGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gU2xpY2Ugb3JpZ2luYWwgc3RyaW5nIGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgbGV0IG9uZSA9IGcuc2xpY2UoMCwgbGVmdCk7XG4gICAgICAgICAgICAgICAgbGV0IHR3byA9IGcuc2xpY2UobGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIGxldCB0aHJlZSA9IGcuc2xpY2UocmlnaHQsIGcubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIC8vIEluc2VydCBicmFja2V0cyBiZXR3ZWVuIGZvcm1lciB0aHJlZSBzdHJpbmdzIHRvIGZvcm1cbiAgICAgICAgICAgICAgICAvLyBuZXcgc3RyaW5nIHdpdGggaW5zZXJ0ZWQgYnJhY2tldHNcbiAgICAgICAgICAgICAgICBnID0gb25lICsgXCIoXCIgKyB0d28gKyBcIilcIiArIHRocmVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXNldCBib3JkZXIgdmFyaWFibGVzXG4gICAgICAgICAgICBmb3VuZExlZnRCb3JkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvdW5kUmlnaHRCb3JkZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBnO1xufSIsImltcG9ydCB7XG4gICAgc2VwYXJhdGVOb2RlcyxcbiAgICBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5LFxuICAgIG9iamVjdFNpemUsXG4gICAgd2FzQ2FsY3VsYXRlZCxcbiAgICBhbGxJbnB1dHNDYWxjdWxhdGVkLFxuICAgIGNhbGN1bGF0ZU91dHB1dCxcbiAgICBnZXRUb3VjaElucHV0cyxcbiAgICBpbml0VGltZSxcbiAgICBnZW5lcmF0ZVRvdWNoQ29udHJvbGxlcnMsXG4gICAgZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3Jcbn0gZnJvbSAnLi9zY3JpcHRHZW5lcmF0b3JGdW5jdGlvbnMnO1xuXG5jb25zdCBTQU1QTEVfUkFURSA9IDUxMjsgLy8gU2FtcGxlcyBwZXIgc2Vjb25kXG5jb25zdCBEVVJBVElPTiA9IDI7IC8vIFNlY29uZHMsIGlkZWFsbHkgc2hvdWxkIGJlIGRpdmlkYWJsZSBieSAyXG5jb25zdCBPRkZTRVQgPSAwOyAvLyBXaGljaCBwb2ludCBzaG91bGQgYmUgdGhlIGNlbnRyZSBvZiB0aGUgc2NvcGVcblxuZXhwb3J0IGZ1bmN0aW9uIHNjcmlwdEdlbmVyYXRvcihhbGxOb2RlczogTm9kZUNvbGxlY3Rpb24sIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSkge1xuICAgIC8vIEV4ZWN1dGFibGUgdG8gc3RvcmUgZ2VuZXJhdGVkIGphdmFzY3JpcHQgY29kZS4gQW55IGluaXRpYWxpc2F0aW9uIGNvZGUgc2hvdWxkIGJlIGhlcmUuXG4gICAgbGV0IGV4ZUFycmF5OiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCBleGVjdXRhYmxlID0gXCJ2YXIgZ3JhcGhzID0ge307XFxuXCI7XG5cbiAgICAvLyBTZXR1cCB0aW1lXG4gICAgZXhlY3V0YWJsZSArPSBpbml0VGltZShPRkZTRVQgLSBEVVJBVElPTiAvIDIsIE9GRlNFVCArIERVUkFUSU9OIC8gMiwgMSAvIFNBTVBMRV9SQVRFKTtcblxuICAgIC8vIENhbGN1bGF0ZWQgbm9kZXMgaGF2ZSBmb2xsb3dpbmcgc2hhcGU6IFwibm9kZUlkOm91dHB1dElkXCJcbiAgICBsZXQgY2FsY3VsYXRlZE5vZGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgLy8gU3RhdGlzdGljcyBvYmplY3RcbiAgICBsZXQgc3RhdGlzdGljcyA9IHtcbiAgICAgICAgbG9vcENvdW50ZXI6IDAsXG4gICAgICAgIGluaXRpYWxUb3RhbE5vZGVzOiBvYmplY3RTaXplKGFsbE5vZGVzKSxcbiAgICAgICAgaW5pdGlhbFRvdGFsQ29ubmVjdG9yczogYWxsQ29ubmVjdGlvbnMubGVuZ3RoLFxuICAgICAgICBzdGFydFRpbWU6IDAsXG4gICAgICAgIGVuZFRpbWU6IDBcbiAgICB9O1xuXG4gICAgLy8gU2VwYXJhdGVzIHVuY2FsY3VsYXRlZCBub2RlcyBmcm9tIHNjb3BlcyBhbmQgVUkgYXQgdGhlIHN0YXJ0LlxuICAgIGxldCB7IHVuY2FsY3VsYXRlZE5vZGVzLCBhbGxTY29wZXMsIHVpTm9kZXMsIGZmdE5vZGVzIH0gPSBzZXBhcmF0ZU5vZGVzKGFsbE5vZGVzKTtcblxuICAgIC8vIFNlcGFyYXRlIHRvdWNoIG5vZGVzIGZvcm0gcmVndWxhciBub2Rlc1xuICAgIGxldCB0b3VjaE5vZGVzU2VwYXJhdGVkID0gZ2V0VG91Y2hJbnB1dHModW5jYWxjdWxhdGVkTm9kZXMpO1xuXG4gICAgdW5jYWxjdWxhdGVkTm9kZXMgPSB0b3VjaE5vZGVzU2VwYXJhdGVkLnVuY2FsY3VsYXRlZE5vZGVzO1xuXG4gICAgLy8gRGVhbCB3aXRoIHRvdWNoIENvbnRyb2xzXG4gICAgbGV0IHRvdWNoTm9kZXMgPSB0b3VjaE5vZGVzU2VwYXJhdGVkLnRvdWNoTm9kZXM7XG5cbiAgICBleGVjdXRhYmxlICs9IGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyh0b3VjaE5vZGVzKTtcblxuICAgIGZvciAobGV0IHQgaW4gdG91Y2hOb2Rlcykge1xuICAgICAgICBmb3IgKGxldCBvIGluIHRvdWNoTm9kZXNbdF0ub3V0cHV0cykge1xuICAgICAgICAgICAgY2FsY3VsYXRlZE5vZGVzLnB1c2goYCR7dH06JHt0b3VjaE5vZGVzW3RdLm91dHB1dHNbb10udGl0bGV9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbm5lY3Rpb24gRGljdGlvbmFyeSBjb250YWlucyBjb25uZWN0aW9ucyBpbiBrZXk6IHZhbHVlIGZvcm1hdCwgd2hlcmVcbiAgICAvLyBib3RoIGNvbnRhaW4gbm9kZUlkIGFuZCBzZXR0aW5nSWQgYXMgc3RyaW5ncyBzZXBhcmF0ZWQgYnkgYSBjb2xvbi5cbiAgICBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnkgPSBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5KGFsbENvbm5lY3Rpb25zKTtcblxuICAgIC8vIEdlbmVyYWwgcnVsZXMgZm9yIGFsZ29yaXRobSB3cml0aW5nOlxuICAgIC8vICogdXNlIGFzIG1hbnkgZnVuY3Rpb25zIGFzIHBvc3NpYmxlIChpbiBwZXJmb3JtYW5jZSBib3VuZHMpXG4gICAgLy8gKiBcblxuICAgIC8vIDAuIExvb3AgdGhyb3VnaCB1bmNhbGN1bGF0ZWQgbm9kZXMgYW5kIGZpbmQgc2NvcGVzLiBTY29wZXMgZG8gbm90IGhhdmUgb3V0cHV0cywgc28gbm8gbmVlZCB0byBmaW5kIGlucHV0cy5cbiAgICAvLyAwLjAgRG8gaXQgaW4gYSBmdW5jdGlvbj9cblxuICAgIC8vIDEuIExvb3AgdW50aWwgYWxsIG5vZGVzIGFyZSBjYWxjdWxhdGVkXG4gICAgLy8gfCAgIDEuIENoZWNrIGlmIG5vZGUgd2FzIGNhbGN1bGF0ZWQgYmVmb3JlLCBpZiB5ZXMgZ28gdG8gbmV4dCBub2RlLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIDIuIElmIHdhcyBub3QgY2FsY3VsYXRlZDpcbiAgICAvLyB8ICAgfCAgIDEuIENoZWNrIGlmIGFsbCBjb25uZWN0ZWQgaW5wdXRzIGFyZSBjb25uZWN0ZWQgdG8gdGhlIGNhbGN1bGF0ZWQgbm9kZXMsIGlmIG5vdCAtIGdvIHRvIG5leHQgbm9kZS4gKGZ1bmN0aW9uKVxuICAgIC8vIHwgICB8ICAgMi4gSWYgeWVzLCBzYXZlIGFsbCB1bmNvbm5lY3RlZCBpbnB1dHMgKHZhbHVlIGZyb20gZGVmYXVsdCB2YWx1ZSkuIChmdW5jdGlvbiBmb3IgZWFjaCBzYXZlKVxuICAgIC8vIHwgICB8ICAgMy4gQ2hlY2sgaWYgb3V0cHV0IGlzIHBvaW50aW5nIHRvIGEgZ2VuZXJhdG9yLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIHwgICA0LiBJZiB5ZXMsIHBhcnNlIGdlbmVyYXRvclxuICAgIC8vIHwgICB8ICAgfCAgIDEuIFNjYW4gZ2VuZXJhdG9yIGFuZCBzYXZlIHZhcmlhYmxlc1xuICAgIC8vIHwgICB8ICAgfCAgIDIuIElmIHZhcmlhYmxlIGlzIGEgZ2VuZXJhdG9yIGdvIHRvIHN0ZXAgMS4yLjRcbiAgICAvLyB8ICAgfCAgIHwgICAzLiBMb29wIHVudGlsIGFsbCBnZW5lcmF0b3JzIHdlcmUgcGFyc2VkXG4gICAgLy8gfCAgIHwgICB8IC0tLS0tLS0tLS0tIEluIGZvbGxvd2luZywgaW5wdXRzIGFyZSBjaGVja2VkIGZpcnN0IHNpbmNlIHNldHRpbmcgY2FuIGJlIGFuIGlucHV0IC0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB8ICAgfCAgIDUuIENoZWNrIGlmIG91dHB1dCBpcyBwb2ludGluZyB0byBhbiBpbnB1dCwgaWYgeWVzIGFzc2lnbiBpbnB1dCB2YXJpYWJsZSB0byB0aGUgb3V0cHV0IHZhcmlhYmxlXG4gICAgLy8gfCAgIHwgICA2LiBDaGVjayBpZiBvdXRwdXQgaXMgcG9pbnRpbmcgdG8gYSBzZXR0aW5nLCBpZiB5ZXMgYXNzaWduIGNvbnN0YW50IHRvIHRoZSBzZXR0aW5nXG4gICAgLy8gMi4gRm9yIGVhY2ggc2NvcGU6XG4gICAgLy8gfCAgIDEuIEdldCBhbGwgaW5wdXRzIGFuZCBzYXZlIHRoZW0gaW4gdmFyaWFibGVzIChhc3N1bWVkIHRvIGJlIGNhbGN1bGF0ZWQgc2luY2UgdGVybWluYXRpb24gY29uZGl0aW9uIGZyb20gc3RlcCAxIGlzIGJhc2VkIG9uIGFsbCBub2RlcyBiZWluZyBjYWxjdWxhdGVkLilcbiAgICAvLyB8ICAgMi4gUGFyc2UgZmlyc3QgZ2VuZXJhdG9yIGFuZCBnZW5lcmF0ZSBzY29wZSBvdXRwdXQgdmFyaWFibGUgKG1ha2luZyBzdXJlIHRoYXQgYWxsIHZhcmlhYmxlcyBmcm9tIGdlbmVyYXRvciB3ZXJlIHNhdmVkIGJlZm9yZWhhbmQpXG4gICAgLy8gfCAgIDMuIEdlbmVyYXRlIGFuIGFycmF5IG9mIG91dHB1dCBkYXRhIGJhc2VkIG9uIGdlbmVyYWwgKG9yIGNvbm5lY3RlZCkgdGltZSBhcnJheSBhbmQgc2F2ZSBpdCBpbnRvIGEgdmFyaWFibGVcbiAgICAvLyB8ICAgNC4gQ3JlYXRlIHJlZHJhdyBmdW5jdGlvbiwgaW5zaWRlIHRoYXQgZnVuY3Rpb246XG4gICAgLy8gfCAgIHwgICAxLiBGaW5kIGFwcHJvcHJpYXRlIGNhbnZhcyBub2RlIGluIHRoZSBkb21cbiAgICAvLyB8ICAgfCAgIDIuIEdldCBjb250ZXh0XG4gICAgLy8gfCAgIHwgICAzLiBSZXBvcHVsYXRlIGdyYXBoIGFycmF5IHdpdGggbmV3IGdyYXBocy5cbiAgICAvLyB8ICAgNS4gQ3JlYXRlIHVwZGF0ZURhdGEgZnVuY3Rpb24sIGluc2lkZSB0aGF0IGZ1bmN0aW9uOlxuICAgIC8vIHwgICB8ICAgMS4gTG9vcCB0aHJvdWdoIGdyYXBoIGFycmF5IGFuZCB1cGRhdGUgZ3JhcGhzIHdpdGggbmV3IGRhdGEuXG5cblxuICAgIC8vIDAuMCBMb29wIHRocm91Z2ggYWxsIHVpIG5vZGVzIGFuZCBzYXZlIHRoZWlyIG91dHB1dCB2YXJpYWJsZSBuYW1lc1xuICAgIGZvcihsZXQgbm9kZUtleSBpbiB1aU5vZGVzKSB7XG4gICAgICAgIC8vIFNhdmUgY3VycmVudCBub2RlIGludG8gYSBjb25zdGFudFxuICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHVpTm9kZXNbbm9kZUtleV07XG4gICAgICAgIGNvbnN0IG91dHB1dEtleSA9IGN1cnJlbnROb2RlLm91dHB1dHNbMF0udGl0bGU7XG5cbiAgICAgICAgZXhlY3V0YWJsZSArPSBgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke25vZGVLZXl9SW5wdXRcIikub25pbnB1dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAke25vZGVLZXl9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7bm9kZUtleX1JbmRpY2F0b3JcIikuaW5uZXJUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfTtcXG5gO1xuICAgICAgICBleGVjdXRhYmxlICs9IGB2YXIgJHtub2RlS2V5fSR7b3V0cHV0S2V5fSA9IGZ1bmN0aW9uICh0KSB7IHJldHVybiAke3VpTm9kZXNbbm9kZUtleV0uc2V0dGluZ3NbM10udmFsdWV9fTtcXG5gO1xuXG4gICAgICAgIGNhbGN1bGF0ZWROb2Rlcy5wdXNoKGAke25vZGVLZXl9OiR7b3V0cHV0S2V5fWApO1xuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuICAgIH1cbiAgICAvLyAxLiBMb29wIHVudGlsIGFsbCBub2RlcyBhcmUgY2FsY3VsYXRlZCBhbmQgY291bnQgbnVtYmVyIG9mIGl0ZXJhdGlvbnMgZm9yIHN0YXRpc3RpY3NcbiAgICBmb3IgKHN0YXRpc3RpY3MubG9vcENvdW50ZXIgPSAwOyBvYmplY3RTaXplKHVuY2FsY3VsYXRlZE5vZGVzKSA+IDA7IHN0YXRpc3RpY3MubG9vcENvdW50ZXIrKykge1xuICAgICAgICBcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB1bmNhbGN1bGF0ZWQgbm9kZXNcbiAgICAgICAgZm9yIChsZXQgbm9kZUtleSBpbiB1bmNhbGN1bGF0ZWROb2Rlcykge1xuICAgICAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG5vZGUgaW50byBhIGNvbnN0YW50XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuXG4gICAgICAgICAgICAvLyBHbyB0byBuZXh0IG5vZGUgaWYgbm90IGFsbCBjb25uZWN0ZWQgaW5wdXRzIHdlcmUgY2FsY3VsYXRlZCBhbHJlYWR5XG4gICAgICAgICAgICBpZiAoIWFsbElucHV0c0NhbGN1bGF0ZWQobm9kZUtleSwgY3VycmVudE5vZGUuaW5wdXRzLCBhbGxDb25uZWN0aW9ucywgY2FsY3VsYXRlZE5vZGVzKSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZUNhbGN1bGF0ZWRPdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggZXZlcnkgb3V0cHV0IG9mIHRoZSBub2RlIHRvIGNhbGN1bGF0ZSB0aGVtXG4gICAgICAgICAgICBmb3IgKGxldCBvID0gMDsgbyA8IGN1cnJlbnROb2RlLm91dHB1dHMubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRLZXkgPSBjdXJyZW50Tm9kZS5vdXRwdXRzW29dLnRpdGxlO1xuICAgICAgICAgICAgICAgIC8vIElmIGN1cnJlbnQgb3V0cHV0IHdhcyBjYWxjdWxhdGVkIGFscmVhZHksIHNraXAgdG8gbmV4dCBvbmVcbiAgICAgICAgICAgICAgICBpZiAod2FzQ2FsY3VsYXRlZChjYWxjdWxhdGVkTm9kZXMsIG5vZGVLZXksIG91dHB1dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0cy5wdXNoKGAke25vZGVLZXl9OiR7b3V0cHV0S2V5fWApO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBub3QsIGNhbGN1bGF0ZSBpdCBhbmQgYXBwZW5kIHRvIHRoZSBleGVjdXRhYmxlIHRleHQuXG4gICAgICAgICAgICAgICAgbGV0IHsgZXhlLCB3YXNTdWNjZXNzZnVsIH0gPSBjYWxjdWxhdGVPdXRwdXQobm9kZUtleSwgb3V0cHV0S2V5LCBjdXJyZW50Tm9kZSwgYWxsQ29ubmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmICh3YXNTdWNjZXNzZnVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWN1dGFibGUgKz0gZXhlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWROb2Rlcy5wdXNoKGAke25vZGVLZXl9OiR7b3V0cHV0S2V5fWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCBnZW5lcmF0ZSBvdXRwdXQgY29kZTogJHtub2RlS2V5fSAtICR7b3V0cHV0S2V5fSB8IHNjcmlwdEdlbmVyYXRvci50c2ApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0cy5sZW5ndGggPT09IGN1cnJlbnROb2RlLm91dHB1dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gTG9vcCB0aHJvdWdoIGFsbCBzY29wZXMgYW5kIGRyYXcgZ3JhcGhzXG5cbiAgICBleGVBcnJheS5wdXNoKGV4ZWN1dGFibGUpO1xuICAgIGV4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZXhlY3V0YWJsZSArPSBcImZ1bmN0aW9uIHVwZGF0ZSgpIHtcXG5cIjtcblxuICAgIC8vIExvb3AgdGhyb3VnaCB0aW1lIHNjb3Blc1xuICAgIGZvciAobGV0IHMgaW4gYWxsU2NvcGVzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29wZSA9IGFsbFNjb3Blc1tzXTtcbiAgICAgICAgY29uc3QgeyBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQgfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7IG5vZGVJZDogcywgc2V0dGluZ0lkOiBcInNpZ25hbFwiIH0pO1xuXG4gICAgICAgIGV4ZWN1dGFibGUgKz0gYFxuICAgICAgICBpZihncmFwaHMuJHtzfSkge1xuICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7bmV3RGF0YS5wdXNoKCR7b3RoZXJOb2RlSWR9JHtvdGhlclNldHRpbmdJZH0odFtpXSkpO31cbiAgICAgICAgICAgIGdyYXBocy4ke3N9LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IG5ld0RhdGE7XG4gICAgICAgICAgICBncmFwaHMuJHtzfS51cGRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjYW52YXNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke3N9XCIpO1xuXG4gICAgICAgICAgICB2YXIgdmlld1NpemUgPSB7XG4gICAgICAgICAgICAgICAgeDogY2FudmFzTm9kZS5wYXJlbnROb2RlLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgICAgIHk6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHcgPSB2aWV3U2l6ZS54O1xuICAgICAgICAgICAgdmFyIGggPSB2aWV3U2l6ZS55O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYW52YXNOb2RlLndpZHRoID0gdztcbiAgICAgICAgICAgIGNhbnZhc05vZGUuaGVpZ2h0ID0gaDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGN0eCA9IGNhbnZhc05vZGUuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRhdGEucHVzaCgke290aGVyTm9kZUlkfSR7b3RoZXJTZXR0aW5nSWR9KHRbaV0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtsYWJlbHM6IHQubWFwKHRpID0+IHRpLnRvRml4ZWQoMikpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNpZ25hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnJHtjdXJyZW50U2NvcGUuc2V0dGluZ3NbMV0udmFsdWV9JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVuc2lvbjogMC40LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBwZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRSYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJSYWRpdXM6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMFxuICAgICAgICAgICAgICAgICAgICB9LCB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSwgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9JHtjdXJyZW50U2NvcGUuc2V0dGluZ3NbMF0udmFsdWUgPT0gXCJ0cnVlXCIgPyAnJyA6IGAsIHNjYWxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMC4wMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dLCB5QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFNpemU6IDAuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1gfSwgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJHtjdXJyZW50U2NvcGUudGl0bGV9JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBncmFwaHMuJHtzfSA9IG15Q2hhcnQ7XG4gICAgICAgIH1gO1xuXG4gICAgICAgIGV4ZUFycmF5LnB1c2goZXhlY3V0YWJsZSk7XG4gICAgICAgIGV4ZWN1dGFibGUgPSBcIlwiO1xuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBmZnQgc2NvcGVzXG4gICAgZm9yKGxldCBmIGluIGZmdE5vZGVzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29wZSA9IGZmdE5vZGVzW2ZdO1xuICAgICAgICBjb25zdCB7IG90aGVyTm9kZUlkLCBvdGhlclNldHRpbmdJZCB9ID0gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoYWxsQ29ubmVjdGlvbnMsIG51bGwsIHsgbm9kZUlkOiBmLCBzZXR0aW5nSWQ6IFwic2lnbmFsXCIgfSk7XG5cbiAgICAgICAgZXhlY3V0YWJsZSArPSBgXG4gICAgICAgIGlmKGdyYXBocy4ke2Z9KSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtkYXRhLnB1c2goJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0W2ldKSk7fVxuXG4gICAgICAgICAgICBsZXQgZiA9IG5ldyBGRlQoZGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGNvbXBsZXhPdXRwdXQgPSBmLmNyZWF0ZUNvbXBsZXhBcnJheSgpO1xuICAgICAgICAgICAgZi5yZWFsVHJhbnNmb3JtKGNvbXBsZXhPdXRwdXQsIGRhdGEpO1xuICAgICAgICAgICAgbGV0IHJlYWxPdXRwdXQgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgcmVhbE91dHB1dC5maWxsKDApO1xuICAgICAgICAgICAgZi5mcm9tQ29tcGxleEFycmF5KGNvbXBsZXhPdXRwdXQsIHJlYWxPdXRwdXQpO1xuXG4gICAgICAgICAgICAvLyByZWFsT3V0cHV0ID0gcmVhbE91dHB1dC5maWx0ZXIoKHZhbCwgaSkgPT4gaSUyID09IDAgfHwgaSA9PSAwKTtcblxuICAgICAgICAgICAgcmVhbE91dHB1dCA9IHJlYWxPdXRwdXQuc3BsaWNlKDAsICR7Y3VycmVudFNjb3BlLnNldHRpbmdzWzNdLnZhbHVlfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0Lm1hcCh2YWwgPT4gdmFsICogMiAvIGRhdGEubGVuZ3RoKTtcblxuICAgICAgICAgICAgZ3JhcGhzLiR7Zn0uZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gcmVhbE91dHB1dDtcbiAgICAgICAgICAgIGdyYXBocy4ke2Z9LnVwZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNhbnZhc05vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7Zn1cIik7XG5cbiAgICAgICAgICAgIHZhciB2aWV3U2l6ZSA9IHtcbiAgICAgICAgICAgICAgICB4OiBjYW52YXNOb2RlLnBhcmVudE5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgeTogY2FudmFzTm9kZS5wYXJlbnROb2RlLm9mZnNldEhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdyA9IHZpZXdTaXplLng7XG4gICAgICAgICAgICB2YXIgaCA9IHZpZXdTaXplLnk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbnZhc05vZGUud2lkdGggPSB3O1xuICAgICAgICAgICAgY2FudmFzTm9kZS5oZWlnaHQgPSBoO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzTm9kZS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gW107XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKCR7b3RoZXJOb2RlSWR9JHtvdGhlclNldHRpbmdJZH0odFtpXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZiA9IG5ldyBGRlQoZGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGNvbXBsZXhPdXRwdXQgPSBmLmNyZWF0ZUNvbXBsZXhBcnJheSgpO1xuICAgICAgICAgICAgZi5yZWFsVHJhbnNmb3JtKGNvbXBsZXhPdXRwdXQsIGRhdGEpO1xuICAgICAgICAgICAgbGV0IHJlYWxPdXRwdXQgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgcmVhbE91dHB1dC5maWxsKDApO1xuICAgICAgICAgICAgZi5mcm9tQ29tcGxleEFycmF5KGNvbXBsZXhPdXRwdXQsIHJlYWxPdXRwdXQpO1xuXG4gICAgICAgICAgICAvLyByZWFsT3V0cHV0ID0gcmVhbE91dHB1dC5maWx0ZXIoKHZhbCwgaSkgPT4gaSUyID09IDAgfHwgaSA9PSAwKTtcblxuICAgICAgICAgICAgcmVhbE91dHB1dCA9IHJlYWxPdXRwdXQuc3BsaWNlKDAsICR7Y3VycmVudFNjb3BlLnNldHRpbmdzWzNdLnZhbHVlfSk7XG5cbiAgICAgICAgICAgIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0Lm1hcCh2YWwgPT4gdmFsICogMiAvIGRhdGEubGVuZ3RoKTtcblxuICAgICAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHJlYWxPdXRwdXQubWFwKCh2YWwsIGkpID0+IHBhcnNlRmxvYXQoaS8yKS50b0ZpeGVkKDEpKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaWduYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI0NSwgMjMsIDU0LCAwLjQpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigwLCAwLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVhbE91dHB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJHtjdXJyZW50U2NvcGUuaW5wdXRzLmxlbmd0aCA+IDF9XG4gICAgICAgICAgICAgICAgICAgIH0sIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJyR7Y3VycmVudFNjb3BlLnRpdGxlfScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ3JhcGhzLiR7Zn0gPSBteUNoYXJ0O1xuICAgICAgICB9YDtcbiAgICB9XG5cbiAgICBleGVjdXRhYmxlICs9IFwifTtcXG5cIlxuICAgIGV4ZWN1dGFibGUgKz0gXCJ1cGRhdGUoKTtcIlxuXG4gICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICBleGVjdXRhYmxlID0gXCJcIjtcblxuICAgIHJldHVybiBleGVBcnJheTtcbn0iLCJpbXBvcnQgeyB0b2tlbml6ZUdlbmVyYXRvciwgR2VuZXJhdG9yU2VnbWVudCB9IGZyb20gJy4vZ2VuZXJhdG9yVG9rZW5pemVyJztcbmltcG9ydCB7IHRva2VuVG9KcyB9IGZyb20gJy4vdG9rZW5Ub0pzJztcblxuLy8gR2V0IGFsbCBub2RlcyB0aGF0IGFyZSBub3Qgc2NvcGVzLCBhbmQgc2F2ZSBzY29wZXMgaW50byB0aGVpciBvd24gY29sbGVjdGlvblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlTm9kZXMgKGFsbE5vZGVzOiBOb2RlQ29sbGVjdGlvbik6IHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IE5vZGVDb2xsZWN0aW9uLCBcbiAgICAgICAgYWxsU2NvcGVzOiBOb2RlQ29sbGVjdGlvbixcbiAgICAgICAgdWlOb2RlczogTm9kZUNvbGxlY3Rpb24sXG4gICAgICAgIGZmdE5vZGVzOiBOb2RlQ29sbGVjdGlvbn0ge1xuICAgIGxldCB1bmNhbGN1bGF0ZWQ6IE5vZGVDb2xsZWN0aW9uID0ge307XG4gICAgbGV0IHNjb3BlczogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgdWlOb2RlczogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgZmZ0Tm9kZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG5cbiAgICBmb3IobGV0IGkgaW4gYWxsTm9kZXMpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBVSSBub2RlXG4gICAgICAgIGNvbnN0IGlzVGhpcmRMZXR0ZXJVcHBlckNhc2UgPSBTdHJpbmcoaSkuc3Vic3RyKDIsIDEpLnRvVXBwZXJDYXNlKCkgPT09IFN0cmluZyhpKS5zdWJzdHIoMiwgMSk7XG4gICAgICAgIGNvbnN0IGlzVUkgPSBTdHJpbmcoaSkuc3Vic3RyKDAsIDIpID09PSBcInVpXCI7XG4gICAgICAgIGNvbnN0IGlzQWN0dWFsVUkgPSBpc1VJICYmIGlzVGhpcmRMZXR0ZXJVcHBlckNhc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBzY29wZVxuICAgICAgICBjb25zdCBpc1Njb3BlID0gU3RyaW5nKGkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGlzIGFuIGZmdCBzY29wZVxuICAgICAgICBjb25zdCBpc0ZGVCA9IFN0cmluZyhpKS5zdWJzdHIoMCwgMykgPT09IFwiZmZ0XCI7XG5cbiAgICAgICAgLy8gRG8gc2VwYXJhdGlvblxuICAgICAgICBpZihpc1Njb3BlKSB7XG4gICAgICAgICAgICBzY29wZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIGlmKGlzQWN0dWFsVUkpIHtcbiAgICAgICAgICAgIHVpTm9kZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIGlmKGlzRkZUKSB7XG4gICAgICAgICAgICBmZnROb2Rlc1tpXSA9IGFsbE5vZGVzW2ldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdW5jYWxjdWxhdGVkW2ldID0gYWxsTm9kZXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm4gcmVzdWx0c1xuICAgIHJldHVybiB7XG4gICAgICAgIHVuY2FsY3VsYXRlZE5vZGVzOiB1bmNhbGN1bGF0ZWQsXG4gICAgICAgIGFsbFNjb3Blczogc2NvcGVzLFxuICAgICAgICB1aU5vZGVzOiB1aU5vZGVzLFxuICAgICAgICBmZnROb2RlczogZmZ0Tm9kZXNcbiAgICB9O1xufVxuXG4vLyBHZW5lcmF0ZSBjb25uZWN0aW9uIGRpY3Rpb25hcnlcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5IChhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10pOiB7W2Nvbm5lY3RvclN0YXJ0OiBzdHJpbmddOiBzdHJpbmd9IHtcbiAgICBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnk6IHtbY29ubmVjdG9yU3RhcnQ6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb25uZWN0b3JTdGFydCA9IGFsbENvbm5lY3Rpb25zW2ldLmNvbm5lY3RvclN0YXJ0O1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmQgPSBhbGxDb25uZWN0aW9uc1tpXS5jb25uZWN0b3JFbmQ7XG5cbiAgICAgICAgY29uc3QgY29ubmVjdG9yU3RhcnRDb21iaW5lZCA9IGNvbm5lY3RvclN0YXJ0Lm5vZGVJZCArIFwiOlwiICsgY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkO1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmRDb21iaW5lZCA9IGNvbm5lY3RvckVuZC5ub2RlSWQgKyBcIjpcIiArIGNvbm5lY3RvckVuZC5zZXR0aW5nSWQ7XG5cbiAgICAgICAgY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdG9yU3RhcnRDb21iaW5lZF0gPSBjb25uZWN0b3JFbmRDb21iaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29ubmVjdGlvbkRpY3Rpb25hcnk7XG59XG5cbi8vIENhbGN1bGF0ZSBvYmplY3Qgc2l6ZVxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFNpemUgKG9iajogb2JqZWN0KTogbnVtYmVyIHtcbiAgICBsZXQgYyA9IDA7XG4gICAgZm9yKGxldCBpIGluIG9iaikgYysrO1xuICAgIHJldHVybiBjKys7XG59XG5cbi8vIENoZWNrIGlmIG5vZGUgd2FzIGNhbGN1bGF0ZWQgYWxyZWFkeVxuZXhwb3J0IGZ1bmN0aW9uIHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzOiBzdHJpbmdbXSwgbm9kZUtleTogc3RyaW5nLCBvdXRwdXRLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYWxjdWxhdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU3BsaXQgc3RyaW5nIGZyb20gY2FsY3VsYXRlZCBub2RlcyBhcnJheSBhbmQgZ2V0IG5vZGUgYW5kIG91dHB1dCBrZXlzXG4gICAgICAgIGNvbnN0IHNwbGl0dGVkID0gY2FsY3VsYXRlZE5vZGVzW2ldLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE5vZGUgPSBzcGxpdHRlZFswXTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE91dHB1dCA9IHNwbGl0dGVkWzFdO1xuXG4gICAgICAgIGlmKGNhbGN1bGF0ZWROb2RlID09PSBub2RlS2V5ICYmIGNhbGN1bGF0ZWRPdXRwdXQgPT09IG91dHB1dEtleSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBHZXQgbm9kZUlkIGFuZCBzZXR0aW5nSWQgb2YgdGhlIG90aGVyIHNpZGUgb2YgdGhlIGNvbm5lY3Rpb246XG5leHBvcnQgZnVuY3Rpb24gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoXG4gICAgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBcbiAgICBjb25uZWN0b3JJbnB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9LFxuICAgIGNvbm5lY3Rvck91dHB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9KToge290aGVyTm9kZUlkOiBzdHJpbmcsIG90aGVyU2V0dGluZ0lkOiBzdHJpbmd9IHtcblxuICAgIGlmKGNvbm5lY3RvcklucHV0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgY29ubmVjdG9yIHN0YXJ0cy4uLlwiKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RvciA9IGFsbENvbm5lY3Rpb25zW2ldO1xuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIHN0YXJ0XG4gICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQubm9kZUlkID09PSBjb25uZWN0b3JJbnB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkID09PSBjb25uZWN0b3JJbnB1dC5zZXR0aW5nSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZUlkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyU2V0dGluZ0lkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChjb25uZWN0b3JPdXRwdXQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTY2FubmluZyBjb25uZWN0b3IgZW5kcy4uLiBcIiwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29ubmVjdG9yID0gYWxsQ29ubmVjdGlvbnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ29tcGFyaW5nIGZvbGxvd2luZyBjb25uZWN0b3JzOiBcIiwgY29ubmVjdG9yLmNvbm5lY3RvckVuZCwgY29ubmVjdG9yT3V0cHV0KVxuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIGVuZFxuICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvckVuZC5ub2RlSWQgPT09IGNvbm5lY3Rvck91dHB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZCA9PT0gY29ubmVjdG9yT3V0cHV0LnNldHRpbmdJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclNldHRpbmdJZDogY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0LnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3RoZXJOb2RlSWQ6IG51bGwsXG4gICAgICAgIG90aGVyU2V0dGluZ0lkOiBudWxsXG4gICAgfVxufVxuXG5cbi8vIENoZWNrIGlmIGFsbCBjb25uZWN0ZWQgaW5wdXRzIGluIHRoZSBub2RlIGFyZSBjb25uZWN0ZWQgdG8gdGhlIG91dHB1dHMgdGhhdCB3ZXJlIGFscmVhZHkgY2FsY3VsYXRlZCBvciBhcmUgbm90IGNvbm5lY3RlZFxuZXhwb3J0IGZ1bmN0aW9uIGFsbElucHV0c0NhbGN1bGF0ZWQobm9kZUlkOiBzdHJpbmcsIGlucHV0czogTm9kZUlucHV0U2hhcGVbXSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgbGV0IGRhdGE6IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudERhdGEgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7bm9kZUlkOiBub2RlSWQsIHNldHRpbmdJZDogaW5wdXRzW2ldLnRpdGxlfSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGNvbm5lY3RlZFxuICAgICAgICBpZihvdGhlck5vZGVJZCAmJiBvdGhlclNldHRpbmdJZCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2FzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIGlmKHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzLCBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIG5vdCBjb25uZWN0ZWRcbiAgICAgICAgICAgIGN1cnJlbnREYXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaChjdXJyZW50RGF0YSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBkIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGFbZF0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIHNwZWNpZmljIG91dHB1dCBvZiB0aGUgbm9kZVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU91dHB1dChcbiAgICBub2RlSWQ6IHN0cmluZywgXG4gICAgb3V0cHV0S2V5OiBzdHJpbmcsIFxuICAgIGN1cnJlbnROb2RlOiBTaWduYWxOb2RlLFxuICAgIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHsgZXhlOiBzdHJpbmcsIHdhc1N1Y2Nlc3NmdWw6IGJvb2xlYW4gfSB7XG4gICAgXG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgY29uc3QgZ2VuZXJhdG9ySWQgPSBpc0dlbmVyYXRvcihjdXJyZW50Tm9kZSwgb3V0cHV0S2V5KTtcblxuICAgIC8vIENoZWNrIGlmIG91dHB1dCBpcyBhIGdlbmVyYXRvclxuICAgIGlmKGdlbmVyYXRvcklkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBjb25zdCBvdXRwdXRHZW5lcmF0b3IgPSBjdXJyZW50Tm9kZS5nZW5lcmF0b3JzW2dlbmVyYXRvcklkXTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSB0b2tlbnNcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdG9rZW5pemVHZW5lcmF0b3Iob3V0cHV0R2VuZXJhdG9yLnZhbHVlLCBub2RlSWQpO1xuXG4gICAgICAgIC8vIFNhdmUgdmFyaWFibGVzIGZpcnN0XG4gICAgICAgIGUgKz0gc2F2ZVZhcmlhYmxlcyhub2RlSWQsIGN1cnJlbnROb2RlLCB0b2tlbnMsIGFsbENvbm5lY3Rpb25zKTtcblxuICAgICAgICAvLyBTYXZlIG91dHB1dFxuICAgICAgICBlICs9IHRva2VuVG9Kcyhub2RlSWQsIG91dHB1dEdlbmVyYXRvci50aXRsZSwgdG9rZW5zKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRJZCA9IGlzSW5wdXQoY3VycmVudE5vZGUsIG91dHB1dEtleSk7XG5cbiAgICBpZihpbnB1dElkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IHNhdmVJbnB1dFZhcmlhYmxlKGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUlkLCBvdXRwdXRLZXksIGlucHV0SWQpO1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZUlkfSR7Y3VycmVudE5vZGUuaW5wdXRzW2lucHV0SWRdLnRpdGxlfX07XFxuYDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dGluZ0lkID0gaXNTZXR0aW5nKGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuXG4gICAgaWYoc2V0dGluZ0lkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7Y3VycmVudE5vZGUuc2V0dGluZ3Nbc2V0dGluZ0lkXS52YWx1ZX19O1xcbmA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4ZTogZSxcbiAgICAgICAgICAgIHdhc1N1Y2Nlc3NmdWw6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGV4ZTogXCJcIixcbiAgICAgICAgd2FzU3VjY2Vzc2Z1bDogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVWYXJpYWJsZXMobm9kZUtleTogc3RyaW5nLCBub2RlOiBTaWduYWxOb2RlLCBjb2RlOiBHZW5lcmF0b3JTZWdtZW50W10sIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBzID0gMDsgcyA8IGNvZGUubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgaWYoY29kZVtzXS50eXBlID09PSBcInZhclwiKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJOYW1lOiBzdHJpbmcgPSBTdHJpbmcoY29kZVtzXS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJOYW1lLnN1YnN0cihub2RlS2V5Lmxlbmd0aCwgdmFyTmFtZS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTUEVDSUFMIENBU0UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZih2YXJOYW1lID09PSBcIlBJXCIgfHwgdmFyTmFtZSA9PT0gXCJ0aW1lXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBJTlBVVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgaW5wdXQgaW5kZXhcbiAgICAgICAgICAgIGxldCBpbnB1dEtleTogbnVtYmVyID0gaXNJbnB1dChub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiB2YXJpYWJsZSBpcyB0aGUgaW5wdXQgKGlmIG5vdCBpbnB1dCBpdCB3aWxsIGJlIEluZmluaXR5KVxuICAgICAgICAgICAgaWYoaW5wdXRLZXkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZVxuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gc2F2ZUlucHV0VmFyaWFibGUobm9kZSwgYWxsQ29ubmVjdGlvbnMsIG5vZGVLZXksIHZhcmlhYmxlTmFtZSwgaW5wdXRLZXkpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEZvdW5kIHZhcmlhYmxlIGluIGlucHV0cyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBbmQgY29udGludWUgdG8gdGhlIG5leHQgc3RlcCBpbiB0aGUgdG9rZW5pc2VkIGdlbmVyYXRvciBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIEdFTkVSQVRPUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgZ2VuZXJhdG9yIGluZGV4XG4gICAgICAgICAgICBsZXQgZ2VuZXJhdG9yS2V5OiBudW1iZXIgPSBpc0dlbmVyYXRvcihub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiBnZW5lcmF0b3IgaW5kZXggaXMgbm90IGFuIEluZmluaXR5LCB0aGUgc2V0dGluZyBpcyB0aGUgZ2VuZXJhdG9yLCBhbmQgc2hvdWxkIGJlIHByb2Nlc3NlZCBhcyBvbmVcbiAgICAgICAgICAgIGlmKGdlbmVyYXRvcktleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSBub2RlLmdlbmVyYXRvcnNbZ2VuZXJhdG9yS2V5XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHRva2VuaXplR2VuZXJhdG9yKGdlbmVyYXRvci52YWx1ZSwgbm9kZUtleSk7XG5cbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgdG9rZW5zLCBhbGxDb25uZWN0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBnZW5lcmF0b3IgdGl0bGVcbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHRva2VuVG9Kcyhub2RlS2V5LCBnZW5lcmF0b3IudGl0bGUsIHRva2Vucyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gZ2VuZXJhdG9ycyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0byB0aGUgbmV4dCB0b2tlblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTRVRUSU5HIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBzZXR0aW5nIGluZGV4XG4gICAgICAgICAgICBsZXQgc2V0dGluZ0tleTogbnVtYmVyID0gaXNTZXR0aW5nKG5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHNldHRpbmcgaW5kZXggaXMgbm90IGluZmluaXR5IC0gaXQncyBhIG1hdGNoIVxuICAgICAgICAgICAgaWYoc2V0dGluZ0tleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gc2V0dGluZ3MgJHt2YXJpYWJsZU5hbWV9IC0gJHtub2RlS2V5fWApO1xuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gYHZhciAke25vZGVLZXl9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZS5zZXR0aW5nc1tzZXR0aW5nS2V5XS52YWx1ZX0gfTtcXG5gO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBOT1QgQU5ZIE9GIFRIUkVFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIElmIG5vdCBvbmUgb2YgcHJldmlvdXMgdGhyZWUsIGFsZXJ0IHVzZXIuXG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IGBhbGVydChcIkNvdWxkbid0IGZpbmQgZ2VuZXJhdG9yIHZhcmlhYmxlIGluIHRoZSBpbnB1dHMsIGdlbmVyYXRvcnMgb3Igc2V0dGluZ3MhICR7bm9kZUtleX0gLSAke3Zhck5hbWV9XCIpO1xcbmA7XG4gICAgICAgIH0gZWxzZSBpZihjb2RlW3NdLnR5cGUgPT09IFwibWF0aFwiIHx8IGNvZGVbc10udHlwZSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgY29kZVtzXS5jb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gc2F2ZUlucHV0VmFyaWFibGUobm9kZTogU2lnbmFsTm9kZSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBub2RlS2V5OiBzdHJpbmcsIHNldHRpbmdLZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGU6IHN0cmluZztcbiAgICBjb25zdCBjb25uZWN0b3JFbmQgPSB7XG4gICAgICAgIG5vZGVJZDogbm9kZUtleSxcbiAgICAgICAgc2V0dGluZ0lkOiBzZXR0aW5nS2V5XG4gICAgfVxuICAgIFxuICAgIGxldCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCBjb25uZWN0b3JFbmQpO1xuXG4gICAgLy8gY29uc29sZS5sb2coYFRyYWNpbmcgYmFjayB0aGUgaW5wdXQ6ICR7bm9kZUtleX06JHtzZXR0aW5nS2V5fSAtPiAke290aGVyTm9kZUlkfToke290aGVyU2V0dGluZ0lkfWApO1xuICAgIFxuICAgIC8vIElmIG5vZGUgaXMgY29ubmVjdGVkXG4gICAgaWYob3RoZXJOb2RlSWQgJiYgb3RoZXJTZXR0aW5nSWQpIHtcbiAgICAgICAgLy8gU2F2ZSBcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0aW1lKX07XFxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTYXZlIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtub2RlLmlucHV0c1tpbmRleF0uZGVmYXVsdH19O1xcbmBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gaXNJbnB1dCAobm9kZTogU2lnbmFsTm9kZSwgc2V0dGluZ0tleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBDaGVjayBpZiB2YXJpYWJsZSBpcyBpbiBpbnB1dHNcbiAgICBpZihub2RlLmlucHV0cykge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZS5pbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIElmIHZhcmlhYmxlIGlzIHRoZSBpbnB1dCwgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIGlmKG5vZGUuaW5wdXRzW2ldLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW5maW5pdHk7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5nZW5lcmF0b3JzKSB7XG4gICAgICAgIGlmKG5vZGUuZ2VuZXJhdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IobGV0IGcgPSAwOyBnIDwgbm9kZS5nZW5lcmF0b3JzLmxlbmd0aDsgZysrKSB7XG4gICAgICAgICAgICAgICAgaWYobm9kZS5nZW5lcmF0b3JzW2ddLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cblxuZnVuY3Rpb24gaXNTZXR0aW5nKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5zZXR0aW5ncykge1xuICAgICAgICBmb3IobGV0IHMgPSAwOyBzIDwgbm9kZS5zZXR0aW5ncy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gc2V0dGluZ0tleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEluZmluaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hJbnB1dHMoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKToge3VuY2FsY3VsYXRlZE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgdG91Y2hOb2RlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgbmV3Q29sbGVjdGlvbjogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgbmV3VG91Y2hDb2xsZWN0aW9uOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuXG4gICAgZm9yKGxldCBuIGluIGFsbE5vZGVzKSB7XG4gICAgICAgIGlmKG4uc3Vic3RyKDAsIDEwKSA9PT0gXCJ0b3VjaElucHV0XCIpIHtcbiAgICAgICAgICAgIG5ld1RvdWNoQ29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IG5ld0NvbGxlY3Rpb24sXG4gICAgICAgIHRvdWNoTm9kZXM6IG5ld1RvdWNoQ29sbGVjdGlvblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lKHN0YXJ0OiBudW1iZXIsIHN0b3A6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgbGV0IGUgPSBcImxldCB0ID0gXCI7XG5cbiAgICBlKz0gYChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgciA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAke3N0YXJ0fTsgaSA8ICR7c3RvcH07IGkrPSR7c3RlcH0pIHtcbiAgICAgICAgICAgIHIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9KSgpO2BcblxuICAgIHJldHVybiBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzKG5vZGVzOiBOb2RlQ29sbGVjdGlvbik6IHN0cmluZyB7XG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBpIGluIG5vZGVzKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblxuICAgICAgICBsZXQgc2Vuc2l0aXZpdHk6IE5vZGVTZXR0aW5nc1NoYXBlO1xuICAgICAgICBsZXQgYXR0YWNoZWRTY29wZTogTm9kZVNldHRpbmdzU2hhcGU7XG5cbiAgICAgICAgLy8gU2VwYXJhdGUgc2V0dGluZ3NcbiAgICAgICAgZm9yKGxldCBzIGluIG5vZGUuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmKG5vZGUuc2V0dGluZ3Nbc10udGl0bGUgPT09IFwiU2Vuc2l0aXZpdHlcIikge1xuICAgICAgICAgICAgICAgIHNlbnNpdGl2aXR5ID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIlNjb3BlXCIpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hlZFNjb3BlID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRvdWNoIG5vZGUgaXMgbm90IGNvcnJlY3RseSBmb3JtYXR0ZWQuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBvZmZzZXRTY3JpcHQgPSBgaWYoIWRpZEF0dGFjaCR7aX0pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHthdHRhY2hlZFNjb3BlLnZhbHVlfVwiKS5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFhEYXRhICs9IGUubW92ZW1lbnRYKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuICAgICAgICAgICAgICAgICAgICAke2l9T2Zmc2V0WURhdGEgKz0gZS5tb3ZlbWVudFkqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke2F0dGFjaGVkU2NvcGUudmFsdWV9XCIpLm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudFggPSB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25YIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50WSA9IHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgLSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFhEYXRhICs9IG1vdmVtZW50WCoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFlEYXRhICs9IG1vdmVtZW50WSoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpZEF0dGFjaCR7aX1PZmZzZXRYID0gdHJ1ZTtcbiAgICAgICAgICAgIGRpZEF0dGFjaCR7aX1PZmZzZXRZID0gdHJ1ZTtcbiAgICAgICAgfVxcbmA7XG5cbiAgICAgICAgZm9yKGxldCBvIGluIG5vZGUub3V0cHV0cykge1xuICAgICAgICAgICAgZSArPSBgdmFyICR7aX0ke25vZGUub3V0cHV0c1tvXS50aXRsZX1EYXRhID0gMTtcXG5gO1xuICAgICAgICAgICAgZSArPSBgdmFyIGRpZEF0dGFjaCR7aX0gPSBmYWxzZTtcXG5gO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUgKz0gYHZhciAke2l9JHtub2RlLm91dHB1dHNbb10udGl0bGV9ID0gZnVuY3Rpb24odGltZSkgeyByZXR1cm4gJHtpfSR7bm9kZS5vdXRwdXRzW29dLnRpdGxlfURhdGEgfTtcXG5gXG4gICAgICAgIH1cblxuICAgICAgICBlICs9IG9mZnNldFNjcmlwdDtcbiAgICB9XG5cbiAgICByZXR1cm4gZTtcbn0iLCIvLyBBcyBhIHJlbWluZGVyOlxuLy8gT25lIGl0ZW0gaW4gYW4gYXJyYXkgb2YgdG9rZW5zIGNhbiBvbmx5IGJlIGFuIG9iamVjdCBhbmQgb25seSBoYXZlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuLy8gKiB0eXBlICAgICAgICAgICAtIGZvciBldmVyeSB0b2tlblxuLy8gKiB2YWx1ZSAgICAgICAgICAtIGZvciBldmVyeSB0b2tlblxuLy8gKiBjb2RlICAtIGZvciBzY29wZXMgKG1hdGgvcmVndWxhcilcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuVG9KcyAobm9kZUlkLCB2YXJpYWJsZU5hbWUsIGpzb25Ub2tlbnMpIHtcbiAgICBsZXQgZXhlY3V0YWJsZVN0cmluZyA9IGB2YXIgJHtub2RlSWR9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24odGltZSkgeyByZXR1cm4gYDtcbiAgICBcbiAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUoWy4uLmpzb25Ub2tlbnNdKVxuXG4gICAgcmV0dXJuIGV4ZWN1dGFibGVTdHJpbmcgKyBcIn07XFxuXCI7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNvZGUoanNvbikge1xuICAgIGxldCBleGVjdXRhYmxlU3RyaW5nID0gXCJcIjtcblxuICAgIGlmKGpzb24gPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBWYXJpYWJsZXMgZm9yIGNvbnZlbmllbmNlXG4gICAgICAgIGNvbnN0IHRva2VuID0ganNvbltpXTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRva2VuLnR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdG9rZW4udmFsdWU7XG5cbiAgICAgICAgLy8gQWN0dWFsIGxvZ2ljXG4gICAgICAgIGlmKHR5cGUgIT0gXCJzY29wZVwiICYmIHR5cGUgIT0gXCJtYXRoXCIpIHtcbiAgICAgICAgICAgIC8vIE9uZSBvZiB0aGUgYmFzaWMgdHlwZXNcblxuICAgICAgICAgICAgaWYodmFsdWUgPT09ICdQSScpIHtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC5QSVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInZhclwiICYmIHZhbHVlICE9PSBcInRpbWVcIikge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gYCR7dmFsdWV9KHRpbWUpYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIm1hdGhcIikge1xuICAgICAgICAgICAgLy8gTWF0aCBmdW5jdGlvblxuXG4gICAgICAgICAgICBpZih2YWx1ZSA9PT0gXCJzaW5cIikge1xuICAgICAgICAgICAgICAgIC8vIElmIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZ1bmN0aW9ucywgcmVjdXJzZXZseSBnZW5lcmF0ZSBzdHJpbmcgZnJvbSB0aGUgY29kZSBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC5zaW4oXCI7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIpXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT09IFwiY29zXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmdW5jdGlvbnMsIHJlY3Vyc2V2bHkgZ2VuZXJhdGUgc3RyaW5nIGZyb20gdGhlIGNvZGUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguY29zKFwiO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKTtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09PSBcInRhblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBzdXBwb3J0ZWQgZnVuY3Rpb25zLCByZWN1cnNldmx5IGdlbmVyYXRlIHN0cmluZyBmcm9tIHRoZSBjb2RlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLnRhbihcIjtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm90IHN1cHBvcnRlZCBmdW5jdGlvbiwgdGhyb3cgZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5zdXBwb3J0ZWQgbWF0aCBmdW5jdGlvbiAhISFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZWd1bGFyIHNjb3BlXG5cbiAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIoXCIgKyBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXhlY3V0YWJsZVN0cmluZztcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSAoc2V0dGluZ3NDb3VudCwgc2NvcGVDb3VudCkgPT4ge1xuICAgIC8vIGNvbnN0IGlzT25seVNjb3BlcyA9IChzZXR0aW5nc0NvdW50ID09PSAwICYmIHNjb3BlQ291bnQgPiAwKTtcbiAgICAvLyBjb25zdCBpc09ubHlTZXR0aW5ncyA9IChzZXR0aW5nc0NvdW50ID4gMCAmJiBzY29wZUNvdW50ID09PSAwKTtcbiAgICBjb25zdCBpc1NldHRpbmdzQW5kU2NvcGVzID0gKHNldHRpbmdzQ291bnQgPiAwICYmIHNjb3BlQ291bnQgPiAwKTtcbiAgICBcbiAgICBjb25zdCBpc0RpdmlkYWJsZUJ5VHdvID0gc2NvcGVDb3VudCUyID09IDA7XG5cbiAgICByZXR1cm4gYCNzaWduYWxzLWVtYmVkZGluZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICR7aXNTZXR0aW5nc0FuZFNjb3BlcyA/XG4gICAgICAgICAgICBgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggY2FsYygxMDAlIC0gMzAwcHgpO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO2AgXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC5zaWduYWxzLWNhbnZhcyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuY2FudmFzLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNzaWduYWxzLXZpZXdzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAkeyFpc0RpdmlkYWJsZUJ5VHdvID8gYGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KCR7c2NvcGVDb3VudH0sICR7cGFyc2VGbG9hdCgxMDAvc2NvcGVDb3VudCkudG9GaXhlZCgyKX0lKTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO2BcbiAgICAgICAgOiBgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoJHtzY29wZUNvdW50LzJ9LCAxZnIpO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7YH1cbiAgICAgICAgJHtpc1NldHRpbmdzQW5kU2NvcGVzID8gYGdyaWQtY29sdW1uOiAyIC8gMztgIDogJyd9XG4gICAgfVxuXG4gICAgJHtpc1NldHRpbmdzQW5kU2NvcGVzID8gYCNzaWduYWxzLXNldHRpbmdzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cblxuICAgICNzaWduYWxzLXNldHRpbmdzLWxpc3Qge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA0ZnI7XG4gICAgICAgIGdyaWQtZ2FwOiA1cHg7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtc2V0dGluZ3Mtc2xpZGVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNGZyIDFmcjtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1zbGlkZXIgZGl2IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5zaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbSBoNiB7XG4gICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0gaW5wdXQge1xuXG4gICAgfVxuICAgIFxuICAgIC5zaWduYWxzLXNldHRpbmdzLWxpc3QtbGFiZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9YDonJ31cbmB9O1xuXG5leHBvcnQgZnVuY3Rpb24ganN4RG9tIChub2Rlcykge1xuICAgIGxldCBjYW52YXNOb2RlcyA9IFtdO1xuXG4gICAgLy8gR2V0IGFsbCBraW5kcyBvZiBvdXRwdXQgbm9kZXNcbiAgICBmb3IobGV0IGtleSBpbiBub2Rlcykge1xuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2Rlc1trZXldO1xuXG4gICAgICAgIGlmKFN0cmluZyhrZXkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiIHx8IFN0cmluZyhrZXkpLnN1YnN0cigwLCAzKSA9PT0gXCJmZnRcIikge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuaWQgPSBrZXk7XG4gICAgICAgICAgICBjYW52YXNOb2Rlcy5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzZXR0aW5nc05vZGVzID0gW107XG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcblxuICAgIFxuICAgIGZvcihsZXQga2V5IGluIG5vZGVzKSB7XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGVzW2tleV07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc1RoaXJkTGV0dGVyVXBwZXJDYXNlID0gU3RyaW5nKGtleSkuc3Vic3RyKDIsIDEpLnRvVXBwZXJDYXNlKCkgPT09IFN0cmluZyhrZXkpLnN1YnN0cigyLCAxKTtcbiAgICAgICAgY29uc3QgaXNVSSA9IFN0cmluZyhrZXkpLnN1YnN0cigwLCAyKSA9PT0gXCJ1aVwiO1xuICAgICAgICBjb25zdCBpc0FjdHVhbFVJID0gaXNVSSAmJiBpc1RoaXJkTGV0dGVyVXBwZXJDYXNlO1xuICAgICAgICBcbiAgICAgICAgaWYoaXNBY3R1YWxVSSkge1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2F2ZWRBbHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IGN1cnJlbnROb2RlLnNldHRpbmdzWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICBmb3IobGV0IGMgaW4gY2F0ZWdvcmllcykge1xuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3JpZXNbY10gPT0gY3VycmVudENhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5U2F2ZWRBbHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighY2F0ZWdvcnlTYXZlZEFscmVhZHkpIHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY3VycmVudENhdGVnb3J5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudE5vZGUuaWQgPSBrZXk7XG4gICAgICAgICAgICBzZXR0aW5nc05vZGVzLnB1c2goY3VycmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNldHRpbmdzTm9kZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIGNvbnN0IGNhdDEgPSBhLnNldHRpbmdzWzBdLnZhbHVlO1xuICAgICAgICBjb25zdCBjYXQyID0gYi5zZXR0aW5nc1swXS52YWx1ZTtcblxuICAgICAgICBpZihjYXQxID09PSBjYXQyKSB7XG4gICAgICAgICAgICBjb25zdCBvcmRlcjEgPSBwYXJzZUludChhLnNldHRpbmdzWzJdLnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyMiA9IHBhcnNlSW50KGIuc2V0dGluZ3NbMl0udmFsdWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gb3JkZXIxIC0gb3JkZXIyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0QXJyID0gW2NhdDEsIGNhdDJdO1xuICAgICAgICAgICAgY2F0QXJyLnNvcnQoKTtcblxuICAgICAgICAgICAgaWYoY2F0QXJyWzBdID09PSBjYXQxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU29ydCBieSBjYXRlZ29yeTpcblxuICAgIGNhdGVnb3JpZXMuc29ydCgpO1xuXG4gICAgbGV0IG5ld1NldHRpbmdzTm9kZXMgPSBbXTtcblxuICAgIGZvcihsZXQgYyBpbiBjYXRlZ29yaWVzKSB7XG4gICAgICAgIGZvcihsZXQgcyBpbiBzZXR0aW5nc05vZGVzKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHNldHRpbmdzTm9kZXNbc107XG4gICAgICAgICAgICBpZihjdXJyZW50Tm9kZS5zZXR0aW5nc1swXS52YWx1ZSA9PT0gY2F0ZWdvcmllc1tjXSkge1xuICAgICAgICAgICAgICAgIG5ld1NldHRpbmdzTm9kZXMucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNldHRpbmdzTm9kZXNbc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBEeW5hbWljIFN0dWZmXG4gICAgY29uc3QgY2FudmFzSnN4ID0gY2FudmFzTm9kZXMubGVuZ3RoID4gMCA/IGNhbnZhc05vZGVzLm1hcChub2RlID0+IHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17J2NhbnZhcy1jb250YWluZXInfSBrZXk9e25vZGUuaWR9PlxuICAgICAgICAgICAgPGNhbnZhcyBjbGFzc05hbWU9XCJzaWduYWxzLWNhbnZhc1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtub2RlLmlkfWB9XG4gICAgICAgICAgICA+PC9jYW52YXM+XG4gICAgICAgIDwvZGl2PilcbiAgICB9KSA6IG51bGw7XG5cbiAgICBsZXQgbGFzdENhdGVnb3J5ID0gXCJcIjtcbiAgICBjb25zdCBzZXR0aW5ncyA9IG5ld1NldHRpbmdzTm9kZXMubGVuZ3RoID4gMCA/IG5ld1NldHRpbmdzTm9kZXMubWFwKG5vZGUgPT4ge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50O1xuICAgICAgICBsZXQgaXNTbGlkZXIgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNob3VsZFNhdmVDYXRlZ29yeSA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IG5vZGUuc2V0dGluZ3NbMF0udmFsdWU7XG5cbiAgICAgICAgaWYobGFzdENhdGVnb3J5ICE9PSBjdXJyZW50Q2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHNob3VsZFNhdmVDYXRlZ29yeSA9IHRydWU7XG4gICAgICAgICAgICBsYXN0Q2F0ZWdvcnkgPSBjdXJyZW50Q2F0ZWdvcnk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKG5vZGUuaWQuc3Vic3RyKDAsIDgpID09PSBcInVpTnVtYmVyXCIpIHtcbiAgICAgICAgICAgIC8vICd1aU51bWJlcicgc2V0dGluZ3M6XG4gICAgICAgICAgICAvLyAwIDogQ2F0ZWdvcnkgLSBDYXRlZ29yeSB0aGF0IGNvbnRyb2xsZXJzIGFyZSBzb3J0ZWQgYnkuXG4gICAgICAgICAgICAvLyAxIDogTGFiZWwgICAgLSBMYWJlbCBuZXh0IHRvIHRoZSBjb250cm9sbGVyLlxuICAgICAgICAgICAgLy8gMiA6IE9yZGVyICAgIC0gVmVydGljYWwgcG9zaXRpb24gb2YgdGhlIGNvbnRyb2xsZXIgaW4gdGhlIGNhdGVnb3J5LlxuICAgICAgICAgICAgLy8gMyA6IERlZmF1bHQgIC0gRGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgLy8gNCA6IE1pbiAgICAgIC0gTWluaW11bSB2YWx1ZVxuICAgICAgICAgICAgLy8gNSA6IE1heCAgICAgIC0gTWF4aW11bSB2YWx1ZVxuICAgICAgICAgICAgLy8gNiA6IFN0ZXAgICAgIC0gU3RlcCBvZiB0aGUgdmFsdWVcbiAgICAgICAgICAgIGlucHV0RWxlbWVudCA9ICg8aW5wdXQgIHR5cGU9eydudW1iZXInfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtub2RlLmlkK1wiSW5wdXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bm9kZS5zZXR0aW5nc1szXS52YWx1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e25vZGUuc2V0dGluZ3NbNF0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e25vZGUuc2V0dGluZ3NbNV0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtub2RlLnNldHRpbmdzWzZdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9Lz4pO1xuICAgICAgICB9IGVsc2UgaWYobm9kZS5pZC5zdWJzdHIoMCwgOCkgPT09IFwidWlTbGlkZXJcIikge1xuICAgICAgICAgICAgaXNTbGlkZXIgPSB0cnVlO1xuICAgICAgICAgICAgLy8gJ3VpU2xpZGVyJyBzZXR0aW5nczpcbiAgICAgICAgICAgIC8vIDAgOiBDYXRlZ29yeSAtIENhdGVnb3J5IHRoYXQgY29udHJvbGxlcnMgYXJlIHNvcnRlZCBieS5cbiAgICAgICAgICAgIC8vIDEgOiBMYWJlbCAgICAtIExhYmVsIG5leHQgdG8gdGhlIGNvbnRyb2xsZXIuXG4gICAgICAgICAgICAvLyAyIDogT3JkZXIgICAgLSBWZXJ0aWNhbCBwb3NpdGlvbiBvZiB0aGUgY29udHJvbGxlciBpbiB0aGUgY2F0ZWdvcnkuXG4gICAgICAgICAgICAvLyAzIDogRGVmYXVsdCAgLSBEZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICAvLyA0IDogTWluICAgICAgLSBNaW5pbXVtIHZhbHVlXG4gICAgICAgICAgICAvLyA1IDogTWF4ICAgICAgLSBNYXhpbXVtIHZhbHVlXG4gICAgICAgICAgICAvLyA2IDogU3RlcCAgICAgLSBTdGVwIG9mIHRoZSB2YWx1ZVxuICAgICAgICAgICAgaW5wdXRFbGVtZW50ID0gKDxpbnB1dCAgdHlwZT17J3JhbmdlJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bm9kZS5pZCtcIklucHV0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25vZGUuc2V0dGluZ3NbM10udmFsdWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtub2RlLnNldHRpbmdzWzRdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtub2RlLnNldHRpbmdzWzVdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17bm9kZS5zZXR0aW5nc1s2XS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfS8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJldHVybnMgbWVzc2FnZSBpZiB0aGUgdHlwZSBpcyB1bnNvcHBvcnRlZFxuICAgICAgICAgICAgaW5wdXRFbGVtZW50ID0gPGRpdj57J3Vuc3VwcG9ydGVkIHR5cGUnfTwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgaWYoc2hvdWxkU2F2ZUNhdGVnb3J5KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e25vZGUuaWQgKyBjdXJyZW50Q2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWxhYmVsJ30+e2N1cnJlbnRDYXRlZ29yeX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0gJyArIChpc1NsaWRlciA/IFwic2lnbmFscy1zZXR0aW5ncy1zbGlkZXJcIiA6IFwiXCIpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtub2RlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9eydzaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbS1sYWJlbCd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtub2RlLmlkICsgXCJMYWJlbFwifT57bm9kZS5zZXR0aW5nc1sxXS52YWx1ZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2lucHV0RWxlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1NsaWRlciA/IDxkaXYgaWQ9e25vZGUuaWQrXCJJbmRpY2F0b3JcIn0+e25vZGUuc2V0dGluZ3NbM10udmFsdWV9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8bGkgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0gJyArIChpc1NsaWRlciA/IFwic2lnbmFscy1zZXR0aW5ncy1zbGlkZXJcIiA6IFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e25vZGUuaWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtub2RlLmlkfT5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0tbGFiZWwnfSBpZD17bm9kZS5pZCArIFwiTGFiZWxcIn0+e25vZGUuc2V0dGluZ3NbMV0udmFsdWV9PC9oNj5cbiAgICAgICAgICAgICAgICB7aW5wdXRFbGVtZW50fVxuICAgICAgICAgICAgICAgIHtpc1NsaWRlciA/IDxkaXYgaWQ9e25vZGUuaWQrXCJJbmRpY2F0b3JcIn0+e25vZGUuc2V0dGluZ3NbM10udmFsdWV9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgIDwvbGk+KTtcbiAgICAgICAgfVxuICAgIH0pIDogbnVsbDtcblxuICAgIC8vIEdlbmVyYXRlIEZpbmFsIEpTWFxuICAgIGNvbnN0IFNpZ25hbFZpZXdzID0gY2FudmFzSnN4ID9cbiAgICAgICAgKFxuICAgICAgICAgICAgPGRpdiBpZD1cInNpZ25hbHMtdmlld3NcIj5cbiAgICAgICAgICAgICAgICB7Y2FudmFzSnN4fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgY29uc3QgU2V0dGluZ3NKc3ggPSBzZXR0aW5ncyA/XG4gICAgICAgIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduYWxzLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgPHVsIGlkPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0J30+XG4gICAgICAgICAgICAgICAgICAgIHtzZXR0aW5nc31cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17XCJzaWduYWxzLWVtYmVkZGluZy1jb250YWluZXJcIn0+XG4gICAgICAgICAgICA8c3R5bGU+e3N0eWxlcyhuZXdTZXR0aW5nc05vZGVzLmxlbmd0aCwgY2FudmFzTm9kZXMubGVuZ3RoKX08L3N0eWxlPlxuICAgICAgICAgICAge1NldHRpbmdzSnN4fVxuICAgICAgICAgICAge1NpZ25hbFZpZXdzfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=