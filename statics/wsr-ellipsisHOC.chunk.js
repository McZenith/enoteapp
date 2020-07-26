(window["webpackJsonp_enote_client"] = window["webpackJsonp_enote_client"] || []).push([[1],{

/***/ 177:
/*!******************************************!*\
  !*** ../node_modules/lodash/isObject.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 178:
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ 179);

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ 180);

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ 103);

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ 181);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 179:
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ 104);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 180:
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 181:
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 182:
/*!*********************************************!*\
  !*** ../node_modules/shallowequal/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 183:
/*!******************************************!*\
  !*** ../node_modules/lodash/debounce.js ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ 177),
    now = __webpack_require__(/*! ./now */ 184),
    toNumber = __webpack_require__(/*! ./toNumber */ 185);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 184:
/*!*************************************!*\
  !*** ../node_modules/lodash/now.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 102);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 185:
/*!******************************************!*\
  !*** ../node_modules/lodash/toNumber.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ 177),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 186);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 186:
/*!******************************************!*\
  !*** ../node_modules/lodash/isSymbol.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 101),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 59);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 187:
/*!*********************************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsedTooltip.st.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "EllipsedTooltip1091548310",
  {"root":"EllipsedTooltip1091548310--root","text":"EllipsedTooltip1091548310--text","content":"EllipsedTooltip1091548310--content"},
  ".EllipsedTooltip1091548310--root{display:inline;overflow:hidden;width:auto;height:-moz-max-content;height:-webkit-max-content}.EllipsedTooltip1091548310--root .Popover1242101375--popoverElement{max-width:100%;line-height:initial}.EllipsedTooltip1091548310--text{display:inline-block;text-overflow:ellipsis;overflow:hidden;max-width:100%;vertical-align:bottom}.EllipsedTooltip1091548310--content{font-size:14px;line-height:18px;font-weight:400;font-weight:var(--wsr-font-weight-regular,400);font-family:HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif}",
  8,
  "EllipsedTooltip1091548310"
);
__webpack_require__.stylable.$.register(exports.default)


/***/ }),

/***/ 188:
/*!*************************************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsisHOC.js + 2 modules ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/assertThisInitialized.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/toConsumableArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/lodash/debounce.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/shallowequal/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Tooltip/Tooltip.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsedTooltip.st.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/common/hocUtils.js */
/*! ModuleConcatenation bailout: Cannot concat with external "React" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "ReactDOM" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(178);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(10);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(3);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(11);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(15);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(16);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(17);

// EXTERNAL MODULE: ../node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(182);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// EXTERNAL MODULE: ../node_modules/lodash/debounce.js
var debounce = __webpack_require__(183);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Tooltip/Tooltip.js + 20 modules
var Tooltip = __webpack_require__(176);

// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/common/hocUtils.js
var hocUtils = __webpack_require__(61);

// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsedTooltip.st.css
var EllipsedTooltip_st = __webpack_require__(187);
var EllipsedTooltip_st_default = /*#__PURE__*/__webpack_require__.n(EllipsedTooltip_st);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsedTooltip.js










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var EllipsedTooltip_StateFullComponentWrap = /*#__PURE__*/function (_React$Component) {
  inherits_default()(StateFullComponentWrap, _React$Component);

  var _super = _createSuper(StateFullComponentWrap);

  function StateFullComponentWrap() {
    classCallCheck_default()(this, StateFullComponentWrap);

    return _super.apply(this, arguments);
  }

  createClass_default()(StateFullComponentWrap, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = objectWithoutProperties_default()(_this$props, ["children"]);

      return /*#__PURE__*/external_React_["cloneElement"](children, props);
    }
  }]);

  return StateFullComponentWrap;
}(external_React_["Component"]);

