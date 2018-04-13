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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Object helper methods.
 */

var ObjectHelper =
/*#__PURE__*/
function () {
  function ObjectHelper() {
    _classCallCheck(this, ObjectHelper);
  }

  _createClass(ObjectHelper, null, [{
    key: "isEmpty",

    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    value: function isEmpty(value) {
      return value === null || value === undefined;
    }
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */

  }, {
    key: "isObject",
    value: function isObject(value) {
      return value === null || value === undefined ? false : _typeof(value) === "object" && !Array.isArray(value);
    }
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is an object of the specified type.
     */

  }, {
    key: "isType",
    value: function isType(value, typeConstructor) {
      var valueClassName = ObjectHelper.getClassName(value);
      return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */

  }, {
    key: "getClassName",
    value: function getClassName(object) {
      if (object === null || object === undefined) {
        return undefined;
      } else {
        var _constructor = typeof object === "function" ? object.toString() : object.constructor.toString();

        var results = _constructor.match(/\w+/g);

        return results && results.length > 1 ? results[1] : undefined;
      }
    }
  }]);

  return ObjectHelper;
}();

exports.ObjectHelper = ObjectHelper;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var stringHelper_1 = __webpack_require__(4);

var dataError_1 = __webpack_require__(3);
/**
 * A class for handling trytes.
 */


var Trytes =
/*#__PURE__*/
function () {
  /* @internal */
  function Trytes(trytes) {
    _classCallCheck(this, Trytes);

    this._trytes = trytes;
  }
  /**
   * Create trytes from a string.
   * @param value A string to create the trytes from.
   * @param length An optional validation length for the trytes, 0 means ignore length.
   * @returns An instance of Trytes.
   */


  _createClass(Trytes, [{
    key: "toString",

    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the length of the trytes.
     * @returns The length of the trytes.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trytes.length;
    }
    /**
     * Get a sub of the trytes.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trytes sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trytes.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trytes.length));
      }

      return Trytes.fromString(this._trytes.substr(start, length));
    }
  }], [{
    key: "fromString",
    value: function fromString(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        throw new dataError_1.DataError("The value must be a non empty string");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new dataError_1.DataError("The length must be >= 0");
      }

      if (!Trytes.isValid(value, length)) {
        throw new dataError_1.DataError("The value and length do not contain valid trytes", {
          value: value,
          length: length
        });
      }

      return new Trytes(value);
    }
    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */

  }, {
    key: "isValid",
    value: function isValid(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        return false;
      } else {
        return new RegExp("^[9A-Z]{".concat(length ? length : "0,", "}$")).test(value);
      }
    }
  }]);

  return Trytes;
}();
/**
 * All the characters that can be used in trytes.
 */


Trytes.ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.Trytes = Trytes;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Number helper methods.
 */

var NumberHelper =
/*#__PURE__*/
function () {
  function NumberHelper() {
    _classCallCheck(this, NumberHelper);
  }

  _createClass(NumberHelper, null, [{
    key: "isInteger",

    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    value: function isInteger(value) {
      return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */

  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isFloatString",
    value: function isFloatString(value) {
      return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isIntegerString",
    value: function isIntegerString(value) {
      return /^-?\d+$/.test(value);
    }
  }]);

  return NumberHelper;
}();

exports.NumberHelper = NumberHelper;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(10);
/**
 * A data implementation of an error.
 */


var DataError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(DataError, _coreError_1$CoreErro);

  /**
   * Create an instance of DataError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function DataError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, DataError);

    _this = _possibleConstructorReturn(this, (DataError.__proto__ || Object.getPrototypeOf(DataError)).call(this, message, additional, innerError));
    _this.domain = "Data";
    return _this;
  }

  return DataError;
}(coreError_1.CoreError);

exports.DataError = DataError;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * String helper methods.
 */

var StringHelper =
/*#__PURE__*/
function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: "isString",

    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    value: function isString(value) {
      return value === null || value === undefined ? false : Object.prototype.toString.call(value) === "[object String]";
    }
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !StringHelper.isString(value) || value.length === 0;
    }
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */

  }, {
    key: "isAscii",
    value: function isAscii(value) {
      return value === null || value === undefined ? false : /^[\x00-\xFF]*$/.test(value);
    }
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */

  }, {
    key: "encodeNonASCII",
    value: function encodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/[\u007F-\uFFFF]/g, function (chr) {
        return "\\u".concat("0000".concat(chr.charCodeAt(0).toString(16)).substr(-4));
      }) : undefined;
    }
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */

  }, {
    key: "decodeNonASCII",
    value: function decodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
      }) : undefined;
    }
  }]);

  return StringHelper;
}();

exports.StringHelper = StringHelper;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);
/**
 * Array helper methods.
 */


var ArrayHelper =
/*#__PURE__*/
function () {
  function ArrayHelper() {
    _classCallCheck(this, ArrayHelper);
  }

  _createClass(ArrayHelper, null, [{
    key: "isArray",

    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    value: function isArray(value) {
      return value === null || value === undefined ? false : Array.isArray(value);
    }
    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !ArrayHelper.isArray(value) || value.length === 0;
    }
    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */

  }, {
    key: "isTyped",
    value: function isTyped(value, type) {
      return !ArrayHelper.isEmpty(value) && !value.includes(undefined) && !value.includes(null) && value.every(function (a) {
        return objectHelper_1.ObjectHelper.isType(a, type);
      });
    }
  }]);

  return ArrayHelper;
}();

exports.ArrayHelper = ArrayHelper;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling hashes.
 */


var Hash =
/*#__PURE__*/
function () {
  /* @internal */
  function Hash(trytes) {
    _classCallCheck(this, Hash);

    this._trytes = trytes;
  }
  /**
   * Create hash from trytes.
   * @param hash The trytes to create the hash from.
   * @returns An instance of Hash.
   */


  _createClass(Hash, [{
    key: "toTrytes",

    /**
     * Convert the hash to trytes.
     * @returns Trytes version of the hash.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(hash) {
      if (!objectHelper_1.ObjectHelper.isType(hash, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The hash should be a valid Trytes object");
      }

      var length = hash.length();

      if (length !== Hash.LENGTH) {
        throw new dataError_1.DataError("The hash should be ".concat(Hash.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new Hash(hash);
    }
  }]);

  return Hash;
}();
/**
 * The length for a valid hash (81).
 */


Hash.LENGTH = 81;
/**
 * An empty hash all 9s.
 */

Hash.EMPTY = Hash.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Hash.LENGTH)));
exports.Hash = Hash;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(5);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling trits.
 */


var Trits =
/*#__PURE__*/
function () {
  /* @internal */
  function Trits(trits) {
    _classCallCheck(this, Trits);

    this._trits = trits;
  }
  /**
   * Create instance of trits from Int8Array array.
   * @param value Trytes used to create trits.
   * @returns An instance of Trits.
   */


  _createClass(Trits, [{
    key: "toArray",

    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    value: function toArray() {
      return this._trits;
    }
    /**
     * Get the value of the trits array as a number array.
     * @returns Array representation of the trits.
     */

  }, {
    key: "toNumberArray",
    value: function toNumberArray() {
      return Array.from(this._trits);
    }
    /**
     * Get the trits as trytes.
     * @returns Instance of Trytes.
     */

  }, {
    key: "toTrytes",
    value: function toTrytes() {
      var trytes = "";

      for (var i = 0; i < this._trits.length; i += 3) {
        // Iterate over all possible tryte values to find correct trit representation
        for (var j = 0; j < trytes_1.Trytes.ALPHABET.length; j++) {
          if (Trits.TRYTES_TRITS[j][0] === this._trits[i] && Trits.TRYTES_TRITS[j][1] === this._trits[i + 1] && Trits.TRYTES_TRITS[j][2] === this._trits[i + 2]) {
            trytes += trytes_1.Trytes.ALPHABET.charAt(j);
            break;
          }
        }
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the trits as a number.
     * @returns The trits converted to a number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      var returnValue = 0;

      for (var i = this._trits.length - 1; i >= 0; i--) {
        returnValue = returnValue * 3 + this._trits[i];
      }

      return returnValue;
    }
    /**
     * What is the length of the trits.
     * @returns Length of the trits.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trits.length;
    }
    /**
     * Get a sub of the trits.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trits sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trits.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trits.length));
      }

      return Trits.fromArray(this._trits.slice(start, start + length));
    }
  }], [{
    key: "fromArray",
    value: function fromArray(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, Int8Array)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(value);
    }
    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumberArray",
    value: function fromNumberArray(value) {
      if (!arrayHelper_1.ArrayHelper.isTyped(value, Number)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(new Int8Array(value));
    }
    /**
     * Create instance of trits from trytes.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var trytesString = value.toString();
      var trits = new Int8Array(trytesString.length * 3);

      for (var i = 0; i < trytesString.length; i++) {
        var idx = trytes_1.Trytes.ALPHABET.indexOf(trytesString.charAt(i));
        trits[i * 3] = Trits.TRYTES_TRITS[idx][0];
        trits[i * 3 + 1] = Trits.TRYTES_TRITS[idx][1];
        trits[i * 3 + 2] = Trits.TRYTES_TRITS[idx][2];
      }

      return new Trits(trits);
    }
    /**
     * Create instance of trits from number
     * @param value Number used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumber",
    value: function fromNumber(value) {
      if (!numberHelper_1.NumberHelper.isInteger(value)) {
        throw new dataError_1.DataError("The value is not an integer");
      }

      var trits = [];
      var absoluteValue = value < 0 ? -value : value;

      while (absoluteValue > 0) {
        var remainder = absoluteValue % 3;
        absoluteValue = Math.floor(absoluteValue / 3);

        if (remainder > 1) {
          remainder = -1;
          absoluteValue++;
        }

        trits[trits.length] = remainder;
      }

      if (value < 0) {
        for (var i = 0; i < trits.length; i++) {
          trits[i] = -trits[i];
        }
      }

      return new Trits(new Int8Array(trits));
    }
    /**
     * Add two trits together.
     * @param first The first trit.
     * @param second The second trit.
     * @returns New trit which is the addition of the a + b.
     */

  }, {
    key: "add",
    value: function add(first, second) {
      if (!objectHelper_1.ObjectHelper.isType(first, Trits)) {
        throw new dataError_1.DataError("The first should be a valid Trits object");
      }

      if (!objectHelper_1.ObjectHelper.isType(second, Trits)) {
        throw new dataError_1.DataError("The seconds should be a valid Trits object");
      }

      var out = new Int8Array(Math.max(first._trits.length, second._trits.length));
      var carry = 0;
      var iA;
      var iB;

      for (var i = 0; i < out.length; i++) {
        iA = i < first._trits.length ? first._trits[i] : 0;
        iB = i < second._trits.length ? second._trits[i] : 0;
        var fA = Trits.fullAdd(iA, iB, carry);
        out[i] = fA[0];
        carry = fA[1];
      }

      return Trits.fromArray(out);
    }
    /* @internal */

  }, {
    key: "fullAdd",
    value: function fullAdd(a, b, c) {
      var sA = Trits.sum(a, b);
      var cA = Trits.cons(a, b);
      var cB = Trits.cons(sA, c);
      var cOut = Trits.any(cA, cB);
      var sOUt = Trits.sum(sA, c);
      return new Int8Array([sOUt, cOut]);
    }
    /* @internal */

  }, {
    key: "sum",
    value: function sum(a, b) {
      var s = a + b;

      switch (s) {
        case 2:
          return -1;

        case -2:
          return 1;

        default:
          return s;
      }
    }
    /* @internal */

  }, {
    key: "cons",
    value: function cons(a, b) {
      if (a === b) {
        return a;
      }

      return 0;
    }
    /* @internal */

  }, {
    key: "any",
    value: function any(a, b) {
      var s = a + b;

      if (s > 0) {
        return 1;
      } else if (s < 0) {
        return -1;
      }

      return 0;
    }
  }]);

  return Trits;
}();
/* @internal */


Trits.TRYTES_TRITS = [new Int8Array([0, 0, 0]), new Int8Array([1, 0, 0]), new Int8Array([-1, 1, 0]), new Int8Array([0, 1, 0]), new Int8Array([1, 1, 0]), new Int8Array([-1, -1, 1]), new Int8Array([0, -1, 1]), new Int8Array([1, -1, 1]), new Int8Array([-1, 0, 1]), new Int8Array([0, 0, 1]), new Int8Array([1, 0, 1]), new Int8Array([-1, 1, 1]), new Int8Array([0, 1, 1]), new Int8Array([1, 1, 1]), new Int8Array([-1, -1, -1]), new Int8Array([0, -1, -1]), new Int8Array([1, -1, -1]), new Int8Array([-1, 0, -1]), new Int8Array([0, 0, -1]), new Int8Array([1, 0, -1]), new Int8Array([-1, 1, -1]), new Int8Array([0, 1, -1]), new Int8Array([1, 1, -1]), new Int8Array([-1, -1, 0]), new Int8Array([0, -1, 0]), new Int8Array([1, -1, 0]), new Int8Array([-1, 0, 0])];
exports.Trits = Trits;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling addresses.
 */


var Address =
/*#__PURE__*/
function () {
  /* @internal */
  function Address(addressTrytes, checksumTrytes) {
    _classCallCheck(this, Address);

    this._addressTrytes = addressTrytes;
    this._checksumTrytes = checksumTrytes;
  }
  /**
   * Create address from trytes.
   * @param address The trytes to create the address from.
   * @returns An instance of Address.
   */


  _createClass(Address, [{
    key: "toTrytes",

    /**
     * Convert the address to trytes with no checksum.
     * @returns Trytes version of the address with no checksum.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._addressTrytes);
    }
    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */

  }, {
    key: "toTrytesWithChecksum",
    value: function toTrytesWithChecksum() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return trytes_1.Trytes.fromString(this._addressTrytes + this._checksumTrytes);
      } else {
        throw new dataError_1.DataError("This address has no checksum calculated for it");
      }
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return this._addressTrytes + this._checksumTrytes;
      } else {
        return this._addressTrytes;
      }
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(address) {
      if (!objectHelper_1.ObjectHelper.isType(address, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The address should be a valid Trytes object");
      }

      var trytesString = address.toString();

      if (trytesString.length !== Address.LENGTH && trytesString.length !== Address.LENGTH_WITH_CHECKSUM) {
        throw new dataError_1.DataError("The address should either be ".concat(Address.LENGTH, " or ").concat(Address.LENGTH_WITH_CHECKSUM, " characters in length"), {
          length: trytesString.length
        });
      }

      var addressTrytes = trytesString.substr(0, Address.LENGTH);
      var checksumTrytes;

      if (trytesString.length === Address.LENGTH_WITH_CHECKSUM) {
        checksumTrytes = trytesString.substr(Address.LENGTH);
      }

      return new Address(addressTrytes, checksumTrytes);
    }
  }]);

  return Address;
}();
/**
 * The length for a valid address without checksum (81).
 */


Address.LENGTH = 81;
/**
 * The length for an address checksum (9).
 */

Address.LENGTH_CHECKSUM = 9;
/**
 * The length for valid address with checksum (90).
 */

Address.LENGTH_WITH_CHECKSUM = Address.LENGTH + Address.LENGTH_CHECKSUM;
/**
 * An empty hash all 9s.
 */

Address.EMPTY = Address.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Address.LENGTH)));
exports.Address = Address;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(10);
/**
 * A crypto implementation of an error.
 */


var CryptoError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(CryptoError, _coreError_1$CoreErro);

  /**
   * Create an instance of CryptoError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CryptoError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CryptoError);

    _this = _possibleConstructorReturn(this, (CryptoError.__proto__ || Object.getPrototypeOf(CryptoError)).call(this, message, additional, innerError));
    _this.domain = "Crypto";
    return _this;
  }

  return CryptoError;
}(coreError_1.CoreError);

exports.CryptoError = CryptoError;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonHelper_1 = __webpack_require__(18);

var stringHelper_1 = __webpack_require__(4);
/**
 * A core implementation of an error.
 */


var CoreError =
/*#__PURE__*/
function (_extendableBuiltin2) {
  _inherits(CoreError, _extendableBuiltin2);

  /**
   * Create an instance of CoreError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CoreError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CoreError);

    _this = _possibleConstructorReturn(this, (CoreError.__proto__ || Object.getPrototypeOf(CoreError)).call(this, message));
    _this.additional = additional ? additional : {};
    _this.innerError = innerError;
    _this.domain = "Core";
    return _this;
  }
  /**
   * Check if an object could be a CoreError.
   * @param obj The object to check if it is a CoreError.
   * @returns true If the tested object is a CoreError.
   */


  _createClass(CoreError, [{
    key: "format",

    /**
     * Format the error to a readable version.
     */
    value: function format() {
      var _this2 = this;

      var out = "";

      if (!stringHelper_1.StringHelper.isEmpty(this.domain)) {
        out += "".concat(this.domain, ": ");
      }

      if (!stringHelper_1.StringHelper.isEmpty(this.message)) {
        out += "".concat(this.message);
      }

      var keys = Object.keys(this.additional);

      if (keys.length > 0) {
        if (out.length > 0) {
          out += "\n";
        }

        keys.forEach(function (key) {
          out += "\t".concat(key, ": ").concat(jsonHelper_1.JsonHelper.stringify(_this2.additional[key]), "\n");
        });
      }

      return out;
    }
  }], [{
    key: "isError",
    value: function isError(obj) {
      return obj !== undefined && obj !== null && _typeof(obj) === "object" && "message" in obj && "additional" in obj;
    }
  }]);

  return CoreError;
}(_extendableBuiltin(Error));

exports.CoreError = CoreError;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling tags.
 */


var Tag =
/*#__PURE__*/
function () {
  /* @internal */
  function Tag(trytes) {
    _classCallCheck(this, Tag);

    this._trytes = trytes;
  }
  /**
   * Create tag from trytes.
   * @param tag The trytes to create the tag from.
   * @returns An instance of Tag.
   */


  _createClass(Tag, [{
    key: "toTrytes",

    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(tag) {
      if (!objectHelper_1.ObjectHelper.isType(tag, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The tag should be a valid Trytes object");
      }

      var trytesString = tag.toString();

      if (trytesString.length > Tag.LENGTH) {
        throw new dataError_1.DataError("The tag should be at most ".concat(Tag.LENGTH, " characters in length"), {
          length: trytesString.length
        });
      }

      while (trytesString.length < Tag.LENGTH) {
        trytesString += "9";
      }

      return new Tag(trytesString);
    }
  }]);

  return Tag;
}();
/**
 * The length of a valid tag (27).
 */


Tag.LENGTH = 27;
/**
 * An empty tag all 9s.
 */

Tag.EMPTY = Tag.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Tag.LENGTH)));
exports.Tag = Tag;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling signature message fragments.
 */


