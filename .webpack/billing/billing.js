(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../billing.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../billing.js":
/*!********************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/billing.js ***!
  \********************************************************************************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stripe */ "../../stripe/lib/stripe.js");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_billing_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/billing-lib */ "../../../libs/billing-lib.js");
/* harmony import */ var _libs_response_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/response-lib */ "../../../libs/response-lib.js");




async function main(event, context) {
  const {
    storage,
    source
  } = JSON.parse(event.body);
  const amount = Object(_libs_billing_lib__WEBPACK_IMPORTED_MODULE_2__["calculateCost"])(storage);
  const description = "Scratch charge"; // Load our secret key from the  environment variables

  const stripe = stripe__WEBPACK_IMPORTED_MODULE_1___default()(process.env.stripeSecretKey);

  try {
    await stripe.charges.create({
      source,
      amount,
      description,
      currency: "usd"
    });
    return Object(_libs_response_lib__WEBPACK_IMPORTED_MODULE_3__["success"])({
      status: true
    });
  } catch (e) {
    return Object(_libs_response_lib__WEBPACK_IMPORTED_MODULE_3__["failure"])({
      message: e.message
    });
  }
}

/***/ }),

/***/ "../../../libs/billing-lib.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/libs/billing-lib.js ***!
  \*****************************************************************************************************/
/*! exports provided: calculateCost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateCost", function() { return calculateCost; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

function calculateCost(storage) {
  const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;
  return rate * storage * 100;
}

/***/ }),

/***/ "../../../libs/response-lib.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/libs/response-lib.js ***!
  \******************************************************************************************************/
/*! exports provided: success, failure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

function success(body) {
  return buildResponse(200, body);
}
function failure(body) {
  return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}

/***/ }),

/***/ "../../source-map-support/register.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map-support/register.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./ */ "../../source-map-support/source-map-support.js").install();


/***/ }),

/***/ "../../source-map-support/source-map-support.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map-support/source-map-support.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SourceMapConsumer = __webpack_require__(/*! source-map */ "../../source-map/source-map.js").SourceMapConsumer;
var path = __webpack_require__(/*! path */ "path");

var fs;
try {
  fs = __webpack_require__(/*! fs */ "fs");
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = null;
  if (!fs) {
    // Use SJAX if we are in the browser
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, false);
    xhr.send(null);
    var contents = null
    if (xhr.readyState === 4 && xhr.status === 200) {
      contents = xhr.responseText
    }
  } else if (fs.existsSync(path)) {
    // Otherwise, use the filesystem
    try {
      contents = fs.readFileSync(path, 'utf8');
    } catch (er) {
      contents = '';
    }
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
     try {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', source, false);
       xhr.send(null);
       fileData = xhr.readyState === 4 ? xhr.responseText : null;

       // Support providing a sourceMappingURL via the SourceMap header
       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                             xhr.getResponseHeader("X-SourceMap");
       if (sourceMapHeader) {
         return sourceMapHeader;
       }
     } catch (e) {
     }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/)[ \t]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = new Buffer(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map) {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame) {
  if(frame.isNative()) {
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    var headerLength = 62;
    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    frame = cloneCallSite(frame);
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  return error + stack.map(function(frame) {
    return '\n    at ' + wrapCallSite(frame);
  }).join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  process.exit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    var Module;
    try {
      Module = __webpack_require__(/*! module */ "module");
    } catch (err) {
      // NOP: Loading in catch block to convert webpack error to warning.
    }
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};


/***/ }),

/***/ "../../source-map/lib/array-set.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map/lib/array-set.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),

/***/ "../../source-map/lib/base64-vlq.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map/lib/base64-vlq.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(/*! ./base64 */ "../../source-map/lib/base64.js");

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ "../../source-map/lib/base64.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map/lib/base64.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ "../../source-map/lib/binary-search.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map/lib/binary-search.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ "../../source-map/lib/mapping-list.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map/lib/mapping-list.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;


/***/ }),

/***/ "../../source-map/lib/quick-sort.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map/lib/quick-sort.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ "../../source-map/lib/source-map-consumer.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map/lib/source-map-consumer.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");
var binarySearch = __webpack_require__(/*! ./binary-search */ "../../source-map/lib/binary-search.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "../../source-map/lib/array-set.js").ArraySet;
var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "../../source-map/lib/base64-vlq.js");
var quickSort = __webpack_require__(/*! ./quick-sort */ "../../source-map/lib/quick-sort.js").quickSort;

function SourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap)
    : new BasicSourceMapConsumer(sourceMap);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      if (source != null && sourceRoot != null) {
        source = util.join(sourceRoot, source);
      }
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: Optional. the column number in the original source.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    if (this.sourceRoot != null) {
      needle.source = util.relative(this.sourceRoot, needle.source);
    }
    if (!this._sources.has(needle.source)) {
      return [];
    }
    needle.source = this._sources.indexOf(needle.source);

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The only parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._sources.toArray().map(function (s) {
      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
    }, this);
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          if (this.sourceRoot != null) {
            source = util.join(this.sourceRoot, source);
          }
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    if (this.sourceRoot != null) {
      aSource = util.relative(this.sourceRoot, aSource);
    }

    if (this._sources.has(aSource)) {
      return this.sourcesContent[this._sources.indexOf(aSource)];
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + aSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + aSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    if (this.sourceRoot != null) {
      source = util.relative(this.sourceRoot, source);
    }
    if (!this._sources.has(source)) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }
    source = this._sources.indexOf(source);

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The only parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        if (section.consumer.sourceRoot !== null) {
          source = util.join(section.consumer.sourceRoot, source);
        }
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = section.consumer._names.at(mapping.name);
        this._names.add(name);
        name = this._names.indexOf(name);

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),

/***/ "../../source-map/lib/source-map-generator.js":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map/lib/source-map-generator.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "../../source-map/lib/base64-vlq.js");
var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "../../source-map/lib/array-set.js").ArraySet;
var MappingList = __webpack_require__(/*! ./mapping-list */ "../../source-map/lib/mapping-list.js").MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;


/***/ }),

/***/ "../../source-map/lib/source-node.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map/lib/source-node.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = __webpack_require__(/*! ./source-map-generator */ "../../source-map/lib/source-map-generator.js").SourceMapGenerator;
var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex];
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex];
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;


/***/ }),

/***/ "../../source-map/lib/util.js":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map/lib/util.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = mappingA.source - mappingB.source;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = mappingA.source - mappingB.source;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;


/***/ }),

/***/ "../../source-map/source-map.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/source-map/source-map.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(/*! ./lib/source-map-generator */ "../../source-map/lib/source-map-generator.js").SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(/*! ./lib/source-map-consumer */ "../../source-map/lib/source-map-consumer.js").SourceMapConsumer;
exports.SourceNode = __webpack_require__(/*! ./lib/source-node */ "../../source-map/lib/source-node.js").SourceNode;


/***/ }),

/***/ "../../stripe/lib/Error.js":
/*!******************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/Error.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const utils = __webpack_require__(/*! ./utils */ "../../stripe/lib/utils.js");

/**
 * StripeError is the base error from which all other more specific Stripe errors derive.
 * Specifically for errors returned from Stripe's REST API.
 */
class StripeError extends Error {
  constructor(raw = {}) {
    super(raw.message);
    // This splat is here for back-compat and should be removed in the next major version.
    this.populate(...arguments);
  }

  // Allow `new StripeFooError(raw).type === 'StripeFooError'`
  get type() {
    return this.constructor.name;
  }

  /**
   * DEPRECATED
   * This will be inlined in the constructor in the future.
   */
  populate(raw) {
    this.raw = raw;
    if (!raw || typeof raw !== 'object') {
      return;
    }

    this.rawType = raw.type;
    this.code = raw.code;
    this.param = raw.param;
    this.detail = raw.detail;
    this.headers = raw.headers;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
    this.message = raw.message;
  }

  /**
   * Helper factory which takes raw stripe errors and outputs wrapping instances
   */
  static generate(rawStripeError) {
    switch (rawStripeError.type) {
      case 'card_error':
        return new StripeCardError(rawStripeError);
      case 'invalid_request_error':
        return new StripeInvalidRequestError(rawStripeError);
      case 'api_error':
        return new StripeAPIError(rawStripeError);
      case 'idempotency_error':
        return new StripeIdempotencyError(rawStripeError);
      case 'invalid_grant':
        return new StripeInvalidGrantError(rawStripeError);
      default:
        return new GenericError('Generic', 'Unknown Error');
    }
  }

  /**
   * DEPRECATED
   * Please use class inheritance instead.
   */
  static extend(options) {
    const type = options.type;
    class CustomError extends StripeError {
      // eslint-disable-next-line class-methods-use-this
      get type() {
        return type;
      }
    }
    delete options.type;
    Object.assign(CustomError.prototype, options);
    return CustomError;
  }
}

// Specific Stripe Error types:

/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */
class StripeCardError extends StripeError {}

/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
class StripeInvalidRequestError extends StripeError {}

/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
class StripeAPIError extends StripeError {}

/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Stripe's servers.
 */
class StripeAuthenticationError extends StripeError {}

/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
class StripePermissionError extends StripeError {}

/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Stripe's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
class StripeRateLimitError extends StripeError {}

/**
 * StripeConnectionError is raised in the event that the SDK can't connect to
 * Stripe's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
class StripeConnectionError extends StripeError {}

/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
class StripeSignatureVerificationError extends StripeError {}

/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */
class StripeIdempotencyError extends StripeError {}

/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
class StripeInvalidGrantError extends StripeError {}

/**
 * DEPRECATED
 * This is here for backwards compatibility and will be removed in the next major version.
 */
function _Error(raw) {
  this.populate(...arguments);
  this.stack = new Error(this.message).stack;
}
_Error.prototype = Object.create(Error.prototype);
_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function(type, message) {
  this.type = type;
  this.message = message;
};
_Error.extend = utils.protoExtend;

/**
 * DEPRECATED.
 * Do not use the default export; it may be removed or change in a future version.
 */
module.exports = _Error;

module.exports.StripeError = StripeError;
module.exports.StripeCardError = StripeCardError;
module.exports.StripeInvalidRequestError = StripeInvalidRequestError;
module.exports.StripeAPIError = StripeAPIError;
module.exports.StripeAuthenticationError = StripeAuthenticationError;
module.exports.StripePermissionError = StripePermissionError;
module.exports.StripeRateLimitError = StripeRateLimitError;
module.exports.StripeConnectionError = StripeConnectionError;
module.exports.StripeSignatureVerificationError = StripeSignatureVerificationError;
module.exports.StripeIdempotencyError = StripeIdempotencyError;
module.exports.StripeInvalidGrantError = StripeInvalidGrantError;


