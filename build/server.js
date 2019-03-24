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

module.exports = {"input":{"touchInput":{"title":"Touch Input","description":"Gets touch input from the scope.","inputs":[],"outputs":[{"title":"OffsetX","type":"number"},{"title":"OffsetY","type":"number"}],"generators":[],"default_settings":[{"title":"Sensitivity","value":"0.01","type":"number_uncontrolled"},{"title":"Scope","value":"","type":"scopeReference"}]},"scalar":{"title":"Scalar","description":"Single scalar output","inputs":[],"outputs":[{"title":"number","type":"number"}],"generators":[],"default_settings":[{"title":"number","value":"1","type":"number","isInput":false}]},"signalGenerator":{"title":"Signal Generator","description":"Generates a basic signal","inputs":[],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"default_settings":[{"title":"frequency","value":"20","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":false},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"type","value":"sin","type":"signal_type"}]}},"processors":{"multiply":{"title":"Multiply","description":"Modulates two signals using AM modulation","inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]*[input2]","type":"signal"}],"default_settings":[]},"add":{"title":"Add","description":"Modulates two signals using AM modulation","inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]+[input2]","type":"signal"}],"default_settings":[]},"subtract":{"title":"Subtract","description":"Modulates two signals using AM modulation","inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]-[input2]","type":"signal"}],"default_settings":[]}},"output":{"scope":{"title":"Scope","description":"Displays a scope with the provided input signal.","inputs":[{"title":"signal_1","type":"signal"}],"outputs":[],"default_settings":[{"title":"# of Signals","value":"1","type":"number_of_signals"},{"title":"middle","value":"0","type":"number_uncontrolled"},{"title":"range","value":"0","type":"number_uncontrolled"},{"title":"1_color","value":"#FF2873","type":"color"}]},"fft":{"title":"FFT Scope","description":"Displays frequency domain representation of the signal.","inputs":[{"title":"signal","type":"signal"}],"outputs":[],"default_settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Range (Hz)","value":"100","type":"number_uncontrolled"}]}},"ui":{"uiNumber":{"title":"UI Number","description":"Controller that appears on the renderer which allows to enter a number.","inputs":[],"outputs":[{"title":"output","type":"number"}],"default_settings":[{"title":"Category","value":"settings","type":"text"},{"title":"Label","value":"","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"0","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}]},"uiSlider":{"title":"UI Slider","description":"Controller that appears on the renderer which grants control using slider.","inputs":[],"outputs":[{"title":"output","type":"number"}],"default_settings":[{"title":"Category","value":"settings","type":"text"},{"title":"Label","value":"","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"0","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}]},"time":{"title":"Time Control","description":"Existance of this node in the canvas will animate time according to the vector in the settings.","inputs":[],"outputs":[],"default_settings":[{"title":"Speed","value":"1","type":"number_uncontrolled"},{"title":"Range","value":"2","type":"number_uncontrolled"},{"title":"origin","value":"0","type":"number_uncontrolled"}]}}};

/***/ }),

/***/ "./src/server/project_presets/fourierSeries.json":
/*!*******************************************************!*\
  !*** ./src/server/project_presets/fourierSeries.json ***!
  \*******************************************************/