var EllipsedTooltip_EllipsedTooltip = /*#__PURE__*/function (_React$Component2) {
  inherits_default()(EllipsedTooltip, _React$Component2);

  var _super2 = _createSuper(EllipsedTooltip);

  function EllipsedTooltip() {
    var _this;

    classCallCheck_default()(this, EllipsedTooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      isEllipsisActive: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "_updateEllipsisState", function () {
      var isEllipsisActive = _this.props.showTooltip && _this.textNode && _this.textNode.offsetWidth < _this.textNode.scrollWidth;

      if (isEllipsisActive !== _this.state.isEllipsisActive) {
        _this.setState({
          isEllipsisActive: isEllipsisActive
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "_debouncedUpdate", debounce_default()(_this._updateEllipsisState, 100));

    defineProperty_default()(assertThisInitialized_default()(_this), "_renderText", function () {
      var _this$props2 = _this.props,
          component = _this$props2.component,
          style = _this$props2.style;
      return /*#__PURE__*/external_React_["createElement"](EllipsedTooltip_StateFullComponentWrap, extends_default()({}, EllipsedTooltip_st_default()('text', {}, component.props), {
        style: _objectSpread(_objectSpread({}, style), {}, {
          whiteSpace: 'nowrap'
        }),
        ref: function ref(n) {
          return _this.textNode = external_ReactDOM_["findDOMNode"](n);
        }
      }), component);
    });

    return _this;
  }

  createClass_default()(EllipsedTooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this._debouncedUpdate);

      this._updateEllipsisState();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._debouncedUpdate.cancel();

      window.removeEventListener('resize', this._debouncedUpdate);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // if props changed, then we want to re-check node for ellipsis state
      // and we can not do such check in render, because we want to check already rendered node
      if (!shallowequal_default()(prevProps, this.props)) {
        this._updateEllipsisState();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          showTooltip = _this$props3.showTooltip,
          tooltipProps = _this$props3.tooltipProps;
      var isEllipsisActive = this.state.isEllipsisActive;

      if (isEllipsisActive && showTooltip) {
        return /*#__PURE__*/external_React_["createElement"](Tooltip["a" /* default */], extends_default()({
          appendTo: "scrollParent"
        }, tooltipProps, EllipsedTooltip_st_default()('root', {}, tooltipProps || this.props), {
          content: /*#__PURE__*/external_React_["createElement"]("div", {
            className: EllipsedTooltip_st_default.a.content
          }, this.textNode.textContent),
          showArrow: true
        }), this._renderText());
      }

      return this._renderText();
    }
  }]);

  return EllipsedTooltip;
}(external_React_["Component"]);

defineProperty_default()(EllipsedTooltip_EllipsedTooltip, "defaultProps", {
  showTooltip: true
});

var EllipsedTooltip_withEllipsedTooltip = function withEllipsedTooltip() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      showTooltip = _ref.showTooltip,
      shouldLoadAsync = _ref.shouldLoadAsync,
      tooltipProps = _ref.tooltipProps;

  return function (Comp) {
    var WrapperComponent = function WrapperComponent(props) {
      return /*#__PURE__*/external_React_["createElement"](EllipsedTooltip_EllipsedTooltip, extends_default()({}, props, {
        component: /*#__PURE__*/external_React_["createElement"](Comp, props),
        shouldLoadAsync: shouldLoadAsync,
        showTooltip: showTooltip,
        "data-hook": "ellipsed-tooltip-wrapper",
        tooltipProps: tooltipProps
      }));
    };

    WrapperComponent.displayName = Object(hocUtils["a" /* getDisplayName */])(Comp);
    return WrapperComponent;
  };
};
// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/ZIndex.js
var ZIndexValues = {
  Page: 1,
  Notification: 4000,
  Modal: 5000,
  Tooltip: 6000
};
function ZIndex(layerName) {
  var zIndexValue = ZIndexValues[layerName];

  if (!zIndexValue) {
    throw new Error("ZIndex: Layer with name ".concat(layerName, " does NOT exist. Layers = ").concat(Object.keys(ZIndexValues).join(', ')));
  }

  return zIndexValue;
}
// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsisHOC.js






/* harmony default export */ var EllipsisHOC = __webpack_exports__["default"] = (/*#__PURE__*/external_React_default.a.forwardRef(function (_ref, ref) {
  var Component = _ref.Component,
      props = _ref.props;

  var flip = props.flip,
      fixed = props.fixed,
      placement = props.placement,
      timeout = props.timeout,
      _props$appendTo = props.appendTo,
      appendTo = _props$appendTo === void 0 ? 'window' : _props$appendTo,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 204 : _props$maxWidth,
      _props$zIndex = props.zIndex,
      zIndex = _props$zIndex === void 0 ? ZIndex('Tooltip') : _props$zIndex,
      hideDelay = props.hideDelay,
      showDelay = props.showDelay,
      ellipsis = props.ellipsis,
      _props$showTooltip = props.showTooltip,
      showTooltip = _props$showTooltip === void 0 ? true : _props$showTooltip,
      children = props.children,
      rest = objectWithoutProperties_default()(props, ["flip", "fixed", "placement", "timeout", "appendTo", "maxWidth", "zIndex", "hideDelay", "showDelay", "ellipsis", "showTooltip", "children"]);

  var tooltipProps = {
    appendTo: appendTo,
    flip: flip,
    fixed: fixed,
    placement: placement,
    timeout: timeout,
    maxWidth: maxWidth,
    zIndex: zIndex,
    hideDelay: hideDelay,
    showDelay: showDelay,
    children: children
  };
  var EllipsedComponent = Object(external_React_["useMemo"])(function () {
    return EllipsedTooltip_withEllipsedTooltip({
      showTooltip: showTooltip,
      tooltipProps: tooltipProps
    })(Component);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [].concat(toConsumableArray_default()(Object.values(tooltipProps)), [Component, showTooltip]));
  return /*#__PURE__*/external_React_default.a.createElement(EllipsedComponent, extends_default()({
    ref: ref,
    children: children
  }, rest));
}));

/***/ })

}]);