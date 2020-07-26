// Don't pollute Jest/Mocha by installing `source-map-support`
if (process.env.NODE_ENV !== 'test') {
  try {
    require('source-map-support').install();
  } catch (e) {
    console.error(
      'Cannot find "source-map-support", stack traces may appear without source maps.',
    );
    console.error(
      'Run `npm i --save source-map-support` to have better stack traces',
    );
  }
}

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), function() {
return (function (val) { return val.default || val; })(/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "http://localhost:3200/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** ../dev/server.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ 1);

const renderVM = __webpack_require__(/*! ./vm */ 2);

const app = express(); // Define a route to render our initial HTML.

app.use('/', (req, res) => {
  const html = renderVM({});
  res.send(html);
});
const PORT = process.env.PORT || 4000; // Launch the server

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});

/***/ }),
/* 1 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/*!********************!*\
  !*** ../dev/vm.js ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _require = __webpack_require__(/*! velocity */ 3),
      Engine = _require.Engine;

const velocityDataPrivate = __webpack_require__(/*! ./velocity.private.data.json */ 4);

const VelocityDataProd = __webpack_require__(/*! ./velocity.data.prod.json */ 5);

const velocityDataDev = __webpack_require__(/*! ./velocity.data.json */ 6);

let velocityData;

if (process.env.NODE_ENV === 'production') {
  velocityData = VelocityDataProd;
} else {
  velocityData = velocityDataDev;
}

const engine = new Engine({
  template: './src/index.vm'
});

module.exports = data => {
  return engine.render(_objectSpread(_objectSpread(_objectSpread({}, velocityData), velocityDataPrivate), data));
};

/***/ }),
/* 3 */
/*!***************************!*\
  !*** external "velocity" ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("velocity");

/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ../dev/velocity.private.data.json ***!
  \*****************************************/
/*! exports provided: experiments, default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = JSON.parse("{\"experiments\":{}}");

/***/ }),
/* 5 */
/*!**************************************!*\
  !*** ../dev/velocity.data.prod.json ***!
  \**************************************/
/*! exports provided: title, debug, experiments, locale, basename, clientTopology, default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"e-note - Banking your thoughts!\",\"debug\":false,\"experiments\":{},\"locale\":\"en\",\"basename\":\"/\",\"clientTopology\":{\"staticsDomain\":\"static.parastorage.com\",\"staticsBaseUrl\":\"https://enote.vercel.app/\"}}");

/***/ }),
/* 6 */
/*!*********************************!*\
  !*** ../dev/velocity.data.json ***!
  \*********************************/
