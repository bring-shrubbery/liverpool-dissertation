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
    }

    var projectData;

    for (var i = 0; i < database.projectsInfo.length; i++) {
      var project = database.projectsInfo[i];

      if (project.owner == username && project.projectId == projectId) {
        var pid = parseInt(projectId) - 1;
        projectData = _objectSpread({}, database.projectModels[pid], {
          pid: projectId,
          owner: username,
          title: project.title
        });
        break;
      }
    } // Set title


    data = data.replace("<title></title>", "<title>".concat(projectData.title, "</title>")); // Set data

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2dlbmVyYXRvclRva2VuaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVuZGVyZXIvc2NvcGVGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3Rva2VuVG9Kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3ZpZXdlckRvbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiZGF0YWJhc2UiLCJwcm9qZWN0c0luZm8iLCJwcm9qZWN0SWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3duZXIiLCJwcm9qZWN0TW9kZWxzIiwibW9kdWxhdGlvbiIsImZvdXJpZXJTZXJpZXMiLCJ1c2VycyIsImFkbWluIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm5ld1Byb2plY3QiLCJuZXdJZCIsImkiLCJwYXJzZUludCIsInB1c2giLCJwcm9qZWN0TW9kZWxUZW1wbGF0ZSIsInNhdmVQcm9qZWN0IiwianNvbiIsIm5ld1Byb2plY3RWZXJzaW9uIiwiYWxsQ29ubmVjdGlvbnMiLCJhbGxOb2RlcyIsImNvbXBvc2VyQ29vcmRpbmF0ZXMiLCJpc0NyZWF0aW5nQ29ubmVjdGlvbiIsImZvY3VzZWQiLCJncmlkU2l6ZSIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJ6b29tTGV2ZWwiLCJ1c2UiLCJzdGF0aWMiLCJfX2Rpcm5hbWUiLCJtb3JnYW4iLCJnZXQiLCJyZXEiLCJyZXMiLCJwYXJhbXMiLCJpZCIsInN0YXR1cyIsInNlbmQiLCJmcyIsInJlYWRGaWxlIiwicGF0aCIsInJlc29sdmUiLCJlcnIiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwicHJvamVjdERhdGEiLCJsZW5ndGgiLCJwcm9qZWN0IiwicGlkIiwicmVwbGFjZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaWJyYXJ5Tm9kZXMiLCJzZXRIZWFkZXIiLCJyZW5kZXJlZFN0cmluZyIsInJlbmRlclNpZ25hbHMiLCJlbmQiLCJwcm9qZWN0c0FycmF5IiwiYm9keVBhcnNlciIsInBvc3QiLCJwcm9qZWN0SnNvbiIsImJvZHkiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJsb2ciLCJyZW5kZXJIdG1sIiwicmVxdWVzdEpzb24iLCJqc3giLCJqc3hEb20iLCJqc3hTdHJpbmciLCJyZW5kZXJUb1N0YXRpY01hcmt1cCIsInNjcmlwdEFycmF5Iiwic2NyaXB0R2VuZXJhdG9yIiwiY29tcG9zZWRTY3JpcHRTdHJpbmciLCJzIiwic2NyaXB0cyIsImYiLCJzdWJzdHIiLCJzY3JpcHRlZEh0bWwiLCJzbGljZSIsImZpeFNjb3BlcyIsImdlbiIsImciLCJTdHJpbmciLCJmb3VuZExlZnRCb3JkZXIiLCJmb3VuZFJpZ2h0Qm9yZGVyIiwianVzdEhpdE9wZW5pbmdCcmFja2V0IiwianVzdEhpdENsb3NpbmdCcmFja2V0IiwibGVmdCIsInJpZ2h0Iiwib25lIiwidHdvIiwidGhyZWUiLCJ0b2tlblRvSnMiLCJub2RlSWQiLCJ2YXJpYWJsZU5hbWUiLCJqc29uVG9rZW5zIiwiZXhlY3V0YWJsZVN0cmluZyIsImNhbGN1bGF0ZUNvZGUiLCJ0b2tlbiIsInR5cGUiLCJ2YWx1ZSIsImNvZGUiLCJzdHlsZXMiLCJzZXR0aW5nc0NvdW50Iiwic2NvcGVDb3VudCIsImlzU2V0dGluZ3NBbmRTY29wZXMiLCJpc0RpdmlkYWJsZUJ5VHdvIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJub2RlcyIsImNhbnZhc05vZGVzIiwia2V5IiwiY3VycmVudE5vZGUiLCJzZXR0aW5nc05vZGVzIiwiY2F0ZWdvcmllcyIsImlzVGhpcmRMZXR0ZXJVcHBlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzVUkiLCJpc0FjdHVhbFVJIiwiY2F0ZWdvcnlTYXZlZEFscmVhZHkiLCJjdXJyZW50Q2F0ZWdvcnkiLCJzZXR0aW5ncyIsImMiLCJzb3J0IiwiYSIsImIiLCJjYXQxIiwiY2F0MiIsIm9yZGVyMSIsIm9yZGVyMiIsImNhdEFyciIsIm5ld1NldHRpbmdzTm9kZXMiLCJjYW52YXNKc3giLCJtYXAiLCJub2RlIiwibGFzdENhdGVnb3J5IiwiaW5wdXRFbGVtZW50IiwiaXNTbGlkZXIiLCJzaG91bGRTYXZlQ2F0ZWdvcnkiLCJTaWduYWxWaWV3cyIsIlNldHRpbmdzSnN4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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VDtBQUFtQyxhQUFTLEVBQUU7QUFBOUMsc0JBSEosQ0FESixFQU1JO0FBQUssTUFBRSxFQUFFO0FBQVQsS0FDSSwwRUFBUW5CLE1BQU0sQ0FBQzZCLGdCQUFnQixDQUFDekYsTUFBbEIsRUFBMEJvRSxXQUFXLENBQUNwRSxNQUF0QyxDQUFkLENBREosRUFFS2tHLFdBRkwsRUFHS0QsV0FITCxDQU5KLENBREo7QUFjSCxDOzs7Ozs7Ozs7OztBQzFWRCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiLy8gQmFzZSBJbXBvcnRzXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuXG4vLyBTZXJ2ZXIgU2V0dXBcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbidcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG4vLyBNaWRkbGV3YXJlXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcblxuLy8gRGF0YSBQYXJzaW5nXG5pbXBvcnQge1xuICAgIHJlbmRlclNpZ25hbHNcbn0gZnJvbSAnLi9yZW5kZXJlcidcbi8vIGltcG9ydCB0ZXN0TW9kZWwgZnJvbSAnLi90ZXN0TW9kZWwuanNvbidcblxuLy8gTGlicmFyeSBub2Rlc1xuaW1wb3J0IGxpYnJhcnlOb2RlcyBmcm9tICcuL2xpYnJhcnlOb2Rlcy5qc29uJ1xuXG4vLyBQcm9qZWN0IHByZXNldHNcbmltcG9ydCBtb2R1bGF0aW9uIGZyb20gJy4vcHJvamVjdF9wcmVzZXRzL21vZHVsYXRpb24uanNvbidcbmltcG9ydCBmb3VyaWVyU2VyaWVzIGZyb20gJy4vcHJvamVjdF9wcmVzZXRzL2ZvdXJpZXJTZXJpZXMuanNvbidcblxubGV0IGRhdGFiYXNlID0ge1xuICAgIHByb2plY3RzSW5mbzogW3tcbiAgICAgICAgcHJvamVjdElkOiBcIjFcIixcbiAgICAgICAgdGl0bGU6IFwiQU0vRk0gTW9kdWxhdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG93cyBvbmUgc2lnbmFsIG1vZHVsYXRlZCBvdmVyIG90aGVyIChjYXJyaWVyKSBzaWduYWwgdXNpbmcgQU0gYW5kIEZNIG1vZHVsYXRpb24uXCIsXG4gICAgICAgIG93bmVyOiBcImFkbWluXCJcbiAgICB9LCB7XG4gICAgICAgIHByb2plY3RJZDogXCIyXCIsXG4gICAgICAgIHRpdGxlOiBcIkZvdXJpZXIgU2VyaWVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkF0dGVtcHQgYXQgY3JlYXRpbmcgZm91cmllciBzZXJpZXMgdXNpbmcgdGhpcyB0b29sLlwiLFxuICAgICAgICBvd25lcjogXCJhZG1pblwiXG4gICAgfV0sXG4gICAgcHJvamVjdE1vZGVsczogW3tcbiAgICAgICAgICAgIC4uLm1vZHVsYXRpb25cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLi4uZm91cmllclNlcmllc1xuICAgICAgICB9XG4gICAgXSxcbiAgICB1c2Vyczoge1xuICAgICAgICBhZG1pbjoge1xuICAgICAgICAgICAgdXNlcm5hbWU6IFwiYWRtaW5cIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcImFkbWluXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmV3UHJvamVjdDogZnVuY3Rpb24gKHVzZXJuYW1lLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgLy8gRmluZCBuZXcgaWRcbiAgICAgICAgbGV0IG5ld0lkID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMucHJvamVjdHNJbmZvKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5wcm9qZWN0c0luZm9baV0ucHJvamVjdElkKSA+IG5ld0lkKSBuZXdJZCA9IHRoaXMucHJvamVjdHNJbmZvW2ldLnByb2plY3RJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0lkKys7XG5cbiAgICAgICAgLy8gQWRkIG5ldyBwcm9qZWN5IGluZm9cbiAgICAgICAgdGhpcy5wcm9qZWN0c0luZm8ucHVzaCh7XG4gICAgICAgICAgICBwcm9qZWN0SWQ6IG5ld0lkLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3duZXI6IHVzZXJuYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvamVjdE1vZGVscy5wdXNoKHtcbiAgICAgICAgICAgIC4uLnByb2plY3RNb2RlbFRlbXBsYXRlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdJZDtcbiAgICB9LFxuICAgIHNhdmVQcm9qZWN0OiBmdW5jdGlvbiAocHJvamVjdElkLCBqc29uKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RWZXJzaW9uID0ge1xuICAgICAgICAgICAgYWxsQ29ubmVjdGlvbnM6IGpzb24uYWxsQ29ubmVjdGlvbnMsXG4gICAgICAgICAgICBhbGxOb2RlczoganNvbi5hbGxOb2RlcyxcbiAgICAgICAgICAgIGNvbXBvc2VyQ29vcmRpbmF0ZXM6IGpzb24uY29tcG9zZXJDb29yZGluYXRlcyxcbiAgICAgICAgICAgIGlzQ3JlYXRpbmdDb25uZWN0aW9uOiBqc29uLmNvbXBvc2VyQ29vcmRpbmF0ZXNcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSA9IG5ld1Byb2plY3RWZXJzaW9uO1xuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdE1vZGVsVGVtcGxhdGUgPSB7XG4gICAgYWxsQ29ubmVjdGlvbnM6IFtdLFxuICAgIGFsbE5vZGVzOiB7fSxcbiAgICBjb21wb3NlckNvb3JkaW5hdGVzOiB7XG4gICAgICAgIGZvY3VzZWQ6IHRydWUsXG4gICAgICAgIGdyaWRTaXplOiA1MCxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgem9vbUxldmVsOiAxXG4gICAgfSxcbiAgICBpc0NyZWF0aW5nQ29ubmVjdGlvbjogZmFsc2Vcbn1cblxuLy8gU3RhdGljIGZpbGVzXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvcHVibGljL3N0YXRpYycpKVxuXG4vLyBMb2dnaW5nXG5hcHAudXNlKG1vcmdhbigndGlueScpKTtcblxuLy8gLS0tIFJPVVRFUyAtLS1cbmFwcC5nZXQoJy9lZGl0b3IvOnVzZXJuYW1lLzppZCcsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgY29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lO1xuXG4gICAgaWYgKCFkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHJlcy5zdGF0dXMoNDIwKS5zZW5kKFwiVXNlciB3aXRoIHVzZXJuYW1lIFwiICsgdXNlcm5hbWUgKyBcIiBkb2Vzbid0IGV4aXN0XCIpO1xuXG4gICAgZnMucmVhZEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vcHVibGljL2VkaXRvci5odG1sJyksICd1dGY4JywgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnQW4gZXJyb3Igb2NjdXJyZWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb2plY3REYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YWJhc2UucHJvamVjdHNJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZGF0YWJhc2UucHJvamVjdHNJbmZvW2ldO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdC5vd25lciA9PSB1c2VybmFtZSAmJiBwcm9qZWN0LnByb2plY3RJZCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGlkID0gcGFyc2VJbnQocHJvamVjdElkKSAtIDE7XG4gICAgICAgICAgICAgICAgcHJvamVjdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGFiYXNlLnByb2plY3RNb2RlbHNbcGlkXSxcbiAgICAgICAgICAgICAgICAgICAgcGlkOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHByb2plY3QudGl0bGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRpdGxlXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICBcIjx0aXRsZT48L3RpdGxlPlwiLFxuICAgICAgICAgICAgYDx0aXRsZT4ke3Byb2plY3REYXRhLnRpdGxlfTwvdGl0bGU+YFxuICAgICAgICApXG5cbiAgICAgICAgLy8gU2V0IGRhdGFcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgICc8c2NyaXB0IGlkPVwiZWRpdG9yLWRhdGFcIj48L3NjcmlwdD4nLFxuICAgICAgICAgICAgYDxzY3JpcHQgaWQ9XCJwcm9qZWN0LWRhdGFcIj5kb2N1bWVudC5wcm9qZWN0RGF0YSA9ICR7SlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpfTwvc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBpZD1cImxpYnJhcnktZGF0YVwiPmRvY3VtZW50LmxpYnJhcnlOb2RlcyA9ICR7SlNPTi5zdHJpbmdpZnkobGlicmFyeU5vZGVzKX08L3NjcmlwdD5gXG4gICAgICAgIClcblxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgICAgIHJlcy5zZW5kKGRhdGEpO1xuICAgIH0pXG59KTtcblxuLy8gRGVmYXVsdCB0ZXN0IHZpc3VhbGlzYXRpb25cbmFwcC5nZXQoJy9yZW5kZXIvOnVzZXJuYW1lLzppZCcsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgY29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lO1xuXG4gICAgaWYgKCFkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHJlcy5zdGF0dXMoNDIwKS5zZW5kKFwiVXNlciB3aXRoIHVzZXJuYW1lIFwiICsgdXNlcm5hbWUgKyBcIiBkb2Vzbid0IGV4aXN0XCIpO1xuXG5cbiAgICBjb25zdCByZW5kZXJlZFN0cmluZyA9IHJlbmRlclNpZ25hbHMoZGF0YWJhc2UucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSk7XG5cbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgcmVzLmVuZChyZW5kZXJlZFN0cmluZyk7XG59KVxuXG4vLyBGb3Igbm93LCBsYW5kaW5nIHBhZ2UgaXMgdGhlIHByb2plY3RzIHBhZ2UuXG5hcHAuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcbiAgICBmcy5yZWFkRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wdWJsaWMvcHJvamVjdHMuaHRtbCcpLCAndXRmOCcsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0FuIGVycm9yIG9jY3VycmVkJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aXRsZVxuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgXCI8dGl0bGU+PC90aXRsZT5cIixcbiAgICAgICAgICAgIGA8dGl0bGU+UHJvamVjdHM8L3RpdGxlPmBcbiAgICAgICAgKVxuXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgcmVzLmVuZChkYXRhKTtcbiAgICB9KVxufSlcblxuYXBwLmdldChcIi9wcm9qZWN0cy9pbmZvLzp1c2VybmFtZVwiLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG5cbiAgICBpZiAoZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSB7XG4gICAgICAgIGxldCBwcm9qZWN0c0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YWJhc2UucHJvamVjdHNJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YWJhc2UucHJvamVjdHNJbmZvW2ldLm93bmVyID09PSB1c2VybmFtZSlcbiAgICAgICAgICAgICAgICBwcm9qZWN0c0FycmF5LnB1c2goZGF0YWJhc2UucHJvamVjdHNJbmZvW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDIwKS5zZW5kKGBObyB1c2VyIHdpdGggdXNlcm5hbWUgXCIke3VzZXJuYW1lfVwiIHdhcyBmb3VuZC5gKTtcbiAgICB9XG5cbn0pXG5cblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAucG9zdChcIi9zYXZlLzp1c2VybmFtZS86aWRcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgLy8gU2F2ZSBleGlzdGluZyBwcm9qZWN0XG4gICAgY29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHJlcS5wYXJhbXMuaWQ7XG5cbiAgICBjb25zdCBwcm9qZWN0SnNvbiA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKCFkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHJlcy5zdGF0dXMoNDIwKS5zZW5kKGBVc2VyIHdpdGggdXNlcm5hbWUgJHt1c2VybmFtZX0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgaWYgKCFkYXRhYmFzZS5wcm9qZWN0TW9kZWxzW3Byb2plY3RJZCAtIDFdKSByZXMuc3RhdHVzKDQyMSkuc2VuZChgUHJvamVjdCB3aXRoIGlkICR7cHJvamVjdElkfSBkb2Vzbid0IGV4aXN0YCk7XG5cbiAgICBkYXRhYmFzZS5zYXZlUHJvamVjdChwcm9qZWN0SWQsIHByb2plY3RKc29uKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcblxufSlcblxuXG5hcHAuZ2V0KFwiL2NyZWF0ZVByb2plY3QvOnVzZXJuYW1lLzp0aXRsZS86ZGVzY3JpcHRpb25cIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lO1xuICAgIGNvbnN0IHRpdGxlID0gcmVxLnBhcmFtcy50aXRsZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHJlcS5wYXJhbXMuZGVzY3JpcHRpb247XG5cbiAgICBpZiAoIWRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkgcmVzLnN0YXR1cyg0MjApLnNlbmQoYFVzZXIgd2l0aCB1c2VybmFtZSAke3VzZXJuYW1lfSBkb2Vzbid0IGV4aXN0YCk7XG5cbiAgICBsZXQgcGlkID0gZGF0YWJhc2UubmV3UHJvamVjdCh1c2VybmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uKTtcblxuICAgIHJlcy5zdGF0dXMoMzAxKS5zZW5kKGAvZWRpdG9yLyR7dXNlcm5hbWV9LyR7cGlkfWApO1xufSk7XG5cbi8vIFJ1biBzZXJ2ZXJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlxcbkxpc3RlbmluZyBvbjogaHR0cHM6Ly9sb2NhbGhvc3Q6XCIgKyBwb3J0ICsgXCJcXG5cIik7XG59KTsiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdlbmVyYXRvciBDb2RlIFRva2VuaXNlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR2VuZXJhdG9yIGNvZGUgdG9rZW5pc2VyIGZ1bmN0aW9uIGlzIGFsZ29yaXRobWljYWxseSBzaW1wbGUsIGJ1dCBwcm9kdWNlcyBhIGdvb2QgcmVwcmVzZW50YXRpb25cbi8vIG9mIHRoZSBwcm92aWRlZCBjb2RlIGluIEphdmFTY3JpcHQgT2JqZWN0IGZvcm1hdCAod2hpY2ggY2FuIHRoZW4gYmUgZWFzaWx5IGNvbnZlcnRlZCB0byBKU09OLFxuLy8gc2luY2UgaXQncyBwcmV0dHkgbXVjaCB0aGUgc2FtZSB0aGluZykuXG4vLyBXaGVuIGdvaW5nIHRocm91Z2ggdGhlIGNvZGUsIGl0IGNhbiBkZXRlY3Qgc2V2ZXJhbCB0eXBlcyBvZiBvcGVyYXRvcnMuIFRoZXNlIGFyZTpcbi8vICAgICAqIFZhcmlhYmxlXG4vLyAgICAgKiBDb25zdGFudCBOdW1iZXJcbi8vICAgICAqIE1hdGggT3BlcmF0b3Jcbi8vICAgICAqIE1hdGggRnVuY3Rpb25cbi8vICAgICAqIFJlZ3VsYXIgc2NvcGUgLSBldmVyeXRoaW5nIGluc2lkZSBicmFja2V0cyBcIihcIiBhbmQgXCIpXCIgc2hvdWxkIGJlIGV4ZWN1dGVkIGZpcnN0XG4vLyBUaGUgVmFyaWFibGVzLCBOdW1iZXJzIGFuZCBNYXRoIG9wZXJhdG9ycyBhcmUganVzdCBhZGRlZCBhcyBhbiBvYmplY3Qgd2l0aCBhcHByb3ByaWF0ZSB0eXBlIGFuZFxuLy8gdmFsdWUgdGFrZW4gZnJvbSB0aGUgY29kZS5cblxuLy8gVE9ETzpcbi8vICogU2FuZXRpc2UgdmFyaWFibGUgbmFtZXMgISEhIEphdmFzY3JpcHQgaW5qZWN0aW9uIGlzIHBvc3NpYmxlIG5vdyB0aHJvdW4gdmFyaWFibGUgbmFtZXMuLi5cblxuaW1wb3J0IHtmaXhTY29wZXN9IGZyb20gJy4vc2NvcGVGaXhlcic7XG5cbmV4cG9ydCBjb25zdCB0b2tlbml6ZUdlbmVyYXRvciA9IChnZW46IHN0cmluZywgbm9kZUlkOiBzdHJpbmcpOiBHZW5lcmF0b3JTZWdtZW50W10gPT4ge1xuICAgIC8vIEdldCB2YWx1ZSBvZiBnZW5lcmF0b3IgY29kZSBhbmQgc3RvcmUgaW4gZ1xuICAgIGxldCBnID0gU3RyaW5nKGdlbik7XG4gICAgZyA9IFN0cmluZyhmaXhTY29wZXMoZykpO1xuXG4gICAgLy8gUGFyc2VkIEdlbmVyYXRvciBDb2RlXG4gICAgbGV0IHBnZW46IEdlbmVyYXRvclNlZ21lbnRbXSA9IFtdO1xuICAgIFxuICAgIC8vIFRoZSBzdGFja1xuICAgIGxldCBzdGFjazogR2VuZXJhdG9yU2VnbWVudFtdID0gW107XG5cbiAgICAvLyBDb2RlIHRva2VuaXNlclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRvcFN0YWNrT2JqZWN0OiBHZW5lcmF0b3JTZWdtZW50ID0gc3RhY2subGVuZ3RoID4gMCA/XG4gICAgICAgICAgICBzdGFja1tzdGFjay5sZW5ndGggLSAxXSA6IG51bGw7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIFZBUklBQkxFIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCJbXCIpIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdG8gbmV4dCBjaGFyYWN0ZXJcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIC8vIEluaXRpYWxpc2UgZW1wdHkgdmFyaWFibGVcbiAgICAgICAgICAgIGxldCB2YXJpYWJsZSA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8vIFNjYW4gdW50aWwgdmFyaWFibGUgc2NvcGUgaXMgY2xvc2VkXG4gICAgICAgICAgICB3aGlsZShnW2ldICE9PSBcIl1cIikge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlICs9IGdbaV07XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih2YXJpYWJsZSA9PT0gXCJ0aW1lXCIgfHwgdmFyaWFibGUgPT09IFwiUElcIikge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgP1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IG5vZGVJZCArIHZhcmlhYmxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZVNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ2YXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFyaWFibGUsXG4gICAgICAgICAgICAgICAgY29kZTogbnVsbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBzdGFja1t0b3BJbmRleF0uY29kZS5wdXNoKHZhcmlhYmxlU25pcHBldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBnZW4ucHVzaCh2YXJpYWJsZVNuaXBwZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE1BVEggT1BFUkFUT1IgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZiAoZ1tpXSA9PT0gXCIqXCIgfHwgZ1tpXSA9PT0gXCIvXCIgfHwgZ1tpXSA9PT0gXCIrXCIgfHwgZ1tpXSA9PT0gXCItXCIgfHwgZ1tpXSA9PT0gXCJeXCIgfHwgZ1tpXSA9PT0gXCIlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGdbaV0sXG4gICAgICAgICAgICAgICAgY29kZTogbnVsbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbdG9wSW5kZXhdLmNvZGUucHVzaChvcGVyYXRvclNuaXBwZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCB0byByb290IGxldmVsXG4gICAgICAgICAgICAgICAgcGdlbi5wdXNoKG9wZXJhdG9yU25pcHBldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gTUFUSCBGVU5DVElPTiAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwic1wiIHx8IGdbaV0gPT09IFwiY1wiIHx8IGdbaV0gPT09IFwidFwiKSB7XG4gICAgICAgICAgICAvLyBNYXRoZW1hdGljYWwgZm9ybXVsYXMgYXJlIGNvZGVkIGluIHRocmVlIGxldHRlcnNcbiAgICAgICAgICAgIGxldCBuZXh0VGhyZWUgPSBTdHJpbmcoZ1tpXSArIGdbaSsxXSArIGdbaSsyXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIG5leHQgdGhyZWUgY2hhcnMgYXJlIG9uZSBvZiBcbiAgICAgICAgICAgIGlmKG5leHRUaHJlZSA9PT0gXCJzaW5cIiB8fCBuZXh0VGhyZWUgPT09IFwiY29zXCIgfHwgbmV4dFRocmVlID09PSBcInRhblwiIHx8IG5leHRUaHJlZSA9PT0gXCJzcXdcIiB8fCBuZXh0VGhyZWUgPT09IFwiZXhwXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGp1c3QgaW5kZXggdG8gbmV4dCBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICBpICs9IDM7XG5cbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggZm9yIG9wZW5pbmcgYnJhY2tldHNcbiAgICAgICAgICAgICAgICB3aGlsZShnW2ldICE9PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoaSA+PSBnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRocm93IGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046IHNob3VsZCBwcm92aWRlIGJyYWNrZXRzIGZvciBtYXRoIG9wZXJhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInNob3VsZCBwcm92aWRlIGJyYWNrZXRzIGZvciBtYXRoIG9wZXJhdG9yc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcHJvdmlkZWQgc3BhY2Ugb3IgYSBjaGFyYWN0ZXIgYWZ0ZXIgdGhyZWUgbWF0aCBjaGFyc1xuICAgICAgICAgICAgICAgIC8vIGlmIChnW2krMV0gPT09IFwiKFwiKSBpKys7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXRoU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtYXRoXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXh0VGhyZWUsXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFtdXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tUb3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUucHVzaChtYXRoU25pcHBldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVUb3BJbmRleCA9IHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZVtzY29wZVRvcEluZGV4XVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgICAgICBwZ2VuLnB1c2gobWF0aFNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBwZ2VuW3BnZW4ubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSBwYXJzaW5nIGNvZGVcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBSRUdVTEFSIFNDT1BFIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIC8vIEJlZ2luIHJlZ3VsYXIgc2NvcGVcbiAgICAgICAgICAgIGNvbnN0IHNjb3BlU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNjb3BlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgY29kZTogW11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tUb3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5wdXNoKHNjb3BlU25pcHBldCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzY29wZVRvcEluZGV4ID0gc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZVtzY29wZVRvcEluZGV4XVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChzY29wZVNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgcGdlbltwZ2VuLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIEVORCBBTlkgU0NPUEUgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcIilcIiB8fCBnLmNoYXJBdChpKSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgIC8vIEVuZCBTY29wZVxuXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0b3AgaXRlbSBmcm9tIHN0YWNrIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBjbG9zZWQgc2NvcGUgdGhhdCB3YXNuJ3Qgb3BlbmVkXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogICAgICAgICAgICB0aHJvdyBFUlJPUlxuICAgICAgICAgICAgICAgIC8vIEVSUk9SIFJFQVNPTjogICAgbm9uIGV4aXN0ZW50IHNjb3BlIHdhcyBjbG9zZWRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibm9uIGV4aXN0ZW50IHNjb3BlIHdhcyBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gTlVCTUVSIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgbGV0IG1heWJlTnVtYmVyID0gU3RyaW5nKHBhcnNlSW50KGdbaV0pKTtcblxuICAgICAgICBpZihtYXliZU51bWJlciAhPT0gU3RyaW5nKE5hTikgJiYgdHlwZW9mIHBhcnNlSW50KG1heWJlTnVtYmVyKSA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyU3RhcnQgPSBpO1xuXG4gICAgICAgICAgICAvLyBJcyBjdXJyZW50IGNoYXIgYSBudW1iZXIgb3IgYSBkb3Q/XG4gICAgICAgICAgICBjb25zdCBpc051bWJlciA9ICgpID0+IChtYXliZU51bWJlciAhPT0gU3RyaW5nKE5hTikgJiYgdHlwZW9mIHBhcnNlSW50KG1heWJlTnVtYmVyKSA9PT0gXCJudW1iZXJcIik7XG4gICAgICAgICAgICBjb25zdCBpc0RvdCA9IChpbmRleDogbnVtYmVyKSA9PiBTdHJpbmcoZ1tpbmRleF0pID09PSBcIi5cIjtcblxuICAgICAgICAgICAgLy8gV2FzIHRoZXJlIGEgZG90IGluIGN1cnJlbnQgc2VxdWVuY2Ugb2YgbnVtYmVycz9cbiAgICAgICAgICAgIGxldCB3YXNEb3RBbHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdoaWxlKGlzTnVtYmVyKCkgfHwgaXNEb3QoaSkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBjdXJyZW50IGNoYXIgaXMgYSBkb3RcbiAgICAgICAgICAgICAgICBpZihpc0RvdChpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZih3YXNEb3RBbHJlYWR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCB0aGVyZSB3YXMgYSBkb3QgYWxyZWFkeSwgdGhyb3cgZXJyb3IsIHNpbmNlIGl0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdGhyb3cgRVJST1JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVSUk9SIFJFQVNPTjogaW52YWxpZCBmbG9hdGluZyBwb2ludCBudW1iZXIgc3ludGF4XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBub3QsIHNldCB3YXMgZG90IGFscmVhZHkgdG8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgd2FzRG90QWxyZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNb3ZlIHRvIG5leHQgaW5kZXggYW5kIFxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBtYXliZU51bWJlciA9IFN0cmluZyhwYXJzZUludChnW2ldKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGluZ051bWJlciA9IGcuc2xpY2UobnVtYmVyU3RhcnQsIGkpO1xuXG4gICAgICAgICAgICBjb25zdCBudW1iZXJTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdGluZ051bWJlcixcbiAgICAgICAgICAgICAgICBjb2RlOiBudWxsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbdG9wSW5kZXhdLmNvZGUucHVzaChudW1iZXJTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChudW1iZXJTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaS0tO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gUmV0dXJuIHBhcnNlZCBnZW5lcmF0b3IgYXJyYXlcbiAgICByZXR1cm4gcGdlbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmF0b3JTZWdtZW50IHtcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdmFsdWU6IChzdHJpbmd8bnVtYmVyKSxcbiAgICBjb2RlOiBHZW5lcmF0b3JTZWdtZW50W11cbn0iLCJpbXBvcnQgeyByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG5pbXBvcnQgeyBzY3JpcHRHZW5lcmF0b3IgfSBmcm9tICcuL3NjcmlwdEdlbmVyYXRvci50cyc7XG5pbXBvcnQgeyBqc3hEb20gfSBmcm9tICcuL3ZpZXdlckRvbSc7XG5cbmZ1bmN0aW9uIHJlbmRlckh0bWwgKHJlcXVlc3RKc29uKSB7XG4gICAgLy8gU2VwYXJhdGUgbm9kZXMgZnJvbSBjb25uZWN0b3JzXG4gICAgY29uc3QgYWxsTm9kZXMgPSB7Li4ucmVxdWVzdEpzb24uYWxsTm9kZXN9O1xuICAgIGNvbnN0IGFsbENvbm5lY3Rpb25zID0gWy4uLnJlcXVlc3RKc29uLmFsbENvbm5lY3Rpb25zXTtcblxuICAgIC8vIFJlbmRlciBIVE1MXG4gICAgY29uc3QganN4ID0ganN4RG9tKGFsbE5vZGVzKTtcbiAgICBjb25zdCBqc3hTdHJpbmcgPSByZW5kZXJUb1N0YXRpY01hcmt1cChqc3gpO1xuXG4gICAgLy8gR2VuZXJhdGUgU2NyaXB0c1xuICAgIC8vIGNvbnNvbGUudGltZShcIlNjcmlwdCBQYXJzZXJcIik7XG5cbiAgICBjb25zdCBzY3JpcHRBcnJheSA9IHNjcmlwdEdlbmVyYXRvcihhbGxOb2RlcywgYWxsQ29ubmVjdGlvbnMpO1xuICAgIGxldCBjb21wb3NlZFNjcmlwdFN0cmluZyA9IFwiXCI7XG4gICAgZm9yKGxldCBzIGluIHNjcmlwdEFycmF5KSB7XG4gICAgICAgIGlmKHMgPT0gMCkgY29udGludWU7XG4gICAgICAgIGNvbXBvc2VkU2NyaXB0U3RyaW5nICs9IHNjcmlwdEFycmF5W3NdO1xuICAgIH1cbiAgICBcbiAgICAvLyBjb25zb2xlLnRpbWVFbmQoXCJTY3JpcHQgUGFyc2VyXCIpO1xuXG4gICAgLy8gUGFja2FnZSBpbXBvcnRzXG4gICAgbGV0IHNjcmlwdHMgPSBgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9DaGFydC5qcy8yLjcuMy9DaGFydC5idW5kbGUubWluLmpzXCI+PC9zY3JpcHQ+XFxuYDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0IHNyYz1cIi9DQ2FwdHVyZS5hbGwubWluLmpzXCI+PC9zY3JpcHQ+YDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2pzLXVudGFyQDIuMC4wL2J1aWxkL2Rpc3QvdW50YXJcIj48L3NjcmlwdD5gO1xuICAgIHNjcmlwdHMgKz0gYDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vZG93bmxvYWRqc0AxLjQuNy9kb3dubG9hZC5qc1wiPjwvc2NyaXB0PmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9naWYuanNAMC4yLjAvZGlzdC9naWYuanNcIj48L3NjcmlwdD5gO1xuXG4gICAgLy8gR0lGIFJlY29yZGVyXG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD5cbiAgICAgICAgdmFyIGxhc3RGcmFtZVRpbWVzdGFtcCA9IG51bGw7XG4gICAgICAgIHZhciBpc1JlY29yZGluZyA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25hbHMtcmVjb3JkaW5nLXN0b3BcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgICAgICAgXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduYWxzLWJhY2stYnV0dG9uXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IG5ld0xpbmsgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFwicmVuZGVyXCIsIFwiZWRpdG9yXCIpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihuZXdMaW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25hbHMtcmVjb3JkaW5nLXN0YXJ0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbmFscy1yZWNvcmRpbmctc3RvcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICA8L3NjcmlwdD5gXG5cbiAgICAvLyBPbmx5IGFkZCBmZnQgcmVxdWlyZSBpZiBwcm9qZWN0IHVzZXMgZmZ0XG4gICAgZm9yKGxldCBmIGluIGFsbE5vZGVzKSB7XG4gICAgICAgIGlmKGYuc3Vic3RyKDAsIDMpID09PSBcImZmdFwiKSB7XG4gICAgICAgICAgICBzY3JpcHRzICs9IGA8c2NyaXB0IHNyYz1cIi9mZnQuanNcIj48L3NjcmlwdD5cXG5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD4ke3NjcmlwdEFycmF5WzBdfTwvc2NyaXB0PlxcbmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD4ke2NvbXBvc2VkU2NyaXB0U3RyaW5nfTwvc2NyaXB0PlxcbmA7XG4gICAgXG4gICAgLy8gQ29tYmluZSBmb3JtZXIgcmVzdWx0c1xuICAgIGNvbnN0IHNjcmlwdGVkSHRtbCA9IGpzeFN0cmluZy5zbGljZSgwLCBqc3hTdHJpbmcubGVuZ3RoIC0gNikgKyBzY3JpcHRzICsgXCI8L2Rpdj5cIjtcbiAgICBcbiAgICAvLyBSZXR1cm4gZ2VuZXJhdGVkIEhUTUwgYXMgYSBzdHJpbmdcbiAgICByZXR1cm4gc2NyaXB0ZWRIdG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2lnbmFscyAocmVxdWVzdEpzb24pIHtcbiAgICByZXR1cm4gcmVuZGVySHRtbChyZXF1ZXN0SnNvbik7XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNjb3BlIEZpeGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2NvcGUgRml4ZXIgZnVuY3Rpb24gaXMgcmVsYXRlZCB0byB0aGUgZ2VuIHZhcmlhYmxlIHBhcnNpbmcgYWxnb3JpdGhtLiBTaW5jZSB0aGUgdG9rZW5pemVyIFxuLy8gZnVuY3Rpb24gZG9lcyBub3QgdGFrZSBpbnRvIGFjY291bmQgdGhhdCBtYXRoIG9wZXJhdG9ycyAqIChtdWx0aXBsaWNhdGlvbikgYW5kIC8gKGRpdmlzaW9uKVxuLy8gYXJlIGV4ZWN1dGVkIGZpcnN0LCB3ZSBuZWVkIHRvIHB1dCBzY29wZXMgYXJvdW5kIGJpdHMgdGhhdCBzaG91bGQgZXhlY3V0ZWQgZmlyc3QuIFRoaXMgaXMgXG4vLyBub3QgZmluYWwgc29sdXRpb24sIHNpbmNlIGl0IGRvZXMgbm90IHRha2UgZm9sbG93aW5nIHNpdHVhdGlvbnMgaW50byBhY2NvdW50OlxuLy8gICAgICogdGhlcmUgaXMgYSBtaW51cyBvciBwbHVzIHNpZ24gYmVmb3JlIGEgbnVtYmVyOiAtMSpbdmFyaWFibGVdXG4vLyAgICAgICAgIC0gSW4gdGhpcyBjYXNlIGl0IHdvdWxkIHJldHVybiB0aGlzOiAtKDEqW3ZhcmlhYmxlXSkuIFRoaXMgZG9lcyBub3QgYXBwbHkgc2NvcGVzXG4vLyAgICAgICAgICAgY29ycmVjdGx5LlxuLy9cbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFsZ29yaXRobSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGFsZ29yaXRobSBtYWtlcyBvbmx5IG9uZSBnZW5lcmFsIHN3ZWVwIHRocm91Z2ggdGhlIHN0cmluZy4gVGhpcyBtZWFucyB0aGF0IGlmIG5vIFxuLy8gc2NvcGVzIGFyZSBuZWVkZWQsIGV4ZWN1dGlvbiB0aW1lIHdpbGwgYmUgbWluaW1hbCwgaS5lLiBpdCB3aWxsIHRha2UgYXMgbXVjaCB0aW1lIGFzIGl0XG4vLyB0YWtlcyB0byBsb29wIHRocm91Z2ggdGhlIHN0cmluZyBvbmNlIGFuZCBjaGVjayBpZiB0aGUgY2hhcmFjdGVyIGlzICogb3IgLy4gSW4gdGhlIGNhc2Ugb2Zcbi8vIDM0IGNoYXJhY3RlciBzdHJpbmcsIHRoaXMgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgaW4gYWJvdW50IDAuMy0wLjUgbXMuIFdpdGggYW4gYXZlcmFnZSBvZiBcbi8vIGFyb3VuZCAwLjRtcyBhbmQgMzQgY2hhcmFjdGVycywgd2UgY2FuIGFwcHJveGltYXRlIHRoYXQgb25lIGNoYXJhY3RlciB0YWtlcyAwLjQgLyAzNCA9IDEuNjZcbi8vIG1pY3JvIHNlY29uZHMuIFRoaXMgd2FzIHRlc3RlZCBvbiAyLjdHaHogSW50ZWwgQ29yZSBpNy4gU28gaXQgdG9vayBhcm91bmQgNDQ4MiBjbG9jayBjeWNsZXNcbi8vIHRvIGV4ZWN1dGUgdGhhdCBhY2NvcmRpbmcgdG8gZm9sbG93aW5nIGVxdWF0aW9uOiAxLjY2dXMgLyAoMSAvIDIuN0cpID0gNDQ4Mi4gVGhpcyBjb3VsZCBiZSBcbi8vIGRyYW1hdGljYWxseSBpbXByb3ZlZCBieSB1c2luZyBjdXN0b20gbWFkZSBOb2RlLmpzIGMrKyBwbHVnaW4gd2hpY2ggYWxsb3dzIHRvIHJ1biBjKytcbi8vIGJpbmFyaWVzIGZyb20gTm9kZS5qcyBvciBieSB3cml0aW5nIHRoZSB3aG9sZSByZW5kZXJlciBzZXJ2ZXIgaW4gYSBjb21waWxlZCBsYW5ndWFnZSBsaWtlIFxuLy8gcHl0aG9uLCBjIywgZ28sIG9yIHN3aWZ0LiBUaGVyZSBpcyBhbHNvIGEgcG9zc2liaWxpdHkgdG8gd3JpdGUgaXQgaW4gUnVzdCBsYW5ndWFnZSwgQyBvclxuLy8gQysrLiBUaGlzIHdvdWxkIGFsbG93IHRvIGNvbXBpbGUganVzdCB0aGlzIGZ1bmN0aW9uIHRvIFdlYkFzc2VtYmx5IGFuZCBydW4gaXQgaW4gTm9kZS5qcyBhdCBcbi8vIGNvbXBpbGVkIHNwZWVkLiBJZiBmdXJ0aGVyIGRldmVsb3BtZW50IHdpbGwgYmUgZG9uZSBhbmQgdGhlcmUgd2lsbCBiZSBhIGRlY2lzaW9uIHRvICBzd2l0Y2hcbi8vIHRvIGEgY29tcGlsZWQgbGFuZ3VhZ2Ugc2VydmVyLCBJIHdvdWxkIHN1Z2dlc3QgdXNpbmcgR08gbGFuZ3VhZ2UgZHVlIHRvIGl0cyBzaW1wbGljaXR5LlxuLy9cbi8vIEFsZ2l0aG0gd29ya3MgaW4gYSBmb2xsb3dpbmcgZmFzaGlvbjpcbi8vICAgMS4gTWFrZSBzdXJlIHBhc3NlZCB0ZXh0IGlzIG9mIGEgU3RyaW5nIHR5cGVcbi8vICAgMi4gU2V0IGZsYWdzIHRvIGZhbHNlOlxuLy8gICAgICAgLSBib3JkZXIgZmxhZ3M6IGluZGljYXRlIGlmIG9uIGxlZnQgb3IgcmlnaHQsIGEgKyBvciAtIHNpZ24gd2FzIGZvdW5kXG4vLyAgICAgICAtIGJyYWNrZXQgZmxhZ3M6IGluZGljYXRlIGlmIHdoaWxlIHN3ZWVwaW5nIGxlZnQgYW5kIHJpZ2h0IGEgc2NvcGUgd2FzIGZvdW5kXG4vLyAgIDMuIEluaXRpYXRlIHZhcmlhYmxlcyBmb3IgbGVmdCBhbmQgcmlnaHQgc3dlZXBlcnNcbi8vICAgNC4gTG9vcCB1bnRpbCB3aG9sZSBzdHJpbmcgd2FzIHNjYW5uZWQsIGluIHRoZSBsb29wOlxuLy8gICAgICAgMS4gSWYgY3VycmVudCBjaGFyYWN0ZXIgaXMgXCIqXCJcIiBvciBcIi9cIiwgY29udGludWUsIG90aGVyd2lzZSBpbmNyZWFzZSBpbmRleCBieSBvbmUgYW5kIGNoZWNrIGFnYWluXG4vLyAgICAgICAyLiBTY2FuIHRvIHRoZSBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgaW5kZXguXG4vLyAgICAgICAzLiBJZiByYW4gb3V0IG9mIGJvdW5kcyBvZiB0aGUgc3RyaW5nLCBzdG9wIHNjYW5uaW5nIGxlZnQsIG1vdmUgdG8gc3RlcCA3XG4vLyAgICAgICA0LiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBzZXQgY2xvc2luZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDUuIElmIGhpdCBvcGVuaW5nIGJyYWNrZXQsIGNoZWNrIGlmIGNsb3NpbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZyBhbmQgc2V0IGNsb3NpbmcgYnJhY2tldCBmbGFnIHRvIGZhbHNlIGFnYWluLlxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCBtb3ZlIHRvIHN0ZXAgN1xuLy8gICAgICAgNi4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBjbG9zaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZywgbW92ZSByaWdodCBieSBvbmUgc3RlcCBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuLy8gICAgICAgNy4gU2NhbiB0byB0aGUgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBpbmRleC5cbi8vICAgICAgIDguIElmIHJhbiBvdXQgb2YgYm91bmRzIG9mIHRoZSBzdHJpbmcsIHN0b3Agc2Nhbm5pbmcgbGVmdCwgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICA5LiBJZiBoaXQgb3BlbmluZyBicmFja2V0LCBzZXQgb3BlbmluZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDEwLiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcgYW5kIHNldCBvcGVuaW5nIGJyYWNrZXQgZmxhZyB0byBmYWxzZSBhZ2Fpbi5cbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICAxMS4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuXG5leHBvcnQgZnVuY3Rpb24gZml4U2NvcGVzIChnZW4pIHtcbiAgICBsZXQgZyA9IFN0cmluZyhnZW4pO1xuXG4gICAgLy8gVmFyaWFibGUgYXJlIHRha2VuIG91dHNpZGUgb2YgZm9yIGxvb3AsIHRvIGluY3JlYXNlIHBlcmZvcm1hbmNlLlxuICAgIC8vIEluIHRoaXMgd2F5LCB2YXJpYWJsZXMgYXJlIGp1c3QgcmV3cml0dGVuIGluIHRoZSBzYW1lIG1lbW9yeVxuICAgIC8vIGxvY2F0aW9uIGluc3RlYWQgb2YgY3JlYXRpbmcgbmV3IHZhcmlhYmxlIGV2ZXJ5IHRpbWUuXG4gICAgbGV0IGZvdW5kTGVmdEJvcmRlciA9IGZhbHNlO1xuICAgIGxldCBmb3VuZFJpZ2h0Qm9yZGVyID0gZmFsc2U7XG5cbiAgICBsZXQganVzdEhpdE9wZW5pbmdCcmFja2V0ID0gZmFsc2U7XG4gICAgbGV0IGp1c3RIaXRDbG9zaW5nQnJhY2tldCA9IGZhbHNlO1xuXG4gICAgbGV0IGxlZnQ7XG4gICAgbGV0IHJpZ2h0O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChnW2ldID09PSBcIipcIiB8fCBnW2ldID09PSBcIi9cIikge1xuICAgICAgICAgICAgLy8gU2NhbiBsZWZ0XG4gICAgICAgICAgICBmb3IgKGxlZnQgPSBpOyAhZm91bmRMZWZ0Qm9yZGVyOyBsZWZ0LS0pIHtcbiAgICAgICAgICAgICAgICAvLyBFeGl0IHRoZSBzY2FubmluZyBsb29wIGlmIGhpdCBsZWZ0IHN0cmluZyB3YWxsXG4gICAgICAgICAgICAgICAgaWYgKGxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGRvZXMgbm90IHNldCBmb3VuZExlZnRCb3JkZXIgdmFyaWFibGUgdG8gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgaWYgYm90aCBzaWRlcyBhcmUgYnJhY2tldHMgb3Igb3V0ZXIgd2FsbHMgb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN0cmluZywgbmV3IGJyYWNrZXRzIHNob3VsZCBub3QgYmUgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBoaXRzIG9wZW5pbmcgYnJhY2tldCwgaXQgY2hlY2tzIGlmIGl0IGhpdCBjbG9zaW5nIGJyYWNrZXQgYmVmb3JlXG4gICAgICAgICAgICAgICAgaWYgKGdbbGVmdF0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0Q2xvc2luZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RIaXRDbG9zaW5nQnJhY2tldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1hcmtzIHRoYXQgaXQgaGl0IGNsb3NpbmcgYnJhY2tldCwgc28gdGhhdCBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBsYXRlcixcbiAgICAgICAgICAgICAgICAvLyBpdCBrbm93cyB0aGF0IGl0IHNob3VsZG4ndCBcbiAgICAgICAgICAgICAgICBpZiAoZ1tsZWZ0XSA9PT0gXCIpXCIpIGp1c3RIaXRDbG9zaW5nQnJhY2tldCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvLyBFeGl0IHNjYW5uaW5nIGxvb3AgaWYgaGl0IHBsdXMgb3IgbWludXNcbiAgICAgICAgICAgICAgICAvLyBBbHNvLCBtb3ZlIHJpZ2h0LCBzbyB0aGF0IGJyYWNrZXMgaXMgaW5zZXJ0ZWQgYWZ0ZXIgKyBvciAtIHNpZ25cbiAgICAgICAgICAgICAgICBpZiAoZ1tsZWZ0XSA9PT0gXCIrXCIgfHwgZ1tsZWZ0XSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRDbG9zaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZExlZnRCb3JkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNjYW4gcmlnaHRcbiAgICAgICAgICAgIGZvciAocmlnaHQgPSBpOyAhZm91bmRSaWdodEJvcmRlcjsgcmlnaHQrKykge1xuICAgICAgICAgICAgICAgIC8vIEV4aXQgdGhlIHNjYW5uaW5nIGxvb3AgaWYgaGl0IHJpZ2h0IHN0cmluZyB3YWxsIG9yIGNsb3NpbmcgYnJhY2tldFxuICAgICAgICAgICAgICAgIGlmIChyaWdodCA+PSBnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGRvZXMgbm90IHNldCBmb3VuZFJpZ2h0Qm9yZGVyIHZhcmlhYmxlIHRvIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIGlmIGJvdGggc2lkZXMgYXJlIGJyYWNrZXRzIG9yIG91dGVyIHdhbGxzIG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdHJpbmcsIG5ldyBicmFja2V0cyBzaG91bGQgbm90IGJlIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgaGl0cyBjbG9zaW5nIGJyYWNrZXQsIGl0IGNoZWNrcyBpZiBpdCBoaXQgb3BlbmluZyBicmFja2V0IGJlZm9yZVxuICAgICAgICAgICAgICAgIGlmIChnW3JpZ2h0XSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRPcGVuaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdEhpdE9wZW5pbmdCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFya3MgdGhhdCBpdCBoaXQgY2xvc2luZyBicmFja2V0LCBzbyB0aGF0IGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGxhdGVyLFxuICAgICAgICAgICAgICAgIC8vIGl0IGtub3dzIHRoYXQgaXQgc2hvdWxkbid0IFxuICAgICAgICAgICAgICAgIGlmIChnW3JpZ2h0XSA9PT0gXCIoXCIpIGp1c3RIaXRPcGVuaW5nQnJhY2tldCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ1tyaWdodF0gPT09IFwiK1wiIHx8IGdbcmlnaHRdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdE9wZW5pbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kUmlnaHRCb3JkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBvbiBvbmUgb2YgdGhlIHNpZGVzIHRoZXJlIGlzICsgb3IgLSBzaWduXG4gICAgICAgICAgICBpZiAoZm91bmRMZWZ0Qm9yZGVyIHx8IGZvdW5kUmlnaHRCb3JkZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBTbGljZSBvcmlnaW5hbCBzdHJpbmcgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbnNcbiAgICAgICAgICAgICAgICBsZXQgb25lID0gZy5zbGljZSgwLCBsZWZ0KTtcbiAgICAgICAgICAgICAgICBsZXQgdHdvID0gZy5zbGljZShsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICAgICAgbGV0IHRocmVlID0gZy5zbGljZShyaWdodCwgZy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IGJyYWNrZXRzIGJldHdlZW4gZm9ybWVyIHRocmVlIHN0cmluZ3MgdG8gZm9ybVxuICAgICAgICAgICAgICAgIC8vIG5ldyBzdHJpbmcgd2l0aCBpbnNlcnRlZCBicmFja2V0c1xuICAgICAgICAgICAgICAgIGcgPSBvbmUgKyBcIihcIiArIHR3byArIFwiKVwiICsgdGhyZWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlc2V0IGJvcmRlciB2YXJpYWJsZXNcbiAgICAgICAgICAgIGZvdW5kTGVmdEJvcmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgZm91bmRSaWdodEJvcmRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGc7XG59IiwiaW1wb3J0IHtcbiAgICBzZXBhcmF0ZU5vZGVzLFxuICAgIGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnksXG4gICAgb2JqZWN0U2l6ZSxcbiAgICB3YXNDYWxjdWxhdGVkLFxuICAgIGFsbElucHV0c0NhbGN1bGF0ZWQsXG4gICAgY2FsY3VsYXRlT3V0cHV0LFxuICAgIGdldFRvdWNoSW5wdXRzLFxuICAgIGluaXRUaW1lLFxuICAgIGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyxcbiAgICBnZXRPdGhlclNpZGVPZkNvbm5lY3RvcixcbiAgICBpbml0QW5pbWF0aW9uVGltZSxcbiAgICBzYXZlQW5pbWF0aW9uXG59IGZyb20gJy4vc2NyaXB0R2VuZXJhdG9yRnVuY3Rpb25zJztcblxuY29uc3QgU0FNUExFX1JBVEUgPSA1MTI7IC8vIFNhbXBsZXMgcGVyIHNlY29uZFxuY29uc3QgRFVSQVRJT04gPSAyOyAvLyBTZWNvbmRzLCBpZGVhbGx5IHNob3VsZCBiZSBkaXZpZGFibGUgYnkgMlxuY29uc3QgT0ZGU0VUID0gMDsgLy8gV2hpY2ggcG9pbnQgc2hvdWxkIGJlIHRoZSBjZW50cmUgb2YgdGhlIHNjb3BlXG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JpcHRHZW5lcmF0b3IoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uLCBhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10pIHtcbiAgICAvLyBFeGVjdXRhYmxlIHRvIHN0b3JlIGdlbmVyYXRlZCBqYXZhc2NyaXB0IGNvZGUuIEFueSBpbml0aWFsaXNhdGlvbiBjb2RlIHNob3VsZCBiZSBoZXJlLlxuICAgIGxldCBleGVBcnJheTogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgZXhlY3V0YWJsZSA9IFwidmFyIGdyYXBocyA9IHt9O1xcblwiO1xuXG4gICAgLy8gSW5pdCBzcXVhcmUgd2F2ZSBmdW5jdGlvblxuICAgIGV4ZWN1dGFibGUgKz0gYE1hdGguX19wcm90b19fLnNxdyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGxldCB2YWwgPSB4ID49IDAgPyAoKHgvKDIqTWF0aC5QSSkpJTEpIDogKCgoLXgtTWF0aC5QSSkvKDIqTWF0aC5QSSkpJTEpO1xuICAgICAgICBpZih2YWwgPj0gMCAmJiB2YWwgPD0gMC41KSB7XG4gICAgICAgICAgICByZXR1cm4gMC41O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjU7XG4gICAgICAgIH1cbiAgICB9O2A7XG5cbiAgICAvLyBDYWxjdWxhdGVkIG5vZGVzIGhhdmUgZm9sbG93aW5nIHNoYXBlOiBcIm5vZGVJZDpvdXRwdXRJZFwiXG4gICAgbGV0IGNhbGN1bGF0ZWROb2Rlczogc3RyaW5nW10gPSBbXTtcbiAgICBcbiAgICAvLyBTdGF0aXN0aWNzIG9iamVjdFxuICAgIGxldCBzdGF0aXN0aWNzID0ge1xuICAgICAgICBsb29wQ291bnRlcjogMCxcbiAgICAgICAgaW5pdGlhbFRvdGFsTm9kZXM6IG9iamVjdFNpemUoYWxsTm9kZXMpLFxuICAgICAgICBpbml0aWFsVG90YWxDb25uZWN0b3JzOiBhbGxDb25uZWN0aW9ucy5sZW5ndGgsXG4gICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgZW5kVGltZTogMFxuICAgIH07XG4gICAgXG4gICAgLy8gU2VwYXJhdGVzIHVuY2FsY3VsYXRlZCBub2RlcyBmcm9tIHNjb3BlcyBhbmQgVUkgYXQgdGhlIHN0YXJ0LlxuICAgIGxldCB7XG4gICAgICAgIHVuY2FsY3VsYXRlZE5vZGVzLCBcbiAgICAgICAgYWxsU2NvcGVzLCBcbiAgICAgICAgdWlOb2RlcywgXG4gICAgICAgIGZmdE5vZGVzLFxuICAgICAgICB0aW1lLFxuICAgICAgICBhbmltYXRpb25Ob2Rlc1xuICAgIH0gPSBzZXBhcmF0ZU5vZGVzKGFsbE5vZGVzKTtcblxuICAgIGlmKHRpbWVbXCJ0aW1lXCJdKSB7XG4gICAgICAgIGNvbnN0IHRpbWVOb2RlID0gdGltZVtcInRpbWVcIl07XG4gICAgICAgIGNvbnN0IHRpbWVTcGVlZCA9IHBhcnNlRmxvYXQodGltZU5vZGUuc2V0dGluZ3NbMF0udmFsdWUpO1xuICAgICAgICBjb25zdCB0aW1lUmFuZ2UgPSBwYXJzZUZsb2F0KHRpbWVOb2RlLnNldHRpbmdzWzFdLnZhbHVlKTtcbiAgICAgICAgY29uc3QgdGltZU9yaWdpbiA9IHBhcnNlRmxvYXQodGltZU5vZGUuc2V0dGluZ3NbMl0udmFsdWUpO1xuXG4gICAgICAgIC8vIFRPRE86IFNPTFZFIFNBTVBMRSBSQVRFIEFVVE9NQVRJQyBDQUxDVUxBVElPTlxuICAgICAgICBjb25zdCB0aW1lU3RhcnQgPSB0aW1lT3JpZ2luIC0gdGltZVJhbmdlIC8gMjtcbiAgICAgICAgY29uc3QgdGltZVN0b3AgPSB0aW1lT3JpZ2luICsgdGltZVJhbmdlIC8gMjtcbiAgICAgICAgZXhlY3V0YWJsZSArPSBpbml0VGltZSh0aW1lU3RhcnQsIHRpbWVTdG9wLCAxIC8gU0FNUExFX1JBVEUpO1xuICAgICAgICBleGVjdXRhYmxlICs9IFwidmFyIGRlbHRhVGltZSA9IDYwO1wiXG5cbiAgICAgICAgZXhlY3V0YWJsZSArPSBgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdCA9IHQubWFwKHYgPT4gdiArICR7dGltZVNwZWVkfS9kZWx0YVRpbWUpO1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH0sIGRlbHRhVGltZSk7YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXR1cCBkZWZhdWx0IHRpbWVcbiAgICAgICAgZXhlY3V0YWJsZSArPSBpbml0VGltZShPRkZTRVQgLSBEVVJBVElPTiAvIDIsIE9GRlNFVCArIERVUkFUSU9OIC8gMiwgMSAvIFNBTVBMRV9SQVRFKTtcbiAgICB9XG5cbiAgICBpZihvYmplY3RTaXplKGFuaW1hdGlvbk5vZGVzKSA+IDApIHtcbiAgICAgICAgZXhlY3V0YWJsZSArPSBcInZhciBhbGxUaW1lcnMgPSBbXTtcIjtcbiAgICAgICAgZm9yKGxldCBub2RlS2V5IGluIGFuaW1hdGlvbk5vZGVzKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IGFuaW1hdGlvbk5vZGVzW25vZGVLZXldO1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0S2V5ID0gY3VycmVudE5vZGUub3V0cHV0c1swXS50aXRsZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZXhlY3V0YWJsZSArPSBzYXZlQW5pbWF0aW9uKGN1cnJlbnROb2RlLCBub2RlS2V5KTtcbiAgICAgICAgICAgIGNhbGN1bGF0ZWROb2Rlcy5wdXNoKGAke25vZGVLZXl9OiR7b3V0cHV0S2V5fWApXG4gICAgICAgIH1cblxuICAgICAgICBleGVjdXRhYmxlICs9IGluaXRBbmltYXRpb25UaW1lKCk7XG4gICAgfVxuICAgIFxuICAgIC8vIFNlcGFyYXRlIHRvdWNoIG5vZGVzIGZvcm0gcmVndWxhciBub2Rlc1xuICAgIGxldCB0b3VjaE5vZGVzU2VwYXJhdGVkID0gZ2V0VG91Y2hJbnB1dHModW5jYWxjdWxhdGVkTm9kZXMpO1xuXG4gICAgdW5jYWxjdWxhdGVkTm9kZXMgPSB0b3VjaE5vZGVzU2VwYXJhdGVkLnVuY2FsY3VsYXRlZE5vZGVzO1xuXG4gICAgLy8gRGVhbCB3aXRoIHRvdWNoIENvbnRyb2xzXG4gICAgbGV0IHRvdWNoTm9kZXMgPSB0b3VjaE5vZGVzU2VwYXJhdGVkLnRvdWNoTm9kZXM7XG5cbiAgICBleGVjdXRhYmxlICs9IGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyh0b3VjaE5vZGVzKTtcblxuICAgIGZvciAobGV0IHQgaW4gdG91Y2hOb2Rlcykge1xuICAgICAgICBmb3IgKGxldCBvIGluIHRvdWNoTm9kZXNbdF0ub3V0cHV0cykge1xuICAgICAgICAgICAgY2FsY3VsYXRlZE5vZGVzLnB1c2goYCR7dH06JHt0b3VjaE5vZGVzW3RdLm91dHB1dHNbb10udGl0bGV9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbm5lY3Rpb24gRGljdGlvbmFyeSBjb250YWlucyBjb25uZWN0aW9ucyBpbiBrZXk6IHZhbHVlIGZvcm1hdCwgd2hlcmVcbiAgICAvLyBib3RoIGNvbnRhaW4gbm9kZUlkIGFuZCBzZXR0aW5nSWQgYXMgc3RyaW5ncyBzZXBhcmF0ZWQgYnkgYSBjb2xvbi5cbiAgICAvLyBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnkgPSBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5KGFsbENvbm5lY3Rpb25zKTtcblxuICAgIC8vIEdlbmVyYWwgcnVsZXMgZm9yIGFsZ29yaXRobSB3cml0aW5nOlxuICAgIC8vICogdXNlIGFzIG1hbnkgZnVuY3Rpb25zIGFzIHBvc3NpYmxlIChpbiBwZXJmb3JtYW5jZSBib3VuZHMpXG4gICAgLy8gKiBcblxuICAgIC8vIDAuIExvb3AgdGhyb3VnaCB1bmNhbGN1bGF0ZWQgbm9kZXMgYW5kIGZpbmQgc2NvcGVzLiBTY29wZXMgZG8gbm90IGhhdmUgb3V0cHV0cywgc28gbm8gbmVlZCB0byBmaW5kIGlucHV0cy5cbiAgICAvLyAwLjAgRG8gaXQgaW4gYSBmdW5jdGlvbj9cblxuICAgIC8vIDEuIExvb3AgdW50aWwgYWxsIG5vZGVzIGFyZSBjYWxjdWxhdGVkXG4gICAgLy8gfCAgIDEuIENoZWNrIGlmIG5vZGUgd2FzIGNhbGN1bGF0ZWQgYmVmb3JlLCBpZiB5ZXMgZ28gdG8gbmV4dCBub2RlLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIDIuIElmIHdhcyBub3QgY2FsY3VsYXRlZDpcbiAgICAvLyB8ICAgfCAgIDEuIENoZWNrIGlmIGFsbCBjb25uZWN0ZWQgaW5wdXRzIGFyZSBjb25uZWN0ZWQgdG8gdGhlIGNhbGN1bGF0ZWQgbm9kZXMsIGlmIG5vdCAtIGdvIHRvIG5leHQgbm9kZS4gKGZ1bmN0aW9uKVxuICAgIC8vIHwgICB8ICAgMi4gSWYgeWVzLCBzYXZlIGFsbCB1bmNvbm5lY3RlZCBpbnB1dHMgKHZhbHVlIGZyb20gZGVmYXVsdCB2YWx1ZSkuIChmdW5jdGlvbiBmb3IgZWFjaCBzYXZlKVxuICAgIC8vIHwgICB8ICAgMy4gQ2hlY2sgaWYgb3V0cHV0IGlzIHBvaW50aW5nIHRvIGEgZ2VuZXJhdG9yLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIHwgICA0LiBJZiB5ZXMsIHBhcnNlIGdlbmVyYXRvclxuICAgIC8vIHwgICB8ICAgfCAgIDEuIFNjYW4gZ2VuZXJhdG9yIGFuZCBzYXZlIHZhcmlhYmxlc1xuICAgIC8vIHwgICB8ICAgfCAgIDIuIElmIHZhcmlhYmxlIGlzIGEgZ2VuZXJhdG9yIGdvIHRvIHN0ZXAgMS4yLjRcbiAgICAvLyB8ICAgfCAgIHwgICAzLiBMb29wIHVudGlsIGFsbCBnZW5lcmF0b3JzIHdlcmUgcGFyc2VkXG4gICAgLy8gfCAgIHwgICB8IC0tLS0tLS0tLS0tIEluIGZvbGxvd2luZywgaW5wdXRzIGFyZSBjaGVja2VkIGZpcnN0IHNpbmNlIHNldHRpbmcgY2FuIGJlIGFuIGlucHV0IC0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB8ICAgfCAgIDUuIENoZWNrIGlmIG91dHB1dCBpcyBwb2ludGluZyB0byBhbiBpbnB1dCwgaWYgeWVzIGFzc2lnbiBpbnB1dCB2YXJpYWJsZSB0byB0aGUgb3V0cHV0IHZhcmlhYmxlXG4gICAgLy8gfCAgIHwgICA2LiBDaGVjayBpZiBvdXRwdXQgaXMgcG9pbnRpbmcgdG8gYSBzZXR0aW5nLCBpZiB5ZXMgYXNzaWduIGNvbnN0YW50IHRvIHRoZSBzZXR0aW5nXG4gICAgLy8gMi4gRm9yIGVhY2ggc2NvcGU6XG4gICAgLy8gfCAgIDEuIEdldCBhbGwgaW5wdXRzIGFuZCBzYXZlIHRoZW0gaW4gdmFyaWFibGVzIChhc3N1bWVkIHRvIGJlIGNhbGN1bGF0ZWQgc2luY2UgdGVybWluYXRpb24gY29uZGl0aW9uIGZyb20gc3RlcCAxIGlzIGJhc2VkIG9uIGFsbCBub2RlcyBiZWluZyBjYWxjdWxhdGVkLilcbiAgICAvLyB8ICAgMi4gUGFyc2UgZmlyc3QgZ2VuZXJhdG9yIGFuZCBnZW5lcmF0ZSBzY29wZSBvdXRwdXQgdmFyaWFibGUgKG1ha2luZyBzdXJlIHRoYXQgYWxsIHZhcmlhYmxlcyBmcm9tIGdlbmVyYXRvciB3ZXJlIHNhdmVkIGJlZm9yZWhhbmQpXG4gICAgLy8gfCAgIDMuIEdlbmVyYXRlIGFuIGFycmF5IG9mIG91dHB1dCBkYXRhIGJhc2VkIG9uIGdlbmVyYWwgKG9yIGNvbm5lY3RlZCkgdGltZSBhcnJheSBhbmQgc2F2ZSBpdCBpbnRvIGEgdmFyaWFibGVcbiAgICAvLyB8ICAgNC4gQ3JlYXRlIHJlZHJhdyBmdW5jdGlvbiwgaW5zaWRlIHRoYXQgZnVuY3Rpb246XG4gICAgLy8gfCAgIHwgICAxLiBGaW5kIGFwcHJvcHJpYXRlIGNhbnZhcyBub2RlIGluIHRoZSBkb21cbiAgICAvLyB8ICAgfCAgIDIuIEdldCBjb250ZXh0XG4gICAgLy8gfCAgIHwgICAzLiBSZXBvcHVsYXRlIGdyYXBoIGFycmF5IHdpdGggbmV3IGdyYXBocy5cbiAgICAvLyB8ICAgNS4gQ3JlYXRlIHVwZGF0ZURhdGEgZnVuY3Rpb24sIGluc2lkZSB0aGF0IGZ1bmN0aW9uOlxuICAgIC8vIHwgICB8ICAgMS4gTG9vcCB0aHJvdWdoIGdyYXBoIGFycmF5IGFuZCB1cGRhdGUgZ3JhcGhzIHdpdGggbmV3IGRhdGEuXG5cblxuICAgIC8vIDAuMCBMb29wIHRocm91Z2ggYWxsIHVpIG5vZGVzIGFuZCBzYXZlIHRoZWlyIG91dHB1dCB2YXJpYWJsZSBuYW1lc1xuICAgIGZvcihsZXQgbm9kZUtleSBpbiB1aU5vZGVzKSB7XG4gICAgICAgIC8vIFNhdmUgY3VycmVudCBub2RlIGludG8gYSBjb25zdGFudFxuICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHVpTm9kZXNbbm9kZUtleV07XG4gICAgICAgIGNvbnN0IG91dHB1dEtleSA9IGN1cnJlbnROb2RlLm91dHB1dHNbMF0udGl0bGU7XG5cbiAgICAgICAgZXhlY3V0YWJsZSArPSBgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke25vZGVLZXl9SW5wdXRcIikub25pbnB1dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAke25vZGVLZXl9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7bm9kZUtleX1JbmRpY2F0b3JcIikuaW5uZXJUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfTtcXG5gO1xuICAgICAgICBleGVjdXRhYmxlICs9IGB2YXIgJHtub2RlS2V5fSR7b3V0cHV0S2V5fSA9IGZ1bmN0aW9uICh0KSB7IHJldHVybiAke3VpTm9kZXNbbm9kZUtleV0uc2V0dGluZ3NbM10udmFsdWV9fTtcXG5gO1xuXG4gICAgICAgIGNhbGN1bGF0ZWROb2Rlcy5wdXNoKGAke25vZGVLZXl9OiR7b3V0cHV0S2V5fWApO1xuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuICAgIH1cbiAgICAvLyAxLiBMb29wIHVudGlsIGFsbCBub2RlcyBhcmUgY2FsY3VsYXRlZCBhbmQgY291bnQgbnVtYmVyIG9mIGl0ZXJhdGlvbnMgZm9yIHN0YXRpc3RpY3NcbiAgICBmb3IgKHN0YXRpc3RpY3MubG9vcENvdW50ZXIgPSAwOyBvYmplY3RTaXplKHVuY2FsY3VsYXRlZE5vZGVzKSA+IDA7IHN0YXRpc3RpY3MubG9vcENvdW50ZXIrKykge1xuICAgICAgICBcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB1bmNhbGN1bGF0ZWQgbm9kZXNcbiAgICAgICAgZm9yIChsZXQgbm9kZUtleSBpbiB1bmNhbGN1bGF0ZWROb2Rlcykge1xuICAgICAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG5vZGUgaW50byBhIGNvbnN0YW50XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuXG4gICAgICAgICAgICAvLyBHbyB0byBuZXh0IG5vZGUgaWYgbm90IGFsbCBjb25uZWN0ZWQgaW5wdXRzIHdlcmUgY2FsY3VsYXRlZCBhbHJlYWR5XG4gICAgICAgICAgICBpZiAoIWFsbElucHV0c0NhbGN1bGF0ZWQobm9kZUtleSwgY3VycmVudE5vZGUuaW5wdXRzLCBhbGxDb25uZWN0aW9ucywgY2FsY3VsYXRlZE5vZGVzKSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZUNhbGN1bGF0ZWRPdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggZXZlcnkgb3V0cHV0IG9mIHRoZSBub2RlIHRvIGNhbGN1bGF0ZSB0aGVtXG4gICAgICAgICAgICBmb3IgKGxldCBvID0gMDsgbyA8IGN1cnJlbnROb2RlLm91dHB1dHMubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRLZXkgPSBjdXJyZW50Tm9kZS5vdXRwdXRzW29dLnRpdGxlO1xuICAgICAgICAgICAgICAgIC8vIElmIGN1cnJlbnQgb3V0cHV0IHdhcyBjYWxjdWxhdGVkIGFscmVhZHksIHNraXAgdG8gbmV4dCBvbmVcbiAgICAgICAgICAgICAgICBpZiAod2FzQ2FsY3VsYXRlZChjYWxjdWxhdGVkTm9kZXMsIG5vZGVLZXksIG91dHB1dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0cy5wdXNoKGAke25vZGVLZXl9OiR7b3V0cHV0S2V5fWApO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBub3QsIGNhbGN1bGF0ZSBpdCBhbmQgYXBwZW5kIHRvIHRoZSBleGVjdXRhYmxlIHRleHQuXG4gICAgICAgICAgICAgICAgbGV0IHsgZXhlLCB3YXNTdWNjZXNzZnVsIH0gPSBjYWxjdWxhdGVPdXRwdXQobm9kZUtleSwgb3V0cHV0S2V5LCBjdXJyZW50Tm9kZSwgYWxsQ29ubmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmICh3YXNTdWNjZXNzZnVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWN1dGFibGUgKz0gZXhlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWROb2Rlcy5wdXNoKGAke25vZGVLZXl9OiR7b3V0cHV0S2V5fWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCBnZW5lcmF0ZSBvdXRwdXQgY29kZTogJHtub2RlS2V5fSAtICR7b3V0cHV0S2V5fSB8IHNjcmlwdEdlbmVyYXRvci50c2ApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0cy5sZW5ndGggPT09IGN1cnJlbnROb2RlLm91dHB1dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gTG9vcCB0aHJvdWdoIGFsbCBzY29wZXMgYW5kIGRyYXcgZ3JhcGhzXG5cbiAgICBleGVBcnJheS5wdXNoKGV4ZWN1dGFibGUpO1xuICAgIGV4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZXhlY3V0YWJsZSArPSBcImZ1bmN0aW9uIHVwZGF0ZSgpIHtcXG5cIjtcblxuICAgIGxldCBnaWZSZWNvcmRpbmdTdGFydCA9IGBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25hbHMtcmVjb3JkaW5nLXN0YXJ0XCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlzUmVjb3JkaW5nID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduYWxzLXJlY29yZGluZy1zdGFydFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbmFscy1yZWNvcmRpbmctc3RvcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBgO1xuXG4gICAgbGV0IGdpZlJlY29yZGluZ1N0b3AgPSBgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduYWxzLXJlY29yZGluZy1zdG9wXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlzUmVjb3JkaW5nID0gZmFsc2U7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbmFscy1yZWNvcmRpbmctc3RhcnRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduYWxzLXJlY29yZGluZy1zdG9wXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYDtcblxuICAgIC8vIExvb3AgdGhyb3VnaCB0aW1lIHNjb3Blc1xuICAgIGZvciAobGV0IHMgaW4gYWxsU2NvcGVzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29wZSA9IGFsbFNjb3Blc1tzXTtcblxuICAgICAgICBsZXQgZGF0YUluaXRpYWxpc2VyQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IGRhdGFHZW5lcmF0aW9uQXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3VycmVudFNjb3BlLmlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGN1cnJlbnRTY29wZS5pbnB1dHNbaV0udGl0bGU7XG4gICAgICAgICAgICBjb25zdCB7IG90aGVyTm9kZUlkLCBvdGhlclNldHRpbmdJZCB9ID0gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoYWxsQ29ubmVjdGlvbnMsIG51bGwsIHsgbm9kZUlkOiBzLCBzZXR0aW5nSWQ6IGlucHV0VGl0bGV9KTtcblxuICAgICAgICAgICAgZGF0YUluaXRpYWxpc2VyQXJyYXkucHVzaChgbGV0ICR7aW5wdXRUaXRsZX1kYXRhID0gW107XFxuYCk7XG4gICAgICAgICAgICBkYXRhR2VuZXJhdGlvbkFycmF5LnB1c2goYCR7aW5wdXRUaXRsZX1kYXRhLnB1c2goJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0W2ldKSk7XFxuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YUluaXRpYWxpc2VyQ29tcG9zaXRlID0gXCJcIjtcbiAgICAgICAgbGV0IGRhdGFHZW5lcmF0aW9uQ29tcG9zaXRlID0gXCJcIjtcblxuICAgICAgICBmb3IobGV0IGQgaW4gZGF0YUluaXRpYWxpc2VyQXJyYXkpIHtcbiAgICAgICAgICAgIGRhdGFJbml0aWFsaXNlckNvbXBvc2l0ZSArPSBkYXRhSW5pdGlhbGlzZXJBcnJheVtkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgZCBpbiBkYXRhR2VuZXJhdGlvbkFycmF5KSB7XG4gICAgICAgICAgICBkYXRhR2VuZXJhdGlvbkNvbXBvc2l0ZSArPSBkYXRhR2VuZXJhdGlvbkFycmF5W2RdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGFHZW5lcmF0aW9uU25pcHBldCA9IGAke2RhdGFJbml0aWFsaXNlckNvbXBvc2l0ZX1cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgJHtkYXRhR2VuZXJhdGlvbkNvbXBvc2l0ZX1cbiAgICAgICAgICAgIH1gO1xuXG4gICAgICAgIGxldCBkYXRhc2V0cyA9IFsuLi5jdXJyZW50U2NvcGUuc2V0dGluZ3NdLnNsaWNlKDMsIGN1cnJlbnRTY29wZS5zZXR0aW5ncy5sZW5ndGgpLm1hcCgoc2V0dGluZywgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGN1cnJlbnRTY29wZS5pbnB1dHNbaV0udGl0bGU7XG4gICAgICAgICAgICByZXR1cm4gYHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJyR7aW5wdXRUaXRsZS5yZXBsYWNlKFwiX1wiLCBcIiBcIil9JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyR7c2V0dGluZy52YWx1ZX0nLFxuICAgICAgICAgICAgICAgIGRhdGE6ICR7aW5wdXRUaXRsZX1kYXRhXG4gICAgICAgICAgICB9YFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZGF0YXNldHNBcnJheVNuaXBwZXQgPSBcIltcIjtcbiAgICAgICAgZm9yKGxldCBkID0gMDsgZCA8IGRhdGFzZXRzLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgICAgICBkYXRhc2V0c0FycmF5U25pcHBldCArPSBkYXRhc2V0c1tkXTtcbiAgICAgICAgICAgIGlmKGQgIT0gKGRhdGFzZXRzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgZGF0YXNldHNBcnJheVNuaXBwZXQgKz0gXCIsXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YXNldHNBcnJheVNuaXBwZXQgKz0gXCJdXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGV4ZWN1dGFibGUgKz0gYFxuICAgICAgICBpZihncmFwaHMuJHtzfSkge1xuICAgICAgICAgICAgJHtkYXRhR2VuZXJhdGlvblNuaXBwZXR9XG4gICAgICAgICAgICBncmFwaHMuJHtzfS5kYXRhLmRhdGFzZXRzID0gJHtkYXRhc2V0c0FycmF5U25pcHBldH07XG4gICAgICAgICAgICBncmFwaHMuJHtzfS51cGRhdGUoKTtcbiAgICAgICAgICAgIGlmKHR5cGVvZiAke3N9Z2lmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGlmKCFsYXN0RnJhbWVUaW1lc3RhbXApIHsgXG4gICAgICAgICAgICAgICAgICAgIGxhc3RGcmFtZVRpbWVzdGFtcCA9IG5ldyBEYXRlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lU2luY2VMYXN0RnJhbWUgPSBub3cgLSBsYXN0RnJhbWVUaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RGcmFtZVRpbWVzdGFtcCA9IG5ldyBEYXRlO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBDYW52YXMud2lkdGggPSBncmFwaHMuJHtzfS5jYW52YXMud2lkdGgvMjtcbiAgICAgICAgICAgICAgICAgICAgdGVtcENhbnZhcy5oZWlnaHQgPSBncmFwaHMuJHtzfS5jYW52YXMuaGVpZ2h0LzI7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wQ3R4ID0gdGVtcENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBDdHguZmlsbFN0eWxlID0gXCIjRkZGXCI7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBDdHguZmlsbFJlY3QoMCwgMCwgdGVtcENhbnZhcy53aWR0aCwgdGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wQ3R4LmRyYXdJbWFnZShncmFwaHMuJHtzfS5jYW52YXMsIDAsIDAsIGdyYXBocy4ke3N9LmNhbnZhcy53aWR0aC8yLCBncmFwaHMuJHtzfS5jYW52YXMuaGVpZ2h0LzIpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuJHtzfWdpZi5hZGRGcmFtZSh0ZW1wQ3R4LCB7ZGVsYXk6IHRpbWVTaW5jZUxhc3RGcmFtZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjYW52YXNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke3N9XCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdyA9IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHZhciBoID0gY2FudmFzTm9kZS5wYXJlbnROb2RlLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FudmFzTm9kZS53aWR0aCA9IHc7XG4gICAgICAgICAgICBjYW52YXNOb2RlLmhlaWdodCA9IGg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXNOb2RlLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAgICAgJHtkYXRhR2VuZXJhdGlvblNuaXBwZXR9XG5cbiAgICAgICAgICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsczogdC5tYXAodGkgPT4gdGkudG9GaXhlZCgyKSksIGRhdGFzZXRzOiAke2RhdGFzZXRzQXJyYXlTbmlwcGV0fX0sXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50czogeyBsaW5lOiB7IHRlbnNpb246IDAsIHN0ZXBwZWQ6IGZhbHNlIH0sIHBvaW50OiB7IHJhZGl1czogMCwgaGl0UmFkaXVzOiAwLCBob3ZlclJhZGl1czogMCB9IH0sXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogeyBkdXJhdGlvbjogMCB9LFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwczogeyBlbmFibGVkOiBmYWxzZSB9LCBcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7IGRpc3BsYXk6ICR7Y3VycmVudFNjb3BlLmlucHV0cy5sZW5ndGggPiAxID8gJ3RydWUnIDogJ2ZhbHNlJ30gfVxuICAgICAgICAgICAgICAgICAgICAkeyhjdXJyZW50U2NvcGUuc2V0dGluZ3NbMV0udmFsdWUgPT0gXCIwXCIpICYmIChjdXJyZW50U2NvcGUuc2V0dGluZ3NbMl0udmFsdWUgPT0gXCIwXCIpID8gJycgOiBgLCBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbe3RpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAke3BhcnNlRmxvYXQoY3VycmVudFNjb3BlLnNldHRpbmdzWzFdLnZhbHVlKSArIHBhcnNlRmxvYXQoY3VycmVudFNjb3BlLnNldHRpbmdzWzJdLnZhbHVlKSAvIDJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogJHtwYXJzZUZsb2F0KGN1cnJlbnRTY29wZS5zZXR0aW5nc1sxXS52YWx1ZSkgLSBwYXJzZUZsb2F0KGN1cnJlbnRTY29wZS5zZXR0aW5nc1syXS52YWx1ZSkgLyAyfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogJHtwYXJzZUZsb2F0KGN1cnJlbnRTY29wZS5zZXR0aW5nc1syXS52YWx1ZSkgLyAxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XVxuICAgICAgICAgICAgICAgICAgICB9YH0sIHRpdGxlOiB7IGRpc3BsYXk6IHRydWUsIHRleHQ6ICcke2N1cnJlbnRTY29wZS50aXRsZX0nLCBwb3NpdGlvbjogJ2xlZnQnIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ3JhcGhzLiR7c30gPSBteUNoYXJ0O1xuICAgICAgICB9YDtcblxuICAgICAgICBnaWZSZWNvcmRpbmdTdGFydCArPSBgd2luZG93LiR7c31naWYgPSBuZXcgR0lGKHtcbiAgICAgICAgICAgIHdvcmtlcnM6IDEsXG4gICAgICAgICAgICBxdWFsaXR5OiAxMCxcbiAgICAgICAgICAgIHdvcmtlclNjcmlwdDogXCIvZ2lmLndvcmtlci5qc1wiLFxuICAgICAgICAgICAgd2lkdGg6IGdyYXBocy4ke3N9LmNhbnZhcy53aWR0aCAvIDIsXG4gICAgICAgICAgICBoZWlnaHQ6IGdyYXBocy4ke3N9LmNhbnZhcy5oZWlnaHQgLyAyXG4gICAgICAgIH0pO2A7XG4gICAgICAgIGdpZlJlY29yZGluZ1N0b3AgKz0gYHdpbmRvdy4ke3N9Z2lmLm9uKCdmaW5pc2hlZCcsIGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgICAgIC8vIGxvY2F0aW9uLmFzc2lnbihVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgICAgICAgICAgIGRvd25sb2FkKGJsb2IsIFwiYW5pbS5naWZcIiwgXCJpbWFnZS9naWZcIik7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuJHtzfWdpZjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LiR7c31naWYucmVuZGVyKCk7YFxuXG4gICAgICAgIGV4ZUFycmF5LnB1c2goZXhlY3V0YWJsZSk7XG4gICAgICAgIGV4ZWN1dGFibGUgPSBcIlwiO1xuICAgIH1cblxuICAgIGV4ZWN1dGFibGUgKz0gZ2lmUmVjb3JkaW5nU3RhcnQgKyBcIn07XFxuXCI7XG4gICAgZXhlY3V0YWJsZSArPSBnaWZSZWNvcmRpbmdTdG9wICsgXCJ9O1xcblwiO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGZmdCBzY29wZXNcbiAgICBmb3IobGV0IGYgaW4gZmZ0Tm9kZXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gZmZ0Tm9kZXNbZl07XG4gICAgICAgIGNvbnN0IHsgb3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkIH0gPSBnZXRPdGhlclNpZGVPZkNvbm5lY3RvcihhbGxDb25uZWN0aW9ucywgbnVsbCwgeyBub2RlSWQ6IGYsIHNldHRpbmdJZDogXCJzaWduYWxcIiB9KTtcblxuICAgICAgICBleGVjdXRhYmxlICs9IGBpZihncmFwaHMuJHtmfSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7ZGF0YS5wdXNoKCR7b3RoZXJOb2RlSWR9JHtvdGhlclNldHRpbmdJZH0odFtpXSkpO31cblxuICAgICAgICAgICAgbGV0IGYgPSBuZXcgRkZUKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBjb21wbGV4T3V0cHV0ID0gZi5jcmVhdGVDb21wbGV4QXJyYXkoKTtcbiAgICAgICAgICAgIGxldCByZWFsT3V0cHV0ID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcblxuICAgICAgICAgICAgZi5yZWFsVHJhbnNmb3JtKGNvbXBsZXhPdXRwdXQsIGRhdGEpO1xuICAgICAgICAgICAgZi5mcm9tQ29tcGxleEFycmF5KGNvbXBsZXhPdXRwdXQsIHJlYWxPdXRwdXQpO1xuXG4gICAgICAgICAgICAvLyByZWFsT3V0cHV0ID0gcmVhbE91dHB1dC5maWx0ZXIoKHZhbCwgaSkgPT4gaSUyID09IDAgfHwgaSA9PSAwKTtcblxuICAgICAgICAgICAgcmVhbE91dHB1dCA9IHJlYWxPdXRwdXQuc3BsaWNlKDAsICR7cGFyc2VJbnQoY3VycmVudFNjb3BlLnNldHRpbmdzWzJdLnZhbHVlKX0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZWFsT3V0cHV0ID0gcmVhbE91dHB1dC5tYXAodmFsID0+IHZhbCAqIDIgLyBkYXRhLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGdyYXBocy4ke2Z9LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IHJlYWxPdXRwdXQ7XG4gICAgICAgICAgICBncmFwaHMuJHtmfS51cGRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjYW52YXNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke2Z9XCIpO1xuXG4gICAgICAgICAgICB2YXIgdmlld1NpemUgPSB7XG4gICAgICAgICAgICAgICAgeDogY2FudmFzTm9kZS5wYXJlbnROb2RlLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgICAgIHk6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHcgPSB2aWV3U2l6ZS54O1xuICAgICAgICAgICAgdmFyIGggPSB2aWV3U2l6ZS55O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYW52YXNOb2RlLndpZHRoID0gdztcbiAgICAgICAgICAgIGNhbnZhc05vZGUuaGVpZ2h0ID0gaDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGN0eCA9IGNhbnZhc05vZGUuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGRhdGEucHVzaCgke290aGVyTm9kZUlkfSR7b3RoZXJTZXR0aW5nSWR9KHRbaV0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGYgPSBuZXcgRkZUKGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBjb21wbGV4T3V0cHV0ID0gZi5jcmVhdGVDb21wbGV4QXJyYXkoKTtcbiAgICAgICAgICAgIGYucmVhbFRyYW5zZm9ybShjb21wbGV4T3V0cHV0LCBkYXRhKTtcbiAgICAgICAgICAgIGxldCByZWFsT3V0cHV0ID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIHJlYWxPdXRwdXQuZmlsbCgwKTtcbiAgICAgICAgICAgIGYuZnJvbUNvbXBsZXhBcnJheShjb21wbGV4T3V0cHV0LCByZWFsT3V0cHV0KTtcblxuICAgICAgICAgICAgLy8gcmVhbE91dHB1dCA9IHJlYWxPdXRwdXQuZmlsdGVyKCh2YWwsIGkpID0+IGklMiA9PSAwIHx8IGkgPT0gMCk7XG5cbiAgICAgICAgICAgIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0LnNwbGljZSgwLCAke3BhcnNlSW50KGN1cnJlbnRTY29wZS5zZXR0aW5nc1syXS52YWx1ZSl9KTtcblxuICAgICAgICAgICAgcmVhbE91dHB1dCA9IHJlYWxPdXRwdXQubWFwKHZhbCA9PiB2YWwgKiAyIC8gZGF0YS5sZW5ndGgpO1xuXG4gICAgICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHJlYWxPdXRwdXQubWFwKCh2YWwsIGkpID0+IHBhcnNlRmxvYXQoaS8yKS50b0ZpeGVkKDEpKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaWduYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyR7Y3VycmVudFNjb3BlLnNldHRpbmdzWzFdLnZhbHVlfScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVhbE91dHB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwcGVkTGluZTogJ21pZGRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMFxuICAgICAgICAgICAgICAgICAgICB9LCB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LCBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7Y3VycmVudFNjb3BlLmlucHV0cy5sZW5ndGggPiAxfVxuICAgICAgICAgICAgICAgICAgICB9LCB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICcke2N1cnJlbnRTY29wZS50aXRsZX0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0J1xuICAgICAgICAgICAgICAgICAgICB9LCBlbGVtZW50czogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmU6IHsgdGVuc2lvbjogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IHsgcmFkaXVzOiAwLCBoaXRSYWRpdXM6IDAsIGhvdmVyUmFkaXVzOiAwIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgdG9vbHRpcHM6IHsgZW5hYmxlZDogZmFsc2UgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBncmFwaHMuJHtmfSA9IG15Q2hhcnQ7XG4gICAgICAgIH1gO1xuICAgIH1cblxuICAgIGV4ZWN1dGFibGUgKz0gXCJ9O1xcblwiXG4gICAgZXhlY3V0YWJsZSArPSBcInVwZGF0ZSgpO1wiXG5cbiAgICBleGVBcnJheS5wdXNoKGV4ZWN1dGFibGUpO1xuICAgIGV4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgcmV0dXJuIGV4ZUFycmF5O1xufSIsImltcG9ydCB7IHRva2VuaXplR2VuZXJhdG9yLCBHZW5lcmF0b3JTZWdtZW50IH0gZnJvbSAnLi9nZW5lcmF0b3JUb2tlbml6ZXInO1xuaW1wb3J0IHsgdG9rZW5Ub0pzIH0gZnJvbSAnLi90b2tlblRvSnMnO1xuXG4vLyBHZXQgYWxsIG5vZGVzIHRoYXQgYXJlIG5vdCBzY29wZXMsIGFuZCBzYXZlIHNjb3BlcyBpbnRvIHRoZWlyIG93biBjb2xsZWN0aW9uXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGVOb2RlcyAoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKToge1xuICAgICAgICB1bmNhbGN1bGF0ZWROb2RlczogTm9kZUNvbGxlY3Rpb24sIFxuICAgICAgICBhbGxTY29wZXM6IE5vZGVDb2xsZWN0aW9uLFxuICAgICAgICB1aU5vZGVzOiBOb2RlQ29sbGVjdGlvbixcbiAgICAgICAgZmZ0Tm9kZXM6IE5vZGVDb2xsZWN0aW9uLFxuICAgICAgICB0aW1lOiBOb2RlQ29sbGVjdGlvbixcbiAgICAgICAgYW5pbWF0aW9uTm9kZXM6IE5vZGVDb2xsZWN0aW9uXG4gICAgfSB7XG4gICAgbGV0IHVuY2FsY3VsYXRlZDogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgc2NvcGVzOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCB1aU5vZGVzOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCBmZnROb2RlczogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgdGltZU5vZGVzOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCBhbmltYXRpb25Ob2RlczogTm9kZUNvbGxlY3Rpb24gPSB7fTtcblxuICAgIGZvcihsZXQgaSBpbiBhbGxOb2Rlcykge1xuICAgICAgICAvLyBDaGVjayBpZiBpdCBpcyBhIFVJIG5vZGVcbiAgICAgICAgY29uc3QgaXNUaGlyZExldHRlclVwcGVyQ2FzZSA9IFN0cmluZyhpKS5zdWJzdHIoMiwgMSkudG9VcHBlckNhc2UoKSA9PT0gU3RyaW5nKGkpLnN1YnN0cigyLCAxKTtcbiAgICAgICAgY29uc3QgaXNVSSA9IFN0cmluZyhpKS5zdWJzdHIoMCwgMikgPT09IFwidWlcIjtcbiAgICAgICAgY29uc3QgaXNBY3R1YWxVSSA9IGlzVUkgJiYgaXNUaGlyZExldHRlclVwcGVyQ2FzZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBpdCBpcyBhIHNjb3BlXG4gICAgICAgIGNvbnN0IGlzU2NvcGUgPSBTdHJpbmcoaSkuc3Vic3RyKDAsIDUpID09PSBcInNjb3BlXCI7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYW4gZmZ0IHNjb3BlXG4gICAgICAgIGNvbnN0IGlzRkZUID0gU3RyaW5nKGkpLnN1YnN0cigwLCAzKSA9PT0gXCJmZnRcIjtcblxuICAgICAgICAvLyBDaGVjayBpZiBpdCBpcyBhIHRpbWUgbm9kZVxuICAgICAgICBjb25zdCBpc1RpbWUgPSBTdHJpbmcoaSkuc3Vic3RyKDAsIDQpID09PSBcInRpbWVcIjtcblxuICAgICAgICAvLyBDSGVjayBpZiBpdCBpcyBhbiBhbmltYXRpb24gbm9kZVxuICAgICAgICBjb25zdCBpc0FuaW1hdGlvbiA9IFN0cmluZyhpKS5zdWJzdHIoMCwgOSkgPT09IFwiYW5pbWF0aW9uXCI7XG5cbiAgICAgICAgLy8gRG8gc2VwYXJhdGlvblxuICAgICAgICBpZihpc1Njb3BlKSB7XG4gICAgICAgICAgICBzY29wZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIGlmKGlzQWN0dWFsVUkpIHtcbiAgICAgICAgICAgIHVpTm9kZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIGlmKGlzRkZUKSB7XG4gICAgICAgICAgICBmZnROb2Rlc1tpXSA9IGFsbE5vZGVzW2ldO1xuICAgICAgICB9IGVsc2UgaWYoaXNUaW1lKSB7XG4gICAgICAgICAgICB0aW1lTm9kZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIGlmKGlzQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBhbmltYXRpb25Ob2Rlc1tpXSA9IGFsbE5vZGVzW2ldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdW5jYWxjdWxhdGVkW2ldID0gYWxsTm9kZXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm4gcmVzdWx0c1xuICAgIHJldHVybiB7XG4gICAgICAgIHVuY2FsY3VsYXRlZE5vZGVzOiB1bmNhbGN1bGF0ZWQsXG4gICAgICAgIGFsbFNjb3Blczogc2NvcGVzLFxuICAgICAgICB1aU5vZGVzOiB1aU5vZGVzLFxuICAgICAgICBmZnROb2RlczogZmZ0Tm9kZXMsXG4gICAgICAgIHRpbWU6IHRpbWVOb2RlcyxcbiAgICAgICAgYW5pbWF0aW9uTm9kZXM6IGFuaW1hdGlvbk5vZGVzXG4gICAgfTtcbn1cblxuLy8gR2VuZXJhdGUgY29ubmVjdGlvbiBkaWN0aW9uYXJ5XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb25uZWN0aW9uRGljdGlvbmFyeSAoYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdKToge1tjb25uZWN0b3JTdGFydDogc3RyaW5nXTogc3RyaW5nfSB7XG4gICAgbGV0IGNvbm5lY3Rpb25EaWN0aW9uYXJ5OiB7W2Nvbm5lY3RvclN0YXJ0OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29ubmVjdG9yU3RhcnQgPSBhbGxDb25uZWN0aW9uc1tpXS5jb25uZWN0b3JTdGFydDtcbiAgICAgICAgY29uc3QgY29ubmVjdG9yRW5kID0gYWxsQ29ubmVjdGlvbnNbaV0uY29ubmVjdG9yRW5kO1xuXG4gICAgICAgIGNvbnN0IGNvbm5lY3RvclN0YXJ0Q29tYmluZWQgPSBjb25uZWN0b3JTdGFydC5ub2RlSWQgKyBcIjpcIiArIGNvbm5lY3RvclN0YXJ0LnNldHRpbmdJZDtcbiAgICAgICAgY29uc3QgY29ubmVjdG9yRW5kQ29tYmluZWQgPSBjb25uZWN0b3JFbmQubm9kZUlkICsgXCI6XCIgKyBjb25uZWN0b3JFbmQuc2V0dGluZ0lkO1xuXG4gICAgICAgIGNvbm5lY3Rpb25EaWN0aW9uYXJ5W2Nvbm5lY3RvclN0YXJ0Q29tYmluZWRdID0gY29ubmVjdG9yRW5kQ29tYmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbm5lY3Rpb25EaWN0aW9uYXJ5O1xufVxuXG4vLyBDYWxjdWxhdGUgb2JqZWN0IHNpemVcbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RTaXplIChvYmo6IG9iamVjdCk6IG51bWJlciB7XG4gICAgbGV0IGMgPSAwO1xuICAgIGZvcihsZXQgaSBpbiBvYmopIGMrKztcbiAgICByZXR1cm4gYysrO1xufVxuXG4vLyBDaGVjayBpZiBub2RlIHdhcyBjYWxjdWxhdGVkIGFscmVhZHlcbmV4cG9ydCBmdW5jdGlvbiB3YXNDYWxjdWxhdGVkKGNhbGN1bGF0ZWROb2Rlczogc3RyaW5nW10sIG5vZGVLZXk6IHN0cmluZywgb3V0cHV0S2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FsY3VsYXRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIFNwbGl0IHN0cmluZyBmcm9tIGNhbGN1bGF0ZWQgbm9kZXMgYXJyYXkgYW5kIGdldCBub2RlIGFuZCBvdXRwdXQga2V5c1xuICAgICAgICBjb25zdCBzcGxpdHRlZCA9IGNhbGN1bGF0ZWROb2Rlc1tpXS5zcGxpdChcIjpcIik7XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWROb2RlID0gc3BsaXR0ZWRbMF07XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRPdXRwdXQgPSBzcGxpdHRlZFsxXTtcblxuICAgICAgICBpZihjYWxjdWxhdGVkTm9kZSA9PT0gbm9kZUtleSAmJiBjYWxjdWxhdGVkT3V0cHV0ID09PSBvdXRwdXRLZXkpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gR2V0IG5vZGVJZCBhbmQgc2V0dGluZ0lkIG9mIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBjb25uZWN0aW9uOlxuZXhwb3J0IGZ1bmN0aW9uIGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKFxuICAgIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSwgXG4gICAgY29ubmVjdG9ySW5wdXQ/OiB7bm9kZUlkOiBzdHJpbmcsIHNldHRpbmdJZDogc3RyaW5nfSxcbiAgICBjb25uZWN0b3JPdXRwdXQ/OiB7bm9kZUlkOiBzdHJpbmcsIHNldHRpbmdJZDogc3RyaW5nfSk6IHtvdGhlck5vZGVJZDogc3RyaW5nLCBvdGhlclNldHRpbmdJZDogc3RyaW5nfSB7XG5cbiAgICBpZihjb25uZWN0b3JJbnB1dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNjYW5uaW5nIGNvbm5lY3RvciBzdGFydHMuLi5cIik7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFsbENvbm5lY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb25uZWN0b3IgPSBhbGxDb25uZWN0aW9uc1tpXTtcbiAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGNvbm5lY3RvciBzdGFydFxuICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0Lm5vZGVJZCA9PT0gY29ubmVjdG9ySW5wdXQubm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0LnNldHRpbmdJZCA9PT0gY29ubmVjdG9ySW5wdXQuc2V0dGluZ0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlck5vZGVJZDogY29ubmVjdG9yLmNvbm5lY3RvckVuZC5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclNldHRpbmdJZDogY29ubmVjdG9yLmNvbm5lY3RvckVuZC5zZXR0aW5nSWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29ubmVjdG9yT3V0cHV0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgY29ubmVjdG9yIGVuZHMuLi4gXCIsIGFsbENvbm5lY3Rpb25zLmxlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RvciA9IGFsbENvbm5lY3Rpb25zW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNvbXBhcmluZyBmb2xsb3dpbmcgY29ubmVjdG9yczogXCIsIGNvbm5lY3Rvci5jb25uZWN0b3JFbmQsIGNvbm5lY3Rvck91dHB1dClcbiAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGNvbm5lY3RvciBlbmRcbiAgICAgICAgICAgIGlmKGNvbm5lY3Rvci5jb25uZWN0b3JFbmQubm9kZUlkID09PSBjb25uZWN0b3JPdXRwdXQubm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvckVuZC5zZXR0aW5nSWQgPT09IGNvbm5lY3Rvck91dHB1dC5zZXR0aW5nSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZUlkOiBjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJTZXR0aW5nSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5zZXR0aW5nSWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG90aGVyTm9kZUlkOiBudWxsLFxuICAgICAgICBvdGhlclNldHRpbmdJZDogbnVsbFxuICAgIH1cbn1cblxuLy8gQ2hlY2sgaWYgYWxsIGNvbm5lY3RlZCBpbnB1dHMgaW4gdGhlIG5vZGUgYXJlIGNvbm5lY3RlZCB0byB0aGUgb3V0cHV0cyB0aGF0IHdlcmUgYWxyZWFkeSBjYWxjdWxhdGVkIG9yIGFyZSBub3QgY29ubmVjdGVkXG5leHBvcnQgZnVuY3Rpb24gYWxsSW5wdXRzQ2FsY3VsYXRlZChub2RlSWQ6IHN0cmluZywgaW5wdXRzOiBOb2RlSW5wdXRTaGFwZVtdLCBhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10sIGNhbGN1bGF0ZWROb2Rlczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBsZXQgZGF0YTogYm9vbGVhbltdID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50RGF0YSA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHtvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWR9ID0gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoYWxsQ29ubmVjdGlvbnMsIG51bGwsIHtub2RlSWQ6IG5vZGVJZCwgc2V0dGluZ0lkOiBpbnB1dHNbaV0udGl0bGV9KTtcblxuICAgICAgICAvLyBJZiB0aGUgaW5wdXQgaXMgY29ubmVjdGVkXG4gICAgICAgIGlmKG90aGVyTm9kZUlkICYmIG90aGVyU2V0dGluZ0lkKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3YXMgY2FsY3VsYXRlZFxuICAgICAgICAgICAgaWYod2FzQ2FsY3VsYXRlZChjYWxjdWxhdGVkTm9kZXMsIG90aGVyTm9kZUlkLCBvdGhlclNldHRpbmdJZCkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0YSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgaW5wdXQgaXMgbm90IGNvbm5lY3RlZFxuICAgICAgICAgICAgY3VycmVudERhdGEgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5wdXNoKGN1cnJlbnREYXRhKTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGQgaW4gZGF0YSkge1xuICAgICAgICBpZighZGF0YVtkXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjYWxjdWxhdGUgc3BlY2lmaWMgb3V0cHV0IG9mIHRoZSBub2RlXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlT3V0cHV0KFxuICAgIG5vZGVJZDogc3RyaW5nLCBcbiAgICBvdXRwdXRLZXk6IHN0cmluZywgXG4gICAgY3VycmVudE5vZGU6IFNpZ25hbE5vZGUsXG4gICAgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdKTogeyBleGU6IHN0cmluZywgd2FzU3VjY2Vzc2Z1bDogYm9vbGVhbiB9IHtcbiAgICBcbiAgICBsZXQgZSA9IFwiXCI7XG5cbiAgICBjb25zdCBnZW5lcmF0b3JJZCA9IGlzR2VuZXJhdG9yKGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuXG4gICAgLy8gQ2hlY2sgaWYgb3V0cHV0IGlzIGEgZ2VuZXJhdG9yXG4gICAgaWYoZ2VuZXJhdG9ySWQgIT09IEluZmluaXR5KSB7XG4gICAgICAgIGNvbnN0IG91dHB1dEdlbmVyYXRvciA9IGN1cnJlbnROb2RlLmdlbmVyYXRvcnNbZ2VuZXJhdG9ySWRdO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIHRva2Vuc1xuICAgICAgICBjb25zdCB0b2tlbnMgPSB0b2tlbml6ZUdlbmVyYXRvcihvdXRwdXRHZW5lcmF0b3IudmFsdWUsIG5vZGVJZCk7XG5cbiAgICAgICAgLy8gU2F2ZSB2YXJpYWJsZXMgZmlyc3RcbiAgICAgICAgZSArPSBzYXZlVmFyaWFibGVzKG5vZGVJZCwgY3VycmVudE5vZGUsIHRva2VucywgYWxsQ29ubmVjdGlvbnMpO1xuXG4gICAgICAgIC8vIFNhdmUgb3V0cHV0XG4gICAgICAgIGUgKz0gdG9rZW5Ub0pzKG5vZGVJZCwgb3V0cHV0R2VuZXJhdG9yLnRpdGxlLCB0b2tlbnMpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleGU6IGUsXG4gICAgICAgICAgICB3YXNTdWNjZXNzZnVsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dElkID0gaXNJbnB1dChjdXJyZW50Tm9kZSwgb3V0cHV0S2V5KTtcblxuICAgIGlmKGlucHV0SWQgIT09IEluZmluaXR5KSB7XG4gICAgICAgIGUgKz0gc2F2ZUlucHV0VmFyaWFibGUoY3VycmVudE5vZGUsIGFsbENvbm5lY3Rpb25zLCBub2RlSWQsIG91dHB1dEtleSwgaW5wdXRJZCk7XG4gICAgICAgIGUgKz0gYHZhciAke25vZGVJZH0ke291dHB1dEtleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtub2RlSWR9JHtjdXJyZW50Tm9kZS5pbnB1dHNbaW5wdXRJZF0udGl0bGV9fTtcXG5gO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleGU6IGUsXG4gICAgICAgICAgICB3YXNTdWNjZXNzZnVsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXR0aW5nSWQgPSBpc1NldHRpbmcoY3VycmVudE5vZGUsIG91dHB1dEtleSk7XG5cbiAgICBpZihzZXR0aW5nSWQgIT09IEluZmluaXR5KSB7XG4gICAgICAgIGUgKz0gYHZhciAke25vZGVJZH0ke291dHB1dEtleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtjdXJyZW50Tm9kZS5zZXR0aW5nc1tzZXR0aW5nSWRdLnZhbHVlfX07XFxuYDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXhlOiBcIlwiLFxuICAgICAgICB3YXNTdWNjZXNzZnVsOiBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2F2ZVZhcmlhYmxlcyhub2RlS2V5OiBzdHJpbmcsIG5vZGU6IFNpZ25hbE5vZGUsIGNvZGU6IEdlbmVyYXRvclNlZ21lbnRbXSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdKTogc3RyaW5nIHtcbiAgICBsZXQgbmV3RXhlY3V0YWJsZSA9IFwiXCI7XG5cbiAgICBmb3IobGV0IHMgPSAwOyBzIDwgY29kZS5sZW5ndGg7IHMrKykge1xuICAgICAgICBpZihjb2RlW3NdLnR5cGUgPT09IFwidmFyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhck5hbWU6IHN0cmluZyA9IFN0cmluZyhjb2RlW3NdLnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhck5hbWUuc3Vic3RyKG5vZGVLZXkubGVuZ3RoLCB2YXJOYW1lLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIFNQRUNJQUwgQ0FTRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGlmKHZhck5hbWUgPT09IFwiUElcIiB8fCB2YXJOYW1lID09PSBcInRpbWVcIikgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIElOUFVUIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBpbnB1dCBpbmRleFxuICAgICAgICAgICAgbGV0IGlucHV0S2V5OiBudW1iZXIgPSBpc0lucHV0KG5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHZhcmlhYmxlIGlzIHRoZSBpbnB1dCAoaWYgbm90IGlucHV0IGl0IHdpbGwgYmUgSW5maW5pdHkpXG4gICAgICAgICAgICBpZihpbnB1dEtleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTYXZlXG4gICAgICAgICAgICAgICAgbmV3RXhlY3V0YWJsZSArPSBzYXZlSW5wdXRWYXJpYWJsZShub2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUtleSwgdmFyaWFibGVOYW1lLCBpbnB1dEtleSk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gaW5wdXRzICR7dmFyaWFibGVOYW1lfSAtICR7bm9kZUtleX1gKTtcblxuICAgICAgICAgICAgICAgIC8vIEFuZCBjb250aW51ZSB0byB0aGUgbmV4dCBzdGVwIGluIHRoZSB0b2tlbmlzZWQgZ2VuZXJhdG9yIGNvZGVcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSUYgR0VORVJBVE9SIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBnZW5lcmF0b3IgaW5kZXhcbiAgICAgICAgICAgIGxldCBnZW5lcmF0b3JLZXk6IG51bWJlciA9IGlzR2VuZXJhdG9yKG5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIElmIGdlbmVyYXRvciBpbmRleCBpcyBub3QgYW4gSW5maW5pdHksIHRoZSBzZXR0aW5nIGlzIHRoZSBnZW5lcmF0b3IsIGFuZCBzaG91bGQgYmUgcHJvY2Vzc2VkIGFzIG9uZVxuICAgICAgICAgICAgaWYoZ2VuZXJhdG9yS2V5ICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdlbmVyYXRvciA9IG5vZGUuZ2VuZXJhdG9yc1tnZW5lcmF0b3JLZXldO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gdG9rZW5pemVHZW5lcmF0b3IoZ2VuZXJhdG9yLnZhbHVlLCBub2RlS2V5KTtcblxuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gc2F2ZVZhcmlhYmxlcyhub2RlS2V5LCBub2RlLCB0b2tlbnMsIGFsbENvbm5lY3Rpb25zKTtcblxuICAgICAgICAgICAgICAgIC8vIFNhdmUgdGhlIGdlbmVyYXRvciB0aXRsZVxuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gdG9rZW5Ub0pzKG5vZGVLZXksIGdlbmVyYXRvci50aXRsZSwgdG9rZW5zKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBGb3VuZCB2YXJpYWJsZSBpbiBnZW5lcmF0b3JzICR7dmFyaWFibGVOYW1lfSAtICR7bm9kZUtleX1gKTtcblxuICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRvIHRoZSBuZXh0IHRva2VuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIFNFVFRJTkcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgLy8gR2V0IHNldHRpbmcgaW5kZXhcbiAgICAgICAgICAgIGxldCBzZXR0aW5nS2V5OiBudW1iZXIgPSBpc1NldHRpbmcobm9kZSwgdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgLy8gSWYgc2V0dGluZyBpbmRleCBpcyBub3QgaW5maW5pdHkgLSBpdCdzIGEgbWF0Y2ghXG4gICAgICAgICAgICBpZihzZXR0aW5nS2V5ICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBGb3VuZCB2YXJpYWJsZSBpbiBzZXR0aW5ncyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG4gICAgICAgICAgICAgICAgbmV3RXhlY3V0YWJsZSArPSBgdmFyICR7bm9kZUtleX0ke3ZhcmlhYmxlTmFtZX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtub2RlLnNldHRpbmdzW3NldHRpbmdLZXldLnZhbHVlfSB9O1xcbmA7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIE5PVCBBTlkgT0YgVEhSRUUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgLy8gSWYgbm90IG9uZSBvZiBwcmV2aW91cyB0aHJlZSwgYWxlcnQgdXNlci5cbiAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gYGFsZXJ0KFwiQ291bGRuJ3QgZmluZCBnZW5lcmF0b3IgdmFyaWFibGUgaW4gdGhlIGlucHV0cywgZ2VuZXJhdG9ycyBvciBzZXR0aW5ncyEgJHtub2RlS2V5fSAtICR7dmFyTmFtZX1cIik7XFxuYDtcbiAgICAgICAgfSBlbHNlIGlmKGNvZGVbc10udHlwZSA9PT0gXCJtYXRoXCIgfHwgY29kZVtzXS50eXBlID09PSBcInNjb3BlXCIpIHtcbiAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gc2F2ZVZhcmlhYmxlcyhub2RlS2V5LCBub2RlLCBjb2RlW3NdLmNvZGUsIGFsbENvbm5lY3Rpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdFeGVjdXRhYmxlO1xufVxuXG5mdW5jdGlvbiBzYXZlSW5wdXRWYXJpYWJsZShub2RlOiBTaWduYWxOb2RlLCBhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10sIG5vZGVLZXk6IHN0cmluZywgc2V0dGluZ0tleTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgbmV3RXhlY3V0YWJsZTogc3RyaW5nO1xuICAgIGNvbnN0IGNvbm5lY3RvckVuZCA9IHtcbiAgICAgICAgbm9kZUlkOiBub2RlS2V5LFxuICAgICAgICBzZXR0aW5nSWQ6IHNldHRpbmdLZXlcbiAgICB9XG4gICAgXG4gICAgbGV0IHtvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWR9ID0gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoYWxsQ29ubmVjdGlvbnMsIG51bGwsIGNvbm5lY3RvckVuZCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhgVHJhY2luZyBiYWNrIHRoZSBpbnB1dDogJHtub2RlS2V5fToke3NldHRpbmdLZXl9IC0+ICR7b3RoZXJOb2RlSWR9OiR7b3RoZXJTZXR0aW5nSWR9YCk7XG4gICAgXG4gICAgLy8gSWYgbm9kZSBpcyBjb25uZWN0ZWRcbiAgICBpZihvdGhlck5vZGVJZCAmJiBvdGhlclNldHRpbmdJZCkge1xuICAgICAgICAvLyBTYXZlIFxuICAgICAgICBuZXdFeGVjdXRhYmxlID0gYHZhciAke25vZGVLZXl9JHtzZXR0aW5nS2V5fSA9IGZ1bmN0aW9uICh0aW1lKSB7IHJldHVybiAke290aGVyTm9kZUlkfSR7b3RoZXJTZXR0aW5nSWR9KHRpbWUpfTtcXG5gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNhdmUgZGVmYXVsdCB2YWx1ZVxuICAgICAgICBuZXdFeGVjdXRhYmxlID0gYHZhciAke25vZGVLZXl9JHtzZXR0aW5nS2V5fSA9IGZ1bmN0aW9uICh0aW1lKSB7IHJldHVybiAke25vZGUuaW5wdXRzW2luZGV4XS5kZWZhdWx0fX07XFxuYFxuICAgIH1cblxuICAgIHJldHVybiBuZXdFeGVjdXRhYmxlO1xufVxuXG5mdW5jdGlvbiBpc0lucHV0IChub2RlOiBTaWduYWxOb2RlLCBzZXR0aW5nS2V5OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIC8vIENoZWNrIGlmIHZhcmlhYmxlIGlzIGluIGlucHV0c1xuICAgIGlmKG5vZGUuaW5wdXRzKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBub2RlLmlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gSWYgdmFyaWFibGUgaXMgdGhlIGlucHV0LCByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgaWYobm9kZS5pbnB1dHNbaV0udGl0bGUgPT09IHNldHRpbmdLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cblxuZnVuY3Rpb24gaXNHZW5lcmF0b3Iobm9kZTogU2lnbmFsTm9kZSwgc2V0dGluZ0tleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBTY2FuIGdlbmVyYXRvcnNcbiAgICBpZihub2RlLmdlbmVyYXRvcnMpIHtcbiAgICAgICAgaWYobm9kZS5nZW5lcmF0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvcihsZXQgZyA9IDA7IGcgPCBub2RlLmdlbmVyYXRvcnMubGVuZ3RoOyBnKyspIHtcbiAgICAgICAgICAgICAgICBpZihub2RlLmdlbmVyYXRvcnNbZ10udGl0bGUgPT09IHNldHRpbmdLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEluZmluaXR5O1xufVxuXG5mdW5jdGlvbiBpc1NldHRpbmcobm9kZTogU2lnbmFsTm9kZSwgc2V0dGluZ0tleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBTY2FuIGdlbmVyYXRvcnNcbiAgICBpZihub2RlLnNldHRpbmdzKSB7XG4gICAgICAgIGZvcihsZXQgcyA9IDA7IHMgPCBub2RlLnNldHRpbmdzLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW5maW5pdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3VjaElucHV0cyhhbGxOb2RlczogTm9kZUNvbGxlY3Rpb24pOiB7dW5jYWxjdWxhdGVkTm9kZXM6IE5vZGVDb2xsZWN0aW9uLCB0b3VjaE5vZGVzOiBOb2RlQ29sbGVjdGlvbn0ge1xuICAgIGxldCBuZXdDb2xsZWN0aW9uOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCBuZXdUb3VjaENvbGxlY3Rpb246IE5vZGVDb2xsZWN0aW9uID0ge307XG5cbiAgICBmb3IobGV0IG4gaW4gYWxsTm9kZXMpIHtcbiAgICAgICAgaWYobi5zdWJzdHIoMCwgMTApID09PSBcInRvdWNoSW5wdXRcIikge1xuICAgICAgICAgICAgbmV3VG91Y2hDb2xsZWN0aW9uW25dID0gYWxsTm9kZXNbbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdDb2xsZWN0aW9uW25dID0gYWxsTm9kZXNbbl07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1bmNhbGN1bGF0ZWROb2RlczogbmV3Q29sbGVjdGlvbixcbiAgICAgICAgdG91Y2hOb2RlczogbmV3VG91Y2hDb2xsZWN0aW9uXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpbWUoc3RhcnQ6IG51bWJlciwgc3RvcDogbnVtYmVyLCBzdGVwOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYGxldCB0ID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCByID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9ICR7c3RhcnR9OyBpIDwgJHtzdG9wfTsgaSs9JHtzdGVwfSkge1xuICAgICAgICAgICAgci5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgIH0pKCk7YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzKG5vZGVzOiBOb2RlQ29sbGVjdGlvbik6IHN0cmluZyB7XG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBpIGluIG5vZGVzKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblxuICAgICAgICBsZXQgc2Vuc2l0aXZpdHk6IE5vZGVTZXR0aW5nc1NoYXBlO1xuICAgICAgICBsZXQgYXR0YWNoZWRTY29wZTogTm9kZVNldHRpbmdzU2hhcGU7XG5cbiAgICAgICAgLy8gU2VwYXJhdGUgc2V0dGluZ3NcbiAgICAgICAgZm9yKGxldCBzIGluIG5vZGUuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmKG5vZGUuc2V0dGluZ3Nbc10udGl0bGUgPT09IFwiU2Vuc2l0aXZpdHlcIikge1xuICAgICAgICAgICAgICAgIHNlbnNpdGl2aXR5ID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIlNjb3BlXCIpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hlZFNjb3BlID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRvdWNoIG5vZGUgaXMgbm90IGNvcnJlY3RseSBmb3JtYXR0ZWQuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBvZmZzZXRTY3JpcHQgPSBgaWYoIWRpZEF0dGFjaCR7aX0pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHthdHRhY2hlZFNjb3BlLnZhbHVlfVwiKS5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFhEYXRhICs9IGUubW92ZW1lbnRYKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuICAgICAgICAgICAgICAgICAgICAke2l9T2Zmc2V0WURhdGEgKz0gZS5tb3ZlbWVudFkqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke2F0dGFjaGVkU2NvcGUudmFsdWV9XCIpLm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudFggPSB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25YIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50WSA9IHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgLSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFhEYXRhICs9IG1vdmVtZW50WCoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFlEYXRhICs9IG1vdmVtZW50WSoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRpZEF0dGFjaCR7aX1PZmZzZXRYID0gdHJ1ZTtcbiAgICAgICAgICAgIGRpZEF0dGFjaCR7aX1PZmZzZXRZID0gdHJ1ZTtcbiAgICAgICAgfVxcbmA7XG5cbiAgICAgICAgZm9yKGxldCBvIGluIG5vZGUub3V0cHV0cykge1xuICAgICAgICAgICAgZSArPSBgdmFyICR7aX0ke25vZGUub3V0cHV0c1tvXS50aXRsZX1EYXRhID0gMTtcXG5gO1xuICAgICAgICAgICAgZSArPSBgdmFyIGRpZEF0dGFjaCR7aX0gPSBmYWxzZTtcXG5gO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUgKz0gYHZhciAke2l9JHtub2RlLm91dHB1dHNbb10udGl0bGV9ID0gZnVuY3Rpb24odGltZSkgeyByZXR1cm4gJHtpfSR7bm9kZS5vdXRwdXRzW29dLnRpdGxlfURhdGEgfTtcXG5gXG4gICAgICAgIH1cblxuICAgICAgICBlICs9IG9mZnNldFNjcmlwdDtcbiAgICB9XG5cbiAgICByZXR1cm4gZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVBbmltYXRpb24obm9kZTogU2lnbmFsTm9kZSwgbm9kZUtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCB0eXBlID0gbm9kZS5zZXR0aW5nc1syXS52YWx1ZTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwib3NjaWxsYXRvclwiOiB7XG4gICAgICAgICAgICByZXR1cm4gYHZhciAke25vZGVLZXl9JHtub2RlLm91dHB1dHNbMF0udGl0bGV9ID0gZnVuY3Rpb24oKSB7IHJldHVybiBNYXRoLnNpbihNYXRoLlBJKjIqYW5pbWF0aW9uVGltZSoke25vZGUuc2V0dGluZ3NbMF0udmFsdWV9KSArICR7bm9kZS5zZXR0aW5nc1sxXS52YWx1ZX19O2A7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gYHZhciAke25vZGVLZXl9JHtub2RlLm91dHB1dHNbMF0udGl0bGV9ID0gZnVuY3Rpb24oKSB7IHJldHVybiBhbmltYXRpb25UaW1lKigke25vZGUuc2V0dGluZ3NbMF0udmFsdWV9KSArICR7bm9kZS5zZXR0aW5nc1sxXS52YWx1ZX19O2A7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QW5pbWF0aW9uVGltZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgaWYodHlwZW9mIGRlbHRhVGltZSA9PSAndW5kZWZpbmVkJykgd2luZG93LmRlbHRhVGltZSA9IDYwO1xuICAgIHZhciBhbmltYXRpb25UaW1lID0gMDtcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFuaW1hdGlvblRpbWUgKz0gZGVsdGFUaW1lLzEwMDA7XG4gICAgICAgIHVwZGF0ZSgpO1xuICAgIH0sIGRlbHRhVGltZSk7YFxufSIsIi8vIEFzIGEgcmVtaW5kZXI6XG4vLyBPbmUgaXRlbSBpbiBhbiBhcnJheSBvZiB0b2tlbnMgY2FuIG9ubHkgYmUgYW4gb2JqZWN0IGFuZCBvbmx5IGhhdmUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4vLyAqIHR5cGUgICAgICAgICAgIC0gZm9yIGV2ZXJ5IHRva2VuXG4vLyAqIHZhbHVlICAgICAgICAgIC0gZm9yIGV2ZXJ5IHRva2VuXG4vLyAqIGNvZGUgIC0gZm9yIHNjb3BlcyAobWF0aC9yZWd1bGFyKVxuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5Ub0pzIChub2RlSWQsIHZhcmlhYmxlTmFtZSwganNvblRva2Vucykge1xuICAgIGxldCBleGVjdXRhYmxlU3RyaW5nID0gYHZhciAke25vZGVJZH0ke3ZhcmlhYmxlTmFtZX0gPSBmdW5jdGlvbih0aW1lKSB7IHJldHVybiBgO1xuICAgIFxuICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZShbLi4uanNvblRva2Vuc10pXG5cbiAgICByZXR1cm4gZXhlY3V0YWJsZVN0cmluZyArIFwifTtcXG5cIjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQ29kZShqc29uKSB7XG4gICAgbGV0IGV4ZWN1dGFibGVTdHJpbmcgPSBcIlwiO1xuXG4gICAgaWYoanNvbiA9PSBudWxsKSByZXR1cm4gXCJcIjtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBqc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIFZhcmlhYmxlcyBmb3IgY29udmVuaWVuY2VcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqc29uW2ldO1xuICAgICAgICBjb25zdCB0eXBlID0gdG9rZW4udHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0b2tlbi52YWx1ZTtcblxuICAgICAgICAvLyBBY3R1YWwgbG9naWNcbiAgICAgICAgaWYodHlwZSAhPSBcInNjb3BlXCIgJiYgdHlwZSAhPSBcIm1hdGhcIikge1xuICAgICAgICAgICAgLy8gT25lIG9mIHRoZSBiYXNpYyB0eXBlc1xuXG4gICAgICAgICAgICBpZih2YWx1ZSA9PT0gJ1BJJykge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLlBJXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidmFyXCIgJiYgdmFsdWUgIT09IFwidGltZVwiKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBgJHt2YWx1ZX0odGltZSlgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibWF0aFwiKSB7XG4gICAgICAgICAgICAvLyBNYXRoIGZ1bmN0aW9uXG5cbiAgICAgICAgICAgIGlmKHZhbHVlID09PSBcInNpblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBzdXBwb3J0ZWQgZnVuY3Rpb25zLCByZWN1cnNldmx5IGdlbmVyYXRlIHN0cmluZyBmcm9tIHRoZSBjb2RlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLnNpbihcIjtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PT0gXCJjb3NcIikge1xuICAgICAgICAgICAgICAgIC8vIElmIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZ1bmN0aW9ucywgcmVjdXJzZXZseSBnZW5lcmF0ZSBzdHJpbmcgZnJvbSB0aGUgY29kZSBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC5jb3MoXCI7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIpXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT09IFwidGFuXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmdW5jdGlvbnMsIHJlY3Vyc2V2bHkgZ2VuZXJhdGUgc3RyaW5nIGZyb20gdGhlIGNvZGUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGgudGFuKFwiO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKTtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09PSBcInNxd1wiKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguc3F3KFwiO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKTtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09PSBcImV4cFwiKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguZXhwKFwiO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKTtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBub3Qgc3VwcG9ydGVkIGZ1bmN0aW9uLCB0aHJvdyBlcnJvciB0byB0aGUgY29uc29sZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbnN1cHBvcnRlZCBtYXRoIGZ1bmN0aW9uICEhIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlZ3VsYXIgc2NvcGVcblxuICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIihcIiArIGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSkgKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBleGVjdXRhYmxlU3RyaW5nO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHN0eWxlcyA9IChzZXR0aW5nc0NvdW50LCBzY29wZUNvdW50KSA9PiB7XG4gICAgLy8gY29uc3QgaXNPbmx5U2NvcGVzID0gKHNldHRpbmdzQ291bnQgPT09IDAgJiYgc2NvcGVDb3VudCA+IDApO1xuICAgIC8vIGNvbnN0IGlzT25seVNldHRpbmdzID0gKHNldHRpbmdzQ291bnQgPiAwICYmIHNjb3BlQ291bnQgPT09IDApO1xuICAgIGNvbnN0IGlzU2V0dGluZ3NBbmRTY29wZXMgPSAoc2V0dGluZ3NDb3VudCA+IDAgJiYgc2NvcGVDb3VudCA+IDApO1xuICAgIFxuICAgIGNvbnN0IGlzRGl2aWRhYmxlQnlUd28gPSBzY29wZUNvdW50JTIgPT0gMDtcblxuICAgIHJldHVybiBgI3NpZ25hbHMtZW1iZWRkaW5nLW1haW4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IGF1dG87XG4gICAgfVxuXG4gICAgI3NpZ25hbHMtZW1iZWRkaW5nLWNvbnRyb2xzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtZW1iZWRkaW5nLWNvbnRyb2wtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcbiAgICB9XG5cbiAgICAuc2lnbmFscy1lbWJlZGRpbmctY29udHJvbC1idXR0b246aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xuICAgIH1cbiAgICBcbiAgICAjc2lnbmFscy1lbWJlZGRpbmctY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAke2lzU2V0dGluZ3NBbmRTY29wZXMgP1xuICAgICAgICAgICAgYGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGNhbGMoMTAwJSAtIDMwMHB4KTtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtgIFxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuc2lnbmFscy1jYW52YXMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNhbnZhcy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjc2lnbmFscy12aWV3cyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgXG4gICAgICAgICR7IWlzRGl2aWRhYmxlQnlUd28gfHwgc2NvcGVDb3VudCA8IDMgPyBgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoJHtzY29wZUNvdW50fSwgJHtwYXJzZUZsb2F0KDEwMC9zY29wZUNvdW50KS50b0ZpeGVkKDIpfSUpO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87YFxuICAgICAgICA6IGBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgke3Njb3BlQ291bnQvMn0sIDFmcik7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtgfVxuICAgICAgICAke2lzU2V0dGluZ3NBbmRTY29wZXMgPyBgZ3JpZC1jb2x1bW46IDIgLyAzO2AgOiAnJ31cbiAgICB9XG5cbiAgICAke2lzU2V0dGluZ3NBbmRTY29wZXMgPyBgI3NpZ25hbHMtc2V0dGluZ3Mge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuXG4gICAgI3NpZ25hbHMtc2V0dGluZ3MtbGlzdCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIC5zaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDRmcjtcbiAgICAgICAgZ3JpZC1nYXA6IDVweDtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1zbGlkZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA0ZnIgMWZyO1xuICAgIH1cblxuICAgIC5zaWduYWxzLXNldHRpbmdzLXNsaWRlciBkaXYge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtIGg2IHtcbiAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgIC5zaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbSBpbnB1dCB7XG5cbiAgICB9XG4gICAgXG4gICAgLnNpZ25hbHMtc2V0dGluZ3MtbGlzdC1sYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1gOicnfVxuYH07XG5cbmV4cG9ydCBmdW5jdGlvbiBqc3hEb20gKG5vZGVzKSB7XG4gICAgbGV0IGNhbnZhc05vZGVzID0gW107XG5cbiAgICAvLyBHZXQgYWxsIGtpbmRzIG9mIG91dHB1dCBub2Rlc1xuICAgIGZvcihsZXQga2V5IGluIG5vZGVzKSB7XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGVzW2tleV07XG5cbiAgICAgICAgaWYoU3RyaW5nKGtleSkuc3Vic3RyKDAsIDUpID09PSBcInNjb3BlXCIgfHwgU3RyaW5nKGtleSkuc3Vic3RyKDAsIDMpID09PSBcImZmdFwiKSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5pZCA9IGtleTtcbiAgICAgICAgICAgIGNhbnZhc05vZGVzLnB1c2goY3VycmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHNldHRpbmdzTm9kZXMgPSBbXTtcbiAgICBsZXQgY2F0ZWdvcmllcyA9IFtdO1xuXG4gICAgXG4gICAgZm9yKGxldCBrZXkgaW4gbm9kZXMpIHtcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZXNba2V5XTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGlzVGhpcmRMZXR0ZXJVcHBlckNhc2UgPSBTdHJpbmcoa2V5KS5zdWJzdHIoMiwgMSkudG9VcHBlckNhc2UoKSA9PT0gU3RyaW5nKGtleSkuc3Vic3RyKDIsIDEpO1xuICAgICAgICBjb25zdCBpc1VJID0gU3RyaW5nKGtleSkuc3Vic3RyKDAsIDIpID09PSBcInVpXCI7XG4gICAgICAgIGNvbnN0IGlzQWN0dWFsVUkgPSBpc1VJICYmIGlzVGhpcmRMZXR0ZXJVcHBlckNhc2U7XG4gICAgICAgIFxuICAgICAgICBpZihpc0FjdHVhbFVJKSB7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlTYXZlZEFscmVhZHkgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY3VycmVudENhdGVnb3J5ID0gY3VycmVudE5vZGUuc2V0dGluZ3NbMF0udmFsdWU7XG5cbiAgICAgICAgICAgIGZvcihsZXQgYyBpbiBjYXRlZ29yaWVzKSB7XG4gICAgICAgICAgICAgICAgaWYoY2F0ZWdvcmllc1tjXSA9PSBjdXJyZW50Q2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlTYXZlZEFscmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFjYXRlZ29yeVNhdmVkQWxyZWFkeSkge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjdXJyZW50Q2F0ZWdvcnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5pZCA9IGtleTtcbiAgICAgICAgICAgIHNldHRpbmdzTm9kZXMucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2V0dGluZ3NOb2Rlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgY29uc3QgY2F0MSA9IGEuc2V0dGluZ3NbMF0udmFsdWU7XG4gICAgICAgIGNvbnN0IGNhdDIgPSBiLnNldHRpbmdzWzBdLnZhbHVlO1xuXG4gICAgICAgIGlmKGNhdDEgPT09IGNhdDIpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyMSA9IHBhcnNlSW50KGEuc2V0dGluZ3NbMl0udmFsdWUpO1xuICAgICAgICAgICAgY29uc3Qgb3JkZXIyID0gcGFyc2VJbnQoYi5zZXR0aW5nc1syXS52YWx1ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBvcmRlcjEgLSBvcmRlcjI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYXRBcnIgPSBbY2F0MSwgY2F0Ml07XG4gICAgICAgICAgICBjYXRBcnIuc29ydCgpO1xuXG4gICAgICAgICAgICBpZihjYXRBcnJbMF0gPT09IGNhdDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTb3J0IGJ5IGNhdGVnb3J5OlxuXG4gICAgY2F0ZWdvcmllcy5zb3J0KCk7XG5cbiAgICBsZXQgbmV3U2V0dGluZ3NOb2RlcyA9IFtdO1xuXG4gICAgZm9yKGxldCBjIGluIGNhdGVnb3JpZXMpIHtcbiAgICAgICAgZm9yKGxldCBzIGluIHNldHRpbmdzTm9kZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gc2V0dGluZ3NOb2Rlc1tzXTtcbiAgICAgICAgICAgIGlmKGN1cnJlbnROb2RlLnNldHRpbmdzWzBdLnZhbHVlID09PSBjYXRlZ29yaWVzW2NdKSB7XG4gICAgICAgICAgICAgICAgbmV3U2V0dGluZ3NOb2Rlcy5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgc2V0dGluZ3NOb2Rlc1tzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIER5bmFtaWMgU3R1ZmZcbiAgICBjb25zdCBjYW52YXNKc3ggPSBjYW52YXNOb2Rlcy5sZW5ndGggPiAwID8gY2FudmFzTm9kZXMubWFwKG5vZGUgPT4ge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXsnY2FudmFzLWNvbnRhaW5lcid9IGtleT17bm9kZS5pZH0+XG4gICAgICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT1cInNpZ25hbHMtY2FudmFzXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake25vZGUuaWR9YH1cbiAgICAgICAgICAgID48L2NhbnZhcz5cbiAgICAgICAgPC9kaXY+KVxuICAgIH0pIDogbnVsbDtcblxuICAgIGxldCBsYXN0Q2F0ZWdvcnkgPSBcIlwiO1xuICAgIGNvbnN0IHNldHRpbmdzID0gbmV3U2V0dGluZ3NOb2Rlcy5sZW5ndGggPiAwID8gbmV3U2V0dGluZ3NOb2Rlcy5tYXAobm9kZSA9PiB7XG4gICAgICAgIGxldCBpbnB1dEVsZW1lbnQ7XG4gICAgICAgIGxldCBpc1NsaWRlciA9IGZhbHNlO1xuICAgICAgICBsZXQgc2hvdWxkU2F2ZUNhdGVnb3J5ID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY3VycmVudENhdGVnb3J5ID0gbm9kZS5zZXR0aW5nc1swXS52YWx1ZTtcblxuICAgICAgICBpZihsYXN0Q2F0ZWdvcnkgIT09IGN1cnJlbnRDYXRlZ29yeSkge1xuICAgICAgICAgICAgc2hvdWxkU2F2ZUNhdGVnb3J5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGxhc3RDYXRlZ29yeSA9IGN1cnJlbnRDYXRlZ29yeTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYobm9kZS5pZC5zdWJzdHIoMCwgOCkgPT09IFwidWlOdW1iZXJcIikge1xuICAgICAgICAgICAgLy8gJ3VpTnVtYmVyJyBzZXR0aW5nczpcbiAgICAgICAgICAgIC8vIDAgOiBDYXRlZ29yeSAtIENhdGVnb3J5IHRoYXQgY29udHJvbGxlcnMgYXJlIHNvcnRlZCBieS5cbiAgICAgICAgICAgIC8vIDEgOiBMYWJlbCAgICAtIExhYmVsIG5leHQgdG8gdGhlIGNvbnRyb2xsZXIuXG4gICAgICAgICAgICAvLyAyIDogT3JkZXIgICAgLSBWZXJ0aWNhbCBwb3NpdGlvbiBvZiB0aGUgY29udHJvbGxlciBpbiB0aGUgY2F0ZWdvcnkuXG4gICAgICAgICAgICAvLyAzIDogRGVmYXVsdCAgLSBEZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICAvLyA0IDogTWluICAgICAgLSBNaW5pbXVtIHZhbHVlXG4gICAgICAgICAgICAvLyA1IDogTWF4ICAgICAgLSBNYXhpbXVtIHZhbHVlXG4gICAgICAgICAgICAvLyA2IDogU3RlcCAgICAgLSBTdGVwIG9mIHRoZSB2YWx1ZVxuICAgICAgICAgICAgaW5wdXRFbGVtZW50ID0gKDxpbnB1dCAgdHlwZT17J251bWJlcid9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e25vZGUuaWQrXCJJbnB1dFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtub2RlLnNldHRpbmdzWzNdLnZhbHVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17bm9kZS5zZXR0aW5nc1s0XS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17bm9kZS5zZXR0aW5nc1s1XS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e25vZGUuc2V0dGluZ3NbNl0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX0vPik7XG4gICAgICAgIH0gZWxzZSBpZihub2RlLmlkLnN1YnN0cigwLCA4KSA9PT0gXCJ1aVNsaWRlclwiKSB7XG4gICAgICAgICAgICBpc1NsaWRlciA9IHRydWU7XG4gICAgICAgICAgICAvLyAndWlTbGlkZXInIHNldHRpbmdzOlxuICAgICAgICAgICAgLy8gMCA6IENhdGVnb3J5IC0gQ2F0ZWdvcnkgdGhhdCBjb250cm9sbGVycyBhcmUgc29ydGVkIGJ5LlxuICAgICAgICAgICAgLy8gMSA6IExhYmVsICAgIC0gTGFiZWwgbmV4dCB0byB0aGUgY29udHJvbGxlci5cbiAgICAgICAgICAgIC8vIDIgOiBPcmRlciAgICAtIFZlcnRpY2FsIHBvc2l0aW9uIG9mIHRoZSBjb250cm9sbGVyIGluIHRoZSBjYXRlZ29yeS5cbiAgICAgICAgICAgIC8vIDMgOiBEZWZhdWx0ICAtIERlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIC8vIDQgOiBNaW4gICAgICAtIE1pbmltdW0gdmFsdWVcbiAgICAgICAgICAgIC8vIDUgOiBNYXggICAgICAtIE1heGltdW0gdmFsdWVcbiAgICAgICAgICAgIC8vIDYgOiBTdGVwICAgICAtIFN0ZXAgb2YgdGhlIHZhbHVlXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQgPSAoPGlucHV0ICB0eXBlPXsncmFuZ2UnfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtub2RlLmlkK1wiSW5wdXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bm9kZS5zZXR0aW5nc1szXS52YWx1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e25vZGUuc2V0dGluZ3NbNF0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e25vZGUuc2V0dGluZ3NbNV0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtub2RlLnNldHRpbmdzWzZdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9Lz4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmV0dXJucyBtZXNzYWdlIGlmIHRoZSB0eXBlIGlzIHVuc29wcG9ydGVkXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQgPSA8ZGl2PnsndW5zdXBwb3J0ZWQgdHlwZSd9PC9kaXY+XG4gICAgICAgIH1cblxuICAgICAgICBpZihzaG91bGRTYXZlQ2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17bm9kZS5pZCArIGN1cnJlbnRDYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eydzaWduYWxzLXNldHRpbmdzLWxpc3QtbGFiZWwnfT57Y3VycmVudENhdGVnb3J5fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eydzaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbSAnICsgKGlzU2xpZGVyID8gXCJzaWduYWxzLXNldHRpbmdzLXNsaWRlclwiIDogXCJcIil9IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e25vZGUuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17J3NpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtLWxhYmVsJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e25vZGUuaWQgKyBcIkxhYmVsXCJ9Pntub2RlLnNldHRpbmdzWzFdLnZhbHVlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRFbGVtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAge2lzU2xpZGVyID8gPGRpdiBpZD17bm9kZS5pZCtcIkluZGljYXRvclwifT57bm9kZS5zZXR0aW5nc1szXS52YWx1ZX08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDxsaSBjbGFzc05hbWU9eydzaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbSAnICsgKGlzU2xpZGVyID8gXCJzaWduYWxzLXNldHRpbmdzLXNsaWRlclwiIDogXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17bm9kZS5pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25vZGUuaWR9PlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9eydzaWduYWxzLXNldHRpbmdzLWxpc3QtaXRlbS1sYWJlbCd9IGlkPXtub2RlLmlkICsgXCJMYWJlbFwifT57bm9kZS5zZXR0aW5nc1sxXS52YWx1ZX08L2g2PlxuICAgICAgICAgICAgICAgIHtpbnB1dEVsZW1lbnR9XG4gICAgICAgICAgICAgICAge2lzU2xpZGVyID8gPGRpdiBpZD17bm9kZS5pZCtcIkluZGljYXRvclwifT57bm9kZS5zZXR0aW5nc1szXS52YWx1ZX08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgPC9saT4pO1xuICAgICAgICB9XG4gICAgfSkgOiBudWxsO1xuXG4gICAgLy8gR2VuZXJhdGUgRmluYWwgSlNYXG4gICAgY29uc3QgU2lnbmFsVmlld3MgPSBjYW52YXNKc3ggP1xuICAgICAgICAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2lnbmFscy12aWV3c1wiPlxuICAgICAgICAgICAgICAgIHtjYW52YXNKc3h9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICBjb25zdCBTZXR0aW5nc0pzeCA9IHNldHRpbmdzID9cbiAgICAgICAgKFxuICAgICAgICAgICAgPGRpdiBpZD1cInNpZ25hbHMtc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9eydzaWduYWxzLXNldHRpbmdzLWxpc3QnfT5cbiAgICAgICAgICAgICAgICAgICAge3NldHRpbmdzfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPXtcInNpZ25hbHMtZW1iZWRkaW5nLW1haW5cIn0+XG4gICAgICAgICAgICA8ZGl2IGlkPXtcInNpZ25hbHMtZW1iZWRkaW5nLWNvbnRyb2xzXCJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e1wic2lnbmFscy1iYWNrLWJ1dHRvblwifSBjbGFzc05hbWU9e1wic2lnbmFscy1lbWJlZGRpbmctY29udHJvbC1idXR0b25cIn0+YmFjazwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e1wic2lnbmFscy1yZWNvcmRpbmctc3RhcnRcIn0gY2xhc3NOYW1lPXtcInNpZ25hbHMtZW1iZWRkaW5nLWNvbnRyb2wtYnV0dG9uXCJ9PnN0YXJ0IHJlY29yZGluZzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e1wic2lnbmFscy1yZWNvcmRpbmctc3RvcFwifSBjbGFzc05hbWU9e1wic2lnbmFscy1lbWJlZGRpbmctY29udHJvbC1idXR0b25cIn0+c3RvcCByZWNvcmRpbmc8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD17XCJzaWduYWxzLWVtYmVkZGluZy1jb250YWluZXJcIn0+XG4gICAgICAgICAgICAgICAgPHN0eWxlPntzdHlsZXMobmV3U2V0dGluZ3NOb2Rlcy5sZW5ndGgsIGNhbnZhc05vZGVzLmxlbmd0aCl9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICB7U2V0dGluZ3NKc3h9XG4gICAgICAgICAgICAgICAge1NpZ25hbFZpZXdzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==