var SignatureMessageFragment =
/*#__PURE__*/
function () {
  /* @internal */
  function SignatureMessageFragment(trytes) {
    _classCallCheck(this, SignatureMessageFragment);

    this._trytes = trytes;
  }
  /**
   * Create signature fragment from trytes.
   * @param signatureMessageFragment The trytes to create the signature fragment from.
   * @returns An instance of SignatureMessageFragment.
   */


  _createClass(SignatureMessageFragment, [{
    key: "toTrytes",

    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(signatureMessageFragment) {
      if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The signatureMessageFragment should be a valid Trytes object");
      }

      var length = signatureMessageFragment.length();

      if (length !== SignatureMessageFragment.LENGTH) {
        throw new dataError_1.DataError("The signatureMessageFragment should be ".concat(SignatureMessageFragment.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new SignatureMessageFragment(signatureMessageFragment);
    }
  }]);

  return SignatureMessageFragment;
}();
/**
 * The length of a valid signature message fragment (2187)
 */


SignatureMessageFragment.LENGTH = 2187;
/**
 * An empty signature message fragment all 9s.
 */

SignatureMessageFragment.EMPTY = SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString("9".repeat(SignatureMessageFragment.LENGTH)));
exports.SignatureMessageFragment = SignatureMessageFragment;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var address_1 = __webpack_require__(8);

var hash_1 = __webpack_require__(6);

var signatureMessageFragment_1 = __webpack_require__(12);

var tag_1 = __webpack_require__(11);

var tryteNumber_1 = __webpack_require__(16);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling transactions.
 */


var Transaction =
/*#__PURE__*/
function () {
  /* @internal */
  function Transaction() {
    _classCallCheck(this, Transaction);
  }
  /**
   * Create instance of transaction from parameters.
   * @param signatureMessageFragment The signature message fragment.
   * @param address The address.
   * @param value The value.
   * @param obsoleteTag Obsolete transaction tag.
   * @param timestamp The timestamp.
   * @param currentIndex The current index.
   * @param lastIndex The last index.
   * @param bundle The bundle.
   * @param trunkTransaction The trunk transaction.
   * @param branchTransaction The branch transaction.
   * @param tag The tag.
   * @param attachmentTimestamp The attachment timestamp.
   * @param attachmentTimestampLowerBound The attachment timestamp lower bound.
   * @param attachmentTimestampUpperBound  The attachment timestamp upper bound.
   * @param nonce The nonce.
   * @returns New instance of transaction.
   */


  _createClass(Transaction, [{
    key: "toTrytes",

    /**
     * Convert the transaction to trytes.
     * @returns The transaction as trytes.
     */
    value: function toTrytes() {
      if (!objectHelper_1.ObjectHelper.isType(this.signatureMessageFragment, signatureMessageFragment_1.SignatureMessageFragment)) {
        throw new dataError_1.DataError("The signatureMessageFragment must be set to create transaction trytes", {
          signatureMessageFragment: this.signatureMessageFragment
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.address, address_1.Address)) {
        throw new dataError_1.DataError("The address must be set to create transaction trytes", {
          address: this.address
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.obsoleteTag, tag_1.Tag)) {
        throw new dataError_1.DataError("The obsoleteTag must be set to create transaction trytes", {
          obsoleteTag: this.obsoleteTag
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.bundle, hash_1.Hash)) {
        throw new dataError_1.DataError("The bundle must be set to create transaction trytes", {
          bundle: this.bundle
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.trunkTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The trunkTransaction must be set to create transaction trytes", {
          trunkTransaction: this.trunkTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.branchTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The branchTransaction must be set to create transaction trytes", {
          branchTransaction: this.branchTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.nonce, tag_1.Tag)) {
        throw new dataError_1.DataError("The nonce must be set to create transaction trytes", {
          nonce: this.nonce
        });
      }

      var trytes = this.signatureMessageFragment.toTrytes().toString() + this.address.toTrytes().toString() + (this.value || Transaction.EMPTY_11).toTrytes().toString() + Transaction.CHECK_VALUE + this.obsoleteTag.toTrytes().toString() + (this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.bundle.toTrytes().toString() + this.trunkTransaction.toTrytes().toString() + this.branchTransaction.toTrytes().toString() + (this.tag || this.obsoleteTag).toTrytes().toString() + (this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.nonce.toTrytes().toString();
      var length = trytes.length;

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length ").concat(length), {
          length: length
        });
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string view of the object.
     */

  }, {
    key: "toString",
    value: function toString() {
      return "{\n\tsignatureMessageFragment: \"".concat((this.signatureMessageFragment || signatureMessageFragment_1.SignatureMessageFragment.EMPTY).toTrytes().toString(), "\"\n\taddress: \"").concat((this.address || address_1.Address.EMPTY).toTrytes().toString(), "\"\n\tvalue: ").concat((this.value || Transaction.EMPTY_11).toNumber(), "\n\tobsoleteTag: \"").concat((this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\ttimestamp: ").concat((this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tcurrentIndex: ").concat((this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tlastIndex: ").concat((this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tbundle: \"").concat((this.bundle || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttrunkTransaction: \"").concat((this.trunkTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\tbranchTransaction: \"").concat((this.branchTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttag: \"").concat((this.tag || this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\tattachmentTimestamp: ").concat((this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampLowerBound: ").concat((this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampUpperBound: ").concat((this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tnonce: \"").concat((this.nonce || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n}");
    }
  }], [{
    key: "fromParams",
    value: function fromParams(signatureMessageFragment, address, value, obsoleteTag, timestamp, currentIndex, lastIndex, bundle, trunkTransaction, branchTransaction, tag, attachmentTimestamp, attachmentTimestampLowerBound, attachmentTimestampUpperBound, nonce) {
      var tx = new Transaction();
      tx.signatureMessageFragment = signatureMessageFragment;
      tx.address = address;
      tx.value = tryteNumber_1.TryteNumber.fromNumber(value, 11);
      tx.obsoleteTag = obsoleteTag;
      tx.timestamp = tryteNumber_1.TryteNumber.fromNumber(timestamp);
      tx.currentIndex = tryteNumber_1.TryteNumber.fromNumber(currentIndex);
      tx.lastIndex = tryteNumber_1.TryteNumber.fromNumber(lastIndex);
      tx.bundle = bundle;
      tx.trunkTransaction = trunkTransaction;
      tx.branchTransaction = branchTransaction;
      tx.tag = tag;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestamp);
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampLowerBound);
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampUpperBound);
      tx.nonce = nonce;
      return tx;
    }
    /**
     * Create instance of transaction from trytes.
     * @param trytes The trytes for the this.
     * @returns An instance of this.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(trytes) {
      if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The trytes should be a valid Trytes object");
      }

      var length = trytes.length();

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length"), {
          length: length
        });
      }

      var checkIndexStart = 2279;
      var checkIndexLength = 16;
      var check = trytes.sub(checkIndexStart, checkIndexLength).toString();

      if (check !== Transaction.CHECK_VALUE) {
        throw new dataError_1.DataError("The trytes between ".concat(checkIndexStart, " and ").concat(checkIndexStart + checkIndexLength, " should be all 9s"), {
          check: check
        });
      }

      var tx = new Transaction();
      var startPos = 0;
      tx.signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes.sub(startPos, signatureMessageFragment_1.SignatureMessageFragment.LENGTH));
      startPos += signatureMessageFragment_1.SignatureMessageFragment.LENGTH;
      tx.address = address_1.Address.fromTrytes(trytes.sub(startPos, address_1.Address.LENGTH));
      startPos += address_1.Address.LENGTH;
      tx.value = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, 11), 11);
      startPos += 11;
      startPos += Transaction.CHECK_VALUE_LENGTH;
      tx.obsoleteTag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.timestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.currentIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.lastIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.bundle = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.trunkTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.branchTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.tag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.nonce = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      return tx;
    }
  }]);

  return Transaction;
}();
/**
 * The length of a valid transaction (2673).
 */


Transaction.LENGTH = 2673;
/**
 * The length of a valid check value (16).
 */

Transaction.CHECK_VALUE_LENGTH = 16;
/**
 * The check value for bundles all 9s.
 */

Transaction.CHECK_VALUE = "9".repeat(Transaction.CHECK_VALUE_LENGTH);
/* @internal */

Transaction.EMPTY_11 = tryteNumber_1.TryteNumber.fromNumber(0, 11);
exports.Transaction = Transaction;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(15);

var curl_1 = __webpack_require__(39);

var kerl_1 = __webpack_require__(40);
/**
 * Factory to generate sponges.
 */


var SpongeFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(SpongeFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function SpongeFactory() {
    _classCallCheck(this, SpongeFactory);

    return _possibleConstructorReturn(this, (SpongeFactory.__proto__ || Object.getPrototypeOf(SpongeFactory)).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(SpongeFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return SpongeFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!SpongeFactory._instance) {
        SpongeFactory._instance = new SpongeFactory();

        SpongeFactory._instance.register("curl", function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return new (Function.prototype.bind.apply(curl_1.Curl, [null].concat(args)))();
        });

        SpongeFactory._instance.register("curl81", function () {
          return new curl_1.Curl(81);
        });

        SpongeFactory._instance.register("curl27", function () {
          return new curl_1.Curl(27);
        });

        SpongeFactory._instance.register("kerl", function () {
          return new kerl_1.Kerl();
        });
      }

      return SpongeFactory._instance;
    }
  }]);

  return SpongeFactory;
}(factoryBase_1.FactoryBase);

exports.SpongeFactory = SpongeFactory;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */

var FactoryBase =
/*#__PURE__*/
function () {
  function FactoryBase() {
    _classCallCheck(this, FactoryBase);

    /* @internal */
    this._types = {};
  }
  /**
   * Register a new type with the factory.
   * @param name The name of the type to register.
   * @param typeConstructor The constructor for the type.
   */


  _createClass(FactoryBase, [{
    key: "register",
    value: function register(name, typeConstructor) {
      this.getInstance()._types[name] = typeConstructor;
    }
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */

  }, {
    key: "unregister",
    value: function unregister(name) {
      delete this.getInstance()._types[name];
    }
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "exists",
    value: function exists(name) {
      return this.getInstance()._types[name] !== undefined;
    }
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "types",
    value: function types() {
      return Object.keys(this.getInstance()._types);
    }
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */

  }, {
    key: "create",
    value: function create(name) {
      var instance = this.getInstance();

      if (instance._types[name]) {
        var _instance$_types;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_instance$_types = instance._types)[name].apply(_instance$_types, args);
      } else {
        return undefined;
      }
    }
  }]);

  return FactoryBase;
}();

exports.FactoryBase = FactoryBase;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trits_1 = __webpack_require__(7);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling tryte number.
 */


var TryteNumber =
/*#__PURE__*/
function () {
  /* @internal */
  function TryteNumber(trytes) {
    _classCallCheck(this, TryteNumber);

    this._trytes = trytes;
  }
  /**
   * Create tryte number from number.
   * @param value The number value to create the object from.
   * @param length The tryte length to pad the number with.
   * @returns An instance of TryteNumber.
   */


  _createClass(TryteNumber, [{
    key: "toTrytes",

    /**
     * Convert the tryte number to trytes.
     * @returns Trytes version of the tryte number.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      return trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(this._trytes)).toNumber();
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the value of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toNumber();
    }
  }], [{
    key: "fromNumber",
    value: function fromNumber(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;
      var trytes;

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (objectHelper_1.ObjectHelper.isEmpty(value)) {
        trytes = "9".repeat(length);
      } else {
        if (!numberHelper_1.NumberHelper.isInteger(value)) {
          throw new dataError_1.DataError("The value is not an integer", {
            value: value
          });
        }

        var trits = trits_1.Trits.fromNumber(value).toNumberArray();

        while (trits.length < length * 3) {
          trits.push(0);
        }

        trytes = trits_1.Trits.fromNumberArray(trits).toTrytes().toString();
      }

      return new TryteNumber(trytes);
    }
    /**
     * Create tryte number from trytes.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;

      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var tryteString = value.toString();

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (tryteString.length > length) {
        throw new dataError_1.DataError("The value contains too many characters", {
          length: tryteString.length
        });
      }

      while (tryteString.length < length) {
        tryteString += "9";
      }

      return new TryteNumber(tryteString);
    }
  }]);

  return TryteNumber;
}();
/**
 * Length of a number that uses 9 trytes.
 */


TryteNumber.LENGTH_9 = 9;
/**
 * An empty 9 length tryte number.
 */

TryteNumber.EMPTY_9 = TryteNumber.fromNumber(0, TryteNumber.LENGTH_9);
exports.TryteNumber = TryteNumber;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(10);
/**
 * A business implementation of an error.
 */


var BusinessError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(BusinessError, _coreError_1$CoreErro);

  /**
   * Create an instance of BusinessError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function BusinessError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, BusinessError);

    _this = _possibleConstructorReturn(this, (BusinessError.__proto__ || Object.getPrototypeOf(BusinessError)).call(this, message, additional, innerError));
    _this.domain = "Business";
    return _this;
  }

  return BusinessError;
}(coreError_1.CoreError);

exports.BusinessError = BusinessError;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Json helper methods.
 */

var JsonHelper =
/*#__PURE__*/
function () {
  function JsonHelper() {
    _classCallCheck(this, JsonHelper);
  }

  _createClass(JsonHelper, null, [{
    key: "stringify",

    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    value: function stringify(value, replacer, space) {
      // eliminates any recursion in the stringify
      var cache = [];

      var recusionReplacer = function recusionReplacer(key, replaceValue) {
        if (_typeof(replaceValue) === "object" && value !== null && replaceValue !== undefined) {
          if (cache.indexOf(replaceValue) !== -1) {
            // circular reference found, discard key
            return;
          } else {
            cache.push(replaceValue);
          }
        }

        return replacer ? replacer(key, replaceValue) : replaceValue;
      };

      return JSON.stringify(value, recusionReplacer, space);
    }
  }]);

  return JsonHelper;
}();

exports.JsonHelper = JsonHelper;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Implementation of ILogger which is silent.
 */

var NullLogger =
/*#__PURE__*/
function () {
  function NullLogger() {
    _classCallCheck(this, NullLogger);
  }

  _createClass(NullLogger, [{
    key: "banner",

    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    value: function banner(message) {}
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "log",
    value: function log(message) {}
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "info",
    value: function info(message) {}
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "warning",
    value: function warning(message) {}
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "error",
    value: function error(message, err) {}
  }]);

  return NullLogger;
}();

exports.NullLogger = NullLogger;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Represents a class which can provide the time.
 */

var TimeService =
/*#__PURE__*/
function () {
  function TimeService() {
    _classCallCheck(this, TimeService);
  }

  _createClass(TimeService, [{
    key: "msSinceEpoch",

    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    value: function msSinceEpoch() {
      return Date.now();
    }
  }]);

  return TimeService;
}();

exports.TimeService = TimeService;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Represents an enum for the address security values.
 */

var AddressSecurity;

(function (AddressSecurity) {
  AddressSecurity[AddressSecurity["low"] = 1] = "low";
  AddressSecurity[AddressSecurity["medium"] = 2] = "medium";
  AddressSecurity[AddressSecurity["high"] = 3] = "high";
})(AddressSecurity = exports.AddressSecurity || (exports.AddressSecurity = {}));

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var hash_1 = __webpack_require__(6);

var signatureMessageFragment_1 = __webpack_require__(12);

var tag_1 = __webpack_require__(11);

var transaction_1 = __webpack_require__(13);

var tryteNumber_1 = __webpack_require__(16);
/**
 * A class for handling bundles.
 */


var Bundle =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Bundle.
   */
  function Bundle() {
    _classCallCheck(this, Bundle);

    this.transactions = [];
  }
  /**
   * Add new transactions to the bundle.
   * @param signatureMessageLength The number of transactions to add.
   * @param address The address for the transactions.
   * @param value The value for the first of the transactions.
   * @param tag The tag to include in the transactions.
   * @param timestamp The timestamp for the transactions.
   */


  _createClass(Bundle, [{
    key: "addTransactions",
    value: function addTransactions(signatureMessageLength, address, value, tag, timestamp) {
      for (var i = 0; i < signatureMessageLength; i++) {
        this.transactions.push(transaction_1.Transaction.fromParams(undefined, address, i === 0 ? value : 0, tag, timestamp, undefined, undefined, undefined, undefined, undefined, tag, undefined, undefined, undefined, undefined));
      }
    }
    /**
     * Add signature fragments to the bundle.
     * @param signatureMessageFragments The signature fragments to add to the bundle transactions.
     */

  }, {
    key: "addSignatureMessageFragments",
    value: function addSignatureMessageFragments(signatureMessageFragments) {
      if (objectHelper_1.ObjectHelper.isEmpty(signatureMessageFragments)) {
        throw new dataError_1.DataError("The signatureMessageFragments should be an array of SignatureMessageFragments");
      }

      for (var i = 0; i < this.transactions.length; i++) {
        this.transactions[i].signatureMessageFragment = signatureMessageFragments[i] || signatureMessageFragment_1.SignatureMessageFragment.EMPTY;
        this.transactions[i].trunkTransaction = hash_1.Hash.EMPTY;
        this.transactions[i].branchTransaction = hash_1.Hash.EMPTY;
        this.transactions[i].attachmentTimestamp = tryteNumber_1.TryteNumber.EMPTY_9;
        this.transactions[i].attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.EMPTY_9;
        this.transactions[i].attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.EMPTY_9;
        this.transactions[i].nonce = tag_1.Tag.EMPTY;
      }
    }
  }]);

  return Bundle;
}();

exports.Bundle = Bundle;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(5);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var address_1 = __webpack_require__(8);

var addressSecurity_1 = __webpack_require__(21);

var hash_1 = __webpack_require__(6);

var signatureMessageFragment_1 = __webpack_require__(12);

var trits_1 = __webpack_require__(7);

var trytes_1 = __webpack_require__(1);

var cryptoError_1 = __webpack_require__(9);

var spongeFactory_1 = __webpack_require__(14);
/**
 * ISS Hashing functions.
 * Converted https://github.com/iotaledger/iri/src/main/java/com/iota/iri/hash/ISS.java
 */


var ISS =
/*#__PURE__*/
function () {
  function ISS() {
    _classCallCheck(this, ISS);
  }

  _createClass(ISS, null, [{
    key: "subseed",

    /**
     * Get the subseed for the seed and index.
     * @param seed The seed.
     * @param index The index for the seed.
     * @param spongeType The sponge type to use for operations.
     * @returns The subseed.
     */
    value: function subseed(seed, index) {
      var spongeType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "curl27";

      if (!objectHelper_1.ObjectHelper.isType(seed, Int8Array)) {
        throw new cryptoError_1.CryptoError("The seed must be of type Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
        throw new cryptoError_1.CryptoError("The index must be an integer >= 0");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");
      sponge.initialize();
      var subseedPreimage = seed.slice();
      var localIndex = index;

      while (localIndex-- > 0) {
        for (var i = 0; i < subseedPreimage.length; i++) {
          if (++subseedPreimage[i] > ISS.MAX_TRIT_VALUE) {
            subseedPreimage[i] = ISS.MIN_TRIT_VALUE;
          } else {
            break;
          }
        }
      }

      var subseed = new Int8Array(hashLength);
      sponge.absorb(subseedPreimage, 0, subseedPreimage.length);
      sponge.squeeze(subseed, 0, subseed.length);
      return subseed;
    }
    /**
     * Create the key for the seed.
     * @param seed The seed to create the key for.
     * @param index The index to use for the seed.
     * @param length The security level to create the key.
     * @param spongeType The sponge type to use for operations.
     * @returns the key.
     */

  }, {
    key: "key",
    value: function key(seed, index, security) {
      var spongeType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "kerl";

      if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
        throw new cryptoError_1.CryptoError("The seed must be of type Hash");
      }

      if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
        throw new cryptoError_1.CryptoError("The index must be an integer >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(security) || security < addressSecurity_1.AddressSecurity.low || security > addressSecurity_1.AddressSecurity.high) {
        throw new cryptoError_1.CryptoError("The security must be an integer >= 1 and <= 3");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var seedTrits = trits_1.Trits.fromTrytes(seed.toTrytes());
      var indexTrits = trits_1.Trits.fromNumber(index);
      var subseed = trits_1.Trits.add(seedTrits, indexTrits).toArray();
      var subseedLength = subseed.length;
      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");
      sponge.initialize();
      sponge.absorb(subseed, 0, subseedLength);
      sponge.squeeze(subseed, 0, subseedLength);
      sponge.reset();
      sponge.absorb(subseed, 0, subseedLength);
      var key = new Int8Array(ISS.NUMBER_OF_FRAGMENT_CHUNKS * hashLength * security);
      var offset = 0;
      var buffer = new Int8Array(subseedLength);
      var localLength = security;

      while (localLength-- > 0) {
        for (var i = 0; i < ISS.NUMBER_OF_FRAGMENT_CHUNKS; i++) {
          sponge.squeeze(buffer, 0, subseedLength);

          for (var j = 0; j < hashLength; j++) {
            key[offset++] = buffer[j];
          }
        }
      }

      return key;
    }
    /**
     * Create the digests for the given subseed.
     * @param subseed To create the digests for.
     * @param spongeType The sponge type to use for operations.
     * @returns The digests.
     */

  }, {
    key: "digests",
    value: function digests(subseed) {
      var spongeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "kerl";

      if (!objectHelper_1.ObjectHelper.isType(subseed, Int8Array)) {
        throw new cryptoError_1.CryptoError("The subseed must be of type Int8Array");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");
      var fragmentLength = hashLength * ISS.NUMBER_OF_FRAGMENT_CHUNKS;

      if (subseed.length % fragmentLength !== 0) {
        throw new cryptoError_1.CryptoError("The subseed length must be a multiple of ".concat(fragmentLength));
      }

      var tryteRange = ISS.MAX_TRYTE_VALUE - ISS.MIN_TRYTE_VALUE;
      var keyLenDiv = subseed.length / fragmentLength;
      var digests = new Int8Array(keyLenDiv * hashLength);
      var buffer;

      for (var i = 0; i < keyLenDiv; i++) {
        var iMul = i * fragmentLength;
        var keyFragment = subseed.slice(iMul, iMul + fragmentLength);

        for (var j = 0; j < ISS.NUMBER_OF_FRAGMENT_CHUNKS; j++) {
          var jMul = j * hashLength;
          buffer = keyFragment.slice(jMul, jMul + hashLength);

          for (var k = 0; k < tryteRange; k++) {
            sponge.reset();
            sponge.absorb(buffer, 0, buffer.length);
            sponge.squeeze(buffer, 0, hashLength);
          }

          for (var _k = 0; _k < hashLength; _k++) {
            keyFragment[jMul + _k] = buffer[_k];
          }
        }

        sponge.reset();
        sponge.absorb(keyFragment, 0, keyFragment.length);
        sponge.squeeze(buffer, 0, hashLength);
        var iMul2 = i * hashLength;

        for (var _j = 0; _j < hashLength; _j++) {
          digests[iMul2 + _j] = buffer[_j];
        }
      }

      return digests;
    }
    /**
     * Create the address for the digests.
     * @param digests The digests to create the address for.
     * @param spongeType The sponge type to use for operations.
     * @returns the address trits.
     */

  }, {
    key: "address",
    value: function address(digests) {
      var spongeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "kerl";

      if (!objectHelper_1.ObjectHelper.isType(digests, Int8Array)) {
        throw new cryptoError_1.CryptoError("The digests must be of type Int8Array");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");

      if (digests.length % hashLength !== 0) {
        throw new cryptoError_1.CryptoError("Invalid digests length, must be a multiple of ".concat(hashLength));
      }

      sponge.initialize();
      sponge.absorb(digests, 0, digests.length);
      var addressTrits = new Int8Array(hashLength);
      sponge.squeeze(addressTrits, 0, addressTrits.length);
      return addressTrits;
    }
    /**
     * Create digest of the normalized bundle fragment.
     * @param normalizedBundleFragment The fragment to create digest.
     * @param signatureMessageFragment The trits for signature message fragment.
     * @param spongeType The sponge type to use for operations.
     * @returns The digest of the bundle and signature message fragment.
     */

  }, {
    key: "digest",
    value: function digest(normalizedBundleFragment, signatureMessageFragment) {
      var spongeType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "kerl";

      if (!objectHelper_1.ObjectHelper.isType(normalizedBundleFragment, Int8Array)) {
        throw new cryptoError_1.CryptoError("The normalizedBundleFragment must be of type Int8Array");
      }

      if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, Int8Array)) {
        throw new cryptoError_1.CryptoError("The signatureMessageFragment must be of type Int8Array");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var buffer;
      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");
      sponge.initialize();

      for (var i = 0; i < ISS.NUMBER_OF_FRAGMENT_CHUNKS; i++) {
        buffer = new Int8Array(signatureMessageFragment.slice(i * hashLength, (i + 1) * hashLength));

        for (var j = normalizedBundleFragment[i] - ISS.MIN_TRYTE_VALUE; j > 0; j--) {
          var sponge2 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
          sponge2.initialize();
          sponge2.absorb(buffer, 0, buffer.length);
          sponge2.squeeze(buffer, 0, sponge2.getConstant("HASH_LENGTH"));
        }

        sponge.absorb(buffer, 0, buffer.length);
      }

      sponge.squeeze(buffer, 0, sponge.getConstant("HASH_LENGTH"));
      return buffer;
    }
    /**
     * Get the digest for the subseed.
     * @param subseed The subseed to get the digest for.
     * @param security The security level.
     * @param spongeType The sponge type to use for operations.
     * @returns The digest.
     */

  }, {
    key: "subseedToDigest",
    value: function subseedToDigest(subseed, security) {
      var spongeType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "curl27";

      if (!objectHelper_1.ObjectHelper.isType(subseed, Int8Array)) {
        throw new cryptoError_1.CryptoError("The subseed must be of type Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(security) || security < addressSecurity_1.AddressSecurity.low || security > addressSecurity_1.AddressSecurity.high) {
        throw new cryptoError_1.CryptoError("The security must be an integer >= 1 and <= 3");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var c1 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var c2 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var c3 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      c1.initialize();
      c2.initialize();
      c3.initialize();
      var hashLength = c1.getConstant("HASH_LENGTH");
      var keyLength = hashLength / 3 / ISS.RADIX * hashLength;
      var length = security * keyLength / hashLength;
      var out = new Int8Array(hashLength);
      c1.absorb(subseed, 0, subseed.length);

      for (var i = 0; i < length; i++) {
        c1.squeeze(out, 0, out.length);

        for (var j = 0; j < ISS.MAX_TRYTE_VALUE - ISS.MIN_TRYTE_VALUE + 1; j++) {
          c2.reset();
          c2.absorb(out, 0, out.length);
          out = c2.getState().slice(0, hashLength);
        }

        c3.absorb(out, 0, out.length);
      }

      c3.squeeze(out, 0, out.length);
      return out;
    }
    /**
     * Create a normalized bundle.
     * @param bundleHash The hash of the bundle.
     * @param spongeType The sponge type to use for operations.
     * @returns the normalized bundle.
     */

  }, {
    key: "normalizedBundle",
    value: function normalizedBundle(bundleHash) {
      var spongeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "curl81";

      if (!objectHelper_1.ObjectHelper.isType(bundleHash, hash_1.Hash)) {
        throw new cryptoError_1.CryptoError("The bundleHash must be of type Hash");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");
      var normalizedBundle = new Int8Array(ISS.NUMBER_OF_FRAGMENT_CHUNKS * ISS.NUMBER_OF_SECURITY_LEVELS);
      var hashString = bundleHash.toTrytes().toString();
      var normalizedFragmentLength = hashLength / ISS.TRYTE_WIDTH / ISS.NUMBER_OF_SECURITY_LEVELS;

      for (var i = 0; i < ISS.NUMBER_OF_SECURITY_LEVELS; i++) {
        var sum = 0;

        for (var j = 0; j < normalizedFragmentLength; j++) {
          var hashChar = hashString.charAt(i * normalizedFragmentLength + j);
          var val = trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(hashChar)).toNumber();
          normalizedBundle[i * normalizedFragmentLength + j] = val;
          sum += val;
        }

        if (sum >= 0) {
          while (sum-- > 0) {
            for (var _j2 = 0; _j2 < normalizedFragmentLength; _j2++) {
              if (normalizedBundle[i * normalizedFragmentLength + _j2] > ISS.MIN_TRYTE_VALUE) {
                normalizedBundle[i * normalizedFragmentLength + _j2]--;
                break;
              }
            }
          }
        } else {
          while (sum++ < 0) {
            for (var _j3 = 0; _j3 < normalizedFragmentLength; _j3++) {
              if (normalizedBundle[i * normalizedFragmentLength + _j3] < ISS.MAX_TRYTE_VALUE) {
                normalizedBundle[i * normalizedFragmentLength + _j3]++;
                break;
              }
            }
          }
        }
      }

      return normalizedBundle;
    }
    /**
     * Validate the signature fragments from the address.
     * @param expectedAddress The address.
     * @param signatureMessageFragments The signature message fragments.
     * @param bundleHash The hash for the bundle.
     * @param spongeType The sponge type to use for operations.
     * @returns True if the signature message fragment are signed by the expected address.
     */

  }, {
    key: "validateSignatures",
    value: function validateSignatures(expectedAddress, signatureMessageFragments, bundleHash) {
      var spongeType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "kerl";

      if (!objectHelper_1.ObjectHelper.isType(expectedAddress, address_1.Address)) {
        throw new cryptoError_1.CryptoError("The expectedAddress must be of type Hash");
      }

      if (!arrayHelper_1.ArrayHelper.isTyped(signatureMessageFragments, signatureMessageFragment_1.SignatureMessageFragment)) {
        throw new cryptoError_1.CryptoError("The signatureMessageFragments must be an array of type SignatureMessageFragment");
      }

      if (!objectHelper_1.ObjectHelper.isType(bundleHash, hash_1.Hash)) {
        throw new cryptoError_1.CryptoError("The bundleHash must be of type Hash");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var normalizedBundleFragments = [];
      var normalizedBundleHash = ISS.normalizedBundle(bundleHash);
      var sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = sponge.getConstant("HASH_LENGTH");

      for (var f = 0; f < 3; f++) {
        normalizedBundleFragments[f] = normalizedBundleHash.slice(f * ISS.NUMBER_OF_FRAGMENT_CHUNKS, (f + 1) * ISS.NUMBER_OF_FRAGMENT_CHUNKS);
      }

      var digests = new Int8Array(signatureMessageFragments.length * hashLength);

      for (var i = 0; i < signatureMessageFragments.length; i++) {
        var digestBuffer = ISS.digest(normalizedBundleFragments[i % 3], trits_1.Trits.fromTrytes(signatureMessageFragments[i].toTrytes()).toArray());

        for (var j = 0; j < hashLength; j++) {
          digests[i * hashLength + j] = digestBuffer[j];
        }
      }

      return expectedAddress.toTrytes().toString() === trits_1.Trits.fromArray(ISS.address(digests)).toTrytes().toString();
    }
    /**
     * Create a signed signature message fragment.
     * @param normalizedBundleFragment The fragment to sign.
     * @param keyFragment The key fragment to sign with.
     * @param spongeType The sponge type to use for operations.
     * @returns The signed fragment.
     */

  }, {
    key: "signatureMessageFragment",
    value: function signatureMessageFragment(normalizedBundleFragment, keyFragment) {
      var spongeType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "kerl";

      if (!objectHelper_1.ObjectHelper.isType(normalizedBundleFragment, Int8Array)) {
        throw new cryptoError_1.CryptoError("The normalizedBundleFragment must be of type Int8Array");
      }

      if (!objectHelper_1.ObjectHelper.isType(keyFragment, Int8Array)) {
        throw new cryptoError_1.CryptoError("The keyFragment must be of type Int8Array");
      }

      if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
        throw new cryptoError_1.CryptoError("The spongeType must be one of [".concat(spongeFactory_1.SpongeFactory.instance().types().join(", "), "]"));
      }

      var signatureMessageFragment = keyFragment.slice();
      var hash;
      var kerl = spongeFactory_1.SpongeFactory.instance().create(spongeType);
      var hashLength = kerl.getConstant("HASH_LENGTH");

      for (var i = 0; i < 27; i++) {
        hash = signatureMessageFragment.slice(i * hashLength, (i + 1) * hashLength);

        for (var j = 0; j < 13 - normalizedBundleFragment[i]; j++) {
          kerl.initialize();
          kerl.reset();
          kerl.absorb(hash, 0, hashLength);
          kerl.squeeze(hash, 0, hashLength);
        }

        for (var _j4 = 0; _j4 < hashLength; _j4++) {
          signatureMessageFragment[i * hashLength + _j4] = hash[_j4];
        }
      }

      return signatureMessageFragment;
    }
  }]);

  return ISS;
}();
/* @internal */


ISS.NUMBER_OF_FRAGMENT_CHUNKS = 27;
/* @internal */

ISS.NUMBER_OF_SECURITY_LEVELS = 3;
/* @internal */

ISS.TRYTE_WIDTH = 3;
/* @internal */

ISS.MIN_TRYTE_VALUE = -13;
/* @internal */

ISS.MAX_TRYTE_VALUE = 13;
/* @internal */

ISS.MIN_TRIT_VALUE = -1;
/* @internal */

ISS.MAX_TRIT_VALUE = 1;
/* @internal */

ISS.RADIX = 3;
exports.ISS = ISS;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(10);
/**
 * A network implementation of an error.
 */


var NetworkError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(NetworkError, _coreError_1$CoreErro);

  /**
   * Create an instance of NetworkError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function NetworkError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, NetworkError);

    _this = _possibleConstructorReturn(this, (NetworkError.__proto__ || Object.getPrototypeOf(NetworkError)).call(this, message, additional, innerError));
    _this.domain = "Network";
    return _this;
  }

  return NetworkError;
}(coreError_1.CoreError);

exports.NetworkError = NetworkError;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var address_1 = __webpack_require__(8);

var tag_1 = __webpack_require__(11);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling transfers.
 */


var Transfer =
/*#__PURE__*/
function () {
  /* @internal */
  function Transfer() {
    _classCallCheck(this, Transfer);
  }
  /**
   * Create instance of transfer from parameters.
   * @param address The address.
   * @param value The value.
   * @param messsage The message for the transfer.
   * @param tag The tag.
   * @returns New instance of Transfer.
   */


  _createClass(Transfer, null, [{
    key: "fromParams",
    value: function fromParams(address, value, message, tag) {
      if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
        throw new dataError_1.DataError("The address should be a valid Address object");
      }

      if (!numberHelper_1.NumberHelper.isInteger(value) || value < 0) {
        throw new dataError_1.DataError("The value should be a number >= 0");
      }

      if (!objectHelper_1.ObjectHelper.isEmpty(message) && !objectHelper_1.ObjectHelper.isType(message, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The message should be a valid Trytes object");
      }

      if (!objectHelper_1.ObjectHelper.isEmpty(tag) && !objectHelper_1.ObjectHelper.isType(tag, tag_1.Tag)) {
        throw new dataError_1.DataError("The tag should be a valid Tag object");
      }

      var transfer = new Transfer();
      transfer.address = address;
      transfer.value = value;
      transfer.message = message;
      transfer.tag = tag;
      return transfer;
    }
  }]);

  return Transfer;
}();

exports.Transfer = Transfer;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var hash_1 = __webpack_require__(6);

var transaction_1 = __webpack_require__(13);

var trits_1 = __webpack_require__(7);

var cryptoError_1 = __webpack_require__(9);

var spongeFactory_1 = __webpack_require__(14);
/**
 * Helper class for transactions.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */


var TransactionHelper =
/*#__PURE__*/
function () {
  function TransactionHelper() {
    _classCallCheck(this, TransactionHelper);
  }

  _createClass(TransactionHelper, null, [{
    key: "hash",

    /**
     * Create the hash for a transaction.
     * @param transaction The transaction to generate the hash.
     * @returns The hash of thr transaction.
     */
    value: function hash(transaction) {
      if (!objectHelper_1.ObjectHelper.isType(transaction, transaction_1.Transaction)) {
        throw new cryptoError_1.CryptoError("The transaction must be of type Transaction");
      }

      var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
      var transactionTrits = trits_1.Trits.fromTrytes(transaction.toTrytes()).toArray();
      curl.initialize();
      curl.absorb(transactionTrits, 0, transactionTrits.length);
      var hashTrits = new Int8Array(curl.getConstant("HASH_LENGTH"));
      curl.squeeze(hashTrits, 0, hashTrits.length);
      return hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());
    }
  }]);

  return TransactionHelper;
}();

exports.TransactionHelper = TransactionHelper;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(5);

var objectHelper_1 = __webpack_require__(0);

var spongeFactory_1 = __webpack_require__(14);

var iss_1 = __webpack_require__(23);

var address_1 = __webpack_require__(8);

var bundle_1 = __webpack_require__(22);

var hash_1 = __webpack_require__(6);

var signatureMessageFragment_1 = __webpack_require__(12);

var tag_1 = __webpack_require__(11);

var transaction_1 = __webpack_require__(13);

var trits_1 = __webpack_require__(7);

var tryteNumber_1 = __webpack_require__(16);

var trytes_1 = __webpack_require__(1);

var hmacCurl_1 = __webpack_require__(43);
/**
 * Helper class for signing bundles.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */


var BundleHelper =
/*#__PURE__*/
function () {
  function BundleHelper() {
    _classCallCheck(this, BundleHelper);
  }

  _createClass(BundleHelper, null, [{
    key: "isValid",

    /**
     * Is the bundle valid.
     * @param bundle The bundle to check for validity.
     * @returns True if the bundle is valid.
     */
    value: function isValid(bundle) {
      var isValid = false;

      if (objectHelper_1.ObjectHelper.isType(bundle, bundle_1.Bundle) && arrayHelper_1.ArrayHelper.isTyped(bundle.transactions, transaction_1.Transaction)) {
        var totalSum = 0;
        var kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
        kerl.initialize(); // Prepare for signature validation

        var signaturesToValidate = [];
        isValid = true;

        for (var t = 0; t < bundle.transactions.length && isValid; t++) {
          var bundleTx = bundle.transactions[t];
          totalSum += bundleTx.value.toNumber(); // currentIndex has to be equal to the index in the array

          if (bundleTx.currentIndex.toNumber() !== t) {
            isValid = false;
          } else {
            // Get the transaction trytes
            var thisTxTrytes = bundleTx.toTrytes(); // Absorb bundle hash + value + timestamp + lastIndex + currentIndex trytes.

            var thisTxTrits = trits_1.Trits.fromTrytes(thisTxTrytes.sub(signatureMessageFragment_1.SignatureMessageFragment.LENGTH, 162)).toArray();
            kerl.absorb(thisTxTrits, 0, thisTxTrits.length); // Check if input transaction

            if (bundleTx.value.toNumber() < 0) {
              var newSignatureToValidate = {
                address: bundleTx.address,
                signatureMessageFragments: [bundleTx.signatureMessageFragment]
              }; // Find the subsequent txs with the remaining signature fragment

              for (var i = t; i < bundle.transactions.length - 1; i++) {
                var newBundleTx = bundle.transactions[i + 1]; // Check if new tx is part of the signature fragment

                if (newBundleTx.address.toTrytes().toString() === bundleTx.address.toTrytes().toString() && newBundleTx.value.toNumber() === 0) {
                  newSignatureToValidate.signatureMessageFragments.push(newBundleTx.signatureMessageFragment);
                }
              }

              signaturesToValidate.push(newSignatureToValidate);
            }
          }
        } // Check for total sum, if not equal 0 return error


        if (totalSum !== 0) {
          isValid = false;
        } else {
          // get the bundle hash from the bundle transactions
          var bundleFromTxs = new Int8Array(kerl.getConstant("HASH_LENGTH"));
          kerl.squeeze(bundleFromTxs, 0, bundleFromTxs.length);
          var bundleFromTxsTrytes = trits_1.Trits.fromArray(bundleFromTxs).toTrytes().toString(); // Check if bundle hash is the same as returned by tx object

          var bundleHash = bundle.transactions[0].bundle;

          if (bundleFromTxsTrytes !== bundleHash.toTrytes().toString()) {
            isValid = false;
          } else {
            // Last tx in the bundle should have currentIndex === lastIndex
            if (bundle.transactions[bundle.transactions.length - 1].currentIndex.toNumber() !== bundle.transactions[bundle.transactions.length - 1].lastIndex.toNumber()) {
              isValid = false;
            } else {
              // Validate the signatures
              for (var _i = 0; _i < signaturesToValidate.length && isValid; _i++) {
                var isValidSignature = iss_1.ISS.validateSignatures(signaturesToValidate[_i].address, signaturesToValidate[_i].signatureMessageFragments, bundleHash);

                if (!isValidSignature) {
                  isValid = false;
                }
              }
            }
          }
        }
      }

      return isValid;
    }
    /**
     * Validate signatures for each of the co-signers in the multi-signature to independently verify that a generated
     * transaction with the corresponding signatures of the co-signers is valid.
     * @param signedBundle The signed bundle to check the signatures.
     * @param inputAddress The address used to initiate the transfer.
     * @returns True is the signatures are valid.
     */

  }, {
    key: "validateSignatures",
    value: function validateSignatures(signedBundle, inputAddress) {
      var isValid = false;

      if (objectHelper_1.ObjectHelper.isType(signedBundle, bundle_1.Bundle) && arrayHelper_1.ArrayHelper.isTyped(signedBundle.transactions, transaction_1.Transaction) && objectHelper_1.ObjectHelper.isType(inputAddress, address_1.Address)) {
        var bundleHash;
        var signatureFragments = [];
        var inputAddressTrytes = inputAddress.toTrytes().toString();

        for (var i = 0; i < signedBundle.transactions.length; i++) {
          if (signedBundle.transactions[i].address.toTrytes().toString() === inputAddressTrytes) {
            bundleHash = signedBundle.transactions[i].bundle; // if we reached remainder bundle

            if (signedBundle.transactions[i].signatureMessageFragment.toTrytes().toString() === signatureMessageFragment_1.SignatureMessageFragment.EMPTY.toTrytes().toString()) {
              break;
            }

            signatureFragments.push(signedBundle.transactions[i].signatureMessageFragment);
          }
        }

        if (bundleHash) {
          isValid = iss_1.ISS.validateSignatures(inputAddress, signatureFragments, bundleHash);
        }
      }

      return isValid;
    }
    /**
     * Prepare a bundle.
     * @param timeService To use for stamping the transactions.
     * @param transfers The transfers to add to the bundle.
     */

  }, {
    key: "prepareBundle",
    value: function prepareBundle(timeService, transfers) {
      var bundle = new bundle_1.Bundle();
      var lastTag;
      var totalValue = 0;
      var signatureMessageFragments = []; //  Iterate over all transfers, get totalValue
      //  and prepare the Messages, message and tag

      for (var i = 0; i < transfers.length; i++) {
        var signatureMessageLength = 1; // If message longer than 2187 trytes, increase signatureMessageLength (add 2nd transaction)

        var messageString = transfers[i].message.toString();

        if (messageString.length > signatureMessageFragment_1.SignatureMessageFragment.LENGTH) {
          // Get total length, message / maxLength (2187 trytes)
          signatureMessageLength += Math.floor(messageString.length / signatureMessageFragment_1.SignatureMessageFragment.LENGTH);
          var msgCopy = messageString; // While there is still a message, copy it

          while (msgCopy) {
            var fragment = msgCopy.slice(0, signatureMessageFragment_1.SignatureMessageFragment.LENGTH);
            msgCopy = msgCopy.slice(signatureMessageFragment_1.SignatureMessageFragment.LENGTH, msgCopy.length); // Pad remainder of fragment

            for (var j = 0; fragment.length < signatureMessageFragment_1.SignatureMessageFragment.LENGTH; j++) {
              fragment += "9";
            }

            signatureMessageFragments.push(signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString(fragment)));
          }
        } else {
          // Else, get single fragment with 2187 of 9's trytes
          var _fragment = "";

          if (messageString) {
            _fragment = messageString.slice(0, signatureMessageFragment_1.SignatureMessageFragment.LENGTH);
          }

          for (var _j = 0; _fragment.length < signatureMessageFragment_1.SignatureMessageFragment.LENGTH; _j++) {
            _fragment += "9";
          }

          signatureMessageFragments.push(signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString(_fragment)));
        } // get current timestamp in seconds


        var timestamp = Math.floor(timeService.msSinceEpoch() / 1000);
        lastTag = transfers[i].tag; // Add first entries to the bundle

        bundle.addTransactions(signatureMessageLength, transfers[i].address, transfers[i].value, transfers[i].tag, timestamp); // Sum up total value

        totalValue += transfers[i].value;
      }

      return {
        bundle: bundle,
        totalValue: totalValue,
        lastTag: lastTag,
        signatureMessageFragments: signatureMessageFragments
      };
    }
    /**
     * Sign the input of the bundle.
     * @param seed The seed to use for signing.
     * @param bundle The bundle to sign.
     * @param transferOptions Additional transfer options.
     * @param signatureMessageFragments The signature message fragemtns.
     * @param inputs The input for use.
     * @param addedHMAC Has an HMAC been added.
     */

  }, {
    key: "signInputs",
    value: function signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC) {
      BundleHelper.finalizeBundle(bundle);
      bundle.addSignatureMessageFragments(signatureMessageFragments); //  Here we do the actual signing of the inputs
      //  Iterate over all bundle transactions, find the inputs
      //  Get the corresponding private key and calculate the signatureMessageFragment

      for (var i = 0; i < bundle.transactions.length; i++) {
        if (bundle.transactions[i].value.toNumber() < 0) {
          var addressTrytes = bundle.transactions[i].address.toTrytes().toString(); // Get the corresponding keyIndex and security of the address

          var keyIndex = void 0;
          var keySecurity = void 0;

          for (var k = 0; k < inputs.length; k++) {
            if (inputs[k].address.toTrytes().toString() === addressTrytes) {
              keyIndex = inputs[k].keyIndex;
              keySecurity = inputs[k].security ? inputs[k].security : transferOptions.security;
              break;
            }
          } // Get corresponding private key of address


          var key = iss_1.ISS.key(seed, keyIndex, keySecurity);
          BundleHelper.signTransactions(bundle, i, 0, key, addressTrytes, keySecurity);
        }
      }

      if (addedHMAC) {
        var hmac = new hmacCurl_1.HmacCurl(transferOptions.hmacKey);
        hmac.addHMAC(bundle);
      }
    }
    /**
     * Sign the trsnactions
     * @param bundle The bundle of transactions to sign.
     * @param index The index to start.
     * @param firstUnsignedIndex The first unsigned index.
     * @param keyTrits The key trits.
     * @param addressTrytes The address trytes.
     * @param security The security level.
     */

  }, {
    key: "signTransactions",
    value: function signTransactions(bundle, index, firstUnsignedIndex, keyTrits, addressTrytes, security) {
      var bundleHash = bundle.transactions[index].bundle; //  Get the normalized bundle hash

      var normalizedBundleHash = iss_1.ISS.normalizedBundle(bundleHash);
      var normalizedBundleFragments = []; // Split hash into 3 fragments

      for (var l = 0; l < 3; l++) {
        normalizedBundleFragments[l] = normalizedBundleHash.slice(l * 27, (l + 1) * 27);
      } //  First 6561 trits for the firstFragment


      var firstFragment = keyTrits.slice(0, 6561); //  First bundle fragment uses the first 27 trytes

      var firstBundleFragment = normalizedBundleFragments[firstUnsignedIndex]; //  Calculate the new signatureMessageFragment with the first bundle fragment

      var firstSignedFragment = iss_1.ISS.signatureMessageFragment(firstBundleFragment, firstFragment); //  Convert signature to trytes and assign the new signatureMessageFragment

      bundle.transactions[index].signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trits_1.Trits.fromArray(firstSignedFragment).toTrytes()); // if user chooses higher than 27-tryte security
      // for each security level, add an additional signature

      for (var j = 1; j < security; j++) {
        //  Because the signature is > 2187 trytes, we need to
        //  find the subsequent transaction to add the remainder of the signature
        //  Same address as well as value = 0 (as we already spent the input)
        if (bundle.transactions[index + j].address.toTrytes().toString() === addressTrytes && bundle.transactions[index + j].value.toNumber() === 0) {
          // Use the next 6561 trits
          var nextFragment = keyTrits.slice(6561 * j, (j + 1) * 6561);
          var nextBundleFragment = normalizedBundleFragments[j]; //  Calculate the new signature

          var nextSignedFragment = iss_1.ISS.signatureMessageFragment(nextBundleFragment, nextFragment); //  Convert signature to trytes and assign it again to this bundle entry

          bundle.transactions[index + j].signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trits_1.Trits.fromArray(nextSignedFragment).toTrytes());
        }
      }
    }
    /**
     * Finalize a bundle.
     * @param bundle The bundle to finalize.
     */

  }, {
    key: "finalizeBundle",
    value: function finalizeBundle(bundle) {
      if (bundle.transactions.length > 0) {
        var validBundle = false;

        while (!validBundle) {
          var kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
          kerl.initialize();

          for (var i = 0; i < bundle.transactions.length; i++) {
            bundle.transactions[i].currentIndex = tryteNumber_1.TryteNumber.fromNumber(i);
            bundle.transactions[i].lastIndex = tryteNumber_1.TryteNumber.fromNumber(bundle.transactions.length - 1);
            var bundleEssence = trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(bundle.transactions[i].address.toTrytes().toString() + bundle.transactions[i].value.toTrytes().toString() + transaction_1.Transaction.CHECK_VALUE + bundle.transactions[i].obsoleteTag.toTrytes().toString() + bundle.transactions[i].timestamp.toTrytes().toString() + bundle.transactions[i].currentIndex.toTrytes().toString() + bundle.transactions[i].lastIndex.toTrytes().toString())).toArray();
            kerl.absorb(bundleEssence, 0, bundleEssence.length);
          }

          var hashTrits = new Int8Array(kerl.getConstant("HASH_LENGTH"));
          kerl.squeeze(hashTrits, 0, hashTrits.length);
          var hash = hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());

          for (var _i2 = 0; _i2 < bundle.transactions.length; _i2++) {
            bundle.transactions[_i2].bundle = hash;
          }

          var normalizedHash = iss_1.ISS.normalizedBundle(hash);

          if (normalizedHash.indexOf(13
          /* = M */
          ) !== -1) {
            // Insecure bundle. Increment Tag and recompute bundle hash.
            var increasedTag = trits_1.Trits.add(trits_1.Trits.fromTrytes(bundle.transactions[0].obsoleteTag.toTrytes()), trits_1.Trits.fromNumberArray([1]));
            bundle.transactions[0].obsoleteTag = tag_1.Tag.fromTrytes(increasedTag.toTrytes());
          } else {
            validBundle = true;
          }
        }
      }
    }
  }]);

  return BundleHelper;
}();

BundleHelper.NUMBER_OF_FRAGMENT_CHUNKS = 27;
exports.BundleHelper = BundleHelper;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(78);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(10);
/**
 * A platform implementation of an error.
 */


var PlatformError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(PlatformError, _coreError_1$CoreErro);

  /**
   * Create an instance of PlatformError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function PlatformError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, PlatformError);

    _this = _possibleConstructorReturn(this, (PlatformError.__proto__ || Object.getPrototypeOf(PlatformError)).call(this, message, additional, innerError));
    _this.domain = "Platform";
    return _this;
  }

  return PlatformError;
}(coreError_1.CoreError);

exports.PlatformError = PlatformError;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(15);
/**
 * Factory to generate network clients.
 */


var NetworkClientFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(NetworkClientFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function NetworkClientFactory() {
    _classCallCheck(this, NetworkClientFactory);

    return _possibleConstructorReturn(this, (NetworkClientFactory.__proto__ || Object.getPrototypeOf(NetworkClientFactory)).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(NetworkClientFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return NetworkClientFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!NetworkClientFactory._instance) {
        NetworkClientFactory._instance = new NetworkClientFactory();
      }

      return NetworkClientFactory._instance;
    }
  }]);

  return NetworkClientFactory;
}(factoryBase_1.FactoryBase);

exports.NetworkClientFactory = NetworkClientFactory;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(15);
/**
 * Factory to generate rng service.
 */


var PlatformCryptoFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(PlatformCryptoFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function PlatformCryptoFactory() {
    _classCallCheck(this, PlatformCryptoFactory);

    return _possibleConstructorReturn(this, (PlatformCryptoFactory.__proto__ || Object.getPrototypeOf(PlatformCryptoFactory)).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(PlatformCryptoFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return PlatformCryptoFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!PlatformCryptoFactory._instance) {
        PlatformCryptoFactory._instance = new PlatformCryptoFactory();
      }

      return PlatformCryptoFactory._instance;
    }
  }]);

  return PlatformCryptoFactory;
}(factoryBase_1.FactoryBase);

exports.PlatformCryptoFactory = PlatformCryptoFactory;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(15);
/**
 * Factory to generate rng service.
 */


var RngServiceFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(RngServiceFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function RngServiceFactory() {
    _classCallCheck(this, RngServiceFactory);

    return _possibleConstructorReturn(this, (RngServiceFactory.__proto__ || Object.getPrototypeOf(RngServiceFactory)).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(RngServiceFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return RngServiceFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!RngServiceFactory._instance) {
        RngServiceFactory._instance = new RngServiceFactory();
      }

      return RngServiceFactory._instance;
    }
  }]);

  return RngServiceFactory;
}(factoryBase_1.FactoryBase);

exports.RngServiceFactory = RngServiceFactory;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(10);

var jsonHelper_1 = __webpack_require__(18);

var objectHelper_1 = __webpack_require__(0);

var stringHelper_1 = __webpack_require__(4);
/**
 * Handle errors as gracefully as possible.
 */


var ErrorHelper =
/*#__PURE__*/
function () {
  function ErrorHelper() {
    _classCallCheck(this, ErrorHelper);
  }

  _createClass(ErrorHelper, null, [{
    key: "format",

    /**
     * Format an error object into something readable.
     * @param err The object to format.
     * @param includeStack Include the stack trace if there is one.
     * @returns Formatted version of the error object.
     */
    value: function format(err, includeStack) {
      if (err === null || err === undefined) {
        return "unknown error";
      } else if (coreError_1.CoreError.isError(err)) {
        var ret = err.format();

        if (includeStack && err.stack) {
          ret += "\nStack Trace";
          var parts = err.stack.split("\n");
          parts.shift();
          ret += "\n".concat(parts.join("\n"));
        }

        if (!objectHelper_1.ObjectHelper.isEmpty(err.innerError)) {
          if (includeStack && !objectHelper_1.ObjectHelper.isEmpty(err.innerError.stack)) {
            ret += "\n\n-----------------------------------------------";
            ret += "\nInner Stack Trace\n";
            ret += err.innerError.stack;
          } else {
            ret += "\nInner Error: ".concat(err.innerError.message, "\n");
          }
        }

        return ret;
      } else if (err instanceof Error) {
        var _ret = "";

        if (includeStack && !objectHelper_1.ObjectHelper.isEmpty(err.stack)) {
          _ret += err.stack;
        } else {
          _ret += err.message;
        }

        return _ret;
      } else {
        if (stringHelper_1.StringHelper.isString(err)) {
          return err;
        } else {
          return jsonHelper_1.JsonHelper.stringify(err, undefined, "\t");
        }
      }
    }
  }]);

  return ErrorHelper;
}();

exports.ErrorHelper = ErrorHelper;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(59);

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default implementation of background task service.
 */

var BackgroundTaskService =
/*#__PURE__*/
function () {
  function BackgroundTaskService() {
    _classCallCheck(this, BackgroundTaskService);
  }

  _createClass(BackgroundTaskService, [{
    key: "create",

    /**
     * Create a background task.
     * @param task The task to run in the background.
     * @param delay The delay before running the task.
     */
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(task, delay) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    try {
                      resolve(task());
                    } catch (err) {
                      reject(err);
                    }
                  }, delay);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function create(_x, _x2) {
        return _create.apply(this, arguments);
      };
    }()
  }]);

  return BackgroundTaskService;
}();

exports.BackgroundTaskService = BackgroundTaskService;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var stringHelper_1 = __webpack_require__(4);

var trytes_1 = __webpack_require__(1);

var dataError_1 = __webpack_require__(3);
/**
 * Trytes converter that converts to and from a string.
 */


var AsciiTrytesConverter =
/*#__PURE__*/
function () {
  function AsciiTrytesConverter() {
    _classCallCheck(this, AsciiTrytesConverter);
  }

  _createClass(AsciiTrytesConverter, [{
    key: "to",

    /**
     * Convert a string value into trytes.
     * @param string value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    value: function to(value) {
      if (!stringHelper_1.StringHelper.isString(value)) {
        throw new dataError_1.DataError("The value must be a string", {
          value: value
        });
      }

      if (!stringHelper_1.StringHelper.isAscii(value)) {
        throw new dataError_1.DataError("The value contains non ASCII characters", {
          value: value
        });
      }

      var trytes = "";

      for (var i = 0; i < value.length; i++) {
        var asciiValue = value.charCodeAt(i);
        var firstValue = asciiValue % 27;
        var secondValue = (asciiValue - firstValue) / 27;
        trytes += trytes_1.Trytes.ALPHABET[firstValue] + trytes_1.Trytes.ALPHABET[secondValue];
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */

  }, {
    key: "from",
    value: function from(trytes) {
      if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The trytes parameter is empty or not the correct type");
      }

      var trytesString = trytes.toString();

      if (trytesString.length % 2 === 1) {
        throw new dataError_1.DataError("The trytes length must be an even number");
      }

      var ascii = "";

      for (var i = 0; i < trytesString.length; i += 2) {
        var trytesPair = trytesString[i] + trytesString[i + 1];
        var firstValue = trytes_1.Trytes.ALPHABET.indexOf(trytesPair[0]);
        var secondValue = trytes_1.Trytes.ALPHABET.indexOf(trytesPair[1]);
        var decimalValue = firstValue + secondValue * 27;
        ascii += String.fromCharCode(decimalValue);
      }

      return ascii;
    }
  }]);

  return AsciiTrytesConverter;
}();

exports.AsciiTrytesConverter = AsciiTrytesConverter;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var address_1 = __webpack_require__(8);

var addressSecurity_1 = __webpack_require__(21);
/**
 * A class for handling inputs.
 */


var Input =
/*#__PURE__*/
function () {
  /* @internal */
  function Input() {
    _classCallCheck(this, Input);
  }
  /**
   * Create instance of input from parameters.
   * @param address The address.
   * @param security The address security.
   * @param keyIndex The key index.
   * @param balance The balance of the address.
   * @returns New instance of Input.
   */


  _createClass(Input, null, [{
    key: "fromParams",
    value: function fromParams(address, security, keyIndex, balance) {
      if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
        throw new dataError_1.DataError("The address should be a valid Address object");
      }

      if (!numberHelper_1.NumberHelper.isInteger(security) || security < addressSecurity_1.AddressSecurity.low || security > addressSecurity_1.AddressSecurity.high) {
        throw new dataError_1.DataError("The security should be a number between ".concat(addressSecurity_1.AddressSecurity.low, " and ").concat(addressSecurity_1.AddressSecurity.high));
      }

      if (!numberHelper_1.NumberHelper.isInteger(keyIndex) || keyIndex < 0) {
        throw new dataError_1.DataError("The keyIndex should be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(balance) || balance < 0) {
        throw new dataError_1.DataError("The balance should be a number >= 0");
      }

      var input = new Input();
      input.address = address;
      input.security = security;
      input.keyIndex = keyIndex;
      input.balance = balance;
      return input;
    }
  }]);

  return Input;
}();

exports.Input = Input;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(10);
/**
 * An api implementation of an error.
 */


var ApiError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(ApiError, _coreError_1$CoreErro);

  /**
   * Create an instance of ApiError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function ApiError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, ApiError);

    _this = _possibleConstructorReturn(this, (ApiError.__proto__ || Object.getPrototypeOf(ApiError)).call(this, message, additional, innerError));
    _this.domain = "API";
    return _this;
  }

  return ApiError;
}(coreError_1.CoreError);

exports.ApiError = ApiError;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var cryptoError_1 = __webpack_require__(9);
/**
 * Sha3 implementation.
 */


var Sha3 =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of SHA3.
   * @param bits The number of input bits.
   * @param padding The padding to use.
   * @param outputBits The number of output bits.
   */
  function Sha3(bits, padding, outputBits) {
    _classCallCheck(this, Sha3);

    this._padding = padding;
    this._outputBits = outputBits;
    this._blockCount = 1600 - (bits << 1) >> 5;
    this._byteCount = this._blockCount << 2;
    this._outputBlocks = outputBits >> 5;
    this._extraBytes = (outputBits & 31) >> 3;
    this.reset();
  }
  /**
   * Reset the digest.
   */


  _createClass(Sha3, [{
    key: "reset",
    value: function reset() {
      this._reset = true;
      this._block = 0;
      this._start = 0;
      this._blocks = new Uint32Array(this._blockCount + 1);
      this._state = new Uint32Array(50);
    }
    /**
     * Update the digest.
     * @param input Array of data to use in the update.
     */

  }, {
    key: "update",
    value: function update(input) {
      if (!objectHelper_1.ObjectHelper.isType(input, ArrayBuffer)) {
        throw new cryptoError_1.CryptoError("Input is not of type ArrayBuffer");
      }

      var message = new Uint8Array(input);
      var length = message.length;
      var index = 0;
      var i;

      while (index < length) {
        if (this._reset) {
          this._reset = false;
          this._blocks[0] = this._block;

          for (i = 1; i < this._blockCount + 1; ++i) {
            this._blocks[i] = 0;
          }
        }

        for (i = this._start; index < length && i < this._byteCount; ++index) {
          this._blocks[i >> 2] |= message[index] << Sha3.SHIFT[i++ & 3];
        }

        this._lastByteIndex = i;

        if (i >= this._byteCount) {
          this._start = i - this._byteCount;
          this._block = this._blocks[this._blockCount];

          for (i = 0; i < this._blockCount; ++i) {
            this._state[i] ^= this._blocks[i];
          }

          this.keccakPermutation(this._state);
          this._reset = true;
        } else {
          this._start = i;
        }
      }
    }
    /**
     * Finalize and return the hash for the digest, will also reset the state.
     * @returns Array buffer containing the digest.
     */

  }, {
    key: "digest",
    value: function digest() {
      this.finalize();
      var i = 0;
      var j = 0;
      var bytes = this._outputBits >> 3;
      var buffer;

      if (this._extraBytes) {
        buffer = new ArrayBuffer(this._outputBlocks + 1 << 2);
      } else {
        buffer = new ArrayBuffer(bytes);
      }

      var array = new Uint32Array(buffer);

      while (j < this._outputBlocks) {
        for (i = 0; i < this._blockCount && j < this._outputBlocks; ++i, ++j) {
          array[j] = this._state[i];
        }
      }

      if (this._extraBytes) {
        array[i] = this._state[i];
        buffer = buffer.slice(0, bytes);
      }

      this.reset();
      return buffer;
    }
    /* @internal */

  }, {
    key: "finalize",
    value: function finalize() {
      var i = this._lastByteIndex;
      this._blocks[i >> 2] |= this._padding[i & 3];

      if (this._lastByteIndex === this._byteCount) {
        this._blocks[0] = this._blocks[this._blockCount];

        for (i = 1; i < this._blockCount + 1; ++i) {
          this._blocks[i] = 0;
        }
      }

      this._blocks[this._blockCount - 1] |= 0x80000000;

      for (i = 0; i < this._blockCount; ++i) {
        this._state[i] ^= this._blocks[i];
      }

      this.keccakPermutation(this._state);
    }
    /* @internal */

  }, {
    key: "keccakPermutation",
    value: function keccakPermutation(s) {
      // tslint:disable-next-line:one-variable-per-declaration
      var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;

      for (n = 0; n < 48; n += 2) {
        c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
        c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
        c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
        c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
        c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
        c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
        c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
        c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
        c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
        c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
        h = c8 ^ (c2 << 1 | c3 >>> 31);
        l = c9 ^ (c3 << 1 | c2 >>> 31);
        s[0] ^= h;
        s[1] ^= l;
        s[10] ^= h;
        s[11] ^= l;
        s[20] ^= h;
        s[21] ^= l;
        s[30] ^= h;
        s[31] ^= l;
        s[40] ^= h;
        s[41] ^= l;
        h = c0 ^ (c4 << 1 | c5 >>> 31);
        l = c1 ^ (c5 << 1 | c4 >>> 31);
        s[2] ^= h;
        s[3] ^= l;
        s[12] ^= h;
        s[13] ^= l;
        s[22] ^= h;
        s[23] ^= l;
        s[32] ^= h;
        s[33] ^= l;
        s[42] ^= h;
        s[43] ^= l;
        h = c2 ^ (c6 << 1 | c7 >>> 31);
        l = c3 ^ (c7 << 1 | c6 >>> 31);
        s[4] ^= h;
        s[5] ^= l;
        s[14] ^= h;
        s[15] ^= l;
        s[24] ^= h;
        s[25] ^= l;
        s[34] ^= h;
        s[35] ^= l;
        s[44] ^= h;
        s[45] ^= l;
        h = c4 ^ (c8 << 1 | c9 >>> 31);
        l = c5 ^ (c9 << 1 | c8 >>> 31);
        s[6] ^= h;
        s[7] ^= l;
        s[16] ^= h;
        s[17] ^= l;
        s[26] ^= h;
        s[27] ^= l;
        s[36] ^= h;
        s[37] ^= l;
        s[46] ^= h;
        s[47] ^= l;
        h = c6 ^ (c0 << 1 | c1 >>> 31);
        l = c7 ^ (c1 << 1 | c0 >>> 31);
        s[8] ^= h;
        s[9] ^= l;
        s[18] ^= h;
        s[19] ^= l;
        s[28] ^= h;
        s[29] ^= l;
        s[38] ^= h;
        s[39] ^= l;
        s[48] ^= h;
        s[49] ^= l;
        b0 = s[0];
        b1 = s[1];
        b32 = s[11] << 4 | s[10] >>> 28;
        b33 = s[10] << 4 | s[11] >>> 28;
        b14 = s[20] << 3 | s[21] >>> 29;
        b15 = s[21] << 3 | s[20] >>> 29;
        b46 = s[31] << 9 | s[30] >>> 23;
        b47 = s[30] << 9 | s[31] >>> 23;
        b28 = s[40] << 18 | s[41] >>> 14;
        b29 = s[41] << 18 | s[40] >>> 14;
        b20 = s[2] << 1 | s[3] >>> 31;
        b21 = s[3] << 1 | s[2] >>> 31;
        b2 = s[13] << 12 | s[12] >>> 20;
        b3 = s[12] << 12 | s[13] >>> 20;
        b34 = s[22] << 10 | s[23] >>> 22;
        b35 = s[23] << 10 | s[22] >>> 22;
        b16 = s[33] << 13 | s[32] >>> 19;
        b17 = s[32] << 13 | s[33] >>> 19;
        b48 = s[42] << 2 | s[43] >>> 30;
        b49 = s[43] << 2 | s[42] >>> 30;
        b40 = s[5] << 30 | s[4] >>> 2;
        b41 = s[4] << 30 | s[5] >>> 2;
        b22 = s[14] << 6 | s[15] >>> 26;
        b23 = s[15] << 6 | s[14] >>> 26;
        b4 = s[25] << 11 | s[24] >>> 21;
        b5 = s[24] << 11 | s[25] >>> 21;
        b36 = s[34] << 15 | s[35] >>> 17;
        b37 = s[35] << 15 | s[34] >>> 17;
        b18 = s[45] << 29 | s[44] >>> 3;
        b19 = s[44] << 29 | s[45] >>> 3;
        b10 = s[6] << 28 | s[7] >>> 4;
        b11 = s[7] << 28 | s[6] >>> 4;
        b42 = s[17] << 23 | s[16] >>> 9;
        b43 = s[16] << 23 | s[17] >>> 9;
        b24 = s[26] << 25 | s[27] >>> 7;
        b25 = s[27] << 25 | s[26] >>> 7;
        b6 = s[36] << 21 | s[37] >>> 11;
        b7 = s[37] << 21 | s[36] >>> 11;
        b38 = s[47] << 24 | s[46] >>> 8;
        b39 = s[46] << 24 | s[47] >>> 8;
        b30 = s[8] << 27 | s[9] >>> 5;
        b31 = s[9] << 27 | s[8] >>> 5;
        b12 = s[18] << 20 | s[19] >>> 12;
        b13 = s[19] << 20 | s[18] >>> 12;
        b44 = s[29] << 7 | s[28] >>> 25;
        b45 = s[28] << 7 | s[29] >>> 25;
        b26 = s[38] << 8 | s[39] >>> 24;
        b27 = s[39] << 8 | s[38] >>> 24;
        b8 = s[48] << 14 | s[49] >>> 18;
        b9 = s[49] << 14 | s[48] >>> 18;
        s[0] = b0 ^ ~b2 & b4;
        s[1] = b1 ^ ~b3 & b5;
        s[10] = b10 ^ ~b12 & b14;
        s[11] = b11 ^ ~b13 & b15;
        s[20] = b20 ^ ~b22 & b24;
        s[21] = b21 ^ ~b23 & b25;
        s[30] = b30 ^ ~b32 & b34;
        s[31] = b31 ^ ~b33 & b35;
        s[40] = b40 ^ ~b42 & b44;
        s[41] = b41 ^ ~b43 & b45;
        s[2] = b2 ^ ~b4 & b6;
        s[3] = b3 ^ ~b5 & b7;
        s[12] = b12 ^ ~b14 & b16;
        s[13] = b13 ^ ~b15 & b17;
        s[22] = b22 ^ ~b24 & b26;
        s[23] = b23 ^ ~b25 & b27;
        s[32] = b32 ^ ~b34 & b36;
        s[33] = b33 ^ ~b35 & b37;
        s[42] = b42 ^ ~b44 & b46;
        s[43] = b43 ^ ~b45 & b47;
        s[4] = b4 ^ ~b6 & b8;
        s[5] = b5 ^ ~b7 & b9;
        s[14] = b14 ^ ~b16 & b18;
        s[15] = b15 ^ ~b17 & b19;
        s[24] = b24 ^ ~b26 & b28;
        s[25] = b25 ^ ~b27 & b29;
        s[34] = b34 ^ ~b36 & b38;
        s[35] = b35 ^ ~b37 & b39;
        s[44] = b44 ^ ~b46 & b48;
        s[45] = b45 ^ ~b47 & b49;
        s[6] = b6 ^ ~b8 & b0;
        s[7] = b7 ^ ~b9 & b1;
        s[16] = b16 ^ ~b18 & b10;
        s[17] = b17 ^ ~b19 & b11;
        s[26] = b26 ^ ~b28 & b20;
        s[27] = b27 ^ ~b29 & b21;
        s[36] = b36 ^ ~b38 & b30;
        s[37] = b37 ^ ~b39 & b31;
        s[46] = b46 ^ ~b48 & b40;
        s[47] = b47 ^ ~b49 & b41;
        s[8] = b8 ^ ~b0 & b2;
        s[9] = b9 ^ ~b1 & b3;
        s[18] = b18 ^ ~b10 & b12;
        s[19] = b19 ^ ~b11 & b13;
        s[28] = b28 ^ ~b20 & b22;
        s[29] = b29 ^ ~b21 & b23;
        s[38] = b38 ^ ~b30 & b32;
        s[39] = b39 ^ ~b31 & b33;
        s[48] = b48 ^ ~b40 & b42;
        s[49] = b49 ^ ~b41 & b43;
        s[0] ^= Sha3.ROUND_CONSTANTS[n];
        s[1] ^= Sha3.ROUND_CONSTANTS[n + 1];
      }
    }
  }]);

  return Sha3;
}();
/* Padding to use for Keccak */