/***/ }),

/***/ "../../stripe/lib/MultipartDataGenerator.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/MultipartDataGenerator.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const utils = __webpack_require__(/*! ./utils */ "../../stripe/lib/utils.js");

// Method for formatting HTTP body for the multipart/form-data specification
// Mostly taken from Fermata.js
// https://github.com/natevw/fermata/blob/5d9732a33d776ce925013a265935facd1626cc88/fermata.js#L315-L343
function multipartDataGenerator(method, data, headers) {
  const segno = (
    Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)
  ).toString();
  headers['Content-Type'] = `multipart/form-data; boundary=${segno}`;
  let buffer = Buffer.alloc(0);

  function push(l) {
    const prevBuffer = buffer;
    const newBuffer = l instanceof Buffer ? l : Buffer.from(l);
    buffer = Buffer.alloc(prevBuffer.length + newBuffer.length + 2);
    prevBuffer.copy(buffer);
    newBuffer.copy(buffer, prevBuffer.length);
    buffer.write('\r\n', buffer.length - 2);
  }

  function q(s) {
    return `"${s.replace(/"|"/g, '%22').replace(/\r\n|\r|\n/g, ' ')}"`;
  }

  for (const k in utils.flattenAndStringify(data)) {
    const v = data[k];
    push(`--${segno}`);
    if (v.hasOwnProperty('data')) {
      push(
        `Content-Disposition: form-data; name=${q(k)}; filename=${q(
          v.name || 'blob'
        )}`
      );
      push(`Content-Type: ${v.type || 'application/octet-stream'}`);
      push('');
      push(v.data);
    } else {
      push(`Content-Disposition: form-data; name=${q(k)}`);
      push('');
      push(v);
    }
  }
  push(`--${segno}--`);

  return buffer;
}

module.exports = multipartDataGenerator;


/***/ }),

/***/ "../../stripe/lib/ResourceNamespace.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/ResourceNamespace.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.
// It also works recursively, so you could do i.e. `stripe.billing.invoicing.pay`.

function ResourceNamespace(stripe, resources) {
  for (const name in resources) {
    const camelCaseName = name[0].toLowerCase() + name.substring(1);

    const resource = new resources[name](stripe);

    this[camelCaseName] = resource;
  }
}

module.exports = function(namespace, resources) {
  return function(stripe) {
    return new ResourceNamespace(stripe, resources);
  };
};

module.exports.ResourceNamespace = ResourceNamespace;


/***/ }),

/***/ "../../stripe/lib/StripeMethod.basic.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/StripeMethod.basic.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const stripeMethod = __webpack_require__(/*! ./StripeMethod */ "../../stripe/lib/StripeMethod.js");

module.exports = {
  create: stripeMethod({
    method: 'POST',
  }),

  list: stripeMethod({
    method: 'GET',
    methodType: 'list',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{id}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '{id}',
  }),

  // Avoid 'delete' keyword in JS
  del: stripeMethod({
    method: 'DELETE',
    path: '{id}',
  }),
};


/***/ }),

/***/ "../../stripe/lib/StripeMethod.js":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/StripeMethod.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const utils = __webpack_require__(/*! ./utils */ "../../stripe/lib/utils.js");
const makeRequest = __webpack_require__(/*! ./makeRequest */ "../../stripe/lib/makeRequest.js");
const makeAutoPaginationMethods = __webpack_require__(/*! ./autoPagination */ "../../stripe/lib/autoPagination.js")
  .makeAutoPaginationMethods;

/**
 * Create an API method from the declared spec.
 *
 * @param [spec.method='GET'] Request Method (POST, GET, DELETE, PUT)
 * @param [spec.path=''] Path to be appended to the API BASE_PATH, joined with
 *  the instance's path (e.g. 'charges' or 'customers')
 * @param [spec.urlParams=[]] Array of required arguments in the order that they
 *  must be passed by the consumer of the API. Subsequent optional arguments are
 *  optionally passed through a hash (Object) as the penultimate argument
 *  (preceding the also-optional callback argument
 * @param [spec.encode] Function for mutating input parameters to a method.
 *  Usefully for applying transforms to data on a per-method basis.
 * @param [spec.host] Hostname for the request.
 */
function stripeMethod(spec) {
  return function(...args) {
    const callback = typeof args[args.length - 1] == 'function' && args.pop();

    spec.urlParams = utils.extractUrlParams(
      this.createResourcePathWithSymbols(spec.path || '')
    );

    const requestPromise = utils.callbackifyPromiseWithTimeout(
      makeRequest(this, args, spec, {}),
      callback
    );

    if (spec.methodType === 'list') {
      const autoPaginationMethods = makeAutoPaginationMethods(
        this,
        args,
        spec,
        requestPromise
      );
      Object.assign(requestPromise, autoPaginationMethods);
    }

    return requestPromise;
  };
}

module.exports = stripeMethod;


/***/ }),

/***/ "../../stripe/lib/StripeResource.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/StripeResource.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const http = __webpack_require__(/*! http */ "http");
const https = __webpack_require__(/*! https */ "https");
const path = __webpack_require__(/*! path */ "path");

const utils = __webpack_require__(/*! ./utils */ "../../stripe/lib/utils.js");
const Error = __webpack_require__(/*! ./Error */ "../../stripe/lib/Error.js");

const defaultHttpAgent = new http.Agent({keepAlive: true});
const defaultHttpsAgent = new https.Agent({keepAlive: true});

// Provide extension mechanism for Stripe Resource Sub-Classes
StripeResource.extend = utils.protoExtend;

// Expose method-creator & prepared (basic) methods
StripeResource.method = __webpack_require__(/*! ./StripeMethod */ "../../stripe/lib/StripeMethod.js");
StripeResource.BASIC_METHODS = __webpack_require__(/*! ./StripeMethod.basic */ "../../stripe/lib/StripeMethod.basic.js");

StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;

/**
 * Encapsulates request logic for a Stripe Resource
 */
function StripeResource(stripe, deprecatedUrlData) {
  this._stripe = stripe;
  if (deprecatedUrlData) {
    throw new Error(
      'Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.'
    );
  }

  this.basePath = utils.makeURLInterpolator(
    this.basePath || stripe.getApiField('basePath')
  );
  this.resourcePath = this.path;
  this.path = utils.makeURLInterpolator(this.path);

  if (this.includeBasic) {
    this.includeBasic.forEach(function(methodName) {
      this[methodName] = StripeResource.BASIC_METHODS[methodName];
    }, this);
  }

  this.initialize(...arguments);
}

