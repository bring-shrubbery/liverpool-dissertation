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
/* harmony import */ var _testModel_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testModel.json */ "./src/server/testModel.json");
var _testModel_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./testModel.json */ "./src/server/testModel.json", 1);
// Base Imports

 // Server Setup


var app = express__WEBPACK_IMPORTED_MODULE_2___default()(); // Middleware

 // Data Parsing




var dateNow = function dateNow() {
  return String(Date().toString()).substr(0, 24) + "\t| \t";
}; // Static files


app.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static(__dirname + '/public')); // --- ROUTES ---

app.get('/editor/:id', function (req, res) {
  var projectId = req.params.id;
  console.log(dateNow() + " Requested to edit project " + projectId);
  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, './public/editor/editor.html'), 'utf8', function (err, data) {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    } // Set title


    data = data.replace("<title></title>", "<title>".concat(projectId, "</title>")); // Set data

    data = data.replace('<script id="editor-data"></script>', "<script id=\"editor-data\">document.editorData = ".concat(JSON.stringify(_testModel_json__WEBPACK_IMPORTED_MODULE_5__), "</script>"));
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
});
app.get('/projects', function (req, res) {
  // TODO: return page with all the projects for the current user
  res.end("projects");
}); // JSON Parser

app.post('/render', body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());
app.post('/render', function (req, res) {
  console.log(dateNow() + "POST /RENDER route requested");
  var reqJson = req.params.body;
  var renderedString = Object(_renderer__WEBPACK_IMPORTED_MODULE_4__["renderSignals"])(reqJson);
  res.setHeader('Content-Type', 'text/plain');
  res.end(renderedString);
}); // Default test visualisation

app.get('/render', function (req, res) {
  console.log(dateNow() + " GET /RENDER route requested");
  var renderedString = Object(_renderer__WEBPACK_IMPORTED_MODULE_4__["renderSignals"])(_testModel_json__WEBPACK_IMPORTED_MODULE_5__);
  res.setHeader('Content-Type', 'text/html');
  res.end(renderedString);
});
app.get("/", function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end("<ul><li><a href='/projects'>projects</a></li><li><a href='/render'>render</a></li><li><a href='/editor/projectid'>editor</a></li></ul>");
}); // Run server

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("\nListening on: https://localhost:" + port + "\n");
});

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

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }





function renderHtml(requestJson) {
  // Separate nodes from connectors
  var allNodes = _objectSpread({}, requestJson.nodes);

  var allConnections = _toConsumableArray(requestJson.connectors); // Render HTML


  var jsx = Object(_viewerDom__WEBPACK_IMPORTED_MODULE_2__["jsxDom"])(allNodes);
  var jsxString = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_0__["renderToStaticMarkup"])(jsx); // Generate Scripts

  console.time("Script Parser");
  var scriptArray = Object(_scriptGenerator_ts__WEBPACK_IMPORTED_MODULE_1__["scriptGenerator"])(allNodes, allConnections);
  var composedScriptString = "";

  for (var s in scriptArray) {
    composedScriptString += (_readOnlyError("composedScriptString"), scriptArray[s]);
  }

  console.timeEnd("Script Parser");
  var scripts = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js\"></script>\n";
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
    var executable = "var graphs = {};";
    // Setup time
    executable += Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["initTime"])(-1, 1, 0.001);
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
        executable += "\n            if(graphs." + s + ") {\n                let newData = [];\n                for(let i = 0; i < t.length; i++) {newData.push(" + otherNodeId + otherSettingId + "(t[i]));}\n                graphs." + s + ".data.datasets[0].data = newData;\n                graphs." + s + ".update();\n            } else {\n                let canvasNode = document.getElementById(\"" + s + "\");\n\n                var viewSize = {\n                    x: canvasNode.parentNode.offsetWidth,\n                    y: canvasNode.parentNode.offsetHeight\n                }\n\n                var ctx = canvasNode.getContext(\"2d\");\n\n                var w = viewSize.x;\n                var h = viewSize.y / " + Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["objectSize"])(allScopes) + ";\n\n                canvasNode.width = w;\n                canvasNode.height = h;\n\n                let data = [];\n\n                for(let i = 0; i < t.length; i++) {\n                    data.push(" + otherNodeId + otherSettingId + "(t[i]));\n                }\n                var myChart = new Chart(ctx, {\n                    type: 'line',\n                    data: {labels: t.map(ti => ti.toFixed(1)),\n                        datasets: [\n                            {\n                                label: \"signal\",\n                                backgroundColor: 'rgba(0, 0, 0, 0)',\n                                borderColor: 'rgb(255, 120, 132)',\n                                data: data\n                            }\n                        ]\n                    }, options: {\n                        elements: {\n                            line: {\n                                tension: 0,\n                                stepped: false\n                            }, point: {\n                                radius: 0,\n                                hitRadius: 0,\n                                hoverRadius: 0\n                            }\n                        }, animation: {\n                            duration: 0\n                        }, tooltips: {\n                            enabled: false\n                        }, legend: {\n                            display: false\n                        }" + (currentScope.settings[0].value == "true" ? '' : ", scales: {\n                            xAxes: [{\n                                ticks: {\n                                    max: 1,\n                                    min: -1,\n                                    stepSize: 0.5\n                                }\n                            }], yAxes: [{\n                                ticks: {\n                                    max: 2,\n                                    min: 0,\n                                    stepSize: 0.5\n                                }\n                            }]\n                        }") + "\n                    }\n                });\n    \n                graphs." + s + " = myChart;\n            }\n        ";
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
        var offsetScript = "if(!didAttach" + i + ") {\n            let onHoldDown = function (e) {\n                window.touchLastPositionX = e.changedTouches[0].pageX;\n                window.touchLastPositionY= e.changedTouches[0].pageY;\n\n                window.onmouseup = function () {\n                    window.onmouseup = null;\n                    window.onmousemove = null;\n                }\n\n                window.ontouchend = function () {\n                    window.ontouchend = null;\n                    window.ontouchmove = null;\n                }\n\n                window.onmousemove = function (e) {\n                    if(" + (offsetX.value == "true") + ") {\n                        " + i + "OffsetXData += e.movementX*" + parseFloat(sensitivity.value) + ";\n                    }\n\n                    if(" + (offsetY.value == "true") + ") {\n                        " + i + "OffsetYData += e.movementY*" + parseFloat(sensitivity.value) + ";\n                    }\n\n                    window.update();\n                }\n\n                window.ontouchmove = function (e) {\n                    let movementX = window.touchLastPositionX - e.changedTouches[0].pageX;\n                    let movementY = window.touchLastPositionY - e.changedTouches[0].pageY;\n\n                    if(" + (offsetX.value == "true") + ") {\n                        " + i + "OffsetXData += movementX*" + parseFloat(sensitivity.value) + ";\n                    }\n\n                    if(" + (offsetY.value == "true") + ") {\n                        " + i + "OffsetYData += movementY*" + parseFloat(sensitivity.value) + ";\n                    }\n\n                    window.update();\n\n                    window.touchLastPositionX = e.changedTouches[0].pageX;\n                    window.touchLastPositionY = e.changedTouches[0].pageY;\n                }\n\n            }\n\n            document.getElementById(\"" + attachedScope.value + "\").onmousedown = onHoldDown;\n            document.getElementById(\"" + attachedScope.value + "\").ontouchstart = onHoldDown;\n\n            didAttach" + i + "OffsetX = true;\n            didAttach" + i + "OffsetY = true;\n        }\n";
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

/***/ "./src/server/testModel.json":
/*!***********************************!*\
  !*** ./src/server/testModel.json ***!
  \***********************************/