/*! exports provided: title, debug, experiments, locale, basename, clientTopology, default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"e-note - Banking your thoughts!\",\"debug\":true,\"experiments\":{},\"locale\":\"en\",\"basename\":\"/\",\"clientTopology\":{\"staticsDomain\":\"static.parastorage.com\",\"staticsBaseUrl\":\"//localhost:3200/\"}}");

/***/ })
/******/ ]));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21jemVuaXRoL1Byb2plY3RzL1Byb2QvZW5vdGUvZW5vdGUtY2xpZW50L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIi9ob21lL21jemVuaXRoL1Byb2plY3RzL1Byb2QvZW5vdGUvZW5vdGUtY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwiL2hvbWUvbWN6ZW5pdGgvUHJvamVjdHMvUHJvZC9lbm90ZS9lbm90ZS1jbGllbnQvZGV2L3NlcnZlci5qcyIsIi9ob21lL21jemVuaXRoL1Byb2plY3RzL1Byb2QvZW5vdGUvZW5vdGUtY2xpZW50L2V4dGVybmFsIFwiZXhwcmVzc1wiIiwiL2hvbWUvbWN6ZW5pdGgvUHJvamVjdHMvUHJvZC9lbm90ZS9lbm90ZS1jbGllbnQvZGV2L3ZtLmpzIiwiL2hvbWUvbWN6ZW5pdGgvUHJvamVjdHMvUHJvZC9lbm90ZS9lbm90ZS1jbGllbnQvZXh0ZXJuYWwgXCJ2ZWxvY2l0eVwiIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwicmVuZGVyVk0iLCJhcHAiLCJ1c2UiLCJyZXEiLCJyZXMiLCJodG1sIiwic2VuZCIsIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwibGlzdGVuIiwiY29uc29sZSIsImluZm8iLCJFbmdpbmUiLCJ2ZWxvY2l0eURhdGFQcml2YXRlIiwiVmVsb2NpdHlEYXRhUHJvZCIsInZlbG9jaXR5RGF0YURldiIsInZlbG9jaXR5RGF0YSIsIk5PREVfRU5WIiwiZW5naW5lIiwidGVtcGxhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGF0YSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQSxNQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsZ0JBQUQsQ0FBdkI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHRCxtQkFBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBRUEsTUFBTUUsR0FBRyxHQUFHSCxPQUFPLEVBQW5CLEMsQ0FFQTs7QUFDQUcsR0FBRyxDQUFDQyxHQUFKLENBQVEsR0FBUixFQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCLFFBQU1DLElBQUksR0FBR0wsUUFBUSxDQUFDLEVBQUQsQ0FBckI7QUFFQUksS0FBRyxDQUFDRSxJQUFKLENBQVNELElBQVQ7QUFDRCxDQUpEO0FBTUEsTUFBTUUsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixJQUFvQixJQUFqQyxDLENBRUE7O0FBQ0FOLEdBQUcsQ0FBQ1MsTUFBSixDQUFXSCxJQUFYLEVBQWlCLE1BQU07QUFDckJJLFNBQU8sQ0FBQ0MsSUFBUixDQUFjLDZCQUE0QkwsSUFBSyxFQUEvQztBQUNELENBRkQsRTs7Ozs7Ozs7Ozs7O0FDZkEsb0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkNBbUJSLG1CQUFPLENBQUMsaUJBQUQsQztNQUFsQmMsTSxZQUFBQSxNOztBQUVSLE1BQU1DLG1CQUFtQixHQUFHZixtQkFBTyxDQUFDLHFDQUFELENBQW5DOztBQUNBLE1BQU1nQixnQkFBZ0IsR0FBR2hCLG1CQUFPLENBQUMsa0NBQUQsQ0FBaEM7O0FBQ0EsTUFBTWlCLGVBQWUsR0FBR2pCLG1CQUFPLENBQUMsNkJBQUQsQ0FBL0I7O0FBRUEsSUFBSWtCLFlBQUo7O0FBRUEsSUFBSVQsT0FBTyxDQUFDQyxHQUFSLENBQVlTLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekNELGNBQVksR0FBR0YsZ0JBQWY7QUFDRCxDQUZELE1BRU87QUFDTEUsY0FBWSxHQUFHRCxlQUFmO0FBQ0Q7O0FBQ0QsTUFBTUcsTUFBTSxHQUFHLElBQUlOLE1BQUosQ0FBVztBQUFFTyxVQUFRLEVBQUU7QUFBWixDQUFYLENBQWY7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsSUFBSSxJQUFJO0FBQ3ZCLFNBQU9KLE1BQU0sQ0FBQ0ssTUFBUCwrQ0FDRlAsWUFERSxHQUVGSCxtQkFGRSxHQUdGUyxJQUhFLEVBQVA7QUFLRCxDQU5ELEM7Ozs7Ozs7Ozs7OztBQ2ZBLHFDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSgodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzIwMC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IHJlbmRlclZNID0gcmVxdWlyZSgnLi92bScpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbi8vIERlZmluZSBhIHJvdXRlIHRvIHJlbmRlciBvdXIgaW5pdGlhbCBIVE1MLlxuYXBwLnVzZSgnLycsIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBodG1sID0gcmVuZGVyVk0oe30pO1xuXG4gIHJlcy5zZW5kKGh0bWwpO1xufSk7XG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDA7XG5cbi8vIExhdW5jaCB0aGUgc2VydmVyXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgY29uc29sZS5pbmZvKGBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICR7UE9SVH1gKTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJjb25zdCB7IEVuZ2luZSB9ID0gcmVxdWlyZSgndmVsb2NpdHknKTtcblxuY29uc3QgdmVsb2NpdHlEYXRhUHJpdmF0ZSA9IHJlcXVpcmUoJy4vdmVsb2NpdHkucHJpdmF0ZS5kYXRhLmpzb24nKTtcbmNvbnN0IFZlbG9jaXR5RGF0YVByb2QgPSByZXF1aXJlKCcuL3ZlbG9jaXR5LmRhdGEucHJvZC5qc29uJyk7XG5jb25zdCB2ZWxvY2l0eURhdGFEZXYgPSByZXF1aXJlKCcuL3ZlbG9jaXR5LmRhdGEuanNvbicpO1xuXG5sZXQgdmVsb2NpdHlEYXRhO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICB2ZWxvY2l0eURhdGEgPSBWZWxvY2l0eURhdGFQcm9kO1xufSBlbHNlIHtcbiAgdmVsb2NpdHlEYXRhID0gdmVsb2NpdHlEYXRhRGV2O1xufVxuY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZSh7IHRlbXBsYXRlOiAnLi9zcmMvaW5kZXgudm0nIH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRhdGEgPT4ge1xuICByZXR1cm4gZW5naW5lLnJlbmRlcih7XG4gICAgLi4udmVsb2NpdHlEYXRhLFxuICAgIC4uLnZlbG9jaXR5RGF0YVByaXZhdGUsXG4gICAgLi4uZGF0YSxcbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmVsb2NpdHlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==