StripeResource.prototype = {
  path: '',

  // Methods that don't use the API's default '/v1' path can override it with this setting.
  basePath: null,

  initialize() {},

  // Function to override the default data processor. This allows full control
  // over how a StripeResource's request data will get converted into an HTTP
  // body. This is useful for non-standard HTTP requests. The function should
  // take method name, data, and headers as arguments.
  requestDataProcessor: null,

  // Function to add a validation checks before sending the request, errors should
  // be thrown, and they will be passed to the callback/promise.
  validateRequest: null,

  createFullPath(commandPath, urlData) {
    return path
      .join(
        this.basePath(urlData),
        this.path(urlData),
        typeof commandPath == 'function' ? commandPath(urlData) : commandPath
      )
      .replace(/\\/g, '/'); // ugly workaround for Windows
  },

  // Creates a relative resource path with symbols left in (unlike
  // createFullPath which takes some data to replace them with). For example it
  // might produce: /invoices/{id}
  createResourcePathWithSymbols(pathWithSymbols) {
    return `/${path
      .join(this.resourcePath, pathWithSymbols || '')
      .replace(/\\/g, '/')}`; // ugly workaround for Windows
  },

  // DEPRECATED: Here for backcompat in case users relied on this.
  wrapTimeout: utils.callbackifyPromiseWithTimeout,

  _timeoutHandler(timeout, req, callback) {
    return () => {
      const timeoutErr = new TypeError('ETIMEDOUT');
      timeoutErr.code = 'ETIMEDOUT';

      req._isAborted = true;
      req.abort();

      callback.call(
        this,
        new Error.StripeConnectionError({
          message: `Request aborted due to timeout being reached (${timeout}ms)`,
          detail: timeoutErr,
        }),
        null
      );
    };
  },

  _responseHandler(req, callback) {
    return (res) => {
      let response = '';

      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        response += chunk;
      });
      res.once('end', () => {
        const headers = res.headers || {};
        // NOTE: Stripe responds with lowercase header names/keys.

        // For convenience, make Request-Id easily accessible on
        // lastResponse.
        res.requestId = headers['request-id'];

        const requestDurationMs = Date.now() - req._requestStart;

        const responseEvent = utils.removeNullish({
          api_version: headers['stripe-version'],
          account: headers['stripe-account'],
          idempotency_key: headers['idempotency-key'],
          method: req._requestEvent.method,
          path: req._requestEvent.path,
          status: res.statusCode,
          request_id: res.requestId,
          elapsed: requestDurationMs,
        });

        this._stripe._emitter.emit('response', responseEvent);

        try {
          response = JSON.parse(response);

          if (response.error) {
            let err;

            // Convert OAuth error responses into a standard format
            // so that the rest of the error logic can be shared
            if (typeof response.error === 'string') {
              response.error = {
                type: response.error,
                message: response.error_description,
              };
            }

            response.error.headers = headers;
            response.error.statusCode = res.statusCode;
            response.error.requestId = res.requestId;

            if (res.statusCode === 401) {
              err = new Error.StripeAuthenticationError(response.error);
            } else if (res.statusCode === 403) {
              err = new Error.StripePermissionError(response.error);
            } else if (res.statusCode === 429) {
              err = new Error.StripeRateLimitError(response.error);
            } else {
              err = Error.StripeError.generate(response.error);
            }
            return callback.call(this, err, null);
          }
        } catch (e) {
          return callback.call(
            this,
            new Error.StripeAPIError({
              message: 'Invalid JSON received from the Stripe API',
              response,
              exception: e,
              requestId: headers['request-id'],
            }),
            null
          );
        }

        this._recordRequestMetrics(res.requestId, requestDurationMs);

        // Expose res object
        Object.defineProperty(response, 'lastResponse', {
          enumerable: false,
          writable: false,
          value: res,
        });
        callback.call(this, null, response);
      });
    };
  },

  _generateConnectionErrorMessage(requestRetries) {
    return `An error occurred with our connection to Stripe.${
      requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ''
    }`;
  },

  _errorHandler(req, requestRetries, callback) {
    return (error) => {
      if (req._isAborted) {
        // already handled
        return;
      }
      callback.call(
        this,
        new Error.StripeConnectionError({
          message: this._generateConnectionErrorMessage(requestRetries),
          detail: error,
        }),
        null
      );
    };
  },

  _shouldRetry(res, numRetries) {
    // Do not retry if we are out of retries.
    if (numRetries >= this._stripe.getMaxNetworkRetries()) {
      return false;
    }

    // Retry on connection error.
    if (!res) {
      return true;
    }

    // Retry on conflict and availability errors.
    if (res.statusCode === 409 || res.statusCode === 503) {
      return true;
    }

    // Retry on 5xx's, except POST's, which our idempotency framework
    // would just replay as 500's again anyway.
    if (res.statusCode >= 500 && res.req._requestEvent.method !== 'POST') {
      return true;
    }

    return false;
  },

  _getSleepTimeInMS(numRetries) {
    const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
    const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();

    // Apply exponential backoff with initialNetworkRetryDelay on the
    // number of numRetries so far as inputs. Do not allow the number to exceed
    // maxNetworkRetryDelay.
    let sleepSeconds = Math.min(
      initialNetworkRetryDelay * Math.pow(numRetries - 1, 2),
      maxNetworkRetryDelay
    );

    // Apply some jitter by randomizing the value in the range of
    // (sleepSeconds / 2) to (sleepSeconds).
    sleepSeconds *= 0.5 * (1 + Math.random());

    // But never sleep less than the base sleep seconds.
    sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);

    return sleepSeconds * 1000;
  },

  _defaultIdempotencyKey(method) {
    // If this is a POST and we allow multiple retries, ensure an idempotency key.
    if (method === 'POST' && this._stripe.getMaxNetworkRetries() > 0) {
      return `stripe-node-retry-${utils.uuid4()}`;
    }
    return null;
  },

  _makeHeaders(
    auth,
    contentLength,
    apiVersion,
    clientUserAgent,
    method,
    userSuppliedHeaders
  ) {
    const defaultHeaders = {
      // Use specified auth token or use default from this stripe instance:
      Authorization: auth ? `Bearer ${auth}` : this._stripe.getApiField('auth'),
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': contentLength,
      'User-Agent': this._getUserAgentString(),
      'X-Stripe-Client-User-Agent': clientUserAgent,
      'X-Stripe-Client-Telemetry': this._getTelemetryHeader(),
      'Stripe-Version': apiVersion,
      'Idempotency-Key': this._defaultIdempotencyKey(method),
    };

    return Object.assign(
      utils.removeNullish(defaultHeaders),
      // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
      utils.normalizeHeaders(userSuppliedHeaders)
    );
  },

  _getUserAgentString() {
    const packageVersion = this._stripe.getConstant('PACKAGE_VERSION');
    const appInfo = this._stripe._appInfo
      ? this._stripe.getAppInfoAsString()
      : '';

    return `Stripe/v1 NodeBindings/${packageVersion} ${appInfo}`.trim();
  },

  _getTelemetryHeader() {
    if (
      this._stripe.getTelemetryEnabled() &&
      this._stripe._prevRequestMetrics.length > 0
    ) {
      const metrics = this._stripe._prevRequestMetrics.shift();
      return JSON.stringify({
        last_request_metrics: metrics,
      });
    }
  },

  _recordRequestMetrics(requestId, requestDurationMs) {
    if (this._stripe.getTelemetryEnabled() && requestId) {
      if (
        this._stripe._prevRequestMetrics.length >
        StripeResource.MAX_BUFFERED_REQUEST_METRICS
      ) {
        utils.emitWarning(
          'Request metrics buffer is full, dropping telemetry message.'
        );
      } else {
        this._stripe._prevRequestMetrics.push({
          request_id: requestId,
          request_duration_ms: requestDurationMs,
        });
      }
    }
  },

  _request(method, host, path, data, auth, options, callback) {
    let requestData;

    const retryRequest = (requestFn, apiVersion, headers, requestRetries) => {
      return setTimeout(
        requestFn,
        this._getSleepTimeInMS(requestRetries),
        apiVersion,
        headers,
        requestRetries + 1
      );
    };

    const makeRequest = (apiVersion, headers, numRetries) => {
      const timeout = this._stripe.getApiField('timeout');
      const isInsecureConnection =
        this._stripe.getApiField('protocol') == 'http';
      let agent = this._stripe.getApiField('agent');
      if (agent == null) {
        agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
      }

      const req = (isInsecureConnection ? http : https).request({
        host: host || this._stripe.getApiField('host'),
        port: this._stripe.getApiField('port'),
        path,
        method,
        agent,
        headers,
        ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5',
      });

      const requestEvent = utils.removeNullish({
        api_version: apiVersion,
        account: headers['Stripe-Account'],
        idempotency_key: headers['Idempotency-Key'],
        method,
        path,
      });

      const requestRetries = numRetries || 0;

      req._requestEvent = requestEvent;

      req._requestStart = Date.now();

      this._stripe._emitter.emit('request', requestEvent);

      req.setTimeout(timeout, this._timeoutHandler(timeout, req, callback));

      req.once('response', (res) => {
        if (this._shouldRetry(res, requestRetries)) {
          return retryRequest(makeRequest, apiVersion, headers, requestRetries);
        } else {
          return this._responseHandler(req, callback)(res);
        }
      });

      req.on('error', (error) => {
        if (this._shouldRetry(null, requestRetries)) {
          return retryRequest(makeRequest, apiVersion, headers, requestRetries);
        } else {
          return this._errorHandler(req, requestRetries, callback)(error);
        }
      });

      req.once('socket', (socket) => {
        if (socket.connecting) {
          socket.once(
            isInsecureConnection ? 'connect' : 'secureConnect',
            () => {
              // Send payload; we're safe:
              req.write(requestData);
              req.end();
            }
          );
        } else {
          // we're already connected
          req.write(requestData);
          req.end();
        }
      });
    };

    const prepareAndMakeRequest = (error, data) => {
      if (error) {
        return callback(error);
      }

      requestData = data;

      this._stripe.getClientUserAgent((clientUserAgent) => {
        const apiVersion = this._stripe.getApiField('version');
        const headers = this._makeHeaders(
          auth,
          requestData.length,
          apiVersion,
          clientUserAgent,
          method,
          options.headers
        );

        makeRequest(apiVersion, headers);
      });
    };

    if (this.requestDataProcessor) {
      this.requestDataProcessor(
        method,
        data,
        options.headers,
        prepareAndMakeRequest
      );
    } else {
      prepareAndMakeRequest(null, utils.stringifyRequestData(data || {}));
    }
  },
};

module.exports = StripeResource;


/***/ }),

/***/ "../../stripe/lib/Webhooks.js":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/Webhooks.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const crypto = __webpack_require__(/*! crypto */ "crypto");

const utils = __webpack_require__(/*! ./utils */ "../../stripe/lib/utils.js");
const Error = __webpack_require__(/*! ./Error */ "../../stripe/lib/Error.js");

const Webhook = {
  DEFAULT_TOLERANCE: 300, // 5 minutes

  constructEvent(payload, header, secret, tolerance) {
    this.signature.verifyHeader(
      payload,
      header,
      secret,
      tolerance || Webhook.DEFAULT_TOLERANCE
    );

    const jsonPayload = JSON.parse(payload);
    return jsonPayload;
  },

  /**
   * Generates a header to be used for webhook mocking
   *
   * @typedef {object} opts
   * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
   * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
   * @property {string} secret - Stripe webhook secret 'whsec_...'
   * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
   * @property {string} signature - Computed webhook signature
   */
  generateTestHeaderString: function(opts) {
    if (!opts) {
      throw new Error.StripeError({
        message: 'Options are required',
      });
    }

    opts.timestamp =
      Math.floor(opts.timestamp) || Math.floor(Date.now() / 1000);
    opts.scheme = opts.scheme || signature.EXPECTED_SCHEME;

    opts.signature =
      opts.signature ||
      signature._computeSignature(
        opts.timestamp + '.' + opts.payload,
        opts.secret
      );

    var generatedHeader = [
      't=' + opts.timestamp,
      opts.scheme + '=' + opts.signature,
    ].join(',');

    return generatedHeader;
  },
};

const signature = {
  EXPECTED_SCHEME: 'v1',

  _computeSignature: (payload, secret) => {
    return crypto
      .createHmac('sha256', secret)
      .update(payload, 'utf8')
      .digest('hex');
  },

  verifyHeader(payload, header, secret, tolerance) {
    payload = Buffer.isBuffer(payload) ? payload.toString('utf8') : payload;
    header = Buffer.isBuffer(header) ? header.toString('utf8') : header;

    const details = parseHeader(header, this.EXPECTED_SCHEME);

    if (!details || details.timestamp === -1) {
      throw new Error.StripeSignatureVerificationError({
        message: 'Unable to extract timestamp and signatures from header',
        detail: {
          header,
          payload,
        },
      });
    }

    if (!details.signatures.length) {
      throw new Error.StripeSignatureVerificationError({
        message: 'No signatures found with expected scheme',
        detail: {
          header,
          payload,
        },
      });
    }

    const expectedSignature = this._computeSignature(
      `${details.timestamp}.${payload}`,
      secret
    );

    const signatureFound = !!details.signatures.filter(
      utils.secureCompare.bind(utils, expectedSignature)
    ).length;

    if (!signatureFound) {
      throw new Error.StripeSignatureVerificationError({
        message:
          'No signatures found matching the expected signature for payload.' +
          ' Are you passing the raw request body you received from Stripe?' +
          ' https://github.com/stripe/stripe-node#webhook-signing',
        detail: {
          header,
          payload,
        },
      });
    }

    const timestampAge = Math.floor(Date.now() / 1000) - details.timestamp;

    if (tolerance > 0 && timestampAge > tolerance) {
      throw new Error.StripeSignatureVerificationError({
        message: 'Timestamp outside the tolerance zone',
        detail: {
          header,
          payload,
        },
      });
    }

    return true;
  },
};

function parseHeader(header, scheme) {
  if (typeof header !== 'string') {
    return null;
  }

  return header.split(',').reduce(
    (accum, item) => {
      const kv = item.split('=');

      if (kv[0] === 't') {
        accum.timestamp = kv[1];
      }

      if (kv[0] === scheme) {
        accum.signatures.push(kv[1]);
      }

      return accum;
    },
    {
      timestamp: -1,
      signatures: [],
    }
  );
}

Webhook.signature = signature;

module.exports = Webhook;


/***/ }),

/***/ "../../stripe/lib/autoPagination.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/autoPagination.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const makeRequest = __webpack_require__(/*! ./makeRequest */ "../../stripe/lib/makeRequest.js");
const utils = __webpack_require__(/*! ./utils */ "../../stripe/lib/utils.js");

