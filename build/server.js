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

module.exports = {"input":{"touchInput":{"title":"Touch Input","description":"Gets touch input from the scope.","inputs":[],"outputs":[{"title":"OffsetX","type":"number"},{"title":"OffsetY","type":"number"}],"generators":[],"default_settings":[{"title":"Sensitivity","value":"0.01","type":"number_uncontrolled"},{"title":"Scope","value":"","type":"scopeReference"}]},"scalar":{"title":"Scalar","description":"Single scalar output","inputs":[],"outputs":[{"title":"number","type":"number"}],"generators":[],"default_settings":[{"title":"number","value":"1","type":"number","isInput":false}]},"signalGenerator":{"title":"Signal Generator","description":"Generates a basic signal","inputs":[],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"default_settings":[{"title":"frequency","value":"20","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":false},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"type","value":"sin","type":"signal_type"}]},"animation":{"title":"Animation","description":"Animation controller. Can be used to animate properties without human interaction.","inputs":[],"outputs":[{"title":"output","type":"number"}],"default_settings":[{"title":"speed","value":"1","type":"number"},{"title":"origin","value":"0","type":"number_uncontrolled"},{"title":"type","value":"linear","type":"array","expanded":false,"array_options":[{"title":"linear","description":"linearly increased value"},{"title":"oscillator","description":"oscillaces sinusoudally from 1 to -1"}]}]}},"processors":{"multiply":{"title":"Multiply","description":"Modulates two signals using AM modulation","inputs":[{"title":"input_1","type":"signal"},{"title":"input_2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]*[input2]","type":"signal"}],"default_settings":[]},"add":{"title":"Add","description":"Modulates two signals using AM modulation","inputs":[{"title":"input_1","type":"signal"},{"title":"input_2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]+[input2]","type":"signal"}],"default_settings":[]},"subtract":{"title":"Subtract","description":"Modulates two signals using AM modulation","inputs":[{"title":"input_1","type":"signal"},{"title":"input_2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"generators":[{"title":"output","value":"[input1]-[input2]","type":"signal"}],"default_settings":[]},"exponent":{"title":"E^x","description":"E to the power of input","inputs":[{"title":"x","type":"number"}],"generators":[{"title":"output","type":"number","value":"exp([x])"}],"outputs":[{"title":"output","type":"number"}],"default_settings":[]},"power":{"title":"x^y","description":"x to the power of y","inputs":[{"title":"x","type":"number"}],"generators":[{"title":"output","type":"number","value":"[x]^[y]"}],"outputs":[{"title":"output","type":"number"}],"default_settings":[{"title":"y","type":"number","value":"1"}]}},"output":{"scope":{"title":"Scope","description":"Displays a scope with the provided input signal.","inputs":[{"title":"signal_1","type":"signal"}],"outputs":[],"default_settings":[{"title":"# of Signals","value":"1","type":"number_of_signals"},{"title":"middle","value":"0","type":"number_uncontrolled"},{"title":"range","value":"0","type":"number_uncontrolled"},{"title":"1_color","value":"#FF2873","type":"color"}]},"fft":{"title":"FFT Scope","description":"Displays frequency domain representation of the signal.","inputs":[{"title":"signal","type":"signal"}],"outputs":[],"default_settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Range (Hz)","value":"100","type":"number_uncontrolled"}]},"time":{"title":"Time Control","description":"Existance of this node in the canvas will animate time according to the vector in the settings.","inputs":[],"outputs":[],"default_settings":[{"title":"Speed","value":"1","type":"number_uncontrolled"},{"title":"Range","value":"2","type":"number_uncontrolled"},{"title":"origin","value":"0","type":"number_uncontrolled"}]}},"ui":{"uiNumber":{"title":"UI Number","description":"Controller that appears on the renderer which allows to enter a number.","inputs":[],"outputs":[{"title":"output","type":"number"}],"default_settings":[{"title":"Category","value":"settings","type":"text"},{"title":"Label","value":"","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"0","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}]},"uiSlider":{"title":"UI Slider","description":"Controller that appears on the renderer which grants control using slider.","inputs":[],"outputs":[{"title":"output","type":"number"}],"default_settings":[{"title":"Category","value":"settings","type":"text"},{"title":"Label","value":"","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"0","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}]}}};

/***/ }),

/***/ "./src/server/project_presets/fourierSeries.json":
/*!*******************************************************!*\
  !*** ./src/server/project_presets/fourierSeries.json ***!
  \*******************************************************/
/*! exports provided: allNodes, allConnections, isCreatingConnection, composerCoordinates, default */
/***/ (function(module) {

module.exports = {"allNodes":{"uiSlider":{"title":"1F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"1*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":6,"width":150,"height":100,"id":"uiSlider"},"uiSlider1":{"title":"2F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"2*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":68,"width":150,"height":100,"id":"uiSlider1"},"uiSlider2":{"title":"3F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"3*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":129,"width":150,"height":100,"id":"uiSlider2"},"uiSlider3":{"title":"4F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"4*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":191,"width":150,"height":100,"id":"uiSlider3"},"uiSlider4":{"title":"5F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"5*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":254,"width":150,"height":100,"id":"uiSlider4"},"uiSlider5":{"title":"6F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"6*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":317,"width":150,"height":100,"id":"uiSlider5"},"uiSlider6":{"title":"7F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"7*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":381,"width":150,"height":100,"id":"uiSlider6"},"uiSlider7":{"title":"8F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"8*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":443,"width":150,"height":100,"id":"uiSlider7"},"uiSlider8":{"title":"9F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"9*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":124,"y":504,"width":150,"height":100,"id":"uiSlider8"},"signalGenerator":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"1","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":5,"width":150,"height":100},"signalGenerator1":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"2","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":67,"width":150,"height":100},"signalGenerator2":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"3","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":128,"width":150,"height":100},"signalGenerator3":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"4","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":190,"width":150,"height":100},"signalGenerator4":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"5","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":254,"width":150,"height":100},"signalGenerator5":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"6","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":317,"width":150,"height":100},"signalGenerator6":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"7","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":380,"width":150,"height":100},"signalGenerator7":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"8","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":442,"width":150,"height":100},"signalGenerator8":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"9","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"sin","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":504,"width":150,"height":100},"uiSlider9":{"title":"Bias","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Sines","type":"text"},{"title":"Label","value":"0*f","type":"text"},{"title":"Order","value":"-1","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":325,"y":573,"width":150,"height":100,"id":"uiSlider9"},"add":{"title":"Add","clickedDown":true,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]+[input3]+[input4]+[input5]+[input6]+[input7]+[input8]+[input9]+[input10]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"},{"title":"input3","type":"signal"},{"title":"input4","type":"signal"},{"title":"input5","type":"signal"},{"title":"input6","type":"signal"},{"title":"input7","type":"signal"},{"title":"input8","type":"signal"},{"title":"input9","type":"signal"},{"title":"input10","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":590,"y":5,"width":150,"height":100},"signalGenerator9":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"1","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":681,"width":150,"height":100},"signalGenerator10":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"2","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":743,"width":150,"height":100},"signalGenerator11":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"3","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":806,"width":150,"height":100},"signalGenerator12":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"4","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":869,"width":150,"height":100},"signalGenerator13":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"5","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":932,"width":150,"height":100},"signalGenerator14":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"6","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":996,"width":150,"height":100},"signalGenerator15":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"7","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1057,"width":150,"height":100},"signalGenerator16":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"8","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1122,"width":150,"height":100},"signalGenerator17":{"title":"Signal Generator","clickedDown":false,"selected":false,"settings":[{"title":"frequency","value":"9","type":"number","isInput":false},{"title":"amplitude","value":"1","type":"number","isInput":true},{"title":"phase","value":"0","type":"number","isInput":false},{"title":"offset","value":"0","type":"number","isInput":false},{"title":"Signal Type","value":"cos","type":"signal_type"}],"generators":[{"title":"signal","value":"[amplitude]*cos(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"inputs":[{"title":"amplitude","default_value":"1","type":"number"}],"outputs":[{"title":"signal","type":"signal"}],"x":325,"y":1185,"width":150,"height":100},"uiSlider10":{"title":"1F","clickedDown":true,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"1*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"1","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":677,"width":150,"height":100,"id":"uiSlider10"},"uiSlider11":{"title":"2F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"2*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":741,"width":150,"height":100,"id":"uiSlider11"},"uiSlider12":{"title":"3F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"3*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":806,"width":150,"height":100,"id":"uiSlider12"},"uiSlider13":{"title":"4F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"4*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":869,"width":150,"height":100,"id":"uiSlider13"},"uiSlider14":{"title":"5F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"5*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":932,"width":150,"height":100,"id":"uiSlider14"},"uiSlider15":{"title":"6F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"6*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":995,"width":150,"height":100,"id":"uiSlider15"},"uiSlider16":{"title":"7F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"7*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1059,"width":150,"height":100,"id":"uiSlider16"},"uiSlider17":{"title":"8F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"8*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1122,"width":150,"height":100,"id":"uiSlider17"},"uiSlider18":{"title":"9F","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"9*f","type":"text"},{"title":"Order","value":"0","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":125,"y":1187,"width":150,"height":100,"id":"uiSlider18"},"uiSlider19":{"title":"Bias","clickedDown":false,"selected":false,"settings":[{"title":"Category","value":"Cosines","type":"text"},{"title":"Label","value":"0*f","type":"text"},{"title":"Order","value":"-1","type":"number_uncontrolled"},{"title":"Default","value":"0","type":"number_uncontrolled"},{"title":"Min","value":"-1","type":"number_uncontrolled"},{"title":"Max","value":"1","type":"number_uncontrolled"},{"title":"Step","value":"0.1","type":"number_uncontrolled"}],"generators":[],"inputs":[],"outputs":[{"title":"output","type":"number"}],"x":334,"y":1263,"width":150,"height":100,"id":"uiSlider19"},"add1":{"title":"Add","clickedDown":true,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]+[input3]+[input4]+[input5]+[input6]+[input7]+[input8]+[input9]+[input10]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"},{"title":"input3","type":"signal"},{"title":"input4","type":"signal"},{"title":"input5","type":"signal"},{"title":"input6","type":"signal"},{"title":"input7","type":"signal"},{"title":"input8","type":"signal"},{"title":"input9","type":"signal"},{"title":"input10","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":592,"y":680,"width":150,"height":100},"add2":{"title":"Add","clickedDown":true,"selected":false,"settings":[],"generators":[{"title":"output","value":"[input1]+[input2]","type":"signal"}],"inputs":[{"title":"input1","type":"signal"},{"title":"input2","type":"signal"}],"outputs":[{"title":"output","type":"signal"}],"x":765,"y":294,"width":150,"height":100},"scope":{"title":"sines","clickedDown":true,"selected":false,"settings":[{"title":"# of Signals","value":"1","type":"number_of_signals"},{"title":"middle","value":"0","type":"number_uncontrolled"},{"title":"range","value":"5","type":"number_uncontrolled"},{"title":"1_color","value":"#FF2873","type":"color"}],"generators":[],"inputs":[{"title":"signal_1","type":"signal"}],"outputs":[],"x":814,"y":36,"width":150,"height":100,"id":"scope"},"scope1":{"title":"cosines","clickedDown":true,"selected":false,"settings":[{"title":"# of Signals","value":"1","type":"number_of_signals"},{"title":"middle","value":"0","type":"number_uncontrolled"},{"title":"range","value":"5","type":"number_uncontrolled"},{"title":"1_color","value":"#00a15a","type":"color"}],"generators":[],"inputs":[{"title":"signal_1","type":"signal"}],"outputs":[],"x":804,"y":567,"width":150,"height":100,"id":"scope1"},"scope2":{"title":"Time Domain","clickedDown":true,"selected":false,"settings":[{"title":"# of Signals","value":"1","type":"number_of_signals"},{"title":"middle","value":"0","type":"number_uncontrolled"},{"title":"range","value":"5","type":"number_uncontrolled"},{"title":"1_color","value":"#9e28f3","type":"color"}],"generators":[],"inputs":[{"title":"signal_1","type":"signal"}],"outputs":[],"x":964,"y":234,"width":150,"height":100,"id":"scope2"},"fft":{"title":"FFT Scope","clickedDown":true,"selected":false,"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Range (Hz)","value":"10","type":"number_uncontrolled"}],"generators":[],"inputs":[{"title":"signal","type":"signal"}],"outputs":[],"x":960,"y":370,"width":150,"height":100,"id":"fft"}},"allConnections":[{"connectorStart":{"nodeId":"uiSlider","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider1","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator1","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider2","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider3","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator3","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider4","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator4","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider5","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator5","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider6","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator6","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider7","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator7","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider8","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator8","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input1"}},{"connectorStart":{"nodeId":"signalGenerator1","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input2"}},{"connectorStart":{"nodeId":"signalGenerator2","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input3"}},{"connectorStart":{"nodeId":"signalGenerator3","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input4"}},{"connectorStart":{"nodeId":"signalGenerator4","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input5"}},{"connectorStart":{"nodeId":"signalGenerator5","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input6"}},{"connectorStart":{"nodeId":"signalGenerator6","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input7"}},{"connectorStart":{"nodeId":"signalGenerator7","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input8"}},{"connectorStart":{"nodeId":"signalGenerator8","settingId":"signal"},"connectorEnd":{"nodeId":"add","settingId":"input9"}},{"connectorStart":{"nodeId":"uiSlider9","settingId":"output"},"connectorEnd":{"nodeId":"add","settingId":"input10"}},{"connectorStart":{"nodeId":"uiSlider10","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator9","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider11","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator10","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider12","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator11","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider13","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator12","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider14","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator13","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider15","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator14","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider16","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator15","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider17","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator16","settingId":"amplitude"}},{"connectorStart":{"nodeId":"uiSlider18","settingId":"output"},"connectorEnd":{"nodeId":"signalGenerator17","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator9","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input1"}},{"connectorStart":{"nodeId":"signalGenerator10","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input2"}},{"connectorStart":{"nodeId":"signalGenerator11","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input3"}},{"connectorStart":{"nodeId":"signalGenerator12","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input4"}},{"connectorStart":{"nodeId":"signalGenerator13","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input5"}},{"connectorStart":{"nodeId":"signalGenerator14","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input6"}},{"connectorStart":{"nodeId":"signalGenerator15","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input7"}},{"connectorStart":{"nodeId":"signalGenerator16","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input8"}},{"connectorStart":{"nodeId":"signalGenerator17","settingId":"signal"},"connectorEnd":{"nodeId":"add1","settingId":"input9"}},{"connectorStart":{"nodeId":"uiSlider19","settingId":"output"},"connectorEnd":{"nodeId":"add1","settingId":"input10"}},{"connectorStart":{"nodeId":"add","settingId":"output"},"connectorEnd":{"nodeId":"add2","settingId":"input1"}},{"connectorStart":{"nodeId":"add1","settingId":"output"},"connectorEnd":{"nodeId":"add2","settingId":"input2"}},{"connectorStart":{"nodeId":"add","settingId":"output"},"connectorEnd":{"nodeId":"scope","settingId":"signal_1"}},{"connectorStart":{"nodeId":"add1","settingId":"output"},"connectorEnd":{"nodeId":"scope1","settingId":"signal_1"}},{"connectorStart":{"nodeId":"add2","settingId":"output"},"connectorEnd":{"nodeId":"scope2","settingId":"signal_1"}},{"connectorStart":{"nodeId":"add2","settingId":"output"},"connectorEnd":{"nodeId":"fft","settingId":"signal"}}],"isCreatingConnection":{"focused":true,"gridSize":50,"height":830,"width":1650,"x":-415,"y":-314,"zoomLevel":1},"composerCoordinates":{"focused":true,"gridSize":50,"height":830,"width":1650,"x":23,"y":48,"zoomLevel":1}};

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
        if (g[i] === "*" || g[i] === "/" || g[i] === "+" || g[i] === "-" || g[i] === "^" || g[i] === "%") {
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
            if (nextThree === "sin" || nextThree === "cos" || nextThree === "tan" || nextThree === "sqw" || nextThree === "exp") {
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
    var _a = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["separateNodes"])(allNodes), uncalculatedNodes = _a.uncalculatedNodes, allScopes = _a.allScopes, uiNodes = _a.uiNodes, fftNodes = _a.fftNodes, time = _a.time, animationNodes = _a.animationNodes;
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
    if (Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["objectSize"])(animationNodes) > 0) {
        executable += "var allTimers = [];";
        for (var nodeKey in animationNodes) {
            var currentNode = animationNodes[nodeKey];
            var outputKey = currentNode.outputs[0].title;
            executable += Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["saveAnimation"])(currentNode, nodeKey);
            calculatedNodes.push(nodeKey + ":" + outputKey);
        }
        executable += Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["initAnimationTime"])();
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
        executable += "\n        if(graphs." + s + ") {\n            " + dataGenerationSnippet + "\n            graphs." + s + ".data.datasets = " + datasetsArraySnippet + ";\n            graphs." + s + ".update();\n            if(typeof " + s + "gif !== 'undefined') {\n                if(!lastFrameTimestamp) { \n                    lastFrameTimestamp = new Date;\n                } else {\n                    const now = new Date;\n                    const timeSinceLastFrame = now - lastFrameTimestamp;\n                    lastFrameTimestamp = new Date;\n    \n                    var tempCanvas = document.createElement(\"canvas\");\n                    tempCanvas.width = graphs." + s + ".canvas.width/2;\n                    tempCanvas.height = graphs." + s + ".canvas.height/2;\n                    var tempCtx = tempCanvas.getContext(\"2d\");\n                    tempCtx.fillStyle = \"#FFF\";\n                    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);\n                    tempCtx.drawImage(graphs." + s + ".canvas, 0, 0, graphs." + s + ".canvas.width/2, graphs." + s + ".canvas.height/2);\n    \n                    window." + s + "gif.addFrame(tempCtx, {delay: timeSinceLastFrame});\n                }\n            }\n        } else {\n            let canvasNode = document.getElementById(\"" + s + "\");\n            \n            var w = canvasNode.parentNode.offsetWidth;\n            var h = canvasNode.parentNode.offsetHeight;\n            \n            canvasNode.width = w;\n            canvasNode.height = h;\n            \n            var ctx = canvasNode.getContext(\"2d\");\n\n            " + dataGenerationSnippet + "\n\n            var myChart = new Chart(ctx, {\n                type: 'line',\n                data: { labels: t.map(ti => ti.toFixed(2)), datasets: " + datasetsArraySnippet + "},\n                options: {\n                    elements: { line: { tension: 0, stepped: false }, point: { radius: 0, hitRadius: 0, hoverRadius: 0 } },\n                    animation: { duration: 0 },\n                    tooltips: { enabled: false }, \n                    legend: { display: " + (currentScope.inputs.length > 1 ? 'true' : 'false') + " }\n                    " + ((currentScope.settings[1].value == "0") && (currentScope.settings[2].value == "0") ? '' : ", scales: {\n                        yAxes: [{ticks: {\n                            max: " + (parseFloat(currentScope.settings[1].value) + parseFloat(currentScope.settings[2].value) / 2) + ",\n                            min: " + (parseFloat(currentScope.settings[1].value) - parseFloat(currentScope.settings[2].value) / 2) + ",\n                            stepSize: " + parseFloat(currentScope.settings[2].value) / 10 + "\n                        }}]\n                    }") + ", title: { display: true, text: '" + currentScope.title + "', position: 'left' }\n                }\n            });\n\n            graphs." + s + " = myChart;\n        }";
        gifRecordingStart += "window." + s + "gif = new GIF({\n            workers: 1,\n            quality: 10,\n            workerScript: \"/gif.worker.js\",\n            width: graphs." + s + ".canvas.width / 2,\n            height: graphs." + s + ".canvas.height / 2\n        });";
        gifRecordingStop += "window." + s + "gif.on('finished', function(blob) {\n            // location.assign(URL.createObjectURL(blob));\n            download(blob, \"anim.gif\", \"image/gif\");\n\n            delete window." + s + "gif;\n        });\n\n        window." + s + "gif.render();";
        exeArray.push(executable);
        executable = "";
    };
    // Loop through time scopes
    for (var s in allScopes) {
        _loop_1(s);
    }
    executable += gifRecordingStart + "};\n";
    executable += gifRecordingStop + "};\n";
    // Loop through fft scopes
    for (var f in fftNodes) {
        var currentScope = fftNodes[f];
        var _c = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["getOtherSideOfConnector"])(allConnections, null, { nodeId: f, settingId: "signal" }), otherNodeId = _c.otherNodeId, otherSettingId = _c.otherSettingId;
        executable += "if(graphs." + f + ") {\n            let data = [];\n            for(let i = 0; i < t.length; i++) {data.push(" + otherNodeId + otherSettingId + "(t[i]));}\n\n            let f = new FFT(data.length);\n            let complexOutput = f.createComplexArray();\n            let realOutput = new Array(data.length);\n\n            f.realTransform(complexOutput, data);\n            f.fromComplexArray(complexOutput, realOutput);\n\n            // realOutput = realOutput.filter((val, i) => i%2 == 0 || i == 0);\n\n            realOutput = realOutput.splice(0, " + parseInt(currentScope.settings[2].value) + ");\n            \n            realOutput = realOutput.map(val => val * 2 / data.length);\n\n            graphs." + f + ".data.datasets[0].data = realOutput;\n            graphs." + f + ".update();\n        } else {\n            let canvasNode = document.getElementById(\"" + f + "\");\n\n            var viewSize = {\n                x: canvasNode.parentNode.offsetWidth,\n                y: canvasNode.parentNode.offsetHeight\n            }\n            \n            var w = viewSize.x;\n            var h = viewSize.y;\n            \n            canvasNode.width = w;\n            canvasNode.height = h;\n            \n            var ctx = canvasNode.getContext(\"2d\");\n\n            let data = [];\n\n            for(let i = 0; i < t.length; i++) {\n                data.push(" + otherNodeId + otherSettingId + "(t[i]));\n            }\n\n            let f = new FFT(data.length);\n            let complexOutput = f.createComplexArray();\n            f.realTransform(complexOutput, data);\n            let realOutput = new Array(data.length);\n            realOutput.fill(0);\n            f.fromComplexArray(complexOutput, realOutput);\n\n            // realOutput = realOutput.filter((val, i) => i%2 == 0 || i == 0);\n\n            realOutput = realOutput.splice(0, " + parseInt(currentScope.settings[2].value) + ");\n\n            realOutput = realOutput.map(val => val * 2 / data.length);\n\n            var myChart = new Chart(ctx, {\n                type: 'line',\n                data: {\n                    labels: realOutput.map((val, i) => parseFloat(i/2).toFixed(1)),\n                    datasets: [\n                        {\n                            label: \"signal\",\n                            backgroundColor: 'rgba(0, 0, 0, 0)',\n                            borderColor: '" + currentScope.settings[1].value + "',\n                            data: realOutput,\n                            steppedLine: 'middle'\n                        }\n                    ]\n                }, options: {\n                    animation: {\n                        duration: 0\n                    }, tooltips: {\n                        enabled: true\n                    }, legend: {\n                        display: " + (currentScope.inputs.length > 1) + "\n                    }, title: {\n                        display: true,\n                        text: '" + currentScope.title + "',\n                        position: 'left'\n                    }, elements: { \n                        line: { tension: 0 },\n                        point: { radius: 0, hitRadius: 0, hoverRadius: 0 }\n                    }, tooltips: { enabled: false }\n                }\n            });\n\n            graphs." + f + " = myChart;\n        }";
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
/*! exports provided: separateNodes, generateConnectionDictionary, objectSize, wasCalculated, getOtherSideOfConnector, allInputsCalculated, calculateOutput, getTouchInputs, initTime, generateTouchControllers, saveAnimation, initAnimationTime */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAnimation", function() { return saveAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAnimationTime", function() { return initAnimationTime; });
/* harmony import */ var _generatorTokenizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatorTokenizer */ "./src/server/renderer/generatorTokenizer.ts");
/* harmony import */ var _tokenToJs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenToJs */ "./src/server/renderer/tokenToJs.js");