Sha3.KECCAK_PADDING = new Uint32Array([1, 256, 65536, 16777216]);
/* @internal */

Sha3.SHIFT = new Uint8Array([0, 8, 16, 24]);
/* @internal */

Sha3.ROUND_CONSTANTS = new Uint32Array([1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]);
exports.Sha3 = Sha3;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var cryptoError_1 = __webpack_require__(9);
/**
 * Implementation of ISponge using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 */


var Curl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Curl.
   * @param rounds The number of rounds to use.
   */
  function Curl() {
    var rounds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Curl.NUMBER_OF_ROUNDS;

    _classCallCheck(this, Curl);

    this._numberOfRounds = rounds;
  }
  /**
   * Get the constant for the spone.
   * @name The name of the contant to get.
   * @returns The constant.
   */


  _createClass(Curl, [{
    key: "getConstant",
    value: function getConstant(name) {
      switch (name) {
        case "NUMBER_OF_ROUNDS":
          {
            return this._numberOfRounds;
          }

        case "HASH_LENGTH":
        case "STATE_LENGTH":
          {
            return Curl[name];
          }

        default:
          throw new cryptoError_1.CryptoError("Unknown constant requested ".concat(name));
      }
    }
    /**
     * Get the state.
     * @returns The state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return this._state;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */

  }, {
    key: "initialize",
    value: function initialize(state) {
      if (state) {
        this._state = state;
      } else {
        this._state = new Int8Array(Curl.STATE_LENGTH);
      }
    }
    /**
     * Reset the hasher.
     */

  }, {
    key: "reset",
    value: function reset() {
      this.initialize();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */

  }, {
    key: "absorb",
    value: function absorb(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var i = 0;
        var limit = localLength < Curl.HASH_LENGTH ? localLength : Curl.HASH_LENGTH;

        while (i < limit) {
          this._state[i++] = trits[localOffset++];
        }

        this.transform();
        localLength -= Curl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */

  }, {
    key: "squeeze",
    value: function squeeze(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var i = 0;
        var limit = localLength < Curl.HASH_LENGTH ? length : Curl.HASH_LENGTH;

        while (i < limit) {
          trits[localOffset++] = this._state[i++];
        }

        this.transform();
        localLength -= Curl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Transform the hash.
     * @internal
     */

  }, {
    key: "transform",
    value: function transform() {
      var stateCopy;
      var index = 0;

      for (var round = 0; round < this._numberOfRounds; round++) {
        stateCopy = new Int8Array(this._state.slice());

        for (var i = 0; i < Curl.STATE_LENGTH; i++) {
          this._state[i] = Curl.TRUTH_TABLE[stateCopy[index] + (stateCopy[index += index < 365 ? 364 : -365] << 2) + 5];
        }
      }
    }
  }]);

  return Curl;
}();

Curl.HASH_LENGTH = 243;
Curl.NUMBER_OF_ROUNDS = 81;
Curl.STATE_LENGTH = Curl.HASH_LENGTH * 3;
/* @internal */

Curl.TRUTH_TABLE = new Int8Array([1, 0, -1, 2, 1, -1, 0, 2, -1, 1, 0]);
exports.Curl = Curl;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var sha3_1 = __webpack_require__(38);

var cryptoError_1 = __webpack_require__(9);

var bigIntegerHelper_1 = __webpack_require__(41);
/**
 * Implementation of ISponge using Kerl algorithm.
 * https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */


var Kerl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Kerl.
   */
  function Kerl() {
    _classCallCheck(this, Kerl);

    this._keccak = new sha3_1.Sha3(384, sha3_1.Sha3.KECCAK_PADDING, 384);
  }
  /**
   * Get the constant for the spone.
   * @name The name of the contant to get.
   * @returns The constant.
   */


  _createClass(Kerl, [{
    key: "getConstant",
    value: function getConstant(name) {
      switch (name) {
        case "HASH_LENGTH":
        case "BIT_HASH_LENGTH":
        case "BYTE_HASH_LENGTH":
          {
            return Kerl[name];
          }

        default:
          throw new cryptoError_1.CryptoError("Unknown constant requested ".concat(name));
      }
    }
    /**
     * Get the state.
     * @returns The state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return undefined;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */

  }, {
    key: "initialize",
    value: function initialize(state) {}
    /**
     * Reset the hasher.
     */

  }, {
    key: "reset",
    value: function reset() {
      this._keccak.reset();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */

  }, {
    key: "absorb",
    value: function absorb(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      if (length % 243 !== 0) {
        throw new cryptoError_1.CryptoError("Length must be a multiple of ".concat(Kerl.HASH_LENGTH), {
          length: length
        });
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var tritState = trits.slice(localOffset, localOffset + Kerl.HASH_LENGTH);
        tritState[Kerl.HASH_LENGTH - 1] = 0;
        var bigInt = bigIntegerHelper_1.BigIntegerHelper.tritsToBigInteger(tritState, 0, tritState.length);
        var byteState = new ArrayBuffer(Kerl.BYTE_HASH_LENGTH);
        bigIntegerHelper_1.BigIntegerHelper.bigIntegerToBytes(bigInt, byteState, 0);

        this._keccak.update(byteState);

        localOffset += Kerl.HASH_LENGTH;
        localLength -= Kerl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */

  }, {
    key: "squeeze",
    value: function squeeze(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      if (length % 243 !== 0) {
        throw new cryptoError_1.CryptoError("Length must be a multiple of ".concat(Kerl.HASH_LENGTH), {
          length: length
        });
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var byteStateBuffer = this._keccak.digest();

        var bigInt = bigIntegerHelper_1.BigIntegerHelper.bytesToBigInteger(byteStateBuffer, 0, Kerl.BYTE_HASH_LENGTH);
        var tritState = new Int8Array(Kerl.HASH_LENGTH);
        bigIntegerHelper_1.BigIntegerHelper.bigIntegerToTrits(bigInt, tritState, 0, Kerl.HASH_LENGTH);
        tritState[Kerl.HASH_LENGTH - 1] = 0;
        var i = 0;

        while (i < Kerl.HASH_LENGTH) {
          trits[localOffset++] = tritState[i++];
        }

        var dv = new DataView(byteStateBuffer);

        for (i = 0; i < dv.byteLength; i++) {
          dv.setUint8(i, dv.getUint8(i) ^ 0xFF);
        }

        this._keccak.update(byteStateBuffer);

        localLength -= Kerl.HASH_LENGTH;
      } while (localLength > 0);
    }
  }]);

  return Kerl;
}();
/* @internal */


Kerl.HASH_LENGTH = 243;
/* @internal */

Kerl.BIT_HASH_LENGTH = 384;
/* @internal */

Kerl.BYTE_HASH_LENGTH = Kerl.BIT_HASH_LENGTH / 8;
exports.Kerl = Kerl;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0); // tslint:disable-next-line:import-name


var big_integer_1 = __importDefault(__webpack_require__(71));

var cryptoError_1 = __webpack_require__(9);
/**
 * Helper class to convert between BigInteger and other types.
 * Converted from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */


var BigIntegerHelper =
/*#__PURE__*/
function () {
  function BigIntegerHelper() {
    _classCallCheck(this, BigIntegerHelper);
  }

  _createClass(BigIntegerHelper, null, [{
    key: "tritsToBigInteger",

    /**
     * Convert trits to a bigInteger.
     * @param trits The trits to convert.
     * @param offset Offset within the array to start.
     * @param length The length of the trits array to convert.
     */
    value: function tritsToBigInteger(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("The trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (offset + length > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
      }

      var value = big_integer_1.default.zero;

      for (var i = length - 1; i >= 0; i--) {
        value = value.multiply(BigIntegerHelper.RADIX).add(big_integer_1.default(trits[offset + i]));
      }

      return value;
    }
    /**
     * Convert bigInteger to trits.
     * @param value The bigInteger to convert to trits.
     * @param trits The array to receive the trits.
     * @param offset The offset to place the trits in the array.
     * @param length The length of the array.
     */

  }, {
    key: "bigIntegerToTrits",
    value: function bigIntegerToTrits(value, trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
        throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
      }

      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array)) {
        throw new cryptoError_1.CryptoError("The trits must be an Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (offset + length > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
      }

      var absoluteValue = value.compareTo(big_integer_1.default.zero) < 0 ? value.negate() : value;

      for (var i = 0; i < length; i++) {
        var divRemainder = absoluteValue.divmod(BigIntegerHelper.RADIX);
        absoluteValue = divRemainder.quotient;
        var remainder = divRemainder.remainder;

        if (remainder > BigIntegerHelper.MAX_TRIT_VALUE) {
          remainder = BigIntegerHelper.MIN_TRIT_VALUE;
          absoluteValue = absoluteValue.add(big_integer_1.default["1"]);
        }

        trits[offset + i] = remainder.toJSNumber();
      }

      if (value.compareTo(big_integer_1.default.zero) < 0) {
        for (var _i = 0; _i < length; _i++) {
          // Avoid negative zero
          trits[offset + _i] = trits[offset + _i] === 0 ? 0 : -trits[offset + _i];
        }
      }
    }
    /**
     * Convert the bigInteger into bytes.
     * @param value The value to convert.
     * @param destination The destination array to store the bytes.
     * @param offset The offset within the array to store the bytes.
     */

  }, {
    key: "bigIntegerToBytes",
    value: function bigIntegerToBytes(value, destination, offset) {
      if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
        throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
      }

      if (!objectHelper_1.ObjectHelper.isType(destination, ArrayBuffer) || destination.byteLength === 0) {
        throw new cryptoError_1.CryptoError("The destination must be an array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (destination.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
        throw new cryptoError_1.CryptoError("Destination array has invalid size, it must be at least ".concat(BigIntegerHelper.BYTE_HASH_LENGTH));
      } // Remember if it is negative for later


      var isNeg = value.isNegative() ? -1 : 0;
      var hexString = value.toString(16);

      if (isNeg === -1) {
        // But remove it for now
        hexString = hexString.slice(1);
      } // Now make sure the hex string is an even length so the regex works


      if (hexString.length % 2 === 1) {
        hexString = "0".concat(hexString);
      }

      var matches = hexString.match(/[0-9a-f]{2}/g); // Convert the hex to numbers

      var signedBytes = new Int8Array(matches.map(function (hex) {
        return parseInt("0x".concat(hex), 16);
      }));

      if (isNeg === -1) {
        BigIntegerHelper.twosComplement(signedBytes);
      }

      var dataView = new DataView(destination); // Pad the start of the buffer with the neg value

      var i = offset;

      while (i + signedBytes.length < BigIntegerHelper.BYTE_HASH_LENGTH) {
        dataView.setInt8(i++, isNeg);
      } // And copy in the actual bytes


      for (var j = signedBytes.length; j-- > 0;) {
        dataView.setInt8(i++, signedBytes[signedBytes.length - 1 - j]);
      }
    }
    /**
     * Convert bytes to a bigInteger.
     * @param source The source bytes.
     * @param offset The offset within the bytes to start conversion.
     * @param length The length of the bytes to use for conversion.
     */

  }, {
    key: "bytesToBigInteger",
    value: function bytesToBigInteger(source, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(source, ArrayBuffer) || source.byteLength === 0) {
        throw new cryptoError_1.CryptoError("The source must be a non empty number array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (source.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
        throw new cryptoError_1.CryptoError("Source array has invalid size, it must be at least ".concat(BigIntegerHelper.BYTE_HASH_LENGTH));
      }

      var dataView = new DataView(source);
      var signedBytes = new Int8Array(dataView.byteLength);

      for (var b = 0; b < dataView.byteLength; b++) {
        signedBytes[b] = dataView.getInt8(b + offset);
      } // Remove the initial padding leaving at least one byte


      var paddingOffset = 0;
      var firstByte = signedBytes[0];
      var isNeg = firstByte < 0; // If the first padding character is negative then reverse the 2s complement
      // but first strip of the leading padding

      if (firstByte === 0 || firstByte === -1) {
        while (signedBytes[paddingOffset] === firstByte && paddingOffset < signedBytes.length - 1) {
          paddingOffset++;
        } // Strip any padding


        signedBytes = signedBytes.slice(paddingOffset);
      }

      if (isNeg) {
        BigIntegerHelper.twosComplement(signedBytes);
      }

      var hexString = isNeg ? "-" : "";
      var dv = new DataView(signedBytes.buffer);

      for (var h = 0; h < dv.byteLength; h++) {
        hexString += "00".concat(dv.getUint8(h).toString(16)).slice(-2);
      }

      return big_integer_1.default(hexString, 16);
    }
    /* @internal */

  }, {
    key: "twosComplement",
    value: function twosComplement(signedBytes) {
      // if the whole number is negative then
      // change to 2's complements by noting all the numbers
      // and adding 1 to the last i.e. ~bignum+1
      for (var b = 0; b < signedBytes.length; b++) {
        signedBytes[b] = ~signedBytes[b];
      } // Add 1 to last number, if the number is 0xFF continue to carry


      var c = signedBytes.length - 1;

      do {
        signedBytes[c]++;
      } while (signedBytes[c--] === 0 && c > 0);
    }
  }]);

  return BigIntegerHelper;
}();
/* @internal */


BigIntegerHelper.RADIX = big_integer_1.default(3);
/* @internal */

BigIntegerHelper.MAX_TRIT_VALUE = BigIntegerHelper.RADIX.minus(1).divide(2);
/* @internal */

BigIntegerHelper.MIN_TRIT_VALUE = BigIntegerHelper.MAX_TRIT_VALUE.negate();
/* @internal */

BigIntegerHelper.BIT_HASH_LENGTH = 384;
/* @internal */

BigIntegerHelper.BYTE_HASH_LENGTH = BigIntegerHelper.BIT_HASH_LENGTH / 8;
exports.BigIntegerHelper = BigIntegerHelper;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var spongeFactory_1 = __webpack_require__(14);

var trits_1 = __webpack_require__(7);
/**
 * Helper class for address signing.
 * Original https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 * @internal
 */


var AddressHelper =
/*#__PURE__*/
function () {
  function AddressHelper() {
    _classCallCheck(this, AddressHelper);
  }

  _createClass(AddressHelper, null, [{
    key: "createChecksum",

    /**
     * Create a checksum for the trits.
     * @param trits The trits to create the checksum for.
     * @param checksumLength The length of the checksum.
     * @returns the checksum as trytes.
     */
    value: function createChecksum(trits, checksumLength) {
      var kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
      kerl.initialize();
      kerl.absorb(trits, 0, trits.length);
      var checksumTrits = new Int8Array(kerl.getConstant("HASH_LENGTH"));
      kerl.squeeze(checksumTrits, 0, checksumTrits.length);
      return trits_1.Trits.fromArray(checksumTrits).toTrytes().toString().substring(81 - checksumLength, 81);
    }
  }]);

  return AddressHelper;
}();

exports.AddressHelper = AddressHelper;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var spongeFactory_1 = __webpack_require__(14);

var signatureMessageFragment_1 = __webpack_require__(12);

var trits_1 = __webpack_require__(7);

var trytes_1 = __webpack_require__(1);
/**
 * Hashed Message Authentication Code using Curl.
 */


var HmacCurl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of the HmacCurl.
   * @param key The key to seed with.
   */
  function HmacCurl(key) {
    _classCallCheck(this, HmacCurl);

    this._keyTrits = trits_1.Trits.fromTrytes(key).toArray();
  }
  /**
   * Add bundle to the HMAC.
   */


  _createClass(HmacCurl, [{
    key: "addHMAC",
    value: function addHMAC(bundle) {
      var curl = spongeFactory_1.SpongeFactory.instance().create("curl", HmacCurl.HMAC_ROUNDS);
      var hashLength = curl.getConstant("HASH_LENGTH");
      var key = this._keyTrits;

      for (var i = 0; i < bundle.transactions.length; i++) {
        if (bundle.transactions[i].value.toNumber() > 0) {
          var bundleHashTrits = trits_1.Trits.fromTrytes(bundle.transactions[i].bundle.toTrytes()).toArray();
          var hmac = new Int8Array(hashLength);
          curl.initialize();
          curl.absorb(key, 0, key.length);
          curl.absorb(bundleHashTrits, 0, bundleHashTrits.length);
          curl.squeeze(hmac, 0, hmac.length);
          var hmacTrytes = trits_1.Trits.fromArray(hmac).toTrytes().toString();
          var rest = bundle.transactions[i].signatureMessageFragment.toTrytes().toString().substring(81, signatureMessageFragment_1.SignatureMessageFragment.LENGTH);
          bundle.transactions[i].signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString(hmacTrytes + rest));
        }
      }
    }
  }]);

  return HmacCurl;
}();
/* @internal */