function makeAutoPaginationMethods(self, requestArgs, spec, firstPagePromise) {
  const promiseCache = {currentPromise: null};
  let listPromise = firstPagePromise;
  let i = 0;

  function iterate(listResult) {
    if (
      !(
        listResult &&
        listResult.data &&
        typeof listResult.data.length === 'number'
      )
    ) {
      throw Error(
        'Unexpected: Stripe API response does not have a well-formed `data` array.'
      );
    }

    if (i < listResult.data.length) {
      const value = listResult.data[i];
      i += 1;
      return {value, done: false};
    } else if (listResult.has_more) {
      // Reset counter, request next page, and recurse.
      i = 0;
      const lastId = getLastId(listResult);
      listPromise = makeRequest(self, requestArgs, spec, {
        starting_after: lastId,
      });
      return listPromise.then(iterate);
    }
    return {value: undefined, done: true};
  }

  function asyncIteratorNext() {
    return memoizedPromise(promiseCache, (resolve, reject) => {
      return listPromise
        .then(iterate)
        .then(resolve)
        .catch(reject);
    });
  }

  const autoPagingEach = makeAutoPagingEach(asyncIteratorNext);
  const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);

  const autoPaginationMethods = {
    autoPagingEach,
    autoPagingToArray,

    // Async iterator functions:
    next: asyncIteratorNext,
    return: () => {
      // This is required for `break`.
      return {};
    },
    [getAsyncIteratorSymbol()]: () => {
      return autoPaginationMethods;
    },
  };
  return autoPaginationMethods;
}

module.exports.makeAutoPaginationMethods = makeAutoPaginationMethods;

/**
 * ----------------
 * Private Helpers:
 * ----------------
 */

function getAsyncIteratorSymbol() {
  if (typeof Symbol !== 'undefined' && Symbol.asyncIterator) {
    return Symbol.asyncIterator;
  }
  // Follow the convention from libraries like iterall: https://github.com/leebyron/iterall#asynciterator-1
  return '@@asyncIterator';
}

function getDoneCallback(args) {
  if (args.length < 2) {
    return undefined;
  }
  const onDone = args[1];
  if (typeof onDone !== 'function') {
    throw Error(
      `The second argument to autoPagingEach, if present, must be a callback function; receieved ${typeof onDone}`
    );
  }
  return onDone;
}

/**
 * We allow four forms of the `onItem` callback (the middle two being equivalent),
 *
 *   1. `.autoPagingEach((item) => { doSomething(item); return false; });`
 *   2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
 *   3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
 *   4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
 *
 * In addition to standard validation, this helper
 * coalesces the former forms into the latter form.
 */
function getItemCallback(args) {
  if (args.length === 0) {
    return undefined;
  }
  const onItem = args[0];
  if (typeof onItem !== 'function') {
    throw Error(
      `The first argument to autoPagingEach, if present, must be a callback function; receieved ${typeof onItem}`
    );
  }

  // 4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
  if (onItem.length === 2) {
    return onItem;
  }

  if (onItem.length > 2) {
    throw Error(
      `The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`
    );
  }

  // This magically handles all three of these usecases (the latter two being functionally identical):
  // 1. `.autoPagingEach((item) => { doSomething(item); return false; });`
  // 2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
  // 3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
  return function _onItem(item, next) {
    const shouldContinue = onItem(item);
    next(shouldContinue);
  };
}

function getLastId(listResult) {
  const lastIdx = listResult.data.length - 1;
  const lastItem = listResult.data[lastIdx];
  const lastId = lastItem && lastItem.id;
  if (!lastId) {
    throw Error(
      'Unexpected: No `id` found on the last item while auto-paging a list.'
    );
  }
  return lastId;
}

/**
 * If a user calls `.next()` multiple times in parallel,
 * return the same result until something has resolved
 * to prevent page-turning race conditions.
 */
function memoizedPromise(promiseCache, cb) {
  if (promiseCache.currentPromise) {
    return promiseCache.currentPromise;
  }
  promiseCache.currentPromise = new Promise(cb).then((ret) => {
    promiseCache.currentPromise = undefined;
    return ret;
  });
  return promiseCache.currentPromise;
}

function makeAutoPagingEach(asyncIteratorNext) {
  return function autoPagingEach(/* onItem?, onDone? */) {
    const args = [].slice.call(arguments);
    const onItem = getItemCallback(args);
    const onDone = getDoneCallback(args);
    if (args.length > 2) {
      throw Error('autoPagingEach takes up to two arguments; received:', args);
    }

    const autoPagePromise = wrapAsyncIteratorWithCallback(
      asyncIteratorNext,
      onItem
    );
    return utils.callbackifyPromiseWithTimeout(autoPagePromise, onDone);
  };
}

function makeAutoPagingToArray(autoPagingEach) {
  return function autoPagingToArray(opts, onDone) {
    const limit = opts && opts.limit;
    if (!limit) {
      throw Error(
        'You must pass a `limit` option to autoPagingToArray, eg; `autoPagingToArray({limit: 1000});`.'
      );
    }
    if (limit > 10000) {
      throw Error(
        'You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.'
      );
    }
    const promise = new Promise((resolve, reject) => {
      const items = [];
      autoPagingEach((item) => {
        items.push(item);
        if (items.length >= limit) {
          return false;
        }
      })
        .then(() => {
          resolve(items);
        })
        .catch(reject);
    });
    return utils.callbackifyPromiseWithTimeout(promise, onDone);
  };
}

function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
  return new Promise((resolve, reject) => {
    function handleIteration(iterResult) {
      if (iterResult.done) {
        resolve();
        return;
      }

      const item = iterResult.value;
      return new Promise((next) => {
        // Bit confusing, perhaps; we pass a `resolve` fn
        // to the user, so they can decide when and if to continue.
        // They can return false, or a promise which resolves to false, to break.
        onItem(item, next);
      }).then((shouldContinue) => {
        if (shouldContinue === false) {
          return handleIteration({done: true});
        } else {
          return asyncIteratorNext().then(handleIteration);
        }
      });
    }

    asyncIteratorNext()
      .then(handleIteration)
      .catch(reject);
  });
}


/***/ }),

/***/ "../../stripe/lib/makeRequest.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/makeRequest.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const utils = __webpack_require__(/*! ./utils */ "../../stripe/lib/utils.js");

function getRequestOpts(self, requestArgs, spec, overrideData) {
  // Extract spec values with defaults.
  const commandPath = utils.makeURLInterpolator(spec.path || '');
  const requestMethod = (spec.method || 'GET').toUpperCase();
  const urlParams = spec.urlParams || [];
  const encode = spec.encode || ((data) => data);
  const host = spec.host;
  const path = self.createResourcePathWithSymbols(spec.path);

  // Don't mutate args externally.
  const args = [].slice.call(requestArgs);

  // Generate and validate url params.
  const urlData = urlParams.reduce((urlData, param) => {
    const arg = args.shift();
    if (typeof arg !== 'string') {
      throw new Error(
        `Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`
      );
    }

    urlData[param] = arg;
    return urlData;
  }, {});

  // Pull request data and options (headers, auth) from args.
  const dataFromArgs = utils.getDataFromArgs(args);
  const data = encode(Object.assign({}, dataFromArgs, overrideData));
  const options = utils.getOptionsFromArgs(args);

  // Validate that there are no more args.
  if (args.length) {
    throw new Error(
      `Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`
    );
  }

  const requestPath = self.createFullPath(commandPath, urlData);
  const headers = Object.assign(options.headers, spec.headers);

  if (spec.validator) {
    spec.validator(data, {headers});
  }

  return {
    requestMethod,
    requestPath,
    data,
    auth: options.auth,
    headers,
    host,
  };
}

function makeRequest(self, requestArgs, spec, overrideData) {
  return new Promise((resolve, reject) => {
    try {
      var opts = getRequestOpts(self, requestArgs, spec, overrideData);
    } catch (err) {
      reject(err);
      return;
    }

    function requestCallback(err, response) {
      if (err) {
        reject(err);
      } else {
        resolve(
          spec.transformResponseData
            ? spec.transformResponseData(response)
            : response
        );
      }
    }

    self._request(
      opts.requestMethod,
      opts.host,
      opts.requestPath,
      opts.data,
      opts.auth,
      {headers: opts.headers},
      requestCallback
    );
  });
}

module.exports = makeRequest;


/***/ }),

/***/ "../../stripe/lib/resources.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const resourceNamespace = __webpack_require__(/*! ./ResourceNamespace */ "../../stripe/lib/ResourceNamespace.js");