/*! exports provided: allNodes, allConnections, isCreatingConnection, composerCoordinates, default */
/***/ (function(module) {

module.exports = {"allNodes":{"uiSlider":{"title":"1F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"1*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":6,"width":150,"height":100,"id":"uiSlider"},"uiSlider1":{"title":"2F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"2*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":68,"width":150,"height":100,"id":"uiSlider1"},"uiSlider2":{"title":"3F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"3*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":129,"width":150,"height":100,"id":"uiSlider2"},"uiSlider3":{"title":"4F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"4*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":191,"width":150,"height":100,"id":"uiSlider3"},"uiSlider4":{"title":"5F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"5*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":254,"width":150,"height":100,"id":"uiSlider4"},"uiSlider5":{"title":"6F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"6*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":317,"width":150,"height":100,"id":"uiSlider5"},"uiSlider6":{"title":"7F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"7*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":381,"width":150,"height":100,"id":"uiSlider6"},"uiSlider7":{"title":"8F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"8*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":443,"width":150,"height":100,"id":"uiSlider7"},"uiSlider8":{"title":"9F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"9*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":504,"width":150,"height":100,"id":"uiSlider8"},"signalGenerator":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"1","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":5,"width":150,"height":100},"signalGenerator1":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"2","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":67,"width":150,"height":100},"signalGenerator2":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"3","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":128,"width":150,"height":100},"signalGenerator3":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"4","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":190,"width":150,"height":100},"signalGenerator4":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"5","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":254,"width":150,"height":100},"signalGenerator5":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"6","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":317,"width":150,"height":100},"signalGenerator6":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"7","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":380,"width":150,"height":100},"signalGenerator7":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"8","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":442,"width":150,"height":100},"signalGenerator8":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"9","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":504,"width":150,"height":100},"uiSlider9":{"title":"Bias","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"0*f","type":"text"},{"title":"Order","value":"-1","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":325,"y":573,"width":150,"height":100,"id":"uiSlider9"},"add":{"title":"Add","clickedDown":false,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]+[input3]+[input4]+[input5]+[input6]+[input7]+[input8]+[input9]+[input10]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"},{"title":"input3","type":"signal"},{"title":"input4","type":"signal"},{"title":"input5","type":"signal"},{"title":"input6","type":"signal"},{"title":"input7","type":"signal"},{"title":"input8","type":"signal"},{"title":"input9","type":"signal"},{"title":"input10","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":700,"y":198,"width":150,"height":100},"signalGenerator9":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"1","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":681,"width":150,"height":100},"signalGenerator10":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"2","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":743,"width":150,"height":100},"signalGenerator11":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"3","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":806,"width":150,"height":100},"signalGenerator12":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"4","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":869,"width":150,"height":100},"signalGenerator13":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"5","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":932,"width":150,"height":100},"signalGenerator14":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"6","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":996,"width":150,"height":100},"signalGenerator15":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"7","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1057,"width":150,"height":100},"signalGenerator16":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"8","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1122,"width":150,"height":100},"signalGenerator17":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"9","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1185,"width":150,"height":100},"uiSlider10":{"title":"1F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"1*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":678,"width":150,"height":100,"id":"uiSlider10"},"uiSlider11":{"title":"2F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"2*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":741,"width":150,"height":100,"id":"uiSlider11"},"uiSlider12":{"title":"3F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"3*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":806,"width":150,"height":100,"id":"uiSlider12"},"uiSlider13":{"title":"4F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"4*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":869,"width":150,"height":100,"id":"uiSlider13"},"uiSlider14":{"title":"5F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"5*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":932,"width":150,"height":100,"id":"uiSlider14"},"uiSlider15":{"title":"6F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"6*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":995,"width":150,"height":100,"id":"uiSlider15"},"uiSlider16":{"title":"7F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"7*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1059,"width":150,"height":100,"id":"uiSlider16"},"uiSlider17":{"title":"8F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"8*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1122,"width":150,"height":100,"id":"uiSlider17"},"uiSlider18":{"title":"9F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"9*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1187,"width":150,"height":100,"id":"uiSlider18"},"uiSlider19":{"title":"Bias","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"0*f","type":"text"},{"title":"Order","value":"-1","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":334,"y":1263,"width":150,"height":100,"id":"uiSlider19"},"add1":{"title":"Add","clickedDown":false,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]+[input3]+[input4]+[input5]+[input6]+[input7]+[input8]+[input9]+[input10]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"},{"title":"input3","type":"signal"},{"title":"input4","type":"signal"},{"title":"input5","type":"signal"},{"title":"input6","type":"signal"},{"title":"input7","type":"signal"},{"title":"input8","type":"signal"},{"title":"input9","type":"signal"},{"title":"input10","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":619,"y":834,"width":150,"height":100},"add2":{"title":"Add","clickedDown":true,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":886,"y":596,"width":150,"height":100},"scope":{"title":"sines","clickedDown":false,"selected":false,"settings":[{"title":"# of Signals","value":"1","type":"number_of_signals"},{"title":"middle","value":"0","type":"number_uncontrolled"},{"title":"range","value":"5","type":"number_uncontrolled"},{"title":"1_color","value":"#FF2873","type":"color"}],"generators":[],"inputs":[{"title":"signal_1","type":"signal"}],"outputs":[],"x":992,"y":228,"width":150,"height":100,"id":"scope"},"scope1":{"title":"cosines","clickedDown":false,"selected":false,"settings":[{"title":"# of Signals","value":"1","type":"number_of_signals"},{"title":"middle","value":"0","type":"number_uncontrolled"},{"title":"range","value":"5","type":"number_uncontrolled"},{"title":"1_color","value":"#00a15a","type":"color"}],"generators":[],"inputs":[{"title":"signal_1","type":"signal"}],"outputs":[],"x":939,"y":870,"width":150,"height":100,"id":"scope1"},"scope2":{"title":"Time Domain","clickedDown":false,"selected":false,"settings":[{"title":"# of Signals","value":"1","type":"number_of_signals"},{"title":"middle","value":"0","type":"number_uncontrolled"},{"title":"range","value":"5","type":"number_uncontrolled"},{"title":"1_color","value":"#9e28f3","type":"color"}],"generators":[],"inputs":[{"title":"signal_1","type":"signal"}],"outputs":[],"x":1132,"y":543,"width":150,"height":100,"id":"scope2"},"fft":{"title":"FFT Scope","clickedDown":false,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Range (Hz)","value":"10","type":"number_uncontrolled"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":1125,"y":692,"width":150,"height":100,"id":"fft"}},"allConnections":[{"connectorStart":{"nodeId":"uiSlider","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider1","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator1","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider2","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider3","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator3","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider4","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator4","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider5","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator5","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider6","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator6","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider7","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator7","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider8","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator8","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input1"}},{"connectorStart":{"nodeId":"signalGenerator1","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input2"}},{"connectorStart":{"nodeId":"signalGenerator2","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input3"}},{"connectorStart":{"nodeId":"signalGenerator3","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input4"}},{"connectorStart":{"nodeId":"signalGenerator4","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input5"}},{"connectorStart":{"nodeId":"signalGenerator5","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input6"}},{"connectorStart":{"nodeId":"signalGenerator6","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input7"}},{"connectorStart":{"nodeId":"signalGenerator7","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input8"}},{"connectorStart":{"nodeId":"signalGenerator8","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input9"}},{"connectorStart":{"nodeId":"uiSlider9","settingId":"output"},"connectorEnd":{"nodeId":"add","settingId":"input10"}},{"connectorStart":{"nodeId":"uiSlider10","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator9","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider11","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator10","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider12","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator11","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider13","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator12","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider14","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator13","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider15","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator14","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider16","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator15","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider17","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator16","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider18","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator17","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator9","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input1"}},{"connectorStart":{"nodeId":"signalGenerator10","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input2"}},{"connectorStart":{"nodeId":"signalGenerator11","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input3"}},{"connectorStart":{"nodeId":"signalGenerator12","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input4"}},{"connectorStart":{"nodeId":"signalGenerator13","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input5"}},{"connectorStart":{"nodeId":"signalGenerator14","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input6"}},{"connectorStart":{"nodeId":"signalGenerator15","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input7"}},{"connectorStart":{"nodeId":"signalGenerator16","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input8"}},{"connectorStart":{"nodeId":"signalGenerator17","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input9"}},{"connectorStart":{"nodeId":"uiSlider19","settingId":"output"},"connectorEnd":{"nodeId":"add1","settingId":"input10"}},{"connectorStart":{"nodeId":"add","settingId":"output"},"connectorEnd":{"nodeId":"add2","settingId":"input1"}},{"connectorStart":{"nodeId":"add1","settingId":"output"},"connectorEnd":{"nodeId":"add2","settingId":"input2"}},{"connectorStart":{"nodeId":"add","settingId":"output"},"connectorEnd":{"nodeId":"scope","settingId":"signal_1"}},{"connectorStart":{"nodeId":"add1","settingId":"output"},"connectorEnd":{"nodeId":"scope1","settingId":"signal_1"}},{"connectorStart":{"nodeId":"add2","settingId":"output"},"connectorEnd":{"nodeId":"scope2","settingId":"signal_1"}},{"connectorStart":{"nodeId":"add2","settingId":"output"},"connectorEnd":{"nodeId":"fft","settingId":"signal"}}],"isCreatingConnection":{"focused":true,"gridSize":50,"height":830,"width":1650,"x":-415,"y":-314,"zoomLevel":1},"composerCoordinates":{"focused":true,"gridSize":50,"height":830,"width":1650,"x":-415,"y":-314,"zoomLevel":1}};

/***/ }),

/***/ "./src/server/project_presets/modulation.json":
/*!****************************************************!*\
  !*** ./src/server/project_presets/modulation.json ***!
  \****************************************************/
/*! exports provided: allNodes, allConnections, isCreatingConnection, composerCoordinates, default */
/***/ (function(module) {

module.exports = {"allNodes":{"signalGenerator":{"title":"Signal Generator","x":700,"y":823,"width":"150","inputs":[{"title":"amplitude","default_value":"1","type":"number"},{"title":"frequency","default_value":"15","type":"number"}],"outputs":[{"title":"sine","type":"signal"}],"generators":[{"title":"sine","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"settings":[{"title":"frequency","value":"15","type":"number","isInput":true},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false}],"selected":false,"clickedDown":true},"touchInput":{"title":"Touch Input","clickedDown":true,"selected":false,"settings":[{"title":"Sensitivity","value":"-0.03","type":"number_uncontrolled"},{"title":"Scope","value":"scope","type":"scopeReference"}],"generators":[],"inputs":[],"outputs":[{"title":"OffsetX","type":"number"},{"title":"OffsetY","type":"number"}],"x":250,"y":873,"width":150,"height":100},"signalGenerator1":{"title":"Signal Generator","clickedDown":true,"selected":false,"settings":[{"title":"frequency","value":"20","type":"number","isInput":true},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":true},{"title":"offset","value":"1","type":"number","isInput":false},{"title":"Signal Type","value":"sqw","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sqw(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"frequency","default_value":"20","type":"number"},{"title":"amplitude","default_value":"1","type":"number"},{"title":"phase","default_value":"0","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":450,"y":773,"width":150,"height":100},"scope":{"title":"AM Modulation","clickedDown":false,"selected":false,"settings":[{"title":"# of Signals","value":"2","type":"number_of_signals"},{"title":"middle","value":"0","type":"number_uncontrolled"},{"title":"range","value":"5","type":"number_uncontrolled"},{"title":"1_color","value":"#000000","type":"color"},{"title":"2_color","value":"#ff2673","type":"color"}],"generators":[],"inputs":[{"title":"signal_1","type":"signal"},{"title":"signal_2","type":"signal"}],"outputs":[],"x":900,"y":773,"width":150,"height":100,"id":"scope"},"signalGenerator2":{"title":"Signal Generator","clickedDown":true,"selected":false,"settings":[{"title":"frequency","value":"30","type":"number","isInput":true},{"title":"amplitude","value":"1","type":"number","isInput":false},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"frequency","default_value":"30","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":900,"y":873,"width":150,"height":100},"scope1":{"title":"FM Modulation","clickedDown":false,"selected":false,"settings":[{"title":"# of Signals","value":"2","type":"number_of_signals"},{"title":"middle","value":"0","type":"number_uncontrolled"},{"title":"range","value":"5","type":"number_uncontrolled"},{"title":"1_color","value":"#000000","type":"color"},{"title":"2_color","value":"#006af8","type":"color"}],"generators":[],"inputs":[{"title":"signal_1","type":"signal"},{"title":"signal_2","type":"signal"}],"outputs":[],"x":1100,"y":673,"width":150,"height":100,"id":"scope1"},"multiply":{"title":"Multiply","clickedDown":true,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]*[input2]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":700,"y":923,"width":150,"height":100},"scalar":{"title":"Scalar","clickedDown":true,"selected":false,"settings":[{"title":"number","value":"30","type":"number","isInput":false}],"generators":[],"inputs":[],"outputs":[{"title":"number","type":"number"}],"x":450,"y":923,"width":150,"height":100},"uiSlider":{"title":"Frequency","clickedDown":true,"selected":false,"settings":[{"title":"Category","value":"data signal settings","type":"text"},{"title":"Label","value":"frequency","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"3.5","type":"number_uncontrolled"},{"title":"Min","value":"1","type":"number_uncontrolled"},{"title":"Max","value":"6","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":250,"y":723,"width":150,"height":100,"id":"uiSlider"},"uiSlider1":{"title":"Amplitude","clickedDown":true,"selected":false,"settings":[{"title":"Category","value":"data signal settings","type":"text"},{"title":"Label","value":"amplitude","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"-2","type":"number_uncontrolled"},{"title":"Max","value":"2","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":250,"y":800,"width":150,"height":100,"id":"uiSlider1"}},"allConnections":[{"connectorStart":{"nodeId":"multiply","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"frequency"}},{"connectorStart":{"nodeId":"uiSlider","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator1","settingId":"frequency"}},{"connectorStart":{"nodeId":"uiSlider1","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator1","settingId":"amplitude"}},{"connectorStart":{"nodeId":"touchInput","settingId":"OffsetX"},"connectorEnd":{"nodeId":"signalGenerator1","settingId":"phase"}},{"connectorStart":{"nodeId":"signalGenerator1","settingId":"signal"},"connectorEnd":{"nodeId":"signalGenerator","settingId":"amplitude"}},{"connectorStart":{"nodeId":"scalar","settingId":"number"},"connectorEnd":{"nodeId":"signalGenerator","settingId":"frequency"}},{"connectorStart":{"nodeId":"signalGenerator1","settingId":"signal"},"connectorEnd":{"nodeId":"multiply","settingId":"input1"}},{"connectorStart":{"nodeId":"scalar","settingId":"number"},"connectorEnd":{"nodeId":"multiply","settingId":"input2"}},{"connectorStart":{"nodeId":"signalGenerator1","settingId":"signal"},"connectorEnd":{"nodeId":"scope","settingId":"signal_1"}},{"connectorStart":{"nodeId":"signalGenerator","settingId":"sine"},"connectorEnd":{"nodeId":"scope","settingId":"signal_2"}},{"connectorStart":{"nodeId":"signalGenerator2","settingId":"signal"},"connectorEnd":{"nodeId":"scope1","settingId":"signal_2"}},{"connectorStart":{"nodeId":"signalGenerator1","settingId":"signal"},"connectorEnd":{"nodeId":"scope1","settingId":"signal_1"}}],"isCreatingConnection":{"focused":true,"gridSize":50,"height":830,"width":1650,"x":-70,"y":-483,"zoomLevel":1},"composerCoordinates":{"focused":true,"gridSize":50,"height":830,"width":1650,"x":-70,"y":-483,"zoomLevel":1}};

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

var tokenizeGenerator = function (gen, nodeId) {
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
            if (nextThree === "sin" || nextThree === "cos" || nextThree === "tan" || nextThree === "sqw") {
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
};


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
  // Package imports


  var scripts = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js\"></script>\n";
  scripts += "<script src=\"/CCapture.all.min.js\"></script>";
  scripts += "<script src=\"https://unpkg.com/js-untar@2.0.0/build/dist/untar\"></script>";
  scripts += "<script src=\"https://unpkg.com/downloadjs@1.4.7/download.js\"></script>";
  scripts += "<script src=\"https://unpkg.com/gif.js@0.2.0/dist/gif.js\"></script>"; // GIF Recorder

  scripts += "<script>\n        var lastFrameTimestamp = null;\n        var isRecording = false;\n        document.getElementById(\"signals-recording-stop\").style.display = \"none\";        \n\n        document.getElementById(\"signals-back-button\").onclick = function (e) {\n            e.preventDefault();\n            let newLink = window.location.href.replace(\"render\", \"editor\");\n            window.location.assign(newLink);\n        }\n\n        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {\n            document.getElementById(\"signals-recording-start\").style.display = \"none\";\n            document.getElementById(\"signals-recording-stop\").style.display = \"none\";\n        }\n    </script>"; // Only add fft require if project uses fft

  for (var f in allNodes) {
    if (f.substr(0, 3) === "fft") {
      scripts += "<script src=\"/fft.js\"></script>\n";
      break;
    }
  }

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
    // Init square wave function
    executable += "Math.__proto__.sqw = function (x) {\n        let val = x >= 0 ? ((x/(2*Math.PI))%1) : (((-x-Math.PI)/(2*Math.PI))%1);\n        if(val >= 0 && val <= 0.5) {\n            return 0.5;\n        } else {\n            return -0.5;\n        }\n    };";
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
    var _a = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["separateNodes"])(allNodes), uncalculatedNodes = _a.uncalculatedNodes, allScopes = _a.allScopes, uiNodes = _a.uiNodes, fftNodes = _a.fftNodes, time = _a.time;
    if (time["time"]) {
        var timeNode = time["time"];
        var timeSpeed = parseFloat(timeNode.settings[0].value);
        var timeRange = parseFloat(timeNode.settings[1].value);
        var timeOrigin = parseFloat(timeNode.settings[2].value);
        // TODO: SOLVE SAMPLE RATE AUTOMATIC CALCULATION
        var timeStart = timeOrigin - timeRange / 2;
        var timeStop = timeOrigin + timeRange / 2;
        executable += Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["initTime"])(timeStart, timeStop, 1 / SAMPLE_RATE);
        executable += "var deltaTime = 60;";
        executable += "setInterval(function () {\n            t = t.map(v => v + " + timeSpeed + "/deltaTime);\n            update();\n        }, deltaTime);";
    }
    else {
        // Setup default time
        executable += Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["initTime"])(OFFSET - DURATION / 2, OFFSET + DURATION / 2, 1 / SAMPLE_RATE);
    }
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
    // let connectionDictionary = generateConnectionDictionary(allConnections);
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
    var gifRecordingStart = "document.getElementById(\"signals-recording-start\").onclick = function (e) {\n        e.preventDefault();\n        isRecording = true;\n        document.getElementById(\"signals-recording-start\").style.display = \"none\";\n        document.getElementById(\"signals-recording-stop\").style.display = \"block\";\n        ";
    var gifRecordingStop = "document.getElementById(\"signals-recording-stop\").onclick = function (e) {\n        e.preventDefault();\n        isRecording = false;\n        document.getElementById(\"signals-recording-start\").style.display = \"block\";\n        document.getElementById(\"signals-recording-stop\").style.display = \"none\";\n        ";
    var _loop_1 = function (s) {
        var currentScope = allScopes[s];
        var dataInitialiserArray = [];
        var dataGenerationArray = [];
        for (var i = 0; i < currentScope.inputs.length; i++) {
            var inputTitle = currentScope.inputs[i].title;
            var _a = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["getOtherSideOfConnector"])(allConnections, null, { nodeId: s, settingId: inputTitle }), otherNodeId = _a.otherNodeId, otherSettingId = _a.otherSettingId;
            dataInitialiserArray.push("let " + inputTitle + "data = [];\n");
            dataGenerationArray.push(inputTitle + "data.push(" + otherNodeId + otherSettingId + "(t[i]));\n");
        }
        var dataInitialiserComposite = "";
        var dataGenerationComposite = "";
        for (var d in dataInitialiserArray) {
            dataInitialiserComposite += dataInitialiserArray[d];
        }
        for (var d in dataGenerationArray) {
            dataGenerationComposite += dataGenerationArray[d];
        }
        var dataGenerationSnippet = dataInitialiserComposite + "\n            for(let i = 0; i < t.length; i++) {\n                " + dataGenerationComposite + "\n            }";
        var datasets = currentScope.settings.slice().slice(3, currentScope.settings.length).map(function (setting, i) {
            var inputTitle = currentScope.inputs[i].title;
            return "{\n                label: '" + inputTitle.replace("_", " ") + "',\n                backgroundColor: 'rgba(0, 0, 0, 0)',\n                borderColor: '" + setting.value + "',\n                data: " + inputTitle + "data\n            }";
        });
        var datasetsArraySnippet = "[";
        for (var d = 0; d < datasets.length; d++) {
            datasetsArraySnippet += datasets[d];
            if (d != (datasets.length - 1)) {
                datasetsArraySnippet += ",";
            }
            else {
                datasetsArraySnippet += "]";
            }
        }
        executable += "\n        if(graphs." + s + ") {\n            " + dataGenerationSnippet + "\n            graphs." + s + ".data.datasets = " + datasetsArraySnippet + ";\n            graphs." + s + ".update();\n            if(typeof " + s + "gif !== 'undefined') {\n                if(!lastFrameTimestamp) { \n                    lastFrameTimestamp = new Date;\n                } else {\n                    const now = new Date;\n                    const timeSinceLastFrame = now - lastFrameTimestamp;\n                    lastFrameTimestamp = new Date;\n    \n                    var tempCanvas = document.createElement(\"canvas\");\n                    tempCanvas.width = graphs." + s + ".canvas.width/2;\n                    tempCanvas.height = graphs." + s + ".canvas.height/2;\n                    var tempCtx = tempCanvas.getContext(\"2d\");\n                    tempCtx.fillStyle = \"#FFF\";\n                    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);\n                    tempCtx.drawImage(graphs." + s + ".canvas, 0, 0, graphs." + s + ".canvas.width/2, graphs." + s + ".canvas.height/2);\n    \n                    window." + s + "gif.addFrame(tempCtx, {delay: timeSinceLastFrame});\n                }\n            }\n        } else {\n            let canvasNode = document.getElementById(\"" + s + "\");\n\n            var viewSize = {\n                x: canvasNode.parentNode.offsetWidth,\n                y: canvasNode.parentNode.offsetHeight\n            }\n            \n            var w = viewSize.x;\n            var h = viewSize.y;\n            \n            canvasNode.width = w;\n            canvasNode.height = h;\n            \n            var ctx = canvasNode.getContext(\"2d\");\n\n            " + dataGenerationSnippet + "\n\n            var myChart = new Chart(ctx, {\n                type: 'line',\n                data: {labels: t.map(ti => ti.toFixed(2)),\n                    datasets: " + datasetsArraySnippet + "\n                }, options: {\n                    elements: {\n                        line: {\n                            tension: 0,\n                            stepped: false\n                        }, point: {\n                            radius: 0,\n                            hitRadius: 0,\n                            hoverRadius: 0\n                        }\n                    }, animation: {\n                        duration: 0\n                    }, tooltips: {\n                        enabled: false\n                    }, legend: {\n                        display: " + (currentScope.inputs.length > 1 ? 'true' : 'false') + "\n                    }" + ((currentScope.settings[1].value == "0") && (currentScope.settings[2].value == "0") ? '' : ", scales: {\n                        yAxes: [{\n                            ticks: {\n                                max: " + (parseFloat(currentScope.settings[1].value) + parseFloat(currentScope.settings[2].value) / 2) + ",\n                                min: " + (parseFloat(currentScope.settings[1].value) - parseFloat(currentScope.settings[2].value) / 2) + ",\n                                stepSize: " + parseFloat(currentScope.settings[2].value) / 10 + "\n                            }\n                        }]\n                    }") + ", title: {\n                        display: true,\n                        text: '" + currentScope.title + "',\n                        position: 'left'\n                    }\n                }\n            });\n\n            graphs." + s + " = myChart;\n        }";
        gifRecordingStart += "window." + s + "gif = new GIF({\n            workers: 1,\n            quality: 10,\n            workerScript: \"/gif.worker.js\",\n            width: graphs." + s + ".canvas.width / 2,\n            height: graphs." + s + ".canvas.height / 2\n        });";
        gifRecordingStop += "window." + s + "gif.on('finished', function(blob) {\n            // location.assign(URL.createObjectURL(blob));\n            download(blob, \"anim.gif\", \"image/gif\");\n        });\n\n        window." + s + "gif.render();";
        exeArray.push(executable);
        executable = "";
    };
    // Loop through time scopes
    for (var s in allScopes) {
        _loop_1(s);
    }
    executable += gifRecordingStart + "};";
    executable += gifRecordingStop + "};";
    // Loop through fft scopes
    for (var f in fftNodes) {
        var currentScope = fftNodes[f];
        var _c = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["getOtherSideOfConnector"])(allConnections, null, { nodeId: f, settingId: "signal" }), otherNodeId = _c.otherNodeId, otherSettingId = _c.otherSettingId;
        executable += "\n        if(graphs." + f + ") {\n            let data = [];\n            for(let i = 0; i < t.length; i++) {data.push(" + otherNodeId + otherSettingId + "(t[i]));}\n\n            let f = new FFT(data.length);\n            let complexOutput = f.createComplexArray();\n            f.realTransform(complexOutput, data);\n            let realOutput = new Array(data.length);\n            realOutput.fill(0);\n            f.fromComplexArray(complexOutput, realOutput);\n\n            // realOutput = realOutput.filter((val, i) => i%2 == 0 || i == 0);\n\n            realOutput = realOutput.splice(0, " + parseInt(currentScope.settings[2].value) + ");\n            \n            realOutput = realOutput.map(val => val * 2 / data.length);\n\n            graphs." + f + ".data.datasets[0].data = realOutput;\n            graphs." + f + ".update();\n        } else {\n            let canvasNode = document.getElementById(\"" + f + "\");\n\n            var viewSize = {\n                x: canvasNode.parentNode.offsetWidth,\n                y: canvasNode.parentNode.offsetHeight\n            }\n            \n            var w = viewSize.x;\n            var h = viewSize.y;\n            \n            canvasNode.width = w;\n            canvasNode.height = h;\n            \n            var ctx = canvasNode.getContext(\"2d\");\n\n            let data = [];\n\n            for(let i = 0; i < t.length; i++) {\n                data.push(" + otherNodeId + otherSettingId + "(t[i]));\n            }\n\n            let f = new FFT(data.length);\n            let complexOutput = f.createComplexArray();\n            f.realTransform(complexOutput, data);\n            let realOutput = new Array(data.length);\n            realOutput.fill(0);\n            f.fromComplexArray(complexOutput, realOutput);\n\n            // realOutput = realOutput.filter((val, i) => i%2 == 0 || i == 0);\n\n            realOutput = realOutput.splice(0, " + parseInt(currentScope.settings[2].value) + ");\n\n            realOutput = realOutput.map(val => val * 2 / data.length);\n\n            var myChart = new Chart(ctx, {\n                type: 'bar',\n                data: {\n                    labels: realOutput.map((val, i) => parseFloat(i/2).toFixed(1)),\n                    datasets: [\n                        {\n                            label: \"signal\",\n                            backgroundColor: 'rgba(245, 23, 54, 0.4)',\n                            borderColor: 'rgb(0, 0, 0)',\n                            data: realOutput\n                        }\n                    ]\n                }, options: {\n                    animation: {\n                        duration: 0\n                    }, tooltips: {\n                        enabled: true\n                    }, legend: {\n                        display: " + (currentScope.inputs.length > 1) + "\n                    }, title: {\n                        display: true,\n                        text: '" + currentScope.title + "',\n                        position: 'left'\n                    }\n                }\n            });\n\n            graphs." + f + " = myChart;\n        }";
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
    var timeNodes = {};
    for (var i in allNodes) {
        // Check if it is a UI node
        var isThirdLetterUpperCase = String(i).substr(2, 1).toUpperCase() === String(i).substr(2, 1);
        var isUI = String(i).substr(0, 2) === "ui";
        var isActualUI = isUI && isThirdLetterUpperCase;
        // Check if it is a scope
        var isScope = String(i).substr(0, 5) === "scope";
        // Check if it is an fft scope
        var isFFT = String(i).substr(0, 3) === "fft";
        // Check if it is a time node
        var isTime = String(i).substr(0, 4) === "time";
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
        else if (isTime) {
            timeNodes[i] = allNodes[i];
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
        fftNodes: fftNodes,
        time: timeNodes
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
      } else if (value === "sqw") {
        executableString += "Math.sqw(";
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
  return "#signals-embedding-main {\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n\n        display: grid;\n        grid-template-rows: 30px auto;\n    }\n\n    #signals-embedding-controls {\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        background-color: #EEE;\n        border-radius: 7px;\n    }\n\n    .signals-embedding-control-button {\n        margin: 2px;\n        margin-right: 0;\n        padding: 2px 8px;\n        padding-top: 3px;\n        background-color: white;\n        border-radius: 5px;\n        text-decoration: none;\n        color: black;\n        transition: box-shadow 0.5s;\n    }\n\n    .signals-embedding-control-button:hover {\n        cursor: pointer;\n        user-select: none;\n        box-shadow: 1px 1px 2px 0 rgba(0,0,0,0.5);\n        transition: box-shadow 0.5s;\n    }\n    \n    #signals-embedding-container {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        ".concat(isSettingsAndScopes ? "display: grid;\n            grid-template-columns: 300px calc(100% - 300px);\n            grid-template-rows: 100%;" : '', "\n\n    }\n\n    .signals-canvas {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .canvas-container {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        position: relative;\n    }\n\n    #signals-views {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        display: grid;\n        \n        ").concat(!isDividableByTwo || scopeCount < 3 ? "grid-template-rows: repeat(".concat(scopeCount, ", ").concat(parseFloat(100 / scopeCount).toFixed(2), "%);\n        grid-template-columns: auto;") : "grid-template-rows: repeat(".concat(scopeCount / 2, ", 1fr);\n        grid-template-columns: 50% 50%;"), "\n        ").concat(isSettingsAndScopes ? "grid-column: 2 / 3;" : '', "\n    }\n\n    ").concat(isSettingsAndScopes ? "#signals-settings {\n        margin: 0;\n        padding: 10px;\n        width: calc(100% - 20px);\n        height: calc(100% - 20px);\n        grid-column: 1 / 2;\n        overflow-x: hidden;\n        overflow-y: auto;\n    }\n\n    #signals-settings-list {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n\n        list-style: none;\n    }\n\n    .signals-settings-list-item {\n        display: grid;\n        grid-template-columns: 3fr 4fr;\n        grid-gap: 5px;\n    }\n\n    .signals-settings-slider {\n        grid-template-columns: 3fr 4fr 1fr;\n    }\n\n    .signals-settings-slider div {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .signals-settings-list-item h6 {\n        margin: 2px;\n        padding: 0;\n        grid-column: 1 / 2;\n        font-size: 12pt;\n        font-weight: normal;\n    }\n\n    .signals-settings-list-item input {\n\n    }\n    \n    .signals-settings-list-label {\n        width: 100%;\n        height: fit-content;\n        margin: 0;\n        padding: 0;\n        font-size: 16pt;\n        text-align: center;\n    }" : '', "\n");
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
    id: "signals-embedding-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "signals-embedding-controls"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "signals-back-button",
    className: "signals-embedding-control-button"
  }, "back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "signals-recording-start",
    className: "signals-embedding-control-button"
  }, "start recording"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "signals-recording-stop",
    className: "signals-embedding-control-button"
  }, "stop recording")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "signals-embedding-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, styles(newSettingsNodes.length, canvasNodes.length)), SettingsJsx, SignalViews));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2dlbmVyYXRvclRva2VuaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVuZGVyZXIvc2NvcGVGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3Rva2VuVG9Kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3ZpZXdlckRvbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiZGF0YWJhc2UiLCJwcm9qZWN0c0luZm8iLCJwcm9qZWN0SWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3duZXIiLCJwcm9qZWN0TW9kZWxzIiwibW9kdWxhdGlvbiIsImZvdXJpZXJTZXJpZXMiLCJ1c2VycyIsImFkbWluIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm5ld1Byb2plY3QiLCJuZXdJZCIsImkiLCJwYXJzZUludCIsInB1c2giLCJwcm9qZWN0TW9kZWxUZW1wbGF0ZSIsInNhdmVQcm9qZWN0IiwianNvbiIsIm5ld1Byb2plY3RWZXJzaW9uIiwiYWxsQ29ubmVjdGlvbnMiLCJhbGxOb2RlcyIsImNvbXBvc2VyQ29vcmRpbmF0ZXMiLCJpc0NyZWF0aW5nQ29ubmVjdGlvbiIsImZvY3VzZWQiLCJncmlkU2l6ZSIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJ6b29tTGV2ZWwiLCJ1c2UiLCJzdGF0aWMiLCJfX2Rpcm5hbWUiLCJtb3JnYW4iLCJnZXQiLCJyZXEiLCJyZXMiLCJwYXJhbXMiLCJpZCIsInN0YXR1cyIsInNlbmQiLCJmcyIsInJlYWRGaWxlIiwicGF0aCIsInJlc29sdmUiLCJlcnIiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwicmVwbGFjZSIsInByb2plY3REYXRhIiwibGVuZ3RoIiwicHJvamVjdCIsInBpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaWJyYXJ5Tm9kZXMiLCJzZXRIZWFkZXIiLCJyZW5kZXJlZFN0cmluZyIsInJlbmRlclNpZ25hbHMiLCJlbmQiLCJwcm9qZWN0c0FycmF5IiwiYm9keVBhcnNlciIsInBvc3QiLCJwcm9qZWN0SnNvbiIsImJvZHkiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJsb2ciLCJyZW5kZXJIdG1sIiwicmVxdWVzdEpzb24iLCJqc3giLCJqc3hEb20iLCJqc3hTdHJpbmciLCJyZW5kZXJUb1N0YXRpY01hcmt1cCIsInNjcmlwdEFycmF5Iiwic2NyaXB0R2VuZXJhdG9yIiwiY29tcG9zZWRTY3JpcHRTdHJpbmciLCJzIiwic2NyaXB0cyIsImYiLCJzdWJzdHIiLCJzY3JpcHRlZEh0bWwiLCJzbGljZSIsImZpeFNjb3BlcyIsImdlbiIsImciLCJTdHJpbmciLCJmb3VuZExlZnRCb3JkZXIiLCJmb3VuZFJpZ2h0Qm9yZGVyIiwianVzdEhpdE9wZW5pbmdCcmFja2V0IiwianVzdEhpdENsb3NpbmdCcmFja2V0IiwibGVmdCIsInJpZ2h0Iiwib25lIiwidHdvIiwidGhyZWUiLCJ0b2tlblRvSnMiLCJub2RlSWQiLCJ2YXJpYWJsZU5hbWUiLCJqc29uVG9rZW5zIiwiZXhlY3V0YWJsZVN0cmluZyIsImNhbGN1bGF0ZUNvZGUiLCJ0b2tlbiIsInR5cGUiLCJ2YWx1ZSIsImNvZGUiLCJzdHlsZXMiLCJzZXR0aW5nc0NvdW50Iiwic2NvcGVDb3VudCIsImlzU2V0dGluZ3NBbmRTY29wZXMiLCJpc0RpdmlkYWJsZUJ5VHdvIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJub2RlcyIsImNhbnZhc05vZGVzIiwia2V5IiwiY3VycmVudE5vZGUiLCJzZXR0aW5nc05vZGVzIiwiY2F0ZWdvcmllcyIsImlzVGhpcmRMZXR0ZXJVcHBlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzVUkiLCJpc0FjdHVhbFVJIiwiY2F0ZWdvcnlTYXZlZEFscmVhZHkiLCJjdXJyZW50Q2F0ZWdvcnkiLCJzZXR0aW5ncyIsImMiLCJzb3J0IiwiYSIsImIiLCJjYXQxIiwiY2F0MiIsIm9yZGVyMSIsIm9yZGVyMiIsImNhdEFyciIsIm5ld1NldHRpbmdzTm9kZXMiLCJjYW52YXNKc3giLCJtYXAiLCJub2RlIiwibGFzdENhdGVnb3J5IiwiaW5wdXRFbGVtZW50IiwiaXNTbGlkZXIiLCJzaG91bGRTYXZlQ2F0ZWdvcnkiLCJTaWduYWxWaWV3cyIsIlNldHRpbmdzSnN4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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TCxDQUZxQixHQUtyQixJQUxSO0FBT0EsTUFBTVEsV0FBVyxHQUFHbkIsUUFBUSxHQUVwQjtBQUFLLE1BQUUsRUFBQztBQUFSLEtBQ0k7QUFBSSxNQUFFLEVBQUU7QUFBUixLQUNLQSxRQURMLENBREosQ0FGb0IsR0FPcEIsSUFQUjtBQVNBLFNBQ0k7QUFBSyxNQUFFLEVBQUU7QUFBVCxLQUNJO0FBQUssTUFBRSxFQUFFO0FBQVQsS0FDSTtBQUFLLE1BQUUsRUFBRSxxQkFBVDtBQUFnQyxhQUFTLEVBQUU7QUFBM0MsWUFESixFQUVJO0FBQUssTUFBRSxFQUFFLHlCQUFUO0FBQW9DLGFBQVMsRUFBRTtBQUEvQyx1QkFGSixFQUdJO0FBQUssTUFBRSxFQUFFLHdCQUFUO0FBQW1DLGFBQVMsRUFBRTtBQUE5QyxzQkFISixDQURKLEVBTUk7QUFBSyxNQUFFLEVBQUU7QUFBVCxLQUNJLDBFQUFRbkIsTUFBTSxDQUFDNkIsZ0JBQWdCLENBQUN4RixNQUFsQixFQUEwQm1FLFdBQVcsQ0FBQ25FLE1BQXRDLENBQWQsQ0FESixFQUVLaUcsV0FGTCxFQUdLRCxXQUhMLENBTkosQ0FESjtBQWNILEM7Ozs7Ozs7Ozs7O0FDMVZELHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIvaW5kZXguanNcIik7XG4iLCIvLyBCYXNlIEltcG9ydHNcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbi8vIFNlcnZlciBTZXR1cFxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJ1xuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbi8vIE1pZGRsZXdhcmVcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuXG4vLyBEYXRhIFBhcnNpbmdcbmltcG9ydCB7XG4gICAgcmVuZGVyU2lnbmFsc1xufSBmcm9tICcuL3JlbmRlcmVyJ1xuLy8gaW1wb3J0IHRlc3RNb2RlbCBmcm9tICcuL3Rlc3RNb2RlbC5qc29uJ1xuXG4vLyBMaWJyYXJ5IG5vZGVzXG5pbXBvcnQgbGlicmFyeU5vZGVzIGZyb20gJy4vbGlicmFyeU5vZGVzLmpzb24nXG5cbi8vIFByb2plY3QgcHJlc2V0c1xuaW1wb3J0IG1vZHVsYXRpb24gZnJvbSAnLi9wcm9qZWN0X3ByZXNldHMvbW9kdWxhdGlvbi5qc29uJ1xuaW1wb3J0IGZvdXJpZXJTZXJpZXMgZnJvbSAnLi9wcm9qZWN0X3ByZXNldHMvZm91cmllclNlcmllcy5qc29uJ1xuXG5sZXQgZGF0YWJhc2UgPSB7XG4gICAgcHJvamVjdHNJbmZvOiBbe1xuICAgICAgICBwcm9qZWN0SWQ6IFwiMVwiLFxuICAgICAgICB0aXRsZTogXCJBTS9GTSBNb2R1bGF0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNob3dzIG9uZSBzaWduYWwgbW9kdWxhdGVkIG92ZXIgb3RoZXIgKGNhcnJpZXIpIHNpZ25hbCB1c2luZyBBTSBhbmQgRk0gbW9kdWxhdGlvbi5cIixcbiAgICAgICAgb3duZXI6IFwiYWRtaW5cIlxuICAgIH0sIHtcbiAgICAgICAgcHJvamVjdElkOiBcIjJcIixcbiAgICAgICAgdGl0bGU6IFwiRm91cmllciBTZXJpZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQXR0ZW1wdCBhdCBjcmVhdGluZyBmb3VyaWVyIHNlcmllcyB1c2luZyB0aGlzIHRvb2wuXCIsXG4gICAgICAgIG93bmVyOiBcImFkbWluXCJcbiAgICB9XSxcbiAgICBwcm9qZWN0TW9kZWxzOiBbe1xuICAgICAgICAgICAgLi4ubW9kdWxhdGlvblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAuLi5mb3VyaWVyU2VyaWVzXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHVzZXJzOiB7XG4gICAgICAgIGFkbWluOiB7XG4gICAgICAgICAgICB1c2VybmFtZTogXCJhZG1pblwiLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiYWRtaW5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBuZXdQcm9qZWN0OiBmdW5jdGlvbiAodXNlcm5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICAvLyBGaW5kIG5ldyBpZFxuICAgICAgICBsZXQgbmV3SWQgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wcm9qZWN0c0luZm8pIHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLnByb2plY3RzSW5mb1tpXS5wcm9qZWN0SWQpID4gbmV3SWQpIG5ld0lkID0gdGhpcy5wcm9qZWN0c0luZm9baV0ucHJvamVjdElkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3SWQrKztcblxuICAgICAgICAvLyBBZGQgbmV3IHByb2plY3kgaW5mb1xuICAgICAgICB0aGlzLnByb2plY3RzSW5mby5wdXNoKHtcbiAgICAgICAgICAgIHByb2plY3RJZDogbmV3SWQsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvd25lcjogdXNlcm5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9qZWN0TW9kZWxzLnB1c2goe1xuICAgICAgICAgICAgLi4ucHJvamVjdE1vZGVsVGVtcGxhdGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0lkO1xuICAgIH0sXG4gICAgc2F2ZVByb2plY3Q6IGZ1bmN0aW9uIChwcm9qZWN0SWQsIGpzb24pIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFZlcnNpb24gPSB7XG4gICAgICAgICAgICBhbGxDb25uZWN0aW9uczoganNvbi5hbGxDb25uZWN0aW9ucyxcbiAgICAgICAgICAgIGFsbE5vZGVzOiBqc29uLmFsbE5vZGVzLFxuICAgICAgICAgICAgY29tcG9zZXJDb29yZGluYXRlczoganNvbi5jb21wb3NlckNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgaXNDcmVhdGluZ0Nvbm5lY3Rpb246IGpzb24uY29tcG9zZXJDb29yZGluYXRlc1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9qZWN0TW9kZWxzW3Byb2plY3RJZCAtIDFdID0gbmV3UHJvamVjdFZlcnNpb247XG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0TW9kZWxUZW1wbGF0ZSA9IHtcbiAgICBhbGxDb25uZWN0aW9uczogW10sXG4gICAgYWxsTm9kZXM6IHt9LFxuICAgIGNvbXBvc2VyQ29vcmRpbmF0ZXM6IHtcbiAgICAgICAgZm9jdXNlZDogdHJ1ZSxcbiAgICAgICAgZ3JpZFNpemU6IDUwLFxuICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgIHdpZHRoOiAxLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB6b29tTGV2ZWw6IDFcbiAgICB9LFxuICAgIGlzQ3JlYXRpbmdDb25uZWN0aW9uOiBmYWxzZVxufVxuXG4vLyBTdGF0aWMgZmlsZXNcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy9wdWJsaWMvc3RhdGljJykpXG5cbi8vIExvZ2dpbmdcbmFwcC51c2UobW9yZ2FuKCd0aW55JykpO1xuXG4vLyAtLS0gUk9VVEVTIC0tLVxuYXBwLmdldCgnL2VkaXRvci86dXNlcm5hbWUvOmlkJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gcmVxLnBhcmFtcy5pZDtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG5cbiAgICBpZiAoIWRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkgcmVzLnN0YXR1cyg0MjApLnNlbmQoXCJVc2VyIHdpdGggdXNlcm5hbWUgXCIgKyB1c2VybmFtZSArIFwiIGRvZXNuJ3QgZXhpc3RcIik7XG5cbiAgICBmcy5yZWFkRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wdWJsaWMvZWRpdG9yLmh0bWwnKSwgJ3V0ZjgnLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdBbiBlcnJvciBvY2N1cnJlZCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGl0bGVcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgIFwiPHRpdGxlPjwvdGl0bGU+XCIsXG4gICAgICAgICAgICBgPHRpdGxlPiR7cHJvamVjdElkfTwvdGl0bGU+YFxuICAgICAgICApXG5cbiAgICAgICAgbGV0IHByb2plY3REYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YWJhc2UucHJvamVjdHNJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZGF0YWJhc2UucHJvamVjdHNJbmZvW2ldO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdC5vd25lciA9PSB1c2VybmFtZSAmJiBwcm9qZWN0LnByb2plY3RJZCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGlkID0gcGFyc2VJbnQocHJvamVjdElkKSAtIDE7XG4gICAgICAgICAgICAgICAgcHJvamVjdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGFiYXNlLnByb2plY3RNb2RlbHNbcGlkXSxcbiAgICAgICAgICAgICAgICAgICAgcGlkOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiB1c2VybmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBkYXRhXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICAnPHNjcmlwdCBpZD1cImVkaXRvci1kYXRhXCI+PC9zY3JpcHQ+JyxcbiAgICAgICAgICAgIGA8c2NyaXB0IGlkPVwicHJvamVjdC1kYXRhXCI+ZG9jdW1lbnQucHJvamVjdERhdGEgPSAke0pTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKX08L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgaWQ9XCJsaWJyYXJ5LWRhdGFcIj5kb2N1bWVudC5saWJyYXJ5Tm9kZXMgPSAke0pTT04uc3RyaW5naWZ5KGxpYnJhcnlOb2Rlcyl9PC9zY3JpcHQ+YFxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgICAgICByZXMuc2VuZChkYXRhKTtcbiAgICB9KVxufSk7XG5cbi8vIERlZmF1bHQgdGVzdCB2aXN1YWxpc2F0aW9uXG5hcHAuZ2V0KCcvcmVuZGVyLzp1c2VybmFtZS86aWQnLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcblxuICAgIGlmICghZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSByZXMuc3RhdHVzKDQyMCkuc2VuZChcIlVzZXIgd2l0aCB1c2VybmFtZSBcIiArIHVzZXJuYW1lICsgXCIgZG9lc24ndCBleGlzdFwiKTtcblxuXG4gICAgY29uc3QgcmVuZGVyZWRTdHJpbmcgPSByZW5kZXJTaWduYWxzKGRhdGFiYXNlLnByb2plY3RNb2RlbHNbcHJvamVjdElkIC0gMV0pO1xuXG4gICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgIHJlcy5lbmQocmVuZGVyZWRTdHJpbmcpO1xufSlcblxuLy8gRm9yIG5vdywgbGFuZGluZyBwYWdlIGlzIHRoZSBwcm9qZWN0cyBwYWdlLlxuYXBwLmdldChcIi9cIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgZnMucmVhZEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vcHVibGljL3Byb2plY3RzLmh0bWwnKSwgJ3V0ZjgnLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdBbiBlcnJvciBvY2N1cnJlZCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGl0bGVcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgIFwiPHRpdGxlPjwvdGl0bGU+XCIsXG4gICAgICAgICAgICBgPHRpdGxlPlByb2plY3RzPC90aXRsZT5gXG4gICAgICAgIClcblxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgICAgIHJlcy5lbmQoZGF0YSk7XG4gICAgfSlcbn0pXG5cbmFwcC5nZXQoXCIvcHJvamVjdHMvaW5mby86dXNlcm5hbWVcIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lO1xuXG4gICAgaWYgKGRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkge1xuICAgICAgICBsZXQgcHJvamVjdHNBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFiYXNlLnByb2plY3RzSW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFiYXNlLnByb2plY3RzSW5mb1tpXS5vd25lciA9PT0gdXNlcm5hbWUpXG4gICAgICAgICAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKGRhdGFiYXNlLnByb2plY3RzSW5mb1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQyMCkuc2VuZChgTm8gdXNlciB3aXRoIHVzZXJuYW1lIFwiJHt1c2VybmFtZX1cIiB3YXMgZm91bmQuYCk7XG4gICAgfVxuXG59KVxuXG5cbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnBvc3QoXCIvc2F2ZS86dXNlcm5hbWUvOmlkXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIC8vIFNhdmUgZXhpc3RpbmcgcHJvamVjdFxuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSByZXEucGFyYW1zLmlkO1xuXG4gICAgY29uc3QgcHJvamVjdEpzb24gPSByZXEuYm9keTtcblxuICAgIGlmICghZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSByZXMuc3RhdHVzKDQyMCkuc2VuZChgVXNlciB3aXRoIHVzZXJuYW1lICR7dXNlcm5hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblxuICAgIGlmICghZGF0YWJhc2UucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSkgcmVzLnN0YXR1cyg0MjEpLnNlbmQoYFByb2plY3Qgd2l0aCBpZCAke3Byb2plY3RJZH0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgZGF0YWJhc2Uuc2F2ZVByb2plY3QocHJvamVjdElkLCBwcm9qZWN0SnNvbik7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG5cbn0pXG5cblxuYXBwLmdldChcIi9jcmVhdGVQcm9qZWN0Lzp1c2VybmFtZS86dGl0bGUvOmRlc2NyaXB0aW9uXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zdCB0aXRsZSA9IHJlcS5wYXJhbXMudGl0bGU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSByZXEucGFyYW1zLmRlc2NyaXB0aW9uO1xuXG4gICAgaWYgKCFkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHJlcy5zdGF0dXMoNDIwKS5zZW5kKGBVc2VyIHdpdGggdXNlcm5hbWUgJHt1c2VybmFtZX0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgbGV0IHBpZCA9IGRhdGFiYXNlLm5ld1Byb2plY3QodXNlcm5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbik7XG5cbiAgICByZXMuc3RhdHVzKDMwMSkuc2VuZChgL2VkaXRvci8ke3VzZXJuYW1lfS8ke3BpZH1gKTtcbn0pO1xuXG4vLyBSdW4gc2VydmVyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwO1xuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJcXG5MaXN0ZW5pbmcgb246IGh0dHBzOi8vbG9jYWxob3N0OlwiICsgcG9ydCArIFwiXFxuXCIpO1xufSk7IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHZW5lcmF0b3IgQ29kZSBUb2tlbmlzZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdlbmVyYXRvciBjb2RlIHRva2VuaXNlciBmdW5jdGlvbiBpcyBhbGdvcml0aG1pY2FsbHkgc2ltcGxlLCBidXQgcHJvZHVjZXMgYSBnb29kIHJlcHJlc2VudGF0aW9uXG4vLyBvZiB0aGUgcHJvdmlkZWQgY29kZSBpbiBKYXZhU2NyaXB0IE9iamVjdCBmb3JtYXQgKHdoaWNoIGNhbiB0aGVuIGJlIGVhc2lseSBjb252ZXJ0ZWQgdG8gSlNPTixcbi8vIHNpbmNlIGl0J3MgcHJldHR5IG11Y2ggdGhlIHNhbWUgdGhpbmcpLlxuLy8gV2hlbiBnb2luZyB0aHJvdWdoIHRoZSBjb2RlLCBpdCBjYW4gZGV0ZWN0IHNldmVyYWwgdHlwZXMgb2Ygb3BlcmF0b3JzLiBUaGVzZSBhcmU6XG4vLyAgICAgKiBWYXJpYWJsZVxuLy8gICAgICogQ29uc3RhbnQgTnVtYmVyXG4vLyAgICAgKiBNYXRoIE9wZXJhdG9yXG4vLyAgICAgKiBNYXRoIEZ1bmN0aW9uXG4vLyAgICAgKiBSZWd1bGFyIHNjb3BlIC0gZXZlcnl0aGluZyBpbnNpZGUgYnJhY2tldHMgXCIoXCIgYW5kIFwiKVwiIHNob3VsZCBiZSBleGVjdXRlZCBmaXJzdFxuLy8gVGhlIFZhcmlhYmxlcywgTnVtYmVycyBhbmQgTWF0aCBvcGVyYXRvcnMgYXJlIGp1c3QgYWRkZWQgYXMgYW4gb2JqZWN0IHdpdGggYXBwcm9wcmlhdGUgdHlwZSBhbmRcbi8vIHZhbHVlIHRha2VuIGZyb20gdGhlIGNvZGUuXG5cbi8vIFRPRE86XG4vLyAqIFNhbmV0aXNlIHZhcmlhYmxlIG5hbWVzICEhISBKYXZhc2NyaXB0IGluamVjdGlvbiBpcyBwb3NzaWJsZSBub3cgdGhyb3VuIHZhcmlhYmxlIG5hbWVzLi4uXG5cbmltcG9ydCB7Zml4U2NvcGVzfSBmcm9tICcuL3Njb3BlRml4ZXInO1xuXG5leHBvcnQgY29uc3QgdG9rZW5pemVHZW5lcmF0b3IgPSAoZ2VuOiBzdHJpbmcsIG5vZGVJZDogc3RyaW5nKTogR2VuZXJhdG9yU2VnbWVudFtdID0+IHtcbiAgICAvLyBHZXQgdmFsdWUgb2YgZ2VuZXJhdG9yIGNvZGUgYW5kIHN0b3JlIGluIGdcbiAgICBsZXQgZyA9IFN0cmluZyhnZW4pO1xuICAgIGcgPSBTdHJpbmcoZml4U2NvcGVzKGcpKTtcblxuICAgIC8vIFBhcnNlZCBHZW5lcmF0b3IgQ29kZVxuICAgIGxldCBwZ2VuOiBHZW5lcmF0b3JTZWdtZW50W10gPSBbXTtcbiAgICBcbiAgICAvLyBUaGUgc3RhY2tcbiAgICBsZXQgc3RhY2s6IEdlbmVyYXRvclNlZ21lbnRbXSA9IFtdO1xuXG4gICAgLy8gQ29kZSB0b2tlbmlzZXJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b3BTdGFja09iamVjdDogR2VuZXJhdG9yU2VnbWVudCA9IHN0YWNrLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gOiBudWxsO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBWQVJJQUJMRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiW1wiKSB7XG4gICAgICAgICAgICAvLyBNb3ZlIHRvIG5leHQgY2hhcmFjdGVyXG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIGVtcHR5IHZhcmlhYmxlXG4gICAgICAgICAgICBsZXQgdmFyaWFibGUgPSBcIlwiO1xuXG4gICAgICAgICAgICAvLyBTY2FuIHVudGlsIHZhcmlhYmxlIHNjb3BlIGlzIGNsb3NlZFxuICAgICAgICAgICAgd2hpbGUoZ1tpXSAhPT0gXCJdXCIpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSArPSBnW2ldO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodmFyaWFibGUgPT09IFwidGltZVwiIHx8IHZhcmlhYmxlID09PSBcIlBJXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nID9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBub2RlSWQgKyB2YXJpYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidmFyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhcmlhYmxlLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbdG9wSW5kZXhdLmNvZGUucHVzaCh2YXJpYWJsZVNuaXBwZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2godmFyaWFibGVTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBNQVRIIE9QRVJBVE9SIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYgKGdbaV0gPT09IFwiKlwiIHx8IGdbaV0gPT09IFwiL1wiIHx8IGdbaV0gPT09IFwiK1wiIHx8IGdbaV0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvclNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBnW2ldLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2gob3BlcmF0b3JTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChvcGVyYXRvclNuaXBwZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE1BVEggRlVOQ1RJT04gLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcInNcIiB8fCBnW2ldID09PSBcImNcIiB8fCBnW2ldID09PSBcInRcIikge1xuICAgICAgICAgICAgLy8gTWF0aGVtYXRpY2FsIGZvcm11bGFzIGFyZSBjb2RlZCBpbiB0aHJlZSBsZXR0ZXJzXG4gICAgICAgICAgICBsZXQgbmV4dFRocmVlID0gU3RyaW5nKGdbaV0gKyBnW2krMV0gKyBnW2krMl0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBuZXh0IHRocmVlIGNoYXJzIGFyZSBvbmUgb2YgXG4gICAgICAgICAgICBpZihuZXh0VGhyZWUgPT09IFwic2luXCIgfHwgbmV4dFRocmVlID09PSBcImNvc1wiIHx8IG5leHRUaHJlZSA9PT0gXCJ0YW5cIiB8fCBuZXh0VGhyZWUgPT09IFwic3F3XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGp1c3QgaW5kZXggdG8gbmV4dCBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICBpICs9IDM7XG5cbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggZm9yIG9wZW5pbmcgYnJhY2tldHNcbiAgICAgICAgICAgICAgICB3aGlsZShnW2ldICE9PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoaSA+PSBnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRocm93IGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046IHNob3VsZCBwcm92aWRlIGJyYWNrZXRzIGZvciBtYXRoIG9wZXJhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInNob3VsZCBwcm92aWRlIGJyYWNrZXRzIGZvciBtYXRoIG9wZXJhdG9yc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcHJvdmlkZWQgc3BhY2Ugb3IgYSBjaGFyYWN0ZXIgYWZ0ZXIgdGhyZWUgbWF0aCBjaGFyc1xuICAgICAgICAgICAgICAgIC8vIGlmIChnW2krMV0gPT09IFwiKFwiKSBpKys7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXRoU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtYXRoXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXh0VGhyZWUsXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFtdXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tUb3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUucHVzaChtYXRoU25pcHBldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVUb3BJbmRleCA9IHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZVtzY29wZVRvcEluZGV4XVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgICAgICBwZ2VuLnB1c2gobWF0aFNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBwZ2VuW3BnZW4ubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSBwYXJzaW5nIGNvZGVcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBSRUdVTEFSIFNDT1BFIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIC8vIEJlZ2luIHJlZ3VsYXIgc2NvcGVcbiAgICAgICAgICAgIGNvbnN0IHNjb3BlU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNjb3BlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgY29kZTogW11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tUb3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5wdXNoKHNjb3BlU25pcHBldCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzY29wZVRvcEluZGV4ID0gc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZVtzY29wZVRvcEluZGV4XVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChzY29wZVNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgcGdlbltwZ2VuLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIEVORCBBTlkgU0NPUEUgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcIilcIiB8fCBnLmNoYXJBdChpKSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgIC8vIEVuZCBTY29wZVxuXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0b3AgaXRlbSBmcm9tIHN0YWNrIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBjbG9zZWQgc2NvcGUgdGhhdCB3YXNuJ3Qgb3BlbmVkXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogICAgICAgICAgICB0aHJvdyBFUlJPUlxuICAgICAgICAgICAgICAgIC8vIEVSUk9SIFJFQVNPTjogICAgbm9uIGV4aXN0ZW50IHNjb3BlIHdhcyBjbG9zZWRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibm9uIGV4aXN0ZW50IHNjb3BlIHdhcyBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gTlVCTUVSIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgbGV0IG1heWJlTnVtYmVyID0gU3RyaW5nKHBhcnNlSW50KGdbaV0pKTtcblxuICAgICAgICBpZihtYXliZU51bWJlciAhPT0gU3RyaW5nKE5hTikgJiYgdHlwZW9mIHBhcnNlSW50KG1heWJlTnVtYmVyKSA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyU3RhcnQgPSBpO1xuXG4gICAgICAgICAgICAvLyBJcyBjdXJyZW50IGNoYXIgYSBudW1iZXIgb3IgYSBkb3Q/XG4gICAgICAgICAgICBjb25zdCBpc051bWJlciA9ICgpID0+IChtYXliZU51bWJlciAhPT0gU3RyaW5nKE5hTikgJiYgdHlwZW9mIHBhcnNlSW50KG1heWJlTnVtYmVyKSA9PT0gXCJudW1iZXJcIik7XG4gICAgICAgICAgICBjb25zdCBpc0RvdCA9IChpbmRleDogbnVtYmVyKSA9PiBTdHJpbmcoZ1tpbmRleF0pID09PSBcIi5cIjtcblxuICAgICAgICAgICAgLy8gV2FzIHRoZXJlIGEgZG90IGluIGN1cnJlbnQgc2VxdWVuY2Ugb2YgbnVtYmVycz9cbiAgICAgICAgICAgIGxldCB3YXNEb3RBbHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdoaWxlKGlzTnVtYmVyKCkgfHwgaXNEb3QoaSkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBjdXJyZW50IGNoYXIgaXMgYSBkb3RcbiAgICAgICAgICAgICAgICBpZihpc0RvdChpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZih3YXNEb3RBbHJlYWR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCB0aGVyZSB3YXMgYSBkb3QgYWxyZWFkeSwgdGhyb3cgZXJyb3IsIHNpbmNlIGl0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdGhyb3cgRVJST1JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVSUk9SIFJFQVNPTjogaW52YWxpZCBmbG9hdGluZyBwb2ludCBudW1iZXIgc3ludGF4XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBub3QsIHNldCB3YXMgZG90IGFscmVhZHkgdG8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgd2FzRG90QWxyZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNb3ZlIHRvIG5leHQgaW5kZXggYW5kIFxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBtYXliZU51bWJlciA9IFN0cmluZyhwYXJzZUludChnW2ldKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGluZ051bWJlciA9IGcuc2xpY2UobnVtYmVyU3RhcnQsIGkpO1xuXG4gICAgICAgICAgICBjb25zdCBudW1iZXJTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdGluZ051bWJlcixcbiAgICAgICAgICAgICAgICBjb2RlOiBudWxsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbdG9wSW5kZXhdLmNvZGUucHVzaChudW1iZXJTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChudW1iZXJTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaS0tO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gUmV0dXJuIHBhcnNlZCBnZW5lcmF0b3IgYXJyYXlcbiAgICByZXR1cm4gcGdlbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmF0b3JTZWdtZW50IHtcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdmFsdWU6IChzdHJpbmd8bnVtYmVyKSxcbiAgICBjb2RlOiBHZW5lcmF0b3JTZWdtZW50W11cbn0iLCJpbXBvcnQgeyByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG5pbXBvcnQgeyBzY3JpcHRHZW5lcmF0b3IgfSBmcm9tICcuL3NjcmlwdEdlbmVyYXRvci50cyc7XG5pbXBvcnQgeyBqc3hEb20gfSBmcm9tICcuL3ZpZXdlckRvbSc7XG5cbmZ1bmN0aW9uIHJlbmRlckh0bWwgKHJlcXVlc3RKc29uKSB7XG4gICAgLy8gU2VwYXJhdGUgbm9kZXMgZnJvbSBjb25uZWN0b3JzXG4gICAgY29uc3QgYWxsTm9kZXMgPSB7Li4ucmVxdWVzdEpzb24uYWxsTm9kZXN9O1xuICAgIGNvbnN0IGFsbENvbm5lY3Rpb25zID0gWy4uLnJlcXVlc3RKc29uLmFsbENvbm5lY3Rpb25zXTtcblxuICAgIC8vIFJlbmRlciBIVE1MXG4gICAgY29uc3QganN4ID0ganN4RG9tKGFsbE5vZGVzKTtcbiAgICBjb25zdCBqc3hTdHJpbmcgPSByZW5kZXJUb1N0YXRpY01hcmt1cChqc3gpO1xuXG4gICAgLy8gR2VuZXJhdGUgU2NyaXB0c1xuICAgIC8vIGNvbnNvbGUudGltZShcIlNjcmlwdCBQYXJzZXJcIik7XG5cbiAgICBjb25zdCBzY3JpcHRBcnJheSA9IHNjcmlwdEdlbmVyYXRvcihhbGxOb2RlcywgYWxsQ29ubmVjdGlvbnMpO1xuICAgIGxldCBjb21wb3NlZFNjcmlwdFN0cmluZyA9IFwiXCI7XG4gICAgZm9yKGxldCBzIGluIHNjcmlwdEFycmF5KSB7XG4gICAgICAgIGlmKHMgPT0gMCkgY29udGludWU7XG4gICAgICAgIGNvbXBvc2VkU2NyaXB0U3RyaW5nICs9IHNjcmlwdEFycmF5W3NdO1xuICAgIH1cbiAgICBcbiAgICAvLyBjb25zb2xlLnRpbWVFbmQoXCJTY3JpcHQgUGFyc2VyXCIpO1xuXG4gICAgLy8gUGFja2FnZSBpbXBvcnRzXG4gICAgbGV0IHNjcmlwdHMgPSBgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9DaGFydC5qcy8yLjcuMy9DaGFydC5idW5kbGUubWluLmpzXCI+PC9zY3JpcHQ+XFxuYDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0IHNyYz1cIi9DQ2FwdHVyZS5hbGwubWluLmpzXCI+PC9zY3JpcHQ+YDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2pzLXVudGFyQDIuMC4wL2J1aWxkL2Rpc3QvdW50YXJcIj48L3NjcmlwdD5gO1xuICAgIHNjcmlwdHMgKz0gYDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vZG93bmxvYWRqc0AxLjQuNy9kb3dubG9hZC5qc1wiPjwvc2NyaXB0PmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9naWYuanNAMC4yLjAvZGlzdC9naWYuanNcIj48L3NjcmlwdD5gO1xuXG4gICAgLy8gR0lGIFJlY29yZGVyXG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD5cbiAgICAgICAgdmFyIGxhc3RGcmFtZVRpbWVzdGFtcCA9IG51bGw7XG4gICAgICAgIHZhciBpc1JlY29yZGluZyA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25hbHMtcmVjb3JkaW5nLXN0b3BcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgICAgICAgXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduYWxzLWJhY2stYnV0dG9uXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IG5ld0xpbmsgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFwicmVuZGVyXCIsIFwiZWRpdG9yXCIpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihuZXdMaW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25hbHMtcmVjb3JkaW5nLXN0YXJ0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbmFscy1yZWNvcmRpbmctc3RvcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICA8L3NjcmlwdD5gXG5cbiAgICAvLyBPbmx5IGFkZCBmZnQgcmVxdWlyZSBpZiBwcm9qZWN0IHVzZXMgZmZ0XG4gICAgZm9yKGxldCBmIGluIGFsbE5vZGVzKSB7XG4gICAgICAgIGlmKGYuc3Vic3RyKDAsIDMpID09PSBcImZmdFwiKSB7XG4gICAgICAgICAgICBzY3JpcHRzICs9IGA8c2NyaXB0IHNyYz1cIi9mZnQuanNcIj48L3NjcmlwdD5cXG5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD4ke3NjcmlwdEFycmF5WzBdfTwvc2NyaXB0PlxcbmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD4ke2NvbXBvc2VkU2NyaXB0U3RyaW5nfTwvc2NyaXB0PlxcbmA7XG4gICAgXG4gICAgLy8gQ29tYmluZSBmb3JtZXIgcmVzdWx0c1xuICAgIGNvbnN0IHNjcmlwdGVkSHRtbCA9IGpzeFN0cmluZy5zbGljZSgwLCBqc3hTdHJpbmcubGVuZ3RoIC0gNikgKyBzY3JpcHRzICsgXCI8L2Rpdj5cIjtcbiAgICBcbiAgICAvLyBSZXR1cm4gZ2VuZXJhdGVkIEhUTUwgYXMgYSBzdHJpbmdcbiAgICByZXR1cm4gc2NyaXB0ZWRIdG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2lnbmFscyAocmVxdWVzdEpzb24pIHtcbiAgICByZXR1cm4gcmVuZGVySHRtbChyZXF1ZXN0SnNvbik7XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNjb3BlIEZpeGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2NvcGUgRml4ZXIgZnVuY3Rpb24gaXMgcmVsYXRlZCB0byB0aGUgZ2VuIHZhcmlhYmxlIHBhcnNpbmcgYWxnb3JpdGhtLiBTaW5jZSB0aGUgdG9rZW5pemVyIFxuLy8gZnVuY3Rpb24gZG9lcyBub3QgdGFrZSBpbnRvIGFjY291bmQgdGhhdCBtYXRoIG9wZXJhdG9ycyAqIChtdWx0aXBsaWNhdGlvbikgYW5kIC8gKGRpdmlzaW9uKVxuLy8gYXJlIGV4ZWN1dGVkIGZpcnN0LCB3ZSBuZWVkIHRvIHB1dCBzY29wZXMgYXJvdW5kIGJpdHMgdGhhdCBzaG91bGQgZXhlY3V0ZWQgZmlyc3QuIFRoaXMgaXMgXG4vLyBub3QgZmluYWwgc29sdXRpb24sIHNpbmNlIGl0IGRvZXMgbm90IHRha2UgZm9sbG93aW5nIHNpdHVhdGlvbnMgaW50byBhY2NvdW50OlxuLy8gICAgICogdGhlcmUgaXMgYSBtaW51cyBvciBwbHVzIHNpZ24gYmVmb3JlIGEgbnVtYmVyOiAtMSpbdmFyaWFibGVdXG4vLyAgICAgICAgIC0gSW4gdGhpcyBjYXNlIGl0IHdvdWxkIHJldHVybiB0aGlzOiAtKDEqW3ZhcmlhYmxlXSkuIFRoaXMgZG9lcyBub3QgYXBwbHkgc2NvcGVzXG4vLyAgICAgICAgICAgY29ycmVjdGx5LlxuLy9cbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFsZ29yaXRobSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGFsZ29yaXRobSBtYWtlcyBvbmx5IG9uZSBnZW5lcmFsIHN3ZWVwIHRocm91Z2ggdGhlIHN0cmluZy4gVGhpcyBtZWFucyB0aGF0IGlmIG5vIFxuLy8gc2NvcGVzIGFyZSBuZWVkZWQsIGV4ZWN1dGlvbiB0aW1lIHdpbGwgYmUgbWluaW1hbCwgaS5lLiBpdCB3aWxsIHRha2UgYXMgbXVjaCB0aW1lIGFzIGl0XG4vLyB0YWtlcyB0byBsb29wIHRocm91Z2ggdGhlIHN0cmluZyBvbmNlIGFuZCBjaGVjayBpZiB0aGUgY2hhcmFjdGVyIGlzICogb3IgLy4gSW4gdGhlIGNhc2Ugb2Zcbi8vIDM0IGNoYXJhY3RlciBzdHJpbmcsIHRoaXMgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgaW4gYWJvdW50IDAuMy0wLjUgbXMuIFdpdGggYW4gYXZlcmFnZSBvZiBcbi8vIGFyb3VuZCAwLjRtcyBhbmQgMzQgY2hhcmFjdGVycywgd2UgY2FuIGFwcHJveGltYXRlIHRoYXQgb25lIGNoYXJhY3RlciB0YWtlcyAwLjQgLyAzNCA9IDEuNjZcbi8vIG1pY3JvIHNlY29uZHMuIFRoaXMgd2FzIHRlc3RlZCBvbiAyLjdHaHogSW50ZWwgQ29yZSBpNy4gU28gaXQgdG9vayBhcm91bmQgNDQ4MiBjbG9jayBjeWNsZXNcbi8vIHRvIGV4ZWN1dGUgdGhhdCBhY2NvcmRpbmcgdG8gZm9sbG93aW5nIGVxdWF0aW9uOiAxLjY2dXMgLyAoMSAvIDIuN0cpID0gNDQ4Mi4gVGhpcyBjb3VsZCBiZSBcbi8vIGRyYW1hdGljYWxseSBpbXByb3ZlZCBieSB1c2luZyBjdXN0b20gbWFkZSBOb2RlLmpzIGMrKyBwbHVnaW4gd2hpY2ggYWxsb3dzIHRvIHJ1biBjKytcbi8vIGJpbmFyaWVzIGZyb20gTm9kZS5qcyBvciBieSB3cml0aW5nIHRoZSB3aG9sZSByZW5kZXJlciBzZXJ2ZXIgaW4gYSBjb21waWxlZCBsYW5ndWFnZSBsaWtlIFxuLy8gcHl0aG9uLCBjIywgZ28sIG9yIHN3aWZ0LiBUaGVyZSBpcyBhbHNvIGEgcG9zc2liaWxpdHkgdG8gd3JpdGUgaXQgaW4gUnVzdCBsYW5ndWFnZSwgQyBvclxuLy8gQysrLiBUaGlzIHdvdWxkIGFsbG93IHRvIGNvbXBpbGUganVzdCB0aGlzIGZ1bmN0aW9uIHRvIFdlYkFzc2VtYmx5IGFuZCBydW4gaXQgaW4gTm9kZS5qcyBhdCBcbi8vIGNvbXBpbGVkIHNwZWVkLiBJZiBmdXJ0aGVyIGRldmVsb3BtZW50IHdpbGwgYmUgZG9uZSBhbmQgdGhlcmUgd2lsbCBiZSBhIGRlY2lzaW9uIHRvICBzd2l0Y2hcbi8vIHRvIGEgY29tcGlsZWQgbGFuZ3VhZ2Ugc2VydmVyLCBJIHdvdWxkIHN1Z2dlc3QgdXNpbmcgR08gbGFuZ3VhZ2UgZHVlIHRvIGl0cyBzaW1wbGljaXR5LlxuLy9cbi8vIEFsZ2l0aG0gd29ya3MgaW4gYSBmb2xsb3dpbmcgZmFzaGlvbjpcbi8vICAgMS4gTWFrZSBzdXJlIHBhc3NlZCB0ZXh0IGlzIG9mIGEgU3RyaW5nIHR5cGVcbi8vICAgMi4gU2V0IGZsYWdzIHRvIGZhbHNlOlxuLy8gICAgICAgLSBib3JkZXIgZmxhZ3M6IGluZGljYXRlIGlmIG9uIGxlZnQgb3IgcmlnaHQsIGEgKyBvciAtIHNpZ24gd2FzIGZvdW5kXG4vLyAgICAgICAtIGJyYWNrZXQgZmxhZ3M6IGluZGljYXRlIGlmIHdoaWxlIHN3ZWVwaW5nIGxlZnQgYW5kIHJpZ2h0IGEgc2NvcGUgd2FzIGZvdW5kXG4vLyAgIDMuIEluaXRpYXRlIHZhcmlhYmxlcyBmb3IgbGVmdCBhbmQgcmlnaHQgc3dlZXBlcnNcbi8vICAgNC4gTG9vcCB1bnRpbCB3aG9sZSBzdHJpbmcgd2FzIHNjYW5uZWQsIGluIHRoZSBsb29wOlxuLy8gICAgICAgMS4gSWYgY3VycmVudCBjaGFyYWN0ZXIgaXMgXCIqXCJcIiBvciBcIi9cIiwgY29udGludWUsIG90aGVyd2lzZSBpbmNyZWFzZSBpbmRleCBieSBvbmUgYW5kIGNoZWNrIGFnYWluXG4vLyAgICAgICAyLiBTY2FuIHRvIHRoZSBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgaW5kZXguXG4vLyAgICAgICAzLiBJZiByYW4gb3V0IG9mIGJvdW5kcyBvZiB0aGUgc3RyaW5nLCBzdG9wIHNjYW5uaW5nIGxlZnQsIG1vdmUgdG8gc3RlcCA3XG4vLyAgICAgICA0LiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBzZXQgY2xvc2luZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDUuIElmIGhpdCBvcGVuaW5nIGJyYWNrZXQsIGNoZWNrIGlmIGNsb3NpbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZyBhbmQgc2V0IGNsb3NpbmcgYnJhY2tldCBmbGFnIHRvIGZhbHNlIGFnYWluLlxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCBtb3ZlIHRvIHN0ZXAgN1xuLy8gICAgICAgNi4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBjbG9zaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZywgbW92ZSByaWdodCBieSBvbmUgc3RlcCBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuLy8gICAgICAgNy4gU2NhbiB0byB0aGUgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBpbmRleC5cbi8vICAgICAgIDguIElmIHJhbiBvdXQgb2YgYm91bmRzIG9mIHRoZSBzdHJpbmcsIHN0b3Agc2Nhbm5pbmcgbGVmdCwgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICA5LiBJZiBoaXQgb3BlbmluZyBicmFja2V0LCBzZXQgb3BlbmluZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDEwLiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcgYW5kIHNldCBvcGVuaW5nIGJyYWNrZXQgZmxhZyB0byBmYWxzZSBhZ2Fpbi5cbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICAxMS4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuXG5leHBvcnQgZnVuY3Rpb24gZml4U2NvcGVzIChnZW4pIHtcbiAgICBsZXQgZyA9IFN0cmluZyhnZW4pO1xuXG4gICAgLy8gVmFyaWFibGUgYXJlIHRha2VuIG91dHNpZGUgb2YgZm9yIGxvb3AsIHRvIGluY3JlYXNlIHBlcmZvcm1hbmNlLlxuICAgIC8vIEluIHRoaXMgd2F5LCB2YXJpYWJsZXMgYXJlIGp1c3QgcmV3cml0dGVuIGluIHRoZSBzYW1lIG1lbW9yeVxuICAgIC8vIGxvY2F0aW9uIGluc3RlYWQgb2YgY3JlYXRpbmcgbmV3IHZhcmlhYmxlIGV2ZXJ5IHRpbWUuXG4gICAgbGV0IGZvdW5kTGVmdEJvcmRlciA9IGZhbHNlO1xuICAgIGxldCBmb3VuZFJpZ2h0Qm9yZGVyID0gZmFsc2U7XG5cbiAgICBsZXQganVzdEhpdE9wZW5pbmdCcmFja2V0ID0gZmFsc2U7XG4gICAgbGV0IGp1c3RIaXRDbG9zaW5nQnJhY2tldCA9IGZhbHNlO1xuXG4gICAgbGV0IGxlZnQ7XG4gICAgbGV0IHJpZ2h0O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChnW2ldID09PSBcIipcIiB8fCBnW2ldID09PSBcIi9cIikge1xuICAgICAgICAgICAgLy8gU2NhbiBsZWZ0XG4gICAgICAgICAgICBmb3IgKGxlZnQgPSBpOyAhZm91bmRMZWZ0Qm9yZGVyOyBsZWZ0LS0pIHtcbiAgICAgICAgICAgICAgICAvLyBFeGl0IHRoZSBzY2FubmluZyBsb29wIGlmIGhpdCBsZWZ0IHN0cmluZyB3YWxsXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGRvZXMgbm90IHNldCBmb3VuZExlZnRCb3JkZXIgdmFyaWFibGUgdG8gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgaWYgYm90aCBzaWRlcyBhcmUgYnJhY2tldHMgb3Igb3V0ZXIgd2FsbHMgb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN0cmluZywgbmV3IGJyYWNrZXRzIHNob3VsZCBub3QgYmUgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBoaXRzIG9wZW5pbmcgYnJhY2tldCwgaXQgY2hlY2tzIGlmIGl0IGhpdCBjbG9zaW5nIGJyYWNrZXQgYmVmb3JlXG4gICAgICAgICAgICAgICAgaWYgKGdbbGVmdF0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0Q2xvc2luZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RIaXRDbG9zaW5nQnJhY2tldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1hcmtzIHRoYXQgaXQgaGl0IGNsb3NpbmcgYnJhY2tldCwgc28gdGhhdCBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBsYXRlcixcbiAgICAgICAgICAgICAgICAvLyBpdCBrbm93cyB0aGF0IGl0IHNob3VsZG4ndCBcbiAgICAgICAgICAgICAgICBpZiAoZ1tsZWZ0XSA9PT0gXCIpXCIpIGp1c3RIaXRDbG9zaW5nQnJhY2tldCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvLyBFeGl0IHNjYW5uaW5nIGxvb3AgaWYgaGl0IHBsdXMgb3IgbWludXNcbiAgICAgICAgICAgICAgICAvLyBBbHNvLCBtb3ZlIHJpZ2h0LCBzbyB0aGF0IGJyYWNrZXMgaXMgaW5zZXJ0ZWQgYWZ0ZXIgKyBvciAtIHNpZ25cbiAgICAgICAgICAgICAgICBpZiAoZ1tsZWZ0XSA9PT0gXCIrXCIgfHwgZ1tsZWZ0XSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRDbG9zaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZExlZnRCb3JkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNjYW4gcmlnaHRcbiAgICAgICAgICAgIGZvciAocmlnaHQgPSBpOyAhZm91bmRSaWdodEJvcmRlcjsgcmlnaHQrKykge1xuICAgICAgICAgICAgICAgIC8vIEV4aXQgdGhlIHNjYW5uaW5nIGxvb3AgaWYgaGl0IHJpZ2h0IHN0cmluZyB3YWxsIG9yIGNsb3NpbmcgYnJhY2tldFxuICAgICAgICAgICAgICAgIGlmIChyaWdodCA+PSBnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGRvZXMgbm90IHNldCBmb3VuZFJpZ2h0Qm9yZGVyIHZhcmlhYmxlIHRvIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIGlmIGJvdGggc2lkZXMgYXJlIGJyYWNrZXRzIG9yIG91dGVyIHdhbGxzIG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdHJpbmcsIG5ldyBicmFja2V0cyBzaG91bGQgbm90IGJlIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgaGl0cyBjbG9zaW5nIGJyYWNrZXQsIGl0IGNoZWNrcyBpZiBpdCBoaXQgb3BlbmluZyBicmFja2V0IGJlZm9yZVxuICAgICAgICAgICAgICAgIGlmIChnW3JpZ2h0XSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRPcGVuaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdEhpdE9wZW5pbmdCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFya3MgdGhhdCBpdCBoaXQgY2xvc2luZyBicmFja2V0LCBzbyB0aGF0IGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGxhdGVyLFxuICAgICAgICAgICAgICAgIC8vIGl0IGtub3dzIHRoYXQgaXQgc2hvdWxkbid0IFxuICAgICAgICAgICAgICAgIGlmIChnW3JpZ2h0XSA9PT0gXCIoXCIpIGp1c3RIaXRPcGVuaW5nQnJhY2tldCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ1tyaWdodF0gPT09IFwiK1wiIHx8IGdbcmlnaHRdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdE9wZW5pbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kUmlnaHRCb3JkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBvbiBvbmUgb2YgdGhlIHNpZGVzIHRoZXJlIGlzICsgb3IgLSBzaWduXG4gICAgICAgICAgICBpZiAoZm91bmRMZWZ0Qm9yZGVyIHx8IGZvdW5kUmlnaHRCb3JkZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBTbGljZSBvcmlnaW5hbCBzdHJpbmcgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbnNcbiAgICAgICAgICAgICAgICBsZXQgb25lID0gZy5zbGljZSgwLCBsZWZ0KTtcbiAgICAgICAgICAgICAgICBsZXQgdHdvID0gZy5zbGljZShsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICAgICAgbGV0IHRocmVlID0gZy5zbGljZShyaWdodCwgZy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IGJyYWNrZXRzIGJldHdlZW4gZm9ybWVyIHRocmVlIHN0cmluZ3MgdG8gZm9ybVxuICAgICAgICAgICAgICAgIC8vIG5ldyBzdHJpbmcgd2l0aCBpbnNlcnRlZCBicmFja2V0c1xuICAgICAgICAgICAgICAgIGcgPSBvbmUgKyBcIihcIiArIHR3byArIFwiKVwiICsgdGhyZWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlc2V0IGJvcmRlciB2YXJpYWJsZXNcbiAgICAgICAgICAgIGZvdW5kTGVmdEJvcmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgZm91bmRSaWdodEJvcmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGc7XG59IiwiaW1wb3J0IHtcbiAgICBzZXBhcmF0ZU5vZGVzLFxuICAgIGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnksXG4gICAgb2JqZWN0U2l6ZSxcbiAgICB3YXNDYWxjdWxhdGVkLFxuICAgIGFsbElucHV0c0NhbGN1bGF0ZWQsXG4gICAgY2FsY3VsYXRlT3V0cHV0LFxuICAgIGdldFRvdWNoSW5wdXRzLFxuICAgIGluaXRUaW1lLFxuICAgIGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyxcbiAgICBnZXRPdGhlclNpZGVPZkNvbm5lY3RvclxufSBmcm9tICcuL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucyc7XG5cbmNvbnN0IFNBTVBMRV9SQVRFID0gNTEyOyAvLyBTYW1wbGVzIHBlciBzZWNvbmRcbmNvbnN0IERVUkFUSU9OID0gMjsgLy8gU2Vjb25kcywgaWRlYWxseSBzaG91bGQgYmUgZGl2aWRhYmxlIGJ5IDJcbmNvbnN0IE9GRlNFVCA9IDA7IC8vIFdoaWNoIHBvaW50IHNob3VsZCBiZSB0aGUgY2VudHJlIG9mIHRoZSBzY29wZVxuXG5leHBvcnQgZnVuY3Rpb24gc2NyaXB0R2VuZXJhdG9yKGFsbE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdKSB7XG4gICAgLy8gRXhlY3V0YWJsZSB0byBzdG9yZSBnZW5lcmF0ZWQgamF2YXNjcmlwdCBjb2RlLiBBbnkgaW5pdGlhbGlzYXRpb24gY29kZSBzaG91bGQgYmUgaGVyZS5cbiAgICBsZXQgZXhlQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IGV4ZWN1dGFibGUgPSBcInZhciBncmFwaHMgPSB7fTtcXG5cIjtcblxuICAgIC8vIEluaXQgc3F1YXJlIHdhdmUgZnVuY3Rpb25cbiAgICBleGVjdXRhYmxlICs9IGBNYXRoLl9fcHJvdG9fXy5zcXcgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICBsZXQgdmFsID0geCA+PSAwID8gKCh4LygyKk1hdGguUEkpKSUxKSA6ICgoKC14LU1hdGguUEkpLygyKk1hdGguUEkpKSUxKTtcbiAgICAgICAgaWYodmFsID49IDAgJiYgdmFsIDw9IDAuNSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41O1xuICAgICAgICB9XG4gICAgfTtgO1xuXG4gICAgLy8gQ2FsY3VsYXRlZCBub2RlcyBoYXZlIGZvbGxvd2luZyBzaGFwZTogXCJub2RlSWQ6b3V0cHV0SWRcIlxuICAgIGxldCBjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdID0gW107XG4gICAgXG4gICAgLy8gU3RhdGlzdGljcyBvYmplY3RcbiAgICBsZXQgc3RhdGlzdGljcyA9IHtcbiAgICAgICAgbG9vcENvdW50ZXI6IDAsXG4gICAgICAgIGluaXRpYWxUb3RhbE5vZGVzOiBvYmplY3RTaXplKGFsbE5vZGVzKSxcbiAgICAgICAgaW5pdGlhbFRvdGFsQ29ubmVjdG9yczogYWxsQ29ubmVjdGlvbnMubGVuZ3RoLFxuICAgICAgICBzdGFydFRpbWU6IDAsXG4gICAgICAgIGVuZFRpbWU6IDBcbiAgICB9O1xuICAgIFxuICAgIC8vIFNlcGFyYXRlcyB1bmNhbGN1bGF0ZWQgbm9kZXMgZnJvbSBzY29wZXMgYW5kIFVJIGF0IHRoZSBzdGFydC5cbiAgICBsZXQge1xuICAgICAgICB1bmNhbGN1bGF0ZWROb2RlcywgXG4gICAgICAgIGFsbFNjb3BlcywgXG4gICAgICAgIHVpTm9kZXMsIFxuICAgICAgICBmZnROb2RlcyxcbiAgICAgICAgdGltZVxuICAgIH0gPSBzZXBhcmF0ZU5vZGVzKGFsbE5vZGVzKTtcblxuICAgIGlmKHRpbWVbXCJ0aW1lXCJdKSB7XG4gICAgICAgIGNvbnN0IHRpbWVOb2RlID0gdGltZVtcInRpbWVcIl07XG4gICAgICAgIGNvbnN0IHRpbWVTcGVlZCA9IHBhcnNlRmxvYXQodGltZU5vZGUuc2V0dGluZ3NbMF0udmFsdWUpO1xuICAgICAgICBjb25zdCB0aW1lUmFuZ2UgPSBwYXJzZUZsb2F0KHRpbWVOb2RlLnNldHRpbmdzWzFdLnZhbHVlKTtcbiAgICAgICAgY29uc3QgdGltZU9yaWdpbiA9IHBhcnNlRmxvYXQodGltZU5vZGUuc2V0dGluZ3NbMl0udmFsdWUpO1xuXG4gICAgICAgIC8vIFRPRE86IFNPTFZFIFNBTVBMRSBSQVRFIEFVVE9NQVRJQyBDQUxDVUxBVElPTlxuICAgICAgICBjb25zdCB0aW1lU3RhcnQgPSB0aW1lT3JpZ2luIC0gdGltZVJhbmdlIC8gMjtcbiAgICAgICAgY29uc3QgdGltZVN0b3AgPSB0aW1lT3JpZ2luICsgdGltZVJhbmdlIC8gMjtcbiAgICAgICAgZXhlY3V0YWJsZSArPSBpbml0VGltZSh0aW1lU3RhcnQsIHRpbWVTdG9wLCAxIC8gU0FNUExFX1JBVEUpO1xuICAgICAgICBleGVjdXRhYmxlICs9IFwidmFyIGRlbHRhVGltZSA9IDYwO1wiXG5cbiAgICAgICAgZXhlY3V0YWJsZSArPSBgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdCA9IHQubWFwKHYgPT4gdiArICR7dGltZVNwZWVkfS9kZWx0YVRpbWUpO1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH0sIGRlbHRhVGltZSk7YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXR1cCBkZWZhdWx0IHRpbWVcbiAgICAgICAgZXhlY3V0YWJsZSArPSBpbml0VGltZShPRkZTRVQgLSBEVVJBVElPTiAvIDIsIE9GRlNFVCArIERVUkFUSU9OIC8gMiwgMSAvIFNBTVBMRV9SQVRFKTtcbiAgICB9XG4gICAgXG4gICAgLy8gU2VwYXJhdGUgdG91Y2ggbm9kZXMgZm9ybSByZWd1bGFyIG5vZGVzXG4gICAgbGV0IHRvdWNoTm9kZXNTZXBhcmF0ZWQgPSBnZXRUb3VjaElucHV0cyh1bmNhbGN1bGF0ZWROb2Rlcyk7XG5cbiAgICB1bmNhbGN1bGF0ZWROb2RlcyA9IHRvdWNoTm9kZXNTZXBhcmF0ZWQudW5jYWxjdWxhdGVkTm9kZXM7XG5cbiAgICAvLyBEZWFsIHdpdGggdG91Y2ggQ29udHJvbHNcbiAgICBsZXQgdG91Y2hOb2RlcyA9IHRvdWNoTm9kZXNTZXBhcmF0ZWQudG91Y2hOb2RlcztcblxuICAgIGV4ZWN1dGFibGUgKz0gZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzKHRvdWNoTm9kZXMpO1xuXG4gICAgZm9yIChsZXQgdCBpbiB0b3VjaE5vZGVzKSB7XG4gICAgICAgIGZvciAobGV0IG8gaW4gdG91Y2hOb2Rlc1t0XS5vdXRwdXRzKSB7XG4gICAgICAgICAgICBjYWxjdWxhdGVkTm9kZXMucHVzaChgJHt0fToke3RvdWNoTm9kZXNbdF0ub3V0cHV0c1tvXS50aXRsZX1gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29ubmVjdGlvbiBEaWN0aW9uYXJ5IGNvbnRhaW5zIGNvbm5lY3Rpb25zIGluIGtleTogdmFsdWUgZm9ybWF0LCB3aGVyZVxuICAgIC8vIGJvdGggY29udGFpbiBub2RlSWQgYW5kIHNldHRpbmdJZCBhcyBzdHJpbmdzIHNlcGFyYXRlZCBieSBhIGNvbG9uLlxuICAgIC8vIGxldCBjb25uZWN0aW9uRGljdGlvbmFyeSA9IGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnkoYWxsQ29ubmVjdGlvbnMpO1xuXG4gICAgLy8gR2VuZXJhbCBydWxlcyBmb3IgYWxnb3JpdGhtIHdyaXRpbmc6XG4gICAgLy8gKiB1c2UgYXMgbWFueSBmdW5jdGlvbnMgYXMgcG9zc2libGUgKGluIHBlcmZvcm1hbmNlIGJvdW5kcylcbiAgICAvLyAqIFxuXG4gICAgLy8gMC4gTG9vcCB0aHJvdWdoIHVuY2FsY3VsYXRlZCBub2RlcyBhbmQgZmluZCBzY29wZXMuIFNjb3BlcyBkbyBub3QgaGF2ZSBvdXRwdXRzLCBzbyBubyBuZWVkIHRvIGZpbmQgaW5wdXRzLlxuICAgIC8vIDAuMCBEbyBpdCBpbiBhIGZ1bmN0aW9uP1xuXG4gICAgLy8gMS4gTG9vcCB1bnRpbCBhbGwgbm9kZXMgYXJlIGNhbGN1bGF0ZWRcbiAgICAvLyB8ICAgMS4gQ2hlY2sgaWYgbm9kZSB3YXMgY2FsY3VsYXRlZCBiZWZvcmUsIGlmIHllcyBnbyB0byBuZXh0IG5vZGUuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgMi4gSWYgd2FzIG5vdCBjYWxjdWxhdGVkOlxuICAgIC8vIHwgICB8ICAgMS4gQ2hlY2sgaWYgYWxsIGNvbm5lY3RlZCBpbnB1dHMgYXJlIGNvbm5lY3RlZCB0byB0aGUgY2FsY3VsYXRlZCBub2RlcywgaWYgbm90IC0gZ28gdG8gbmV4dCBub2RlLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIHwgICAyLiBJZiB5ZXMsIHNhdmUgYWxsIHVuY29ubmVjdGVkIGlucHV0cyAodmFsdWUgZnJvbSBkZWZhdWx0IHZhbHVlKS4gKGZ1bmN0aW9uIGZvciBlYWNoIHNhdmUpXG4gICAgLy8gfCAgIHwgICAzLiBDaGVjayBpZiBvdXRwdXQgaXMgcG9pbnRpbmcgdG8gYSBnZW5lcmF0b3IuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgfCAgIDQuIElmIHllcywgcGFyc2UgZ2VuZXJhdG9yXG4gICAgLy8gfCAgIHwgICB8ICAgMS4gU2NhbiBnZW5lcmF0b3IgYW5kIHNhdmUgdmFyaWFibGVzXG4gICAgLy8gfCAgIHwgICB8ICAgMi4gSWYgdmFyaWFibGUgaXMgYSBnZW5lcmF0b3IgZ28gdG8gc3RlcCAxLjIuNFxuICAgIC8vIHwgICB8ICAgfCAgIDMuIExvb3AgdW50aWwgYWxsIGdlbmVyYXRvcnMgd2VyZSBwYXJzZWRcbiAgICAvLyB8ICAgfCAgIHwgLS0tLS0tLS0tLS0gSW4gZm9sbG93aW5nLCBpbnB1dHMgYXJlIGNoZWNrZWQgZmlyc3Qgc2luY2Ugc2V0dGluZyBjYW4gYmUgYW4gaW5wdXQgLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHwgICB8ICAgNS4gQ2hlY2sgaWYgb3V0cHV0IGlzIHBvaW50aW5nIHRvIGFuIGlucHV0LCBpZiB5ZXMgYXNzaWduIGlucHV0IHZhcmlhYmxlIHRvIHRoZSBvdXRwdXQgdmFyaWFibGVcbiAgICAvLyB8ICAgfCAgIDYuIENoZWNrIGlmIG91dHB1dCBpcyBwb2ludGluZyB0byBhIHNldHRpbmcsIGlmIHllcyBhc3NpZ24gY29uc3RhbnQgdG8gdGhlIHNldHRpbmdcbiAgICAvLyAyLiBGb3IgZWFjaCBzY29wZTpcbiAgICAvLyB8ICAgMS4gR2V0IGFsbCBpbnB1dHMgYW5kIHNhdmUgdGhlbSBpbiB2YXJpYWJsZXMgKGFzc3VtZWQgdG8gYmUgY2FsY3VsYXRlZCBzaW5jZSB0ZXJtaW5hdGlvbiBjb25kaXRpb24gZnJvbSBzdGVwIDEgaXMgYmFzZWQgb24gYWxsIG5vZGVzIGJlaW5nIGNhbGN1bGF0ZWQuKVxuICAgIC8vIHwgICAyLiBQYXJzZSBmaXJzdCBnZW5lcmF0b3IgYW5kIGdlbmVyYXRlIHNjb3BlIG91dHB1dCB2YXJpYWJsZSAobWFraW5nIHN1cmUgdGhhdCBhbGwgdmFyaWFibGVzIGZyb20gZ2VuZXJhdG9yIHdlcmUgc2F2ZWQgYmVmb3JlaGFuZClcbiAgICAvLyB8ICAgMy4gR2VuZXJhdGUgYW4gYXJyYXkgb2Ygb3V0cHV0IGRhdGEgYmFzZWQgb24gZ2VuZXJhbCAob3IgY29ubmVjdGVkKSB0aW1lIGFycmF5IGFuZCBzYXZlIGl0IGludG8gYSB2YXJpYWJsZVxuICAgIC8vIHwgICA0LiBDcmVhdGUgcmVkcmF3IGZ1bmN0aW9uLCBpbnNpZGUgdGhhdCBmdW5jdGlvbjpcbiAgICAvLyB8ICAgfCAgIDEuIEZpbmQgYXBwcm9wcmlhdGUgY2FudmFzIG5vZGUgaW4gdGhlIGRvbVxuICAgIC8vIHwgICB8ICAgMi4gR2V0IGNvbnRleHRcbiAgICAvLyB8ICAgfCAgIDMuIFJlcG9wdWxhdGUgZ3JhcGggYXJyYXkgd2l0aCBuZXcgZ3JhcGhzLlxuICAgIC8vIHwgICA1LiBDcmVhdGUgdXBkYXRlRGF0YSBmdW5jdGlvbiwgaW5zaWRlIHRoYXQgZnVuY3Rpb246XG4gICAgLy8gfCAgIHwgICAxLiBMb29wIHRocm91Z2ggZ3JhcGggYXJyYXkgYW5kIHVwZGF0ZSBncmFwaHMgd2l0aCBuZXcgZGF0YS5cblxuXG4gICAgLy8gMC4wIExvb3AgdGhyb3VnaCBhbGwgdWkgbm9kZXMgYW5kIHNhdmUgdGhlaXIgb3V0cHV0IHZhcmlhYmxlIG5hbWVzXG4gICAgZm9yKGxldCBub2RlS2V5IGluIHVpTm9kZXMpIHtcbiAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG5vZGUgaW50byBhIGNvbnN0YW50XG4gICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gdWlOb2Rlc1tub2RlS2V5XTtcbiAgICAgICAgY29uc3Qgb3V0cHV0S2V5ID0gY3VycmVudE5vZGUub3V0cHV0c1swXS50aXRsZTtcblxuICAgICAgICBleGVjdXRhYmxlICs9IGBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7bm9kZUtleX1JbnB1dFwiKS5vbmlucHV0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICR7bm9kZUtleX0ke291dHB1dEtleX0gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHtub2RlS2V5fUluZGljYXRvclwiKS5pbm5lclRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9O1xcbmA7XG4gICAgICAgIGV4ZWN1dGFibGUgKz0gYHZhciAke25vZGVLZXl9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuICR7dWlOb2Rlc1tub2RlS2V5XS5zZXR0aW5nc1szXS52YWx1ZX19O1xcbmA7XG5cbiAgICAgICAgY2FsY3VsYXRlZE5vZGVzLnB1c2goYCR7bm9kZUtleX06JHtvdXRwdXRLZXl9YCk7XG4gICAgICAgIFxuICAgICAgICBkZWxldGUgdW5jYWxjdWxhdGVkTm9kZXNbbm9kZUtleV07XG4gICAgfVxuICAgIC8vIDEuIExvb3AgdW50aWwgYWxsIG5vZGVzIGFyZSBjYWxjdWxhdGVkIGFuZCBjb3VudCBudW1iZXIgb2YgaXRlcmF0aW9ucyBmb3Igc3RhdGlzdGljc1xuICAgIGZvciAoc3RhdGlzdGljcy5sb29wQ291bnRlciA9IDA7IG9iamVjdFNpemUodW5jYWxjdWxhdGVkTm9kZXMpID4gMDsgc3RhdGlzdGljcy5sb29wQ291bnRlcisrKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHVuY2FsY3VsYXRlZCBub2Rlc1xuICAgICAgICBmb3IgKGxldCBub2RlS2V5IGluIHVuY2FsY3VsYXRlZE5vZGVzKSB7XG4gICAgICAgICAgICAvLyBTYXZlIGN1cnJlbnQgbm9kZSBpbnRvIGEgY29uc3RhbnRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gdW5jYWxjdWxhdGVkTm9kZXNbbm9kZUtleV07XG5cbiAgICAgICAgICAgIC8vIEdvIHRvIG5leHQgbm9kZSBpZiBub3QgYWxsIGNvbm5lY3RlZCBpbnB1dHMgd2VyZSBjYWxjdWxhdGVkIGFscmVhZHlcbiAgICAgICAgICAgIGlmICghYWxsSW5wdXRzQ2FsY3VsYXRlZChub2RlS2V5LCBjdXJyZW50Tm9kZS5pbnB1dHMsIGFsbENvbm5lY3Rpb25zLCBjYWxjdWxhdGVkTm9kZXMpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlQ2FsY3VsYXRlZE91dHB1dHM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBldmVyeSBvdXRwdXQgb2YgdGhlIG5vZGUgdG8gY2FsY3VsYXRlIHRoZW1cbiAgICAgICAgICAgIGZvciAobGV0IG8gPSAwOyBvIDwgY3VycmVudE5vZGUub3V0cHV0cy5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dEtleSA9IGN1cnJlbnROb2RlLm91dHB1dHNbb10udGl0bGU7XG4gICAgICAgICAgICAgICAgLy8gSWYgY3VycmVudCBvdXRwdXQgd2FzIGNhbGN1bGF0ZWQgYWxyZWFkeSwgc2tpcCB0byBuZXh0IG9uZVxuICAgICAgICAgICAgICAgIGlmICh3YXNDYWxjdWxhdGVkKGNhbGN1bGF0ZWROb2Rlcywgbm9kZUtleSwgb3V0cHV0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZUNhbGN1bGF0ZWRPdXRwdXRzLnB1c2goYCR7bm9kZUtleX06JHtvdXRwdXRLZXl9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIG5vdCwgY2FsY3VsYXRlIGl0IGFuZCBhcHBlbmQgdG8gdGhlIGV4ZWN1dGFibGUgdGV4dC5cbiAgICAgICAgICAgICAgICBsZXQgeyBleGUsIHdhc1N1Y2Nlc3NmdWwgfSA9IGNhbGN1bGF0ZU91dHB1dChub2RlS2V5LCBvdXRwdXRLZXksIGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHdhc1N1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhlY3V0YWJsZSArPSBleGU7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlZE5vZGVzLnB1c2goYCR7bm9kZUtleX06JHtvdXRwdXRLZXl9YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ291bGQgbm90IGdlbmVyYXRlIG91dHB1dCBjb2RlOiAke25vZGVLZXl9IC0gJHtvdXRwdXRLZXl9IHwgc2NyaXB0R2VuZXJhdG9yLnRzYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZUNhbGN1bGF0ZWRPdXRwdXRzLmxlbmd0aCA9PT0gY3VycmVudE5vZGUub3V0cHV0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdW5jYWxjdWxhdGVkTm9kZXNbbm9kZUtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBMb29wIHRocm91Z2ggYWxsIHNjb3BlcyBhbmQgZHJhdyBncmFwaHNcblxuICAgIGV4ZUFycmF5LnB1c2goZXhlY3V0YWJsZSk7XG4gICAgZXhlY3V0YWJsZSA9IFwiXCI7XG5cbiAgICBleGVjdXRhYmxlICs9IFwiZnVuY3Rpb24gdXBkYXRlKCkge1xcblwiO1xuXG4gICAgbGV0IGdpZlJlY29yZGluZ1N0YXJ0ID0gYGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbmFscy1yZWNvcmRpbmctc3RhcnRcIikub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaXNSZWNvcmRpbmcgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25hbHMtcmVjb3JkaW5nLXN0YXJ0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduYWxzLXJlY29yZGluZy1zdG9wXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGA7XG5cbiAgICBsZXQgZ2lmUmVjb3JkaW5nU3RvcCA9IGBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25hbHMtcmVjb3JkaW5nLXN0b3BcIikub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaXNSZWNvcmRpbmcgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduYWxzLXJlY29yZGluZy1zdGFydFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25hbHMtcmVjb3JkaW5nLXN0b3BcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBgO1xuICAgIFxuICAgIC8vIExvb3AgdGhyb3VnaCB0aW1lIHNjb3Blc1xuICAgIGZvciAobGV0IHMgaW4gYWxsU2NvcGVzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29wZSA9IGFsbFNjb3Blc1tzXTtcblxuICAgICAgICBsZXQgZGF0YUluaXRpYWxpc2VyQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IGRhdGFHZW5lcmF0aW9uQXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3VycmVudFNjb3BlLmlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGN1cnJlbnRTY29wZS5pbnB1dHNbaV0udGl0bGU7XG4gICAgICAgICAgICBjb25zdCB7IG90aGVyTm9kZUlkLCBvdGhlclNldHRpbmdJZCB9ID0gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoYWxsQ29ubmVjdGlvbnMsIG51bGwsIHsgbm9kZUlkOiBzLCBzZXR0aW5nSWQ6IGlucHV0VGl0bGV9KTtcblxuICAgICAgICAgICAgZGF0YUluaXRpYWxpc2VyQXJyYXkucHVzaChgbGV0ICR7aW5wdXRUaXRsZX1kYXRhID0gW107XFxuYCk7XG4gICAgICAgICAgICBkYXRhR2VuZXJhdGlvbkFycmF5LnB1c2goYCR7aW5wdXRUaXRsZX1kYXRhLnB1c2goJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0W2ldKSk7XFxuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YUluaXRpYWxpc2VyQ29tcG9zaXRlID0gXCJcIjtcbiAgICAgICAgbGV0IGRhdGFHZW5lcmF0aW9uQ29tcG9zaXRlID0gXCJcIjtcblxuICAgICAgICBmb3IobGV0IGQgaW4gZGF0YUluaXRpYWxpc2VyQXJyYXkpIHtcbiAgICAgICAgICAgIGRhdGFJbml0aWFsaXNlckNvbXBvc2l0ZSArPSBkYXRhSW5pdGlhbGlzZXJBcnJheVtkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgZCBpbiBkYXRhR2VuZXJhdGlvbkFycmF5KSB7XG4gICAgICAgICAgICBkYXRhR2VuZXJhdGlvbkNvbXBvc2l0ZSArPSBkYXRhR2VuZXJhdGlvbkFycmF5W2RdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGFHZW5lcmF0aW9uU25pcHBldCA9IGAke2RhdGFJbml0aWFsaXNlckNvbXBvc2l0ZX1cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgJHtkYXRhR2VuZXJhdGlvbkNvbXBvc2l0ZX1cbiAgICAgICAgICAgIH1gO1xuXG4gICAgICAgIGxldCBkYXRhc2V0cyA9IFsuLi5jdXJyZW50U2NvcGUuc2V0dGluZ3NdLnNsaWNlKDMsIGN1cnJlbnRTY29wZS5zZXR0aW5ncy5sZW5ndGgpLm1hcCgoc2V0dGluZywgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGN1cnJlbnRTY29wZS5pbnB1dHNbaV0udGl0bGU7XG4gICAgICAgICAgICByZXR1cm4gYHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJyR7aW5wdXRUaXRsZS5yZXBsYWNlKFwiX1wiLCBcIiBcIil9JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyR7c2V0dGluZy52YWx1ZX0nLFxuICAgICAgICAgICAgICAgIGRhdGE6ICR7aW5wdXRUaXRsZX1kYXRhXG4gICAgICAgICAgICB9YFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZGF0YXNldHNBcnJheVNuaXBwZXQgPSBcIltcIjtcbiAgICAgICAgZm9yKGxldCBkID0gMDsgZCA8IGRhdGFzZXRzLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgICAgICBkYXRhc2V0c0FycmF5U25pcHBldCArPSBkYXRhc2V0c1tkXTtcbiAgICAgICAgICAgIGlmKGQgIT0gKGRhdGFzZXRzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgZGF0YXNldHNBcnJheVNuaXBwZXQgKz0gXCIsXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YXNldHNBcnJheVNuaXBwZXQgKz0gXCJdXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGV4ZWN1dGFibGUgKz0gYFxuICAgICAgICBpZihncmFwaHMuJHtzfSkge1xuICAgICAgICAgICAgJHtkYXRhR2VuZXJhdGlvblNuaXBwZXR9XG4gICAgICAgICAgICBncmFwaHMuJHtzfS5kYXRhLmRhdGFzZXRzID0gJHtkYXRhc2V0c0FycmF5U25pcHBldH07XG4gICAgICAgICAgICBncmFwaHMuJHtzfS51cGRhdGUoKTtcbiAgICAgICAgICAgIGlmKHR5cGVvZiAke3N9Z2lmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGlmKCFsYXN0RnJhbWVUaW1lc3RhbXApIHsgXG4gICAgICAgICAgICAgICAgICAgIGxhc3RGcmFtZVRpbWVzdGFtcCA9IG5ldyBEYXRlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lU2luY2VMYXN0RnJhbWUgPSBub3cgLSBsYXN0RnJhbWVUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RGcmFtZVRpbWVzdGFtcCA9IG5ldyBEYXRlO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBncmFwaHMuJHtzfS5jYW52YXMud2lkdGgvMjtcbiAgICAgICAgICAgICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBncmFwaHMuJHtzfS5jYW52YXMuaGVpZ2h0LzI7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wQ3R4ID0gdGVtcENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBDdHguZmlsbFN0eWxlID0gXCIjRkZGXCI7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBDdHguZmlsbFJlY3QoMCwgMCwgdGVtcENhbnZhcy53aWR0aCwgdGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wQ3R4LmRyYXdJbWFnZShncmFwaHMuJHtzfS5jYW52YXMsIDAsIDAsIGdyYXBocy4ke3N9LmNhbnZhcy53aWR0aC8yLCBncmFwaHMuJHtzfS5jYW52YXMuaGVpZ2h0LzIpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuJHtzfWdpZi5hZGRGcmFtZSh0ZW1wQ3R4LCB7ZGVsYXk6IHRpbWVTaW5jZUxhc3RGcmFtZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjYW52YXNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke3N9XCIpO1xuXG4gICAgICAgICAgICB2YXIgdmlld1NpemUgPSB7XG4gICAgICAgICAgICAgICAgeDogY2FudmFzTm9kZS5wYXJlbnROb2RlLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgICAgIHk6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHcgPSB2aWV3U2l6ZS54O1xuICAgICAgICAgICAgdmFyIGggPSB2aWV3U2l6ZS55O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYW52YXNOb2RlLndpZHRoID0gdztcbiAgICAgICAgICAgIGNhbnZhc05vZGUuaGVpZ2h0ID0gaDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGN0eCA9IGNhbnZhc05vZGUuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgICAgICAke2RhdGFHZW5lcmF0aW9uU25pcHBldH1cblxuICAgICAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtsYWJlbHM6IHQubWFwKHRpID0+IHRpLnRvRml4ZWQoMikpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogJHtkYXRhc2V0c0FycmF5U25pcHBldH1cbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVuc2lvbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwcGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGl0UmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyUmFkaXVzOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDBcbiAgICAgICAgICAgICAgICAgICAgfSwgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJHtjdXJyZW50U2NvcGUuaW5wdXRzLmxlbmd0aCA+IDEgPyAndHJ1ZScgOiAnZmFsc2UnfVxuICAgICAgICAgICAgICAgICAgICB9JHsoY3VycmVudFNjb3BlLnNldHRpbmdzWzFdLnZhbHVlID09IFwiMFwiKSAmJiAoY3VycmVudFNjb3BlLnNldHRpbmdzWzJdLnZhbHVlID09IFwiMFwiKSA/ICcnIDogYCwgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6ICR7cGFyc2VGbG9hdChjdXJyZW50U2NvcGUuc2V0dGluZ3NbMV0udmFsdWUpICsgcGFyc2VGbG9hdChjdXJyZW50U2NvcGUuc2V0dGluZ3NbMl0udmFsdWUpIC8gMn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogJHtwYXJzZUZsb2F0KGN1cnJlbnRTY29wZS5zZXR0aW5nc1sxXS52YWx1ZSkgLSBwYXJzZUZsb2F0KGN1cnJlbnRTY29wZS5zZXR0aW5nc1syXS52YWx1ZSkgLyAyfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFNpemU6ICR7cGFyc2VGbG9hdChjdXJyZW50U2NvcGUuc2V0dGluZ3NbMl0udmFsdWUpIC8gMTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfWB9LCB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICcke2N1cnJlbnRTY29wZS50aXRsZX0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdyYXBocy4ke3N9ID0gbXlDaGFydDtcbiAgICAgICAgfWA7XG5cbiAgICAgICAgZ2lmUmVjb3JkaW5nU3RhcnQgKz0gYHdpbmRvdy4ke3N9Z2lmID0gbmV3IEdJRih7XG4gICAgICAgICAgICB3b3JrZXJzOiAxLFxuICAgICAgICAgICAgcXVhbGl0eTogMTAsXG4gICAgICAgICAgICB3b3JrZXJTY3JpcHQ6IFwiL2dpZi53b3JrZXIuanNcIixcbiAgICAgICAgICAgIHdpZHRoOiBncmFwaHMuJHtzfS5jYW52YXMud2lkdGggLyAyLFxuICAgICAgICAgICAgaGVpZ2h0OiBncmFwaHMuJHtzfS5jYW52YXMuaGVpZ2h0IC8gMlxuICAgICAgICB9KTtgO1xuICAgICAgICBnaWZSZWNvcmRpbmdTdG9wICs9IGB3aW5kb3cuJHtzfWdpZi5vbignZmluaXNoZWQnLCBmdW5jdGlvbihibG9iKSB7XG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5hc3NpZ24oVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gICAgICAgICAgICBkb3dubG9hZChibG9iLCBcImFuaW0uZ2lmXCIsIFwiaW1hZ2UvZ2lmXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuJHtzfWdpZi5yZW5kZXIoKTtgXG5cbiAgICAgICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICAgICAgZXhlY3V0YWJsZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgZXhlY3V0YWJsZSArPSBnaWZSZWNvcmRpbmdTdGFydCArIFwifTtcIjtcbiAgICBleGVjdXRhYmxlICs9IGdpZlJlY29yZGluZ1N0b3AgKyBcIn07XCI7XG5cbiAgICAvLyBMb29wIHRocm91Z2ggZmZ0IHNjb3Blc1xuICAgIGZvcihsZXQgZiBpbiBmZnROb2Rlcykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2NvcGUgPSBmZnROb2Rlc1tmXTtcbiAgICAgICAgY29uc3QgeyBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQgfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7IG5vZGVJZDogZiwgc2V0dGluZ0lkOiBcInNpZ25hbFwiIH0pO1xuXG4gICAgICAgIGV4ZWN1dGFibGUgKz0gYFxuICAgICAgICBpZihncmFwaHMuJHtmfSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7ZGF0YS5wdXNoKCR7b3RoZXJOb2RlSWR9JHtvdGhlclNldHRpbmdJZH0odFtpXSkpO31cblxuICAgICAgICAgICAgbGV0IGYgPSBuZXcgRkZUKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBjb21wbGV4T3V0cHV0ID0gZi5jcmVhdGVDb21wbGV4QXJyYXkoKTtcbiAgICAgICAgICAgIGYucmVhbFRyYW5zZm9ybShjb21wbGV4T3V0cHV0LCBkYXRhKTtcbiAgICAgICAgICAgIGxldCByZWFsT3V0cHV0ID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIHJlYWxPdXRwdXQuZmlsbCgwKTtcbiAgICAgICAgICAgIGYuZnJvbUNvbXBsZXhBcnJheShjb21wbGV4T3V0cHV0LCByZWFsT3V0cHV0KTtcblxuICAgICAgICAgICAgLy8gcmVhbE91dHB1dCA9IHJlYWxPdXRwdXQuZmlsdGVyKCh2YWwsIGkpID0+IGklMiA9PSAwIHx8IGkgPT0gMCk7XG5cbiAgICAgICAgICAgIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0LnNwbGljZSgwLCAke3BhcnNlSW50KGN1cnJlbnRTY29wZS5zZXR0aW5nc1syXS52YWx1ZSl9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVhbE91dHB1dCA9IHJlYWxPdXRwdXQubWFwKHZhbCA9PiB2YWwgKiAyIC8gZGF0YS5sZW5ndGgpO1xuXG4gICAgICAgICAgICBncmFwaHMuJHtmfS5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSByZWFsT3V0cHV0O1xuICAgICAgICAgICAgZ3JhcGhzLiR7Zn0udXBkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY2FudmFzTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHtmfVwiKTtcblxuICAgICAgICAgICAgdmFyIHZpZXdTaXplID0ge1xuICAgICAgICAgICAgICAgIHg6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICB5OiBjYW52YXNOb2RlLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB3ID0gdmlld1NpemUueDtcbiAgICAgICAgICAgIHZhciBoID0gdmlld1NpemUueTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FudmFzTm9kZS53aWR0aCA9IHc7XG4gICAgICAgICAgICBjYW52YXNOb2RlLmhlaWdodCA9IGg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXNOb2RlLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0W2ldKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBmID0gbmV3IEZGVChkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgY29tcGxleE91dHB1dCA9IGYuY3JlYXRlQ29tcGxleEFycmF5KCk7XG4gICAgICAgICAgICBmLnJlYWxUcmFuc2Zvcm0oY29tcGxleE91dHB1dCwgZGF0YSk7XG4gICAgICAgICAgICBsZXQgcmVhbE91dHB1dCA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICByZWFsT3V0cHV0LmZpbGwoMCk7XG4gICAgICAgICAgICBmLmZyb21Db21wbGV4QXJyYXkoY29tcGxleE91dHB1dCwgcmVhbE91dHB1dCk7XG5cbiAgICAgICAgICAgIC8vIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0LmZpbHRlcigodmFsLCBpKSA9PiBpJTIgPT0gMCB8fCBpID09IDApO1xuXG4gICAgICAgICAgICByZWFsT3V0cHV0ID0gcmVhbE91dHB1dC5zcGxpY2UoMCwgJHtwYXJzZUludChjdXJyZW50U2NvcGUuc2V0dGluZ3NbMl0udmFsdWUpfSk7XG5cbiAgICAgICAgICAgIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0Lm1hcCh2YWwgPT4gdmFsICogMiAvIGRhdGEubGVuZ3RoKTtcblxuICAgICAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHJlYWxPdXRwdXQubWFwKCh2YWwsIGkpID0+IHBhcnNlRmxvYXQoaS8yKS50b0ZpeGVkKDEpKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaWduYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI0NSwgMjMsIDU0LCAwLjQpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigwLCAwLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVhbE91dHB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJHtjdXJyZW50U2NvcGUuaW5wdXRzLmxlbmd0aCA+IDF9XG4gICAgICAgICAgICAgICAgICAgIH0sIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJyR7Y3VycmVudFNjb3BlLnRpdGxlfScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ3JhcGhzLiR7Zn0gPSBteUNoYXJ0O1xuICAgICAgICB9YDtcbiAgICB9XG5cbiAgICBleGVjdXRhYmxlICs9IFwifTtcXG5cIlxuICAgIGV4ZWN1dGFibGUgKz0gXCJ1cGRhdGUoKTtcIlxuXG4gICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICBleGVjdXRhYmxlID0gXCJcIjtcblxuICAgIHJldHVybiBleGVBcnJheTtcbn0iLCJpbXBvcnQgeyB0b2tlbml6ZUdlbmVyYXRvciwgR2VuZXJhdG9yU2VnbWVudCB9IGZyb20gJy4vZ2VuZXJhdG9yVG9rZW5pemVyJztcbmltcG9ydCB7IHRva2VuVG9KcyB9IGZyb20gJy4vdG9rZW5Ub0pzJztcblxuLy8gR2V0IGFsbCBub2RlcyB0aGF0IGFyZSBub3Qgc2NvcGVzLCBhbmQgc2F2ZSBzY29wZXMgaW50byB0aGVpciBvd24gY29sbGVjdGlvblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlTm9kZXMgKGFsbE5vZGVzOiBOb2RlQ29sbGVjdGlvbik6IHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IE5vZGVDb2xsZWN0aW9uLCBcbiAgICAgICAgYWxsU2NvcGVzOiBOb2RlQ29sbGVjdGlvbixcbiAgICAgICAgdWlOb2RlczogTm9kZUNvbGxlY3Rpb24sXG4gICAgICAgIGZmdE5vZGVzOiBOb2RlQ29sbGVjdGlvbixcbiAgICAgICAgdGltZTogTm9kZUNvbGxlY3Rpb25cbiAgICB9IHtcbiAgICBsZXQgdW5jYWxjdWxhdGVkOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCBzY29wZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG4gICAgbGV0IHVpTm9kZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG4gICAgbGV0IGZmdE5vZGVzOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCB0aW1lTm9kZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG5cbiAgICBmb3IobGV0IGkgaW4gYWxsTm9kZXMpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBVSSBub2RlXG4gICAgICAgIGNvbnN0IGlzVGhpcmRMZXR0ZXJVcHBlckNhc2UgPSBTdHJpbmcoaSkuc3Vic3RyKDIsIDEpLnRvVXBwZXJDYXNlKCkgPT09IFN0cmluZyhpKS5zdWJzdHIoMiwgMSk7XG4gICAgICAgIGNvbnN0IGlzVUkgPSBTdHJpbmcoaSkuc3Vic3RyKDAsIDIpID09PSBcInVpXCI7XG4gICAgICAgIGNvbnN0IGlzQWN0dWFsVUkgPSBpc1VJICYmIGlzVGhpcmRMZXR0ZXJVcHBlckNhc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBzY29wZVxuICAgICAgICBjb25zdCBpc1Njb3BlID0gU3RyaW5nKGkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGlzIGFuIGZmdCBzY29wZVxuICAgICAgICBjb25zdCBpc0ZGVCA9IFN0cmluZyhpKS5zdWJzdHIoMCwgMykgPT09IFwiZmZ0XCI7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSB0aW1lIG5vZGVcbiAgICAgICAgY29uc3QgaXNUaW1lID0gU3RyaW5nKGkpLnN1YnN0cigwLCA0KSA9PT0gXCJ0aW1lXCI7XG5cbiAgICAgICAgLy8gRG8gc2VwYXJhdGlvblxuICAgICAgICBpZihpc1Njb3BlKSB7XG4gICAgICAgICAgICBzY29wZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIGlmKGlzQWN0dWFsVUkpIHtcbiAgICAgICAgICAgIHVpTm9kZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIGlmKGlzRkZUKSB7XG4gICAgICAgICAgICBmZnROb2Rlc1tpXSA9IGFsbE5vZGVzW2ldO1xuICAgICAgICB9IGVsc2UgaWYoaXNUaW1lKSB7XG4gICAgICAgICAgICB0aW1lTm9kZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuY2FsY3VsYXRlZFtpXSA9IGFsbE5vZGVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIHJlc3VsdHNcbiAgICByZXR1cm4ge1xuICAgICAgICB1bmNhbGN1bGF0ZWROb2RlczogdW5jYWxjdWxhdGVkLFxuICAgICAgICBhbGxTY29wZXM6IHNjb3BlcyxcbiAgICAgICAgdWlOb2RlczogdWlOb2RlcyxcbiAgICAgICAgZmZ0Tm9kZXM6IGZmdE5vZGVzLFxuICAgICAgICB0aW1lOiB0aW1lTm9kZXNcbiAgICB9O1xufVxuXG4vLyBHZW5lcmF0ZSBjb25uZWN0aW9uIGRpY3Rpb25hcnlcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5IChhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10pOiB7W2Nvbm5lY3RvclN0YXJ0OiBzdHJpbmddOiBzdHJpbmd9IHtcbiAgICBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnk6IHtbY29ubmVjdG9yU3RhcnQ6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb25uZWN0b3JTdGFydCA9IGFsbENvbm5lY3Rpb25zW2ldLmNvbm5lY3RvclN0YXJ0O1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmQgPSBhbGxDb25uZWN0aW9uc1tpXS5jb25uZWN0b3JFbmQ7XG5cbiAgICAgICAgY29uc3QgY29ubmVjdG9yU3RhcnRDb21iaW5lZCA9IGNvbm5lY3RvclN0YXJ0Lm5vZGVJZCArIFwiOlwiICsgY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkO1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmRDb21iaW5lZCA9IGNvbm5lY3RvckVuZC5ub2RlSWQgKyBcIjpcIiArIGNvbm5lY3RvckVuZC5zZXR0aW5nSWQ7XG5cbiAgICAgICAgY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdG9yU3RhcnRDb21iaW5lZF0gPSBjb25uZWN0b3JFbmRDb21iaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29ubmVjdGlvbkRpY3Rpb25hcnk7XG59XG5cbi8vIENhbGN1bGF0ZSBvYmplY3Qgc2l6ZVxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFNpemUgKG9iajogb2JqZWN0KTogbnVtYmVyIHtcbiAgICBsZXQgYyA9IDA7XG4gICAgZm9yKGxldCBpIGluIG9iaikgYysrO1xuICAgIHJldHVybiBjKys7XG59XG5cbi8vIENoZWNrIGlmIG5vZGUgd2FzIGNhbGN1bGF0ZWQgYWxyZWFkeVxuZXhwb3J0IGZ1bmN0aW9uIHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzOiBzdHJpbmdbXSwgbm9kZUtleTogc3RyaW5nLCBvdXRwdXRLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYWxjdWxhdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU3BsaXQgc3RyaW5nIGZyb20gY2FsY3VsYXRlZCBub2RlcyBhcnJheSBhbmQgZ2V0IG5vZGUgYW5kIG91dHB1dCBrZXlzXG4gICAgICAgIGNvbnN0IHNwbGl0dGVkID0gY2FsY3VsYXRlZE5vZGVzW2ldLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE5vZGUgPSBzcGxpdHRlZFswXTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE91dHB1dCA9IHNwbGl0dGVkWzFdO1xuXG4gICAgICAgIGlmKGNhbGN1bGF0ZWROb2RlID09PSBub2RlS2V5ICYmIGNhbGN1bGF0ZWRPdXRwdXQgPT09IG91dHB1dEtleSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBHZXQgbm9kZUlkIGFuZCBzZXR0aW5nSWQgb2YgdGhlIG90aGVyIHNpZGUgb2YgdGhlIGNvbm5lY3Rpb246XG5leHBvcnQgZnVuY3Rpb24gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoXG4gICAgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBcbiAgICBjb25uZWN0b3JJbnB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9LFxuICAgIGNvbm5lY3Rvck91dHB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9KToge290aGVyTm9kZUlkOiBzdHJpbmcsIG90aGVyU2V0dGluZ0lkOiBzdHJpbmd9IHtcblxuICAgIGlmKGNvbm5lY3RvcklucHV0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgY29ubmVjdG9yIHN0YXJ0cy4uLlwiKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RvciA9IGFsbENvbm5lY3Rpb25zW2ldO1xuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIHN0YXJ0XG4gICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQubm9kZUlkID09PSBjb25uZWN0b3JJbnB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkID09PSBjb25uZWN0b3JJbnB1dC5zZXR0aW5nSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZUlkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyU2V0dGluZ0lkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChjb25uZWN0b3JPdXRwdXQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTY2FubmluZyBjb25uZWN0b3IgZW5kcy4uLiBcIiwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29ubmVjdG9yID0gYWxsQ29ubmVjdGlvbnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ29tcGFyaW5nIGZvbGxvd2luZyBjb25uZWN0b3JzOiBcIiwgY29ubmVjdG9yLmNvbm5lY3RvckVuZCwgY29ubmVjdG9yT3V0cHV0KVxuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIGVuZFxuICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvckVuZC5ub2RlSWQgPT09IGNvbm5lY3Rvck91dHB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZCA9PT0gY29ubmVjdG9yT3V0cHV0LnNldHRpbmdJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclNldHRpbmdJZDogY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0LnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3RoZXJOb2RlSWQ6IG51bGwsXG4gICAgICAgIG90aGVyU2V0dGluZ0lkOiBudWxsXG4gICAgfVxufVxuXG5cbi8vIENoZWNrIGlmIGFsbCBjb25uZWN0ZWQgaW5wdXRzIGluIHRoZSBub2RlIGFyZSBjb25uZWN0ZWQgdG8gdGhlIG91dHB1dHMgdGhhdCB3ZXJlIGFscmVhZHkgY2FsY3VsYXRlZCBvciBhcmUgbm90IGNvbm5lY3RlZFxuZXhwb3J0IGZ1bmN0aW9uIGFsbElucHV0c0NhbGN1bGF0ZWQobm9kZUlkOiBzdHJpbmcsIGlucHV0czogTm9kZUlucHV0U2hhcGVbXSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgbGV0IGRhdGE6IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudERhdGEgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7bm9kZUlkOiBub2RlSWQsIHNldHRpbmdJZDogaW5wdXRzW2ldLnRpdGxlfSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGNvbm5lY3RlZFxuICAgICAgICBpZihvdGhlck5vZGVJZCAmJiBvdGhlclNldHRpbmdJZCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2FzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIGlmKHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzLCBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIG5vdCBjb25uZWN0ZWRcbiAgICAgICAgICAgIGN1cnJlbnREYXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaChjdXJyZW50RGF0YSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBkIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGFbZF0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIHNwZWNpZmljIG91dHB1dCBvZiB0aGUgbm9kZVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU91dHB1dChcbiAgICBub2RlSWQ6IHN0cmluZywgXG4gICAgb3V0cHV0S2V5OiBzdHJpbmcsIFxuICAgIGN1cnJlbnROb2RlOiBTaWduYWxOb2RlLFxuICAgIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHsgZXhlOiBzdHJpbmcsIHdhc1N1Y2Nlc3NmdWw6IGJvb2xlYW4gfSB7XG4gICAgXG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgY29uc3QgZ2VuZXJhdG9ySWQgPSBpc0dlbmVyYXRvcihjdXJyZW50Tm9kZSwgb3V0cHV0S2V5KTtcblxuICAgIC8vIENoZWNrIGlmIG91dHB1dCBpcyBhIGdlbmVyYXRvclxuICAgIGlmKGdlbmVyYXRvcklkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBjb25zdCBvdXRwdXRHZW5lcmF0b3IgPSBjdXJyZW50Tm9kZS5nZW5lcmF0b3JzW2dlbmVyYXRvcklkXTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSB0b2tlbnNcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdG9rZW5pemVHZW5lcmF0b3Iob3V0cHV0R2VuZXJhdG9yLnZhbHVlLCBub2RlSWQpO1xuXG4gICAgICAgIC8vIFNhdmUgdmFyaWFibGVzIGZpcnN0XG4gICAgICAgIGUgKz0gc2F2ZVZhcmlhYmxlcyhub2RlSWQsIGN1cnJlbnROb2RlLCB0b2tlbnMsIGFsbENvbm5lY3Rpb25zKTtcblxuICAgICAgICAvLyBTYXZlIG91dHB1dFxuICAgICAgICBlICs9IHRva2VuVG9Kcyhub2RlSWQsIG91dHB1dEdlbmVyYXRvci50aXRsZSwgdG9rZW5zKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRJZCA9IGlzSW5wdXQoY3VycmVudE5vZGUsIG91dHB1dEtleSk7XG5cbiAgICBpZihpbnB1dElkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IHNhdmVJbnB1dFZhcmlhYmxlKGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUlkLCBvdXRwdXRLZXksIGlucHV0SWQpO1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZUlkfSR7Y3VycmVudE5vZGUuaW5wdXRzW2lucHV0SWRdLnRpdGxlfX07XFxuYDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dGluZ0lkID0gaXNTZXR0aW5nKGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuXG4gICAgaWYoc2V0dGluZ0lkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7Y3VycmVudE5vZGUuc2V0dGluZ3Nbc2V0dGluZ0lkXS52YWx1ZX19O1xcbmA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4ZTogZSxcbiAgICAgICAgICAgIHdhc1N1Y2Nlc3NmdWw6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGV4ZTogXCJcIixcbiAgICAgICAgd2FzU3VjY2Vzc2Z1bDogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVWYXJpYWJsZXMobm9kZUtleTogc3RyaW5nLCBub2RlOiBTaWduYWxOb2RlLCBjb2RlOiBHZW5lcmF0b3JTZWdtZW50W10sIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBzID0gMDsgcyA8IGNvZGUubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgaWYoY29kZVtzXS50eXBlID09PSBcInZhclwiKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJOYW1lOiBzdHJpbmcgPSBTdHJpbmcoY29kZVtzXS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJOYW1lLnN1YnN0cihub2RlS2V5Lmxlbmd0aCwgdmFyTmFtZS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTUEVDSUFMIENBU0UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZih2YXJOYW1lID09PSBcIlBJXCIgfHwgdmFyTmFtZSA9PT0gXCJ0aW1lXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBJTlBVVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgaW5wdXQgaW5kZXhcbiAgICAgICAgICAgIGxldCBpbnB1dEtleTogbnVtYmVyID0gaXNJbnB1dChub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiB2YXJpYWJsZSBpcyB0aGUgaW5wdXQgKGlmIG5vdCBpbnB1dCBpdCB3aWxsIGJlIEluZmluaXR5KVxuICAgICAgICAgICAgaWYoaW5wdXRLZXkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZVxuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gc2F2ZUlucHV0VmFyaWFibGUobm9kZSwgYWxsQ29ubmVjdGlvbnMsIG5vZGVLZXksIHZhcmlhYmxlTmFtZSwgaW5wdXRLZXkpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEZvdW5kIHZhcmlhYmxlIGluIGlucHV0cyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBbmQgY29udGludWUgdG8gdGhlIG5leHQgc3RlcCBpbiB0aGUgdG9rZW5pc2VkIGdlbmVyYXRvciBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIEdFTkVSQVRPUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgZ2VuZXJhdG9yIGluZGV4XG4gICAgICAgICAgICBsZXQgZ2VuZXJhdG9yS2V5OiBudW1iZXIgPSBpc0dlbmVyYXRvcihub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiBnZW5lcmF0b3IgaW5kZXggaXMgbm90IGFuIEluZmluaXR5LCB0aGUgc2V0dGluZyBpcyB0aGUgZ2VuZXJhdG9yLCBhbmQgc2hvdWxkIGJlIHByb2Nlc3NlZCBhcyBvbmVcbiAgICAgICAgICAgIGlmKGdlbmVyYXRvcktleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSBub2RlLmdlbmVyYXRvcnNbZ2VuZXJhdG9yS2V5XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHRva2VuaXplR2VuZXJhdG9yKGdlbmVyYXRvci52YWx1ZSwgbm9kZUtleSk7XG5cbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgdG9rZW5zLCBhbGxDb25uZWN0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBnZW5lcmF0b3IgdGl0bGVcbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHRva2VuVG9Kcyhub2RlS2V5LCBnZW5lcmF0b3IudGl0bGUsIHRva2Vucyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gZ2VuZXJhdG9ycyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0byB0aGUgbmV4dCB0b2tlblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTRVRUSU5HIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBzZXR0aW5nIGluZGV4XG4gICAgICAgICAgICBsZXQgc2V0dGluZ0tleTogbnVtYmVyID0gaXNTZXR0aW5nKG5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHNldHRpbmcgaW5kZXggaXMgbm90IGluZmluaXR5IC0gaXQncyBhIG1hdGNoIVxuICAgICAgICAgICAgaWYoc2V0dGluZ0tleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gc2V0dGluZ3MgJHt2YXJpYWJsZU5hbWV9IC0gJHtub2RlS2V5fWApO1xuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gYHZhciAke25vZGVLZXl9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZS5zZXR0aW5nc1tzZXR0aW5nS2V5XS52YWx1ZX0gfTtcXG5gO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBOT1QgQU5ZIE9GIFRIUkVFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIElmIG5vdCBvbmUgb2YgcHJldmlvdXMgdGhyZWUsIGFsZXJ0IHVzZXIuXG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IGBhbGVydChcIkNvdWxkbid0IGZpbmQgZ2VuZXJhdG9yIHZhcmlhYmxlIGluIHRoZSBpbnB1dHMsIGdlbmVyYXRvcnMgb3Igc2V0dGluZ3MhICR7bm9kZUtleX0gLSAke3Zhck5hbWV9XCIpO1xcbmA7XG4gICAgICAgIH0gZWxzZSBpZihjb2RlW3NdLnR5cGUgPT09IFwibWF0aFwiIHx8IGNvZGVbc10udHlwZSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgY29kZVtzXS5jb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gc2F2ZUlucHV0VmFyaWFibGUobm9kZTogU2lnbmFsTm9kZSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBub2RlS2V5OiBzdHJpbmcsIHNldHRpbmdLZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGU6IHN0cmluZztcbiAgICBjb25zdCBjb25uZWN0b3JFbmQgPSB7XG4gICAgICAgIG5vZGVJZDogbm9kZUtleSxcbiAgICAgICAgc2V0dGluZ0lkOiBzZXR0aW5nS2V5XG4gICAgfVxuICAgIFxuICAgIGxldCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCBjb25uZWN0b3JFbmQpO1xuXG4gICAgLy8gY29uc29sZS5sb2coYFRyYWNpbmcgYmFjayB0aGUgaW5wdXQ6ICR7bm9kZUtleX06JHtzZXR0aW5nS2V5fSAtPiAke290aGVyTm9kZUlkfToke290aGVyU2V0dGluZ0lkfWApO1xuICAgIFxuICAgIC8vIElmIG5vZGUgaXMgY29ubmVjdGVkXG4gICAgaWYob3RoZXJOb2RlSWQgJiYgb3RoZXJTZXR0aW5nSWQpIHtcbiAgICAgICAgLy8gU2F2ZSBcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0aW1lKX07XFxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTYXZlIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtub2RlLmlucHV0c1tpbmRleF0uZGVmYXVsdH19O1xcbmBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gaXNJbnB1dCAobm9kZTogU2lnbmFsTm9kZSwgc2V0dGluZ0tleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBDaGVjayBpZiB2YXJpYWJsZSBpcyBpbiBpbnB1dHNcbiAgICBpZihub2RlLmlucHV0cykge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZS5pbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIElmIHZhcmlhYmxlIGlzIHRoZSBpbnB1dCwgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIGlmKG5vZGUuaW5wdXRzW2ldLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW5maW5pdHk7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5nZW5lcmF0b3JzKSB7XG4gICAgICAgIGlmKG5vZGUuZ2VuZXJhdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IobGV0IGcgPSAwOyBnIDwgbm9kZS5nZW5lcmF0b3JzLmxlbmd0aDsgZysrKSB7XG4gICAgICAgICAgICAgICAgaWYobm9kZS5nZW5lcmF0b3JzW2ddLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cblxuZnVuY3Rpb24gaXNTZXR0aW5nKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5zZXR0aW5ncykge1xuICAgICAgICBmb3IobGV0IHMgPSAwOyBzIDwgbm9kZS5zZXR0aW5ncy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gc2V0dGluZ0tleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEluZmluaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hJbnB1dHMoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKToge3VuY2FsY3VsYXRlZE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgdG91Y2hOb2RlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgbmV3Q29sbGVjdGlvbjogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgbmV3VG91Y2hDb2xsZWN0aW9uOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuXG4gICAgZm9yKGxldCBuIGluIGFsbE5vZGVzKSB7XG4gICAgICAgIGlmKG4uc3Vic3RyKDAsIDEwKSA9PT0gXCJ0b3VjaElucHV0XCIpIHtcbiAgICAgICAgICAgIG5ld1RvdWNoQ29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IG5ld0NvbGxlY3Rpb24sXG4gICAgICAgIHRvdWNoTm9kZXM6IG5ld1RvdWNoQ29sbGVjdGlvblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lKHN0YXJ0OiBudW1iZXIsIHN0b3A6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgbGV0IGUgPSBcImxldCB0ID0gXCI7XG5cbiAgICBlKz0gYChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgciA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAke3N0YXJ0fTsgaSA8ICR7c3RvcH07IGkrPSR7c3RlcH0pIHtcbiAgICAgICAgICAgIHIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9KSgpO2BcblxuICAgIHJldHVybiBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzKG5vZGVzOiBOb2RlQ29sbGVjdGlvbik6IHN0cmluZyB7XG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBpIGluIG5vZGVzKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblxuICAgICAgICBsZXQgc2Vuc2l0aXZpdHk6IE5vZGVTZXR0aW5nc1NoYXBlO1xuICAgICAgICBsZXQgYXR0YWNoZWRTY29wZTogTm9kZVNldHRpbmdzU2hhcGU7XG5cbiAgICAgICAgLy8gU2VwYXJhdGUgc2V0dGluZ3NcbiAgICAgICAgZm9yKGxldCBzIGluIG5vZGUuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmKG5vZGUuc2V0dGluZ3Nbc10udGl0bGUgPT09IFwiU2Vuc2l0aXZpdHlcIikge1xuICAgICAgICAgICAgICAgIHNlbnNpdGl2aXR5ID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIlNjb3BlXCIpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hlZFNjb3BlID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRvdWNoIG5vZGUgaXMgbm90IGNvcnJlY3RseSBmb3JtYXR0ZWQuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBvZmZzZXRTY3JpcHQgPSBgaWYoIWRpZEF0dGFjaCR7aX0pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHthdHRhY2hlZFNjb3BlLnZhbHVlfVwiKS5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFhEYXRhICs9IGUubW92ZW1lbnRYKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuICAgICAgICAgICAgICAgICAgICAke2l9T2Zmc2V0WURhdGEgKz0gZS5tb3ZlbWVudFkqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke2F0dGFjaGVkU2NvcGUudmFsdWV9XCIpLm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudFggPSB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25YIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50WSA9IHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgLSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFhEYXRhICs9IG1vdmVtZW50WCoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFlEYXRhICs9IG1vdmVtZW50WSoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpZEF0dGFjaCR7aX1PZmZzZXRYID0gdHJ1ZTtcbiAgICAgICAgICAgIGRpZEF0dGFjaCR7aX1PZmZzZXRZID0gdHJ1ZTtcbiAgICAgICAgfVxcbmA7XG5cbiAgICAgICAgZm9yKGxldCBvIGluIG5vZGUub3V0cHV0cykge1xuICAgICAgICAgICAgZSArPSBgdmFyICR7aX0ke25vZGUub3V0cHV0c1tvXS50aXRsZX1EYXRhID0gMTtcXG5gO1xuICAgICAgICAgICAgZSArPSBgdmFyIGRpZEF0dGFjaCR7aX0gPSBmYWxzZTtcXG5gO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUgKz0gYHZhciAke2l9JHtub2RlLm91dHB1dHNbb10udGl0bGV9ID0gZnVuY3Rpb24odGltZSkgeyByZXR1cm4gJHtpfSR7bm9kZS5vdXRwdXRzW29dLnRpdGxlfURhdGEgfTtcXG5gXG4gICAgICAgIH1cblxuICAgICAgICBlICs9IG9mZnNldFNjcmlwdDtcbiAgICB9XG5cbiAgICByZXR1cm4gZTtcbn0iLCIvLyBBcyBhIHJlbWluZGVyOlxuLy8gT25lIGl0ZW0gaW4gYW4gYXJyYXkgb2YgdG9rZW5zIGNhbiBvbmx5IGJlIGFuIG9iamVjdCBhbmQgb25seSBoYXZlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuLy8gKiB0eXBlICAgICAgICAgICAtIGZvciBldmVyeSB0b2tlblxuLy8gKiB2YWx1ZSAgICAgICAgICAtIGZvciBldmVyeSB0b2tlblxuLy8gKiBjb2RlICAtIGZvciBzY29wZXMgKG1hdGgvcmVndWxhcilcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuVG9KcyAobm9kZUlkLCB2YXJpYWJsZU5hbWUsIGpzb25Ub2tlbnMpIHtcbiAgICBsZXQgZXhlY3V0YWJsZVN0cmluZyA9IGB2YXIgJHtub2RlSWR9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24odGltZSkgeyByZXR1cm4gYDtcbiAgICBcbiAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUoWy4uLmpzb25Ub2tlbnNdKVxuXG4gICAgcmV0dXJuIGV4ZWN1dGFibGVTdHJpbmcgKyBcIn07XFxuXCI7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNvZGUoanNvbikge1xuICAgIGxldCBleGVjdXRhYmxlU3RyaW5nID0gXCJcIjtcblxuICAgIGlmKGpzb24gPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBWYXJpYWJsZXMgZm9yIGNvbnZlbmllbmNlXG4gICAgICAgIGNvbnN0IHRva2VuID0ganNvbltpXTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRva2VuLnR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdG9rZW4udmFsdWU7XG5cbiAgICAgICAgLy8gQWN0dWFsIGxvZ2ljXG4gICAgICAgIGlmKHR5cGUgIT0gXCJzY29wZVwiICYmIHR5cGUgIT0gXCJtYXRoXCIpIHtcbiAgICAgICAgICAgIC8vIE9uZSBvZiB0aGUgYmFzaWMgdHlwZXNcblxuICAgICAgICAgICAgaWYodmFsdWUgPT09ICdQSScpIHtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC5QSVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInZhclwiICYmIHZhbHVlICE9PSBcInRpbWVcIikge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gYCR7dmFsdWV9KHRpbWUpYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIm1hdGhcIikge1xuICAgICAgICAgICAgLy8gTWF0aCBmdW5jdGlvblxuXG4gICAgICAgICAgICBpZih2YWx1ZSA9PT0gXCJzaW5cIikge1xuICAgICAgICAgICAgICAgIC8vIElmIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZ1bmN0aW9ucywgcmVjdXJzZXZseSBnZW5lcmF0ZSBzdHJpbmcgZnJvbSB0aGUgY29kZSBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC5zaW4oXCI7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIpXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT09IFwiY29zXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmdW5jdGlvbnMsIHJlY3Vyc2V2bHkgZ2VuZXJhdGUgc3RyaW5nIGZyb20gdGhlIGNvZGUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguY29zKFwiO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKTtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09PSBcInRhblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBzdXBwb3J0ZWQgZnVuY3Rpb25zLCByZWN1cnNldmx5IGdlbmVyYXRlIHN0cmluZyBmcm9tIHRoZSBjb2RlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLnRhbihcIjtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PT0gXCJzcXdcIikge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLnNxdyhcIjtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm90IHN1cHBvcnRlZCBmdW5jdGlvbiwgdGhyb3cgZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5zdXBwb3J0ZWQgbWF0aCBmdW5jdGlvbiAhISFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZWd1bGFyIHNjb3BlXG5cbiAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIoXCIgKyBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXhlY3V0YWJsZVN0cmluZztcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSAoc2V0dGluZ3NDb3VudCwgc2NvcGVDb3VudCkgPT4ge1xuICAgIC8vIGNvbnN0IGlzT25seVNjb3BlcyA9IChzZXR0aW5nc0NvdW50ID09PSAwICYmIHNjb3BlQ291bnQgPiAwKTtcbiAgICAvLyBjb25zdCBpc09ubHlTZXR0aW5ncyA9IChzZXR0aW5nc0NvdW50ID4gMCAmJiBzY29wZUNvdW50ID09PSAwKTtcbiAgICBjb25zdCBpc1NldHRpbmdzQW5kU2NvcGVzID0gKHNldHRpbmdzQ291bnQgPiAwICYmIHNjb3BlQ291bnQgPiAwKTtcbiAgICBcbiAgICBjb25zdCBpc0RpdmlkYWJsZUJ5VHdvID0gc2NvcGVDb3VudCUyID09IDA7XG5cbiAgICByZXR1cm4gYCNzaWduYWxzLWVtYmVkZGluZy1tYWluIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCBhdXRvO1xuICAgIH1cblxuICAgICNzaWduYWxzLWVtYmVkZGluZy1jb250cm9scyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIH1cblxuICAgIC5zaWduYWxzLWVtYmVkZGluZy1jb250cm9sLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtZW1iZWRkaW5nLWNvbnRyb2wtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcbiAgICB9XG4gICAgXG4gICAgI3NpZ25hbHMtZW1iZWRkaW5nLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgJHtpc1NldHRpbmdzQW5kU2NvcGVzID9cbiAgICAgICAgICAgIGBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBjYWxjKDEwMCUgLSAzMDBweCk7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7YCBcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLnNpZ25hbHMtY2FudmFzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5jYW52YXMtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI3NpZ25hbHMtdmlld3Mge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIFxuICAgICAgICAkeyFpc0RpdmlkYWJsZUJ5VHdvIHx8IHNjb3BlQ291bnQgPCAzID8gYGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KCR7c2NvcGVDb3VudH0sICR7cGFyc2VGbG9hdCgxMDAvc2NvcGVDb3VudCkudG9GaXhlZCgyKX0lKTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO2BcbiAgICAgICAgOiBgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoJHtzY29wZUNvdW50LzJ9LCAxZnIpO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7YH1cbiAgICAgICAgJHtpc1NldHRpbmdzQW5kU2NvcGVzID8gYGdyaWQtY29sdW1uOiAyIC8gMztgIDogJyd9XG4gICAgfVxuXG4gICAgJHtpc1NldHRpbmdzQW5kU2NvcGVzID8gYCNzaWduYWxzLXNldHRpbmdzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cblxuICAgICNzaWduYWxzLXNldHRpbmdzLWxpc3Qge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA0ZnI7XG4gICAgICAgIGdyaWQtZ2FwOiA1cHg7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtc2V0dGluZ3Mtc2xpZGVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNGZyIDFmcjtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1zbGlkZXIgZGl2IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5zaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbSBoNiB7XG4gICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0gaW5wdXQge1xuXG4gICAgfVxuICAgIFxuICAgIC5zaWduYWxzLXNldHRpbmdzLWxpc3QtbGFiZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9YDonJ31cbmB9O1xuXG5leHBvcnQgZnVuY3Rpb24ganN4RG9tIChub2Rlcykge1xuICAgIGxldCBjYW52YXNOb2RlcyA9IFtdO1xuXG4gICAgLy8gR2V0IGFsbCBraW5kcyBvZiBvdXRwdXQgbm9kZXNcbiAgICBmb3IobGV0IGtleSBpbiBub2Rlcykge1xuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2Rlc1trZXldO1xuXG4gICAgICAgIGlmKFN0cmluZyhrZXkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiIHx8IFN0cmluZyhrZXkpLnN1YnN0cigwLCAzKSA9PT0gXCJmZnRcIikge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuaWQgPSBrZXk7XG4gICAgICAgICAgICBjYW52YXNOb2Rlcy5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzZXR0aW5nc05vZGVzID0gW107XG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcblxuICAgIFxuICAgIGZvcihsZXQga2V5IGluIG5vZGVzKSB7XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGVzW2tleV07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc1RoaXJkTGV0dGVyVXBwZXJDYXNlID0gU3RyaW5nKGtleSkuc3Vic3RyKDIsIDEpLnRvVXBwZXJDYXNlKCkgPT09IFN0cmluZyhrZXkpLnN1YnN0cigyLCAxKTtcbiAgICAgICAgY29uc3QgaXNVSSA9IFN0cmluZyhrZXkpLnN1YnN0cigwLCAyKSA9PT0gXCJ1aVwiO1xuICAgICAgICBjb25zdCBpc0FjdHVhbFVJID0gaXNVSSAmJiBpc1RoaXJkTGV0dGVyVXBwZXJDYXNlO1xuICAgICAgICBcbiAgICAgICAgaWYoaXNBY3R1YWxVSSkge1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2F2ZWRBbHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IGN1cnJlbnROb2RlLnNldHRpbmdzWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICBmb3IobGV0IGMgaW4gY2F0ZWdvcmllcykge1xuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3JpZXNbY10gPT0gY3VycmVudENhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5U2F2ZWRBbHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighY2F0ZWdvcnlTYXZlZEFscmVhZHkpIHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY3VycmVudENhdGVnb3J5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudE5vZGUuaWQgPSBrZXk7XG4gICAgICAgICAgICBzZXR0aW5nc05vZGVzLnB1c2goY3VycmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNldHRpbmdzTm9kZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIGNvbnN0IGNhdDEgPSBhLnNldHRpbmdzWzBdLnZhbHVlO1xuICAgICAgICBjb25zdCBjYXQyID0gYi5zZXR0aW5nc1swXS52YWx1ZTtcblxuICAgICAgICBpZihjYXQxID09PSBjYXQyKSB7XG4gICAgICAgICAgICBjb25zdCBvcmRlcjEgPSBwYXJzZUludChhLnNldHRpbmdzWzJdLnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyMiA9IHBhcnNlSW50KGIuc2V0dGluZ3NbMl0udmFsdWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gb3JkZXIxIC0gb3JkZXIyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0QXJyID0gW2NhdDEsIGNhdDJdO1xuICAgICAgICAgICAgY2F0QXJyLnNvcnQoKTtcblxuICAgICAgICAgICAgaWYoY2F0QXJyWzBdID09PSBjYXQxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU29ydCBieSBjYXRlZ29yeTpcblxuICAgIGNhdGVnb3JpZXMuc29ydCgpO1xuXG4gICAgbGV0IG5ld1NldHRpbmdzTm9kZXMgPSBbXTtcblxuICAgIGZvcihsZXQgYyBpbiBjYXRlZ29yaWVzKSB7XG4gICAgICAgIGZvcihsZXQgcyBpbiBzZXR0aW5nc05vZGVzKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHNldHRpbmdzTm9kZXNbc107XG4gICAgICAgICAgICBpZihjdXJyZW50Tm9kZS5zZXR0aW5nc1swXS52YWx1ZSA9PT0gY2F0ZWdvcmllc1tjXSkge1xuICAgICAgICAgICAgICAgIG5ld1NldHRpbmdzTm9kZXMucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNldHRpbmdzTm9kZXNbc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBEeW5hbWljIFN0dWZmXG4gICAgY29uc3QgY2FudmFzSnN4ID0gY2FudmFzTm9kZXMubGVuZ3RoID4gMCA/IGNhbnZhc05vZGVzLm1hcChub2RlID0+IHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17J2NhbnZhcy1jb250YWluZXInfSBrZXk9e25vZGUuaWR9PlxuICAgICAgICAgICAgPGNhbnZhcyBjbGFzc05hbWU9XCJzaWduYWxzLWNhbnZhc1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtub2RlLmlkfWB9XG4gICAgICAgICAgICA+PC9jYW52YXM+XG4gICAgICAgIDwvZGl2PilcbiAgICB9KSA6IG51bGw7XG5cbiAgICBsZXQgbGFzdENhdGVnb3J5ID0gXCJcIjtcbiAgICBjb25zdCBzZXR0aW5ncyA9IG5ld1NldHRpbmdzTm9kZXMubGVuZ3RoID4gMCA/IG5ld1NldHRpbmdzTm9kZXMubWFwKG5vZGUgPT4ge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50O1xuICAgICAgICBsZXQgaXNTbGlkZXIgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNob3VsZFNhdmVDYXRlZ29yeSA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IG5vZGUuc2V0dGluZ3NbMF0udmFsdWU7XG5cbiAgICAgICAgaWYobGFzdENhdGVnb3J5ICE9PSBjdXJyZW50Q2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHNob3VsZFNhdmVDYXRlZ29yeSA9IHRydWU7XG4gICAgICAgICAgICBsYXN0Q2F0ZWdvcnkgPSBjdXJyZW50Q2F0ZWdvcnk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKG5vZGUuaWQuc3Vic3RyKDAsIDgpID09PSBcInVpTnVtYmVyXCIpIHtcbiAgICAgICAgICAgIC8vICd1aU51bWJlcicgc2V0dGluZ3M6XG4gICAgICAgICAgICAvLyAwIDogQ2F0ZWdvcnkgLSBDYXRlZ29yeSB0aGF0IGNvbnRyb2xsZXJzIGFyZSBzb3J0ZWQgYnkuXG4gICAgICAgICAgICAvLyAxIDogTGFiZWwgICAgLSBMYWJlbCBuZXh0IHRvIHRoZSBjb250cm9sbGVyLlxuICAgICAgICAgICAgLy8gMiA6IE9yZGVyICAgIC0gVmVydGljYWwgcG9zaXRpb24gb2YgdGhlIGNvbnRyb2xsZXIgaW4gdGhlIGNhdGVnb3J5LlxuICAgICAgICAgICAgLy8gMyA6IERlZmF1bHQgIC0gRGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgLy8gNCA6IE1pbiAgICAgIC0gTWluaW11bSB2YWx1ZVxuICAgICAgICAgICAgLy8gNSA6IE1heCAgICAgIC0gTWF4aW11bSB2YWx1ZVxuICAgICAgICAgICAgLy8gNiA6IFN0ZXAgICAgIC0gU3RlcCBvZiB0aGUgdmFsdWVcbiAgICAgICAgICAgIGlucHV0RWxlbWVudCA9ICg8aW5wdXQgIHR5cGU9eydudW1iZXInfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtub2RlLmlkK1wiSW5wdXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bm9kZS5zZXR0aW5nc1szXS52YWx1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e25vZGUuc2V0dGluZ3NbNF0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e25vZGUuc2V0dGluZ3NbNV0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtub2RlLnNldHRpbmdzWzZdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9Lz4pO1xuICAgICAgICB9IGVsc2UgaWYobm9kZS5pZC5zdWJzdHIoMCwgOCkgPT09IFwidWlTbGlkZXJcIikge1xuICAgICAgICAgICAgaXNTbGlkZXIgPSB0cnVlO1xuICAgICAgICAgICAgLy8gJ3VpU2xpZGVyJyBzZXR0aW5nczpcbiAgICAgICAgICAgIC8vIDAgOiBDYXRlZ29yeSAtIENhdGVnb3J5IHRoYXQgY29udHJvbGxlcnMgYXJlIHNvcnRlZCBieS5cbiAgICAgICAgICAgIC8vIDEgOiBMYWJlbCAgICAtIExhYmVsIG5leHQgdG8gdGhlIGNvbnRyb2xsZXIuXG4gICAgICAgICAgICAvLyAyIDogT3JkZXIgICAgLSBWZXJ0aWNhbCBwb3NpdGlvbiBvZiB0aGUgY29udHJvbGxlciBpbiB0aGUgY2F0ZWdvcnkuXG4gICAgICAgICAgICAvLyAzIDogRGVmYXVsdCAgLSBEZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICAvLyA0IDogTWluICAgICAgLSBNaW5pbXVtIHZhbHVlXG4gICAgICAgICAgICAvLyA1IDogTWF4ICAgICAgLSBNYXhpbXVtIHZhbHVlXG4gICAgICAgICAgICAvLyA2IDogU3RlcCAgICAgLSBTdGVwIG9mIHRoZSB2YWx1ZVxuICAgICAgICAgICAgaW5wdXRFbGVtZW50ID0gKDxpbnB1dCAgdHlwZT17J3JhbmdlJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bm9kZS5pZCtcIklucHV0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25vZGUuc2V0dGluZ3NbM10udmFsdWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtub2RlLnNldHRpbmdzWzRdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtub2RlLnNldHRpbmdzWzVdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17bm9kZS5zZXR0aW5nc1s2XS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfS8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJldHVybnMgbWVzc2FnZSBpZiB0aGUgdHlwZSBpcyB1bnNvcHBvcnRlZFxuICAgICAgICAgICAgaW5wdXRFbGVtZW50ID0gPGRpdj57J3Vuc3VwcG9ydGVkIHR5cGUnfTwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgaWYoc2hvdWxkU2F2ZUNhdGVnb3J5KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e25vZGUuaWQgKyBjdXJyZW50Q2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWxhYmVsJ30+e2N1cnJlbnRDYXRlZ29yeX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0gJyArIChpc1NsaWRlciA/IFwic2lnbmFscy1zZXR0aW5ncy1zbGlkZXJcIiA6IFwiXCIpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtub2RlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9eydzaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbS1sYWJlbCd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtub2RlLmlkICsgXCJMYWJlbFwifT57bm9kZS5zZXR0aW5nc1sxXS52YWx1ZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2lucHV0RWxlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1NsaWRlciA/IDxkaXYgaWQ9e25vZGUuaWQrXCJJbmRpY2F0b3JcIn0+e25vZGUuc2V0dGluZ3NbM10udmFsdWV9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8bGkgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0gJyArIChpc1NsaWRlciA/IFwic2lnbmFscy1zZXR0aW5ncy1zbGlkZXJcIiA6IFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e25vZGUuaWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtub2RlLmlkfT5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0tbGFiZWwnfSBpZD17bm9kZS5pZCArIFwiTGFiZWxcIn0+e25vZGUuc2V0dGluZ3NbMV0udmFsdWV9PC9oNj5cbiAgICAgICAgICAgICAgICB7aW5wdXRFbGVtZW50fVxuICAgICAgICAgICAgICAgIHtpc1NsaWRlciA/IDxkaXYgaWQ9e25vZGUuaWQrXCJJbmRpY2F0b3JcIn0+e25vZGUuc2V0dGluZ3NbM10udmFsdWV9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgIDwvbGk+KTtcbiAgICAgICAgfVxuICAgIH0pIDogbnVsbDtcblxuICAgIC8vIEdlbmVyYXRlIEZpbmFsIEpTWFxuICAgIGNvbnN0IFNpZ25hbFZpZXdzID0gY2FudmFzSnN4ID9cbiAgICAgICAgKFxuICAgICAgICAgICAgPGRpdiBpZD1cInNpZ25hbHMtdmlld3NcIj5cbiAgICAgICAgICAgICAgICB7Y2FudmFzSnN4fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgY29uc3QgU2V0dGluZ3NKc3ggPSBzZXR0aW5ncyA/XG4gICAgICAgIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduYWxzLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgPHVsIGlkPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0J30+XG4gICAgICAgICAgICAgICAgICAgIHtzZXR0aW5nc31cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17XCJzaWduYWxzLWVtYmVkZGluZy1tYWluXCJ9PlxuICAgICAgICAgICAgPGRpdiBpZD17XCJzaWduYWxzLWVtYmVkZGluZy1jb250cm9sc1wifT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcInNpZ25hbHMtYmFjay1idXR0b25cIn0gY2xhc3NOYW1lPXtcInNpZ25hbHMtZW1iZWRkaW5nLWNvbnRyb2wtYnV0dG9uXCJ9PmJhY2s8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcInNpZ25hbHMtcmVjb3JkaW5nLXN0YXJ0XCJ9IGNsYXNzTmFtZT17XCJzaWduYWxzLWVtYmVkZGluZy1jb250cm9sLWJ1dHRvblwifT5zdGFydCByZWNvcmRpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcInNpZ25hbHMtcmVjb3JkaW5nLXN0b3BcIn0gY2xhc3NOYW1lPXtcInNpZ25hbHMtZW1iZWRkaW5nLWNvbnRyb2wtYnV0dG9uXCJ9PnN0b3AgcmVjb3JkaW5nPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9e1wic2lnbmFscy1lbWJlZGRpbmctY29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgICAgIDxzdHlsZT57c3R5bGVzKG5ld1NldHRpbmdzTm9kZXMubGVuZ3RoLCBjYW52YXNOb2Rlcy5sZW5ndGgpfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAge1NldHRpbmdzSnN4fVxuICAgICAgICAgICAgICAgIHtTaWduYWxWaWV3c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=