HmacCurl.HMAC_ROUNDS = 27;
exports.HmacCurl = HmacCurl;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(5);

var objectHelper_1 = __webpack_require__(0);

var spongeFactory_1 = __webpack_require__(14);

var address_1 = __webpack_require__(8);

var trits_1 = __webpack_require__(7);

var trytes_1 = __webpack_require__(1);

var businessError_1 = __webpack_require__(17);
/**
 * Address using multiple signatures.
 */


var MultiSigAddress =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of the MultiSigAddress.
   */
  function MultiSigAddress() {
    _classCallCheck(this, MultiSigAddress);

    this._kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
    this._hashLength = this._kerl.getConstant("HASH_LENGTH");

    this._kerl.initialize();
  }
  /**
   * Absorb key digests.
   * @param digests The digests hashes to absorb.
   */


  _createClass(MultiSigAddress, [{
    key: "absorb",
    value: function absorb(digests) {
      if (!arrayHelper_1.ArrayHelper.isTyped(digests, trytes_1.Trytes)) {
        throw new businessError_1.BusinessError("The digests should be an array of type Trytes");
      }

      for (var i = 0; i < digests.length; i++) {
        var digestTrits = trits_1.Trits.fromTrytes(digests[i]).toArray();

        this._kerl.absorb(digestTrits, 0, digestTrits.length);
      }
    }
    /**
     * Finalizes and returns the multisig address in trytes.
     * @param digests The final digests hashes to absorb.
     * @returns The multi signature address.
     */

  }, {
    key: "finalize",
    value: function finalize(digests) {
      if (!objectHelper_1.ObjectHelper.isEmpty(digests)) {
        this.absorb(digests);
      }

      var addressTrits = new Int8Array(this._hashLength);

      this._kerl.squeeze(addressTrits, 0, addressTrits.length);

      return address_1.Address.fromTrytes(trits_1.Trits.fromArray(addressTrits).toTrytes());
    }
  }]);

  return MultiSigAddress;
}();

exports.MultiSigAddress = MultiSigAddress;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(82));

__export(__webpack_require__(47));

__export(__webpack_require__(49));

__export(__webpack_require__(50));

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var platformError_1 = __webpack_require__(29);

var stringHelper_1 = __webpack_require__(4);

var crypto = __importStar(__webpack_require__(48));
/**
 * Implementation of a platform crypto for use in NodeJS.
 */


