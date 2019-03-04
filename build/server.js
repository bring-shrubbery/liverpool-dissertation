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
  }],
  projectModels: [_objectSpread({}, _projects_modulation_json__WEBPACK_IMPORTED_MODULE_6__)],
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
}); // var signalGenerator3sine = function(time) {
//     return (signalGenerator3amplitude(time)
//         * Math.sin(
//             (
//                 2 * Math.PI
//                 * signalGenerator3frequency(time)
//                 * time
//             ) + signalGenerator3phase(time)
//         )
//     ) + signalGenerator3offset(time);
// };

/***/ }),

/***/ "./src/server/libraryNodes.json":
/*!**************************************!*\
  !*** ./src/server/libraryNodes.json ***!
  \**************************************/
/*! exports provided: input, processors, output, default */
/***/ (function(module) {

module.exports = {"input":{"touchInput":{"title":"Touch Input","description":"Gets touch input from the scope.","x":"200","y":"400","width":"150","height":"100","inputs":[],"outputs":[{"title":"OffsetX","type":"number"},{"title":"OffsetY","type":"number"}],"generators":[],"default_settings":[{"title":"Sensitivity","value":"0.01","type":"number"},{"title":"Attached Scope","value":"scope2","type":"scopeReference"},{"title":"Offset X","value":"true","type":"boolean"},{"title":"Offset Y","value":"true","type":"boolean"}]},"scalar":{"title":"Scalar","description":"Single scalar output","x":"150","y":"600","width":"150","height":"100","inputs":[],"outputs":[{"title":"number","type":"number"}],"generators":[],"default_settings":[{"title":"number","value":"1","type":"number"}]},"signalGenerator":{"title":"Signal Generator","description":"Generates a basic signal","x":"380","y":"250","width":"150","inputs":[],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"default_settings":[{"title":"frequency","value":"20","type":"number","input":false,"output":false},{"title":"amplitude","value":"1","type":"number","input":false,"output":false},{"title":"phase","value":"0","type":"number","input":false,"output":false},{"title":"offset","value":"0","type":"number","input":false,"output":false}]}},"processors":{"am":{"title":"AM Modulation","description":"Modulates two signals using AM modulation","x":"600","y":"400","width":"150","height":"100","inputs":[{"title":"signal1","type":"signal"},{"title":"signal2","type":"signal"}],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[signal1]*[signal2]","type":"signal"}],"default_settings":[]}},"output":{"scope":{"title":"Scope","description":"Displays a scope with the provided input signal.","x":"700","y":"200","width":"150","inputs":[{"title":"signal","type":"signal"}],"outputs":[],"default_settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Title","value":"Carrier Signal","type":"text"}]}}};

/***/ }),

/***/ "./src/server/projects/modulation.json":
/*!*********************************************!*\
  !*** ./src/server/projects/modulation.json ***!
  \*********************************************/
/*! exports provided: allConnections, allNodes, composerCoordinates, isCreatingConnection, default */
/***/ (function(module) {

module.exports = {"allConnections":[{"connectorStart":{"nodeId":"touchInput","settingId":"OffsetX"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"frequency"}},{"connectorStart":{"nodeId":"touchInput","settingId":"OffsetY"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"amplitude"}},{"connectorStart":{"nodeId":"multiply","settingId":"signal"},"connectorEnd":{"nodeId":"scope2","settingId":"signal"}},{"connectorStart":{"nodeId":"scalar2","settingId":"number"},"connectorEnd":{"nodeId":"signalGenerator","settingId":"frequency"}},{"connectorStart":{"nodeId":"signalGenerator2","settingId":"sine"},"connectorEnd":{"nodeId":"add","settingId":"signal2"}},{"connectorStart":{"nodeId":"signalGenerator3","settingId":"sine"},"connectorEnd":{"nodeId":"scope3","settingId":"signal"}},{"connectorStart":{"nodeId":"add2","settingId":"signal"},"connectorEnd":{"nodeId":"signalGenerator3","settingId":"frequency"}},{"connectorStart":{"nodeId":"scalar","settingId":"number"},"connectorEnd":{"nodeId":"add","settingId":"signal1"}},{"connectorStart":{"nodeId":"signalGenerator","settingId":"sine"},"connectorEnd":{"nodeId":"multiply","settingId":"signal2"}},{"connectorStart":{"nodeId":"add","settingId":"signal"},"connectorEnd":{"nodeId":"multiply","settingId":"signal1"}},{"connectorStart":{"nodeId":"add","settingId":"signal"},"connectorEnd":{"nodeId":"scope","settingId":"signal"}},{"connectorStart":{"nodeId":"signalGenerator2","settingId":"sine"},"connectorEnd":{"nodeId":"add2","settingId":"signal1"}},{"connectorStart":{"nodeId":"scalar2","settingId":"number"},"connectorEnd":{"nodeId":"add2","settingId":"signal2"}}],"allNodes":{"signalGenerator":{"title":"Signal Generator","x":"502","y":"679","width":"150","inputs":[{"title":"frequency","type":"number","default":"1"}],"outputs":[{"title":"sine","type":"signal"}],"generators":[{"title":"sine","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"settings":[{"title":"frequency","value":"15","type":"number","input":false,"output":false},{"title":"amplitude","value":"1","type":"number","input":false,"output":false},{"title":"phase","value":"0","type":"number","input":false,"output":false},{"title":"offset","value":"0","type":"number","input":false,"output":false}]},"signalGenerator2":{"title":"Signal Generator","x":"288","y":"609","width":"150","inputs":[{"title":"frequency","type":"number","default":"1"},{"title":"amplitude","type":"number","default":"1"},{"title":"offset","type":"number","default":"0"}],"outputs":[{"title":"sine","type":"signal"}],"generators":[{"title":"sine","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"settings":[{"title":"frequency","value":"5","type":"number","input":false,"output":false},{"title":"amplitude","value":"1","type":"number","input":false,"output":false},{"title":"phase","value":"0","type":"number","input":false,"output":false},{"title":"offset","value":"0","type":"number","input":false,"output":false}]},"signalGenerator3":{"title":"Signal Generator","x":"731","y":"820","width":"150","inputs":[{"title":"frequency","type":"number","default":"1"}],"outputs":[{"title":"sine","type":"signal"}],"generators":[{"title":"sine","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"settings":[{"title":"frequency","value":"5","type":"number","input":false,"output":false},{"title":"amplitude","value":"1","type":"number","input":false,"output":false},{"title":"phase","value":"0","type":"number","input":false,"output":false},{"title":"offset","value":"0","type":"number","input":false,"output":false}]},"scope":{"title":"Scope","x":"757","y":"509","width":"150","inputs":[{"title":"signal","type":"signal"}],"outputs":[],"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Title","value":"Data Signal","type":"text"}]},"scope2":{"title":"Scope","x":"966","y":"562","width":"150","inputs":[{"title":"signal","type":"signal"}],"generators":[],"outputs":[],"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"green","type":"color"},{"title":"Title","value":"AM Modulated Signal","type":"text"}]},"scope3":{"title":"Scope","x":"967","y":"755","width":"150","inputs":[{"title":"signal","type":"signal"}],"generators":[],"outputs":[],"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"red","type":"color"},{"title":"Title","value":"FM Modulated Signal","type":"text"}]},"touchInput":{"title":"Touch Input","x":"86","y":"535","width":"150","height":"100","inputs":[],"outputs":[{"title":"OffsetX","type":"number"},{"title":"OffsetY","type":"number"}],"generators":[],"settings":[{"title":"Sensitivity","value":"0.01","type":"number"},{"title":"Attached Scope","value":"scope","type":"scopeReference"},{"title":"Offset X","value":"true","type":"boolean"},{"title":"Offset Y","value":"true","type":"boolean"}]},"multiply":{"title":"Multiply","x":"744","y":"641","width":"150","height":"100","inputs":[{"title":"signal1","type":"signal"},{"title":"signal2","type":"signal"}],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[signal1]*[signal2]","type":"signal"}],"settings":[]},"add":{"title":"Add","x":"500","y":"556","width":"150","height":"100","inputs":[{"title":"signal1","type":"signal"},{"title":"signal2","type":"signal"}],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[signal1]+[signal2]","type":"signal"}],"settings":[]},"add2":{"title":"Add","x":"500","y":"856","width":"150","height":"100","inputs":[{"title":"signal1","type":"signal"},{"title":"signal2","type":"signal"}],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[signal1]+[signal2]","type":"signal"}],"settings":[]},"scalar":{"title":"Scalar","x":"285","y":"524","width":"150","height":"100","inputs":[],"outputs":[{"title":"number","type":"number"}],"generators":[],"settings":[{"title":"number","value":"1","type":"number"}]},"scalar2":{"title":"Scalar","x":"142","y":"742","width":"150","height":"100","inputs":[],"outputs":[{"title":"number","type":"number"}],"generators":[],"settings":[{"title":"number","value":"15","type":"number"}]}},"composerCoordinates":{"focused":true,"gridSize":50,"height":1,"width":1,"x":13,"y":-330,"zoomLevel":1},"isCreatingConnection":false};

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
        if (g[i] === "s") {
            // Mathematical formulas are coded in three letters
            var nextThree = String(g[i] + g[i + 1] + g[i + 2]);
            // Check if next three chars are one of 
            if (nextThree === "sin") {
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

function scriptGenerator(allNodes, allConnections) {
    // Executable to store generated javascript code. Any initialisation code should be here.
    var exeArray = [];
    var executable = "var graphs = {};\n";
    // Setup time
    executable += Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["initTime"])(-2, 2, 0.001);
    // Calculated nodes have following shape: "nodeId:outputId"
    var calculatedNodes = [];
    // Statistics object
    var statistics = {
        loopCounter: 0,
        initialTotalNodes: Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["objectSize"])(allNodes),
        initialTotalConnectors: allConnections.length
    };
    // Separates uncalculated nodes and scopes at the start.
    var _a = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["getUncalculatedNodes"])(allNodes), uncalculatedNodes = _a.uncalculatedNodes, allScopes = _a.allScopes;
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
    // 1. Loop until all nodes are calculated and count number of iterations for statistics
    for (statistics.loopCounter = 0; Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["objectSize"])(uncalculatedNodes) > 0; statistics.loopCounter++) {
        // 1.0 Loop through all uncalculated nodes
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
        executable += "\n            if(graphs." + s + ") {\n                let newData = [];\n                for(let i = 0; i < t.length; i++) {newData.push(" + otherNodeId + otherSettingId + "(t[i]));}\n                graphs." + s + ".data.datasets[0].data = newData;\n                graphs." + s + ".update();\n            } else {\n                let canvasNode = document.getElementById(\"" + s + "\");\n\n                var viewSize = {\n                    x: canvasNode.parentNode.offsetWidth,\n                    y: canvasNode.parentNode.offsetHeight\n                }\n\n                var ctx = canvasNode.getContext(\"2d\");\n\n                var w = viewSize.x;\n                var h = viewSize.y / " + Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["objectSize"])(allScopes) + ";\n\n                canvasNode.width = w;\n                canvasNode.height = h;\n\n                let data = [];\n\n                for(let i = 0; i < t.length; i++) {\n                    data.push(" + otherNodeId + otherSettingId + "(t[i]));\n                }\n                var myChart = new Chart(ctx, {\n                    type: 'line',\n                    data: {labels: t.map(ti => ti.toFixed(2)),\n                        datasets: [\n                            {\n                                label: \"signal\",\n                                backgroundColor: 'rgba(0, 0, 0, 0)',\n                                borderColor: '" + scopeColor(currentScope.settings[1].value) + "',\n                                data: data\n                            }\n                        ]\n                    }, options: {\n                        elements: {\n                            line: {\n                                tension: 0,\n                                stepped: false\n                            }, point: {\n                                radius: 0,\n                                hitRadius: 0,\n                                hoverRadius: 0\n                            }\n                        }, animation: {\n                            duration: 0\n                        }, tooltips: {\n                            enabled: false\n                        }, legend: {\n                            display: false\n                        }" + (currentScope.settings[0].value == "true" ? '' : ", scales: {\n                            xAxes: [{\n                                ticks: {\n                                    max: 1,\n                                    min: -1,\n                                    stepSize: 0.01\n                                }\n                            }], yAxes: [{\n                                ticks: {\n                                    max: 2,\n                                    min: 0,\n                                    stepSize: 0.5\n                                }\n                            }]\n                        }") + generateTitle(currentScope.settings[2]) + "\n                    }\n                });\n    \n                graphs." + s + " = myChart;\n            }\n        ";
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
    for (var i in allNodes) {
        if (String(i).substr(0, 5) === "scope") {
            scopes[i] = allNodes[i];
        }
        else {
            uncalculated[i] = allNodes[i];
        }
    }
    return {
        uncalculatedNodes: uncalculated,
        allScopes: scopes
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
        var offsetX = void 0;
        var offsetY = void 0;
        // Separate settings
        for (var s in node.settings) {
            if (node.settings[s].title === "Sensitivity") {
                sensitivity = node.settings[s];
            }
            else if (node.settings[s].title === "Attached Scope") {
                attachedScope = node.settings[s];
            }
            else if (node.settings[s].title === "Offset X") {
                offsetX = node.settings[s];
            }
            else if (node.settings[s].title === "Offset Y") {
                offsetY = node.settings[s];
            }
            else {
                console.error("Touch node is not correctly formatted.");
            }
        }
        var offsetScript = "if(!didAttach" + i + ") {\n            document.getElementById(\"" + attachedScope.value + "\").onmousedown = function (e) {\n                window.onmouseup = function () {\n                    window.onmouseup = null;\n                    window.onmousemove = null;\n                }\n\n                window.onmousemove = function (e) {\n                    if(" + (offsetX.value == "true") + ") {\n                        " + i + "OffsetXData += e.movementX*" + parseFloat(sensitivity.value) + ";\n                    }\n\n                    if(" + (offsetY.value == "true") + ") {\n                        " + i + "OffsetYData += e.movementY*" + parseFloat(sensitivity.value) + ";\n                    }\n\n                    window.update();\n                }\n            }\n\n            document.getElementById(\"" + attachedScope.value + "\").ontouchstart = function (e) {\n                window.touchLastPositionX = e.touches[0].pageX;\n                window.touchLastPositionY= e.touches[0].pageY;\n\n                window.ontouchend = function () {\n                    window.ontouchend = null;\n                    window.ontouchmove = null;\n                }\n\n                window.ontouchmove = function (e) {\n                    let movementX = window.touchLastPositionX - e.changedTouches[0].pageX;\n                    let movementY = window.touchLastPositionY - e.changedTouches[0].pageY;\n\n                    if(" + (offsetX.value == "true") + ") {\n                        " + i + "OffsetXData += movementX*" + parseFloat(sensitivity.value) + ";\n                    }\n\n                    if(" + (offsetY.value == "true") + ") {\n                        " + i + "OffsetYData += movementY*" + parseFloat(sensitivity.value) + ";\n                    }\n\n                    window.update();\n\n                    window.touchLastPositionX = e.changedTouches[0].pageX;\n                    window.touchLastPositionY = e.changedTouches[0].pageY;\n                }\n            };\n\n            didAttach" + i + "OffsetX = true;\n            didAttach" + i + "OffsetY = true;\n        }\n";
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

var styles = "\n    #signals-embedding-container, #signals-views, .signals-canvas {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    #signals-views {\n        display: grid;\n        grid-tempate-columns: 100%;\n    }\n";
function jsxDom(nodes) {
  var outputNodes = []; // Get all kinds of output nodes

  for (var key in nodes) {
    var currentNode = nodes[key];

    if (String(key).substr(0, 5) === "scope") {
      currentNode.id = key;
      outputNodes.push(currentNode);
    }
  } // console.log(outputNodes);
  // Generate Dynamic Stuff


  var canvasJsx = outputNodes.length > 0 ? outputNodes.map(function (node) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
      className: "signals-canvas",
      id: "".concat(node.id),
      key: node.id
    });
  }) : null;
  var settings = null; // Generate Final JSX

  var SignalViews = canvasJsx ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "signals-views",
    style: {
      gridTemplateRows: "repeat(".concat(outputNodes.length, ", 1fr)")
    }
  }, canvasJsx) : null;
  var SettingsJsx = settings ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "signals-settings"
  }, settings) : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "signals-embedding-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, styles), SettingsJsx, SignalViews);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2dlbmVyYXRvclRva2VuaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVuZGVyZXIvc2NvcGVGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3Rva2VuVG9Kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3ZpZXdlckRvbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiZGF0ZU5vdyIsIlN0cmluZyIsIkRhdGUiLCJ0b1N0cmluZyIsInN1YnN0ciIsImRhdGFiYXNlIiwicHJvamVjdHNJbmZvIiwicHJvamVjdElkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm93bmVyIiwicHJvamVjdE1vZGVscyIsIm1vZHVsYXRpb24iLCJ1c2VycyIsImFkbWluIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm5ld1Byb2plY3QiLCJuZXdJZCIsImkiLCJwYXJzZUludCIsInB1c2giLCJwcm9qZWN0TW9kZWxUZW1wbGF0ZSIsInNhdmVQcm9qZWN0IiwianNvbiIsIm5ld1Byb2plY3RWZXJzaW9uIiwiYWxsQ29ubmVjdGlvbnMiLCJhbGxOb2RlcyIsImNvbXBvc2VyQ29vcmRpbmF0ZXMiLCJpc0NyZWF0aW5nQ29ubmVjdGlvbiIsImZvY3VzZWQiLCJncmlkU2l6ZSIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJ6b29tTGV2ZWwiLCJ1c2UiLCJzdGF0aWMiLCJfX2Rpcm5hbWUiLCJnZXQiLCJyZXEiLCJyZXMiLCJwYXJhbXMiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzZW5kIiwiZnMiLCJyZWFkRmlsZSIsInBhdGgiLCJyZXNvbHZlIiwiZXJyIiwiZGF0YSIsImVycm9yIiwicmVwbGFjZSIsInByb2plY3REYXRhIiwibGVuZ3RoIiwicHJvamVjdCIsInBpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaWJyYXJ5Tm9kZXMiLCJzZXRIZWFkZXIiLCJyZW5kZXJlZFN0cmluZyIsInJlbmRlclNpZ25hbHMiLCJlbmQiLCJwcm9qZWN0c0FycmF5IiwiYm9keVBhcnNlciIsInBvc3QiLCJwcm9qZWN0SnNvbiIsImJvZHkiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJyZW5kZXJIdG1sIiwicmVxdWVzdEpzb24iLCJqc3giLCJqc3hEb20iLCJqc3hTdHJpbmciLCJyZW5kZXJUb1N0YXRpY01hcmt1cCIsInNjcmlwdEFycmF5Iiwic2NyaXB0R2VuZXJhdG9yIiwiY29tcG9zZWRTY3JpcHRTdHJpbmciLCJzIiwic2NyaXB0cyIsInNjcmlwdGVkSHRtbCIsInNsaWNlIiwiZml4U2NvcGVzIiwiZ2VuIiwiZyIsImZvdW5kTGVmdEJvcmRlciIsImZvdW5kUmlnaHRCb3JkZXIiLCJqdXN0SGl0T3BlbmluZ0JyYWNrZXQiLCJqdXN0SGl0Q2xvc2luZ0JyYWNrZXQiLCJsZWZ0IiwicmlnaHQiLCJvbmUiLCJ0d28iLCJ0aHJlZSIsInRva2VuVG9KcyIsIm5vZGVJZCIsInZhcmlhYmxlTmFtZSIsImpzb25Ub2tlbnMiLCJleGVjdXRhYmxlU3RyaW5nIiwiY2FsY3VsYXRlQ29kZSIsInRva2VuIiwidHlwZSIsInZhbHVlIiwiY29kZSIsInN0eWxlcyIsIm5vZGVzIiwib3V0cHV0Tm9kZXMiLCJrZXkiLCJjdXJyZW50Tm9kZSIsImNhbnZhc0pzeCIsIm1hcCIsIm5vZGUiLCJzZXR0aW5ncyIsIlNpZ25hbFZpZXdzIiwiZ3JpZFRlbXBsYXRlUm93cyIsIlNldHRpbmdzSnN4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUdDLDhDQUFPLEVBQW5CLEMsQ0FFQTs7Q0FHQTs7Q0FJQTtBQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFNQyxNQUFN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QUFDSixHQVgwQixDQWEzQjtBQUVBOzs7QUFDQSxNQUFNQyxTQUFTLEdBQUdILFdBQVcsQ0FBQ3pELE1BQVosR0FBcUIsQ0FBckIsR0FBeUJ5RCxXQUFXLENBQUNJLEdBQVosQ0FBZ0IsVUFBQUMsSUFBSSxFQUFJO0FBQy9ELFdBQVE7QUFBUSxlQUFTLEVBQUMsZ0JBQWxCO0FBQ1EsUUFBRSxZQUFLQSxJQUFJLENBQUM1RSxFQUFWLENBRFY7QUFFUSxTQUFHLEVBQUU0RSxJQUFJLENBQUM1RTtBQUZsQixNQUFSO0FBSUgsR0FMMEMsQ0FBekIsR0FLYixJQUxMO0FBT0EsTUFBTTZFLFFBQVEsR0FBRyxJQUFqQixDQXZCMkIsQ0F5QjNCOztBQUNBLE1BQU1DLFdBQVcsR0FBR0osU0FBUyxHQUVyQjtBQUFLLE1BQUUsRUFBQyxlQUFSO0FBQXdCLFNBQUssRUFBRTtBQUFDSyxzQkFBZ0IsbUJBQVlSLFdBQVcsQ0FBQ3pELE1BQXhCO0FBQWpCO0FBQS9CLEtBQ0s0RCxTQURMLENBRnFCLEdBS3JCLElBTFI7QUFPQSxNQUFNTSxXQUFXLEdBQUdILFFBQVEsR0FFcEI7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUNLQSxRQURMLENBRm9CLEdBS3BCLElBTFI7QUFPQSxTQUNJO0FBQUssTUFBRSxFQUFFO0FBQVQsS0FDSSwwRUFBUVIsTUFBUixDQURKLEVBRUtXLFdBRkwsRUFHS0YsV0FITCxDQURKO0FBT0gsQzs7Ozs7Ozs7Ozs7QUMvREQsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsIi8vIEJhc2UgSW1wb3J0c1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcydcblxuLy8gU2VydmVyIFNldHVwXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbi8vIE1pZGRsZXdhcmVcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuXG4vLyBEYXRhIFBhcnNpbmdcbmltcG9ydCB7XG4gICAgcmVuZGVyU2lnbmFsc1xufSBmcm9tICcuL3JlbmRlcmVyJ1xuLy8gaW1wb3J0IHRlc3RNb2RlbCBmcm9tICcuL3Rlc3RNb2RlbC5qc29uJ1xuXG4vLyBQcmUtbWFkZSBwcm9qZWN0cyBhbmQgbGlicmFyeSBub2Rlc1xuaW1wb3J0IGxpYnJhcnlOb2RlcyBmcm9tICcuL2xpYnJhcnlOb2Rlcy5qc29uJ1xuaW1wb3J0IG1vZHVsYXRpb24gZnJvbSAnLi9wcm9qZWN0cy9tb2R1bGF0aW9uLmpzb24nXG5cbmNvbnN0IGRhdGVOb3cgPSAoKSA9PiBTdHJpbmcoRGF0ZSgpLnRvU3RyaW5nKCkpLnN1YnN0cigwLCAyNCkgKyBcIiB8IFwiO1xuXG5sZXQgZGF0YWJhc2UgPSB7XG4gICAgcHJvamVjdHNJbmZvOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb2plY3RJZDogXCIxXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJBTS9GTSBNb2R1bGF0aW9uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG93cyBvbmUgc2lnbmFsIG1vZHVsYXRlZCBvdmVyIG90aGVyIChjYXJyaWVyKSBzaWduYWwgdXNpbmcgQU0gYW5kIEZNIG1vZHVsYXRpb24uXCIsXG4gICAgICAgICAgICBvd25lcjogXCJhZG1pblwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHByb2plY3RNb2RlbHM6IFtcbiAgICAgICAgey4uLm1vZHVsYXRpb259XG4gICAgXSxcbiAgICB1c2Vyczoge1xuICAgICAgICBhZG1pbjoge1xuICAgICAgICAgICAgdXNlcm5hbWU6IFwiYWRtaW5cIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcImFkbWluXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmV3UHJvamVjdDogZnVuY3Rpb24odXNlcm5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICAvLyBGaW5kIG5ldyBpZFxuICAgICAgICBsZXQgbmV3SWQgPSAwO1xuXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aGlzLnByb2plY3RzSW5mbykge1xuICAgICAgICAgICAgaWYocGFyc2VJbnQodGhpcy5wcm9qZWN0c0luZm9baV0ucHJvamVjdElkKSA+IG5ld0lkKSBuZXdJZCA9IHRoaXMucHJvamVjdHNJbmZvW2ldLnByb2plY3RJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0lkKys7XG5cbiAgICAgICAgLy8gQWRkIG5ldyBwcm9qZWN5IGluZm9cbiAgICAgICAgdGhpcy5wcm9qZWN0c0luZm8ucHVzaCh7XG4gICAgICAgICAgICBwcm9qZWN0SWQ6IG5ld0lkLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3duZXI6IHVzZXJuYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvamVjdE1vZGVscy5wdXNoKHtcbiAgICAgICAgICAgIC4uLnByb2plY3RNb2RlbFRlbXBsYXRlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdJZDtcbiAgICB9LFxuICAgIHNhdmVQcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0SWQsIGpzb24pIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFZlcnNpb24gPSB7XG4gICAgICAgICAgICBhbGxDb25uZWN0aW9uczoganNvbi5hbGxDb25uZWN0aW9ucyxcbiAgICAgICAgICAgIGFsbE5vZGVzOiBqc29uLmFsbE5vZGVzLFxuICAgICAgICAgICAgY29tcG9zZXJDb29yZGluYXRlczoganNvbi5jb21wb3NlckNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgaXNDcmVhdGluZ0Nvbm5lY3Rpb246IGpzb24uY29tcG9zZXJDb29yZGluYXRlc1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9qZWN0TW9kZWxzW3Byb2plY3RJZC0xXSA9IG5ld1Byb2plY3RWZXJzaW9uO1xuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdE1vZGVsVGVtcGxhdGUgPSB7XG4gICAgYWxsQ29ubmVjdGlvbnM6IFtdLFxuICAgIGFsbE5vZGVzOiB7fSxcbiAgICBjb21wb3NlckNvb3JkaW5hdGVzOiB7XG4gICAgICAgIGZvY3VzZWQ6IHRydWUsXG4gICAgICAgIGdyaWRTaXplOiA1MCxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgem9vbUxldmVsOiAxXG4gICAgfSxcbiAgICBpc0NyZWF0aW5nQ29ubmVjdGlvbjogZmFsc2Vcbn1cblxuLy8gU3RhdGljIGZpbGVzXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvcHVibGljL3N0YXRpYycpKVxuXG4vLyAtLS0gUk9VVEVTIC0tLVxuYXBwLmdldCgnL2VkaXRvci86dXNlcm5hbWUvOmlkJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gcmVxLnBhcmFtcy5pZDtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG5cbiAgICBjb25zb2xlLmxvZyhgJHtkYXRlTm93KCl9R0VUIC9lZGl0b3IvJHt1c2VybmFtZX0vJHtwcm9qZWN0SWR9YCk7XG5cbiAgICBpZighZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSByZXMuc3RhdHVzKDQyMCkuc2VuZChcIlVzZXIgd2l0aCB1c2VybmFtZSBcIit1c2VybmFtZStcIiBkb2Vzbid0IGV4aXN0XCIpO1xuICAgIFxuICAgIGZzLnJlYWRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3B1YmxpYy9lZGl0b3IuaHRtbCcpLCAndXRmOCcsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0FuIGVycm9yIG9jY3VycmVkJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aXRsZVxuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgXCI8dGl0bGU+PC90aXRsZT5cIixcbiAgICAgICAgICAgIGA8dGl0bGU+JHtwcm9qZWN0SWR9PC90aXRsZT5gXG4gICAgICAgIClcblxuICAgICAgICBsZXQgcHJvamVjdERhdGE7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGFiYXNlLnByb2plY3RzSW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGRhdGFiYXNlLnByb2plY3RzSW5mb1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocHJvamVjdC5vd25lciA9PSB1c2VybmFtZSAmJiBwcm9qZWN0LnByb2plY3RJZCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGlkID0gcGFyc2VJbnQocHJvamVjdElkKSAtIDE7XG4gICAgICAgICAgICAgICAgcHJvamVjdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGFiYXNlLnByb2plY3RNb2RlbHNbcGlkXSxcbiAgICAgICAgICAgICAgICAgICAgcGlkOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiB1c2VybmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBkYXRhXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICAnPHNjcmlwdCBpZD1cImVkaXRvci1kYXRhXCI+PC9zY3JpcHQ+JyxcbiAgICAgICAgICAgIGA8c2NyaXB0IGlkPVwicHJvamVjdC1kYXRhXCI+ZG9jdW1lbnQucHJvamVjdERhdGEgPSAke0pTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKX08L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgaWQ9XCJsaWJyYXJ5LWRhdGFcIj5kb2N1bWVudC5saWJyYXJ5Tm9kZXMgPSAke0pTT04uc3RyaW5naWZ5KGxpYnJhcnlOb2Rlcyl9PC9zY3JpcHQ+YFxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgICAgICByZXMuc2VuZChkYXRhKTtcbiAgICB9KVxufSk7XG5cbi8vIERlZmF1bHQgdGVzdCB2aXN1YWxpc2F0aW9uXG5hcHAuZ2V0KCcvcmVuZGVyLzp1c2VybmFtZS86aWQnLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zb2xlLmxvZyhgJHtkYXRlTm93KCl9R0VUIC9yZW5kZXIvJHt1c2VybmFtZX0vJHtwcm9qZWN0SWR9YCk7XG5cbiAgICBpZighZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSByZXMuc3RhdHVzKDQyMCkuc2VuZChcIlVzZXIgd2l0aCB1c2VybmFtZSBcIit1c2VybmFtZStcIiBkb2Vzbid0IGV4aXN0XCIpO1xuXG5cbiAgICBjb25zdCByZW5kZXJlZFN0cmluZyA9IHJlbmRlclNpZ25hbHMoZGF0YWJhc2UucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSk7XG5cbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgcmVzLmVuZChyZW5kZXJlZFN0cmluZyk7XG59KVxuXG4vLyBGb3Igbm93LCBsYW5kaW5nIHBhZ2UgaXMgdGhlIHByb2plY3RzIHBhZ2UuXG5hcHAuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcbiAgICBmcy5yZWFkRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wdWJsaWMvcHJvamVjdHMuaHRtbCcpLCAndXRmOCcsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0FuIGVycm9yIG9jY3VycmVkJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aXRsZVxuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgXCI8dGl0bGU+PC90aXRsZT5cIixcbiAgICAgICAgICAgIGA8dGl0bGU+UHJvamVjdHM8L3RpdGxlPmBcbiAgICAgICAgKVxuXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgcmVzLmVuZChkYXRhKTtcbiAgICB9KVxufSlcblxuYXBwLmdldChcIi9wcm9qZWN0cy9pbmZvLzp1c2VybmFtZVwiLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG5cbiAgICBpZihkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHtcbiAgICAgICAgbGV0IHByb2plY3RzQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGFiYXNlLnByb2plY3RzSW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoZGF0YWJhc2UucHJvamVjdHNJbmZvW2ldLm93bmVyID09PSB1c2VybmFtZSlcbiAgICAgICAgICAgICAgICBwcm9qZWN0c0FycmF5LnB1c2goZGF0YWJhc2UucHJvamVjdHNJbmZvW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDIwKS5zZW5kKGBObyB1c2VyIHdpdGggdXNlcm5hbWUgXCIke3VzZXJuYW1lfVwiIHdhcyBmb3VuZC5gKTtcbiAgICB9XG4gICAgXG59KVxuXG5cbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnBvc3QoXCIvc2F2ZS86dXNlcm5hbWUvOmlkXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIC8vIFNhdmUgZXhpc3RpbmcgcHJvamVjdFxuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSByZXEucGFyYW1zLmlkO1xuXG4gICAgY29uc29sZS5sb2coYCR7ZGF0ZU5vdygpfVBPU1QgL3NhdmUvJHt1c2VybmFtZX0vJHtwcm9qZWN0SWR9YCk7XG5cbiAgICBjb25zdCBwcm9qZWN0SnNvbiA9IHJlcS5ib2R5O1xuXG4gICAgaWYoIWRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkgcmVzLnN0YXR1cyg0MjApLnNlbmQoYFVzZXIgd2l0aCB1c2VybmFtZSAke3VzZXJuYW1lfSBkb2Vzbid0IGV4aXN0YCk7XG5cbiAgICBpZighZGF0YWJhc2UucHJvamVjdE1vZGVsc1twcm9qZWN0SWQgLSAxXSkgcmVzLnN0YXR1cyg0MjEpLnNlbmQoYFByb2plY3Qgd2l0aCBpZCAke3Byb2plY3RJZH0gZG9lc24ndCBleGlzdGApO1xuXG4gICAgZGF0YWJhc2Uuc2F2ZVByb2plY3QocHJvamVjdElkLCBwcm9qZWN0SnNvbik7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG5cbn0pXG5cblxuYXBwLmdldChcIi9jcmVhdGVQcm9qZWN0Lzp1c2VybmFtZS86dGl0bGUvOmRlc2NyaXB0aW9uXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcbiAgICBjb25zdCB0aXRsZSA9IHJlcS5wYXJhbXMudGl0bGU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSByZXEucGFyYW1zLmRlc2NyaXB0aW9uO1xuXG4gICAgaWYoIWRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkgcmVzLnN0YXR1cyg0MjApLnNlbmQoYFVzZXIgd2l0aCB1c2VybmFtZSAke3VzZXJuYW1lfSBkb2Vzbid0IGV4aXN0YCk7XG5cbiAgICBsZXQgcGlkID0gZGF0YWJhc2UubmV3UHJvamVjdCh1c2VybmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uKTtcblxuICAgIHJlcy5zdGF0dXMoMzAxKS5zZW5kKGAvZWRpdG9yLyR7dXNlcm5hbWV9LyR7cGlkfWApO1xufSlcblxuLy8gUnVuIHNlcnZlclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiXFxuTGlzdGVuaW5nIG9uOiBodHRwczovL2xvY2FsaG9zdDpcIitwb3J0K1wiXFxuXCIpO1xufSk7XG5cblxuLy8gdmFyIHNpZ25hbEdlbmVyYXRvcjNzaW5lID0gZnVuY3Rpb24odGltZSkge1xuLy8gICAgIHJldHVybiAoc2lnbmFsR2VuZXJhdG9yM2FtcGxpdHVkZSh0aW1lKVxuLy8gICAgICAgICAqIE1hdGguc2luKFxuLy8gICAgICAgICAgICAgKFxuLy8gICAgICAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4vLyAgICAgICAgICAgICAgICAgKiBzaWduYWxHZW5lcmF0b3IzZnJlcXVlbmN5KHRpbWUpXG4vLyAgICAgICAgICAgICAgICAgKiB0aW1lXG4vLyAgICAgICAgICAgICApICsgc2lnbmFsR2VuZXJhdG9yM3BoYXNlKHRpbWUpXG4vLyAgICAgICAgIClcbi8vICAgICApICsgc2lnbmFsR2VuZXJhdG9yM29mZnNldCh0aW1lKTtcbi8vIH07XG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdlbmVyYXRvciBDb2RlIFRva2VuaXNlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR2VuZXJhdG9yIGNvZGUgdG9rZW5pc2VyIGZ1bmN0aW9uIGlzIGFsZ29yaXRobWljYWxseSBzaW1wbGUsIGJ1dCBwcm9kdWNlcyBhIGdvb2QgcmVwcmVzZW50YXRpb25cbi8vIG9mIHRoZSBwcm92aWRlZCBjb2RlIGluIEphdmFTY3JpcHQgT2JqZWN0IGZvcm1hdCAod2hpY2ggY2FuIHRoZW4gYmUgZWFzaWx5IGNvbnZlcnRlZCB0byBKU09OLFxuLy8gc2luY2UgaXQncyBwcmV0dHkgbXVjaCB0aGUgc2FtZSB0aGluZykuXG4vLyBXaGVuIGdvaW5nIHRocm91Z2ggdGhlIGNvZGUsIGl0IGNhbiBkZXRlY3Qgc2V2ZXJhbCB0eXBlcyBvZiBvcGVyYXRvcnMuIFRoZXNlIGFyZTpcbi8vICAgICAqIFZhcmlhYmxlXG4vLyAgICAgKiBDb25zdGFudCBOdW1iZXJcbi8vICAgICAqIE1hdGggT3BlcmF0b3Jcbi8vICAgICAqIE1hdGggRnVuY3Rpb25cbi8vICAgICAqIFJlZ3VsYXIgc2NvcGUgLSBldmVyeXRoaW5nIGluc2lkZSBicmFja2V0cyBcIihcIiBhbmQgXCIpXCIgc2hvdWxkIGJlIGV4ZWN1dGVkIGZpcnN0XG4vLyBUaGUgVmFyaWFibGVzLCBOdW1iZXJzIGFuZCBNYXRoIG9wZXJhdG9ycyBhcmUganVzdCBhZGRlZCBhcyBhbiBvYmplY3Qgd2l0aCBhcHByb3ByaWF0ZSB0eXBlIGFuZFxuLy8gdmFsdWUgdGFrZW4gZnJvbSB0aGUgY29kZS5cblxuLy8gVE9ETzpcbi8vICogU2FuZXRpc2UgdmFyaWFibGUgbmFtZXMgISEhIEphdmFzY3JpcHQgaW5qZWN0aW9uIGlzIHBvc3NpYmxlIG5vdyB0aHJvdW4gdmFyaWFibGUgbmFtZXMuLi5cblxuaW1wb3J0IHtmaXhTY29wZXN9IGZyb20gJy4vc2NvcGVGaXhlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZUdlbmVyYXRvciAoZ2VuOiBzdHJpbmcsIG5vZGVJZDogc3RyaW5nKTogR2VuZXJhdG9yU2VnbWVudFtdIHtcbiAgICAvLyBHZXQgdmFsdWUgb2YgZ2VuZXJhdG9yIGNvZGUgYW5kIHN0b3JlIGluIGdcbiAgICBsZXQgZyA9IFN0cmluZyhnZW4pO1xuICAgIGcgPSBTdHJpbmcoZml4U2NvcGVzKGcpKTtcblxuICAgIC8vIFBhcnNlZCBHZW5lcmF0b3IgQ29kZVxuICAgIGxldCBwZ2VuOiBHZW5lcmF0b3JTZWdtZW50W10gPSBbXTtcbiAgICBcbiAgICAvLyBUaGUgc3RhY2tcbiAgICBsZXQgc3RhY2s6IEdlbmVyYXRvclNlZ21lbnRbXSA9IFtdO1xuXG4gICAgLy8gQ29kZSB0b2tlbmlzZXJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b3BTdGFja09iamVjdDogR2VuZXJhdG9yU2VnbWVudCA9IHN0YWNrLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gOiBudWxsO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBWQVJJQUJMRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiW1wiKSB7XG4gICAgICAgICAgICAvLyBNb3ZlIHRvIG5leHQgY2hhcmFjdGVyXG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIGVtcHR5IHZhcmlhYmxlXG4gICAgICAgICAgICBsZXQgdmFyaWFibGUgPSBcIlwiO1xuXG4gICAgICAgICAgICAvLyBTY2FuIHVudGlsIHZhcmlhYmxlIHNjb3BlIGlzIGNsb3NlZFxuICAgICAgICAgICAgd2hpbGUoZ1tpXSAhPT0gXCJdXCIpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSArPSBnW2ldO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodmFyaWFibGUgPT09IFwidGltZVwiIHx8IHZhcmlhYmxlID09PSBcIlBJXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nID9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBub2RlSWQgKyB2YXJpYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidmFyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhcmlhYmxlLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbdG9wSW5kZXhdLmNvZGUucHVzaCh2YXJpYWJsZVNuaXBwZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2godmFyaWFibGVTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBNQVRIIE9QRVJBVE9SIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYgKGdbaV0gPT09IFwiKlwiIHx8IGdbaV0gPT09IFwiL1wiIHx8IGdbaV0gPT09IFwiK1wiIHx8IGdbaV0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvclNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBnW2ldLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2gob3BlcmF0b3JTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChvcGVyYXRvclNuaXBwZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE1BVEggRlVOQ1RJT04gLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcInNcIikge1xuICAgICAgICAgICAgLy8gTWF0aGVtYXRpY2FsIGZvcm11bGFzIGFyZSBjb2RlZCBpbiB0aHJlZSBsZXR0ZXJzXG4gICAgICAgICAgICBsZXQgbmV4dFRocmVlID0gU3RyaW5nKGdbaV0gKyBnW2krMV0gKyBnW2krMl0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBuZXh0IHRocmVlIGNoYXJzIGFyZSBvbmUgb2YgXG4gICAgICAgICAgICBpZihuZXh0VGhyZWUgPT09IFwic2luXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGp1c3QgaW5kZXggdG8gbmV4dCBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICBpICs9IDM7XG5cbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggZm9yIG9wZW5pbmcgYnJhY2tldHNcbiAgICAgICAgICAgICAgICB3aGlsZShnW2ldICE9PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoaSA+PSBnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRocm93IGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046IHNob3VsZCBwcm92aWRlIGJyYWNrZXRzIGZvciBtYXRoIG9wZXJhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInNob3VsZCBwcm92aWRlIGJyYWNrZXRzIGZvciBtYXRoIG9wZXJhdG9yc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcHJvdmlkZWQgc3BhY2Ugb3IgYSBjaGFyYWN0ZXIgYWZ0ZXIgdGhyZWUgbWF0aCBjaGFyc1xuICAgICAgICAgICAgICAgIC8vIGlmIChnW2krMV0gPT09IFwiKFwiKSBpKys7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXRoU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtYXRoXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXh0VGhyZWUsXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFtdXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tUb3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUucHVzaChtYXRoU25pcHBldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVUb3BJbmRleCA9IHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZVtzY29wZVRvcEluZGV4XVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgICAgICBwZ2VuLnB1c2gobWF0aFNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBwZ2VuW3BnZW4ubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSBwYXJzaW5nIGNvZGVcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBSRUdVTEFSIFNDT1BFIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIC8vIEJlZ2luIHJlZ3VsYXIgc2NvcGVcbiAgICAgICAgICAgIGNvbnN0IHNjb3BlU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNjb3BlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgY29kZTogW11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tUb3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5wdXNoKHNjb3BlU25pcHBldCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzY29wZVRvcEluZGV4ID0gc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZVtzY29wZVRvcEluZGV4XVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChzY29wZVNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgcGdlbltwZ2VuLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIEVORCBBTlkgU0NPUEUgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcIilcIiB8fCBnLmNoYXJBdChpKSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgIC8vIEVuZCBTY29wZVxuXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0b3AgaXRlbSBmcm9tIHN0YWNrIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBjbG9zZWQgc2NvcGUgdGhhdCB3YXNuJ3Qgb3BlbmVkXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogICAgICAgICAgICB0aHJvdyBFUlJPUlxuICAgICAgICAgICAgICAgIC8vIEVSUk9SIFJFQVNPTjogICAgbm9uIGV4aXN0ZW50IHNjb3BlIHdhcyBjbG9zZWRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibm9uIGV4aXN0ZW50IHNjb3BlIHdhcyBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gTlVCTUVSIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgbGV0IG1heWJlTnVtYmVyID0gU3RyaW5nKHBhcnNlSW50KGdbaV0pKTtcblxuICAgICAgICBpZihtYXliZU51bWJlciAhPT0gU3RyaW5nKE5hTikgJiYgdHlwZW9mIHBhcnNlSW50KG1heWJlTnVtYmVyKSA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyU3RhcnQgPSBpO1xuXG4gICAgICAgICAgICAvLyBJcyBjdXJyZW50IGNoYXIgYSBudW1iZXIgb3IgYSBkb3Q/XG4gICAgICAgICAgICBjb25zdCBpc051bWJlciA9ICgpID0+IChtYXliZU51bWJlciAhPT0gU3RyaW5nKE5hTikgJiYgdHlwZW9mIHBhcnNlSW50KG1heWJlTnVtYmVyKSA9PT0gXCJudW1iZXJcIik7XG4gICAgICAgICAgICBjb25zdCBpc0RvdCA9IChpbmRleDogbnVtYmVyKSA9PiBTdHJpbmcoZ1tpbmRleF0pID09PSBcIi5cIjtcblxuICAgICAgICAgICAgLy8gV2FzIHRoZXJlIGEgZG90IGluIGN1cnJlbnQgc2VxdWVuY2Ugb2YgbnVtYmVycz9cbiAgICAgICAgICAgIGxldCB3YXNEb3RBbHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdoaWxlKGlzTnVtYmVyKCkgfHwgaXNEb3QoaSkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBjdXJyZW50IGNoYXIgaXMgYSBkb3RcbiAgICAgICAgICAgICAgICBpZihpc0RvdChpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZih3YXNEb3RBbHJlYWR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCB0aGVyZSB3YXMgYSBkb3QgYWxyZWFkeSwgdGhyb3cgZXJyb3IsIHNpbmNlIGl0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdGhyb3cgRVJST1JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVSUk9SIFJFQVNPTjogaW52YWxpZCBmbG9hdGluZyBwb2ludCBudW1iZXIgc3ludGF4XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBub3QsIHNldCB3YXMgZG90IGFscmVhZHkgdG8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgd2FzRG90QWxyZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNb3ZlIHRvIG5leHQgaW5kZXggYW5kIFxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBtYXliZU51bWJlciA9IFN0cmluZyhwYXJzZUludChnW2ldKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGluZ051bWJlciA9IGcuc2xpY2UobnVtYmVyU3RhcnQsIGkpO1xuXG4gICAgICAgICAgICBjb25zdCBudW1iZXJTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdGluZ051bWJlcixcbiAgICAgICAgICAgICAgICBjb2RlOiBudWxsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbdG9wSW5kZXhdLmNvZGUucHVzaChudW1iZXJTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChudW1iZXJTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaS0tO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gUmV0dXJuIHBhcnNlZCBnZW5lcmF0b3IgYXJyYXlcbiAgICByZXR1cm4gcGdlbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmF0b3JTZWdtZW50IHtcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdmFsdWU6IChzdHJpbmd8bnVtYmVyKSxcbiAgICBjb2RlOiBHZW5lcmF0b3JTZWdtZW50W11cbn0iLCJpbXBvcnQgeyByZW5kZXJUb1N0cmluZywgcmVuZGVyVG9TdGF0aWNNYXJrdXAgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuaW1wb3J0IHsgc2NyaXB0R2VuZXJhdG9yIH0gZnJvbSAnLi9zY3JpcHRHZW5lcmF0b3IudHMnO1xuaW1wb3J0IHsganN4RG9tIH0gZnJvbSAnLi92aWV3ZXJEb20nO1xuXG5mdW5jdGlvbiByZW5kZXJIdG1sIChyZXF1ZXN0SnNvbikge1xuICAgIC8vIFNlcGFyYXRlIG5vZGVzIGZyb20gY29ubmVjdG9yc1xuICAgIGNvbnN0IGFsbE5vZGVzID0gey4uLnJlcXVlc3RKc29uLmFsbE5vZGVzfTtcbiAgICBjb25zdCBhbGxDb25uZWN0aW9ucyA9IFsuLi5yZXF1ZXN0SnNvbi5hbGxDb25uZWN0aW9uc107XG5cbiAgICAvLyBSZW5kZXIgSFRNTFxuICAgIGNvbnN0IGpzeCA9IGpzeERvbShhbGxOb2Rlcyk7XG4gICAgY29uc3QganN4U3RyaW5nID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoanN4KTtcblxuICAgIC8vIEdlbmVyYXRlIFNjcmlwdHNcbiAgICAvLyBjb25zb2xlLnRpbWUoXCJTY3JpcHQgUGFyc2VyXCIpO1xuXG4gICAgY29uc3Qgc2NyaXB0QXJyYXkgPSBzY3JpcHRHZW5lcmF0b3IoYWxsTm9kZXMsIGFsbENvbm5lY3Rpb25zKTtcbiAgICBsZXQgY29tcG9zZWRTY3JpcHRTdHJpbmcgPSBcIlwiO1xuICAgIGZvcihsZXQgcyBpbiBzY3JpcHRBcnJheSkge1xuICAgICAgICBpZihzID09IDApIGNvbnRpbnVlO1xuICAgICAgICBjb21wb3NlZFNjcmlwdFN0cmluZyArPSBzY3JpcHRBcnJheVtzXTtcbiAgICB9XG4gICAgXG4gICAgLy8gY29uc29sZS50aW1lRW5kKFwiU2NyaXB0IFBhcnNlclwiKTtcblxuICAgIGxldCBzY3JpcHRzID0gYDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvQ2hhcnQuanMvMi43LjMvQ2hhcnQuYnVuZGxlLm1pbi5qc1wiPjwvc2NyaXB0PlxcbmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD4ke3NjcmlwdEFycmF5WzBdfTwvc2NyaXB0PmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD4ke2NvbXBvc2VkU2NyaXB0U3RyaW5nfTwvc2NyaXB0PmA7XG4gICAgXG4gICAgLy8gQ29tYmluZSBmb3JtZXIgcmVzdWx0c1xuICAgIGNvbnN0IHNjcmlwdGVkSHRtbCA9IGpzeFN0cmluZy5zbGljZSgwLCBqc3hTdHJpbmcubGVuZ3RoIC0gNikgKyBzY3JpcHRzICsgXCI8L2Rpdj5cIjtcbiAgICBcbiAgICAvLyBSZXR1cm4gZ2VuZXJhdGVkIEhUTUwgYXMgYSBzdHJpbmdcbiAgICByZXR1cm4gc2NyaXB0ZWRIdG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2lnbmFscyAocmVxdWVzdEpzb24pIHtcbiAgICByZXR1cm4gcmVuZGVySHRtbChyZXF1ZXN0SnNvbik7XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNjb3BlIEZpeGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2NvcGUgRml4ZXIgZnVuY3Rpb24gaXMgcmVsYXRlZCB0byB0aGUgZ2VuIHZhcmlhYmxlIHBhcnNpbmcgYWxnb3JpdGhtLiBTaW5jZSB0aGUgdG9rZW5pemVyIFxuLy8gZnVuY3Rpb24gZG9lcyBub3QgdGFrZSBpbnRvIGFjY291bmQgdGhhdCBtYXRoIG9wZXJhdG9ycyAqIChtdWx0aXBsaWNhdGlvbikgYW5kIC8gKGRpdmlzaW9uKVxuLy8gYXJlIGV4ZWN1dGVkIGZpcnN0LCB3ZSBuZWVkIHRvIHB1dCBzY29wZXMgYXJvdW5kIGJpdHMgdGhhdCBzaG91bGQgZXhlY3V0ZWQgZmlyc3QuIFRoaXMgaXMgXG4vLyBub3QgZmluYWwgc29sdXRpb24sIHNpbmNlIGl0IGRvZXMgbm90IHRha2UgZm9sbG93aW5nIHNpdHVhdGlvbnMgaW50byBhY2NvdW50OlxuLy8gICAgICogdGhlcmUgaXMgYSBtaW51cyBvciBwbHVzIHNpZ24gYmVmb3JlIGEgbnVtYmVyOiAtMSpbdmFyaWFibGVdXG4vLyAgICAgICAgIC0gSW4gdGhpcyBjYXNlIGl0IHdvdWxkIHJldHVybiB0aGlzOiAtKDEqW3ZhcmlhYmxlXSkuIFRoaXMgZG9lcyBub3QgYXBwbHkgc2NvcGVzXG4vLyAgICAgICAgICAgY29ycmVjdGx5LlxuLy9cbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFsZ29yaXRobSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGFsZ29yaXRobSBtYWtlcyBvbmx5IG9uZSBnZW5lcmFsIHN3ZWVwIHRocm91Z2ggdGhlIHN0cmluZy4gVGhpcyBtZWFucyB0aGF0IGlmIG5vIFxuLy8gc2NvcGVzIGFyZSBuZWVkZWQsIGV4ZWN1dGlvbiB0aW1lIHdpbGwgYmUgbWluaW1hbCwgaS5lLiBpdCB3aWxsIHRha2UgYXMgbXVjaCB0aW1lIGFzIGl0XG4vLyB0YWtlcyB0byBsb29wIHRocm91Z2ggdGhlIHN0cmluZyBvbmNlIGFuZCBjaGVjayBpZiB0aGUgY2hhcmFjdGVyIGlzICogb3IgLy4gSW4gdGhlIGNhc2Ugb2Zcbi8vIDM0IGNoYXJhY3RlciBzdHJpbmcsIHRoaXMgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgaW4gYWJvdW50IDAuMy0wLjUgbXMuIFdpdGggYW4gYXZlcmFnZSBvZiBcbi8vIGFyb3VuZCAwLjRtcyBhbmQgMzQgY2hhcmFjdGVycywgd2UgY2FuIGFwcHJveGltYXRlIHRoYXQgb25lIGNoYXJhY3RlciB0YWtlcyAwLjQgLyAzNCA9IDEuNjZcbi8vIG1pY3JvIHNlY29uZHMuIFRoaXMgd2FzIHRlc3RlZCBvbiAyLjdHaHogSW50ZWwgQ29yZSBpNy4gU28gaXQgdG9vayBhcm91bmQgNDQ4MiBjbG9jayBjeWNsZXNcbi8vIHRvIGV4ZWN1dGUgdGhhdCBhY2NvcmRpbmcgdG8gZm9sbG93aW5nIGVxdWF0aW9uOiAxLjY2dXMgLyAoMSAvIDIuN0cpID0gNDQ4Mi4gVGhpcyBjb3VsZCBiZSBcbi8vIGRyYW1hdGljYWxseSBpbXByb3ZlZCBieSB1c2luZyBjdXN0b20gbWFkZSBOb2RlLmpzIGMrKyBwbHVnaW4gd2hpY2ggYWxsb3dzIHRvIHJ1biBjKytcbi8vIGJpbmFyaWVzIGZyb20gTm9kZS5qcyBvciBieSB3cml0aW5nIHRoZSB3aG9sZSByZW5kZXJlciBzZXJ2ZXIgaW4gYSBjb21waWxlZCBsYW5ndWFnZSBsaWtlIFxuLy8gcHl0aG9uLCBjIywgZ28sIG9yIHN3aWZ0LiBUaGVyZSBpcyBhbHNvIGEgcG9zc2liaWxpdHkgdG8gd3JpdGUgaXQgaW4gUnVzdCBsYW5ndWFnZSwgQyBvclxuLy8gQysrLiBUaGlzIHdvdWxkIGFsbG93IHRvIGNvbXBpbGUganVzdCB0aGlzIGZ1bmN0aW9uIHRvIFdlYkFzc2VtYmx5IGFuZCBydW4gaXQgaW4gTm9kZS5qcyBhdCBcbi8vIGNvbXBpbGVkIHNwZWVkLiBJZiBmdXJ0aGVyIGRldmVsb3BtZW50IHdpbGwgYmUgZG9uZSBhbmQgdGhlcmUgd2lsbCBiZSBhIGRlY2lzaW9uIHRvICBzd2l0Y2hcbi8vIHRvIGEgY29tcGlsZWQgbGFuZ3VhZ2Ugc2VydmVyLCBJIHdvdWxkIHN1Z2dlc3QgdXNpbmcgR08gbGFuZ3VhZ2UgZHVlIHRvIGl0cyBzaW1wbGljaXR5LlxuLy9cbi8vIEFsZ2l0aG0gd29ya3MgaW4gYSBmb2xsb3dpbmcgZmFzaGlvbjpcbi8vICAgMS4gTWFrZSBzdXJlIHBhc3NlZCB0ZXh0IGlzIG9mIGEgU3RyaW5nIHR5cGVcbi8vICAgMi4gU2V0IGZsYWdzIHRvIGZhbHNlOlxuLy8gICAgICAgLSBib3JkZXIgZmxhZ3M6IGluZGljYXRlIGlmIG9uIGxlZnQgb3IgcmlnaHQsIGEgKyBvciAtIHNpZ24gd2FzIGZvdW5kXG4vLyAgICAgICAtIGJyYWNrZXQgZmxhZ3M6IGluZGljYXRlIGlmIHdoaWxlIHN3ZWVwaW5nIGxlZnQgYW5kIHJpZ2h0IGEgc2NvcGUgd2FzIGZvdW5kXG4vLyAgIDMuIEluaXRpYXRlIHZhcmlhYmxlcyBmb3IgbGVmdCBhbmQgcmlnaHQgc3dlZXBlcnNcbi8vICAgNC4gTG9vcCB1bnRpbCB3aG9sZSBzdHJpbmcgd2FzIHNjYW5uZWQsIGluIHRoZSBsb29wOlxuLy8gICAgICAgMS4gSWYgY3VycmVudCBjaGFyYWN0ZXIgaXMgXCIqXCJcIiBvciBcIi9cIiwgY29udGludWUsIG90aGVyd2lzZSBpbmNyZWFzZSBpbmRleCBieSBvbmUgYW5kIGNoZWNrIGFnYWluXG4vLyAgICAgICAyLiBTY2FuIHRvIHRoZSBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgaW5kZXguXG4vLyAgICAgICAzLiBJZiByYW4gb3V0IG9mIGJvdW5kcyBvZiB0aGUgc3RyaW5nLCBzdG9wIHNjYW5uaW5nIGxlZnQsIG1vdmUgdG8gc3RlcCA3XG4vLyAgICAgICA0LiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBzZXQgY2xvc2luZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDUuIElmIGhpdCBvcGVuaW5nIGJyYWNrZXQsIGNoZWNrIGlmIGNsb3NpbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZyBhbmQgc2V0IGNsb3NpbmcgYnJhY2tldCBmbGFnIHRvIGZhbHNlIGFnYWluLlxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCBtb3ZlIHRvIHN0ZXAgN1xuLy8gICAgICAgNi4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBjbG9zaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZywgbW92ZSByaWdodCBieSBvbmUgc3RlcCBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuLy8gICAgICAgNy4gU2NhbiB0byB0aGUgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBpbmRleC5cbi8vICAgICAgIDguIElmIHJhbiBvdXQgb2YgYm91bmRzIG9mIHRoZSBzdHJpbmcsIHN0b3Agc2Nhbm5pbmcgbGVmdCwgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICA5LiBJZiBoaXQgb3BlbmluZyBicmFja2V0LCBzZXQgb3BlbmluZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDEwLiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcgYW5kIHNldCBvcGVuaW5nIGJyYWNrZXQgZmxhZyB0byBmYWxzZSBhZ2Fpbi5cbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICAxMS4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuXG5leHBvcnQgZnVuY3Rpb24gZml4U2NvcGVzKGdlbikge1xuICAgIGxldCBnID0gU3RyaW5nKGdlbik7XG5cbiAgICAvLyBWYXJpYWJsZSBhcmUgdGFrZW4gb3V0c2lkZSBvZiBmb3IgbG9vcCwgdG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UuXG4gICAgLy8gSW4gdGhpcyB3YXksIHZhcmlhYmxlcyBhcmUganVzdCByZXdyaXR0ZW4gaW4gdGhlIHNhbWUgbWVtb3J5XG4gICAgLy8gbG9jYXRpb24gaW5zdGVhZCBvZiBjcmVhdGluZyBuZXcgdmFyaWFibGUgZXZlcnkgdGltZS5cbiAgICBsZXQgZm91bmRMZWZ0Qm9yZGVyID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kUmlnaHRCb3JkZXIgPSBmYWxzZTtcblxuICAgIGxldCBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICBsZXQganVzdEhpdENsb3NpbmdCcmFja2V0ID0gZmFsc2U7XG5cbiAgICBsZXQgbGVmdDtcbiAgICBsZXQgcmlnaHQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGdbaV0gPT09IFwiKlwiIHx8IGdbaV0gPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAvLyBTY2FuIGxlZnRcbiAgICAgICAgICAgIGZvciAobGVmdCA9IGk7ICFmb3VuZExlZnRCb3JkZXI7IGxlZnQtLSkge1xuICAgICAgICAgICAgICAgIC8vIEV4aXQgdGhlIHNjYW5uaW5nIGxvb3AgaWYgaGl0IGxlZnQgc3RyaW5nIHdhbGxcbiAgICAgICAgICAgICAgICBpZiAobGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZG9lcyBub3Qgc2V0IGZvdW5kTGVmdEJvcmRlciB2YXJpYWJsZSB0byB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpZiBib3RoIHNpZGVzIGFyZSBicmFja2V0cyBvciBvdXRlciB3YWxscyBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RyaW5nLCBuZXcgYnJhY2tldHMgc2hvdWxkIG5vdCBiZSBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGhpdHMgb3BlbmluZyBicmFja2V0LCBpdCBjaGVja3MgaWYgaXQgaGl0IGNsb3NpbmcgYnJhY2tldCBiZWZvcmVcbiAgICAgICAgICAgICAgICBpZiAoZ1tsZWZ0XSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRDbG9zaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdEhpdENsb3NpbmdCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFya3MgdGhhdCBpdCBoaXQgY2xvc2luZyBicmFja2V0LCBzbyB0aGF0IGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGxhdGVyLFxuICAgICAgICAgICAgICAgIC8vIGl0IGtub3dzIHRoYXQgaXQgc2hvdWxkbid0IFxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIilcIikganVzdEhpdENsb3NpbmdCcmFja2V0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIEV4aXQgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgcGx1cyBvciBtaW51c1xuICAgICAgICAgICAgICAgIC8vIEFsc28sIG1vdmUgcmlnaHQsIHNvIHRoYXQgYnJhY2tlcyBpcyBpbnNlcnRlZCBhZnRlciArIG9yIC0gc2lnblxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIitcIiB8fCBnW2xlZnRdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdENsb3NpbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kTGVmdEJvcmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2NhbiByaWdodFxuICAgICAgICAgICAgZm9yIChyaWdodCA9IGk7ICFmb3VuZFJpZ2h0Qm9yZGVyOyByaWdodCsrKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhpdCB0aGUgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgcmlnaHQgc3RyaW5nIHdhbGwgb3IgY2xvc2luZyBicmFja2V0XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0ID49IGcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZG9lcyBub3Qgc2V0IGZvdW5kUmlnaHRCb3JkZXIgdmFyaWFibGUgdG8gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgaWYgYm90aCBzaWRlcyBhcmUgYnJhY2tldHMgb3Igb3V0ZXIgd2FsbHMgb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN0cmluZywgbmV3IGJyYWNrZXRzIHNob3VsZCBub3QgYmUgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBoaXRzIGNsb3NpbmcgYnJhY2tldCwgaXQgY2hlY2tzIGlmIGl0IGhpdCBvcGVuaW5nIGJyYWNrZXQgYmVmb3JlXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdE9wZW5pbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYXJrcyB0aGF0IGl0IGhpdCBjbG9zaW5nIGJyYWNrZXQsIHNvIHRoYXQgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgbGF0ZXIsXG4gICAgICAgICAgICAgICAgLy8gaXQga25vd3MgdGhhdCBpdCBzaG91bGRuJ3QgXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIihcIikganVzdEhpdE9wZW5pbmdCcmFja2V0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChnW3JpZ2h0XSA9PT0gXCIrXCIgfHwgZ1tyaWdodF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0T3BlbmluZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRSaWdodEJvcmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIG9uIG9uZSBvZiB0aGUgc2lkZXMgdGhlcmUgaXMgKyBvciAtIHNpZ25cbiAgICAgICAgICAgIGlmIChmb3VuZExlZnRCb3JkZXIgfHwgZm91bmRSaWdodEJvcmRlcikge1xuICAgICAgICAgICAgICAgIC8vIFNsaWNlIG9yaWdpbmFsIHN0cmluZyBhdCB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uc1xuICAgICAgICAgICAgICAgIGxldCBvbmUgPSBnLnNsaWNlKDAsIGxlZnQpO1xuICAgICAgICAgICAgICAgIGxldCB0d28gPSBnLnNsaWNlKGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICBsZXQgdGhyZWUgPSBnLnNsaWNlKHJpZ2h0LCBnLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgYnJhY2tldHMgYmV0d2VlbiBmb3JtZXIgdGhyZWUgc3RyaW5ncyB0byBmb3JtXG4gICAgICAgICAgICAgICAgLy8gbmV3IHN0cmluZyB3aXRoIGluc2VydGVkIGJyYWNrZXRzXG4gICAgICAgICAgICAgICAgZyA9IG9uZSArIFwiKFwiICsgdHdvICsgXCIpXCIgKyB0aHJlZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVzZXQgYm9yZGVyIHZhcmlhYmxlc1xuICAgICAgICAgICAgZm91bmRMZWZ0Qm9yZGVyID0gZmFsc2U7XG4gICAgICAgICAgICBmb3VuZFJpZ2h0Qm9yZGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZztcbn0iLCJpbXBvcnQge1xuICAgIGdldFVuY2FsY3VsYXRlZE5vZGVzLFxuICAgIGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnksXG4gICAgb2JqZWN0U2l6ZSxcbiAgICB3YXNDYWxjdWxhdGVkLFxuICAgIGFsbElucHV0c0NhbGN1bGF0ZWQsXG4gICAgY2FsY3VsYXRlT3V0cHV0LFxuICAgIGdldFRvdWNoSW5wdXRzLFxuICAgIGluaXRUaW1lLFxuICAgIGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyxcbiAgICBnZXRPdGhlclNpZGVPZkNvbm5lY3RvclxufSBmcm9tICcuL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JpcHRHZW5lcmF0b3IoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uLCBhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10pIHtcbiAgICAvLyBFeGVjdXRhYmxlIHRvIHN0b3JlIGdlbmVyYXRlZCBqYXZhc2NyaXB0IGNvZGUuIEFueSBpbml0aWFsaXNhdGlvbiBjb2RlIHNob3VsZCBiZSBoZXJlLlxuICAgIGxldCBleGVBcnJheTogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgZXhlY3V0YWJsZSA9IFwidmFyIGdyYXBocyA9IHt9O1xcblwiO1xuXG4gICAgLy8gU2V0dXAgdGltZVxuICAgIGV4ZWN1dGFibGUgKz0gaW5pdFRpbWUoLTIsIDIsIDAuMDAxKTtcblxuICAgIC8vIENhbGN1bGF0ZWQgbm9kZXMgaGF2ZSBmb2xsb3dpbmcgc2hhcGU6IFwibm9kZUlkOm91dHB1dElkXCJcbiAgICBsZXQgY2FsY3VsYXRlZE5vZGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgLy8gU3RhdGlzdGljcyBvYmplY3RcbiAgICBsZXQgc3RhdGlzdGljcyA9IHtcbiAgICAgICAgbG9vcENvdW50ZXI6IDAsXG4gICAgICAgIGluaXRpYWxUb3RhbE5vZGVzOiBvYmplY3RTaXplKGFsbE5vZGVzKSxcbiAgICAgICAgaW5pdGlhbFRvdGFsQ29ubmVjdG9yczogYWxsQ29ubmVjdGlvbnMubGVuZ3RoXG4gICAgfTtcblxuICAgIC8vIFNlcGFyYXRlcyB1bmNhbGN1bGF0ZWQgbm9kZXMgYW5kIHNjb3BlcyBhdCB0aGUgc3RhcnQuXG4gICAgbGV0IHsgdW5jYWxjdWxhdGVkTm9kZXMsIGFsbFNjb3BlcyB9ID0gZ2V0VW5jYWxjdWxhdGVkTm9kZXMoYWxsTm9kZXMpO1xuXG4gICAgLy8gU2VwYXJhdGUgdG91Y2ggbm9kZXMgZm9ybSByZWd1bGFyIG5vZGVzXG4gICAgbGV0IHRvdWNoTm9kZXNTZXBhcmF0ZWQgPSBnZXRUb3VjaElucHV0cyh1bmNhbGN1bGF0ZWROb2Rlcyk7XG5cbiAgICB1bmNhbGN1bGF0ZWROb2RlcyA9IHRvdWNoTm9kZXNTZXBhcmF0ZWQudW5jYWxjdWxhdGVkTm9kZXM7XG5cbiAgICAvLyBEZWFsIHdpdGggdG91Y2ggQ29udHJvbHNcbiAgICBsZXQgdG91Y2hOb2RlcyA9IHRvdWNoTm9kZXNTZXBhcmF0ZWQudG91Y2hOb2RlcztcblxuICAgIGV4ZWN1dGFibGUgKz0gZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzKHRvdWNoTm9kZXMpO1xuXG4gICAgZm9yIChsZXQgdCBpbiB0b3VjaE5vZGVzKSB7XG4gICAgICAgIGZvciAobGV0IG8gaW4gdG91Y2hOb2Rlc1t0XS5vdXRwdXRzKSB7XG4gICAgICAgICAgICBjYWxjdWxhdGVkTm9kZXMucHVzaChgJHt0fToke3RvdWNoTm9kZXNbdF0ub3V0cHV0c1tvXS50aXRsZX1gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29ubmVjdGlvbiBEaWN0aW9uYXJ5IGNvbnRhaW5zIGNvbm5lY3Rpb25zIGluIGtleTogdmFsdWUgZm9ybWF0LCB3aGVyZVxuICAgIC8vIGJvdGggY29udGFpbiBub2RlSWQgYW5kIHNldHRpbmdJZCBhcyBzdHJpbmdzIHNlcGFyYXRlZCBieSBhIGNvbG9uLlxuICAgIGxldCBjb25uZWN0aW9uRGljdGlvbmFyeSA9IGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnkoYWxsQ29ubmVjdGlvbnMpO1xuXG4gICAgLy8gR2VuZXJhbCBydWxlcyBmb3IgYWxnb3JpdGhtIHdyaXRpbmc6XG4gICAgLy8gKiB1c2UgYXMgbWFueSBmdW5jdGlvbnMgYXMgcG9zc2libGUgKGluIHBlcmZvcm1hbmNlIGJvdW5kcylcbiAgICAvLyAqIFxuXG4gICAgLy8gMC4gTG9vcCB0aHJvdWdoIHVuY2FsY3VsYXRlZCBub2RlcyBhbmQgZmluZCBzY29wZXMuIFNjb3BlcyBkbyBub3QgaGF2ZSBvdXRwdXRzLCBzbyBubyBuZWVkIHRvIGZpbmQgaW5wdXRzLlxuICAgIC8vIDAuMCBEbyBpdCBpbiBhIGZ1bmN0aW9uP1xuXG4gICAgLy8gMS4gTG9vcCB1bnRpbCBhbGwgbm9kZXMgYXJlIGNhbGN1bGF0ZWRcbiAgICAvLyB8ICAgMS4gQ2hlY2sgaWYgbm9kZSB3YXMgY2FsY3VsYXRlZCBiZWZvcmUsIGlmIHllcyBnbyB0byBuZXh0IG5vZGUuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgMi4gSWYgd2FzIG5vdCBjYWxjdWxhdGVkOlxuICAgIC8vIHwgICB8ICAgMS4gQ2hlY2sgaWYgYWxsIGNvbm5lY3RlZCBpbnB1dHMgYXJlIGNvbm5lY3RlZCB0byB0aGUgY2FsY3VsYXRlZCBub2RlcywgaWYgbm90IC0gZ28gdG8gbmV4dCBub2RlLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIHwgICAyLiBJZiB5ZXMsIHNhdmUgYWxsIHVuY29ubmVjdGVkIGlucHV0cyAodmFsdWUgZnJvbSBkZWZhdWx0IHZhbHVlKS4gKGZ1bmN0aW9uIGZvciBlYWNoIHNhdmUpXG4gICAgLy8gfCAgIHwgICAzLiBDaGVjayBpZiBvdXRwdXQgaXMgcG9pbnRpbmcgdG8gYSBnZW5lcmF0b3IuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgfCAgIDQuIElmIHllcywgcGFyc2UgZ2VuZXJhdG9yXG4gICAgLy8gfCAgIHwgICB8ICAgMS4gU2NhbiBnZW5lcmF0b3IgYW5kIHNhdmUgdmFyaWFibGVzXG4gICAgLy8gfCAgIHwgICB8ICAgMi4gSWYgdmFyaWFibGUgaXMgYSBnZW5lcmF0b3IgZ28gdG8gc3RlcCAxLjIuNFxuICAgIC8vIHwgICB8ICAgfCAgIDMuIExvb3AgdW50aWwgYWxsIGdlbmVyYXRvcnMgd2VyZSBwYXJzZWRcbiAgICAvLyB8ICAgfCAgIHwgLS0tLS0tLS0tLS0gSW4gZm9sbG93aW5nLCBpbnB1dHMgYXJlIGNoZWNrZWQgZmlyc3Qgc2luY2Ugc2V0dGluZyBjYW4gYmUgYW4gaW5wdXQgLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHwgICB8ICAgNS4gQ2hlY2sgaWYgb3V0cHV0IGlzIHBvaW50aW5nIHRvIGFuIGlucHV0LCBpZiB5ZXMgYXNzaWduIGlucHV0IHZhcmlhYmxlIHRvIHRoZSBvdXRwdXQgdmFyaWFibGVcbiAgICAvLyB8ICAgfCAgIDYuIENoZWNrIGlmIG91dHB1dCBpcyBwb2ludGluZyB0byBhIHNldHRpbmcsIGlmIHllcyBhc3NpZ24gY29uc3RhbnQgdG8gdGhlIHNldHRpbmdcbiAgICAvLyAyLiBGb3IgZWFjaCBzY29wZTpcbiAgICAvLyB8ICAgMS4gR2V0IGFsbCBpbnB1dHMgYW5kIHNhdmUgdGhlbSBpbiB2YXJpYWJsZXMgKGFzc3VtZWQgdG8gYmUgY2FsY3VsYXRlZCBzaW5jZSB0ZXJtaW5hdGlvbiBjb25kaXRpb24gZnJvbSBzdGVwIDEgaXMgYmFzZWQgb24gYWxsIG5vZGVzIGJlaW5nIGNhbGN1bGF0ZWQuKVxuICAgIC8vIHwgICAyLiBQYXJzZSBmaXJzdCBnZW5lcmF0b3IgYW5kIGdlbmVyYXRlIHNjb3BlIG91dHB1dCB2YXJpYWJsZSAobWFraW5nIHN1cmUgdGhhdCBhbGwgdmFyaWFibGVzIGZyb20gZ2VuZXJhdG9yIHdlcmUgc2F2ZWQgYmVmb3JlaGFuZClcbiAgICAvLyB8ICAgMy4gR2VuZXJhdGUgYW4gYXJyYXkgb2Ygb3V0cHV0IGRhdGEgYmFzZWQgb24gZ2VuZXJhbCAob3IgY29ubmVjdGVkKSB0aW1lIGFycmF5IGFuZCBzYXZlIGl0IGludG8gYSB2YXJpYWJsZVxuICAgIC8vIHwgICA0LiBDcmVhdGUgcmVkcmF3IGZ1bmN0aW9uLCBpbnNpZGUgdGhhdCBmdW5jdGlvbjpcbiAgICAvLyB8ICAgfCAgIDEuIEZpbmQgYXBwcm9wcmlhdGUgY2FudmFzIG5vZGUgaW4gdGhlIGRvbVxuICAgIC8vIHwgICB8ICAgMi4gR2V0IGNvbnRleHRcbiAgICAvLyB8ICAgfCAgIDMuIFJlcG9wdWxhdGUgZ3JhcGggYXJyYXkgd2l0aCBuZXcgZ3JhcGhzLlxuICAgIC8vIHwgICA1LiBDcmVhdGUgdXBkYXRlRGF0YSBmdW5jdGlvbiwgaW5zaWRlIHRoYXQgZnVuY3Rpb246XG4gICAgLy8gfCAgIHwgICAxLiBMb29wIHRocm91Z2ggZ3JhcGggYXJyYXkgYW5kIHVwZGF0ZSBncmFwaHMgd2l0aCBuZXcgZGF0YS5cblxuXG4gICAgLy8gMS4gTG9vcCB1bnRpbCBhbGwgbm9kZXMgYXJlIGNhbGN1bGF0ZWQgYW5kIGNvdW50IG51bWJlciBvZiBpdGVyYXRpb25zIGZvciBzdGF0aXN0aWNzXG4gICAgZm9yIChzdGF0aXN0aWNzLmxvb3BDb3VudGVyID0gMDsgb2JqZWN0U2l6ZSh1bmNhbGN1bGF0ZWROb2RlcykgPiAwOyBzdGF0aXN0aWNzLmxvb3BDb3VudGVyKyspIHtcbiAgICAgICAgLy8gMS4wIExvb3AgdGhyb3VnaCBhbGwgdW5jYWxjdWxhdGVkIG5vZGVzXG4gICAgICAgIGZvciAobGV0IG5vZGVLZXkgaW4gdW5jYWxjdWxhdGVkTm9kZXMpIHtcbiAgICAgICAgICAgIC8vIFNhdmUgY3VycmVudCBub2RlIGludG8gYSBjb25zdGFudFxuICAgICAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB1bmNhbGN1bGF0ZWROb2Rlc1tub2RlS2V5XTtcblxuICAgICAgICAgICAgLy8gR28gdG8gbmV4dCBub2RlIGlmIG5vdCBhbGwgY29ubmVjdGVkIGlucHV0cyB3ZXJlIGNhbGN1bGF0ZWQgYWxyZWFkeVxuICAgICAgICAgICAgaWYgKCFhbGxJbnB1dHNDYWxjdWxhdGVkKG5vZGVLZXksIGN1cnJlbnROb2RlLmlucHV0cywgYWxsQ29ubmVjdGlvbnMsIGNhbGN1bGF0ZWROb2RlcykpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0czogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGV2ZXJ5IG91dHB1dCBvZiB0aGUgbm9kZSB0byBjYWxjdWxhdGUgdGhlbVxuICAgICAgICAgICAgZm9yIChsZXQgbyA9IDA7IG8gPCBjdXJyZW50Tm9kZS5vdXRwdXRzLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0S2V5ID0gY3VycmVudE5vZGUub3V0cHV0c1tvXS50aXRsZTtcbiAgICAgICAgICAgICAgICAvLyBJZiBjdXJyZW50IG91dHB1dCB3YXMgY2FsY3VsYXRlZCBhbHJlYWR5LCBza2lwIHRvIG5leHQgb25lXG4gICAgICAgICAgICAgICAgaWYgKHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzLCBub2RlS2V5LCBvdXRwdXRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlQ2FsY3VsYXRlZE91dHB1dHMucHVzaChgJHtub2RlS2V5fToke291dHB1dEtleX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgbm90LCBjYWxjdWxhdGUgaXQgYW5kIGFwcGVuZCB0byB0aGUgZXhlY3V0YWJsZSB0ZXh0LlxuICAgICAgICAgICAgICAgIGxldCB7IGV4ZSwgd2FzU3VjY2Vzc2Z1bCB9ID0gY2FsY3VsYXRlT3V0cHV0KG5vZGVLZXksIG91dHB1dEtleSwgY3VycmVudE5vZGUsIGFsbENvbm5lY3Rpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAod2FzU3VjY2Vzc2Z1bCkge1xuICAgICAgICAgICAgICAgICAgICBleGVjdXRhYmxlICs9IGV4ZTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkTm9kZXMucHVzaChgJHtub2RlS2V5fToke291dHB1dEtleX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBDb3VsZCBub3QgZ2VuZXJhdGUgb3V0cHV0IGNvZGU6ICR7bm9kZUtleX0gLSAke291dHB1dEtleX0gfCBzY3JpcHRHZW5lcmF0b3IudHNgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlQ2FsY3VsYXRlZE91dHB1dHMubGVuZ3RoID09PSBjdXJyZW50Tm9kZS5vdXRwdXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB1bmNhbGN1bGF0ZWROb2Rlc1tub2RlS2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIExvb3AgdGhyb3VnaCBhbGwgc2NvcGVzIGFuZCBkcmF3IGdyYXBoc1xuXG4gICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICBleGVjdXRhYmxlID0gXCJcIjtcblxuICAgIGV4ZWN1dGFibGUgKz0gXCJmdW5jdGlvbiB1cGRhdGUoKSB7XFxuXCI7XG5cbiAgICBmb3IgKGxldCBzIGluIGFsbFNjb3Blcykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2NvcGUgPSBhbGxTY29wZXNbc107XG5cbiAgICAgICAgLy8gY29uc3Qgb3V0cHV0R2VuZXJhdG9yID0gY3VycmVudFNjb3BlLmdlbmVyYXRvcnNbMF07XG5cbiAgICAgICAgLy8gY29uc3Qgb3V0cHV0VG9rZW5zID0gdG9rZW5pemVHZW5lcmF0b3Iob3V0cHV0R2VuZXJhdG9yLnZhbHVlLCBzKTtcblxuICAgICAgICBjb25zdCB7IG90aGVyTm9kZUlkLCBvdGhlclNldHRpbmdJZCB9ID0gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoYWxsQ29ubmVjdGlvbnMsIG51bGwsIHsgbm9kZUlkOiBzLCBzZXR0aW5nSWQ6IFwic2lnbmFsXCIgfSk7XG5cbiAgICAgICAgZXhlY3V0YWJsZSArPSBgXG4gICAgICAgICAgICBpZihncmFwaHMuJHtzfSkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0gW107XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtuZXdEYXRhLnB1c2goJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0W2ldKSk7fVxuICAgICAgICAgICAgICAgIGdyYXBocy4ke3N9LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IG5ld0RhdGE7XG4gICAgICAgICAgICAgICAgZ3JhcGhzLiR7c30udXBkYXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBjYW52YXNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke3N9XCIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHZpZXdTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBjYW52YXNOb2RlLnBhcmVudE5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzTm9kZS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgdyA9IHZpZXdTaXplLng7XG4gICAgICAgICAgICAgICAgdmFyIGggPSB2aWV3U2l6ZS55IC8gJHtvYmplY3RTaXplKGFsbFNjb3Blcyl9O1xuXG4gICAgICAgICAgICAgICAgY2FudmFzTm9kZS53aWR0aCA9IHc7XG4gICAgICAgICAgICAgICAgY2FudmFzTm9kZS5oZWlnaHQgPSBoO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCgke290aGVyTm9kZUlkfSR7b3RoZXJTZXR0aW5nSWR9KHRbaV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge2xhYmVsczogdC5tYXAodGkgPT4gdGkudG9GaXhlZCgyKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2lnbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyR7c2NvcGVDb2xvcihjdXJyZW50U2NvcGUuc2V0dGluZ3NbMV0udmFsdWUpfScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwcGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGl0UmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlclJhZGl1czogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSR7Y3VycmVudFNjb3BlLnNldHRpbmdzWzBdLnZhbHVlID09IFwidHJ1ZVwiID8gJycgOiBgLCBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMC4wMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0sIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFNpemU6IDAuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfSR7Z2VuZXJhdGVUaXRsZShjdXJyZW50U2NvcGUuc2V0dGluZ3NbMl0pfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgZ3JhcGhzLiR7c30gPSBteUNoYXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICBgO1xuXG4gICAgICAgIGV4ZUFycmF5LnB1c2goZXhlY3V0YWJsZSk7XG4gICAgICAgIGV4ZWN1dGFibGUgPSBcIlwiO1xuICAgIH1cblxuICAgIGV4ZWN1dGFibGUgKz0gXCJ9O1xcblwiXG4gICAgZXhlY3V0YWJsZSArPSBcInVwZGF0ZSgpO1wiXG5cbiAgICBleGVBcnJheS5wdXNoKGV4ZWN1dGFibGUpO1xuICAgIGV4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgLy8gcmV0dXJuIFVnbGlmeUpTLm1pbmlmeShleGVjdXRhYmxlKTtcblxuICAgIHJldHVybiBleGVBcnJheTtcbn1cblxuXG5mdW5jdGlvbiBzY29wZUNvbG9yKGNvbG9yOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAoY29sb3IpIHtcbiAgICAgICAgY2FzZSBcInJlZFwiOiByZXR1cm4gJ3JnYigyNTUsIDEyMCwgMTMyKSc7XG4gICAgICAgIGNhc2UgXCJibHVlXCI6IHJldHVybiAncmdiKDEzMiwgMTIwLCAyNTUpJztcbiAgICAgICAgY2FzZSBcImdyZWVuXCI6IHJldHVybiAncmdiKDUwLCAyMTAsIDYwKSc7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAncmdiKDI1NSwgMTIwLCAxMzIpJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGl0bGUoc2V0dGluZzogTm9kZVNldHRpbmdzU2hhcGUpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAoc2V0dGluZy50aXRsZSkge1xuICAgICAgICBjYXNlIFwiXCI6IHJldHVybiBcIlwiO1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gKGAsIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnJHtzZXR0aW5nLnZhbHVlfScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0J1xuICAgICAgICAgICAgfWApXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgdG9rZW5pemVHZW5lcmF0b3IsIEdlbmVyYXRvclNlZ21lbnQgfSBmcm9tICcuL2dlbmVyYXRvclRva2VuaXplcic7XG5pbXBvcnQgeyB0b2tlblRvSnMgfSBmcm9tICcuL3Rva2VuVG9Kcyc7XG5cbi8vIEdldCBhbGwgbm9kZXMgdGhhdCBhcmUgbm90IHNjb3BlcywgYW5kIHNhdmUgc2NvcGVzIGludG8gdGhlaXIgb3duIGNvbGxlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmNhbGN1bGF0ZWROb2RlcyAoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKSA6IHt1bmNhbGN1bGF0ZWROb2RlczogTm9kZUNvbGxlY3Rpb24sIGFsbFNjb3BlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgdW5jYWxjdWxhdGVkOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCBzY29wZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG5cbiAgICBmb3IobGV0IGkgaW4gYWxsTm9kZXMpIHtcbiAgICAgICAgaWYoU3RyaW5nKGkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBzY29wZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuY2FsY3VsYXRlZFtpXSA9IGFsbE5vZGVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IHVuY2FsY3VsYXRlZCxcbiAgICAgICAgYWxsU2NvcGVzOiBzY29wZXNcbiAgICB9O1xufVxuXG4vLyBHZW5lcmF0ZSBjb25uZWN0aW9uIGRpY3Rpb25hcnlcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5IChhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10pOiB7W2Nvbm5lY3RvclN0YXJ0OiBzdHJpbmddOiBzdHJpbmd9IHtcbiAgICBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnk6IHtbY29ubmVjdG9yU3RhcnQ6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb25uZWN0b3JTdGFydCA9IGFsbENvbm5lY3Rpb25zW2ldLmNvbm5lY3RvclN0YXJ0O1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmQgPSBhbGxDb25uZWN0aW9uc1tpXS5jb25uZWN0b3JFbmQ7XG5cbiAgICAgICAgY29uc3QgY29ubmVjdG9yU3RhcnRDb21iaW5lZCA9IGNvbm5lY3RvclN0YXJ0Lm5vZGVJZCArIFwiOlwiICsgY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkO1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmRDb21iaW5lZCA9IGNvbm5lY3RvckVuZC5ub2RlSWQgKyBcIjpcIiArIGNvbm5lY3RvckVuZC5zZXR0aW5nSWQ7XG5cbiAgICAgICAgY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdG9yU3RhcnRDb21iaW5lZF0gPSBjb25uZWN0b3JFbmRDb21iaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29ubmVjdGlvbkRpY3Rpb25hcnk7XG59XG5cbi8vIENhbGN1bGF0ZSBvYmplY3Qgc2l6ZVxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFNpemUgKG9iajogb2JqZWN0KTogbnVtYmVyIHtcbiAgICBsZXQgYyA9IDA7XG4gICAgZm9yKGxldCBpIGluIG9iaikgYysrO1xuICAgIHJldHVybiBjKys7XG59XG5cbi8vIENoZWNrIGlmIG5vZGUgd2FzIGNhbGN1bGF0ZWQgYWxyZWFkeVxuZXhwb3J0IGZ1bmN0aW9uIHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzOiBzdHJpbmdbXSwgbm9kZUtleTogc3RyaW5nLCBvdXRwdXRLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYWxjdWxhdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU3BsaXQgc3RyaW5nIGZyb20gY2FsY3VsYXRlZCBub2RlcyBhcnJheSBhbmQgZ2V0IG5vZGUgYW5kIG91dHB1dCBrZXlzXG4gICAgICAgIGNvbnN0IHNwbGl0dGVkID0gY2FsY3VsYXRlZE5vZGVzW2ldLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE5vZGUgPSBzcGxpdHRlZFswXTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE91dHB1dCA9IHNwbGl0dGVkWzFdO1xuXG4gICAgICAgIGlmKGNhbGN1bGF0ZWROb2RlID09PSBub2RlS2V5ICYmIGNhbGN1bGF0ZWRPdXRwdXQgPT09IG91dHB1dEtleSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBHZXQgbm9kZUlkIGFuZCBzZXR0aW5nSWQgb2YgdGhlIG90aGVyIHNpZGUgb2YgdGhlIGNvbm5lY3Rpb246XG5leHBvcnQgZnVuY3Rpb24gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoXG4gICAgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBcbiAgICBjb25uZWN0b3JJbnB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9LFxuICAgIGNvbm5lY3Rvck91dHB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9KToge290aGVyTm9kZUlkOiBzdHJpbmcsIG90aGVyU2V0dGluZ0lkOiBzdHJpbmd9IHtcblxuICAgIGlmKGNvbm5lY3RvcklucHV0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgY29ubmVjdG9yIHN0YXJ0cy4uLlwiKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RvciA9IGFsbENvbm5lY3Rpb25zW2ldO1xuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIHN0YXJ0XG4gICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQubm9kZUlkID09PSBjb25uZWN0b3JJbnB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkID09PSBjb25uZWN0b3JJbnB1dC5zZXR0aW5nSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZUlkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyU2V0dGluZ0lkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChjb25uZWN0b3JPdXRwdXQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTY2FubmluZyBjb25uZWN0b3IgZW5kcy4uLiBcIiwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29ubmVjdG9yID0gYWxsQ29ubmVjdGlvbnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ29tcGFyaW5nIGZvbGxvd2luZyBjb25uZWN0b3JzOiBcIiwgY29ubmVjdG9yLmNvbm5lY3RvckVuZCwgY29ubmVjdG9yT3V0cHV0KVxuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIGVuZFxuICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvckVuZC5ub2RlSWQgPT09IGNvbm5lY3Rvck91dHB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZCA9PT0gY29ubmVjdG9yT3V0cHV0LnNldHRpbmdJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclNldHRpbmdJZDogY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0LnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3RoZXJOb2RlSWQ6IG51bGwsXG4gICAgICAgIG90aGVyU2V0dGluZ0lkOiBudWxsXG4gICAgfVxufVxuXG5cbi8vIENoZWNrIGlmIGFsbCBjb25uZWN0ZWQgaW5wdXRzIGluIHRoZSBub2RlIGFyZSBjb25uZWN0ZWQgdG8gdGhlIG91dHB1dHMgdGhhdCB3ZXJlIGFscmVhZHkgY2FsY3VsYXRlZCBvciBhcmUgbm90IGNvbm5lY3RlZFxuZXhwb3J0IGZ1bmN0aW9uIGFsbElucHV0c0NhbGN1bGF0ZWQobm9kZUlkOiBzdHJpbmcsIGlucHV0czogTm9kZUlucHV0U2hhcGVbXSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgbGV0IGRhdGE6IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudERhdGEgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7bm9kZUlkOiBub2RlSWQsIHNldHRpbmdJZDogaW5wdXRzW2ldLnRpdGxlfSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGNvbm5lY3RlZFxuICAgICAgICBpZihvdGhlck5vZGVJZCAmJiBvdGhlclNldHRpbmdJZCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2FzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIGlmKHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzLCBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIG5vdCBjb25uZWN0ZWRcbiAgICAgICAgICAgIGN1cnJlbnREYXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaChjdXJyZW50RGF0YSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBkIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGFbZF0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIHNwZWNpZmljIG91dHB1dCBvZiB0aGUgbm9kZVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU91dHB1dChcbiAgICBub2RlSWQ6IHN0cmluZywgXG4gICAgb3V0cHV0S2V5OiBzdHJpbmcsIFxuICAgIGN1cnJlbnROb2RlOiBTaWduYWxOb2RlLFxuICAgIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHsgZXhlOiBzdHJpbmcsIHdhc1N1Y2Nlc3NmdWw6IGJvb2xlYW4gfSB7XG4gICAgXG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgY29uc3QgZ2VuZXJhdG9ySWQgPSBpc0dlbmVyYXRvcihjdXJyZW50Tm9kZSwgb3V0cHV0S2V5KTtcblxuICAgIC8vIENoZWNrIGlmIG91dHB1dCBpcyBhIGdlbmVyYXRvclxuICAgIGlmKGdlbmVyYXRvcklkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBjb25zdCBvdXRwdXRHZW5lcmF0b3IgPSBjdXJyZW50Tm9kZS5nZW5lcmF0b3JzW2dlbmVyYXRvcklkXTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSB0b2tlbnNcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdG9rZW5pemVHZW5lcmF0b3Iob3V0cHV0R2VuZXJhdG9yLnZhbHVlLCBub2RlSWQpO1xuXG4gICAgICAgIC8vIFNhdmUgdmFyaWFibGVzIGZpcnN0XG4gICAgICAgIGUgKz0gc2F2ZVZhcmlhYmxlcyhub2RlSWQsIGN1cnJlbnROb2RlLCB0b2tlbnMsIGFsbENvbm5lY3Rpb25zKTtcblxuICAgICAgICAvLyBTYXZlIG91dHB1dFxuICAgICAgICBlICs9IHRva2VuVG9Kcyhub2RlSWQsIG91dHB1dEdlbmVyYXRvci50aXRsZSwgdG9rZW5zKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRJZCA9IGlzSW5wdXQoY3VycmVudE5vZGUsIG91dHB1dEtleSk7XG5cbiAgICBpZihpbnB1dElkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IHNhdmVJbnB1dFZhcmlhYmxlKGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUlkLCBvdXRwdXRLZXksIGlucHV0SWQpO1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZUlkfSR7Y3VycmVudE5vZGUuaW5wdXRzW2lucHV0SWRdLnRpdGxlfX07XFxuYDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dGluZ0lkID0gaXNTZXR0aW5nKGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuXG4gICAgaWYoc2V0dGluZ0lkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7Y3VycmVudE5vZGUuc2V0dGluZ3Nbc2V0dGluZ0lkXS52YWx1ZX19O1xcbmA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4ZTogZSxcbiAgICAgICAgICAgIHdhc1N1Y2Nlc3NmdWw6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGV4ZTogXCJcIixcbiAgICAgICAgd2FzU3VjY2Vzc2Z1bDogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVWYXJpYWJsZXMobm9kZUtleTogc3RyaW5nLCBub2RlOiBTaWduYWxOb2RlLCBjb2RlOiBHZW5lcmF0b3JTZWdtZW50W10sIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBzID0gMDsgcyA8IGNvZGUubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgaWYoY29kZVtzXS50eXBlID09PSBcInZhclwiKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJOYW1lOiBzdHJpbmcgPSBTdHJpbmcoY29kZVtzXS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJOYW1lLnN1YnN0cihub2RlS2V5Lmxlbmd0aCwgdmFyTmFtZS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTUEVDSUFMIENBU0UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZih2YXJOYW1lID09PSBcIlBJXCIgfHwgdmFyTmFtZSA9PT0gXCJ0aW1lXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBJTlBVVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgaW5wdXQgaW5kZXhcbiAgICAgICAgICAgIGxldCBpbnB1dEtleTogbnVtYmVyID0gaXNJbnB1dChub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiB2YXJpYWJsZSBpcyB0aGUgaW5wdXQgKGlmIG5vdCBpbnB1dCBpdCB3aWxsIGJlIEluZmluaXR5KVxuICAgICAgICAgICAgaWYoaW5wdXRLZXkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZVxuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gc2F2ZUlucHV0VmFyaWFibGUobm9kZSwgYWxsQ29ubmVjdGlvbnMsIG5vZGVLZXksIHZhcmlhYmxlTmFtZSwgaW5wdXRLZXkpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEZvdW5kIHZhcmlhYmxlIGluIGlucHV0cyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBbmQgY29udGludWUgdG8gdGhlIG5leHQgc3RlcCBpbiB0aGUgdG9rZW5pc2VkIGdlbmVyYXRvciBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIEdFTkVSQVRPUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgZ2VuZXJhdG9yIGluZGV4XG4gICAgICAgICAgICBsZXQgZ2VuZXJhdG9yS2V5OiBudW1iZXIgPSBpc0dlbmVyYXRvcihub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiBnZW5lcmF0b3IgaW5kZXggaXMgbm90IGFuIEluZmluaXR5LCB0aGUgc2V0dGluZyBpcyB0aGUgZ2VuZXJhdG9yLCBhbmQgc2hvdWxkIGJlIHByb2Nlc3NlZCBhcyBvbmVcbiAgICAgICAgICAgIGlmKGdlbmVyYXRvcktleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSBub2RlLmdlbmVyYXRvcnNbZ2VuZXJhdG9yS2V5XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHRva2VuaXplR2VuZXJhdG9yKGdlbmVyYXRvci52YWx1ZSwgbm9kZUtleSk7XG5cbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgdG9rZW5zLCBhbGxDb25uZWN0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBnZW5lcmF0b3IgdGl0bGVcbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHRva2VuVG9Kcyhub2RlS2V5LCBnZW5lcmF0b3IudGl0bGUsIHRva2Vucyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gZ2VuZXJhdG9ycyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0byB0aGUgbmV4dCB0b2tlblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTRVRUSU5HIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBzZXR0aW5nIGluZGV4XG4gICAgICAgICAgICBsZXQgc2V0dGluZ0tleTogbnVtYmVyID0gaXNTZXR0aW5nKG5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHNldHRpbmcgaW5kZXggaXMgbm90IGluZmluaXR5IC0gaXQncyBhIG1hdGNoIVxuICAgICAgICAgICAgaWYoc2V0dGluZ0tleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gc2V0dGluZ3MgJHt2YXJpYWJsZU5hbWV9IC0gJHtub2RlS2V5fWApO1xuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gYHZhciAke25vZGVLZXl9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZS5zZXR0aW5nc1tzZXR0aW5nS2V5XS52YWx1ZX0gfTtcXG5gO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBOT1QgQU5ZIE9GIFRIUkVFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIElmIG5vdCBvbmUgb2YgcHJldmlvdXMgdGhyZWUsIGFsZXJ0IHVzZXIuXG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IGBhbGVydChcIkNvdWxkbid0IGZpbmQgZ2VuZXJhdG9yIHZhcmlhYmxlIGluIHRoZSBpbnB1dHMsIGdlbmVyYXRvcnMgb3Igc2V0dGluZ3MhICR7bm9kZUtleX0gLSAke3Zhck5hbWV9XCIpO1xcbmA7XG4gICAgICAgIH0gZWxzZSBpZihjb2RlW3NdLnR5cGUgPT09IFwibWF0aFwiIHx8IGNvZGVbc10udHlwZSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgY29kZVtzXS5jb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gc2F2ZUlucHV0VmFyaWFibGUobm9kZTogU2lnbmFsTm9kZSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBub2RlS2V5OiBzdHJpbmcsIHNldHRpbmdLZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGU6IHN0cmluZztcbiAgICBjb25zdCBjb25uZWN0b3JFbmQgPSB7XG4gICAgICAgIG5vZGVJZDogbm9kZUtleSxcbiAgICAgICAgc2V0dGluZ0lkOiBzZXR0aW5nS2V5XG4gICAgfVxuICAgIFxuICAgIGxldCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCBjb25uZWN0b3JFbmQpO1xuXG4gICAgLy8gY29uc29sZS5sb2coYFRyYWNpbmcgYmFjayB0aGUgaW5wdXQ6ICR7bm9kZUtleX06JHtzZXR0aW5nS2V5fSAtPiAke290aGVyTm9kZUlkfToke290aGVyU2V0dGluZ0lkfWApO1xuICAgIFxuICAgIC8vIElmIG5vZGUgaXMgY29ubmVjdGVkXG4gICAgaWYob3RoZXJOb2RlSWQgJiYgb3RoZXJTZXR0aW5nSWQpIHtcbiAgICAgICAgLy8gU2F2ZSBcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0aW1lKX07XFxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTYXZlIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtub2RlLmlucHV0c1tpbmRleF0uZGVmYXVsdH19O1xcbmBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gaXNJbnB1dCAobm9kZTogU2lnbmFsTm9kZSwgc2V0dGluZ0tleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBDaGVjayBpZiB2YXJpYWJsZSBpcyBpbiBpbnB1dHNcbiAgICBpZihub2RlLmlucHV0cykge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZS5pbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIElmIHZhcmlhYmxlIGlzIHRoZSBpbnB1dCwgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIGlmKG5vZGUuaW5wdXRzW2ldLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW5maW5pdHk7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5nZW5lcmF0b3JzKSB7XG4gICAgICAgIGlmKG5vZGUuZ2VuZXJhdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IobGV0IGcgPSAwOyBnIDwgbm9kZS5nZW5lcmF0b3JzLmxlbmd0aDsgZysrKSB7XG4gICAgICAgICAgICAgICAgaWYobm9kZS5nZW5lcmF0b3JzW2ddLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cblxuZnVuY3Rpb24gaXNTZXR0aW5nKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5zZXR0aW5ncykge1xuICAgICAgICBmb3IobGV0IHMgPSAwOyBzIDwgbm9kZS5zZXR0aW5ncy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gc2V0dGluZ0tleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEluZmluaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hJbnB1dHMoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKToge3VuY2FsY3VsYXRlZE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgdG91Y2hOb2RlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgbmV3Q29sbGVjdGlvbjogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgbmV3VG91Y2hDb2xsZWN0aW9uOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuXG4gICAgZm9yKGxldCBuIGluIGFsbE5vZGVzKSB7XG4gICAgICAgIGlmKG4uc3Vic3RyKDAsIDEwKSA9PT0gXCJ0b3VjaElucHV0XCIpIHtcbiAgICAgICAgICAgIG5ld1RvdWNoQ29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IG5ld0NvbGxlY3Rpb24sXG4gICAgICAgIHRvdWNoTm9kZXM6IG5ld1RvdWNoQ29sbGVjdGlvblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lKHN0YXJ0OiBudW1iZXIsIHN0b3A6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgbGV0IGUgPSBcImxldCB0ID0gXCI7XG5cbiAgICBlKz0gYChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgciA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAke3N0YXJ0fTsgaSA8ICR7c3RvcH07IGkrPSR7c3RlcH0pIHtcbiAgICAgICAgICAgIHIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9KSgpO2BcblxuICAgIHJldHVybiBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzKG5vZGVzOiBOb2RlQ29sbGVjdGlvbik6IHN0cmluZyB7XG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBpIGluIG5vZGVzKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblxuICAgICAgICBsZXQgc2Vuc2l0aXZpdHk6IE5vZGVTZXR0aW5nc1NoYXBlO1xuICAgICAgICBsZXQgYXR0YWNoZWRTY29wZTogTm9kZVNldHRpbmdzU2hhcGU7XG4gICAgICAgIGxldCBvZmZzZXRYOiBOb2RlU2V0dGluZ3NTaGFwZTtcbiAgICAgICAgbGV0IG9mZnNldFk6IE5vZGVTZXR0aW5nc1NoYXBlO1xuXG4gICAgICAgIC8vIFNlcGFyYXRlIHNldHRpbmdzXG4gICAgICAgIGZvcihsZXQgcyBpbiBub2RlLnNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIlNlbnNpdGl2aXR5XCIpIHtcbiAgICAgICAgICAgICAgICBzZW5zaXRpdml0eSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJBdHRhY2hlZCBTY29wZVwiKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoZWRTY29wZSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJPZmZzZXQgWFwiKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJPZmZzZXQgWVwiKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb3VjaCBub2RlIGlzIG5vdCBjb3JyZWN0bHkgZm9ybWF0dGVkLlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgb2Zmc2V0U2NyaXB0ID0gYGlmKCFkaWRBdHRhY2gke2l9KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7YXR0YWNoZWRTY29wZS52YWx1ZX1cIikub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCR7b2Zmc2V0WC52YWx1ZSA9PSBcInRydWVcIn0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRYRGF0YSArPSBlLm1vdmVtZW50WCoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKCR7b2Zmc2V0WS52YWx1ZSA9PSBcInRydWVcIn0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRZRGF0YSArPSBlLm1vdmVtZW50WSoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHthdHRhY2hlZFNjb3BlLnZhbHVlfVwiKS5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWT0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNoZW5kID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZW1lbnRYID0gd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCAtIGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudFkgPSB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcblxuICAgICAgICAgICAgICAgICAgICBpZigke29mZnNldFgudmFsdWUgPT0gXCJ0cnVlXCJ9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAke2l9T2Zmc2V0WERhdGEgKz0gbW92ZW1lbnRYKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoJHtvZmZzZXRZLnZhbHVlID09IFwidHJ1ZVwifSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFlEYXRhICs9IG1vdmVtZW50WSoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25YID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZGlkQXR0YWNoJHtpfU9mZnNldFggPSB0cnVlO1xuICAgICAgICAgICAgZGlkQXR0YWNoJHtpfU9mZnNldFkgPSB0cnVlO1xuICAgICAgICB9XFxuYDtcblxuICAgICAgICBmb3IobGV0IG8gaW4gbm9kZS5vdXRwdXRzKSB7XG4gICAgICAgICAgICBlICs9IGB2YXIgJHtpfSR7bm9kZS5vdXRwdXRzW29dLnRpdGxlfURhdGEgPSAxO1xcbmA7XG4gICAgICAgICAgICBlICs9IGB2YXIgZGlkQXR0YWNoJHtpfSA9IGZhbHNlO1xcbmA7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZSArPSBgdmFyICR7aX0ke25vZGUub3V0cHV0c1tvXS50aXRsZX0gPSBmdW5jdGlvbih0aW1lKSB7IHJldHVybiAke2l9JHtub2RlLm91dHB1dHNbb10udGl0bGV9RGF0YSB9O1xcbmBcbiAgICAgICAgfVxuXG4gICAgICAgIGUgKz0gb2Zmc2V0U2NyaXB0O1xuICAgIH1cblxuICAgIHJldHVybiBlO1xufSIsIi8vIEFzIGEgcmVtaW5kZXI6XG4vLyBPbmUgaXRlbSBpbiBhbiBhcnJheSBvZiB0b2tlbnMgY2FuIG9ubHkgYmUgYW4gb2JqZWN0IGFuZCBvbmx5IGhhdmUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4vLyAqIHR5cGUgICAgICAgICAgIC0gZm9yIGV2ZXJ5IHRva2VuXG4vLyAqIHZhbHVlICAgICAgICAgIC0gZm9yIGV2ZXJ5IHRva2VuXG4vLyAqIGNvZGUgIC0gZm9yIHNjb3BlcyAobWF0aC9yZWd1bGFyKVxuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5Ub0pzIChub2RlSWQsIHZhcmlhYmxlTmFtZSwganNvblRva2Vucykge1xuICAgIGxldCBleGVjdXRhYmxlU3RyaW5nID0gYHZhciAke25vZGVJZH0ke3ZhcmlhYmxlTmFtZX0gPSBmdW5jdGlvbih0aW1lKSB7IHJldHVybiBgO1xuICAgIFxuICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZShbLi4uanNvblRva2Vuc10pXG5cbiAgICByZXR1cm4gZXhlY3V0YWJsZVN0cmluZyArIFwifTtcXG5cIjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQ29kZShqc29uKSB7XG4gICAgbGV0IGV4ZWN1dGFibGVTdHJpbmcgPSBcIlwiO1xuXG4gICAgaWYoanNvbiA9PSBudWxsKSByZXR1cm4gXCJcIjtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBqc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIFZhcmlhYmxlcyBmb3IgY29udmVuaWVuY2VcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqc29uW2ldO1xuICAgICAgICBjb25zdCB0eXBlID0gdG9rZW4udHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0b2tlbi52YWx1ZTtcblxuICAgICAgICAvLyBBY3R1YWwgbG9naWNcbiAgICAgICAgaWYodHlwZSAhPSBcInNjb3BlXCIgJiYgdHlwZSAhPSBcIm1hdGhcIikge1xuICAgICAgICAgICAgLy8gT25lIG9mIHRoZSBiYXNpYyB0eXBlc1xuXG4gICAgICAgICAgICBpZih2YWx1ZSA9PT0gJ1BJJykge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLlBJXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidmFyXCIgJiYgdmFsdWUgIT09IFwidGltZVwiKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBgJHt2YWx1ZX0odGltZSlgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibWF0aFwiKSB7XG4gICAgICAgICAgICAvLyBNYXRoIGZ1bmN0aW9uXG5cbiAgICAgICAgICAgIGlmKHZhbHVlID09PSBcInNpblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBzdXBwb3J0ZWQgZnVuY3Rpb25zLCByZWN1cnNldmx5IGdlbmVyYXRlIHN0cmluZyBmcm9tIHRoZSBjb2RlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLnNpbihcIjtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm90IHN1cHBvcnRlZCBmdW5jdGlvbiwgdGhyb3cgZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5zdXBwb3J0ZWQgbWF0aCBmdW5jdGlvbiAhISFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZWd1bGFyIHNjb3BlXG5cbiAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIoXCIgKyBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXhlY3V0YWJsZVN0cmluZztcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSBgXG4gICAgI3NpZ25hbHMtZW1iZWRkaW5nLWNvbnRhaW5lciwgI3NpZ25hbHMtdmlld3MsIC5zaWduYWxzLWNhbnZhcyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAjc2lnbmFscy12aWV3cyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgIH1cbmBcblxuZXhwb3J0IGZ1bmN0aW9uIGpzeERvbSAobm9kZXMpIHtcbiAgICBsZXQgb3V0cHV0Tm9kZXMgPSBbXTtcblxuICAgIC8vIEdldCBhbGwga2luZHMgb2Ygb3V0cHV0IG5vZGVzXG4gICAgZm9yKGxldCBrZXkgaW4gbm9kZXMpIHtcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZXNba2V5XTtcblxuICAgICAgICBpZihTdHJpbmcoa2V5KS5zdWJzdHIoMCwgNSkgPT09IFwic2NvcGVcIikge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuaWQgPSBrZXk7XG4gICAgICAgICAgICBvdXRwdXROb2Rlcy5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKG91dHB1dE5vZGVzKTtcblxuICAgIC8vIEdlbmVyYXRlIER5bmFtaWMgU3R1ZmZcbiAgICBjb25zdCBjYW52YXNKc3ggPSBvdXRwdXROb2Rlcy5sZW5ndGggPiAwID8gb3V0cHV0Tm9kZXMubWFwKG5vZGUgPT4ge1xuICAgICAgICByZXR1cm4gKDxjYW52YXMgY2xhc3NOYW1lPVwic2lnbmFscy1jYW52YXNcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtub2RlLmlkfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtub2RlLmlkfVxuICAgICAgICA+PC9jYW52YXM+KVxuICAgIH0pIDogbnVsbDtcblxuICAgIGNvbnN0IHNldHRpbmdzID0gbnVsbDtcblxuICAgIC8vIEdlbmVyYXRlIEZpbmFsIEpTWFxuICAgIGNvbnN0IFNpZ25hbFZpZXdzID0gY2FudmFzSnN4ID9cbiAgICAgICAgKFxuICAgICAgICAgICAgPGRpdiBpZD1cInNpZ25hbHMtdmlld3NcIiBzdHlsZT17e2dyaWRUZW1wbGF0ZVJvd3M6IGByZXBlYXQoJHtvdXRwdXROb2Rlcy5sZW5ndGh9LCAxZnIpYH19PlxuICAgICAgICAgICAgICAgIHtjYW52YXNKc3h9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICBjb25zdCBTZXR0aW5nc0pzeCA9IHNldHRpbmdzID9cbiAgICAgICAgKFxuICAgICAgICAgICAgPGRpdiBpZD1cInNpZ25hbHMtc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICB7c2V0dGluZ3N9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPXtcInNpZ25hbHMtZW1iZWRkaW5nLWNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxzdHlsZT57c3R5bGVzfTwvc3R5bGU+XG4gICAgICAgICAgICB7U2V0dGluZ3NKc3h9XG4gICAgICAgICAgICB7U2lnbmFsVmlld3N9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9