module.exports = {
  Accounts: __webpack_require__(/*! ./resources/Accounts */ "../../stripe/lib/resources/Accounts.js"),
  // Support Accounts for consistency, Account for backwards compatibility
  Account: __webpack_require__(/*! ./resources/Accounts */ "../../stripe/lib/resources/Accounts.js"),
  AccountLinks: __webpack_require__(/*! ./resources/AccountLinks */ "../../stripe/lib/resources/AccountLinks.js"),
  ApplePayDomains: __webpack_require__(/*! ./resources/ApplePayDomains */ "../../stripe/lib/resources/ApplePayDomains.js"),
  ApplicationFees: __webpack_require__(/*! ./resources/ApplicationFees */ "../../stripe/lib/resources/ApplicationFees.js"),
  Balance: __webpack_require__(/*! ./resources/Balance */ "../../stripe/lib/resources/Balance.js"),
  BalanceTransactions: __webpack_require__(/*! ./resources/BalanceTransactions */ "../../stripe/lib/resources/BalanceTransactions.js"),
  BitcoinReceivers: __webpack_require__(/*! ./resources/BitcoinReceivers */ "../../stripe/lib/resources/BitcoinReceivers.js"),
  Charges: __webpack_require__(/*! ./resources/Charges */ "../../stripe/lib/resources/Charges.js"),
  CountrySpecs: __webpack_require__(/*! ./resources/CountrySpecs */ "../../stripe/lib/resources/CountrySpecs.js"),
  Coupons: __webpack_require__(/*! ./resources/Coupons */ "../../stripe/lib/resources/Coupons.js"),
  CreditNotes: __webpack_require__(/*! ./resources/CreditNotes */ "../../stripe/lib/resources/CreditNotes.js"),
  Customers: __webpack_require__(/*! ./resources/Customers */ "../../stripe/lib/resources/Customers.js"),
  Disputes: __webpack_require__(/*! ./resources/Disputes */ "../../stripe/lib/resources/Disputes.js"),
  EphemeralKeys: __webpack_require__(/*! ./resources/EphemeralKeys */ "../../stripe/lib/resources/EphemeralKeys.js"),
  Events: __webpack_require__(/*! ./resources/Events */ "../../stripe/lib/resources/Events.js"),
  ExchangeRates: __webpack_require__(/*! ./resources/ExchangeRates */ "../../stripe/lib/resources/ExchangeRates.js"),
  Files: __webpack_require__(/*! ./resources/Files */ "../../stripe/lib/resources/Files.js"),
  FileLinks: __webpack_require__(/*! ./resources/FileLinks */ "../../stripe/lib/resources/FileLinks.js"),
  Invoices: __webpack_require__(/*! ./resources/Invoices */ "../../stripe/lib/resources/Invoices.js"),
  InvoiceItems: __webpack_require__(/*! ./resources/InvoiceItems */ "../../stripe/lib/resources/InvoiceItems.js"),
  IssuerFraudRecords: __webpack_require__(/*! ./resources/IssuerFraudRecords */ "../../stripe/lib/resources/IssuerFraudRecords.js"),
  OAuth: __webpack_require__(/*! ./resources/OAuth */ "../../stripe/lib/resources/OAuth.js"),
  Orders: __webpack_require__(/*! ./resources/Orders */ "../../stripe/lib/resources/Orders.js"),
  OrderReturns: __webpack_require__(/*! ./resources/OrderReturns */ "../../stripe/lib/resources/OrderReturns.js"),
  PaymentIntents: __webpack_require__(/*! ./resources/PaymentIntents */ "../../stripe/lib/resources/PaymentIntents.js"),
  PaymentMethods: __webpack_require__(/*! ./resources/PaymentMethods */ "../../stripe/lib/resources/PaymentMethods.js"),
  Payouts: __webpack_require__(/*! ./resources/Payouts */ "../../stripe/lib/resources/Payouts.js"),
  Plans: __webpack_require__(/*! ./resources/Plans */ "../../stripe/lib/resources/Plans.js"),
  Products: __webpack_require__(/*! ./resources/Products */ "../../stripe/lib/resources/Products.js"),
  Recipients: __webpack_require__(/*! ./resources/Recipients */ "../../stripe/lib/resources/Recipients.js"),
  Refunds: __webpack_require__(/*! ./resources/Refunds */ "../../stripe/lib/resources/Refunds.js"),
  Reviews: __webpack_require__(/*! ./resources/Reviews */ "../../stripe/lib/resources/Reviews.js"),
  SetupIntents: __webpack_require__(/*! ./resources/SetupIntents */ "../../stripe/lib/resources/SetupIntents.js"),
  Skus: __webpack_require__(/*! ./resources/SKUs */ "../../stripe/lib/resources/SKUs.js"),
  Sources: __webpack_require__(/*! ./resources/Sources */ "../../stripe/lib/resources/Sources.js"),
  Subscriptions: __webpack_require__(/*! ./resources/Subscriptions */ "../../stripe/lib/resources/Subscriptions.js"),
  SubscriptionItems: __webpack_require__(/*! ./resources/SubscriptionItems */ "../../stripe/lib/resources/SubscriptionItems.js"),
  SubscriptionSchedules: __webpack_require__(/*! ./resources/SubscriptionSchedules */ "../../stripe/lib/resources/SubscriptionSchedules.js"),
  TaxRates: __webpack_require__(/*! ./resources/TaxRates */ "../../stripe/lib/resources/TaxRates.js"),
  ThreeDSecure: __webpack_require__(/*! ./resources/ThreeDSecure */ "../../stripe/lib/resources/ThreeDSecure.js"),
  Tokens: __webpack_require__(/*! ./resources/Tokens */ "../../stripe/lib/resources/Tokens.js"),
  Topups: __webpack_require__(/*! ./resources/Topups */ "../../stripe/lib/resources/Topups.js"),
  Transfers: __webpack_require__(/*! ./resources/Transfers */ "../../stripe/lib/resources/Transfers.js"),
  UsageRecords: __webpack_require__(/*! ./resources/UsageRecords */ "../../stripe/lib/resources/UsageRecords.js"),
  UsageRecordSummaries: __webpack_require__(/*! ./resources/UsageRecordSummaries */ "../../stripe/lib/resources/UsageRecordSummaries.js"),
  WebhookEndpoints: __webpack_require__(/*! ./resources/WebhookEndpoints */ "../../stripe/lib/resources/WebhookEndpoints.js"),
  Checkout: resourceNamespace('checkout', {
    Sessions: __webpack_require__(/*! ./resources/Checkout/Sessions */ "../../stripe/lib/resources/Checkout/Sessions.js"),
  }),
  Issuing: resourceNamespace('issuing', {
    Authorizations: __webpack_require__(/*! ./resources/Issuing/Authorizations */ "../../stripe/lib/resources/Issuing/Authorizations.js"),
    Cards: __webpack_require__(/*! ./resources/Issuing/Cards */ "../../stripe/lib/resources/Issuing/Cards.js"),
    Cardholders: __webpack_require__(/*! ./resources/Issuing/Cardholders */ "../../stripe/lib/resources/Issuing/Cardholders.js"),
    Disputes: __webpack_require__(/*! ./resources/Issuing/Disputes */ "../../stripe/lib/resources/Issuing/Disputes.js"),
    Transactions: __webpack_require__(/*! ./resources/Issuing/Transactions */ "../../stripe/lib/resources/Issuing/Transactions.js"),
  }),
  Radar: resourceNamespace('radar', {
    EarlyFraudWarnings: __webpack_require__(/*! ./resources/Radar/EarlyFraudWarnings */ "../../stripe/lib/resources/Radar/EarlyFraudWarnings.js"),
    ValueLists: __webpack_require__(/*! ./resources/Radar/ValueLists */ "../../stripe/lib/resources/Radar/ValueLists.js"),
    ValueListItems: __webpack_require__(/*! ./resources/Radar/ValueListItems */ "../../stripe/lib/resources/Radar/ValueListItems.js"),
  }),
  Reporting: resourceNamespace('reporting', {
    ReportRuns: __webpack_require__(/*! ./resources/Reporting/ReportRuns */ "../../stripe/lib/resources/Reporting/ReportRuns.js"),
    ReportTypes: __webpack_require__(/*! ./resources/Reporting/ReportTypes */ "../../stripe/lib/resources/Reporting/ReportTypes.js"),
  }),
  Sigma: resourceNamespace('sigma', {
    ScheduledQueryRuns: __webpack_require__(/*! ./resources/Sigma/ScheduledQueryRuns */ "../../stripe/lib/resources/Sigma/ScheduledQueryRuns.js"),
  }),
  Terminal: resourceNamespace('terminal', {
    ConnectionTokens: __webpack_require__(/*! ./resources/Terminal/ConnectionTokens */ "../../stripe/lib/resources/Terminal/ConnectionTokens.js"),
    Locations: __webpack_require__(/*! ./resources/Terminal/Locations */ "../../stripe/lib/resources/Terminal/Locations.js"),
    Readers: __webpack_require__(/*! ./resources/Terminal/Readers */ "../../stripe/lib/resources/Terminal/Readers.js"),
  }),
};


/***/ }),

