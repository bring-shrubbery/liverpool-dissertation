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
/* harmony import */ var _project_presets_modulation_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project_presets/modulation.json */ "./src/server/project_presets/modulation.json");
var _project_presets_modulation_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./project_presets/modulation.json */ "./src/server/project_presets/modulation.json", 1);
/* harmony import */ var _project_presets_fourierSeries_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project_presets/fourierSeries.json */ "./src/server/project_presets/fourierSeries.json");
var _project_presets_fourierSeries_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./project_presets/fourierSeries.json */ "./src/server/project_presets/fourierSeries.json", 1);
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // Base Imports



 // Server Setup


var app = express__WEBPACK_IMPORTED_MODULE_2___default()(); // Middleware

 // Data Parsing

 // import testModel from './testModel.json'
// Library nodes

 // Project presets




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
  projectModels: [_objectSpread({}, _project_presets_modulation_json__WEBPACK_IMPORTED_MODULE_6__), _objectSpread({}, _project_presets_fourierSeries_json__WEBPACK_IMPORTED_MODULE_7__)],
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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}





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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
} // As a reminder:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2dlbmVyYXRvclRva2VuaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVuZGVyZXIvc2NvcGVGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3Rva2VuVG9Kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3ZpZXdlckRvbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiZGF0ZU5vdyIsIlN0cmluZyIsIkRhdGUiLCJkYXRhYmFzZSIsInByb2plY3RzSW5mbyIsInByb2plY3RJZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvd25lciIsInByb2plY3RNb2RlbHMiLCJ1c2VycyIsImFkbWluIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm5ld1Byb2plY3QiLCJuZXdJZCIsInBhcnNlSW50Iiwic2F2ZVByb2plY3QiLCJuZXdQcm9qZWN0VmVyc2lvbiIsImFsbENvbm5lY3Rpb25zIiwianNvbiIsImFsbE5vZGVzIiwiY29tcG9zZXJDb29yZGluYXRlcyIsImlzQ3JlYXRpbmdDb25uZWN0aW9uIiwicHJvamVjdE1vZGVsVGVtcGxhdGUiLCJmb2N1c2VkIiwiZ3JpZFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsIngiLCJ5Iiwiem9vbUxldmVsIiwiX19kaXJuYW1lIiwicmVxIiwiY29uc29sZSIsInJlcyIsImZzIiwicGF0aCIsImRhdGEiLCJpIiwicHJvamVjdCIsInBpZCIsInByb2plY3REYXRhIiwiSlNPTiIsInJlbmRlcmVkU3RyaW5nIiwicmVuZGVyU2lnbmFscyIsInByb2plY3RzQXJyYXkiLCJib2R5UGFyc2VyIiwicHJvamVjdEpzb24iLCJwb3J0IiwicHJvY2VzcyIsInJlcXVlc3RKc29uIiwianN4IiwianN4RG9tIiwianN4U3RyaW5nIiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJzY3JpcHRBcnJheSIsInNjcmlwdEdlbmVyYXRvciIsImNvbXBvc2VkU2NyaXB0U3RyaW5nIiwicyIsInNjcmlwdHMiLCJzY3JpcHRlZEh0bWwiLCJyZW5kZXJIdG1sIiwiZyIsImZvdW5kTGVmdEJvcmRlciIsImZvdW5kUmlnaHRCb3JkZXIiLCJqdXN0SGl0T3BlbmluZ0JyYWNrZXQiLCJqdXN0SGl0Q2xvc2luZ0JyYWNrZXQiLCJsZWZ0IiwicmlnaHQiLCJvbmUiLCJ0d28iLCJ0aHJlZSIsImV4ZWN1dGFibGVTdHJpbmciLCJjYWxjdWxhdGVDb2RlIiwidG9rZW4iLCJ0eXBlIiwidmFsdWUiLCJzdHlsZXMiLCJpc1NldHRpbmdzQW5kU2NvcGVzIiwic2V0dGluZ3NDb3VudCIsInNjb3BlQ291bnQiLCJpc0RpdmlkYWJsZUJ5VHdvIiwicGFyc2VGbG9hdCIsImNhbnZhc05vZGVzIiwiY3VycmVudE5vZGUiLCJub2RlcyIsInNldHRpbmdzTm9kZXMiLCJjYXRlZ29yaWVzIiwiaXNUaGlyZExldHRlclVwcGVyQ2FzZSIsImlzVUkiLCJpc0FjdHVhbFVJIiwiY2F0ZWdvcnlTYXZlZEFscmVhZHkiLCJjdXJyZW50Q2F0ZWdvcnkiLCJjYXQxIiwiYSIsImNhdDIiLCJiIiwib3JkZXIxIiwib3JkZXIyIiwiY2F0QXJyIiwibmV3U2V0dGluZ3NOb2RlcyIsImNhbnZhc0pzeCIsIm5vZGUiLCJpZCIsImxhc3RDYXRlZ29yeSIsInNldHRpbmdzIiwiaXNTbGlkZXIiLCJzaG91bGRTYXZlQ2F0ZWdvcnkiLCJpbnB1dEVsZW1lbnQiLCJTaWduYWxWaWV3cyIsIlNldHRpbmdzSnN4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ2xGQTs7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBLElBQU1BLEdBQUcsR0FBR0MsOENBQVosRyxDQUVBOztDQUdBOztDQUlBO0FBRUE7O0NBR0E7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEs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LENBQXBHO0FBQXlHLFdBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUFuSCxTQUNKO0FBQUksaUJBQVMsRUFBYjtBQUFtRCxVQUFFLEVBQUVELElBQUksQ0FBSkEsS0FBVTtBQUFqRSxTQUEyRUEsSUFBSSxDQUFKQSxZQUR2RSxLQUNKLENBREksZ0JBR0hJLFFBQVEsR0FBRztBQUFLLFVBQUUsRUFBRUosSUFBSSxDQUFKQSxLQUFRO0FBQWpCLFNBQStCQSxJQUFJLENBQUpBLFlBQWxDLEtBQUcsQ0FBSCxHQUhiLElBQVEsQ0FBUjtBQUtIO0FBckVZLEdBQThCLENBQTlCLEdBNUZVLElBNEYzQixDQTVGMkIsQ0FvSzNCOztBQUNBLE1BQU1PLFdBQVcsR0FBR1IsU0FBUyxHQUVyQjtBQUFLLE1BQUUsRUFBQztBQUFSLEtBRnFCLFNBRXJCLENBRnFCLEdBQTdCO0FBT0EsTUFBTVMsV0FBVyxHQUFHTCxRQUFRLEdBRXBCO0FBQUssTUFBRSxFQUFDO0FBQVIsS0FDSTtBQUFJLE1BQUUsRUFBRTtBQUFSLEtBSGdCLFFBR2hCLENBREosQ0FGb0IsR0FBNUI7QUFTQSxTQUNJO0FBQUssTUFBRSxFQUFFO0FBQVQsS0FDSSwwRUFBUTVCLE1BQU0sQ0FBQ3VCLGdCQUFnQixDQUFqQixRQUEwQmpCLFdBQVcsQ0FEdkQsTUFDa0IsQ0FBZCxDQURKLGVBREosV0FDSSxDQURKO0FBT0gsQzs7Ozs7Ozs7Ozs7QUN6U0Qsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsIi8vIEJhc2UgSW1wb3J0c1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcydcblxuLy8gU2VydmVyIFNldHVwXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbi8vIE1pZGRsZXdhcmVcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuXG4vLyBEYXRhIFBhcnNpbmdcbmltcG9ydCB7XG4gICAgcmVuZGVyU2lnbmFsc1xufSBmcm9tICcuL3JlbmRlcmVyJ1xuLy8gaW1wb3J0IHRlc3RNb2RlbCBmcm9tICcuL3Rlc3RNb2RlbC5qc29uJ1xuXG4vLyBMaWJyYXJ5IG5vZGVzXG5pbXBvcnQgbGlicmFyeU5vZGVzIGZyb20gJy4vbGlicmFyeU5vZGVzLmpzb24nXG5cbi8vIFByb2plY3QgcHJlc2V0c1xuaW1wb3J0IG1vZHVsYXRpb24gZnJvbSAnLi9wcm9qZWN0X3ByZXNldHMvbW9kdWxhdGlvbi5qc29uJ1xuaW1wb3J0IGZvdXJpZXJTZXJpZXMgZnJvbSAnLi9wcm9qZWN0X3ByZXNldHMvZm91cmllclNlcmllcy5qc29uJ1xuXG5jb25zdCBkYXRlTm93ID0gKCkgPT4gU3RyaW5nKERhdGUoKS50b1N0cmluZygpKS5zdWJzdHIoMCwgMjQpICsgXCIgfCBcIjtcblxubGV0IGRhdGFiYXNlID0ge1xuICAgIHByb2plY3RzSW5mbzogW3tcbiAgICAgICAgcHJvamVjdElkOiBcIjFcIixcbiAgICAgICAgdGl0bGU6IFwiQU0vRk0gTW9kdWxhdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG93cyBvbmUgc2lnbmFsIG1vZHVsYXRlZCBvdmVyIG90aGVyIChjYXJyaWVyKSBzaWduYWwgdXNpbmcgQU0gYW5kIEZNIG1vZHVsYXRpb24uXCIsXG4gICAgICAgIG93bmVyOiBcImFkbWluXCJcbiAgICB9LCB7XG4gICAgICAgIHByb2plY3RJZDogXCIyXCIsXG4gICAgICAgIHRpdGxlOiBcIkZvdXJpZXIgU2VyaWVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkF0dGVtcHQgYXQgY3JlYXRpbmcgZm91cmllciBzZXJpZXMgdXNpbmcgdGhpcyB0b29sLlwiLFxuICAgICAgICBvd25lcjogXCJhZG1pblwiXG4gICAgfV0sXG4gICAgcHJvamVjdE1vZGVsczogW3tcbiAgICAgICAgICAgIC4uLm1vZHVsYXRpb25cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLi4uZm91cmllclNlcmllc1xuICAgICAgICB9XG4gICAgXSxcbiAgICB1c2Vyczoge1xuICAgICAgICBhZG1pbjoge1xuICAgICAgICAgICAgdXNlcm5hbWU6IFwiYWRtaW5cIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcImFkbWluXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmV3UHJvamVjdDogZnVuY3Rpb24gKHVzZXJuYW1lLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgLy8gRmluZCBuZXcgaWRcbiAgICAgICAgbGV0IG5ld0lkID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMucHJvamVjdHNJbmZvKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5wcm9qZWN0c0luZm9baV0ucHJvamVjdElkKSA+IG5ld0lkKSBuZXdJZCA9IHRoaXMucHJvamVjdHNJbmZvW2ldLnByb2plY3RJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0lkKys7XG5cbiAgICAgICAgLy8gQWRkIG5ldyBwcm9qZWN5IGluZm9cbiAgICAgICAgdGhpcy5wcm9qZWN0c0luZm8ucHVzaCh7XG4gICAgICAgICAgICBwcm9qZWN0SWQ6IG5ld0lkLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3duZXI6IHVzZXJuYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvamVjdE1vZGVscy5wdXNoKHtcbiAgICAgICAgICAgIC4uLnByb2plY3RNb2RlbFRlbXBsYXRlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdJZDtcbiAgICB9LFxuICAgIHNhdmVQcm9qZWN0OiBmdW5jdGlvbiAocHJvamVjdElkLCBqc29uKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RWZXJzaW9uID0ge1xuICAgICAgICAgICAgYWxsQ29ubmVjdGlvbnM6IGpzb24uYWxsQ29ubmVjdGlvbnMsXG4gICAgICAgICAgICBhbGxOb2RlczoganNvbi5hbGxOb2RlcyxcbiAgICAgICAgICAgIGNvbXBvc2VyQ29vcmRpbmF0ZXM6IGpzb24uY29tcG9zZXJDb29yZGluYXRlcyxcbiAgICAgICAgICAgIGlzQ3JlYXRpbmdDb25uZWN0aW9uOiBqc29uLmNvbXBvc2VyQ29vcmRpbmF0ZXNcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSA9IG5ld1Byb2plY3RWZXJzaW9uO1xuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdE1vZGVsVGVtcGxhdGUgPSB7XG4gICAgYWxsQ29ubmVjdGlvbnM6IFtdLFxuICAgIGFsbE5vZGVzOiB7fSxcbiAgICBjb21wb3NlckNvb3JkaW5hdGVzOiB7XG4gICAgICAgIGZvY3VzZWQ6IHRydWUsXG4gICAgICAgIGdyaWRTaXplOiA1MCxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgem9vbUxldmVsOiAxXG4gICAgfSxcbiAgICBpc0NyZWF0aW5nQ29ubmVjdGlvbjogZmFsc2Vcbn1cblxuLy8gU3RhdGljIGZpbGVzXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvcHVibGljL3N0YXRpYycpKVxuXG4vLyAtLS0gUk9VVEVTIC0tLVxuYXBwLmdldCgnL2VkaXRvci86dXNlcm5hbWUvOmlkJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gcmVxLnBhcmFtcy5pZDtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG5cbiAgICBjb25zb2xlLmxvZyhgJHtkYXRlTm93KCl9R0VUIC9lZGl0b3IvJHt1c2VybmFtZX0vJHtwcm9qZWN0SWR9YCk7XG5cbiAgICBpZiAoIWRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkgcmVzLnN0YXR1cyg0MjApLnNlbmQoXCJVc2VyIHdpdGggdXNlcm5hbWUgXCIgKyB1c2VybmFtZSArIFwiIGRvZXNuJ3QgZXhpc3RcIik7XG5cbiAgICBmcy5yZWFkRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wdWJsaWMvZWRpdG9yLmh0bWwnKSwgJ3V0ZjgnLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdBbiBlcnJvciBvY2N1cnJlZCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGl0bGVcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgIFwiPHRpdGxlPjwvdGl0bGU+XCIsXG4gICAgICAgICAgICBgPHRpdGxlPiR7cHJvamVjdElkfTwvdGl0bGU+YFxuICAgICAgICApXG5cbiAgICAgICAgbGV0IHByb2plY3REYXRhO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YWJhc2UucHJvamVjdHNJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZGF0YWJhc2UucHJvamVjdHNJbmZvW2ldO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdC5vd25lciA9PSB1c2VybmFtZSAmJiBwcm9qZWN0LnByb2plY3RJZCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGlkID0gcGFyc2VJbnQocHJvamVjdElkKSAtIDE7XG4gICAgICAgICAgICAgICAgcHJvamVjdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGFiYXNlLnByb2plY3RNb2RlbHNbcGlkXSxcbiAgICAgICAgICAgICAgICAgICAgcGlkOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiB1c2VybmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBkYXRhXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICAnPHNjcmlwdCBpZD1cImVkaXRvci1kYXRhXCI+PC9zY3JpcHQ+JyxcbiAgICAgICAgICAgIGA8c2NyaXB0IGlkPVwicHJvamVjdC1kYXRhXCI+ZG9jdW1lbnQucHJvamVjdERhdGEgPSAke0pTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKX08L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgaWQ9XCJsaWJyYXJ5LWRhdGFcIj5kb2N1bWVudC5saWJyYXJ5Tm9kZXMgPSAke0pTT04uc3RyaW5naWZ5KGxpYnJhcnlOb2Rlcyl9PC9zY3JpcHQ+YFxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgICAgICByZXMuc2VuZChkYXRhKTtcbiAgICB9KVxufSk7XG5cbi8vIERlZmF1bHQgdGVzdCB2aXN1YWxpc2F0aW9uXG5hcHAuZ2V0KCcvcmVuZGVyLzp1c2VybmFtZS86aWQnLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zb2xlLmxvZyhgJHtkYXRlTm93KCl9R0VUIC9yZW5kZXIvJHt1c2VybmFtZX0vJHtwcm9qZWN0SWR9YCk7XG5cbiAgICBpZiAoIWRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkgcmVzLnN0YXR1cyg0MjApLnNlbmQoXCJVc2VyIHdpdGggdXNlcm5hbWUgXCIgKyB1c2VybmFtZSArIFwiIGRvZXNuJ3QgZXhpc3RcIik7XG5cblxuICAgIGNvbnN0IHJlbmRlcmVkU3RyaW5nID0gcmVuZGVyU2lnbmFscyhkYXRhYmFzZS5wcm9qZWN0TW9kZWxzW3Byb2plY3RJZCAtIDFdKTtcblxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICByZXMuZW5kKHJlbmRlcmVkU3RyaW5nKTtcbn0pXG5cbi8vIEZvciBub3csIGxhbmRpbmcgcGFnZSBpcyB0aGUgcHJvamVjdHMgcGFnZS5cbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGZzLnJlYWRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3B1YmxpYy9wcm9qZWN0cy5odG1sJyksICd1dGY4JywgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnQW4gZXJyb3Igb2NjdXJyZWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRpdGxlXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICBcIjx0aXRsZT48L3RpdGxlPlwiLFxuICAgICAgICAgICAgYDx0aXRsZT5Qcm9qZWN0czwvdGl0bGU+YFxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgICAgICByZXMuZW5kKGRhdGEpO1xuICAgIH0pXG59KVxuXG5hcHAuZ2V0KFwiL3Byb2plY3RzL2luZm8vOnVzZXJuYW1lXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcblxuICAgIGlmIChkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHtcbiAgICAgICAgbGV0IHByb2plY3RzQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhYmFzZS5wcm9qZWN0c0luZm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhYmFzZS5wcm9qZWN0c0luZm9baV0ub3duZXIgPT09IHVzZXJuYW1lKVxuICAgICAgICAgICAgICAgIHByb2plY3RzQXJyYXkucHVzaChkYXRhYmFzZS5wcm9qZWN0c0luZm9baV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MjApLnNlbmQoYE5vIHVzZXIgd2l0aCB1c2VybmFtZSBcIiR7dXNlcm5hbWV9XCIgd2FzIGZvdW5kLmApO1xuICAgIH1cblxufSlcblxuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC5wb3N0KFwiL3NhdmUvOnVzZXJuYW1lLzppZFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICAvLyBTYXZlIGV4aXN0aW5nIHByb2plY3RcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG4gICAgY29uc3QgcHJvamVjdElkID0gcmVxLnBhcmFtcy5pZDtcblxuICAgIGNvbnNvbGUubG9nKGAke2RhdGVOb3coKX1QT1NUIC9zYXZlLyR7dXNlcm5hbWV9LyR7cHJvamVjdElkfWApO1xuXG4gICAgY29uc3QgcHJvamVjdEpzb24gPSByZXEuYm9keTtcblxuICAgIGlmICghZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSByZXMuc3RhdHVzKDQyMCkuc2VuZChgVXNlciB3aXRoIHVzZXJuYW1lICR7dXNlcm5hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblxuICAgIGlmICghZGF0YWJhc2UucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSkgcmVzLnN0YXR1cyg0MjEpLnNlbmQoYFByb2plY3Qgd2l0aCBpZCAke3Byb2plY3RJZH0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgZGF0YWJhc2Uuc2F2ZVByb2plY3QocHJvamVjdElkLCBwcm9qZWN0SnNvbik7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG5cbn0pXG5cblxuYXBwLmdldChcIi9jcmVhdGVQcm9qZWN0Lzp1c2VybmFtZS86dGl0bGUvOmRlc2NyaXB0aW9uXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zdCB0aXRsZSA9IHJlcS5wYXJhbXMudGl0bGU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSByZXEucGFyYW1zLmRlc2NyaXB0aW9uO1xuXG4gICAgaWYgKCFkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHJlcy5zdGF0dXMoNDIwKS5zZW5kKGBVc2VyIHdpdGggdXNlcm5hbWUgJHt1c2VybmFtZX0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgbGV0IHBpZCA9IGRhdGFiYXNlLm5ld1Byb2plY3QodXNlcm5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbik7XG5cbiAgICByZXMuc3RhdHVzKDMwMSkuc2VuZChgL2VkaXRvci8ke3VzZXJuYW1lfS8ke3BpZH1gKTtcbn0pXG5cbi8vIFJ1biBzZXJ2ZXJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlxcbkxpc3RlbmluZyBvbjogaHR0cHM6Ly9sb2NhbGhvc3Q6XCIgKyBwb3J0ICsgXCJcXG5cIik7XG59KTsiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdlbmVyYXRvciBDb2RlIFRva2VuaXNlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR2VuZXJhdG9yIGNvZGUgdG9rZW5pc2VyIGZ1bmN0aW9uIGlzIGFsZ29yaXRobWljYWxseSBzaW1wbGUsIGJ1dCBwcm9kdWNlcyBhIGdvb2QgcmVwcmVzZW50YXRpb25cbi8vIG9mIHRoZSBwcm92aWRlZCBjb2RlIGluIEphdmFTY3JpcHQgT2JqZWN0IGZvcm1hdCAod2hpY2ggY2FuIHRoZW4gYmUgZWFzaWx5IGNvbnZlcnRlZCB0byBKU09OLFxuLy8gc2luY2UgaXQncyBwcmV0dHkgbXVjaCB0aGUgc2FtZSB0aGluZykuXG4vLyBXaGVuIGdvaW5nIHRocm91Z2ggdGhlIGNvZGUsIGl0IGNhbiBkZXRlY3Qgc2V2ZXJhbCB0eXBlcyBvZiBvcGVyYXRvcnMuIFRoZXNlIGFyZTpcbi8vICAgICAqIFZhcmlhYmxlXG4vLyAgICAgKiBDb25zdGFudCBOdW1iZXJcbi8vICAgICAqIE1hdGggT3BlcmF0b3Jcbi8vICAgICAqIE1hdGggRnVuY3Rpb25cbi8vICAgICAqIFJlZ3VsYXIgc2NvcGUgLSBldmVyeXRoaW5nIGluc2lkZSBicmFja2V0cyBcIihcIiBhbmQgXCIpXCIgc2hvdWxkIGJlIGV4ZWN1dGVkIGZpcnN0XG4vLyBUaGUgVmFyaWFibGVzLCBOdW1iZXJzIGFuZCBNYXRoIG9wZXJhdG9ycyBhcmUganVzdCBhZGRlZCBhcyBhbiBvYmplY3Qgd2l0aCBhcHByb3ByaWF0ZSB0eXBlIGFuZFxuLy8gdmFsdWUgdGFrZW4gZnJvbSB0aGUgY29kZS5cbi8vIFRPRE86XG4vLyAqIFNhbmV0aXNlIHZhcmlhYmxlIG5hbWVzICEhISBKYXZhc2NyaXB0IGluamVjdGlvbiBpcyBwb3NzaWJsZSBub3cgdGhyb3VuIHZhcmlhYmxlIG5hbWVzLi4uXG5pbXBvcnQgeyBmaXhTY29wZXMgfSBmcm9tICcuL3Njb3BlRml4ZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplR2VuZXJhdG9yKGdlbiwgbm9kZUlkKSB7XG4gICAgLy8gR2V0IHZhbHVlIG9mIGdlbmVyYXRvciBjb2RlIGFuZCBzdG9yZSBpbiBnXG4gICAgdmFyIGcgPSBTdHJpbmcoZ2VuKTtcbiAgICBnID0gU3RyaW5nKGZpeFNjb3BlcyhnKSk7XG4gICAgLy8gUGFyc2VkIEdlbmVyYXRvciBDb2RlXG4gICAgdmFyIHBnZW4gPSBbXTtcbiAgICAvLyBUaGUgc3RhY2tcbiAgICB2YXIgc3RhY2sgPSBbXTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciB0b3BTdGFja09iamVjdCA9IHN0YWNrLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gOiBudWxsO1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gVkFSSUFCTEUgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZiAoZ1tpXSA9PT0gXCJbXCIpIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdG8gbmV4dCBjaGFyYWN0ZXJcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIC8vIEluaXRpYWxpc2UgZW1wdHkgdmFyaWFibGVcbiAgICAgICAgICAgIHZhciB2YXJpYWJsZSA9IFwiXCI7XG4gICAgICAgICAgICAvLyBTY2FuIHVudGlsIHZhcmlhYmxlIHNjb3BlIGlzIGNsb3NlZFxuICAgICAgICAgICAgd2hpbGUgKGdbaV0gIT09IFwiXVwiKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgKz0gZ1tpXTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFyaWFibGUgPT09IFwidGltZVwiIHx8IHZhcmlhYmxlID09PSBcIlBJXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nID9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gbm9kZUlkICsgdmFyaWFibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFyaWFibGVTbmlwcGV0ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidmFyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhcmlhYmxlLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2godmFyaWFibGVTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBnZW4ucHVzaCh2YXJpYWJsZVNuaXBwZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dF9pXzEgPSBpLCBcImNvbnRpbnVlXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE1BVEggT1BFUkFUT1IgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZiAoZ1tpXSA9PT0gXCIqXCIgfHwgZ1tpXSA9PT0gXCIvXCIgfHwgZ1tpXSA9PT0gXCIrXCIgfHwgZ1tpXSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgIHZhciBvcGVyYXRvclNuaXBwZXQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBnW2ldLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgdmFyIHRvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBzdGFja1t0b3BJbmRleF0uY29kZS5wdXNoKG9wZXJhdG9yU25pcHBldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCB0byByb290IGxldmVsXG4gICAgICAgICAgICAgICAgcGdlbi5wdXNoKG9wZXJhdG9yU25pcHBldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0X2lfMSA9IGksIFwiY29udGludWVcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gTUFUSCBGVU5DVElPTiAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmIChnW2ldID09PSBcInNcIiB8fCBnW2ldID09PSBcImNcIiB8fCBnW2ldID09PSBcInRcIikge1xuICAgICAgICAgICAgLy8gTWF0aGVtYXRpY2FsIGZvcm11bGFzIGFyZSBjb2RlZCBpbiB0aHJlZSBsZXR0ZXJzXG4gICAgICAgICAgICB2YXIgbmV4dFRocmVlID0gU3RyaW5nKGdbaV0gKyBnW2kgKyAxXSArIGdbaSArIDJdKTtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIG5leHQgdGhyZWUgY2hhcnMgYXJlIG9uZSBvZiBcbiAgICAgICAgICAgIGlmIChuZXh0VGhyZWUgPT09IFwic2luXCIgfHwgbmV4dFRocmVlID09PSBcImNvc1wiIHx8IG5leHRUaHJlZSA9PT0gXCJ0YW5cIikge1xuICAgICAgICAgICAgICAgIC8vIEFkanVzdCBpbmRleCB0byBuZXh0IGNoYXJhY3RlclxuICAgICAgICAgICAgICAgIGkgKz0gMztcbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggZm9yIG9wZW5pbmcgYnJhY2tldHNcbiAgICAgICAgICAgICAgICB3aGlsZSAoZ1tpXSAhPT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRocm93IGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046IHNob3VsZCBwcm92aWRlIGJyYWNrZXRzIGZvciBtYXRoIG9wZXJhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInNob3VsZCBwcm92aWRlIGJyYWNrZXRzIGZvciBtYXRoIG9wZXJhdG9yc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBudWxsIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcHJvdmlkZWQgc3BhY2Ugb3IgYSBjaGFyYWN0ZXIgYWZ0ZXIgdGhyZWUgbWF0aCBjaGFyc1xuICAgICAgICAgICAgICAgIC8vIGlmIChnW2krMV0gPT09IFwiKFwiKSBpKys7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGhTbmlwcGV0ID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1hdGhcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5leHRUaHJlZSxcbiAgICAgICAgICAgICAgICAgICAgY29kZTogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFja1RvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5wdXNoKG1hdGhTbmlwcGV0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3BlVG9wSW5kZXggPSBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZVtzY29wZVRvcEluZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCB0byByb290IGxldmVsXG4gICAgICAgICAgICAgICAgICAgIHBnZW4ucHVzaChtYXRoU25pcHBldCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gocGdlbltwZ2VuLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dF9pXzEgPSBpLCBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIFJFR1VMQVIgU0NPUEUgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZiAoZ1tpXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIC8vIEJlZ2luIHJlZ3VsYXIgc2NvcGVcbiAgICAgICAgICAgIHZhciBzY29wZVNuaXBwZXQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzY29wZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvZGU6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgIHZhciBzdGFja1RvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLnB1c2goc2NvcGVTbmlwcGV0KTtcbiAgICAgICAgICAgICAgICB2YXIgc2NvcGVUb3BJbmRleCA9IHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGVbc2NvcGVUb3BJbmRleF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBvdXRfaV8xID0gaSwgXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChzY29wZVNuaXBwZXQpO1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gocGdlbltwZ2VuLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0X2lfMSA9IGksIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gRU5EIEFOWSBTQ09QRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmIChnW2ldID09PSBcIilcIiB8fCBnLmNoYXJBdChpKSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgIC8vIEVuZCBTY29wZVxuICAgICAgICAgICAgaWYgKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRvcCBpdGVtIGZyb20gc3RhY2sgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dF9pXzEgPSBpLCBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBjbG9zZWQgc2NvcGUgdGhhdCB3YXNuJ3Qgb3BlbmVkXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogICAgICAgICAgICB0aHJvdyBFUlJPUlxuICAgICAgICAgICAgICAgIC8vIEVSUk9SIFJFQVNPTjogICAgbm9uIGV4aXN0ZW50IHNjb3BlIHdhcyBjbG9zZWRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibm9uIGV4aXN0ZW50IHNjb3BlIHdhcyBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG51bGwgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gTlVCTUVSIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgdmFyIG1heWJlTnVtYmVyID0gU3RyaW5nKHBhcnNlSW50KGdbaV0pKTtcbiAgICAgICAgaWYgKG1heWJlTnVtYmVyICE9PSBTdHJpbmcoTmFOKSAmJiB0eXBlb2YgcGFyc2VJbnQobWF5YmVOdW1iZXIpID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHZhciBudW1iZXJTdGFydCA9IGk7XG4gICAgICAgICAgICAvLyBJcyBjdXJyZW50IGNoYXIgYSBudW1iZXIgb3IgYSBkb3Q/XG4gICAgICAgICAgICB2YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAobWF5YmVOdW1iZXIgIT09IFN0cmluZyhOYU4pICYmIHR5cGVvZiBwYXJzZUludChtYXliZU51bWJlcikgPT09IFwibnVtYmVyXCIpOyB9O1xuICAgICAgICAgICAgdmFyIGlzRG90ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBTdHJpbmcoZ1tpbmRleF0pID09PSBcIi5cIjsgfTtcbiAgICAgICAgICAgIC8vIFdhcyB0aGVyZSBhIGRvdCBpbiBjdXJyZW50IHNlcXVlbmNlIG9mIG51bWJlcnM/XG4gICAgICAgICAgICB2YXIgd2FzRG90QWxyZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKGlzTnVtYmVyKCkgfHwgaXNEb3QoaSkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBjdXJyZW50IGNoYXIgaXMgYSBkb3RcbiAgICAgICAgICAgICAgICBpZiAoaXNEb3QoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhc0RvdEFscmVhZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IHRoZXJlIHdhcyBhIGRvdCBhbHJlYWR5LCB0aHJvdyBlcnJvciwgc2luY2UgaXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0aHJvdyBFUlJPUlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRVJST1IgUkVBU09OOiBpbnZhbGlkIGZsb2F0aW5nIHBvaW50IG51bWJlciBzeW50YXhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIG5vdCwgc2V0IHdhcyBkb3QgYWxyZWFkeSB0byB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXNEb3RBbHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBNb3ZlIHRvIG5leHQgaW5kZXggYW5kIFxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBtYXliZU51bWJlciA9IFN0cmluZyhwYXJzZUludChnW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0aW5nTnVtYmVyID0gZy5zbGljZShudW1iZXJTdGFydCwgaSk7XG4gICAgICAgICAgICB2YXIgbnVtYmVyU25pcHBldCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHRpbmdOdW1iZXIsXG4gICAgICAgICAgICAgICAgY29kZTogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICB2YXIgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2gobnVtYmVyU25pcHBldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcHVzaCBpdCB0byByb290IGxldmVsXG4gICAgICAgICAgICAgICAgcGdlbi5wdXNoKG51bWJlclNuaXBwZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgcmV0dXJuIG91dF9pXzEgPSBpLCBcImNvbnRpbnVlXCI7XG4gICAgICAgIH1cbiAgICAgICAgb3V0X2lfMSA9IGk7XG4gICAgfTtcbiAgICB2YXIgb3V0X2lfMTtcbiAgICAvLyBDb2RlIHRva2VuaXNlclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEoaSk7XG4gICAgICAgIGkgPSBvdXRfaV8xO1xuICAgICAgICBpZiAodHlwZW9mIHN0YXRlXzEgPT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVfMS52YWx1ZTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIHBhcnNlZCBnZW5lcmF0b3IgYXJyYXlcbiAgICByZXR1cm4gcGdlbjtcbn1cbiIsImltcG9ydCB7IHJlbmRlclRvU3RhdGljTWFya3VwIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5cbmltcG9ydCB7IHNjcmlwdEdlbmVyYXRvciB9IGZyb20gJy4vc2NyaXB0R2VuZXJhdG9yLnRzJztcbmltcG9ydCB7IGpzeERvbSB9IGZyb20gJy4vdmlld2VyRG9tJztcblxuZnVuY3Rpb24gcmVuZGVySHRtbCAocmVxdWVzdEpzb24pIHtcbiAgICAvLyBTZXBhcmF0ZSBub2RlcyBmcm9tIGNvbm5lY3RvcnNcbiAgICBjb25zdCBhbGxOb2RlcyA9IHsuLi5yZXF1ZXN0SnNvbi5hbGxOb2Rlc307XG4gICAgY29uc3QgYWxsQ29ubmVjdGlvbnMgPSBbLi4ucmVxdWVzdEpzb24uYWxsQ29ubmVjdGlvbnNdO1xuXG4gICAgLy8gUmVuZGVyIEhUTUxcbiAgICBjb25zdCBqc3ggPSBqc3hEb20oYWxsTm9kZXMpO1xuICAgIGNvbnN0IGpzeFN0cmluZyA9IHJlbmRlclRvU3RhdGljTWFya3VwKGpzeCk7XG5cbiAgICAvLyBHZW5lcmF0ZSBTY3JpcHRzXG4gICAgLy8gY29uc29sZS50aW1lKFwiU2NyaXB0IFBhcnNlclwiKTtcblxuICAgIGNvbnN0IHNjcmlwdEFycmF5ID0gc2NyaXB0R2VuZXJhdG9yKGFsbE5vZGVzLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgbGV0IGNvbXBvc2VkU2NyaXB0U3RyaW5nID0gXCJcIjtcbiAgICBmb3IobGV0IHMgaW4gc2NyaXB0QXJyYXkpIHtcbiAgICAgICAgaWYocyA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgY29tcG9zZWRTY3JpcHRTdHJpbmcgKz0gc2NyaXB0QXJyYXlbc107XG4gICAgfVxuICAgIFxuICAgIC8vIGNvbnNvbGUudGltZUVuZChcIlNjcmlwdCBQYXJzZXJcIik7XG5cbiAgICBsZXQgc2NyaXB0cyA9IGA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL0NoYXJ0LmpzLzIuNy4zL0NoYXJ0LmJ1bmRsZS5taW4uanNcIj48L3NjcmlwdD5cXG5gO1xuICAgIHNjcmlwdHMgKz0gYDxzY3JpcHQgc3JjPVwiL2ZmdC5qc1wiPjwvc2NyaXB0PlxcbmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD4ke3NjcmlwdEFycmF5WzBdfTwvc2NyaXB0PlxcbmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD4ke2NvbXBvc2VkU2NyaXB0U3RyaW5nfTwvc2NyaXB0PlxcbmA7XG4gICAgXG4gICAgLy8gQ29tYmluZSBmb3JtZXIgcmVzdWx0c1xuICAgIGNvbnN0IHNjcmlwdGVkSHRtbCA9IGpzeFN0cmluZy5zbGljZSgwLCBqc3hTdHJpbmcubGVuZ3RoIC0gNikgKyBzY3JpcHRzICsgXCI8L2Rpdj5cIjtcbiAgICBcbiAgICAvLyBSZXR1cm4gZ2VuZXJhdGVkIEhUTUwgYXMgYSBzdHJpbmdcbiAgICByZXR1cm4gc2NyaXB0ZWRIdG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2lnbmFscyAocmVxdWVzdEpzb24pIHtcbiAgICByZXR1cm4gcmVuZGVySHRtbChyZXF1ZXN0SnNvbik7XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNjb3BlIEZpeGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2NvcGUgRml4ZXIgZnVuY3Rpb24gaXMgcmVsYXRlZCB0byB0aGUgZ2VuIHZhcmlhYmxlIHBhcnNpbmcgYWxnb3JpdGhtLiBTaW5jZSB0aGUgdG9rZW5pemVyIFxuLy8gZnVuY3Rpb24gZG9lcyBub3QgdGFrZSBpbnRvIGFjY291bmQgdGhhdCBtYXRoIG9wZXJhdG9ycyAqIChtdWx0aXBsaWNhdGlvbikgYW5kIC8gKGRpdmlzaW9uKVxuLy8gYXJlIGV4ZWN1dGVkIGZpcnN0LCB3ZSBuZWVkIHRvIHB1dCBzY29wZXMgYXJvdW5kIGJpdHMgdGhhdCBzaG91bGQgZXhlY3V0ZWQgZmlyc3QuIFRoaXMgaXMgXG4vLyBub3QgZmluYWwgc29sdXRpb24sIHNpbmNlIGl0IGRvZXMgbm90IHRha2UgZm9sbG93aW5nIHNpdHVhdGlvbnMgaW50byBhY2NvdW50OlxuLy8gICAgICogdGhlcmUgaXMgYSBtaW51cyBvciBwbHVzIHNpZ24gYmVmb3JlIGEgbnVtYmVyOiAtMSpbdmFyaWFibGVdXG4vLyAgICAgICAgIC0gSW4gdGhpcyBjYXNlIGl0IHdvdWxkIHJldHVybiB0aGlzOiAtKDEqW3ZhcmlhYmxlXSkuIFRoaXMgZG9lcyBub3QgYXBwbHkgc2NvcGVzXG4vLyAgICAgICAgICAgY29ycmVjdGx5LlxuLy9cbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFsZ29yaXRobSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGFsZ29yaXRobSBtYWtlcyBvbmx5IG9uZSBnZW5lcmFsIHN3ZWVwIHRocm91Z2ggdGhlIHN0cmluZy4gVGhpcyBtZWFucyB0aGF0IGlmIG5vIFxuLy8gc2NvcGVzIGFyZSBuZWVkZWQsIGV4ZWN1dGlvbiB0aW1lIHdpbGwgYmUgbWluaW1hbCwgaS5lLiBpdCB3aWxsIHRha2UgYXMgbXVjaCB0aW1lIGFzIGl0XG4vLyB0YWtlcyB0byBsb29wIHRocm91Z2ggdGhlIHN0cmluZyBvbmNlIGFuZCBjaGVjayBpZiB0aGUgY2hhcmFjdGVyIGlzICogb3IgLy4gSW4gdGhlIGNhc2Ugb2Zcbi8vIDM0IGNoYXJhY3RlciBzdHJpbmcsIHRoaXMgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgaW4gYWJvdW50IDAuMy0wLjUgbXMuIFdpdGggYW4gYXZlcmFnZSBvZiBcbi8vIGFyb3VuZCAwLjRtcyBhbmQgMzQgY2hhcmFjdGVycywgd2UgY2FuIGFwcHJveGltYXRlIHRoYXQgb25lIGNoYXJhY3RlciB0YWtlcyAwLjQgLyAzNCA9IDEuNjZcbi8vIG1pY3JvIHNlY29uZHMuIFRoaXMgd2FzIHRlc3RlZCBvbiAyLjdHaHogSW50ZWwgQ29yZSBpNy4gU28gaXQgdG9vayBhcm91bmQgNDQ4MiBjbG9jayBjeWNsZXNcbi8vIHRvIGV4ZWN1dGUgdGhhdCBhY2NvcmRpbmcgdG8gZm9sbG93aW5nIGVxdWF0aW9uOiAxLjY2dXMgLyAoMSAvIDIuN0cpID0gNDQ4Mi4gVGhpcyBjb3VsZCBiZSBcbi8vIGRyYW1hdGljYWxseSBpbXByb3ZlZCBieSB1c2luZyBjdXN0b20gbWFkZSBOb2RlLmpzIGMrKyBwbHVnaW4gd2hpY2ggYWxsb3dzIHRvIHJ1biBjKytcbi8vIGJpbmFyaWVzIGZyb20gTm9kZS5qcyBvciBieSB3cml0aW5nIHRoZSB3aG9sZSByZW5kZXJlciBzZXJ2ZXIgaW4gYSBjb21waWxlZCBsYW5ndWFnZSBsaWtlIFxuLy8gcHl0aG9uLCBjIywgZ28sIG9yIHN3aWZ0LiBUaGVyZSBpcyBhbHNvIGEgcG9zc2liaWxpdHkgdG8gd3JpdGUgaXQgaW4gUnVzdCBsYW5ndWFnZSwgQyBvclxuLy8gQysrLiBUaGlzIHdvdWxkIGFsbG93IHRvIGNvbXBpbGUganVzdCB0aGlzIGZ1bmN0aW9uIHRvIFdlYkFzc2VtYmx5IGFuZCBydW4gaXQgaW4gTm9kZS5qcyBhdCBcbi8vIGNvbXBpbGVkIHNwZWVkLiBJZiBmdXJ0aGVyIGRldmVsb3BtZW50IHdpbGwgYmUgZG9uZSBhbmQgdGhlcmUgd2lsbCBiZSBhIGRlY2lzaW9uIHRvICBzd2l0Y2hcbi8vIHRvIGEgY29tcGlsZWQgbGFuZ3VhZ2Ugc2VydmVyLCBJIHdvdWxkIHN1Z2dlc3QgdXNpbmcgR08gbGFuZ3VhZ2UgZHVlIHRvIGl0cyBzaW1wbGljaXR5LlxuLy9cbi8vIEFsZ2l0aG0gd29ya3MgaW4gYSBmb2xsb3dpbmcgZmFzaGlvbjpcbi8vICAgMS4gTWFrZSBzdXJlIHBhc3NlZCB0ZXh0IGlzIG9mIGEgU3RyaW5nIHR5cGVcbi8vICAgMi4gU2V0IGZsYWdzIHRvIGZhbHNlOlxuLy8gICAgICAgLSBib3JkZXIgZmxhZ3M6IGluZGljYXRlIGlmIG9uIGxlZnQgb3IgcmlnaHQsIGEgKyBvciAtIHNpZ24gd2FzIGZvdW5kXG4vLyAgICAgICAtIGJyYWNrZXQgZmxhZ3M6IGluZGljYXRlIGlmIHdoaWxlIHN3ZWVwaW5nIGxlZnQgYW5kIHJpZ2h0IGEgc2NvcGUgd2FzIGZvdW5kXG4vLyAgIDMuIEluaXRpYXRlIHZhcmlhYmxlcyBmb3IgbGVmdCBhbmQgcmlnaHQgc3dlZXBlcnNcbi8vICAgNC4gTG9vcCB1bnRpbCB3aG9sZSBzdHJpbmcgd2FzIHNjYW5uZWQsIGluIHRoZSBsb29wOlxuLy8gICAgICAgMS4gSWYgY3VycmVudCBjaGFyYWN0ZXIgaXMgXCIqXCJcIiBvciBcIi9cIiwgY29udGludWUsIG90aGVyd2lzZSBpbmNyZWFzZSBpbmRleCBieSBvbmUgYW5kIGNoZWNrIGFnYWluXG4vLyAgICAgICAyLiBTY2FuIHRvIHRoZSBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgaW5kZXguXG4vLyAgICAgICAzLiBJZiByYW4gb3V0IG9mIGJvdW5kcyBvZiB0aGUgc3RyaW5nLCBzdG9wIHNjYW5uaW5nIGxlZnQsIG1vdmUgdG8gc3RlcCA3XG4vLyAgICAgICA0LiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBzZXQgY2xvc2luZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDUuIElmIGhpdCBvcGVuaW5nIGJyYWNrZXQsIGNoZWNrIGlmIGNsb3NpbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZyBhbmQgc2V0IGNsb3NpbmcgYnJhY2tldCBmbGFnIHRvIGZhbHNlIGFnYWluLlxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCBtb3ZlIHRvIHN0ZXAgN1xuLy8gICAgICAgNi4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBjbG9zaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZywgbW92ZSByaWdodCBieSBvbmUgc3RlcCBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuLy8gICAgICAgNy4gU2NhbiB0byB0aGUgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBpbmRleC5cbi8vICAgICAgIDguIElmIHJhbiBvdXQgb2YgYm91bmRzIG9mIHRoZSBzdHJpbmcsIHN0b3Agc2Nhbm5pbmcgbGVmdCwgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICA5LiBJZiBoaXQgb3BlbmluZyBicmFja2V0LCBzZXQgb3BlbmluZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDEwLiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcgYW5kIHNldCBvcGVuaW5nIGJyYWNrZXQgZmxhZyB0byBmYWxzZSBhZ2Fpbi5cbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICAxMS4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuXG5leHBvcnQgZnVuY3Rpb24gZml4U2NvcGVzKGdlbikge1xuICAgIGxldCBnID0gU3RyaW5nKGdlbik7XG5cbiAgICAvLyBWYXJpYWJsZSBhcmUgdGFrZW4gb3V0c2lkZSBvZiBmb3IgbG9vcCwgdG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UuXG4gICAgLy8gSW4gdGhpcyB3YXksIHZhcmlhYmxlcyBhcmUganVzdCByZXdyaXR0ZW4gaW4gdGhlIHNhbWUgbWVtb3J5XG4gICAgLy8gbG9jYXRpb24gaW5zdGVhZCBvZiBjcmVhdGluZyBuZXcgdmFyaWFibGUgZXZlcnkgdGltZS5cbiAgICBsZXQgZm91bmRMZWZ0Qm9yZGVyID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kUmlnaHRCb3JkZXIgPSBmYWxzZTtcblxuICAgIGxldCBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICBsZXQganVzdEhpdENsb3NpbmdCcmFja2V0ID0gZmFsc2U7XG5cbiAgICBsZXQgbGVmdDtcbiAgICBsZXQgcmlnaHQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGdbaV0gPT09IFwiKlwiIHx8IGdbaV0gPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAvLyBTY2FuIGxlZnRcbiAgICAgICAgICAgIGZvciAobGVmdCA9IGk7ICFmb3VuZExlZnRCb3JkZXI7IGxlZnQtLSkge1xuICAgICAgICAgICAgICAgIC8vIEV4aXQgdGhlIHNjYW5uaW5nIGxvb3AgaWYgaGl0IGxlZnQgc3RyaW5nIHdhbGxcbiAgICAgICAgICAgICAgICBpZiAobGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZG9lcyBub3Qgc2V0IGZvdW5kTGVmdEJvcmRlciB2YXJpYWJsZSB0byB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpZiBib3RoIHNpZGVzIGFyZSBicmFja2V0cyBvciBvdXRlciB3YWxscyBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RyaW5nLCBuZXcgYnJhY2tldHMgc2hvdWxkIG5vdCBiZSBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGhpdHMgb3BlbmluZyBicmFja2V0LCBpdCBjaGVja3MgaWYgaXQgaGl0IGNsb3NpbmcgYnJhY2tldCBiZWZvcmVcbiAgICAgICAgICAgICAgICBpZiAoZ1tsZWZ0XSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRDbG9zaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdEhpdENsb3NpbmdCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFya3MgdGhhdCBpdCBoaXQgY2xvc2luZyBicmFja2V0LCBzbyB0aGF0IGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGxhdGVyLFxuICAgICAgICAgICAgICAgIC8vIGl0IGtub3dzIHRoYXQgaXQgc2hvdWxkbid0IFxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIilcIikganVzdEhpdENsb3NpbmdCcmFja2V0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIEV4aXQgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgcGx1cyBvciBtaW51c1xuICAgICAgICAgICAgICAgIC8vIEFsc28sIG1vdmUgcmlnaHQsIHNvIHRoYXQgYnJhY2tlcyBpcyBpbnNlcnRlZCBhZnRlciArIG9yIC0gc2lnblxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIitcIiB8fCBnW2xlZnRdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdENsb3NpbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kTGVmdEJvcmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2NhbiByaWdodFxuICAgICAgICAgICAgZm9yIChyaWdodCA9IGk7ICFmb3VuZFJpZ2h0Qm9yZGVyOyByaWdodCsrKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhpdCB0aGUgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgcmlnaHQgc3RyaW5nIHdhbGwgb3IgY2xvc2luZyBicmFja2V0XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0ID49IGcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZG9lcyBub3Qgc2V0IGZvdW5kUmlnaHRCb3JkZXIgdmFyaWFibGUgdG8gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgaWYgYm90aCBzaWRlcyBhcmUgYnJhY2tldHMgb3Igb3V0ZXIgd2FsbHMgb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN0cmluZywgbmV3IGJyYWNrZXRzIHNob3VsZCBub3QgYmUgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBoaXRzIGNsb3NpbmcgYnJhY2tldCwgaXQgY2hlY2tzIGlmIGl0IGhpdCBvcGVuaW5nIGJyYWNrZXQgYmVmb3JlXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdE9wZW5pbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYXJrcyB0aGF0IGl0IGhpdCBjbG9zaW5nIGJyYWNrZXQsIHNvIHRoYXQgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgbGF0ZXIsXG4gICAgICAgICAgICAgICAgLy8gaXQga25vd3MgdGhhdCBpdCBzaG91bGRuJ3QgXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIihcIikganVzdEhpdE9wZW5pbmdCcmFja2V0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChnW3JpZ2h0XSA9PT0gXCIrXCIgfHwgZ1tyaWdodF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0T3BlbmluZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRSaWdodEJvcmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIG9uIG9uZSBvZiB0aGUgc2lkZXMgdGhlcmUgaXMgKyBvciAtIHNpZ25cbiAgICAgICAgICAgIGlmIChmb3VuZExlZnRCb3JkZXIgfHwgZm91bmRSaWdodEJvcmRlcikge1xuICAgICAgICAgICAgICAgIC8vIFNsaWNlIG9yaWdpbmFsIHN0cmluZyBhdCB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uc1xuICAgICAgICAgICAgICAgIGxldCBvbmUgPSBnLnNsaWNlKDAsIGxlZnQpO1xuICAgICAgICAgICAgICAgIGxldCB0d28gPSBnLnNsaWNlKGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICBsZXQgdGhyZWUgPSBnLnNsaWNlKHJpZ2h0LCBnLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgYnJhY2tldHMgYmV0d2VlbiBmb3JtZXIgdGhyZWUgc3RyaW5ncyB0byBmb3JtXG4gICAgICAgICAgICAgICAgLy8gbmV3IHN0cmluZyB3aXRoIGluc2VydGVkIGJyYWNrZXRzXG4gICAgICAgICAgICAgICAgZyA9IG9uZSArIFwiKFwiICsgdHdvICsgXCIpXCIgKyB0aHJlZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVzZXQgYm9yZGVyIHZhcmlhYmxlc1xuICAgICAgICAgICAgZm91bmRMZWZ0Qm9yZGVyID0gZmFsc2U7XG4gICAgICAgICAgICBmb3VuZFJpZ2h0Qm9yZGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZztcbn0iLCJpbXBvcnQgeyBzZXBhcmF0ZU5vZGVzLCBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5LCBvYmplY3RTaXplLCB3YXNDYWxjdWxhdGVkLCBhbGxJbnB1dHNDYWxjdWxhdGVkLCBjYWxjdWxhdGVPdXRwdXQsIGdldFRvdWNoSW5wdXRzLCBpbml0VGltZSwgZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzLCBnZXRPdGhlclNpZGVPZkNvbm5lY3RvciB9IGZyb20gJy4vc2NyaXB0R2VuZXJhdG9yRnVuY3Rpb25zJztcbnZhciBTQU1QTEVfUkFURSA9IDUxMjsgLy8gU2FtcGxlcyBwZXIgc2Vjb25kXG52YXIgRFVSQVRJT04gPSAyOyAvLyBTZWNvbmRzLCBpZGVhbGx5IHNob3VsZCBiZSBkaXZpZGFibGUgYnkgMlxudmFyIE9GRlNFVCA9IDA7IC8vIFdoaWNoIHBvaW50IHNob3VsZCBiZSB0aGUgY2VudHJlIG9mIHRoZSBzY29wZVxuZXhwb3J0IGZ1bmN0aW9uIHNjcmlwdEdlbmVyYXRvcihhbGxOb2RlcywgYWxsQ29ubmVjdGlvbnMpIHtcbiAgICAvLyBFeGVjdXRhYmxlIHRvIHN0b3JlIGdlbmVyYXRlZCBqYXZhc2NyaXB0IGNvZGUuIEFueSBpbml0aWFsaXNhdGlvbiBjb2RlIHNob3VsZCBiZSBoZXJlLlxuICAgIHZhciBleGVBcnJheSA9IFtdO1xuICAgIHZhciBleGVjdXRhYmxlID0gXCJ2YXIgZ3JhcGhzID0ge307XFxuXCI7XG4gICAgLy8gU2V0dXAgdGltZVxuICAgIGV4ZWN1dGFibGUgKz0gaW5pdFRpbWUoT0ZGU0VUIC0gRFVSQVRJT04gLyAyLCBPRkZTRVQgKyBEVVJBVElPTiAvIDIsIDEgLyBTQU1QTEVfUkFURSk7XG4gICAgLy8gQ2FsY3VsYXRlZCBub2RlcyBoYXZlIGZvbGxvd2luZyBzaGFwZTogXCJub2RlSWQ6b3V0cHV0SWRcIlxuICAgIHZhciBjYWxjdWxhdGVkTm9kZXMgPSBbXTtcbiAgICAvLyBTdGF0aXN0aWNzIG9iamVjdFxuICAgIHZhciBzdGF0aXN0aWNzID0ge1xuICAgICAgICBsb29wQ291bnRlcjogMCxcbiAgICAgICAgaW5pdGlhbFRvdGFsTm9kZXM6IG9iamVjdFNpemUoYWxsTm9kZXMpLFxuICAgICAgICBpbml0aWFsVG90YWxDb25uZWN0b3JzOiBhbGxDb25uZWN0aW9ucy5sZW5ndGgsXG4gICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgZW5kVGltZTogMFxuICAgIH07XG4gICAgLy8gU2VwYXJhdGVzIHVuY2FsY3VsYXRlZCBub2RlcyBmcm9tIHNjb3BlcyBhbmQgVUkgYXQgdGhlIHN0YXJ0LlxuICAgIHZhciBfYSA9IHNlcGFyYXRlTm9kZXMoYWxsTm9kZXMpLCB1bmNhbGN1bGF0ZWROb2RlcyA9IF9hLnVuY2FsY3VsYXRlZE5vZGVzLCBhbGxTY29wZXMgPSBfYS5hbGxTY29wZXMsIHVpTm9kZXMgPSBfYS51aU5vZGVzLCBmZnROb2RlcyA9IF9hLmZmdE5vZGVzO1xuICAgIC8vIFNlcGFyYXRlIHRvdWNoIG5vZGVzIGZvcm0gcmVndWxhciBub2Rlc1xuICAgIHZhciB0b3VjaE5vZGVzU2VwYXJhdGVkID0gZ2V0VG91Y2hJbnB1dHModW5jYWxjdWxhdGVkTm9kZXMpO1xuICAgIHVuY2FsY3VsYXRlZE5vZGVzID0gdG91Y2hOb2Rlc1NlcGFyYXRlZC51bmNhbGN1bGF0ZWROb2RlcztcbiAgICAvLyBEZWFsIHdpdGggdG91Y2ggQ29udHJvbHNcbiAgICB2YXIgdG91Y2hOb2RlcyA9IHRvdWNoTm9kZXNTZXBhcmF0ZWQudG91Y2hOb2RlcztcbiAgICBleGVjdXRhYmxlICs9IGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyh0b3VjaE5vZGVzKTtcbiAgICBmb3IgKHZhciB0IGluIHRvdWNoTm9kZXMpIHtcbiAgICAgICAgZm9yICh2YXIgbyBpbiB0b3VjaE5vZGVzW3RdLm91dHB1dHMpIHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZWROb2Rlcy5wdXNoKHQgKyBcIjpcIiArIHRvdWNoTm9kZXNbdF0ub3V0cHV0c1tvXS50aXRsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQ29ubmVjdGlvbiBEaWN0aW9uYXJ5IGNvbnRhaW5zIGNvbm5lY3Rpb25zIGluIGtleTogdmFsdWUgZm9ybWF0LCB3aGVyZVxuICAgIC8vIGJvdGggY29udGFpbiBub2RlSWQgYW5kIHNldHRpbmdJZCBhcyBzdHJpbmdzIHNlcGFyYXRlZCBieSBhIGNvbG9uLlxuICAgIHZhciBjb25uZWN0aW9uRGljdGlvbmFyeSA9IGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnkoYWxsQ29ubmVjdGlvbnMpO1xuICAgIC8vIEdlbmVyYWwgcnVsZXMgZm9yIGFsZ29yaXRobSB3cml0aW5nOlxuICAgIC8vICogdXNlIGFzIG1hbnkgZnVuY3Rpb25zIGFzIHBvc3NpYmxlIChpbiBwZXJmb3JtYW5jZSBib3VuZHMpXG4gICAgLy8gKiBcbiAgICAvLyAwLiBMb29wIHRocm91Z2ggdW5jYWxjdWxhdGVkIG5vZGVzIGFuZCBmaW5kIHNjb3Blcy4gU2NvcGVzIGRvIG5vdCBoYXZlIG91dHB1dHMsIHNvIG5vIG5lZWQgdG8gZmluZCBpbnB1dHMuXG4gICAgLy8gMC4wIERvIGl0IGluIGEgZnVuY3Rpb24/XG4gICAgLy8gMS4gTG9vcCB1bnRpbCBhbGwgbm9kZXMgYXJlIGNhbGN1bGF0ZWRcbiAgICAvLyB8ICAgMS4gQ2hlY2sgaWYgbm9kZSB3YXMgY2FsY3VsYXRlZCBiZWZvcmUsIGlmIHllcyBnbyB0byBuZXh0IG5vZGUuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgMi4gSWYgd2FzIG5vdCBjYWxjdWxhdGVkOlxuICAgIC8vIHwgICB8ICAgMS4gQ2hlY2sgaWYgYWxsIGNvbm5lY3RlZCBpbnB1dHMgYXJlIGNvbm5lY3RlZCB0byB0aGUgY2FsY3VsYXRlZCBub2RlcywgaWYgbm90IC0gZ28gdG8gbmV4dCBub2RlLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIHwgICAyLiBJZiB5ZXMsIHNhdmUgYWxsIHVuY29ubmVjdGVkIGlucHV0cyAodmFsdWUgZnJvbSBkZWZhdWx0IHZhbHVlKS4gKGZ1bmN0aW9uIGZvciBlYWNoIHNhdmUpXG4gICAgLy8gfCAgIHwgICAzLiBDaGVjayBpZiBvdXRwdXQgaXMgcG9pbnRpbmcgdG8gYSBnZW5lcmF0b3IuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgfCAgIDQuIElmIHllcywgcGFyc2UgZ2VuZXJhdG9yXG4gICAgLy8gfCAgIHwgICB8ICAgMS4gU2NhbiBnZW5lcmF0b3IgYW5kIHNhdmUgdmFyaWFibGVzXG4gICAgLy8gfCAgIHwgICB8ICAgMi4gSWYgdmFyaWFibGUgaXMgYSBnZW5lcmF0b3IgZ28gdG8gc3RlcCAxLjIuNFxuICAgIC8vIHwgICB8ICAgfCAgIDMuIExvb3AgdW50aWwgYWxsIGdlbmVyYXRvcnMgd2VyZSBwYXJzZWRcbiAgICAvLyB8ICAgfCAgIHwgLS0tLS0tLS0tLS0gSW4gZm9sbG93aW5nLCBpbnB1dHMgYXJlIGNoZWNrZWQgZmlyc3Qgc2luY2Ugc2V0dGluZyBjYW4gYmUgYW4gaW5wdXQgLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHwgICB8ICAgNS4gQ2hlY2sgaWYgb3V0cHV0IGlzIHBvaW50aW5nIHRvIGFuIGlucHV0LCBpZiB5ZXMgYXNzaWduIGlucHV0IHZhcmlhYmxlIHRvIHRoZSBvdXRwdXQgdmFyaWFibGVcbiAgICAvLyB8ICAgfCAgIDYuIENoZWNrIGlmIG91dHB1dCBpcyBwb2ludGluZyB0byBhIHNldHRpbmcsIGlmIHllcyBhc3NpZ24gY29uc3RhbnQgdG8gdGhlIHNldHRpbmdcbiAgICAvLyAyLiBGb3IgZWFjaCBzY29wZTpcbiAgICAvLyB8ICAgMS4gR2V0IGFsbCBpbnB1dHMgYW5kIHNhdmUgdGhlbSBpbiB2YXJpYWJsZXMgKGFzc3VtZWQgdG8gYmUgY2FsY3VsYXRlZCBzaW5jZSB0ZXJtaW5hdGlvbiBjb25kaXRpb24gZnJvbSBzdGVwIDEgaXMgYmFzZWQgb24gYWxsIG5vZGVzIGJlaW5nIGNhbGN1bGF0ZWQuKVxuICAgIC8vIHwgICAyLiBQYXJzZSBmaXJzdCBnZW5lcmF0b3IgYW5kIGdlbmVyYXRlIHNjb3BlIG91dHB1dCB2YXJpYWJsZSAobWFraW5nIHN1cmUgdGhhdCBhbGwgdmFyaWFibGVzIGZyb20gZ2VuZXJhdG9yIHdlcmUgc2F2ZWQgYmVmb3JlaGFuZClcbiAgICAvLyB8ICAgMy4gR2VuZXJhdGUgYW4gYXJyYXkgb2Ygb3V0cHV0IGRhdGEgYmFzZWQgb24gZ2VuZXJhbCAob3IgY29ubmVjdGVkKSB0aW1lIGFycmF5IGFuZCBzYXZlIGl0IGludG8gYSB2YXJpYWJsZVxuICAgIC8vIHwgICA0LiBDcmVhdGUgcmVkcmF3IGZ1bmN0aW9uLCBpbnNpZGUgdGhhdCBmdW5jdGlvbjpcbiAgICAvLyB8ICAgfCAgIDEuIEZpbmQgYXBwcm9wcmlhdGUgY2FudmFzIG5vZGUgaW4gdGhlIGRvbVxuICAgIC8vIHwgICB8ICAgMi4gR2V0IGNvbnRleHRcbiAgICAvLyB8ICAgfCAgIDMuIFJlcG9wdWxhdGUgZ3JhcGggYXJyYXkgd2l0aCBuZXcgZ3JhcGhzLlxuICAgIC8vIHwgICA1LiBDcmVhdGUgdXBkYXRlRGF0YSBmdW5jdGlvbiwgaW5zaWRlIHRoYXQgZnVuY3Rpb246XG4gICAgLy8gfCAgIHwgICAxLiBMb29wIHRocm91Z2ggZ3JhcGggYXJyYXkgYW5kIHVwZGF0ZSBncmFwaHMgd2l0aCBuZXcgZGF0YS5cbiAgICAvLyAwLjAgTG9vcCB0aHJvdWdoIGFsbCB1aSBub2RlcyBhbmQgc2F2ZSB0aGVpciBvdXRwdXQgdmFyaWFibGUgbmFtZXNcbiAgICBmb3IgKHZhciBub2RlS2V5IGluIHVpTm9kZXMpIHtcbiAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG5vZGUgaW50byBhIGNvbnN0YW50XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHVpTm9kZXNbbm9kZUtleV07XG4gICAgICAgIHZhciBvdXRwdXRLZXkgPSBjdXJyZW50Tm9kZS5vdXRwdXRzWzBdLnRpdGxlO1xuICAgICAgICBleGVjdXRhYmxlICs9IFwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcIlwiICsgbm9kZUtleSArIFwiSW5wdXRcXFwiKS5vbmlucHV0ID0gZnVuY3Rpb24gKGUpIHtcXG4gICAgICAgICAgICBcIiArIG5vZGVLZXkgKyBvdXRwdXRLZXkgKyBcIiA9IGZ1bmN0aW9uICh0KSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKVxcbiAgICAgICAgICAgIH07XFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcIlwiICsgbm9kZUtleSArIFwiSW5kaWNhdG9yXFxcIikuaW5uZXJUZXh0ID0gZS50YXJnZXQudmFsdWU7XFxuICAgICAgICAgICAgdXBkYXRlKCk7XFxuICAgICAgICB9O1xcblwiO1xuICAgICAgICBleGVjdXRhYmxlICs9IFwidmFyIFwiICsgbm9kZUtleSArIG91dHB1dEtleSArIFwiID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIFwiICsgdWlOb2Rlc1tub2RlS2V5XS5zZXR0aW5nc1szXS52YWx1ZSArIFwifTtcXG5cIjtcbiAgICAgICAgY2FsY3VsYXRlZE5vZGVzLnB1c2gobm9kZUtleSArIFwiOlwiICsgb3V0cHV0S2V5KTtcbiAgICAgICAgZGVsZXRlIHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuICAgIH1cbiAgICAvLyAxLiBMb29wIHVudGlsIGFsbCBub2RlcyBhcmUgY2FsY3VsYXRlZCBhbmQgY291bnQgbnVtYmVyIG9mIGl0ZXJhdGlvbnMgZm9yIHN0YXRpc3RpY3NcbiAgICBmb3IgKHN0YXRpc3RpY3MubG9vcENvdW50ZXIgPSAwOyBvYmplY3RTaXplKHVuY2FsY3VsYXRlZE5vZGVzKSA+IDA7IHN0YXRpc3RpY3MubG9vcENvdW50ZXIrKykge1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHVuY2FsY3VsYXRlZCBub2Rlc1xuICAgICAgICBmb3IgKHZhciBub2RlS2V5IGluIHVuY2FsY3VsYXRlZE5vZGVzKSB7XG4gICAgICAgICAgICAvLyBTYXZlIGN1cnJlbnQgbm9kZSBpbnRvIGEgY29uc3RhbnRcbiAgICAgICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuICAgICAgICAgICAgLy8gR28gdG8gbmV4dCBub2RlIGlmIG5vdCBhbGwgY29ubmVjdGVkIGlucHV0cyB3ZXJlIGNhbGN1bGF0ZWQgYWxyZWFkeVxuICAgICAgICAgICAgaWYgKCFhbGxJbnB1dHNDYWxjdWxhdGVkKG5vZGVLZXksIGN1cnJlbnROb2RlLmlucHV0cywgYWxsQ29ubmVjdGlvbnMsIGNhbGN1bGF0ZWROb2RlcykpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0cyA9IFtdO1xuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGV2ZXJ5IG91dHB1dCBvZiB0aGUgbm9kZSB0byBjYWxjdWxhdGUgdGhlbVxuICAgICAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBjdXJyZW50Tm9kZS5vdXRwdXRzLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dEtleSA9IGN1cnJlbnROb2RlLm91dHB1dHNbb10udGl0bGU7XG4gICAgICAgICAgICAgICAgLy8gSWYgY3VycmVudCBvdXRwdXQgd2FzIGNhbGN1bGF0ZWQgYWxyZWFkeSwgc2tpcCB0byBuZXh0IG9uZVxuICAgICAgICAgICAgICAgIGlmICh3YXNDYWxjdWxhdGVkKGNhbGN1bGF0ZWROb2Rlcywgbm9kZUtleSwgb3V0cHV0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZUNhbGN1bGF0ZWRPdXRwdXRzLnB1c2gobm9kZUtleSArIFwiOlwiICsgb3V0cHV0S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIG5vdCwgY2FsY3VsYXRlIGl0IGFuZCBhcHBlbmQgdG8gdGhlIGV4ZWN1dGFibGUgdGV4dC5cbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBjYWxjdWxhdGVPdXRwdXQobm9kZUtleSwgb3V0cHV0S2V5LCBjdXJyZW50Tm9kZSwgYWxsQ29ubmVjdGlvbnMpLCBleGUgPSBfYi5leGUsIHdhc1N1Y2Nlc3NmdWwgPSBfYi53YXNTdWNjZXNzZnVsO1xuICAgICAgICAgICAgICAgIGlmICh3YXNTdWNjZXNzZnVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWN1dGFibGUgKz0gZXhlO1xuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkTm9kZXMucHVzaChub2RlS2V5ICsgXCI6XCIgKyBvdXRwdXRLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBnZW5lcmF0ZSBvdXRwdXQgY29kZTogXCIgKyBub2RlS2V5ICsgXCIgLSBcIiArIG91dHB1dEtleSArIFwiIHwgc2NyaXB0R2VuZXJhdG9yLnRzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZUNhbGN1bGF0ZWRPdXRwdXRzLmxlbmd0aCA9PT0gY3VycmVudE5vZGUub3V0cHV0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdW5jYWxjdWxhdGVkTm9kZXNbbm9kZUtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gMi4gTG9vcCB0aHJvdWdoIGFsbCBzY29wZXMgYW5kIGRyYXcgZ3JhcGhzXG4gICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICBleGVjdXRhYmxlID0gXCJcIjtcbiAgICBleGVjdXRhYmxlICs9IFwiZnVuY3Rpb24gdXBkYXRlKCkge1xcblwiO1xuICAgIC8vIExvb3AgdGhyb3VnaCB0aW1lIHNjb3Blc1xuICAgIGZvciAodmFyIHMgaW4gYWxsU2NvcGVzKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2NvcGUgPSBhbGxTY29wZXNbc107XG4gICAgICAgIHZhciBfYyA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7IG5vZGVJZDogcywgc2V0dGluZ0lkOiBcInNpZ25hbFwiIH0pLCBvdGhlck5vZGVJZCA9IF9jLm90aGVyTm9kZUlkLCBvdGhlclNldHRpbmdJZCA9IF9jLm90aGVyU2V0dGluZ0lkO1xuICAgICAgICBleGVjdXRhYmxlICs9IFwiXFxuICAgICAgICBpZihncmFwaHMuXCIgKyBzICsgXCIpIHtcXG4gICAgICAgICAgICBsZXQgbmV3RGF0YSA9IFtdO1xcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7bmV3RGF0YS5wdXNoKFwiICsgb3RoZXJOb2RlSWQgKyBvdGhlclNldHRpbmdJZCArIFwiKHRbaV0pKTt9XFxuICAgICAgICAgICAgZ3JhcGhzLlwiICsgcyArIFwiLmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IG5ld0RhdGE7XFxuICAgICAgICAgICAgZ3JhcGhzLlwiICsgcyArIFwiLnVwZGF0ZSgpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBsZXQgY2FudmFzTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJcIiArIHMgKyBcIlxcXCIpO1xcblxcbiAgICAgICAgICAgIHZhciB2aWV3U2l6ZSA9IHtcXG4gICAgICAgICAgICAgICAgeDogY2FudmFzTm9kZS5wYXJlbnROb2RlLm9mZnNldFdpZHRoLFxcbiAgICAgICAgICAgICAgICB5OiBjYW52YXNOb2RlLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIHZhciB3ID0gdmlld1NpemUueDtcXG4gICAgICAgICAgICB2YXIgaCA9IHZpZXdTaXplLnk7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgY2FudmFzTm9kZS53aWR0aCA9IHc7XFxuICAgICAgICAgICAgY2FudmFzTm9kZS5oZWlnaHQgPSBoO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXNOb2RlLmdldENvbnRleHQoXFxcIjJkXFxcIik7XFxuXFxuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXTtcXG5cXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goXCIgKyBvdGhlck5vZGVJZCArIG90aGVyU2V0dGluZ0lkICsgXCIodFtpXSkpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcXG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxcbiAgICAgICAgICAgICAgICBkYXRhOiB7bGFiZWxzOiB0Lm1hcCh0aSA9PiB0aS50b0ZpeGVkKDIpKSxcXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXFxuICAgICAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcInNpZ25hbFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ1wiICsgY3VycmVudFNjb3BlLnNldHRpbmdzWzFdLnZhbHVlICsgXCInLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgXVxcbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50czoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVuc2lvbjogMC40LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwcGVkOiBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBvaW50OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGl0UmFkaXVzOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlclJhZGl1czogMFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sIGFuaW1hdGlvbjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwXFxuICAgICAgICAgICAgICAgICAgICB9LCB0b29sdGlwczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICB9LCBsZWdlbmQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgfVwiICsgKGN1cnJlbnRTY29wZS5zZXR0aW5nc1swXS52YWx1ZSA9PSBcInRydWVcIiA/ICcnIDogXCIsIHNjYWxlczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAtMSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAwLjAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XSwgeUF4ZXM6IFt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMC41XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxcbiAgICAgICAgICAgICAgICAgICAgfVwiKSArIFwiLCB0aXRsZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1wiICsgY3VycmVudFNjb3BlLnRpdGxlICsgXCInLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCdcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgIGdyYXBocy5cIiArIHMgKyBcIiA9IG15Q2hhcnQ7XFxuICAgICAgICB9XCI7XG4gICAgICAgIGV4ZUFycmF5LnB1c2goZXhlY3V0YWJsZSk7XG4gICAgICAgIGV4ZWN1dGFibGUgPSBcIlwiO1xuICAgIH1cbiAgICAvLyBMb29wIHRocm91Z2ggZmZ0IHNjb3Blc1xuICAgIGZvciAodmFyIGYgaW4gZmZ0Tm9kZXMpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY29wZSA9IGZmdE5vZGVzW2ZdO1xuICAgICAgICB2YXIgX2QgPSBnZXRPdGhlclNpZGVPZkNvbm5lY3RvcihhbGxDb25uZWN0aW9ucywgbnVsbCwgeyBub2RlSWQ6IGYsIHNldHRpbmdJZDogXCJzaWduYWxcIiB9KSwgb3RoZXJOb2RlSWQgPSBfZC5vdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQgPSBfZC5vdGhlclNldHRpbmdJZDtcbiAgICAgICAgZXhlY3V0YWJsZSArPSBcIlxcbiAgICAgICAgaWYoZ3JhcGhzLlwiICsgZiArIFwiKSB7XFxuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXTtcXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge2RhdGEucHVzaChcIiArIG90aGVyTm9kZUlkICsgb3RoZXJTZXR0aW5nSWQgKyBcIih0W2ldKSk7fVxcblxcbiAgICAgICAgICAgIGxldCBmID0gbmV3IEZGVChkYXRhLmxlbmd0aCk7XFxuICAgICAgICAgICAgbGV0IGNvbXBsZXhPdXRwdXQgPSBmLmNyZWF0ZUNvbXBsZXhBcnJheSgpO1xcbiAgICAgICAgICAgIGYucmVhbFRyYW5zZm9ybShjb21wbGV4T3V0cHV0LCBkYXRhKTtcXG4gICAgICAgICAgICBsZXQgcmVhbE91dHB1dCA9IG5ldyBBcnJheShkYXRhLmxlbmd0aCk7XFxuICAgICAgICAgICAgcmVhbE91dHB1dC5maWxsKDApO1xcbiAgICAgICAgICAgIGYuZnJvbUNvbXBsZXhBcnJheShjb21wbGV4T3V0cHV0LCByZWFsT3V0cHV0KTtcXG5cXG4gICAgICAgICAgICAvLyByZWFsT3V0cHV0ID0gcmVhbE91dHB1dC5maWx0ZXIoKHZhbCwgaSkgPT4gaSUyID09IDAgfHwgaSA9PSAwKTtcXG5cXG4gICAgICAgICAgICByZWFsT3V0cHV0ID0gcmVhbE91dHB1dC5zcGxpY2UoMCwgXCIgKyBjdXJyZW50U2NvcGUuc2V0dGluZ3NbM10udmFsdWUgKyBcIik7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgcmVhbE91dHB1dCA9IHJlYWxPdXRwdXQubWFwKHZhbCA9PiB2YWwgKiAyIC8gZGF0YS5sZW5ndGgpO1xcblxcbiAgICAgICAgICAgIGdyYXBocy5cIiArIGYgKyBcIi5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSByZWFsT3V0cHV0O1xcbiAgICAgICAgICAgIGdyYXBocy5cIiArIGYgKyBcIi51cGRhdGUoKTtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgbGV0IGNhbnZhc05vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwiXCIgKyBmICsgXCJcXFwiKTtcXG5cXG4gICAgICAgICAgICB2YXIgdmlld1NpemUgPSB7XFxuICAgICAgICAgICAgICAgIHg6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCxcXG4gICAgICAgICAgICAgICAgeTogY2FudmFzTm9kZS5wYXJlbnROb2RlLm9mZnNldEhlaWdodFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICB2YXIgdyA9IHZpZXdTaXplLng7XFxuICAgICAgICAgICAgdmFyIGggPSB2aWV3U2l6ZS55O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGNhbnZhc05vZGUud2lkdGggPSB3O1xcbiAgICAgICAgICAgIGNhbnZhc05vZGUuaGVpZ2h0ID0gaDtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzTm9kZS5nZXRDb250ZXh0KFxcXCIyZFxcXCIpO1xcblxcbiAgICAgICAgICAgIGxldCBkYXRhID0gW107XFxuXFxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKFwiICsgb3RoZXJOb2RlSWQgKyBvdGhlclNldHRpbmdJZCArIFwiKHRbaV0pKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgbGV0IGYgPSBuZXcgRkZUKGRhdGEubGVuZ3RoKTtcXG4gICAgICAgICAgICBsZXQgY29tcGxleE91dHB1dCA9IGYuY3JlYXRlQ29tcGxleEFycmF5KCk7XFxuICAgICAgICAgICAgZi5yZWFsVHJhbnNmb3JtKGNvbXBsZXhPdXRwdXQsIGRhdGEpO1xcbiAgICAgICAgICAgIGxldCByZWFsT3V0cHV0ID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcXG4gICAgICAgICAgICByZWFsT3V0cHV0LmZpbGwoMCk7XFxuICAgICAgICAgICAgZi5mcm9tQ29tcGxleEFycmF5KGNvbXBsZXhPdXRwdXQsIHJlYWxPdXRwdXQpO1xcblxcbiAgICAgICAgICAgIC8vIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0LmZpbHRlcigodmFsLCBpKSA9PiBpJTIgPT0gMCB8fCBpID09IDApO1xcblxcbiAgICAgICAgICAgIHJlYWxPdXRwdXQgPSByZWFsT3V0cHV0LnNwbGljZSgwLCBcIiArIGN1cnJlbnRTY29wZS5zZXR0aW5nc1szXS52YWx1ZSArIFwiKTtcXG5cXG4gICAgICAgICAgICByZWFsT3V0cHV0ID0gcmVhbE91dHB1dC5tYXAodmFsID0+IHZhbCAqIDIgLyBkYXRhLmxlbmd0aCk7XFxuXFxuICAgICAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XFxuICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHJlYWxPdXRwdXQubWFwKCh2YWwsIGkpID0+IHBhcnNlRmxvYXQoaS8yKS50b0ZpeGVkKDEpKSxcXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXFxuICAgICAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcInNpZ25hbFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjQ1LCAyMywgNTQsIDAuNCknLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigwLCAwLCAwKScsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlYWxPdXRwdXRcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICBdXFxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwXFxuICAgICAgICAgICAgICAgICAgICB9LCB0b29sdGlwczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcXG4gICAgICAgICAgICAgICAgICAgIH0sIGxlZ2VuZDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiICsgKGN1cnJlbnRTY29wZS5pbnB1dHMubGVuZ3RoID4gMSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgfSwgdGl0bGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcIiArIGN1cnJlbnRTY29wZS50aXRsZSArIFwiJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICBncmFwaHMuXCIgKyBmICsgXCIgPSBteUNoYXJ0O1xcbiAgICAgICAgfVwiO1xuICAgIH1cbiAgICBleGVjdXRhYmxlICs9IFwifTtcXG5cIjtcbiAgICBleGVjdXRhYmxlICs9IFwidXBkYXRlKCk7XCI7XG4gICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICBleGVjdXRhYmxlID0gXCJcIjtcbiAgICByZXR1cm4gZXhlQXJyYXk7XG59XG4iLCJpbXBvcnQgeyB0b2tlbml6ZUdlbmVyYXRvciB9IGZyb20gJy4vZ2VuZXJhdG9yVG9rZW5pemVyJztcbmltcG9ydCB7IHRva2VuVG9KcyB9IGZyb20gJy4vdG9rZW5Ub0pzJztcbi8vIEdldCBhbGwgbm9kZXMgdGhhdCBhcmUgbm90IHNjb3BlcywgYW5kIHNhdmUgc2NvcGVzIGludG8gdGhlaXIgb3duIGNvbGxlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZU5vZGVzKGFsbE5vZGVzKSB7XG4gICAgdmFyIHVuY2FsY3VsYXRlZCA9IHt9O1xuICAgIHZhciBzY29wZXMgPSB7fTtcbiAgICB2YXIgdWlOb2RlcyA9IHt9O1xuICAgIHZhciBmZnROb2RlcyA9IHt9O1xuICAgIGZvciAodmFyIGkgaW4gYWxsTm9kZXMpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBVSSBub2RlXG4gICAgICAgIHZhciBpc1RoaXJkTGV0dGVyVXBwZXJDYXNlID0gU3RyaW5nKGkpLnN1YnN0cigyLCAxKS50b1VwcGVyQ2FzZSgpID09PSBTdHJpbmcoaSkuc3Vic3RyKDIsIDEpO1xuICAgICAgICB2YXIgaXNVSSA9IFN0cmluZyhpKS5zdWJzdHIoMCwgMikgPT09IFwidWlcIjtcbiAgICAgICAgdmFyIGlzQWN0dWFsVUkgPSBpc1VJICYmIGlzVGhpcmRMZXR0ZXJVcHBlckNhc2U7XG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGlzIGEgc2NvcGVcbiAgICAgICAgdmFyIGlzU2NvcGUgPSBTdHJpbmcoaSkuc3Vic3RyKDAsIDUpID09PSBcInNjb3BlXCI7XG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGlzIGFuIGZmdCBzY29wZVxuICAgICAgICB2YXIgaXNGRlQgPSBTdHJpbmcoaSkuc3Vic3RyKDAsIDMpID09PSBcImZmdFwiO1xuICAgICAgICAvLyBEbyBzZXBhcmF0aW9uXG4gICAgICAgIGlmIChpc1Njb3BlKSB7XG4gICAgICAgICAgICBzY29wZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0FjdHVhbFVJKSB7XG4gICAgICAgICAgICB1aU5vZGVzW2ldID0gYWxsTm9kZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNGRlQpIHtcbiAgICAgICAgICAgIGZmdE5vZGVzW2ldID0gYWxsTm9kZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bmNhbGN1bGF0ZWRbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gcmVzdWx0c1xuICAgIHJldHVybiB7XG4gICAgICAgIHVuY2FsY3VsYXRlZE5vZGVzOiB1bmNhbGN1bGF0ZWQsXG4gICAgICAgIGFsbFNjb3Blczogc2NvcGVzLFxuICAgICAgICB1aU5vZGVzOiB1aU5vZGVzLFxuICAgICAgICBmZnROb2RlczogZmZ0Tm9kZXNcbiAgICB9O1xufVxuLy8gR2VuZXJhdGUgY29ubmVjdGlvbiBkaWN0aW9uYXJ5XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb25uZWN0aW9uRGljdGlvbmFyeShhbGxDb25uZWN0aW9ucykge1xuICAgIHZhciBjb25uZWN0aW9uRGljdGlvbmFyeSA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbm5lY3RvclN0YXJ0ID0gYWxsQ29ubmVjdGlvbnNbaV0uY29ubmVjdG9yU3RhcnQ7XG4gICAgICAgIHZhciBjb25uZWN0b3JFbmQgPSBhbGxDb25uZWN0aW9uc1tpXS5jb25uZWN0b3JFbmQ7XG4gICAgICAgIHZhciBjb25uZWN0b3JTdGFydENvbWJpbmVkID0gY29ubmVjdG9yU3RhcnQubm9kZUlkICsgXCI6XCIgKyBjb25uZWN0b3JTdGFydC5zZXR0aW5nSWQ7XG4gICAgICAgIHZhciBjb25uZWN0b3JFbmRDb21iaW5lZCA9IGNvbm5lY3RvckVuZC5ub2RlSWQgKyBcIjpcIiArIGNvbm5lY3RvckVuZC5zZXR0aW5nSWQ7XG4gICAgICAgIGNvbm5lY3Rpb25EaWN0aW9uYXJ5W2Nvbm5lY3RvclN0YXJ0Q29tYmluZWRdID0gY29ubmVjdG9yRW5kQ29tYmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjb25uZWN0aW9uRGljdGlvbmFyeTtcbn1cbi8vIENhbGN1bGF0ZSBvYmplY3Qgc2l6ZVxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFNpemUob2JqKSB7XG4gICAgdmFyIGMgPSAwO1xuICAgIGZvciAodmFyIGkgaW4gb2JqKVxuICAgICAgICBjKys7XG4gICAgcmV0dXJuIGMrKztcbn1cbi8vIENoZWNrIGlmIG5vZGUgd2FzIGNhbGN1bGF0ZWQgYWxyZWFkeVxuZXhwb3J0IGZ1bmN0aW9uIHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzLCBub2RlS2V5LCBvdXRwdXRLZXkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGN1bGF0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBTcGxpdCBzdHJpbmcgZnJvbSBjYWxjdWxhdGVkIG5vZGVzIGFycmF5IGFuZCBnZXQgbm9kZSBhbmQgb3V0cHV0IGtleXNcbiAgICAgICAgdmFyIHNwbGl0dGVkID0gY2FsY3VsYXRlZE5vZGVzW2ldLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgdmFyIGNhbGN1bGF0ZWROb2RlID0gc3BsaXR0ZWRbMF07XG4gICAgICAgIHZhciBjYWxjdWxhdGVkT3V0cHV0ID0gc3BsaXR0ZWRbMV07XG4gICAgICAgIGlmIChjYWxjdWxhdGVkTm9kZSA9PT0gbm9kZUtleSAmJiBjYWxjdWxhdGVkT3V0cHV0ID09PSBvdXRwdXRLZXkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLy8gR2V0IG5vZGVJZCBhbmQgc2V0dGluZ0lkIG9mIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBjb25uZWN0aW9uOlxuZXhwb3J0IGZ1bmN0aW9uIGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBjb25uZWN0b3JJbnB1dCwgY29ubmVjdG9yT3V0cHV0KSB7XG4gICAgaWYgKGNvbm5lY3RvcklucHV0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgY29ubmVjdG9yIHN0YXJ0cy4uLlwiKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3RvciA9IGFsbENvbm5lY3Rpb25zW2ldO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIHN0YXJ0XG4gICAgICAgICAgICBpZiAoY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0Lm5vZGVJZCA9PT0gY29ubmVjdG9ySW5wdXQubm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5zZXR0aW5nSWQgPT09IGNvbm5lY3RvcklucHV0LnNldHRpbmdJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JFbmQubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJTZXR0aW5nSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JFbmQuc2V0dGluZ0lkXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbm5lY3Rvck91dHB1dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNjYW5uaW5nIGNvbm5lY3RvciBlbmRzLi4uIFwiLCBhbGxDb25uZWN0aW9ucy5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbENvbm5lY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdG9yID0gYWxsQ29ubmVjdGlvbnNbaV07XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNvbXBhcmluZyBmb2xsb3dpbmcgY29ubmVjdG9yczogXCIsIGNvbm5lY3Rvci5jb25uZWN0b3JFbmQsIGNvbm5lY3Rvck91dHB1dClcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGNvbm5lY3RvciBlbmRcbiAgICAgICAgICAgIGlmIChjb25uZWN0b3IuY29ubmVjdG9yRW5kLm5vZGVJZCA9PT0gY29ubmVjdG9yT3V0cHV0Lm5vZGVJZCkge1xuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZCA9PT0gY29ubmVjdG9yT3V0cHV0LnNldHRpbmdJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclNldHRpbmdJZDogY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0LnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBvdGhlck5vZGVJZDogbnVsbCxcbiAgICAgICAgb3RoZXJTZXR0aW5nSWQ6IG51bGxcbiAgICB9O1xufVxuLy8gQ2hlY2sgaWYgYWxsIGNvbm5lY3RlZCBpbnB1dHMgaW4gdGhlIG5vZGUgYXJlIGNvbm5lY3RlZCB0byB0aGUgb3V0cHV0cyB0aGF0IHdlcmUgYWxyZWFkeSBjYWxjdWxhdGVkIG9yIGFyZSBub3QgY29ubmVjdGVkXG5leHBvcnQgZnVuY3Rpb24gYWxsSW5wdXRzQ2FsY3VsYXRlZChub2RlSWQsIGlucHV0cywgYWxsQ29ubmVjdGlvbnMsIGNhbGN1bGF0ZWROb2Rlcykge1xuICAgIHZhciBkYXRhID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGN1cnJlbnREYXRhID0gZmFsc2U7XG4gICAgICAgIHZhciBfYSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7IG5vZGVJZDogbm9kZUlkLCBzZXR0aW5nSWQ6IGlucHV0c1tpXS50aXRsZSB9KSwgb3RoZXJOb2RlSWQgPSBfYS5vdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQgPSBfYS5vdGhlclNldHRpbmdJZDtcbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGNvbm5lY3RlZFxuICAgICAgICBpZiAob3RoZXJOb2RlSWQgJiYgb3RoZXJTZXR0aW5nSWQpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdhcyBjYWxjdWxhdGVkXG4gICAgICAgICAgICBpZiAod2FzQ2FsY3VsYXRlZChjYWxjdWxhdGVkTm9kZXMsIG90aGVyTm9kZUlkLCBvdGhlclNldHRpbmdJZCkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0YSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgaW5wdXQgaXMgbm90IGNvbm5lY3RlZFxuICAgICAgICAgICAgY3VycmVudERhdGEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEucHVzaChjdXJyZW50RGF0YSk7XG4gICAgfVxuICAgIGZvciAodmFyIGQgaW4gZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGFbZF0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIHNwZWNpZmljIG91dHB1dCBvZiB0aGUgbm9kZVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU91dHB1dChub2RlSWQsIG91dHB1dEtleSwgY3VycmVudE5vZGUsIGFsbENvbm5lY3Rpb25zKSB7XG4gICAgdmFyIGUgPSBcIlwiO1xuICAgIHZhciBnZW5lcmF0b3JJZCA9IGlzR2VuZXJhdG9yKGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuICAgIC8vIENoZWNrIGlmIG91dHB1dCBpcyBhIGdlbmVyYXRvclxuICAgIGlmIChnZW5lcmF0b3JJZCAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgdmFyIG91dHB1dEdlbmVyYXRvciA9IGN1cnJlbnROb2RlLmdlbmVyYXRvcnNbZ2VuZXJhdG9ySWRdO1xuICAgICAgICAvLyBHZW5lcmF0ZSB0b2tlbnNcbiAgICAgICAgdmFyIHRva2VucyA9IHRva2VuaXplR2VuZXJhdG9yKG91dHB1dEdlbmVyYXRvci52YWx1ZSwgbm9kZUlkKTtcbiAgICAgICAgLy8gU2F2ZSB2YXJpYWJsZXMgZmlyc3RcbiAgICAgICAgZSArPSBzYXZlVmFyaWFibGVzKG5vZGVJZCwgY3VycmVudE5vZGUsIHRva2VucywgYWxsQ29ubmVjdGlvbnMpO1xuICAgICAgICAvLyBTYXZlIG91dHB1dFxuICAgICAgICBlICs9IHRva2VuVG9Kcyhub2RlSWQsIG91dHB1dEdlbmVyYXRvci50aXRsZSwgdG9rZW5zKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4ZTogZSxcbiAgICAgICAgICAgIHdhc1N1Y2Nlc3NmdWw6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGlucHV0SWQgPSBpc0lucHV0KGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuICAgIGlmIChpbnB1dElkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IHNhdmVJbnB1dFZhcmlhYmxlKGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUlkLCBvdXRwdXRLZXksIGlucHV0SWQpO1xuICAgICAgICBlICs9IFwidmFyIFwiICsgbm9kZUlkICsgb3V0cHV0S2V5ICsgXCIgPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gXCIgKyBub2RlSWQgKyBjdXJyZW50Tm9kZS5pbnB1dHNbaW5wdXRJZF0udGl0bGUgKyBcIn07XFxuXCI7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleGU6IGUsXG4gICAgICAgICAgICB3YXNTdWNjZXNzZnVsOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBzZXR0aW5nSWQgPSBpc1NldHRpbmcoY3VycmVudE5vZGUsIG91dHB1dEtleSk7XG4gICAgaWYgKHNldHRpbmdJZCAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgZSArPSBcInZhciBcIiArIG5vZGVJZCArIG91dHB1dEtleSArIFwiID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuIFwiICsgY3VycmVudE5vZGUuc2V0dGluZ3Nbc2V0dGluZ0lkXS52YWx1ZSArIFwifTtcXG5cIjtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4ZTogZSxcbiAgICAgICAgICAgIHdhc1N1Y2Nlc3NmdWw6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXhlOiBcIlwiLFxuICAgICAgICB3YXNTdWNjZXNzZnVsOiBmYWxzZVxuICAgIH07XG59XG5mdW5jdGlvbiBzYXZlVmFyaWFibGVzKG5vZGVLZXksIG5vZGUsIGNvZGUsIGFsbENvbm5lY3Rpb25zKSB7XG4gICAgdmFyIG5ld0V4ZWN1dGFibGUgPSBcIlwiO1xuICAgIGZvciAodmFyIHMgPSAwOyBzIDwgY29kZS5sZW5ndGg7IHMrKykge1xuICAgICAgICBpZiAoY29kZVtzXS50eXBlID09PSBcInZhclwiKSB7XG4gICAgICAgICAgICB2YXIgdmFyTmFtZSA9IFN0cmluZyhjb2RlW3NdLnZhbHVlKTtcbiAgICAgICAgICAgIHZhciB2YXJpYWJsZU5hbWUgPSB2YXJOYW1lLnN1YnN0cihub2RlS2V5Lmxlbmd0aCwgdmFyTmFtZS5sZW5ndGgpO1xuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gSUYgU1BFQ0lBTCBDQVNFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgaWYgKHZhck5hbWUgPT09IFwiUElcIiB8fCB2YXJOYW1lID09PSBcInRpbWVcIilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIElOUFVUIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBpbnB1dCBpbmRleFxuICAgICAgICAgICAgdmFyIGlucHV0S2V5ID0gaXNJbnB1dChub2RlLCB2YXJpYWJsZU5hbWUpO1xuICAgICAgICAgICAgLy8gSWYgdmFyaWFibGUgaXMgdGhlIGlucHV0IChpZiBub3QgaW5wdXQgaXQgd2lsbCBiZSBJbmZpbml0eSlcbiAgICAgICAgICAgIGlmIChpbnB1dEtleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTYXZlXG4gICAgICAgICAgICAgICAgbmV3RXhlY3V0YWJsZSArPSBzYXZlSW5wdXRWYXJpYWJsZShub2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUtleSwgdmFyaWFibGVOYW1lLCBpbnB1dEtleSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEZvdW5kIHZhcmlhYmxlIGluIGlucHV0cyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG4gICAgICAgICAgICAgICAgLy8gQW5kIGNvbnRpbnVlIHRvIHRoZSBuZXh0IHN0ZXAgaW4gdGhlIHRva2VuaXNlZCBnZW5lcmF0b3IgY29kZVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSUYgR0VORVJBVE9SIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBnZW5lcmF0b3IgaW5kZXhcbiAgICAgICAgICAgIHZhciBnZW5lcmF0b3JLZXkgPSBpc0dlbmVyYXRvcihub2RlLCB2YXJpYWJsZU5hbWUpO1xuICAgICAgICAgICAgLy8gSWYgZ2VuZXJhdG9yIGluZGV4IGlzIG5vdCBhbiBJbmZpbml0eSwgdGhlIHNldHRpbmcgaXMgdGhlIGdlbmVyYXRvciwgYW5kIHNob3VsZCBiZSBwcm9jZXNzZWQgYXMgb25lXG4gICAgICAgICAgICBpZiAoZ2VuZXJhdG9yS2V5ICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICAgIHZhciBnZW5lcmF0b3IgPSBub2RlLmdlbmVyYXRvcnNbZ2VuZXJhdG9yS2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gdG9rZW5pemVHZW5lcmF0b3IoZ2VuZXJhdG9yLnZhbHVlLCBub2RlS2V5KTtcbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgdG9rZW5zLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgZ2VuZXJhdG9yIHRpdGxlXG4gICAgICAgICAgICAgICAgbmV3RXhlY3V0YWJsZSArPSB0b2tlblRvSnMobm9kZUtleSwgZ2VuZXJhdG9yLnRpdGxlLCB0b2tlbnMpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBGb3VuZCB2YXJpYWJsZSBpbiBnZW5lcmF0b3JzICR7dmFyaWFibGVOYW1lfSAtICR7bm9kZUtleX1gKTtcbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0byB0aGUgbmV4dCB0b2tlblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSUYgU0VUVElORyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgc2V0dGluZyBpbmRleFxuICAgICAgICAgICAgdmFyIHNldHRpbmdLZXkgPSBpc1NldHRpbmcobm9kZSwgdmFyaWFibGVOYW1lKTtcbiAgICAgICAgICAgIC8vIElmIHNldHRpbmcgaW5kZXggaXMgbm90IGluZmluaXR5IC0gaXQncyBhIG1hdGNoIVxuICAgICAgICAgICAgaWYgKHNldHRpbmdLZXkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEZvdW5kIHZhcmlhYmxlIGluIHNldHRpbmdzICR7dmFyaWFibGVOYW1lfSAtICR7bm9kZUtleX1gKTtcbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IFwidmFyIFwiICsgbm9kZUtleSArIHZhcmlhYmxlTmFtZSArIFwiID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuIFwiICsgbm9kZS5zZXR0aW5nc1tzZXR0aW5nS2V5XS52YWx1ZSArIFwiIH07XFxuXCI7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBOT1QgQU5ZIE9GIFRIUkVFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIElmIG5vdCBvbmUgb2YgcHJldmlvdXMgdGhyZWUsIGFsZXJ0IHVzZXIuXG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IFwiYWxlcnQoXFxcIkNvdWxkbid0IGZpbmQgZ2VuZXJhdG9yIHZhcmlhYmxlIGluIHRoZSBpbnB1dHMsIGdlbmVyYXRvcnMgb3Igc2V0dGluZ3MhIFwiICsgbm9kZUtleSArIFwiIC0gXCIgKyB2YXJOYW1lICsgXCJcXFwiKTtcXG5cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlW3NdLnR5cGUgPT09IFwibWF0aFwiIHx8IGNvZGVbc10udHlwZSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgY29kZVtzXS5jb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0V4ZWN1dGFibGU7XG59XG5mdW5jdGlvbiBzYXZlSW5wdXRWYXJpYWJsZShub2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUtleSwgc2V0dGluZ0tleSwgaW5kZXgpIHtcbiAgICB2YXIgbmV3RXhlY3V0YWJsZTtcbiAgICB2YXIgY29ubmVjdG9yRW5kID0ge1xuICAgICAgICBub2RlSWQ6IG5vZGVLZXksXG4gICAgICAgIHNldHRpbmdJZDogc2V0dGluZ0tleVxuICAgIH07XG4gICAgdmFyIF9hID0gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoYWxsQ29ubmVjdGlvbnMsIG51bGwsIGNvbm5lY3RvckVuZCksIG90aGVyTm9kZUlkID0gX2Eub3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkID0gX2Eub3RoZXJTZXR0aW5nSWQ7XG4gICAgLy8gY29uc29sZS5sb2coYFRyYWNpbmcgYmFjayB0aGUgaW5wdXQ6ICR7bm9kZUtleX06JHtzZXR0aW5nS2V5fSAtPiAke290aGVyTm9kZUlkfToke290aGVyU2V0dGluZ0lkfWApO1xuICAgIC8vIElmIG5vZGUgaXMgY29ubmVjdGVkXG4gICAgaWYgKG90aGVyTm9kZUlkICYmIG90aGVyU2V0dGluZ0lkKSB7XG4gICAgICAgIC8vIFNhdmUgXG4gICAgICAgIG5ld0V4ZWN1dGFibGUgPSBcInZhciBcIiArIG5vZGVLZXkgKyBzZXR0aW5nS2V5ICsgXCIgPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gXCIgKyBvdGhlck5vZGVJZCArIG90aGVyU2V0dGluZ0lkICsgXCIodGltZSl9O1xcblwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gU2F2ZSBkZWZhdWx0IHZhbHVlXG4gICAgICAgIG5ld0V4ZWN1dGFibGUgPSBcInZhciBcIiArIG5vZGVLZXkgKyBzZXR0aW5nS2V5ICsgXCIgPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gXCIgKyBub2RlLmlucHV0c1tpbmRleF0uZGVmYXVsdCArIFwifTtcXG5cIjtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0V4ZWN1dGFibGU7XG59XG5mdW5jdGlvbiBpc0lucHV0KG5vZGUsIHNldHRpbmdLZXkpIHtcbiAgICAvLyBDaGVjayBpZiB2YXJpYWJsZSBpcyBpbiBpbnB1dHNcbiAgICBpZiAobm9kZS5pbnB1dHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gSWYgdmFyaWFibGUgaXMgdGhlIGlucHV0LCByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgaWYgKG5vZGUuaW5wdXRzW2ldLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEluZmluaXR5O1xufVxuZnVuY3Rpb24gaXNHZW5lcmF0b3Iobm9kZSwgc2V0dGluZ0tleSkge1xuICAgIC8vIFNjYW4gZ2VuZXJhdG9yc1xuICAgIGlmIChub2RlLmdlbmVyYXRvcnMpIHtcbiAgICAgICAgaWYgKG5vZGUuZ2VuZXJhdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBnID0gMDsgZyA8IG5vZGUuZ2VuZXJhdG9ycy5sZW5ndGg7IGcrKykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmdlbmVyYXRvcnNbZ10udGl0bGUgPT09IHNldHRpbmdLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cbmZ1bmN0aW9uIGlzU2V0dGluZyhub2RlLCBzZXR0aW5nS2V5KSB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYgKG5vZGUuc2V0dGluZ3MpIHtcbiAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBub2RlLnNldHRpbmdzLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gc2V0dGluZ0tleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3VjaElucHV0cyhhbGxOb2Rlcykge1xuICAgIHZhciBuZXdDb2xsZWN0aW9uID0ge307XG4gICAgdmFyIG5ld1RvdWNoQ29sbGVjdGlvbiA9IHt9O1xuICAgIGZvciAodmFyIG4gaW4gYWxsTm9kZXMpIHtcbiAgICAgICAgaWYgKG4uc3Vic3RyKDAsIDEwKSA9PT0gXCJ0b3VjaElucHV0XCIpIHtcbiAgICAgICAgICAgIG5ld1RvdWNoQ29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3Q29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHVuY2FsY3VsYXRlZE5vZGVzOiBuZXdDb2xsZWN0aW9uLFxuICAgICAgICB0b3VjaE5vZGVzOiBuZXdUb3VjaENvbGxlY3Rpb25cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgdmFyIGUgPSBcImxldCB0ID0gXCI7XG4gICAgZSArPSBcIihmdW5jdGlvbigpe1xcbiAgICAgICAgbGV0IHIgPSBbXTtcXG4gICAgICAgIGZvcihsZXQgaSA9IFwiICsgc3RhcnQgKyBcIjsgaSA8IFwiICsgc3RvcCArIFwiOyBpKz1cIiArIHN0ZXAgKyBcIikge1xcbiAgICAgICAgICAgIHIucHVzaChpKTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiByO1xcbiAgICB9KSgpO1wiO1xuICAgIHJldHVybiBlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyhub2Rlcykge1xuICAgIHZhciBlID0gXCJcIjtcbiAgICBmb3IgKHZhciBpIGluIG5vZGVzKSB7XG4gICAgICAgIHZhciBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIHZhciBzZW5zaXRpdml0eSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIGF0dGFjaGVkU2NvcGUgPSB2b2lkIDA7XG4gICAgICAgIC8vIFNlcGFyYXRlIHNldHRpbmdzXG4gICAgICAgIGZvciAodmFyIHMgaW4gbm9kZS5zZXR0aW5ncykge1xuICAgICAgICAgICAgaWYgKG5vZGUuc2V0dGluZ3Nbc10udGl0bGUgPT09IFwiU2Vuc2l0aXZpdHlcIikge1xuICAgICAgICAgICAgICAgIHNlbnNpdGl2aXR5ID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUuc2V0dGluZ3Nbc10udGl0bGUgPT09IFwiU2NvcGVcIikge1xuICAgICAgICAgICAgICAgIGF0dGFjaGVkU2NvcGUgPSBub2RlLnNldHRpbmdzW3NdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRvdWNoIG5vZGUgaXMgbm90IGNvcnJlY3RseSBmb3JtYXR0ZWQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBvZmZzZXRTY3JpcHQgPSBcImlmKCFkaWRBdHRhY2hcIiArIGkgKyBcIikge1xcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJcIiArIGF0dGFjaGVkU2NvcGUudmFsdWUgKyBcIlxcXCIpLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKGUpIHtcXG4gICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBudWxsO1xcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2Vtb3ZlID0gbnVsbDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICB3aW5kb3cub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBpICsgXCJPZmZzZXRYRGF0YSArPSBlLm1vdmVtZW50WCpcIiArIHBhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpICsgXCI7XFxuICAgICAgICAgICAgICAgICAgICBcIiArIGkgKyBcIk9mZnNldFlEYXRhICs9IGUubW92ZW1lbnRZKlwiICsgcGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSkgKyBcIjtcXG5cXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGRhdGUoKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwiXCIgKyBhdHRhY2hlZFNjb3BlLnZhbHVlICsgXCJcXFwiKS5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZSkge1xcbiAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25YID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xcbiAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZPSBlLnRvdWNoZXNbMF0ucGFnZVk7XFxuXFxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNoZW5kID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2hlbmQgPSBudWxsO1xcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZSkge1xcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50WCA9IHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblggLSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50WSA9IHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgLSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICBcIiArIGkgKyBcIk9mZnNldFhEYXRhICs9IG1vdmVtZW50WCpcIiArIHBhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpICsgXCI7XFxuICAgICAgICAgICAgICAgICAgICBcIiArIGkgKyBcIk9mZnNldFlEYXRhICs9IG1vdmVtZW50WSpcIiArIHBhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpICsgXCI7XFxuXFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBkYXRlKCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25YID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfTtcXG5cXG4gICAgICAgICAgICBkaWRBdHRhY2hcIiArIGkgKyBcIk9mZnNldFggPSB0cnVlO1xcbiAgICAgICAgICAgIGRpZEF0dGFjaFwiICsgaSArIFwiT2Zmc2V0WSA9IHRydWU7XFxuICAgICAgICB9XFxuXCI7XG4gICAgICAgIGZvciAodmFyIG8gaW4gbm9kZS5vdXRwdXRzKSB7XG4gICAgICAgICAgICBlICs9IFwidmFyIFwiICsgaSArIG5vZGUub3V0cHV0c1tvXS50aXRsZSArIFwiRGF0YSA9IDE7XFxuXCI7XG4gICAgICAgICAgICBlICs9IFwidmFyIGRpZEF0dGFjaFwiICsgaSArIFwiID0gZmFsc2U7XFxuXCI7XG4gICAgICAgICAgICBlICs9IFwidmFyIFwiICsgaSArIG5vZGUub3V0cHV0c1tvXS50aXRsZSArIFwiID0gZnVuY3Rpb24odGltZSkgeyByZXR1cm4gXCIgKyBpICsgbm9kZS5vdXRwdXRzW29dLnRpdGxlICsgXCJEYXRhIH07XFxuXCI7XG4gICAgICAgIH1cbiAgICAgICAgZSArPSBvZmZzZXRTY3JpcHQ7XG4gICAgfVxuICAgIHJldHVybiBlO1xufVxuIiwiLy8gQXMgYSByZW1pbmRlcjpcbi8vIE9uZSBpdGVtIGluIGFuIGFycmF5IG9mIHRva2VucyBjYW4gb25seSBiZSBhbiBvYmplY3QgYW5kIG9ubHkgaGF2ZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbi8vICogdHlwZSAgICAgICAgICAgLSBmb3IgZXZlcnkgdG9rZW5cbi8vICogdmFsdWUgICAgICAgICAgLSBmb3IgZXZlcnkgdG9rZW5cbi8vICogY29kZSAgLSBmb3Igc2NvcGVzIChtYXRoL3JlZ3VsYXIpXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlblRvSnMgKG5vZGVJZCwgdmFyaWFibGVOYW1lLCBqc29uVG9rZW5zKSB7XG4gICAgbGV0IGV4ZWN1dGFibGVTdHJpbmcgPSBgdmFyICR7bm9kZUlkfSR7dmFyaWFibGVOYW1lfSA9IGZ1bmN0aW9uKHRpbWUpIHsgcmV0dXJuIGA7XG4gICAgXG4gICAgZXhlY3V0YWJsZVN0cmluZyArPSBjYWxjdWxhdGVDb2RlKFsuLi5qc29uVG9rZW5zXSlcblxuICAgIHJldHVybiBleGVjdXRhYmxlU3RyaW5nICsgXCJ9O1xcblwiO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVDb2RlKGpzb24pIHtcbiAgICBsZXQgZXhlY3V0YWJsZVN0cmluZyA9IFwiXCI7XG5cbiAgICBpZihqc29uID09IG51bGwpIHJldHVybiBcIlwiO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gVmFyaWFibGVzIGZvciBjb252ZW5pZW5jZVxuICAgICAgICBjb25zdCB0b2tlbiA9IGpzb25baV07XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0b2tlbi50eXBlO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRva2VuLnZhbHVlO1xuXG4gICAgICAgIC8vIEFjdHVhbCBsb2dpY1xuICAgICAgICBpZih0eXBlICE9IFwic2NvcGVcIiAmJiB0eXBlICE9IFwibWF0aFwiKSB7XG4gICAgICAgICAgICAvLyBPbmUgb2YgdGhlIGJhc2ljIHR5cGVzXG5cbiAgICAgICAgICAgIGlmKHZhbHVlID09PSAnUEknKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguUElcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ2YXJcIiAmJiB2YWx1ZSAhPT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGAke3ZhbHVlfSh0aW1lKWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJtYXRoXCIpIHtcbiAgICAgICAgICAgIC8vIE1hdGggZnVuY3Rpb25cblxuICAgICAgICAgICAgaWYodmFsdWUgPT09IFwic2luXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmdW5jdGlvbnMsIHJlY3Vyc2V2bHkgZ2VuZXJhdGUgc3RyaW5nIGZyb20gdGhlIGNvZGUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguc2luKFwiO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKTtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09PSBcImNvc1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBzdXBwb3J0ZWQgZnVuY3Rpb25zLCByZWN1cnNldmx5IGdlbmVyYXRlIHN0cmluZyBmcm9tIHRoZSBjb2RlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLmNvcyhcIjtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PT0gXCJ0YW5cIikge1xuICAgICAgICAgICAgICAgIC8vIElmIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZ1bmN0aW9ucywgcmVjdXJzZXZseSBnZW5lcmF0ZSBzdHJpbmcgZnJvbSB0aGUgY29kZSBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC50YW4oXCI7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIpXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIElmIG5vdCBzdXBwb3J0ZWQgZnVuY3Rpb24sIHRocm93IGVycm9yIHRvIHRoZSBjb25zb2xlXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuc3VwcG9ydGVkIG1hdGggZnVuY3Rpb24gISEhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVndWxhciBzY29wZVxuXG4gICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKFwiICsgY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4ZWN1dGFibGVTdHJpbmc7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc3R5bGVzID0gKHNldHRpbmdzQ291bnQsIHNjb3BlQ291bnQpID0+IHtcbiAgICAvLyBjb25zdCBpc09ubHlTY29wZXMgPSAoc2V0dGluZ3NDb3VudCA9PT0gMCAmJiBzY29wZUNvdW50ID4gMCk7XG4gICAgLy8gY29uc3QgaXNPbmx5U2V0dGluZ3MgPSAoc2V0dGluZ3NDb3VudCA+IDAgJiYgc2NvcGVDb3VudCA9PT0gMCk7XG4gICAgY29uc3QgaXNTZXR0aW5nc0FuZFNjb3BlcyA9IChzZXR0aW5nc0NvdW50ID4gMCAmJiBzY29wZUNvdW50ID4gMCk7XG4gICAgXG4gICAgY29uc3QgaXNEaXZpZGFibGVCeVR3byA9IHNjb3BlQ291bnQlMiA9PSAwO1xuXG4gICAgcmV0dXJuIGAjc2lnbmFscy1lbWJlZGRpbmctY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAke2lzU2V0dGluZ3NBbmRTY29wZXMgP1xuICAgICAgICAgICAgYGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGNhbGMoMTAwJSAtIDMwMHB4KTtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtgIFxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuc2lnbmFscy1jYW52YXMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNhbnZhcy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjc2lnbmFscy12aWV3cyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgJHshaXNEaXZpZGFibGVCeVR3byA/IGBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgke3Njb3BlQ291bnR9LCAke3BhcnNlRmxvYXQoMTAwL3Njb3BlQ291bnQpLnRvRml4ZWQoMil9JSk7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztgXG4gICAgICAgIDogYGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KCR7c2NvcGVDb3VudC8yfSwgMWZyKTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO2B9XG4gICAgICAgICR7aXNTZXR0aW5nc0FuZFNjb3BlcyA/IGBncmlkLWNvbHVtbjogMiAvIDM7YCA6ICcnfVxuICAgIH1cblxuICAgICR7aXNTZXR0aW5nc0FuZFNjb3BlcyA/IGAjc2lnbmFscy1zZXR0aW5ncyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAjc2lnbmFscy1zZXR0aW5ncy1saXN0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNGZyO1xuICAgICAgICBncmlkLWdhcDogNXB4O1xuICAgIH1cblxuICAgIC5zaWduYWxzLXNldHRpbmdzLXNsaWRlciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDRmciAxZnI7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtc2V0dGluZ3Mtc2xpZGVyIGRpdiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0gaDYge1xuICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgICBmb250LXNpemU6IDEycHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgLnNpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtIGlucHV0IHtcblxuICAgIH1cbiAgICBcbiAgICAuc2lnbmFscy1zZXR0aW5ncy1saXN0LWxhYmVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB0O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfWA6Jyd9XG5gfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGpzeERvbSAobm9kZXMpIHtcbiAgICBsZXQgY2FudmFzTm9kZXMgPSBbXTtcblxuICAgIC8vIEdldCBhbGwga2luZHMgb2Ygb3V0cHV0IG5vZGVzXG4gICAgZm9yKGxldCBrZXkgaW4gbm9kZXMpIHtcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZXNba2V5XTtcblxuICAgICAgICBpZihTdHJpbmcoa2V5KS5zdWJzdHIoMCwgNSkgPT09IFwic2NvcGVcIiB8fCBTdHJpbmcoa2V5KS5zdWJzdHIoMCwgMykgPT09IFwiZmZ0XCIpIHtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLmlkID0ga2V5O1xuICAgICAgICAgICAgY2FudmFzTm9kZXMucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc2V0dGluZ3NOb2RlcyA9IFtdO1xuICAgIGxldCBjYXRlZ29yaWVzID0gW107XG5cbiAgICBcbiAgICBmb3IobGV0IGtleSBpbiBub2Rlcykge1xuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2Rlc1trZXldO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaXNUaGlyZExldHRlclVwcGVyQ2FzZSA9IFN0cmluZyhrZXkpLnN1YnN0cigyLCAxKS50b1VwcGVyQ2FzZSgpID09PSBTdHJpbmcoa2V5KS5zdWJzdHIoMiwgMSk7XG4gICAgICAgIGNvbnN0IGlzVUkgPSBTdHJpbmcoa2V5KS5zdWJzdHIoMCwgMikgPT09IFwidWlcIjtcbiAgICAgICAgY29uc3QgaXNBY3R1YWxVSSA9IGlzVUkgJiYgaXNUaGlyZExldHRlclVwcGVyQ2FzZTtcbiAgICAgICAgXG4gICAgICAgIGlmKGlzQWN0dWFsVUkpIHtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeVNhdmVkQWxyZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBjdXJyZW50Tm9kZS5zZXR0aW5nc1swXS52YWx1ZTtcblxuICAgICAgICAgICAgZm9yKGxldCBjIGluIGNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgICAgICBpZihjYXRlZ29yaWVzW2NdID09IGN1cnJlbnRDYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVNhdmVkQWxyZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIWNhdGVnb3J5U2F2ZWRBbHJlYWR5KSB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGN1cnJlbnRDYXRlZ29yeSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnROb2RlLmlkID0ga2V5O1xuICAgICAgICAgICAgc2V0dGluZ3NOb2Rlcy5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZXR0aW5nc05vZGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBjb25zdCBjYXQxID0gYS5zZXR0aW5nc1swXS52YWx1ZTtcbiAgICAgICAgY29uc3QgY2F0MiA9IGIuc2V0dGluZ3NbMF0udmFsdWU7XG5cbiAgICAgICAgaWYoY2F0MSA9PT0gY2F0Mikge1xuICAgICAgICAgICAgY29uc3Qgb3JkZXIxID0gcGFyc2VJbnQoYS5zZXR0aW5nc1syXS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBvcmRlcjIgPSBwYXJzZUludChiLnNldHRpbmdzWzJdLnZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIG9yZGVyMSAtIG9yZGVyMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdEFyciA9IFtjYXQxLCBjYXQyXTtcbiAgICAgICAgICAgIGNhdEFyci5zb3J0KCk7XG5cbiAgICAgICAgICAgIGlmKGNhdEFyclswXSA9PT0gY2F0MSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNvcnQgYnkgY2F0ZWdvcnk6XG5cbiAgICBjYXRlZ29yaWVzLnNvcnQoKTtcblxuICAgIGxldCBuZXdTZXR0aW5nc05vZGVzID0gW107XG5cbiAgICBmb3IobGV0IGMgaW4gY2F0ZWdvcmllcykge1xuICAgICAgICBmb3IobGV0IHMgaW4gc2V0dGluZ3NOb2Rlcykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSBzZXR0aW5nc05vZGVzW3NdO1xuICAgICAgICAgICAgaWYoY3VycmVudE5vZGUuc2V0dGluZ3NbMF0udmFsdWUgPT09IGNhdGVnb3JpZXNbY10pIHtcbiAgICAgICAgICAgICAgICBuZXdTZXR0aW5nc05vZGVzLnB1c2goY3VycmVudE5vZGUpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzZXR0aW5nc05vZGVzW3NdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGUgRHluYW1pYyBTdHVmZlxuICAgIGNvbnN0IGNhbnZhc0pzeCA9IGNhbnZhc05vZGVzLmxlbmd0aCA+IDAgPyBjYW52YXNOb2Rlcy5tYXAobm9kZSA9PiB7XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9eydjYW52YXMtY29udGFpbmVyJ30ga2V5PXtub2RlLmlkfT5cbiAgICAgICAgICAgIDxjYW52YXMgY2xhc3NOYW1lPVwic2lnbmFscy1jYW52YXNcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7bm9kZS5pZH1gfVxuICAgICAgICAgICAgPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfSkgOiBudWxsO1xuXG4gICAgbGV0IGxhc3RDYXRlZ29yeSA9IFwiXCI7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBuZXdTZXR0aW5nc05vZGVzLmxlbmd0aCA+IDAgPyBuZXdTZXR0aW5nc05vZGVzLm1hcChub2RlID0+IHtcbiAgICAgICAgbGV0IGlucHV0RWxlbWVudDtcbiAgICAgICAgbGV0IGlzU2xpZGVyID0gZmFsc2U7XG4gICAgICAgIGxldCBzaG91bGRTYXZlQ2F0ZWdvcnkgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBub2RlLnNldHRpbmdzWzBdLnZhbHVlO1xuXG4gICAgICAgIGlmKGxhc3RDYXRlZ29yeSAhPT0gY3VycmVudENhdGVnb3J5KSB7XG4gICAgICAgICAgICBzaG91bGRTYXZlQ2F0ZWdvcnkgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdENhdGVnb3J5ID0gY3VycmVudENhdGVnb3J5O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihub2RlLmlkLnN1YnN0cigwLCA4KSA9PT0gXCJ1aU51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyAndWlOdW1iZXInIHNldHRpbmdzOlxuICAgICAgICAgICAgLy8gMCA6IENhdGVnb3J5IC0gQ2F0ZWdvcnkgdGhhdCBjb250cm9sbGVycyBhcmUgc29ydGVkIGJ5LlxuICAgICAgICAgICAgLy8gMSA6IExhYmVsICAgIC0gTGFiZWwgbmV4dCB0byB0aGUgY29udHJvbGxlci5cbiAgICAgICAgICAgIC8vIDIgOiBPcmRlciAgICAtIFZlcnRpY2FsIHBvc2l0aW9uIG9mIHRoZSBjb250cm9sbGVyIGluIHRoZSBjYXRlZ29yeS5cbiAgICAgICAgICAgIC8vIDMgOiBEZWZhdWx0ICAtIERlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIC8vIDQgOiBNaW4gICAgICAtIE1pbmltdW0gdmFsdWVcbiAgICAgICAgICAgIC8vIDUgOiBNYXggICAgICAtIE1heGltdW0gdmFsdWVcbiAgICAgICAgICAgIC8vIDYgOiBTdGVwICAgICAtIFN0ZXAgb2YgdGhlIHZhbHVlXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQgPSAoPGlucHV0ICB0eXBlPXsnbnVtYmVyJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bm9kZS5pZCtcIklucHV0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25vZGUuc2V0dGluZ3NbM10udmFsdWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXtub2RlLnNldHRpbmdzWzRdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtub2RlLnNldHRpbmdzWzVdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17bm9kZS5zZXR0aW5nc1s2XS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfS8+KTtcbiAgICAgICAgfSBlbHNlIGlmKG5vZGUuaWQuc3Vic3RyKDAsIDgpID09PSBcInVpU2xpZGVyXCIpIHtcbiAgICAgICAgICAgIGlzU2xpZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICd1aVNsaWRlcicgc2V0dGluZ3M6XG4gICAgICAgICAgICAvLyAwIDogQ2F0ZWdvcnkgLSBDYXRlZ29yeSB0aGF0IGNvbnRyb2xsZXJzIGFyZSBzb3J0ZWQgYnkuXG4gICAgICAgICAgICAvLyAxIDogTGFiZWwgICAgLSBMYWJlbCBuZXh0IHRvIHRoZSBjb250cm9sbGVyLlxuICAgICAgICAgICAgLy8gMiA6IE9yZGVyICAgIC0gVmVydGljYWwgcG9zaXRpb24gb2YgdGhlIGNvbnRyb2xsZXIgaW4gdGhlIGNhdGVnb3J5LlxuICAgICAgICAgICAgLy8gMyA6IERlZmF1bHQgIC0gRGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgLy8gNCA6IE1pbiAgICAgIC0gTWluaW11bSB2YWx1ZVxuICAgICAgICAgICAgLy8gNSA6IE1heCAgICAgIC0gTWF4aW11bSB2YWx1ZVxuICAgICAgICAgICAgLy8gNiA6IFN0ZXAgICAgIC0gU3RlcCBvZiB0aGUgdmFsdWVcbiAgICAgICAgICAgIGlucHV0RWxlbWVudCA9ICg8aW5wdXQgIHR5cGU9eydyYW5nZSd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e25vZGUuaWQrXCJJbnB1dFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtub2RlLnNldHRpbmdzWzNdLnZhbHVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17bm9kZS5zZXR0aW5nc1s0XS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17bm9kZS5zZXR0aW5nc1s1XS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e25vZGUuc2V0dGluZ3NbNl0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX0vPik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXR1cm5zIG1lc3NhZ2UgaWYgdGhlIHR5cGUgaXMgdW5zb3Bwb3J0ZWRcbiAgICAgICAgICAgIGlucHV0RWxlbWVudCA9IDxkaXY+eyd1bnN1cHBvcnRlZCB0eXBlJ308L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHNob3VsZFNhdmVDYXRlZ29yeSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtub2RlLmlkICsgY3VycmVudENhdGVnb3J5fT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17J3NpZ25hbHMtc2V0dGluZ3MtbGlzdC1sYWJlbCd9PntjdXJyZW50Q2F0ZWdvcnl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17J3NpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtICcgKyAoaXNTbGlkZXIgPyBcInNpZ25hbHMtc2V0dGluZ3Mtc2xpZGVyXCIgOiBcIlwiKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17bm9kZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXsnc2lnbmFscy1zZXR0aW5ncy1saXN0LWl0ZW0tbGFiZWwnfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bm9kZS5pZCArIFwiTGFiZWxcIn0+e25vZGUuc2V0dGluZ3NbMV0udmFsdWV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dEVsZW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNTbGlkZXIgPyA8ZGl2IGlkPXtub2RlLmlkK1wiSW5kaWNhdG9yXCJ9Pntub2RlLnNldHRpbmdzWzNdLnZhbHVlfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoPGxpIGNsYXNzTmFtZT17J3NpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtICcgKyAoaXNTbGlkZXIgPyBcInNpZ25hbHMtc2V0dGluZ3Mtc2xpZGVyXCIgOiBcIlwiKX0gaWQ9e25vZGUuaWR9IGtleT17bm9kZS5pZH0+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17J3NpZ25hbHMtc2V0dGluZ3MtbGlzdC1pdGVtLWxhYmVsJ30gaWQ9e25vZGUuaWQgKyBcIkxhYmVsXCJ9Pntub2RlLnNldHRpbmdzWzFdLnZhbHVlfTwvaDY+XG4gICAgICAgICAgICAgICAge2lucHV0RWxlbWVudH1cbiAgICAgICAgICAgICAgICB7aXNTbGlkZXIgPyA8ZGl2IGlkPXtub2RlLmlkK1wiSW5kaWNhdG9yXCJ9Pntub2RlLnNldHRpbmdzWzNdLnZhbHVlfTwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgICA8L2xpPik7XG4gICAgICAgIH1cbiAgICB9KSA6IG51bGw7XG5cbiAgICAvLyBHZW5lcmF0ZSBGaW5hbCBKU1hcbiAgICBjb25zdCBTaWduYWxWaWV3cyA9IGNhbnZhc0pzeCA/XG4gICAgICAgIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduYWxzLXZpZXdzXCI+XG4gICAgICAgICAgICAgICAge2NhbnZhc0pzeH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgIGNvbnN0IFNldHRpbmdzSnN4ID0gc2V0dGluZ3MgP1xuICAgICAgICAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2lnbmFscy1zZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgIDx1bCBpZD17J3NpZ25hbHMtc2V0dGluZ3MtbGlzdCd9PlxuICAgICAgICAgICAgICAgICAgICB7c2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9e1wic2lnbmFscy1lbWJlZGRpbmctY29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgPHN0eWxlPntzdHlsZXMobmV3U2V0dGluZ3NOb2Rlcy5sZW5ndGgsIGNhbnZhc05vZGVzLmxlbmd0aCl9PC9zdHlsZT5cbiAgICAgICAgICAgIHtTZXR0aW5nc0pzeH1cbiAgICAgICAgICAgIHtTaWduYWxWaWV3c31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=