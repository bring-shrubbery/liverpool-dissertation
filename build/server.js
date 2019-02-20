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
  var script = Object(_scriptGenerator_ts__WEBPACK_IMPORTED_MODULE_1__["scriptGenerator"])(allNodes, allConnections);
  console.timeEnd("Script Parser");
  var scripts = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js\"></script>\n";
  scripts += "<script>".concat(script[0]).concat(script[1], "</script>"); // Combine former results

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
    var nodeFunctions = executable;
    executable = "";
    executable += "function update() {\n";
    for (var s in allScopes) {
        var currentScope = allScopes[s];
        // const outputGenerator = currentScope.generators[0];
        // const outputTokens = tokenizeGenerator(outputGenerator.value, s);
        var _c = Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["getOtherSideOfConnector"])(allConnections, null, { nodeId: s, settingId: "signal" }), otherNodeId = _c.otherNodeId, otherSettingId = _c.otherSettingId;
        executable += "\n            if(graphs." + s + ") {\n                let newData = [];\n                for(let i = 0; i < t.length; i++) {newData.push(" + otherNodeId + otherSettingId + "(t[i]));}\n                graphs." + s + ".data.datasets[0].data = newData;\n                graphs." + s + ".update();\n            } else {\n                let canvasNode = document.getElementById(\"" + s + "\");\n\n                var viewSize = {\n                    x: canvasNode.parentNode.offsetWidth,\n                    y: canvasNode.parentNode.offsetHeight\n                }\n\n                var ctx = canvasNode.getContext(\"2d\");\n\n                var w = viewSize.x;\n                var h = viewSize.y / " + Object(_scriptGeneratorFunctions__WEBPACK_IMPORTED_MODULE_0__["objectSize"])(allScopes) + ";\n\n                canvasNode.width = w;\n                canvasNode.height = h;\n\n                let data = [];\n\n                for(let i = 0; i < t.length; i++) {\n                    data.push(" + otherNodeId + otherSettingId + "(t[i]));\n                }\n                var myChart = new Chart(ctx, {\n                    type: 'line',\n                    data: {labels: t.map(ti => ti.toFixed(1)),\n                        datasets: [\n                            {\n                                label: \"signal\",\n                                backgroundColor: 'rgba(0, 0, 0, 0)',\n                                borderColor: 'rgb(255, 120, 132)',\n                                data: data\n                            }\n                        ]\n                    }, options: {\n                        elements: {\n                            line: {\n                                tension: 0,\n                                stepped: false\n                            }, point: {\n                                radius: 0,\n                                hitRadius: 0,\n                                hoverRadius: 0\n                            }\n                        }, animation: {\n                            duration: 0\n                        }, tooltips: {\n                            enabled: false\n                        }, legend: {\n                            display: false\n                        }" + (currentScope.settings[0].value == "true" ? '' : ", scales: {\n                            xAxes: [{\n                                ticks: {\n                                    max: 1,\n                                    min: -1,\n                                    stepSize: 0.5\n                                }\n                            }], yAxes: [{\n                                ticks: {\n                                    max: 2,\n                                    min: 0,\n                                    stepSize: 0.5\n                                }\n                            }]\n                        }") + "\n                    }\n                });\n    \n                graphs." + s + " = myChart;\n            }\n        ";
    }
    executable += "};\n";
    executable += "update();";
    // return UglifyJS.minify(executable);
    return [nodeFunctions, executable];
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
    var time = [];
    for (var i = start; i <= stop; i += step) {
        time.push(parseFloat(i.toFixed(3)));
    }
    e += JSON.stringify(time);
    e += ";\n";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2dlbmVyYXRvclRva2VuaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVuZGVyZXIvc2NvcGVGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3Rva2VuVG9Kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlcmVyL3ZpZXdlckRvbS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiZGF0ZU5vdyIsIlN0cmluZyIsIkRhdGUiLCJ0b1N0cmluZyIsInN1YnN0ciIsInVzZSIsInN0YXRpYyIsIl9fZGlybmFtZSIsImdldCIsInJlcSIsInJlcyIsInByb2plY3RJZCIsInBhcmFtcyIsImlkIiwiY29uc29sZSIsImxvZyIsImZzIiwicmVhZEZpbGUiLCJwYXRoIiwicmVzb2x2ZSIsImVyciIsImRhdGEiLCJlcnJvciIsInN0YXR1cyIsInNlbmQiLCJyZXBsYWNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlc3RNb2RlbCIsInNldEhlYWRlciIsImVuZCIsInBvc3QiLCJib2R5UGFyc2VyIiwianNvbiIsInJlcUpzb24iLCJib2R5IiwicmVuZGVyZWRTdHJpbmciLCJyZW5kZXJTaWduYWxzIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwicmVuZGVySHRtbCIsInJlcXVlc3RKc29uIiwiYWxsTm9kZXMiLCJub2RlcyIsImFsbENvbm5lY3Rpb25zIiwiY29ubmVjdG9ycyIsImpzeCIsImpzeERvbSIsImpzeFN0cmluZyIsInJlbmRlclRvU3RhdGljTWFya3VwIiwidGltZSIsInNjcmlwdCIsInNjcmlwdEdlbmVyYXRvciIsInRpbWVFbmQiLCJzY3JpcHRzIiwic2NyaXB0ZWRIdG1sIiwic2xpY2UiLCJsZW5ndGgiLCJmaXhTY29wZXMiLCJnZW4iLCJnIiwiZm91bmRMZWZ0Qm9yZGVyIiwiZm91bmRSaWdodEJvcmRlciIsImp1c3RIaXRPcGVuaW5nQnJhY2tldCIsImp1c3RIaXRDbG9zaW5nQnJhY2tldCIsImxlZnQiLCJyaWdodCIsImkiLCJvbmUiLCJ0d28iLCJ0aHJlZSIsInRva2VuVG9KcyIsIm5vZGVJZCIsInZhcmlhYmxlTmFtZSIsImpzb25Ub2tlbnMiLCJleGVjdXRhYmxlU3RyaW5nIiwiY2FsY3VsYXRlQ29kZSIsInRva2VuIiwidHlwZSIsInZhbHVlIiwiY29kZSIsInN0eWxlcyIsIm91dHB1dE5vZGVzIiwia2V5IiwiY3VycmVudE5vZGUiLCJwdXNoIiwiY2FudmFzSnN4IiwibWFwIiwibm9kZSIsInNldHRpbmdzIiwiU2lnbmFsVmlld3MiLCJncmlkVGVtcGxhdGVSb3dzIiwiU2V0dGluZ3NKc3giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdB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QUtwQixJQUxSO0FBT0EsU0FDSTtBQUFLLE1BQUUsRUFBRTtBQUFULEtBQ0ksMEVBQVFSLE1BQVIsQ0FESixFQUVLVyxXQUZMLEVBR0tGLFdBSEwsQ0FESjtBQU9ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREQsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsIi8vIEJhc2UgSW1wb3J0c1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcydcblxuLy8gU2VydmVyIFNldHVwXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbi8vIE1pZGRsZXdhcmVcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuXG4vLyBEYXRhIFBhcnNpbmdcbmltcG9ydCB7XG4gICAgcmVuZGVyU2lnbmFsc1xufSBmcm9tICcuL3JlbmRlcmVyJ1xuaW1wb3J0IHRlc3RNb2RlbCBmcm9tICcuL3Rlc3RNb2RlbC5qc29uJ1xuXG5jb25zdCBkYXRlTm93ID0gKCkgPT4gU3RyaW5nKERhdGUoKS50b1N0cmluZygpKS5zdWJzdHIoMCwgMjQpICsgXCJcXHR8IFxcdFwiXG5cbi8vIFN0YXRpYyBmaWxlc1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyAnL3B1YmxpYycpKVxuXG4vLyAtLS0gUk9VVEVTIC0tLVxuYXBwLmdldCgnL2VkaXRvci86aWQnLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnNvbGUubG9nKGRhdGVOb3coKSArIFwiIFJlcXVlc3RlZCB0byBlZGl0IHByb2plY3QgXCIgKyBwcm9qZWN0SWQpO1xuICAgIFxuICAgIGZzLnJlYWRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3B1YmxpYy9lZGl0b3IvZWRpdG9yLmh0bWwnKSwgJ3V0ZjgnLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdBbiBlcnJvciBvY2N1cnJlZCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGl0bGVcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgIFwiPHRpdGxlPjwvdGl0bGU+XCIsXG4gICAgICAgICAgICBgPHRpdGxlPiR7cHJvamVjdElkfTwvdGl0bGU+YFxuICAgICAgICApXG5cbiAgICAgICAgLy8gU2V0IGRhdGFcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShcbiAgICAgICAgICAgICc8c2NyaXB0IGlkPVwiZWRpdG9yLWRhdGFcIj48L3NjcmlwdD4nLFxuICAgICAgICAgICAgYDxzY3JpcHQgaWQ9XCJlZGl0b3ItZGF0YVwiPmRvY3VtZW50LmVkaXRvckRhdGEgPSAke0pTT04uc3RyaW5naWZ5KHRlc3RNb2RlbCl9PC9zY3JpcHQ+YFxuICAgICAgICApXG5cbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgICAgICByZXMuc2VuZChkYXRhKTtcbiAgICB9KVxufSk7XG5cbmFwcC5nZXQoJy9wcm9qZWN0cycsIChyZXEsIHJlcykgPT4ge1xuICAgIC8vIFRPRE86IHJldHVybiBwYWdlIHdpdGggYWxsIHRoZSBwcm9qZWN0cyBmb3IgdGhlIGN1cnJlbnQgdXNlclxuICAgIHJlcy5lbmQoXCJwcm9qZWN0c1wiKTtcbn0pO1xuXG4vLyBKU09OIFBhcnNlclxuYXBwLnBvc3QoJy9yZW5kZXInLCBib2R5UGFyc2VyLmpzb24oKSk7XG5cbmFwcC5wb3N0KCcvcmVuZGVyJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0ZU5vdygpICsgXCJQT1NUIC9SRU5ERVIgcm91dGUgcmVxdWVzdGVkXCIpO1xuXG4gICAgY29uc3QgcmVxSnNvbiA9IHJlcS5wYXJhbXMuYm9keTtcbiAgICBjb25zdCByZW5kZXJlZFN0cmluZyA9IHJlbmRlclNpZ25hbHMocmVxSnNvbik7XG5cbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbicpO1xuICAgIHJlcy5lbmQocmVuZGVyZWRTdHJpbmcpO1xufSk7XG5cbi8vIERlZmF1bHQgdGVzdCB2aXN1YWxpc2F0aW9uXG5hcHAuZ2V0KCcvcmVuZGVyJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0ZU5vdygpICsgXCIgR0VUIC9SRU5ERVIgcm91dGUgcmVxdWVzdGVkXCIpO1xuXG4gICAgY29uc3QgcmVuZGVyZWRTdHJpbmcgPSByZW5kZXJTaWduYWxzKHRlc3RNb2RlbCk7XG5cbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgcmVzLmVuZChyZW5kZXJlZFN0cmluZyk7XG59KVxuXG5hcHAuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgcmVzLmVuZChcIjx1bD48bGk+PGEgaHJlZj0nL3Byb2plY3RzJz5wcm9qZWN0czwvYT48L2xpPjxsaT48YSBocmVmPScvcmVuZGVyJz5yZW5kZXI8L2E+PC9saT48bGk+PGEgaHJlZj0nL2VkaXRvci9wcm9qZWN0aWQnPmVkaXRvcjwvYT48L2xpPjwvdWw+XCIpO1xufSlcblxuLy8gUnVuIHNlcnZlclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiXFxuTGlzdGVuaW5nIG9uOiBodHRwczovL2xvY2FsaG9zdDpcIitwb3J0K1wiXFxuXCIpO1xufSk7IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHZW5lcmF0b3IgQ29kZSBUb2tlbmlzZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdlbmVyYXRvciBjb2RlIHRva2VuaXNlciBmdW5jdGlvbiBpcyBhbGdvcml0aG1pY2FsbHkgc2ltcGxlLCBidXQgcHJvZHVjZXMgYSBnb29kIHJlcHJlc2VudGF0aW9uXG4vLyBvZiB0aGUgcHJvdmlkZWQgY29kZSBpbiBKYXZhU2NyaXB0IE9iamVjdCBmb3JtYXQgKHdoaWNoIGNhbiB0aGVuIGJlIGVhc2lseSBjb252ZXJ0ZWQgdG8gSlNPTixcbi8vIHNpbmNlIGl0J3MgcHJldHR5IG11Y2ggdGhlIHNhbWUgdGhpbmcpLlxuLy8gV2hlbiBnb2luZyB0aHJvdWdoIHRoZSBjb2RlLCBpdCBjYW4gZGV0ZWN0IHNldmVyYWwgdHlwZXMgb2Ygb3BlcmF0b3JzLiBUaGVzZSBhcmU6XG4vLyAgICAgKiBWYXJpYWJsZVxuLy8gICAgICogQ29uc3RhbnQgTnVtYmVyXG4vLyAgICAgKiBNYXRoIE9wZXJhdG9yXG4vLyAgICAgKiBNYXRoIEZ1bmN0aW9uXG4vLyAgICAgKiBSZWd1bGFyIHNjb3BlIC0gZXZlcnl0aGluZyBpbnNpZGUgYnJhY2tldHMgXCIoXCIgYW5kIFwiKVwiIHNob3VsZCBiZSBleGVjdXRlZCBmaXJzdFxuLy8gVGhlIFZhcmlhYmxlcywgTnVtYmVycyBhbmQgTWF0aCBvcGVyYXRvcnMgYXJlIGp1c3QgYWRkZWQgYXMgYW4gb2JqZWN0IHdpdGggYXBwcm9wcmlhdGUgdHlwZSBhbmRcbi8vIHZhbHVlIHRha2VuIGZyb20gdGhlIGNvZGUuXG5cbi8vIFRPRE86XG4vLyAqIFNhbmV0aXNlIHZhcmlhYmxlIG5hbWVzICEhISBKYXZhc2NyaXB0IGluamVjdGlvbiBpcyBwb3NzaWJsZSBub3cgdGhyb3VuIHZhcmlhYmxlIG5hbWVzLi4uXG5cbmltcG9ydCB7Zml4U2NvcGVzfSBmcm9tICcuL3Njb3BlRml4ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemVHZW5lcmF0b3IgKGdlbjogc3RyaW5nLCBub2RlSWQ6IHN0cmluZyk6IEdlbmVyYXRvclNlZ21lbnRbXSB7XG4gICAgLy8gR2V0IHZhbHVlIG9mIGdlbmVyYXRvciBjb2RlIGFuZCBzdG9yZSBpbiBnXG4gICAgbGV0IGcgPSBTdHJpbmcoZ2VuKTtcbiAgICBnID0gU3RyaW5nKGZpeFNjb3BlcyhnKSk7XG5cbiAgICAvLyBQYXJzZWQgR2VuZXJhdG9yIENvZGVcbiAgICBsZXQgcGdlbjogR2VuZXJhdG9yU2VnbWVudFtdID0gW107XG4gICAgXG4gICAgLy8gVGhlIHN0YWNrXG4gICAgbGV0IHN0YWNrOiBHZW5lcmF0b3JTZWdtZW50W10gPSBbXTtcblxuICAgIC8vIENvZGUgdG9rZW5pc2VyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9wU3RhY2tPYmplY3Q6IEdlbmVyYXRvclNlZ21lbnQgPSBzdGFjay5sZW5ndGggPiAwID9cbiAgICAgICAgICAgIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdIDogbnVsbDtcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gVkFSSUFCTEUgLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZihnW2ldID09PSBcIltcIikge1xuICAgICAgICAgICAgLy8gTW92ZSB0byBuZXh0IGNoYXJhY3RlclxuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgLy8gSW5pdGlhbGlzZSBlbXB0eSB2YXJpYWJsZVxuICAgICAgICAgICAgbGV0IHZhcmlhYmxlID0gXCJcIjtcblxuICAgICAgICAgICAgLy8gU2NhbiB1bnRpbCB2YXJpYWJsZSBzY29wZSBpcyBjbG9zZWRcbiAgICAgICAgICAgIHdoaWxlKGdbaV0gIT09IFwiXVwiKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUgKz0gZ1tpXTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHZhcmlhYmxlID09PSBcInRpbWVcIiB8fCB2YXJpYWJsZSA9PT0gXCJQSVwiKSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZyA/XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gbm9kZUlkICsgdmFyaWFibGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInZhclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YXJpYWJsZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBudWxsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2godmFyaWFibGVTbmlwcGV0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGdlbi5wdXNoKHZhcmlhYmxlU25pcHBldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gTUFUSCBPUEVSQVRPUiAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmIChnW2ldID09PSBcIipcIiB8fCBnW2ldID09PSBcIi9cIiB8fCBnW2ldID09PSBcIitcIiB8fCBnW2ldID09PSBcIi1cIikge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3JTbmlwcGV0OiBHZW5lcmF0b3JTZWdtZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwib3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZ1tpXSxcbiAgICAgICAgICAgICAgICBjb2RlOiBudWxsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcEluZGV4ID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBzdGFja1t0b3BJbmRleF0uY29kZS5wdXNoKG9wZXJhdG9yU25pcHBldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2gob3BlcmF0b3JTbmlwcGV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBNQVRIIEZVTkNUSU9OIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCJzXCIpIHtcbiAgICAgICAgICAgIC8vIE1hdGhlbWF0aWNhbCBmb3JtdWxhcyBhcmUgY29kZWQgaW4gdGhyZWUgbGV0dGVyc1xuICAgICAgICAgICAgbGV0IG5leHRUaHJlZSA9IFN0cmluZyhnW2ldICsgZ1tpKzFdICsgZ1tpKzJdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbmV4dCB0aHJlZSBjaGFycyBhcmUgb25lIG9mIFxuICAgICAgICAgICAgaWYobmV4dFRocmVlID09PSBcInNpblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRqdXN0IGluZGV4IHRvIG5leHQgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgaSArPSAzO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VhcmNoIGZvciBvcGVuaW5nIGJyYWNrZXRzXG4gICAgICAgICAgICAgICAgd2hpbGUoZ1tpXSAhPT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPj0gZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0aHJvdyBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRVJST1IgUkVBU09OOiBzaG91bGQgcHJvdmlkZSBicmFja2V0cyBmb3IgbWF0aCBvcGVyYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJzaG91bGQgcHJvdmlkZSBicmFja2V0cyBmb3IgbWF0aCBvcGVyYXRvcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHByb3ZpZGVkIHNwYWNlIG9yIGEgY2hhcmFjdGVyIGFmdGVyIHRocmVlIG1hdGggY2hhcnNcbiAgICAgICAgICAgICAgICAvLyBpZiAoZ1tpKzFdID09PSBcIihcIikgaSsrO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0aFNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWF0aFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV4dFRocmVlLFxuICAgICAgICAgICAgICAgICAgICBjb2RlOiBbXVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZih0b3BTdGFja09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrVG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLnB1c2gobWF0aFNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjb3BlVG9wSW5kZXggPSBzdGFja1tzdGFja1RvcEluZGV4XS5jb2RlLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGVbc2NvcGVUb3BJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgcGdlbi5wdXNoKG1hdGhTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGdlbltwZ2VuLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLy8gQ29udGludWUgcGFyc2luZyBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0gUkVHVUxBUiBTQ09QRSAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKGdbaV0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAvLyBCZWdpbiByZWd1bGFyIHNjb3BlXG4gICAgICAgICAgICBjb25zdCBzY29wZVNuaXBwZXQ6IEdlbmVyYXRvclNlZ21lbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzY29wZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvZGU6IFtdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRvcFN0YWNrT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2NvcGUgZXhpc3RzIHB1c2ggaXQgdG8gdGhlIHRvcCBzY29wZVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrVG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUucHVzaChzY29wZVNuaXBwZXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVUb3BJbmRleCA9IHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrVG9wSW5kZXhdLmNvZGVbc2NvcGVUb3BJbmRleF1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2goc2NvcGVTbmlwcGV0KTtcblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHBnZW5bcGdlbi5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLSBFTkQgQU5ZIFNDT1BFIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoZ1tpXSA9PT0gXCIpXCIgfHwgZy5jaGFyQXQoaSkgPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAvLyBFbmQgU2NvcGVcblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdG9wIGl0ZW0gZnJvbSBzdGFjayBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgY2xvc2VkIHNjb3BlIHRoYXQgd2Fzbid0IG9wZW5lZFxuICAgICAgICAgICAgICAgIC8vIFRPRE86ICAgICAgICAgICAgdGhyb3cgRVJST1JcbiAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046ICAgIG5vbiBleGlzdGVudCBzY29wZSB3YXMgY2xvc2VkXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vbiBleGlzdGVudCBzY29wZSB3YXMgY2xvc2VkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tIE5VQk1FUiAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGxldCBtYXliZU51bWJlciA9IFN0cmluZyhwYXJzZUludChnW2ldKSk7XG5cbiAgICAgICAgaWYobWF5YmVOdW1iZXIgIT09IFN0cmluZyhOYU4pICYmIHR5cGVvZiBwYXJzZUludChtYXliZU51bWJlcikgPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgbGV0IG51bWJlclN0YXJ0ID0gaTtcblxuICAgICAgICAgICAgLy8gSXMgY3VycmVudCBjaGFyIGEgbnVtYmVyIG9yIGEgZG90P1xuICAgICAgICAgICAgY29uc3QgaXNOdW1iZXIgPSAoKSA9PiAobWF5YmVOdW1iZXIgIT09IFN0cmluZyhOYU4pICYmIHR5cGVvZiBwYXJzZUludChtYXliZU51bWJlcikgPT09IFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgaXNEb3QgPSAoaW5kZXg6IG51bWJlcikgPT4gU3RyaW5nKGdbaW5kZXhdKSA9PT0gXCIuXCI7XG5cbiAgICAgICAgICAgIC8vIFdhcyB0aGVyZSBhIGRvdCBpbiBjdXJyZW50IHNlcXVlbmNlIG9mIG51bWJlcnM/XG4gICAgICAgICAgICBsZXQgd2FzRG90QWxyZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aGlsZShpc051bWJlcigpIHx8IGlzRG90KGkpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgY3VycmVudCBjaGFyIGlzIGEgZG90XG4gICAgICAgICAgICAgICAgaWYoaXNEb3QoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYod2FzRG90QWxyZWFkeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgdGhlcmUgd2FzIGEgZG90IGFscmVhZHksIHRocm93IGVycm9yLCBzaW5jZSBpdCBkb2Vzbid0IG1ha2Ugc2Vuc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRocm93IEVSUk9SXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFUlJPUiBSRUFTT046IGludmFsaWQgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIHN5bnRheFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm90LCBzZXQgd2FzIGRvdCBhbHJlYWR5IHRvIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhc0RvdEFscmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTW92ZSB0byBuZXh0IGluZGV4IGFuZCBcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgbWF5YmVOdW1iZXIgPSBTdHJpbmcocGFyc2VJbnQoZ1tpXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXN1bHRpbmdOdW1iZXIgPSBnLnNsaWNlKG51bWJlclN0YXJ0LCBpKTtcblxuICAgICAgICAgICAgY29uc3QgbnVtYmVyU25pcHBldDogR2VuZXJhdG9yU2VnbWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHRpbmdOdW1iZXIsXG4gICAgICAgICAgICAgICAgY29kZTogbnVsbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYodG9wU3RhY2tPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzY29wZSBleGlzdHMgcHVzaCBpdCB0byB0aGUgdG9wIHNjb3BlXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wSW5kZXggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHN0YWNrW3RvcEluZGV4XS5jb2RlLnB1c2gobnVtYmVyU25pcHBldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwdXNoIGl0IHRvIHJvb3QgbGV2ZWxcbiAgICAgICAgICAgICAgICBwZ2VuLnB1c2gobnVtYmVyU25pcHBldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGktLTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIFJldHVybiBwYXJzZWQgZ2VuZXJhdG9yIGFycmF5XG4gICAgcmV0dXJuIHBnZW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXJhdG9yU2VnbWVudCB7XG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHZhbHVlOiAoc3RyaW5nfG51bWJlciksXG4gICAgY29kZTogR2VuZXJhdG9yU2VnbWVudFtdXG59IiwiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcsIHJlbmRlclRvU3RhdGljTWFya3VwIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5cbmltcG9ydCB7IHNjcmlwdEdlbmVyYXRvciB9IGZyb20gJy4vc2NyaXB0R2VuZXJhdG9yLnRzJztcbmltcG9ydCB7IGpzeERvbSB9IGZyb20gJy4vdmlld2VyRG9tJztcblxuZnVuY3Rpb24gcmVuZGVySHRtbCAocmVxdWVzdEpzb24pIHtcbiAgICAvLyBTZXBhcmF0ZSBub2RlcyBmcm9tIGNvbm5lY3RvcnNcbiAgICBjb25zdCBhbGxOb2RlcyA9IHsuLi5yZXF1ZXN0SnNvbi5ub2Rlc307XG4gICAgY29uc3QgYWxsQ29ubmVjdGlvbnMgPSBbLi4ucmVxdWVzdEpzb24uY29ubmVjdG9yc107XG5cbiAgICAvLyBSZW5kZXIgSFRNTFxuICAgIGNvbnN0IGpzeCA9IGpzeERvbShhbGxOb2Rlcyk7XG4gICAgY29uc3QganN4U3RyaW5nID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoanN4KTtcblxuICAgIC8vIEdlbmVyYXRlIFNjcmlwdHNcbiAgICBjb25zb2xlLnRpbWUoXCJTY3JpcHQgUGFyc2VyXCIpO1xuICAgIGNvbnN0IHNjcmlwdCA9IHNjcmlwdEdlbmVyYXRvcihhbGxOb2RlcywgYWxsQ29ubmVjdGlvbnMpO1xuICAgIGNvbnNvbGUudGltZUVuZChcIlNjcmlwdCBQYXJzZXJcIik7XG4gICAgbGV0IHNjcmlwdHMgPSBgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9DaGFydC5qcy8yLjcuMy9DaGFydC5idW5kbGUubWluLmpzXCI+PC9zY3JpcHQ+XFxuYDtcbiAgICBzY3JpcHRzICs9IGA8c2NyaXB0PiR7c2NyaXB0WzBdfSR7c2NyaXB0WzFdfTwvc2NyaXB0PmA7XG4gICAgXG4gICAgLy8gQ29tYmluZSBmb3JtZXIgcmVzdWx0c1xuICAgIGNvbnN0IHNjcmlwdGVkSHRtbCA9IGpzeFN0cmluZy5zbGljZSgwLCBqc3hTdHJpbmcubGVuZ3RoIC0gNikgKyBzY3JpcHRzICsgXCI8L2Rpdj5cIjtcbiAgICBcbiAgICAvLyBSZXR1cm4gZ2VuZXJhdGVkIEhUTUwgYXMgYSBzdHJpbmdcbiAgICByZXR1cm4gc2NyaXB0ZWRIdG1sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2lnbmFscyAocmVxdWVzdEpzb24pIHtcbiAgICByZXR1cm4gcmVuZGVySHRtbChyZXF1ZXN0SnNvbik7XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNjb3BlIEZpeGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2NvcGUgRml4ZXIgZnVuY3Rpb24gaXMgcmVsYXRlZCB0byB0aGUgZ2VuIHZhcmlhYmxlIHBhcnNpbmcgYWxnb3JpdGhtLiBTaW5jZSB0aGUgdG9rZW5pemVyIFxuLy8gZnVuY3Rpb24gZG9lcyBub3QgdGFrZSBpbnRvIGFjY291bmQgdGhhdCBtYXRoIG9wZXJhdG9ycyAqIChtdWx0aXBsaWNhdGlvbikgYW5kIC8gKGRpdmlzaW9uKVxuLy8gYXJlIGV4ZWN1dGVkIGZpcnN0LCB3ZSBuZWVkIHRvIHB1dCBzY29wZXMgYXJvdW5kIGJpdHMgdGhhdCBzaG91bGQgZXhlY3V0ZWQgZmlyc3QuIFRoaXMgaXMgXG4vLyBub3QgZmluYWwgc29sdXRpb24sIHNpbmNlIGl0IGRvZXMgbm90IHRha2UgZm9sbG93aW5nIHNpdHVhdGlvbnMgaW50byBhY2NvdW50OlxuLy8gICAgICogdGhlcmUgaXMgYSBtaW51cyBvciBwbHVzIHNpZ24gYmVmb3JlIGEgbnVtYmVyOiAtMSpbdmFyaWFibGVdXG4vLyAgICAgICAgIC0gSW4gdGhpcyBjYXNlIGl0IHdvdWxkIHJldHVybiB0aGlzOiAtKDEqW3ZhcmlhYmxlXSkuIFRoaXMgZG9lcyBub3QgYXBwbHkgc2NvcGVzXG4vLyAgICAgICAgICAgY29ycmVjdGx5LlxuLy9cbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFsZ29yaXRobSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGFsZ29yaXRobSBtYWtlcyBvbmx5IG9uZSBnZW5lcmFsIHN3ZWVwIHRocm91Z2ggdGhlIHN0cmluZy4gVGhpcyBtZWFucyB0aGF0IGlmIG5vIFxuLy8gc2NvcGVzIGFyZSBuZWVkZWQsIGV4ZWN1dGlvbiB0aW1lIHdpbGwgYmUgbWluaW1hbCwgaS5lLiBpdCB3aWxsIHRha2UgYXMgbXVjaCB0aW1lIGFzIGl0XG4vLyB0YWtlcyB0byBsb29wIHRocm91Z2ggdGhlIHN0cmluZyBvbmNlIGFuZCBjaGVjayBpZiB0aGUgY2hhcmFjdGVyIGlzICogb3IgLy4gSW4gdGhlIGNhc2Ugb2Zcbi8vIDM0IGNoYXJhY3RlciBzdHJpbmcsIHRoaXMgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgaW4gYWJvdW50IDAuMy0wLjUgbXMuIFdpdGggYW4gYXZlcmFnZSBvZiBcbi8vIGFyb3VuZCAwLjRtcyBhbmQgMzQgY2hhcmFjdGVycywgd2UgY2FuIGFwcHJveGltYXRlIHRoYXQgb25lIGNoYXJhY3RlciB0YWtlcyAwLjQgLyAzNCA9IDEuNjZcbi8vIG1pY3JvIHNlY29uZHMuIFRoaXMgd2FzIHRlc3RlZCBvbiAyLjdHaHogSW50ZWwgQ29yZSBpNy4gU28gaXQgdG9vayBhcm91bmQgNDQ4MiBjbG9jayBjeWNsZXNcbi8vIHRvIGV4ZWN1dGUgdGhhdCBhY2NvcmRpbmcgdG8gZm9sbG93aW5nIGVxdWF0aW9uOiAxLjY2dXMgLyAoMSAvIDIuN0cpID0gNDQ4Mi4gVGhpcyBjb3VsZCBiZSBcbi8vIGRyYW1hdGljYWxseSBpbXByb3ZlZCBieSB1c2luZyBjdXN0b20gbWFkZSBOb2RlLmpzIGMrKyBwbHVnaW4gd2hpY2ggYWxsb3dzIHRvIHJ1biBjKytcbi8vIGJpbmFyaWVzIGZyb20gTm9kZS5qcyBvciBieSB3cml0aW5nIHRoZSB3aG9sZSByZW5kZXJlciBzZXJ2ZXIgaW4gYSBjb21waWxlZCBsYW5ndWFnZSBsaWtlIFxuLy8gcHl0aG9uLCBjIywgZ28sIG9yIHN3aWZ0LiBUaGVyZSBpcyBhbHNvIGEgcG9zc2liaWxpdHkgdG8gd3JpdGUgaXQgaW4gUnVzdCBsYW5ndWFnZSwgQyBvclxuLy8gQysrLiBUaGlzIHdvdWxkIGFsbG93IHRvIGNvbXBpbGUganVzdCB0aGlzIGZ1bmN0aW9uIHRvIFdlYkFzc2VtYmx5IGFuZCBydW4gaXQgaW4gTm9kZS5qcyBhdCBcbi8vIGNvbXBpbGVkIHNwZWVkLiBJZiBmdXJ0aGVyIGRldmVsb3BtZW50IHdpbGwgYmUgZG9uZSBhbmQgdGhlcmUgd2lsbCBiZSBhIGRlY2lzaW9uIHRvICBzd2l0Y2hcbi8vIHRvIGEgY29tcGlsZWQgbGFuZ3VhZ2Ugc2VydmVyLCBJIHdvdWxkIHN1Z2dlc3QgdXNpbmcgR08gbGFuZ3VhZ2UgZHVlIHRvIGl0cyBzaW1wbGljaXR5LlxuLy9cbi8vIEFsZ2l0aG0gd29ya3MgaW4gYSBmb2xsb3dpbmcgZmFzaGlvbjpcbi8vICAgMS4gTWFrZSBzdXJlIHBhc3NlZCB0ZXh0IGlzIG9mIGEgU3RyaW5nIHR5cGVcbi8vICAgMi4gU2V0IGZsYWdzIHRvIGZhbHNlOlxuLy8gICAgICAgLSBib3JkZXIgZmxhZ3M6IGluZGljYXRlIGlmIG9uIGxlZnQgb3IgcmlnaHQsIGEgKyBvciAtIHNpZ24gd2FzIGZvdW5kXG4vLyAgICAgICAtIGJyYWNrZXQgZmxhZ3M6IGluZGljYXRlIGlmIHdoaWxlIHN3ZWVwaW5nIGxlZnQgYW5kIHJpZ2h0IGEgc2NvcGUgd2FzIGZvdW5kXG4vLyAgIDMuIEluaXRpYXRlIHZhcmlhYmxlcyBmb3IgbGVmdCBhbmQgcmlnaHQgc3dlZXBlcnNcbi8vICAgNC4gTG9vcCB1bnRpbCB3aG9sZSBzdHJpbmcgd2FzIHNjYW5uZWQsIGluIHRoZSBsb29wOlxuLy8gICAgICAgMS4gSWYgY3VycmVudCBjaGFyYWN0ZXIgaXMgXCIqXCJcIiBvciBcIi9cIiwgY29udGludWUsIG90aGVyd2lzZSBpbmNyZWFzZSBpbmRleCBieSBvbmUgYW5kIGNoZWNrIGFnYWluXG4vLyAgICAgICAyLiBTY2FuIHRvIHRoZSBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgaW5kZXguXG4vLyAgICAgICAzLiBJZiByYW4gb3V0IG9mIGJvdW5kcyBvZiB0aGUgc3RyaW5nLCBzdG9wIHNjYW5uaW5nIGxlZnQsIG1vdmUgdG8gc3RlcCA3XG4vLyAgICAgICA0LiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBzZXQgY2xvc2luZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDUuIElmIGhpdCBvcGVuaW5nIGJyYWNrZXQsIGNoZWNrIGlmIGNsb3NpbmcgYnJhY2tldCB3YXMgaGl0IGJlZm9yZTpcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgaGl0LCBjb250aW51ZSBzY2FubmluZyBhbmQgc2V0IGNsb3NpbmcgYnJhY2tldCBmbGFnIHRvIGZhbHNlIGFnYWluLlxuLy8gICAgICAgICAgIC0gSWYgY2xvc2luZyBicmFja2V0IFdBUyBOT1QgaGl0LCBzdG9wIHNjYW5uaW5nIGFuZCBtb3ZlIHRvIHN0ZXAgN1xuLy8gICAgICAgNi4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBjbG9zaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBjbG9zaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIGNsb3NpbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZywgbW92ZSByaWdodCBieSBvbmUgc3RlcCBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuLy8gICAgICAgNy4gU2NhbiB0byB0aGUgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBpbmRleC5cbi8vICAgICAgIDguIElmIHJhbiBvdXQgb2YgYm91bmRzIG9mIHRoZSBzdHJpbmcsIHN0b3Agc2Nhbm5pbmcgbGVmdCwgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICA5LiBJZiBoaXQgb3BlbmluZyBicmFja2V0LCBzZXQgb3BlbmluZyBicmFja2V0IGZsYWcgdG8gdHJ1ZS5cbi8vICAgICAgIDEwLiBJZiBoaXQgY2xvc2luZyBicmFja2V0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcgYW5kIHNldCBvcGVuaW5nIGJyYWNrZXQgZmxhZyB0byBmYWxzZSBhZ2Fpbi5cbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgbW92ZSB0byBzdGVwIDEyXG4vLyAgICAgICAxMS4gSWYgXCIrXCIgb3IgXCItXCIgc2lnbiB3YXMgaGl0LCBjaGVjayBpZiBvcGVuaW5nIGJyYWNrZXQgd2FzIGhpdCBiZWZvcmU6XG4vLyAgICAgICAgICAgLSBJZiBvcGVuaW5nIGJyYWNrZXQgV0FTIGhpdCwgY29udGludWUgc2Nhbm5pbmcsIHNpbmNlIGl0IG1lYW5zIHRoYXQgdGhlICsgb3IgLSBzaWduIGlzIGluIGFub3RoZXIgc2NvcGVcbi8vICAgICAgICAgICAtIElmIG9wZW5pbmcgYnJhY2tldCBXQVMgTk9UIGhpdCwgc3RvcCBzY2FubmluZyBhbmQgcmVzZXQgbGVmdCBib3JkZXIgZmxhZ1xuXG5leHBvcnQgZnVuY3Rpb24gZml4U2NvcGVzKGdlbikge1xuICAgIGxldCBnID0gU3RyaW5nKGdlbik7XG5cbiAgICAvLyBWYXJpYWJsZSBhcmUgdGFrZW4gb3V0c2lkZSBvZiBmb3IgbG9vcCwgdG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UuXG4gICAgLy8gSW4gdGhpcyB3YXksIHZhcmlhYmxlcyBhcmUganVzdCByZXdyaXR0ZW4gaW4gdGhlIHNhbWUgbWVtb3J5XG4gICAgLy8gbG9jYXRpb24gaW5zdGVhZCBvZiBjcmVhdGluZyBuZXcgdmFyaWFibGUgZXZlcnkgdGltZS5cbiAgICBsZXQgZm91bmRMZWZ0Qm9yZGVyID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kUmlnaHRCb3JkZXIgPSBmYWxzZTtcblxuICAgIGxldCBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICBsZXQganVzdEhpdENsb3NpbmdCcmFja2V0ID0gZmFsc2U7XG5cbiAgICBsZXQgbGVmdDtcbiAgICBsZXQgcmlnaHQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGdbaV0gPT09IFwiKlwiIHx8IGdbaV0gPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAvLyBTY2FuIGxlZnRcbiAgICAgICAgICAgIGZvciAobGVmdCA9IGk7ICFmb3VuZExlZnRCb3JkZXI7IGxlZnQtLSkge1xuICAgICAgICAgICAgICAgIC8vIEV4aXQgdGhlIHNjYW5uaW5nIGxvb3AgaWYgaGl0IGxlZnQgc3RyaW5nIHdhbGxcbiAgICAgICAgICAgICAgICBpZiAobGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZG9lcyBub3Qgc2V0IGZvdW5kTGVmdEJvcmRlciB2YXJpYWJsZSB0byB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpZiBib3RoIHNpZGVzIGFyZSBicmFja2V0cyBvciBvdXRlciB3YWxscyBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RyaW5nLCBuZXcgYnJhY2tldHMgc2hvdWxkIG5vdCBiZSBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGhpdHMgb3BlbmluZyBicmFja2V0LCBpdCBjaGVja3MgaWYgaXQgaGl0IGNsb3NpbmcgYnJhY2tldCBiZWZvcmVcbiAgICAgICAgICAgICAgICBpZiAoZ1tsZWZ0XSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGp1c3RIaXRDbG9zaW5nQnJhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkLCBpdCBza2lwcyBjdXJyZW50IGJyYWNrZXQgYW5kIGNvbnRpbnVlcyBzZWFyY2hpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGJhc2ljYWxseSBwcmV2ZW50cyBpbnNlcnRpbmcgYnJhY2tldCBpbnNpZGUgb2YgdGhlIHNjb3BlLlxuICAgICAgICAgICAgICAgICAgICAgICAganVzdEhpdENsb3NpbmdCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFya3MgdGhhdCBpdCBoaXQgY2xvc2luZyBicmFja2V0LCBzbyB0aGF0IGlmIG9wZW5pbmcgYnJhY2tldCB3YXMgaGl0IGxhdGVyLFxuICAgICAgICAgICAgICAgIC8vIGl0IGtub3dzIHRoYXQgaXQgc2hvdWxkbid0IFxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIilcIikganVzdEhpdENsb3NpbmdCcmFja2V0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIEV4aXQgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgcGx1cyBvciBtaW51c1xuICAgICAgICAgICAgICAgIC8vIEFsc28sIG1vdmUgcmlnaHQsIHNvIHRoYXQgYnJhY2tlcyBpcyBpbnNlcnRlZCBhZnRlciArIG9yIC0gc2lnblxuICAgICAgICAgICAgICAgIGlmIChnW2xlZnRdID09PSBcIitcIiB8fCBnW2xlZnRdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdENsb3NpbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCwgaXQncyB0aW1lIHRvIGluc2VydCBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kTGVmdEJvcmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2NhbiByaWdodFxuICAgICAgICAgICAgZm9yIChyaWdodCA9IGk7ICFmb3VuZFJpZ2h0Qm9yZGVyOyByaWdodCsrKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhpdCB0aGUgc2Nhbm5pbmcgbG9vcCBpZiBoaXQgcmlnaHQgc3RyaW5nIHdhbGwgb3IgY2xvc2luZyBicmFja2V0XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0ID49IGcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZG9lcyBub3Qgc2V0IGZvdW5kUmlnaHRCb3JkZXIgdmFyaWFibGUgdG8gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgaWYgYm90aCBzaWRlcyBhcmUgYnJhY2tldHMgb3Igb3V0ZXIgd2FsbHMgb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN0cmluZywgbmV3IGJyYWNrZXRzIHNob3VsZCBub3QgYmUgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBpdCBoaXRzIGNsb3NpbmcgYnJhY2tldCwgaXQgY2hlY2tzIGlmIGl0IGhpdCBvcGVuaW5nIGJyYWNrZXQgYmVmb3JlXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoanVzdEhpdE9wZW5pbmdCcmFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBkaWQsIGl0IHNraXBzIGN1cnJlbnQgYnJhY2tldCBhbmQgY29udGludWVzIHNlYXJjaGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYmFzaWNhbGx5IHByZXZlbnRzIGluc2VydGluZyBicmFja2V0IGluc2lkZSBvZiB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0SGl0T3BlbmluZ0JyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYXJrcyB0aGF0IGl0IGhpdCBjbG9zaW5nIGJyYWNrZXQsIHNvIHRoYXQgaWYgb3BlbmluZyBicmFja2V0IHdhcyBoaXQgbGF0ZXIsXG4gICAgICAgICAgICAgICAgLy8gaXQga25vd3MgdGhhdCBpdCBzaG91bGRuJ3QgXG4gICAgICAgICAgICAgICAgaWYgKGdbcmlnaHRdID09PSBcIihcIikganVzdEhpdE9wZW5pbmdCcmFja2V0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChnW3JpZ2h0XSA9PT0gXCIrXCIgfHwgZ1tyaWdodF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqdXN0SGl0T3BlbmluZ0JyYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRpZCwgaXQgc2tpcHMgY3VycmVudCBicmFja2V0IGFuZCBjb250aW51ZXMgc2VhcmNoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgcHJldmVudHMgaW5zZXJ0aW5nIGJyYWNrZXQgaW5zaWRlIG9mIHRoZSBzY29wZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0LCBpdCdzIHRpbWUgdG8gaW5zZXJ0IGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRSaWdodEJvcmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIG9uIG9uZSBvZiB0aGUgc2lkZXMgdGhlcmUgaXMgKyBvciAtIHNpZ25cbiAgICAgICAgICAgIGlmIChmb3VuZExlZnRCb3JkZXIgfHwgZm91bmRSaWdodEJvcmRlcikge1xuICAgICAgICAgICAgICAgIC8vIFNsaWNlIG9yaWdpbmFsIHN0cmluZyBhdCB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uc1xuICAgICAgICAgICAgICAgIGxldCBvbmUgPSBnLnNsaWNlKDAsIGxlZnQpO1xuICAgICAgICAgICAgICAgIGxldCB0d28gPSBnLnNsaWNlKGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICBsZXQgdGhyZWUgPSBnLnNsaWNlKHJpZ2h0LCBnLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgYnJhY2tldHMgYmV0d2VlbiBmb3JtZXIgdGhyZWUgc3RyaW5ncyB0byBmb3JtXG4gICAgICAgICAgICAgICAgLy8gbmV3IHN0cmluZyB3aXRoIGluc2VydGVkIGJyYWNrZXRzXG4gICAgICAgICAgICAgICAgZyA9IG9uZSArIFwiKFwiICsgdHdvICsgXCIpXCIgKyB0aHJlZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVzZXQgYm9yZGVyIHZhcmlhYmxlc1xuICAgICAgICAgICAgZm91bmRMZWZ0Qm9yZGVyID0gZmFsc2U7XG4gICAgICAgICAgICBmb3VuZFJpZ2h0Qm9yZGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZztcbn0iLCJpbXBvcnQge1xuICAgIGdldFVuY2FsY3VsYXRlZE5vZGVzLFxuICAgIGdlbmVyYXRlQ29ubmVjdGlvbkRpY3Rpb25hcnksXG4gICAgb2JqZWN0U2l6ZSxcbiAgICB3YXNDYWxjdWxhdGVkLFxuICAgIGFsbElucHV0c0NhbGN1bGF0ZWQsXG4gICAgY2FsY3VsYXRlT3V0cHV0LFxuICAgIGdldFRvdWNoSW5wdXRzLFxuICAgIGluaXRUaW1lLFxuICAgIGdlbmVyYXRlVG91Y2hDb250cm9sbGVycyxcbiAgICBnZXRPdGhlclNpZGVPZkNvbm5lY3RvclxufSBmcm9tICcuL3NjcmlwdEdlbmVyYXRvckZ1bmN0aW9ucyc7XG5cbmltcG9ydCB7IHRva2VuaXplR2VuZXJhdG9yIH0gZnJvbSAnLi9nZW5lcmF0b3JUb2tlbml6ZXInO1xuXG5pbXBvcnQgVWdsaWZ5SlMgZnJvbSBcInVnbGlmeS1qc1wiXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNjcmlwdEdlbmVyYXRvcihhbGxOb2RlczogTm9kZUNvbGxlY3Rpb24sIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSkge1xuICAgIC8vIEV4ZWN1dGFibGUgdG8gc3RvcmUgZ2VuZXJhdGVkIGphdmFzY3JpcHQgY29kZS4gQW55IGluaXRpYWxpc2F0aW9uIGNvZGUgc2hvdWxkIGJlIGhlcmUuXG4gICAgbGV0IGV4ZWN1dGFibGUgPSBcInZhciBncmFwaHMgPSB7fTtcIjtcblxuICAgIC8vIFNldHVwIHRpbWVcbiAgICBleGVjdXRhYmxlICs9IGluaXRUaW1lKC0xLCAxLCAwLjAwMSk7XG5cblxuXG5cbiAgICAvLyBDYWxjdWxhdGVkIG5vZGVzIGhhdmUgZm9sbG93aW5nIHNoYXBlOiBcIm5vZGVJZDpvdXRwdXRJZFwiXG4gICAgbGV0IGNhbGN1bGF0ZWROb2Rlczogc3RyaW5nW10gPSBbXTtcblxuICAgIC8vIFN0YXRpc3RpY3Mgb2JqZWN0XG4gICAgbGV0IHN0YXRpc3RpY3MgPSB7XG4gICAgICAgIGxvb3BDb3VudGVyOiAwLFxuICAgICAgICBpbml0aWFsVG90YWxOb2Rlczogb2JqZWN0U2l6ZShhbGxOb2RlcyksXG4gICAgICAgIGluaXRpYWxUb3RhbENvbm5lY3RvcnM6IGFsbENvbm5lY3Rpb25zLmxlbmd0aFxuICAgIH07XG5cbiAgICAvLyBTZXBhcmF0ZXMgdW5jYWxjdWxhdGVkIG5vZGVzIGFuZCBzY29wZXMgYXQgdGhlIHN0YXJ0LlxuICAgIGxldCB7dW5jYWxjdWxhdGVkTm9kZXMsIGFsbFNjb3Blc30gPSBnZXRVbmNhbGN1bGF0ZWROb2RlcyhhbGxOb2Rlcyk7XG5cbiAgICAvLyBTZXBhcmF0ZSB0b3VjaCBub2RlcyBmb3JtIHJlZ3VsYXIgbm9kZXNcbiAgICBsZXQgdG91Y2hOb2Rlc1NlcGFyYXRlZCA9IGdldFRvdWNoSW5wdXRzKHVuY2FsY3VsYXRlZE5vZGVzKTtcblxuICAgIHVuY2FsY3VsYXRlZE5vZGVzID0gdG91Y2hOb2Rlc1NlcGFyYXRlZC51bmNhbGN1bGF0ZWROb2RlcztcblxuICAgIC8vIERlYWwgd2l0aCB0b3VjaCBDb250cm9sc1xuICAgIGxldCB0b3VjaE5vZGVzID0gdG91Y2hOb2Rlc1NlcGFyYXRlZC50b3VjaE5vZGVzO1xuXG4gICAgZXhlY3V0YWJsZSArPSBnZW5lcmF0ZVRvdWNoQ29udHJvbGxlcnModG91Y2hOb2Rlcyk7XG4gICAgXG4gICAgZm9yKGxldCB0IGluIHRvdWNoTm9kZXMpIHtcbiAgICAgICAgZm9yKGxldCBvIGluIHRvdWNoTm9kZXNbdF0ub3V0cHV0cykge1xuICAgICAgICAgICAgY2FsY3VsYXRlZE5vZGVzLnB1c2goYCR7dH06JHt0b3VjaE5vZGVzW3RdLm91dHB1dHNbb10udGl0bGV9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbm5lY3Rpb24gRGljdGlvbmFyeSBjb250YWlucyBjb25uZWN0aW9ucyBpbiBrZXk6IHZhbHVlIGZvcm1hdCwgd2hlcmVcbiAgICAvLyBib3RoIGNvbnRhaW4gbm9kZUlkIGFuZCBzZXR0aW5nSWQgYXMgc3RyaW5ncyBzZXBhcmF0ZWQgYnkgYSBjb2xvbi5cbiAgICBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnkgPSBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5KGFsbENvbm5lY3Rpb25zKTtcblxuXG5cbiAgICAvLyBHZW5lcmFsIHJ1bGVzIGZvciBhbGdvcml0aG0gd3JpdGluZzpcbiAgICAvLyAqIHVzZSBhcyBtYW55IGZ1bmN0aW9ucyBhcyBwb3NzaWJsZSAoaW4gcGVyZm9ybWFuY2UgYm91bmRzKVxuICAgIC8vICogXG5cbiAgICAvLyAwLiBMb29wIHRocm91Z2ggdW5jYWxjdWxhdGVkIG5vZGVzIGFuZCBmaW5kIHNjb3Blcy4gU2NvcGVzIGRvIG5vdCBoYXZlIG91dHB1dHMsIHNvIG5vIG5lZWQgdG8gZmluZCBpbnB1dHMuXG4gICAgICAgIC8vIDAuMCBEbyBpdCBpbiBhIGZ1bmN0aW9uP1xuXG4gICAgLy8gMS4gTG9vcCB1bnRpbCBhbGwgbm9kZXMgYXJlIGNhbGN1bGF0ZWRcbiAgICAvLyB8ICAgMS4gQ2hlY2sgaWYgbm9kZSB3YXMgY2FsY3VsYXRlZCBiZWZvcmUsIGlmIHllcyBnbyB0byBuZXh0IG5vZGUuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgMi4gSWYgd2FzIG5vdCBjYWxjdWxhdGVkOlxuICAgIC8vIHwgICB8ICAgMS4gQ2hlY2sgaWYgYWxsIGNvbm5lY3RlZCBpbnB1dHMgYXJlIGNvbm5lY3RlZCB0byB0aGUgY2FsY3VsYXRlZCBub2RlcywgaWYgbm90IC0gZ28gdG8gbmV4dCBub2RlLiAoZnVuY3Rpb24pXG4gICAgLy8gfCAgIHwgICAyLiBJZiB5ZXMsIHNhdmUgYWxsIHVuY29ubmVjdGVkIGlucHV0cyAodmFsdWUgZnJvbSBkZWZhdWx0IHZhbHVlKS4gKGZ1bmN0aW9uIGZvciBlYWNoIHNhdmUpXG4gICAgLy8gfCAgIHwgICAzLiBDaGVjayBpZiBvdXRwdXQgaXMgcG9pbnRpbmcgdG8gYSBnZW5lcmF0b3IuIChmdW5jdGlvbilcbiAgICAvLyB8ICAgfCAgIDQuIElmIHllcywgcGFyc2UgZ2VuZXJhdG9yXG4gICAgLy8gfCAgIHwgICB8ICAgMS4gU2NhbiBnZW5lcmF0b3IgYW5kIHNhdmUgdmFyaWFibGVzXG4gICAgLy8gfCAgIHwgICB8ICAgMi4gSWYgdmFyaWFibGUgaXMgYSBnZW5lcmF0b3IgZ28gdG8gc3RlcCAxLjIuNFxuICAgIC8vIHwgICB8ICAgfCAgIDMuIExvb3AgdW50aWwgYWxsIGdlbmVyYXRvcnMgd2VyZSBwYXJzZWRcbiAgICAvLyB8ICAgfCAgIHwgLS0tLS0tLS0tLS0gSW4gZm9sbG93aW5nLCBpbnB1dHMgYXJlIGNoZWNrZWQgZmlyc3Qgc2luY2Ugc2V0dGluZyBjYW4gYmUgYW4gaW5wdXQgLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHwgICB8ICAgNS4gQ2hlY2sgaWYgb3V0cHV0IGlzIHBvaW50aW5nIHRvIGFuIGlucHV0LCBpZiB5ZXMgYXNzaWduIGlucHV0IHZhcmlhYmxlIHRvIHRoZSBvdXRwdXQgdmFyaWFibGVcbiAgICAvLyB8ICAgfCAgIDYuIENoZWNrIGlmIG91dHB1dCBpcyBwb2ludGluZyB0byBhIHNldHRpbmcsIGlmIHllcyBhc3NpZ24gY29uc3RhbnQgdG8gdGhlIHNldHRpbmdcbiAgICAvLyAyLiBGb3IgZWFjaCBzY29wZTpcbiAgICAvLyB8ICAgMS4gR2V0IGFsbCBpbnB1dHMgYW5kIHNhdmUgdGhlbSBpbiB2YXJpYWJsZXMgKGFzc3VtZWQgdG8gYmUgY2FsY3VsYXRlZCBzaW5jZSB0ZXJtaW5hdGlvbiBjb25kaXRpb24gZnJvbSBzdGVwIDEgaXMgYmFzZWQgb24gYWxsIG5vZGVzIGJlaW5nIGNhbGN1bGF0ZWQuKVxuICAgIC8vIHwgICAyLiBQYXJzZSBmaXJzdCBnZW5lcmF0b3IgYW5kIGdlbmVyYXRlIHNjb3BlIG91dHB1dCB2YXJpYWJsZSAobWFraW5nIHN1cmUgdGhhdCBhbGwgdmFyaWFibGVzIGZyb20gZ2VuZXJhdG9yIHdlcmUgc2F2ZWQgYmVmb3JlaGFuZClcbiAgICAvLyB8ICAgMy4gR2VuZXJhdGUgYW4gYXJyYXkgb2Ygb3V0cHV0IGRhdGEgYmFzZWQgb24gZ2VuZXJhbCAob3IgY29ubmVjdGVkKSB0aW1lIGFycmF5IGFuZCBzYXZlIGl0IGludG8gYSB2YXJpYWJsZVxuICAgIC8vIHwgICA0LiBDcmVhdGUgcmVkcmF3IGZ1bmN0aW9uLCBpbnNpZGUgdGhhdCBmdW5jdGlvbjpcbiAgICAvLyB8ICAgfCAgIDEuIEZpbmQgYXBwcm9wcmlhdGUgY2FudmFzIG5vZGUgaW4gdGhlIGRvbVxuICAgIC8vIHwgICB8ICAgMi4gR2V0IGNvbnRleHRcbiAgICAvLyB8ICAgfCAgIDMuIFJlcG9wdWxhdGUgZ3JhcGggYXJyYXkgd2l0aCBuZXcgZ3JhcGhzLlxuICAgIC8vIHwgICA1LiBDcmVhdGUgdXBkYXRlRGF0YSBmdW5jdGlvbiwgaW5zaWRlIHRoYXQgZnVuY3Rpb246XG4gICAgLy8gfCAgIHwgICAxLiBMb29wIHRocm91Z2ggZ3JhcGggYXJyYXkgYW5kIHVwZGF0ZSBncmFwaHMgd2l0aCBuZXcgZGF0YS5cblxuXG4gICAgLy8gMS4gTG9vcCB1bnRpbCBhbGwgbm9kZXMgYXJlIGNhbGN1bGF0ZWQgYW5kIGNvdW50IG51bWJlciBvZiBpdGVyYXRpb25zIGZvciBzdGF0aXN0aWNzXG4gICAgZm9yKHN0YXRpc3RpY3MubG9vcENvdW50ZXIgPSAwOyBvYmplY3RTaXplKHVuY2FsY3VsYXRlZE5vZGVzKSA+IDA7IHN0YXRpc3RpY3MubG9vcENvdW50ZXIrKykge1xuICAgICAgICAvLyAxLjAgTG9vcCB0aHJvdWdoIGFsbCB1bmNhbGN1bGF0ZWQgbm9kZXNcbiAgICAgICAgZm9yKGxldCBub2RlS2V5IGluIHVuY2FsY3VsYXRlZE5vZGVzKSB7XG4gICAgICAgICAgICAvLyBTYXZlIGN1cnJlbnQgbm9kZSBpbnRvIGEgY29uc3RhbnRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gdW5jYWxjdWxhdGVkTm9kZXNbbm9kZUtleV07XG5cbiAgICAgICAgICAgIC8vIEdvIHRvIG5leHQgbm9kZSBpZiBub3QgYWxsIGNvbm5lY3RlZCBpbnB1dHMgd2VyZSBjYWxjdWxhdGVkIGFscmVhZHlcbiAgICAgICAgICAgIGlmKCFhbGxJbnB1dHNDYWxjdWxhdGVkKG5vZGVLZXksIGN1cnJlbnROb2RlLmlucHV0cywgYWxsQ29ubmVjdGlvbnMsIGNhbGN1bGF0ZWROb2RlcykpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0czogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGV2ZXJ5IG91dHB1dCBvZiB0aGUgbm9kZSB0byBjYWxjdWxhdGUgdGhlbVxuICAgICAgICAgICAgZm9yKGxldCBvID0gMDsgbyA8IGN1cnJlbnROb2RlLm91dHB1dHMubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRLZXkgPSBjdXJyZW50Tm9kZS5vdXRwdXRzW29dLnRpdGxlO1xuICAgICAgICAgICAgICAgIC8vIElmIGN1cnJlbnQgb3V0cHV0IHdhcyBjYWxjdWxhdGVkIGFscmVhZHksIHNraXAgdG8gbmV4dCBvbmVcbiAgICAgICAgICAgICAgICBpZih3YXNDYWxjdWxhdGVkKGNhbGN1bGF0ZWROb2Rlcywgbm9kZUtleSwgb3V0cHV0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZUNhbGN1bGF0ZWRPdXRwdXRzLnB1c2goYCR7bm9kZUtleX06JHtvdXRwdXRLZXl9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIG5vdCwgY2FsY3VsYXRlIGl0IGFuZCBhcHBlbmQgdG8gdGhlIGV4ZWN1dGFibGUgdGV4dC5cbiAgICAgICAgICAgICAgICBsZXQgeyBleGUsIHdhc1N1Y2Nlc3NmdWwgfSA9IGNhbGN1bGF0ZU91dHB1dChub2RlS2V5LCBvdXRwdXRLZXksIGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYod2FzU3VjY2Vzc2Z1bCkge1xuICAgICAgICAgICAgICAgICAgICBleGVjdXRhYmxlICs9IGV4ZTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkTm9kZXMucHVzaChgJHtub2RlS2V5fToke291dHB1dEtleX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBDb3VsZCBub3QgZ2VuZXJhdGUgb3V0cHV0IGNvZGU6ICR7bm9kZUtleX0gLSAke291dHB1dEtleX0gfCBzY3JpcHRHZW5lcmF0b3IudHNgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY3VycmVudE5vZGVDYWxjdWxhdGVkT3V0cHV0cy5sZW5ndGggPT09IGN1cnJlbnROb2RlLm91dHB1dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHVuY2FsY3VsYXRlZE5vZGVzW25vZGVLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gTG9vcCB0aHJvdWdoIGFsbCBzY29wZXMgYW5kIGRyYXcgZ3JhcGhzXG5cbiAgICBjb25zdCBub2RlRnVuY3Rpb25zID0gZXhlY3V0YWJsZTtcbiAgICBleGVjdXRhYmxlID0gXCJcIjtcblxuICAgIGV4ZWN1dGFibGUgKz0gXCJmdW5jdGlvbiB1cGRhdGUoKSB7XFxuXCI7XG5cbiAgICBmb3IobGV0IHMgaW4gYWxsU2NvcGVzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29wZSA9IGFsbFNjb3Blc1tzXTtcblxuICAgICAgICAvLyBjb25zdCBvdXRwdXRHZW5lcmF0b3IgPSBjdXJyZW50U2NvcGUuZ2VuZXJhdG9yc1swXTtcblxuICAgICAgICAvLyBjb25zdCBvdXRwdXRUb2tlbnMgPSB0b2tlbml6ZUdlbmVyYXRvcihvdXRwdXRHZW5lcmF0b3IudmFsdWUsIHMpO1xuXG4gICAgICAgIGNvbnN0IHsgb3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkIH0gPSBnZXRPdGhlclNpZGVPZkNvbm5lY3RvcihhbGxDb25uZWN0aW9ucywgbnVsbCwge25vZGVJZDogcywgc2V0dGluZ0lkOiBcInNpZ25hbFwifSk7XG5cbiAgICAgICAgZXhlY3V0YWJsZSArPSBgXG4gICAgICAgICAgICBpZihncmFwaHMuJHtzfSkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0gW107XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtuZXdEYXRhLnB1c2goJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0W2ldKSk7fVxuICAgICAgICAgICAgICAgIGdyYXBocy4ke3N9LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IG5ld0RhdGE7XG4gICAgICAgICAgICAgICAgZ3JhcGhzLiR7c30udXBkYXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBjYW52YXNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke3N9XCIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHZpZXdTaXplID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBjYW52YXNOb2RlLnBhcmVudE5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGNhbnZhc05vZGUucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzTm9kZS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgdyA9IHZpZXdTaXplLng7XG4gICAgICAgICAgICAgICAgdmFyIGggPSB2aWV3U2l6ZS55IC8gJHtvYmplY3RTaXplKGFsbFNjb3Blcyl9O1xuXG4gICAgICAgICAgICAgICAgY2FudmFzTm9kZS53aWR0aCA9IHc7XG4gICAgICAgICAgICAgICAgY2FudmFzTm9kZS5oZWlnaHQgPSBoO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCgke290aGVyTm9kZUlkfSR7b3RoZXJTZXR0aW5nSWR9KHRbaV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge2xhYmVsczogdC5tYXAodGkgPT4gdGkudG9GaXhlZCgxKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2lnbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYigyNTUsIDEyMCwgMTMyKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwcGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGl0UmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlclJhZGl1czogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0b29sdGlwczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSR7Y3VycmVudFNjb3BlLnNldHRpbmdzWzBdLnZhbHVlID09IFwidHJ1ZVwiID8gJycgOiBgLCBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMC41XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSwgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMC41XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICBncmFwaHMuJHtzfSA9IG15Q2hhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZXhlY3V0YWJsZSArPSBcIn07XFxuXCJcbiAgICBleGVjdXRhYmxlICs9IFwidXBkYXRlKCk7XCJcblxuICAgIC8vIHJldHVybiBVZ2xpZnlKUy5taW5pZnkoZXhlY3V0YWJsZSk7XG5cbiAgICByZXR1cm4gW25vZGVGdW5jdGlvbnMsIGV4ZWN1dGFibGVdO1xufVxuIiwiaW1wb3J0IHsgdG9rZW5pemVHZW5lcmF0b3IsIEdlbmVyYXRvclNlZ21lbnQgfSBmcm9tICcuL2dlbmVyYXRvclRva2VuaXplcic7XG5pbXBvcnQgeyB0b2tlblRvSnMgfSBmcm9tICcuL3Rva2VuVG9Kcyc7XG5cbi8vIEdldCBhbGwgbm9kZXMgdGhhdCBhcmUgbm90IHNjb3BlcywgYW5kIHNhdmUgc2NvcGVzIGludG8gdGhlaXIgb3duIGNvbGxlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmNhbGN1bGF0ZWROb2RlcyAoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKSA6IHt1bmNhbGN1bGF0ZWROb2RlczogTm9kZUNvbGxlY3Rpb24sIGFsbFNjb3BlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgdW5jYWxjdWxhdGVkOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuICAgIGxldCBzY29wZXM6IE5vZGVDb2xsZWN0aW9uID0ge307XG5cbiAgICBmb3IobGV0IGkgaW4gYWxsTm9kZXMpIHtcbiAgICAgICAgaWYoU3RyaW5nKGkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBzY29wZXNbaV0gPSBhbGxOb2Rlc1tpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuY2FsY3VsYXRlZFtpXSA9IGFsbE5vZGVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IHVuY2FsY3VsYXRlZCxcbiAgICAgICAgYWxsU2NvcGVzOiBzY29wZXNcbiAgICB9O1xufVxuXG4vLyBHZW5lcmF0ZSBjb25uZWN0aW9uIGRpY3Rpb25hcnlcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbm5lY3Rpb25EaWN0aW9uYXJ5IChhbGxDb25uZWN0aW9uczogQ29ubmVjdG9yW10pOiB7W2Nvbm5lY3RvclN0YXJ0OiBzdHJpbmddOiBzdHJpbmd9IHtcbiAgICBsZXQgY29ubmVjdGlvbkRpY3Rpb25hcnk6IHtbY29ubmVjdG9yU3RhcnQ6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb25uZWN0b3JTdGFydCA9IGFsbENvbm5lY3Rpb25zW2ldLmNvbm5lY3RvclN0YXJ0O1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmQgPSBhbGxDb25uZWN0aW9uc1tpXS5jb25uZWN0b3JFbmQ7XG5cbiAgICAgICAgY29uc3QgY29ubmVjdG9yU3RhcnRDb21iaW5lZCA9IGNvbm5lY3RvclN0YXJ0Lm5vZGVJZCArIFwiOlwiICsgY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkO1xuICAgICAgICBjb25zdCBjb25uZWN0b3JFbmRDb21iaW5lZCA9IGNvbm5lY3RvckVuZC5ub2RlSWQgKyBcIjpcIiArIGNvbm5lY3RvckVuZC5zZXR0aW5nSWQ7XG5cbiAgICAgICAgY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdG9yU3RhcnRDb21iaW5lZF0gPSBjb25uZWN0b3JFbmRDb21iaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29ubmVjdGlvbkRpY3Rpb25hcnk7XG59XG5cbi8vIENhbGN1bGF0ZSBvYmplY3Qgc2l6ZVxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFNpemUgKG9iajogb2JqZWN0KTogbnVtYmVyIHtcbiAgICBsZXQgYyA9IDA7XG4gICAgZm9yKGxldCBpIGluIG9iaikgYysrO1xuICAgIHJldHVybiBjKys7XG59XG5cbi8vIENoZWNrIGlmIG5vZGUgd2FzIGNhbGN1bGF0ZWQgYWxyZWFkeVxuZXhwb3J0IGZ1bmN0aW9uIHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzOiBzdHJpbmdbXSwgbm9kZUtleTogc3RyaW5nLCBvdXRwdXRLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYWxjdWxhdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU3BsaXQgc3RyaW5nIGZyb20gY2FsY3VsYXRlZCBub2RlcyBhcnJheSBhbmQgZ2V0IG5vZGUgYW5kIG91dHB1dCBrZXlzXG4gICAgICAgIGNvbnN0IHNwbGl0dGVkID0gY2FsY3VsYXRlZE5vZGVzW2ldLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE5vZGUgPSBzcGxpdHRlZFswXTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE91dHB1dCA9IHNwbGl0dGVkWzFdO1xuXG4gICAgICAgIGlmKGNhbGN1bGF0ZWROb2RlID09PSBub2RlS2V5ICYmIGNhbGN1bGF0ZWRPdXRwdXQgPT09IG91dHB1dEtleSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBHZXQgbm9kZUlkIGFuZCBzZXR0aW5nSWQgb2YgdGhlIG90aGVyIHNpZGUgb2YgdGhlIGNvbm5lY3Rpb246XG5leHBvcnQgZnVuY3Rpb24gZ2V0T3RoZXJTaWRlT2ZDb25uZWN0b3IoXG4gICAgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBcbiAgICBjb25uZWN0b3JJbnB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9LFxuICAgIGNvbm5lY3Rvck91dHB1dD86IHtub2RlSWQ6IHN0cmluZywgc2V0dGluZ0lkOiBzdHJpbmd9KToge290aGVyTm9kZUlkOiBzdHJpbmcsIG90aGVyU2V0dGluZ0lkOiBzdHJpbmd9IHtcblxuICAgIGlmKGNvbm5lY3RvcklucHV0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgY29ubmVjdG9yIHN0YXJ0cy4uLlwiKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RvciA9IGFsbENvbm5lY3Rpb25zW2ldO1xuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIHN0YXJ0XG4gICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQubm9kZUlkID09PSBjb25uZWN0b3JJbnB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yU3RhcnQuc2V0dGluZ0lkID09PSBjb25uZWN0b3JJbnB1dC5zZXR0aW5nSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZUlkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyU2V0dGluZ0lkOiBjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChjb25uZWN0b3JPdXRwdXQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTY2FubmluZyBjb25uZWN0b3IgZW5kcy4uLiBcIiwgYWxsQ29ubmVjdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxDb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29ubmVjdG9yID0gYWxsQ29ubmVjdGlvbnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ29tcGFyaW5nIGZvbGxvd2luZyBjb25uZWN0b3JzOiBcIiwgY29ubmVjdG9yLmNvbm5lY3RvckVuZCwgY29ubmVjdG9yT3V0cHV0KVxuICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY29ubmVjdG9yIGVuZFxuICAgICAgICAgICAgaWYoY29ubmVjdG9yLmNvbm5lY3RvckVuZC5ub2RlSWQgPT09IGNvbm5lY3Rvck91dHB1dC5ub2RlSWQpIHtcbiAgICAgICAgICAgICAgICBpZihjb25uZWN0b3IuY29ubmVjdG9yRW5kLnNldHRpbmdJZCA9PT0gY29ubmVjdG9yT3V0cHV0LnNldHRpbmdJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlSWQ6IGNvbm5lY3Rvci5jb25uZWN0b3JTdGFydC5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclNldHRpbmdJZDogY29ubmVjdG9yLmNvbm5lY3RvclN0YXJ0LnNldHRpbmdJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3RoZXJOb2RlSWQ6IG51bGwsXG4gICAgICAgIG90aGVyU2V0dGluZ0lkOiBudWxsXG4gICAgfVxufVxuXG5cbi8vIENoZWNrIGlmIGFsbCBjb25uZWN0ZWQgaW5wdXRzIGluIHRoZSBub2RlIGFyZSBjb25uZWN0ZWQgdG8gdGhlIG91dHB1dHMgdGhhdCB3ZXJlIGFscmVhZHkgY2FsY3VsYXRlZCBvciBhcmUgbm90IGNvbm5lY3RlZFxuZXhwb3J0IGZ1bmN0aW9uIGFsbElucHV0c0NhbGN1bGF0ZWQobm9kZUlkOiBzdHJpbmcsIGlucHV0czogTm9kZUlucHV0U2hhcGVbXSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBjYWxjdWxhdGVkTm9kZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgbGV0IGRhdGE6IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudERhdGEgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCB7bm9kZUlkOiBub2RlSWQsIHNldHRpbmdJZDogaW5wdXRzW2ldLnRpdGxlfSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIGNvbm5lY3RlZFxuICAgICAgICBpZihvdGhlck5vZGVJZCAmJiBvdGhlclNldHRpbmdJZCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2FzIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIGlmKHdhc0NhbGN1bGF0ZWQoY2FsY3VsYXRlZE5vZGVzLCBvdGhlck5vZGVJZCwgb3RoZXJTZXR0aW5nSWQpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGEgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGlucHV0IGlzIG5vdCBjb25uZWN0ZWRcbiAgICAgICAgICAgIGN1cnJlbnREYXRhID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaChjdXJyZW50RGF0YSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBkIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGFbZF0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIHNwZWNpZmljIG91dHB1dCBvZiB0aGUgbm9kZVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU91dHB1dChcbiAgICBub2RlSWQ6IHN0cmluZywgXG4gICAgb3V0cHV0S2V5OiBzdHJpbmcsIFxuICAgIGN1cnJlbnROb2RlOiBTaWduYWxOb2RlLFxuICAgIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHsgZXhlOiBzdHJpbmcsIHdhc1N1Y2Nlc3NmdWw6IGJvb2xlYW4gfSB7XG4gICAgXG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgY29uc3QgZ2VuZXJhdG9ySWQgPSBpc0dlbmVyYXRvcihjdXJyZW50Tm9kZSwgb3V0cHV0S2V5KTtcblxuICAgIC8vIENoZWNrIGlmIG91dHB1dCBpcyBhIGdlbmVyYXRvclxuICAgIGlmKGdlbmVyYXRvcklkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBjb25zdCBvdXRwdXRHZW5lcmF0b3IgPSBjdXJyZW50Tm9kZS5nZW5lcmF0b3JzW2dlbmVyYXRvcklkXTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSB0b2tlbnNcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdG9rZW5pemVHZW5lcmF0b3Iob3V0cHV0R2VuZXJhdG9yLnZhbHVlLCBub2RlSWQpO1xuXG4gICAgICAgIC8vIFNhdmUgdmFyaWFibGVzIGZpcnN0XG4gICAgICAgIGUgKz0gc2F2ZVZhcmlhYmxlcyhub2RlSWQsIGN1cnJlbnROb2RlLCB0b2tlbnMsIGFsbENvbm5lY3Rpb25zKTtcblxuICAgICAgICAvLyBTYXZlIG91dHB1dFxuICAgICAgICBlICs9IHRva2VuVG9Kcyhub2RlSWQsIG91dHB1dEdlbmVyYXRvci50aXRsZSwgdG9rZW5zKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRJZCA9IGlzSW5wdXQoY3VycmVudE5vZGUsIG91dHB1dEtleSk7XG5cbiAgICBpZihpbnB1dElkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IHNhdmVJbnB1dFZhcmlhYmxlKGN1cnJlbnROb2RlLCBhbGxDb25uZWN0aW9ucywgbm9kZUlkLCBvdXRwdXRLZXksIGlucHV0SWQpO1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZUlkfSR7Y3VycmVudE5vZGUuaW5wdXRzW2lucHV0SWRdLnRpdGxlfX07XFxuYDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhlOiBlLFxuICAgICAgICAgICAgd2FzU3VjY2Vzc2Z1bDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dGluZ0lkID0gaXNTZXR0aW5nKGN1cnJlbnROb2RlLCBvdXRwdXRLZXkpO1xuXG4gICAgaWYoc2V0dGluZ0lkICE9PSBJbmZpbml0eSkge1xuICAgICAgICBlICs9IGB2YXIgJHtub2RlSWR9JHtvdXRwdXRLZXl9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7Y3VycmVudE5vZGUuc2V0dGluZ3Nbc2V0dGluZ0lkXS52YWx1ZX19O1xcbmA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4ZTogZSxcbiAgICAgICAgICAgIHdhc1N1Y2Nlc3NmdWw6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGV4ZTogXCJcIixcbiAgICAgICAgd2FzU3VjY2Vzc2Z1bDogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVWYXJpYWJsZXMobm9kZUtleTogc3RyaW5nLCBub2RlOiBTaWduYWxOb2RlLCBjb2RlOiBHZW5lcmF0b3JTZWdtZW50W10sIGFsbENvbm5lY3Rpb25zOiBDb25uZWN0b3JbXSk6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBzID0gMDsgcyA8IGNvZGUubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgaWYoY29kZVtzXS50eXBlID09PSBcInZhclwiKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJOYW1lOiBzdHJpbmcgPSBTdHJpbmcoY29kZVtzXS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJOYW1lLnN1YnN0cihub2RlS2V5Lmxlbmd0aCwgdmFyTmFtZS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTUEVDSUFMIENBU0UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpZih2YXJOYW1lID09PSBcIlBJXCIgfHwgdmFyTmFtZSA9PT0gXCJ0aW1lXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBJTlBVVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgaW5wdXQgaW5kZXhcbiAgICAgICAgICAgIGxldCBpbnB1dEtleTogbnVtYmVyID0gaXNJbnB1dChub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiB2YXJpYWJsZSBpcyB0aGUgaW5wdXQgKGlmIG5vdCBpbnB1dCBpdCB3aWxsIGJlIEluZmluaXR5KVxuICAgICAgICAgICAgaWYoaW5wdXRLZXkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZVxuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gc2F2ZUlucHV0VmFyaWFibGUobm9kZSwgYWxsQ29ubmVjdGlvbnMsIG5vZGVLZXksIHZhcmlhYmxlTmFtZSwgaW5wdXRLZXkpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEZvdW5kIHZhcmlhYmxlIGluIGlucHV0cyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBbmQgY29udGludWUgdG8gdGhlIG5leHQgc3RlcCBpbiB0aGUgdG9rZW5pc2VkIGdlbmVyYXRvciBjb2RlXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElGIEdFTkVSQVRPUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBHZXQgZ2VuZXJhdG9yIGluZGV4XG4gICAgICAgICAgICBsZXQgZ2VuZXJhdG9yS2V5OiBudW1iZXIgPSBpc0dlbmVyYXRvcihub2RlLCB2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBJZiBnZW5lcmF0b3IgaW5kZXggaXMgbm90IGFuIEluZmluaXR5LCB0aGUgc2V0dGluZyBpcyB0aGUgZ2VuZXJhdG9yLCBhbmQgc2hvdWxkIGJlIHByb2Nlc3NlZCBhcyBvbmVcbiAgICAgICAgICAgIGlmKGdlbmVyYXRvcktleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSBub2RlLmdlbmVyYXRvcnNbZ2VuZXJhdG9yS2V5XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHRva2VuaXplR2VuZXJhdG9yKGdlbmVyYXRvci52YWx1ZSwgbm9kZUtleSk7XG5cbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgdG9rZW5zLCBhbGxDb25uZWN0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBnZW5lcmF0b3IgdGl0bGVcbiAgICAgICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHRva2VuVG9Kcyhub2RlS2V5LCBnZW5lcmF0b3IudGl0bGUsIHRva2Vucyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gZ2VuZXJhdG9ycyAke3ZhcmlhYmxlTmFtZX0gLSAke25vZGVLZXl9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0byB0aGUgbmV4dCB0b2tlblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBTRVRUSU5HIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIEdldCBzZXR0aW5nIGluZGV4XG4gICAgICAgICAgICBsZXQgc2V0dGluZ0tleTogbnVtYmVyID0gaXNTZXR0aW5nKG5vZGUsIHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHNldHRpbmcgaW5kZXggaXMgbm90IGluZmluaXR5IC0gaXQncyBhIG1hdGNoIVxuICAgICAgICAgICAgaWYoc2V0dGluZ0tleSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgRm91bmQgdmFyaWFibGUgaW4gc2V0dGluZ3MgJHt2YXJpYWJsZU5hbWV9IC0gJHtub2RlS2V5fWApO1xuICAgICAgICAgICAgICAgIG5ld0V4ZWN1dGFibGUgKz0gYHZhciAke25vZGVLZXl9JHt2YXJpYWJsZU5hbWV9ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuICR7bm9kZS5zZXR0aW5nc1tzZXR0aW5nS2V5XS52YWx1ZX0gfTtcXG5gO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJRiBOT1QgQU5ZIE9GIFRIUkVFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIElmIG5vdCBvbmUgb2YgcHJldmlvdXMgdGhyZWUsIGFsZXJ0IHVzZXIuXG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IGBhbGVydChcIkNvdWxkbid0IGZpbmQgZ2VuZXJhdG9yIHZhcmlhYmxlIGluIHRoZSBpbnB1dHMsIGdlbmVyYXRvcnMgb3Igc2V0dGluZ3MhICR7bm9kZUtleX0gLSAke3Zhck5hbWV9XCIpO1xcbmA7XG4gICAgICAgIH0gZWxzZSBpZihjb2RlW3NdLnR5cGUgPT09IFwibWF0aFwiIHx8IGNvZGVbc10udHlwZSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBuZXdFeGVjdXRhYmxlICs9IHNhdmVWYXJpYWJsZXMobm9kZUtleSwgbm9kZSwgY29kZVtzXS5jb2RlLCBhbGxDb25uZWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gc2F2ZUlucHV0VmFyaWFibGUobm9kZTogU2lnbmFsTm9kZSwgYWxsQ29ubmVjdGlvbnM6IENvbm5lY3RvcltdLCBub2RlS2V5OiBzdHJpbmcsIHNldHRpbmdLZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IG5ld0V4ZWN1dGFibGU6IHN0cmluZztcbiAgICBjb25zdCBjb25uZWN0b3JFbmQgPSB7XG4gICAgICAgIG5vZGVJZDogbm9kZUtleSxcbiAgICAgICAgc2V0dGluZ0lkOiBzZXR0aW5nS2V5XG4gICAgfVxuICAgIFxuICAgIGxldCB7b3RoZXJOb2RlSWQsIG90aGVyU2V0dGluZ0lkfSA9IGdldE90aGVyU2lkZU9mQ29ubmVjdG9yKGFsbENvbm5lY3Rpb25zLCBudWxsLCBjb25uZWN0b3JFbmQpO1xuXG4gICAgLy8gY29uc29sZS5sb2coYFRyYWNpbmcgYmFjayB0aGUgaW5wdXQ6ICR7bm9kZUtleX06JHtzZXR0aW5nS2V5fSAtPiAke290aGVyTm9kZUlkfToke290aGVyU2V0dGluZ0lkfWApO1xuICAgIFxuICAgIC8vIElmIG5vZGUgaXMgY29ubmVjdGVkXG4gICAgaWYob3RoZXJOb2RlSWQgJiYgb3RoZXJTZXR0aW5nSWQpIHtcbiAgICAgICAgLy8gU2F2ZSBcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtvdGhlck5vZGVJZH0ke290aGVyU2V0dGluZ0lkfSh0aW1lKX07XFxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTYXZlIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgbmV3RXhlY3V0YWJsZSA9IGB2YXIgJHtub2RlS2V5fSR7c2V0dGluZ0tleX0gPSBmdW5jdGlvbiAodGltZSkgeyByZXR1cm4gJHtub2RlLmlucHV0c1tpbmRleF0uZGVmYXVsdH19O1xcbmBcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXhlY3V0YWJsZTtcbn1cblxuZnVuY3Rpb24gaXNJbnB1dCAobm9kZTogU2lnbmFsTm9kZSwgc2V0dGluZ0tleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBDaGVjayBpZiB2YXJpYWJsZSBpcyBpbiBpbnB1dHNcbiAgICBpZihub2RlLmlucHV0cykge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZS5pbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIElmIHZhcmlhYmxlIGlzIHRoZSBpbnB1dCwgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIGlmKG5vZGUuaW5wdXRzW2ldLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW5maW5pdHk7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5nZW5lcmF0b3JzKSB7XG4gICAgICAgIGlmKG5vZGUuZ2VuZXJhdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IobGV0IGcgPSAwOyBnIDwgbm9kZS5nZW5lcmF0b3JzLmxlbmd0aDsgZysrKSB7XG4gICAgICAgICAgICAgICAgaWYobm9kZS5nZW5lcmF0b3JzW2ddLnRpdGxlID09PSBzZXR0aW5nS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbmZpbml0eTtcbn1cblxuZnVuY3Rpb24gaXNTZXR0aW5nKG5vZGU6IFNpZ25hbE5vZGUsIHNldHRpbmdLZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgLy8gU2NhbiBnZW5lcmF0b3JzXG4gICAgaWYobm9kZS5zZXR0aW5ncykge1xuICAgICAgICBmb3IobGV0IHMgPSAwOyBzIDwgbm9kZS5zZXR0aW5ncy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gc2V0dGluZ0tleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEluZmluaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hJbnB1dHMoYWxsTm9kZXM6IE5vZGVDb2xsZWN0aW9uKToge3VuY2FsY3VsYXRlZE5vZGVzOiBOb2RlQ29sbGVjdGlvbiwgdG91Y2hOb2RlczogTm9kZUNvbGxlY3Rpb259IHtcbiAgICBsZXQgbmV3Q29sbGVjdGlvbjogTm9kZUNvbGxlY3Rpb24gPSB7fTtcbiAgICBsZXQgbmV3VG91Y2hDb2xsZWN0aW9uOiBOb2RlQ29sbGVjdGlvbiA9IHt9O1xuXG4gICAgZm9yKGxldCBuIGluIGFsbE5vZGVzKSB7XG4gICAgICAgIGlmKG4uc3Vic3RyKDAsIDEwKSA9PT0gXCJ0b3VjaElucHV0XCIpIHtcbiAgICAgICAgICAgIG5ld1RvdWNoQ29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q29sbGVjdGlvbltuXSA9IGFsbE5vZGVzW25dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdW5jYWxjdWxhdGVkTm9kZXM6IG5ld0NvbGxlY3Rpb24sXG4gICAgICAgIHRvdWNoTm9kZXM6IG5ld1RvdWNoQ29sbGVjdGlvblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lKHN0YXJ0OiBudW1iZXIsIHN0b3A6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgbGV0IGUgPSBcImxldCB0ID0gXCI7XG4gICAgbGV0IHRpbWU6IG51bWJlcltdID0gW107XG5cbiAgICBmb3IobGV0IGkgPSBzdGFydDsgaSA8PSBzdG9wOyBpKz1zdGVwKSB7XG4gICAgICAgIHRpbWUucHVzaChwYXJzZUZsb2F0KGkudG9GaXhlZCgzKSkpO1xuICAgIH1cblxuICAgIGUgKz0gSlNPTi5zdHJpbmdpZnkodGltZSk7XG4gICAgZSArPSBcIjtcXG5cIjtcblxuICAgIHJldHVybiBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb3VjaENvbnRyb2xsZXJzKG5vZGVzOiBOb2RlQ29sbGVjdGlvbik6IHN0cmluZyB7XG4gICAgbGV0IGUgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBpIGluIG5vZGVzKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblxuICAgICAgICBsZXQgc2Vuc2l0aXZpdHk6IE5vZGVTZXR0aW5nc1NoYXBlO1xuICAgICAgICBsZXQgYXR0YWNoZWRTY29wZTogTm9kZVNldHRpbmdzU2hhcGU7XG4gICAgICAgIGxldCBvZmZzZXRYOiBOb2RlU2V0dGluZ3NTaGFwZTtcbiAgICAgICAgbGV0IG9mZnNldFk6IE5vZGVTZXR0aW5nc1NoYXBlO1xuXG4gICAgICAgIC8vIFNlcGFyYXRlIHNldHRpbmdzXG4gICAgICAgIGZvcihsZXQgcyBpbiBub2RlLnNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZihub2RlLnNldHRpbmdzW3NdLnRpdGxlID09PSBcIlNlbnNpdGl2aXR5XCIpIHtcbiAgICAgICAgICAgICAgICBzZW5zaXRpdml0eSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJBdHRhY2hlZCBTY29wZVwiKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNoZWRTY29wZSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJPZmZzZXQgWFwiKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5zZXR0aW5nc1tzXS50aXRsZSA9PT0gXCJPZmZzZXQgWVwiKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IG5vZGUuc2V0dGluZ3Nbc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb3VjaCBub2RlIGlzIG5vdCBjb3JyZWN0bHkgZm9ybWF0dGVkLlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgb2Zmc2V0U2NyaXB0ID0gYGlmKCFkaWRBdHRhY2gke2l9KSB7XG4gICAgICAgICAgICBsZXQgb25Ib2xkRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgd2luZG93LnRvdWNoTGFzdFBvc2l0aW9uWT0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNoZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub250b3VjaGVuZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoJHtvZmZzZXRYLnZhbHVlID09IFwidHJ1ZVwifSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFhEYXRhICs9IGUubW92ZW1lbnRYKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoJHtvZmZzZXRZLnZhbHVlID09IFwidHJ1ZVwifSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtpfU9mZnNldFlEYXRhICs9IGUubW92ZW1lbnRZKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudFggPSB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25YIC0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50WSA9IHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblkgLSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCR7b2Zmc2V0WC52YWx1ZSA9PSBcInRydWVcIn0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aX1PZmZzZXRYRGF0YSArPSBtb3ZlbWVudFgqJHtwYXJzZUZsb2F0KHNlbnNpdGl2aXR5LnZhbHVlKX07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZigke29mZnNldFkudmFsdWUgPT0gXCJ0cnVlXCJ9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAke2l9T2Zmc2V0WURhdGEgKz0gbW92ZW1lbnRZKiR7cGFyc2VGbG9hdChzZW5zaXRpdml0eS52YWx1ZSl9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b3VjaExhc3RQb3NpdGlvblggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudG91Y2hMYXN0UG9zaXRpb25ZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIke2F0dGFjaGVkU2NvcGUudmFsdWV9XCIpLm9ubW91c2Vkb3duID0gb25Ib2xkRG93bjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHthdHRhY2hlZFNjb3BlLnZhbHVlfVwiKS5vbnRvdWNoc3RhcnQgPSBvbkhvbGREb3duO1xuXG4gICAgICAgICAgICBkaWRBdHRhY2gke2l9T2Zmc2V0WCA9IHRydWU7XG4gICAgICAgICAgICBkaWRBdHRhY2gke2l9T2Zmc2V0WSA9IHRydWU7XG4gICAgICAgIH1cXG5gO1xuXG4gICAgICAgIGZvcihsZXQgbyBpbiBub2RlLm91dHB1dHMpIHtcbiAgICAgICAgICAgIGUgKz0gYHZhciAke2l9JHtub2RlLm91dHB1dHNbb10udGl0bGV9RGF0YSA9IDE7XFxuYDtcbiAgICAgICAgICAgIGUgKz0gYHZhciBkaWRBdHRhY2gke2l9ID0gZmFsc2U7XFxuYDtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlICs9IGB2YXIgJHtpfSR7bm9kZS5vdXRwdXRzW29dLnRpdGxlfSA9IGZ1bmN0aW9uKHRpbWUpIHsgcmV0dXJuICR7aX0ke25vZGUub3V0cHV0c1tvXS50aXRsZX1EYXRhIH07XFxuYFxuICAgICAgICB9XG5cbiAgICAgICAgZSArPSBvZmZzZXRTY3JpcHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGU7XG59IiwiLy8gQXMgYSByZW1pbmRlcjpcbi8vIE9uZSBpdGVtIGluIGFuIGFycmF5IG9mIHRva2VucyBjYW4gb25seSBiZSBhbiBvYmplY3QgYW5kIG9ubHkgaGF2ZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbi8vICogdHlwZSAgICAgICAgICAgLSBmb3IgZXZlcnkgdG9rZW5cbi8vICogdmFsdWUgICAgICAgICAgLSBmb3IgZXZlcnkgdG9rZW5cbi8vICogY29kZSAgLSBmb3Igc2NvcGVzIChtYXRoL3JlZ3VsYXIpXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlblRvSnMgKG5vZGVJZCwgdmFyaWFibGVOYW1lLCBqc29uVG9rZW5zKSB7XG4gICAgbGV0IGV4ZWN1dGFibGVTdHJpbmcgPSBgdmFyICR7bm9kZUlkfSR7dmFyaWFibGVOYW1lfSA9IGZ1bmN0aW9uKHRpbWUpIHsgcmV0dXJuIGA7XG4gICAgXG4gICAgZXhlY3V0YWJsZVN0cmluZyArPSBjYWxjdWxhdGVDb2RlKFsuLi5qc29uVG9rZW5zXSlcblxuICAgIHJldHVybiBleGVjdXRhYmxlU3RyaW5nICsgXCJ9O1xcblwiO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVDb2RlKGpzb24pIHtcbiAgICBsZXQgZXhlY3V0YWJsZVN0cmluZyA9IFwiXCI7XG5cbiAgICBpZihqc29uID09IG51bGwpIHJldHVybiBcIlwiO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gVmFyaWFibGVzIGZvciBjb252ZW5pZW5jZVxuICAgICAgICBjb25zdCB0b2tlbiA9IGpzb25baV07XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0b2tlbi50eXBlO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRva2VuLnZhbHVlO1xuXG4gICAgICAgIC8vIEFjdHVhbCBsb2dpY1xuICAgICAgICBpZih0eXBlICE9IFwic2NvcGVcIiAmJiB0eXBlICE9IFwibWF0aFwiKSB7XG4gICAgICAgICAgICAvLyBPbmUgb2YgdGhlIGJhc2ljIHR5cGVzXG5cbiAgICAgICAgICAgIGlmKHZhbHVlID09PSAnUEknKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguUElcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ2YXJcIiAmJiB2YWx1ZSAhPT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IGAke3ZhbHVlfSh0aW1lKWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJtYXRoXCIpIHtcbiAgICAgICAgICAgIC8vIE1hdGggZnVuY3Rpb25cblxuICAgICAgICAgICAgaWYodmFsdWUgPT09IFwic2luXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmdW5jdGlvbnMsIHJlY3Vyc2V2bHkgZ2VuZXJhdGUgc3RyaW5nIGZyb20gdGhlIGNvZGUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIk1hdGguc2luKFwiO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGFibGVTdHJpbmcgKz0gY2FsY3VsYXRlQ29kZSh0b2tlbi5jb2RlKTtcbiAgICAgICAgICAgICAgICBleGVjdXRhYmxlU3RyaW5nICs9IFwiKVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBub3Qgc3VwcG9ydGVkIGZ1bmN0aW9uLCB0aHJvdyBlcnJvciB0byB0aGUgY29uc29sZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbnN1cHBvcnRlZCBtYXRoIGZ1bmN0aW9uICEhIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlZ3VsYXIgc2NvcGVcblxuICAgICAgICAgICAgZXhlY3V0YWJsZVN0cmluZyArPSBcIihcIiArIGNhbGN1bGF0ZUNvZGUodG9rZW4uY29kZSkgKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBleGVjdXRhYmxlU3RyaW5nO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHN0eWxlcyA9IGBcbiAgICAjc2lnbmFscy1lbWJlZGRpbmctY29udGFpbmVyLCAjc2lnbmFscy12aWV3cywgLnNpZ25hbHMtY2FudmFzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICNzaWduYWxzLXZpZXdzIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgfVxuYFxuXG5leHBvcnQgZnVuY3Rpb24ganN4RG9tIChub2Rlcykge1xuICAgIGxldCBvdXRwdXROb2RlcyA9IFtdO1xuXG4gICAgLy8gR2V0IGFsbCBraW5kcyBvZiBvdXRwdXQgbm9kZXNcbiAgICBmb3IobGV0IGtleSBpbiBub2Rlcykge1xuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2Rlc1trZXldO1xuXG4gICAgICAgIGlmKFN0cmluZyhrZXkpLnN1YnN0cigwLCA1KSA9PT0gXCJzY29wZVwiKSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5pZCA9IGtleTtcbiAgICAgICAgICAgIG91dHB1dE5vZGVzLnB1c2goY3VycmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2cob3V0cHV0Tm9kZXMpO1xuXG4gICAgLy8gR2VuZXJhdGUgRHluYW1pYyBTdHVmZlxuICAgIGNvbnN0IGNhbnZhc0pzeCA9IG91dHB1dE5vZGVzLmxlbmd0aCA+IDAgPyBvdXRwdXROb2Rlcy5tYXAobm9kZSA9PiB7XG4gICAgICAgIHJldHVybiAoPGNhbnZhcyBjbGFzc05hbWU9XCJzaWduYWxzLWNhbnZhc1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake25vZGUuaWR9YH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25vZGUuaWR9XG4gICAgICAgID48L2NhbnZhcz4pXG4gICAgfSkgOiBudWxsO1xuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSBudWxsO1xuXG4gICAgLy8gR2VuZXJhdGUgRmluYWwgSlNYXG4gICAgY29uc3QgU2lnbmFsVmlld3MgPSBjYW52YXNKc3ggP1xuICAgICAgICAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2lnbmFscy12aWV3c1wiIHN0eWxlPXt7Z3JpZFRlbXBsYXRlUm93czogYHJlcGVhdCgke291dHB1dE5vZGVzLmxlbmd0aH0sIDFmcilgfX0+XG4gICAgICAgICAgICAgICAge2NhbnZhc0pzeH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgIGNvbnN0IFNldHRpbmdzSnN4ID0gc2V0dGluZ3MgP1xuICAgICAgICAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2lnbmFscy1zZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgIHtzZXR0aW5nc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9e1wic2lnbmFscy1lbWJlZGRpbmctY29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgPHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgICAgIHtTZXR0aW5nc0pzeH1cbiAgICAgICAgICAgIHtTaWduYWxWaWV3c31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=