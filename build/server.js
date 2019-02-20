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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2dlbmVyYXRvclRva2VuaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVuZGVyZXIvc2NvcGVGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3Rva2VuVG9Kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3ZpZXdlckRvbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiZGF0ZU5vdyIsIlN0cmluZyIsIkRhdGUiLCJ0b1N0cmluZyIsInN1YnN0ciIsInVzZSIsInN0YXRpYyIsIl9fZGlybmFtZSIsImdldCIsInJlcSIsInJlcyIsInByb2plY3RJZCIsInBhcmFtcyIsImlkIiwiY29uc29sZSIsImxvZyIsImZzIiwicmVhZEZpbGUiLCJwYXRoIiwicmVzb2x2ZSIsImVyciIsImRhdGEiLCJlcnJvciIsInN0YXR1cyIsInNlbmQiLCJyZXBsYWNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlc3RNb2RlbCIsInNldEhlYWRlciIsImVuZCIsInBvc3QiLCJib2R5UGFyc2VyIiwianNvbiIsInJlcUpzb24iLCJib2R5IiwicmVuZGVyZWRTdHJpbmciLCJyZW5kZXJTaWduYWxzIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwicmVuZGVySHRtbCIsInJlcXVlc3RKc29uIiwiYWxsTm9kZXMiLCJub2RlcyIsImFsbENvbm5lY3Rpb25zIiwiY29ubmVjdG9ycyIsImpzeCIsImpzeERvbSIsImpzeFN0cmluZyIsInJlbmRlclRvU3RhdGljTWFya3VwIiwidGltZSIsInNjcmlwdEFycmF5Iiwic2NyaXB0R2VuZXJhdG9yIiwiY29tcG9zZWRTY3JpcHRTdHJpbmciLCJzIiwidGltZUVuZCIsInNjcmlwdHMiLCJzY3JpcHRlZEh0bWwiLCJzbGljZSIsImxlbmd0aCIsImZpeFNjb3BlcyIsImdlbiIsImciLCJmb3VuZExlZnRCb3JkZXIiLCJmb3VuZFJpZ2h0Qm9yZGVyIiwianVzdEhpdE9wZW5pbmdCcmFja2V0IiwianVzdEhpdENsb3NpbmdCcmFja2V0IiwibGVmdCIsInJpZ2h0IiwiaSIsIm9uZSIsInR3byIsInRocmVlIiwidG9rZW5Ub0pzIiwibm9kZUlkIiwidmFyaWFibGVOYW1lIiwianNvblRva2VucyIsImV4ZWN1dGFibGVTdHJpbmciLCJjYWxjdWxhdGVDb2RlIiwidG9rZW4iLCJ0eXBlIiwidmFsdWUiLCJjb2RlIiwic3R5bGVzIiwib3V0cHV0Tm9kZXMiLCJrZXkiLCJjdXJyZW50Tm9kZSIsInB1c2giLCJjYW52YXNKc3giLCJtYXAiLCJub2RlIiwic2V0dGluZ3MiLCJTaWduYWxWaWV3cyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJTZXR0aW5nc0pzeCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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QixNQUF4QjtBQUFqQjtBQUEvQixLQUNLNkIsU0FETCxDQUZxQixHQUtyQixJQUxSO0FBT0EsTUFBTU0sV0FBVyxHQUFHSCxRQUFRLEdBRXBCO0FBQUssTUFBRSxFQUFDO0FBQVIsS0FDS0EsUUFETCxDQUZvQixHQUtwQixJQUxSO0FBT0EsU0FDSTtBQUFLLE1BQUUsRUFBRTtBQUFULEtBQ0ksMEVBQVFSLE1BQVIsQ0FESixFQUVLVyxXQUZMLEVBR0tGLFdBSEwsQ0FESjtBQU9ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREQsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsIi8vIEJhc2UgSW1wb3J0c1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcydcblxuLy8gU2VydmVyIFNldHVwXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbi8vIE1pZGRsZXdhcmVcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuXG4vLyBEYXRhIFBhcnNpbmdcbmltcG9ydCB7XG4gICAgcmVuZGVyU2lnbmFsc1xufSBmcm9tICcuL3JlbmRlcmVyJ1xuaW1wb3J0IHRlc3RNb2RlbCBmcm9tICcuL3Rlc3RNb2RlbC5qc29uJ1xuXG5jb25zdCBkYXRlTm93ID0gKCkgPT4gU3RyaW5nKERhdGUoKS50b1N0cmluZygpKS5zdWJzdHIoMCwgMjQpICsgXCJcXHR8IFxcdFwiXG5cbi8vIFN0YXRpYyBmaWxlc1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyAnL3B1YmxpYycpKVxuXG4vLyAtLS0gUk9VVEVTIC0tLVxuYXBwLmdldCgnL2VkaXRvci86aWQnLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnNvbGUubG9nKGRhdGVOb3coKSArIFwiIFJlcXVlc3RlZCB0byBlZGl0IHByb2plY3QgXCIgKyBwcm9qZWN0SWQpO1xuICAgIFxuICAgIGZzLnJlYWRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3B1YmxpYy9lZGl0b3IvZWRpdG9yLmh0bWwnKSwgJ3V0ZjgnLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdBbiBlcnJvciBvY2N1cnJlZCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGl0bGVcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgIFwiPHRpdGxlPjwvdGl0bGU+XCIsXG4gICAgICAgICAgICBgPHRpdGxlPiR7cHJvamVjdElkfTwvdGl0bGU+YFxuICAgICAgICApXG5cbiAgICAgICAgLy8gU2V0IGRhdGFcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgICc8c2NyaXB0IGlkPVwiZWRpdG9yLWRhdGFcIj48L3NjcmlwdD4nLFxuICAgICAgICAgICAgYDxzY3JpcHQgaWQ9XCJlZGl0b3ItZGF0YVwiPmRvY3VtZW50LmVkaXRvckRhdGEgPSAke0pTT04uc3RyaW5naWZ5KHRlc3RNb2RlbCl9PC9zY3JpcHQ+YFxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgICAgICByZXMuc2VuZChkYXRhKTtcbiAgICB9KVxufSk7XG5cbmFwcC5nZXQoJy9wcm9qZWN0cycsIChyZXEsIHJlcykgPT4ge1xuICAgIC8vIFRPRE86IHJldHVybiBwYWdlIHdpdGggYWxsIHRoZSBwcm9qZWN0cyBmb3IgdGhlIGN1cnJlbnQgdXNlclxuICAgIHJlcy5lbmQoXCJwcm9qZWN0c1wiKTtcbn0pO1xuXG4vLyBKU09OIFBhcnNlclxuYXBwLnBvc3QoJy9yZW5kZXInLCBib2R5UGFyc2VyLmpzb24oKSk7XG5cbmFwcC5wb3N0KCcvcmVuZGVyJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0ZU5vdygpICsgXCJQT1NUIC9SRU5ERVIgcm91dGUgcmVxdWVzdGVkXCIpO1xuXG4gICAgY29uc3QgcmVxSnNvbiA9IHJlcS5wYXJhbXMuYm9keTtcbiAgICBjb25zdCByZW5kZXJlZFN0cmluZyA9IHJlbmRlclNpZ25hbHMocmVxSnNvbik7XG5cbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbicpO1xuICAgIHJlcy5lbmQocmVuZGVyZWRTdHJpbmcpO1xufSk7XG5cbi8vIERlZmF1bHQgdGVzdCB2aXN1YWxpc2F0aW9uXG5hcHAuZ2V0KCcvcmVuZGVyJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0ZU5vdygpICsgXCIgR0VUIC9SRU5ERVIgcm91dGUgcmVxdWVzdGVkXCIpO1xuXG4gICAgY29uc3QgcmVuZGVyZWRTdHJpbmcgPSByZW5kZXJTaWduYWxzKHRlc3RNb2RlbCk7XG5cbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgcmVzLmVuZChyZW5kZXJlZFN0cmluZyk7XG59KVxuXG5hcHAuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgcmVzLmVuZChcIjx1bD48bGk+PGEgaHJlZj0nL3Byb2plY3RzJz5wcm9qZWN0czwvYT48L2xpPjxsaT48YSBocmVmPScvcmVuZGVyJz5yZW5kZXI8L2E+PC9saT48bGk+PGEgaHJlZj0nL2VkaXRvci9wcm9qZWN0aWQnPmVkaXRvcjwvYT48L2xpPjwvdWw+XCIpO1xufSlcblxuLy8gUnVuIHNlcnZlclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiXFxuTGlzdGVuaW5nIG9uOiBodHRwczovL2xvY2FsaG9zdDpcIitwb3J0K1wiXFxuXCIpO1xufSk7IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHZW5lcmF0b3IgQ29kZSBUb2tlbmlzZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdlbmVyYXRvciBjb2RlIHRva2VuaXNlciBmdW5jdGlvbiBpcyBhbGdvcml0aG1pY2FsbHkgc2ltcGxlLCBidXQgcHJvZHVjZXMgYSBnb29kIHJlcHJlc2VudGF0aW9uXG4vLyBvZiB0aGUgcHJvdmlkZWQgY29kZSBpbiBKYXZhU2NyaXB0IE9iamVjdCBmb3JtYXQgKHdoaWNoIGNhbiB0aGVuIGJlIGVhc2lseSBjb252ZXJ0ZWQgdG8gSlNPTixcbi8vIHNpbmNlIGl0J3MgcHJldHR5IG11Y2ggdGhlIHNhbWUgdGhpbmcpLlxuLy8gV2hlbiBnb2luZyB0aHJvdWdoIHRoZSBjb2RlLCBpdCBjYW4gZGV0ZWN0IHNldmVyYWwgdHlwZXMgb2Ygb3BlcmF0b3JzLiBUaGVzZSBhcmU6XG4vLyAgICAgKiBWYXJpYWJsZVxuLy8gICAgICogQ29uc3RhbnQgTnVtYmVyXG4vLyAgICAgKiBNYXRoIE9wZXJhdG9yXG4vLyAgICAgKiBNYXRoIEZ1bmN0aW9uXG4vLyAgICAgKiBSZWd1bGFyIHNjb3BlIC0gZXZlcnl0aGluZyBpbnNpZGUgYnJhY2tldHMgXCIoXCIgYW5kIFwiKVwiIHNob3VsZCBiZSBleGVjdXRlZCBmaXJzdFxuLy8gVGhlIFZhcmlhYmxlcywgTnVtYmVycyBhbmQgTWF0aCBvcGVyYXRvcnMgYXJlIGp1c3QgYWRkZWQgYXMgYW4gb2JqZWN0IHdpdGggYXBwcm9wcmlhdGUgdHlwZSBhbmRcbi8vIHZhbHVlIHRha2VuIGZyb20gdGhlIGNvZGUuXG5cbi8vIFRPRE86XG4vLyAqIFNhbmV0aXNlIHZhcmlhYmxlIG5hbWVzICEhISBKYXZhc2NyaXB0IGluamVjdGlvbiBpcyBwb3NzaWJsZSBub3cgdGhyb3VuIHZhcmlhYmxlIG5hbWVzLi4uXG5cbmltcG9ydCB7Zml4U2NvcGVzfSBmcm9tICcuL3Njb3BlRml4ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemVHZW5lcmF0b3IgKGdlbjogc3RyaW5nLCBub2RlSWQ6IHN0cmluZyk6IEdlbmVyYXRvclNlZ21lbnRbXSB7XG4gICAgLy8gR2V0IHZhbHVlIG9mIGdlbmVyYXRvciBjb2RlIGFuZCBzdG9yZSBpbiBnXG4gICAgbGV0IGcgPSBTdHJpbmcoZ2VuKTtcbiAgICBnID0gU3RyaW5nKGZpeFNjb3BlcyhnKSk7XG5cbiAgICAvLyBQYXJzZWQgR2VuZXJhdG9yIENvZGVcbiAgICBsZXQgcGdlbjogR2VuZXJhdG9yU2VnbWVudFtdID0gW107XG4gICAgXG4gICAgLy8gVGhlIHN0YWNrXG4gICAgbGV0IHN0YWNrOiBHZW5lcmF0b3JTZWdtZW50W10gPSBbXTtcblxuICAgIC8vIENvZGUgdG9rZW5pc2VyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9wU3RhY2tPYmplY3Q6IEdlbmVyYXRvclNlZ21lbnQgPSBzdGFjay5sZW5ndGggPiAwID9cbiAgICAgICAgICAgIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdIDogbnVsbDtcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gVkFSSUFCTEUgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcIltcIikge1xuICAgICAgICAgICAgLy8gTW92ZSB0byBuZXh0IGNoYXJhY3RlclxuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgLy8gSW5pdGlhbGlzZSBlbXB0eSB2YXJpYWJsZVxuICAgICAgICAgICAgbGV0IHZhcmlhYmxlID0gXCJcIjtcblxuICAgICAgICAgICAgLy8gU2NhbiB1bnRpbCB2YXJpYWJsZSBzY29wZSBpcyBjbG9zZWRcbiAgICAgICAgICAgIHdoaWxlKGdbaV0gIT09IFwiXVwiKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgKz0gZ1tpXTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHZhcmlhYmxlID09PSBcInRpbWVcIiB8fCB2YXJpYWJsZSA9PT0gXCJQSVwiKSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZyA/XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gbm9kZUlkICsgdmFyaWFibGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInZhclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YXJpYWJsZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBudWxsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2godmFyaWFibGVTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGdlbi5wdXNoKHZhcmlhYmxlU25pcHBldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gTUFUSCBPUEVSQVRPUiAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmIChnW2ldID09PSBcIipcIiB8fCBnW2ldID09PSBcIi9cIiB8fCBnW2ldID09PSBcIitcIiB8fCBnW2ldID09PSBcIi1cIikge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3JTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZ1tpXSxcbiAgICAgICAgICAgICAgICBjb2RlOiBudWxsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBzdGFja1t0b3BJbmRleF0uY29kZS5wdXNoKG9wZXJhdG9yU25pcHBldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2gob3BlcmF0b3JTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBNQVRIIEZVTkNUSU9OIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCJzXCIpIHtcbiAgICAgICAgICAgIC8vIE1hdGhlbWF0aWNhbCBmb3JtdWxhcyBhcmUgY29kZWQgaW4gdGhyZWUgbGV0dGVyc1xuICAgICAgICAgICAgbGV0IG5leHRUaHJlZSA9IFN0cmluZyhnW2ldICsgZ1tpKzFdICsgZ1tpKzJdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbmV4dCB0aHJlZSBjaGFycyBhcmUgb25lIG9mIFxuICAgICAgICAgICAgaWYobmV4dFRocmVlID09PSBcInNpblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRqdXN0IGluZGV4IHRvIG5leHQgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgaSArPSAzO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VhcmNoIGZvciBvcGVuaW5nIGJyYWNrZXRzXG4gICAgICAgICAgICAgICAgd2hpbGUoZ1tpXSAhPT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPj0gZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0aHJvdyBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRVJST1IgUkVBU09OOiBzaG91bGQgcHJvdmlkZSBicmFja2V0cyBmb3IgbWF0aCBvcGVyYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJzaG91bGQgcHJvdmlkZSBicmFja2V0cyBmb3IgbWF0aCBvcGVyYXRvcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHByb3ZpZGVkIHNwYWNlIG9yIGEgY2hhcmFjdGVyIGFmdGVyIHRocmVlIG1hdGggY2hhcnNcbiAgICAgICAgICAgICAgICAvLyBpZiAoZ1tpKzFdID09PSBcIihcIikgaSsrO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0aFNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWF0aFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV4dFRocmVlLFxuICAgICAgICAgICAgICAgICAgICBjb2RlOiBbXVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrVG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLnB1c2gobWF0aFNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjb3BlVG9wSW5kZXggPSBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGVbc2NvcGVUb3BJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgcGdlbi5wdXNoKG1hdGhTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGdlbltwZ2VuLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLy8gQ29udGludWUgcGFyc2luZyBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gUkVHVUxBUiBTQ09QRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAvLyBCZWdpbiByZWd1bGFyIHNjb3BlXG4gICAgICAgICAgICBjb25zdCBzY29wZVNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzY29wZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvZGU6IFtdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrVG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUucHVzaChzY29wZVNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVUb3BJbmRleCA9IHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGVbc2NvcGVUb3BJbmRleF1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2goc2NvcGVTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHBnZW5bcGdlbi5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBFTkQgQU5ZIFNDT1BFIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCIpXCIgfHwgZy5jaGFyQXQoaSkgPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAvLyBFbmQgU2NvcGVcblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdG9wIGl0ZW0gZnJvbSBzdGFjayBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgY2xvc2VkIHNjb3BlIHRoYXQgd2Fzbid0IG9wZW5lZFxuICAgICAgICAgICAgICAgIC8vIFRPRE86ICAgICAgICAgICAgdGhyb3cgRVJST1JcbiAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046ICAgIG5vbiBleGlzdGVudCBzY29wZSB3YXMgY2xvc2VkXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vbiBleGlzdGVudCBzY29wZSB3YXMgY2xvc2VkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE5VQk1FUiAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGxldCBtYXliZU51bWJlciA9IFN0cmluZyhwYXJzZUludChnW2ldKSk7XG5cbiAgICAgICAgaWYobWF5YmVOdW1iZXIgIT09IFN0cmluZyhOYU4pICYmIHR5cGVvZiBwYXJzZUludChtYXliZU51bWJlcikgPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgbGV0IG51bWJlclN0YXJ0ID0gaTtcblxuICAgICAgICAgICAgLy8gSXMgY3VycmVudCBjaGFyIGEgbnVtYmVyIG9yIGEgZG90P1xuICAgICAgICAgICAgY29uc3QgaXNOdW1iZXIgPSAoKSA9PiAobWF5YmVOdW1iZXIgIT09IFN0cmluZyhOYU4pICYmIHR5cGVvZiBwYXJzZUludChtYXliZU51bWJlcikgPT09IFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgaXNEb3QgPSAoaW5kZXg6IG51bWJlcikgPT4gU3RyaW5nKGdbaW5kZXhdKSA9PT0gXCIuXCI7XG5cbiAgICAgICAgICAgIC8vIFdhcyB0aGVyZSBhIGRvdCBpbiBjdXJyZW50IHNlcXVlbmNlIG9mIG51bWJlcnM/XG4gICAgICAgICAgICBsZXQgd2FzRG90QWxyZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aGlsZShpc051bWJlcigpIHx8IGlzRG90KGkpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgY3VycmVudCBjaGFyIGlzIGEgZG90XG4gICAgICAgICAgICAgICAgaWYoaXNEb3QoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYod2FzRG90QWxyZWFkeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgdGhlcmUgd2FzIGEgZG90IGFscmVhZHksIHRocm93IGVycm9yLCBzaW5jZSBpdCBkb2Vzbid0IG1ha2Ugc2Vuc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRocm93IEVSUk9SXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046IGludmFsaWQgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIHN5bnRheFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm90LCBzZXQgd2FzIGRvdCBhbHJlYWR5IHRvIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhc0RvdEFscmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTW92ZSB0byBuZXh0IGluZGV4IGFuZCBcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgbWF5YmVOdW1iZXIgPSBTdHJpbmcocGFyc2VJbnQoZ1tpXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXN1bHRpbmdOdW1iZXIgPSBnLnNsaWNlKG51bWJlclN0YXJ0LCBpKTtcblxuICAgICAgICAgICAgY29uc3QgbnVtYmVyU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHRpbmdOdW1iZXIsXG4gICAgICAgICAgICAgICAgY29kZTogbnVsbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2gobnVtYmVyU25pcHBldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2gobnVtYmVyU25pcHBldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGktLTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIFJldHVybiBwYXJzZWQgZ2VuZXJhdG9yIGFycmF5XG4gICAgcmV0dXJuIHBnZW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXJhdG9yU2VnbWVudCB7XG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHZhbHVlOiAoc3RyaW5nfG51bWJlciksXG4gICAgY29kZTogR2VuZXJhdG9yU2VnbWVudFtdXG59IiwiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcsIHJlbmRlclRvU3RhdGljTWFya3VwIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5cbmltcG9ydCB7IHNjcmlwdEdlbmVyYXRvciB9IGZyb20gJy4vc2NyaXB0R2VuZXJhdG9yLnRzJztcbmltcG9ydCB7IGpzeERvbSB9IGZyb20gJy4vdmlld2VyRG9tJztcblxuZnVuY3Rpb24gcmVuZGVySHRtbCAocmVxdWVzdEpzb24pIHtcbiAgICAvLyBTZXBhcmF0ZSBub2RlcyBmcm9tIGNvbm5lY3RvcnNcbiAgICBjb25zdCBhbGxOb2RlcyA9IHsuLi5yZXF1ZXN0SnNvbi5ub2Rlc307XG4gICAgY29uc3QgYWxsQ29ubmVjdGlvbnMgPSBbLi4ucmVxdWVzdEpzb24uY29ubmVjdG9yc107XG5cbiAgICAvLyBSZW5kZXIgSFRNTFxuICAgIGNvbnN0IGpzeCA9IGpzeERvbShhbGxOb2Rlcyk7XG4gICAgY29uc3QganN4U3RyaW5nID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoanN4KTtcblxuICAgIC8vIEdlbmVyYXRlIFNjcmlwdHNcbiAgICBjb25zb2xlLnRpbWUoXCJTY3JpcHQgUGFyc2VyXCIpO1xuICAgIGNvbnN0IHNjcmlwdEFycmF5ID0gc2NyaXB0R2VuZXJhdG9yKGFsbE5vZGVzLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgbGV0IGNvbXBvc2VkU2NyaXB0U3RyaW5nID0gXCJcIjtcbiAgICBmb3IobGV0IHMgaW4gc2NyaXB0QXJyYXkpIHtcbiAgICAgICAgaWYocyA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgY29tcG9zZWRTY3JpcHRTdHJpbmcgKz0gc2NyaXB0QXJyYXlbc107XG4gICAgfVxuICAgIGNvbnNvbGUudGltZUVuZChcIlNjcmlwdCBQYXJzZXJcIik7XG4gICAgbGV0IHNjcmlwdHMgPSBgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9DaGFydC5qcy8yLjcuMy9DaGFydC5idW5kbGUubWluLmpzXCI+PC9zY3JpcHQ+XFxuYDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0PiR7c2NyaXB0QXJyYXlbMF19PC9zY3JpcHQ+YDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0PiR7Y29tcG9zZWRTY3JpcHRTdHJpbmd9PC9zY3JpcHQ+YDtcbiAgICBcbiAgICAvLyBDb21iaW5lIGZvcm1lciByZXN1bHRzXG4gICAgY29uc3Qgc2NyaXB0ZWRIdG1sID0ganN4U3RyaW5nLnNsaWNlKDAsIGpzeFN0cmluZy5sZW5ndGggLSA2KSArIHNjcmlwdHMgKyBcIjwvZGl2PlwiO1xuICAgIFxuICAgIC8vIFJldHVybiBnZW5lcmF0ZWQgSFRNTCBhcyBhIHN0cmluZ1xuICAgIHJldHVybiBzY3JpcHRlZEh0bWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaWduYWxzIChyZXF1ZXN0SnNvbikge1xuICAgIHJldHVybiByZW5kZXJIdG1sKHJlcXVlc3RKc29uKTtcbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU2NvcGUgRml4ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTY29wZSBGaXhlciBmdW5jdGlvbiBpcyByZWxhdGVkIHRvIHRoZSBnZW4gdmFyaWFibGUgcGFyc2luZyBhbGdvcml0aG0uIFNpbmNlIHRoZSB0b2tlbml6ZXIgXG4vLyBmdW5jdGlvbiBkb2VzIG5vdCB0YWtlIGludG8gYWNjb3VuZCB0aGF0IG1hdGggb3BlcmF0b3JzICogKG11bHRpcGxpY2F0aW9uKSBhbmQgLyAoZGl2aXNpb24pXG4vLyBhcmUgZXhlY3V0ZWQgZmlyc3QsIHdlIG5lZWQgdG8gcHV0IHNjb3BlcyBhcm91bmQgYml0cyB0aGF0IHNob3VsZCBleGVjdXRlZCBmaXJzdC4gVGhpcyBpcyBcbi8vIG5vdCBmaW5hbCBzb2x1dGlvbiwgc2luY2UgaXQgZG9lcyBub3QgdGFrZSBmb2xsb3dpbmcgc2l0dWF0aW9ucyBpbnRvIGFjY291bnQ6XG4vLyAgICAgKiB0aGVyZSBpcyBhIG1pbnVzIG9yIHBsdXMgc2lnbiBiZWZvcmUgYSBudW1iZXI6IC0xKlt2YXJpYWJsZV1cbi8vICAgICAgICAgLSBJbiB0aGlzIGNhc2UgaXQgd291bGQgcmV0dXJuIHRoaXM6IC0oMSpbdmFyaWFibGVdKS4gVGhpcyBkb2VzIG5vdCBhcHBseSBzY29wZXNcbi8vICAgICAgICAgICBjb3JyZWN0bHkuXG4vL1xuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQWxnb3JpdGhtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgYWxnb3JpdGhtIG1ha2VzIG9ubHkgb25lIGdlbmVyYWwgc3dlZXAgdGhyb3VnaCB0aGUgc3RyaW5nLiBUaGlzIG1lYW5zIHRoYXQgaWYgbm8gXG4vLyBzY29wZXMgYXJlIG5lZWRlZCwgZXhlY3V0aW9uIHRpbWUgd2lsbCBiZSBtaW5pbWFsLCBpLmUuIGl0IHdpbGwgdGFrZSBhcyBtdWNoIHRpbWUgYXMgaXRcbi8vIHRha2VzIHRvIGxvb3AgdGhyb3VnaCB0aGUgc3RyaW5nIG9uY2UgYW5kIGNoZWNrIGlmIHRoZSBjaGFyYWN0ZXIgaXMgKiBvciAvLiBJbiB0aGUgY2FzZSBvZlxuLy8gMzQgY2hhcmFjdGVyIHN0cmluZywgdGhpcyBmdW5jdGlvbiBpcyBleGVjdXRlZCBpbiBhYm91bnQgMC4zLTAuNSBtcy4gV2l0aCBhbiBhdmVyYWdlIG9mIFxuLy8gYXJvdW5kIDAuNG1zIGFuZCAzNCBjaGFyYWN0ZXJzLCB3ZSBjYW4gYXBwcm94aW1hdGUgdGhhdCBvbmUgY2hhcmFjdGVyIHRha2VzIDAuNCAvIDM0ID0gMS42NlxuLy8gbWljcm8gc2Vjb25kcy4gVGhpcyB3YXMgdGVzdGVkIG9uIDIuN0doeiBJbnRlbCBDb3JlIGk3LiBTbyBpdCB0b29rIGFyb3VuZCA0NDgyIGNsb2NrIGN5Y2xlc1xuLy8gdG8gZXhlY3V0ZSB0aGF0IGFjY29yZGluZyB0byBmb2xsb3dpbmcgZXF1YXRpb246IDEuNjZ1cyAvICgxIC8gMi43RykgPSA0NDgyLiBUaGlzIGNvdWxkIGJlIFxuLy8gZHJhbWF0aWNhbGx5IGltcHJvdmVkIGJ5IHVzaW5nIGN1c3RvbSBtYWRlIE5vZGUuanMgYysrIHBsdWdpbiB3aGljaCBhbGxvd3MgdG8gcnVuIGMrK1xuLy8gYmluYXJpZXMgZnJvbSBOb2RlLmpzIG9yIGJ5IHdyaXRpbmcgdGhlIHdob2xlIHJlbmRlcmVyIHNlcnZlciBpbiBhIGNvbXBpbGVkIGxhbmd1YWdlIGxpa2UgXG4vLyBweXRob24sIGMjLCBnbywgb3Igc3dpZnQuIFRoZXJlIGlzIGFsc28gYSBwb3NzaWJpbGl0eSB0byB3cml0ZSBpdCBpbiBSdXN0IGxhbmd1YWdlLCBDIG9yXG4vLyBDKysuIFRoaXMgd291bGQgYWxsb3cgdG8gY29tcGlsZSBqdXN0IHRoaXMgZnVuY3Rpb24gdG8gV2ViQXNzZW1ibHkgYW5kIHJ1biBpdCBpbiBOb2RlLmpzIGF0IFxuLy8gY29tcGlsZWQgc3BlZWQuIElmIGZ1cnRoZXIgZGV2ZWxvcG1lbnQgd2lsbCBiZSBkb25lIGFuZCB0aGVyZSB3aWxsIGJlIGEgZGVjaXNpb24gdG8gIHN3aXRjaFxuLy8gdG8gYSBjb21waWxlZCBsYW5ndWFnZSBzZXJ2ZXIsIEkgd291bGQgc3VnZ2VzdCB1c2luZyBHTyBsYW5ndWFnZSBkdWUgdG8gaXRzIHNpbXBsaWNpdHkuXG4vL1xuLy8gQWxnaXRobSB3b3JrcyBpbiBhIGZvbGxvd2luZyBmYXNoaW9uOlxuLy8gICAxLiBNYWtlIHN1cmUgcGFzc2VkIHRleHQgaXMgb2YgYSBTdHJpbmcgdHlwZVxuLy8gICAyLiBTZXQgZmxhZ3MgdG8gZmFsc2U6XG4vLyAgICAgICAtIGJvcmRlciBmbGFnczogaW5kaWNhdGUgaWYgb24gbGVmdCBvciByaWdodCwgYSArIG9yIC0gc2lnbiB3YXMgZm91bmRcbi8vICAgICAgIC0gYnJhY2tldCBmbGFnczogaW5kaWNhdGUgaWYgd2hpbGUgc3dlZXBpbmcgbGVmdCBhbmQgcmlnaHQgYSBzY29wZSB3YXMgZm91bmRcbi8vICAgMy4gSW5pdGlhdGUgdmFyaWFibGVzIGZvciBsZWZ0IGFuZCByaWdodCBzd2VlcGVyc1xuLy8gICA0LiBMb29wIHVudGlsIHdob2xlIHN0cmluZyB3YXMgc2Nhbm5lZCwgaW4gdGhlIGxvb3A6XG4vLyAgICAgICAxLiBJZiBjdXJyZW50IGNoYXJhY3RlciBpcyBcIipcIlwiIG9yIFwiL1wiLCBjb250aW51ZSwgb3RoZXJ3aXNlIGluY3JlYXNlIGluZGV4IGJ5IG9uZSBhbmQgY2hlY2sgYWdhaW5cbi8vICAgICAgIDIuIFNjYW4gdG8gdGhlIGxlZnQgZnJvbSB0aGUgY3VycmVudCBpbmRleC5cbi8vICAgICAgIDMuIElmIHJhbiBvdXQgb2YgYm91bmRzIG9mIHRoZSBzdHJpbmcsIHN0b3Agc2Nhbm5pbmcgbGVmdCwgbW92ZSB0byBzdGVwIDdcbi8vICAgICAgIDQuIElmIGhpdCBjbG9zaW5nIGJyYWNrZXQsIHNldCBjbG9zaW5nIGJyYWNrZXQgZmxhZyB0byB0cnVlLlxuLy8gICAgICAgNS4gSWYgaGl0IG9wZW5pbmcgYnJhY2tldCwgY2hlY2sgaWYgY2xvc2luZyBicmFja2V0IHdhcyBoaXQgYmVmb3JlOlxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBoaXQsIGNvbnRpbnVlIHNjYW5uaW5nIGFuZCBzZXQgY2xvc2luZyBicmFja2V0IGZsYWcgdG8gZmFsc2UgYWdhaW4uXG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIE5PVCBoaXQsIHN0b3Agc2Nhbm5pbmcgYW5kIG1vdmUgdG8gc3RlcCA3XG4vLyAgICAgICA2LiBJZiBcIitcIiBvciBcIi1cIiBzaWduIHdhcyBoaXQsIGNoZWNrIGlmIGNsb3NpbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZywgc2luY2UgaXQgbWVhbnMgdGhhdCB0aGUgKyBvciAtIHNpZ24gaXMgaW4gYW5vdGhlciBzY29wZVxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nLCBtb3ZlIHJpZ2h0IGJ5IG9uZSBzdGVwIGFuZCByZXNldCBsZWZ0IGJvcmRlciBmbGFnXG4vLyAgICAgICA3LiBTY2FuIHRvIHRoZSByaWdodCBmcm9tIHRoZSBjdXJyZW50IGluZGV4LlxuLy8gICAgICAgOC4gSWYgcmFuIG91dCBvZiBib3VuZHMgb2YgdGhlIHN0cmluZywgc3RvcCBzY2FubmluZyBsZWZ0LCBtb3ZlIHRvIHN0ZXAgMTJcbi8vICAgICAgIDkuIElmIGhpdCBvcGVuaW5nIGJyYWNrZXQsIHNldCBvcGVuaW5nIGJyYWNrZXQgZmxhZyB0byB0cnVlLlxuLy8gICAgICAgMTAuIElmIGhpdCBjbG9zaW5nIGJyYWNrZXQsIGNoZWNrIGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZyBhbmQgc2V0IG9wZW5pbmcgYnJhY2tldCBmbGFnIHRvIGZhbHNlIGFnYWluLlxuLy8gICAgICAgICAgIC0gSWYgb3BlbmluZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCBtb3ZlIHRvIHN0ZXAgMTJcbi8vICAgICAgIDExLiBJZiBcIitcIiBvciBcIi1cIiBzaWduIHdhcyBoaXQsIGNoZWNrIGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZywgc2luY2UgaXQgbWVhbnMgdGhhdCB0aGUgKyBvciAtIHNpZ24gaXMgaW4gYW5vdGhlciBzY29wZVxuLy8gICAgICAgICAgIC0gSWYgb3BlbmluZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCByZXNldCBsZWZ0IGJvcmRlciBmbGFnXG5cbmV4cG9ydCBmdW5jdGlvbiBmaXhTY29wZXMoZ2VuKSB7XG4gICAgbGV0IGcgPSBTdHJpbmcoZ2VuKTtcblxuICAgIC8vIFZhcmlhYmxlIGFyZSB0YWtlbiBvdXRzaWRlIG9mIGZvciBsb29wLCB0byBpbmNyZWFzZSBwZXJmb3JtYW5jZS5cbiAgICAvLyBJbiB0aGlzIHdheSwgdmFyaWFibGVzIGFyZSBqdXN0IHJld3JpdHRlbiBpbiB0aGUgc2FtZSBtZW1vcnlcbiAgICAvLyBsb2NhdGlvbiBpbnN0ZWFkIG9mIGNyZWF0aW5nIG5ldyB2YXJpYWJsZSBldmVyeSB0aW1lLlxuICAgIGxldCBmb3VuZExlZnRCb3JkZXIgPSBmYWxzZTtcbiAgICBsZXQgZm91bmRSaWdodEJvcmRlciA9IGZhbHNlO1xuXG4gICAgbGV0IGp1c3RIaXRPcGVuaW5nQnJhY2tldCA9IGZhbHNlO1xuICAgIGxldCBqdXN0SGl0Q2xvc2luZ0JyYWNrZXQgPSBmYWxzZTtcblxuICAgIGxldCBsZWZ0O1xuICAgIGxldCByaWdodDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZ1tpXSA9PT0gXCIqXCIgfHwgZ1tpXSA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgIC8vIFNjYW4gbGVmdFxuICAgICAgICAgICAgZm9yIChsZWZ0ID0gaTsgIWZvdW5kTGVmdEJvcmRlcjsgbGVmdC0tKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhpdCB0aGUgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgbGVmdCBzdHJpbmcgd2FsbFxuICAgICAgICAgICAgICAgIGlmIChsZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCBzZXQgZm91bmRMZWZ0Qm9yZGVyIHZhcmlhYmxlIHRvIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIGlmIGJvdGggc2lkZXMgYXJlIGJyYWNrZXRzIG9yIG91dGVyIHdhbGxzIG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdHJpbmcsIG5ldyBicmFja2V0cyBzaG91bGQgbm90IGJlIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFdoZW4gaXQgaGl0cyBvcGVuaW5nIGJyYWNrZXQsIGl0IGNoZWNrcyBpZiBpdCBoaXQgY2xvc2luZyBicmFja2V0IGJlZm9yZVxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdENsb3NpbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0SGl0Q2xvc2luZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYXJrcyB0aGF0IGl0IGhpdCBjbG9zaW5nIGJyYWNrZXQsIHNvIHRoYXQgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgbGF0ZXIsXG4gICAgICAgICAgICAgICAgLy8gaXQga25vd3MgdGhhdCBpdCBzaG91bGRuJ3QgXG4gICAgICAgICAgICAgICAgaWYgKGdbbGVmdF0gPT09IFwiKVwiKSBqdXN0SGl0Q2xvc2luZ0JyYWNrZXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gRXhpdCBzY2FubmluZyBsb29wIGlmIGhpdCBwbHVzIG9yIG1pbnVzXG4gICAgICAgICAgICAgICAgLy8gQWxzbywgbW92ZSByaWdodCwgc28gdGhhdCBicmFja2VzIGlzIGluc2VydGVkIGFmdGVyICsgb3IgLSBzaWduXG4gICAgICAgICAgICAgICAgaWYgKGdbbGVmdF0gPT09IFwiK1wiIHx8IGdbbGVmdF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0Q2xvc2luZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRMZWZ0Qm9yZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTY2FuIHJpZ2h0XG4gICAgICAgICAgICBmb3IgKHJpZ2h0ID0gaTsgIWZvdW5kUmlnaHRCb3JkZXI7IHJpZ2h0KyspIHtcbiAgICAgICAgICAgICAgICAvLyBFeGl0IHRoZSBzY2FubmluZyBsb29wIGlmIGhpdCByaWdodCBzdHJpbmcgd2FsbCBvciBjbG9zaW5nIGJyYWNrZXRcbiAgICAgICAgICAgICAgICBpZiAocmlnaHQgPj0gZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCBzZXQgZm91bmRSaWdodEJvcmRlciB2YXJpYWJsZSB0byB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpZiBib3RoIHNpZGVzIGFyZSBicmFja2V0cyBvciBvdXRlciB3YWxscyBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RyaW5nLCBuZXcgYnJhY2tldHMgc2hvdWxkIG5vdCBiZSBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGhpdHMgY2xvc2luZyBicmFja2V0LCBpdCBjaGVja3MgaWYgaXQgaGl0IG9wZW5pbmcgYnJhY2tldCBiZWZvcmVcbiAgICAgICAgICAgICAgICBpZiAoZ1tyaWdodF0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0T3BlbmluZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RIaXRPcGVuaW5nQnJhY2tldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1hcmtzIHRoYXQgaXQgaGl0IGNsb3NpbmcgYnJhY2tldCwgc28gdGhhdCBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBsYXRlcixcbiAgICAgICAgICAgICAgICAvLyBpdCBrbm93cyB0aGF0IGl0IHNob3VsZG4ndCBcbiAgICAgICAgICAgICAgICBpZiAoZ1tyaWdodF0gPT09IFwiKFwiKSBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIitcIiB8fCBnW3JpZ2h0XSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRPcGVuaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QsIGl0J3MgdGltZSB0byBpbnNlcnQgYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFJpZ2h0Qm9yZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgb24gb25lIG9mIHRoZSBzaWRlcyB0aGVyZSBpcyArIG9yIC0gc2lnblxuICAgICAgICAgICAgaWYgKGZvdW5kTGVmdEJvcmRlciB8fCBmb3VuZFJpZ2h0Qm9yZGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gU2xpY2Ugb3JpZ2luYWwgc3RyaW5nIGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb25zXG4gICAgICAgICAgICAgICAgbGV0IG9uZSA9IGcuc2xpY2UoMCwgbGVmdCk7XG4gICAgICAgICAgICAgICAgbGV0IHR3byA9IGcuc2xpY2UobGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIGxldCB0aHJlZSA9IGcuc2xpY2UocmlnaHQsIGcubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIC8vIEluc2VydCBicmFja2V0cyBiZXR3ZWVuIGZvcm1lciB0aHJlZSBzdHJpbmdzIHRvIGZvcm1cbiAgICAgICAgICAgICAgICAvLyBuZXcgc3RyaW5nIHdpdGggaW5zZXJ0ZWQgYnJhY2tldHNcbiAgICAgICAgICAgICAgICBnID0gb25lICsgXCIoXCIgKyB0d28gKyBcIilcIiArIHRocmVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXNldCBib3JkZXIgdmFyaWFibGVzXG4gICAgICAgICAgICBmb3VuZExlZnRCb3JkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvdW5kUmlnaHRCb3JkZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBnO1xufSIsImltcG9ydCB7XG4gICAgZ2V0VW5jYWxjdWxhdGVkTm9kZXMsXG4gICAgZ2VuZXJhdGVDb25uZWN0aW9uRGljdGlvbmFyeSxcbiAgICBvYmplY3RTaXplLFxuICAgIHdhc0NhbGN1bGF0ZWQsXG4gICAgYWxsSW5wdXRzQ2FsY3VsYXRlZCxcbiAgICBjYWxjdWxhdGVPdXRwdXQsXG4gICAgZ2V0VG91Y2hJbnB1dHMsXG4gICAgaW5pdFRpbWUsXG4gICAgZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzLFxuICAgIGdldE90aGVyU2lkZU9mQ29ubmVjdG9yXG59IGZyb20gJy4vc2NyaXB0R2VuZXJhdG9yRnVuY3Rpb25zJztcblxuaW1wb3J0IHsgdG9rZW5pemVHZW5lcmF0b3IgfSBmcm9tICcuL2dlbmVyYXRvclRva2VuaXplcic7XG5cbmltcG9ydCBVZ2xpZnlKUyBmcm9tIFwidWdsaWZ5LWpzXCJcblxuXG5leHBvcnQgZnVuY3Rpb24gc2NyaXB0R2VuZXJhdG9yKGFsbE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdKSB7XG4gICAgLy8gRXhlY3V0YWJsZSB0byBzdG9yZSBnZW5lcmF0ZWQgamF2YXNjcmlwdCBjb2RlLiBBbnkgaW5pdGlhbGlzYXRpb24gY29kZSBzaG91bGQgYmUgaGVyZS5cbiAgICBsZXQgZXhlQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IGV4ZWN1dGFibGUgPSBcInZhciBncmFwaHMgPSB7fTtcIjtcblxuICAgIC8vIFNldHVwIHRpbWVcbiAgICBleGVjdXRhYmxlICs9IGluaXRUaW1lKC0xLCAxLCAwLjAwMSk7XG5cblxuXG5cbiAgICAvLyBDYWxjdWxhdGVkIG5vZGVzIGhhdmUgZm9sbG93aW5nIHNoYXBlOiBcIm5vZGVJZDpvdXRwdXRJZFwiXG4gICAgbGV0IGNhbGN1bGF0ZWROb2Rlczogc3RyaW5nW10gPSBbXTtcblxuICAgIC8vIFN0YXRpc3RpY3Mgb2JqZWN0XG4gICAgbGV0IHN0YXRpc3RpY3MgPSB7XG4gICAgICAgIGxvb3BDb3VudGVyOiAwLFxuICAgICAgICBpbml0aWFsVG90YWxOb2Rlczogb2JqZWN0U2l6ZShhbGxOb2RlcyksXG4gICAgICAgIGluaXRpYWxUb3RhbENvbm5lY3RvcnM6IGFsbENvbm5lY3Rpb25zLmxlbmd0aFxuICAgIH07XG5cbiAgICAvLyBTZXBhcmF0ZXMgdW5jYWxjdWxhdGVkIG5vZGVzIGFuZCBzY29wZXMgYXQgdGhlIHN0YXJ0LlxuICAgIGxldCB7dW5jYWxjdWxhdGVkTm9kZXMsIGFsbFNjb3Blc30gPSBnZXRVbmNhbGN1bGF0ZWROb2RlcyhhbGxOb2Rlcyk7XG5cbiAgICAvLyBTZXBhcmF0ZSB0b3VjaCBub2RlcyBmb3JtIHJlZ3VsYXIgbm9kZXNcbiAgICBsZXQgdG91Y2hOb2Rlc1NlcGFyYXRlZCA9IGdldFRvdWNoSW5wdXRzKHVuY2FsY3VsYXRlZE5vZGVzKTtcblxuICAgIHVuY2FsY3VsYXRlZE5vZGVzID0gdG91Y2hOb2Rlc1NlcGFyYXRlZC51bmNhbGN1bGF0ZWROb2RlcztcblxuICAgIC8vIERlYWwgd2l0aCB0b3VjaCBDb250cm9sc1xuICAgIGxldCB0b3VjaE5vZGVzID0gdG91Y2hOb2Rlc1NlcGFyYXRlZC50b3VjaE5vZGVzO1xuXG4gICAgZXhlY3V0YWJsZSArPSBnZW5lcmF0ZVRvdWNoQ29udHJvbGxlcnModG91Y2hOb2Rlcyk7XG4gICAgXG4gICAgZm9yKGxldCB0IGluIHRvdWNoTm9kZXMpIHtcbiAgICAgICAgZm9yKGxldCBvIGluIHRvdWNoTm9kZXNbdF0ub3V0cHV0cykge1xuICAgICAgICAgICAgY2FsY3VsYXRlZE5vZGVzLnB1c2goYCR7dH06JHt0b3VjaE5vZGVzW3RdLm91dHB1dHNbb10udGl0bGV9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbm5lY3Rpb24gRGljdGlvbmFyeSBjb250YWlucyBjb25uZWN0aW9ucyBpbiBrZXk6IHZhbHVlIGZvcm1hdCwgd2hlcmVcbiAgICAvLyBib3RoIGNvbnRhaW4gbm9kZUlkIGFuZCBzZXR0aW5nSWQgYXMgc3RyaW5ncyBzZXBhcmF0ZWQgYnkgYSBjb2xvbi5cbiAgICBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnkgPSBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5KGFsbENvbm5lY3Rpb25zKTtcblxuXG5cbiAgICAvLyBHZW5lcmFsIHJ1bGVzIGZvciBhbGdvcml0aG0gd3JpdGluZzpcbiAgICAvLyAqIHVzZSBhcyBtYW55IGZ1bmN0aW9ucyBhcyBwb3NzaWJsZSAoaW4gcGVyZm9ybWFuY2UgYm91bmRzKVxuICAgIC8vICogXG5cbiAgICAvLyAwLiBMb29wIHRocm91Z2ggdW5jYWxjdWxhdGVkIG5vZGVzIGFuZCBmaW5kIHNjb3Blcy4gU2NvcGVzIGRvIG5vdCBoYXZlIG91dHB1dHMsIHNvIG5vIG5lZWQgdG8gZmluZCBpbnB1dHMuXG4gICAgICAgIC8vIDAuMCBEbyBpdCBpbiBhIGZ1bmN0aW9uP1xuXG4gICAgLy8gMS4gTG9vcCB1bnRpbCBhbGwgbm9kZXMgYXJlIGNhbGN1bGF0ZWRcbiAgICAvLyB8ICAgMS4gQ2hlY2sgaWYgbm9kZSB3YXMgY2FsY3VsYXRlZCBiZWZvcmUsIGlmIHllcyBnbyB0byBuZXh0IG5vZGUuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgMi4gSWYgd2FzIG5vdCBjYWxjdWxhdGVkOlxuICAgIC8vIHwgICB8ICAgMS4gQ2hlY2sgaWYgYWxsIGNvbm5lY3RlZCBpbnB1dHMgYXJlIGNvbm5lY3RlZCB0byB0aGUgY2FsY3VsYXRlZCBub2RlcywgaWYgbm90IC0gZ28gdG8gbmV4dCBub2RlLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIHwgICAyLiBJZiB5ZXMsIHNhdmUgYWxsIHVuY29ubmVjdGVkIGlucHV0cyAodmFsdWUgZnJvbSBkZWZhdWx0IHZhbHVlKS4gKGZ1bmN0aW9uIGZvciBlYWNoIHNhdmUpXG4gICAgLy8gfCAgIHwgICAzLiBDaGVjayBpZiBvdXRwdXQgaXMgcG9pbnRpbmcgdG8gYSBnZW5lcmF0b3IuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgfCAgIDQuIElmIHllcywgcGFyc2UgZ2VuZXJhdG9yXG4gICAgLy8gfCAgIHwgICB8ICAgMS4gU2NhbiBnZW5lcmF0b3IgYW5kIHNhdmUgdmFyaWFibGVzXG4gICAgLy8gfCAgIHwgICB8ICAgMi4gSWYgdmFyaWFibGUgaXMgYSBnZW5lcmF0b3IgZ28gdG8gc3RlcCAxLjIuNFxuICAgIC8vIHwgICB8ICAgfCAgIDMuIExvb3AgdW50aWwgYWxsIGdlbmVyYXRvcnMgd2VyZSBwYXJzZWRcbiAgICAvLyB8ICAgfCAgIHwgLS0tLS0tLS0tLS0gSW4gZm9sbG93aW5nLCBpbnB1dHMgYXJlIGNoZWNrZWQgZmlyc3Qgc2luY2Ugc2V0dGluZyBjYW4gYmUgYW4gaW5wdXQgLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHwgICB8ICAgNS4gQ2hlY2sgaWYgb3V0cHV0IGlzIHBvaW50aW5nIHRvIGFuIGlucHV0LCBpZiB5ZXMgYXNzaWduIGlucHV0IHZhcmlhYmxlIHRvIHRoZSBvdXRwdXQgdmFyaWFibGVcbiAgICAvLyB8ICAgfCAgIDYuIENoZWNrIGlmIG91dHB1dCBpcyBwb2ludGluZyB0byBhIHNldHRpbmcsIGlmIHllcyBhc3NpZ24gY29uc3RhbnQgdG8gdGhlIHNldHRpbmdcbiAgICAvLyAyLiBGb3IgZWFjaCBzY29wZTpcbiAgICAvLyB8ICAgMS4gR2V0IGFsbCBpbnB1dHMgYW5kIHNhdmUgdGhlbSBpbiB2YXJpYWJsZXMgKGFzc3VtZWQgdG8gYmUgY2FsY3VsYXRlZCBzaW5jZSB0ZXJtaW5hdGlvbiBjb25kaXRpb24gZnJvbSBzdGVwIDEgaXMgYmFzZWQgb24gYWxsIG5vZGVzIGJlaW5nIGNhbGN1bGF0ZWQuKVxuICAgIC8vIHwgICAyLiBQYXJzZSBmaXJzdCBnZW5lcmF0b3IgYW5kIGdlbmVyYXRlIHNjb3BlIG91dHB1dCB2YXJpYWJsZSAobWFraW5nIHN1cmUgdGhhdCBhbGwgdmFyaWFibGVzIGZyb20gZ2VuZXJhdG9yIHdlcmUgc2F2ZWQgYmVmb3JlaGFuZClcbiAgICAvLyB8ICAgMy4gR2VuZXJhdGUgYW4gYXJyYXkgb2Ygb3V0cHV0IGRhdGEgYmFzZWQgb24gZ2VuZXJhbCAob3IgY29ubmVjdGVkKSB0aW1lIGFycmF5IGFuZCBzYXZlIGl0IGludG8gYSB2YXJpYWJsZVxuICAgIC8vIHwgICA0LiBDcmVhdGUgcmVkcmF3IGZ1bmN0aW9uLCBpbnNpZGUgdGhhdCBmdW5jdGlvbjpcbiAgICAvLyB8ICAgfCAgIDEuIEZpbmQgYXBwcm9wcmlhdGUgY2FudmFzIG5vZGUgaW4gdGhlIGRvbVxuICAgIC8vIHwgICB8ICAgMi4gR2V0IGNvbnRleHRcbiAgICAvLyB8ICAgfCAgIDMuIFJlcG9wdWxhdGUgZ3JhcGggYXJyYXkgd2l0aCBuZXcgZ3JhcGhzLlxuICAgIC8vIHwgICA1LiBDcmVhdGUgdXBkYXRlRGF0YSBmdW5jdGlvbiwgaW5zaWRlIHRoYXQgZnVuY3Rpb246XG4gICAgLy8gfCAgIHwgICAxLiBMb29wIHRocm91Z2ggZ3JhcGggYXJyYXkgYW5kIHVwZGF0ZSBncmFwaHMgd2l0aCBuZXcgZGF0YS5cblxuXG4gICAgLy8gMS4gTG9vcCB1bnRpbCBhbGwgbm9kZXMgYXJlIGNhbGN1bGF0ZWQgYW5kIGNvdW50IG51bWJlciBvZiBpdGVyYXRpb25zIGZvciBzdGF0aXN0aWNzXG4gICAgZm9yKHN0YXRpc3RpY3MubG9vcENvdW50ZXIgPSAwOyBvYmplY3RTaXplKHVuY2FsY3VsYXRlZE5vZGVzKSA+IDA7IHN0YXRpc3RpY3MubG9vcENvdW50ZXIrKykge1xuICAgICAgICAvLyAxLjAgTG9vcCB0aHJvdWdoIGFsbCB1bmNhbGN1bGF0ZWQgbm9kZXNcbiAgICAgICAgZm9yKGxldCBub2RlS2V5IGluIHVuY2FsY3VsYXRlZE5vZGVzKSB7XG4gICAgICAgICAgICAvLyBTYXZlIGN1cnJlbnQgbm9kZSBpbnRvIGEgY29uc3RhbnRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gdW5jYWxjdWxhdGVkTm9kZXNbbm9kZUtleV07XG5cbiAgICAgICAgICAgIC8vIEdvIHRvIG5leHQgbm9kZSBpZiBub3QgYWxsIGNvbm5lY3RlZCBpbnB1dHMgd2VyZSBjYWxjdWxhdGVkIGFscmVhZHlcbiAgICAgICAgICAgIGlmKCFhbGxJbnB1dHNDYWxjdWxhdGVkKG5vZGVLZXksIGN1cnJlbnROb2RlLmlucHV0cywgYWxsQ29ubmVjdGlvbnMsIGNhbGN1bGF0ZWROb2RlcykpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0czogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGV2ZXJ5IG91dHB1dCBvZiB0aGUgbm9kZSB0byBjYWxjdWxhdGUgdGhlbVxuICAgICAgICAgICAgZm9yKGxldCBvID0gMDsgbyA8IGN1cnJlbnROb2RlLm91dHB1dHMubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRLZXkgPSBjdXJyZW50Tm9kZS5vdXRwdXRzW29dLnRpdGxlO1xuICAgICAgICAgICAgICAgIC8vIElmIGN1cnJlbnQgb3V0cHV0IHdhcyBjYWxjdWxhdGVkIGFscmVhZHksIHNraXAgdG8gbmV4dCBvbmVcbiAgICAgICAgICAgICAgICBpZih3YXNDYWxjdWxhdGVkKGNhbGN1bGF0ZWROb2Rlcywgbm9kZUtleSwgb3V0cHV0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZUNhbGN1bGF0ZWRPdXRwdXRzLnB1c2goYCR7bm9kZUtleX06JHtvdXRwdXRLZXl9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIG5vdCwgY2FsY3VsYXRlIGl0IGFuZCBhcHBlbmQgdG8gdGhlIGV4ZWN1dGFibGUgdGV4dC5cbiAgICAgICAgICAgICAgICBsZXQgeyBleGUsIHdhc1N1Y2Nlc3NmdWwgfSA9IGNhbGN1bGF0ZU91dHB1dChub2RlS2V5LCBvdXRwdXRLZXksIGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYod2FzU3VjY2Vzc2Z1bCkge1xuICAgICAgICAgICAgICAgICAgICBleGVjdXRhYmxlICs9IGV4ZTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkTm9kZXMucHVzaChgJHtub2RlS2V5fToke291dHB1dEtleX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBDb3VsZCBub3QgZ2VuZXJhdGUgb3V0cHV0IGNvZGU6ICR7bm9kZUtleX0gLSAke291dHB1dEtleX0gfCBzY3JpcHRHZW5lcmF0b3IudHNgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0cy5sZW5ndGggPT09IGN1cnJlbnROb2RlLm91dHB1dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gTG9vcCB0aHJvdWdoIGFsbCBzY29wZXMgYW5kIGRyYXcgZ3JhcGhzXG5cbiAgICBleGVBcnJheS5wdXNoKGV4ZWN1dGFibGUpO1xuICAgIGV4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZXhlY3V0YWJsZSArPSBcImZ1bmN0aW9uIHVwZGF0ZSgpIHtcXG5cIjtcblxuICAgIGZvcihsZXQgcyBpbiBhbGxTY29wZXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gYWxsU2NvcGVzW3NdO1xuXG4gICAgICAgIC8vIGNvbnN0IG91dHB1dEdlbmVyYXRvciA9IGN1cnJlbnRTY29wZS5nZW5lcmF0b3JzWzBdO1xuXG4gICAgICAgIC8vIGNvbnN0IG91dHB1dFRva2VucyA9IHRva2VuaXplR2VuZXJhdG9yKG91dHB1dEdlbmVyYXRvci52YWx1ZSwgcyk7XG5cbiAgICAgICAgY29uc3QgeyBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQgfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7bm9kZUlkOiBzLCBzZXR0aW5nSWQ6IFwic2lnbmFsXCJ9KTtcblxuICAgICAgICBleGVjdXRhYmxlICs9IGBcbiAgICAgICAgICAgIGlmKGdyYXBocy4ke3N9KSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge25ld0RhdGEucHVzaCgke290aGVyTm9kZUlkfSR7b3RoZXJTZXR0aW5nSWR9KHRbaV0pKTt9XG4gICAgICAgICAgICAgICAgZ3JhcGhzLiR7c30uZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgICAgICAgICBncmFwaHMuJHtzfS51cGRhdGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhc05vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7c31cIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgdmlld1NpemUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogY2FudmFzTm9kZS5wYXJlbnROb2RlLm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXNOb2RlLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICAgICAgICAgIHZhciB3ID0gdmlld1NpemUueDtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHZpZXdTaXplLnkgLyAke29iamVjdFNpemUoYWxsU2NvcGVzKX07XG5cbiAgICAgICAgICAgICAgICBjYW52YXNOb2RlLndpZHRoID0gdztcbiAgICAgICAgICAgICAgICBjYW52YXNOb2RlLmhlaWdodCA9IGg7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKCR7b3RoZXJOb2RlSWR9JHtvdGhlclNldHRpbmdJZH0odFtpXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7bGFiZWxzOiB0Lm1hcCh0aSA9PiB0aS50b0ZpeGVkKDEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaWduYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDI1NSwgMTIwLCAxMzIpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbnNpb246IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBwZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRSYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyUmFkaXVzOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRvb2x0aXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9JHtjdXJyZW50U2NvcGUuc2V0dGluZ3NbMF0udmFsdWUgPT0gXCJ0cnVlXCIgPyAnJyA6IGAsIHNjYWxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAwLjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dLCB5QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAwLjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgIGdyYXBocy4ke3N9ID0gbXlDaGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgICBleGVBcnJheS5wdXNoKGV4ZWN1dGFibGUpO1xuICAgICAgICBleGVjdXRhYmxlID0gXCJcIjtcbiAgICB9XG5cbiAgICBleGVjdXRhYmxlICs9IFwifTtcXG5cIlxuICAgIGV4ZWN1dGFibGUgKz0gXCJ1cGRhdGUoKTtcIlxuXG4gICAgZXhlQXJyYXkucHVzaChleGVjdXRhYmxlKTtcbiAgICBleGVjdXRhYmxlID0gXCJcIjtcblxuICAgIC8vIHJldHVybiBVZ2xpZnlKUy5taW5pZnkoZXhlY3V0YWJsZSk7XG5cbiAgICByZXR1cm4gZXhlQXJyYXk7XG59XG4iLCJpbXBvcnQgeyB0b2tlbml6ZUdlbmVyYXRvciwgR2VuZXJhdG9yU2VnbWVudCB9IGZyb20gJy4vZ2VuZXJhdG9yVG9rZW5pemVyJztcbmltcG9ydCB7IHRva2VuVG9KcyB9IGZyb20gJy4vdG9rZW5Ub0pzJztcblxuLy8gR2V0IGFsbCBub2RlcyB0aGF0IGFyZSBub3Qgc2NvcGVzLCBhbmQgc2F2ZSBzY29wZXMgaW50byB0aGVpciBvd24gY29sbGVjdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuY2FsY3VsYXRlZE5vZGVzIChhbGxOb2RlczogTm9kZUNvbGxlY3Rpb24pIDoge3VuY2FsY3VsYXRlZE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgYWxsU2NvcGVzOiBOb2RlQ29sbGVjdGlvbn0ge1xuICAgIGxldCB1bmNhbGN1bGF0ZWQ6IE5vZGVDb2xsZWN0aW9uID0ge307XG4gICAgbGV0IHNjb3BlczogTm9kZUNvbGxlY3Rpb24gPSB7fTtcblxuICAgIGZvcihsZXQgaSBpbiBhbGxOb2Rlcykge1xuICAgICAgICBpZihTdHJpbmcoaSkuc3Vic3RyKDAsIDUpID09PSBcInNjb3BlXCIpIHtcbiAgICAgICAgICAgIHNjb3Blc1tpXSA9IGFsbE5vZGVzW2ldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdW5jYWxjdWxhdGVkW2ldID0gYWxsTm9kZXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1bmNhbGN1bGF0ZWROb2RlczogdW5jYWxjdWxhdGVkLFxuICAgICAgICBhbGxTY29wZXM6IHNjb3Blc1xuICAgIH07XG59XG5cbi8vIEdlbmVyYXRlIGNvbm5lY3Rpb24gZGljdGlvbmFyeVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnkgKGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHtbY29ubmVjdG9yU3RhcnQ6IHN0cmluZ106IHN0cmluZ30ge1xuICAgIGxldCBjb25uZWN0aW9uRGljdGlvbmFyeToge1tjb25uZWN0b3JTdGFydDogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFsbENvbm5lY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RvclN0YXJ0ID0gYWxsQ29ubmVjdGlvbnNbaV0uY29ubmVjdG9yU3RhcnQ7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RvckVuZCA9IGFsbENvbm5lY3Rpb25zW2ldLmNvbm5lY3RvckVuZDtcblxuICAgICAgICBjb25zdCBjb25uZWN0b3JTdGFydENvbWJpbmVkID0gY29ubmVjdG9yU3RhcnQubm9kZUlkICsgXCI6XCIgKyBjb25uZWN0b3JTdGFydC5zZXR0aW5nSWQ7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RvckVuZENvbWJpbmVkID0gY29ubmVjdG9yRW5kLm5vZGVJZCArIFwiOlwiICsgY29ubmVjdG9yRW5kLnNldHRpbmdJZDtcblxuICAgICAgICBjb25uZWN0aW9uRGljdGlvbmFyeVtjb25uZWN0b3JTdGFydENvbWJpbmVkXSA9IGNvbm5lY3RvckVuZENvbWJpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBjb25uZWN0aW9uRGljdGlvbmFyeTtcbn1cblxuLy8gQ2FsY3VsYXRlIG9iamVjdCBzaXplXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0U2l6ZSAob2JqOiBvYmplY3QpOiBudW1iZXIge1xuICAgIGxldCBjID0gMDtcbiAgICBmb3IobGV0IGkgaW4gb2JqKSBjKys7XG4gICAgcmV0dXJuIGMrKztcbn1cblxuLy8gQ2hlY2sgaWYgbm9kZSB3YXMgY2FsY3VsYXRlZCBhbHJlYWR5XG5leHBvcnQgZnVuY3Rpb24gd2FzQ2FsY3VsYXRlZChjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdLCBub2RlS2V5OiBzdHJpbmcsIG91dHB1dEtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNhbGN1bGF0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBTcGxpdCBzdHJpbmcgZnJvbSBjYWxjdWxhdGVkIG5vZGVzIGFycmF5IGFuZCBnZXQgbm9kZSBhbmQgb3V0cHV0IGtleXNcbiAgICAgICAgY29uc3Qgc3BsaXR0ZWQgPSBjYWxjdWxhdGVkTm9kZXNbaV0uc3BsaXQoXCI6XCIpO1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkTm9kZSA9IHNwbGl0dGVkWzBdO1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkT3V0cHV0ID0gc3BsaXR0ZWRbMV07XG5cbiAgICAgICAgaWYoY2FsY3VsYXRlZE5vZGUgPT09IG5vZGVLZXkgJiYgY2FsY3VsYXRlZE91dHB1dCA9PT0gb3V0cHV0S2V5KSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIEdldCBub2RlSWQgYW5kIHNldHRpbmdJZCBvZiB0aGUgb3RoZXIgc2lkZSBvZiB0aGUgY29ubmVjdGlvbjpcbmV4cG9ydCBmdW5jdGlvbiBnZXRPdGhlclNpZGVPZkNvbm5lY3RvcihcbiAgICBhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10sIFxuICAgIGNvbm5lY3RvcklucHV0Pzoge25vZGVJZDogc3RyaW5nLCBzZXR0aW5nSWQ6IHN0cmluZ30sXG4gICAgY29ubmVjdG9yT3V0cHV0Pzoge25vZGVJZDogc3RyaW5nLCBzZXR0aW5nSWQ6IHN0cmluZ30pOiB7b3RoZXJOb2RlSWQ6IHN0cmluZywgb3RoZXJTZXR0aW5nSWQ6IHN0cmluZ30ge1xuXG4gICAgaWYoY29ubmVjdG9ySW5wdXQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTY2FubmluZyBjb25uZWN0b3Igc3RhcnRzLi4uXCIpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29ubmVjdG9yID0gYWxsQ29ubmVjdGlvbnNbaV07XG4gICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjb25uZWN0b3Igc3RhcnRcbiAgICAgICAgICAgIGlmKGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5ub2RlSWQgPT09IGNvbm5lY3RvcklucHV0Lm5vZGVJZCkge1xuICAgICAgICAgICAgICAgIGlmKGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5zZXR0aW5nSWQgPT09IGNvbm5lY3RvcklucHV0LnNldHRpbmdJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JFbmQubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJTZXR0aW5nSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JFbmQuc2V0dGluZ0lkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbm5lY3Rvck91dHB1dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNjYW5uaW5nIGNvbm5lY3RvciBlbmRzLi4uIFwiLCBhbGxDb25uZWN0aW9ucy5sZW5ndGgpO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFsbENvbm5lY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb25uZWN0b3IgPSBhbGxDb25uZWN0aW9uc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDb21wYXJpbmcgZm9sbG93aW5nIGNvbm5lY3RvcnM6IFwiLCBjb25uZWN0b3IuY29ubmVjdG9yRW5kLCBjb25uZWN0b3JPdXRwdXQpXG4gICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjb25uZWN0b3IgZW5kXG4gICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yRW5kLm5vZGVJZCA9PT0gY29ubmVjdG9yT3V0cHV0Lm5vZGVJZCkge1xuICAgICAgICAgICAgICAgIGlmKGNvbm5lY3Rvci5jb25uZWN0b3JFbmQuc2V0dGluZ0lkID09PSBjb25uZWN0b3JPdXRwdXQuc2V0dGluZ0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlck5vZGVJZDogY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0Lm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyU2V0dGluZ0lkOiBjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvdGhlck5vZGVJZDogbnVsbCxcbiAgICAgICAgb3RoZXJTZXR0aW5nSWQ6IG51bGxcbiAgICB9XG59XG5cblxuLy8gQ2hlY2sgaWYgYWxsIGNvbm5lY3RlZCBpbnB1dHMgaW4gdGhlIG5vZGUgYXJlIGNvbm5lY3RlZCB0byB0aGUgb3V0cHV0cyB0aGF0IHdlcmUgYWxyZWFkeSBjYWxjdWxhdGVkIG9yIGFyZSBub3QgY29ubmVjdGVkXG5leHBvcnQgZnVuY3Rpb24gYWxsSW5wdXRzQ2FsY3VsYXRlZChub2RlSWQ6IHN0cmluZywgaW5wdXRzOiBOb2RlSW5wdXRTaGFwZVtdLCBhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10sIGNhbGN1bGF0ZWROb2Rlczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBsZXQgZGF0YTogYm9vbGVhbltdID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50RGF0YSA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHtvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWR9ID0gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoYWxsQ29ubmVjdGlvbnMsIG51bGwsIHtub2RlSWQ6IG5vZGVJZCwgc2V0dGluZ0lkOiBpbnB1dHNbaV0udGl0bGV9KTtcblxuICAgICAgICAvLyBJZiB0aGUgaW5wdXQgaXMgY29ubmVjdGVkXG4gICAgICAgIGlmKG90aGVyTm9kZUlkICYmIG90aGVyU2V0dGluZ0lkKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3YXMgY2FsY3VsYXRlZFxuICAgICAgICAgICAgaWYod2FzQ2FsY3VsYXRlZChjYWxjdWxhdGVkTm9kZXMsIG90aGVyTm9kZUlkLCBvdGhlclNldHRpbmdJZCkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0YSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgaW5wdXQgaXMgbm90IGNvbm5lY3RlZFxuICAgICAgICAgICAgY3VycmVudERhdGEgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5wdXNoKGN1cnJlbnREYXRhKTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGQgaW4gZGF0YSkge1xuICAgICAgICBpZighZGF0YVtkXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjYWxjdWxhdGUgc3BlY2lmaWMgb3V0cHV0IG9mIHRoZSBub2RlXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlT3V0cHV0KFxuICAgIG5vZGVJZDogc3RyaW5nLCBcbiAgICBvdXRwdXRLZXk6IHN0cmluZywgXG4gICAgY3VycmVudE5vZGU6IFNpZ25hbE5vZGUsXG4gICAgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdKTogeyBleGU6IHN0cmluZywgd2FzU3VjY2Vzc2Z1bDogYm9vbGVhbiB9IHtcbiAgICBcbiAgICBsZXQgZSA9IFwiXCI7XG5cbiAgICBjb25zdCBnZW5lcmF0b3JJZCA9IGlzR2VuZXJhdG9yKGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuXG4gICAgLy8gQ2hlY2sgaWYgb3V0cHV0IGlzIGEgZ2VuZXJhdG9yXG4gICAgaWYoZ2VuZXJhdG9ySWQgIT09IEluZmluaXR5KSB7XG4gICAgICAgIGNvbnN0IG91dHB1dEdlbmVyYXRvciA9IGN1cnJlbnROb2RlLmdlbmVyYXRvcnNbZ2VuZXJhdG9ySWRdO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIHRva2Vuc1xuICAgICAgICBjb25zdCB0b2tlbnMgPSB0b2tlbml6ZUdlbmVyYXRvcihvdXRwdXRHZW5lcmF0b3IudmFsdWUsIG5vZGVJZCk7XG5cbiAgICAgICAgLy8gU2F2ZSB2YXJpYWJsZXMgZmlyc3RcbiAgICAgICAgZSArPSBzYXZlVmFyaWFibGVzKG5vZGVJZCwgY3VycmVudE5vZGUsIHRva2VucywgYWxsQ29ubmVjdGlvbnMpO1xuXG4gICAgICAgIC8vIFNhdmUgb3V0cHV0XG4gICAgICAgIGUgKz0gdG9rZW5Ub0pzKG5vZGVJZCwgb3V0cHV0R2VuZXJhdG9yLnRpdGxlLCB0b2tlbnMpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleGU6IGUsXG4gICAgICAgICAgICB3YXNTdWNjZXNzZnVsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dElkID0gaXNJbnB1dChjdXJyZW50Tm9kZSwgb3V0cHV0S2V5KTtcblxuICAgIGlmKGlucHV0SWQgIT09IEluZmluaXR5KSB7XG4gICAgICAgIGUgKz0gc2F2ZUlucHV0VmFyaWFibGUoY3VycmVudE5vZGUsIGFsbENvbm5lY3Rpb25zLCBub2RlSWQsIG91dHB1dEtleSwgaW5wdXRJZCk7XG4gICAgICAgIGUgKz0gYHZhciAke25vZGVJZH0ke291dHB1dEtleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtub2RlSWR9JHtjdXJyZW50Tm9kZS5pbnB1dHNbaW5wdXRJZF0udGl0bGV9fTtcXG5gO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleGU6IGUsXG4gICAgICAgICAgICB3YXNTdWNjZXNzZnVsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXR0aW5nSWQgPSBpc1NldHRpbmcoY3VycmVudE5vZGUsIG91dHB1dEtleSk7XG5cbiAgICBpZihzZXR0aW5nSWQgIT09IEluZmluaXR5KSB7XG4gICAgICAgIGUgKz0gYHZhciAke25vZGVJZH0ke291dHB1dEtleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtjdXJyZW50Tm9kZS5zZXR0aW5nc1tzZXR0aW5nSWRdLnZhbHVlfX07XFxuYDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXhlOiBcIlwiLFxuICAgICAgICB3YXNTdWNjZXNzZnVsOiBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2F2ZVZhcmlhYmxlcyhub2RlS2V5OiBzdHJpbmcsIG5vZGU6IFNpZ25hbE5vZGUsIGNvZGU6IEdlbmVyYXRvclNlZ21lbnRbXSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdKTogc3RyaW5nIHtcbiAgICBsZXQgbmV3RXhlY3V0YWJsZSA9IFwiXCI7XG5cbiAgICBmb3IobGV0IHMgPSAwOyBzIDwgY29kZS5sZW5ndGg7IHMrKykge1xuICAgICAgICBpZihjb2RlW3NdLnR5cGUgPT09IFwidmFyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhck5hbWU6IHN0cmluZyA9IFN0cmluZyhjb2RlW3NdLnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhck5hbWUuc3Vic3RyKG5vZGVLZXkubGVuZ3RoLCB2YXJOYW1lLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIFNQRUNJQUwgQ0FTRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGlmKHZhck5hbWUgPT09IFwiUElcIiB8fCB2YXJOYW1lID09PSBcInRpbWVcIikgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIElOUFVUIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBpbnB1dCBpbmRleFxuICAgICAgICAgICAgbGV0IGlucHV0S2V5OiBudW1iZXIgPSBpc0lucHV0KG5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHZhcmlhYmxlIGlzIHRoZSBpbnB1dCAoaWYgbm90IGlucHV0IGl0IHdpbGwgYmUgSW5maW5pdHkpXG4gICAgICAgICAgICBpZihpbnB1dEtleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTYXZlXG4gICAgICAgICAgICAgICAgbmV3RXhlY3V0YWJsZSArPSBzYXZlSW5wdXRWYXJpYWJsZShub2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUtleSwgdmFyaWFibGVOYW1lLCBpbnB1dEtleSk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gaW5wdXRzICR7dmFyaWFibGVOYW1lfSAtICR7bm9kZUtleX1gKTtcblxuICAgICAgICAgICAgICAgIC8vIEFuZCBjb250aW51ZSB0byB0aGUgbmV4dCBzdGVwIGluIHRoZSB0b2tlbmlzZWQgZ2VuZXJhdG9yIGNvZGVcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSUYgR0VORVJBVE9SIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBnZW5lcmF0b3IgaW5kZXhcbiAgICAgICAgICAgIGxldCBnZW5lcmF0b3JLZXk6IG51bWJlciA9IGlzR2VuZXJhdG9yKG5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIElmIGdlbmVyYXRvciBpbmRleCBpcyBub3QgYW4gSW5maW5pdHksIHRoZSBzZXR0aW5nIGlzIHRoZSBnZW5lcmF0b3IsIGFuZCBzaG91bGQgYmUgcHJvY2Vzc2VkIGFzIG9uZVxuICAgICAgICAgICAgaWYoZ2VuZXJhdG9yS2V5ICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdlbmVyYXRvciA9IG5vZGUuZ2VuZXJhdG9yc1tnZW5lcmF0b3JLZXldO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gdG9rZW5pemVHZW5lcmF0b3IoZ2VuZXJhdG9yLnZhbHVlLCBub2RlS2V5KTtcblxuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gc2F2ZVZhcmlhYmxlcyhub2RlS2V5LCBub2RlLCB0b2tlbnMsIGFsbENvbm5lY3Rpb25zKTtcblxuICAgICAgICAgICAgICAgIC8vIFNhdmUgdGhlIGdlbmVyYXRvciB0aXRsZVxuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gdG9rZW5Ub0pzKG5vZGVLZXksIGdlbmVyYXRvci50aXRsZSwgdG9rZW5zKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBGb3VuZCB2YXJpYWJsZSBpbiBnZW5lcmF0b3JzICR7dmFyaWFibGVOYW1lfSAtICR7bm9kZUtleX1gKTtcblxuICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRvIHRoZSBuZXh0IHRva2VuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIFNFVFRJTkcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgLy8gR2V0IHNldHRpbmcgaW5kZXhcbiAgICAgICAgICAgIGxldCBzZXR0aW5nS2V5OiBudW1iZXIgPSBpc1NldHRpbmcobm9kZSwgdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgLy8gSWYgc2V0dGluZyBpbmRleCBpcyBub3QgaW5maW5pdHkgLSBpdCdzIGEgbWF0Y2ghXG4gICAgICAgICAgICBpZihzZXR0aW5nS2V5ICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBGb3VuZCB2YXJpYWJsZSBpbiBzZXR0aW5ncyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG4gICAgICAgICAgICAgICAgbmV3RXhlY3V0YWJsZSArPSBgdmFyICR7bm9kZUtleX0ke3ZhcmlhYmxlTmFtZX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtub2RlLnNldHRpbmdzW3NldHRpbmdLZXldLnZhbHVlfSB9O1xcbmA7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIE5PVCBBTlkgT0YgVEhSRUUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgLy8gSWYgbm90IG9uZSBvZiBwcmV2aW91cyB0aHJlZSwgYWxlcnQgdXNlci5cbiAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gYGFsZXJ0KFwiQ291bGRuJ3QgZmluZCBnZW5lcmF0b3IgdmFyaWFibGUgaW4gdGhlIGlucHV0cywgZ2VuZXJhdG9ycyBvciBzZXR0aW5ncyEgJHtub2RlS2V5fSAtICR7dmFyTmFtZX1cIik7XFxuYDtcbiAgICAgICAgfSBlbHNlIGlmKGNvZGVbc10udHlwZSA9PT0gXCJtYXRoXCIgfHwgY29kZVtzXS50eXBlID09PSBcInNjb3BlXCIpIHtcbiAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gc2F2ZVZhcmlhYmxlcyhub2RlS2V5LCBub2RlLCBjb2RlW3NdLmNvZGUsIGFsbENvbm5lY3Rpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdFeGVjdXRhYmxlO1xufVxuXG5mdW5jdGlvbiBzYXZlSW5wdXRWYXJpYWJsZShub2RlOiBTaWduYWxOb2RlLCBhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10sIG5vZGVLZXk6IHN0cmluZywgc2V0dGluZ0tleTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgbmV3RXhlY3V0YWJsZTogc3RyaW5nO1xuICAgIGNvbnN0IGNvbm5lY3RvckVuZCA9IHtcbiAgICAgICAgbm9kZUlkOiBub2RlS2V5LFxuICAgICAgICBzZXR0aW5nSWQ6IHNldHRpbmdLZXlcbiAgICB9XG4gICAgXG4gICAgbGV0IHtvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWR9ID0gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoYWxsQ29ubmVjdGlvbnMsIG51bGwsIGNvbm5lY3RvckVuZCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhgVHJhY2luZyBiYWNrIHRoZSBpbnB1dDogJHtub2RlS2V5fToke3NldHRpbmdLZXl9IC0+ICR7b3RoZXJOb2RlSWR9OiR7b3RoZXJTZXR0aW5nSWR9YCk7XG4gICAgXG4gICAgLy8gSWYgbm9kZSBpcyBjb25uZWN0ZWRcbiAgICBpZihvdGhlck5vZGVJZCAmJiBvdGhlclNldHRpbmdJZCkge1xuICAgICAgICAvLyBTYXZlIFxuICAgICAgICBuZXdFeGVjdXRhYmxlID0gYHZhciAke25vZGVLZXl9JHtzZXR0aW5nS2V5fSA9IGZ1bmN0aW9uICh0aW1lKSB7IHJldHVybiAke290aGVyTm9kZUlkfSR7b3RoZXJTZXR0aW5nSWR9KHRpbWUpfTtcXG5gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNhdmUgZGVmYXVsdCB2YWx1ZVxuICAgICAgICBuZXdFeGVjdXRhYmxlID0gYHZhciAke25vZGVLZXl9JHtzZXR0aW5nS2V5fSA9IGZ1bmN0aW9uICh0aW1lKSB7IHJldHVybiAke25vZGUuaW5wdXRzW2luZGV4XS5kZWZhdWx0fX07XFxuYFxuICAgIH1cblxuICAgIHJldHVybiBuZXdFeGVjdXRhYmxlO1xufVxuXG5mdW5jdGlvbiBpc0lucHV0IChub2RlOiBTaWduYWxOb2RlLCBzZXR0aW5nS2V5OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIC8vIENoZWNrIGlmIHZhcmlhYmxlIGlzIGluIGlucHV0c1xuICAgIGlmKG5vZGUuaW5wdXRzKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBub2RlLmlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gSWYgdmFyaWFibGUgaXMgdGhlIGlucHV0LCByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgaWYobm9kZS5pbnB1dHNbaV0udGl0bGUgPT09IHNldHRpbmdLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cblxuZnVuY3Rpb24gaXNHZW5lcmF0b3Iobm9kZTogU2lnbmFsTm9kZSwgc2V0dGluZ0tleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBTY2FuIGdlbmVyYXRvcnNcbiAgICBpZihub2RlLmdlbmVyYXRvcnMpIHtcbiAgICAgICAgaWYobm9kZS5nZW5lcmF0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvcihsZXQgZyA9IDA7IGcgPCBub2RlLmdlbmVyYXRvcnMubGVuZ3RoOyBnKyspIHtcbiAgICAgICAgICAgICAgICBpZihub2RlLmdlbmVyYXRvcnNbZ10udGl0bGUgPT09IHNldHRpbmdLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEluZmluaXR5O1xufVxuXG5mdW5jdGlvbiBpc1NldHRpbmcobm9kZTogU2lnbmFsTm9kZSwgc2V0dGluZ0tleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBTY2FuIGdlbmVyYXRvcnNcbiAgICBpZihub2RlLnNldHRpbmdzKSB7XG4gICAgICAgIGZvcihsZXQgcyA9IDA7IHMgPCBub2RlLnNldHRpbmdzLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW5maW5pdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3VjaElucHV0cyhhbGxOb2RlczogTm9kZUNvbGxlY3Rpb24pOiB7dW5jYWxjdWxhdGVkTm9kZXM6IE5vZGVDb2xsZWN0aW9uLCB0b3VjaE5vZGVzOiBOb2RlQ29sbGVjdGlvbn0ge1xuICAgIGxldCBuZXdDb2xsZWN0aW9uOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCBuZXdUb3VjaENvbGxlY3Rpb246IE5vZGVDb2xsZWN0aW9uID0ge307XG5cbiAgICBmb3IobGV0IG4gaW4gYWxsTm9kZXMpIHtcbiAgICAgICAgaWYobi5zdWJzdHIoMCwgMTApID09PSBcInRvdWNoSW5wdXRcIikge1xuICAgICAgICAgICAgbmV3VG91Y2hDb2xsZWN0aW9uW25dID0gYWxsTm9kZXNbbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdDb2xsZWN0aW9uW25dID0gYWxsTm9kZXNbbl07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1bmNhbGN1bGF0ZWROb2RlczogbmV3Q29sbGVjdGlvbixcbiAgICAgICAgdG91Y2hOb2RlczogbmV3VG91Y2hDb2xsZWN0aW9uXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpbWUoc3RhcnQ6IG51bWJlciwgc3RvcDogbnVtYmVyLCBzdGVwOiBudW1iZXIpIHtcbiAgICBsZXQgZSA9IFwibGV0IHQgPSBcIjtcblxuICAgIGUrPSBgKGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCByID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9ICR7c3RhcnR9OyBpIDwgJHtzdG9wfTsgaSs9JHtzdGVwfSkge1xuICAgICAgICAgICAgci5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgIH0pKCk7YFxuXG4gICAgcmV0dXJuIGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRvdWNoQ29udHJvbGxlcnMobm9kZXM6IE5vZGVDb2xsZWN0aW9uKTogc3RyaW5nIHtcbiAgICBsZXQgZSA9IFwiXCI7XG5cbiAgICBmb3IobGV0IGkgaW4gbm9kZXMpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuXG4gICAgICAgIGxldCBzZW5zaXRpdml0eTogTm9kZVNldHRpbmdzU2hhcGU7XG4gICAgICAgIGxldCBhdHRhY2hlZFNjb3BlOiBOb2RlU2V0dGluZ3NTaGFwZTtcbiAgICAgICAgbGV0IG9mZnNldFg6IE5vZGVTZXR0aW5nc1NoYXBlO1xuICAgICAgICBsZXQgb2Zmc2V0WTogTm9kZVNldHRpbmdzU2hhcGU7XG5cbiAgICAgICAgLy8gU2VwYXJhdGUgc2V0dGluZ3NcbiAgICAgICAgZm9yKGxldCBzIGluIG5vZGUuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmKG5vZGUuc2V0dGluZ3Nbc10udGl0bGUgPT09IFwiU2Vuc2l0aXZpdHlcIikge1xuICAgICAgICAgICAgICAgIHNlbnNpdGl2aXR5ID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIkF0dGFjaGVkIFNjb3BlXCIpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hlZFNjb3BlID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIk9mZnNldCBYXCIpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIk9mZnNldCBZXCIpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gbm9kZS5zZXR0aW5nc1tzXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRvdWNoIG5vZGUgaXMgbm90IGNvcnJlY3RseSBmb3JtYXR0ZWQuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBvZmZzZXRTY3JpcHQgPSBgaWYoIWRpZEF0dGFjaCR7aX0pIHtcbiAgICAgICAgICAgIGxldCBvbkhvbGREb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25YID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNoZW5kID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZigke29mZnNldFgudmFsdWUgPT0gXCJ0cnVlXCJ9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAke2l9T2Zmc2V0WERhdGEgKz0gZS5tb3ZlbWVudFgqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZigke29mZnNldFkudmFsdWUgPT0gXCJ0cnVlXCJ9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAke2l9T2Zmc2V0WURhdGEgKz0gZS5tb3ZlbWVudFkqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9udG91Y2htb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50WCA9IHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblggLSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZW1lbnRZID0gd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWSAtIGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoJHtvZmZzZXRYLnZhbHVlID09IFwidHJ1ZVwifSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFhEYXRhICs9IG1vdmVtZW50WCoke3BhcnNlRmxvYXQoc2Vuc2l0aXZpdHkudmFsdWUpfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKCR7b2Zmc2V0WS52YWx1ZSA9PSBcInRydWVcIn0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRZRGF0YSArPSBtb3ZlbWVudFkqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIiR7YXR0YWNoZWRTY29wZS52YWx1ZX1cIikub25tb3VzZWRvd24gPSBvbkhvbGREb3duO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke2F0dGFjaGVkU2NvcGUudmFsdWV9XCIpLm9udG91Y2hzdGFydCA9IG9uSG9sZERvd247XG5cbiAgICAgICAgICAgIGRpZEF0dGFjaCR7aX1PZmZzZXRYID0gdHJ1ZTtcbiAgICAgICAgICAgIGRpZEF0dGFjaCR7aX1PZmZzZXRZID0gdHJ1ZTtcbiAgICAgICAgfVxcbmA7XG5cbiAgICAgICAgZm9yKGxldCBvIGluIG5vZGUub3V0cHV0cykge1xuICAgICAgICAgICAgZSArPSBgdmFyICR7aX0ke25vZGUub3V0cHV0c1tvXS50aXRsZX1EYXRhID0gMTtcXG5gO1xuICAgICAgICAgICAgZSArPSBgdmFyIGRpZEF0dGFjaCR7aX0gPSBmYWxzZTtcXG5gO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUgKz0gYHZhciAke2l9JHtub2RlLm91dHB1dHNbb10udGl0bGV9ID0gZnVuY3Rpb24odGltZSkgeyByZXR1cm4gJHtpfSR7bm9kZS5vdXRwdXRzW29dLnRpdGxlfURhdGEgfTtcXG5gXG4gICAgICAgIH1cblxuICAgICAgICBlICs9IG9mZnNldFNjcmlwdDtcbiAgICB9XG5cbiAgICByZXR1cm4gZTtcbn0iLCIvLyBBcyBhIHJlbWluZGVyOlxuLy8gT25lIGl0ZW0gaW4gYW4gYXJyYXkgb2YgdG9rZW5zIGNhbiBvbmx5IGJlIGFuIG9iamVjdCBhbmQgb25seSBoYXZlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuLy8gKiB0eXBlICAgICAgICAgICAtIGZvciBldmVyeSB0b2tlblxuLy8gKiB2YWx1ZSAgICAgICAgICAtIGZvciBldmVyeSB0b2tlblxuLy8gKiBjb2RlICAtIGZvciBzY29wZXMgKG1hdGgvcmVndWxhcilcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuVG9KcyAobm9kZUlkLCB2YXJpYWJsZU5hbWUsIGpzb25Ub2tlbnMpIHtcbiAgICBsZXQgZXhlY3V0YWJsZVN0cmluZyA9IGB2YXIgJHtub2RlSWR9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24odGltZSkgeyByZXR1cm4gYDtcbiAgICBcbiAgICBleGVjdXRhYmxlU3RyaW5nICs9IGNhbGN1bGF0ZUNvZGUoWy4uLmpzb25Ub2tlbnNdKVxuXG4gICAgcmV0dXJuIGV4ZWN1dGFibGVTdHJpbmcgKyBcIn07XFxuXCI7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNvZGUoanNvbikge1xuICAgIGxldCBleGVjdXRhYmxlU3RyaW5nID0gXCJcIjtcblxuICAgIGlmKGpzb24gPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBWYXJpYWJsZXMgZm9yIGNvbnZlbmllbmNlXG4gICAgICAgIGNvbnN0IHRva2VuID0ganNvbltpXTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRva2VuLnR5cGU7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdG9rZW4udmFsdWU7XG5cbiAgICAgICAgLy8gQWN0dWFsIGxvZ2ljXG4gICAgICAgIGlmKHR5cGUgIT0gXCJzY29wZVwiICYmIHR5cGUgIT0gXCJtYXRoXCIpIHtcbiAgICAgICAgICAgIC8vIE9uZSBvZiB0aGUgYmFzaWMgdHlwZXNcblxuICAgICAgICAgICAgaWYodmFsdWUgPT09ICdQSScpIHtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC5QSVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInZhclwiICYmIHZhbHVlICE9PSBcInRpbWVcIikge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gYCR7dmFsdWV9KHRpbWUpYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIm1hdGhcIikge1xuICAgICAgICAgICAgLy8gTWF0aCBmdW5jdGlvblxuXG4gICAgICAgICAgICBpZih2YWx1ZSA9PT0gXCJzaW5cIikge1xuICAgICAgICAgICAgICAgIC8vIElmIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZ1bmN0aW9ucywgcmVjdXJzZXZseSBnZW5lcmF0ZSBzdHJpbmcgZnJvbSB0aGUgY29kZSBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiTWF0aC5zaW4oXCI7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBjYWxjdWxhdGVDb2RlKHRva2VuLmNvZGUpO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gXCIpXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIElmIG5vdCBzdXBwb3J0ZWQgZnVuY3Rpb24sIHRocm93IGVycm9yIHRvIHRoZSBjb25zb2xlXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuc3VwcG9ydGVkIG1hdGggZnVuY3Rpb24gISEhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVndWxhciBzY29wZVxuXG4gICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKFwiICsgY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4ZWN1dGFibGVTdHJpbmc7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc3R5bGVzID0gYFxuICAgICNzaWduYWxzLWVtYmVkZGluZy1jb250YWluZXIsICNzaWduYWxzLXZpZXdzLCAuc2lnbmFscy1jYW52YXMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgI3NpZ25hbHMtdmlld3Mge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBhdGUtY29sdW1uczogMTAwJTtcbiAgICB9XG5gXG5cbmV4cG9ydCBmdW5jdGlvbiBqc3hEb20gKG5vZGVzKSB7XG4gICAgbGV0IG91dHB1dE5vZGVzID0gW107XG5cbiAgICAvLyBHZXQgYWxsIGtpbmRzIG9mIG91dHB1dCBub2Rlc1xuICAgIGZvcihsZXQga2V5IGluIG5vZGVzKSB7XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGVzW2tleV07XG5cbiAgICAgICAgaWYoU3RyaW5nKGtleSkuc3Vic3RyKDAsIDUpID09PSBcInNjb3BlXCIpIHtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLmlkID0ga2V5O1xuICAgICAgICAgICAgb3V0cHV0Tm9kZXMucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhvdXRwdXROb2Rlcyk7XG5cbiAgICAvLyBHZW5lcmF0ZSBEeW5hbWljIFN0dWZmXG4gICAgY29uc3QgY2FudmFzSnN4ID0gb3V0cHV0Tm9kZXMubGVuZ3RoID4gMCA/IG91dHB1dE5vZGVzLm1hcChub2RlID0+IHtcbiAgICAgICAgcmV0dXJuICg8Y2FudmFzIGNsYXNzTmFtZT1cInNpZ25hbHMtY2FudmFzXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7bm9kZS5pZH1gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bm9kZS5pZH1cbiAgICAgICAgPjwvY2FudmFzPilcbiAgICB9KSA6IG51bGw7XG5cbiAgICBjb25zdCBzZXR0aW5ncyA9IG51bGw7XG5cbiAgICAvLyBHZW5lcmF0ZSBGaW5hbCBKU1hcbiAgICBjb25zdCBTaWduYWxWaWV3cyA9IGNhbnZhc0pzeCA/XG4gICAgICAgIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduYWxzLXZpZXdzXCIgc3R5bGU9e3tncmlkVGVtcGxhdGVSb3dzOiBgcmVwZWF0KCR7b3V0cHV0Tm9kZXMubGVuZ3RofSwgMWZyKWB9fT5cbiAgICAgICAgICAgICAgICB7Y2FudmFzSnN4fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgY29uc3QgU2V0dGluZ3NKc3ggPSBzZXR0aW5ncyA/XG4gICAgICAgIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduYWxzLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAge3NldHRpbmdzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17XCJzaWduYWxzLWVtYmVkZGluZy1jb250YWluZXJcIn0+XG4gICAgICAgICAgICA8c3R5bGU+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAge1NldHRpbmdzSnN4fVxuICAgICAgICAgICAge1NpZ25hbFZpZXdzfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==