/***/ "../../stripe/lib/resources/AccountLinks.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/AccountLinks.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'account_links',

  includeBasic: ['create'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Accounts.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Accounts.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

// Since path can either be `account` or `accounts`, support both through stripeMethod path;
module.exports = StripeResource.extend({
  path: '',

  reject: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/reject',
  }),

  create: stripeMethod({
    method: 'POST',
    path: 'accounts',
  }),

  list: stripeMethod({
    method: 'GET',
    path: 'accounts',
    methodType: 'list',
  }),

  update: stripeMethod({
    method: 'POST',
    path: 'accounts/{id}',
  }),

  // Avoid 'delete' keyword in JS
  del: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{id}',
  }),

  retrieve(id) {
    // No longer allow an api key to be passed as the first string to this function due to ambiguity between
    // old account ids and api keys. To request the account for an api key, send null as the id
    if (typeof id === 'string') {
      return stripeMethod({
        method: 'GET',
        path: 'accounts/{id}',
      }).apply(this, arguments);
    } else {
      if (id === null || id === undefined) {
        // Remove id as stripeMethod would complain of unexpected argument
        [].shift.apply(arguments);
      }
      return stripeMethod({
        method: 'GET',
        path: 'account',
      }).apply(this, arguments);
    }
  },

  createLoginLink: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/login_links',
  }),

  listCapabilities: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/capabilities',
    methodType: 'list',
  }),

  retrieveCapability: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/capabilities/{capability}',
  }),

  updateCapability: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/capabilities/{capability}',
  }),

  createExternalAccount: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/external_accounts',
  }),

  deleteExternalAccount: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{account}/external_accounts/{id}',
  }),

  listExternalAccounts: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/external_accounts',
    methodType: 'list',
  }),

  retrieveExternalAccount: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/external_accounts/{id}',
  }),

  updateExternalAccount: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/external_accounts/{id}',
  }),

  createPerson: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/persons',
  }),

  deletePerson: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{account}/persons/{person}',
  }),

  listPersons: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/persons',
    methodType: 'list',
  }),

  retrievePerson: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/persons/{person}',
  }),

  updatePerson: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/persons/{person}',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/ApplePayDomains.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/ApplePayDomains.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'apple_pay/domains',

  includeBasic: ['create', 'del', 'list', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/ApplicationFees.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/ApplicationFees.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'application_fees',

  includeBasic: ['list', 'retrieve'],

  createRefund: stripeMethod({
    method: 'POST',
    path: '/{id}/refunds',
  }),

  listRefunds: stripeMethod({
    method: 'GET',
    path: '/{id}/refunds',
    methodType: 'list',
  }),

  retrieveRefund: stripeMethod({
    method: 'GET',
    path: '/{fee}/refunds/{id}',
  }),

  updateRefund: stripeMethod({
    method: 'POST',
    path: '/{fee}/refunds/{id}',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Balance.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Balance.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'balance',

  retrieve: stripeMethod({
    method: 'GET',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/BalanceTransactions.js":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/BalanceTransactions.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'balance_transactions',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/BitcoinReceivers.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/BitcoinReceivers.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'bitcoin/receivers',

  includeBasic: ['list', 'retrieve'],

  listTransactions: stripeMethod({
    method: 'GET',
    path: '/{receiver}/transactions',
    methodType: 'list',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Charges.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Charges.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'charges',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  capture: stripeMethod({
    method: 'POST',
    path: '/{charge}/capture',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Checkout/Sessions.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Checkout/Sessions.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'checkout/sessions',

  includeBasic: ['create', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/CountrySpecs.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/CountrySpecs.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'country_specs',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Coupons.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Coupons.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'coupons',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/CreditNotes.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/CreditNotes.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'credit_notes',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  voidCreditNote: stripeMethod({
    method: 'POST',
    path: '/{id}/void',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Customers.js":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Customers.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'customers',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/discount',
  }),

  updateSource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources/{id}',
  }),

  deleteSource: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/sources/{id}',
  }),

  verifySource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources/{sourceId}/verify',
  }),

  createBalanceTransaction: stripeMethod({
    method: 'POST',
    path: '/{customer}/balance_transactions',
  }),

  listBalanceTransactions: stripeMethod({
    method: 'GET',
    path: '/{customer}/balance_transactions',
    methodType: 'list',
  }),

  retrieveBalanceTransaction: stripeMethod({
    method: 'GET',
    path: '/{customer}/balance_transactions/{transaction}',
  }),

  updateBalanceTransaction: stripeMethod({
    method: 'POST',
    path: '/{customer}/balance_transactions/{transaction}',
  }),

  createSource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources',
  }),

  listSources: stripeMethod({
    method: 'GET',
    path: '/{customer}/sources',
    methodType: 'list',
  }),

  retrieveSource: stripeMethod({
    method: 'GET',
    path: '/{customer}/sources/{id}',
  }),

  createTaxId: stripeMethod({
    method: 'POST',
    path: '/{customer}/tax_ids',
  }),

  deleteTaxId: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/tax_ids/{id}',
  }),

  listTaxIds: stripeMethod({
    method: 'GET',
    path: '/{customer}/tax_ids',
    methodType: 'list',
  }),

  retrieveTaxId: stripeMethod({
    method: 'GET',
    path: '/{customer}/tax_ids/{id}',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Disputes.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Disputes.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'disputes',

  includeBasic: ['list', 'retrieve', 'update'],

  close: stripeMethod({
    method: 'POST',
    path: '/{dispute}/close',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/EphemeralKeys.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/EphemeralKeys.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'ephemeral_keys',

  includeBasic: ['del'],

  create: stripeMethod({
    method: 'POST',
    validator: (data, options) => {
      if (!options.headers || !options.headers['Stripe-Version']) {
        throw new Error(
          'stripe_version must be specified to create an ephemeral key'
        );
      }
    },
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Events.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Events.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'events',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/ExchangeRates.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/ExchangeRates.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'exchange_rates',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/FileLinks.js":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/FileLinks.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'file_links',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Files.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Files.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const utils = __webpack_require__(/*! ../utils */ "../../stripe/lib/utils.js");
const multipartDataGenerator = __webpack_require__(/*! ../MultipartDataGenerator */ "../../stripe/lib/MultipartDataGenerator.js");
const {StripeError} = __webpack_require__(/*! ../Error */ "../../stripe/lib/Error.js");
const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

class StreamProcessingError extends StripeError {}

module.exports = StripeResource.extend({
  path: 'files',

  includeBasic: ['list', 'retrieve'],

  requestDataProcessor(method, data, headers, callback) {
    data = data || {};

    if (method === 'POST') {
      return getProcessorForSourceType(data);
    } else {
      return callback(null, utils.stringifyRequestData(data));
    }

    function getProcessorForSourceType(data) {
      const isStream = utils.checkForStream(data);
      if (isStream) {
        return streamProcessor(multipartDataGenerator);
      } else {
        const buffer = multipartDataGenerator(method, data, headers);
        return callback(null, buffer);
      }
    }

    function streamProcessor(fn) {
      const bufferArray = [];
      data.file.data
        .on('data', (line) => {
          bufferArray.push(line);
        })
        .once('end', () => {
          const bufferData = Object.assign({}, data);
          bufferData.file.data = Buffer.concat(bufferArray);
          const buffer = fn(method, bufferData, headers);
          callback(null, buffer);
        })
        .on('error', (err) => {
          const errorHandler = streamError(callback);
          errorHandler(err);
        });
    }

    function streamError(callback) {
      return (error) => {
        callback(
          new StreamProcessingError({
            message:
              'An error occurred while attempting to process the file for upload.',
            detail: error,
          }),
          null
        );
      };
    }
  },

  create: stripeMethod({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    host: 'files.stripe.com',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/InvoiceItems.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/InvoiceItems.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'invoiceitems',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Invoices.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Invoices.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'invoices',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  finalizeInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/finalize',
  }),

  markUncollectible: stripeMethod({
    method: 'POST',
    path: '/{invoice}/mark_uncollectible',
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '/{invoice}/pay',
  }),

  sendInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/send',
  }),

  voidInvoice: stripeMethod({
    method: 'POST',
    path: '/{invoice}/void',
  }),

  listUpcomingLineItems: stripeMethod({
    method: 'GET',
    path: 'upcoming/lines',
    methodType: 'list',
  }),

  retrieveUpcoming: stripeMethod({
    method: 'GET',
    path: 'upcoming',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{invoice}/lines',
    methodType: 'list',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/IssuerFraudRecords.js":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/IssuerFraudRecords.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'issuer_fraud_records',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Issuing/Authorizations.js":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Issuing/Authorizations.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuing/authorizations',

  includeBasic: ['list', 'retrieve', 'update'],

  approve: stripeMethod({
    method: 'POST',
    path: '/{authorization}/approve',
  }),

  decline: stripeMethod({
    method: 'POST',
    path: '/{authorization}/decline',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Issuing/Cardholders.js":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Issuing/Cardholders.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'issuing/cardholders',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Issuing/Cards.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Issuing/Cards.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuing/cards',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  retrieveDetails: stripeMethod({
    method: 'GET',
    path: '/{card}/details',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Issuing/Disputes.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Issuing/Disputes.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'issuing/disputes',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Issuing/Transactions.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Issuing/Transactions.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'issuing/transactions',

  includeBasic: ['list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/OAuth.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/OAuth.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;
const utils = __webpack_require__(/*! ../utils */ "../../stripe/lib/utils.js");

const oAuthHost = 'connect.stripe.com';

module.exports = StripeResource.extend({
  basePath: '/',

  authorizeUrl(params, options) {
    params = params || {};
    options = options || {};

    let path = 'oauth/authorize';

    // For Express accounts, the path changes
    if (options.express) {
      path = `express/${path}`;
    }

    if (!params.response_type) {
      params.response_type = 'code';
    }

    if (!params.client_id) {
      params.client_id = this._stripe.getClientId();
    }

    if (!params.scope) {
      params.scope = 'read_write';
    }

    return `https://${oAuthHost}/${path}?${utils.stringifyRequestData(params)}`;
  },

  token: stripeMethod({
    method: 'POST',
    path: 'oauth/token',
    host: oAuthHost,
  }),

  deauthorize(spec) {
    if (!spec.client_id) {
      spec.client_id = this._stripe.getClientId();
    }

    return stripeMethod({
      method: 'POST',
      path: 'oauth/deauthorize',
      host: oAuthHost,
    }).apply(this, arguments);
  },
});


/***/ }),

/***/ "../../stripe/lib/resources/OrderReturns.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/OrderReturns.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'order_returns',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Orders.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Orders.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'orders',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  pay: stripeMethod({
    method: 'POST',
    path: '/{id}/pay',
  }),

  returnOrder: stripeMethod({
    method: 'POST',
    path: '/{id}/returns',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/PaymentIntents.js":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/PaymentIntents.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payment_intents',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{intent}/cancel',
  }),

  capture: stripeMethod({
    method: 'POST',
    path: '/{intent}/capture',
  }),

  confirm: stripeMethod({
    method: 'POST',
    path: '/{intent}/confirm',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/PaymentMethods.js":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/PaymentMethods.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payment_methods',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  attach: stripeMethod({
    method: 'POST',
    path: '/{paymentMethod}/attach',
  }),

  detach: stripeMethod({
    method: 'POST',
    path: '/{paymentMethod}/detach',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Payouts.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Payouts.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payouts',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{payout}/cancel',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Plans.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Plans.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'plans',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Products.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Products.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'products',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Radar/EarlyFraudWarnings.js":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Radar/EarlyFraudWarnings.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'radar/early_fraud_warnings',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Radar/ValueListItems.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Radar/ValueListItems.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'radar/value_list_items',

  includeBasic: ['create', 'del', 'list', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Radar/ValueLists.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Radar/ValueLists.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'radar/value_lists',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Recipients.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Recipients.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'recipients',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],

  createCard: stripeMethod({
    method: 'POST',
    path: '/{id}/cards',
  }),

  listCards: stripeMethod({
    method: 'GET',
    path: '/{id}/cards',
    methodType: 'list',
  }),

  retrieveCard: stripeMethod({
    method: 'GET',
    path: '/{recipientId}/cards/{cardId}',
  }),

  updateCard: stripeMethod({
    method: 'POST',
    path: '/{recipientId}/cards/{cardId}',
  }),

  deleteCard: stripeMethod({
    method: 'DELETE',
    path: '/{recipientId}/cards/{cardId}',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Refunds.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Refunds.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'refunds',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Reporting/ReportRuns.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Reporting/ReportRuns.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'reporting/report_runs',

  includeBasic: ['create', 'list', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Reporting/ReportTypes.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Reporting/ReportTypes.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'reporting/report_types',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Reviews.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Reviews.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'reviews',

  includeBasic: ['list', 'retrieve'],

  approve: stripeMethod({
    method: 'POST',
    path: '/{review}/approve',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/SKUs.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/SKUs.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'skus',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/SetupIntents.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/SetupIntents.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'setup_intents',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{intent}/cancel',
  }),

  confirm: stripeMethod({
    method: 'POST',
    path: '/{intent}/confirm',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Sigma/ScheduledQueryRuns.js":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Sigma/ScheduledQueryRuns.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'sigma/scheduled_query_runs',

  includeBasic: ['list', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Sources.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Sources.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'sources',

  includeBasic: ['create', 'retrieve', 'update'],

  verify: stripeMethod({
    method: 'POST',
    path: '/{source}/verify',
  }),

  listSourceTransactions: stripeMethod({
    method: 'GET',
    path: '/{source}/source_transactions',
    methodType: 'list',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/SubscriptionItems.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/SubscriptionItems.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'subscription_items',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/SubscriptionSchedules.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/SubscriptionSchedules.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscription_schedules',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{schedule}/cancel',
  }),

  release: stripeMethod({
    method: 'POST',
    path: '/{schedule}/release',
  }),

  listRevisions: stripeMethod({
    method: 'GET',
    path: '/{schedule}/revisions',
    methodType: 'list',
  }),

  retrieveRevision: stripeMethod({
    method: 'GET',
    path: '/{schedule}/revisions/{revision}',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Subscriptions.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Subscriptions.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscriptions',

  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{subscriptionExposedId}/discount',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/TaxRates.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/TaxRates.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'tax_rates',

  includeBasic: ['create', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Terminal/ConnectionTokens.js":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Terminal/ConnectionTokens.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'terminal/connection_tokens',

  includeBasic: ['create'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Terminal/Locations.js":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Terminal/Locations.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'terminal/locations',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Terminal/Readers.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Terminal/Readers.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'terminal/readers',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/resources/ThreeDSecure.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/ThreeDSecure.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: '3d_secure',

  includeBasic: ['create', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Tokens.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Tokens.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'tokens',

  includeBasic: ['create', 'retrieve'],
});


/***/ }),

/***/ "../../stripe/lib/resources/Topups.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Topups.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'topups',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  cancel: stripeMethod({
    method: 'POST',
    path: '/{topup}/cancel',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/Transfers.js":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/Transfers.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'transfers',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  createReversal: stripeMethod({
    method: 'POST',
    path: '/{id}/reversals',
  }),

  listReversals: stripeMethod({
    method: 'GET',
    path: '/{id}/reversals',
    methodType: 'list',
  }),

  retrieveReversal: stripeMethod({
    method: 'GET',
    path: '/{transfer}/reversals/{id}',
  }),

  updateReversal: stripeMethod({
    method: 'POST',
    path: '/{transfer}/reversals/{id}',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/UsageRecordSummaries.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/UsageRecordSummaries.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscription_items',

  list: stripeMethod({
    method: 'GET',
    path: '{subscriptionItem}/usage_record_summaries',
    methodType: 'list',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/UsageRecords.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/UsageRecords.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscription_items',

  create: stripeMethod({
    method: 'POST',
    path: '/{id}/usage_records',
  }),
});


/***/ }),

/***/ "../../stripe/lib/resources/WebhookEndpoints.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/resources/WebhookEndpoints.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const StripeResource = __webpack_require__(/*! ../StripeResource */ "../../stripe/lib/StripeResource.js");

module.exports = StripeResource.extend({
  path: 'webhook_endpoints',

  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});


/***/ }),

/***/ "../../stripe/lib/stripe.js":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/stripe.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const resources = __webpack_require__(/*! ./resources */ "../../stripe/lib/resources.js");

Stripe.DEFAULT_HOST = 'api.stripe.com';
Stripe.DEFAULT_PORT = '443';
Stripe.DEFAULT_BASE_PATH = '/v1/';
Stripe.DEFAULT_API_VERSION = null;

// Use node's default timeout:
Stripe.DEFAULT_TIMEOUT = __webpack_require__(/*! http */ "http").createServer().timeout;

Stripe.PACKAGE_VERSION = __webpack_require__(/*! ../package.json */ "../../stripe/package.json").version;

Stripe.USER_AGENT = {
  bindings_version: Stripe.PACKAGE_VERSION,
  lang: 'node',
  lang_version: process.version,
  platform: process.platform,
  publisher: 'stripe',
  uname: null,
};

Stripe.USER_AGENT_SERIALIZED = null;

Stripe.MAX_NETWORK_RETRY_DELAY_SEC = 2;
Stripe.INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;

const APP_INFO_PROPERTIES = ['name', 'version', 'url', 'partner_id'];

const EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;
const utils = __webpack_require__(/*! ./utils */ "../../stripe/lib/utils.js");

Stripe.StripeResource = __webpack_require__(/*! ./StripeResource */ "../../stripe/lib/StripeResource.js");
Stripe.resources = resources;

function Stripe(key, version) {
  if (!(this instanceof Stripe)) {
    return new Stripe(key, version);
  }

  Object.defineProperty(this, '_emitter', {
    value: new EventEmitter(),
    enumerable: false,
    configurable: false,
    writable: false,
  });

  this.on = this._emitter.on.bind(this._emitter);
  this.once = this._emitter.once.bind(this._emitter);
  this.off = this._emitter.removeListener.bind(this._emitter);

  this._api = {
    auth: null,
    host: Stripe.DEFAULT_HOST,
    port: Stripe.DEFAULT_PORT,
    basePath: Stripe.DEFAULT_BASE_PATH,
    version: Stripe.DEFAULT_API_VERSION,
    timeout: Stripe.DEFAULT_TIMEOUT,
    agent: null,
    dev: false,
    maxNetworkRetries: 0,
  };

  this._prepResources();
  this.setApiKey(key);
  this.setApiVersion(version);

  this.errors = __webpack_require__(/*! ./Error */ "../../stripe/lib/Error.js");
  this.webhooks = __webpack_require__(/*! ./Webhooks */ "../../stripe/lib/Webhooks.js");

  this._prevRequestMetrics = [];
  this.setTelemetryEnabled(true);
}

Stripe.errors = __webpack_require__(/*! ./Error */ "../../stripe/lib/Error.js");
Stripe.webhooks = __webpack_require__(/*! ./Webhooks */ "../../stripe/lib/Webhooks.js");

Stripe.prototype = {
  setHost(host, port, protocol) {
    this._setApiField('host', host);
    if (port) {
      this.setPort(port);
    }
    if (protocol) {
      this.setProtocol(protocol);
    }
  },

  setProtocol(protocol) {
    this._setApiField('protocol', protocol.toLowerCase());
  },

  setPort(port) {
    this._setApiField('port', port);
  },

  setApiVersion(version) {
    if (version) {
      this._setApiField('version', version);
    }
  },

  setApiKey(key) {
    if (key) {
      this._setApiField('auth', `Bearer ${key}`);
    }
  },

  setTimeout(timeout) {
    this._setApiField(
      'timeout',
      timeout == null ? Stripe.DEFAULT_TIMEOUT : timeout
    );
  },

  setAppInfo(info) {
    if (info && typeof info !== 'object') {
      throw new Error('AppInfo must be an object.');
    }

    if (info && !info.name) {
      throw new Error('AppInfo.name is required');
    }

    info = info || {};

    const appInfo = APP_INFO_PROPERTIES.reduce((accum, prop) => {
      if (typeof info[prop] == 'string') {
        accum = accum || {};

        accum[prop] = info[prop];
      }

      return accum;
    }, undefined);

    // Kill the cached UA string because it may no longer be valid
    Stripe.USER_AGENT_SERIALIZED = undefined;

    this._appInfo = appInfo;
  },

  setHttpAgent(agent) {
    this._setApiField('agent', agent);
  },

  _setApiField(key, value) {
    this._api[key] = value;
  },

  getApiField(key) {
    return this._api[key];
  },

  setClientId(clientId) {
    this._clientId = clientId;
  },

  getClientId() {
    return this._clientId;
  },

  getConstant: (c) => {
    return Stripe[c];
  },

  getMaxNetworkRetries() {
    return this.getApiField('maxNetworkRetries');
  },

  setMaxNetworkRetries(maxNetworkRetries) {
    if (
      (maxNetworkRetries && typeof maxNetworkRetries !== 'number') ||
      arguments.length < 1
    ) {
      throw new Error('maxNetworkRetries must be a number.');
    }

    this._setApiField('maxNetworkRetries', maxNetworkRetries);
  },

  getMaxNetworkRetryDelay() {
    return this.getConstant('MAX_NETWORK_RETRY_DELAY_SEC');
  },

  getInitialNetworkRetryDelay() {
    return this.getConstant('INITIAL_NETWORK_RETRY_DELAY_SEC');
  },

  // Gets a JSON version of a User-Agent and uses a cached version for a slight
  // speed advantage.
  getClientUserAgent(cb) {
    if (Stripe.USER_AGENT_SERIALIZED) {
      return cb(Stripe.USER_AGENT_SERIALIZED);
    }
    this.getClientUserAgentSeeded(Stripe.USER_AGENT, (cua) => {
      Stripe.USER_AGENT_SERIALIZED = cua;
      cb(Stripe.USER_AGENT_SERIALIZED);
    });
  },

  // Gets a JSON version of a User-Agent by encoding a seeded object and
  // fetching a uname from the system.
  getClientUserAgentSeeded(seed, cb) {
    utils.safeExec('uname -a', (err, uname) => {
      const userAgent = {};
      for (const field in seed) {
        userAgent[field] = encodeURIComponent(seed[field]);
      }

      // URI-encode in case there are unusual characters in the system's uname.
      userAgent.uname = encodeURIComponent(uname || 'UNKNOWN');

      if (this._appInfo) {
        userAgent.application = this._appInfo;
      }

      cb(JSON.stringify(userAgent));
    });
  },

  getAppInfoAsString() {
    if (!this._appInfo) {
      return '';
    }

    let formatted = this._appInfo.name;

    if (this._appInfo.version) {
      formatted += `/${this._appInfo.version}`;
    }

    if (this._appInfo.url) {
      formatted += ` (${this._appInfo.url})`;
    }

    return formatted;
  },

  setTelemetryEnabled(enableTelemetry) {
    this._enableTelemetry = enableTelemetry;
  },

  getTelemetryEnabled() {
    return this._enableTelemetry;
  },

  _prepResources() {
    for (const name in resources) {
      this[utils.pascalToCamelCase(name)] = new resources[name](this);
    }
  },
};

module.exports = Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;


/***/ }),

/***/ "../../stripe/lib/utils.js":
/*!******************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/lib/utils.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;
const exec = __webpack_require__(/*! child_process */ "child_process").exec;
const qs = __webpack_require__(/*! qs */ "../../stripe/node_modules/qs/lib/index.js");
const crypto = __webpack_require__(/*! crypto */ "crypto");

const hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

const OPTIONS_KEYS = [
  'api_key',
  'idempotency_key',
  'stripe_account',
  'stripe_version',
];

const utils = (module.exports = {
  isOptionsHash(o) {
    return (
      o && typeof o === 'object' && OPTIONS_KEYS.some((prop) => hasOwn(o, prop))
    );
  },

  /**
   * Stringifies an Object, accommodating nested objects
   * (forming the conventional key 'parent[child]=value')
   */
  stringifyRequestData: (data) => {
    return (
      qs
        .stringify(data, {
          serializeDate: (d) => Math.floor(d.getTime() / 1000),
        })
        // Don't use strict form encoding by changing the square bracket control
        // characters back to their literals. This is fine by the server, and
        // makes these parameter strings easier to read.
        .replace(/%5B/g, '[')
        .replace(/%5D/g, ']')
    );
  },

  /**
   * Outputs a new function with interpolated object property values.
   * Use like so:
   *   var fn = makeURLInterpolator('some/url/{param1}/{param2}');
   *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
   */
  makeURLInterpolator: (() => {
    const rc = {
      '\n': '\\n',
      '"': '\\"',
      '\u2028': '\\u2028',
      '\u2029': '\\u2029',
    };
    return (str) => {
      const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0]);
      return (outputs) => {
        return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1) =>
          encodeURIComponent(outputs[$1] || '')
        );
      };
    };
  })(),

  extractUrlParams: (path) => {
    const params = path.match(/\{\w+\}/g);
    if (!params) {
      return [];
    }

    return params.map((param) => param.replace(/[{}]/g, ''));
  },

  /**
   * Return the data argument from a list of arguments
   *
   * @param {object[]} args
   * @returns {object}
   */
  getDataFromArgs(args) {
    if (!Array.isArray(args) || !args[0] || typeof args[0] !== 'object') {
      return {};
    }

    if (!utils.isOptionsHash(args[0])) {
      return args.shift();
    }

    const argKeys = Object.keys(args[0]);

    const optionKeysInArgs = argKeys.filter((key) =>
      OPTIONS_KEYS.includes(key)
    );

    // In some cases options may be the provided as the first argument.
    // Here we're detecting a case where there are two distinct arguments
    // (the first being args and the second options) and with known
    // option keys in the first so that we can warn the user about it.
    if (
      optionKeysInArgs.length > 0 &&
      optionKeysInArgs.length !== argKeys.length
    ) {
      emitWarning(
        `Options found in arguments (${optionKeysInArgs.join(
          ', '
        )}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`
      );
    }

    return {};
  },

  /**
   * Return the options hash from a list of arguments
   */
  getOptionsFromArgs: (args) => {
    const opts = {
      auth: null,
      headers: {},
    };
    if (args.length > 0) {
      const arg = args[args.length - 1];
      if (typeof arg === 'string') {
        opts.auth = args.pop();
      } else if (utils.isOptionsHash(arg)) {
        const params = args.pop();

        const extraKeys = Object.keys(params).filter(
          (key) => !OPTIONS_KEYS.includes(key)
        );

        if (extraKeys.length) {
          emitWarning(
            `Invalid options found (${extraKeys.join(', ')}); ignoring.`
          );
        }

        if (params.api_key) {
          opts.auth = params.api_key;
        }
        if (params.idempotency_key) {
          opts.headers['Idempotency-Key'] = params.idempotency_key;
        }
        if (params.stripe_account) {
          opts.headers['Stripe-Account'] = params.stripe_account;
        }
        if (params.stripe_version) {
          opts.headers['Stripe-Version'] = params.stripe_version;
        }
      }
    }
    return opts;
  },

  /**
   * Provide simple "Class" extension mechanism
   */
  protoExtend(sub) {
    const Super = this;
    const Constructor = hasOwn(sub, 'constructor')
      ? sub.constructor
      : function(...args) {
          Super.apply(this, args);
        };

    // This initialization logic is somewhat sensitive to be compatible with
    // divergent JS implementations like the one found in Qt. See here for more
    // context:
    //
    // https://github.com/stripe/stripe-node/pull/334
    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, sub);

    return Constructor;
  },

  /**
   * Secure compare, from https://github.com/freewil/scmp
   */
  secureCompare: (a, b) => {
    a = Buffer.from(a);
    b = Buffer.from(b);

    // return early here if buffer lengths are not equal since timingSafeEqual
    // will throw if buffer lengths are not equal
    if (a.length !== b.length) {
      return false;
    }

    // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
    // otherwise use our own scmp-internal function.
    if (crypto.timingSafeEqual) {
      return crypto.timingSafeEqual(a, b);
    }

    const len = a.length;
    let result = 0;

    for (let i = 0; i < len; ++i) {
      result |= a[i] ^ b[i];
    }
    return result === 0;
  },

  /**
   * Remove empty values from an object
   */
  removeNullish: (obj) => {
    if (typeof obj !== 'object') {
      throw new Error('Argument must be an object');
    }

    return Object.keys(obj).reduce((result, key) => {
      if (obj[key] != null) {
        result[key] = obj[key];
      }
      return result;
    }, {});
  },

  /**
   * Normalize standard HTTP Headers:
   * {'foo-bar': 'hi'}
   * becomes
   * {'Foo-Bar': 'hi'}
   */
  normalizeHeaders: (obj) => {
    if (!(obj && typeof obj === 'object')) {
      return obj;
    }

    return Object.keys(obj).reduce((result, header) => {
      result[utils.normalizeHeader(header)] = obj[header];
      return result;
    }, {});
  },

  /**
   * Stolen from https://github.com/marten-de-vries/header-case-normalizer/blob/master/index.js#L36-L41
   * without the exceptions which are irrelevant to us.
   */
  normalizeHeader: (header) => {
    return header
      .split('-')
      .map(
        (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
      )
      .join('-');
  },

  /**
   * Determine if file data is a derivative of EventEmitter class.
   * https://nodejs.org/api/events.html#events_events
   */
  checkForStream: (obj) => {
    if (obj.file && obj.file.data) {
      return obj.file.data instanceof EventEmitter;
    }
    return false;
  },

  callbackifyPromiseWithTimeout: (promise, callback) => {
    if (callback) {
      // Ensure callback is called outside of promise stack.
      return promise.then(
        (res) => {
          setTimeout(() => {
            callback(null, res);
          }, 0);
        },
        (err) => {
          setTimeout(() => {
            callback(err, null);
          }, 0);
        }
      );
    }

    return promise;
  },

  /**
   * Allow for special capitalization cases (such as OAuth)
   */
  pascalToCamelCase: (name) => {
    if (name === 'OAuth') {
      return 'oauth';
    } else {
      return name[0].toLowerCase() + name.substring(1);
    }
  },

  emitWarning,

  /**
   * Node's built in `exec` function sometimes throws outright,
   * and sometimes has a callback with an error,
   * depending on the type of error.
   *
   * This unifies that interface.
   */
  safeExec: (cmd, cb) => {
    try {
      utils._exec(cmd, cb);
    } catch (e) {
      cb(e, null);
    }
  },

  // For mocking in tests.
  _exec: exec,

  isObject: (obj) => {
    const type = typeof obj;
    return (type === 'function' || type === 'object') && !!obj;
  },

  // For use in multipart requests
  flattenAndStringify: (data) => {
    const result = {};

    const step = (obj, prevKey) => {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];

        const newKey = prevKey ? `${prevKey}[${key}]` : key;

        if (utils.isObject(value)) {
          if (!Buffer.isBuffer(value) && !value.hasOwnProperty('data')) {
            // Non-buffer non-file Objects are recursively flattened
            return step(value, newKey);
          } else {
            // Buffers and file objects are stored without modification
            result[newKey] = value;
          }
        } else {
          // Primitives are converted to strings
          result[newKey] = String(value);
        }
      });
    };

    step(data);

    return result;
  },

  /**
   * https://stackoverflow.com/a/2117523
   */
  uuid4: () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },
});

function emitWarning(warning) {
  if (typeof process.emitWarning !== 'function') {
    return console.warn(
      `Stripe: ${warning}`
    ); /* eslint-disable-line no-console */
  }

  return process.emitWarning(warning, 'Stripe');
}


/***/ }),

