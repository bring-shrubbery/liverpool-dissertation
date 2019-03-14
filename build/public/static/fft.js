var FFT =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/fft/fft.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fft/fft.js":
/*!************************!*\
  !*** ./src/fft/fft.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction FFT(size) {\n    this.size = size | 0;\n    if (this.size <= 1 || (this.size & (this.size - 1)) !== 0)\n        throw new Error('FFT size must be a power of two and bigger than 1');\n\n    this._csize = size << 1;\n\n    // NOTE: Use of `var` is intentional for old V8 versions\n    var table = new Array(this.size * 2);\n    for (var i = 0; i < table.length; i += 2) {\n        const angle = Math.PI * i / this.size;\n        table[i] = Math.cos(angle);\n        table[i + 1] = -Math.sin(angle);\n    }\n    this.table = table;\n\n    // Find size's power of two\n    var power = 0;\n    for (var t = 1; this.size > t; t <<= 1)\n        power++;\n\n    // Calculate initial step's width:\n    //   * If we are full radix-4 - it is 2x smaller to give inital len=8\n    //   * Otherwise it is the same as `power` to give len=4\n    this._width = power % 2 === 0 ? power - 1 : power;\n\n    // Pre-compute bit-reversal patterns\n    this._bitrev = new Array(1 << this._width);\n    for (var j = 0; j < this._bitrev.length; j++) {\n        this._bitrev[j] = 0;\n        for (var shift = 0; shift < this._width; shift += 2) {\n            var revShift = this._width - shift - 2;\n            this._bitrev[j] |= ((j >>> shift) & 3) << revShift;\n        }\n    }\n\n    this._out = null;\n    this._data = null;\n    this._inv = 0;\n}\n\nFFT.prototype.fromComplexArray = function fromComplexArray(complex, storage) {\n    var res = storage || new Array(complex.length >>> 1);\n    for (var i = 0; i < complex.length; i += 2)\n        res[i >>> 1] = complex[i];\n    return res;\n};\n\nFFT.prototype.createComplexArray = function createComplexArray() {\n    const res = new Array(this._csize);\n    for (var i = 0; i < res.length; i++)\n        res[i] = 0;\n    return res;\n};\n\nFFT.prototype.toComplexArray = function toComplexArray(input, storage) {\n    var res = storage || this.createComplexArray();\n    for (var i = 0; i < res.length; i += 2) {\n        res[i] = input[i >>> 1];\n        res[i + 1] = 0;\n    }\n    return res;\n};\n\nFFT.prototype.completeSpectrum = function completeSpectrum(spectrum) {\n    var size = this._csize;\n    var half = size >>> 1;\n    for (var i = 2; i < half; i += 2) {\n        spectrum[size - i] = spectrum[i];\n        spectrum[size - i + 1] = -spectrum[i + 1];\n    }\n};\n\nFFT.prototype.transform = function transform(out, data) {\n    if (out === data)\n        throw new Error('Input and output buffers must be different');\n\n    this._out = out;\n    this._data = data;\n    this._inv = 0;\n    this._transform4();\n    this._out = null;\n    this._data = null;\n};\n\nFFT.prototype.realTransform = function realTransform(out, data) {\n    if (out === data)\n        throw new Error('Input and output buffers must be different');\n\n    this._out = out;\n    this._data = data;\n    this._inv = 0;\n    this._realTransform4();\n    this._out = null;\n    this._data = null;\n};\n\nFFT.prototype.inverseTransform = function inverseTransform(out, data) {\n    if (out === data)\n        throw new Error('Input and output buffers must be different');\n\n    this._out = out;\n    this._data = data;\n    this._inv = 1;\n    this._transform4();\n    for (var i = 0; i < out.length; i++)\n        out[i] /= this.size;\n    this._out = null;\n    this._data = null;\n};\n\n// radix-4 implementation\n//\n// NOTE: Uses of `var` are intentional for older V8 version that do not\n// support both `let compound assignments` and `const phi`\nFFT.prototype._transform4 = function _transform4() {\n    var out = this._out;\n    var size = this._csize;\n\n    // Initial step (permute and transform)\n    var width = this._width;\n    var step = 1 << width;\n    var len = (size / step) << 1;\n\n    var outOff;\n    var t;\n    var bitrev = this._bitrev;\n    if (len === 4) {\n        for (outOff = 0, t = 0; outOff < size; outOff += len, t++) {\n            const off = bitrev[t];\n            this._singleTransform2(outOff, off, step);\n        }\n    } else {\n        // len === 8\n        for (outOff = 0, t = 0; outOff < size; outOff += len, t++) {\n            const off = bitrev[t];\n            this._singleTransform4(outOff, off, step);\n        }\n    }\n\n    // Loop through steps in decreasing order\n    var inv = this._inv ? -1 : 1;\n    var table = this.table;\n    for (step >>= 2; step >= 2; step >>= 2) {\n        len = (size / step) << 1;\n        var quarterLen = len >>> 2;\n\n        // Loop through offsets in the data\n        for (outOff = 0; outOff < size; outOff += len) {\n            // Full case\n            var limit = outOff + quarterLen;\n            for (var i = outOff, k = 0; i < limit; i += 2, k += step) {\n                const A = i;\n                const B = A + quarterLen;\n                const C = B + quarterLen;\n                const D = C + quarterLen;\n\n                // Original values\n                const Ar = out[A];\n                const Ai = out[A + 1];\n                const Br = out[B];\n                const Bi = out[B + 1];\n                const Cr = out[C];\n                const Ci = out[C + 1];\n                const Dr = out[D];\n                const Di = out[D + 1];\n\n                // Middle values\n                const MAr = Ar;\n                const MAi = Ai;\n\n                const tableBr = table[k];\n                const tableBi = inv * table[k + 1];\n                const MBr = Br * tableBr - Bi * tableBi;\n                const MBi = Br * tableBi + Bi * tableBr;\n\n                const tableCr = table[2 * k];\n                const tableCi = inv * table[2 * k + 1];\n                const MCr = Cr * tableCr - Ci * tableCi;\n                const MCi = Cr * tableCi + Ci * tableCr;\n\n                const tableDr = table[3 * k];\n                const tableDi = inv * table[3 * k + 1];\n                const MDr = Dr * tableDr - Di * tableDi;\n                const MDi = Dr * tableDi + Di * tableDr;\n\n                // Pre-Final values\n                const T0r = MAr + MCr;\n                const T0i = MAi + MCi;\n                const T1r = MAr - MCr;\n                const T1i = MAi - MCi;\n                const T2r = MBr + MDr;\n                const T2i = MBi + MDi;\n                const T3r = inv * (MBr - MDr);\n                const T3i = inv * (MBi - MDi);\n\n                // Final values\n                const FAr = T0r + T2r;\n                const FAi = T0i + T2i;\n\n                const FCr = T0r - T2r;\n                const FCi = T0i - T2i;\n\n                const FBr = T1r + T3i;\n                const FBi = T1i - T3r;\n\n                const FDr = T1r - T3i;\n                const FDi = T1i + T3r;\n\n                out[A] = FAr;\n                out[A + 1] = FAi;\n                out[B] = FBr;\n                out[B + 1] = FBi;\n                out[C] = FCr;\n                out[C + 1] = FCi;\n                out[D] = FDr;\n                out[D + 1] = FDi;\n            }\n        }\n    }\n};\n\n// radix-2 implementation\n//\n// NOTE: Only called for len=4\nFFT.prototype._singleTransform2 = function _singleTransform2(outOff, off,\n    step) {\n    const out = this._out;\n    const data = this._data;\n\n    const evenR = data[off];\n    const evenI = data[off + 1];\n    const oddR = data[off + step];\n    const oddI = data[off + step + 1];\n\n    const leftR = evenR + oddR;\n    const leftI = evenI + oddI;\n    const rightR = evenR - oddR;\n    const rightI = evenI - oddI;\n\n    out[outOff] = leftR;\n    out[outOff + 1] = leftI;\n    out[outOff + 2] = rightR;\n    out[outOff + 3] = rightI;\n};\n\n// radix-4\n//\n// NOTE: Only called for len=8\nFFT.prototype._singleTransform4 = function _singleTransform4(outOff, off,\n    step) {\n    const out = this._out;\n    const data = this._data;\n    const inv = this._inv ? -1 : 1;\n    const step2 = step * 2;\n    const step3 = step * 3;\n\n    // Original values\n    const Ar = data[off];\n    const Ai = data[off + 1];\n    const Br = data[off + step];\n    const Bi = data[off + step + 1];\n    const Cr = data[off + step2];\n    const Ci = data[off + step2 + 1];\n    const Dr = data[off + step3];\n    const Di = data[off + step3 + 1];\n\n    // Pre-Final values\n    const T0r = Ar + Cr;\n    const T0i = Ai + Ci;\n    const T1r = Ar - Cr;\n    const T1i = Ai - Ci;\n    const T2r = Br + Dr;\n    const T2i = Bi + Di;\n    const T3r = inv * (Br - Dr);\n    const T3i = inv * (Bi - Di);\n\n    // Final values\n    const FAr = T0r + T2r;\n    const FAi = T0i + T2i;\n\n    const FBr = T1r + T3i;\n    const FBi = T1i - T3r;\n\n    const FCr = T0r - T2r;\n    const FCi = T0i - T2i;\n\n    const FDr = T1r - T3i;\n    const FDi = T1i + T3r;\n\n    out[outOff] = FAr;\n    out[outOff + 1] = FAi;\n    out[outOff + 2] = FBr;\n    out[outOff + 3] = FBi;\n    out[outOff + 4] = FCr;\n    out[outOff + 5] = FCi;\n    out[outOff + 6] = FDr;\n    out[outOff + 7] = FDi;\n};\n\n// Real input radix-4 implementation\nFFT.prototype._realTransform4 = function _realTransform4() {\n    var out = this._out;\n    var size = this._csize;\n\n    // Initial step (permute and transform)\n    var width = this._width;\n    var step = 1 << width;\n    var len = (size / step) << 1;\n\n    var outOff;\n    var t;\n    var bitrev = this._bitrev;\n    if (len === 4) {\n        for (outOff = 0, t = 0; outOff < size; outOff += len, t++) {\n            const off = bitrev[t];\n            this._singleRealTransform2(outOff, off >>> 1, step >>> 1);\n        }\n    } else {\n        // len === 8\n        for (outOff = 0, t = 0; outOff < size; outOff += len, t++) {\n            const off = bitrev[t];\n            this._singleRealTransform4(outOff, off >>> 1, step >>> 1);\n        }\n    }\n\n    // Loop through steps in decreasing order\n    var inv = this._inv ? -1 : 1;\n    var table = this.table;\n    for (step >>= 2; step >= 2; step >>= 2) {\n        len = (size / step) << 1;\n        var halfLen = len >>> 1;\n        var quarterLen = halfLen >>> 1;\n        var hquarterLen = quarterLen >>> 1;\n\n        // Loop through offsets in the data\n        for (outOff = 0; outOff < size; outOff += len) {\n            for (var i = 0, k = 0; i <= hquarterLen; i += 2, k += step) {\n                var A = outOff + i;\n                var B = A + quarterLen;\n                var C = B + quarterLen;\n                var D = C + quarterLen;\n\n                // Original values\n                var Ar = out[A];\n                var Ai = out[A + 1];\n                var Br = out[B];\n                var Bi = out[B + 1];\n                var Cr = out[C];\n                var Ci = out[C + 1];\n                var Dr = out[D];\n                var Di = out[D + 1];\n\n                // Middle values\n                var MAr = Ar;\n                var MAi = Ai;\n\n                var tableBr = table[k];\n                var tableBi = inv * table[k + 1];\n                var MBr = Br * tableBr - Bi * tableBi;\n                var MBi = Br * tableBi + Bi * tableBr;\n\n                var tableCr = table[2 * k];\n                var tableCi = inv * table[2 * k + 1];\n                var MCr = Cr * tableCr - Ci * tableCi;\n                var MCi = Cr * tableCi + Ci * tableCr;\n\n                var tableDr = table[3 * k];\n                var tableDi = inv * table[3 * k + 1];\n                var MDr = Dr * tableDr - Di * tableDi;\n                var MDi = Dr * tableDi + Di * tableDr;\n\n                // Pre-Final values\n                var T0r = MAr + MCr;\n                var T0i = MAi + MCi;\n                var T1r = MAr - MCr;\n                var T1i = MAi - MCi;\n                var T2r = MBr + MDr;\n                var T2i = MBi + MDi;\n                var T3r = inv * (MBr - MDr);\n                var T3i = inv * (MBi - MDi);\n\n                // Final values\n                var FAr = T0r + T2r;\n                var FAi = T0i + T2i;\n\n                var FBr = T1r + T3i;\n                var FBi = T1i - T3r;\n\n                out[A] = FAr;\n                out[A + 1] = FAi;\n                out[B] = FBr;\n                out[B + 1] = FBi;\n\n                // Output final middle point\n                if (i === 0) {\n                    var FCr = T0r - T2r;\n                    var FCi = T0i - T2i;\n                    out[C] = FCr;\n                    out[C + 1] = FCi;\n                    continue;\n                }\n\n                // Do not overwrite ourselves\n                if (i === hquarterLen)\n                    continue;\n\n                // In the flipped case:\n                // MAi = -MAi\n                // MBr=-MBi, MBi=-MBr\n                // MCr=-MCr\n                // MDr=MDi, MDi=MDr\n                var ST0r = T1r;\n                var ST0i = -T1i;\n                var ST1r = T0r;\n                var ST1i = -T0i;\n                var ST2r = -inv * T3i;\n                var ST2i = -inv * T3r;\n                var ST3r = -inv * T2i;\n                var ST3i = -inv * T2r;\n\n                var SFAr = ST0r + ST2r;\n                var SFAi = ST0i + ST2i;\n\n                var SFBr = ST1r + ST3i;\n                var SFBi = ST1i - ST3r;\n\n                var SA = outOff + quarterLen - i;\n                var SB = outOff + halfLen - i;\n\n                out[SA] = SFAr;\n                out[SA + 1] = SFAi;\n                out[SB] = SFBr;\n                out[SB + 1] = SFBi;\n            }\n        }\n    }\n};\n\n// radix-2 implementation\n//\n// NOTE: Only called for len=4\nFFT.prototype._singleRealTransform2 = function _singleRealTransform2(outOff,\n    off,\n    step) {\n    const out = this._out;\n    const data = this._data;\n\n    const evenR = data[off];\n    const oddR = data[off + step];\n\n    const leftR = evenR + oddR;\n    const rightR = evenR - oddR;\n\n    out[outOff] = leftR;\n    out[outOff + 1] = 0;\n    out[outOff + 2] = rightR;\n    out[outOff + 3] = 0;\n};\n\n// radix-4\n//\n// NOTE: Only called for len=8\nFFT.prototype._singleRealTransform4 = function _singleRealTransform4(outOff, off, step) {\n    const out = this._out;\n    const data = this._data;\n    const inv = this._inv ? -1 : 1;\n    const step2 = step * 2;\n    const step3 = step * 3;\n\n    // Original values\n    const Ar = data[off];\n    const Br = data[off + step];\n    const Cr = data[off + step2];\n    const Dr = data[off + step3];\n\n    // Pre-Final values\n    const T0r = Ar + Cr;\n    const T1r = Ar - Cr;\n    const T2r = Br + Dr;\n    const T3r = inv * (Br - Dr);\n\n    // Final values\n    const FAr = T0r + T2r;\n\n    const FBr = T1r;\n    const FBi = -T3r;\n\n    const FCr = T0r - T2r;\n\n    const FDr = T1r;\n    const FDi = T3r;\n\n    out[outOff] = FAr;\n    out[outOff + 1] = 0;\n    out[outOff + 2] = FBr;\n    out[outOff + 3] = FBi;\n    out[outOff + 4] = FCr;\n    out[outOff + 5] = 0;\n    out[outOff + 6] = FDr;\n    out[outOff + 7] = FDi;\n};\n\nmodule.exports = FFT;\n\n\n//# sourceURL=webpack://FFT/./src/fft/fft.js?");

/***/ })

/******/ });