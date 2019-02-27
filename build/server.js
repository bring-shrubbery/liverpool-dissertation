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
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer */ "./src/server/renderer/index.js");
/* harmony import */ var _libraryNodes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libraryNodes.json */ "./src/server/libraryNodes.json");
var _libraryNodes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./libraryNodes.json */ "./src/server/libraryNodes.json", 1);
/* harmony import */ var _projects_modulation_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/modulation.json */ "./src/server/projects/modulation.json");
var _projects_modulation_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./projects/modulation.json */ "./src/server/projects/modulation.json", 1);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Base Imports

 // Server Setup


var app = express__WEBPACK_IMPORTED_MODULE_2___default()(); // Middleware
// import bodyParser from 'body-parser'
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
  projectModels: [_projects_modulation_json__WEBPACK_IMPORTED_MODULE_5__],
  users: {
    admin: {
      username: "admin",
      password: "admin"
    }
  } // Static files

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


    data = data.replace('<script id="editor-data"></script>', "<script id=\"editor-data\">document.projectData = ".concat(JSON.stringify(projectData), "</script>\n            <script id=\"editor-data\">document.libraryNodes = ").concat(JSON.stringify(_libraryNodes_json__WEBPACK_IMPORTED_MODULE_4__), "</script>"));
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
}); // Default test visualisation

app.get('/render/:username/:id', function (req, res) {
  var projectId = req.params.id;
  var username = req.params.username;
  console.log("".concat(dateNow(), "GET /render/").concat(username, "/").concat(projectId));
  if (!database.users[username]) res.status(420).send("User with username " + username + " doesn't exist");
  var renderedString = Object(_renderer__WEBPACK_IMPORTED_MODULE_3__["renderSignals"])(database.projectModels[projectId - 1]);
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
app.post("/save/:username/:id", function (req, res) {// Save existing project
});
app.post("/createProject/:username", function (req, res) {// Create new project
}); // Run server

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("\nListening on: https://localhost:" + port + "\n");
});

var signalGenerator3sine = function signalGenerator3sine(time) {
  return signalGenerator3amplitude(time) * Math.sin(2 * Math.PI * signalGenerator3frequency(time) * time + signalGenerator3phase(time)) + signalGenerator3offset(time);
};

/***/ }),

/***/ "./src/server/libraryNodes.json":
/*!**************************************!*\
  !*** ./src/server/libraryNodes.json ***!
  \**************************************/