var PlatformCrypto =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of PlatformCrypto.
   * @param publicKey The key to use for decoding data.
   * @param privateKey The key to use for encoding data.
   */
  function PlatformCrypto(publicKey, privateKey) {
    _classCallCheck(this, PlatformCrypto);

    this._privateKey = privateKey;
    this._publicKey = publicKey;
  }
  /**
   * Encrypt the given data.
   * @param data The data to encrypt.
   * @returns The encrypted data.
   */


  _createClass(PlatformCrypto, [{
    key: "encrypt",
    value: function encrypt(data) {
      if (stringHelper_1.StringHelper.isEmpty(this._privateKey)) {
        throw new platformError_1.PlatformError("The privateKey must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      var buffer = new Buffer(data, "ascii");
      var encrypted = crypto.privateEncrypt(this._privateKey, buffer);
      return encrypted.toString("hex");
    }
    /**
     * Decrypt the given data.
     * @param data The data to decrypt.
     * @returns The decrypted data.
     */

  }, {
    key: "decrypt",
    value: function decrypt(data) {
      if (stringHelper_1.StringHelper.isEmpty(this._privateKey) && stringHelper_1.StringHelper.isEmpty(this._publicKey)) {
        throw new platformError_1.PlatformError("The privateKey or publicKey must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      var buffer = new Buffer(data, "hex");
      var decrypted = crypto.publicDecrypt(this._publicKey || this._privateKey, buffer);
      return decrypted.toString("ascii");
    }
    /**
     * Sign the given data.
     * @param data The data to sign.
     * @returns The signature.
     */

  }, {
    key: "sign",
    value: function sign(data) {
      if (stringHelper_1.StringHelper.isEmpty(this._privateKey)) {
        throw new platformError_1.PlatformError("The privateKey must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      var signer = crypto.createSign("RSA-SHA256");
      signer.update(data);
      return signer.sign(this._privateKey, "hex");
    }
    /**
     * Verify the given data.
     * @param data The data to verify.
     * @param signature The signature to verify againt the data.
     * @returns True if the verification is successful.
     */

  }, {
    key: "verify",
    value: function verify(data, signature) {
      if (stringHelper_1.StringHelper.isEmpty(this._publicKey)) {
        throw new platformError_1.PlatformError("The publicKey must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(signature)) {
        throw new platformError_1.PlatformError("The signature must be a non empty string");
      }

      var verifier = crypto.createVerify("RSA-SHA256");
      verifier.update(data);
      return verifier.verify(this._publicKey, signature, "hex");
    }
  }]);

  return PlatformCrypto;
}();

exports.PlatformCrypto = PlatformCrypto;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(46);

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var networkError_1 = __webpack_require__(24);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var stringHelper_1 = __webpack_require__(4);

var nullLogger_1 = __webpack_require__(19);

var http = __importStar(__webpack_require__(85));

var https = __importStar(__webpack_require__(86));
/**
 * Implementation of a node client for use in NodeJS.
 */


var NetworkClient =
/*#__PURE__*/
function () {
  /**
   * Create an instance of NetworkClient.
   * @param networkEndPoint The endpoint to use for the client.
   * @param logger Logger to send communication info to.
   * @param timeoutMs The timeout in ms before aborting.
   */
  function NetworkClient(networkEndPoint, logger) {
    var timeoutMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var httpClientRequest = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, NetworkClient);

    if (objectHelper_1.ObjectHelper.isEmpty(networkEndPoint)) {
      throw new networkError_1.NetworkError("The networkEndPoint must be defined");
    }

    if (!numberHelper_1.NumberHelper.isInteger(timeoutMs) || timeoutMs < 0) {
      throw new networkError_1.NetworkError("The timeoutMs must be >= 0");
    }

    this._networkEndPoint = networkEndPoint;
    this._timeoutMs = timeoutMs;
    this._logger = logger || new nullLogger_1.NullLogger();
    this._httpClientRequest = httpClientRequest || (networkEndPoint.getProtocol() === "http" ? http.request : https.request);

    this._logger.banner("Network Client", {
      endPoint: this._networkEndPoint
    });
  }
  /**
   * Get data asynchronously.
   * @param additionalPath An additional path append to the endpoint path.
   * @param additionalHeaders Extra headers to send with the request.
   * @returns Promise which resolves to the object returned or rejects with error.
   */


  _createClass(NetworkClient, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(additionalPath, additionalHeaders) {
        var resp;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._logger.info("===> NetworkClient::GET Send");

                _context.next = 3;
                return this.doRequest("GET", undefined, additionalPath, additionalHeaders);

              case 3:
                resp = _context.sent;

                this._logger.info("<=== NetworkClient::GET Received", resp);

                return _context.abrupt("return", resp);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function get(_x, _x2) {
        return _get.apply(this, arguments);
      };
    }()
    /**
     * Post data asynchronously.
     * @param additionalPath An additional path append to the endpoint path.
     * @param data The data to send.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */

  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2(data, additionalPath, additionalHeaders) {
        var resp;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._logger.info("===> NetworkClient::POST Send", data);

                _context2.next = 3;
                return this.doRequest("POST", data, additionalPath, additionalHeaders);

              case 3:
                resp = _context2.sent;

                this._logger.info("<=== NetworkClient::POST Received", resp);

                return _context2.abrupt("return", resp);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function post(_x3, _x4, _x5) {
        return _post.apply(this, arguments);
      };
    }()
    /**
     * Get data as JSON asynchronously.
     * @typeparam U The generic type for the returned object.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */

  }, {
    key: "getJson",
    value: function () {
      var _getJson = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee3(additionalPath, additionalHeaders) {
        var _this = this;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._logger.info("===> NetworkClient::GET Send");

                return _context3.abrupt("return", this.doRequest("GET", undefined, additionalPath, additionalHeaders).then(function (responseData) {
                  try {
                    var response = JSON.parse(responseData);

                    _this._logger.info("===> NetworkClient::GET Received", response);

                    return response;
                  } catch (err) {
                    _this._logger.info("===> NetworkClient::GET Parse Failed", responseData);

                    throw new networkError_1.NetworkError("Failed GET request, unable to parse response", {
                      endPoint: _this._networkEndPoint.getUri(),
                      response: responseData
                    });
                  }
                }));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getJson(_x6, _x7) {
        return _getJson.apply(this, arguments);
      };
    }()
    /**
     * Post data as JSON asynchronously.
     * @typeparam T The generic type for the object to send.
     * @typeparam U The generic type for the returned object.
     * @param data The data to send.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */

  }, {
    key: "postJson",
    value: function () {
      var _postJson = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee4(data, additionalPath, additionalHeaders) {
        var _this2 = this;

        var headers;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this._logger.info("===> NetworkClient::POST Send");

                headers = additionalHeaders || {};
                headers["Content-Type"] = "application/json";
                return _context4.abrupt("return", this.doRequest("POST", JSON.stringify(data), additionalPath, headers).then(function (responseData) {
                  try {
                    var response = JSON.parse(responseData);

                    _this2._logger.info("===> NetworkClient::POST Received", response);

                    return response;
                  } catch (err) {
                    _this2._logger.info("===> NetworkClient::GET Parse Failed", responseData);

                    throw new networkError_1.NetworkError("Failed POST request, unable to parse response", {
                      endPoint: _this2._networkEndPoint.getUri(),
                      response: responseData
                    });
                  }
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function postJson(_x8, _x9, _x10) {
        return _postJson.apply(this, arguments);
      };
    }()
    /* @internal */

  }, {
    key: "doRequest",
    value: function () {
      var _doRequest = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee5(method, data, additionalPath, additionalHeaders) {
        var _this3 = this;

        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  var headers = additionalHeaders || {};

                  var uri = _this3._networkEndPoint.getUri();

                  var path = _this3._networkEndPoint.getRootPath();

                  if (!stringHelper_1.StringHelper.isEmpty(additionalPath)) {
                    var stripped = "/".concat(additionalPath.replace(/^\/*/, ""));
                    path += stripped;
                    uri += stripped;
                  }

                  var options = {
                    protocol: "".concat(_this3._networkEndPoint.getProtocol(), ":"),
                    hostname: _this3._networkEndPoint.getHost(),
                    port: _this3._networkEndPoint.getPort(),
                    path: path,
                    method: method,
                    headers: headers,
                    timeout: _this3._timeoutMs > 0 ? _this3._timeoutMs : undefined
                  };

                  var req = _this3._httpClientRequest(options, function (res) {
                    var responseData = "";
                    res.setEncoding("utf8");
                    res.on("data", function (responseBody) {
                      responseData += responseBody;
                    });
                    res.on("end", function () {
                      if (res.statusCode === 200) {
                        resolve(responseData);
                      } else {
                        _this3._logger.info("<=== NetworkClient::Received Fail", {
                          code: res.statusCode,
                          data: responseData
                        });

                        reject(new networkError_1.NetworkError("Failed ".concat(method, " request"), {
                          endPoint: uri,
                          errorResponseCode: res.statusCode,
                          errorResponse: responseData || res.statusMessage
                        }));
                      }
                    });
                  });

                  req.on("error", function (err) {
                    _this3._logger.error("<=== NetworkClient::Errored");

                    reject(new networkError_1.NetworkError("Failed ".concat(method, " request"), {
                      endPoint: uri,
                      errorResponse: err
                    }));
                  });
                  req.on("timeout", function (err) {
                    _this3._logger.error("<=== NetworkClient::Timed Out");

                    reject(new networkError_1.NetworkError("Failed ".concat(method, " request, timed out"), {
                      endPoint: uri
                    }));
                  });

                  if (!objectHelper_1.ObjectHelper.isEmpty(data)) {
                    req.write(data);
                  }

                  req.end();
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function doRequest(_x11, _x12, _x13, _x14) {
        return _doRequest.apply(this, arguments);
      };
    }()
  }]);

  return NetworkClient;
}();

exports.NetworkClient = NetworkClient;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var crypto = __importStar(__webpack_require__(48));
/**
 * Implementation of random number generation service.
 */


var RngService =
/*#__PURE__*/
function () {
  function RngService() {
    _classCallCheck(this, RngService);
  }

  _createClass(RngService, [{
    key: "generate",

    /**
     * Generate an array of random numbers.
     * @param length The number of numbers to generate.
     * @returns Array of random number generators.
     */
    value: function generate(length) {
      return new Uint8Array(crypto.randomBytes(length));
    }
  }]);

  return RngService;
}();

exports.RngService = RngService;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports.default = __webpack_require__(52);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(53);

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(56));

__export(__webpack_require__(62));

__export(__webpack_require__(64));

__export(__webpack_require__(69));

__export(__webpack_require__(76)); //export * from "@iota-pico/storage";


__export(__webpack_require__(45));

var pal_nodejs_1 = __webpack_require__(45);

_asyncToGenerator(
/*#__PURE__*/
_regeneratorRuntime.mark(function _callee() {
  return _regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return pal_nodejs_1.PAL.initialize();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}))();

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(54);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(55);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(10));

__export(__webpack_require__(24));

__export(__webpack_require__(29));

__export(__webpack_require__(15));

__export(__webpack_require__(30));

__export(__webpack_require__(31));

__export(__webpack_require__(32));

__export(__webpack_require__(5));

__export(__webpack_require__(33));

__export(__webpack_require__(18));

__export(__webpack_require__(2));

__export(__webpack_require__(4));

__export(__webpack_require__(0));

__export(__webpack_require__(57));

__export(__webpack_require__(19));

__export(__webpack_require__(58));

__export(__webpack_require__(34));

__export(__webpack_require__(20));

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(5);

var errorHelper_1 = __webpack_require__(33);

var objectHelper_1 = __webpack_require__(0);

var stringHelper_1 = __webpack_require__(4);
/**
 * Implementation of ILogger which sends to the this._loggingObject.
 */
// tslint:disable:no-console


var ConsoleLogger =
/*#__PURE__*/
function () {
  /**
   * Create and instance of the console logger.
   */
  function ConsoleLogger(loggingObject) {
    _classCallCheck(this, ConsoleLogger);

    this._loggingObject = loggingObject || console;
  }
  /**
   * Send banner to the logger.
   * @param message The message to log.
   * @param args Additional parameters to log.
   */


  _createClass(ConsoleLogger, [{
    key: "banner",
    value: function banner(message) {
      this._loggingObject.log("=".repeat(80));

      this._loggingObject.log(message);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.logArgs(this._loggingObject.log, args);

      this._loggingObject.log("=".repeat(80));
    }
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "log",
    value: function log(message) {
      this._loggingObject.log(message);

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      this.logArgs(this._loggingObject.log, args);
    }
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "info",
    value: function info(message) {
      this._loggingObject.info(message);

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      this.logArgs(this._loggingObject.info, args);
    }
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "warning",
    value: function warning(message) {
      this._loggingObject.warn(message);

      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      this.logArgs(this._loggingObject.warn, args);
    }
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "error",
    value: function error(message, err) {
      var _this = this;

      this._loggingObject.error(message);

      if (!objectHelper_1.ObjectHelper.isEmpty(err)) {
        var lines = errorHelper_1.ErrorHelper.format(err, true).split("\n");
        lines.forEach(function (line) {
          _this._loggingObject.error("\t".concat(line));
        });
      }

      for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        args[_key5 - 2] = arguments[_key5];
      }

      this.logArgs(this._loggingObject.error, args);
    }
    /* @internal */

  }, {
    key: "logArgs",
    value: function logArgs(logMethod, args) {
      var _this2 = this;

      if (!arrayHelper_1.ArrayHelper.isEmpty(args)) {
        var indent = "\t";
        var output = "";
        args.forEach(function (arg, index) {
          output += _this2.createItem(indent, "", arg);

          if (index < args.length - 1) {
            output += "".concat(indent).concat("-".repeat(70), "\n");
          }
        });
        logMethod(output);
      }
    }
    /* @internal */

  }, {
    key: "createItem",
    value: function createItem(indent, key, item) {
      var _this3 = this;

      var singleItemLineBreak = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "\n";
      var output = "";

      if (arrayHelper_1.ArrayHelper.isArray(item)) {
        var newIndent = "".concat(indent, "\t");

        if (stringHelper_1.StringHelper.isEmpty(key)) {
          output += "".concat(indent, "[\n");
        } else {
          output += "".concat(indent).concat(key, ": [\n");
        }

        item.forEach(function (element, index) {
          output += _this3.createItem(newIndent, "", element, "".concat(index < item.length - 1 ? "," : "", "\n"));
        });
        output += "".concat(indent, "]\n");
      } else if (objectHelper_1.ObjectHelper.isObject(item)) {
        var obString = item.toString();

        if (obString === "[object Object]") {
          var _newIndent = "".concat(indent, "\t");

          if (stringHelper_1.StringHelper.isEmpty(key)) {
            output += "".concat(indent, "{\n");
          } else {
            output += "".concat(indent).concat(key, ": {\n");
          }

          var keys = Object.keys(item);
          keys.forEach(function (itemKey, index) {
            output += _this3.createItem(_newIndent, itemKey, item[itemKey], "".concat(index < keys.length - 1 ? "," : "", "\n"));
          });
          output += "".concat(indent, "}\n");
        } else {
          output += this.createItem(indent, key, obString.replace(/\n/g, "\n".concat(indent)), singleItemLineBreak);
        }
      } else {
        if (stringHelper_1.StringHelper.isEmpty(key)) {
          output += "".concat(indent).concat(objectHelper_1.ObjectHelper.isEmpty(item) ? item : item.toString()).concat(singleItemLineBreak);
        } else {
          output += "".concat(indent).concat(key, ": ").concat(objectHelper_1.ObjectHelper.isEmpty(item) ? item : item.toString()).concat(singleItemLineBreak);
        }
      }

      return output;
    }
  }]);

  return ConsoleLogger;
}();

exports.ConsoleLogger = ConsoleLogger;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var networkError_1 = __webpack_require__(24);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var stringHelper_1 = __webpack_require__(4);
/**
 * Default implementation of a network endpoint.
 */


var NetworkEndPoint =
/*#__PURE__*/
function () {
  /**
   * Create an instance of NetworkEndPoint.
   * @param protocol The protocol to access the endpoint with.
   * @param host The host name or ip of the endpoint.
   * @param port The port of the endpoint.
   * @param rootPath The path to the endpoint.
   */
  function NetworkEndPoint(protocol, host, port, rootPath) {
    _classCallCheck(this, NetworkEndPoint);

    if (!stringHelper_1.StringHelper.isString(protocol) || !/http|https/.test(protocol)) {
      throw new networkError_1.NetworkError("The protocol must be defined as http or https");
    }

    if (!stringHelper_1.StringHelper.isString(host)) {
      throw new networkError_1.NetworkError("The host must be defined");
    }

    if (!numberHelper_1.NumberHelper.isInteger(port) || port <= 0) {
      throw new networkError_1.NetworkError("The port must be a number greater than zero");
    }

    if (!objectHelper_1.ObjectHelper.isEmpty(rootPath) && !stringHelper_1.StringHelper.isString(rootPath)) {
      throw new networkError_1.NetworkError("The rootPath must be a valid string");
    }

    this._protocol = protocol;
    this._host = host.replace(/^\/*/, "").replace(/\/*$/, "");
    this._port = port;
    this._rootPath = (rootPath || "").replace(/^\/*/, "").replace(/\/*$/, "");
  }
  /**
   * The protocol to access the endpoint with.
   * @returns The protocol.
   */


  _createClass(NetworkEndPoint, [{
    key: "getProtocol",
    value: function getProtocol() {
      return this._protocol;
    }
    /**
     * The host name or ip of the endpoint.
     * @returns The host.
     */

  }, {
    key: "getHost",
    value: function getHost() {
      return this._host;
    }
    /**
     * The path to the endpoint.
     * @returns The path.
     */

  }, {
    key: "getRootPath",
    value: function getRootPath() {
      return this._rootPath;
    }
    /**
     * The port of the endpoint.
     * @returns The port.
     */

  }, {
    key: "getPort",
    value: function getPort() {
      return this._port;
    }
    /**
     * The complete uri.
     * @returns The uri.
     */

  }, {
    key: "getUri",
    value: function getUri() {
      var uri = "".concat(this._protocol, "://").concat(this._host, ":").concat(this._port);

      if (this._rootPath.length > 0) {
        uri += "/".concat(this._rootPath);
      }

      return uri;
    }
  }]);

  return NetworkEndPoint;
}();

exports.NetworkEndPoint = NetworkEndPoint;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(60);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(61);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(35));

__export(__webpack_require__(63));

__export(__webpack_require__(8));

__export(__webpack_require__(21));

__export(__webpack_require__(22));

__export(__webpack_require__(6));

__export(__webpack_require__(36));

__export(__webpack_require__(12));

__export(__webpack_require__(11));

__export(__webpack_require__(13));

__export(__webpack_require__(25));

__export(__webpack_require__(7));

__export(__webpack_require__(16));

__export(__webpack_require__(1));

__export(__webpack_require__(3));

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonHelper_1 = __webpack_require__(18);

var objectHelper_1 = __webpack_require__(0);

var stringHelper_1 = __webpack_require__(4);

var trytes_1 = __webpack_require__(1);

var dataError_1 = __webpack_require__(3);

var asciiTrytesConverter_1 = __webpack_require__(35);
/**
 * Trytes converter that converts to and from an object.
 * @typeparam T The generic type for the conversion methods.
 */


var ObjectTrytesConverter =
/*#__PURE__*/
function () {
  function ObjectTrytesConverter() {
    _classCallCheck(this, ObjectTrytesConverter);
  }

  _createClass(ObjectTrytesConverter, [{
    key: "to",

    /**
     * Convert an object value into trytes.
     * @param object to convert into trytes.
     * @returns The trytes representation of the object.
     */
    value: function to(value) {
      if (objectHelper_1.ObjectHelper.isEmpty(value)) {
        throw new dataError_1.DataError("The value can not be empty");
      }

      var json;

      try {
        json = jsonHelper_1.JsonHelper.stringify(value);
      } catch (err) {
        throw new dataError_1.DataError("There was a problem converting the object to JSON", {
          err: err
        });
      }

      return new asciiTrytesConverter_1.AsciiTrytesConverter().to(stringHelper_1.StringHelper.encodeNonASCII(json));
    }
    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */

  }, {
    key: "from",
    value: function from(trytes) {
      if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The trytes parameter is empty or not the correct type");
      }

      var ascii = new asciiTrytesConverter_1.AsciiTrytesConverter().from(trytes); // Must have a a start and closing pairs

      if (ascii.length < 2) {
        throw new dataError_1.DataError("The trytes do not represent an object");
      } // The start and end must be either {}, [] or "" to represent a JSON object


      if (!(ascii[0] === "{" && ascii[ascii.length - 1] === "}" || ascii[0] === "[" && ascii[ascii.length - 1] === "]" || ascii[0] === "\"" && ascii[ascii.length - 1] === "\"")) {
        throw new dataError_1.DataError("The trytes do not represent an object", {
          ascii: ascii
        });
      }

      var decoded = stringHelper_1.StringHelper.decodeNonASCII(ascii);
      var obj;

      try {
        obj = JSON.parse(decoded);
      } catch (err) {
        throw new dataError_1.DataError("There was a problem converting the object from JSON", {
          err: err
        });
      }

      return obj;
    }
  }]);

  return ObjectTrytesConverter;
}();

exports.ObjectTrytesConverter = ObjectTrytesConverter;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(65));

__export(__webpack_require__(37));

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(66);

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(5);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var stringHelper_1 = __webpack_require__(4);

var nullLogger_1 = __webpack_require__(19);

var apiError_1 = __webpack_require__(37);
/**
 * Default implementation of an api client.
 */


var ApiClient =
/*#__PURE__*/
function () {
  /**
   * Create an instance of ApiClient.
   * @param networkClient The network client to communicate through.
   * @param apiVersion The API version to send with the requests
   * @param additionalHeaders Extra headers to send with the requests.
   * @param logger Logger to send communication info to.
   */
  function ApiClient(networkClient) {
    var apiVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "1";
    var additionalHeaders = arguments.length > 2 ? arguments[2] : undefined;
    var logger = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, ApiClient);

    if (objectHelper_1.ObjectHelper.isEmpty(networkClient)) {
      throw new apiError_1.ApiError("The networkClient must be defined");
    }

    if (stringHelper_1.StringHelper.isEmpty(apiVersion)) {
      throw new apiError_1.ApiError("The apiVersion must not be empty");
    }

    this._networkClient = networkClient;
    this._apiVersion = apiVersion;
    this._additionalHeaders = additionalHeaders;
    this._logger = logger || new nullLogger_1.NullLogger();
  }
  /**
   * Returns information about your node.
   * @returns Promise which resolves to the getNodeInfo response object or rejects with error.
   */


  _createClass(ApiClient, [{
    key: "getNodeInfo",
    value: function () {
      var _getNodeInfo = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.sendCommand("getNodeInfo", {}));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getNodeInfo() {
        return _getNodeInfo.apply(this, arguments);
      };
    }()
    /**
     * Returns the set of neighbors you are connected with, as well as their activity count.
     * The activity counter is reset after restarting IRI.
     * @returns Promise which resolves to the getNeighbors response object or rejects with error.
     */

  }, {
    key: "getNeighbors",
    value: function () {
      var _getNeighbors = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.sendCommand("getNeighbors", {}));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getNeighbors() {
        return _getNeighbors.apply(this, arguments);
      };
    }()
    /**
     * Add a list of neighbors to your node. It should be noted that this is only temporary,
     * and the added neighbors will be removed from your set of neighbors after you relaunch IRI.
     * @returns Promise which resolves to the addNeighbors response object or rejects with error.
     */

  }, {
    key: "addNeighbors",
    value: function () {
      var _addNeighbors = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee3(request) {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!objectHelper_1.ObjectHelper.isEmpty(request)) {
                  _context3.next = 2;
                  break;
                }

                throw new apiError_1.ApiError("The request must be defined");

              case 2:
                if (!arrayHelper_1.ArrayHelper.isEmpty(request.uris)) {
                  _context3.next = 4;
                  break;
                }

                throw new apiError_1.ApiError("The request.uris must not be empty");

              case 4:
                return _context3.abrupt("return", this.sendCommand("addNeighbors", request));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function addNeighbors(_x) {
        return _addNeighbors.apply(this, arguments);
      };
    }()
    /**
     * Removes a list of neighbors from your node. This is only temporary, and if you have your
     * neighbors added via the command line, they will be retained after you restart your node.
     * @returns Promise which resolves to the removeNeighbors response object or rejects with error.
     */

  }, {
    key: "removeNeighbors",
    value: function () {
      var _removeNeighbors = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee4(request) {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!objectHelper_1.ObjectHelper.isEmpty(request)) {
                  _context4.next = 2;
                  break;
                }

                throw new apiError_1.ApiError("The request must be defined");

              case 2:
                if (!arrayHelper_1.ArrayHelper.isEmpty(request.uris)) {
                  _context4.next = 4;
                  break;
                }

                throw new apiError_1.ApiError("The request.uris must not be empty");

              case 4:
                return _context4.abrupt("return", this.sendCommand("removeNeighbors", request));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function removeNeighbors(_x2) {
        return _removeNeighbors.apply(this, arguments);
      };
    }()
    /**
     * Returns the list of tips.
     * @returns Promise which resolves to the getTips response object or rejects with error.
     */

  }, {
    key: "getTips",
    value: function () {
      var _getTips = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee5() {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.sendCommand("getTips", {}));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getTips() {
        return _getTips.apply(this, arguments);
      };
    }()
    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. The input fields can either be bundles, addresses, tags or approvees.
     * Using multiple of these input fields returns the intersection of the values.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */

  }, {
    key: "findTransactions",
    value: function () {
      var _findTransactions = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee6(request) {
        var bundlesEmpty, addressesEmpty, tagsEmpty, approveesEmpty;
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!objectHelper_1.ObjectHelper.isEmpty(request)) {
                  _context6.next = 2;
                  break;
                }

                throw new apiError_1.ApiError("The request must be defined");

              case 2:
                bundlesEmpty = arrayHelper_1.ArrayHelper.isEmpty(request.bundles);
                addressesEmpty = arrayHelper_1.ArrayHelper.isEmpty(request.addresses);
                tagsEmpty = arrayHelper_1.ArrayHelper.isEmpty(request.tags);
                approveesEmpty = arrayHelper_1.ArrayHelper.isEmpty(request.approvees);

                if (!(bundlesEmpty && addressesEmpty && tagsEmpty && approveesEmpty)) {
                  _context6.next = 8;
                  break;
                }

                throw new apiError_1.ApiError("One of the bundle, addresses, tags or approvees must not be empty");

              case 8:
                return _context6.abrupt("return", this.sendCommand("findTransactions", request));

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function findTransactions(_x3) {
        return _findTransactions.apply(this, arguments);
      };
    }()
    /**
     * Returns the raw transaction data (trytes) of a specific transaction.
     * These trytes can then be easily converted into the actual transaction object.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */

  }, {
    key: "getTrytes",
    value: function () {
      var _getTrytes = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee7(request) {
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!objectHelper_1.ObjectHelper.isEmpty(request)) {
                  _context7.next = 2;
                  break;
                }

                throw new apiError_1.ApiError("The request must be defined");

              case 2:
                if (!arrayHelper_1.ArrayHelper.isEmpty(request.hashes)) {
                  _context7.next = 4;
                  break;
                }

                throw new apiError_1.ApiError("The request.hashes must not be empty");

              case 4:
                return _context7.abrupt("return", this.sendCommand("getTrytes", request));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function getTrytes(_x4) {
        return _getTrytes.apply(this, arguments);
      };
    }()
    /**
     * Get the inclusion states of a set of transactions. This is for determining if a transaction
     * was accepted and confirmed by the network or not. You can search for multiple tips (and thus,
     * milestones) to get past inclusion states of transactions.
     * @returns Promise which resolves to the getInclusionStates response object or rejects with error.
     */

  }, {
    key: "getInclusionStates",
    value: function () {
      var _getInclusionStates = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee8(request) {
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!objectHelper_1.ObjectHelper.isEmpty(request)) {
                  _context8.next = 2;
                  break;
                }

                throw new apiError_1.ApiError("The request must be defined");

              case 2:
                if (!arrayHelper_1.ArrayHelper.isEmpty(request.transactions)) {
                  _context8.next = 4;
                  break;
                }

                throw new apiError_1.ApiError("The request.transactions must not be empty");

              case 4:
                if (!arrayHelper_1.ArrayHelper.isEmpty(request.tips)) {
                  _context8.next = 6;
                  break;
                }

                throw new apiError_1.ApiError("The request.tips must not be empty");

              case 6:
                return _context8.abrupt("return", this.sendCommand("getInclusionStates", request));

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function getInclusionStates(_x5) {
        return _getInclusionStates.apply(this, arguments);
      };
    }()
    /**
     * Returns the confirmed balance which a list of addresses have at the latest confirmed milestone.
     * In addition to the balances, it also returns the milestone as well as the index with which the
     * confirmed balance was determined. The balances is returned as a list in the same order as the
     * addresses were provided as input.
     * @param request The getBalances request object.
     * @returns Promise which resolves to the getBalances response object or rejects with error.
     */

  }, {
    key: "getBalances",
    value: function () {
      var _getBalances = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee9(request) {
        return _regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!objectHelper_1.ObjectHelper.isEmpty(request)) {
                  _context9.next = 2;
                  break;
                }

                throw new apiError_1.ApiError("The request must be defined");

              case 2:
                if (!arrayHelper_1.ArrayHelper.isEmpty(request.addresses)) {
                  _context9.next = 4;
                  break;
                }

                throw new apiError_1.ApiError("The request.addresses must not be empty");

              case 4:
                if (numberHelper_1.NumberHelper.isInteger(request.threshold)) {
                  _context9.next = 6;
                  break;
                }

                throw new apiError_1.ApiError("The request.threshold must be a valid number");

              case 6:
                return _context9.abrupt("return", this.sendCommand("getBalances", request));

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function getBalances(_x6) {
        return _getBalances.apply(this, arguments);
      };
    }()
    /**
     * Tip selection which returns trunkTransaction and branchTransaction. The input value is depth,
     * which basically determines how many bundles to go back to for finding the transactions to approve.
     * The higher your depth value, the more "babysitting" you do for the network (as you have to confirm more transactions).
     * @param request The getTransactionsToApprove request object.
     * @returns Promise which resolves to the getTransactionsToApprove response object or rejects with error.
     */

  }, {
    key: "getTransactionsToApprove",
    value: function () {
      var _getTransactionsToApprove = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee10(request) {
        return _regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!objectHelper_1.ObjectHelper.isEmpty(request)) {
                  _context10.next = 2;
                  break;
                }

                throw new apiError_1.ApiError("The request must be defined");

              case 2:
                if (numberHelper_1.NumberHelper.isInteger(request.depth)) {
                  _context10.next = 4;
                  break;
                }

                throw new apiError_1.ApiError("The request.depth must be a valid number");

              case 4:
                if (!(!objectHelper_1.ObjectHelper.isEmpty(request.reference) && stringHelper_1.StringHelper.isEmpty(request.reference))) {
                  _context10.next = 6;
                  break;
                }

                throw new apiError_1.ApiError("The request.reference must be a non empty string");

              case 6:
                if (!(!objectHelper_1.ObjectHelper.isEmpty(request.numWalks) && !numberHelper_1.NumberHelper.isInteger(request.numWalks))) {
                  _context10.next = 8;
                  break;
                }

                throw new apiError_1.ApiError("The request.numWalks must be a valid number");

              case 8:
                return _context10.abrupt("return", this.sendCommand("getTransactionsToApprove", request));

              case 9:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function getTransactionsToApprove(_x7) {
        return _getTransactionsToApprove.apply(this, arguments);
      };
    }()
    /**
     * Attaches the specified transactions (trytes) to the Tangle by doing Proof of Work. You need to supply
     * branchTransaction as well as trunkTransaction (basically the tips which you're going to validate and
     * reference with this transaction) - both of which you'll get through the getTransactionsToApprove API call.
     * @param request The attachToTangle request object.
     * @returns Promise which resolves to the attachToTangle response object or rejects with error.
     */

  }, {
    key: "attachToTangle",
    value: function () {
      var _attachToTangle = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee11(request) {
        return _regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!objectHelper_1.ObjectHelper.isEmpty(request)) {
                  _context11.next = 2;
                  break;
                }

                throw new apiError_1.ApiError("The request must be defined");

              case 2:
                if (!stringHelper_1.StringHelper.isEmpty(request.trunkTransaction)) {
                  _context11.next = 4;
                  break;
                }

                throw new apiError_1.ApiError("The request.trunkTransaction must not be empty");

              case 4:
                if (!stringHelper_1.StringHelper.isEmpty(request.branchTransaction)) {
                  _context11.next = 6;
                  break;
                }

                throw new apiError_1.ApiError("The request.branchTransaction must not be empty");

              case 6:
                if (numberHelper_1.NumberHelper.isInteger(request.minWeightMagnitude)) {
                  _context11.next = 8;
                  break;
                }

                throw new apiError_1.ApiError("The request.minWeightMagnitude must be a valid number");

              case 8:
                if (!arrayHelper_1.ArrayHelper.isEmpty(request.trytes)) {
                  _context11.next = 10;
                  break;
                }

                throw new apiError_1.ApiError("The request.trytes must not be empty");

              case 10:
                return _context11.abrupt("return", this.sendCommand("attachToTangle", request));

              case 11:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function attachToTangle(_x8) {
        return _attachToTangle.apply(this, arguments);
      };
    }()
    /**
     * Interrupts and completely aborts the attachToTangle process
     * @returns Promise which resolves with empty response object or rejects with error.
     */

  }, {
    key: "interruptAttachingToTangle",
    value: function () {
      var _interruptAttachingToTangle = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee12() {
        return _regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.sendCommand("interruptAttachingToTangle", {}));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function interruptAttachingToTangle() {
        return _interruptAttachingToTangle.apply(this, arguments);
      };
    }()
    /**
     * Broadcast a list of transactions to all neighbors. The input trytes for this call are provided by attachToTangle.
     * @param request The broadcastTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */

  }, {
    key: "broadcastTransactions",
    value: function () {
      var _broadcastTransactions = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee13(request) {
        return _regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (!objectHelper_1.ObjectHelper.isEmpty(request)) {
                  _context13.next = 2;
                  break;
                }

                throw new apiError_1.ApiError("The request must be defined");

              case 2:
                if (!arrayHelper_1.ArrayHelper.isEmpty(request.trytes)) {
                  _context13.next = 4;
                  break;
                }

                throw new apiError_1.ApiError("The request.trytes must not be empty");

              case 4:
                return _context13.abrupt("return", this.sendCommand("broadcastTransactions", request));

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function broadcastTransactions(_x9) {
        return _broadcastTransactions.apply(this, arguments);
      };
    }()
    /**
     * Store transactions into the local storage. The trytes to be used for this call are returned by attachToTangle.
     * @param request The storeTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */

  }, {
    key: "storeTransactions",
    value: function () {
      var _storeTransactions = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee14(request) {
        return _regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (!objectHelper_1.ObjectHelper.isEmpty(request)) {
                  _context14.next = 2;
                  break;
                }

                throw new apiError_1.ApiError("The request must be defined");

              case 2:
                if (!arrayHelper_1.ArrayHelper.isEmpty(request.trytes)) {
                  _context14.next = 4;
                  break;
                }

                throw new apiError_1.ApiError("The request.trytes must not be empty");

              case 4:
                return _context14.abrupt("return", this.sendCommand("storeTransactions", request));

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function storeTransactions(_x10) {
        return _storeTransactions.apply(this, arguments);
      };
    }()
    /**
     * Get transactions with missing references.
     * @param request The getMissingTransactions request object.
     * @returns Promise which resolves to the getMissingTransactions response object or rejects with error.
     */

  }, {
    key: "getMissingTransactions",
    value: function () {
      var _getMissingTransactions = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee15() {
        return _regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", this.sendCommand("getMissingTransactions", {}));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      return function getMissingTransactions() {
        return _getMissingTransactions.apply(this, arguments);
      };
    }()
    /**
     * Check the consistency of tail hashes.
     * @param request The checkConsistency request object.
     * @returns Promise which resolves to the checkConsistency response object or rejects with error.
     */

  }, {
    key: "checkConsistency",
    value: function () {
      var _checkConsistency = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee16(request) {
        return _regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (!objectHelper_1.ObjectHelper.isEmpty(request)) {
                  _context16.next = 2;
                  break;
                }

                throw new apiError_1.ApiError("The request must be defined");

              case 2:
                if (!arrayHelper_1.ArrayHelper.isEmpty(request.tails)) {
                  _context16.next = 4;
                  break;
                }

                throw new apiError_1.ApiError("The request.tails must not be empty");

              case 4:
                return _context16.abrupt("return", this.sendCommand("checkConsistency", request));

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      return function checkConsistency(_x11) {
        return _checkConsistency.apply(this, arguments);
      };
    }()
    /**
     * Have the requested addresses been spent from already.
     * @param request The wereAddressesSpentFrom request object.
     * @returns Promise which resolves to the wereAddressesSpentFrom response object or rejects with error.
     */

  }, {
    key: "wereAddressesSpentFrom",
    value: function () {
      var _wereAddressesSpentFrom = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee17(request) {
        return _regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (!objectHelper_1.ObjectHelper.isEmpty(request)) {
                  _context17.next = 2;
                  break;
                }

                throw new apiError_1.ApiError("The request must be defined");

              case 2:
                if (!arrayHelper_1.ArrayHelper.isEmpty(request.addresses)) {
                  _context17.next = 4;
                  break;
                }

                throw new apiError_1.ApiError("The request.addresses must not be empty");

              case 4:
                return _context17.abrupt("return", this.sendCommand("wereAddressesSpentFrom", request));

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      return function wereAddressesSpentFrom(_x12) {
        return _wereAddressesSpentFrom.apply(this, arguments);
      };
    }()
    /* @internal */

  }, {
    key: "sendCommand",
    value: function () {
      var _sendCommand = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee18(command, request) {
        var _this = this;

        return _regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this._logger.info("===> ApiClient::".concat(command), request);

                Object.defineProperty(request, "command", {
                  value: command,
                  enumerable: true
                });
                return _context18.abrupt("return", this._networkClient.postJson(request, undefined, this.createHeaders()).then(function (response) {
                  _this._logger.info("===> ".concat(command), response);

                  return response;
                }).catch(function (err) {
                  _this._logger.error("===> ".concat(command, " Error"), err);

                  if (err.additional && err.additional.errorResponse) {
                    try {
                      var apiError = JSON.parse(err.additional.errorResponse);

                      if (apiError.error) {
                        delete err.additional.errorResponse;
                        err.additional.apiError = apiError.error;
                      } else if (apiError.exception) {
                        delete err.additional.errorResponse;
                        err.additional.apiError = apiError.exception;
                      }
                    } catch (e) {}
                  }

                  throw err;
                }));

              case 3:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      return function sendCommand(_x13, _x14) {
        return _sendCommand.apply(this, arguments);
      };
    }()
    /* @internal */

  }, {
    key: "createHeaders",
    value: function createHeaders() {
      var headers = this._additionalHeaders || {};
      headers["X-IOTA-API-Version"] = this._apiVersion;
      return headers;
    }
  }]);

  return ApiClient;
}();

exports.ApiClient = ApiClient;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(68);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(38));

__export(__webpack_require__(9));

__export(__webpack_require__(70));

__export(__webpack_require__(14));

__export(__webpack_require__(23));

__export(__webpack_require__(41));

__export(__webpack_require__(26));

__export(__webpack_require__(72));

__export(__webpack_require__(39));

__export(__webpack_require__(40));

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(15);
/**
 * Factory to generate proof of work.
 */


var ProofOfWorkFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(ProofOfWorkFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function ProofOfWorkFactory() {
    _classCallCheck(this, ProofOfWorkFactory);

    return _possibleConstructorReturn(this, (ProofOfWorkFactory.__proto__ || Object.getPrototypeOf(ProofOfWorkFactory)).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(ProofOfWorkFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return ProofOfWorkFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!ProofOfWorkFactory._instance) {
        ProofOfWorkFactory._instance = new ProofOfWorkFactory();
      }

      return ProofOfWorkFactory._instance;
    }
  }]);

  return ProofOfWorkFactory;
}(factoryBase_1.FactoryBase);

exports.ProofOfWorkFactory = ProofOfWorkFactory;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("big-integer");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(73);

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(5);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var timeService_1 = __webpack_require__(20);

var hash_1 = __webpack_require__(6);

var tag_1 = __webpack_require__(11);

var transaction_1 = __webpack_require__(13);

var tryteNumber_1 = __webpack_require__(16);

var trytes_1 = __webpack_require__(1);

var cryptoError_1 = __webpack_require__(9);

var transactionHelper_1 = __webpack_require__(26);
/**
 * Base class for proof of work.
 */


var ProofOfWorkBase =
/*#__PURE__*/
function () {
  /**
   * Create an instance of ProofOfWork.
   * @param timeService Service to get the time for attachments.
   */
  function ProofOfWorkBase(timeService) {
    _classCallCheck(this, ProofOfWorkBase);

    this._timeService = timeService || new timeService_1.TimeService();
  }
  /**
   * Allow the proof of work to perform any initialization.
   * Will throw an exception if the implementation is not supported.
   */


  _createClass(ProofOfWorkBase, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.resolve());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */

  }, {
    key: "pow",
    value: function () {
      var _pow = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2(trunkTransaction, branchTransaction, trytes, minWeightMagnitude) {
        var finalTrytes, previousTransactionHash, i, transaction, newTrytes, singleTrytes, returnTransaction;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
                  _context2.next = 2;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trunkTransaction must be an object of type Hash");

              case 2:
                if (objectHelper_1.ObjectHelper.isType(branchTransaction, hash_1.Hash)) {
                  _context2.next = 4;
                  break;
                }

                throw new cryptoError_1.CryptoError("The branchTransaction must be an object of type Hash");

              case 4:
                if (arrayHelper_1.ArrayHelper.isTyped(trytes, trytes_1.Trytes)) {
                  _context2.next = 6;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trytes must be an array of type Trytes");

              case 6:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context2.next = 8;
                  break;
                }

                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");

              case 8:
                finalTrytes = [];
                i = 0;

              case 10:
                if (!(i < trytes.length)) {
                  _context2.next = 35;
                  break;
                }

                transaction = transaction_1.Transaction.fromTrytes(trytes[i]); // Start with last index transaction
                // Assign it the trunk / branch which the user has supplied
                // If there is a bundle, chain the bundle transactions via
                // trunkTransaction together

                transaction.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(this._timeService.msSinceEpoch());
                transaction.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(0);
                transaction.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(ProofOfWorkBase.MAX_TIMESTAMP_VALUE); // If this is the first transaction, to be processed
                // Make sure that it's the last in the bundle and then
                // assign it the supplied trunk and branch transactions

                if (!objectHelper_1.ObjectHelper.isEmpty(previousTransactionHash)) {
                  _context2.next = 22;
                  break;
                }

                if (!(transaction.lastIndex.toNumber() !== transaction.currentIndex.toNumber())) {
                  _context2.next = 18;
                  break;
                }

                throw new cryptoError_1.CryptoError("Wrong bundle order. The bundle should be ordered in descending order from currentIndex");

              case 18:
                transaction.trunkTransaction = trunkTransaction;
                transaction.branchTransaction = branchTransaction;
                _context2.next = 24;
                break;

              case 22:
                transaction.trunkTransaction = previousTransactionHash;
                transaction.branchTransaction = trunkTransaction;

              case 24:
                newTrytes = transaction.toTrytes();
                _context2.next = 27;
                return this.singlePow(newTrytes, minWeightMagnitude);

              case 27:
                singleTrytes = _context2.sent;
                transaction.nonce = tag_1.Tag.fromTrytes(singleTrytes.sub(transaction_1.Transaction.LENGTH - tag_1.Tag.LENGTH, tag_1.Tag.LENGTH)); // Calculate the hash of the new transaction with nonce and use that as the previous hash for next entry

                returnTransaction = transaction_1.Transaction.fromTrytes(singleTrytes);
                previousTransactionHash = transactionHelper_1.TransactionHelper.hash(returnTransaction);
                finalTrytes.push(returnTransaction);

              case 32:
                i++;
                _context2.next = 10;
                break;

              case 35:
                return _context2.abrupt("return", finalTrytes.reverse().map(function (transaction) {
                  return transaction.toTrytes();
                }));

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function pow(_x, _x2, _x3, _x4) {
        return _pow.apply(this, arguments);
      };
    }()
  }]);

  return ProofOfWorkBase;
}();
/**
 * The maximum timestamp value used in proof of work.
 */


ProofOfWorkBase.MAX_TIMESTAMP_VALUE = (Math.pow(3, 27) - 1) / 2;
exports.ProofOfWorkBase = ProofOfWorkBase;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(75);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(17));

__export(__webpack_require__(42));

__export(__webpack_require__(27));

__export(__webpack_require__(44));

__export(__webpack_require__(77));

__export(__webpack_require__(43));

__export(__webpack_require__(80));

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(28);

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(5);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var timeService_1 = __webpack_require__(20);

var iss_1 = __webpack_require__(23);

var address_1 = __webpack_require__(8);

var bundle_1 = __webpack_require__(22);

var hash_1 = __webpack_require__(6);

var signatureMessageFragment_1 = __webpack_require__(12);

var tag_1 = __webpack_require__(11);

var transaction_1 = __webpack_require__(13);

var transfer_1 = __webpack_require__(25);

var trits_1 = __webpack_require__(7);

var trytes_1 = __webpack_require__(1);

var businessError_1 = __webpack_require__(17);

var bundleHelper_1 = __webpack_require__(27);

var multiSigAddress_1 = __webpack_require__(44);
/**
 * Multiple signatures.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/multisig/multisig.js
 */


var MultiSigClient =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of the MultiSigClient.
   * @param apiClient An API Client to communicate through.
   * @param timeService A class which can provide the time.
   */
  function MultiSigClient(apiClient) {
    var timeService = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new timeService_1.TimeService();

    _classCallCheck(this, MultiSigClient);

    this._apiClient = apiClient;
    this._timeService = timeService;
  }
  /**
   * Get the key value of a seed.
   * @param seed The seed to get the key for.
   * @param index The address index to use.
   * @param security The security level to use.
   * @returns The trytes for the key.
   */


  _createClass(MultiSigClient, [{
    key: "prepareTransfer",

    /**
     * Initiates the creation of a new transfer by generating an empty bundle with the correct number
     * of bundle entries to be later used for the signing process.
     * @param address Address which has sufficient balance and is controlled by the co-signers.
     * @param securitySum the sum of the security levels from all cosigners chosen during the private key generation (getKey / getDigest)
     * @param balance The balance available for the transfer, if 0 will call getBalances to lookup available.
     * @param transfers The transfers to perform.
     * @param remainderAddress If there is a remainder after the transfer then send the amount to this address.
     */
    value: function () {
      var _prepareTransfer = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(address, securitySum, balance, transfers, remainderAddress) {
        var emptyTrytes, prepared, totalBalance, request, response, timestamp;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
                  _context.next = 2;
                  break;
                }

                throw new businessError_1.BusinessError("The address should be an object of type Address");

              case 2:
                if (!(!numberHelper_1.NumberHelper.isInteger(securitySum) || securitySum < 0)) {
                  _context.next = 4;
                  break;
                }

                throw new businessError_1.BusinessError("The securitySum should be a number >= 0");

              case 4:
                if (!(!numberHelper_1.NumberHelper.isInteger(balance) || balance < 0)) {
                  _context.next = 6;
                  break;
                }

                throw new businessError_1.BusinessError("The balance should be a number >= 0");

              case 6:
                if (arrayHelper_1.ArrayHelper.isTyped(transfers, transfer_1.Transfer)) {
                  _context.next = 8;
                  break;
                }

                throw new businessError_1.BusinessError("The transfers should be an array of type Transfer");

              case 8:
                if (!(!objectHelper_1.ObjectHelper.isEmpty(remainderAddress) && !objectHelper_1.ObjectHelper.isType(remainderAddress, address_1.Address))) {
                  _context.next = 10;
                  break;
                }

                throw new businessError_1.BusinessError("The remainderAddress should be an object of type Address");

              case 10:
                emptyTrytes = trytes_1.Trytes.fromString(""); // If message or tag is not supplied, provide it

                transfers.forEach(function (transfer) {
                  transfer.message = transfer.message ? transfer.message : emptyTrytes;
                  transfer.tag = transfer.tag || tag_1.Tag.EMPTY;
                });
                prepared = bundleHelper_1.BundleHelper.prepareBundle(this._timeService, transfers);

                if (!(prepared.totalValue === 0)) {
                  _context.next = 17;
                  break;
                }

                throw new businessError_1.BusinessError("The total transfer value is 0, the transfer does not require a signature");

              case 17:
                totalBalance = balance;

                if (!(totalBalance === 0)) {
                  _context.next = 24;
                  break;
                }

                request = {
                  addresses: [address.toTrytes().toString()],
                  threshold: 100
                };
                _context.next = 22;
                return this._apiClient.getBalances(request);

              case 22:
                response = _context.sent;
                totalBalance = parseInt(response.balances[0], 10);

              case 24:
                if (!(prepared.totalValue > totalBalance)) {
                  _context.next = 26;
                  break;
                }

                throw new businessError_1.BusinessError("Not enough balance to satisfy the value", {
                  totalValue: prepared.totalValue,
                  totalBalance: totalBalance
                });

              case 26:
                timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000); // Add input as bundle entry
                // Only a single entry, signatures will be added later

                prepared.bundle.addTransactions(securitySum, address, -totalBalance, prepared.lastTag, timestamp); // If there is a remainder value
                // Add extra output to send remaining funds to

                if (!(totalBalance > prepared.totalValue)) {
                  _context.next = 32;
                  break;
                }

                if (!objectHelper_1.ObjectHelper.isEmpty(remainderAddress)) {
                  _context.next = 31;
                  break;
                }

                throw new businessError_1.BusinessError("Transfer has remainder but no remainder address was provided");

              case 31:
                prepared.bundle.addTransactions(1, remainderAddress, totalBalance - prepared.totalValue, prepared.lastTag, timestamp);

              case 32:
                bundleHelper_1.BundleHelper.finalizeBundle(prepared.bundle);
                prepared.bundle.addSignatureMessageFragments(prepared.signatureMessageFragments);

              case 34:
                return _context.abrupt("return", prepared.bundle);

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function prepareTransfer(_x, _x2, _x3, _x4, _x5) {
        return _prepareTransfer.apply(this, arguments);
      };
    }()
  }], [{
    key: "getKey",
    value: function getKey(seed, index, security) {
      if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
        throw new businessError_1.BusinessError("The seed should be an object of type Hash");
      }

      if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
        throw new businessError_1.BusinessError("The index should be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3) {
        throw new businessError_1.BusinessError("The security must be between 1 and 3", {
          security: security
        });
      }

      return trits_1.Trits.fromArray(iss_1.ISS.key(seed, index, security)).toTrytes();
    }
    /**
     * Get the digest value of a seed.
     * @param seed The seed to get the digest for.
     * @param index The address index to use.
     * @param security The security level to use.
     * @returns The trytes for the digest.
     */

  }, {
    key: "getDigest",
    value: function getDigest(seed, index, security) {
      if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
        throw new businessError_1.BusinessError("The seed should be an object of type Hash");
      }

      if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
        throw new businessError_1.BusinessError("The index should be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3) {
        throw new businessError_1.BusinessError("The security must be between 1 and 3", {
          security: security
        });
      }

      var key = iss_1.ISS.key(seed, index, security);
      return trits_1.Trits.fromArray(iss_1.ISS.digests(key)).toTrytes();
    }
    /**
     * Validate address.
     * @param address The address to validate against the digests.
     * @param digests The digests to use to validate the address.
     * @returns True if the address matches the digests.
     */

  }, {
    key: "validateAddress",
    value: function validateAddress(address, digests) {
      if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
        throw new businessError_1.BusinessError("The address should be an object of type Address");
      }

      if (!arrayHelper_1.ArrayHelper.isTyped(digests, trytes_1.Trytes)) {
        throw new businessError_1.BusinessError("The digests should be an array of type Trytes");
      }

      return address.toTrytes().toString() === new multiSigAddress_1.MultiSigAddress().finalize(digests).toTrytes().toString();
    }
    /**
     * Adds the cosigner signatures to the corresponding bundle transactions.
     * @param bundle The bundle to sign.
     * @param address The address to match the transactions.
     * @param key The key to sign the transactions with.
     */

  }, {
    key: "addSignature",
    value: function addSignature(bundle, address, key) {
      if (!objectHelper_1.ObjectHelper.isType(bundle, bundle_1.Bundle)) {
        throw new businessError_1.BusinessError("The bundle should be an object of type Bundle");
      }

      if (!arrayHelper_1.ArrayHelper.isTyped(bundle.transactions, transaction_1.Transaction)) {
        throw new businessError_1.BusinessError("The bundle.transactions should be an array of type Transaction");
      }

      if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
        throw new businessError_1.BusinessError("The address should be an object of type Address");
      }

      if (!objectHelper_1.ObjectHelper.isType(key, trytes_1.Trytes)) {
        throw new businessError_1.BusinessError("The key should be an object of type Trytes");
      }

      var keyTrits = trits_1.Trits.fromTrytes(key).toArray(); // Get the security used for the private key
      // 1 security level = 2187 trytes

      var security = keyTrits.length / 3 / 2187; // First get the total number of already signed transactions
      // use that for the bundle hash calculation as well as knowing
      // where to add the signature

      var numSignedTxs = 0;
      var addressTrytes = address.toTrytes().toString();

      for (var i = 0; i < bundle.transactions.length; i++) {
        if (bundle.transactions[i].address.toTrytes().toString() === addressTrytes) {
          if (bundle.transactions[i].signatureMessageFragment.toTrytes().toString() !== signatureMessageFragment_1.SignatureMessageFragment.EMPTY.toTrytes().toString()) {
            // If transaction is already signed, increase counter
            numSignedTxs++;
          } else {
            bundleHelper_1.BundleHelper.signTransactions(bundle, i, numSignedTxs % 3, keyTrits, addressTrytes, security);
            break;
          }
        }
      }
    }
  }]);

  return MultiSigClient;
}();

exports.MultiSigClient = MultiSigClient;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(79);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(28);

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(5);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var nullLogger_1 = __webpack_require__(19);

var backgroundTaskService_1 = __webpack_require__(34);

var timeService_1 = __webpack_require__(20);

var iss_1 = __webpack_require__(23);

var transactionHelper_1 = __webpack_require__(26);

var address_1 = __webpack_require__(8);

var addressSecurity_1 = __webpack_require__(21);

var bundle_1 = __webpack_require__(22);

var hash_1 = __webpack_require__(6);

var input_1 = __webpack_require__(36);

var tag_1 = __webpack_require__(11);

var transaction_1 = __webpack_require__(13);

var transfer_1 = __webpack_require__(25);

var trits_1 = __webpack_require__(7);

var trytes_1 = __webpack_require__(1);

var businessError_1 = __webpack_require__(17);

var addressHelper_1 = __webpack_require__(42);

var bundleHelper_1 = __webpack_require__(27);

var proofOfWorkApi_1 = __webpack_require__(81);
/**
 * Default implementation of the ITransactionClient.
 */


var TransactionClient =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of the TransactionClient.
   * @param apiClient An API Client to communicate through.
   * @param proofOfWork Proof of work module to use, if undefined will use remote.
   * @param timeService A class which can provide the time.
   * @param backgroundTaskService A class which can provide background tasks.
   * @param logger Logger to send transaction info to.
   */
  function TransactionClient(apiClient, proofOfWork, timeService, backgroundTaskService, logger) {
    _classCallCheck(this, TransactionClient);

    if (objectHelper_1.ObjectHelper.isEmpty(apiClient)) {
      throw new businessError_1.BusinessError("The apiClient must not be empty");
    }

    this._apiClient = apiClient;
    this._proofOfWork = proofOfWork || new proofOfWorkApi_1.ProofOfWorkApi(apiClient);
    this._timeService = timeService || new timeService_1.TimeService();
    this._backgroundTaskService = backgroundTaskService || new backgroundTaskService_1.BackgroundTaskService();
    this._logger = logger || new nullLogger_1.NullLogger();
  }
  /**
   * Returns the list of transaction in progress.
   * @returns Promise which resolves to a list of hashes or rejects with error.
   */


  _createClass(TransactionClient, [{
    key: "getTransactionsInProgress",
    value: function () {
      var _getTransactionsInProgress = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        var response, resp;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._logger.info("===> TransactionClient::getTransactionsInProgress");

                _context.next = 3;
                return this._apiClient.getTips();

              case 3:
                response = _context.sent;

                if (!(response && response.hashes)) {
                  _context.next = 10;
                  break;
                }

                resp = response.hashes.map(function (hash) {
                  return hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash));
                });

                this._logger.info("<=== TransactionClient::getTransactionsInProgress", resp);

                return _context.abrupt("return", resp);

              case 10:
                this._logger.info("<=== TransactionClient::getTransactionsInProgress", []);

                return _context.abrupt("return", []);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getTransactionsInProgress() {
        return _getTransactionsInProgress.apply(this, arguments);
      };
    }()
    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. Using multiple of these input fields returns the intersection of the values.
     * @param bundles Bundles to lookup transaction hashes for.
     * @param addresses Addresses to lookup transaction hashes for.
     * @param tags Tags to lookup transaction hashes for.
     * @param approvees Approvees to lookup transaction hashes for.
     * @returns Promise which resolves with a list of hashes or rejects with error.
     */

  }, {
    key: "findTransactions",
    value: function () {
      var _findTransactions = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2(bundles, addresses, tags, approvees) {
        var hasBundle, hasAddresses, hasTags, hasApprovees, request, response, resp;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._logger.info("===> TransactionClient::findTransactions", bundles, addresses, tags, approvees);

                hasBundle = bundles !== undefined && bundles !== null && bundles.length > 0;
                hasAddresses = addresses !== undefined && addresses !== null && addresses.length > 0;
                hasTags = tags !== undefined && tags !== null && tags.length > 0;
                hasApprovees = approvees !== undefined && approvees !== null && approvees.length > 0;

                if (!(hasBundle && !arrayHelper_1.ArrayHelper.isTyped(bundles, hash_1.Hash))) {
                  _context2.next = 7;
                  break;
                }

                throw new businessError_1.BusinessError("The bundles must be an array of type Hash");

              case 7:
                if (!(hasAddresses && !arrayHelper_1.ArrayHelper.isTyped(addresses, address_1.Address))) {
                  _context2.next = 9;
                  break;
                }

                throw new businessError_1.BusinessError("The addresses must be an array of type Address");

              case 9:
                if (!(hasTags && !arrayHelper_1.ArrayHelper.isTyped(tags, tag_1.Tag))) {
                  _context2.next = 11;
                  break;
                }

                throw new businessError_1.BusinessError("The tags must be an array of type Tag");

              case 11:
                if (!(hasApprovees && !arrayHelper_1.ArrayHelper.isTyped(approvees, hash_1.Hash))) {
                  _context2.next = 13;
                  break;
                }

                throw new businessError_1.BusinessError("The approvees must be an array of type Hash");

              case 13:
                if (!(!hasBundle && !hasAddresses && !hasTags && !hasApprovees)) {
                  _context2.next = 15;
                  break;
                }

                throw new businessError_1.BusinessError("You must provide bundles, addresses, tags or approvees");

              case 15:
                request = {
                  bundles: hasBundle ? bundles.map(function (bundle) {
                    return bundle.toTrytes().toString();
                  }) : undefined,
                  addresses: hasAddresses ? addresses.map(function (address) {
                    return address.toTrytes().toString();
                  }) : undefined,
                  tags: hasTags ? tags.map(function (tag) {
                    return tag.toTrytes().toString();
                  }) : undefined,
                  approvees: hasApprovees ? approvees.map(function (approvee) {
                    return approvee.toTrytes().toString();
                  }) : undefined
                };
                _context2.next = 18;
                return this._apiClient.findTransactions(request);

              case 18:
                response = _context2.sent;

                if (!(response && response.hashes)) {
                  _context2.next = 25;
                  break;
                }

                resp = response.hashes.map(function (hash) {
                  return hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash));
                });

                this._logger.info("<=== TransactionClient::findTransactions", resp);

                return _context2.abrupt("return", resp);

              case 25:
                this._logger.info("<=== TransactionClient::findTransactions", []);

                return _context2.abrupt("return", []);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function findTransactions(_x, _x2, _x3, _x4) {
        return _findTransactions.apply(this, arguments);
      };
    }()
    /**
     * Get the transaction details of specific transactions.
     * @returns Promise which resolves to the list of transactions or rejects with error.
     */

  }, {
    key: "getTransactionsObjects",
    value: function () {
      var _getTransactionsObjects = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee3(transactionHashes) {
        var request, response, resp;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._logger.info("===> TransactionClient::getTransactionsObjects", transactionHashes);

                if (arrayHelper_1.ArrayHelper.isTyped(transactionHashes, hash_1.Hash)) {
                  _context3.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The transactionHashes must be an array of type Hash");

              case 3:
                request = {
                  hashes: transactionHashes.map(function (hash) {
                    return hash.toTrytes().toString();
                  })
                };
                _context3.next = 6;
                return this._apiClient.getTrytes(request);

              case 6:
                response = _context3.sent;

                if (!(response && response.trytes)) {
                  _context3.next = 13;
                  break;
                }

                resp = response.trytes.map(function (trytes) {
                  return transaction_1.Transaction.fromTrytes(trytes_1.Trytes.fromString(trytes));
                });

                this._logger.info("<=== TransactionClient::getTransactionsObjects", resp);

                return _context3.abrupt("return", resp);

              case 13:
                this._logger.info("<=== TransactionClient::getTransactionsObjects", []);

                return _context3.abrupt("return", []);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getTransactionsObjects(_x5) {
        return _getTransactionsObjects.apply(this, arguments);
      };
    }()
    /**
     * Get the inclusion states of a list of transaction hashes.
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */

  }, {
    key: "getLatestInclusion",
    value: function () {
      var _getLatestInclusion = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee4(transactionHashes) {
        var nodeInfo, request, response;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this._logger.info("===> TransactionClient::transactionHashes");

                if (arrayHelper_1.ArrayHelper.isTyped(transactionHashes, hash_1.Hash)) {
                  _context4.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The transactionHashes must be an array of type Hash");

              case 3:
                _context4.next = 5;
                return this._apiClient.getNodeInfo();

              case 5:
                nodeInfo = _context4.sent;

                if (!(nodeInfo && numberHelper_1.NumberHelper.isInteger(nodeInfo.latestSolidSubtangleMilestone))) {
                  _context4.next = 20;
                  break;
                }

                request = {
                  transactions: transactionHashes.map(function (hash) {
                    return hash.toTrytes().toString();
                  }),
                  tips: [nodeInfo.latestSolidSubtangleMilestone]
                };
                _context4.next = 10;
                return this._apiClient.getInclusionStates(request);

              case 10:
                response = _context4.sent;

                if (!(response && response.states)) {
                  _context4.next = 16;
                  break;
                }

                this._logger.info("<=== TransactionClient::transactionHashes", response.states);

                return _context4.abrupt("return", response.states);

              case 16:
                this._logger.info("<=== TransactionClient::transactionHashes", []);

                return _context4.abrupt("return", []);

              case 18:
                _context4.next = 21;
                break;

              case 20:
                throw new businessError_1.BusinessError("The node could not provide the latestSolidSubtangleMilestone");

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getLatestInclusion(_x6) {
        return _getLatestInclusion.apply(this, arguments);
      };
    }()
    /**
     * Generates addresses with index-based or using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */

  }, {
    key: "getNewAddress",
    value: function () {
      var _getNewAddress = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee5(seed, startIndex, endIndex, includeChecksum, security) {
        var localStartIndex, hasEndIndex, localSecurity, addresses, total;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this._logger.info("===> TransactionClient::getNewAddress", seed, startIndex, endIndex, includeChecksum, security);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context5.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                if (!(!objectHelper_1.ObjectHelper.isEmpty(startIndex) && !objectHelper_1.ObjectHelper.isType(startIndex, Number))) {
                  _context5.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The startIndex must be an integer", {
                  startIndex: startIndex
                });

              case 5:
                localStartIndex = startIndex || 0;

                if (!(localStartIndex < 0)) {
                  _context5.next = 8;
                  break;
                }

                throw new businessError_1.BusinessError("The startIndex must be >= 0", {
                  localStartIndex: localStartIndex
                });

              case 8:
                hasEndIndex = numberHelper_1.NumberHelper.isInteger(endIndex);
                localSecurity = security || addressSecurity_1.AddressSecurity.medium;

                if (!hasEndIndex) {
                  _context5.next = 21;
                  break;
                }

                if (!(!numberHelper_1.NumberHelper.isInteger(endIndex) || endIndex < 0)) {
                  _context5.next = 13;
                  break;
                }

                throw new businessError_1.BusinessError("The endIndex must be a number >= 0", {
                  endIndex: endIndex
                });

              case 13:
                total = endIndex - startIndex + 1;

                if (!(total <= 0 || total > TransactionClient.MAX_INPUTS)) {
                  _context5.next = 16;
                  break;
                }

                throw new businessError_1.BusinessError("The total must be > 0 and <= ".concat(TransactionClient.MAX_INPUTS), {
                  total: total
                });

              case 16:
                _context5.next = 18;
                return this.getAddressesByIndex(seed, startIndex, endIndex, includeChecksum, localSecurity);

              case 18:
                addresses = _context5.sent;
                _context5.next = 24;
                break;

              case 21:
                _context5.next = 23;
                return this.getAddressesToUnused(seed, startIndex, includeChecksum, localSecurity);

              case 23:
                addresses = _context5.sent;

              case 24:
                this._logger.info("<=== TransactionClient::getNewAddress", addresses);

                return _context5.abrupt("return", addresses);

              case 26:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getNewAddress(_x7, _x8, _x9, _x10, _x11) {
        return _getNewAddress.apply(this, arguments);
      };
    }()
    /**
     * Generates new addresses index-based.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */

  }, {
    key: "getAddressesByIndex",
    value: function () {
      var _getAddressesByIndex = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee6(seed, startIndex, endIndex, includeChecksum, security) {
        var total, addresses, i;
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this._logger.info("===> TransactionClient::getAddressesByIndex", seed, startIndex, endIndex, includeChecksum, security);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context6.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                if (!(!numberHelper_1.NumberHelper.isInteger(startIndex) || startIndex < 0)) {
                  _context6.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The startIndex must be a number >= 0", {
                  startIndex: startIndex
                });

              case 5:
                if (!(!numberHelper_1.NumberHelper.isInteger(endIndex) || endIndex < 0)) {
                  _context6.next = 7;
                  break;
                }

                throw new businessError_1.BusinessError("The endIndex must be a number >= 0", {
                  endIndex: endIndex
                });

              case 7:
                total = endIndex - startIndex + 1;

                if (!(total <= 0 || total > TransactionClient.MAX_INPUTS)) {
                  _context6.next = 10;
                  break;
                }

                throw new businessError_1.BusinessError("The total must be > 0 and <= ".concat(TransactionClient.MAX_INPUTS), {
                  total: total
                });

              case 10:
                if (!(!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3)) {
                  _context6.next = 12;
                  break;
                }

                throw new businessError_1.BusinessError("The security must be between 1 and 3", {
                  security: security
                });

              case 12:
                addresses = [];

                for (i = 0; i < total; i++) {
                  addresses.push(this.generateAddress(seed, startIndex + i, security, includeChecksum));
                }

                this._logger.info("<=== TransactionClient::getAddressesByIndex", addresses);

                return _context6.abrupt("return", Promise.resolve(addresses));

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function getAddressesByIndex(_x12, _x13, _x14, _x15, _x16) {
        return _getAddressesByIndex.apply(this, arguments);
      };
    }()
    /**
     * Generates new address which havent been used using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to an addresses list, the first unused address is the last in the list or rejects with error.
     */

  }, {
    key: "getAddressesToUnused",
    value: function () {
      var _getAddressesToUnused = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee7(seed, startIndex, includeChecksum, security) {
        var localStartIndex, isUsed, addresses, address, addressNoChecksum, spentFromRequest, spentFromResponse, findTransactionsRequest, findResponse;
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this._logger.info("===> TransactionClient::getAddressesToUnused", seed, startIndex, includeChecksum, security);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context7.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                if (!(!numberHelper_1.NumberHelper.isInteger(startIndex) || startIndex < 0)) {
                  _context7.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The startIndex must be a number >= 0", {
                  startIndex: startIndex
                });

              case 5:
                if (!(!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3)) {
                  _context7.next = 7;
                  break;
                }

                throw new businessError_1.BusinessError("The security must be between 1 and 3", {
                  security: security
                });

              case 7:
                localStartIndex = startIndex;
                addresses = [];

              case 9:
                address = this.generateAddress(seed, localStartIndex++, security, includeChecksum);
                addresses.push(address);
                addressNoChecksum = address.toTrytes().toString();
                spentFromRequest = {
                  addresses: [addressNoChecksum]
                };
                _context7.next = 15;
                return this._apiClient.wereAddressesSpentFrom(spentFromRequest);

              case 15:
                spentFromResponse = _context7.sent;
                isUsed = spentFromResponse && spentFromResponse.states && spentFromResponse.states.length > 0 ? spentFromResponse.states[0] : false;

                if (isUsed) {
                  _context7.next = 23;
                  break;
                }

                findTransactionsRequest = {
                  addresses: [addressNoChecksum]
                };
                _context7.next = 21;
                return this._apiClient.findTransactions(findTransactionsRequest);

              case 21:
                findResponse = _context7.sent;
                isUsed = findResponse && findResponse.hashes && findResponse.hashes.length > 0;

              case 23:
                if (isUsed) {
                  _context7.next = 9;
                  break;
                }

              case 24:
                this._logger.info("<=== TransactionClient::getAddressesToUnused", addresses);

                return _context7.abrupt("return", Promise.resolve(addresses));

              case 26:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function getAddressesToUnused(_x17, _x18, _x19, _x20) {
        return _getAddressesToUnused.apply(this, arguments);
      };
    }()
    /**
     * Get the input data for a range of addresses.
     * @param seed The seed to get the input data for.
     * @param startIndex The start index to get the addresses.
     * @param endIndex The end index to get the addresses.
     * @param security The security level used to create the addresses.
     * @param totalRequired The threshold at which total balance to stop gathering addresses.
     * @returns Promise which resolves to the inputs for each address or rejects with error.
     */

  }, {
    key: "getInputs",
    value: function () {
      var _getInputs = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee8(seed, startIndex, endIndex, security, totalRequired) {
        var addresses, request, response, inputs, totalBalance, i, balance, resp;
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this._logger.info("===> TransactionClient::getInputs", seed, startIndex, endIndex, security, totalRequired);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context8.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                if (!(!numberHelper_1.NumberHelper.isInteger(startIndex) || startIndex < 0)) {
                  _context8.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The startIndex must be a number >= 0", {
                  startIndex: startIndex
                });

              case 5:
                if (!(!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3)) {
                  _context8.next = 7;
                  break;
                }

                throw new businessError_1.BusinessError("The security must be between 1 and 3", {
                  security: security
                });

              case 7:
                if (!(!numberHelper_1.NumberHelper.isInteger(totalRequired) || totalRequired < 0)) {
                  _context8.next = 9;
                  break;
                }

                throw new businessError_1.BusinessError("The totalRequired must be >= 0", {
                  totalRequired: totalRequired
                });

              case 9:
                _context8.next = 11;
                return this.getNewAddress(seed, startIndex, endIndex, false, security);

              case 11:
                addresses = _context8.sent;
                request = {
                  addresses: addresses.map(function (add) {
                    return add.toTrytes().toString();
                  }),
                  threshold: 100
                };
                _context8.next = 15;
                return this._apiClient.getBalances(request);

              case 15:
                response = _context8.sent;
                inputs = [];
                totalBalance = 0;

                if (!response) {
                  _context8.next = 30;
                  break;
                }

                i = 0;

              case 20:
                if (!(i < addresses.length)) {
                  _context8.next = 30;
                  break;
                }

                balance = parseInt(response.balances[i], 10);

                if (!(balance > 0)) {
                  _context8.next = 27;
                  break;
                }

                inputs.push(input_1.Input.fromParams(addresses[i], security, startIndex + i, balance));
                totalBalance += balance;

                if (!(totalRequired > 0 && totalBalance >= totalRequired)) {
                  _context8.next = 27;
                  break;
                }

                return _context8.abrupt("break", 30);

              case 27:
                i++;
                _context8.next = 20;
                break;

              case 30:
                resp = {
                  inputs: inputs,
                  totalBalance: totalBalance
                };

                this._logger.info("<=== TransactionClient::getInputs", resp);

                if (!(totalRequired > 0 && totalBalance < totalRequired)) {
                  _context8.next = 34;
                  break;
                }

                throw new businessError_1.BusinessError("Not enough combined balance in the addresses to satisfy the total required", {
                  totalRequired: totalRequired,
                  totalBalance: totalBalance
                });

              case 34:
                return _context8.abrupt("return", resp);

              case 35:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function getInputs(_x21, _x22, _x23, _x24, _x25) {
        return _getInputs.apply(this, arguments);
      };
    }()
    /**
     * Prepares transfer by generating bundle, finding and signing inputs.
     * @param seed The seed to prepare the transfer for.
     * @param transfers The transfers to prepare.
     * @param transferOptions
     *      @property inputs List of inputs used for funding the transfer.
     *      @property security Security level to be used for the private key / addresses.
     *      @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     *      @property hmacKey Hmac key to sign the bundle.
     *      @property reference The transaction to reference.
     * @returns Promise which resolves to the array of Trytes for the transfer or rejects with error.
     */

  }, {
    key: "prepareTransfers",
    value: function () {
      var _prepareTransfers = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee9(seed, transfers, transferOptions) {
        var localTransferOptions, emptyTrytes, addHMAC, addedHMAC, prepared, bundle, lastTag, totalValue, signatureMessageFragments, request, balances, confirmedInputs, totalBalance, i, balance, inputsResponse;
        return _regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this._logger.info("===> TransactionClient::prepareTransfers", seed, transfers, transferOptions);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context9.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                if (arrayHelper_1.ArrayHelper.isTyped(transfers, transfer_1.Transfer)) {
                  _context9.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The transfers must be an array of Transfer objects");

              case 5:
                localTransferOptions = transferOptions || {};
                localTransferOptions.security = localTransferOptions.security || addressSecurity_1.AddressSecurity.medium;
                emptyTrytes = trytes_1.Trytes.fromString("");
                addHMAC = !objectHelper_1.ObjectHelper.isEmpty(localTransferOptions.hmacKey);
                addedHMAC = false; // If message or tag is not supplied, provide it

                transfers.forEach(function (transfer) {
                  transfer.message = transfer.message ? transfer.message : emptyTrytes;
                  transfer.tag = transfer.tag || tag_1.Tag.EMPTY;

                  if (addHMAC && transfer.value > 0) {
                    transfer.message = trytes_1.Trytes.fromString(TransactionClient.NULL_HASH_TRYTES + transfer.message.toString());
                    addedHMAC = true;
                  }
                }); // Create a new bundle

                prepared = bundleHelper_1.BundleHelper.prepareBundle(this._timeService, transfers);
                bundle = prepared.bundle;
                lastTag = prepared.lastTag;
                totalValue = prepared.totalValue;
                signatureMessageFragments = prepared.signatureMessageFragments; // Get inputs if we are sending tokens

                if (!(totalValue > 0)) {
                  _context9.next = 49;
                  break;
                }

                if (!localTransferOptions.inputs) {
                  _context9.next = 42;
                  break;
                }

                request = {
                  addresses: localTransferOptions.inputs.map(function (input) {
                    return input.address.toTrytes().toString();
                  }),
                  threshold: 100
                };
                _context9.next = 21;
                return this._apiClient.getBalances(request);

              case 21:
                balances = _context9.sent;
                confirmedInputs = [];
                totalBalance = 0;
                i = 0;

              case 25:
                if (!(i < balances.balances.length)) {
                  _context9.next = 36;
                  break;
                }

                balance = parseInt(balances.balances[i], 10); // If input has balance, add it to confirmedInputs

                if (!(balance > 0)) {
                  _context9.next = 33;
                  break;
                }

                totalBalance += balance;
                localTransferOptions.inputs[i].balance = balance;
                confirmedInputs.push(localTransferOptions.inputs[i]); // if we've already reached the intended input value, break out of loop

                if (!(totalBalance >= totalValue)) {
                  _context9.next = 33;
                  break;
                }

                return _context9.abrupt("break", 36);

              case 33:
                i++;
                _context9.next = 25;
                break;

              case 36:
                if (!(totalValue > totalBalance)) {
                  _context9.next = 38;
                  break;
                }

                throw new businessError_1.BusinessError("Not enough balance in the input addresses to satisfy the total for the transfer");

              case 38:
                _context9.next = 40;
                return this.addRemainder(seed, bundle, localTransferOptions, confirmedInputs, signatureMessageFragments, totalValue, lastTag, addedHMAC);

              case 40:
                _context9.next = 47;
                break;

              case 42:
                _context9.next = 44;
                return this.getInputs(seed, 0, undefined, localTransferOptions.security, totalValue);

              case 44:
                inputsResponse = _context9.sent;
                _context9.next = 47;
                return this.addRemainder(seed, bundle, localTransferOptions, inputsResponse.inputs, signatureMessageFragments, totalValue, lastTag, addedHMAC);

              case 47:
                _context9.next = 51;
                break;

              case 49:
                // If no input required, don't sign and simply finalize the bundle
                bundleHelper_1.BundleHelper.finalizeBundle(bundle);
                bundle.addSignatureMessageFragments(signatureMessageFragments);

              case 51:
                bundle.transactions = bundle.transactions.reverse();

                this._logger.info("<=== TransactionClient::prepareTransfers", bundle);

                return _context9.abrupt("return", bundle);

              case 54:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function prepareTransfers(_x26, _x27, _x28) {
        return _prepareTransfers.apply(this, arguments);
      };
    }()
    /**
     * Attach the transactions to the tangle by doing proof of work.
     * @param bundle The bundle of transactions to attach.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the bundle of transactions created or rejects with an error.
     */

  }, {
    key: "attachToTangle",
    value: function () {
      var _attachToTangle = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee10(bundle, depth, minWeightMagnitude, reference) {
        var transactionsToApproveRequest, transactionsToApprove, allTrytes, powTransactions, newBundle;
        return _regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this._logger.info("===> TransactionClient::attachToTangle", bundle, depth, minWeightMagnitude, reference);

                if (objectHelper_1.ObjectHelper.isType(bundle, bundle_1.Bundle)) {
                  _context10.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The bundle must be an array of type Bundle");

              case 3:
                if (arrayHelper_1.ArrayHelper.isTyped(bundle.transactions, transaction_1.Transaction)) {
                  _context10.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The bundle.transactions must be an array of type Transaction");

              case 5:
                if (!(!numberHelper_1.NumberHelper.isInteger(depth) || depth <= 0)) {
                  _context10.next = 7;
                  break;
                }

                throw new businessError_1.BusinessError("The depth must be a number > 0", {
                  depth: depth
                });

              case 7:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context10.next = 9;
                  break;
                }

                throw new businessError_1.BusinessError("The minWeightMagnitude must be a number > 0", {
                  minWeightMagnitude: minWeightMagnitude
                });

              case 9:
                transactionsToApproveRequest = {
                  depth: depth,
                  reference: reference ? reference.toTrytes().toString() : undefined
                };
                _context10.next = 12;
                return this._apiClient.getTransactionsToApprove(transactionsToApproveRequest);

              case 12:
                transactionsToApprove = _context10.sent;
                _context10.next = 15;
                return this._proofOfWork.pow(hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(transactionsToApprove.trunkTransaction)), hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(transactionsToApprove.branchTransaction)), bundle.transactions.map(function (t) {
                  return t.toTrytes();
                }), minWeightMagnitude);

              case 15:
                allTrytes = _context10.sent;
                powTransactions = allTrytes.map(function (returnTrytes) {
                  return transaction_1.Transaction.fromTrytes(returnTrytes);
                });
                newBundle = new bundle_1.Bundle();
                newBundle.transactions = powTransactions;

                this._logger.info("<=== TransactionClient::attachToTangle", newBundle);

                return _context10.abrupt("return", newBundle);

              case 21:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function attachToTangle(_x29, _x30, _x31, _x32) {
        return _attachToTangle.apply(this, arguments);
      };
    }()
    /**
     * Wrapper function that does attachToTangle and then stores and broadcasts the transactions.
     * @param bundle The bundle of transactions to send.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the bundle of transactions created or rejects with an error.
     */

  }, {
    key: "sendTransactions",
    value: function () {
      var _sendTransactions = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee11(bundle, depth, minWeightMagnitude, reference) {
        var attachedTransactionsBundle, storeTransactionsRequest, broadcastTransactionsRequest;
        return _regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this._logger.info("===> TransactionClient::sendTransactions", bundle, depth, minWeightMagnitude, reference);

                _context11.next = 3;
                return this.attachToTangle(bundle, depth, minWeightMagnitude, reference);

              case 3:
                attachedTransactionsBundle = _context11.sent;
                storeTransactionsRequest = {
                  trytes: attachedTransactionsBundle.transactions.map(function (t) {
                    return t.toTrytes().toString();
                  })
                };
                _context11.next = 7;
                return this._apiClient.storeTransactions(storeTransactionsRequest);

              case 7:
                broadcastTransactionsRequest = {
                  trytes: storeTransactionsRequest.trytes
                };
                _context11.next = 10;
                return this._apiClient.broadcastTransactions(broadcastTransactionsRequest);

              case 10:
                this._logger.info("<=== TransactionClient::sendTransactions", attachedTransactionsBundle);

                return _context11.abrupt("return", attachedTransactionsBundle);

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function sendTransactions(_x33, _x34, _x35, _x36) {
        return _sendTransactions.apply(this, arguments);
      };
    }()
    /**
     * Wrapper function that does prepareTransfers and then sendTransactions.
     * @param seed The seed to send the transfer for.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param transferOptions Additional options for the transfer.
     *      @property inputs List of inputs used for funding the transfer.
     *      @property security Security level to be used for the private key / addresses.
     *      @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     *      @property hmacKey Hmac key to sign the bundle.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */

  }, {
    key: "sendTransfer",
    value: function () {
      var _sendTransfer = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee12(seed, depth, minWeightMagnitude, transfers, transferOptions, reference) {
        var transferTrytes, sentBundle;
        return _regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this._logger.info("===> TransactionClient::sendTransfer", seed, depth, minWeightMagnitude, transfers, transferOptions, reference);

                _context12.next = 3;
                return this.prepareTransfers(seed, transfers, transferOptions);

              case 3:
                transferTrytes = _context12.sent;
                _context12.next = 6;
                return this.sendTransactions(transferTrytes, depth, minWeightMagnitude, reference);

              case 6:
                sentBundle = _context12.sent;

                this._logger.info("<=== TransactionClient::sendTransfer", sentBundle);

                return _context12.abrupt("return", sentBundle);

              case 9:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function sendTransfer(_x37, _x38, _x39, _x40, _x41, _x42) {
        return _sendTransfer.apply(this, arguments);
      };
    }()
    /**
     * Find out if a transaction is promotable.
     * @param transactionTail The hash of the transaction to be promoted.
     * @returns Promise which resolves to true if the transaction is promotable rejects with an error.
     */

  }, {
    key: "isPromotable",
    value: function () {
      var _isPromotable = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee13(transactionTail) {
        var checkConsistencyRequest, checkConsistencyResponse;
        return _regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this._logger.info("===> TransactionClient::isPromotable", transactionTail);

                if (objectHelper_1.ObjectHelper.isType(transactionTail, hash_1.Hash)) {
                  _context13.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The transactionTail must be an object of type Hash");

              case 3:
                checkConsistencyRequest = {
                  tails: [transactionTail.toTrytes().toString()]
                };
                _context13.next = 6;
                return this._apiClient.checkConsistency(checkConsistencyRequest);

              case 6:
                checkConsistencyResponse = _context13.sent;

                this._logger.info("<=== TransactionClient::isPromotable", checkConsistencyResponse.state);

                return _context13.abrupt("return", checkConsistencyResponse.state);

              case 9:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function isPromotable(_x43) {
        return _isPromotable.apply(this, arguments);
      };
    }()
    /**
     * Determines whether you should replay a transaction or make a new one (either with the same input, or a different one).
     * @param addresses Input address you want to have tested.
     * @returns Promise which resolves to true if the addresses are reattachable or rejects with an error.
     */

  }, {
    key: "isReattachable",
    value: function () {
      var _isReattachable = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee14(addresses) {
        var addrsTxsMap, i, addressString, transactions, valueTransactions, results, inclusionStates, _i2;

        return _regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                this._logger.info("===> TransactionClient::isReattachable", addresses);

                if (arrayHelper_1.ArrayHelper.isTyped(addresses, address_1.Address)) {
                  _context14.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The addresses must be an object of type Address");

              case 3:
                addrsTxsMap = {};

                for (i = 0; i < addresses.length; i++) {
                  addressString = addresses[i].toTrytes().toString();
                  addrsTxsMap[addressString] = [];
                }

                _context14.next = 7;
                return this.findTransactionObjects(undefined, addresses);

              case 7:
                transactions = _context14.sent;
                valueTransactions = [];
                transactions.forEach(function (transaction) {
                  if (transaction.value.toNumber() < 0) {
                    var txAddress = transaction.address;
                    var txHash = transactionHelper_1.TransactionHelper.hash(transaction);
                    addrsTxsMap[txAddress.toTrytes().toString()].push(txHash);
                    valueTransactions.push(txHash);
                  }
                });

                if (!(valueTransactions.length > 0)) {
                  _context14.next = 17;
                  break;
                }

                _context14.next = 13;
                return this.getLatestInclusion(valueTransactions);

              case 13:
                inclusionStates = _context14.sent;
                results = addresses.map(function (address) {
                  var shouldReattach = true;
                  var txs = addrsTxsMap[address.toTrytes().toString()];

                  for (var _i = 0; _i < txs.length; _i++) {
                    var txIndex = valueTransactions.indexOf(txs[_i]);
                    shouldReattach = !inclusionStates[txIndex];

                    if (!shouldReattach) {
                      break;
                    }
                  }

                  return shouldReattach;
                });
                _context14.next = 19;
                break;

              case 17:
                results = [];

                for (_i2 = 0; _i2 < addresses.length; _i2++) {
                  results.push(true);
                }

              case 19:
                this._logger.info("<=== TransactionClient::isReattachable", results);

                return _context14.abrupt("return", results);

              case 21:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function isReattachable(_x44) {
        return _isReattachable.apply(this, arguments);
      };
    }()
    /**
     * Promotes a transaction by adding spam on top of it, as long as it is promotable.
     * Will promote by adding transfers on top of the current one with delay interval.
     * Use promoteOptions.interrupt to terminate the promotion.
     * If promoteOptions.delay is set to 0 only one promotion transfer will be sent.
     * @param transactionTail The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param promoteOptions Additional options for the promote.
     *      @property delay Delay between promotion transfers
     *      @property interrupt Flag or method to terminate promotion.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */

  }, {
    key: "promoteTransaction",
    value: function () {
      var _promoteTransaction = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee16(transactionTail, depth, minWeightMagnitude, transfers, promoteOptions) {
        var _this = this;

        var localPromoteOptions, isPromotable, sendTransferResponse;
        return _regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this._logger.info("===> TransactionClient::promoteTransaction", transactionTail, depth, minWeightMagnitude, transfers, promoteOptions);

                if (objectHelper_1.ObjectHelper.isType(transactionTail, hash_1.Hash)) {
                  _context16.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The transactionTail must be an object of type Hash");

              case 3:
                if (!(!numberHelper_1.NumberHelper.isInteger(depth) || depth <= 0)) {
                  _context16.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The depth must be a number > 0", {
                  depth: depth
                });

              case 5:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context16.next = 7;
                  break;
                }

                throw new businessError_1.BusinessError("The minWeightMagnitude must be a number > 0", {
                  minWeightMagnitude: minWeightMagnitude
                });

              case 7:
                if (arrayHelper_1.ArrayHelper.isTyped(transfers, transfer_1.Transfer)) {
                  _context16.next = 9;
                  break;
                }

                throw new businessError_1.BusinessError("The transfers must an array of Transfer objects");

              case 9:
                localPromoteOptions = promoteOptions || {};

                if (objectHelper_1.ObjectHelper.isEmpty(localPromoteOptions.interrupt)) {
                  localPromoteOptions.interrupt = false;
                }

                if (!(localPromoteOptions.interrupt === false || typeof localPromoteOptions.interrupt === "function" && !localPromoteOptions.interrupt())) {
                  _context16.next = 30;
                  break;
                }

                _context16.next = 14;
                return this.isPromotable(transactionTail);

              case 14:
                isPromotable = _context16.sent;

                if (!isPromotable) {
                  _context16.next = 27;
                  break;
                }

                _context16.next = 18;
                return this.sendTransfer(hash_1.Hash.fromTrytes(transfers[0].address.toTrytes()), depth, minWeightMagnitude, transfers, undefined, transactionTail);

              case 18:
                sendTransferResponse = _context16.sent;

                if (!numberHelper_1.NumberHelper.isInteger(localPromoteOptions.delay)) {
                  _context16.next = 23;
                  break;
                }

                return _context16.abrupt("return", this._backgroundTaskService.create(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime.mark(function _callee15() {
                  return _regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          return _context15.abrupt("return", _this.promoteTransaction(transactionTail, depth, minWeightMagnitude, transfers, localPromoteOptions));

                        case 1:
                        case "end":
                          return _context15.stop();
                      }
                    }
                  }, _callee15, this);
                })), localPromoteOptions.delay));

              case 23:
                this._logger.info("<=== TransactionClient::promoteTransaction", sendTransferResponse);

                return _context16.abrupt("return", sendTransferResponse);

              case 25:
                _context16.next = 28;
                break;

              case 27:
                throw new businessError_1.BusinessError("Transaction is not promotable");

              case 28:
                _context16.next = 32;
                break;

              case 30:
                this._logger.info("<=== TransactionClient::promoteTransaction", undefined);

                return _context16.abrupt("return", undefined);

              case 32:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      return function promoteTransaction(_x45, _x46, _x47, _x48, _x49) {
        return _promoteTransaction.apply(this, arguments);
      };
    }()
    /**
     * Gets the associated bundle transactions of a single transaction.
     * Does validation of signatures, total sum as well as bundle order.
     * @param transactionHash Hash of a trunk or a tail transaction of a bundle.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */

  }, {
    key: "getBundle",
    value: function () {
      var _getBundle = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee17(transactionHash) {
        var transactions, bundle, isValid;
        return _regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                this._logger.info("===> TransactionClient::getBundle", transactionHash);

                if (objectHelper_1.ObjectHelper.isType(transactionHash, hash_1.Hash)) {
                  _context17.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The transactionHash must be an object of type Hash");

              case 3:
                _context17.next = 5;
                return this.traverseBundle(transactionHash);

              case 5:
                transactions = _context17.sent;
                bundle = new bundle_1.Bundle();
                bundle.transactions = transactions;
                isValid = bundleHelper_1.BundleHelper.isValid(bundle);

                if (isValid) {
                  _context17.next = 11;
                  break;
                }

                throw new businessError_1.BusinessError("Invalid bundle provided");

              case 11:
                this._logger.info("<=== TransactionClient::getBundle", bundle);

                return _context17.abrupt("return", bundle);

              case 13:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      return function getBundle(_x50) {
        return _getBundle.apply(this, arguments);
      };
    }()
    /**
     * Traverse the Bundle by going down the trunkTransactions until
     * the bundle hash of the transaction is no longer the same.
     * @param trunkTransaction Hash of a trunk or a tail transaction of a bundle.
     * @param bundleHash The bundle hash to match.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */

  }, {
    key: "traverseBundle",
    value: function () {
      var _traverseBundle = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee18(trunkTransaction, bundleHash) {
        var allBundleTransactions, newTrunkTransaction, newBundleHash, getTrytesRequest, getTrytesResponse, trytes, transactionObject, hasHash, localBundleHash;
        return _regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this._logger.info("===> TransactionClient::traverseBundle", trunkTransaction, bundleHash);

                if (objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
                  _context18.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The trunkTransaction must be an object of type Hash");

              case 3:
                allBundleTransactions = [];
                newTrunkTransaction = trunkTransaction;
                newBundleHash = bundleHash;

              case 6:
                getTrytesRequest = {
                  hashes: [newTrunkTransaction.toTrytes().toString()]
                };
                _context18.next = 9;
                return this._apiClient.getTrytes(getTrytesRequest);

              case 9:
                getTrytesResponse = _context18.sent;
                trytes = !objectHelper_1.ObjectHelper.isEmpty(getTrytesResponse) && !objectHelper_1.ObjectHelper.isEmpty(getTrytesResponse.trytes) && getTrytesResponse.trytes.length > 0 ? getTrytesResponse.trytes[0] : undefined;

                if (!objectHelper_1.ObjectHelper.isEmpty(trytes)) {
                  _context18.next = 15;
                  break;
                }

                throw new businessError_1.BusinessError("Bundle transactions not visible");

              case 15:
                transactionObject = transaction_1.Transaction.fromTrytes(trytes_1.Trytes.fromString(trytes)); // If first transaction to search is not a tail, return error

                hasHash = !objectHelper_1.ObjectHelper.isEmpty(newBundleHash);

                if (!(!hasHash && transactionObject.currentIndex.toNumber() !== 0)) {
                  _context18.next = 19;
                  break;
                }

                throw new businessError_1.BusinessError("Invalid tail transaction supplied");

              case 19:
                // If no bundle hash, define it
                localBundleHash = hasHash ? newBundleHash : transactionObject.bundle;
                newTrunkTransaction = undefined;
                newBundleHash = undefined; // If same bundle hash continue

                if (localBundleHash.toTrytes().toString() === transactionObject.bundle.toTrytes().toString()) {
                  // Add transaction object to bundle
                  allBundleTransactions.push(transactionObject); // If more than one element then continue

                  if (transactionObject.lastIndex.toNumber() !== 0 || transactionObject.currentIndex.toNumber() !== 0) {
                    newTrunkTransaction = transactionObject.trunkTransaction;
                    newBundleHash = localBundleHash;
                  }
                }

              case 23:
                if (newTrunkTransaction !== undefined) {
                  _context18.next = 6;
                  break;
                }

              case 24:
                this._logger.info("<=== TransactionClient::traverseBundle", allBundleTransactions);

                return _context18.abrupt("return", allBundleTransactions);

              case 26:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      return function traverseBundle(_x51, _x52) {
        return _traverseBundle.apply(this, arguments);
      };
    }()
    /**
     * Wrapper which gets a bundle and then replays a transfer by doing Proof of Work again.
     * @param transactionHash The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */

  }, {
    key: "reattachBundle",
    value: function () {
      var _reattachBundle = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee19(transactionHash, depth, minWeightMagnitude) {
        var bundle, sendTransactionsResponse;
        return _regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                this._logger.info("===> TransactionClient::reattachBundle", transactionHash, depth, minWeightMagnitude);

                _context19.next = 3;
                return this.getBundle(transactionHash);

              case 3:
                bundle = _context19.sent;
                bundle.transactions = bundle.transactions.reverse();
                _context19.next = 7;
                return this.sendTransactions(bundle, depth, minWeightMagnitude);

              case 7:
                sendTransactionsResponse = _context19.sent;

                this._logger.info("<=== TransactionClient::reattachBundle", sendTransactionsResponse);

                return _context19.abrupt("return", sendTransactionsResponse);

              case 10:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      return function reattachBundle(_x53, _x54, _x55) {
        return _reattachBundle.apply(this, arguments);
      };
    }()
    /**
     * Wrapper which gets a bundle and then broadcasts it.
     * @param transactionHash The hash of the transaction to be re-broadcast.
     * @returns Promise which resolves or rejects with an error.
     */

  }, {
    key: "rebroadcastBundle",
    value: function () {
      var _rebroadcastBundle = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee20(transactionHash) {
        var bundle, broadcastTransactionsRequest;
        return _regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                this._logger.info("===> TransactionClient::rebroadcastBundle", transactionHash);

                _context20.next = 3;
                return this.getBundle(transactionHash);

              case 3:
                bundle = _context20.sent;
                broadcastTransactionsRequest = {
                  trytes: bundle.transactions.reverse().map(function (bt) {
                    return bt.toTrytes().toString();
                  })
                };
                _context20.next = 7;
                return this._apiClient.broadcastTransactions(broadcastTransactionsRequest);

              case 7:
                this._logger.info("<=== TransactionClient::rebroadcastBundle", bundle);

                return _context20.abrupt("return", bundle);

              case 9:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      return function rebroadcastBundle(_x56) {
        return _rebroadcastBundle.apply(this, arguments);
      };
    }()
    /**
     * Get transaction objects by fist performing a findTransactions call.
     * @param bundles Bundles to lookup transactions for.
     * @param addresses Addresses to lookup transactions for.
     * @param tags Tags to lookup transactions for.
     * @param approvees Approvees to lookup transactions for.
     * @returns Promise which resolves to the list of transactions or rejects with an error.
     */

  }, {
    key: "findTransactionObjects",
    value: function () {
      var _findTransactionObjects = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee21(bundles, addresses, tags, approvees) {
        var transactions, resp;
        return _regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                this._logger.info("===> TransactionClient::findTransactionObjects", bundles, addresses, tags, approvees);

                _context21.next = 3;
                return this.findTransactions(bundles, addresses, tags, approvees);

              case 3:
                transactions = _context21.sent;

                if (!(transactions.length > 0)) {
                  _context21.next = 12;
                  break;
                }

                _context21.next = 7;
                return this.getTransactionsObjects(transactions);

              case 7:
                resp = _context21.sent;

                this._logger.info("<=== TransactionClient::findTransactionObjects", resp);

                return _context21.abrupt("return", resp);

              case 12:
                this._logger.info("<=== TransactionClient::findTransactionObjects", []);

                return _context21.abrupt("return", []);

              case 14:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      return function findTransactionObjects(_x57, _x58, _x59, _x60) {
        return _findTransactionObjects.apply(this, arguments);
      };
    }()
    /**
     * The transfers which are associated with a seed. The transfers are determined by either calculating
     * deterministically which addresses were already used, or by providing a list of indexes to get the
     * addresses and the associated transfers from. The transfers are sorted by their timestamp.
     * @param seed The seed to get the transfers for
     * @param startIndex The start index to get the transfers for.
     * @param endIndex The end index to get the transfers for.
     * @param security The security level for the transfers.
     * @param inclusionStates Do you want inclusion states in the bundles.
     * @returns Promise which resolves to the requested bundles or rejects with an error.
     */

  }, {
    key: "getTransfers",
    value: function () {
      var _getTransfers = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee22(seed, startIndex, endIndex, security, inclusionStates) {
        var localStartIndex, addresses, bundles;
        return _regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                this._logger.info("===> TransactionClient::getTransfers", seed, startIndex, endIndex, security, inclusionStates);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context22.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                localStartIndex = startIndex;

                if (!numberHelper_1.NumberHelper.isInteger(localStartIndex)) {
                  localStartIndex = 0;
                }

                _context22.next = 7;
                return this.getNewAddress(seed, localStartIndex, endIndex, false, security);

              case 7:
                addresses = _context22.sent;
                _context22.next = 10;
                return this.bundlesFromAddresses(addresses, inclusionStates);

              case 10:
                bundles = _context22.sent;

                this._logger.info("<=== TransactionClient::getTransfers", bundles);

                return _context22.abrupt("return", bundles);

              case 13:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      return function getTransfers(_x61, _x62, _x63, _x64, _x65) {
        return _getTransfers.apply(this, arguments);
      };
    }()
    /**
     * Similar to getTransfers, just that it returns additional account data.
     * @param seed The seed to get the transfers for
     * @param startIndex The start index to get the transfers for.
     * @param endIndex The end index to get the transfers for.
     * @param security The security level for the transfers.
     * @returns Promise which resolves to the account data or rejects with an error.
     */

  }, {
    key: "getAccountData",
    value: function () {
      var _getAccountData = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee23(seed, startIndex, endIndex, security) {
        var localStartIndex, addresses, bundles, accountData, balanceRequest, balanceResponse, i, balance;
        return _regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                this._logger.info("===> TransactionClient::getAccountData", seed, startIndex, endIndex, security);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context23.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                localStartIndex = startIndex;

                if (!numberHelper_1.NumberHelper.isInteger(localStartIndex)) {
                  localStartIndex = 0;
                }

                _context23.next = 7;
                return this.getNewAddress(seed, localStartIndex, endIndex, false, security || addressSecurity_1.AddressSecurity.medium);

              case 7:
                addresses = _context23.sent;
                _context23.next = 10;
                return this.bundlesFromAddresses(addresses, true);

              case 10:
                bundles = _context23.sent;
                accountData = {
                  latestAddress: addresses.pop(),
                  addresses: addresses,
                  transfers: bundles,
                  inputs: [],
                  balance: 0
                };
                balanceRequest = {
                  addresses: accountData.addresses.map(function (add) {
                    return add.toTrytes().toString();
                  }),
                  threshold: 100
                };
                _context23.next = 15;
                return this._apiClient.getBalances(balanceRequest);

              case 15:
                balanceResponse = _context23.sent;

                for (i = 0; i < balanceResponse.balances.length; i++) {
                  balance = parseInt(balanceResponse.balances[i], 10);

                  if (balance > 0) {
                    accountData.inputs.push(input_1.Input.fromParams(accountData.addresses[i], security || addressSecurity_1.AddressSecurity.medium, localStartIndex + i, balance));
                    accountData.balance += balance;
                  }
                }

                this._logger.info("<=== TransactionClient::getAccountData", accountData);

                return _context23.abrupt("return", accountData);

              case 19:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      return function getAccountData(_x66, _x67, _x68, _x69) {
        return _getAccountData.apply(this, arguments);
      };
    }()
    /* @internal */

  }, {
    key: "bundlesFromAddresses",
    value: function () {
      var _bundlesFromAddresses = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee24(addresses, inclusionStates) {
        var transactionObjects, tailTransactions, nonTailBundleHashes, nonTailBundleTransactions, finalBundles, tailTxArray, tailTxStates, i, bundle;
        return _regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return this.findTransactionObjects(undefined, addresses, undefined, undefined);

              case 2:
                transactionObjects = _context24.sent;
                // set of tail transactions
                tailTransactions = new Set();
                nonTailBundleHashes = new Set();
                transactionObjects.forEach(function (transaction) {
                  // Sort tail and nonTails
                  if (transaction.currentIndex.toNumber() === 0) {
                    tailTransactions.add(transactionHelper_1.TransactionHelper.hash(transaction).toTrytes().toString());
                  } else {
                    nonTailBundleHashes.add(transaction.bundle.toTrytes().toString());
                  }
                });

                if (!(nonTailBundleHashes.size > 0)) {
                  _context24.next = 11;
                  break;
                }

                _context24.next = 9;
                return this.findTransactionObjects(Array.from(nonTailBundleHashes).map(function (hash) {
                  return hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash));
                }));

              case 9:
                nonTailBundleTransactions = _context24.sent;
                nonTailBundleTransactions.forEach(function (transaction) {
                  if (transaction.currentIndex.toNumber() === 0) {
                    tailTransactions.add(transactionHelper_1.TransactionHelper.hash(transaction).toTrytes().toString());
                  }
                });

              case 11:
                finalBundles = [];
                tailTxArray = Array.from(tailTransactions); // If inclusionStates, get the confirmation status
                // of the tail transactions, and thus the bundles

                if (!inclusionStates) {
                  _context24.next = 17;
                  break;
                }

                _context24.next = 16;
                return this.getLatestInclusion(tailTxArray.map(function (tail) {
                  return hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(tail));
                }));

              case 16:
                tailTxStates = _context24.sent;

              case 17:
                i = 0;

              case 18:
                if (!(i < tailTxArray.length)) {
                  _context24.next = 27;
                  break;
                }

                _context24.next = 21;
                return this.getBundle(hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(tailTxArray[i])));

              case 21:
                bundle = _context24.sent;
                bundle.inclusionState = tailTxStates ? tailTxStates[i] : undefined;
                finalBundles.push(bundle);

              case 24:
                i++;
                _context24.next = 18;
                break;

              case 27:
                // Sort bundles by timestamp
                finalBundles.sort(function (a, b) {
                  var x = a.transactions[0].attachmentTimestamp.toNumber();
                  var y = b.transactions[0].attachmentTimestamp.toNumber();
                  return x < y ? -1 : x > y ? 1 : 0;
                });
                return _context24.abrupt("return", finalBundles);

              case 29:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      return function bundlesFromAddresses(_x70, _x71) {
        return _bundlesFromAddresses.apply(this, arguments);
      };
    }()
    /* @internal */

  }, {
    key: "generateAddress",
    value: function generateAddress(seed, index, security, includeChecksum) {
      var key = iss_1.ISS.key(seed, index, security);
      var digests = iss_1.ISS.digests(key);
      var addressTrits = iss_1.ISS.address(digests);
      var addressTrytesString = trits_1.Trits.fromArray(addressTrits).toTrytes().toString();

      if (includeChecksum) {
        addressTrytesString += addressHelper_1.AddressHelper.createChecksum(addressTrits, 9);
      }

      return address_1.Address.fromTrytes(trytes_1.Trytes.fromString(addressTrytesString));
    }
    /* @internal */

  }, {
    key: "addRemainder",
    value: function () {
      var _addRemainder = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee25(seed, bundle, transferOptions, inputs, signatureMessageFragments, totalValue, tag, addedHMAC) {
        var totalTransferValue, i, timestamp, remainder, startIndex, k, addresses, ts;
        return _regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                totalTransferValue = totalValue;
                i = 0;

              case 2:
                if (!(i < inputs.length)) {
                  _context25.next = 31;
                  break;
                }

                timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000); // Add input as bundle entry

                bundle.addTransactions(inputs[i].security, inputs[i].address, -inputs[i].balance, tag, timestamp); // If there is a remainder value
                // Add extra output to send remaining funds to

                if (!(inputs[i].balance >= totalTransferValue)) {
                  _context25.next = 27;
                  break;
                }

                remainder = inputs[i].balance - totalTransferValue; // If user has provided remainder address use it to send remaining funds to

                if (!(remainder > 0 && !objectHelper_1.ObjectHelper.isEmpty(transferOptions) && objectHelper_1.ObjectHelper.isType(transferOptions.remainderAddress, address_1.Address))) {
                  _context25.next = 12;
                  break;
                }

                // Remainder bundle entry
                bundle.addTransactions(1, transferOptions.remainderAddress, remainder, tag, timestamp); // Final function for signing inputs

                bundleHelper_1.BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC);
                _context25.next = 25;
                break;

              case 12:
                if (!(remainder > 0)) {
                  _context25.next = 24;
                  break;
                }

                startIndex = 0;

                for (k = 0; k < inputs.length; k++) {
                  startIndex = Math.max(inputs[k].keyIndex, startIndex);
                }

                startIndex++;
                _context25.next = 18;
                return this.getAddressesToUnused(seed, startIndex, false, transferOptions.security);

              case 18:
                addresses = _context25.sent;
                ts = Math.floor(this._timeService.msSinceEpoch() / 1000); // Remainder bundle entry

                bundle.addTransactions(1, addresses[addresses.length - 1], remainder, tag, ts); // Final function for signing inputs

                bundleHelper_1.BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC);
                _context25.next = 25;
                break;

              case 24:
                // If there is no remainder, do not add transaction to bundle
                // simply sign and return
                bundleHelper_1.BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC);

              case 25:
                _context25.next = 28;
                break;

              case 27:
                // If multiple inputs provided, subtract the totalTransferValue by
                // the inputs balance
                totalTransferValue -= inputs[i].balance;

              case 28:
                i++;
                _context25.next = 2;
                break;

              case 31:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      return function addRemainder(_x72, _x73, _x74, _x75, _x76, _x77, _x78, _x79) {
        return _addRemainder.apply(this, arguments);
      };
    }()
  }]);

  return TransactionClient;
}();
/* @internal */


TransactionClient.NULL_HASH_TRYTES = "9".repeat(243);
/* @internal */

TransactionClient.MAX_INPUTS = 500;
exports.TransactionClient = TransactionClient;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(28);

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(5);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var cryptoError_1 = __webpack_require__(9);

var hash_1 = __webpack_require__(6);

var trytes_1 = __webpack_require__(1);

var businessError_1 = __webpack_require__(17);
/**
 * ProofOfWork implementation using API.
 */


var ProofOfWorkApi =
/*#__PURE__*/
function () {
  /**
   * Create an instance of ProofOfWork.
   * @param apiClient The API client to send the request through.
   */
  function ProofOfWorkApi(apiClient) {
    _classCallCheck(this, ProofOfWorkApi);

    if (objectHelper_1.ObjectHelper.isEmpty(apiClient)) {
      throw new businessError_1.BusinessError("The apiClient must not be empty");
    }

    this._apiClient = apiClient;
  }
  /**
   * Allow the proof of work to perform any initialization.
   * Will throw an exception if the implementation is not supported.
   */


  _createClass(ProofOfWorkApi, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.resolve());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */

  }, {
    key: "pow",
    value: function () {
      var _pow = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2(trunkTransaction, branchTransaction, trytes, minWeightMagnitude) {
        var attachToTangleRequest, attachToTangleResponse;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
                  _context2.next = 2;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trunkTransaction must be an object of type Hash");

              case 2:
                if (objectHelper_1.ObjectHelper.isType(branchTransaction, hash_1.Hash)) {
                  _context2.next = 4;
                  break;
                }

                throw new cryptoError_1.CryptoError("The branchTransaction must be an object of type Hash");

              case 4:
                if (arrayHelper_1.ArrayHelper.isTyped(trytes, trytes_1.Trytes)) {
                  _context2.next = 6;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trytes must be an array of type Trytes");

              case 6:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context2.next = 8;
                  break;
                }

                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");

              case 8:
                attachToTangleRequest = {
                  trunkTransaction: trunkTransaction.toString(),
                  branchTransaction: branchTransaction.toString(),
                  minWeightMagnitude: minWeightMagnitude,
                  trytes: trytes.map(function (t) {
                    return t.toString();
                  })
                };
                _context2.next = 11;
                return this._apiClient.attachToTangle(attachToTangleRequest);

              case 11:
                attachToTangleResponse = _context2.sent;

                if (!(objectHelper_1.ObjectHelper.isEmpty(attachToTangleResponse) || arrayHelper_1.ArrayHelper.isEmpty(attachToTangleResponse.trytes))) {
                  _context2.next = 16;
                  break;
                }

                throw new cryptoError_1.CryptoError("The attachToTangleRequest did not return any trytes");

              case 16:
                return _context2.abrupt("return", attachToTangleResponse.trytes.map(function (returnTrytes) {
                  return trytes_1.Trytes.fromString(returnTrytes);
                }));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function pow(_x, _x2, _x3, _x4) {
        return _pow.apply(this, arguments);
      };
    }()
  }]);

  return ProofOfWorkApi;
}();

exports.ProofOfWorkApi = ProofOfWorkApi;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(46);

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var networkClientFactory_1 = __webpack_require__(30);

var platformCryptoFactory_1 = __webpack_require__(31);

var rngServiceFactory_1 = __webpack_require__(32);

var platformCrypto_1 = __webpack_require__(47);

var networkClient_1 = __webpack_require__(49);

var rngService_1 = __webpack_require__(50);
/**
 * Platform abstraction layer for NodeJS.
 */


var PAL =
/*#__PURE__*/
function () {
  function PAL() {
    _classCallCheck(this, PAL);
  }

  _createClass(PAL, null, [{
    key: "initialize",

    /**
     * Perform any initialization for the PAL.
     */
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!PAL._isInitialized) {
                  PAL._isInitialized = true;
                  networkClientFactory_1.NetworkClientFactory.instance().register("default", function (networkEndpoint, logger, timeoutMs) {
                    return new networkClient_1.NetworkClient(networkEndpoint, logger, timeoutMs);
                  });
                  rngServiceFactory_1.RngServiceFactory.instance().register("default", function () {
                    return new rngService_1.RngService();
                  });
                  platformCryptoFactory_1.PlatformCryptoFactory.instance().register("default", function (publicKey, privateKey) {
                    return new platformCrypto_1.PlatformCrypto(publicKey, privateKey);
                  });
                }

                return _context.abrupt("return", Promise.resolve());

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
  }]);

  return PAL;
}();
/* @internal */


PAL._isInitialized = false;
exports.PAL = PAL;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(84);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ })
/******/ ])["default"];