// Get all nodes that are not scopes, and save scopes into their own collection
function separateNodes(allNodes) {
    var uncalculated = {};
    var scopes = {};
    var uiNodes = {};
    var fftNodes = {};
    var timeNodes = {};
    var animationNodes = {};
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
        // CHeck if it is an animation node
        var isAnimation = String(i).substr(0, 9) === "animation";
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
        else if (isAnimation) {
            animationNodes[i] = allNodes[i];
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
        time: timeNodes,
        animationNodes: animationNodes
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
    return "let t = (function(){\n        let r = [];\n        for(let i = " + start + "; i < " + stop + "; i+=" + step + ") {\n            r.push(i);\n        }\n        return r;\n    })();";
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
function saveAnimation(node, nodeKey) {
    var type = node.settings[2].value;
    switch (type) {
        case "oscillator": {
            return "var " + nodeKey + node.outputs[0].title + " = function() { return Math.sin(Math.PI*2*animationTime*" + node.settings[0].value + ") + " + node.settings[1].value + "};";
        }
        default: {
            return "var " + nodeKey + node.outputs[0].title + " = function() { return animationTime*(" + node.settings[0].value + ") + " + node.settings[1].value + "};";
        }
    }
}
function initAnimationTime() {
    return "if(typeof deltaTime == 'undefined') window.deltaTime = 60;\n    var animationTime = 0;\n    setInterval(function () {\n        animationTime += deltaTime/1000;\n        update();\n    }, deltaTime);";
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
      } else if (value === "exp") {
        executableString += "Math.exp(";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2dlbmVyYXRvclRva2VuaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVuZGVyZXIvc2NvcGVGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3Rva2VuVG9Kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3ZpZXdlckRvbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiZGF0YWJhc2UiLCJwcm9qZWN0c0luZm8iLCJwcm9qZWN0SWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3duZXIiLCJwcm9qZWN0TW9kZWxzIiwibW9kdWxhdGlvbiIsImZvdXJpZXJTZXJpZXMiLCJ1c2VycyIsImFkbWluIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm5ld1Byb2plY3QiLCJuZXdJZCIsImkiLCJwYXJzZUludCIsInB1c2giLCJwcm9qZWN0TW9kZWxUZW1wbGF0ZSIsInNhdmVQcm9qZWN0IiwianNvbiIsIm5ld1Byb2plY3RWZXJzaW9uIiwiYWxsQ29ubmVjdGlvbnMiLCJhbGxOb2RlcyIsImNvbXBvc2VyQ29vcmRpbmF0ZXMiLCJpc0NyZWF0aW5nQ29ubmVjdGlvbiIsImZvY3VzZWQiLCJncmlkU2l6ZSIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJ6b29tTGV2ZWwiLCJ1c2UiLCJzdGF0aWMiLCJfX2Rpcm5hbWUiLCJtb3JnYW4iLCJnZXQiLCJyZXEiLCJyZXMiLCJwYXJhbXMiLCJpZCIsInN0YXR1cyIsInNlbmQiLCJmcyIsInJlYWRGaWxlIiwicGF0aCIsInJlc29sdmUiLCJlcnIiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwicmVwbGFjZSIsInByb2plY3REYXRhIiwibGVuZ3RoIiwicHJvamVjdCIsInBpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaWJyYXJ5Tm9kZXMiLCJzZXRIZWFkZXIiLCJyZW5kZXJlZFN0cmluZyIsInJlbmRlclNpZ25hbHMiLCJlbmQiLCJwcm9qZWN0c0FycmF5IiwiYm9keVBhcnNlciIsInBvc3QiLCJwcm9qZWN0SnNvbiIsImJvZHkiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJsb2ciLCJyZW5kZXJIdG1sIiwicmVxdWVzdEpzb24iLCJqc3giLCJqc3hEb20iLCJqc3hTdHJpbmciLCJyZW5kZXJUb1N0YXRpY01hcmt1cCIsInNjcmlwdEFycmF5Iiwic2NyaXB0R2VuZXJhdG9yIiwiY29tcG9zZWRTY3JpcHRTdHJpbmciLCJzIiwic2NyaXB0cyIsImYiLCJzdWJzdHIiLCJzY3JpcHRlZEh0bWwiLCJzbGljZSIsImZpeFNjb3BlcyIsImdlbiIsImciLCJTdHJpbmciLCJmb3VuZExlZnRCb3JkZXIiLCJmb3VuZFJpZ2h0Qm9yZGVyIiwianVzdEhpdE9wZW5pbmdCcmFja2V0IiwianVzdEhpdENsb3NpbmdCcmFja2V0IiwibGVmdCIsInJpZ2h0Iiwib25lIiwidHdvIiwidGhyZWUiLCJ0b2tlblRvSnMiLCJub2RlSWQiLCJ2YXJpYWJsZU5hbWUiLCJqc29uVG9rZW5zIiwiZXhlY3V0YWJsZVN0cmluZyIsImNhbGN1bGF0ZUNvZGUiLCJ0b2tlbiIsInR5cGUiLCJ2YWx1ZSIsImNvZGUiLCJzdHlsZXMiLCJzZXR0aW5nc0NvdW50Iiwic2NvcGVDb3VudCIsImlzU2V0dGluZ3NBbmRTY29wZXMiLCJpc0RpdmlkYWJsZUJ5VHdvIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJub2RlcyIsImNhbnZhc05vZGVzIiwia2V5IiwiY3VycmVudE5vZGUiLCJzZXR0aW5nc05vZGVzIiwiY2F0ZWdvcmllcyIsImlzVGhpcmRMZXR0ZXJVcHBlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzVUkiLCJpc0FjdHVhbFVJIiwiY2F0ZWdvcnlTYXZlZEFscmVhZHkiLCJjdXJyZW50Q2F0ZWdvcnkiLCJzZXR0aW5ncyIsImMiLCJzb3J0IiwiYSIsImIiLCJjYXQxIiwiY2F0MiIsIm9yZGVyMSIsIm9yZGVyMiIsImNhdEFyciIsIm5ld1NldHRpbmdzTm9kZXMiLCJjYW52YXNKc3giLCJtYXAiLCJub2RlIiwibGFzdENhdGVnb3J5IiwiaW5wdXRFbGVtZW50IiwiaXNTbGlkZXIiLCJzaG91bGRTYXZlQ2F0ZWdvcnkiLCJTaWduYWxWaWV3cyIsIlNldHRpbmdzSnN4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUdDLDhDQUFPLEVBQW5CLEMsQ0FFQTs7Q0FHQTs7Q0FJQTtBQUVBOztDQUdBOztBQUNBO0FBQ0E7QUFFQSxJQUFJQyxRQUFRLEdBQUc7QUFDWEMsY0FBWSxFQUFFLENBQUM7QUFDWEMsYUFBUyxFQUFFLEdBREE7QUFFWEMsU0FBSyxFQUFFLGtCQUZJO0FBR1hDLGVBQVcsRUFBRSxvRkFIRjtBQUlYQyxTQUFLLEVBQUU7QUFKSSxHQUFELEVBS1g7QUFDQ0gsYUFBUyxFQUFFLEdBRFo7QUFFQ0MsU0FBSyxFQUFFLGdCQUZSO0FBR0NDLGVBQVcsRUFBRSxxREFIZDtBQUlDQyxTQUFLLEVBQUU7QUFKUixHQUxXLENBREg7QUFZWEMsZUFBYSxFQUFFLG1CQUNKQyw2REFESSxxQkFJSkMsZ0VBSkksRUFaSjtBQW1CWEMsT0FBSyxFQUFFO0FBQ0hDLFNBQUssRUFBRTtBQUNIQyxjQUFRLEVBQUUsT0FEUDtBQUVIQyxjQUFRLEVBQUU7QUFGUDtBQURKLEdBbkJJO0FBeUJYQyxZQUFVLEVBQUUsb0JBQVVGLFFBQVYsRUFBb0JSLEtBQXBCLEVBQTJCQyxXQUEzQixFQUF3QztBQUNoRDtBQUNBLFFBQUlVLEtBQUssR0FBRyxDQUFaOztBQUVBLFNBQUssSUFBSUMsQ0FBVCxJQUFjLEtBQUtkLFlBQW5CLEVBQWlDO0FBQzdCLFVBQUllLFFBQVEsQ0FBQyxLQUFLZixZQUFMLENBQWtCYyxDQUFsQixFQUFxQmIsU0FBdEIsQ0FBUixHQUEyQ1ksS0FBL0MsRUFBc0RBLEtBQUssR0FBRyxLQUFLYixZQUFMLENBQWtCYyxDQUFsQixFQUFxQmIsU0FBN0I7QUFDekQ7O0FBRURZLFNBQUssR0FSMkMsQ0FVaEQ7O0FBQ0EsU0FBS2IsWUFBTCxDQUFrQmdCLElBQWxCLENBQXVCO0FBQ25CZixlQUFTLEVBQUVZLEtBRFE7QUFFbkJYLFdBQUssRUFBRUEsS0FGWTtBQUduQkMsaUJBQVcsRUFBRUEsV0FITTtBQUluQkMsV0FBSyxFQUFFTTtBQUpZLEtBQXZCO0FBT0EsU0FBS0wsYUFBTCxDQUFtQlcsSUFBbkIsbUJBQ09DLG9CQURQO0FBSUEsV0FBT0osS0FBUDtBQUNILEdBaERVO0FBaURYSyxhQUFXLEVBQUUscUJBQVVqQixTQUFWLEVBQXFCa0IsSUFBckIsRUFBMkI7QUFDcEMsUUFBTUMsaUJBQWlCLEdBQUc7QUFDdEJDLG9CQUFjLEVBQUVGLElBQUksQ0FBQ0UsY0FEQztBQUV0QkMsY0FBUSxFQUFFSCxJQUFJLENBQUNHLFFBRk87QUFHdEJDLHlCQUFtQixFQUFFSixJQUFJLENBQUNJLG1CQUhKO0FBSXRCQywwQkFBb0IsRUFBRUwsSUFBSSxDQUFDSTtBQUpMLEtBQTFCO0FBT0EsU0FBS2xCLGFBQUwsQ0FBbUJKLFNBQVMsR0FBRyxDQUEvQixJQUFvQ21CLGlCQUFwQztBQUNIO0FBMURVLENBQWY7QUE2REEsSUFBTUgsb0JBQW9CLEdBQUc7QUFDekJJLGdCQUFjLEVBQUUsRUFEUztBQUV6QkMsVUFBUSxFQUFFLEVBRmU7QUFHekJDLHFCQUFtQixFQUFFO0FBQ2pCRSxXQUFPLEVBQUUsSUFEUTtBQUVqQkMsWUFBUSxFQUFFLEVBRk87QUFHakJDLFVBQU0sRUFBRSxDQUhTO0FBSWpCQyxTQUFLLEVBQUUsQ0FKVTtBQUtqQkMsS0FBQyxFQUFFLENBTGM7QUFNakJDLEtBQUMsRUFBRSxDQU5jO0FBT2pCQyxhQUFTLEVBQUU7QUFQTSxHQUhJO0FBWXpCUCxzQkFBb0IsRUFBRSxLQVpHLENBZTdCOztBQWY2QixDQUE3QjtBQWdCQTNCLEdBQUcsQ0FBQ21DLEdBQUosQ0FBUWxDLDhDQUFPLENBQUNtQyxNQUFSLENBQWVDLFNBQVMsR0FBRyxnQkFBM0IsQ0FBUixFLENBRUE7O0FBQ0FyQyxHQUFHLENBQUNtQyxHQUFKLENBQVFHLDZDQUFNLENBQUMsTUFBRCxDQUFkLEUsQ0FFQTs7QUFDQXRDLEdBQUcsQ0FBQ3VDLEdBQUosQ0FBUSx1QkFBUixFQUFpQyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUMzQyxNQUFNckMsU0FBUyxHQUFHb0MsR0FBRyxDQUFDRSxNQUFKLENBQVdDLEVBQTdCO0FBQ0EsTUFBTTlCLFFBQVEsR0FBRzJCLEdBQUcsQ0FBQ0UsTUFBSixDQUFXN0IsUUFBNUI7QUFFQSxNQUFJLENBQUNYLFFBQVEsQ0FBQ1MsS0FBVCxDQUFlRSxRQUFmLENBQUwsRUFBK0I0QixHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQix3QkFBd0JoQyxRQUF4QixHQUFtQyxnQkFBeEQ7QUFFL0JpQywyQ0FBRSxDQUFDQyxRQUFILENBQVlDLDJDQUFJLENBQUNDLE9BQUwsQ0FBYVosU0FBYixFQUF3QixzQkFBeEIsQ0FBWixFQUE2RCxNQUE3RCxFQUFxRSxVQUFDYSxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNoRixRQUFJRCxHQUFKLEVBQVM7QUFDTEUsYUFBTyxDQUFDQyxLQUFSLENBQWNILEdBQWQ7QUFDQSxhQUFPVCxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixtQkFBckIsQ0FBUDtBQUNILEtBSitFLENBTWhGOzs7QUFDQU0sUUFBSSxHQUFHQSxJQUFJLENBQUNHLE9BQUwsQ0FDSCxpQkFERyxtQkFFT2xELFNBRlAsY0FBUDtBQUtBLFFBQUltRCxXQUFKOztBQUVBLFNBQUssSUFBSXRDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdmLFFBQVEsQ0FBQ0MsWUFBVCxDQUFzQnFELE1BQTFDLEVBQWtEdkMsQ0FBQyxFQUFuRCxFQUF1RDtBQUNuRCxVQUFNd0MsT0FBTyxHQUFHdkQsUUFBUSxDQUFDQyxZQUFULENBQXNCYyxDQUF0QixDQUFoQjs7QUFFQSxVQUFJd0MsT0FBTyxDQUFDbEQsS0FBUixJQUFpQk0sUUFBakIsSUFBNkI0QyxPQUFPLENBQUNyRCxTQUFSLElBQXFCQSxTQUF0RCxFQUFpRTtBQUM3RCxZQUFJc0QsR0FBRyxHQUFHeEMsUUFBUSxDQUFDZCxTQUFELENBQVIsR0FBc0IsQ0FBaEM7QUFDQW1ELG1CQUFXLHFCQUNKckQsUUFBUSxDQUFDTSxhQUFULENBQXVCa0QsR0FBdkIsQ0FESTtBQUVQQSxhQUFHLEVBQUV0RCxTQUZFO0FBR1BHLGVBQUssRUFBRU07QUFIQSxVQUFYO0FBS0g7QUFDSixLQXpCK0UsQ0EyQmhGOzs7QUFDQXNDLFFBQUksR0FBR0EsSUFBSSxDQUFDRyxPQUFMLENBQ0gsb0NBREcsK0RBRWlESyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsV0FBZixDQUZqRCx3RkFHaURJLElBQUksQ0FBQ0MsU0FBTCxDQUFlQywrQ0FBZixDQUhqRCxlQUFQO0FBTUFwQixPQUFHLENBQUNxQixTQUFKLENBQWMsY0FBZCxFQUE4QixXQUE5QjtBQUNBckIsT0FBRyxDQUFDSSxJQUFKLENBQVNNLElBQVQ7QUFDSCxHQXBDRDtBQXFDSCxDQTNDRCxFLENBNkNBOztBQUNBbkQsR0FBRyxDQUFDdUMsR0FBSixDQUFRLHVCQUFSLEVBQWlDLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzNDLE1BQU1yQyxTQUFTLEdBQUdvQyxHQUFHLENBQUNFLE1BQUosQ0FBV0MsRUFBN0I7QUFDQSxNQUFNOUIsUUFBUSxHQUFHMkIsR0FBRyxDQUFDRSxNQUFKLENBQVc3QixRQUE1QjtBQUVBLE1BQUksQ0FBQ1gsUUFBUSxDQUFDUyxLQUFULENBQWVFLFFBQWYsQ0FBTCxFQUErQjRCLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLHdCQUF3QmhDLFFBQXhCLEdBQW1DLGdCQUF4RDtBQUcvQixNQUFNa0QsY0FBYyxHQUFHQywrREFBYSxDQUFDOUQsUUFBUSxDQUFDTSxhQUFULENBQXVCSixTQUFTLEdBQUcsQ0FBbkMsQ0FBRCxDQUFwQztBQUVBcUMsS0FBRyxDQUFDcUIsU0FBSixDQUFjLGNBQWQsRUFBOEIsV0FBOUI7QUFDQXJCLEtBQUcsQ0FBQ3dCLEdBQUosQ0FBUUYsY0FBUjtBQUNILENBWEQsRSxDQWFBOztBQUNBL0QsR0FBRyxDQUFDdUMsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN2QkssMkNBQUUsQ0FBQ0MsUUFBSCxDQUFZQywyQ0FBSSxDQUFDQyxPQUFMLENBQWFaLFNBQWIsRUFBd0Isd0JBQXhCLENBQVosRUFBK0QsTUFBL0QsRUFBdUUsVUFBQ2EsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDbEYsUUFBSUQsR0FBSixFQUFTO0FBQ0xFLGFBQU8sQ0FBQ0MsS0FBUixDQUFjSCxHQUFkO0FBQ0EsYUFBT1QsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsbUJBQXJCLENBQVA7QUFDSCxLQUppRixDQU1sRjs7O0FBQ0FNLFFBQUksR0FBR0EsSUFBSSxDQUFDRyxPQUFMLENBQ0gsaUJBREcsNEJBQVA7QUFLQWIsT0FBRyxDQUFDcUIsU0FBSixDQUFjLGNBQWQsRUFBOEIsV0FBOUI7QUFDQXJCLE9BQUcsQ0FBQ3dCLEdBQUosQ0FBUWQsSUFBUjtBQUNILEdBZEQ7QUFlSCxDQWhCRDtBQWtCQW5ELEdBQUcsQ0FBQ3VDLEdBQUosQ0FBUSwwQkFBUixFQUFvQyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM5QyxNQUFNNUIsUUFBUSxHQUFHMkIsR0FBRyxDQUFDRSxNQUFKLENBQVc3QixRQUE1Qjs7QUFFQSxNQUFJWCxRQUFRLENBQUNTLEtBQVQsQ0FBZUUsUUFBZixDQUFKLEVBQThCO0FBQzFCLFFBQUlxRCxhQUFhLEdBQUcsRUFBcEI7O0FBQ0EsU0FBSyxJQUFJakQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2YsUUFBUSxDQUFDQyxZQUFULENBQXNCcUQsTUFBMUMsRUFBa0R2QyxDQUFDLEVBQW5ELEVBQXVEO0FBQ25ELFVBQUlmLFFBQVEsQ0FBQ0MsWUFBVCxDQUFzQmMsQ0FBdEIsRUFBeUJWLEtBQXpCLEtBQW1DTSxRQUF2QyxFQUNJcUQsYUFBYSxDQUFDL0MsSUFBZCxDQUFtQmpCLFFBQVEsQ0FBQ0MsWUFBVCxDQUFzQmMsQ0FBdEIsQ0FBbkI7QUFDUDs7QUFFRHdCLE9BQUcsQ0FBQ3FCLFNBQUosQ0FBYyxjQUFkLEVBQThCLGtCQUE5QjtBQUNBckIsT0FBRyxDQUFDd0IsR0FBSixDQUFRTixJQUFJLENBQUNDLFNBQUwsQ0FBZU0sYUFBZixDQUFSO0FBQ0gsR0FURCxNQVNPO0FBQ0h6QixPQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixtQ0FBK0NoQyxRQUEvQztBQUNIO0FBRUosQ0FoQkQ7QUFtQkFiLEdBQUcsQ0FBQ21DLEdBQUosQ0FBUWdDLGtEQUFVLENBQUM3QyxJQUFYLEVBQVI7QUFDQXRCLEdBQUcsQ0FBQ29FLElBQUosQ0FBUyxxQkFBVCxFQUFnQyxVQUFVNUIsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ2hEO0FBQ0EsTUFBTTVCLFFBQVEsR0FBRzJCLEdBQUcsQ0FBQ0UsTUFBSixDQUFXN0IsUUFBNUI7QUFDQSxNQUFNVCxTQUFTLEdBQUdvQyxHQUFHLENBQUNFLE1BQUosQ0FBV0MsRUFBN0I7QUFFQSxNQUFNMEIsV0FBVyxHQUFHN0IsR0FBRyxDQUFDOEIsSUFBeEI7QUFFQSxNQUFJLENBQUNwRSxRQUFRLENBQUNTLEtBQVQsQ0FBZUUsUUFBZixDQUFMLEVBQStCNEIsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsOEJBQTJDaEMsUUFBM0M7QUFFL0IsTUFBSSxDQUFDWCxRQUFRLENBQUNNLGFBQVQsQ0FBdUJKLFNBQVMsR0FBRyxDQUFuQyxDQUFMLEVBQTRDcUMsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsMkJBQXdDekMsU0FBeEM7QUFFNUNGLFVBQVEsQ0FBQ21CLFdBQVQsQ0FBcUJqQixTQUFyQixFQUFnQ2lFLFdBQWhDO0FBRUE1QixLQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCcUIsR0FBaEI7QUFFSCxDQWZEO0FBa0JBakUsR0FBRyxDQUFDdUMsR0FBSixDQUFRLDhDQUFSLEVBQXdELFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2xFLE1BQU01QixRQUFRLEdBQUcyQixHQUFHLENBQUNFLE1BQUosQ0FBVzdCLFFBQTVCO0FBQ0EsTUFBTVIsS0FBSyxHQUFHbUMsR0FBRyxDQUFDRSxNQUFKLENBQVdyQyxLQUF6QjtBQUNBLE1BQU1DLFdBQVcsR0FBR2tDLEdBQUcsQ0FBQ0UsTUFBSixDQUFXcEMsV0FBL0I7QUFFQSxNQUFJLENBQUNKLFFBQVEsQ0FBQ1MsS0FBVCxDQUFlRSxRQUFmLENBQUwsRUFBK0I0QixHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQiw4QkFBMkNoQyxRQUEzQztBQUUvQixNQUFJNkMsR0FBRyxHQUFHeEQsUUFBUSxDQUFDYSxVQUFULENBQW9CRixRQUFwQixFQUE4QlIsS0FBOUIsRUFBcUNDLFdBQXJDLENBQVY7QUFFQW1DLEtBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLG1CQUFnQ2hDLFFBQWhDLGNBQTRDNkMsR0FBNUM7QUFDSCxDQVZELEUsQ0FZQTs7QUFDQSxJQUFNYSxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWpDO0FBQ0ExRSxHQUFHLENBQUMyRSxNQUFKLENBQVdKLElBQVgsRUFBaUIsWUFBTTtBQUNuQm5CLFNBQU8sQ0FBQ3dCLEdBQVIsQ0FBWSx1Q0FBdUNMLElBQXZDLEdBQThDLElBQTFEO0FBQ0gsQ0FGRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5T0E7QUFBQTtBQUFBO0FBQUEsa0dBQWtHO0FBQ2xHLGtHQUFrRztBQUNsRyxnR0FBZ0c7QUFDaEcsMENBQTBDO0FBQzFDLG9GQUFvRjtBQUNwRixpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsd0ZBQXdGO0FBQ3hGLGtHQUFrRztBQUNsRyw2QkFBNkI7QUFFN0IsUUFBUTtBQUNSLDhGQUE4RjtBQUV2RDtBQUVoQyxJQUFNLGlCQUFpQixHQUFHLFVBQUMsR0FBVyxFQUFFLE1BQWM7SUFDekQsNkNBQTZDO0lBQzdDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDLEdBQUcsTUFBTSxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV6Qix3QkFBd0I7SUFDeEIsSUFBSSxJQUFJLEdBQXVCLEVBQUUsQ0FBQztJQUVsQyxZQUFZO0lBQ1osSUFBSSxLQUFLLEdBQXVCLEVBQUUsQ0FBQzs0QkFHM0IsQ0FBQztRQUNMLElBQU0sY0FBYyxHQUFxQixLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFbkMsNENBQTRDO1FBQzVDLElBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNiLHlCQUF5QjtZQUN6QixDQUFDLEVBQUUsQ0FBQztZQUNKLDRCQUE0QjtZQUM1QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFFbEIsc0NBQXNDO1lBQ3RDLE9BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtnQkFDaEIsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxFQUFFLENBQUM7YUFDUDtZQUVELElBQUcsUUFBUSxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO2dCQUN6QyxlQUFlO2FBQ2xCO2lCQUFNO2dCQUNILFFBQVEsR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFDO2FBQ2hDO1lBRUQsSUFBTSxlQUFlLEdBQXFCO2dCQUN0QyxJQUFJLEVBQUUsS0FBSztnQkFDWCxLQUFLLEVBQUUsUUFBUTtnQkFDZixJQUFJLEVBQUUsSUFBSTthQUNiO1lBRUQsSUFBRyxjQUFjLEVBQUU7Z0JBQ2YsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDOUI7NkJBbENELENBQUM7U0FxQ0o7UUFFRCxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUM5RixJQUFNLGVBQWUsR0FBcUI7Z0JBQ3RDLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFJLEVBQUUsSUFBSTthQUNiLENBQUM7WUFHRixJQUFHLGNBQWMsRUFBRTtnQkFDZiwyQ0FBMkM7Z0JBQzNDLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUM5QztpQkFBTTtnQkFDSCxrQ0FBa0M7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDOUI7NkJBdkRELENBQUM7U0EwREo7UUFFRCxpREFBaUQ7UUFDakQsSUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUM3QyxtREFBbUQ7WUFDbkQsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvQyx3Q0FBd0M7WUFDeEMsSUFBRyxTQUFTLEtBQUssS0FBSyxJQUFJLFNBQVMsS0FBSyxLQUFLLElBQUksU0FBUyxLQUFLLEtBQUssSUFBSSxTQUFTLEtBQUssS0FBSyxJQUFJLFNBQVMsS0FBSyxLQUFLLEVBQUU7Z0JBQ2hILGlDQUFpQztnQkFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFUCw4QkFBOEI7Z0JBQzlCLE9BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDaEIsQ0FBQyxFQUFFLENBQUM7b0JBRUosSUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTt3QkFDZCwyREFBMkQ7d0JBQzNELG9CQUFvQjt3QkFDcEIsMkRBQTJEO3dCQUMzRCxPQUFPLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7d0NBQ3JELElBQUk7cUJBQ2Q7aUJBQ0o7Z0JBRUQsZ0VBQWdFO2dCQUNoRSwyQkFBMkI7Z0JBRTNCLElBQU0sV0FBVyxHQUFxQjtvQkFDbEMsSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLElBQUksRUFBRSxFQUFFO2lCQUNYLENBQUM7Z0JBRUYsSUFBRyxjQUFjLEVBQUU7b0JBQ2YsMkNBQTJDO29CQUMzQyxJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDdkMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRTVDLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFFM0QsS0FBSyxDQUFDLElBQUksQ0FDTixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUMzQztpQkFDSjtxQkFBTTtvQkFDSCxrQ0FBa0M7b0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRXZCLEtBQUssQ0FBQyxJQUFJLENBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQ3hCLENBQUM7aUJBQ0w7aUNBN0dMLENBQUM7YUFrSEE7U0FDSjtRQUVELGlEQUFpRDtRQUNqRCxJQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDYixzQkFBc0I7WUFDdEIsSUFBTSxZQUFZLEdBQXFCO2dCQUNuQyxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsRUFBRTthQUNYO1lBRUQsSUFBRyxjQUFjLEVBQUU7Z0JBQ2YsMkNBQTJDO2dCQUMzQyxJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBRTdDLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFFM0QsS0FBSyxDQUFDLElBQUksQ0FDTixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUMzQyxDQUFDO2lDQXZJTixDQUFDO2FBMElBO2lCQUFNO2dCQUNILGtDQUFrQztnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFeEIsS0FBSyxDQUFDLElBQUksQ0FDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDeEIsQ0FBQztpQ0FoSk4sQ0FBQzthQW1KQTtTQUNKO1FBRUQsaURBQWlEO1FBQ2pELElBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNwQyxZQUFZO1lBRVosSUFBRyxjQUFjLEVBQUU7Z0JBQ2YsNkNBQTZDO2dCQUM3QyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7aUNBNUpoQixDQUFDO2FBOEpBO2lCQUFNO2dCQUNILGlEQUFpRDtnQkFDakQsK0JBQStCO2dCQUMvQixpREFBaUQ7Z0JBQ2pELE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztnQ0FDeEMsSUFBSTthQUNkO1NBQ0o7UUFFRCwwQ0FBMEM7UUFDMUMsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXpDLElBQUcsV0FBVyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDeEUsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBRXBCLHFDQUFxQztZQUNyQyxJQUFNLFFBQVEsR0FBRyxjQUFNLFFBQUMsV0FBVyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBMUUsQ0FBMEUsQ0FBQztZQUNsRyxJQUFNLEtBQUssR0FBRyxVQUFDLEtBQWEsSUFBSyxhQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUF4QixDQUF3QixDQUFDO1lBRTFELGtEQUFrRDtZQUNsRCxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFFMUIsT0FBTSxRQUFRLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFCLDJCQUEyQjtnQkFDM0IsSUFBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ1QsSUFBRyxhQUFhLEVBQUU7d0JBQ2QsMEVBQTBFO3dCQUMxRSxvQkFBb0I7d0JBQ3BCLHFEQUFxRDtxQkFDeEQ7eUJBQU07d0JBQ0gsc0NBQXNDO3dCQUN0QyxhQUFhLEdBQUcsSUFBSSxDQUFDO3FCQUN4QjtpQkFDSjtnQkFFRCwwQkFBMEI7Z0JBQzFCLENBQUMsRUFBRSxDQUFDO2dCQUNKLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEM7WUFFRCxJQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVoRCxJQUFNLGFBQWEsR0FBcUI7Z0JBQ3BDLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxlQUFlO2dCQUN0QixJQUFJLEVBQUUsSUFBSTthQUNiLENBQUM7WUFFRixJQUFHLGNBQWMsRUFBRTtnQkFDZiwyQ0FBMkM7Z0JBQzNDLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDSCxrQ0FBa0M7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDNUI7WUFFRCxDQUFDLEVBQUUsQ0FBQzs2QkF2TkosQ0FBQztTQTBOSjtrQkExTkcsQ0FBQzs7O0lBRFQsaUJBQWlCO0lBQ2pCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTs4QkFBeEIsQ0FBQztRQUFELENBQUM7OztLQTJOUjtJQUdELGdDQUFnQztJQUNoQyxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVBEO0FBRUE7QUFDQTs7QUFFQSxTQUFTTSxVQUFULENBQXFCQyxXQUFyQixFQUFrQztBQUM5QjtBQUNBLE1BQU1yRCxRQUFRLHFCQUFPcUQsV0FBVyxDQUFDckQsUUFBbkIsQ0FBZDs7QUFDQSxNQUFNRCxjQUFjLHNCQUFPc0QsV0FBVyxDQUFDdEQsY0FBbkIsQ0FBcEIsQ0FIOEIsQ0FLOUI7OztBQUNBLE1BQU11RCxHQUFHLEdBQUdDLHlEQUFNLENBQUN2RCxRQUFELENBQWxCO0FBQ0EsTUFBTXdELFNBQVMsR0FBR0MsNkVBQW9CLENBQUNILEdBQUQsQ0FBdEMsQ0FQOEIsQ0FTOUI7QUFDQTs7QUFFQSxNQUFNSSxXQUFXLEdBQUdDLDJFQUFlLENBQUMzRCxRQUFELEVBQVdELGNBQVgsQ0FBbkM7QUFDQSxNQUFJNkQsb0JBQW9CLEdBQUcsRUFBM0I7O0FBQ0EsT0FBSSxJQUFJQyxDQUFSLElBQWFILFdBQWIsRUFBMEI7QUFDdEIsUUFBR0csQ0FBQyxJQUFJLENBQVIsRUFBVztBQUNYRCx3QkFBb0IsSUFBSUYsV0FBVyxDQUFDRyxDQUFELENBQW5DO0FBQ0gsR0FqQjZCLENBbUI5QjtBQUVBOzs7QUFDQSxNQUFJQyxPQUFPLDBHQUFYO0FBQ0FBLFNBQU8sb0RBQVA7QUFDQUEsU0FBTyxpRkFBUDtBQUNBQSxTQUFPLDhFQUFQO0FBQ0FBLFNBQU8sMEVBQVAsQ0ExQjhCLENBNEI5Qjs7QUFDQUEsU0FBTyxzdkJBQVAsQ0E3QjhCLENBOEM5Qjs7QUFDQSxPQUFJLElBQUlDLENBQVIsSUFBYS9ELFFBQWIsRUFBdUI7QUFDbkIsUUFBRytELENBQUMsQ0FBQ0MsTUFBRixDQUFTLENBQVQsRUFBWSxDQUFaLE1BQW1CLEtBQXRCLEVBQTZCO0FBQ3pCRixhQUFPLHlDQUFQO0FBQ0E7QUFDSDtBQUNKOztBQUVEQSxTQUFPLHNCQUFlSixXQUFXLENBQUMsQ0FBRCxDQUExQixnQkFBUDtBQUNBSSxTQUFPLHNCQUFlRixvQkFBZixnQkFBUCxDQXZEOEIsQ0F5RDlCOztBQUNBLE1BQU1LLFlBQVksR0FBR1QsU0FBUyxDQUFDVSxLQUFWLENBQWdCLENBQWhCLEVBQW1CVixTQUFTLENBQUN6QixNQUFWLEdBQW1CLENBQXRDLElBQTJDK0IsT0FBM0MsR0FBcUQsUUFBMUUsQ0ExRDhCLENBNEQ5Qjs7QUFDQSxTQUFPRyxZQUFQO0FBQ0g7O0FBRU0sU0FBUzFCLGFBQVQsQ0FBd0JjLFdBQXhCLEVBQXFDO0FBQ3hDLFNBQU9ELFVBQVUsQ0FBQ0MsV0FBRCxDQUFqQjtBQUNILEM7Ozs7Ozs7Ozs7OztBQ3ZFRDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU2MsU0FBVCxDQUFvQkMsR0FBcEIsRUFBeUI7QUFDNUIsTUFBSUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNGLEdBQUQsQ0FBZCxDQUQ0QixDQUc1QjtBQUNBO0FBQ0E7O0FBQ0EsTUFBSUcsZUFBZSxHQUFHLEtBQXRCO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsS0FBdkI7QUFFQSxNQUFJQyxxQkFBcUIsR0FBRyxLQUE1QjtBQUNBLE1BQUlDLHFCQUFxQixHQUFHLEtBQTVCO0FBRUEsTUFBSUMsSUFBSjtBQUNBLE1BQUlDLEtBQUo7O0FBRUEsT0FBSyxJQUFJcEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzZFLENBQUMsQ0FBQ3RDLE1BQXRCLEVBQThCdkMsQ0FBQyxFQUEvQixFQUFtQztBQUMvQixRQUFJNkUsQ0FBQyxDQUFDN0UsQ0FBRCxDQUFELEtBQVMsR0FBVCxJQUFnQjZFLENBQUMsQ0FBQzdFLENBQUQsQ0FBRCxLQUFTLEdBQTdCLEVBQWtDO0FBQzlCO0FBQ0EsV0FBS21GLElBQUksR0FBR25GLENBQVosRUFBZSxDQUFDK0UsZUFBaEIsRUFBaUNJLElBQUksRUFBckMsRUFBeUM7QUFDckM7QUFDQSxZQUFJQSxJQUFJLElBQUksQ0FBWixFQUFlO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDSCxTQVBvQyxDQVNyQzs7O0FBQ0EsWUFBSU4sQ0FBQyxDQUFDTSxJQUFELENBQUQsS0FBWSxHQUFoQixFQUFxQjtBQUNqQixjQUFJRCxxQkFBSixFQUEyQjtBQUN2QjtBQUNBO0FBQ0FBLGlDQUFxQixHQUFHLEtBQXhCO0FBQ0E7QUFDSCxXQUxELE1BS087QUFDSDtBQUNBO0FBQ0g7QUFDSixTQXBCb0MsQ0FzQnJDO0FBQ0E7OztBQUNBLFlBQUlMLENBQUMsQ0FBQ00sSUFBRCxDQUFELEtBQVksR0FBaEIsRUFBcUJELHFCQUFxQixHQUFHLElBQXhCLENBeEJnQixDQTBCckM7QUFDQTs7QUFDQSxZQUFJTCxDQUFDLENBQUNNLElBQUQsQ0FBRCxLQUFZLEdBQVosSUFBbUJOLENBQUMsQ0FBQ00sSUFBRCxDQUFELEtBQVksR0FBbkMsRUFBd0M7QUFDcEMsY0FBSUQscUJBQUosRUFBMkI7QUFDdkI7QUFDQTtBQUNBO0FBQ0gsV0FKRCxNQUlPO0FBQ0g7QUFDQUMsZ0JBQUk7QUFDSkosMkJBQWUsR0FBRyxJQUFsQjtBQUNBO0FBQ0g7QUFDSjtBQUNKLE9BMUM2QixDQTRDOUI7OztBQUNBLFdBQUtLLEtBQUssR0FBR3BGLENBQWIsRUFBZ0IsQ0FBQ2dGLGdCQUFqQixFQUFtQ0ksS0FBSyxFQUF4QyxFQUE0QztBQUN4QztBQUNBLFlBQUlBLEtBQUssSUFBSVAsQ0FBQyxDQUFDdEMsTUFBZixFQUF1QjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNILFNBUHVDLENBU3hDOzs7QUFDQSxZQUFJc0MsQ0FBQyxDQUFDTyxLQUFELENBQUQsS0FBYSxHQUFqQixFQUFzQjtBQUNsQixjQUFJSCxxQkFBSixFQUEyQjtBQUN2QjtBQUNBO0FBQ0FBLGlDQUFxQixHQUFHLEtBQXhCO0FBQ0E7QUFDSCxXQUxELE1BS087QUFDSDtBQUNBO0FBQ0g7QUFDSixTQXBCdUMsQ0FzQnhDO0FBQ0E7OztBQUNBLFlBQUlKLENBQUMsQ0FBQ08sS0FBRCxDQUFELEtBQWEsR0FBakIsRUFBc0JILHFCQUFxQixHQUFHLElBQXhCOztBQUV0QixZQUFJSixDQUFDLENBQUNPLEtBQUQsQ0FBRCxLQUFhLEdBQWIsSUFBb0JQLENBQUMsQ0FBQ08sS0FBRCxDQUFELEtBQWEsR0FBckMsRUFBMEM7QUFDdEMsY0FBSUgscUJBQUosRUFBMkI7QUFDdkI7QUFDQTtBQUNBO0FBQ0gsV0FKRCxNQUlPO0FBQ0g7QUFDQUQsNEJBQWdCLEdBQUcsSUFBbkI7QUFDQTtBQUNIO0FBRUo7QUFDSixPQW5GNkIsQ0FxRjlCOzs7QUFDQSxVQUFJRCxlQUFlLElBQUlDLGdCQUF2QixFQUF5QztBQUNyQztBQUNBLFlBQUlLLEdBQUcsR0FBR1IsQ0FBQyxDQUFDSCxLQUFGLENBQVEsQ0FBUixFQUFXUyxJQUFYLENBQVY7QUFDQSxZQUFJRyxHQUFHLEdBQUdULENBQUMsQ0FBQ0gsS0FBRixDQUFRUyxJQUFSLEVBQWNDLEtBQWQsQ0FBVjtBQUNBLFlBQUlHLEtBQUssR0FBR1YsQ0FBQyxDQUFDSCxLQUFGLENBQVFVLEtBQVIsRUFBZVAsQ0FBQyxDQUFDdEMsTUFBakIsQ0FBWixDQUpxQyxDQU1yQztBQUNBOztBQUNBc0MsU0FBQyxHQUFHUSxHQUFHLEdBQUcsR0FBTixHQUFZQyxHQUFaLEdBQWtCLEdBQWxCLEdBQXdCQyxLQUE1QjtBQUNILE9BL0Y2QixDQWlHOUI7OztBQUNBUixxQkFBZSxHQUFHLEtBQWxCO0FBQ0FDLHNCQUFnQixHQUFHLEtBQW5CO0FBQ0g7QUFDSjs7QUFFRCxTQUFPSCxDQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDNUtEO0FBQUE7QUFBQTtBQWFvQztBQUVwQyxJQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyxxQkFBcUI7QUFDOUMsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsNENBQTRDO0FBQ2hFLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLGdEQUFnRDtBQUUzRCxTQUFTLGVBQWUsQ0FBQyxRQUF3QixFQUFFLGNBQTJCO0lBQ2pGLHlGQUF5RjtJQUN6RixJQUFJLFFBQVEsR0FBYSxFQUFFLENBQUM7SUFDNUIsSUFBSSxVQUFVLEdBQUcsb0JBQW9CLENBQUM7SUFFdEMsNEJBQTRCO0lBQzVCLFVBQVUsSUFBSSxxUEFPWCxDQUFDO0lBRUosMkRBQTJEO0lBQzNELElBQUksZUFBZSxHQUFhLEVBQUUsQ0FBQztJQUVuQyxvQkFBb0I7SUFDcEIsSUFBSSxVQUFVLEdBQUc7UUFDYixXQUFXLEVBQUUsQ0FBQztRQUNkLGlCQUFpQixFQUFFLDRFQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLHNCQUFzQixFQUFFLGNBQWMsQ0FBQyxNQUFNO1FBQzdDLFNBQVMsRUFBRSxDQUFDO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYixDQUFDO0lBRUYsZ0VBQWdFO0lBQzVELGtHQU91QixFQU52Qix3Q0FBaUIsRUFDakIsd0JBQVMsRUFDVCxvQkFBTyxFQUNQLHNCQUFRLEVBQ1IsY0FBSSxFQUNKLGtDQUN1QixDQUFDO0lBRTVCLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pELElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pELElBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFELGdEQUFnRDtRQUNoRCxJQUFNLFNBQVMsR0FBRyxVQUFVLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QyxJQUFNLFFBQVEsR0FBRyxVQUFVLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM1QyxVQUFVLElBQUksMEVBQVEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUM3RCxVQUFVLElBQUkscUJBQXFCO1FBRW5DLFVBQVUsSUFBSSwrREFDVyxTQUFTLGdFQUVuQixDQUFDO0tBQ25CO1NBQU07UUFDSCxxQkFBcUI7UUFDckIsVUFBVSxJQUFJLDBFQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0tBQ3pGO0lBRUQsSUFBRyw0RUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUMvQixVQUFVLElBQUkscUJBQXFCLENBQUM7UUFDcEMsS0FBSSxJQUFJLE9BQU8sSUFBSSxjQUFjLEVBQUU7WUFDL0IsSUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLElBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRS9DLFVBQVUsSUFBSSwrRUFBYSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsRCxlQUFlLENBQUMsSUFBSSxDQUFJLE9BQU8sU0FBSSxTQUFXLENBQUM7U0FDbEQ7UUFFRCxVQUFVLElBQUksbUZBQWlCLEVBQUUsQ0FBQztLQUNyQztJQUVELDBDQUEwQztJQUMxQyxJQUFJLG1CQUFtQixHQUFHLGdGQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUU1RCxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQztJQUUxRCwyQkFBMkI7SUFDM0IsSUFBSSxVQUFVLEdBQUcsbUJBQW1CLENBQUMsVUFBVSxDQUFDO0lBRWhELFVBQVUsSUFBSSwwRkFBd0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVuRCxLQUFLLElBQUksQ0FBQyxJQUFJLFVBQVUsRUFBRTtRQUN0QixLQUFLLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDakMsZUFBZSxDQUFDLElBQUksQ0FBSSxDQUFDLFNBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFPLENBQUM7U0FDakU7S0FDSjtJQUVELHlFQUF5RTtJQUN6RSxxRUFBcUU7SUFDckUsMkVBQTJFO0lBRTNFLHVDQUF1QztJQUN2Qyw4REFBOEQ7SUFDOUQsS0FBSztJQUVMLDZHQUE2RztJQUM3RywyQkFBMkI7SUFFM0IseUNBQXlDO0lBQ3pDLGlGQUFpRjtJQUNqRixnQ0FBZ0M7SUFDaEMsdUhBQXVIO0lBQ3ZILHNHQUFzRztJQUN0RyxvRUFBb0U7SUFDcEUscUNBQXFDO0lBQ3JDLG1EQUFtRDtJQUNuRCw2REFBNkQ7SUFDN0QsdURBQXVEO0lBQ3ZELDhHQUE4RztJQUM5RywwR0FBMEc7SUFDMUcsNkZBQTZGO0lBQzdGLHFCQUFxQjtJQUNyQiw4SkFBOEo7SUFDOUosd0lBQXdJO0lBQ3hJLGlIQUFpSDtJQUNqSCx1REFBdUQ7SUFDdkQscURBQXFEO0lBQ3JELHlCQUF5QjtJQUN6QixxREFBcUQ7SUFDckQsMkRBQTJEO0lBQzNELHVFQUF1RTtJQUd2RSxxRUFBcUU7SUFDckUsS0FBSSxJQUFJLE9BQU8sSUFBSSxPQUFPLEVBQUU7UUFDeEIsb0NBQW9DO1FBQ3BDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUUvQyxVQUFVLElBQUksK0JBQTRCLE9BQU8sdURBQzNDLE9BQU8sR0FBRyxTQUFTLG9JQUdNLE9BQU8sa0ZBRWpDLENBQUM7UUFDTixVQUFVLElBQUksU0FBTyxPQUFPLEdBQUcsU0FBUyxpQ0FBNEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQU0sQ0FBQztRQUU3RyxlQUFlLENBQUMsSUFBSSxDQUFJLE9BQU8sU0FBSSxTQUFXLENBQUMsQ0FBQztRQUVoRCxPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsdUZBQXVGO0lBQ3ZGLEtBQUssVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsNEVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFFMUYsc0NBQXNDO1FBQ3RDLEtBQUssSUFBSSxPQUFPLElBQUksaUJBQWlCLEVBQUU7WUFDbkMsb0NBQW9DO1lBQ3BDLElBQU0sV0FBVyxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRS9DLHNFQUFzRTtZQUN0RSxJQUFJLENBQUMscUZBQW1CLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztnQkFBRSxTQUFTO1lBRWpHLElBQUksNEJBQTRCLEdBQWEsRUFBRSxDQUFDO1lBRWhELDBEQUEwRDtZQUMxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELElBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUMvQyw2REFBNkQ7Z0JBQzdELElBQUksK0VBQWEsQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxFQUFFO29CQUNwRCw0QkFBNEIsQ0FBQyxJQUFJLENBQUksT0FBTyxTQUFJLFNBQVcsQ0FBQyxDQUFDO29CQUM3RCxTQUFTO2lCQUNaO2dCQUVELDBEQUEwRDtnQkFDdEQsMklBQXlGLEVBQXZGLFlBQUcsRUFBRSxnQ0FBa0YsQ0FBQztnQkFDOUYsSUFBSSxhQUFhLEVBQUU7b0JBQ2YsVUFBVSxJQUFJLEdBQUcsQ0FBQztvQkFFbEIsZUFBZSxDQUFDLElBQUksQ0FBSSxPQUFPLFNBQUksU0FBVyxDQUFDLENBQUM7aUJBQ25EO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQW1DLE9BQU8sV0FBTSxTQUFTLDBCQUF1QixDQUFDO2lCQUNsRzthQUNKO1lBRUQsSUFBSSw0QkFBNEIsQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BFLE9BQU8saUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDckM7U0FDSjtLQUNKO0lBRUQsNkNBQTZDO0lBRTdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUIsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUVoQixVQUFVLElBQUksdUJBQXVCLENBQUM7SUFFdEMsSUFBSSxpQkFBaUIsR0FBRyxtVUFLbkIsQ0FBQztJQUVOLElBQUksZ0JBQWdCLEdBQUcsbVVBS2xCLENBQUM7NEJBR0csQ0FBQztRQUNOLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsQyxJQUFJLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUU3QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDMUMsOEpBQW9ILEVBQWxILDRCQUFXLEVBQUUsa0NBQXFHLENBQUM7WUFFM0gsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQU8sVUFBVSxpQkFBYyxDQUFDLENBQUM7WUFDM0QsbUJBQW1CLENBQUMsSUFBSSxDQUFJLFVBQVUsa0JBQWEsV0FBVyxHQUFHLGNBQWMsZUFBWSxDQUFDLENBQUM7U0FDaEc7UUFFRCxJQUFJLHdCQUF3QixHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLHVCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUVqQyxLQUFJLElBQUksQ0FBQyxJQUFJLG9CQUFvQixFQUFFO1lBQy9CLHdCQUF3QixJQUFJLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsS0FBSSxJQUFJLENBQUMsSUFBSSxtQkFBbUIsRUFBRTtZQUM5Qix1QkFBdUIsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUkscUJBQXFCLEdBQU0sd0JBQXdCLDJFQUU3Qyx1QkFBdUIsb0JBQzNCLENBQUM7UUFFUCxJQUFJLFFBQVEsR0FBTyxZQUFZLENBQUMsUUFBUSxTQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFPLEVBQUUsQ0FBQztZQUM1RixJQUFNLFVBQVUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNoRCxPQUFPLGdDQUNPLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxnR0FFdEIsT0FBTyxDQUFDLEtBQUssa0NBQ3JCLFVBQVUsd0JBQ3BCO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztRQUMvQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxvQkFBb0IsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUMzQixvQkFBb0IsSUFBSSxHQUFHO2FBQzlCO2lCQUFNO2dCQUNILG9CQUFvQixJQUFJLEdBQUc7YUFDOUI7U0FDSjtRQUVELFVBQVUsSUFBSSx5QkFDRixDQUFDLHlCQUNQLHFCQUFxQiw2QkFDZCxDQUFDLHlCQUFvQixvQkFBb0IsOEJBQ3pDLENBQUMsMENBQ0UsQ0FBQyxpY0FTdUIsQ0FBQyx5RUFDQSxDQUFDLCtRQUlILENBQUMsOEJBQXlCLENBQUMsZ0NBQTJCLENBQUMsNkRBRXpFLENBQUMsd0tBSTBCLENBQUMsb1RBVTNDLHFCQUFxQiw2SkFJcUMsb0JBQW9CLGtUQUtuRCxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxrQ0FDcEUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLCtGQUU3RSxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDhDQUMzRixVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGtEQUN0RixVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLHlEQUVqRSwwQ0FBb0MsWUFBWSxDQUFDLEtBQUssd0ZBSXZELENBQUMsMkJBQ1osQ0FBQztRQUVILGlCQUFpQixJQUFJLFlBQVUsQ0FBQyxxSkFJWixDQUFDLHVEQUNBLENBQUMsb0NBQ2xCLENBQUM7UUFDTCxnQkFBZ0IsSUFBSSxZQUFVLENBQUMsK0xBSVgsQ0FBQyw0Q0FHWixDQUFDLGtCQUFlO1FBRXpCLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUIsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7SUE5SHBCLDJCQUEyQjtJQUMzQixLQUFLLElBQUksQ0FBQyxJQUFJLFNBQVM7Z0JBQWQsQ0FBQztLQThIVDtJQUVELFVBQVUsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLENBQUM7SUFDekMsVUFBVSxJQUFJLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztJQUV4QywwQkFBMEI7SUFDMUIsS0FBSSxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7UUFDbkIsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLDRKQUFtSCxFQUFqSCw0QkFBVyxFQUFFLGtDQUFvRyxDQUFDO1FBRTFILFVBQVUsSUFBSSxlQUFhLENBQUMsa0dBRXVCLFdBQVcsR0FBRyxjQUFjLGthQVd2QyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsdUhBSW5FLENBQUMsaUVBQ0QsQ0FBQyw2RkFFa0MsQ0FBQywrZkFrQjdCLFdBQVcsR0FBRyxjQUFjLCtjQVlSLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx5ZUFZNUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLHFaQVd2QyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLG1IQUdoQyxZQUFZLENBQUMsS0FBSyxvVUFTOUIsQ0FBQywyQkFDWixDQUFDO0tBQ047SUFFRCxVQUFVLElBQUksTUFBTTtJQUNwQixVQUFVLElBQUksV0FBVztJQUV6QixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFCLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFFaEIsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RjRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkU7QUFDbkM7QUFFeEMsK0VBQStFO0FBQ3hFLFNBQVMsYUFBYSxDQUFFLFFBQXdCO0lBUW5ELElBQUksWUFBWSxHQUFtQixFQUFFLENBQUM7SUFDdEMsSUFBSSxNQUFNLEdBQW1CLEVBQUUsQ0FBQztJQUNoQyxJQUFJLE9BQU8sR0FBbUIsRUFBRSxDQUFDO0lBQ2pDLElBQUksUUFBUSxHQUFtQixFQUFFLENBQUM7SUFDbEMsSUFBSSxTQUFTLEdBQW1CLEVBQUUsQ0FBQztJQUNuQyxJQUFJLGNBQWMsR0FBbUIsRUFBRSxDQUFDO0lBRXhDLEtBQUksSUFBSSxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ25CLDJCQUEyQjtRQUMzQixJQUFNLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9GLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUM3QyxJQUFNLFVBQVUsR0FBRyxJQUFJLElBQUksc0JBQXNCLENBQUM7UUFFbEQseUJBQXlCO1FBQ3pCLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQztRQUVuRCw4QkFBOEI7UUFDOUIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDO1FBRS9DLDZCQUE2QjtRQUM3QixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUM7UUFFakQsbUNBQW1DO1FBQ25DLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFdBQVcsQ0FBQztRQUUzRCxnQkFBZ0I7UUFDaEIsSUFBRyxPQUFPLEVBQUU7WUFDUixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO2FBQU0sSUFBRyxVQUFVLEVBQUU7WUFDbEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QjthQUFNLElBQUcsS0FBSyxFQUFFO1lBQ2IsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjthQUFNLElBQUcsTUFBTSxFQUFFO1lBQ2QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjthQUFNLElBQUcsV0FBVyxFQUFFO1lBQ25CLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNILFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7S0FDSjtJQUVELGlCQUFpQjtJQUNqQixPQUFPO1FBQ0gsaUJBQWlCLEVBQUUsWUFBWTtRQUMvQixTQUFTLEVBQUUsTUFBTTtRQUNqQixPQUFPLEVBQUUsT0FBTztRQUNoQixRQUFRLEVBQUUsUUFBUTtRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLGNBQWMsRUFBRSxjQUFjO0tBQ2pDLENBQUM7QUFDTixDQUFDO0FBRUQsaUNBQWlDO0FBQzFCLFNBQVMsNEJBQTRCLENBQUUsY0FBMkI7SUFDckUsSUFBSSxvQkFBb0IsR0FBdUMsRUFBRSxDQUFDO0lBRWxFLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNDLElBQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDeEQsSUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUVwRCxJQUFNLHNCQUFzQixHQUFHLGNBQWMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDdEYsSUFBTSxvQkFBb0IsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBRWhGLG9CQUFvQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsb0JBQW9CLENBQUM7S0FDdkU7SUFFRCxPQUFPLG9CQUFvQixDQUFDO0FBQ2hDLENBQUM7QUFFRCx3QkFBd0I7QUFDakIsU0FBUyxVQUFVLENBQUUsR0FBVztJQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixLQUFJLElBQUksQ0FBQyxJQUFJLEdBQUc7UUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixPQUFPLENBQUMsRUFBRSxDQUFDO0FBQ2YsQ0FBQztBQUVELHVDQUF1QztBQUNoQyxTQUFTLGFBQWEsQ0FBQyxlQUF5QixFQUFFLE9BQWUsRUFBRSxTQUFpQjtJQUN2RixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1Qyx3RUFBd0U7UUFDeEUsSUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckMsSUFBRyxjQUFjLEtBQUssT0FBTyxJQUFJLGdCQUFnQixLQUFLLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQztLQUNoRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxnRUFBZ0U7QUFDekQsU0FBUyx1QkFBdUIsQ0FDbkMsY0FBMkIsRUFDM0IsY0FBb0QsRUFDcEQsZUFBcUQ7SUFFckQsSUFBRyxjQUFjLEVBQUU7UUFDZiwrQ0FBK0M7UUFFL0MsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXBDLDJCQUEyQjtZQUMzQixJQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxLQUFLLGNBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzFELElBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEtBQUssY0FBYyxDQUFDLFNBQVMsRUFBRTtvQkFDaEUsT0FBTzt3QkFDSCxXQUFXLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNO3dCQUMxQyxjQUFjLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTO3FCQUNuRDtpQkFDSjthQUNKO1NBQ0o7S0FDSjtTQUFNLElBQUksZUFBZSxFQUFFO1FBQ3hCLHFFQUFxRTtRQUVyRSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFNLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFcEMsMkZBQTJGO1lBRTNGLHlCQUF5QjtZQUN6QixJQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pELElBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLFNBQVMsRUFBRTtvQkFDL0QsT0FBTzt3QkFDSCxXQUFXLEVBQUUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNO3dCQUM1QyxjQUFjLEVBQUUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTO3FCQUNyRDtpQkFDSjthQUNKO1NBQ0o7S0FDSjtJQUVELE9BQU87UUFDSCxXQUFXLEVBQUUsSUFBSTtRQUNqQixjQUFjLEVBQUUsSUFBSTtLQUN2QjtBQUNMLENBQUM7QUFFRCwySEFBMkg7QUFDcEgsU0FBUyxtQkFBbUIsQ0FBQyxNQUFjLEVBQUUsTUFBd0IsRUFBRSxjQUEyQixFQUFFLGVBQXlCO0lBQ2hJLElBQUksSUFBSSxHQUFjLEVBQUUsQ0FBQztJQUV6QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFFbEIsc0dBQTJILEVBQTFILDRCQUFXLEVBQUUsa0NBQTZHLENBQUM7UUFFbEksNEJBQTRCO1FBQzVCLElBQUcsV0FBVyxJQUFJLGNBQWMsRUFBRTtZQUM5QiwwQkFBMEI7WUFDMUIsSUFBRyxhQUFhLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsRUFBRTtnQkFDNUQsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN0QjtTQUNKO2FBQU07WUFDSCxnQ0FBZ0M7WUFDaEMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDMUI7SUFFRCxLQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNmLElBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7S0FDN0I7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQsb0RBQW9EO0FBQzdDLFNBQVMsZUFBZSxDQUMzQixNQUFjLEVBQ2QsU0FBaUIsRUFDakIsV0FBdUIsRUFDdkIsY0FBMkI7SUFFM0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRVgsSUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUV4RCxpQ0FBaUM7SUFDakMsSUFBRyxXQUFXLEtBQUssUUFBUSxFQUFFO1FBQ3pCLElBQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUQsa0JBQWtCO1FBQ2xCLElBQU0sTUFBTSxHQUFHLDZFQUFpQixDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFaEUsdUJBQXVCO1FBQ3ZCLENBQUMsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFaEUsY0FBYztRQUNkLENBQUMsSUFBSSw0REFBUyxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXRELE9BQU87WUFDSCxHQUFHLEVBQUUsQ0FBQztZQUNOLGFBQWEsRUFBRSxJQUFJO1NBQ3RCO0tBQ0o7SUFFRCxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRWhELElBQUcsT0FBTyxLQUFLLFFBQVEsRUFBRTtRQUNyQixDQUFDLElBQUksaUJBQWlCLENBQUMsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hGLENBQUMsSUFBSSxTQUFPLE1BQU0sR0FBRyxTQUFTLG9DQUErQixNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLFNBQU0sQ0FBQztRQUU5RyxPQUFPO1lBQ0gsR0FBRyxFQUFFLENBQUM7WUFDTixhQUFhLEVBQUUsSUFBSTtTQUN0QjtLQUNKO0lBRUQsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUVwRCxJQUFHLFNBQVMsS0FBSyxRQUFRLEVBQUU7UUFDdkIsQ0FBQyxJQUFJLFNBQU8sTUFBTSxHQUFHLFNBQVMsb0NBQStCLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxTQUFNLENBQUM7UUFFekcsT0FBTztZQUNILEdBQUcsRUFBRSxDQUFDO1lBQ04sYUFBYSxFQUFFLElBQUk7U0FDdEI7S0FDSjtJQUVELE9BQU87UUFDSCxHQUFHLEVBQUUsRUFBRTtRQUNQLGFBQWEsRUFBRSxLQUFLO0tBQ3ZCO0FBQ0wsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLE9BQWUsRUFBRSxJQUFnQixFQUFFLElBQXdCLEVBQUUsY0FBMkI7SUFDM0csSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBRXZCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDdkIsSUFBTSxPQUFPLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXBFLDZEQUE2RDtZQUM3RCxJQUFHLE9BQU8sS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLE1BQU07Z0JBQUUsU0FBUztZQUVwRCw2REFBNkQ7WUFDN0Qsa0JBQWtCO1lBQ2xCLElBQUksUUFBUSxHQUFXLE9BQU8sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFbkQsOERBQThEO1lBQzlELElBQUcsUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDdEIsT0FBTztnQkFDUCxhQUFhLElBQUksaUJBQWlCLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUUxRix3RUFBd0U7Z0JBRXhFLGdFQUFnRTtnQkFDaEUsU0FBUzthQUNaO1lBRUQsaUVBQWlFO1lBQ2pFLHNCQUFzQjtZQUN0QixJQUFJLFlBQVksR0FBVyxXQUFXLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRTNELHNHQUFzRztZQUN0RyxJQUFHLFlBQVksS0FBSyxRQUFRLEVBQUU7Z0JBQzFCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBRWhELElBQU0sTUFBTSxHQUFHLDZFQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRTNELGFBQWEsSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBRXRFLDJCQUEyQjtnQkFDM0IsYUFBYSxJQUFJLDREQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBRTdELDRFQUE0RTtnQkFFNUUsNkJBQTZCO2dCQUM3QixTQUFTO2FBQ1o7WUFFRCwrREFBK0Q7WUFDL0Qsb0JBQW9CO1lBQ3BCLElBQUksVUFBVSxHQUFXLFNBQVMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFdkQsbURBQW1EO1lBQ25ELElBQUcsVUFBVSxLQUFLLFFBQVEsRUFBRTtnQkFDeEIsMEVBQTBFO2dCQUMxRSxhQUFhLElBQUksU0FBTyxPQUFPLEdBQUcsWUFBWSxvQ0FBK0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLFVBQU8sQ0FBQztnQkFDcEgsU0FBUzthQUNaO1lBRUQsd0VBQXdFO1lBQ3hFLDRDQUE0QztZQUM1QyxhQUFhLElBQUkscUZBQWtGLE9BQU8sV0FBTSxPQUFPLFdBQU8sQ0FBQztTQUNsSTthQUFNLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDM0QsYUFBYSxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDL0U7S0FDSjtJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3pCLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLElBQWdCLEVBQUUsY0FBMkIsRUFBRSxPQUFlLEVBQUUsVUFBa0IsRUFBRSxLQUFhO0lBQ3hILElBQUksYUFBcUIsQ0FBQztJQUMxQixJQUFNLFlBQVksR0FBRztRQUNqQixNQUFNLEVBQUUsT0FBTztRQUNmLFNBQVMsRUFBRSxVQUFVO0tBQ3hCO0lBRUcsb0VBQTJGLEVBQTFGLDRCQUFXLEVBQUUsa0NBQTZFLENBQUM7SUFFaEcsdUdBQXVHO0lBRXZHLHVCQUF1QjtJQUN2QixJQUFHLFdBQVcsSUFBSSxjQUFjLEVBQUU7UUFDOUIsUUFBUTtRQUNSLGFBQWEsR0FBRyxTQUFPLE9BQU8sR0FBRyxVQUFVLG9DQUErQixXQUFXLEdBQUcsY0FBYyxlQUFZLENBQUM7S0FDdEg7U0FBTTtRQUNILHFCQUFxQjtRQUNyQixhQUFhLEdBQUcsU0FBTyxPQUFPLEdBQUcsVUFBVSxvQ0FBK0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLFNBQU07S0FDN0c7SUFFRCxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUUsSUFBZ0IsRUFBRSxVQUFrQjtJQUNsRCxpQ0FBaUM7SUFDakMsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1osS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLHdDQUF3QztZQUN4QyxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTtnQkFDcEMsT0FBTyxDQUFDLENBQUM7YUFDWjtTQUNKO0tBQ0o7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsSUFBZ0IsRUFBRSxVQUFrQjtJQUNyRCxrQkFBa0I7SUFDbEIsSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2hCLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQUU7b0JBQ3hDLE9BQU8sQ0FBQyxDQUFDO2lCQUNaO2FBQ0o7U0FDSjtLQUNKO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLElBQWdCLEVBQUUsVUFBa0I7SUFDbkQsa0JBQWtCO0lBQ2xCLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNkLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTtnQkFDdEMsT0FBTyxDQUFDLENBQUM7YUFDWjtTQUNKO0tBQ0o7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBRU0sU0FBUyxjQUFjLENBQUMsUUFBd0I7SUFDbkQsSUFBSSxhQUFhLEdBQW1CLEVBQUUsQ0FBQztJQUN2QyxJQUFJLGtCQUFrQixHQUFtQixFQUFFLENBQUM7SUFFNUMsS0FBSSxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7UUFDbkIsSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxZQUFZLEVBQUU7WUFDakMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO0tBQ0o7SUFFRCxPQUFPO1FBQ0gsaUJBQWlCLEVBQUUsYUFBYTtRQUNoQyxVQUFVLEVBQUUsa0JBQWtCO0tBQ2pDO0FBQ0wsQ0FBQztBQUVNLFNBQVMsUUFBUSxDQUFDLEtBQWEsRUFBRSxJQUFZLEVBQUUsSUFBWTtJQUM5RCxPQUFPLG9FQUVXLEtBQUssY0FBUyxJQUFJLGFBQVEsSUFBSSx5RUFJMUM7QUFDVixDQUFDO0FBRU0sU0FBUyx3QkFBd0IsQ0FBQyxLQUFxQjtJQUMxRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFWCxLQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtRQUNoQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEIsSUFBSSxXQUFXLFNBQW1CLENBQUM7UUFDbkMsSUFBSSxhQUFhLFNBQW1CLENBQUM7UUFFckMsb0JBQW9CO1FBQ3BCLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLGFBQWEsRUFBRTtnQkFDekMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEM7aUJBQU0sSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7Z0JBQzFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUM7YUFDMUQ7U0FDSjtRQUVELElBQUksWUFBWSxHQUFHLGtCQUFnQixDQUFDLG1EQUNMLGFBQWEsQ0FBQyxLQUFLLHdSQU9wQyxDQUFDLG1DQUE4QixVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQywrQkFDNUQsQ0FBQyxtQ0FBOEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsNkhBTTNDLGFBQWEsQ0FBQyxLQUFLLDRtQkFhcEMsQ0FBQyxpQ0FBNEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsK0JBQzFELENBQUMsaUNBQTRCLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLHVRQVN6RCxDQUFDLDhDQUNELENBQUMsaUNBQ1osQ0FBQztRQUVMLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN2QixDQUFDLElBQUksU0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLGdCQUFhLENBQUM7WUFDbkQsQ0FBQyxJQUFJLGtCQUFnQixDQUFDLGdCQUFhLENBQUM7WUFHcEMsQ0FBQyxJQUFJLFNBQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxtQ0FBOEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxjQUFXO1NBQzFHO1FBRUQsQ0FBQyxJQUFJLFlBQVksQ0FBQztLQUNyQjtJQUVELE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVNLFNBQVMsYUFBYSxDQUFDLElBQWdCLEVBQUUsT0FBZTtJQUMzRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUVwQyxRQUFRLElBQUksRUFBRTtRQUNWLEtBQUssWUFBWSxDQUFDLENBQUM7WUFDZixPQUFPLFNBQU8sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxnRUFBMkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQUksQ0FBQztTQUNuSztRQUVELE9BQU8sQ0FBQyxDQUFDO1lBQ0wsT0FBTyxTQUFPLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssOENBQXlDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFJLENBQUM7U0FDako7S0FDSjtBQUNMLENBQUM7QUFFTSxTQUFTLGlCQUFpQjtJQUM3QixPQUFPLHdNQUtRO0FBQ25CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbGZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTVyxTQUFULENBQW9CQyxNQUFwQixFQUE0QkMsWUFBNUIsRUFBMENDLFVBQTFDLEVBQXNEO0FBQ3pELE1BQUlDLGdCQUFnQixpQkFBVUgsTUFBVixTQUFtQkMsWUFBbkIsZ0NBQXBCO0FBRUFFLGtCQUFnQixJQUFJQyxhQUFhLG9CQUFLRixVQUFMLEVBQWpDO0FBRUEsU0FBT0MsZ0JBQWdCLEdBQUcsTUFBMUI7QUFDSDs7QUFFRCxTQUFTQyxhQUFULENBQXVCeEYsSUFBdkIsRUFBNkI7QUFDekIsTUFBSXVGLGdCQUFnQixHQUFHLEVBQXZCO0FBRUEsTUFBR3ZGLElBQUksSUFBSSxJQUFYLEVBQWlCLE9BQU8sRUFBUDs7QUFFakIsT0FBSSxJQUFJTCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdLLElBQUksQ0FBQ2tDLE1BQXhCLEVBQWdDdkMsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQztBQUNBLFFBQU04RixLQUFLLEdBQUd6RixJQUFJLENBQUNMLENBQUQsQ0FBbEI7QUFDQSxRQUFNK0YsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQW5CO0FBQ0EsUUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNFLEtBQXBCLENBSmlDLENBTWpDOztBQUNBLFFBQUdELElBQUksSUFBSSxPQUFSLElBQW1CQSxJQUFJLElBQUksTUFBOUIsRUFBc0M7QUFDbEM7QUFFQSxVQUFHQyxLQUFLLEtBQUssSUFBYixFQUFtQjtBQUNmSix3QkFBZ0IsSUFBSSxTQUFwQjtBQUNILE9BRkQsTUFFTyxJQUFJRyxJQUFJLEtBQUssS0FBVCxJQUFrQkMsS0FBSyxLQUFLLE1BQWhDLEVBQXdDO0FBQzNDSix3QkFBZ0IsY0FBT0ksS0FBUCxXQUFoQjtBQUNILE9BRk0sTUFFQTtBQUNISix3QkFBZ0IsSUFBSUksS0FBcEI7QUFDSDtBQUNKLEtBVkQsTUFVTyxJQUFJRCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUN4QjtBQUVBLFVBQUdDLEtBQUssS0FBSyxLQUFiLEVBQW9CO0FBQ2hCO0FBQ0FKLHdCQUFnQixJQUFJLFdBQXBCO0FBQ0FBLHdCQUFnQixJQUFJQyxhQUFhLENBQUNDLEtBQUssQ0FBQ0csSUFBUCxDQUFqQztBQUNBTCx3QkFBZ0IsSUFBSSxHQUFwQjtBQUNILE9BTEQsTUFLTyxJQUFHSSxLQUFLLEtBQUssS0FBYixFQUFvQjtBQUN2QjtBQUNBSix3QkFBZ0IsSUFBSSxXQUFwQjtBQUNBQSx3QkFBZ0IsSUFBSUMsYUFBYSxDQUFDQyxLQUFLLENBQUNHLElBQVAsQ0FBakM7QUFDQUwsd0JBQWdCLElBQUksR0FBcEI7QUFDSCxPQUxNLE1BS0EsSUFBR0ksS0FBSyxLQUFLLEtBQWIsRUFBb0I7QUFDdkI7QUFDQUosd0JBQWdCLElBQUksV0FBcEI7QUFDQUEsd0JBQWdCLElBQUlDLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDRyxJQUFQLENBQWpDO0FBQ0FMLHdCQUFnQixJQUFJLEdBQXBCO0FBQ0gsT0FMTSxNQUtBLElBQUdJLEtBQUssS0FBSyxLQUFiLEVBQW9CO0FBQ3ZCSix3QkFBZ0IsSUFBSSxXQUFwQjtBQUNBQSx3QkFBZ0IsSUFBSUMsYUFBYSxDQUFDQyxLQUFLLENBQUNHLElBQVAsQ0FBakM7QUFDQUwsd0JBQWdCLElBQUksR0FBcEI7QUFDSCxPQUpNLE1BSUEsSUFBR0ksS0FBSyxLQUFLLEtBQWIsRUFBb0I7QUFDdkJKLHdCQUFnQixJQUFJLFdBQXBCO0FBQ0FBLHdCQUFnQixJQUFJQyxhQUFhLENBQUNDLEtBQUssQ0FBQ0csSUFBUCxDQUFqQztBQUNBTCx3QkFBZ0IsSUFBSSxHQUFwQjtBQUNILE9BSk0sTUFJQTtBQUNIO0FBQ0F6RCxlQUFPLENBQUNDLEtBQVIsQ0FBYywrQkFBZDtBQUNIO0FBQ0osS0E5Qk0sTUE4QkE7QUFDSDtBQUVBd0Qsc0JBQWdCLElBQUksTUFBTUMsYUFBYSxDQUFDQyxLQUFLLENBQUNHLElBQVAsQ0FBbkIsR0FBa0MsR0FBdEQ7QUFDSDtBQUNKOztBQUVELFNBQU9MLGdCQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDMUVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsSUFBTU0sTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsYUFBRCxFQUFnQkMsVUFBaEIsRUFBK0I7QUFDMUM7QUFDQTtBQUNBLE1BQU1DLG1CQUFtQixHQUFJRixhQUFhLEdBQUcsQ0FBaEIsSUFBcUJDLFVBQVUsR0FBRyxDQUEvRDtBQUVBLE1BQU1FLGdCQUFnQixHQUFHRixVQUFVLEdBQUMsQ0FBWCxJQUFnQixDQUF6QztBQUVBLHlpQ0E0Q01DLG1CQUFtQiwySEFJZixFQWhEViwyYkEyRU0sQ0FBQ0MsZ0JBQUQsSUFBcUJGLFVBQVUsR0FBRyxDQUFsQyx3Q0FBb0VBLFVBQXBFLGVBQW1GRyxVQUFVLENBQUMsTUFBSUgsVUFBTCxDQUFWLENBQTJCSSxPQUEzQixDQUFtQyxDQUFuQyxDQUFuRixzRkFFOEJKLFVBQVUsR0FBQyxDQUZ6QyxxREEzRU4sdUJBK0VNQyxtQkFBbUIsMkJBQTJCLEVBL0VwRCw0QkFrRkVBLG1CQUFtQiwwb0NBdURsQixFQXpJSDtBQTBJRixDQWpKRjs7QUFtSk8sU0FBU3RDLE1BQVQsQ0FBaUIwQyxLQUFqQixFQUF3QjtBQUMzQixNQUFJQyxXQUFXLEdBQUcsRUFBbEIsQ0FEMkIsQ0FHM0I7O0FBQ0EsT0FBSSxJQUFJQyxHQUFSLElBQWVGLEtBQWYsRUFBc0I7QUFDbEIsUUFBSUcsV0FBVyxHQUFHSCxLQUFLLENBQUNFLEdBQUQsQ0FBdkI7O0FBRUEsUUFBRzdCLE1BQU0sQ0FBQzZCLEdBQUQsQ0FBTixDQUFZbkMsTUFBWixDQUFtQixDQUFuQixFQUFzQixDQUF0QixNQUE2QixPQUE3QixJQUF3Q00sTUFBTSxDQUFDNkIsR0FBRCxDQUFOLENBQVluQyxNQUFaLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLE1BQTZCLEtBQXhFLEVBQStFO0FBQzNFb0MsaUJBQVcsQ0FBQ2xGLEVBQVosR0FBaUJpRixHQUFqQjtBQUNBRCxpQkFBVyxDQUFDeEcsSUFBWixDQUFpQjBHLFdBQWpCO0FBQ0g7QUFDSjs7QUFFRCxNQUFJQyxhQUFhLEdBQUcsRUFBcEI7QUFDQSxNQUFJQyxVQUFVLEdBQUcsRUFBakI7O0FBR0EsT0FBSSxJQUFJSCxJQUFSLElBQWVGLEtBQWYsRUFBc0I7QUFDbEIsUUFBSUcsWUFBVyxHQUFHSCxLQUFLLENBQUNFLElBQUQsQ0FBdkI7QUFFQSxRQUFNSSxzQkFBc0IsR0FBR2pDLE1BQU0sQ0FBQzZCLElBQUQsQ0FBTixDQUFZbkMsTUFBWixDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QndDLFdBQXpCLE9BQTJDbEMsTUFBTSxDQUFDNkIsSUFBRCxDQUFOLENBQVluQyxNQUFaLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQTFFO0FBQ0EsUUFBTXlDLElBQUksR0FBR25DLE1BQU0sQ0FBQzZCLElBQUQsQ0FBTixDQUFZbkMsTUFBWixDQUFtQixDQUFuQixFQUFzQixDQUF0QixNQUE2QixJQUExQztBQUNBLFFBQU0wQyxVQUFVLEdBQUdELElBQUksSUFBSUYsc0JBQTNCOztBQUVBLFFBQUdHLFVBQUgsRUFBZTtBQUNYLFVBQUlDLG9CQUFvQixHQUFHLEtBQTNCO0FBRUEsVUFBTUMsZUFBZSxHQUFHUixZQUFXLENBQUNTLFFBQVosQ0FBcUIsQ0FBckIsRUFBd0JyQixLQUFoRDs7QUFFQSxXQUFJLElBQUlzQixDQUFSLElBQWFSLFVBQWIsRUFBeUI7QUFDckIsWUFBR0EsVUFBVSxDQUFDUSxDQUFELENBQVYsSUFBaUJGLGVBQXBCLEVBQXFDO0FBQ2pDRCw4QkFBb0IsR0FBRyxJQUF2QjtBQUNBO0FBQ0g7QUFDSjs7QUFFRCxVQUFHLENBQUNBLG9CQUFKLEVBQTBCO0FBQ3RCTCxrQkFBVSxDQUFDNUcsSUFBWCxDQUFnQmtILGVBQWhCO0FBQ0g7O0FBRURSLGtCQUFXLENBQUNsRixFQUFaLEdBQWlCaUYsSUFBakI7QUFDQUUsbUJBQWEsQ0FBQzNHLElBQWQsQ0FBbUIwRyxZQUFuQjtBQUNIO0FBQ0o7O0FBRURDLGVBQWEsQ0FBQ1UsSUFBZCxDQUFtQixVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUM5QixRQUFNQyxJQUFJLEdBQUdGLENBQUMsQ0FBQ0gsUUFBRixDQUFXLENBQVgsRUFBY3JCLEtBQTNCO0FBQ0EsUUFBTTJCLElBQUksR0FBR0YsQ0FBQyxDQUFDSixRQUFGLENBQVcsQ0FBWCxFQUFjckIsS0FBM0I7O0FBRUEsUUFBRzBCLElBQUksS0FBS0MsSUFBWixFQUFrQjtBQUNkLFVBQU1DLE1BQU0sR0FBRzNILFFBQVEsQ0FBQ3VILENBQUMsQ0FBQ0gsUUFBRixDQUFXLENBQVgsRUFBY3JCLEtBQWYsQ0FBdkI7QUFDQSxVQUFNNkIsTUFBTSxHQUFHNUgsUUFBUSxDQUFDd0gsQ0FBQyxDQUFDSixRQUFGLENBQVcsQ0FBWCxFQUFjckIsS0FBZixDQUF2QjtBQUVBLGFBQU80QixNQUFNLEdBQUdDLE1BQWhCO0FBQ0gsS0FMRCxNQUtPO0FBQ0gsVUFBTUMsTUFBTSxHQUFHLENBQUNKLElBQUQsRUFBT0MsSUFBUCxDQUFmO0FBQ0FHLFlBQU0sQ0FBQ1AsSUFBUDs7QUFFQSxVQUFHTyxNQUFNLENBQUMsQ0FBRCxDQUFOLEtBQWNKLElBQWpCLEVBQXVCO0FBQ25CLGVBQU8sQ0FBQyxDQUFSO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxDQUFQO0FBQ0g7QUFDSjtBQUNKLEdBbkJELEVBN0MyQixDQWtFM0I7O0FBRUFaLFlBQVUsQ0FBQ1MsSUFBWDtBQUVBLE1BQUlRLGdCQUFnQixHQUFHLEVBQXZCOztBQUVBLE9BQUksSUFBSVQsRUFBUixJQUFhUixVQUFiLEVBQXlCO0FBQ3JCLFNBQUksSUFBSXpDLENBQVIsSUFBYXdDLGFBQWIsRUFBNEI7QUFDeEIsVUFBTUQsYUFBVyxHQUFHQyxhQUFhLENBQUN4QyxDQUFELENBQWpDOztBQUNBLFVBQUd1QyxhQUFXLENBQUNTLFFBQVosQ0FBcUIsQ0FBckIsRUFBd0JyQixLQUF4QixLQUFrQ2MsVUFBVSxDQUFDUSxFQUFELENBQS9DLEVBQW9EO0FBQ2hEUyx3QkFBZ0IsQ0FBQzdILElBQWpCLENBQXNCMEcsYUFBdEI7QUFDQSxlQUFPQyxhQUFhLENBQUN4QyxDQUFELENBQXBCO0FBQ0g7QUFDSjtBQUNKLEdBaEYwQixDQWtGM0I7OztBQUNBLE1BQU0yRCxTQUFTLEdBQUd0QixXQUFXLENBQUNuRSxNQUFaLEdBQXFCLENBQXJCLEdBQXlCbUUsV0FBVyxDQUFDdUIsR0FBWixDQUFnQixVQUFBQyxJQUFJLEVBQUk7QUFDL0QsV0FBUTtBQUFLLGVBQVMsRUFBRSxrQkFBaEI7QUFBb0MsU0FBRyxFQUFFQSxJQUFJLENBQUN4RztBQUE5QyxPQUNKO0FBQVEsZUFBUyxFQUFDLGdCQUFsQjtBQUNnQixRQUFFLFlBQUt3RyxJQUFJLENBQUN4RyxFQUFWO0FBRGxCLE1BREksQ0FBUjtBQUtILEdBTjBDLENBQXpCLEdBTWIsSUFOTDtBQVFBLE1BQUl5RyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxNQUFNZCxRQUFRLEdBQUdVLGdCQUFnQixDQUFDeEYsTUFBakIsR0FBMEIsQ0FBMUIsR0FBOEJ3RixnQkFBZ0IsQ0FBQ0UsR0FBakIsQ0FBcUIsVUFBQUMsSUFBSSxFQUFJO0FBQ3hFLFFBQUlFLFlBQUo7QUFDQSxRQUFJQyxRQUFRLEdBQUcsS0FBZjtBQUNBLFFBQUlDLGtCQUFrQixHQUFHLEtBQXpCO0FBRUEsUUFBTWxCLGVBQWUsR0FBR2MsSUFBSSxDQUFDYixRQUFMLENBQWMsQ0FBZCxFQUFpQnJCLEtBQXpDOztBQUVBLFFBQUdtQyxZQUFZLEtBQUtmLGVBQXBCLEVBQXFDO0FBQ2pDa0Isd0JBQWtCLEdBQUcsSUFBckI7QUFDQUgsa0JBQVksR0FBR2YsZUFBZjtBQUNIOztBQUVELFFBQUdjLElBQUksQ0FBQ3hHLEVBQUwsQ0FBUThDLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLE1BQXlCLFVBQTVCLEVBQXdDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTRELGtCQUFZLEdBQUk7QUFBUSxZQUFJLEVBQUUsUUFBZDtBQUNRLFVBQUUsRUFBRUYsSUFBSSxDQUFDeEcsRUFBTCxHQUFRLE9BRHBCO0FBRVEsb0JBQVksRUFBRXdHLElBQUksQ0FBQ2IsUUFBTCxDQUFjLENBQWQsRUFBaUJyQixLQUZ2QztBQUdRLFdBQUcsRUFBRWtDLElBQUksQ0FBQ2IsUUFBTCxDQUFjLENBQWQsRUFBaUJyQixLQUg5QjtBQUlRLFdBQUcsRUFBRWtDLElBQUksQ0FBQ2IsUUFBTCxDQUFjLENBQWQsRUFBaUJyQixLQUo5QjtBQUtRLFlBQUksRUFBRWtDLElBQUksQ0FBQ2IsUUFBTCxDQUFjLENBQWQsRUFBaUJyQixLQUwvQjtBQU1RLGdCQUFRLEVBQUU7QUFObEIsUUFBaEI7QUFPSCxLQWhCRCxNQWdCTyxJQUFHa0MsSUFBSSxDQUFDeEcsRUFBTCxDQUFROEMsTUFBUixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsTUFBeUIsVUFBNUIsRUFBd0M7QUFDM0M2RCxjQUFRLEdBQUcsSUFBWCxDQUQyQyxDQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBRCxrQkFBWSxHQUFJO0FBQVEsWUFBSSxFQUFFLE9BQWQ7QUFDUSxVQUFFLEVBQUVGLElBQUksQ0FBQ3hHLEVBQUwsR0FBUSxPQURwQjtBQUVRLG9CQUFZLEVBQUV3RyxJQUFJLENBQUNiLFFBQUwsQ0FBYyxDQUFkLEVBQWlCckIsS0FGdkM7QUFHUSxXQUFHLEVBQUVrQyxJQUFJLENBQUNiLFFBQUwsQ0FBYyxDQUFkLEVBQWlCckIsS0FIOUI7QUFJUSxXQUFHLEVBQUVrQyxJQUFJLENBQUNiLFFBQUwsQ0FBYyxDQUFkLEVBQWlCckIsS0FKOUI7QUFLUSxZQUFJLEVBQUVrQyxJQUFJLENBQUNiLFFBQUwsQ0FBYyxDQUFkLEVBQWlCckIsS0FML0I7QUFNUSxnQkFBUSxFQUFFO0FBTmxCLFFBQWhCO0FBT0gsS0FqQk0sTUFpQkE7QUFDSDtBQUNBb0Msa0JBQVksR0FBRyx3RUFBTSxrQkFBTixDQUFmO0FBQ0g7O0FBRUQsUUFBR0Usa0JBQUgsRUFBdUI7QUFDbkIsYUFDSSwyREFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBZ0IsV0FBRyxFQUFFSixJQUFJLENBQUN4RyxFQUFMLEdBQVUwRjtBQUEvQixTQUNJO0FBQUksaUJBQVMsRUFBRTtBQUFmLFNBQStDQSxlQUEvQyxDQURKLEVBRUk7QUFBSSxpQkFBUyxFQUFFLGlDQUFpQ2lCLFFBQVEsR0FBRyx5QkFBSCxHQUErQixFQUF4RSxDQUFmO0FBQ0ksVUFBRSxFQUFFSCxJQUFJLENBQUN4RztBQURiLFNBRUk7QUFBSSxpQkFBUyxFQUFFLGtDQUFmO0FBQ0ksVUFBRSxFQUFFd0csSUFBSSxDQUFDeEcsRUFBTCxHQUFVO0FBRGxCLFNBQzRCd0csSUFBSSxDQUFDYixRQUFMLENBQWMsQ0FBZCxFQUFpQnJCLEtBRDdDLENBRkosRUFJS29DLFlBSkwsRUFLS0MsUUFBUSxHQUFHO0FBQUssVUFBRSxFQUFFSCxJQUFJLENBQUN4RyxFQUFMLEdBQVE7QUFBakIsU0FBK0J3RyxJQUFJLENBQUNiLFFBQUwsQ0FBYyxDQUFkLEVBQWlCckIsS0FBaEQsQ0FBSCxHQUFrRSxJQUwvRSxDQUZKLENBREo7QUFZSCxLQWJELE1BYU87QUFDSCxhQUFRO0FBQUksaUJBQVMsRUFBRSxpQ0FBaUNxQyxRQUFRLEdBQUcseUJBQUgsR0FBK0IsRUFBeEUsQ0FBZjtBQUNJLFVBQUUsRUFBRUgsSUFBSSxDQUFDeEcsRUFEYjtBQUVJLFdBQUcsRUFBRXdHLElBQUksQ0FBQ3hHO0FBRmQsU0FHSjtBQUFJLGlCQUFTLEVBQUUsa0NBQWY7QUFBbUQsVUFBRSxFQUFFd0csSUFBSSxDQUFDeEcsRUFBTCxHQUFVO0FBQWpFLFNBQTJFd0csSUFBSSxDQUFDYixRQUFMLENBQWMsQ0FBZCxFQUFpQnJCLEtBQTVGLENBSEksRUFJSG9DLFlBSkcsRUFLSEMsUUFBUSxHQUFHO0FBQUssVUFBRSxFQUFFSCxJQUFJLENBQUN4RyxFQUFMLEdBQVE7QUFBakIsU0FBK0J3RyxJQUFJLENBQUNiLFFBQUwsQ0FBYyxDQUFkLEVBQWlCckIsS0FBaEQsQ0FBSCxHQUFrRSxJQUx2RSxDQUFSO0FBT0g7QUFDSixHQXhFOEMsQ0FBOUIsR0F3RVosSUF4RUwsQ0E1RjJCLENBc0szQjs7QUFDQSxNQUFNdUMsV0FBVyxHQUFHUCxTQUFTLEdBRXJCO0FBQUssTUFBRSxFQUFDO0FBQVIsS0FDS0EsU0FETCxDQUZxQixHQUtyQixJQUxSO0FBT0EsTUFBTVEsV0FBVyxHQUFHbkIsUUFBUSxHQUVwQjtBQUFLLE1BQUUsRUFBQztBQUFSLEtBQ0k7QUFBSSxNQUFFLEVBQUU7QUFBUixLQUNLQSxRQURMLENBREosQ0FGb0IsR0FPcEIsSUFQUjtBQVNBLFNBQ0k7QUFBSyxNQUFFLEVBQUU7QUFBVCxLQUNJO0FBQUssTUFBRSxFQUFFO0FBQVQsS0FDSTtBQUFLLE1BQUUsRUFBRSxxQkFBVDtBQUFnQyxhQUFTLEVBQUU7QUFBM0MsWUFESixFQUVJO0FBQUssTUFBRSxFQUFFLHlCQUFUO0FBQW9DLGFBQVMsRUFBRTtBQUEvQyx1QkFGSixFQUdJO0FBQUssTUFBRSxFQUFFLHdCQUFUO0FBQW1DLGFBQVMsRUFBRTtBQUE5QyxzQkFISixDQURKLEVBTUk7QUFBSyxNQUFFLEVBQUU7QUFBVCxLQUNJLDBFQUFRbkIsTUFBTSxDQUFDNkIsZ0JBQWdCLENBQUN4RixNQUFsQixFQUEwQm1FLFdBQVcsQ0FBQ25FLE1BQXRDLENBQWQsQ0FESixFQUVLaUcsV0FGTCxFQUdLRCxXQUhMLENBTkosQ0FESjtBQWNILEM7Ozs7Ozs7Ozs7O0FDMVZELHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIvaW5kZXguanNcIik7XG4iLCIvLyBCYXNlIEltcG9ydHNcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbi8vIFNlcnZlciBTZXR1cFxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJ1xuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbi8vIE1pZGRsZXdhcmVcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuXG4vLyBEYXRhIFBhcnNpbmdcbmltcG9ydCB7XG4gICAgcmVuZGVyU2lnbmFsc1xufSBmcm9tICcuL3JlbmRlcmVyJ1xuLy8gaW1wb3J0IHRlc3RNb2RlbCBmcm9tICcuL3Rlc3RNb2RlbC5qc29uJ1xuXG4vLyBMaWJyYXJ5IG5vZGVzXG5pbXBvcnQgbGlicmFyeU5vZGVzIGZyb20gJy4vbGlicmFyeU5vZGVzLmpzb24nXG5cbi8vIFByb2plY3QgcHJlc2V0c1xuaW1wb3J0IG1vZHVsYXRpb24gZnJvbSAnLi9wcm9qZWN0X3ByZXNldHMvbW9kdWxhdGlvbi5qc29uJ1xuaW1wb3J0IGZvdXJpZXJTZXJpZXMgZnJvbSAnLi9wcm9qZWN0X3ByZXNldHMvZm91cmllclNlcmllcy5qc29uJ1xuXG5sZXQgZGF0YWJhc2UgPSB7XG4gICAgcHJvamVjdHNJbmZvOiBbe1xuICAgICAgICBwcm9qZWN0SWQ6IFwiMVwiLFxuICAgICAgICB0aXRsZTogXCJBTS9GTSBNb2R1bGF0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNob3dzIG9uZSBzaWduYWwgbW9kdWxhdGVkIG92ZXIgb3RoZXIgKGNhcnJpZXIpIHNpZ25hbCB1c2luZyBBTSBhbmQgRk0gbW9kdWxhdGlvbi5cIixcbiAgICAgICAgb3duZXI6IFwiYWRtaW5cIlxuICAgIH0sIHtcbiAgICAgICAgcHJvamVjdElkOiBcIjJcIixcbiAgICAgICAgdGl0bGU6IFwiRm91cmllciBTZXJpZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQXR0ZW1wdCBhdCBjcmVhdGluZyBmb3VyaWVyIHNlcmllcyB1c2luZyB0aGlzIHRvb2wuXCIsXG4gICAgICAgIG93bmVyOiBcImFkbWluXCJcbiAgICB9XSxcbiAgICBwcm9qZWN0TW9kZWxzOiBbe1xuICAgICAgICAgICAgLi4ubW9kdWxhdGlvblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAuLi5mb3VyaWVyU2VyaWVzXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHVzZXJzOiB7XG4gICAgICAgIGFkbWluOiB7XG4gICAgICAgICAgICB1c2VybmFtZTogXCJhZG1pblwiLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiYWRtaW5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBuZXdQcm9qZWN0OiBmdW5jdGlvbiAodXNlcm5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICAvLyBGaW5kIG5ldyBpZFxuICAgICAgICBsZXQgbmV3SWQgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wcm9qZWN0c0luZm8pIHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLnByb2plY3RzSW5mb1tpXS5wcm9qZWN0SWQpID4gbmV3SWQpIG5ld0lkID0gdGhpcy5wcm9qZWN0c0luZm9baV0ucHJvamVjdElkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3SWQrKztcblxuICAgICAgICAvLyBBZGQgbmV3IHByb2plY3kgaW5mb1xuICAgICAgICB0aGlzLnByb2plY3RzSW5mby5wdXNoKHtcbiAgICAgICAgICAgIHByb2plY3RJZDogbmV3SWQsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvd25lcjogdXNlcm5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9qZWN0TW9kZWxzLnB1c2goe1xuICAgICAgICAgICAgLi4ucHJvamVjdE1vZGVsVGVtcGxhdGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0lkO1xuICAgIH0sXG4gICAgc2F2ZVByb2plY3Q6IGZ1bmN0aW9uIChwcm9qZWN0SWQsIGpzb24pIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFZlcnNpb24gPSB7XG4gICAgICAgICAgICBhbGxDb25uZWN0aW9uczoganNvbi5hbGxDb25uZWN0aW9ucyxcbiAgICAgICAgICAgIGFsbE5vZGVzOiBqc29uLmFsbE5vZGVzLFxuICAgICAgICAgICAgY29tcG9zZXJDb29yZGluYXRlczoganNvbi5jb21wb3NlckNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgaXNDcmVhdGluZ0Nvbm5lY3Rpb246IGpzb24uY29tcG9zZXJDb29yZGluYXRlc1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9qZWN0TW9kZWxzW3Byb2plY3RJZCAtIDFdID0gbmV3UHJvamVjdFZlcnNpb247XG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0TW9kZWxUZW1wbGF0ZSA9IHtcbiAgICBhbGxDb25uZWN0aW9uczogW10sXG4gICAgYWxsTm9kZXM6IHt9LFxuICAgIGNvbXBvc2VyQ29vcmRpbmF0ZXM6IHtcbiAgICAgICAgZm9jdXNlZDogdHJ1ZSxcbiAgICAgICAgZ3JpZFNpemU6IDUwLFxuICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgIHdpZHRoOiAxLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB6b29tTGV2ZWw6IDFcbiAgICB9LFxuICAgIGlzQ3JlYXRpbmdDb25uZWN0aW9uOiBmYWxzZVxufVxuXG4vLyBTdGF0aWMgZmlsZXNcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy9wdWJsaWMvc3RhdGljJykpXG5cbi8vIExvZ2dpbmdcbmFwcC51c2UobW9yZ2FuKCd0aW55JykpO1xuXG4vLyAtLS0gUk9VVEVTIC0tLVxuYXBwLmdldCgnL2VkaXRvci86dXNlcm5hbWUvOmlkJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gcmVxLnBhcmFtcy5pZDtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG5cbiAgICBpZiAoIWRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkgcmVzLnN0YXR1cyg0MjApLnNlbmQoXCJVc2VyIHdpdGggdXNlcm5hbWUgXCIgKyB1c2VybmFtZSArIFwiIGRvZXNuJ3QgZXhpc3RcIik7XG5cbiAgICBmcy5yZWFkRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wdWJsaWMvZWRpdG9yLmh0bWwnKSwgJ3V0ZjgnLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdBbiBlcnJvciBvY2N1cnJlZCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGl0bGVcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgIFwiPHRpdGxlPjwvdGl0bGU+XCIsXG4gICAgICAgICAgICBgPHRpdGxlPiR7cHJvamVjdElkfTwvdGl0bGU+YFxuICAgICAgICApXG5cbiAgICAgICAgbGV0IHByb2plY3REYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YWJhc2UucHJvamVjdHNJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZGF0YWJhc2UucHJvamVjdHNJbmZvW2ldO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdC5vd25lciA9PSB1c2VybmFtZSAmJiBwcm9qZWN0LnByb2plY3RJZCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGlkID0gcGFyc2VJbnQocHJvamVjdElkKSAtIDE7XG4gICAgICAgICAgICAgICAgcHJvamVjdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGFiYXNlLnByb2plY3RNb2RlbHNbcGlkXSxcbiAgICAgICAgICAgICAgICAgICAgcGlkOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiB1c2VybmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBkYXRhXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICAnPHNjcmlwdCBpZD1cImVkaXRvci1kYXRhXCI+PC9zY3JpcHQ+JyxcbiAgICAgICAgICAgIGA8c2NyaXB0IGlkPVwicHJvamVjdC1kYXRhXCI+ZG9jdW1lbnQucHJvamVjdERhdGEgPSAke0pTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKX08L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgaWQ9XCJsaWJyYXJ5LWRhdGFcIj5kb2N1bWVudC5saWJyYXJ5Tm9kZXMgPSAke0pTT04uc3RyaW5naWZ5KGxpYnJhcnlOb2Rlcyl9PC9zY3JpcHQ+YFxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgICAgICByZXMuc2VuZChkYXRhKTtcbiAgICB9KVxufSk7XG5cbi8vIERlZmF1bHQgdGVzdCB2aXN1YWxpc2F0aW9uXG5hcHAuZ2V0KCcvcmVuZGVyLzp1c2VybmFtZS86aWQnLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcblxuICAgIGlmICghZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSByZXMuc3RhdHVzKDQyMCkuc2VuZChcIlVzZXIgd2l0aCB1c2VybmFtZSBcIiArIHVzZXJuYW1lICsgXCIgZG9lc24ndCBleGlzdFwiKTtcblxuXG4gICAgY29uc3QgcmVuZGVyZWRTdHJpbmcgPSByZW5kZXJTaWduYWxzKGRhdGFiYXNlLnByb2plY3RNb2RlbHNbcHJvamVjdElkIC0gMV0pO1xuXG4gICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgIHJlcy5lbmQocmVuZGVyZWRTdHJpbmcpO1xufSlcblxuLy8gRm9yIG5vdywgbGFuZGluZyBwYWdlIGlzIHRoZSBwcm9qZWN0cyBwYWdlLlxuYXBwLmdldChcIi9cIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgZnMucmVhZEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vcHVibGljL3Byb2plY3RzLmh0bWwnKSwgJ3V0ZjgnLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdBbiBlcnJvciBvY2N1cnJlZCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGl0bGVcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgIFwiPHRpdGxlPjwvdGl0bGU+XCIsXG4gICAgICAgICAgICBgPHRpdGxlPlByb2plY3RzPC90aXRsZT5gXG4gICAgICAgIClcblxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgICAgIHJlcy5lbmQoZGF0YSk7XG4gICAgfSlcbn0pXG5cbmFwcC5nZXQoXCIvcHJvamVjdHMvaW5mby86dXNlcm5hbWVcIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lO1xuXG4gICAgaWYgKGRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkge1xuICAgICAgICBsZXQgcHJvamVjdHNBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFiYXNlLnByb2plY3RzSW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFiYXNlLnByb2plY3RzSW5mb1tpXS5vd25lciA9PT0gdXNlcm5hbWUpXG4gICAgICAgICAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKGRhdGFiYXNlLnByb2plY3RzSW5mb1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQyMCkuc2VuZChgTm8gdXNlciB3aXRoIHVzZXJuYW1lIFwiJHt1c2VybmFtZX1cIiB3YXMgZm91bmQuYCk7XG4gICAgfVxuXG59KVxuXG5cbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnBvc3QoXCIvc2F2ZS86dXNlcm5hbWUvOmlkXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIC8vIFNhdmUgZXhpc3RpbmcgcHJvamVjdFxuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSByZXEucGFyYW1zLmlkO1xuXG4gICAgY29uc3QgcHJvamVjdEpzb24gPSByZXEuYm9keTtcblxuICAgIGlmICghZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSByZXMuc3RhdHVzKDQyMCkuc2VuZChgVXNlciB3aXRoIHVzZXJuYW1lICR7dXNlcm5hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblxuICAgIGlmICghZGF0YWJhc2UucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSkgcmVzLnN0YXR1cyg0MjEpLnNlbmQoYFByb2plY3Qgd2l0aCBpZCAke3Byb2plY3RJZH0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgZGF0YWJhc2Uuc2F2ZVByb2plY3QocHJvamVjdElkLCBwcm9qZWN0SnNvbik7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG5cbn0pXG5cblxuYXBwLmdldChcIi9jcmVhdGVQcm9qZWN0Lzp1c2VybmFtZS86dGl0bGUvOmRlc2NyaXB0aW9uXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zdCB0aXRsZSA9IHJlcS5wYXJhbXMudGl0bGU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSByZXEucGFyYW1zLmRlc2NyaXB0aW9uO1xuXG4gICAgaWYgKCFkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHJlcy5zdGF0dXMoNDIwKS5zZW5kKGBVc2VyIHdpdGggdXNlcm5hbWUgJHt1c2VybmFtZX0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgbGV0IHBpZCA9IGRhdGFiYXNlLm5ld1Byb2plY3QodXNlcm5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbik7XG5cbiAgICByZXMuc3RhdHVzKDMwMSkuc2VuZChgL2VkaXRvci8ke3VzZXJuYW1lfS8ke3BpZH1gKTtcbn0pO1xuXG4vLyBSdW4gc2VydmVyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwO1xuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJcXG5MaXN0ZW5pbmcgb246IGh0dHBzOi8vbG9jYWxob3N0OlwiICsgcG9ydCArIFwiXFxuXCIpO1xufSk7IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHZW5lcmF0b3IgQ29kZSBUb2tlbmlzZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdlbmVyYXRvciBjb2RlIHRva2VuaXNlciBmdW5jdGlvbiBpcyBhbGdvcml0aG1pY2FsbHkgc2ltcGxlLCBidXQgcHJvZHVjZXMgYSBnb29kIHJlcHJlc2VudGF0aW9uXG4vLyBvZiB0aGUgcHJvdmlkZWQgY29kZSBpbiBKYXZhU2NyaXB0IE9iamVjdCBmb3JtYXQgKHdoaWNoIGNhbiB0aGVuIGJlIGVhc2lseSBjb252ZXJ0ZWQgdG8gSlNPTixcbi8vIHNpbmNlIGl0J3MgcHJldHR5IG11Y2ggdGhlIHNhbWUgdGhpbmcpLlxuLy8gV2hlbiBnb2luZyB0aHJvdWdoIHRoZSBjb2RlLCBpdCBjYW4gZGV0ZWN0IHNldmVyYWwgdHlwZXMgb2Ygb3BlcmF0b3JzLiBUaGVzZSBhcmU6XG4vLyAgICAgKiBWYXJpYWJsZVxuLy8gICAgICogQ29uc3RhbnQgTnVtYmVyXG4vLyAgICAgKiBNYXRoIE9wZXJhdG9yXG4vLyAgICAgKiBNYXRoIEZ1bmN0aW9uXG4vLyAgICAgKiBSZWd1bGFyIHNjb3BlIC0gZXZlcnl0aGluZyBpbnNpZGUgYnJhY2tldHMgXCIoXCIgYW5kIFwiKVwiIHNob3VsZCBiZSBleGVjdXRlZCBmaXJzdFxuLy8gVGhlIFZhcmlhYmxlcywgTnVtYmVycyBhbmQgTWF0aCBvcGVyYXRvcnMgYXJlIGp1c3QgYWRkZWQgYXMgYW4gb2JqZWN0IHdpdGggYXBwcm9wcmlhdGUgdHlwZSBhbmRcbi8vIHZhbHVlIHRha2VuIGZyb20gdGhlIGNvZGUuXG5cbi8vIFRPRE86XG4vLyAqIFNhbmV0aXNlIHZhcmlhYmxlIG5hbWVzICEhISBKYXZhc2NyaXB0IGluamVjdGlvbiBpcyBwb3NzaWJsZSBub3cgdGhyb3VuIHZhcmlhYmxlIG5hbWVzLi4uXG5cbmltcG9ydCB7Zml4U2NvcGVzfSBmcm9tICcuL3Njb3BlRml4ZXInO1xuXG5leHBvcnQgY29uc3QgdG9rZW5pemVHZW5lcmF0b3IgPSAoZ2VuOiBzdHJpbmcsIG5vZGVJZDogc3RyaW5nKTogR2VuZXJhdG9yU2VnbWVudFtdID0+IHtcbiAgICAvLyBHZXQgdmFsdWUgb2YgZ2VuZXJhdG9yIGNvZGUgYW5kIHN0b3JlIGluIGdcbiAgICBsZXQgZyA9IFN0cmluZyhnZW4pO1xuICAgIGcgPSBTdHJpbmcoZml4U2NvcGVzKGcpKTtcblxuICAgIC8vIFBhcnNlZCBHZW5lcmF0b3IgQ29kZVxuICAgIGxldCBwZ2VuOiBHZW5lcmF0b3JTZWdtZW50W10gPSBbXTtcbiAgICBcbiAgICAvLyBUaGUgc3RhY2tcbiAgICBsZXQgc3RhY2s6IEdlbmVyYXRvclNlZ21lbnRbXSA9IFtdO1xuXG4gICAgLy8gQ29kZSB0b2tlbmlzZXJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b3BTdGFja09iamVjdDogR2VuZXJhdG9yU2VnbWVudCA9IHN0YWNrLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gOiBudWxsO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBWQVJJQUJMRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiW1wiKSB7XG4gICAgICAgICAgICAvLyBNb3ZlIHRvIG5leHQgY2hhcmFjdGVyXG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIGVtcHR5IHZhcmlhYmxlXG4gICAgICAgICAgICBsZXQgdmFyaWFibGUgPSBcIlwiO1xuXG4gICAgICAgICAgICAvLyBTY2FuIHVudGlsIHZhcmlhYmxlIHNjb3BlIGlzIGNsb3NlZFxuICAgICAgICAgICAgd2hpbGUoZ1tpXSAhPT0gXCJdXCIpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSArPSBnW2ldO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodmFyaWFibGUgPT09IFwidGltZVwiIHx8IHZhcmlhYmxlID09PSBcIlBJXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nID9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBub2RlSWQgKyB2YXJpYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidmFyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhcmlhYmxlLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbdG9wSW5kZXhdLmNvZGUucHVzaCh2YXJpYWJsZVNuaXBwZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2godmFyaWFibGVTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBNQVRIIE9QRVJBVE9SIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYgKGdbaV0gPT09IFwiKlwiIHx8IGdbaV0gPT09IFwiL1wiIHx8IGdbaV0gPT09IFwiK1wiIHx8IGdbaV0gPT09IFwiLVwiIHx8IGdbaV0gPT09IFwiXlwiIHx8IGdbaV0gPT09IFwiJVwiKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvclNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBnW2ldLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2gob3BlcmF0b3JTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChvcGVyYXRvclNuaXBwZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE1BVEggRlVOQ1RJT04gLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcInNcIiB8fCBnW2ldID09PSBcImNcIiB8fCBnW2ldID09PSBcInRcIikge1xuICAgICAgICAgICAgLy8gTWF0aGVtYXRpY2FsIGZvcm11bGFzIGFyZSBjb2RlZCBpbiB0aHJlZSBsZXR0ZXJzXG4gICAgICAgICAgICBsZXQgbmV4dFRocmVlID0gU3RyaW5nKGdbaV0gKyBnW2krMV0gKyBnW2krMl0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBuZXh0IHRocmVlIGNoYXJzIGFyZSBvbmUgb2YgXG4gICAgICAgICAgICBpZihuZXh0VGhyZWUgPT09IFwic2luXCIgfHwgbmV4dFRocmVlID09PSBcImNvc1wiIHx8IG5leHRUaHJlZSA9PT0gXCJ0YW5cIiB8fCBuZXh0VGhyZWUgPT09IFwic3F3XCIgfHwgbmV4dFRocmVlID09PSBcImV4cFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRqdXN0IGluZGV4IHRvIG5leHQgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgaSArPSAzO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VhcmNoIGZvciBvcGVuaW5nIGJyYWNrZXRzXG4gICAgICAgICAgICAgICAgd2hpbGUoZ1tpXSAhPT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPj0gZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0aHJvdyBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRVJST1IgUkVBU09OOiBzaG91bGQgcHJvdmlkZSBicmFja2V0cyBmb3IgbWF0aCBvcGVyYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJzaG91bGQgcHJvdmlkZSBicmFja2V0cyBmb3IgbWF0aCBvcGVyYXRvcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHByb3ZpZGVkIHNwYWNlIG9yIGEgY2hhcmFjdGVyIGFmdGVyIHRocmVlIG1hdGggY2hhcnNcbiAgICAgICAgICAgICAgICAvLyBpZiAoZ1tpKzFdID09PSBcIihcIikgaSsrO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0aFNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWF0aFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV4dFRocmVlLFxuICAgICAgICAgICAgICAgICAgICBjb2RlOiBbXVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrVG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLnB1c2gobWF0aFNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjb3BlVG9wSW5kZXggPSBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGVbc2NvcGVUb3BJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgcGdlbi5wdXNoKG1hdGhTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGdlbltwZ2VuLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLy8gQ29udGludWUgcGFyc2luZyBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gUkVHVUxBUiBTQ09QRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAvLyBCZWdpbiByZWd1bGFyIHNjb3BlXG4gICAgICAgICAgICBjb25zdCBzY29wZVNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzY29wZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvZGU6IFtdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrVG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUucHVzaChzY29wZVNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVUb3BJbmRleCA9IHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGVbc2NvcGVUb3BJbmRleF1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2goc2NvcGVTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHBnZW5bcGdlbi5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBFTkQgQU5ZIFNDT1BFIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCIpXCIgfHwgZy5jaGFyQXQoaSkgPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAvLyBFbmQgU2NvcGVcblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdG9wIGl0ZW0gZnJvbSBzdGFjayBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgY2xvc2VkIHNjb3BlIHRoYXQgd2Fzbid0IG9wZW5lZFxuICAgICAgICAgICAgICAgIC8vIFRPRE86ICAgICAgICAgICAgdGhyb3cgRVJST1JcbiAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046ICAgIG5vbiBleGlzdGVudCBzY29wZSB3YXMgY2xvc2VkXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vbiBleGlzdGVudCBzY29wZSB3YXMgY2xvc2VkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE5VQk1FUiAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGxldCBtYXliZU51bWJlciA9IFN0cmluZyhwYXJzZUludChnW2ldKSk7XG5cbiAgICAgICAgaWYobWF5YmVOdW1iZXIgIT09IFN0cmluZyhOYU4pICYmIHR5cGVvZiBwYXJzZUludChtYXliZU51bWJlcikgPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgbGV0IG51bWJlclN0YXJ0ID0gaTtcblxuICAgICAgICAgICAgLy8gSXMgY3VycmVudCBjaGFyIGEgbnVtYmVyIG9yIGEgZG90P1xuICAgICAgICAgICAgY29uc3QgaXNOdW1iZXIgPSAoKSA9PiAobWF5YmVOdW1iZXIgIT09IFN0cmluZyhOYU4pICYmIHR5cGVvZiBwYXJzZUludChtYXliZU51bWJlcikgPT09IFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgaXNEb3QgPSAoaW5kZXg6IG51bWJlcikgPT4gU3RyaW5nKGdbaW5kZXhdKSA9PT0gXCIuXCI7XG5cbiAgICAgICAgICAgIC8vIFdhcyB0aGVyZSBhIGRvdCBpbiBjdXJyZW50IHNlcXVlbmNlIG9mIG51bWJlcnM/XG4gICAgICAgICAgICBsZXQgd2FzRG90QWxyZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aGlsZShpc051bWJlcigpIHx8IGlzRG90KGkpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgY3VycmVudCBjaGFyIGlzIGEgZG90XG4gICAgICAgICAgICAgICAgaWYoaXNEb3QoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYod2FzRG90QWxyZWFkeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgdGhlcmUgd2FzIGEgZG90IGFscmVhZHksIHRocm93IGVycm9yLCBzaW5jZSBpdCBkb2Vzbid0IG1ha2Ugc2Vuc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRocm93IEVSUk9SXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046IGludmFsaWQgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIHN5bnRheFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm90LCBzZXQgd2FzIGRvdCBhbHJlYWR5IHRvIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhc0RvdEFscmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTW92ZSB0byBuZXh0IGluZGV4IGFuZCBcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgbWF5YmVOdW1iZXIgPSBTdHJpbmcocGFyc2VJbnQoZ1tpXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXN1bHRpbmdOdW1iZXIgPSBnLnNsaWNlKG51bWJlclN0YXJ0LCBpKTtcblxuICAgICAgICAgICAgY29uc3QgbnVtYmVyU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHRpbmdOdW1iZXIsXG4gICAgICAgICAgICAgICAgY29kZTogbnVsbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2gobnVtYmVyU25pcHBldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2gobnVtYmVyU25pcHBldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGktLTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIFJldHVybiBwYXJzZWQgZ2VuZXJhdG9yIGFycmF5XG4gICAgcmV0dXJuIHBnZW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXJhdG9yU2VnbWVudCB7XG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHZhbHVlOiAoc3RyaW5nfG51bWJlciksXG4gICAgY29kZTogR2VuZXJhdG9yU2VnbWVudFtdXG59IiwiaW1wb3J0IHsgcmVuZGVyVG9TdGF0aWNNYXJrdXAgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuaW1wb3J0IHsgc2NyaXB0R2VuZXJhdG9yIH0gZnJvbSAnLi9zY3JpcHRHZW5lcmF0b3IudHMnO1xuaW1wb3J0IHsganN4RG9tIH0gZnJvbSAnLi92aWV3ZXJEb20nO1xuXG5mdW5jdGlvbiByZW5kZXJIdG1sIChyZXF1ZXN0SnNvbikge1xuICAgIC8vIFNlcGFyYXRlIG5vZGVzIGZyb20gY29ubmVjdG9yc1xuICAgIGNvbnN0IGFsbE5vZGVzID0gey4uLnJlcXVlc3RKc29uLmFsbE5vZGVzfTtcbiAgICBjb25zdCBhbGxDb25uZWN0aW9ucyA9IFsuLi5yZXF1ZXN0SnNvbi5hbGxDb25uZWN0aW9uc107XG5cbiAgICAvLyBSZW5kZXIgSFRNTFxuICAgIGNvbnN0IGpzeCA9IGpzeERvbShhbGxOb2Rlcyk7XG4gICAgY29uc3QganN4U3RyaW5nID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoanN4KTtcblxuICAgIC8vIEdlbmVyYXRlIFNjcmlwdHNcbiAgICAvLyBjb25zb2xlLnRpbWUoXCJTY3JpcHQgUGFyc2VyXCIpO1xuXG4gICAgY29uc3Qgc2NyaXB0QXJyYXkgPSBzY3JpcHRHZW5lcmF0b3IoYWxsTm9kZXMsIGFsbENvbm5lY3Rpb25zKTtcbiAgICBsZXQgY29tcG9zZWRTY3JpcHRTdHJpbmcgPSBcIlwiO1xuICAgIGZvcihsZXQgcyBpbiBzY3JpcHRBcnJheSkge1xuICAgICAgICBpZihzID09IDApIGNvbnRpbnVlO1xuICAgICAgICBjb21wb3NlZFNjcmlwdFN0cmluZyArPSBzY3JpcHRBcnJheVtzXTtcbiAgICB9XG4gICAgXG4gICAgLy8gY29uc29sZS50aW1lRW5kKFwiU2NyaXB0IFBhcnNlclwiKTtcblxuICAgIC8vIFBhY2thZ2UgaW1wb3J0c1xuICAgIGxldCBzY3JpcHRzID0gYDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvQ2hhcnQuanMvMi43LjMvQ2hhcnQuYnVuZGxlLm1pbi5qc1wiPjwvc2NyaXB0PlxcbmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdCBzcmM9XCIvQ0NhcHR1cmUuYWxsLm1pbi5qc1wiPjwvc2NyaXB0PmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9qcy11bnRhckAyLjAuMC9idWlsZC9kaXN0L3VudGFyXCI+PC9zY3JpcHQ+YDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2Rvd25sb2FkanNAMS40LjcvZG93bmxvYWQuanNcIj48L3NjcmlwdD5gO1xuICAgIHNjcmlwdHMgKz0gYDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vZ2lmLmpzQDAuMi4wL2Rpc3QvZ2lmLmpzXCI+PC9zY3JpcHQ+YDtcblxuICAgIC8vIEdJRiBSZWNvcmRlclxuICAgIHNjcmlwdHMgKz0gYDxzY3JpcHQ+XG4gICAgICAgIHZhciBsYXN0RnJhbWVUaW1lc3RhbXAgPSBudWxsO1xuICAgICAgICB2YXIgaXNSZWNvcmRpbmcgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduYWxzLXJlY29yZGluZy1zdG9wXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgICAgICAgIFxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbmFscy1iYWNrLWJ1dHRvblwiKS5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBuZXdMaW5rID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcInJlbmRlclwiLCBcImVkaXRvclwiKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24obmV3TGluayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduYWxzLXJlY29yZGluZy1zdGFydFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25hbHMtcmVjb3JkaW5nLXN0b3BcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgPC9zY3JpcHQ+YFxuXG4gICAgLy8gT25seSBhZGQgZmZ0IHJlcXVpcmUgaWYgcHJvamVjdCB1c2VzIGZmdFxuICAgIGZvcihsZXQgZiBpbiBhbGxOb2Rlcykge1xuICAgICAgICBpZihmLnN1YnN0cigwLCAzKSA9PT0gXCJmZnRcIikge1xuICAgICAgICAgICAgc2NyaXB0cyArPSBgPHNjcmlwdCBzcmM9XCIvZmZ0LmpzXCI+PC9zY3JpcHQ+XFxuYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNjcmlwdHMgKz0gYDxzY3JpcHQ+JHtzY3JpcHRBcnJheVswXX08L3NjcmlwdD5cXG5gO1xuICAgIHNjcmlwdHMgKz0gYDxzY3JpcHQ+JHtjb21wb3NlZFNjcmlwdFN0cmluZ308L3NjcmlwdD5cXG5gO1xuICAgIFxuICAgIC8vIENvbWJpbmUgZm9ybWVyIHJlc3VsdHNcbiAgICBjb25zdCBzY3JpcHRlZEh0bWwgPSBqc3hTdHJpbmcuc2xpY2UoMCwganN4U3RyaW5nLmxlbmd0aCAtIDYpICsgc2NyaXB0cyArIFwiPC9kaXY+XCI7XG4gICAgXG4gICAgLy8gUmV0dXJuIGdlbmVyYXRlZCBIVE1MIGFzIGEgc3RyaW5nXG4gICAgcmV0dXJuIHNjcmlwdGVkSHRtbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNpZ25hbHMgKHJlcXVlc3RKc29uKSB7XG4gICAgcmV0dXJuIHJlbmRlckh0bWwocmVxdWVzdEpzb24pO1xufSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTY29wZSBGaXhlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNjb3BlIEZpeGVyIGZ1bmN0aW9uIGlzIHJlbGF0ZWQgdG8gdGhlIGdlbiB2YXJpYWJsZSBwYXJzaW5nIGFsZ29yaXRobS4gU2luY2UgdGhlIHRva2VuaXplciBcbi8vIGZ1bmN0aW9uIGRvZXMgbm90IHRha2UgaW50byBhY2NvdW5kIHRoYXQgbWF0aCBvcGVyYXRvcnMgKiAobXVsdGlwbGljYXRpb24pIGFuZCAvIChkaXZpc2lvbilcbi8vIGFyZSBleGVjdXRlZCBmaXJzdCwgd2UgbmVlZCB0byBwdXQgc2NvcGVzIGFyb3VuZCBiaXRzIHRoYXQgc2hvdWxkIGV4ZWN1dGVkIGZpcnN0LiBUaGlzIGlzIFxuLy8gbm90IGZpbmFsIHNvbHV0aW9uLCBzaW5jZSBpdCBkb2VzIG5vdCB0YWtlIGZvbGxvd2luZyBzaXR1YXRpb25zIGludG8gYWNjb3VudDpcbi8vICAgICAqIHRoZXJlIGlzIGEgbWludXMgb3IgcGx1cyBzaWduIGJlZm9yZSBhIG51bWJlcjogLTEqW3ZhcmlhYmxlXVxuLy8gICAgICAgICAtIEluIHRoaXMgY2FzZSBpdCB3b3VsZCByZXR1cm4gdGhpczogLSgxKlt2YXJpYWJsZV0pLiBUaGlzIGRvZXMgbm90IGFwcGx5IHNjb3Blc1xuLy8gICAgICAgICAgIGNvcnJlY3RseS5cbi8vXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBbGdvcml0aG0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBhbGdvcml0aG0gbWFrZXMgb25seSBvbmUgZ2VuZXJhbCBzd2VlcCB0aHJvdWdoIHRoZSBzdHJpbmcuIFRoaXMgbWVhbnMgdGhhdCBpZiBubyBcbi8vIHNjb3BlcyBhcmUgbmVlZGVkLCBleGVjdXRpb24gdGltZSB3aWxsIGJlIG1pbmltYWwsIGkuZS4gaXQgd2lsbCB0YWtlIGFzIG11Y2ggdGltZSBhcyBpdFxuLy8gdGFrZXMgdG8gbG9vcCB0aHJvdWdoIHRoZSBzdHJpbmcgb25jZSBhbmQgY2hlY2sgaWYgdGhlIGNoYXJhY3RlciBpcyAqIG9yIC8uIEluIHRoZSBjYXNlIG9mXG4vLyAzNCBjaGFyYWN0ZXIgc3RyaW5nLCB0aGlzIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIGluIGFib3VudCAwLjMtMC41IG1zLiBXaXRoIGFuIGF2ZXJhZ2Ugb2YgXG4vLyBhcm91bmQgMC40bXMgYW5kIDM0IGNoYXJhY3RlcnMsIHdlIGNhbiBhcHByb3hpbWF0ZSB0aGF0IG9uZSBjaGFyYWN0ZXIgdGFrZXMgMC40IC8gMzQgPSAxLjY2XG4vLyBtaWNybyBzZWNvbmRzLiBUaGlzIHdhcyB0ZXN0ZWQgb24gMi43R2h6IEludGVsIENvcmUgaTcuIFNvIGl0IHRvb2sgYXJvdW5kIDQ0ODIgY2xvY2sgY3ljbGVzXG4vLyB0byBleGVjdXRlIHRoYXQgYWNjb3JkaW5nIHRvIGZvbGxvd2luZyBlcXVhdGlvbjogMS42NnVzIC8gKDEgLyAyLjdHKSA9IDQ0ODIuIFRoaXMgY291bGQgYmUgXG4vLyBkcmFtYXRpY2FsbHkgaW1wcm92ZWQgYnkgdXNpbmcgY3VzdG9tIG1hZGUgTm9kZS5qcyBjKysgcGx1Z2luIHdoaWNoIGFsbG93cyB0byBydW4gYysrXG4vLyBiaW5hcmllcyBmcm9tIE5vZGUuanMgb3IgYnkgd3JpdGluZyB0aGUgd2hvbGUgcmVuZGVyZXIgc2VydmVyIGluIGEgY29tcGlsZWQgbGFuZ3VhZ2UgbGlrZSBcbi8vIHB5dGhvbiwgYyMsIGdvLCBvciBzd2lmdC4gVGhlcmUgaXMgYWxzbyBhIHBvc3NpYmlsaXR5IHRvIHdyaXRlIGl0IGluIFJ1c3QgbGFuZ3VhZ2UsIEMgb3Jcbi8vIEMrKy4gVGhpcyB3b3VsZCBhbGxvdyB0byBjb21waWxlIGp1c3QgdGhpcyBmdW5jdGlvbiB0byBXZWJBc3NlbWJseSBhbmQgcnVuIGl0IGluIE5vZGUuanMgYXQgXG4vLyBjb21waWxlZCBzcGVlZC4gSWYgZnVydGhlciBkZXZlbG9wbWVudCB3aWxsIGJlIGRvbmUgYW5kIHRoZXJlIHdpbGwgYmUgYSBkZWNpc2lvbiB0byAgc3dpdGNoXG4vLyB0byBhIGNvbXBpbGVkIGxhbmd1YWdlIHNlcnZlciwgSSB3b3VsZCBzdWdnZXN0IHVzaW5nIEdPIGxhbmd1YWdlIGR1ZSB0byBpdHMgc2ltcGxpY2l0eS5cbi8vXG4vLyBBbGdpdGhtIHdvcmtzIGluIGEgZm9sbG93aW5nIGZhc2hpb246XG4vLyAgIDEuIE1ha2Ugc3VyZSBwYXNzZWQgdGV4dCBpcyBvZiBhIFN0cmluZyB0eXBlXG4vLyAgIDIuIFNldCBmbGFncyB0byBmYWxzZTpcbi8vICAgICAgIC0gYm9yZGVyIGZsYWdzOiBpbmRpY2F0ZSBpZiBvbiBsZWZ0IG9yIHJpZ2h0LCBhICsgb3IgLSBzaWduIHdhcyBmb3VuZFxuLy8gICAgICAgLSBicmFja2V0IGZsYWdzOiBpbmRpY2F0ZSBpZiB3aGlsZSBzd2VlcGluZyBsZWZ0IGFuZCByaWdodCBhIHNjb3BlIHdhcyBmb3VuZFxuLy8gICAzLiBJbml0aWF0ZSB2YXJpYWJsZXMgZm9yIGxlZnQgYW5kIHJpZ2h0IHN3ZWVwZXJzXG4vLyAgIDQuIExvb3AgdW50aWwgd2hvbGUgc3RyaW5nIHdhcyBzY2FubmVkLCBpbiB0aGUgbG9vcDpcbi8vICAgICAgIDEuIElmIGN1cnJlbnQgY2hhcmFjdGVyIGlzIFwiKlwiXCIgb3IgXCIvXCIsIGNvbnRpbnVlLCBvdGhlcndpc2UgaW5jcmVhc2UgaW5kZXggYnkgb25lIGFuZCBjaGVjayBhZ2FpblxuLy8gICAgICAgMi4gU2NhbiB0byB0aGUgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGluZGV4LlxuLy8gICAgICAgMy4gSWYgcmFuIG91dCBvZiBib3VuZHMgb2YgdGhlIHN0cmluZywgc3RvcCBzY2FubmluZyBsZWZ0LCBtb3ZlIHRvIHN0ZXAgN1xuLy8gICAgICAgNC4gSWYgaGl0IGNsb3NpbmcgYnJhY2tldCwgc2V0IGNsb3NpbmcgYnJhY2tldCBmbGFnIHRvIHRydWUuXG4vLyAgICAgICA1LiBJZiBoaXQgb3BlbmluZyBicmFja2V0LCBjaGVjayBpZiBjbG9zaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcgYW5kIHNldCBjbG9zaW5nIGJyYWNrZXQgZmxhZyB0byBmYWxzZSBhZ2Fpbi5cbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgbW92ZSB0byBzdGVwIDdcbi8vICAgICAgIDYuIElmIFwiK1wiIG9yIFwiLVwiIHNpZ24gd2FzIGhpdCwgY2hlY2sgaWYgY2xvc2luZyBicmFja2V0IHdhcyBoaXQgYmVmb3JlOlxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBoaXQsIGNvbnRpbnVlIHNjYW5uaW5nLCBzaW5jZSBpdCBtZWFucyB0aGF0IHRoZSArIG9yIC0gc2lnbiBpcyBpbiBhbm90aGVyIHNjb3BlXG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIE5PVCBoaXQsIHN0b3Agc2Nhbm5pbmcsIG1vdmUgcmlnaHQgYnkgb25lIHN0ZXAgYW5kIHJlc2V0IGxlZnQgYm9yZGVyIGZsYWdcbi8vICAgICAgIDcuIFNjYW4gdG8gdGhlIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgaW5kZXguXG4vLyAgICAgICA4LiBJZiByYW4gb3V0IG9mIGJvdW5kcyBvZiB0aGUgc3RyaW5nLCBzdG9wIHNjYW5uaW5nIGxlZnQsIG1vdmUgdG8gc3RlcCAxMlxuLy8gICAgICAgOS4gSWYgaGl0IG9wZW5pbmcgYnJhY2tldCwgc2V0IG9wZW5pbmcgYnJhY2tldCBmbGFnIHRvIHRydWUuXG4vLyAgICAgICAxMC4gSWYgaGl0IGNsb3NpbmcgYnJhY2tldCwgY2hlY2sgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgYmVmb3JlOlxuLy8gICAgICAgICAgIC0gSWYgb3BlbmluZyBicmFja2V0IFdBUyBoaXQsIGNvbnRpbnVlIHNjYW5uaW5nIGFuZCBzZXQgb3BlbmluZyBicmFja2V0IGZsYWcgdG8gZmFsc2UgYWdhaW4uXG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIE5PVCBoaXQsIHN0b3Agc2Nhbm5pbmcgYW5kIG1vdmUgdG8gc3RlcCAxMlxuLy8gICAgICAgMTEuIElmIFwiK1wiIG9yIFwiLVwiIHNpZ24gd2FzIGhpdCwgY2hlY2sgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgYmVmb3JlOlxuLy8gICAgICAgICAgIC0gSWYgb3BlbmluZyBicmFja2V0IFdBUyBoaXQsIGNvbnRpbnVlIHNjYW5uaW5nLCBzaW5jZSBpdCBtZWFucyB0aGF0IHRoZSArIG9yIC0gc2lnbiBpcyBpbiBhbm90aGVyIHNjb3BlXG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIE5PVCBoaXQsIHN0b3Agc2Nhbm5pbmcgYW5kIHJlc2V0IGxlZnQgYm9yZGVyIGZsYWdcblxuZXhwb3J0IGZ1bmN0aW9uIGZpeFNjb3BlcyAoZ2VuKSB7XG4gICAgbGV0IGcgPSBTdHJpbmcoZ2VuKTtcblxuICAgIC8vIFZhcmlhYmxlIGFyZSB0YWtlbiBvdXRzaWRlIG9mIGZvciBsb29wLCB0byBpbmNyZWFzZSBwZXJmb3JtYW5jZS5cbiAgICAvLyBJbiB0aGlzIHdheSwgdmFyaWFibGVzIGFyZSBqdXN0IHJld3JpdHRlbiBpbiB0aGUgc2FtZSBtZW1vcnlcbiAgICAvLyBsb2NhdGlvbiBpbnN0ZWFkIG9mIGNyZWF0aW5nIG5ldyB2YXJpYWJsZSBldmVyeSB0aW1lLlxuICAgIGxldCBmb3VuZExlZnRCb3JkZXIgPSBmYWxzZTtcbiAgICBsZXQgZm91bmRSaWdodEJvcmRlciA9IGZhbHNlO1xuXG4gICAgbGV0IGp1c3RIaXRPcGVuaW5nQnJhY2tldCA9IGZhbHNlO1xuICAgIGxldCBqdXN0SGl0Q2xvc2luZ0JyYWNrZXQgPSBmYWxzZTtcblxuICAgIGxldCBsZWZ0O1xuICAgIGxldCByaWdodDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZ1tpXSA9PT0gXCIqXCIgfHwgZ1tpXSA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgIC8vIFNjYW4gbGVmdFxuICAgICAgICAgICAgZm9yIChsZWZ0ID0gaTsgIWZvdW5kTGVmdEJvcmRlcjsgbGVmdC0tKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhpdCB0aGUgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgbGVmdCBzdHJpbmcgd2FsbFxuICAgICAgICAgICAgICAgIGlmIChsZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCBzZXQgZm91bmRMZWZ0Qm9yZGVyIHZhcmlhYmxlIHRvIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIGlmIGJvdGggc2lkZXMgYXJlIGJyYWNrZXRzIG9yIG91dGVyIHdhbGxzIG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdHJpbmcsIG5ldyBicmFja2V0cyBzaG91bGQgbm90IGJlIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgaGl0cyBvcGVuaW5nIGJyYWNrZXQsIGl0IGNoZWNrcyBpZiBpdCBoaXQgY2xvc2luZyBicmFja2V0IGJlZm9yZVxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdENsb3NpbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0SGl0Q2xvc2luZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYXJrcyB0aGF0IGl0IGhpdCBjbG9zaW5nIGJyYWNrZXQsIHNvIHRoYXQgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgbGF0ZXIsXG4gICAgICAgICAgICAgICAgLy8gaXQga25vd3MgdGhhdCBpdCBzaG91bGRuJ3QgXG4gICAgICAgICAgICAgICAgaWYgKGdbbGVmdF0gPT09IFwiKVwiKSBqdXN0SGl0Q2xvc2luZ0JyYWNrZXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gRXhpdCBzY2FubmluZyBsb29wIGlmIGhpdCBwbHVzIG9yIG1pbnVzXG4gICAgICAgICAgICAgICAgLy8gQWxzbywgbW92ZSByaWdodCwgc28gdGhhdCBicmFja2VzIGlzIGluc2VydGVkIGFmdGVyICsgb3IgLSBzaWduXG4gICAgICAgICAgICAgICAgaWYgKGdbbGVmdF0gPT09IFwiK1wiIHx8IGdbbGVmdF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0Q2xvc2luZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRMZWZ0Qm9yZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTY2FuIHJpZ2h0XG4gICAgICAgICAgICBmb3IgKHJpZ2h0ID0gaTsgIWZvdW5kUmlnaHRCb3JkZXI7IHJpZ2h0KyspIHtcbiAgICAgICAgICAgICAgICAvLyBFeGl0IHRoZSBzY2FubmluZyBsb29wIGlmIGhpdCByaWdodCBzdHJpbmcgd2FsbCBvciBjbG9zaW5nIGJyYWNrZXRcbiAgICAgICAgICAgICAgICBpZiAocmlnaHQgPj0gZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCBzZXQgZm91bmRSaWdodEJvcmRlciB2YXJpYWJsZSB0byB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpZiBib3RoIHNpZGVzIGFyZSBicmFja2V0cyBvciBvdXRlciB3YWxscyBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RyaW5nLCBuZXcgYnJhY2tldHMgc2hvdWxkIG5vdCBiZSBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGhpdHMgY2xvc2luZyBicmFja2V0LCBpdCBjaGVja3MgaWYgaXQgaGl0IG9wZW5pbmcgYnJhY2tldCBiZWZvcmVcbiAgICAgICAgICAgICAgICBpZiAoZ1tyaWdodF0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0T3BlbmluZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RIaXRPcGVuaW5nQnJhY2tldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1hcmtzIHRoYXQgaXQgaGl0IGNsb3NpbmcgYnJhY2tldCwgc28gdGhhdCBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBsYXRlcixcbiAgICAgICAgICAgICAgICAvLyBpdCBrbm93cyB0aGF0IGl0IHNob3VsZG4ndCBcbiAgICAgICAgICAgICAgICBpZiAoZ1tyaWdodF0gPT09IFwiKFwiKSBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIitcIiB8fCBnW3JpZ2h0XSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRPcGVuaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFJpZ2h0Qm9yZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgb24gb25lIG9mIHRoZSBzaWRlcyB0aGVyZSBpcyArIG9yIC0gc2lnblxuICAgICAgICAgICAgaWYgKGZvdW5kTGVmdEJvcmRlciB8fCBmb3VuZFJpZ2h0Qm9yZGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gU2xpY2Ugb3JpZ2luYWwgc3RyaW5nIGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgbGV0IG9uZSA9IGcuc2xpY2UoMCwgbGVmdCk7XG4gICAgICAgICAgICAgICAgbGV0IHR3byA9IGcuc2xpY2UobGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIGxldCB0aHJlZSA9IGcuc2xpY2UocmlnaHQsIGcubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIC8vIEluc2VydCBicmFja2V0cyBiZXR3ZWVuIGZvcm1lciB0aHJlZSBzdHJpbmdzIHRvIGZvcm1cbiAgICAgICAgICAgICAgICAvLyBuZXcgc3RyaW5nIHdpdGggaW5zZXJ0ZWQgYnJhY2tldHNcbiAgICAgICAgICAgICAgICBnID0gb25lICsgXCIoXCIgKyB0d28gKyBcIilcIiArIHRocmVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXNldCBib3JkZXIgdmFyaWFibGVzXG4gICAgICAgICAgICBmb3VuZExlZnRCb3JkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvdW5kUmlnaHRCb3JkZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBnO1xufSIsImltcG9ydCB7XG4gICAgc2VwYXJhdGVOb2RlcyxcbiAgICBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5LFxuICAgIG9iamVjdFNpemUsXG4gICAgd2FzQ2FsY3VsYXRlZCxcbiAgICBhbGxJbnB1dHNDYWxjdWxhdGVkLFxuICAgIGNhbGN1bGF0ZU91dHB1dCxcbiAgICBnZXRUb3VjaElucHV0cyxcbiAgICBpbml0VGltZSxcbiAgICBnZW5lcmF0ZVRvdWNoQ29udHJvbGxlcnMsXG4gICAgZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IsXG4gICAgaW5pdEFuaW1hdGlvblRpbWUsXG4gICAgc2F2ZUFuaW1hdGlvblxufSBmcm9tICcuL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucyc7XG5cbmNvbnN0IFNBTVBMRV9SQVRFID0gNTEyOyAvLyBTYW1wbGVzIHBlciBzZWNvbmRcbmNvbnN0IERVUkFUSU9OID0gMjsgLy8gU2Vjb25kcywgaWRlYWxseSBzaG91bGQgYmUgZGl2aWRhYmxlIGJ5IDJcbmNvbnN0IE9GRlNFVCA9IDA7IC8vIFdoaWNoIHBvaW50IHNob3VsZCBiZSB0aGUgY2VudHJlIG9mIHRoZSBzY29wZVxuXG5leHBvcnQgZnVuY3Rpb24gc2NyaXB0R2VuZXJhdG9yKGFsbE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdKSB7XG4gICAgLy8gRXhlY3V0YWJsZSB0byBzdG9yZSBnZW5lcmF0ZWQgamF2YXNjcmlwdCBjb2RlLiBBbnkgaW5pdGlhbGlzYXRpb24gY29kZSBzaG91bGQgYmUgaGVyZS5cbiAgICBsZXQgZXhlQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IGV4ZWN1dGFibGUgPSBcInZhciBncmFwaHMgPSB7fTtcXG5cIjtcblxuICAgIC8vIEluaXQgc3F1YXJlIHdhdmUgZnVuY3Rpb25cbiAgICBleGVjdXRhYmxlICs9IGBNYXRoLl9fcHJvdG9fXy5zcXcgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICBsZXQgdmFsID0geCA+PSAwID8gKCh4LygyKk1hdGguUEkpKSUxKSA6ICgoKC14LU1hdGguUEkpLygyKk1hdGguUEkpKSUxKTtcbiAgICAgICAgaWYodmFsID49IDAgJiYgdmFsIDw9IDAuNSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41O1xuICAgICAgICB9XG4gICAgfTtgO1xuXG4gICAgLy8gQ2FsY3VsYXRlZCBub2RlcyBoYXZlIGZvbGxvd2luZyBzaGFwZTogXCJub2RlSWQ6b3V0cHV0SWRcIlxuICAgIGxldCBjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdID0gW107XG4gICAgXG4gICAgLy8gU3RhdGlzdGljcyBvYmplY3RcbiAgICBsZXQgc3RhdGlzdGljcyA9IHtcbiAgICAgICAgbG9vcENvdW50ZXI6IDAsXG4gICAgICAgIGluaXRpYWxUb3RhbE5vZGVzOiBvYmplY3RTaXplKGFsbE5vZGVzKSxcbiAgICAgICAgaW5pdGlhbFRvdGFsQ29ubmVjdG9yczogYWxsQ29ubmVjdGlvbnMubGVuZ3RoLFxuICAgICAgICBzdGFydFRpbWU6IDAsXG4gICAgICAgIGVuZFRpbWU6IDBcbiAgICB9O1xuICAgIFxuICAgIC8vIFNlcGFyYXRlcyB1bmNhbGN1bGF0ZWQgbm9kZXMgZnJvbSBzY29wZXMgYW5kIFVJIGF0IHRoZSBzdGFydC5cbiAgICBsZXQge1xuICAgICAgICB1bmNhbGN1bGF0ZWROb2RlcywgXG4gICAgICAgIGFsbFNjb3BlcywgXG4gICAgICAgIHVpTm9kZXMsIFxuICAgICAgICBmZnROb2RlcyxcbiAgICAgICAgdGltZSxcbiAgICAgICAgYW5pbWF0aW9uTm9kZXNcbiAgICB9ID0gc2VwYXJhdGVOb2RlcyhhbGxOb2Rlcyk7XG5cbiAgICBpZih0aW1lW1widGltZVwiXSkge1xuICAgICAgICBjb25zdCB0aW1lTm9kZSA9IHRpbWVbXCJ0aW1lXCJdO1xuICAgICAgICBjb25zdCB0aW1lU3BlZWQgPSBwYXJzZUZsb2F0KHRpbWVOb2RlLnNldHRpbmdzWzBdLnZhbHVlKTtcbiAgICAgICAgY29uc3QgdGltZVJhbmdlID0gcGFyc2VGbG9hdCh0aW1lTm9kZS5zZXR0aW5nc1sxXS52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHRpbWVPcmlnaW4gPSBwYXJzZUZsb2F0KHRpbWVOb2RlLnNldHRpbmdzWzJdLnZhbHVlKTtcblxuICAgICAgICAvLyBUT0RPOiBTT0xWRSBTQU1QTEUgUkFURSBBVVRPTUFUSUMgQ0FMQ1VMQVRJT05cbiAgICAgICAgY29uc3QgdGltZVN0YXJ0ID0gdGltZU9yaWdpbiAtIHRpbWVSYW5nZSAvIDI7XG4gICAgICAgIGNvbnN0IHRpbWVTdG9wID0gdGltZU9yaWdpbiArIHRpbWVSYW5nZSAvIDI7XG4gICAgICAgIGV4ZWN1dGFibGUgKz0gaW5pdFRpbWUodGltZVN0YXJ0LCB0aW1lU3RvcCwgMSAvIFNBTVBMRV9SQVRFKTtcbiAgICAgICAgZXhlY3V0YWJsZSArPSBcInZhciBkZWx0YVRpbWUgPSA2MDtcIlxuXG4gICAgICAgIGV4ZWN1dGFibGUgKz0gYHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQgPSB0Lm1hcCh2ID0+IHYgKyAke3RpbWVTcGVlZH0vZGVsdGFUaW1lKTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9LCBkZWx0YVRpbWUpO2A7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2V0dXAgZGVmYXVsdCB0aW1lXG4gICAgICAgIGV4ZWN1dGFibGUgKz0gaW5pdFRpbWUoT0ZGU0VUIC0gRFVSQVRJT04gLyAyLCBPRkZTRVQgKyBEVVJBVElPTiAvIDIsIDEgLyBTQU1QTEVfUkFURSk7XG4gICAgfVxuXG4gICAgaWYob2JqZWN0U2l6ZShhbmltYXRpb25Ob2RlcykgPiAwKSB7XG4gICAgICAgIGV4ZWN1dGFibGUgKz0gXCJ2YXIgYWxsVGltZXJzID0gW107XCI7XG4gICAgICAgIGZvcihsZXQgbm9kZUtleSBpbiBhbmltYXRpb25Ob2Rlcykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSBhbmltYXRpb25Ob2Rlc1tub2RlS2V5XTtcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dEtleSA9IGN1cnJlbnROb2RlLm91dHB1dHNbMF0udGl0bGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV4ZWN1dGFibGUgKz0gc2F2ZUFuaW1hdGlvbihjdXJyZW50Tm9kZSwgbm9kZUtleSk7XG4gICAgICAgICAgICBjYWxjdWxhdGVkTm9kZXMucHVzaChgJHtub2RlS2V5fToke291dHB1dEtleX1gKVxuICAgICAgICB9XG5cbiAgICAgICAgZXhlY3V0YWJsZSArPSBpbml0QW5pbWF0aW9uVGltZSgpO1xuICAgIH1cbiAgICBcbiAgICAvLyBTZXBhcmF0ZSB0b3VjaCBub2RlcyBmb3JtIHJlZ3VsYXIgbm9kZXNcbiAgICBsZXQgdG91Y2hOb2Rlc1NlcGFyYXRlZCA9IGdldFRvdWNoSW5wdXRzKHVuY2FsY3VsYXRlZE5vZGVzKTtcblxuICAgIHVuY2FsY3VsYXRlZE5vZGVzID0gdG91Y2hOb2Rlc1NlcGFyYXRlZC51bmNhbGN1bGF0ZWROb2RlcztcblxuICAgIC8vIERlYWwgd2l0aCB0b3VjaCBDb250cm9sc1xuICAgIGxldCB0b3VjaE5vZGVzID0gdG91Y2hOb2Rlc1NlcGFyYXRlZC50b3VjaE5vZGVzO1xuXG4gICAgZXhlY3V0YWJsZSArPSBnZW5lcmF0ZVRvdWNoQ29udHJvbGxlcnModG91Y2hOb2Rlcyk7XG5cbiAgICBmb3IgKGxldCB0IGluIHRvdWNoTm9kZXMpIHtcbiAgICAgICAgZm9yIChsZXQgbyBpbiB0b3VjaE5vZGVzW3RdLm91dHB1dHMpIHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZWROb2Rlcy5wdXNoKGAke3R9OiR7dG91Y2hOb2Rlc1t0XS5vdXRwdXRzW29dLnRpdGxlfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb25uZWN0aW9uIERpY3Rpb25hcnkgY29udGFpbnMgY29ubmVjdGlvbnMgaW4ga2V5OiB2YWx1ZSBmb3JtYXQsIHdoZXJlXG4gICAgLy8gYm90aCBjb250YWluIG5vZGVJZCBhbmQgc2V0dGluZ0lkIGFzIHN0cmluZ3Mgc2VwYXJhdGVkIGJ5IGEgY29sb24uXG4gICAgLy8gbGV0IGNvbm5lY3Rpb25EaWN0aW9uYXJ5ID0gZ2VuZXJhdGVDb25uZWN0aW9uRGljdGlvbmFyeShhbGxDb25uZWN0aW9ucyk7XG5cbiAgICAvLyBHZW5lcmFsIHJ1bGVzIGZvciBhbGdvcml0aG0gd3JpdGluZzpcbiAgICAvLyAqIHVzZSBhcyBtYW55IGZ1bmN0aW9ucyBhcyBwb3NzaWJsZSAoaW4gcGVyZm9ybWFuY2UgYm91bmRzKVxuICAgIC8vICogXG5cbiAgICAvLyAwLiBMb29wIHRocm91Z2ggdW5jYWxjdWxhdGVkIG5vZGVzIGFuZCBmaW5kIHNjb3Blcy4gU2NvcGVzIGRvIG5vdCBoYXZlIG91dHB1dHMsIHNvIG5vIG5lZWQgdG8gZmluZCBpbnB1dHMuXG4gICAgLy8gMC4wIERvIGl0IGluIGEgZnVuY3Rpb24/XG5cbiAgICAvLyAxLiBMb29wIHVudGlsIGFsbCBub2RlcyBhcmUgY2FsY3VsYXRlZFxuICAgIC8vIHwgICAxLiBDaGVjayBpZiBub2RlIHdhcyBjYWxjdWxhdGVkIGJlZm9yZSwgaWYgeWVzIGdvIHRvIG5leHQgbm9kZS4gKGZ1bmN0aW9uKVxuICAgIC8vIHwgICAyLiBJZiB3YXMgbm90IGNhbGN1bGF0ZWQ6XG4gICAgLy8gfCAgIHwgICAxLiBDaGVjayBpZiBhbGwgY29ubmVjdGVkIGlucHV0cyBhcmUgY29ubmVjdGVkIHRvIHRoZSBjYWxjdWxhdGVkIG5vZGVzLCBpZiBub3QgLSBnbyB0byBuZXh0IG5vZGUuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgfCAgIDIuIElmIHllcywgc2F2ZSBhbGwgdW5jb25uZWN0ZWQgaW5wdXRzICh2YWx1ZSBmcm9tIGRlZmF1bHQgdmFsdWUpLiAoZnVuY3Rpb24gZm9yIGVhY2ggc2F2ZSlcbiAgICAvLyB8ICAgfCAgIDMuIENoZWNrIGlmIG91dHB1dCBpcyBwb2ludGluZyB0byBhIGdlbmVyYXRvci4gKGZ1bmN0aW9uKVxuICAgIC8vIHwgICB8ICAgNC4gSWYgeWVzLCBwYXJzZSBnZW5lcmF0b3JcbiAgICAvLyB8ICAgfCAgIHwgICAxLiBTY2FuIGdlbmVyYXRvciBhbmQgc2F2ZSB2YXJpYWJsZXNcbiAgICAvLyB8ICAgfCAgIHwgICAyLiBJZiB2YXJpYWJsZSBpcyBhIGdlbmVyYXRvciBnbyB0byBzdGVwIDEuMi40XG4gICAgLy8gfCAgIHwgICB8ICAgMy4gTG9vcCB1bnRpbCBhbGwgZ2VuZXJhdG9ycyB3ZXJlIHBhcnNlZFxuICAgIC8vIHwgICB8ICAgfCAtLS0tLS0tLS0tLSBJbiBmb2xsb3dpbmcsIGlucHV0cyBhcmUgY2hlY2tlZCBmaXJzdCBzaW5jZSBzZXR0aW5nIGNhbiBiZSBhbiBpbnB1dCAtLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gfCAgIHwgICA1LiBDaGVjayBpZiBvdXRwdXQgaXMgcG9pbnRpbmcgdG8gYW4gaW5wdXQsIGlmIHllcyBhc3NpZ24gaW5wdXQgdmFyaWFibGUgdG8gdGhlIG91dHB1dCB2YXJpYWJsZVxuICAgIC8vIHwgICB8ICAgNi4gQ2hlY2sgaWYgb3V0cHV0IGlzIHBvaW50aW5nIHRvIGEgc2V0dGluZywgaWYgeWVzIGFzc2lnbiBjb25zdGFudCB0byB0aGUgc2V0dGluZ1xuICAgIC8vIDIuIEZvciBlYWNoIHNjb3BlOlxuICAgIC8vIHwgICAxLiBHZXQgYWxsIGlucHV0cyBhbmQgc2F2ZSB0aGVtIGluIHZhcmlhYmxlcyAoYXNzdW1lZCB0byBiZSBjYWxjdWxhdGVkIHNpbmNlIHRlcm1pbmF0aW9uIGNvbmRpdGlvbiBmcm9tIHN0ZXAgMSBpcyBiYXNlZCBvbiBhbGwgbm9kZXMgYmVpbmcgY2FsY3VsYXRlZC4pXG4gICAgLy8gfCAgIDIuIFBhcnNlIGZpcnN0IGdlbmVyYXRvciBhbmQgZ2VuZXJhdGUgc2NvcGUgb3V0cHV0IHZhcmlhYmxlIChtYWtpbmcgc3VyZSB0aGF0IGFsbCB2YXJpYWJsZXMgZnJvbSBnZW5lcmF0b3Igd2VyZSBzYXZlZCBiZWZvcmVoYW5kKVxuICAgIC8vIHwgICAzLiBHZW5lcmF0ZSBhbiBhcnJheSBvZiBvdXRwdXQgZGF0YSBiYXNlZCBvbiBnZW5lcmFsIChvciBjb25uZWN0ZWQpIHRpbWUgYXJyYXkgYW5kIHNhdmUgaXQgaW50byBhIHZhcmlhYmxlXG4gICAgLy8gfCAgIDQuIENyZWF0ZSByZWRyYXcgZnVuY3Rpb24sIGluc2lkZSB0aGF0IGZ1bmN0aW9uOlxuICAgIC8vIHwgICB8ICAgMS4gRmluZCBhcHByb3ByaWF0ZSBjYW52YXMgbm9kZSBpbiB0aGUgZG9tXG4gICAgLy8gfCAgIHwgICAyLiBHZXQgY29udGV4dFxuICAgIC8vIHwgICB8ICAgMy4gUmVwb3B1bGF0ZSBncmFwaCBhcnJheSB3aXRoIG5ldyBncmFwaHMuXG4gICAgLy8gfCAgIDUuIENyZWF0ZSB1cGRhdGVEYXRhIGZ1bmN0aW9uLCBpbnNpZGUgdGhhdCBmdW5jdGlvbjpcbiAgICAvLyB8ICAgfCAgIDEuIExvb3AgdGhyb3VnaCBncmFwaCBhcnJheSBhbmQgdXBkYXRlIGdyYXBocyB3aXRoIG5ldyBkYXRhLlxuXG5cbiAgICAvLyAwLjAgTG9vcCB0aHJvdWdoIGFsbCB1aSBub2RlcyBhbmQgc2F2ZSB0aGVpciBvdXRwdXQgdmFyaWFibGUgbmFtZXNcbiAgICBmb3IobGV0IG5vZGVLZXkgaW4gdWlOb2Rlcykge1xuICAgICAgICAvLyBTYXZlIGN1cnJlbnQgbm9kZSBpbnRvIGEgY29uc3RhbnRcbiAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB1aU5vZGVzW25vZGVLZXldO1xuICAgICAgICBjb25zdCBvdXRwdXRLZXkgPSBjdXJyZW50Tm9kZS5vdXRwdXRzWzBdLnRpdGxlO1xuXG4gICAgICAgIGV4ZWN1dGFibGUgKz0gYGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHtub2RlS2V5fUlucHV0XCIpLm9uaW5wdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJHtub2RlS2V5fSR7b3V0cHV0S2V5fSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke25vZGVLZXl9SW5kaWNhdG9yXCIpLmlubmVyVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH07XFxuYDtcbiAgICAgICAgZXhlY3V0YWJsZSArPSBgdmFyICR7bm9kZUtleX0ke291dHB1dEtleX0gPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gJHt1aU5vZGVzW25vZGVLZXldLnNldHRpbmdzWzNdLnZhbHVlfX07XFxuYDtcblxuICAgICAgICBjYWxjdWxhdGVkTm9kZXMucHVzaChgJHtub2RlS2V5fToke291dHB1dEtleX1gKTtcbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZSB1bmNhbGN1bGF0ZWROb2Rlc1tub2RlS2V5XTtcbiAgICB9XG4gICAgLy8gMS4gTG9vcCB1bnRpbCBhbGwgbm9kZXMgYXJlIGNhbGN1bGF0ZWQgYW5kIGNvdW50IG51bWJlciBvZiBpdGVyYXRpb25zIGZvciBzdGF0aXN0aWNzXG4gICAgZm9yIChzdGF0aXN0aWNzLmxvb3BDb3VudGVyID0gMDsgb2JqZWN0U2l6ZSh1bmNhbGN1bGF0ZWROb2RlcykgPiAwOyBzdGF0aXN0aWNzLmxvb3BDb3VudGVyKyspIHtcbiAgICAgICAgXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdW5jYWxjdWxhdGVkIG5vZGVzXG4gICAgICAgIGZvciAobGV0IG5vZGVLZXkgaW4gdW5jYWxjdWxhdGVkTm9kZXMpIHtcbiAgICAgICAgICAgIC8vIFNhdmUgY3VycmVudCBub2RlIGludG8gYSBjb25zdGFudFxuICAgICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB1bmNhbGN1bGF0ZWROb2Rlc1tub2RlS2V5XTtcblxuICAgICAgICAgICAgLy8gR28gdG8gbmV4dCBub2RlIGlmIG5vdCBhbGwgY29ubmVjdGVkIGlucHV0cyB3ZXJlIGNhbGN1bGF0ZWQgYWxyZWFkeVxuICAgICAgICAgICAgaWYgKCFhbGxJbnB1dHNDYWxjdWxhdGVkKG5vZGVLZXksIGN1cnJlbnROb2RlLmlucHV0cywgYWxsQ29ubmVjdGlvbnMsIGNhbGN1bGF0ZWROb2RlcykpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0czogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGV2ZXJ5IG91dHB1dCBvZiB0aGUgbm9kZSB0byBjYWxjdWxhdGUgdGhlbVxuICAgICAgICAgICAgZm9yIChsZXQgbyA9IDA7IG8gPCBjdXJyZW50Tm9kZS5vdXRwdXRzLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0S2V5ID0gY3VycmVudE5vZGUub3V0cHV0c1tvXS50aXRsZTtcbiAgICAgICAgICAgICAgICAvLyBJZiBjdXJyZW50IG91dHB1dCB3YXMgY2FsY3VsYXRlZCBhbHJlYWR5LCBza2lwIHRvIG5leHQgb25lXG4gICAgICAgICAgICAgICAgaWYgKHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzLCBub2RlS2V5LCBvdXRwdXRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlQ2FsY3VsYXRlZE91dHB1dHMucHVzaChgJHtub2RlS2V5fToke291dHB1dEtleX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgbm90LCBjYWxjdWxhdGUgaXQgYW5kIGFwcGVuZCB0byB0aGUgZXhlY3V0YWJsZSB0ZXh0LlxuICAgICAgICAgICAgICAgIGxldCB7IGV4ZSwgd2FzU3VjY2Vzc2Z1bCB9ID0gY2FsY3VsYXRlT3V0cHV0KG5vZGVLZXksIG91dHB1dEtleSwgY3VycmVudE5vZGUsIGFsbENvbm5lY3Rpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAod2FzU3VjY2Vzc2Z1bCkge1xuICAgICAgICAgICAgICAgICAgICBleGVjdXRhYmxlICs9IGV4ZTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkTm9kZXMucHVzaChgJHtub2RlS2V5fToke291dHB1dEtleX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBDb3VsZCBub3QgZ2VuZXJhdGUgb3V0cHV0IGNvZGU6ICR7bm9kZUtleX0gLSAke291dHB1dEtleX0gfCBzY3JpcHRHZW5lcmF0b3IudHNgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlQ2FsY3VsYXRlZE91dHB1dHMubGVuZ3RoID09PSBjdXJyZW50Tm9kZS5vdXRwdXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB1bmNhbGN1bGF0ZWROb2Rlc1tub2RlS2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIExvb3AgdGhyb3VnaCBhbGwgc2NvcGVzIGFuZCBkcmF3IGdyYXBoc1xuXG4gICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICBleGVjdXRhYmxlID0gXCJcIjtcblxuICAgIGV4ZWN1dGFibGUgKz0gXCJmdW5jdGlvbiB1cGRhdGUoKSB7XFxuXCI7XG5cbiAgICBsZXQgZ2lmUmVjb3JkaW5nU3RhcnQgPSBgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduYWxzLXJlY29yZGluZy1zdGFydFwiKS5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpc1JlY29yZGluZyA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbmFscy1yZWNvcmRpbmctc3RhcnRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25hbHMtcmVjb3JkaW5nLXN0b3BcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgYDtcblxuICAgIGxldCBnaWZSZWNvcmRpbmdTdG9wID0gYGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbmFscy1yZWNvcmRpbmctc3RvcFwiKS5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpc1JlY29yZGluZyA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25hbHMtcmVjb3JkaW5nLXN0YXJ0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbmFscy1yZWNvcmRpbmctc3RvcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGA7XG5cbiAgICAvLyBMb29wIHRocm91Z2ggdGltZSBzY29wZXNcbiAgICBmb3IgKGxldCBzIGluIGFsbFNjb3Blcykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2NvcGUgPSBhbGxTY29wZXNbc107XG5cbiAgICAgICAgbGV0IGRhdGFJbml0aWFsaXNlckFycmF5ID0gW107XG4gICAgICAgIGxldCBkYXRhR2VuZXJhdGlvbkFycmF5ID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTY29wZS5pbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBjdXJyZW50U2NvcGUuaW5wdXRzW2ldLnRpdGxlO1xuICAgICAgICAgICAgY29uc3QgeyBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQgfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7IG5vZGVJZDogcywgc2V0dGluZ0lkOiBpbnB1dFRpdGxlfSk7XG5cbiAgICAgICAgICAgIGRhdGFJbml0aWFsaXNlckFycmF5LnB1c2goYGxldCAke2lucHV0VGl0bGV9ZGF0YSA9IFtdO1xcbmApO1xuICAgICAgICAgICAgZGF0YUdlbmVyYXRpb25BcnJheS5wdXNoKGAke2lucHV0VGl0bGV9ZGF0YS5wdXNoKCR7b3RoZXJOb2RlSWR9JHtvdGhlclNldHRpbmdJZH0odFtpXSkpO1xcbmApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGFJbml0aWFsaXNlckNvbXBvc2l0ZSA9IFwiXCI7XG4gICAgICAgIGxldCBkYXRhR2VuZXJhdGlvbkNvbXBvc2l0ZSA9IFwiXCI7XG5cbiAgICAgICAgZm9yKGxldCBkIGluIGRhdGFJbml0aWFsaXNlckFycmF5KSB7XG4gICAgICAgICAgICBkYXRhSW5pdGlhbGlzZXJDb21wb3NpdGUgKz0gZGF0YUluaXRpYWxpc2VyQXJyYXlbZF07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGQgaW4gZGF0YUdlbmVyYXRpb25BcnJheSkge1xuICAgICAgICAgICAgZGF0YUdlbmVyYXRpb25Db21wb3NpdGUgKz0gZGF0YUdlbmVyYXRpb25BcnJheVtkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhR2VuZXJhdGlvblNuaXBwZXQgPSBgJHtkYXRhSW5pdGlhbGlzZXJDb21wb3NpdGV9XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICR7ZGF0YUdlbmVyYXRpb25Db21wb3NpdGV9XG4gICAgICAgICAgICB9YDtcblxuICAgICAgICBsZXQgZGF0YXNldHMgPSBbLi4uY3VycmVudFNjb3BlLnNldHRpbmdzXS5zbGljZSgzLCBjdXJyZW50U2NvcGUuc2V0dGluZ3MubGVuZ3RoKS5tYXAoKHNldHRpbmcsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBjdXJyZW50U2NvcGUuaW5wdXRzW2ldLnRpdGxlO1xuICAgICAgICAgICAgcmV0dXJuIGB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICcke2lucHV0VGl0bGUucmVwbGFjZShcIl9cIiwgXCIgXCIpfScsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcke3NldHRpbmcudmFsdWV9JyxcbiAgICAgICAgICAgICAgICBkYXRhOiAke2lucHV0VGl0bGV9ZGF0YVxuICAgICAgICAgICAgfWBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGRhdGFzZXRzQXJyYXlTbmlwcGV0ID0gXCJbXCI7XG4gICAgICAgIGZvcihsZXQgZCA9IDA7IGQgPCBkYXRhc2V0cy5sZW5ndGg7IGQrKykge1xuICAgICAgICAgICAgZGF0YXNldHNBcnJheVNuaXBwZXQgKz0gZGF0YXNldHNbZF07XG4gICAgICAgICAgICBpZihkICE9IChkYXRhc2V0cy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgIGRhdGFzZXRzQXJyYXlTbmlwcGV0ICs9IFwiLFwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFzZXRzQXJyYXlTbmlwcGV0ICs9IFwiXVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBleGVjdXRhYmxlICs9IGBcbiAgICAgICAgaWYoZ3JhcGhzLiR7c30pIHtcbiAgICAgICAgICAgICR7ZGF0YUdlbmVyYXRpb25TbmlwcGV0fVxuICAgICAgICAgICAgZ3JhcGhzLiR7c30uZGF0YS5kYXRhc2V0cyA9ICR7ZGF0YXNldHNBcnJheVNuaXBwZXR9O1xuICAgICAgICAgICAgZ3JhcGhzLiR7c30udXBkYXRlKCk7XG4gICAgICAgICAgICBpZih0eXBlb2YgJHtzfWdpZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBpZighbGFzdEZyYW1lVGltZXN0YW1wKSB7IFxuICAgICAgICAgICAgICAgICAgICBsYXN0RnJhbWVUaW1lc3RhbXAgPSBuZXcgRGF0ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZVNpbmNlTGFzdEZyYW1lID0gbm93IC0gbGFzdEZyYW1lVGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICBsYXN0RnJhbWVUaW1lc3RhbXAgPSBuZXcgRGF0ZTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wQ2FudmFzLndpZHRoID0gZ3JhcGhzLiR7c30uY2FudmFzLndpZHRoLzI7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBDYW52YXMuaGVpZ2h0ID0gZ3JhcGhzLiR7c30uY2FudmFzLmhlaWdodC8yO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEN0eCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wQ3R4LmZpbGxTdHlsZSA9IFwiI0ZGRlwiO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wQ3R4LmZpbGxSZWN0KDAsIDAsIHRlbXBDYW52YXMud2lkdGgsIHRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcEN0eC5kcmF3SW1hZ2UoZ3JhcGhzLiR7c30uY2FudmFzLCAwLCAwLCBncmFwaHMuJHtzfS5jYW52YXMud2lkdGgvMiwgZ3JhcGhzLiR7c30uY2FudmFzLmhlaWdodC8yKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LiR7c31naWYuYWRkRnJhbWUodGVtcEN0eCwge2RlbGF5OiB0aW1lU2luY2VMYXN0RnJhbWV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY2FudmFzTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHtzfVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHcgPSBjYW52YXNOb2RlLnBhcmVudE5vZGUub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB2YXIgaCA9IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbnZhc05vZGUud2lkdGggPSB3O1xuICAgICAgICAgICAgY2FudmFzTm9kZS5oZWlnaHQgPSBoO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzTm9kZS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgICAgICR7ZGF0YUdlbmVyYXRpb25TbmlwcGV0fVxuXG4gICAgICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbHM6IHQubWFwKHRpID0+IHRpLnRvRml4ZWQoMikpLCBkYXRhc2V0czogJHtkYXRhc2V0c0FycmF5U25pcHBldH19LFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM6IHsgbGluZTogeyB0ZW5zaW9uOiAwLCBzdGVwcGVkOiBmYWxzZSB9LCBwb2ludDogeyByYWRpdXM6IDAsIGhpdFJhZGl1czogMCwgaG92ZXJSYWRpdXM6IDAgfSB9LFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHsgZHVyYXRpb246IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcHM6IHsgZW5hYmxlZDogZmFsc2UgfSwgXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDogeyBkaXNwbGF5OiAke2N1cnJlbnRTY29wZS5pbnB1dHMubGVuZ3RoID4gMSA/ICd0cnVlJyA6ICdmYWxzZSd9IH1cbiAgICAgICAgICAgICAgICAgICAgJHsoY3VycmVudFNjb3BlLnNldHRpbmdzWzFdLnZhbHVlID09IFwiMFwiKSAmJiAoY3VycmVudFNjb3BlLnNldHRpbmdzWzJdLnZhbHVlID09IFwiMFwiKSA/ICcnIDogYCwgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5QXhlczogW3t0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogJHtwYXJzZUZsb2F0KGN1cnJlbnRTY29wZS5zZXR0aW5nc1sxXS52YWx1ZSkgKyBwYXJzZUZsb2F0KGN1cnJlbnRTY29wZS5zZXR0aW5nc1syXS52YWx1ZSkgLyAyfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46ICR7cGFyc2VGbG9hdChjdXJyZW50U2NvcGUuc2V0dGluZ3NbMV0udmFsdWUpIC0gcGFyc2VGbG9hdChjdXJyZW50U2NvcGUuc2V0dGluZ3NbMl0udmFsdWUpIC8gMn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFNpemU6ICR7cGFyc2VGbG9hdChjdXJyZW50U2NvcGUuc2V0dGluZ3NbMl0udmFsdWUpIC8gMTB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fV1cbiAgICAgICAgICAgICAgICAgICAgfWB9LCB0aXRsZTogeyBkaXNwbGF5OiB0cnVlLCB0ZXh0OiAnJHtjdXJyZW50U2NvcGUudGl0bGV9JywgcG9zaXRpb246ICdsZWZ0JyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdyYXBocy4ke3N9ID0gbXlDaGFydDtcbiAgICAgICAgfWA7XG5cbiAgICAgICAgZ2lmUmVjb3JkaW5nU3RhcnQgKz0gYHdpbmRvdy4ke3N9Z2lmID0gbmV3IEdJRih7XG4gICAgICAgICAgICB3b3JrZXJzOiAxLFxuICAgICAgICAgICAgcXVhbGl0eTogMTAsXG4gICAgICAgICAgICB3b3JrZXJTY3JpcHQ6IFwiL2dpZi53b3JrZXIuanNcIixcbiAgICAgICAgICAgIHdpZHRoOiBncmFwaHMuJHtzfS5jYW52YXMud2lkdGggLyAyLFxuICAgICAgICAgICAgaGVpZ2h0OiBncmFwaHMuJHtzfS5jYW52YXMuaGVpZ2h0IC8gMlxuICAgICAgICB9KTtgO1xuICAgICAgICBnaWZSZWNvcmRpbmdTdG9wICs9IGB3aW5kb3cuJHtzfWdpZi5vbignZmluaXNoZWQnLCBmdW5jdGlvbihibG9iKSB7XG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5hc3NpZ24oVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gICAgICAgICAgICBkb3dubG9hZChibG9iLCBcImFuaW0uZ2lmXCIsIFwiaW1hZ2UvZ2lmXCIpO1xuXG4gICAgICAgICAgICBkZWxldGUgd2luZG93LiR7c31naWY7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy4ke3N9Z2lmLnJlbmRlcigpO2BcblxuICAgICAgICBleGVBcnJheS5wdXNoKGV4ZWN1dGFibGUpO1xuICAgICAgICBleGVjdXRhYmxlID0gXCJcIjtcbiAgICB9XG5cbiAgICBleGVjdXRhYmxlICs9IGdpZlJlY29yZGluZ1N0YXJ0ICsgXCJ9O1xcblwiO1xuICAgIGV4ZWN1dGFibGUgKz0gZ2lmUmVjb3JkaW5nU3RvcCArIFwifTtcXG5cIjtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBmZnQgc2NvcGVzXG4gICAgZm9yKGxldCBmIGluIGZmdE5vZGVzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29wZSA9IGZmdE5vZGVzW2ZdO1xuICAgICAgICBjb25zdCB7IG90aGVyTm9kZUlkLCBvdGhlclNldHRpbmdJZCB9ID0gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoYWxsQ29ubmVjdGlvbnMsIG51bGwsIHsgbm9kZUlkOiBmLCBzZXR0aW5nSWQ6IFwic2lnbmFsXCIgfSk7XG5cbiAgICAgICAgZXhlY3V0YWJsZSArPSBgaWYoZ3JhcGhzLiR7Zn0pIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge2RhdGEucHVzaCgke290aGVyTm9kZUlkfSR7b3RoZXJTZXR0aW5nSWR9KHRbaV0pKTt9XG5cbiAgICAgICAgICAgIGxldCBmID0gbmV3IEZGVChkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgY29tcGxleE91dHB1dCA9IGYuY3JlYXRlQ29tcGxleEFycmF5KCk7XG4gICAgICAgICAgICBsZXQgcmVhbE91dHB1dCA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGYucmVhbFRyYW5zZm9ybShjb21wbGV4T3V0cHV0LCBkYXRhKTtcbiAgICAgICAgICAgIGYuZnJvbUNvbXBsZXhBcnJheShjb21wbGV4T3V0cHV0LCByZWFsT3V0cHV0KTtcblxuICAgICAgICAgICAgLy8gcmVhbE91dHB1dCA9IHJlYWxPdXRwdXQuZmlsdGVyKCh2YWwsIGkpID0+IGklMiA9PSAwIHx8IGkgPT0gMCk7XG5cbiAgICAgICAgICAgIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0LnNwbGljZSgwLCAke3BhcnNlSW50KGN1cnJlbnRTY29wZS5zZXR0aW5nc1syXS52YWx1ZSl9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVhbE91dHB1dCA9IHJlYWxPdXRwdXQubWFwKHZhbCA9PiB2YWwgKiAyIC8gZGF0YS5sZW5ndGgpO1xuXG4gICAgICAgICAgICBncmFwaHMuJHtmfS5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSByZWFsT3V0cHV0O1xuICAgICAgICAgICAgZ3JhcGhzLiR7Zn0udXBkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY2FudmFzTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHtmfVwiKTtcblxuICAgICAgICAgICAgdmFyIHZpZXdTaXplID0ge1xuICAgICAgICAgICAgICAgIHg6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICB5OiBjYW52YXNOb2RlLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB3ID0gdmlld1NpemUueDtcbiAgICAgICAgICAgIHZhciBoID0gdmlld1NpemUueTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FudmFzTm9kZS53aWR0aCA9IHc7XG4gICAgICAgICAgICBjYW52YXNOb2RlLmhlaWdodCA9IGg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXNOb2RlLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0W2ldKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBmID0gbmV3IEZGVChkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgY29tcGxleE91dHB1dCA9IGYuY3JlYXRlQ29tcGxleEFycmF5KCk7XG4gICAgICAgICAgICBmLnJlYWxUcmFuc2Zvcm0oY29tcGxleE91dHB1dCwgZGF0YSk7XG4gICAgICAgICAgICBsZXQgcmVhbE91dHB1dCA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICByZWFsT3V0cHV0LmZpbGwoMCk7XG4gICAgICAgICAgICBmLmZyb21Db21wbGV4QXJyYXkoY29tcGxleE91dHB1dCwgcmVhbE91dHB1dCk7XG5cbiAgICAgICAgICAgIC8vIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0LmZpbHRlcigodmFsLCBpKSA9PiBpJTIgPT0gMCB8fCBpID09IDApO1xuXG4gICAgICAgICAgICByZWFsT3V0cHV0ID0gcmVhbE91dHB1dC5zcGxpY2UoMCwgJHtwYXJzZUludChjdXJyZW50U2NvcGUuc2V0dGluZ3NbMl0udmFsdWUpfSk7XG5cbiAgICAgICAgICAgIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0Lm1hcCh2YWwgPT4gdmFsICogMiAvIGRhdGEubGVuZ3RoKTtcblxuICAgICAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiByZWFsT3V0cHV0Lm1hcCgodmFsLCBpKSA9PiBwYXJzZUZsb2F0KGkvMikudG9GaXhlZCgxKSksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2lnbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcke2N1cnJlbnRTY29wZS5zZXR0aW5nc1sxXS52YWx1ZX0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlYWxPdXRwdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcHBlZExpbmU6ICdtaWRkbGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDBcbiAgICAgICAgICAgICAgICAgICAgfSwgdG9vbHRpcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSwgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAke2N1cnJlbnRTY29wZS5pbnB1dHMubGVuZ3RoID4gMX1cbiAgICAgICAgICAgICAgICAgICAgfSwgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJHtjdXJyZW50U2NvcGUudGl0bGV9JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgfSwgZWxlbWVudHM6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB7IHRlbnNpb246IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50OiB7IHJhZGl1czogMCwgaGl0UmFkaXVzOiAwLCBob3ZlclJhZGl1czogMCB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHRvb2x0aXBzOiB7IGVuYWJsZWQ6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ3JhcGhzLiR7Zn0gPSBteUNoYXJ0O1xuICAgICAgICB9YDtcbiAgICB9XG5cbiAgICBleGVjdXRhYmxlICs9IFwifTtcXG5cIlxuICAgIGV4ZWN1dGFibGUgKz0gXCJ1cGRhdGUoKTtcIlxuXG4gICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICBleGVjdXRhYmxlID0gXCJcIjtcblxuICAgIHJldHVybiBleGVBcnJheTtcbn0iLCJpbXBvcnQgeyB0b2tlbml6ZUdlbmVyYXRvciwgR2VuZXJhdG9yU2VnbWVudCB9IGZyb20gJy4vZ2VuZXJhdG9yVG9rZW5pemVyJztcbmltcG9ydCB7IHRva2VuVG9KcyB9IGZyb20gJy4vdG9rZW5Ub0pzJztcblxuLy8gR2V0IGFsbCBub2RlcyB0aGF0IGFyZSBub3Qgc2NvcGVzLCBhbmQgc2F2ZSBzY29wZXMgaW50byB0aGVpciBvd24gY29sbGVjdGlvblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlTm9kZXMgKGFsbE5vZGVzOiBOb2RlQ29sbGVjdGlvbik6IHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IE5vZGVDb2xsZWN0aW9uLCBcbiAgICAgICAgYWxsU2NvcGVzOiBOb2RlQ29sbGVjdGlvbixcbiAgICAgICAgdWlOb2RlczogTm9kZUNvbGxlY3Rpb24sXG4gICAgICAgIGZmdE5vZGVzOiBOb2RlQ29sbGVjdGlvbixcbiAgICAgICAgdGltZTogTm9kZUNvbGxlY3Rpb24sXG4gICAgICAgIGFuaW1hdGlvbk5vZGVzOiBOb2RlQ29sbGVjdGlvblxuICAgIH0ge1xuICAgIGxldCB1bmNhbGN1bGF0ZWQ6IE5vZGVDb2xsZWN0aW9uID0ge307XG4gICAgbGV0IHNjb3BlczogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgdWlOb2RlczogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgZmZ0Tm9kZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG4gICAgbGV0IHRpbWVOb2RlczogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgYW5pbWF0aW9uTm9kZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG5cbiAgICBmb3IobGV0IGkgaW4gYWxsTm9kZXMpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBVSSBub2RlXG4gICAgICAgIGNvbnN0IGlzVGhpcmRMZXR0ZXJVcHBlckNhc2UgPSBTdHJpbmcoaSkuc3Vic3RyKDIsIDEpLnRvVXBwZXJDYXNlKCkgPT09IFN0cmluZyhpKS5zdWJzdHIoMiwgMSk7XG4gICAgICAgIGNvbnN0IGlzVUkgPSBTdHJpbmcoaSkuc3Vic3RyKDAsIDIpID09PSBcInVpXCI7XG4gICAgICAgIGNvbnN0IGlzQWN0dWFsVUkgPSBpc1VJICYmIGlzVGhpcmRMZXR0ZXJVcHBlckNhc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBzY29wZVxuICAgICAgICBjb25zdCBpc1Njb3BlID0gU3RyaW5nKGkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGlzIGFuIGZmdCBzY29wZVxuICAgICAgICBjb25zdCBpc0ZGVCA9IFN0cmluZyhpKS5zdWJzdHIoMCwgMykgPT09IFwiZmZ0XCI7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSB0aW1lIG5vZGVcbiAgICAgICAgY29uc3QgaXNUaW1lID0gU3RyaW5nKGkpLnN1YnN0cigwLCA0KSA9PT0gXCJ0aW1lXCI7XG5cbiAgICAgICAgLy8gQ0hlY2sgaWYgaXQgaXMgYW4gYW5pbWF0aW9uIG5vZGVcbiAgICAgICAgY29uc3QgaXNBbmltYXRpb24gPSBTdHJpbmcoaSkuc3Vic3RyKDAsIDkpID09PSBcImFuaW1hdGlvblwiO1xuXG4gICAgICAgIC8vIERvIHNlcGFyYXRpb25cbiAgICAgICAgaWYoaXNTY29wZSkge1xuICAgICAgICAgICAgc2NvcGVzW2ldID0gYWxsTm9kZXNbaV07XG4gICAgICAgIH0gZWxzZSBpZihpc0FjdHVhbFVJKSB7XG4gICAgICAgICAgICB1aU5vZGVzW2ldID0gYWxsTm9kZXNbaV07XG4gICAgICAgIH0gZWxzZSBpZihpc0ZGVCkge1xuICAgICAgICAgICAgZmZ0Tm9kZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIGlmKGlzVGltZSkge1xuICAgICAgICAgICAgdGltZU5vZGVzW2ldID0gYWxsTm9kZXNbaV07XG4gICAgICAgIH0gZWxzZSBpZihpc0FuaW1hdGlvbikge1xuICAgICAgICAgICAgYW5pbWF0aW9uTm9kZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuY2FsY3VsYXRlZFtpXSA9IGFsbE5vZGVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIHJlc3VsdHNcbiAgICByZXR1cm4ge1xuICAgICAgICB1bmNhbGN1bGF0ZWROb2RlczogdW5jYWxjdWxhdGVkLFxuICAgICAgICBhbGxTY29wZXM6IHNjb3BlcyxcbiAgICAgICAgdWlOb2RlczogdWlOb2RlcyxcbiAgICAgICAgZmZ0Tm9kZXM6IGZmdE5vZGVzLFxuICAgICAgICB0aW1lOiB0aW1lTm9kZXMsXG4gICAgICAgIGFuaW1hdGlvbk5vZGVzOiBhbmltYXRpb25Ob2Rlc1xuICAgIH07XG59XG5cbi8vIEdlbmVyYXRlIGNvbm5lY3Rpb24gZGljdGlvbmFyeVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnkgKGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHtbY29ubmVjdG9yU3RhcnQ6IHN0cmluZ106IHN0cmluZ30ge1xuICAgIGxldCBjb25uZWN0aW9uRGljdGlvbmFyeToge1tjb25uZWN0b3JTdGFydDogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFsbENvbm5lY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RvclN0YXJ0ID0gYWxsQ29ubmVjdGlvbnNbaV0uY29ubmVjdG9yU3RhcnQ7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RvckVuZCA9IGFsbENvbm5lY3Rpb25zW2ldLmNvbm5lY3RvckVuZDtcblxuICAgICAgICBjb25zdCBjb25uZWN0b3JTdGFydENvbWJpbmVkID0gY29ubmVjdG9yU3RhcnQubm9kZUlkICsgXCI6XCIgKyBjb25uZWN0b3JTdGFydC5zZXR0aW5nSWQ7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RvckVuZENvbWJpbmVkID0gY29ubmVjdG9yRW5kLm5vZGVJZCArIFwiOlwiICsgY29ubmVjdG9yRW5kLnNldHRpbmdJZDtcblxuICAgICAgICBjb25uZWN0aW9uRGljdGlvbmFyeVtjb25uZWN0b3JTdGFydENvbWJpbmVkXSA9IGNvbm5lY3RvckVuZENvbWJpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBjb25uZWN0aW9uRGljdGlvbmFyeTtcbn1cblxuLy8gQ2FsY3VsYXRlIG9iamVjdCBzaXplXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0U2l6ZSAob2JqOiBvYmplY3QpOiBudW1iZXIge1xuICAgIGxldCBjID0gMDtcbiAgICBmb3IobGV0IGkgaW4gb2JqKSBjKys7XG4gICAgcmV0dXJuIGMrKztcbn1cblxuLy8gQ2hlY2sgaWYgbm9kZSB3YXMgY2FsY3VsYXRlZCBhbHJlYWR5XG5leHBvcnQgZnVuY3Rpb24gd2FzQ2FsY3VsYXRlZChjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdLCBub2RlS2V5OiBzdHJpbmcsIG91dHB1dEtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNhbGN1bGF0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBTcGxpdCBzdHJpbmcgZnJvbSBjYWxjdWxhdGVkIG5vZGVzIGFycmF5IGFuZCBnZXQgbm9kZSBhbmQgb3V0cHV0IGtleXNcbiAgICAgICAgY29uc3Qgc3BsaXR0ZWQgPSBjYWxjdWxhdGVkTm9kZXNbaV0uc3BsaXQoXCI6XCIpO1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkTm9kZSA9IHNwbGl0dGVkWzBdO1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkT3V0cHV0ID0gc3BsaXR0ZWRbMV07XG5cbiAgICAgICAgaWYoY2FsY3VsYXRlZE5vZGUgPT09IG5vZGVLZXkgJiYgY2FsY3VsYXRlZE91dHB1dCA9PT0gb3V0cHV0S2V5KSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIEdldCBub2RlSWQgYW5kIHNldHRpbmdJZCBvZiB0aGUgb3RoZXIgc2lkZSBvZiB0aGUgY29ubmVjdGlvbjpcbmV4cG9ydCBmdW5jdGlvbiBnZXRPdGhlclNpZGVPZkNvbm5lY3RvcihcbiAgICBhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10sIFxuICAgIGNvbm5lY3RvcklucHV0Pzoge25vZGVJZDogc3RyaW5nLCBzZXR0aW5nSWQ6IHN0cmluZ30sXG4gICAgY29ubmVjdG9yT3V0cHV0Pzoge25vZGVJZDogc3RyaW5nLCBzZXR0aW5nSWQ6IHN0cmluZ30pOiB7b3RoZXJOb2RlSWQ6IHN0cmluZywgb3RoZXJTZXR0aW5nSWQ6IHN0cmluZ30ge1xuXG4gICAgaWYoY29ubmVjdG9ySW5wdXQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTY2FubmluZyBjb25uZWN0b3Igc3RhcnRzLi4uXCIpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29ubmVjdG9yID0gYWxsQ29ubmVjdGlvbnNbaV07XG4gICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjb25uZWN0b3Igc3RhcnRcbiAgICAgICAgICAgIGlmKGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5ub2RlSWQgPT09IGNvbm5lY3RvcklucHV0Lm5vZGVJZCkge1xuICAgICAgICAgICAgICAgIGlmKGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5zZXR0aW5nSWQgPT09IGNvbm5lY3RvcklucHV0LnNldHRpbmdJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JFbmQubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJTZXR0aW5nSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JFbmQuc2V0dGluZ0lkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbm5lY3Rvck91dHB1dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNjYW5uaW5nIGNvbm5lY3RvciBlbmRzLi4uIFwiLCBhbGxDb25uZWN0aW9ucy5sZW5ndGgpO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFsbENvbm5lY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb25uZWN0b3IgPSBhbGxDb25uZWN0aW9uc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDb21wYXJpbmcgZm9sbG93aW5nIGNvbm5lY3RvcnM6IFwiLCBjb25uZWN0b3IuY29ubmVjdG9yRW5kLCBjb25uZWN0b3JPdXRwdXQpXG4gICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjb25uZWN0b3IgZW5kXG4gICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yRW5kLm5vZGVJZCA9PT0gY29ubmVjdG9yT3V0cHV0Lm5vZGVJZCkge1xuICAgICAgICAgICAgICAgIGlmKGNvbm5lY3Rvci5jb25uZWN0b3JFbmQuc2V0dGluZ0lkID09PSBjb25uZWN0b3JPdXRwdXQuc2V0dGluZ0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlck5vZGVJZDogY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0Lm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyU2V0dGluZ0lkOiBjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvdGhlck5vZGVJZDogbnVsbCxcbiAgICAgICAgb3RoZXJTZXR0aW5nSWQ6IG51bGxcbiAgICB9XG59XG5cbi8vIENoZWNrIGlmIGFsbCBjb25uZWN0ZWQgaW5wdXRzIGluIHRoZSBub2RlIGFyZSBjb25uZWN0ZWQgdG8gdGhlIG91dHB1dHMgdGhhdCB3ZXJlIGFscmVhZHkgY2FsY3VsYXRlZCBvciBhcmUgbm90IGNvbm5lY3RlZFxuZXhwb3J0IGZ1bmN0aW9uIGFsbElucHV0c0NhbGN1bGF0ZWQobm9kZUlkOiBzdHJpbmcsIGlucHV0czogTm9kZUlucHV0U2hhcGVbXSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgbGV0IGRhdGE6IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudERhdGEgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7bm9kZUlkOiBub2RlSWQsIHNldHRpbmdJZDogaW5wdXRzW2ldLnRpdGxlfSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGNvbm5lY3RlZFxuICAgICAgICBpZihvdGhlck5vZGVJZCAmJiBvdGhlclNldHRpbmdJZCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2FzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIGlmKHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzLCBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIG5vdCBjb25uZWN0ZWRcbiAgICAgICAgICAgIGN1cnJlbnREYXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaChjdXJyZW50RGF0YSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBkIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGFbZF0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIHNwZWNpZmljIG91dHB1dCBvZiB0aGUgbm9kZVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU91dHB1dChcbiAgICBub2RlSWQ6IHN0cmluZywgXG4gICAgb3V0cHV0S2V5OiBzdHJpbmcsIFxuICAgIGN1cnJlbnROb2RlOiBTaWduYWxOb2RlLFxuICAgIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHsgZXhlOiBzdHJpbmcsIHdhc1N1Y2Nlc3NmdWw6IGJvb2xlYW4gfSB7XG4gICAgXG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgY29uc3QgZ2VuZXJhdG9ySWQgPSBpc0dlbmVyYXRvcihjdXJyZW50Tm9kZSwgb3V0cHV0S2V5KTtcblxuICAgIC8vIENoZWNrIGlmIG91dHB1dCBpcyBhIGdlbmVyYXRvclxuICAgIGlmKGdlbmVyYXRvcklkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBjb25zdCBvdXRwdXRHZW5lcmF0b3IgPSBjdXJyZW50Tm9kZS5nZW5lcmF0b3JzW2dlbmVyYXRvcklkXTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSB0b2tlbnNcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdG9rZW5pemVHZW5lcmF0b3Iob3V0cHV0R2VuZXJhdG9yLnZhbHVlLCBub2RlSWQpO1xuXG4gICAgICAgIC8vIFNhdmUgdmFyaWFibGVzIGZpcnN0XG4gICAgICAgIGUgKz0gc2F2ZVZhcmlhYmxlcyhub2RlSWQsIGN1cnJlbnROb2RlLCB0b2tlbnMsIGFsbENvbm5lY3Rpb25zKTtcblxuICAgICAgICAvLyBTYXZlIG91dHB1dFxuICAgICAgICBlICs9IHRva2VuVG9Kcyhub2RlSWQsIG91dHB1dEdlbmVyYXRvci50aXRsZSwgdG9rZW5zKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRJZCA9IGlzSW5wdXQoY3VycmVudE5vZGUsIG91dHB1dEtleSk7XG5cbiAgICBpZihpbnB1dElkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IHNhdmVJbnB1dFZhcmlhYmxlKGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUlkLCBvdXRwdXRLZXksIGlucHV0SWQpO1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZUlkfSR7Y3VycmVudE5vZGUuaW5wdXRzW2lucHV0SWRdLnRpdGxlfX07XFxuYDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dGluZ0lkID0gaXNTZXR0aW5nKGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuXG4gICAgaWYoc2V0dGluZ0lkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7Y3VycmVudE5vZGUuc2V0dGluZ3Nbc2V0dGluZ0lkXS52YWx1ZX19O1xcbmA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4ZTogZSxcbiAgICAgICAgICAgIHdhc1N1Y2Nlc3NmdWw6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGV4ZTogXCJcIixcbiAgICAgICAgd2FzU3VjY2Vzc2Z1bDogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVWYXJpYWJsZXMobm9kZUtleTogc3RyaW5nLCBub2RlOiBTaWduYWxOb2RlLCBjb2RlOiBHZW5lcmF0b3JTZWdtZW50W10sIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBzID0gMDsgcyA8IGNvZGUubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgaWYoY29kZVtzXS50eXBlID09PSBcInZhclwiKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJOYW1lOiBzdHJpbmcgPSBTdHJpbmcoY29kZVtzXS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJOYW1lLnN1YnN0cihub2RlS2V5Lmxlbmd0aCwgdmFyTmFtZS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTUEVDSUFMIENBU0UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZih2YXJOYW1lID09PSBcIlBJXCIgfHwgdmFyTmFtZSA9PT0gXCJ0aW1lXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBJTlBVVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgaW5wdXQgaW5kZXhcbiAgICAgICAgICAgIGxldCBpbnB1dEtleTogbnVtYmVyID0gaXNJbnB1dChub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiB2YXJpYWJsZSBpcyB0aGUgaW5wdXQgKGlmIG5vdCBpbnB1dCBpdCB3aWxsIGJlIEluZmluaXR5KVxuICAgICAgICAgICAgaWYoaW5wdXRLZXkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZVxuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gc2F2ZUlucHV0VmFyaWFibGUobm9kZSwgYWxsQ29ubmVjdGlvbnMsIG5vZGVLZXksIHZhcmlhYmxlTmFtZSwgaW5wdXRLZXkpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEZvdW5kIHZhcmlhYmxlIGluIGlucHV0cyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBbmQgY29udGludWUgdG8gdGhlIG5leHQgc3RlcCBpbiB0aGUgdG9rZW5pc2VkIGdlbmVyYXRvciBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIEdFTkVSQVRPUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgZ2VuZXJhdG9yIGluZGV4XG4gICAgICAgICAgICBsZXQgZ2VuZXJhdG9yS2V5OiBudW1iZXIgPSBpc0dlbmVyYXRvcihub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiBnZW5lcmF0b3IgaW5kZXggaXMgbm90IGFuIEluZmluaXR5LCB0aGUgc2V0dGluZyBpcyB0aGUgZ2VuZXJhdG9yLCBhbmQgc2hvdWxkIGJlIHByb2Nlc3NlZCBhcyBvbmVcbiAgICAgICAgICAgIGlmKGdlbmVyYXRvcktleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSBub2RlLmdlbmVyYXRvcnNbZ2VuZXJhdG9yS2V5XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHRva2VuaXplR2VuZXJhdG9yKGdlbmVyYXRvci52YWx1ZSwgbm9kZUtleSk7XG5cbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgdG9rZW5zLCBhbGxDb25uZWN0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBnZW5lcmF0b3IgdGl0bGVcbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHRva2VuVG9Kcyhub2RlS2V5LCBnZW5lcmF0b3IudGl0bGUsIHRva2Vucyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gZ2VuZXJhdG9ycyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0byB0aGUgbmV4dCB0b2tlblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTRVRUSU5HIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBzZXR0aW5nIGluZGV4XG4gICAgICAgICAgICBsZXQgc2V0dGluZ0tleTogbnVtYmVyID0gaXNTZXR0aW5nKG5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHNldHRpbmcgaW5kZXggaXMgbm90IGluZmluaXR5IC0gaXQncyBhIG1hdGNoIVxuICAgICAgICAgICAgaWYoc2V0dGluZ0tleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gc2V0dGluZ3MgJHt2YXJpYWJsZU5hbWV9IC0gJHtub2RlS2V5fWApO1xuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gYHZhciAke25vZGVLZXl9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZS5zZXR0aW5nc1tzZXR0aW5nS2V5XS52YWx1ZX0gfTtcXG5gO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBOT1QgQU5ZIE9GIFRIUkVFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIElmIG5vdCBvbmUgb2YgcHJldmlvdXMgdGhyZWUsIGFsZXJ0IHVzZXIuXG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IGBhbGVydChcIkNvdWxkbid0IGZpbmQgZ2VuZXJhdG9yIHZhcmlhYmxlIGluIHRoZSBpbnB1dHMsIGdlbmVyYXRvcnMgb3Igc2V0dGluZ3MhICR7bm9kZUtleX0gLSAke3Zhck5hbWV9XCIpO1xcbmA7XG4gICAgICAgIH0gZWxzZSBpZihjb2RlW3NdLnR5cGUgPT09IFwibWF0aFwiIHx8IGNvZGVbc10udHlwZSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgY29kZVtzXS5jb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gc2F2ZUlucHV0VmFyaWFibGUobm9kZTogU2lnbmFsTm9kZSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBub2RlS2V5OiBzdHJpbmcsIHNldHRpbmdLZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGU6IHN0cmluZztcbiAgICBjb25zdCBjb25uZWN0b3JFbmQgPSB7XG4gICAgICAgIG5vZGVJZDogbm9kZUtleSxcbiAgICAgICAgc2V0dGluZ0lkOiBzZXR0aW5nS2V5XG4gICAgfVxuICAgIFxuICAgIGxldCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCBjb25uZWN0b3JFbmQpO1xuXG4gICAgLy8gY29uc29sZS5sb2coYFRyYWNpbmcgYmFjayB0aGUgaW5wdXQ6ICR7bm9kZUtleX06JHtzZXR0aW5nS2V5fSAtPiAke290aGVyTm9kZUlkfToke290aGVyU2V0dGluZ0lkfWApO1xuICAgIFxuICAgIC8vIElmIG5vZGUgaXMgY29ubmVjdGVkXG4gICAgaWYob3RoZXJOb2RlSWQgJiYgb3RoZXJTZXR0aW5nSWQpIHtcbiAgICAgICAgLy8gU2F2ZSBcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0aW1lKX07XFxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTYXZlIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtub2RlLmlucHV0c1tpbmRleF0uZGVmYXVsdH19O1xcbmBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gaXNJbnB1dCAobm9kZTogU2lnbmFsTm9kZSwgc2V0dGluZ0tleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBDaGVjayBpZiB2YXJpYWJsZSBpcyBpbiBpbnB1dHNcbiAgICBpZihub2RlLmlucHV0cykge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZS5pbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIElmIHZhcmlhYmxlIGlzIHRoZSBpbnB1dCwgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIGlmKG5vZGUuaW5wdXRzW2ldLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW5maW5pdHk7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5nZW5lcmF0b3JzKSB7XG4gICAgICAgIGlmKG5vZGUuZ2VuZXJhdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IobGV0IGcgPSAwOyBnIDwgbm9kZS5nZW5lcmF0b3JzLmxlbmd0aDsgZysrKSB7XG4gICAgICAgICAgICAgICAgaWYobm9kZS5nZW5lcmF0b3JzW2ddLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cblxuZnVuY3Rpb24gaXNTZXR0aW5nKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5zZXR0aW5ncykge1xuICAgICAgICBmb3IobGV0IHMgPSAwOyBzIDwgbm9kZS5zZXR0aW5ncy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gc2V0dGluZ0tleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEluZmluaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hJbnB1dHMoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKToge3VuY2FsY3VsYXRlZE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgdG91Y2hOb2RlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgbmV3Q29sbGVjdGlvbjogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgbmV3VG91Y2hDb2xsZWN0aW9uOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuXG4gICAgZm9yKGxldCBuIGluIGFsbE5vZGVzKSB7XG4gICAgICAgIGlmKG4uc3Vic3RyKDAsIDEwKSA9PT0gXCJ0b3VjaElucHV0XCIpIHtcbiAgICAgICAgICAgIG5ld1RvdWNoQ29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IG5ld0NvbGxlY3Rpb24sXG4gICAgICAgIHRvdWNoTm9kZXM6IG5ld1RvdWNoQ29sbGVjdGlvblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lKHN0YXJ0OiBudW1iZXIsIHN0b3A6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGBsZXQgdCA9IChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgciA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAke3N0YXJ0fTsgaSA8ICR7c3RvcH07IGkrPSR7c3RlcH0pIHtcbiAgICAgICAgICAgIHIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9KSgpO2Bcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyhub2RlczogTm9kZUNvbGxlY3Rpb24pOiBzdHJpbmcge1xuICAgIGxldCBlID0gXCJcIjtcblxuICAgIGZvcihsZXQgaSBpbiBub2Rlcykge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG5cbiAgICAgICAgbGV0IHNlbnNpdGl2aXR5OiBOb2RlU2V0dGluZ3NTaGFwZTtcbiAgICAgICAgbGV0IGF0dGFjaGVkU2NvcGU6IE5vZGVTZXR0aW5nc1NoYXBlO1xuXG4gICAgICAgIC8vIFNlcGFyYXRlIHNldHRpbmdzXG4gICAgICAgIGZvcihsZXQgcyBpbiBub2RlLnNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIlNlbnNpdGl2aXR5XCIpIHtcbiAgICAgICAgICAgICAgICBzZW5zaXRpdml0eSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJTY29wZVwiKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoZWRTY29wZSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb3VjaCBub2RlIGlzIG5vdCBjb3JyZWN0bHkgZm9ybWF0dGVkLlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgb2Zmc2V0U2NyaXB0ID0gYGlmKCFkaWRBdHRhY2gke2l9KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7YXR0YWNoZWRTY29wZS52YWx1ZX1cIikub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRYRGF0YSArPSBlLm1vdmVtZW50WCoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFlEYXRhICs9IGUubW92ZW1lbnRZKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHthdHRhY2hlZFNjb3BlLnZhbHVlfVwiKS5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWT0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNoZW5kID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZW1lbnRYID0gd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCAtIGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudFkgPSB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRYRGF0YSArPSBtb3ZlbWVudFgqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG4gICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRZRGF0YSArPSBtb3ZlbWVudFkqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkaWRBdHRhY2gke2l9T2Zmc2V0WCA9IHRydWU7XG4gICAgICAgICAgICBkaWRBdHRhY2gke2l9T2Zmc2V0WSA9IHRydWU7XG4gICAgICAgIH1cXG5gO1xuXG4gICAgICAgIGZvcihsZXQgbyBpbiBub2RlLm91dHB1dHMpIHtcbiAgICAgICAgICAgIGUgKz0gYHZhciAke2l9JHtub2RlLm91dHB1dHNbb10udGl0bGV9RGF0YSA9IDE7XFxuYDtcbiAgICAgICAgICAgIGUgKz0gYHZhciBkaWRBdHRhY2gke2l9ID0gZmFsc2U7XFxuYDtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlICs9IGB2YXIgJHtpfSR7bm9kZS5vdXRwdXRzW29dLnRpdGxlfSA9IGZ1bmN0aW9uKHRpbWUpIHsgcmV0dXJuICR7aX0ke25vZGUub3V0cHV0c1tvXS50aXRsZX1EYXRhIH07XFxuYFxuICAgICAgICB9XG5cbiAgICAgICAgZSArPSBvZmZzZXRTY3JpcHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlQW5pbWF0aW9uKG5vZGU6IFNpZ25hbE5vZGUsIG5vZGVLZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdHlwZSA9IG5vZGUuc2V0dGluZ3NbMl0udmFsdWU7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcIm9zY2lsbGF0b3JcIjoge1xuICAgICAgICAgICAgcmV0dXJuIGB2YXIgJHtub2RlS2V5fSR7bm9kZS5vdXRwdXRzWzBdLnRpdGxlfSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gTWF0aC5zaW4oTWF0aC5QSSoyKmFuaW1hdGlvblRpbWUqJHtub2RlLnNldHRpbmdzWzBdLnZhbHVlfSkgKyAke25vZGUuc2V0dGluZ3NbMV0udmFsdWV9fTtgO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIGB2YXIgJHtub2RlS2V5fSR7bm9kZS5vdXRwdXRzWzBdLnRpdGxlfSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYW5pbWF0aW9uVGltZSooJHtub2RlLnNldHRpbmdzWzBdLnZhbHVlfSkgKyAke25vZGUuc2V0dGluZ3NbMV0udmFsdWV9fTtgO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFuaW1hdGlvblRpbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGlmKHR5cGVvZiBkZWx0YVRpbWUgPT0gJ3VuZGVmaW5lZCcpIHdpbmRvdy5kZWx0YVRpbWUgPSA2MDtcbiAgICB2YXIgYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBhbmltYXRpb25UaW1lICs9IGRlbHRhVGltZS8xMDAwO1xuICAgICAgICB1cGRhdGUoKTtcbiAgICB9LCBkZWx0YVRpbWUpO2Bcbn0iLCIvLyBBcyBhIHJlbWluZGVyOlxuLy8gT25lIGl0ZW0gaW4gYW4gYXJyYXkgb2YgdG9rZW5zIGNhbiBvbmx5IGJlIGFuIG9iamVjdCBhbmQgb25seSBoYXZlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuLy8gKiB0eXBlICAgICAgICAgICAtIGZvciBldmVyeSB0b2tlblxuLy8gKiB2YWx1ZSAgICAgICAgICAtIGZvciBldmVyeSB0b2tlblxuLy8gKiBjb2RlICAtIGZvciBzY29wZXMgKG1hdGgvcmVndWxhcilcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuVG9KcyAobm9kZUlkLCB2YXJpYWJsZU5hbWUsIGpzb25Ub2tlbnMpIHtcbiAgICBsZXQgZXhlY3V0YWJsZVN0cmluZyA9IGB2YXIgJHtub2RlSWR9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24odGltZSkgeyByZXR1cm4gYDtcbiAgICBcbiAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUoWy4uLmpzb25Ub2tlbnNdKVxuXG4gICAgcmV0dXJuIGV4ZWN1dGFibGVTdHJpbmcgKyBcIn07XFxuXCI7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNvZGUoanNvbikge1xuICAgIGxldCBleGVjdXRhYmxlU3RyaW5nID0gXCJcIjtcblxuICAgIGlmKGpzb24gPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBWYXJpYWJsZXMgZm9yIGNvbnZlbmllbmNlXG4gICAgICAgIGNvbnN0IHRva2VuID0ganNvbltpXTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRva2VuLnR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdG9rZW4udmFsdWU7XG5cbiAgICAgICAgLy8gQWN0dWFsIGxvZ2ljXG4gICAgICAgIGlmKHR5cGUgIT0gXCJzY29wZVwiICYmIHR5cGUgIT0gXCJtYXRoXCIpIHtcbiAgICAgICAgICAgIC8vIE9uZSBvZiB0aGUgYmFzaWMgdHlwZXNcblxuICAgICAgICAgICAgaWYodmFsdWUgPT09ICdQSScpIHtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC5QSVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInZhclwiICYmIHZhbHVlICE9PSBcInRpbWVcIikge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gYCR7dmFsdWV9KHRpbWUpYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIm1hdGhcIikge1xuICAgICAgICAgICAgLy8gTWF0aCBmdW5jdGlvblxuXG4gICAgICAgICAgICBpZih2YWx1ZSA9PT0gXCJzaW5cIikge1xuICAgICAgICAgICAgICAgIC8vIElmIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZ1bmN0aW9ucywgcmVjdXJzZXZseSBnZW5lcmF0ZSBzdHJpbmcgZnJvbSB0aGUgY29kZSBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC5zaW4oXCI7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIpXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT09IFwiY29zXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmdW5jdGlvbnMsIHJlY3Vyc2V2bHkgZ2VuZXJhdGUgc3RyaW5nIGZyb20gdGhlIGNvZGUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguY29zKFwiO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKTtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09PSBcInRhblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBzdXBwb3J0ZWQgZnVuY3Rpb25zLCByZWN1cnNldmx5IGdlbmVyYXRlIHN0cmluZyBmcm9tIHRoZSBjb2RlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLnRhbihcIjtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PT0gXCJzcXdcIikge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLnNxdyhcIjtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PT0gXCJleHBcIikge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLmV4cChcIjtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm90IHN1cHBvcnRlZCBmdW5jdGlvbiwgdGhyb3cgZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5zdXBwb3J0ZWQgbWF0aCBmdW5jdGlvbiAhISFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZWd1bGFyIHNjb3BlXG5cbiAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIoXCIgKyBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXhlY3V0YWJsZVN0cmluZztcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSAoc2V0dGluZ3NDb3VudCwgc2NvcGVDb3VudCkgPT4ge1xuICAgIC8vIGNvbnN0IGlzT25seVNjb3BlcyA9IChzZXR0aW5nc0NvdW50ID09PSAwICYmIHNjb3BlQ291bnQgPiAwKTtcbiAgICAvLyBjb25zdCBpc09ubHlTZXR0aW5ncyA9IChzZXR0aW5nc0NvdW50ID4gMCAmJiBzY29wZUNvdW50ID09PSAwKTtcbiAgICBjb25zdCBpc1NldHRpbmdzQW5kU2NvcGVzID0gKHNldHRpbmdzQ291bnQgPiAwICYmIHNjb3BlQ291bnQgPiAwKTtcbiAgICBcbiAgICBjb25zdCBpc0RpdmlkYWJsZUJ5VHdvID0gc2NvcGVDb3VudCUyID09IDA7XG5cbiAgICByZXR1cm4gYCNzaWduYWxzLWVtYmVkZGluZy1tYWluIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCBhdXRvO1xuICAgIH1cblxuICAgICNzaWduYWxzLWVtYmVkZGluZy1jb250cm9scyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIH1cblxuICAgIC5zaWduYWxzLWVtYmVkZGluZy1jb250cm9sLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtZW1iZWRkaW5nLWNvbnRyb2wtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcbiAgICB9XG4gICAgXG4gICAgI3NpZ25hbHMtZW1iZWRkaW5nLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgJHtpc1NldHRpbmdzQW5kU2NvcGVzID9cbiAgICAgICAgICAgIGBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBjYWxjKDEwMCUgLSAzMDBweCk7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7YCBcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLnNpZ25hbHMtY2FudmFzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5jYW52YXMtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI3NpZ25hbHMtdmlld3Mge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIFxuICAgICAgICAkeyFpc0RpdmlkYWJsZUJ5VHdvIHx8IHNjb3BlQ291bnQgPCAzID8gYGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KCR7c2NvcGVDb3VudH0sICR7cGFyc2VGbG9hdCgxMDAvc2NvcGVDb3VudCkudG9GaXhlZCgyKX0lKTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO2BcbiAgICAgICAgOiBgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoJHtzY29wZUNvdW50LzJ9LCAxZnIpO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7YH1cbiAgICAgICAgJHtpc1NldHRpbmdzQW5kU2NvcGVzID8gYGdyaWQtY29sdW1uOiAyIC8gMztgIDogJyd9XG4gICAgfVxuXG4gICAgJHtpc1NldHRpbmdzQW5kU2NvcGVzID8gYCNzaWduYWxzLXNldHRpbmdzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cblxuICAgICNzaWduYWxzLXNldHRpbmdzLWxpc3Qge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA0ZnI7XG4gICAgICAgIGdyaWQtZ2FwOiA1cHg7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtc2V0dGluZ3Mtc2xpZGVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNGZyIDFmcjtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1zbGlkZXIgZGl2IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5zaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbSBoNiB7XG4gICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0gaW5wdXQge1xuXG4gICAgfVxuICAgIFxuICAgIC5zaWduYWxzLXNldHRpbmdzLWxpc3QtbGFiZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9YDonJ31cbmB9O1xuXG5leHBvcnQgZnVuY3Rpb24ganN4RG9tIChub2Rlcykge1xuICAgIGxldCBjYW52YXNOb2RlcyA9IFtdO1xuXG4gICAgLy8gR2V0IGFsbCBraW5kcyBvZiBvdXRwdXQgbm9kZXNcbiAgICBmb3IobGV0IGtleSBpbiBub2Rlcykge1xuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2Rlc1trZXldO1xuXG4gICAgICAgIGlmKFN0cmluZyhrZXkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiIHx8IFN0cmluZyhrZXkpLnN1YnN0cigwLCAzKSA9PT0gXCJmZnRcIikge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuaWQgPSBrZXk7XG4gICAgICAgICAgICBjYW52YXNOb2Rlcy5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzZXR0aW5nc05vZGVzID0gW107XG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcblxuICAgIFxuICAgIGZvcihsZXQga2V5IGluIG5vZGVzKSB7XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGVzW2tleV07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpc1RoaXJkTGV0dGVyVXBwZXJDYXNlID0gU3RyaW5nKGtleSkuc3Vic3RyKDIsIDEpLnRvVXBwZXJDYXNlKCkgPT09IFN0cmluZyhrZXkpLnN1YnN0cigyLCAxKTtcbiAgICAgICAgY29uc3QgaXNVSSA9IFN0cmluZyhrZXkpLnN1YnN0cigwLCAyKSA9PT0gXCJ1aVwiO1xuICAgICAgICBjb25zdCBpc0FjdHVhbFVJID0gaXNVSSAmJiBpc1RoaXJkTGV0dGVyVXBwZXJDYXNlO1xuICAgICAgICBcbiAgICAgICAgaWYoaXNBY3R1YWxVSSkge1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5U2F2ZWRBbHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IGN1cnJlbnROb2RlLnNldHRpbmdzWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICBmb3IobGV0IGMgaW4gY2F0ZWdvcmllcykge1xuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3JpZXNbY10gPT0gY3VycmVudENhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5U2F2ZWRBbHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighY2F0ZWdvcnlTYXZlZEFscmVhZHkpIHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY3VycmVudENhdGVnb3J5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudE5vZGUuaWQgPSBrZXk7XG4gICAgICAgICAgICBzZXR0aW5nc05vZGVzLnB1c2goY3VycmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNldHRpbmdzTm9kZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIGNvbnN0IGNhdDEgPSBhLnNldHRpbmdzWzBdLnZhbHVlO1xuICAgICAgICBjb25zdCBjYXQyID0gYi5zZXR0aW5nc1swXS52YWx1ZTtcblxuICAgICAgICBpZihjYXQxID09PSBjYXQyKSB7XG4gICAgICAgICAgICBjb25zdCBvcmRlcjEgPSBwYXJzZUludChhLnNldHRpbmdzWzJdLnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyMiA9IHBhcnNlSW50KGIuc2V0dGluZ3NbMl0udmFsdWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gb3JkZXIxIC0gb3JkZXIyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0QXJyID0gW2NhdDEsIGNhdDJdO1xuICAgICAgICAgICAgY2F0QXJyLnNvcnQoKTtcblxuICAgICAgICAgICAgaWYoY2F0QXJyWzBdID09PSBjYXQxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU29ydCBieSBjYXRlZ29yeTpcblxuICAgIGNhdGVnb3JpZXMuc29ydCgpO1xuXG4gICAgbGV0IG5ld1NldHRpbmdzTm9kZXMgPSBbXTtcblxuICAgIGZvcihsZXQgYyBpbiBjYXRlZ29yaWVzKSB7XG4gICAgICAgIGZvcihsZXQgcyBpbiBzZXR0aW5nc05vZGVzKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHNldHRpbmdzTm9kZXNbc107XG4gICAgICAgICAgICBpZihjdXJyZW50Tm9kZS5zZXR0aW5nc1swXS52YWx1ZSA9PT0gY2F0ZWdvcmllc1tjXSkge1xuICAgICAgICAgICAgICAgIG5ld1NldHRpbmdzTm9kZXMucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNldHRpbmdzTm9kZXNbc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBEeW5hbWljIFN0dWZmXG4gICAgY29uc3QgY2FudmFzSnN4ID0gY2FudmFzTm9kZXMubGVuZ3RoID4gMCA/IGNhbnZhc05vZGVzLm1hcChub2RlID0+IHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17J2NhbnZhcy1jb250YWluZXInfSBrZXk9e25vZGUuaWR9PlxuICAgICAgICAgICAgPGNhbnZhcyBjbGFzc05hbWU9XCJzaWduYWxzLWNhbnZhc1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtub2RlLmlkfWB9XG4gICAgICAgICAgICA+PC9jYW52YXM+XG4gICAgICAgIDwvZGl2PilcbiAgICB9KSA6IG51bGw7XG5cbiAgICBsZXQgbGFzdENhdGVnb3J5ID0gXCJcIjtcbiAgICBjb25zdCBzZXR0aW5ncyA9IG5ld1NldHRpbmdzTm9kZXMubGVuZ3RoID4gMCA/IG5ld1NldHRpbmdzTm9kZXMubWFwKG5vZGUgPT4ge1xuICAgICAgICBsZXQgaW5wdXRFbGVtZW50O1xuICAgICAgICBsZXQgaXNTbGlkZXIgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNob3VsZFNhdmVDYXRlZ29yeSA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IG5vZGUuc2V0dGluZ3NbMF0udmFsdWU7XG5cbiAgICAgICAgaWYobGFzdENhdGVnb3J5ICE9PSBjdXJyZW50Q2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHNob3VsZFNhdmVDYXRlZ29yeSA9IHRydWU7XG4gICAgICAgICAgICBsYXN0Q2F0ZWdvcnkgPSBjdXJyZW50Q2F0ZWdvcnk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKG5vZGUuaWQuc3Vic3RyKDAsIDgpID09PSBcInVpTnVtYmVyXCIpIHtcbiAgICAgICAgICAgIC8vICd1aU51bWJlcicgc2V0dGluZ3M6XG4gICAgICAgICAgICAvLyAwIDogQ2F0ZWdvcnkgLSBDYXRlZ29yeSB0aGF0IGNvbnRyb2xsZXJzIGFyZSBzb3J0ZWQgYnkuXG4gICAgICAgICAgICAvLyAxIDogTGFiZWwgICAgLSBMYWJlbCBuZXh0IHRvIHRoZSBjb250cm9sbGVyLlxuICAgICAgICAgICAgLy8gMiA6IE9yZGVyICAgIC0gVmVydGljYWwgcG9zaXRpb24gb2YgdGhlIGNvbnRyb2xsZXIgaW4gdGhlIGNhdGVnb3J5LlxuICAgICAgICAgICAgLy8gMyA6IERlZmF1bHQgIC0gRGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgLy8gNCA6IE1pbiAgICAgIC0gTWluaW11bSB2YWx1ZVxuICAgICAgICAgICAgLy8gNSA6IE1heCAgICAgIC0gTWF4aW11bSB2YWx1ZVxuICAgICAgICAgICAgLy8gNiA6IFN0ZXAgICAgIC0gU3RlcCBvZiB0aGUgdmFsdWVcbiAgICAgICAgICAgIGlucHV0RWxlbWVudCA9ICg8aW5wdXQgIHR5cGU9eydudW1iZXInfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtub2RlLmlkK1wiSW5wdXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bm9kZS5zZXR0aW5nc1szXS52YWx1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e25vZGUuc2V0dGluZ3NbNF0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e25vZGUuc2V0dGluZ3NbNV0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtub2RlLnNldHRpbmdzWzZdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9Lz4pO1xuICAgICAgICB9IGVsc2UgaWYobm9kZS5pZC5zdWJzdHIoMCwgOCkgPT09IFwidWlTbGlkZXJcIikge1xuICAgICAgICAgICAgaXNTbGlkZXIgPSB0cnVlO1xuICAgICAgICAgICAgLy8gJ3VpU2xpZGVyJyBzZXR0aW5nczpcbiAgICAgICAgICAgIC8vIDAgOiBDYXRlZ29yeSAtIENhdGVnb3J5IHRoYXQgY29udHJvbGxlcnMgYXJlIHNvcnRlZCBieS5cbiAgICAgICAgICAgIC8vIDEgOiBMYWJlbCAgICAtIExhYmVsIG5leHQgdG8gdGhlIGNvbnRyb2xsZXIuXG4gICAgICAgICAgICAvLyAyIDogT3JkZXIgICAgLSBWZXJ0aWNhbCBwb3NpdGlvbiBvZiB0aGUgY29udHJvbGxlciBpbiB0aGUgY2F0ZWdvcnkuXG4gICAgICAgICAgICAvLyAzIDogRGVmYXVsdCAgLSBEZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICAvLyA0IDogTWluICAgICAgLSBNaW5pbXVtIHZhbHVlXG4gICAgICAgICAgICAvLyA1IDogTWF4ICAgICAgLSBNYXhpbXVtIHZhbHVlXG4gICAgICAgICAgICAvLyA2IDogU3RlcCAgICAgLSBTdGVwIG9mIHRoZSB2YWx1ZVxuICAgICAgICAgICAgaW5wdXRFbGVtZW50ID0gKDxpbnB1dCAgdHlwZT17J3JhbmdlJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bm9kZS5pZCtcIklucHV0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25vZGUuc2V0dGluZ3NbM10udmFsdWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtub2RlLnNldHRpbmdzWzRdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtub2RlLnNldHRpbmdzWzVdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17bm9kZS5zZXR0aW5nc1s2XS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfS8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJldHVybnMgbWVzc2FnZSBpZiB0aGUgdHlwZSBpcyB1bnNvcHBvcnRlZFxuICAgICAgICAgICAgaW5wdXRFbGVtZW50ID0gPGRpdj57J3Vuc3VwcG9ydGVkIHR5cGUnfTwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgaWYoc2hvdWxkU2F2ZUNhdGVnb3J5KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e25vZGUuaWQgKyBjdXJyZW50Q2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWxhYmVsJ30+e2N1cnJlbnRDYXRlZ29yeX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0gJyArIChpc1NsaWRlciA/IFwic2lnbmFscy1zZXR0aW5ncy1zbGlkZXJcIiA6IFwiXCIpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtub2RlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9eydzaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbS1sYWJlbCd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtub2RlLmlkICsgXCJMYWJlbFwifT57bm9kZS5zZXR0aW5nc1sxXS52YWx1ZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2lucHV0RWxlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1NsaWRlciA/IDxkaXYgaWQ9e25vZGUuaWQrXCJJbmRpY2F0b3JcIn0+e25vZGUuc2V0dGluZ3NbM10udmFsdWV9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8bGkgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0gJyArIChpc1NsaWRlciA/IFwic2lnbmFscy1zZXR0aW5ncy1zbGlkZXJcIiA6IFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e25vZGUuaWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtub2RlLmlkfT5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0tbGFiZWwnfSBpZD17bm9kZS5pZCArIFwiTGFiZWxcIn0+e25vZGUuc2V0dGluZ3NbMV0udmFsdWV9PC9oNj5cbiAgICAgICAgICAgICAgICB7aW5wdXRFbGVtZW50fVxuICAgICAgICAgICAgICAgIHtpc1NsaWRlciA/IDxkaXYgaWQ9e25vZGUuaWQrXCJJbmRpY2F0b3JcIn0+e25vZGUuc2V0dGluZ3NbM10udmFsdWV9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgIDwvbGk+KTtcbiAgICAgICAgfVxuICAgIH0pIDogbnVsbDtcblxuICAgIC8vIEdlbmVyYXRlIEZpbmFsIEpTWFxuICAgIGNvbnN0IFNpZ25hbFZpZXdzID0gY2FudmFzSnN4ID9cbiAgICAgICAgKFxuICAgICAgICAgICAgPGRpdiBpZD1cInNpZ25hbHMtdmlld3NcIj5cbiAgICAgICAgICAgICAgICB7Y2FudmFzSnN4fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgY29uc3QgU2V0dGluZ3NKc3ggPSBzZXR0aW5ncyA/XG4gICAgICAgIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduYWxzLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgPHVsIGlkPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0J30+XG4gICAgICAgICAgICAgICAgICAgIHtzZXR0aW5nc31cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17XCJzaWduYWxzLWVtYmVkZGluZy1tYWluXCJ9PlxuICAgICAgICAgICAgPGRpdiBpZD17XCJzaWduYWxzLWVtYmVkZGluZy1jb250cm9sc1wifT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcInNpZ25hbHMtYmFjay1idXR0b25cIn0gY2xhc3NOYW1lPXtcInNpZ25hbHMtZW1iZWRkaW5nLWNvbnRyb2wtYnV0dG9uXCJ9PmJhY2s8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcInNpZ25hbHMtcmVjb3JkaW5nLXN0YXJ0XCJ9IGNsYXNzTmFtZT17XCJzaWduYWxzLWVtYmVkZGluZy1jb250cm9sLWJ1dHRvblwifT5zdGFydCByZWNvcmRpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcInNpZ25hbHMtcmVjb3JkaW5nLXN0b3BcIn0gY2xhc3NOYW1lPXtcInNpZ25hbHMtZW1iZWRkaW5nLWNvbnRyb2wtYnV0dG9uXCJ9PnN0b3AgcmVjb3JkaW5nPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9e1wic2lnbmFscy1lbWJlZGRpbmctY29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgICAgIDxzdHlsZT57c3R5bGVzKG5ld1NldHRpbmdzTm9kZXMubGVuZ3RoLCBjYW52YXNOb2Rlcy5sZW5ndGgpfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAge1NldHRpbmdzSnN4fVxuICAgICAgICAgICAgICAgIHtTaWduYWxWaWV3c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=