/*! exports provided: input, processors, output, default */
/***/ (function(module) {

module.exports = {"input":{"touchInput":{"title":"Touch Input","description":"Gets touch input from the scope.","x":"200","y":"400","width":"150","height":"100","inputs":[],"outputs":[{"title":"OffsetX","type":"number"},{"title":"OffsetY","type":"number"}],"generators":[],"settings":[{"title":"Sensitivity","value":"0.01","type":"number"},{"title":"Attached Scope","value":"scope2","type":"scopeReference"},{"title":"Offset X","value":"true","type":"boolean"},{"title":"Offset Y","value":"true","type":"boolean"}]},"scalar":{"title":"Scalar","description":"Single scalar output","x":"150","y":"600","width":"150","height":"100","inputs":[],"outputs":[{"title":"number","type":"number"}],"generators":[],"settings":[{"title":"number","value":"1","type":"number"}]},"signalGenerator":{"title":"Signal Generator","description":"Generates a basic signal","x":"380","y":"250","width":"150","inputs":[],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"settings":[{"title":"frequency","value":"20","type":"number","input":false,"output":false},{"title":"amplitude","value":"1","type":"number","input":false,"output":false},{"title":"phase","value":"0","type":"number","input":false,"output":false},{"title":"offset","value":"0","type":"number","input":false,"output":false}]}},"processors":{"am":{"title":"AM Modulation","description":"Modulates two signals using AM modulation","x":"600","y":"400","width":"150","height":"100","inputs":[{"title":"signal1","type":"signal"},{"title":"signal2","type":"signal"}],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[signal1]*[signal2]","type":"signal"}],"settings":[]}},"output":{"scope":{"title":"Scope","description":"Displays a scope with the provided input signal.","x":"700","y":"200","width":"150","inputs":[{"title":"signal","type":"signal"}],"outputs":[],"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Title","value":"Carrier Signal","type":"text"}]}}};

/***/ }),

/***/ "./src/server/projects/modulation.json":
/*!*********************************************!*\
  !*** ./src/server/projects/modulation.json ***!
  \*********************************************/
/*! exports provided: allConnections, allNodes, composerCoordinates, isCreatingConnection, default */
/***/ (function(module) {

module.exports = {"allConnections":[{"connectorStart":{"nodeId":"touchInput","settingId":"OffsetX"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"frequency"}},{"connectorStart":{"nodeId":"touchInput","settingId":"OffsetY"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"amplitude"}},{"connectorStart":{"nodeId":"multiply","settingId":"signal"},"connectorEnd":{"nodeId":"scope2","settingId":"signal"}},{"connectorStart":{"nodeId":"scalar2","settingId":"number"},"connectorEnd":{"nodeId":"signalGenerator","settingId":"frequency"}},{"connectorStart":{"nodeId":"signalGenerator2","settingId":"sine"},"connectorEnd":{"nodeId":"add","settingId":"signal2"}},{"connectorStart":{"nodeId":"signalGenerator3","settingId":"sine"},"connectorEnd":{"nodeId":"scope3","settingId":"signal"}},{"connectorStart":{"nodeId":"add2","settingId":"signal"},"connectorEnd":{"nodeId":"signalGenerator3","settingId":"frequency"}},{"connectorStart":{"nodeId":"scalar","settingId":"number"},"connectorEnd":{"nodeId":"add","settingId":"signal1"}},{"connectorStart":{"nodeId":"signalGenerator","settingId":"sine"},"connectorEnd":{"nodeId":"multiply","settingId":"signal2"}},{"connectorStart":{"nodeId":"add","settingId":"signal"},"connectorEnd":{"nodeId":"multiply","settingId":"signal1"}},{"connectorStart":{"nodeId":"add","settingId":"signal"},"connectorEnd":{"nodeId":"scope","settingId":"signal"}},{"connectorStart":{"nodeId":"signalGenerator2","settingId":"sine"},"connectorEnd":{"nodeId":"add2","settingId":"signal1"}},{"connectorStart":{"nodeId":"scalar2","settingId":"number"},"connectorEnd":{"nodeId":"add2","settingId":"signal2"}}],"allNodes":{"signalGenerator":{"title":"Signal Generator","x":"502","y":"679","width":"150","inputs":[{"title":"frequency","type":"number","default":"1"}],"outputs":[{"title":"sine","type":"signal"}],"generators":[{"title":"sine","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"settings":[{"title":"frequency","value":"20","type":"number","input":false,"output":false},{"title":"amplitude","value":"1","type":"number","input":false,"output":false},{"title":"phase","value":"0","type":"number","input":false,"output":false},{"title":"offset","value":"0","type":"number","input":false,"output":false}]},"signalGenerator2":{"title":"Signal Generator","x":"288","y":"609","width":"150","inputs":[{"title":"frequency","type":"number","default":"1"},{"title":"amplitude","type":"number","default":"1"},{"title":"offset","type":"number","default":"0"}],"outputs":[{"title":"sine","type":"signal"}],"generators":[{"title":"sine","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"settings":[{"title":"frequency","value":"5","type":"number","input":false,"output":false},{"title":"amplitude","value":"1","type":"number","input":false,"output":false},{"title":"phase","value":"0","type":"number","input":false,"output":false},{"title":"offset","value":"0","type":"number","input":false,"output":false}]},"signalGenerator3":{"title":"Signal Generator","x":"731","y":"820","width":"150","inputs":[{"title":"frequency","type":"number","default":"1"}],"outputs":[{"title":"sine","type":"signal"}],"generators":[{"title":"sine","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"settings":[{"title":"frequency","value":"5","type":"number","input":false,"output":false},{"title":"amplitude","value":"1","type":"number","input":false,"output":false},{"title":"phase","value":"0","type":"number","input":false,"output":false},{"title":"offset","value":"0","type":"number","input":false,"output":false}]},"scope":{"title":"Scope","x":"757","y":"509","width":"150","inputs":[{"title":"signal","type":"signal"}],"outputs":[],"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"blue","type":"color"},{"title":"Title","value":"Data Signal","type":"text"}]},"scope2":{"title":"Scope","x":"966","y":"562","width":"150","inputs":[{"title":"signal","type":"signal"}],"generators":[],"outputs":[],"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"green","type":"color"},{"title":"Title","value":"AM Modulated Signal","type":"text"}]},"scope3":{"title":"Scope","x":"967","y":"755","width":"150","inputs":[{"title":"signal","type":"signal"}],"generators":[],"outputs":[],"settings":[{"title":"AutoScale","value":"true","type":"boolean"},{"title":"Color","value":"red","type":"color"},{"title":"Title","value":"FM Modulated Signal","type":"text"}]},"touchInput":{"title":"Touch Input","x":"86","y":"535","width":"150","height":"100","inputs":[],"outputs":[{"title":"OffsetX","type":"number"},{"title":"OffsetY","type":"number"}],"generators":[],"settings":[{"title":"Sensitivity","value":"0.01","type":"number"},{"title":"Attached Scope","value":"scope","type":"scopeReference"},{"title":"Offset X","value":"true","type":"boolean"},{"title":"Offset Y","value":"true","type":"boolean"}]},"multiply":{"title":"Multiply","x":"744","y":"641","width":"150","height":"100","inputs":[{"title":"signal1","type":"signal"},{"title":"signal2","type":"signal"}],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[signal1]*[signal2]","type":"signal"}],"settings":[]},"add":{"title":"Add","x":"500","y":"556","width":"150","height":"100","inputs":[{"title":"signal1","type":"signal"},{"title":"signal2","type":"signal"}],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[signal1]+[signal2]","type":"signal"}],"settings":[]},"add2":{"title":"Add","x":"500","y":"856","width":"150","height":"100","inputs":[{"title":"signal1","type":"signal"},{"title":"signal2","type":"signal"}],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"(5*[signal1])+[signal2]","type":"signal"}],"settings":[]},"scalar":{"title":"Scalar","x":"285","y":"524","width":"150","height":"100","inputs":[],"outputs":[{"title":"number","type":"number"}],"generators":[],"settings":[{"title":"number","value":"1","type":"number"}]},"scalar2":{"title":"Scalar","x":"142","y":"742","width":"150","height":"100","inputs":[],"outputs":[{"title":"number","type":"number"}],"generators":[],"settings":[{"title":"number","value":"20","type":"number"}]}},"composerCoordinates":{"focused":true,"gridSize":50,"height":1,"width":1,"x":13,"y":-330,"zoomLevel":1},"isCreatingConnection":false};

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

  console.time("Script Parser");
  var scriptArray = Object(_scriptGenerator_ts__WEBPACK_IMPORTED_MODULE_1__["scriptGenerator"])(allNodes, allConnections);
  var composedScriptString = "";

  for (var s in scriptArray) {
    if (s == 0) continue;
    composedScriptString += scriptArray[s];
  }

  console.timeEnd("Script Parser");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2dlbmVyYXRvclRva2VuaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVuZGVyZXIvc2NvcGVGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3Rva2VuVG9Kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3ZpZXdlckRvbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiXSwibmFtZXMiOlsiYXBwIiwiZXhwcmVzcyIsImRhdGVOb3ciLCJTdHJpbmciLCJEYXRlIiwidG9TdHJpbmciLCJzdWJzdHIiLCJkYXRhYmFzZSIsInByb2plY3RzSW5mbyIsInByb2plY3RJZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvd25lciIsInByb2plY3RNb2RlbHMiLCJtb2R1bGF0aW9uIiwidXNlcnMiLCJhZG1pbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ1c2UiLCJzdGF0aWMiLCJfX2Rpcm5hbWUiLCJnZXQiLCJyZXEiLCJyZXMiLCJwYXJhbXMiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzZW5kIiwiZnMiLCJyZWFkRmlsZSIsInBhdGgiLCJyZXNvbHZlIiwiZXJyIiwiZGF0YSIsImVycm9yIiwicmVwbGFjZSIsInByb2plY3REYXRhIiwiaSIsImxlbmd0aCIsInByb2plY3QiLCJwaWQiLCJwYXJzZUludCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaWJyYXJ5Tm9kZXMiLCJzZXRIZWFkZXIiLCJyZW5kZXJlZFN0cmluZyIsInJlbmRlclNpZ25hbHMiLCJlbmQiLCJwcm9qZWN0c0FycmF5IiwicHVzaCIsInBvc3QiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJzaWduYWxHZW5lcmF0b3Izc2luZSIsInRpbWUiLCJzaWduYWxHZW5lcmF0b3IzYW1wbGl0dWRlIiwiTWF0aCIsInNpbiIsIlBJIiwic2lnbmFsR2VuZXJhdG9yM2ZyZXF1ZW5jeSIsInNpZ25hbEdlbmVyYXRvcjNwaGFzZSIsInNpZ25hbEdlbmVyYXRvcjNvZmZzZXQiLCJyZW5kZXJIdG1sIiwicmVxdWVzdEpzb24iLCJhbGxOb2RlcyIsImFsbENvbm5lY3Rpb25zIiwianN4IiwianN4RG9tIiwianN4U3RyaW5nIiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJzY3JpcHRBcnJheSIsInNjcmlwdEdlbmVyYXRvciIsImNvbXBvc2VkU2NyaXB0U3RyaW5nIiwicyIsInRpbWVFbmQiLCJzY3JpcHRzIiwic2NyaXB0ZWRIdG1sIiwic2xpY2UiLCJmaXhTY29wZXMiLCJnZW4iLCJnIiwiZm91bmRMZWZ0Qm9yZGVyIiwiZm91bmRSaWdodEJvcmRlciIsImp1c3RIaXRPcGVuaW5nQnJhY2tldCIsImp1c3RIaXRDbG9zaW5nQnJhY2tldCIsImxlZnQiLCJyaWdodCIsIm9uZSIsInR3byIsInRocmVlIiwidG9rZW5Ub0pzIiwibm9kZUlkIiwidmFyaWFibGVOYW1lIiwianNvblRva2VucyIsImV4ZWN1dGFibGVTdHJpbmciLCJjYWxjdWxhdGVDb2RlIiwianNvbiIsInRva2VuIiwidHlwZSIsInZhbHVlIiwiY29kZSIsInN0eWxlcyIsIm5vZGVzIiwib3V0cHV0Tm9kZXMiLCJrZXkiLCJjdXJyZW50Tm9kZSIsImNhbnZhc0pzeCIsIm1hcCIsIm5vZGUiLCJzZXR0aW5ncyIsIlNpZ25hbFZpZXdzIiwiZ3JpZFRlbXBsYXRlUm93cyIsIlNldHRpbmdzSnN4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtDQUdBOztBQUNBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHQyw4Q0FBTyxFQUFuQixDLENBRUE7QUFDQTtBQUVBOztDQUlBO0FBRUE7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQU1DLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHQyxRQUFQLEVBQUQsQ0FBTixDQUEwQkMsTUFBMUIsQ0FBaUMsQ0FBakMsRUFBb0MsRUFBcEMsSUFBMEMsS0FBaEQ7QUFBQSxD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LFlBQUtBLElBQUksQ0FBQ3pGLEVBQVYsQ0FEVjtBQUVRLFNBQUcsRUFBRXlGLElBQUksQ0FBQ3pGO0FBRmxCLE1BQVI7QUFJSCxHQUwwQyxDQUF6QixHQUtiLElBTEw7QUFPQSxNQUFNMEYsUUFBUSxHQUFHLElBQWpCLENBdkIyQixDQXlCM0I7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHSixTQUFTLEdBRXJCO0FBQUssTUFBRSxFQUFDLGVBQVI7QUFBd0IsU0FBSyxFQUFFO0FBQUNLLHNCQUFnQixtQkFBWVIsV0FBVyxDQUFDckUsTUFBeEI7QUFBakI7QUFBL0IsS0FDS3dFLFNBREwsQ0FGcUIsR0FLckIsSUFMUjtBQU9BLE1BQU1NLFdBQVcsR0FBR0gsUUFBUSxHQUVwQjtBQUFLLE1BQUUsRUFBQztBQUFSLEtBQ0tBLFFBREwsQ0FGb0IsR0FLcEIsSUFMUjtBQU9BLFNBQ0k7QUFBSyxNQUFFLEVBQUU7QUFBVCxLQUNJLDBFQUFRUixNQUFSLENBREosRUFFS1csV0FGTCxFQUdLRixXQUhMLENBREo7QUFPSCxDOzs7Ozs7Ozs7OztBQy9ERCxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiLy8gQmFzZSBJbXBvcnRzXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuXG4vLyBTZXJ2ZXIgU2V0dXBcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuLy8gTWlkZGxld2FyZVxuLy8gaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5cbi8vIERhdGEgUGFyc2luZ1xuaW1wb3J0IHtcbiAgICByZW5kZXJTaWduYWxzXG59IGZyb20gJy4vcmVuZGVyZXInXG4vLyBpbXBvcnQgdGVzdE1vZGVsIGZyb20gJy4vdGVzdE1vZGVsLmpzb24nXG5cbi8vIFByZS1tYWRlIHByb2plY3RzIGFuZCBsaWJyYXJ5IG5vZGVzXG5pbXBvcnQgbGlicmFyeU5vZGVzIGZyb20gJy4vbGlicmFyeU5vZGVzLmpzb24nXG5pbXBvcnQgbW9kdWxhdGlvbiBmcm9tICcuL3Byb2plY3RzL21vZHVsYXRpb24uanNvbidcblxuY29uc3QgZGF0ZU5vdyA9ICgpID0+IFN0cmluZyhEYXRlKCkudG9TdHJpbmcoKSkuc3Vic3RyKDAsIDI0KSArIFwiIHwgXCI7XG5cbmxldCBkYXRhYmFzZSA9IHtcbiAgICBwcm9qZWN0c0luZm86IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvamVjdElkOiBcIjFcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkFNL0ZNIE1vZHVsYXRpb25cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNob3dzIG9uZSBzaWduYWwgbW9kdWxhdGVkIG92ZXIgb3RoZXIgKGNhcnJpZXIpIHNpZ25hbCB1c2luZyBBTSBhbmQgRk0gbW9kdWxhdGlvbi5cIixcbiAgICAgICAgICAgIG93bmVyOiBcImFkbWluXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgcHJvamVjdE1vZGVsczogW1xuICAgICAgICBtb2R1bGF0aW9uXG4gICAgXSxcbiAgICB1c2Vyczoge1xuICAgICAgICBhZG1pbjoge1xuICAgICAgICAgICAgdXNlcm5hbWU6IFwiYWRtaW5cIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcImFkbWluXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gU3RhdGljIGZpbGVzXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvcHVibGljL3N0YXRpYycpKVxuXG4vLyAtLS0gUk9VVEVTIC0tLVxuYXBwLmdldCgnL2VkaXRvci86dXNlcm5hbWUvOmlkJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gcmVxLnBhcmFtcy5pZDtcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWU7XG5cbiAgICBjb25zb2xlLmxvZyhgJHtkYXRlTm93KCl9R0VUIC9lZGl0b3IvJHt1c2VybmFtZX0vJHtwcm9qZWN0SWR9YCk7XG5cbiAgICBpZighZGF0YWJhc2UudXNlcnNbdXNlcm5hbWVdKSByZXMuc3RhdHVzKDQyMCkuc2VuZChcIlVzZXIgd2l0aCB1c2VybmFtZSBcIit1c2VybmFtZStcIiBkb2Vzbid0IGV4aXN0XCIpO1xuICAgIFxuICAgIGZzLnJlYWRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3B1YmxpYy9lZGl0b3IuaHRtbCcpLCAndXRmOCcsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0FuIGVycm9yIG9jY3VycmVkJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aXRsZVxuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgXCI8dGl0bGU+PC90aXRsZT5cIixcbiAgICAgICAgICAgIGA8dGl0bGU+JHtwcm9qZWN0SWR9PC90aXRsZT5gXG4gICAgICAgIClcblxuICAgICAgICBsZXQgcHJvamVjdERhdGE7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhYmFzZS5wcm9qZWN0c0luZm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkYXRhYmFzZS5wcm9qZWN0c0luZm9baV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHByb2plY3Qub3duZXIgPT0gdXNlcm5hbWUgJiYgcHJvamVjdC5wcm9qZWN0SWQgPT0gcHJvamVjdElkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBpZCA9IHBhcnNlSW50KHByb2plY3RJZCkgLSAxO1xuICAgICAgICAgICAgICAgIHByb2plY3REYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhYmFzZS5wcm9qZWN0TW9kZWxzW3BpZF0sXG4gICAgICAgICAgICAgICAgICAgIHBpZDogcHJvamVjdElkLFxuICAgICAgICAgICAgICAgICAgICBvd25lcjogdXNlcm5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgZGF0YVxuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgJzxzY3JpcHQgaWQ9XCJlZGl0b3ItZGF0YVwiPjwvc2NyaXB0PicsXG4gICAgICAgICAgICBgPHNjcmlwdCBpZD1cImVkaXRvci1kYXRhXCI+ZG9jdW1lbnQucHJvamVjdERhdGEgPSAke0pTT04uc3RyaW5naWZ5KHByb2plY3REYXRhKX08L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgaWQ9XCJlZGl0b3ItZGF0YVwiPmRvY3VtZW50LmxpYnJhcnlOb2RlcyA9ICR7SlNPTi5zdHJpbmdpZnkobGlicmFyeU5vZGVzKX08L3NjcmlwdD5gXG4gICAgICAgIClcblxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgICAgIHJlcy5zZW5kKGRhdGEpO1xuICAgIH0pXG59KTtcblxuLy8gRGVmYXVsdCB0ZXN0IHZpc3VhbGlzYXRpb25cbmFwcC5nZXQoJy9yZW5kZXIvOnVzZXJuYW1lLzppZCcsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgY29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lO1xuICAgIGNvbnNvbGUubG9nKGAke2RhdGVOb3coKX1HRVQgL3JlbmRlci8ke3VzZXJuYW1lfS8ke3Byb2plY3RJZH1gKTtcblxuICAgIGlmKCFkYXRhYmFzZS51c2Vyc1t1c2VybmFtZV0pIHJlcy5zdGF0dXMoNDIwKS5zZW5kKFwiVXNlciB3aXRoIHVzZXJuYW1lIFwiK3VzZXJuYW1lK1wiIGRvZXNuJ3QgZXhpc3RcIik7XG5cblxuICAgIGNvbnN0IHJlbmRlcmVkU3RyaW5nID0gcmVuZGVyU2lnbmFscyhkYXRhYmFzZS5wcm9qZWN0TW9kZWxzW3Byb2plY3RJZCAtIDFdKTtcblxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICByZXMuZW5kKHJlbmRlcmVkU3RyaW5nKTtcbn0pXG5cbi8vIEZvciBub3csIGxhbmRpbmcgcGFnZSBpcyB0aGUgcHJvamVjdHMgcGFnZS5cbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGZzLnJlYWRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3B1YmxpYy9wcm9qZWN0cy5odG1sJyksICd1dGY4JywgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnQW4gZXJyb3Igb2NjdXJyZWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRpdGxlXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICBcIjx0aXRsZT48L3RpdGxlPlwiLFxuICAgICAgICAgICAgYDx0aXRsZT5Qcm9qZWN0czwvdGl0bGU+YFxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgICAgICByZXMuZW5kKGRhdGEpO1xuICAgIH0pXG59KVxuXG5hcHAuZ2V0KFwiL3Byb2plY3RzL2luZm8vOnVzZXJuYW1lXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZTtcblxuICAgIGlmKGRhdGFiYXNlLnVzZXJzW3VzZXJuYW1lXSkge1xuICAgICAgICBsZXQgcHJvamVjdHNBcnJheSA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YWJhc2UucHJvamVjdHNJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihkYXRhYmFzZS5wcm9qZWN0c0luZm9baV0ub3duZXIgPT09IHVzZXJuYW1lKVxuICAgICAgICAgICAgICAgIHByb2plY3RzQXJyYXkucHVzaChkYXRhYmFzZS5wcm9qZWN0c0luZm9baV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MjApLnNlbmQoYE5vIHVzZXIgd2l0aCB1c2VybmFtZSBcIiR7dXNlcm5hbWV9XCIgd2FzIGZvdW5kLmApO1xuICAgIH1cbiAgICBcbn0pXG5cbmFwcC5wb3N0KFwiL3NhdmUvOnVzZXJuYW1lLzppZFwiLCAocmVxLCByZXMpID0+IHtcbiAgICAvLyBTYXZlIGV4aXN0aW5nIHByb2plY3Rcbn0pXG5cblxuYXBwLnBvc3QoXCIvY3JlYXRlUHJvamVjdC86dXNlcm5hbWVcIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgLy8gQ3JlYXRlIG5ldyBwcm9qZWN0XG59KVxuXG4vLyBSdW4gc2VydmVyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwO1xuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJcXG5MaXN0ZW5pbmcgb246IGh0dHBzOi8vbG9jYWxob3N0OlwiK3BvcnQrXCJcXG5cIik7XG59KTtcblxuXG52YXIgc2lnbmFsR2VuZXJhdG9yM3NpbmUgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgcmV0dXJuIChzaWduYWxHZW5lcmF0b3IzYW1wbGl0dWRlKHRpbWUpXG4gICAgICAgICpNYXRoLnNpbihcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKk1hdGguUElcbiAgICAgICAgICAgICAgICAqc2lnbmFsR2VuZXJhdG9yM2ZyZXF1ZW5jeSh0aW1lKVxuICAgICAgICAgICAgICAgICp0aW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgICArc2lnbmFsR2VuZXJhdG9yM3BoYXNlKHRpbWUpXG4gICAgICAgIClcbiAgICApK3NpZ25hbEdlbmVyYXRvcjNvZmZzZXQodGltZSl9O1xuIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHZW5lcmF0b3IgQ29kZSBUb2tlbmlzZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdlbmVyYXRvciBjb2RlIHRva2VuaXNlciBmdW5jdGlvbiBpcyBhbGdvcml0aG1pY2FsbHkgc2ltcGxlLCBidXQgcHJvZHVjZXMgYSBnb29kIHJlcHJlc2VudGF0aW9uXG4vLyBvZiB0aGUgcHJvdmlkZWQgY29kZSBpbiBKYXZhU2NyaXB0IE9iamVjdCBmb3JtYXQgKHdoaWNoIGNhbiB0aGVuIGJlIGVhc2lseSBjb252ZXJ0ZWQgdG8gSlNPTixcbi8vIHNpbmNlIGl0J3MgcHJldHR5IG11Y2ggdGhlIHNhbWUgdGhpbmcpLlxuLy8gV2hlbiBnb2luZyB0aHJvdWdoIHRoZSBjb2RlLCBpdCBjYW4gZGV0ZWN0IHNldmVyYWwgdHlwZXMgb2Ygb3BlcmF0b3JzLiBUaGVzZSBhcmU6XG4vLyAgICAgKiBWYXJpYWJsZVxuLy8gICAgICogQ29uc3RhbnQgTnVtYmVyXG4vLyAgICAgKiBNYXRoIE9wZXJhdG9yXG4vLyAgICAgKiBNYXRoIEZ1bmN0aW9uXG4vLyAgICAgKiBSZWd1bGFyIHNjb3BlIC0gZXZlcnl0aGluZyBpbnNpZGUgYnJhY2tldHMgXCIoXCIgYW5kIFwiKVwiIHNob3VsZCBiZSBleGVjdXRlZCBmaXJzdFxuLy8gVGhlIFZhcmlhYmxlcywgTnVtYmVycyBhbmQgTWF0aCBvcGVyYXRvcnMgYXJlIGp1c3QgYWRkZWQgYXMgYW4gb2JqZWN0IHdpdGggYXBwcm9wcmlhdGUgdHlwZSBhbmRcbi8vIHZhbHVlIHRha2VuIGZyb20gdGhlIGNvZGUuXG5cbi8vIFRPRE86XG4vLyAqIFNhbmV0aXNlIHZhcmlhYmxlIG5hbWVzICEhISBKYXZhc2NyaXB0IGluamVjdGlvbiBpcyBwb3NzaWJsZSBub3cgdGhyb3VuIHZhcmlhYmxlIG5hbWVzLi4uXG5cbmltcG9ydCB7Zml4U2NvcGVzfSBmcm9tICcuL3Njb3BlRml4ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemVHZW5lcmF0b3IgKGdlbjogc3RyaW5nLCBub2RlSWQ6IHN0cmluZyk6IEdlbmVyYXRvclNlZ21lbnRbXSB7XG4gICAgLy8gR2V0IHZhbHVlIG9mIGdlbmVyYXRvciBjb2RlIGFuZCBzdG9yZSBpbiBnXG4gICAgbGV0IGcgPSBTdHJpbmcoZ2VuKTtcbiAgICBnID0gU3RyaW5nKGZpeFNjb3BlcyhnKSk7XG5cbiAgICAvLyBQYXJzZWQgR2VuZXJhdG9yIENvZGVcbiAgICBsZXQgcGdlbjogR2VuZXJhdG9yU2VnbWVudFtdID0gW107XG4gICAgXG4gICAgLy8gVGhlIHN0YWNrXG4gICAgbGV0IHN0YWNrOiBHZW5lcmF0b3JTZWdtZW50W10gPSBbXTtcblxuICAgIC8vIENvZGUgdG9rZW5pc2VyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9wU3RhY2tPYmplY3Q6IEdlbmVyYXRvclNlZ21lbnQgPSBzdGFjay5sZW5ndGggPiAwID9cbiAgICAgICAgICAgIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdIDogbnVsbDtcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gVkFSSUFCTEUgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcIltcIikge1xuICAgICAgICAgICAgLy8gTW92ZSB0byBuZXh0IGNoYXJhY3RlclxuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgLy8gSW5pdGlhbGlzZSBlbXB0eSB2YXJpYWJsZVxuICAgICAgICAgICAgbGV0IHZhcmlhYmxlID0gXCJcIjtcblxuICAgICAgICAgICAgLy8gU2NhbiB1bnRpbCB2YXJpYWJsZSBzY29wZSBpcyBjbG9zZWRcbiAgICAgICAgICAgIHdoaWxlKGdbaV0gIT09IFwiXVwiKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgKz0gZ1tpXTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHZhcmlhYmxlID09PSBcInRpbWVcIiB8fCB2YXJpYWJsZSA9PT0gXCJQSVwiKSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZyA/XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gbm9kZUlkICsgdmFyaWFibGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInZhclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YXJpYWJsZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBudWxsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2godmFyaWFibGVTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGdlbi5wdXNoKHZhcmlhYmxlU25pcHBldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gTUFUSCBPUEVSQVRPUiAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmIChnW2ldID09PSBcIipcIiB8fCBnW2ldID09PSBcIi9cIiB8fCBnW2ldID09PSBcIitcIiB8fCBnW2ldID09PSBcIi1cIikge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3JTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZ1tpXSxcbiAgICAgICAgICAgICAgICBjb2RlOiBudWxsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBzdGFja1t0b3BJbmRleF0uY29kZS5wdXNoKG9wZXJhdG9yU25pcHBldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2gob3BlcmF0b3JTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBNQVRIIEZVTkNUSU9OIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCJzXCIpIHtcbiAgICAgICAgICAgIC8vIE1hdGhlbWF0aWNhbCBmb3JtdWxhcyBhcmUgY29kZWQgaW4gdGhyZWUgbGV0dGVyc1xuICAgICAgICAgICAgbGV0IG5leHRUaHJlZSA9IFN0cmluZyhnW2ldICsgZ1tpKzFdICsgZ1tpKzJdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbmV4dCB0aHJlZSBjaGFycyBhcmUgb25lIG9mIFxuICAgICAgICAgICAgaWYobmV4dFRocmVlID09PSBcInNpblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRqdXN0IGluZGV4IHRvIG5leHQgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgaSArPSAzO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VhcmNoIGZvciBvcGVuaW5nIGJyYWNrZXRzXG4gICAgICAgICAgICAgICAgd2hpbGUoZ1tpXSAhPT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPj0gZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0aHJvdyBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRVJST1IgUkVBU09OOiBzaG91bGQgcHJvdmlkZSBicmFja2V0cyBmb3IgbWF0aCBvcGVyYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJzaG91bGQgcHJvdmlkZSBicmFja2V0cyBmb3IgbWF0aCBvcGVyYXRvcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHByb3ZpZGVkIHNwYWNlIG9yIGEgY2hhcmFjdGVyIGFmdGVyIHRocmVlIG1hdGggY2hhcnNcbiAgICAgICAgICAgICAgICAvLyBpZiAoZ1tpKzFdID09PSBcIihcIikgaSsrO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0aFNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWF0aFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV4dFRocmVlLFxuICAgICAgICAgICAgICAgICAgICBjb2RlOiBbXVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrVG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLnB1c2gobWF0aFNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjb3BlVG9wSW5kZXggPSBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGVbc2NvcGVUb3BJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgcGdlbi5wdXNoKG1hdGhTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGdlbltwZ2VuLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLy8gQ29udGludWUgcGFyc2luZyBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gUkVHVUxBUiBTQ09QRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAvLyBCZWdpbiByZWd1bGFyIHNjb3BlXG4gICAgICAgICAgICBjb25zdCBzY29wZVNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzY29wZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvZGU6IFtdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrVG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUucHVzaChzY29wZVNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVUb3BJbmRleCA9IHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGVbc2NvcGVUb3BJbmRleF1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2goc2NvcGVTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHBnZW5bcGdlbi5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBFTkQgQU5ZIFNDT1BFIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCIpXCIgfHwgZy5jaGFyQXQoaSkgPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAvLyBFbmQgU2NvcGVcblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdG9wIGl0ZW0gZnJvbSBzdGFjayBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgY2xvc2VkIHNjb3BlIHRoYXQgd2Fzbid0IG9wZW5lZFxuICAgICAgICAgICAgICAgIC8vIFRPRE86ICAgICAgICAgICAgdGhyb3cgRVJST1JcbiAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046ICAgIG5vbiBleGlzdGVudCBzY29wZSB3YXMgY2xvc2VkXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vbiBleGlzdGVudCBzY29wZSB3YXMgY2xvc2VkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE5VQk1FUiAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGxldCBtYXliZU51bWJlciA9IFN0cmluZyhwYXJzZUludChnW2ldKSk7XG5cbiAgICAgICAgaWYobWF5YmVOdW1iZXIgIT09IFN0cmluZyhOYU4pICYmIHR5cGVvZiBwYXJzZUludChtYXliZU51bWJlcikgPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgbGV0IG51bWJlclN0YXJ0ID0gaTtcblxuICAgICAgICAgICAgLy8gSXMgY3VycmVudCBjaGFyIGEgbnVtYmVyIG9yIGEgZG90P1xuICAgICAgICAgICAgY29uc3QgaXNOdW1iZXIgPSAoKSA9PiAobWF5YmVOdW1iZXIgIT09IFN0cmluZyhOYU4pICYmIHR5cGVvZiBwYXJzZUludChtYXliZU51bWJlcikgPT09IFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgaXNEb3QgPSAoaW5kZXg6IG51bWJlcikgPT4gU3RyaW5nKGdbaW5kZXhdKSA9PT0gXCIuXCI7XG5cbiAgICAgICAgICAgIC8vIFdhcyB0aGVyZSBhIGRvdCBpbiBjdXJyZW50IHNlcXVlbmNlIG9mIG51bWJlcnM/XG4gICAgICAgICAgICBsZXQgd2FzRG90QWxyZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aGlsZShpc051bWJlcigpIHx8IGlzRG90KGkpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgY3VycmVudCBjaGFyIGlzIGEgZG90XG4gICAgICAgICAgICAgICAgaWYoaXNEb3QoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYod2FzRG90QWxyZWFkeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgdGhlcmUgd2FzIGEgZG90IGFscmVhZHksIHRocm93IGVycm9yLCBzaW5jZSBpdCBkb2Vzbid0IG1ha2Ugc2Vuc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRocm93IEVSUk9SXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046IGludmFsaWQgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIHN5bnRheFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm90LCBzZXQgd2FzIGRvdCBhbHJlYWR5IHRvIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhc0RvdEFscmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTW92ZSB0byBuZXh0IGluZGV4IGFuZCBcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgbWF5YmVOdW1iZXIgPSBTdHJpbmcocGFyc2VJbnQoZ1tpXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXN1bHRpbmdOdW1iZXIgPSBnLnNsaWNlKG51bWJlclN0YXJ0LCBpKTtcblxuICAgICAgICAgICAgY29uc3QgbnVtYmVyU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHRpbmdOdW1iZXIsXG4gICAgICAgICAgICAgICAgY29kZTogbnVsbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2gobnVtYmVyU25pcHBldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2gobnVtYmVyU25pcHBldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGktLTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIFJldHVybiBwYXJzZWQgZ2VuZXJhdG9yIGFycmF5XG4gICAgcmV0dXJuIHBnZW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXJhdG9yU2VnbWVudCB7XG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHZhbHVlOiAoc3RyaW5nfG51bWJlciksXG4gICAgY29kZTogR2VuZXJhdG9yU2VnbWVudFtdXG59IiwiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcsIHJlbmRlclRvU3RhdGljTWFya3VwIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5cbmltcG9ydCB7IHNjcmlwdEdlbmVyYXRvciB9IGZyb20gJy4vc2NyaXB0R2VuZXJhdG9yLnRzJztcbmltcG9ydCB7IGpzeERvbSB9IGZyb20gJy4vdmlld2VyRG9tJztcblxuZnVuY3Rpb24gcmVuZGVySHRtbCAocmVxdWVzdEpzb24pIHtcbiAgICAvLyBTZXBhcmF0ZSBub2RlcyBmcm9tIGNvbm5lY3RvcnNcbiAgICBjb25zdCBhbGxOb2RlcyA9IHsuLi5yZXF1ZXN0SnNvbi5hbGxOb2Rlc307XG4gICAgY29uc3QgYWxsQ29ubmVjdGlvbnMgPSBbLi4ucmVxdWVzdEpzb24uYWxsQ29ubmVjdGlvbnNdO1xuXG4gICAgLy8gUmVuZGVyIEhUTUxcbiAgICBjb25zdCBqc3ggPSBqc3hEb20oYWxsTm9kZXMpO1xuICAgIGNvbnN0IGpzeFN0cmluZyA9IHJlbmRlclRvU3RhdGljTWFya3VwKGpzeCk7XG5cbiAgICAvLyBHZW5lcmF0ZSBTY3JpcHRzXG4gICAgY29uc29sZS50aW1lKFwiU2NyaXB0IFBhcnNlclwiKTtcbiAgICBjb25zdCBzY3JpcHRBcnJheSA9IHNjcmlwdEdlbmVyYXRvcihhbGxOb2RlcywgYWxsQ29ubmVjdGlvbnMpO1xuICAgIGxldCBjb21wb3NlZFNjcmlwdFN0cmluZyA9IFwiXCI7XG4gICAgZm9yKGxldCBzIGluIHNjcmlwdEFycmF5KSB7XG4gICAgICAgIGlmKHMgPT0gMCkgY29udGludWU7XG4gICAgICAgIGNvbXBvc2VkU2NyaXB0U3RyaW5nICs9IHNjcmlwdEFycmF5W3NdO1xuICAgIH1cbiAgICBjb25zb2xlLnRpbWVFbmQoXCJTY3JpcHQgUGFyc2VyXCIpO1xuICAgIGxldCBzY3JpcHRzID0gYDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvQ2hhcnQuanMvMi43LjMvQ2hhcnQuYnVuZGxlLm1pbi5qc1wiPjwvc2NyaXB0PlxcbmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD4ke3NjcmlwdEFycmF5WzBdfTwvc2NyaXB0PmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD4ke2NvbXBvc2VkU2NyaXB0U3RyaW5nfTwvc2NyaXB0PmA7XG4gICAgXG4gICAgLy8gQ29tYmluZSBmb3JtZXIgcmVzdWx0c1xuICAgIGNvbnN0IHNjcmlwdGVkSHRtbCA9IGpzeFN0cmluZy5zbGljZSgwLCBqc3hTdHJpbmcubGVuZ3RoIC0gNikgKyBzY3JpcHRzICsgXCI8L2Rpdj5cIjtcbiAgICBcbiAgICAvLyBSZXR1cm4gZ2VuZXJhdGVkIEhUTUwgYXMgYSBzdHJpbmdcbiAgICByZXR1cm4gc2NyaXB0ZWRIdG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2lnbmFscyAocmVxdWVzdEpzb24pIHtcbiAgICByZXR1cm4gcmVuZGVySHRtbChyZXF1ZXN0SnNvbik7XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNjb3BlIEZpeGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2NvcGUgRml4ZXIgZnVuY3Rpb24gaXMgcmVsYXRlZCB0byB0aGUgZ2VuIHZhcmlhYmxlIHBhcnNpbmcgYWxnb3JpdGhtLiBTaW5jZSB0aGUgdG9rZW5pemVyIFxuLy8gZnVuY3Rpb24gZG9lcyBub3QgdGFrZSBpbnRvIGFjY291bmQgdGhhdCBtYXRoIG9wZXJhdG9ycyAqIChtdWx0aXBsaWNhdGlvbikgYW5kIC8gKGRpdmlzaW9uKVxuLy8gYXJlIGV4ZWN1dGVkIGZpcnN0LCB3ZSBuZWVkIHRvIHB1dCBzY29wZXMgYXJvdW5kIGJpdHMgdGhhdCBzaG91bGQgZXhlY3V0ZWQgZmlyc3QuIFRoaXMgaXMgXG4vLyBub3QgZmluYWwgc29sdXRpb24sIHNpbmNlIGl0IGRvZXMgbm90IHRha2UgZm9sbG93aW5nIHNpdHVhdGlvbnMgaW50byBhY2NvdW50OlxuLy8gICAgICogdGhlcmUgaXMgYSBtaW51cyBvciBwbHVzIHNpZ24gYmVmb3JlIGEgbnVtYmVyOiAtMSpbdmFyaWFibGVdXG4vLyAgICAgICAgIC0gSW4gdGhpcyBjYXNlIGl0IHdvdWxkIHJldHVybiB0aGlzOiAtKDEqW3ZhcmlhYmxlXSkuIFRoaXMgZG9lcyBub3QgYXBwbHkgc2NvcGVzXG4vLyAgICAgICAgICAgY29ycmVjdGx5LlxuLy9cbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFsZ29yaXRobSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGFsZ29yaXRobSBtYWtlcyBvbmx5IG9uZSBnZW5lcmFsIHN3ZWVwIHRocm91Z2ggdGhlIHN0cmluZy4gVGhpcyBtZWFucyB0aGF0IGlmIG5vIFxuLy8gc2NvcGVzIGFyZSBuZWVkZWQsIGV4ZWN1dGlvbiB0aW1lIHdpbGwgYmUgbWluaW1hbCwgaS5lLiBpdCB3aWxsIHRha2UgYXMgbXVjaCB0aW1lIGFzIGl0XG4vLyB0YWtlcyB0byBsb29wIHRocm91Z2ggdGhlIHN0cmluZyBvbmNlIGFuZCBjaGVjayBpZiB0aGUgY2hhcmFjdGVyIGlzICogb3IgLy4gSW4gdGhlIGNhc2Ugb2Zcbi8vIDM0IGNoYXJhY3RlciBzdHJpbmcsIHRoaXMgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgaW4gYWJvdW50IDAuMy0wLjUgbXMuIFdpdGggYW4gYXZlcmFnZSBvZiBcbi8vIGFyb3VuZCAwLjRtcyBhbmQgMzQgY2hhcmFjdGVycywgd2UgY2FuIGFwcHJveGltYXRlIHRoYXQgb25lIGNoYXJhY3RlciB0YWtlcyAwLjQgLyAzNCA9IDEuNjZcbi8vIG1pY3JvIHNlY29uZHMuIFRoaXMgd2FzIHRlc3RlZCBvbiAyLjdHaHogSW50ZWwgQ29yZSBpNy4gU28gaXQgdG9vayBhcm91bmQgNDQ4MiBjbG9jayBjeWNsZXNcbi8vIHRvIGV4ZWN1dGUgdGhhdCBhY2NvcmRpbmcgdG8gZm9sbG93aW5nIGVxdWF0aW9uOiAxLjY2dXMgLyAoMSAvIDIuN0cpID0gNDQ4Mi4gVGhpcyBjb3VsZCBiZSBcbi8vIGRyYW1hdGljYWxseSBpbXByb3ZlZCBieSB1c2luZyBjdXN0b20gbWFkZSBOb2RlLmpzIGMrKyBwbHVnaW4gd2hpY2ggYWxsb3dzIHRvIHJ1biBjKytcbi8vIGJpbmFyaWVzIGZyb20gTm9kZS5qcyBvciBieSB3cml0aW5nIHRoZSB3aG9sZSByZW5kZXJlciBzZXJ2ZXIgaW4gYSBjb21waWxlZCBsYW5ndWFnZSBsaWtlIFxuLy8gcHl0aG9uLCBjIywgZ28sIG9yIHN3aWZ0LiBUaGVyZSBpcyBhbHNvIGEgcG9zc2liaWxpdHkgdG8gd3JpdGUgaXQgaW4gUnVzdCBsYW5ndWFnZSwgQyBvclxuLy8gQysrLiBUaGlzIHdvdWxkIGFsbG93IHRvIGNvbXBpbGUganVzdCB0aGlzIGZ1bmN0aW9uIHRvIFdlYkFzc2VtYmx5IGFuZCBydW4gaXQgaW4gTm9kZS5qcyBhdCBcbi8vIGNvbXBpbGVkIHNwZWVkLiBJZiBmdXJ0aGVyIGRldmVsb3BtZW50IHdpbGwgYmUgZG9uZSBhbmQgdGhlcmUgd2lsbCBiZSBhIGRlY2lzaW9uIHRvICBzd2l0Y2hcbi8vIHRvIGEgY29tcGlsZWQgbGFuZ3VhZ2Ugc2VydmVyLCBJIHdvdWxkIHN1Z2dlc3QgdXNpbmcgR08gbGFuZ3VhZ2UgZHVlIHRvIGl0cyBzaW1wbGljaXR5LlxuLy9cbi8vIEFsZ2l0aG0gd29ya3MgaW4gYSBmb2xsb3dpbmcgZmFzaGlvbjpcbi8vICAgMS4gTWFrZSBzdXJlIHBhc3NlZCB0ZXh0IGlzIG9mIGEgU3RyaW5nIHR5cGVcbi8vICAgMi4gU2V0IGZsYWdzIHRvIGZhbHNlOlxuLy8gICAgICAgLSBib3JkZXIgZmxhZ3M6IGluZGljYXRlIGlmIG9uIGxlZnQgb3IgcmlnaHQsIGEgKyBvciAtIHNpZ24gd2FzIGZvdW5kXG4vLyAgICAgICAtIGJyYWNrZXQgZmxhZ3M6IGluZGljYXRlIGlmIHdoaWxlIHN3ZWVwaW5nIGxlZnQgYW5kIHJpZ2h0IGEgc2NvcGUgd2FzIGZvdW5kXG4vLyAgIDMuIEluaXRpYXRlIHZhcmlhYmxlcyBmb3IgbGVmdCBhbmQgcmlnaHQgc3dlZXBlcnNcbi8vICAgNC4gTG9vcCB1bnRpbCB3aG9sZSBzdHJpbmcgd2FzIHNjYW5uZWQsIGluIHRoZSBsb29wOlxuLy8gICAgICAgMS4gSWYgY3VycmVudCBjaGFyYWN0ZXIgaXMgXCIqXCJcIiBvciBcIi9cIiwgY29udGludWUsIG90aGVyd2lzZSBpbmNyZWFzZSBpbmRleCBieSBvbmUgYW5kIGNoZWNrIGFnYWluXG4vLyAgICAgICAyLiBTY2FuIHRvIHRoZSBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgaW5kZXguXG4vLyAgICAgICAzLiBJZiByYW4gb3V0IG9mIGJvdW5kcyBvZiB0aGUgc3RyaW5nLCBzdG9wIHNjYW5uaW5nIGxlZnQsIG1vdmUgdG8gc3RlcCA3XG4vLyAgICAgICA0LiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBzZXQgY2xvc2luZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDUuIElmIGhpdCBvcGVuaW5nIGJyYWNrZXQsIGNoZWNrIGlmIGNsb3NpbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZyBhbmQgc2V0IGNsb3NpbmcgYnJhY2tldCBmbGFnIHRvIGZhbHNlIGFnYWluLlxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCBtb3ZlIHRvIHN0ZXAgN1xuLy8gICAgICAgNi4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBjbG9zaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZywgbW92ZSByaWdodCBieSBvbmUgc3RlcCBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuLy8gICAgICAgNy4gU2NhbiB0byB0aGUgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBpbmRleC5cbi8vICAgICAgIDguIElmIHJhbiBvdXQgb2YgYm91bmRzIG9mIHRoZSBzdHJpbmcsIHN0b3Agc2Nhbm5pbmcgbGVmdCwgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICA5LiBJZiBoaXQgb3BlbmluZyBicmFja2V0LCBzZXQgb3BlbmluZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDEwLiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcgYW5kIHNldCBvcGVuaW5nIGJyYWNrZXQgZmxhZyB0byBmYWxzZSBhZ2Fpbi5cbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICAxMS4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuXG5leHBvcnQgZnVuY3Rpb24gZml4U2NvcGVzKGdlbikge1xuICAgIGxldCBnID0gU3RyaW5nKGdlbik7XG5cbiAgICAvLyBWYXJpYWJsZSBhcmUgdGFrZW4gb3V0c2lkZSBvZiBmb3IgbG9vcCwgdG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UuXG4gICAgLy8gSW4gdGhpcyB3YXksIHZhcmlhYmxlcyBhcmUganVzdCByZXdyaXR0ZW4gaW4gdGhlIHNhbWUgbWVtb3J5XG4gICAgLy8gbG9jYXRpb24gaW5zdGVhZCBvZiBjcmVhdGluZyBuZXcgdmFyaWFibGUgZXZlcnkgdGltZS5cbiAgICBsZXQgZm91bmRMZWZ0Qm9yZGVyID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kUmlnaHRCb3JkZXIgPSBmYWxzZTtcblxuICAgIGxldCBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICBsZXQganVzdEhpdENsb3NpbmdCcmFja2V0ID0gZmFsc2U7XG5cbiAgICBsZXQgbGVmdDtcbiAgICBsZXQgcmlnaHQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGdbaV0gPT09IFwiKlwiIHx8IGdbaV0gPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAvLyBTY2FuIGxlZnRcbiAgICAgICAgICAgIGZvciAobGVmdCA9IGk7ICFmb3VuZExlZnRCb3JkZXI7IGxlZnQtLSkge1xuICAgICAgICAgICAgICAgIC8vIEV4aXQgdGhlIHNjYW5uaW5nIGxvb3AgaWYgaGl0IGxlZnQgc3RyaW5nIHdhbGxcbiAgICAgICAgICAgICAgICBpZiAobGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZG9lcyBub3Qgc2V0IGZvdW5kTGVmdEJvcmRlciB2YXJpYWJsZSB0byB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpZiBib3RoIHNpZGVzIGFyZSBicmFja2V0cyBvciBvdXRlciB3YWxscyBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RyaW5nLCBuZXcgYnJhY2tldHMgc2hvdWxkIG5vdCBiZSBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGhpdHMgb3BlbmluZyBicmFja2V0LCBpdCBjaGVja3MgaWYgaXQgaGl0IGNsb3NpbmcgYnJhY2tldCBiZWZvcmVcbiAgICAgICAgICAgICAgICBpZiAoZ1tsZWZ0XSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRDbG9zaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdEhpdENsb3NpbmdCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFya3MgdGhhdCBpdCBoaXQgY2xvc2luZyBicmFja2V0LCBzbyB0aGF0IGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGxhdGVyLFxuICAgICAgICAgICAgICAgIC8vIGl0IGtub3dzIHRoYXQgaXQgc2hvdWxkbid0IFxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIilcIikganVzdEhpdENsb3NpbmdCcmFja2V0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIEV4aXQgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgcGx1cyBvciBtaW51c1xuICAgICAgICAgICAgICAgIC8vIEFsc28sIG1vdmUgcmlnaHQsIHNvIHRoYXQgYnJhY2tlcyBpcyBpbnNlcnRlZCBhZnRlciArIG9yIC0gc2lnblxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIitcIiB8fCBnW2xlZnRdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdENsb3NpbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kTGVmdEJvcmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2NhbiByaWdodFxuICAgICAgICAgICAgZm9yIChyaWdodCA9IGk7ICFmb3VuZFJpZ2h0Qm9yZGVyOyByaWdodCsrKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhpdCB0aGUgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgcmlnaHQgc3RyaW5nIHdhbGwgb3IgY2xvc2luZyBicmFja2V0XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0ID49IGcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZG9lcyBub3Qgc2V0IGZvdW5kUmlnaHRCb3JkZXIgdmFyaWFibGUgdG8gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgaWYgYm90aCBzaWRlcyBhcmUgYnJhY2tldHMgb3Igb3V0ZXIgd2FsbHMgb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN0cmluZywgbmV3IGJyYWNrZXRzIHNob3VsZCBub3QgYmUgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBoaXRzIGNsb3NpbmcgYnJhY2tldCwgaXQgY2hlY2tzIGlmIGl0IGhpdCBvcGVuaW5nIGJyYWNrZXQgYmVmb3JlXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdE9wZW5pbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYXJrcyB0aGF0IGl0IGhpdCBjbG9zaW5nIGJyYWNrZXQsIHNvIHRoYXQgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgbGF0ZXIsXG4gICAgICAgICAgICAgICAgLy8gaXQga25vd3MgdGhhdCBpdCBzaG91bGRuJ3QgXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIihcIikganVzdEhpdE9wZW5pbmdCcmFja2V0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChnW3JpZ2h0XSA9PT0gXCIrXCIgfHwgZ1tyaWdodF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0T3BlbmluZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRSaWdodEJvcmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIG9uIG9uZSBvZiB0aGUgc2lkZXMgdGhlcmUgaXMgKyBvciAtIHNpZ25cbiAgICAgICAgICAgIGlmIChmb3VuZExlZnRCb3JkZXIgfHwgZm91bmRSaWdodEJvcmRlcikge1xuICAgICAgICAgICAgICAgIC8vIFNsaWNlIG9yaWdpbmFsIHN0cmluZyBhdCB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uc1xuICAgICAgICAgICAgICAgIGxldCBvbmUgPSBnLnNsaWNlKDAsIGxlZnQpO1xuICAgICAgICAgICAgICAgIGxldCB0d28gPSBnLnNsaWNlKGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICBsZXQgdGhyZWUgPSBnLnNsaWNlKHJpZ2h0LCBnLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgYnJhY2tldHMgYmV0d2VlbiBmb3JtZXIgdGhyZWUgc3RyaW5ncyB0byBmb3JtXG4gICAgICAgICAgICAgICAgLy8gbmV3IHN0cmluZyB3aXRoIGluc2VydGVkIGJyYWNrZXRzXG4gICAgICAgICAgICAgICAgZyA9IG9uZSArIFwiKFwiICsgdHdvICsgXCIpXCIgKyB0aHJlZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVzZXQgYm9yZGVyIHZhcmlhYmxlc1xuICAgICAgICAgICAgZm91bmRMZWZ0Qm9yZGVyID0gZmFsc2U7XG4gICAgICAgICAgICBmb3VuZFJpZ2h0Qm9yZGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZztcbn0iLCJpbXBvcnQge1xuICAgIGdldFVuY2FsY3VsYXRlZE5vZGVzLFxuICAgIGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnksXG4gICAgb2JqZWN0U2l6ZSxcbiAgICB3YXNDYWxjdWxhdGVkLFxuICAgIGFsbElucHV0c0NhbGN1bGF0ZWQsXG4gICAgY2FsY3VsYXRlT3V0cHV0LFxuICAgIGdldFRvdWNoSW5wdXRzLFxuICAgIGluaXRUaW1lLFxuICAgIGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyxcbiAgICBnZXRPdGhlclNpZGVPZkNvbm5lY3RvclxufSBmcm9tICcuL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucyc7XG5cbmltcG9ydCB7IHRva2VuaXplR2VuZXJhdG9yIH0gZnJvbSAnLi9nZW5lcmF0b3JUb2tlbml6ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NyaXB0R2VuZXJhdG9yKGFsbE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdKSB7XG4gICAgLy8gRXhlY3V0YWJsZSB0byBzdG9yZSBnZW5lcmF0ZWQgamF2YXNjcmlwdCBjb2RlLiBBbnkgaW5pdGlhbGlzYXRpb24gY29kZSBzaG91bGQgYmUgaGVyZS5cbiAgICBsZXQgZXhlQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IGV4ZWN1dGFibGUgPSBcInZhciBncmFwaHMgPSB7fTtcXG5cIjtcblxuICAgIC8vIFNldHVwIHRpbWVcbiAgICBleGVjdXRhYmxlICs9IGluaXRUaW1lKC0yLCAyLCAwLjAwMSk7XG5cblxuXG5cbiAgICAvLyBDYWxjdWxhdGVkIG5vZGVzIGhhdmUgZm9sbG93aW5nIHNoYXBlOiBcIm5vZGVJZDpvdXRwdXRJZFwiXG4gICAgbGV0IGNhbGN1bGF0ZWROb2Rlczogc3RyaW5nW10gPSBbXTtcblxuICAgIC8vIFN0YXRpc3RpY3Mgb2JqZWN0XG4gICAgbGV0IHN0YXRpc3RpY3MgPSB7XG4gICAgICAgIGxvb3BDb3VudGVyOiAwLFxuICAgICAgICBpbml0aWFsVG90YWxOb2Rlczogb2JqZWN0U2l6ZShhbGxOb2RlcyksXG4gICAgICAgIGluaXRpYWxUb3RhbENvbm5lY3RvcnM6IGFsbENvbm5lY3Rpb25zLmxlbmd0aFxuICAgIH07XG5cbiAgICAvLyBTZXBhcmF0ZXMgdW5jYWxjdWxhdGVkIG5vZGVzIGFuZCBzY29wZXMgYXQgdGhlIHN0YXJ0LlxuICAgIGxldCB7dW5jYWxjdWxhdGVkTm9kZXMsIGFsbFNjb3Blc30gPSBnZXRVbmNhbGN1bGF0ZWROb2RlcyhhbGxOb2Rlcyk7XG5cbiAgICAvLyBTZXBhcmF0ZSB0b3VjaCBub2RlcyBmb3JtIHJlZ3VsYXIgbm9kZXNcbiAgICBsZXQgdG91Y2hOb2Rlc1NlcGFyYXRlZCA9IGdldFRvdWNoSW5wdXRzKHVuY2FsY3VsYXRlZE5vZGVzKTtcblxuICAgIHVuY2FsY3VsYXRlZE5vZGVzID0gdG91Y2hOb2Rlc1NlcGFyYXRlZC51bmNhbGN1bGF0ZWROb2RlcztcblxuICAgIC8vIERlYWwgd2l0aCB0b3VjaCBDb250cm9sc1xuICAgIGxldCB0b3VjaE5vZGVzID0gdG91Y2hOb2Rlc1NlcGFyYXRlZC50b3VjaE5vZGVzO1xuXG4gICAgZXhlY3V0YWJsZSArPSBnZW5lcmF0ZVRvdWNoQ29udHJvbGxlcnModG91Y2hOb2Rlcyk7XG4gICAgXG4gICAgZm9yKGxldCB0IGluIHRvdWNoTm9kZXMpIHtcbiAgICAgICAgZm9yKGxldCBvIGluIHRvdWNoTm9kZXNbdF0ub3V0cHV0cykge1xuICAgICAgICAgICAgY2FsY3VsYXRlZE5vZGVzLnB1c2goYCR7dH06JHt0b3VjaE5vZGVzW3RdLm91dHB1dHNbb10udGl0bGV9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbm5lY3Rpb24gRGljdGlvbmFyeSBjb250YWlucyBjb25uZWN0aW9ucyBpbiBrZXk6IHZhbHVlIGZvcm1hdCwgd2hlcmVcbiAgICAvLyBib3RoIGNvbnRhaW4gbm9kZUlkIGFuZCBzZXR0aW5nSWQgYXMgc3RyaW5ncyBzZXBhcmF0ZWQgYnkgYSBjb2xvbi5cbiAgICBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnkgPSBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5KGFsbENvbm5lY3Rpb25zKTtcblxuXG5cbiAgICAvLyBHZW5lcmFsIHJ1bGVzIGZvciBhbGdvcml0aG0gd3JpdGluZzpcbiAgICAvLyAqIHVzZSBhcyBtYW55IGZ1bmN0aW9ucyBhcyBwb3NzaWJsZSAoaW4gcGVyZm9ybWFuY2UgYm91bmRzKVxuICAgIC8vICogXG5cbiAgICAvLyAwLiBMb29wIHRocm91Z2ggdW5jYWxjdWxhdGVkIG5vZGVzIGFuZCBmaW5kIHNjb3Blcy4gU2NvcGVzIGRvIG5vdCBoYXZlIG91dHB1dHMsIHNvIG5vIG5lZWQgdG8gZmluZCBpbnB1dHMuXG4gICAgICAgIC8vIDAuMCBEbyBpdCBpbiBhIGZ1bmN0aW9uP1xuXG4gICAgLy8gMS4gTG9vcCB1bnRpbCBhbGwgbm9kZXMgYXJlIGNhbGN1bGF0ZWRcbiAgICAvLyB8ICAgMS4gQ2hlY2sgaWYgbm9kZSB3YXMgY2FsY3VsYXRlZCBiZWZvcmUsIGlmIHllcyBnbyB0byBuZXh0IG5vZGUuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgMi4gSWYgd2FzIG5vdCBjYWxjdWxhdGVkOlxuICAgIC8vIHwgICB8ICAgMS4gQ2hlY2sgaWYgYWxsIGNvbm5lY3RlZCBpbnB1dHMgYXJlIGNvbm5lY3RlZCB0byB0aGUgY2FsY3VsYXRlZCBub2RlcywgaWYgbm90IC0gZ28gdG8gbmV4dCBub2RlLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIHwgICAyLiBJZiB5ZXMsIHNhdmUgYWxsIHVuY29ubmVjdGVkIGlucHV0cyAodmFsdWUgZnJvbSBkZWZhdWx0IHZhbHVlKS4gKGZ1bmN0aW9uIGZvciBlYWNoIHNhdmUpXG4gICAgLy8gfCAgIHwgICAzLiBDaGVjayBpZiBvdXRwdXQgaXMgcG9pbnRpbmcgdG8gYSBnZW5lcmF0b3IuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgfCAgIDQuIElmIHllcywgcGFyc2UgZ2VuZXJhdG9yXG4gICAgLy8gfCAgIHwgICB8ICAgMS4gU2NhbiBnZW5lcmF0b3IgYW5kIHNhdmUgdmFyaWFibGVzXG4gICAgLy8gfCAgIHwgICB8ICAgMi4gSWYgdmFyaWFibGUgaXMgYSBnZW5lcmF0b3IgZ28gdG8gc3RlcCAxLjIuNFxuICAgIC8vIHwgICB8ICAgfCAgIDMuIExvb3AgdW50aWwgYWxsIGdlbmVyYXRvcnMgd2VyZSBwYXJzZWRcbiAgICAvLyB8ICAgfCAgIHwgLS0tLS0tLS0tLS0gSW4gZm9sbG93aW5nLCBpbnB1dHMgYXJlIGNoZWNrZWQgZmlyc3Qgc2luY2Ugc2V0dGluZyBjYW4gYmUgYW4gaW5wdXQgLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHwgICB8ICAgNS4gQ2hlY2sgaWYgb3V0cHV0IGlzIHBvaW50aW5nIHRvIGFuIGlucHV0LCBpZiB5ZXMgYXNzaWduIGlucHV0IHZhcmlhYmxlIHRvIHRoZSBvdXRwdXQgdmFyaWFibGVcbiAgICAvLyB8ICAgfCAgIDYuIENoZWNrIGlmIG91dHB1dCBpcyBwb2ludGluZyB0byBhIHNldHRpbmcsIGlmIHllcyBhc3NpZ24gY29uc3RhbnQgdG8gdGhlIHNldHRpbmdcbiAgICAvLyAyLiBGb3IgZWFjaCBzY29wZTpcbiAgICAvLyB8ICAgMS4gR2V0IGFsbCBpbnB1dHMgYW5kIHNhdmUgdGhlbSBpbiB2YXJpYWJsZXMgKGFzc3VtZWQgdG8gYmUgY2FsY3VsYXRlZCBzaW5jZSB0ZXJtaW5hdGlvbiBjb25kaXRpb24gZnJvbSBzdGVwIDEgaXMgYmFzZWQgb24gYWxsIG5vZGVzIGJlaW5nIGNhbGN1bGF0ZWQuKVxuICAgIC8vIHwgICAyLiBQYXJzZSBmaXJzdCBnZW5lcmF0b3IgYW5kIGdlbmVyYXRlIHNjb3BlIG91dHB1dCB2YXJpYWJsZSAobWFraW5nIHN1cmUgdGhhdCBhbGwgdmFyaWFibGVzIGZyb20gZ2VuZXJhdG9yIHdlcmUgc2F2ZWQgYmVmb3JlaGFuZClcbiAgICAvLyB8ICAgMy4gR2VuZXJhdGUgYW4gYXJyYXkgb2Ygb3V0cHV0IGRhdGEgYmFzZWQgb24gZ2VuZXJhbCAob3IgY29ubmVjdGVkKSB0aW1lIGFycmF5IGFuZCBzYXZlIGl0IGludG8gYSB2YXJpYWJsZVxuICAgIC8vIHwgICA0LiBDcmVhdGUgcmVkcmF3IGZ1bmN0aW9uLCBpbnNpZGUgdGhhdCBmdW5jdGlvbjpcbiAgICAvLyB8ICAgfCAgIDEuIEZpbmQgYXBwcm9wcmlhdGUgY2FudmFzIG5vZGUgaW4gdGhlIGRvbVxuICAgIC8vIHwgICB8ICAgMi4gR2V0IGNvbnRleHRcbiAgICAvLyB8ICAgfCAgIDMuIFJlcG9wdWxhdGUgZ3JhcGggYXJyYXkgd2l0aCBuZXcgZ3JhcGhzLlxuICAgIC8vIHwgICA1LiBDcmVhdGUgdXBkYXRlRGF0YSBmdW5jdGlvbiwgaW5zaWRlIHRoYXQgZnVuY3Rpb246XG4gICAgLy8gfCAgIHwgICAxLiBMb29wIHRocm91Z2ggZ3JhcGggYXJyYXkgYW5kIHVwZGF0ZSBncmFwaHMgd2l0aCBuZXcgZGF0YS5cblxuXG4gICAgLy8gMS4gTG9vcCB1bnRpbCBhbGwgbm9kZXMgYXJlIGNhbGN1bGF0ZWQgYW5kIGNvdW50IG51bWJlciBvZiBpdGVyYXRpb25zIGZvciBzdGF0aXN0aWNzXG4gICAgZm9yKHN0YXRpc3RpY3MubG9vcENvdW50ZXIgPSAwOyBvYmplY3RTaXplKHVuY2FsY3VsYXRlZE5vZGVzKSA+IDA7IHN0YXRpc3RpY3MubG9vcENvdW50ZXIrKykge1xuICAgICAgICAvLyAxLjAgTG9vcCB0aHJvdWdoIGFsbCB1bmNhbGN1bGF0ZWQgbm9kZXNcbiAgICAgICAgZm9yKGxldCBub2RlS2V5IGluIHVuY2FsY3VsYXRlZE5vZGVzKSB7XG4gICAgICAgICAgICAvLyBTYXZlIGN1cnJlbnQgbm9kZSBpbnRvIGEgY29uc3RhbnRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gdW5jYWxjdWxhdGVkTm9kZXNbbm9kZUtleV07XG5cbiAgICAgICAgICAgIC8vIEdvIHRvIG5leHQgbm9kZSBpZiBub3QgYWxsIGNvbm5lY3RlZCBpbnB1dHMgd2VyZSBjYWxjdWxhdGVkIGFscmVhZHlcbiAgICAgICAgICAgIGlmKCFhbGxJbnB1dHNDYWxjdWxhdGVkKG5vZGVLZXksIGN1cnJlbnROb2RlLmlucHV0cywgYWxsQ29ubmVjdGlvbnMsIGNhbGN1bGF0ZWROb2RlcykpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0czogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGV2ZXJ5IG91dHB1dCBvZiB0aGUgbm9kZSB0byBjYWxjdWxhdGUgdGhlbVxuICAgICAgICAgICAgZm9yKGxldCBvID0gMDsgbyA8IGN1cnJlbnROb2RlLm91dHB1dHMubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRLZXkgPSBjdXJyZW50Tm9kZS5vdXRwdXRzW29dLnRpdGxlO1xuICAgICAgICAgICAgICAgIC8vIElmIGN1cnJlbnQgb3V0cHV0IHdhcyBjYWxjdWxhdGVkIGFscmVhZHksIHNraXAgdG8gbmV4dCBvbmVcbiAgICAgICAgICAgICAgICBpZih3YXNDYWxjdWxhdGVkKGNhbGN1bGF0ZWROb2Rlcywgbm9kZUtleSwgb3V0cHV0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZUNhbGN1bGF0ZWRPdXRwdXRzLnB1c2goYCR7bm9kZUtleX06JHtvdXRwdXRLZXl9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIG5vdCwgY2FsY3VsYXRlIGl0IGFuZCBhcHBlbmQgdG8gdGhlIGV4ZWN1dGFibGUgdGV4dC5cbiAgICAgICAgICAgICAgICBsZXQgeyBleGUsIHdhc1N1Y2Nlc3NmdWwgfSA9IGNhbGN1bGF0ZU91dHB1dChub2RlS2V5LCBvdXRwdXRLZXksIGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYod2FzU3VjY2Vzc2Z1bCkge1xuICAgICAgICAgICAgICAgICAgICBleGVjdXRhYmxlICs9IGV4ZTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkTm9kZXMucHVzaChgJHtub2RlS2V5fToke291dHB1dEtleX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBDb3VsZCBub3QgZ2VuZXJhdGUgb3V0cHV0IGNvZGU6ICR7bm9kZUtleX0gLSAke291dHB1dEtleX0gfCBzY3JpcHRHZW5lcmF0b3IudHNgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0cy5sZW5ndGggPT09IGN1cnJlbnROb2RlLm91dHB1dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gTG9vcCB0aHJvdWdoIGFsbCBzY29wZXMgYW5kIGRyYXcgZ3JhcGhzXG5cbiAgICBleGVBcnJheS5wdXNoKGV4ZWN1dGFibGUpO1xuICAgIGV4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZXhlY3V0YWJsZSArPSBcImZ1bmN0aW9uIHVwZGF0ZSgpIHtcXG5cIjtcblxuICAgIGZvcihsZXQgcyBpbiBhbGxTY29wZXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gYWxsU2NvcGVzW3NdO1xuXG4gICAgICAgIC8vIGNvbnN0IG91dHB1dEdlbmVyYXRvciA9IGN1cnJlbnRTY29wZS5nZW5lcmF0b3JzWzBdO1xuXG4gICAgICAgIC8vIGNvbnN0IG91dHB1dFRva2VucyA9IHRva2VuaXplR2VuZXJhdG9yKG91dHB1dEdlbmVyYXRvci52YWx1ZSwgcyk7XG5cbiAgICAgICAgY29uc3QgeyBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQgfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7bm9kZUlkOiBzLCBzZXR0aW5nSWQ6IFwic2lnbmFsXCJ9KTtcblxuICAgICAgICBleGVjdXRhYmxlICs9IGBcbiAgICAgICAgICAgIGlmKGdyYXBocy4ke3N9KSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge25ld0RhdGEucHVzaCgke290aGVyTm9kZUlkfSR7b3RoZXJTZXR0aW5nSWR9KHRbaV0pKTt9XG4gICAgICAgICAgICAgICAgZ3JhcGhzLiR7c30uZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgICAgICAgICBncmFwaHMuJHtzfS51cGRhdGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhc05vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7c31cIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgdmlld1NpemUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogY2FudmFzTm9kZS5wYXJlbnROb2RlLm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXNOb2RlLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAgICAgICAgIHZhciB3ID0gdmlld1NpemUueDtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHZpZXdTaXplLnkgLyAke29iamVjdFNpemUoYWxsU2NvcGVzKX07XG5cbiAgICAgICAgICAgICAgICBjYW52YXNOb2RlLndpZHRoID0gdztcbiAgICAgICAgICAgICAgICBjYW52YXNOb2RlLmhlaWdodCA9IGg7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKCR7b3RoZXJOb2RlSWR9JHtvdGhlclNldHRpbmdJZH0odFtpXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7bGFiZWxzOiB0Lm1hcCh0aSA9PiB0aS50b0ZpeGVkKDIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaWduYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnJHtzY29wZUNvbG9yKGN1cnJlbnRTY29wZS5zZXR0aW5nc1sxXS52YWx1ZSl9JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbnNpb246IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBwZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRSYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyUmFkaXVzOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9JHtjdXJyZW50U2NvcGUuc2V0dGluZ3NbMF0udmFsdWUgPT0gXCJ0cnVlXCIgPyAnJyA6IGAsIHNjYWxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSwgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMC41XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9JHtnZW5lcmF0ZVRpdGxlKGN1cnJlbnRTY29wZS5zZXR0aW5nc1syXSl9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICBncmFwaHMuJHtzfSA9IG15Q2hhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICAgICAgZXhlY3V0YWJsZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgZXhlY3V0YWJsZSArPSBcIn07XFxuXCJcbiAgICBleGVjdXRhYmxlICs9IFwidXBkYXRlKCk7XCJcblxuICAgIGV4ZUFycmF5LnB1c2goZXhlY3V0YWJsZSk7XG4gICAgZXhlY3V0YWJsZSA9IFwiXCI7XG5cbiAgICAvLyByZXR1cm4gVWdsaWZ5SlMubWluaWZ5KGV4ZWN1dGFibGUpO1xuXG4gICAgcmV0dXJuIGV4ZUFycmF5O1xufVxuXG5cbmZ1bmN0aW9uIHNjb3BlQ29sb3IoY29sb3I6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoKGNvbG9yKSB7XG4gICAgICAgIGNhc2UgXCJyZWRcIjogcmV0dXJuICdyZ2IoMjU1LCAxMjAsIDEzMiknO1xuICAgICAgICBjYXNlIFwiYmx1ZVwiOiByZXR1cm4gJ3JnYigxMzIsIDEyMCwgMjU1KSc7XG4gICAgICAgIGNhc2UgXCJncmVlblwiOiByZXR1cm4gJ3JnYig1MCwgMjEwLCA2MCknO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ3JnYigyNTUsIDEyMCwgMTMyKSc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRpdGxlKHNldHRpbmc6IE5vZGVTZXR0aW5nc1NoYXBlKTogc3RyaW5nIHtcbiAgICBzd2l0Y2goc2V0dGluZy50aXRsZSkge1xuICAgICAgICBjYXNlIFwiXCI6IHJldHVybiBcIlwiO1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gKGAsIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnJHtzZXR0aW5nLnZhbHVlfScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0J1xuICAgICAgICAgICAgfWApXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgdG9rZW5pemVHZW5lcmF0b3IsIEdlbmVyYXRvclNlZ21lbnQgfSBmcm9tICcuL2dlbmVyYXRvclRva2VuaXplcic7XG5pbXBvcnQgeyB0b2tlblRvSnMgfSBmcm9tICcuL3Rva2VuVG9Kcyc7XG5cbi8vIEdldCBhbGwgbm9kZXMgdGhhdCBhcmUgbm90IHNjb3BlcywgYW5kIHNhdmUgc2NvcGVzIGludG8gdGhlaXIgb3duIGNvbGxlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmNhbGN1bGF0ZWROb2RlcyAoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKSA6IHt1bmNhbGN1bGF0ZWROb2RlczogTm9kZUNvbGxlY3Rpb24sIGFsbFNjb3BlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgdW5jYWxjdWxhdGVkOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCBzY29wZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG5cbiAgICBmb3IobGV0IGkgaW4gYWxsTm9kZXMpIHtcbiAgICAgICAgaWYoU3RyaW5nKGkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBzY29wZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuY2FsY3VsYXRlZFtpXSA9IGFsbE5vZGVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IHVuY2FsY3VsYXRlZCxcbiAgICAgICAgYWxsU2NvcGVzOiBzY29wZXNcbiAgICB9O1xufVxuXG4vLyBHZW5lcmF0ZSBjb25uZWN0aW9uIGRpY3Rpb25hcnlcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5IChhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10pOiB7W2Nvbm5lY3RvclN0YXJ0OiBzdHJpbmddOiBzdHJpbmd9IHtcbiAgICBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnk6IHtbY29ubmVjdG9yU3RhcnQ6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb25uZWN0b3JTdGFydCA9IGFsbENvbm5lY3Rpb25zW2ldLmNvbm5lY3RvclN0YXJ0O1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmQgPSBhbGxDb25uZWN0aW9uc1tpXS5jb25uZWN0b3JFbmQ7XG5cbiAgICAgICAgY29uc3QgY29ubmVjdG9yU3RhcnRDb21iaW5lZCA9IGNvbm5lY3RvclN0YXJ0Lm5vZGVJZCArIFwiOlwiICsgY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkO1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmRDb21iaW5lZCA9IGNvbm5lY3RvckVuZC5ub2RlSWQgKyBcIjpcIiArIGNvbm5lY3RvckVuZC5zZXR0aW5nSWQ7XG5cbiAgICAgICAgY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdG9yU3RhcnRDb21iaW5lZF0gPSBjb25uZWN0b3JFbmRDb21iaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29ubmVjdGlvbkRpY3Rpb25hcnk7XG59XG5cbi8vIENhbGN1bGF0ZSBvYmplY3Qgc2l6ZVxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFNpemUgKG9iajogb2JqZWN0KTogbnVtYmVyIHtcbiAgICBsZXQgYyA9IDA7XG4gICAgZm9yKGxldCBpIGluIG9iaikgYysrO1xuICAgIHJldHVybiBjKys7XG59XG5cbi8vIENoZWNrIGlmIG5vZGUgd2FzIGNhbGN1bGF0ZWQgYWxyZWFkeVxuZXhwb3J0IGZ1bmN0aW9uIHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzOiBzdHJpbmdbXSwgbm9kZUtleTogc3RyaW5nLCBvdXRwdXRLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYWxjdWxhdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU3BsaXQgc3RyaW5nIGZyb20gY2FsY3VsYXRlZCBub2RlcyBhcnJheSBhbmQgZ2V0IG5vZGUgYW5kIG91dHB1dCBrZXlzXG4gICAgICAgIGNvbnN0IHNwbGl0dGVkID0gY2FsY3VsYXRlZE5vZGVzW2ldLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE5vZGUgPSBzcGxpdHRlZFswXTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE91dHB1dCA9IHNwbGl0dGVkWzFdO1xuXG4gICAgICAgIGlmKGNhbGN1bGF0ZWROb2RlID09PSBub2RlS2V5ICYmIGNhbGN1bGF0ZWRPdXRwdXQgPT09IG91dHB1dEtleSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBHZXQgbm9kZUlkIGFuZCBzZXR0aW5nSWQgb2YgdGhlIG90aGVyIHNpZGUgb2YgdGhlIGNvbm5lY3Rpb246XG5leHBvcnQgZnVuY3Rpb24gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoXG4gICAgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBcbiAgICBjb25uZWN0b3JJbnB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9LFxuICAgIGNvbm5lY3Rvck91dHB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9KToge290aGVyTm9kZUlkOiBzdHJpbmcsIG90aGVyU2V0dGluZ0lkOiBzdHJpbmd9IHtcblxuICAgIGlmKGNvbm5lY3RvcklucHV0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgY29ubmVjdG9yIHN0YXJ0cy4uLlwiKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RvciA9IGFsbENvbm5lY3Rpb25zW2ldO1xuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIHN0YXJ0XG4gICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQubm9kZUlkID09PSBjb25uZWN0b3JJbnB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkID09PSBjb25uZWN0b3JJbnB1dC5zZXR0aW5nSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZUlkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyU2V0dGluZ0lkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChjb25uZWN0b3JPdXRwdXQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTY2FubmluZyBjb25uZWN0b3IgZW5kcy4uLiBcIiwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29ubmVjdG9yID0gYWxsQ29ubmVjdGlvbnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ29tcGFyaW5nIGZvbGxvd2luZyBjb25uZWN0b3JzOiBcIiwgY29ubmVjdG9yLmNvbm5lY3RvckVuZCwgY29ubmVjdG9yT3V0cHV0KVxuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIGVuZFxuICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvckVuZC5ub2RlSWQgPT09IGNvbm5lY3Rvck91dHB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZCA9PT0gY29ubmVjdG9yT3V0cHV0LnNldHRpbmdJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclNldHRpbmdJZDogY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0LnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3RoZXJOb2RlSWQ6IG51bGwsXG4gICAgICAgIG90aGVyU2V0dGluZ0lkOiBudWxsXG4gICAgfVxufVxuXG5cbi8vIENoZWNrIGlmIGFsbCBjb25uZWN0ZWQgaW5wdXRzIGluIHRoZSBub2RlIGFyZSBjb25uZWN0ZWQgdG8gdGhlIG91dHB1dHMgdGhhdCB3ZXJlIGFscmVhZHkgY2FsY3VsYXRlZCBvciBhcmUgbm90IGNvbm5lY3RlZFxuZXhwb3J0IGZ1bmN0aW9uIGFsbElucHV0c0NhbGN1bGF0ZWQobm9kZUlkOiBzdHJpbmcsIGlucHV0czogTm9kZUlucHV0U2hhcGVbXSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgbGV0IGRhdGE6IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudERhdGEgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7bm9kZUlkOiBub2RlSWQsIHNldHRpbmdJZDogaW5wdXRzW2ldLnRpdGxlfSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGNvbm5lY3RlZFxuICAgICAgICBpZihvdGhlck5vZGVJZCAmJiBvdGhlclNldHRpbmdJZCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2FzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIGlmKHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzLCBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIG5vdCBjb25uZWN0ZWRcbiAgICAgICAgICAgIGN1cnJlbnREYXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaChjdXJyZW50RGF0YSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBkIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGFbZF0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIHNwZWNpZmljIG91dHB1dCBvZiB0aGUgbm9kZVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU91dHB1dChcbiAgICBub2RlSWQ6IHN0cmluZywgXG4gICAgb3V0cHV0S2V5OiBzdHJpbmcsIFxuICAgIGN1cnJlbnROb2RlOiBTaWduYWxOb2RlLFxuICAgIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHsgZXhlOiBzdHJpbmcsIHdhc1N1Y2Nlc3NmdWw6IGJvb2xlYW4gfSB7XG4gICAgXG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgY29uc3QgZ2VuZXJhdG9ySWQgPSBpc0dlbmVyYXRvcihjdXJyZW50Tm9kZSwgb3V0cHV0S2V5KTtcblxuICAgIC8vIENoZWNrIGlmIG91dHB1dCBpcyBhIGdlbmVyYXRvclxuICAgIGlmKGdlbmVyYXRvcklkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBjb25zdCBvdXRwdXRHZW5lcmF0b3IgPSBjdXJyZW50Tm9kZS5nZW5lcmF0b3JzW2dlbmVyYXRvcklkXTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSB0b2tlbnNcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdG9rZW5pemVHZW5lcmF0b3Iob3V0cHV0R2VuZXJhdG9yLnZhbHVlLCBub2RlSWQpO1xuXG4gICAgICAgIC8vIFNhdmUgdmFyaWFibGVzIGZpcnN0XG4gICAgICAgIGUgKz0gc2F2ZVZhcmlhYmxlcyhub2RlSWQsIGN1cnJlbnROb2RlLCB0b2tlbnMsIGFsbENvbm5lY3Rpb25zKTtcblxuICAgICAgICAvLyBTYXZlIG91dHB1dFxuICAgICAgICBlICs9IHRva2VuVG9Kcyhub2RlSWQsIG91dHB1dEdlbmVyYXRvci50aXRsZSwgdG9rZW5zKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRJZCA9IGlzSW5wdXQoY3VycmVudE5vZGUsIG91dHB1dEtleSk7XG5cbiAgICBpZihpbnB1dElkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IHNhdmVJbnB1dFZhcmlhYmxlKGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUlkLCBvdXRwdXRLZXksIGlucHV0SWQpO1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZUlkfSR7Y3VycmVudE5vZGUuaW5wdXRzW2lucHV0SWRdLnRpdGxlfX07XFxuYDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dGluZ0lkID0gaXNTZXR0aW5nKGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuXG4gICAgaWYoc2V0dGluZ0lkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7Y3VycmVudE5vZGUuc2V0dGluZ3Nbc2V0dGluZ0lkXS52YWx1ZX19O1xcbmA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4ZTogZSxcbiAgICAgICAgICAgIHdhc1N1Y2Nlc3NmdWw6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGV4ZTogXCJcIixcbiAgICAgICAgd2FzU3VjY2Vzc2Z1bDogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVWYXJpYWJsZXMobm9kZUtleTogc3RyaW5nLCBub2RlOiBTaWduYWxOb2RlLCBjb2RlOiBHZW5lcmF0b3JTZWdtZW50W10sIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBzID0gMDsgcyA8IGNvZGUubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgaWYoY29kZVtzXS50eXBlID09PSBcInZhclwiKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJOYW1lOiBzdHJpbmcgPSBTdHJpbmcoY29kZVtzXS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJOYW1lLnN1YnN0cihub2RlS2V5Lmxlbmd0aCwgdmFyTmFtZS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTUEVDSUFMIENBU0UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZih2YXJOYW1lID09PSBcIlBJXCIgfHwgdmFyTmFtZSA9PT0gXCJ0aW1lXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBJTlBVVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgaW5wdXQgaW5kZXhcbiAgICAgICAgICAgIGxldCBpbnB1dEtleTogbnVtYmVyID0gaXNJbnB1dChub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiB2YXJpYWJsZSBpcyB0aGUgaW5wdXQgKGlmIG5vdCBpbnB1dCBpdCB3aWxsIGJlIEluZmluaXR5KVxuICAgICAgICAgICAgaWYoaW5wdXRLZXkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZVxuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gc2F2ZUlucHV0VmFyaWFibGUobm9kZSwgYWxsQ29ubmVjdGlvbnMsIG5vZGVLZXksIHZhcmlhYmxlTmFtZSwgaW5wdXRLZXkpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEZvdW5kIHZhcmlhYmxlIGluIGlucHV0cyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBbmQgY29udGludWUgdG8gdGhlIG5leHQgc3RlcCBpbiB0aGUgdG9rZW5pc2VkIGdlbmVyYXRvciBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIEdFTkVSQVRPUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgZ2VuZXJhdG9yIGluZGV4XG4gICAgICAgICAgICBsZXQgZ2VuZXJhdG9yS2V5OiBudW1iZXIgPSBpc0dlbmVyYXRvcihub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiBnZW5lcmF0b3IgaW5kZXggaXMgbm90IGFuIEluZmluaXR5LCB0aGUgc2V0dGluZyBpcyB0aGUgZ2VuZXJhdG9yLCBhbmQgc2hvdWxkIGJlIHByb2Nlc3NlZCBhcyBvbmVcbiAgICAgICAgICAgIGlmKGdlbmVyYXRvcktleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSBub2RlLmdlbmVyYXRvcnNbZ2VuZXJhdG9yS2V5XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHRva2VuaXplR2VuZXJhdG9yKGdlbmVyYXRvci52YWx1ZSwgbm9kZUtleSk7XG5cbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgdG9rZW5zLCBhbGxDb25uZWN0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBnZW5lcmF0b3IgdGl0bGVcbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHRva2VuVG9Kcyhub2RlS2V5LCBnZW5lcmF0b3IudGl0bGUsIHRva2Vucyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gZ2VuZXJhdG9ycyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0byB0aGUgbmV4dCB0b2tlblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTRVRUSU5HIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBzZXR0aW5nIGluZGV4XG4gICAgICAgICAgICBsZXQgc2V0dGluZ0tleTogbnVtYmVyID0gaXNTZXR0aW5nKG5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHNldHRpbmcgaW5kZXggaXMgbm90IGluZmluaXR5IC0gaXQncyBhIG1hdGNoIVxuICAgICAgICAgICAgaWYoc2V0dGluZ0tleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gc2V0dGluZ3MgJHt2YXJpYWJsZU5hbWV9IC0gJHtub2RlS2V5fWApO1xuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gYHZhciAke25vZGVLZXl9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZS5zZXR0aW5nc1tzZXR0aW5nS2V5XS52YWx1ZX0gfTtcXG5gO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBOT1QgQU5ZIE9GIFRIUkVFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIElmIG5vdCBvbmUgb2YgcHJldmlvdXMgdGhyZWUsIGFsZXJ0IHVzZXIuXG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IGBhbGVydChcIkNvdWxkbid0IGZpbmQgZ2VuZXJhdG9yIHZhcmlhYmxlIGluIHRoZSBpbnB1dHMsIGdlbmVyYXRvcnMgb3Igc2V0dGluZ3MhICR7bm9kZUtleX0gLSAke3Zhck5hbWV9XCIpO1xcbmA7XG4gICAgICAgIH0gZWxzZSBpZihjb2RlW3NdLnR5cGUgPT09IFwibWF0aFwiIHx8IGNvZGVbc10udHlwZSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgY29kZVtzXS5jb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gc2F2ZUlucHV0VmFyaWFibGUobm9kZTogU2lnbmFsTm9kZSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBub2RlS2V5OiBzdHJpbmcsIHNldHRpbmdLZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGU6IHN0cmluZztcbiAgICBjb25zdCBjb25uZWN0b3JFbmQgPSB7XG4gICAgICAgIG5vZGVJZDogbm9kZUtleSxcbiAgICAgICAgc2V0dGluZ0lkOiBzZXR0aW5nS2V5XG4gICAgfVxuICAgIFxuICAgIGxldCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCBjb25uZWN0b3JFbmQpO1xuXG4gICAgLy8gY29uc29sZS5sb2coYFRyYWNpbmcgYmFjayB0aGUgaW5wdXQ6ICR7bm9kZUtleX06JHtzZXR0aW5nS2V5fSAtPiAke290aGVyTm9kZUlkfToke290aGVyU2V0dGluZ0lkfWApO1xuICAgIFxuICAgIC8vIElmIG5vZGUgaXMgY29ubmVjdGVkXG4gICAgaWYob3RoZXJOb2RlSWQgJiYgb3RoZXJTZXR0aW5nSWQpIHtcbiAgICAgICAgLy8gU2F2ZSBcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0aW1lKX07XFxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTYXZlIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtub2RlLmlucHV0c1tpbmRleF0uZGVmYXVsdH19O1xcbmBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gaXNJbnB1dCAobm9kZTogU2lnbmFsTm9kZSwgc2V0dGluZ0tleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBDaGVjayBpZiB2YXJpYWJsZSBpcyBpbiBpbnB1dHNcbiAgICBpZihub2RlLmlucHV0cykge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZS5pbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIElmIHZhcmlhYmxlIGlzIHRoZSBpbnB1dCwgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIGlmKG5vZGUuaW5wdXRzW2ldLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW5maW5pdHk7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5nZW5lcmF0b3JzKSB7XG4gICAgICAgIGlmKG5vZGUuZ2VuZXJhdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IobGV0IGcgPSAwOyBnIDwgbm9kZS5nZW5lcmF0b3JzLmxlbmd0aDsgZysrKSB7XG4gICAgICAgICAgICAgICAgaWYobm9kZS5nZW5lcmF0b3JzW2ddLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cblxuZnVuY3Rpb24gaXNTZXR0aW5nKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5zZXR0aW5ncykge1xuICAgICAgICBmb3IobGV0IHMgPSAwOyBzIDwgbm9kZS5zZXR0aW5ncy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gc2V0dGluZ0tleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEluZmluaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hJbnB1dHMoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKToge3VuY2FsY3VsYXRlZE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgdG91Y2hOb2RlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgbmV3Q29sbGVjdGlvbjogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgbmV3VG91Y2hDb2xsZWN0aW9uOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuXG4gICAgZm9yKGxldCBuIGluIGFsbE5vZGVzKSB7XG4gICAgICAgIGlmKG4uc3Vic3RyKDAsIDEwKSA9PT0gXCJ0b3VjaElucHV0XCIpIHtcbiAgICAgICAgICAgIG5ld1RvdWNoQ29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IG5ld0NvbGxlY3Rpb24sXG4gICAgICAgIHRvdWNoTm9kZXM6IG5ld1RvdWNoQ29sbGVjdGlvblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lKHN0YXJ0OiBudW1iZXIsIHN0b3A6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgbGV0IGUgPSBcImxldCB0ID0gXCI7XG5cbiAgICBlKz0gYChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgciA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAke3N0YXJ0fTsgaSA8ICR7c3RvcH07IGkrPSR7c3RlcH0pIHtcbiAgICAgICAgICAgIHIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9KSgpO2BcblxuICAgIHJldHVybiBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzKG5vZGVzOiBOb2RlQ29sbGVjdGlvbik6IHN0cmluZyB7XG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBpIGluIG5vZGVzKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblxuICAgICAgICBsZXQgc2Vuc2l0aXZpdHk6IE5vZGVTZXR0aW5nc1NoYXBlO1xuICAgICAgICBsZXQgYXR0YWNoZWRTY29wZTogTm9kZVNldHRpbmdzU2hhcGU7XG4gICAgICAgIGxldCBvZmZzZXRYOiBOb2RlU2V0dGluZ3NTaGFwZTtcbiAgICAgICAgbGV0IG9mZnNldFk6IE5vZGVTZXR0aW5nc1NoYXBlO1xuXG4gICAgICAgIC8vIFNlcGFyYXRlIHNldHRpbmdzXG4gICAgICAgIGZvcihsZXQgcyBpbiBub2RlLnNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIlNlbnNpdGl2aXR5XCIpIHtcbiAgICAgICAgICAgICAgICBzZW5zaXRpdml0eSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJBdHRhY2hlZCBTY29wZVwiKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoZWRTY29wZSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJPZmZzZXQgWFwiKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJPZmZzZXQgWVwiKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb3VjaCBub2RlIGlzIG5vdCBjb3JyZWN0bHkgZm9ybWF0dGVkLlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgb2Zmc2V0U2NyaXB0ID0gYGlmKCFkaWRBdHRhY2gke2l9KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7YXR0YWNoZWRTY29wZS52YWx1ZX1cIikub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCR7b2Zmc2V0WC52YWx1ZSA9PSBcInRydWVcIn0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRYRGF0YSArPSBlLm1vdmVtZW50WCoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKCR7b2Zmc2V0WS52YWx1ZSA9PSBcInRydWVcIn0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRZRGF0YSArPSBlLm1vdmVtZW50WSoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHthdHRhY2hlZFNjb3BlLnZhbHVlfVwiKS5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWT0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNoZW5kID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZW1lbnRYID0gd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCAtIGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudFkgPSB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcblxuICAgICAgICAgICAgICAgICAgICBpZigke29mZnNldFgudmFsdWUgPT0gXCJ0cnVlXCJ9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAke2l9T2Zmc2V0WERhdGEgKz0gbW92ZW1lbnRYKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoJHtvZmZzZXRZLnZhbHVlID09IFwidHJ1ZVwifSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFlEYXRhICs9IG1vdmVtZW50WSoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25YID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZGlkQXR0YWNoJHtpfU9mZnNldFggPSB0cnVlO1xuICAgICAgICAgICAgZGlkQXR0YWNoJHtpfU9mZnNldFkgPSB0cnVlO1xuICAgICAgICB9XFxuYDtcblxuICAgICAgICBmb3IobGV0IG8gaW4gbm9kZS5vdXRwdXRzKSB7XG4gICAgICAgICAgICBlICs9IGB2YXIgJHtpfSR7bm9kZS5vdXRwdXRzW29dLnRpdGxlfURhdGEgPSAxO1xcbmA7XG4gICAgICAgICAgICBlICs9IGB2YXIgZGlkQXR0YWNoJHtpfSA9IGZhbHNlO1xcbmA7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZSArPSBgdmFyICR7aX0ke25vZGUub3V0cHV0c1tvXS50aXRsZX0gPSBmdW5jdGlvbih0aW1lKSB7IHJldHVybiAke2l9JHtub2RlLm91dHB1dHNbb10udGl0bGV9RGF0YSB9O1xcbmBcbiAgICAgICAgfVxuXG4gICAgICAgIGUgKz0gb2Zmc2V0U2NyaXB0O1xuICAgIH1cblxuICAgIHJldHVybiBlO1xufSIsIi8vIEFzIGEgcmVtaW5kZXI6XG4vLyBPbmUgaXRlbSBpbiBhbiBhcnJheSBvZiB0b2tlbnMgY2FuIG9ubHkgYmUgYW4gb2JqZWN0IGFuZCBvbmx5IGhhdmUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4vLyAqIHR5cGUgICAgICAgICAgIC0gZm9yIGV2ZXJ5IHRva2VuXG4vLyAqIHZhbHVlICAgICAgICAgIC0gZm9yIGV2ZXJ5IHRva2VuXG4vLyAqIGNvZGUgIC0gZm9yIHNjb3BlcyAobWF0aC9yZWd1bGFyKVxuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5Ub0pzIChub2RlSWQsIHZhcmlhYmxlTmFtZSwganNvblRva2Vucykge1xuICAgIGxldCBleGVjdXRhYmxlU3RyaW5nID0gYHZhciAke25vZGVJZH0ke3ZhcmlhYmxlTmFtZX0gPSBmdW5jdGlvbih0aW1lKSB7IHJldHVybiBgO1xuICAgIFxuICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZShbLi4uanNvblRva2Vuc10pXG5cbiAgICByZXR1cm4gZXhlY3V0YWJsZVN0cmluZyArIFwifTtcXG5cIjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQ29kZShqc29uKSB7XG4gICAgbGV0IGV4ZWN1dGFibGVTdHJpbmcgPSBcIlwiO1xuXG4gICAgaWYoanNvbiA9PSBudWxsKSByZXR1cm4gXCJcIjtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBqc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIFZhcmlhYmxlcyBmb3IgY29udmVuaWVuY2VcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqc29uW2ldO1xuICAgICAgICBjb25zdCB0eXBlID0gdG9rZW4udHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0b2tlbi52YWx1ZTtcblxuICAgICAgICAvLyBBY3R1YWwgbG9naWNcbiAgICAgICAgaWYodHlwZSAhPSBcInNjb3BlXCIgJiYgdHlwZSAhPSBcIm1hdGhcIikge1xuICAgICAgICAgICAgLy8gT25lIG9mIHRoZSBiYXNpYyB0eXBlc1xuXG4gICAgICAgICAgICBpZih2YWx1ZSA9PT0gJ1BJJykge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLlBJXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidmFyXCIgJiYgdmFsdWUgIT09IFwidGltZVwiKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBgJHt2YWx1ZX0odGltZSlgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibWF0aFwiKSB7XG4gICAgICAgICAgICAvLyBNYXRoIGZ1bmN0aW9uXG5cbiAgICAgICAgICAgIGlmKHZhbHVlID09PSBcInNpblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBzdXBwb3J0ZWQgZnVuY3Rpb25zLCByZWN1cnNldmx5IGdlbmVyYXRlIHN0cmluZyBmcm9tIHRoZSBjb2RlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCJNYXRoLnNpbihcIjtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIilcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm90IHN1cHBvcnRlZCBmdW5jdGlvbiwgdGhyb3cgZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5zdXBwb3J0ZWQgbWF0aCBmdW5jdGlvbiAhISFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZWd1bGFyIHNjb3BlXG5cbiAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIoXCIgKyBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXhlY3V0YWJsZVN0cmluZztcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSBgXG4gICAgI3NpZ25hbHMtZW1iZWRkaW5nLWNvbnRhaW5lciwgI3NpZ25hbHMtdmlld3MsIC5zaWduYWxzLWNhbnZhcyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAjc2lnbmFscy12aWV3cyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgIH1cbmBcblxuZXhwb3J0IGZ1bmN0aW9uIGpzeERvbSAobm9kZXMpIHtcbiAgICBsZXQgb3V0cHV0Tm9kZXMgPSBbXTtcblxuICAgIC8vIEdldCBhbGwga2luZHMgb2Ygb3V0cHV0IG5vZGVzXG4gICAgZm9yKGxldCBrZXkgaW4gbm9kZXMpIHtcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZXNba2V5XTtcblxuICAgICAgICBpZihTdHJpbmcoa2V5KS5zdWJzdHIoMCwgNSkgPT09IFwic2NvcGVcIikge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuaWQgPSBrZXk7XG4gICAgICAgICAgICBvdXRwdXROb2Rlcy5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKG91dHB1dE5vZGVzKTtcblxuICAgIC8vIEdlbmVyYXRlIER5bmFtaWMgU3R1ZmZcbiAgICBjb25zdCBjYW52YXNKc3ggPSBvdXRwdXROb2Rlcy5sZW5ndGggPiAwID8gb3V0cHV0Tm9kZXMubWFwKG5vZGUgPT4ge1xuICAgICAgICByZXR1cm4gKDxjYW52YXMgY2xhc3NOYW1lPVwic2lnbmFscy1jYW52YXNcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtub2RlLmlkfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtub2RlLmlkfVxuICAgICAgICA+PC9jYW52YXM+KVxuICAgIH0pIDogbnVsbDtcblxuICAgIGNvbnN0IHNldHRpbmdzID0gbnVsbDtcblxuICAgIC8vIEdlbmVyYXRlIEZpbmFsIEpTWFxuICAgIGNvbnN0IFNpZ25hbFZpZXdzID0gY2FudmFzSnN4ID9cbiAgICAgICAgKFxuICAgICAgICAgICAgPGRpdiBpZD1cInNpZ25hbHMtdmlld3NcIiBzdHlsZT17e2dyaWRUZW1wbGF0ZVJvd3M6IGByZXBlYXQoJHtvdXRwdXROb2Rlcy5sZW5ndGh9LCAxZnIpYH19PlxuICAgICAgICAgICAgICAgIHtjYW52YXNKc3h9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICBjb25zdCBTZXR0aW5nc0pzeCA9IHNldHRpbmdzID9cbiAgICAgICAgKFxuICAgICAgICAgICAgPGRpdiBpZD1cInNpZ25hbHMtc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICB7c2V0dGluZ3N9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPXtcInNpZ25hbHMtZW1iZWRkaW5nLWNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxzdHlsZT57c3R5bGVzfTwvc3R5bGU+XG4gICAgICAgICAgICB7U2V0dGluZ3NKc3h9XG4gICAgICAgICAgICB7U2lnbmFsVmlld3N9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9