/*! exports provided: connectors, nodes, default */
/***/ (function(module) {

module.exports = {"connectors":[{"connectorStart":{"nodeId":"signalGenerator","settingId":"signal"},"connectorEnd":{"nodeId":"scope","settingId":"signal"}},{"connectorStart":{"nodeId":"signalGenerator2","settingId":"signal"},"connectorEnd":{"nodeId":"scope2","settingId":"signal"}},{"connectorStart":{"nodeId":"touchInput","settingId":"OffsetX"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"frequency"}},{"connectorStart":{"nodeId":"touchInput","settingId":"OffsetY"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"amplitude"}},{"connectorStart":{"nodeId":"signalGenerator","settingId":"signal"},"connectorEnd":{"nodeId":"modulation","settingId":"signal1"}},{"connectorStart":{"nodeId":"signalGenerator2","settingId":"signal"},"connectorEnd":{"nodeId":"modulation","settingId":"signal2"}},{"connectorStart":{"nodeId":"modulation","settingId":"signal"},"connectorEnd":{"nodeId":"scope3","settingId":"signal"}},{"connectorStart":{"nodeId":"scalar","settingId":"number"},"connectorEnd":{"nodeId":"signalGenerator2","settingId":"offset"}}],"nodes":{"signalGenerator":{"title":"Signal Generator","x":"380","y":"250","width":"150","inputs":[],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"settings":[{"title":"frequency","value":"20","type":"number","input":false,"output":false},{"title":"amplitude","value":"1","type":"number","input":false,"output":false},{"title":"phase","value":"0","type":"number","input":false,"output":false},{"title":"offset","value":"0","type":"number","input":false,"output":false}]},"signalGenerator2":{"title":"Signal Generator","x":"420","y":"550","width":"150","inputs":[{"title":"frequency","type":"number","default":"1"},{"title":"amplitude","type":"number","default":"1"},{"title":"offset","type":"number","default":"1"}],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[amplitude]*sin(2*[PI]*[frequency]*[time]+[phase])+[offset]","type":"signal"}],"settings":[{"title":"frequency","value":"5","type":"number","input":false,"output":false},{"title":"amplitude","value":"1","type":"number","input":false,"output":false},{"title":"phase","value":"0","type":"number","input":false,"output":false},{"title":"offset","value":"0","type":"number","input":false,"output":false}]},"scope":{"title":"Scope","x":"700","y":"200","width":"150","inputs":[{"title":"signal","type":"signal"}],"outputs":[],"settings":[{"title":"AutoScale","value":"true","type":"boolean"}]},"scope2":{"title":"Scope","x":"700","y":"600","width":"150","inputs":[{"title":"signal","type":"signal"}],"generators":[],"outputs":[],"settings":[{"title":"AutoScale","value":"false","type":"boolean"}]},"scope3":{"title":"Scope","x":"800","y":"400","width":"150","inputs":[{"title":"signal","type":"signal"}],"generators":[],"outputs":[],"settings":[{"title":"AutoScale","value":"true","type":"boolean"}]},"touchInput":{"title":"Touch Input","x":"200","y":"400","width":"150","height":"100","inputs":[],"outputs":[{"title":"OffsetX","type":"number"},{"title":"OffsetY","type":"number"}],"generators":[],"settings":[{"title":"Sensitivity","value":"0.01","type":"number"},{"title":"Attached Scope","value":"scope2","type":"scopeReference"},{"title":"Offset X","value":"true","type":"boolean"},{"title":"Offset Y","value":"true","type":"boolean"}]},"modulation":{"title":"Modulation","x":"600","y":"400","width":"150","height":"100","inputs":[{"title":"signal1","type":"signal"},{"title":"signal2","type":"signal"}],"outputs":[{"title":"signal","type":"signal"}],"generators":[{"title":"signal","value":"[signal1]*[signal2]","type":"signal"}],"settings":[]},"scalar":{"title":"Scalar","x":"150","y":"600","width":"150","height":"100","inputs":[],"outputs":[{"title":"number","type":"number"}],"generators":[],"settings":[{"title":"number","value":"1","type":"number"}]}}};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2dlbmVyYXRvclRva2VuaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVuZGVyZXIvc2NvcGVGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3Rva2VuVG9Kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3ZpZXdlckRvbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiZGF0ZU5vdyIsIlN0cmluZyIsIkRhdGUiLCJ0b1N0cmluZyIsInN1YnN0ciIsInVzZSIsInN0YXRpYyIsIl9fZGlybmFtZSIsImdldCIsInJlcSIsInJlcyIsInByb2plY3RJZCIsInBhcmFtcyIsImlkIiwiY29uc29sZSIsImxvZyIsImZzIiwicmVhZEZpbGUiLCJwYXRoIiwicmVzb2x2ZSIsImVyciIsImRhdGEiLCJlcnJvciIsInN0YXR1cyIsInNlbmQiLCJyZXBsYWNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlc3RNb2RlbCIsInNldEhlYWRlciIsImVuZCIsInBvc3QiLCJib2R5UGFyc2VyIiwianNvbiIsInJlcUpzb24iLCJib2R5IiwicmVuZGVyZWRTdHJpbmciLCJyZW5kZXJTaWduYWxzIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwicmVuZGVySHRtbCIsInJlcXVlc3RKc29uIiwiYWxsTm9kZXMiLCJub2RlcyIsImFsbENvbm5lY3Rpb25zIiwiY29ubmVjdG9ycyIsImpzeCIsImpzeERvbSIsImpzeFN0cmluZyIsInJlbmRlclRvU3RhdGljTWFya3VwIiwidGltZSIsInNjcmlwdEFycmF5Iiwic2NyaXB0R2VuZXJhdG9yIiwiY29tcG9zZWRTY3JpcHRTdHJpbmciLCJzIiwidGltZUVuZCIsInNjcmlwdHMiLCJzY3JpcHRlZEh0bWwiLCJzbGljZSIsImxlbmd0aCIsImZpeFNjb3BlcyIsImdlbiIsImciLCJmb3VuZExlZnRCb3JkZXIiLCJmb3VuZFJpZ2h0Qm9yZGVyIiwianVzdEhpdE9wZW5pbmdCcmFja2V0IiwianVzdEhpdENsb3NpbmdCcmFja2V0IiwibGVmdCIsInJpZ2h0IiwiaSIsIm9uZSIsInR3byIsInRocmVlIiwidG9rZW5Ub0pzIiwibm9kZUlkIiwidmFyaWFibGVOYW1lIiwianNvblRva2VucyIsImV4ZWN1dGFibGVTdHJpbmciLCJjYWxjdWxhdGVDb2RlIiwidG9rZW4iLCJ0eXBlIiwidmFsdWUiLCJjb2RlIiwic3R5bGVzIiwib3V0cHV0Tm9kZXMiLCJrZXkiLCJjdXJyZW50Tm9kZSIsInB1c2giLCJjYW52YXNKc3giLCJtYXAiLCJub2RlIiwic2V0dGluZ3MiLCJTaWduYWxWaWV3cyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJTZXR0aW5nc0pzeCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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QUdILFFBQVEsR0FFcEI7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUNLQSxRQURMLENBRm9CLEdBS3BCLElBTFI7QUFPQSxTQUNJO0FBQUssTUFBRSxFQUFFO0FBQVQsS0FDSSwwRUFBUVIsTUFBUixDQURKLEVBRUtXLFdBRkwsRUFHS0YsV0FITCxDQURKO0FBT0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ERCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiLy8gQmFzZSBJbXBvcnRzXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuXG4vLyBTZXJ2ZXIgU2V0dXBcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuLy8gTWlkZGxld2FyZVxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5cbi8vIERhdGEgUGFyc2luZ1xuaW1wb3J0IHtcbiAgICByZW5kZXJTaWduYWxzXG59IGZyb20gJy4vcmVuZGVyZXInXG5pbXBvcnQgdGVzdE1vZGVsIGZyb20gJy4vdGVzdE1vZGVsLmpzb24nXG5cbmNvbnN0IGRhdGVOb3cgPSAoKSA9PiBTdHJpbmcoRGF0ZSgpLnRvU3RyaW5nKCkpLnN1YnN0cigwLCAyNCkgKyBcIlxcdHwgXFx0XCJcblxuLy8gU3RhdGljIGZpbGVzXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvcHVibGljJykpXG5cbi8vIC0tLSBST1VURVMgLS0tXG5hcHAuZ2V0KCcvZWRpdG9yLzppZCcsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgY29uc29sZS5sb2coZGF0ZU5vdygpICsgXCIgUmVxdWVzdGVkIHRvIGVkaXQgcHJvamVjdCBcIiArIHByb2plY3RJZCk7XG4gICAgXG4gICAgZnMucmVhZEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vcHVibGljL2VkaXRvci9lZGl0b3IuaHRtbCcpLCAndXRmOCcsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0FuIGVycm9yIG9jY3VycmVkJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aXRsZVxuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgXCI8dGl0bGU+PC90aXRsZT5cIixcbiAgICAgICAgICAgIGA8dGl0bGU+JHtwcm9qZWN0SWR9PC90aXRsZT5gXG4gICAgICAgIClcblxuICAgICAgICAvLyBTZXQgZGF0YVxuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgJzxzY3JpcHQgaWQ9XCJlZGl0b3ItZGF0YVwiPjwvc2NyaXB0PicsXG4gICAgICAgICAgICBgPHNjcmlwdCBpZD1cImVkaXRvci1kYXRhXCI+ZG9jdW1lbnQuZWRpdG9yRGF0YSA9ICR7SlNPTi5zdHJpbmdpZnkodGVzdE1vZGVsKX08L3NjcmlwdD5gXG4gICAgICAgIClcblxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgICAgIHJlcy5zZW5kKGRhdGEpO1xuICAgIH0pXG59KTtcblxuYXBwLmdldCgnL3Byb2plY3RzJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgLy8gVE9ETzogcmV0dXJuIHBhZ2Ugd2l0aCBhbGwgdGhlIHByb2plY3RzIGZvciB0aGUgY3VycmVudCB1c2VyXG4gICAgcmVzLmVuZChcInByb2plY3RzXCIpO1xufSk7XG5cbi8vIEpTT04gUGFyc2VyXG5hcHAucG9zdCgnL3JlbmRlcicsIGJvZHlQYXJzZXIuanNvbigpKTtcblxuYXBwLnBvc3QoJy9yZW5kZXInLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRlTm93KCkgKyBcIlBPU1QgL1JFTkRFUiByb3V0ZSByZXF1ZXN0ZWRcIik7XG5cbiAgICBjb25zdCByZXFKc29uID0gcmVxLnBhcmFtcy5ib2R5O1xuICAgIGNvbnN0IHJlbmRlcmVkU3RyaW5nID0gcmVuZGVyU2lnbmFscyhyZXFKc29uKTtcblxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluJyk7XG4gICAgcmVzLmVuZChyZW5kZXJlZFN0cmluZyk7XG59KTtcblxuLy8gRGVmYXVsdCB0ZXN0IHZpc3VhbGlzYXRpb25cbmFwcC5nZXQoJy9yZW5kZXInLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRlTm93KCkgKyBcIiBHRVQgL1JFTkRFUiByb3V0ZSByZXF1ZXN0ZWRcIik7XG5cbiAgICBjb25zdCByZW5kZXJlZFN0cmluZyA9IHJlbmRlclNpZ25hbHModGVzdE1vZGVsKTtcblxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICByZXMuZW5kKHJlbmRlcmVkU3RyaW5nKTtcbn0pXG5cbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICByZXMuZW5kKFwiPHVsPjxsaT48YSBocmVmPScvcHJvamVjdHMnPnByb2plY3RzPC9hPjwvbGk+PGxpPjxhIGhyZWY9Jy9yZW5kZXInPnJlbmRlcjwvYT48L2xpPjxsaT48YSBocmVmPScvZWRpdG9yL3Byb2plY3RpZCc+ZWRpdG9yPC9hPjwvbGk+PC91bD5cIik7XG59KVxuXG4vLyBSdW4gc2VydmVyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwO1xuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJcXG5MaXN0ZW5pbmcgb246IGh0dHBzOi8vbG9jYWxob3N0OlwiK3BvcnQrXCJcXG5cIik7XG59KTsiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdlbmVyYXRvciBDb2RlIFRva2VuaXNlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR2VuZXJhdG9yIGNvZGUgdG9rZW5pc2VyIGZ1bmN0aW9uIGlzIGFsZ29yaXRobWljYWxseSBzaW1wbGUsIGJ1dCBwcm9kdWNlcyBhIGdvb2QgcmVwcmVzZW50YXRpb25cbi8vIG9mIHRoZSBwcm92aWRlZCBjb2RlIGluIEphdmFTY3JpcHQgT2JqZWN0IGZvcm1hdCAod2hpY2ggY2FuIHRoZW4gYmUgZWFzaWx5IGNvbnZlcnRlZCB0byBKU09OLFxuLy8gc2luY2UgaXQncyBwcmV0dHkgbXVjaCB0aGUgc2FtZSB0aGluZykuXG4vLyBXaGVuIGdvaW5nIHRocm91Z2ggdGhlIGNvZGUsIGl0IGNhbiBkZXRlY3Qgc2V2ZXJhbCB0eXBlcyBvZiBvcGVyYXRvcnMuIFRoZXNlIGFyZTpcbi8vICAgICAqIFZhcmlhYmxlXG4vLyAgICAgKiBDb25zdGFudCBOdW1iZXJcbi8vICAgICAqIE1hdGggT3BlcmF0b3Jcbi8vICAgICAqIE1hdGggRnVuY3Rpb25cbi8vICAgICAqIFJlZ3VsYXIgc2NvcGUgLSBldmVyeXRoaW5nIGluc2lkZSBicmFja2V0cyBcIihcIiBhbmQgXCIpXCIgc2hvdWxkIGJlIGV4ZWN1dGVkIGZpcnN0XG4vLyBUaGUgVmFyaWFibGVzLCBOdW1iZXJzIGFuZCBNYXRoIG9wZXJhdG9ycyBhcmUganVzdCBhZGRlZCBhcyBhbiBvYmplY3Qgd2l0aCBhcHByb3ByaWF0ZSB0eXBlIGFuZFxuLy8gdmFsdWUgdGFrZW4gZnJvbSB0aGUgY29kZS5cblxuLy8gVE9ETzpcbi8vICogU2FuZXRpc2UgdmFyaWFibGUgbmFtZXMgISEhIEphdmFzY3JpcHQgaW5qZWN0aW9uIGlzIHBvc3NpYmxlIG5vdyB0aHJvdW4gdmFyaWFibGUgbmFtZXMuLi5cblxuaW1wb3J0IHtmaXhTY29wZXN9IGZyb20gJy4vc2NvcGVGaXhlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZUdlbmVyYXRvciAoZ2VuOiBzdHJpbmcsIG5vZGVJZDogc3RyaW5nKTogR2VuZXJhdG9yU2VnbWVudFtdIHtcbiAgICAvLyBHZXQgdmFsdWUgb2YgZ2VuZXJhdG9yIGNvZGUgYW5kIHN0b3JlIGluIGdcbiAgICBsZXQgZyA9IFN0cmluZyhnZW4pO1xuICAgIGcgPSBTdHJpbmcoZml4U2NvcGVzKGcpKTtcblxuICAgIC8vIFBhcnNlZCBHZW5lcmF0b3IgQ29kZVxuICAgIGxldCBwZ2VuOiBHZW5lcmF0b3JTZWdtZW50W10gPSBbXTtcbiAgICBcbiAgICAvLyBUaGUgc3RhY2tcbiAgICBsZXQgc3RhY2s6IEdlbmVyYXRvclNlZ21lbnRbXSA9IFtdO1xuXG4gICAgLy8gQ29kZSB0b2tlbmlzZXJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b3BTdGFja09iamVjdDogR2VuZXJhdG9yU2VnbWVudCA9IHN0YWNrLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gOiBudWxsO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBWQVJJQUJMRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiW1wiKSB7XG4gICAgICAgICAgICAvLyBNb3ZlIHRvIG5leHQgY2hhcmFjdGVyXG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlIGVtcHR5IHZhcmlhYmxlXG4gICAgICAgICAgICBsZXQgdmFyaWFibGUgPSBcIlwiO1xuXG4gICAgICAgICAgICAvLyBTY2FuIHVudGlsIHZhcmlhYmxlIHNjb3BlIGlzIGNsb3NlZFxuICAgICAgICAgICAgd2hpbGUoZ1tpXSAhPT0gXCJdXCIpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSArPSBnW2ldO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodmFyaWFibGUgPT09IFwidGltZVwiIHx8IHZhcmlhYmxlID09PSBcIlBJXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nID9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBub2RlSWQgKyB2YXJpYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidmFyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhcmlhYmxlLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbdG9wSW5kZXhdLmNvZGUucHVzaCh2YXJpYWJsZVNuaXBwZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2godmFyaWFibGVTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBNQVRIIE9QRVJBVE9SIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYgKGdbaV0gPT09IFwiKlwiIHx8IGdbaV0gPT09IFwiL1wiIHx8IGdbaV0gPT09IFwiK1wiIHx8IGdbaV0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvclNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJvcGVyYXRvclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBnW2ldLFxuICAgICAgICAgICAgICAgIGNvZGU6IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2gob3BlcmF0b3JTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChvcGVyYXRvclNuaXBwZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE1BVEggRlVOQ1RJT04gLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcInNcIikge1xuICAgICAgICAgICAgLy8gTWF0aGVtYXRpY2FsIGZvcm11bGFzIGFyZSBjb2RlZCBpbiB0aHJlZSBsZXR0ZXJzXG4gICAgICAgICAgICBsZXQgbmV4dFRocmVlID0gU3RyaW5nKGdbaV0gKyBnW2krMV0gKyBnW2krMl0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBuZXh0IHRocmVlIGNoYXJzIGFyZSBvbmUgb2YgXG4gICAgICAgICAgICBpZihuZXh0VGhyZWUgPT09IFwic2luXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGp1c3QgaW5kZXggdG8gbmV4dCBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICBpICs9IDM7XG5cbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggZm9yIG9wZW5pbmcgYnJhY2tldHNcbiAgICAgICAgICAgICAgICB3aGlsZShnW2ldICE9PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoaSA+PSBnLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRocm93IGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046IHNob3VsZCBwcm92aWRlIGJyYWNrZXRzIGZvciBtYXRoIG9wZXJhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInNob3VsZCBwcm92aWRlIGJyYWNrZXRzIGZvciBtYXRoIG9wZXJhdG9yc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcHJvdmlkZWQgc3BhY2Ugb3IgYSBjaGFyYWN0ZXIgYWZ0ZXIgdGhyZWUgbWF0aCBjaGFyc1xuICAgICAgICAgICAgICAgIC8vIGlmIChnW2krMV0gPT09IFwiKFwiKSBpKys7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXRoU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtYXRoXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXh0VGhyZWUsXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFtdXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tUb3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUucHVzaChtYXRoU25pcHBldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVUb3BJbmRleCA9IHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZVtzY29wZVRvcEluZGV4XVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgICAgICBwZ2VuLnB1c2gobWF0aFNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBwZ2VuW3BnZW4ubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSBwYXJzaW5nIGNvZGVcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBSRUdVTEFSIFNDT1BFIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIC8vIEJlZ2luIHJlZ3VsYXIgc2NvcGVcbiAgICAgICAgICAgIGNvbnN0IHNjb3BlU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNjb3BlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgY29kZTogW11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tUb3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5wdXNoKHNjb3BlU25pcHBldCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzY29wZVRvcEluZGV4ID0gc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZS5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3RhY2tUb3BJbmRleF0uY29kZVtzY29wZVRvcEluZGV4XVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChzY29wZVNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgcGdlbltwZ2VuLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIEVORCBBTlkgU0NPUEUgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcIilcIiB8fCBnLmNoYXJBdChpKSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgIC8vIEVuZCBTY29wZVxuXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0b3AgaXRlbSBmcm9tIHN0YWNrIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBjbG9zZWQgc2NvcGUgdGhhdCB3YXNuJ3Qgb3BlbmVkXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogICAgICAgICAgICB0aHJvdyBFUlJPUlxuICAgICAgICAgICAgICAgIC8vIEVSUk9SIFJFQVNPTjogICAgbm9uIGV4aXN0ZW50IHNjb3BlIHdhcyBjbG9zZWRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibm9uIGV4aXN0ZW50IHNjb3BlIHdhcyBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gTlVCTUVSIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgbGV0IG1heWJlTnVtYmVyID0gU3RyaW5nKHBhcnNlSW50KGdbaV0pKTtcblxuICAgICAgICBpZihtYXliZU51bWJlciAhPT0gU3RyaW5nKE5hTikgJiYgdHlwZW9mIHBhcnNlSW50KG1heWJlTnVtYmVyKSA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyU3RhcnQgPSBpO1xuXG4gICAgICAgICAgICAvLyBJcyBjdXJyZW50IGNoYXIgYSBudW1iZXIgb3IgYSBkb3Q/XG4gICAgICAgICAgICBjb25zdCBpc051bWJlciA9ICgpID0+IChtYXliZU51bWJlciAhPT0gU3RyaW5nKE5hTikgJiYgdHlwZW9mIHBhcnNlSW50KG1heWJlTnVtYmVyKSA9PT0gXCJudW1iZXJcIik7XG4gICAgICAgICAgICBjb25zdCBpc0RvdCA9IChpbmRleDogbnVtYmVyKSA9PiBTdHJpbmcoZ1tpbmRleF0pID09PSBcIi5cIjtcblxuICAgICAgICAgICAgLy8gV2FzIHRoZXJlIGEgZG90IGluIGN1cnJlbnQgc2VxdWVuY2Ugb2YgbnVtYmVycz9cbiAgICAgICAgICAgIGxldCB3YXNEb3RBbHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdoaWxlKGlzTnVtYmVyKCkgfHwgaXNEb3QoaSkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBjdXJyZW50IGNoYXIgaXMgYSBkb3RcbiAgICAgICAgICAgICAgICBpZihpc0RvdChpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZih3YXNEb3RBbHJlYWR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCB0aGVyZSB3YXMgYSBkb3QgYWxyZWFkeSwgdGhyb3cgZXJyb3IsIHNpbmNlIGl0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdGhyb3cgRVJST1JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVSUk9SIFJFQVNPTjogaW52YWxpZCBmbG9hdGluZyBwb2ludCBudW1iZXIgc3ludGF4XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBub3QsIHNldCB3YXMgZG90IGFscmVhZHkgdG8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgd2FzRG90QWxyZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNb3ZlIHRvIG5leHQgaW5kZXggYW5kIFxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBtYXliZU51bWJlciA9IFN0cmluZyhwYXJzZUludChnW2ldKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGluZ051bWJlciA9IGcuc2xpY2UobnVtYmVyU3RhcnQsIGkpO1xuXG4gICAgICAgICAgICBjb25zdCBudW1iZXJTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdGluZ051bWJlcixcbiAgICAgICAgICAgICAgICBjb2RlOiBudWxsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNjb3BlIGV4aXN0cyBwdXNoIGl0IHRvIHRoZSB0b3Agc2NvcGVcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BJbmRleCA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgc3RhY2tbdG9wSW5kZXhdLmNvZGUucHVzaChudW1iZXJTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHB1c2ggaXQgdG8gcm9vdCBsZXZlbFxuICAgICAgICAgICAgICAgIHBnZW4ucHVzaChudW1iZXJTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaS0tO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gUmV0dXJuIHBhcnNlZCBnZW5lcmF0b3IgYXJyYXlcbiAgICByZXR1cm4gcGdlbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmF0b3JTZWdtZW50IHtcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdmFsdWU6IChzdHJpbmd8bnVtYmVyKSxcbiAgICBjb2RlOiBHZW5lcmF0b3JTZWdtZW50W11cbn0iLCJpbXBvcnQgeyByZW5kZXJUb1N0cmluZywgcmVuZGVyVG9TdGF0aWNNYXJrdXAgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuaW1wb3J0IHsgc2NyaXB0R2VuZXJhdG9yIH0gZnJvbSAnLi9zY3JpcHRHZW5lcmF0b3IudHMnO1xuaW1wb3J0IHsganN4RG9tIH0gZnJvbSAnLi92aWV3ZXJEb20nO1xuXG5mdW5jdGlvbiByZW5kZXJIdG1sIChyZXF1ZXN0SnNvbikge1xuICAgIC8vIFNlcGFyYXRlIG5vZGVzIGZyb20gY29ubmVjdG9yc1xuICAgIGNvbnN0IGFsbE5vZGVzID0gey4uLnJlcXVlc3RKc29uLm5vZGVzfTtcbiAgICBjb25zdCBhbGxDb25uZWN0aW9ucyA9IFsuLi5yZXF1ZXN0SnNvbi5jb25uZWN0b3JzXTtcblxuICAgIC8vIFJlbmRlciBIVE1MXG4gICAgY29uc3QganN4ID0ganN4RG9tKGFsbE5vZGVzKTtcbiAgICBjb25zdCBqc3hTdHJpbmcgPSByZW5kZXJUb1N0YXRpY01hcmt1cChqc3gpO1xuXG4gICAgLy8gR2VuZXJhdGUgU2NyaXB0c1xuICAgIGNvbnNvbGUudGltZShcIlNjcmlwdCBQYXJzZXJcIik7XG4gICAgY29uc3Qgc2NyaXB0QXJyYXkgPSBzY3JpcHRHZW5lcmF0b3IoYWxsTm9kZXMsIGFsbENvbm5lY3Rpb25zKTtcbiAgICBjb25zdCBjb21wb3NlZFNjcmlwdFN0cmluZyA9IFwiXCI7XG4gICAgZm9yKGxldCBzIGluIHNjcmlwdEFycmF5KSB7XG4gICAgICAgIGNvbXBvc2VkU2NyaXB0U3RyaW5nICs9IHNjcmlwdEFycmF5W3NdO1xuICAgIH1cbiAgICBjb25zb2xlLnRpbWVFbmQoXCJTY3JpcHQgUGFyc2VyXCIpO1xuICAgIGxldCBzY3JpcHRzID0gYDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvQ2hhcnQuanMvMi43LjMvQ2hhcnQuYnVuZGxlLm1pbi5qc1wiPjwvc2NyaXB0PlxcbmA7XG4gICAgc2NyaXB0cyArPSBgPHNjcmlwdD4ke2NvbXBvc2VkU2NyaXB0U3RyaW5nfTwvc2NyaXB0PmA7XG4gICAgXG4gICAgLy8gQ29tYmluZSBmb3JtZXIgcmVzdWx0c1xuICAgIGNvbnN0IHNjcmlwdGVkSHRtbCA9IGpzeFN0cmluZy5zbGljZSgwLCBqc3hTdHJpbmcubGVuZ3RoIC0gNikgKyBzY3JpcHRzICsgXCI8L2Rpdj5cIjtcbiAgICBcbiAgICAvLyBSZXR1cm4gZ2VuZXJhdGVkIEhUTUwgYXMgYSBzdHJpbmdcbiAgICByZXR1cm4gc2NyaXB0ZWRIdG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2lnbmFscyAocmVxdWVzdEpzb24pIHtcbiAgICByZXR1cm4gcmVuZGVySHRtbChyZXF1ZXN0SnNvbik7XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNjb3BlIEZpeGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2NvcGUgRml4ZXIgZnVuY3Rpb24gaXMgcmVsYXRlZCB0byB0aGUgZ2VuIHZhcmlhYmxlIHBhcnNpbmcgYWxnb3JpdGhtLiBTaW5jZSB0aGUgdG9rZW5pemVyIFxuLy8gZnVuY3Rpb24gZG9lcyBub3QgdGFrZSBpbnRvIGFjY291bmQgdGhhdCBtYXRoIG9wZXJhdG9ycyAqIChtdWx0aXBsaWNhdGlvbikgYW5kIC8gKGRpdmlzaW9uKVxuLy8gYXJlIGV4ZWN1dGVkIGZpcnN0LCB3ZSBuZWVkIHRvIHB1dCBzY29wZXMgYXJvdW5kIGJpdHMgdGhhdCBzaG91bGQgZXhlY3V0ZWQgZmlyc3QuIFRoaXMgaXMgXG4vLyBub3QgZmluYWwgc29sdXRpb24sIHNpbmNlIGl0IGRvZXMgbm90IHRha2UgZm9sbG93aW5nIHNpdHVhdGlvbnMgaW50byBhY2NvdW50OlxuLy8gICAgICogdGhlcmUgaXMgYSBtaW51cyBvciBwbHVzIHNpZ24gYmVmb3JlIGEgbnVtYmVyOiAtMSpbdmFyaWFibGVdXG4vLyAgICAgICAgIC0gSW4gdGhpcyBjYXNlIGl0IHdvdWxkIHJldHVybiB0aGlzOiAtKDEqW3ZhcmlhYmxlXSkuIFRoaXMgZG9lcyBub3QgYXBwbHkgc2NvcGVzXG4vLyAgICAgICAgICAgY29ycmVjdGx5LlxuLy9cbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFsZ29yaXRobSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGFsZ29yaXRobSBtYWtlcyBvbmx5IG9uZSBnZW5lcmFsIHN3ZWVwIHRocm91Z2ggdGhlIHN0cmluZy4gVGhpcyBtZWFucyB0aGF0IGlmIG5vIFxuLy8gc2NvcGVzIGFyZSBuZWVkZWQsIGV4ZWN1dGlvbiB0aW1lIHdpbGwgYmUgbWluaW1hbCwgaS5lLiBpdCB3aWxsIHRha2UgYXMgbXVjaCB0aW1lIGFzIGl0XG4vLyB0YWtlcyB0byBsb29wIHRocm91Z2ggdGhlIHN0cmluZyBvbmNlIGFuZCBjaGVjayBpZiB0aGUgY2hhcmFjdGVyIGlzICogb3IgLy4gSW4gdGhlIGNhc2Ugb2Zcbi8vIDM0IGNoYXJhY3RlciBzdHJpbmcsIHRoaXMgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgaW4gYWJvdW50IDAuMy0wLjUgbXMuIFdpdGggYW4gYXZlcmFnZSBvZiBcbi8vIGFyb3VuZCAwLjRtcyBhbmQgMzQgY2hhcmFjdGVycywgd2UgY2FuIGFwcHJveGltYXRlIHRoYXQgb25lIGNoYXJhY3RlciB0YWtlcyAwLjQgLyAzNCA9IDEuNjZcbi8vIG1pY3JvIHNlY29uZHMuIFRoaXMgd2FzIHRlc3RlZCBvbiAyLjdHaHogSW50ZWwgQ29yZSBpNy4gU28gaXQgdG9vayBhcm91bmQgNDQ4MiBjbG9jayBjeWNsZXNcbi8vIHRvIGV4ZWN1dGUgdGhhdCBhY2NvcmRpbmcgdG8gZm9sbG93aW5nIGVxdWF0aW9uOiAxLjY2dXMgLyAoMSAvIDIuN0cpID0gNDQ4Mi4gVGhpcyBjb3VsZCBiZSBcbi8vIGRyYW1hdGljYWxseSBpbXByb3ZlZCBieSB1c2luZyBjdXN0b20gbWFkZSBOb2RlLmpzIGMrKyBwbHVnaW4gd2hpY2ggYWxsb3dzIHRvIHJ1biBjKytcbi8vIGJpbmFyaWVzIGZyb20gTm9kZS5qcyBvciBieSB3cml0aW5nIHRoZSB3aG9sZSByZW5kZXJlciBzZXJ2ZXIgaW4gYSBjb21waWxlZCBsYW5ndWFnZSBsaWtlIFxuLy8gcHl0aG9uLCBjIywgZ28sIG9yIHN3aWZ0LiBUaGVyZSBpcyBhbHNvIGEgcG9zc2liaWxpdHkgdG8gd3JpdGUgaXQgaW4gUnVzdCBsYW5ndWFnZSwgQyBvclxuLy8gQysrLiBUaGlzIHdvdWxkIGFsbG93IHRvIGNvbXBpbGUganVzdCB0aGlzIGZ1bmN0aW9uIHRvIFdlYkFzc2VtYmx5IGFuZCBydW4gaXQgaW4gTm9kZS5qcyBhdCBcbi8vIGNvbXBpbGVkIHNwZWVkLiBJZiBmdXJ0aGVyIGRldmVsb3BtZW50IHdpbGwgYmUgZG9uZSBhbmQgdGhlcmUgd2lsbCBiZSBhIGRlY2lzaW9uIHRvICBzd2l0Y2hcbi8vIHRvIGEgY29tcGlsZWQgbGFuZ3VhZ2Ugc2VydmVyLCBJIHdvdWxkIHN1Z2dlc3QgdXNpbmcgR08gbGFuZ3VhZ2UgZHVlIHRvIGl0cyBzaW1wbGljaXR5LlxuLy9cbi8vIEFsZ2l0aG0gd29ya3MgaW4gYSBmb2xsb3dpbmcgZmFzaGlvbjpcbi8vICAgMS4gTWFrZSBzdXJlIHBhc3NlZCB0ZXh0IGlzIG9mIGEgU3RyaW5nIHR5cGVcbi8vICAgMi4gU2V0IGZsYWdzIHRvIGZhbHNlOlxuLy8gICAgICAgLSBib3JkZXIgZmxhZ3M6IGluZGljYXRlIGlmIG9uIGxlZnQgb3IgcmlnaHQsIGEgKyBvciAtIHNpZ24gd2FzIGZvdW5kXG4vLyAgICAgICAtIGJyYWNrZXQgZmxhZ3M6IGluZGljYXRlIGlmIHdoaWxlIHN3ZWVwaW5nIGxlZnQgYW5kIHJpZ2h0IGEgc2NvcGUgd2FzIGZvdW5kXG4vLyAgIDMuIEluaXRpYXRlIHZhcmlhYmxlcyBmb3IgbGVmdCBhbmQgcmlnaHQgc3dlZXBlcnNcbi8vICAgNC4gTG9vcCB1bnRpbCB3aG9sZSBzdHJpbmcgd2FzIHNjYW5uZWQsIGluIHRoZSBsb29wOlxuLy8gICAgICAgMS4gSWYgY3VycmVudCBjaGFyYWN0ZXIgaXMgXCIqXCJcIiBvciBcIi9cIiwgY29udGludWUsIG90aGVyd2lzZSBpbmNyZWFzZSBpbmRleCBieSBvbmUgYW5kIGNoZWNrIGFnYWluXG4vLyAgICAgICAyLiBTY2FuIHRvIHRoZSBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgaW5kZXguXG4vLyAgICAgICAzLiBJZiByYW4gb3V0IG9mIGJvdW5kcyBvZiB0aGUgc3RyaW5nLCBzdG9wIHNjYW5uaW5nIGxlZnQsIG1vdmUgdG8gc3RlcCA3XG4vLyAgICAgICA0LiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBzZXQgY2xvc2luZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDUuIElmIGhpdCBvcGVuaW5nIGJyYWNrZXQsIGNoZWNrIGlmIGNsb3NpbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZyBhbmQgc2V0IGNsb3NpbmcgYnJhY2tldCBmbGFnIHRvIGZhbHNlIGFnYWluLlxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCBtb3ZlIHRvIHN0ZXAgN1xuLy8gICAgICAgNi4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBjbG9zaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZywgbW92ZSByaWdodCBieSBvbmUgc3RlcCBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuLy8gICAgICAgNy4gU2NhbiB0byB0aGUgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBpbmRleC5cbi8vICAgICAgIDguIElmIHJhbiBvdXQgb2YgYm91bmRzIG9mIHRoZSBzdHJpbmcsIHN0b3Agc2Nhbm5pbmcgbGVmdCwgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICA5LiBJZiBoaXQgb3BlbmluZyBicmFja2V0LCBzZXQgb3BlbmluZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDEwLiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcgYW5kIHNldCBvcGVuaW5nIGJyYWNrZXQgZmxhZyB0byBmYWxzZSBhZ2Fpbi5cbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICAxMS4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuXG5leHBvcnQgZnVuY3Rpb24gZml4U2NvcGVzKGdlbikge1xuICAgIGxldCBnID0gU3RyaW5nKGdlbik7XG5cbiAgICAvLyBWYXJpYWJsZSBhcmUgdGFrZW4gb3V0c2lkZSBvZiBmb3IgbG9vcCwgdG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UuXG4gICAgLy8gSW4gdGhpcyB3YXksIHZhcmlhYmxlcyBhcmUganVzdCByZXdyaXR0ZW4gaW4gdGhlIHNhbWUgbWVtb3J5XG4gICAgLy8gbG9jYXRpb24gaW5zdGVhZCBvZiBjcmVhdGluZyBuZXcgdmFyaWFibGUgZXZlcnkgdGltZS5cbiAgICBsZXQgZm91bmRMZWZ0Qm9yZGVyID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kUmlnaHRCb3JkZXIgPSBmYWxzZTtcblxuICAgIGxldCBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICBsZXQganVzdEhpdENsb3NpbmdCcmFja2V0ID0gZmFsc2U7XG5cbiAgICBsZXQgbGVmdDtcbiAgICBsZXQgcmlnaHQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGdbaV0gPT09IFwiKlwiIHx8IGdbaV0gPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAvLyBTY2FuIGxlZnRcbiAgICAgICAgICAgIGZvciAobGVmdCA9IGk7ICFmb3VuZExlZnRCb3JkZXI7IGxlZnQtLSkge1xuICAgICAgICAgICAgICAgIC8vIEV4aXQgdGhlIHNjYW5uaW5nIGxvb3AgaWYgaGl0IGxlZnQgc3RyaW5nIHdhbGxcbiAgICAgICAgICAgICAgICBpZiAobGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZG9lcyBub3Qgc2V0IGZvdW5kTGVmdEJvcmRlciB2YXJpYWJsZSB0byB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpZiBib3RoIHNpZGVzIGFyZSBicmFja2V0cyBvciBvdXRlciB3YWxscyBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RyaW5nLCBuZXcgYnJhY2tldHMgc2hvdWxkIG5vdCBiZSBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGhpdHMgb3BlbmluZyBicmFja2V0LCBpdCBjaGVja3MgaWYgaXQgaGl0IGNsb3NpbmcgYnJhY2tldCBiZWZvcmVcbiAgICAgICAgICAgICAgICBpZiAoZ1tsZWZ0XSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRDbG9zaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdEhpdENsb3NpbmdCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFya3MgdGhhdCBpdCBoaXQgY2xvc2luZyBicmFja2V0LCBzbyB0aGF0IGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGxhdGVyLFxuICAgICAgICAgICAgICAgIC8vIGl0IGtub3dzIHRoYXQgaXQgc2hvdWxkbid0IFxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIilcIikganVzdEhpdENsb3NpbmdCcmFja2V0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIEV4aXQgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgcGx1cyBvciBtaW51c1xuICAgICAgICAgICAgICAgIC8vIEFsc28sIG1vdmUgcmlnaHQsIHNvIHRoYXQgYnJhY2tlcyBpcyBpbnNlcnRlZCBhZnRlciArIG9yIC0gc2lnblxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIitcIiB8fCBnW2xlZnRdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdENsb3NpbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kTGVmdEJvcmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2NhbiByaWdodFxuICAgICAgICAgICAgZm9yIChyaWdodCA9IGk7ICFmb3VuZFJpZ2h0Qm9yZGVyOyByaWdodCsrKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhpdCB0aGUgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgcmlnaHQgc3RyaW5nIHdhbGwgb3IgY2xvc2luZyBicmFja2V0XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0ID49IGcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZG9lcyBub3Qgc2V0IGZvdW5kUmlnaHRCb3JkZXIgdmFyaWFibGUgdG8gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgaWYgYm90aCBzaWRlcyBhcmUgYnJhY2tldHMgb3Igb3V0ZXIgd2FsbHMgb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN0cmluZywgbmV3IGJyYWNrZXRzIHNob3VsZCBub3QgYmUgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBoaXRzIGNsb3NpbmcgYnJhY2tldCwgaXQgY2hlY2tzIGlmIGl0IGhpdCBvcGVuaW5nIGJyYWNrZXQgYmVmb3JlXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdE9wZW5pbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYXJrcyB0aGF0IGl0IGhpdCBjbG9zaW5nIGJyYWNrZXQsIHNvIHRoYXQgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgbGF0ZXIsXG4gICAgICAgICAgICAgICAgLy8gaXQga25vd3MgdGhhdCBpdCBzaG91bGRuJ3QgXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIihcIikganVzdEhpdE9wZW5pbmdCcmFja2V0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChnW3JpZ2h0XSA9PT0gXCIrXCIgfHwgZ1tyaWdodF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0T3BlbmluZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRSaWdodEJvcmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIG9uIG9uZSBvZiB0aGUgc2lkZXMgdGhlcmUgaXMgKyBvciAtIHNpZ25cbiAgICAgICAgICAgIGlmIChmb3VuZExlZnRCb3JkZXIgfHwgZm91bmRSaWdodEJvcmRlcikge1xuICAgICAgICAgICAgICAgIC8vIFNsaWNlIG9yaWdpbmFsIHN0cmluZyBhdCB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uc1xuICAgICAgICAgICAgICAgIGxldCBvbmUgPSBnLnNsaWNlKDAsIGxlZnQpO1xuICAgICAgICAgICAgICAgIGxldCB0d28gPSBnLnNsaWNlKGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICBsZXQgdGhyZWUgPSBnLnNsaWNlKHJpZ2h0LCBnLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgYnJhY2tldHMgYmV0d2VlbiBmb3JtZXIgdGhyZWUgc3RyaW5ncyB0byBmb3JtXG4gICAgICAgICAgICAgICAgLy8gbmV3IHN0cmluZyB3aXRoIGluc2VydGVkIGJyYWNrZXRzXG4gICAgICAgICAgICAgICAgZyA9IG9uZSArIFwiKFwiICsgdHdvICsgXCIpXCIgKyB0aHJlZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVzZXQgYm9yZGVyIHZhcmlhYmxlc1xuICAgICAgICAgICAgZm91bmRMZWZ0Qm9yZGVyID0gZmFsc2U7XG4gICAgICAgICAgICBmb3VuZFJpZ2h0Qm9yZGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZztcbn0iLCJpbXBvcnQge1xuICAgIGdldFVuY2FsY3VsYXRlZE5vZGVzLFxuICAgIGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnksXG4gICAgb2JqZWN0U2l6ZSxcbiAgICB3YXNDYWxjdWxhdGVkLFxuICAgIGFsbElucHV0c0NhbGN1bGF0ZWQsXG4gICAgY2FsY3VsYXRlT3V0cHV0LFxuICAgIGdldFRvdWNoSW5wdXRzLFxuICAgIGluaXRUaW1lLFxuICAgIGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyxcbiAgICBnZXRPdGhlclNpZGVPZkNvbm5lY3RvclxufSBmcm9tICcuL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucyc7XG5cbmltcG9ydCB7IHRva2VuaXplR2VuZXJhdG9yIH0gZnJvbSAnLi9nZW5lcmF0b3JUb2tlbml6ZXInO1xuXG5pbXBvcnQgVWdsaWZ5SlMgZnJvbSBcInVnbGlmeS1qc1wiXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNjcmlwdEdlbmVyYXRvcihhbGxOb2RlczogTm9kZUNvbGxlY3Rpb24sIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSkge1xuICAgIC8vIEV4ZWN1dGFibGUgdG8gc3RvcmUgZ2VuZXJhdGVkIGphdmFzY3JpcHQgY29kZS4gQW55IGluaXRpYWxpc2F0aW9uIGNvZGUgc2hvdWxkIGJlIGhlcmUuXG4gICAgbGV0IGV4ZUFycmF5OiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCBleGVjdXRhYmxlID0gXCJ2YXIgZ3JhcGhzID0ge307XCI7XG5cbiAgICAvLyBTZXR1cCB0aW1lXG4gICAgZXhlY3V0YWJsZSArPSBpbml0VGltZSgtMSwgMSwgMC4wMDEpO1xuXG5cblxuXG4gICAgLy8gQ2FsY3VsYXRlZCBub2RlcyBoYXZlIGZvbGxvd2luZyBzaGFwZTogXCJub2RlSWQ6b3V0cHV0SWRcIlxuICAgIGxldCBjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAvLyBTdGF0aXN0aWNzIG9iamVjdFxuICAgIGxldCBzdGF0aXN0aWNzID0ge1xuICAgICAgICBsb29wQ291bnRlcjogMCxcbiAgICAgICAgaW5pdGlhbFRvdGFsTm9kZXM6IG9iamVjdFNpemUoYWxsTm9kZXMpLFxuICAgICAgICBpbml0aWFsVG90YWxDb25uZWN0b3JzOiBhbGxDb25uZWN0aW9ucy5sZW5ndGhcbiAgICB9O1xuXG4gICAgLy8gU2VwYXJhdGVzIHVuY2FsY3VsYXRlZCBub2RlcyBhbmQgc2NvcGVzIGF0IHRoZSBzdGFydC5cbiAgICBsZXQge3VuY2FsY3VsYXRlZE5vZGVzLCBhbGxTY29wZXN9ID0gZ2V0VW5jYWxjdWxhdGVkTm9kZXMoYWxsTm9kZXMpO1xuXG4gICAgLy8gU2VwYXJhdGUgdG91Y2ggbm9kZXMgZm9ybSByZWd1bGFyIG5vZGVzXG4gICAgbGV0IHRvdWNoTm9kZXNTZXBhcmF0ZWQgPSBnZXRUb3VjaElucHV0cyh1bmNhbGN1bGF0ZWROb2Rlcyk7XG5cbiAgICB1bmNhbGN1bGF0ZWROb2RlcyA9IHRvdWNoTm9kZXNTZXBhcmF0ZWQudW5jYWxjdWxhdGVkTm9kZXM7XG5cbiAgICAvLyBEZWFsIHdpdGggdG91Y2ggQ29udHJvbHNcbiAgICBsZXQgdG91Y2hOb2RlcyA9IHRvdWNoTm9kZXNTZXBhcmF0ZWQudG91Y2hOb2RlcztcblxuICAgIGV4ZWN1dGFibGUgKz0gZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzKHRvdWNoTm9kZXMpO1xuICAgIFxuICAgIGZvcihsZXQgdCBpbiB0b3VjaE5vZGVzKSB7XG4gICAgICAgIGZvcihsZXQgbyBpbiB0b3VjaE5vZGVzW3RdLm91dHB1dHMpIHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZWROb2Rlcy5wdXNoKGAke3R9OiR7dG91Y2hOb2Rlc1t0XS5vdXRwdXRzW29dLnRpdGxlfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb25uZWN0aW9uIERpY3Rpb25hcnkgY29udGFpbnMgY29ubmVjdGlvbnMgaW4ga2V5OiB2YWx1ZSBmb3JtYXQsIHdoZXJlXG4gICAgLy8gYm90aCBjb250YWluIG5vZGVJZCBhbmQgc2V0dGluZ0lkIGFzIHN0cmluZ3Mgc2VwYXJhdGVkIGJ5IGEgY29sb24uXG4gICAgbGV0IGNvbm5lY3Rpb25EaWN0aW9uYXJ5ID0gZ2VuZXJhdGVDb25uZWN0aW9uRGljdGlvbmFyeShhbGxDb25uZWN0aW9ucyk7XG5cblxuXG4gICAgLy8gR2VuZXJhbCBydWxlcyBmb3IgYWxnb3JpdGhtIHdyaXRpbmc6XG4gICAgLy8gKiB1c2UgYXMgbWFueSBmdW5jdGlvbnMgYXMgcG9zc2libGUgKGluIHBlcmZvcm1hbmNlIGJvdW5kcylcbiAgICAvLyAqIFxuXG4gICAgLy8gMC4gTG9vcCB0aHJvdWdoIHVuY2FsY3VsYXRlZCBub2RlcyBhbmQgZmluZCBzY29wZXMuIFNjb3BlcyBkbyBub3QgaGF2ZSBvdXRwdXRzLCBzbyBubyBuZWVkIHRvIGZpbmQgaW5wdXRzLlxuICAgICAgICAvLyAwLjAgRG8gaXQgaW4gYSBmdW5jdGlvbj9cblxuICAgIC8vIDEuIExvb3AgdW50aWwgYWxsIG5vZGVzIGFyZSBjYWxjdWxhdGVkXG4gICAgLy8gfCAgIDEuIENoZWNrIGlmIG5vZGUgd2FzIGNhbGN1bGF0ZWQgYmVmb3JlLCBpZiB5ZXMgZ28gdG8gbmV4dCBub2RlLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIDIuIElmIHdhcyBub3QgY2FsY3VsYXRlZDpcbiAgICAvLyB8ICAgfCAgIDEuIENoZWNrIGlmIGFsbCBjb25uZWN0ZWQgaW5wdXRzIGFyZSBjb25uZWN0ZWQgdG8gdGhlIGNhbGN1bGF0ZWQgbm9kZXMsIGlmIG5vdCAtIGdvIHRvIG5leHQgbm9kZS4gKGZ1bmN0aW9uKVxuICAgIC8vIHwgICB8ICAgMi4gSWYgeWVzLCBzYXZlIGFsbCB1bmNvbm5lY3RlZCBpbnB1dHMgKHZhbHVlIGZyb20gZGVmYXVsdCB2YWx1ZSkuIChmdW5jdGlvbiBmb3IgZWFjaCBzYXZlKVxuICAgIC8vIHwgICB8ICAgMy4gQ2hlY2sgaWYgb3V0cHV0IGlzIHBvaW50aW5nIHRvIGEgZ2VuZXJhdG9yLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIHwgICA0LiBJZiB5ZXMsIHBhcnNlIGdlbmVyYXRvclxuICAgIC8vIHwgICB8ICAgfCAgIDEuIFNjYW4gZ2VuZXJhdG9yIGFuZCBzYXZlIHZhcmlhYmxlc1xuICAgIC8vIHwgICB8ICAgfCAgIDIuIElmIHZhcmlhYmxlIGlzIGEgZ2VuZXJhdG9yIGdvIHRvIHN0ZXAgMS4yLjRcbiAgICAvLyB8ICAgfCAgIHwgICAzLiBMb29wIHVudGlsIGFsbCBnZW5lcmF0b3JzIHdlcmUgcGFyc2VkXG4gICAgLy8gfCAgIHwgICB8IC0tLS0tLS0tLS0tIEluIGZvbGxvd2luZywgaW5wdXRzIGFyZSBjaGVja2VkIGZpcnN0IHNpbmNlIHNldHRpbmcgY2FuIGJlIGFuIGlucHV0IC0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB8ICAgfCAgIDUuIENoZWNrIGlmIG91dHB1dCBpcyBwb2ludGluZyB0byBhbiBpbnB1dCwgaWYgeWVzIGFzc2lnbiBpbnB1dCB2YXJpYWJsZSB0byB0aGUgb3V0cHV0IHZhcmlhYmxlXG4gICAgLy8gfCAgIHwgICA2LiBDaGVjayBpZiBvdXRwdXQgaXMgcG9pbnRpbmcgdG8gYSBzZXR0aW5nLCBpZiB5ZXMgYXNzaWduIGNvbnN0YW50IHRvIHRoZSBzZXR0aW5nXG4gICAgLy8gMi4gRm9yIGVhY2ggc2NvcGU6XG4gICAgLy8gfCAgIDEuIEdldCBhbGwgaW5wdXRzIGFuZCBzYXZlIHRoZW0gaW4gdmFyaWFibGVzIChhc3N1bWVkIHRvIGJlIGNhbGN1bGF0ZWQgc2luY2UgdGVybWluYXRpb24gY29uZGl0aW9uIGZyb20gc3RlcCAxIGlzIGJhc2VkIG9uIGFsbCBub2RlcyBiZWluZyBjYWxjdWxhdGVkLilcbiAgICAvLyB8ICAgMi4gUGFyc2UgZmlyc3QgZ2VuZXJhdG9yIGFuZCBnZW5lcmF0ZSBzY29wZSBvdXRwdXQgdmFyaWFibGUgKG1ha2luZyBzdXJlIHRoYXQgYWxsIHZhcmlhYmxlcyBmcm9tIGdlbmVyYXRvciB3ZXJlIHNhdmVkIGJlZm9yZWhhbmQpXG4gICAgLy8gfCAgIDMuIEdlbmVyYXRlIGFuIGFycmF5IG9mIG91dHB1dCBkYXRhIGJhc2VkIG9uIGdlbmVyYWwgKG9yIGNvbm5lY3RlZCkgdGltZSBhcnJheSBhbmQgc2F2ZSBpdCBpbnRvIGEgdmFyaWFibGVcbiAgICAvLyB8ICAgNC4gQ3JlYXRlIHJlZHJhdyBmdW5jdGlvbiwgaW5zaWRlIHRoYXQgZnVuY3Rpb246XG4gICAgLy8gfCAgIHwgICAxLiBGaW5kIGFwcHJvcHJpYXRlIGNhbnZhcyBub2RlIGluIHRoZSBkb21cbiAgICAvLyB8ICAgfCAgIDIuIEdldCBjb250ZXh0XG4gICAgLy8gfCAgIHwgICAzLiBSZXBvcHVsYXRlIGdyYXBoIGFycmF5IHdpdGggbmV3IGdyYXBocy5cbiAgICAvLyB8ICAgNS4gQ3JlYXRlIHVwZGF0ZURhdGEgZnVuY3Rpb24sIGluc2lkZSB0aGF0IGZ1bmN0aW9uOlxuICAgIC8vIHwgICB8ICAgMS4gTG9vcCB0aHJvdWdoIGdyYXBoIGFycmF5IGFuZCB1cGRhdGUgZ3JhcGhzIHdpdGggbmV3IGRhdGEuXG5cblxuICAgIC8vIDEuIExvb3AgdW50aWwgYWxsIG5vZGVzIGFyZSBjYWxjdWxhdGVkIGFuZCBjb3VudCBudW1iZXIgb2YgaXRlcmF0aW9ucyBmb3Igc3RhdGlzdGljc1xuICAgIGZvcihzdGF0aXN0aWNzLmxvb3BDb3VudGVyID0gMDsgb2JqZWN0U2l6ZSh1bmNhbGN1bGF0ZWROb2RlcykgPiAwOyBzdGF0aXN0aWNzLmxvb3BDb3VudGVyKyspIHtcbiAgICAgICAgLy8gMS4wIExvb3AgdGhyb3VnaCBhbGwgdW5jYWxjdWxhdGVkIG5vZGVzXG4gICAgICAgIGZvcihsZXQgbm9kZUtleSBpbiB1bmNhbGN1bGF0ZWROb2Rlcykge1xuICAgICAgICAgICAgLy8gU2F2ZSBjdXJyZW50IG5vZGUgaW50byBhIGNvbnN0YW50XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuXG4gICAgICAgICAgICAvLyBHbyB0byBuZXh0IG5vZGUgaWYgbm90IGFsbCBjb25uZWN0ZWQgaW5wdXRzIHdlcmUgY2FsY3VsYXRlZCBhbHJlYWR5XG4gICAgICAgICAgICBpZighYWxsSW5wdXRzQ2FsY3VsYXRlZChub2RlS2V5LCBjdXJyZW50Tm9kZS5pbnB1dHMsIGFsbENvbm5lY3Rpb25zLCBjYWxjdWxhdGVkTm9kZXMpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlQ2FsY3VsYXRlZE91dHB1dHM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBldmVyeSBvdXRwdXQgb2YgdGhlIG5vZGUgdG8gY2FsY3VsYXRlIHRoZW1cbiAgICAgICAgICAgIGZvcihsZXQgbyA9IDA7IG8gPCBjdXJyZW50Tm9kZS5vdXRwdXRzLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0S2V5ID0gY3VycmVudE5vZGUub3V0cHV0c1tvXS50aXRsZTtcbiAgICAgICAgICAgICAgICAvLyBJZiBjdXJyZW50IG91dHB1dCB3YXMgY2FsY3VsYXRlZCBhbHJlYWR5LCBza2lwIHRvIG5leHQgb25lXG4gICAgICAgICAgICAgICAgaWYod2FzQ2FsY3VsYXRlZChjYWxjdWxhdGVkTm9kZXMsIG5vZGVLZXksIG91dHB1dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0cy5wdXNoKGAke25vZGVLZXl9OiR7b3V0cHV0S2V5fWApO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBub3QsIGNhbGN1bGF0ZSBpdCBhbmQgYXBwZW5kIHRvIHRoZSBleGVjdXRhYmxlIHRleHQuXG4gICAgICAgICAgICAgICAgbGV0IHsgZXhlLCB3YXNTdWNjZXNzZnVsIH0gPSBjYWxjdWxhdGVPdXRwdXQobm9kZUtleSwgb3V0cHV0S2V5LCBjdXJyZW50Tm9kZSwgYWxsQ29ubmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmKHdhc1N1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhlY3V0YWJsZSArPSBleGU7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlZE5vZGVzLnB1c2goYCR7bm9kZUtleX06JHtvdXRwdXRLZXl9YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ291bGQgbm90IGdlbmVyYXRlIG91dHB1dCBjb2RlOiAke25vZGVLZXl9IC0gJHtvdXRwdXRLZXl9IHwgc2NyaXB0R2VuZXJhdG9yLnRzYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGN1cnJlbnROb2RlQ2FsY3VsYXRlZE91dHB1dHMubGVuZ3RoID09PSBjdXJyZW50Tm9kZS5vdXRwdXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB1bmNhbGN1bGF0ZWROb2Rlc1tub2RlS2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIExvb3AgdGhyb3VnaCBhbGwgc2NvcGVzIGFuZCBkcmF3IGdyYXBoc1xuXG4gICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICBleGVjdXRhYmxlID0gXCJcIjtcblxuICAgIGV4ZWN1dGFibGUgKz0gXCJmdW5jdGlvbiB1cGRhdGUoKSB7XFxuXCI7XG5cbiAgICBmb3IobGV0IHMgaW4gYWxsU2NvcGVzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29wZSA9IGFsbFNjb3Blc1tzXTtcblxuICAgICAgICAvLyBjb25zdCBvdXRwdXRHZW5lcmF0b3IgPSBjdXJyZW50U2NvcGUuZ2VuZXJhdG9yc1swXTtcblxuICAgICAgICAvLyBjb25zdCBvdXRwdXRUb2tlbnMgPSB0b2tlbml6ZUdlbmVyYXRvcihvdXRwdXRHZW5lcmF0b3IudmFsdWUsIHMpO1xuXG4gICAgICAgIGNvbnN0IHsgb3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkIH0gPSBnZXRPdGhlclNpZGVPZkNvbm5lY3RvcihhbGxDb25uZWN0aW9ucywgbnVsbCwge25vZGVJZDogcywgc2V0dGluZ0lkOiBcInNpZ25hbFwifSk7XG5cbiAgICAgICAgZXhlY3V0YWJsZSArPSBgXG4gICAgICAgICAgICBpZihncmFwaHMuJHtzfSkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0gW107XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtuZXdEYXRhLnB1c2goJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0W2ldKSk7fVxuICAgICAgICAgICAgICAgIGdyYXBocy4ke3N9LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IG5ld0RhdGE7XG4gICAgICAgICAgICAgICAgZ3JhcGhzLiR7c30udXBkYXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBjYW52YXNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke3N9XCIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHZpZXdTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBjYW52YXNOb2RlLnBhcmVudE5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzTm9kZS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgdyA9IHZpZXdTaXplLng7XG4gICAgICAgICAgICAgICAgdmFyIGggPSB2aWV3U2l6ZS55IC8gJHtvYmplY3RTaXplKGFsbFNjb3Blcyl9O1xuXG4gICAgICAgICAgICAgICAgY2FudmFzTm9kZS53aWR0aCA9IHc7XG4gICAgICAgICAgICAgICAgY2FudmFzTm9kZS5oZWlnaHQgPSBoO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCgke290aGVyTm9kZUlkfSR7b3RoZXJTZXR0aW5nSWR9KHRbaV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge2xhYmVsczogdC5tYXAodGkgPT4gdGkudG9GaXhlZCgxKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2lnbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigyNTUsIDEyMCwgMTMyKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwcGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGl0UmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlclJhZGl1czogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSR7Y3VycmVudFNjb3BlLnNldHRpbmdzWzBdLnZhbHVlID09IFwidHJ1ZVwiID8gJycgOiBgLCBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMC41XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSwgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMC41XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICBncmFwaHMuJHtzfSA9IG15Q2hhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICAgICAgZXhlY3V0YWJsZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgZXhlY3V0YWJsZSArPSBcIn07XFxuXCJcbiAgICBleGVjdXRhYmxlICs9IFwidXBkYXRlKCk7XCJcblxuICAgIGV4ZUFycmF5LnB1c2goZXhlY3V0YWJsZSk7XG4gICAgZXhlY3V0YWJsZSA9IFwiXCI7XG5cbiAgICAvLyByZXR1cm4gVWdsaWZ5SlMubWluaWZ5KGV4ZWN1dGFibGUpO1xuXG4gICAgcmV0dXJuIGV4ZUFycmF5O1xufVxuIiwiaW1wb3J0IHsgdG9rZW5pemVHZW5lcmF0b3IsIEdlbmVyYXRvclNlZ21lbnQgfSBmcm9tICcuL2dlbmVyYXRvclRva2VuaXplcic7XG5pbXBvcnQgeyB0b2tlblRvSnMgfSBmcm9tICcuL3Rva2VuVG9Kcyc7XG5cbi8vIEdldCBhbGwgbm9kZXMgdGhhdCBhcmUgbm90IHNjb3BlcywgYW5kIHNhdmUgc2NvcGVzIGludG8gdGhlaXIgb3duIGNvbGxlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmNhbGN1bGF0ZWROb2RlcyAoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKSA6IHt1bmNhbGN1bGF0ZWROb2RlczogTm9kZUNvbGxlY3Rpb24sIGFsbFNjb3BlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgdW5jYWxjdWxhdGVkOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCBzY29wZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG5cbiAgICBmb3IobGV0IGkgaW4gYWxsTm9kZXMpIHtcbiAgICAgICAgaWYoU3RyaW5nKGkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBzY29wZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuY2FsY3VsYXRlZFtpXSA9IGFsbE5vZGVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IHVuY2FsY3VsYXRlZCxcbiAgICAgICAgYWxsU2NvcGVzOiBzY29wZXNcbiAgICB9O1xufVxuXG4vLyBHZW5lcmF0ZSBjb25uZWN0aW9uIGRpY3Rpb25hcnlcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5IChhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10pOiB7W2Nvbm5lY3RvclN0YXJ0OiBzdHJpbmddOiBzdHJpbmd9IHtcbiAgICBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnk6IHtbY29ubmVjdG9yU3RhcnQ6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb25uZWN0b3JTdGFydCA9IGFsbENvbm5lY3Rpb25zW2ldLmNvbm5lY3RvclN0YXJ0O1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmQgPSBhbGxDb25uZWN0aW9uc1tpXS5jb25uZWN0b3JFbmQ7XG5cbiAgICAgICAgY29uc3QgY29ubmVjdG9yU3RhcnRDb21iaW5lZCA9IGNvbm5lY3RvclN0YXJ0Lm5vZGVJZCArIFwiOlwiICsgY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkO1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmRDb21iaW5lZCA9IGNvbm5lY3RvckVuZC5ub2RlSWQgKyBcIjpcIiArIGNvbm5lY3RvckVuZC5zZXR0aW5nSWQ7XG5cbiAgICAgICAgY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdG9yU3RhcnRDb21iaW5lZF0gPSBjb25uZWN0b3JFbmRDb21iaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29ubmVjdGlvbkRpY3Rpb25hcnk7XG59XG5cbi8vIENhbGN1bGF0ZSBvYmplY3Qgc2l6ZVxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFNpemUgKG9iajogb2JqZWN0KTogbnVtYmVyIHtcbiAgICBsZXQgYyA9IDA7XG4gICAgZm9yKGxldCBpIGluIG9iaikgYysrO1xuICAgIHJldHVybiBjKys7XG59XG5cbi8vIENoZWNrIGlmIG5vZGUgd2FzIGNhbGN1bGF0ZWQgYWxyZWFkeVxuZXhwb3J0IGZ1bmN0aW9uIHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzOiBzdHJpbmdbXSwgbm9kZUtleTogc3RyaW5nLCBvdXRwdXRLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYWxjdWxhdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU3BsaXQgc3RyaW5nIGZyb20gY2FsY3VsYXRlZCBub2RlcyBhcnJheSBhbmQgZ2V0IG5vZGUgYW5kIG91dHB1dCBrZXlzXG4gICAgICAgIGNvbnN0IHNwbGl0dGVkID0gY2FsY3VsYXRlZE5vZGVzW2ldLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE5vZGUgPSBzcGxpdHRlZFswXTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE91dHB1dCA9IHNwbGl0dGVkWzFdO1xuXG4gICAgICAgIGlmKGNhbGN1bGF0ZWROb2RlID09PSBub2RlS2V5ICYmIGNhbGN1bGF0ZWRPdXRwdXQgPT09IG91dHB1dEtleSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBHZXQgbm9kZUlkIGFuZCBzZXR0aW5nSWQgb2YgdGhlIG90aGVyIHNpZGUgb2YgdGhlIGNvbm5lY3Rpb246XG5leHBvcnQgZnVuY3Rpb24gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoXG4gICAgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBcbiAgICBjb25uZWN0b3JJbnB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9LFxuICAgIGNvbm5lY3Rvck91dHB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9KToge290aGVyTm9kZUlkOiBzdHJpbmcsIG90aGVyU2V0dGluZ0lkOiBzdHJpbmd9IHtcblxuICAgIGlmKGNvbm5lY3RvcklucHV0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgY29ubmVjdG9yIHN0YXJ0cy4uLlwiKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RvciA9IGFsbENvbm5lY3Rpb25zW2ldO1xuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIHN0YXJ0XG4gICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQubm9kZUlkID09PSBjb25uZWN0b3JJbnB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkID09PSBjb25uZWN0b3JJbnB1dC5zZXR0aW5nSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZUlkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyU2V0dGluZ0lkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChjb25uZWN0b3JPdXRwdXQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTY2FubmluZyBjb25uZWN0b3IgZW5kcy4uLiBcIiwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29ubmVjdG9yID0gYWxsQ29ubmVjdGlvbnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ29tcGFyaW5nIGZvbGxvd2luZyBjb25uZWN0b3JzOiBcIiwgY29ubmVjdG9yLmNvbm5lY3RvckVuZCwgY29ubmVjdG9yT3V0cHV0KVxuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIGVuZFxuICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvckVuZC5ub2RlSWQgPT09IGNvbm5lY3Rvck91dHB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZCA9PT0gY29ubmVjdG9yT3V0cHV0LnNldHRpbmdJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclNldHRpbmdJZDogY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0LnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3RoZXJOb2RlSWQ6IG51bGwsXG4gICAgICAgIG90aGVyU2V0dGluZ0lkOiBudWxsXG4gICAgfVxufVxuXG5cbi8vIENoZWNrIGlmIGFsbCBjb25uZWN0ZWQgaW5wdXRzIGluIHRoZSBub2RlIGFyZSBjb25uZWN0ZWQgdG8gdGhlIG91dHB1dHMgdGhhdCB3ZXJlIGFscmVhZHkgY2FsY3VsYXRlZCBvciBhcmUgbm90IGNvbm5lY3RlZFxuZXhwb3J0IGZ1bmN0aW9uIGFsbElucHV0c0NhbGN1bGF0ZWQobm9kZUlkOiBzdHJpbmcsIGlucHV0czogTm9kZUlucHV0U2hhcGVbXSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgbGV0IGRhdGE6IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudERhdGEgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7bm9kZUlkOiBub2RlSWQsIHNldHRpbmdJZDogaW5wdXRzW2ldLnRpdGxlfSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGNvbm5lY3RlZFxuICAgICAgICBpZihvdGhlck5vZGVJZCAmJiBvdGhlclNldHRpbmdJZCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2FzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIGlmKHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzLCBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIG5vdCBjb25uZWN0ZWRcbiAgICAgICAgICAgIGN1cnJlbnREYXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaChjdXJyZW50RGF0YSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBkIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGFbZF0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIHNwZWNpZmljIG91dHB1dCBvZiB0aGUgbm9kZVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU91dHB1dChcbiAgICBub2RlSWQ6IHN0cmluZywgXG4gICAgb3V0cHV0S2V5OiBzdHJpbmcsIFxuICAgIGN1cnJlbnROb2RlOiBTaWduYWxOb2RlLFxuICAgIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHsgZXhlOiBzdHJpbmcsIHdhc1N1Y2Nlc3NmdWw6IGJvb2xlYW4gfSB7XG4gICAgXG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgY29uc3QgZ2VuZXJhdG9ySWQgPSBpc0dlbmVyYXRvcihjdXJyZW50Tm9kZSwgb3V0cHV0S2V5KTtcblxuICAgIC8vIENoZWNrIGlmIG91dHB1dCBpcyBhIGdlbmVyYXRvclxuICAgIGlmKGdlbmVyYXRvcklkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBjb25zdCBvdXRwdXRHZW5lcmF0b3IgPSBjdXJyZW50Tm9kZS5nZW5lcmF0b3JzW2dlbmVyYXRvcklkXTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSB0b2tlbnNcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdG9rZW5pemVHZW5lcmF0b3Iob3V0cHV0R2VuZXJhdG9yLnZhbHVlLCBub2RlSWQpO1xuXG4gICAgICAgIC8vIFNhdmUgdmFyaWFibGVzIGZpcnN0XG4gICAgICAgIGUgKz0gc2F2ZVZhcmlhYmxlcyhub2RlSWQsIGN1cnJlbnROb2RlLCB0b2tlbnMsIGFsbENvbm5lY3Rpb25zKTtcblxuICAgICAgICAvLyBTYXZlIG91dHB1dFxuICAgICAgICBlICs9IHRva2VuVG9Kcyhub2RlSWQsIG91dHB1dEdlbmVyYXRvci50aXRsZSwgdG9rZW5zKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRJZCA9IGlzSW5wdXQoY3VycmVudE5vZGUsIG91dHB1dEtleSk7XG5cbiAgICBpZihpbnB1dElkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IHNhdmVJbnB1dFZhcmlhYmxlKGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUlkLCBvdXRwdXRLZXksIGlucHV0SWQpO1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZUlkfSR7Y3VycmVudE5vZGUuaW5wdXRzW2lucHV0SWRdLnRpdGxlfX07XFxuYDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dGluZ0lkID0gaXNTZXR0aW5nKGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuXG4gICAgaWYoc2V0dGluZ0lkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7Y3VycmVudE5vZGUuc2V0dGluZ3Nbc2V0dGluZ0lkXS52YWx1ZX19O1xcbmA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4ZTogZSxcbiAgICAgICAgICAgIHdhc1N1Y2Nlc3NmdWw6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGV4ZTogXCJcIixcbiAgICAgICAgd2FzU3VjY2Vzc2Z1bDogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVWYXJpYWJsZXMobm9kZUtleTogc3RyaW5nLCBub2RlOiBTaWduYWxOb2RlLCBjb2RlOiBHZW5lcmF0b3JTZWdtZW50W10sIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBzID0gMDsgcyA8IGNvZGUubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgaWYoY29kZVtzXS50eXBlID09PSBcInZhclwiKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJOYW1lOiBzdHJpbmcgPSBTdHJpbmcoY29kZVtzXS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJOYW1lLnN1YnN0cihub2RlS2V5Lmxlbmd0aCwgdmFyTmFtZS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTUEVDSUFMIENBU0UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZih2YXJOYW1lID09PSBcIlBJXCIgfHwgdmFyTmFtZSA9PT0gXCJ0aW1lXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBJTlBVVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgaW5wdXQgaW5kZXhcbiAgICAgICAgICAgIGxldCBpbnB1dEtleTogbnVtYmVyID0gaXNJbnB1dChub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiB2YXJpYWJsZSBpcyB0aGUgaW5wdXQgKGlmIG5vdCBpbnB1dCBpdCB3aWxsIGJlIEluZmluaXR5KVxuICAgICAgICAgICAgaWYoaW5wdXRLZXkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZVxuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gc2F2ZUlucHV0VmFyaWFibGUobm9kZSwgYWxsQ29ubmVjdGlvbnMsIG5vZGVLZXksIHZhcmlhYmxlTmFtZSwgaW5wdXRLZXkpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEZvdW5kIHZhcmlhYmxlIGluIGlucHV0cyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBbmQgY29udGludWUgdG8gdGhlIG5leHQgc3RlcCBpbiB0aGUgdG9rZW5pc2VkIGdlbmVyYXRvciBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIEdFTkVSQVRPUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgZ2VuZXJhdG9yIGluZGV4XG4gICAgICAgICAgICBsZXQgZ2VuZXJhdG9yS2V5OiBudW1iZXIgPSBpc0dlbmVyYXRvcihub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiBnZW5lcmF0b3IgaW5kZXggaXMgbm90IGFuIEluZmluaXR5LCB0aGUgc2V0dGluZyBpcyB0aGUgZ2VuZXJhdG9yLCBhbmQgc2hvdWxkIGJlIHByb2Nlc3NlZCBhcyBvbmVcbiAgICAgICAgICAgIGlmKGdlbmVyYXRvcktleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSBub2RlLmdlbmVyYXRvcnNbZ2VuZXJhdG9yS2V5XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHRva2VuaXplR2VuZXJhdG9yKGdlbmVyYXRvci52YWx1ZSwgbm9kZUtleSk7XG5cbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgdG9rZW5zLCBhbGxDb25uZWN0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBnZW5lcmF0b3IgdGl0bGVcbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHRva2VuVG9Kcyhub2RlS2V5LCBnZW5lcmF0b3IudGl0bGUsIHRva2Vucyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gZ2VuZXJhdG9ycyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0byB0aGUgbmV4dCB0b2tlblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTRVRUSU5HIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBzZXR0aW5nIGluZGV4XG4gICAgICAgICAgICBsZXQgc2V0dGluZ0tleTogbnVtYmVyID0gaXNTZXR0aW5nKG5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHNldHRpbmcgaW5kZXggaXMgbm90IGluZmluaXR5IC0gaXQncyBhIG1hdGNoIVxuICAgICAgICAgICAgaWYoc2V0dGluZ0tleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gc2V0dGluZ3MgJHt2YXJpYWJsZU5hbWV9IC0gJHtub2RlS2V5fWApO1xuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gYHZhciAke25vZGVLZXl9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZS5zZXR0aW5nc1tzZXR0aW5nS2V5XS52YWx1ZX0gfTtcXG5gO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBOT1QgQU5ZIE9GIFRIUkVFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIElmIG5vdCBvbmUgb2YgcHJldmlvdXMgdGhyZWUsIGFsZXJ0IHVzZXIuXG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IGBhbGVydChcIkNvdWxkbid0IGZpbmQgZ2VuZXJhdG9yIHZhcmlhYmxlIGluIHRoZSBpbnB1dHMsIGdlbmVyYXRvcnMgb3Igc2V0dGluZ3MhICR7bm9kZUtleX0gLSAke3Zhck5hbWV9XCIpO1xcbmA7XG4gICAgICAgIH0gZWxzZSBpZihjb2RlW3NdLnR5cGUgPT09IFwibWF0aFwiIHx8IGNvZGVbc10udHlwZSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgY29kZVtzXS5jb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gc2F2ZUlucHV0VmFyaWFibGUobm9kZTogU2lnbmFsTm9kZSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBub2RlS2V5OiBzdHJpbmcsIHNldHRpbmdLZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGU6IHN0cmluZztcbiAgICBjb25zdCBjb25uZWN0b3JFbmQgPSB7XG4gICAgICAgIG5vZGVJZDogbm9kZUtleSxcbiAgICAgICAgc2V0dGluZ0lkOiBzZXR0aW5nS2V5XG4gICAgfVxuICAgIFxuICAgIGxldCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCBjb25uZWN0b3JFbmQpO1xuXG4gICAgLy8gY29uc29sZS5sb2coYFRyYWNpbmcgYmFjayB0aGUgaW5wdXQ6ICR7bm9kZUtleX06JHtzZXR0aW5nS2V5fSAtPiAke290aGVyTm9kZUlkfToke290aGVyU2V0dGluZ0lkfWApO1xuICAgIFxuICAgIC8vIElmIG5vZGUgaXMgY29ubmVjdGVkXG4gICAgaWYob3RoZXJOb2RlSWQgJiYgb3RoZXJTZXR0aW5nSWQpIHtcbiAgICAgICAgLy8gU2F2ZSBcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0aW1lKX07XFxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTYXZlIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtub2RlLmlucHV0c1tpbmRleF0uZGVmYXVsdH19O1xcbmBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gaXNJbnB1dCAobm9kZTogU2lnbmFsTm9kZSwgc2V0dGluZ0tleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBDaGVjayBpZiB2YXJpYWJsZSBpcyBpbiBpbnB1dHNcbiAgICBpZihub2RlLmlucHV0cykge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZS5pbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIElmIHZhcmlhYmxlIGlzIHRoZSBpbnB1dCwgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIGlmKG5vZGUuaW5wdXRzW2ldLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW5maW5pdHk7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5nZW5lcmF0b3JzKSB7XG4gICAgICAgIGlmKG5vZGUuZ2VuZXJhdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IobGV0IGcgPSAwOyBnIDwgbm9kZS5nZW5lcmF0b3JzLmxlbmd0aDsgZysrKSB7XG4gICAgICAgICAgICAgICAgaWYobm9kZS5nZW5lcmF0b3JzW2ddLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cblxuZnVuY3Rpb24gaXNTZXR0aW5nKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5zZXR0aW5ncykge1xuICAgICAgICBmb3IobGV0IHMgPSAwOyBzIDwgbm9kZS5zZXR0aW5ncy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gc2V0dGluZ0tleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEluZmluaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hJbnB1dHMoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKToge3VuY2FsY3VsYXRlZE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgdG91Y2hOb2RlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgbmV3Q29sbGVjdGlvbjogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgbmV3VG91Y2hDb2xsZWN0aW9uOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuXG4gICAgZm9yKGxldCBuIGluIGFsbE5vZGVzKSB7XG4gICAgICAgIGlmKG4uc3Vic3RyKDAsIDEwKSA9PT0gXCJ0b3VjaElucHV0XCIpIHtcbiAgICAgICAgICAgIG5ld1RvdWNoQ29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IG5ld0NvbGxlY3Rpb24sXG4gICAgICAgIHRvdWNoTm9kZXM6IG5ld1RvdWNoQ29sbGVjdGlvblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lKHN0YXJ0OiBudW1iZXIsIHN0b3A6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgbGV0IGUgPSBcImxldCB0ID0gXCI7XG5cbiAgICBlKz0gYChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgciA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAke3N0YXJ0fTsgaSA8ICR7c3RvcH07IGkrPSR7c3RlcH0pIHtcbiAgICAgICAgICAgIHIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9KSgpO2BcblxuICAgIHJldHVybiBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzKG5vZGVzOiBOb2RlQ29sbGVjdGlvbik6IHN0cmluZyB7XG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBpIGluIG5vZGVzKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblxuICAgICAgICBsZXQgc2Vuc2l0aXZpdHk6IE5vZGVTZXR0aW5nc1NoYXBlO1xuICAgICAgICBsZXQgYXR0YWNoZWRTY29wZTogTm9kZVNldHRpbmdzU2hhcGU7XG4gICAgICAgIGxldCBvZmZzZXRYOiBOb2RlU2V0dGluZ3NTaGFwZTtcbiAgICAgICAgbGV0IG9mZnNldFk6IE5vZGVTZXR0aW5nc1NoYXBlO1xuXG4gICAgICAgIC8vIFNlcGFyYXRlIHNldHRpbmdzXG4gICAgICAgIGZvcihsZXQgcyBpbiBub2RlLnNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIlNlbnNpdGl2aXR5XCIpIHtcbiAgICAgICAgICAgICAgICBzZW5zaXRpdml0eSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJBdHRhY2hlZCBTY29wZVwiKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoZWRTY29wZSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJPZmZzZXQgWFwiKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJPZmZzZXQgWVwiKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb3VjaCBub2RlIGlzIG5vdCBjb3JyZWN0bHkgZm9ybWF0dGVkLlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgb2Zmc2V0U2NyaXB0ID0gYGlmKCFkaWRBdHRhY2gke2l9KSB7XG4gICAgICAgICAgICBsZXQgb25Ib2xkRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWT0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNoZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaGVuZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoJHtvZmZzZXRYLnZhbHVlID09IFwidHJ1ZVwifSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFhEYXRhICs9IGUubW92ZW1lbnRYKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoJHtvZmZzZXRZLnZhbHVlID09IFwidHJ1ZVwifSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFlEYXRhICs9IGUubW92ZW1lbnRZKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudFggPSB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25YIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50WSA9IHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgLSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCR7b2Zmc2V0WC52YWx1ZSA9PSBcInRydWVcIn0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRYRGF0YSArPSBtb3ZlbWVudFgqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZigke29mZnNldFkudmFsdWUgPT0gXCJ0cnVlXCJ9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAke2l9T2Zmc2V0WURhdGEgKz0gbW92ZW1lbnRZKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke2F0dGFjaGVkU2NvcGUudmFsdWV9XCIpLm9ubW91c2Vkb3duID0gb25Ib2xkRG93bjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHthdHRhY2hlZFNjb3BlLnZhbHVlfVwiKS5vbnRvdWNoc3RhcnQgPSBvbkhvbGREb3duO1xuXG4gICAgICAgICAgICBkaWRBdHRhY2gke2l9T2Zmc2V0WCA9IHRydWU7XG4gICAgICAgICAgICBkaWRBdHRhY2gke2l9T2Zmc2V0WSA9IHRydWU7XG4gICAgICAgIH1cXG5gO1xuXG4gICAgICAgIGZvcihsZXQgbyBpbiBub2RlLm91dHB1dHMpIHtcbiAgICAgICAgICAgIGUgKz0gYHZhciAke2l9JHtub2RlLm91dHB1dHNbb10udGl0bGV9RGF0YSA9IDE7XFxuYDtcbiAgICAgICAgICAgIGUgKz0gYHZhciBkaWRBdHRhY2gke2l9ID0gZmFsc2U7XFxuYDtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlICs9IGB2YXIgJHtpfSR7bm9kZS5vdXRwdXRzW29dLnRpdGxlfSA9IGZ1bmN0aW9uKHRpbWUpIHsgcmV0dXJuICR7aX0ke25vZGUub3V0cHV0c1tvXS50aXRsZX1EYXRhIH07XFxuYFxuICAgICAgICB9XG5cbiAgICAgICAgZSArPSBvZmZzZXRTY3JpcHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGU7XG59IiwiLy8gQXMgYSByZW1pbmRlcjpcbi8vIE9uZSBpdGVtIGluIGFuIGFycmF5IG9mIHRva2VucyBjYW4gb25seSBiZSBhbiBvYmplY3QgYW5kIG9ubHkgaGF2ZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbi8vICogdHlwZSAgICAgICAgICAgLSBmb3IgZXZlcnkgdG9rZW5cbi8vICogdmFsdWUgICAgICAgICAgLSBmb3IgZXZlcnkgdG9rZW5cbi8vICogY29kZSAgLSBmb3Igc2NvcGVzIChtYXRoL3JlZ3VsYXIpXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlblRvSnMgKG5vZGVJZCwgdmFyaWFibGVOYW1lLCBqc29uVG9rZW5zKSB7XG4gICAgbGV0IGV4ZWN1dGFibGVTdHJpbmcgPSBgdmFyICR7bm9kZUlkfSR7dmFyaWFibGVOYW1lfSA9IGZ1bmN0aW9uKHRpbWUpIHsgcmV0dXJuIGA7XG4gICAgXG4gICAgZXhlY3V0YWJsZVN0cmluZyArPSBjYWxjdWxhdGVDb2RlKFsuLi5qc29uVG9rZW5zXSlcblxuICAgIHJldHVybiBleGVjdXRhYmxlU3RyaW5nICsgXCJ9O1xcblwiO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVDb2RlKGpzb24pIHtcbiAgICBsZXQgZXhlY3V0YWJsZVN0cmluZyA9IFwiXCI7XG5cbiAgICBpZihqc29uID09IG51bGwpIHJldHVybiBcIlwiO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gVmFyaWFibGVzIGZvciBjb252ZW5pZW5jZVxuICAgICAgICBjb25zdCB0b2tlbiA9IGpzb25baV07XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0b2tlbi50eXBlO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRva2VuLnZhbHVlO1xuXG4gICAgICAgIC8vIEFjdHVhbCBsb2dpY1xuICAgICAgICBpZih0eXBlICE9IFwic2NvcGVcIiAmJiB0eXBlICE9IFwibWF0aFwiKSB7XG4gICAgICAgICAgICAvLyBPbmUgb2YgdGhlIGJhc2ljIHR5cGVzXG5cbiAgICAgICAgICAgIGlmKHZhbHVlID09PSAnUEknKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguUElcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ2YXJcIiAmJiB2YWx1ZSAhPT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGAke3ZhbHVlfSh0aW1lKWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJtYXRoXCIpIHtcbiAgICAgICAgICAgIC8vIE1hdGggZnVuY3Rpb25cblxuICAgICAgICAgICAgaWYodmFsdWUgPT09IFwic2luXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmdW5jdGlvbnMsIHJlY3Vyc2V2bHkgZ2VuZXJhdGUgc3RyaW5nIGZyb20gdGhlIGNvZGUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguc2luKFwiO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKTtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBub3Qgc3VwcG9ydGVkIGZ1bmN0aW9uLCB0aHJvdyBlcnJvciB0byB0aGUgY29uc29sZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbnN1cHBvcnRlZCBtYXRoIGZ1bmN0aW9uICEhIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlZ3VsYXIgc2NvcGVcblxuICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIihcIiArIGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSkgKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBleGVjdXRhYmxlU3RyaW5nO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHN0eWxlcyA9IGBcbiAgICAjc2lnbmFscy1lbWJlZGRpbmctY29udGFpbmVyLCAjc2lnbmFscy12aWV3cywgLnNpZ25hbHMtY2FudmFzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICNzaWduYWxzLXZpZXdzIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgfVxuYFxuXG5leHBvcnQgZnVuY3Rpb24ganN4RG9tIChub2Rlcykge1xuICAgIGxldCBvdXRwdXROb2RlcyA9IFtdO1xuXG4gICAgLy8gR2V0IGFsbCBraW5kcyBvZiBvdXRwdXQgbm9kZXNcbiAgICBmb3IobGV0IGtleSBpbiBub2Rlcykge1xuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2Rlc1trZXldO1xuXG4gICAgICAgIGlmKFN0cmluZyhrZXkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5pZCA9IGtleTtcbiAgICAgICAgICAgIG91dHB1dE5vZGVzLnB1c2goY3VycmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2cob3V0cHV0Tm9kZXMpO1xuXG4gICAgLy8gR2VuZXJhdGUgRHluYW1pYyBTdHVmZlxuICAgIGNvbnN0IGNhbnZhc0pzeCA9IG91dHB1dE5vZGVzLmxlbmd0aCA+IDAgPyBvdXRwdXROb2Rlcy5tYXAobm9kZSA9PiB7XG4gICAgICAgIHJldHVybiAoPGNhbnZhcyBjbGFzc05hbWU9XCJzaWduYWxzLWNhbnZhc1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake25vZGUuaWR9YH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25vZGUuaWR9XG4gICAgICAgID48L2NhbnZhcz4pXG4gICAgfSkgOiBudWxsO1xuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSBudWxsO1xuXG4gICAgLy8gR2VuZXJhdGUgRmluYWwgSlNYXG4gICAgY29uc3QgU2lnbmFsVmlld3MgPSBjYW52YXNKc3ggP1xuICAgICAgICAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2lnbmFscy12aWV3c1wiIHN0eWxlPXt7Z3JpZFRlbXBsYXRlUm93czogYHJlcGVhdCgke291dHB1dE5vZGVzLmxlbmd0aH0sIDFmcilgfX0+XG4gICAgICAgICAgICAgICAge2NhbnZhc0pzeH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgIGNvbnN0IFNldHRpbmdzSnN4ID0gc2V0dGluZ3MgP1xuICAgICAgICAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2lnbmFscy1zZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgIHtzZXR0aW5nc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9e1wic2lnbmFscy1lbWJlZGRpbmctY29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgPHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgICAgIHtTZXR0aW5nc0pzeH1cbiAgICAgICAgICAgIHtTaWduYWxWaWV3c31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=