/***/ "../../stripe/node_modules/qs/lib/formats.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/node_modules/qs/lib/formats.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "../../stripe/node_modules/qs/lib/index.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/node_modules/qs/lib/index.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "../../stripe/node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "../../stripe/node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "../../stripe/node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "../../stripe/node_modules/qs/lib/parse.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/node_modules/qs/lib/parse.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../../stripe/node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (val && options.comma && val.indexOf(',') > -1) {
            val = val.split(',');
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        depth: typeof opts.depth === 'number' ? opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "../../stripe/node_modules/qs/lib/stringify.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/node_modules/qs/lib/stringify.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../../stripe/node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "../../stripe/node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    formatter: formats.formatters[formats['default']],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "../../stripe/node_modules/qs/lib/utils.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/node_modules/qs/lib/utils.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "../../stripe/package.json":
/*!******************************************************************************************************************!*\
  !*** C:/Users/I861650/Desktop/Folder/Mitch Training/AWS/serverless-stack-2-api/node_modules/stripe/package.json ***!
  \******************************************************************************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bugs:, bundleDependencies, contributors, dependencies, deprecated, description, devDependencies, engines, homepage, keywords, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"stripe\",\"_id\":\"stripe@7.6.0\",\"_inBundle\":false,\"_integrity\":\"sha512-HRdRhg4r1ZfLUOY7r1SMqkteoeZE28hIAbHAIbgghnl7wft/Pvd+eD9w9yTmOy8VfGJoiCxddUyXOYYlNhkRuw==\",\"_location\":\"/stripe\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"stripe\",\"name\":\"stripe\",\"escapedName\":\"stripe\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/stripe/-/stripe-7.6.0.tgz\",\"_shasum\":\"1af4eb1e491d7c727afb899d7045a55e19aef058\",\"_spec\":\"stripe\",\"_where\":\"C:\\\\Users\\\\I861650\\\\Desktop\\\\Folder\\\\Mitch Training\\\\AWS\\\\serverless-stack-2-api\",\"author\":{\"name\":\"Stripe\",\"email\":\"support@stripe.com\",\"url\":\"https://stripe.com/\"},\"bugs\":{\"url\":\"https://github.com/stripe/stripe-node/issues\"},\"bugs:\":\"https://github.com/stripe/stripe-node/issues\",\"bundleDependencies\":false,\"contributors\":[{\"name\":\"Ask Bjørn Hansen\",\"email\":\"ask@develooper.com\",\"url\":\"http://www.askask.com/\"},{\"name\":\"Michelle Bu\",\"email\":\"michelle@stripe.com\"},{\"name\":\"Alex Sexton\",\"email\":\"alex@stripe.com\"},{\"name\":\"James Padolsey\"}],\"dependencies\":{\"qs\":\"^6.6.0\"},\"deprecated\":false,\"description\":\"Stripe API wrapper\",\"devDependencies\":{\"chai\":\"~4.2.0\",\"chai-as-promised\":\"~7.1.1\",\"coveralls\":\"^3.0.0\",\"eslint\":\"^5.16.0\",\"eslint-config-prettier\":\"^4.1.0\",\"eslint-plugin-chai-friendly\":\"^0.4.0\",\"eslint-plugin-prettier\":\"^3.0.1\",\"mocha\":\"~6.1.4\",\"nock\":\"^10.0.6\",\"nyc\":\"^14.1.0\",\"prettier\":\"^1.16.4\"},\"engines\":{\"node\":\"^6 || ^8.1 || >=10.*\"},\"homepage\":\"https://github.com/stripe/stripe-node\",\"keywords\":[\"stripe\",\"payment processing\",\"credit cards\",\"api\"],\"license\":\"MIT\",\"main\":\"lib/stripe.js\",\"name\":\"stripe\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/stripe/stripe-node.git\"},\"scripts\":{\"clean\":\"rm -rf ./.nyc_output ./node_modules/.cache ./coverage\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"yarn lint --fix\",\"lint\":\"eslint --ext .js,.jsx .\",\"mocha\":\"nyc mocha\",\"mocha-only\":\"mocha\",\"report\":\"nyc -r text -r lcov report\",\"test\":\"npm run lint && npm run mocha\"},\"version\":\"7.6.0\"}");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("module");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ })));
//# sourceMappingURL=billing.js.map