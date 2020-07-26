/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"1":"wsr-ellipsisHOC"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	/* runtime version: 1.4.0 */
/******/ 	function StylableRuntime(exports){
/******/ 	exports = exports || {};
/******/ 	function require(){return exports;};
/******/
/******/ 	(function(){/* source: cached-node-renderer.ts */
/******/ 	var CacheStyleNodeRenderer = /** @class */ (function () {
/******/ 	    function CacheStyleNodeRenderer(options) {
/******/ 	        var _this = this;
/******/ 	        this.options = options;
/******/ 	        this.create = function (stylesheet, key) {
/******/ 	            var node = _this.options.createElement('style');
/******/ 	            node.textContent = stylesheet.$css || '';
/******/ 	            node.setAttribute(_this.options.attrKey, key);
/******/ 	            node.setAttribute('st-depth', stylesheet.$depth + '');
/******/ 	            return node;
/******/ 	        };
/******/ 	        this.hasKey = function (node) { return node.hasAttribute(_this.options.attrKey); };
/******/ 	        this.update = function (stylesheet, node) {
/******/ 	            if (node.textContent !== stylesheet.$css) {
/******/ 	                node.textContent = stylesheet.$css || '';
/******/ 	            }
/******/ 	            return node;
/******/ 	        };
/******/ 	        this.renderKey = function (stylesheet) { return stylesheet.$id; };
/******/ 	    }
/******/ 	    return CacheStyleNodeRenderer;
/******/ 	}());
/******/ 	exports.CacheStyleNodeRenderer = CacheStyleNodeRenderer;
/******/ 	}());
/******/ 	(function(){/* source: keyed-list-renderer.ts */
/******/ 	function createDOMListRenderer(nodeRenderer) {
/******/ 	    var first;
/******/ 	    var nodes = {};
/******/ 	    var setNode = function (dataItem, node) {
/******/ 	        return (nodes[nodeRenderer.renderKey(dataItem)] = node);
/******/ 	    };
/******/ 	    var renderNode = function (dataItem) {
/******/ 	        var key = nodeRenderer.renderKey(dataItem);
/******/ 	        var node = nodes[key];
/******/ 	        return node
/******/ 	            ? nodeRenderer.update(dataItem, node)
/******/ 	            : setNode(dataItem, nodeRenderer.create(dataItem, key));
/******/ 	    };
/******/ 	    var render = function (container, data) {
/******/ 	        if (data === void 0) { data = []; }
/******/ 	        var node;
/******/ 	        if (data.length) {
/******/ 	            var next = first;
/******/ 	            // tslint:disable-next-line:prefer-for-of
/******/ 	            for (var i = 0; i < data.length; i++) {
/******/ 	                node = renderNode(data[i]);
/******/ 	                if (node !== next) {
/******/ 	                    container.insertBefore(node, next || null);
/******/ 	                }
/******/ 	                else {
/******/ 	                    next = node.nextElementSibling;
/******/ 	                }
/******/ 	            }
/******/ 	            first = nodes[nodeRenderer.renderKey(data[0])];
/******/ 	            while (node.nextElementSibling) {
/******/ 	                if (nodeRenderer.hasKey(node.nextElementSibling)) {
/******/ 	                    container.removeChild(node.nextElementSibling);
/******/ 	                }
/******/ 	                else {
/******/ 	                    break;
/******/ 	                }
/******/ 	            }
/******/ 	        }
/******/ 	        else {
/******/ 	            while (first) {
/******/ 	                var next = first.nextElementSibling;
/******/ 	                container.removeChild(first);
/******/ 	                first = next && nodeRenderer.hasKey(next) ? next : undefined;
/******/ 	            }
/******/ 	        }
/******/ 	    };
/******/ 	    return { render: render, nodes: nodes };
/******/ 	}
/******/ 	exports.createDOMListRenderer = createDOMListRenderer;
/******/ 	}());
/******/ 	(function(){/* source: css-runtime-renderer.ts */
/******/ 	var cached_node_renderer_1 = require("./cached-node-renderer");
/******/ 	var keyed_list_renderer_1 = require("./keyed-list-renderer");
/******/ 	var RuntimeRenderer = /** @class */ (function () {
/******/ 	    function RuntimeRenderer() {
/******/ 	        var _this = this;
/******/ 	        this.styles = [];
/******/ 	        this.stylesMap = {};
/******/ 	        this.renderer = null;
/******/ 	        this.window = null;
/******/ 	        this.id = null;
/******/ 	        this.update = function () {
/******/ 	            if (_this.renderer) {
/******/ 	                _this.renderer.render(_this.window.document.head, _this.styles);
/******/ 	            }
/******/ 	        };
/******/ 	    }
/******/ 	    RuntimeRenderer.prototype.init = function (_window) {
/******/ 	        if (this.window || !_window) {
/******/ 	            return;
/******/ 	        }
/******/ 	        _window.__stylable_renderer_global_counter =
/******/ 	            _window.__stylable_renderer_global_counter || 0;
/******/ 	        this.id = _window.__stylable_renderer_global_counter++;
/******/ 	        this.window = _window;
/******/ 	        this.renderer = keyed_list_renderer_1.createDOMListRenderer(new cached_node_renderer_1.CacheStyleNodeRenderer({
/******/ 	            attrKey: 'st-id' + (this.id ? '-' + this.id : ''),
/******/ 	            createElement: _window.document.createElement.bind(_window.document)
/******/ 	        }));
/******/ 	        this.update();
/******/ 	    };
/******/ 	    RuntimeRenderer.prototype.onRegister = function () {
/******/ 	        if (this.window) {
/******/ 	            this.window.requestAnimationFrame(this.update);
/******/ 	        }
/******/ 	    };
/******/ 	    RuntimeRenderer.prototype.register = function (stylesheet) {
/******/ 	        var registered = this.stylesMap[stylesheet.$id];
/******/ 	        if (registered) {
/******/ 	            this.removeStyle(registered);
/******/ 	        }
/******/ 	        var i = this.findDepthIndex(stylesheet.$depth);
/******/ 	        this.styles.splice(i + 1, 0, stylesheet);
/******/ 	        this.stylesMap[stylesheet.$id] = stylesheet;
/******/ 	        this.onRegister();
/******/ 	    };
/******/ 	    RuntimeRenderer.prototype.removeStyle = function (stylesheet) {
/******/ 	        var i = this.styles.indexOf(stylesheet);
/******/ 	        if (~i) {
/******/ 	            this.styles.splice(i, 1);
/******/ 	        }
/******/ 	        delete this.stylesMap[stylesheet.$id];
/******/ 	    };
/******/ 	    RuntimeRenderer.prototype.findDepthIndex = function (depth) {
/******/ 	        var index = this.styles.length;
/******/ 	        while (index--) {
/******/ 	            var stylesheet = this.styles[index];
/******/ 	            if (stylesheet.$depth <= depth) {
/******/ 	                return index;
/******/ 	            }
/******/ 	        }
/******/ 	        return index;
/******/ 	    };
/******/ 	    RuntimeRenderer.prototype.getStyles = function (ids, sortIndexes) {
/******/ 	        var _this = this;
/******/ 	        return this.sortStyles(ids.map(function (id) { return _this.stylesMap[id]; }), sortIndexes);
/******/ 	    };
/******/ 	    RuntimeRenderer.prototype.sortStyles = function (styles, sortIndexes) {
/******/ 	        var _this = this;
/******/ 	        if (sortIndexes === void 0) { sortIndexes = false; }
/******/ 	        var s = styles.slice();
/******/ 	        if (sortIndexes) {
/******/ 	            s.sort(function (a, b) {
/******/ 	                return _this.styles.indexOf(a) - _this.styles.indexOf(b);
/******/ 	            });
/******/ 	        }
/******/ 	        s.sort(function (a, b) {
/******/ 	            return a.$depth - b.$depth;
/******/ 	        });
/******/ 	        return s;
/******/ 	    };
/******/ 	    return RuntimeRenderer;
/******/ 	}());
/******/ 	exports.RuntimeRenderer = RuntimeRenderer;
/******/ 	// The $ export is a convention with the webpack plugin if changed both needs a change
/******/ 	exports.$ = new RuntimeRenderer();
/******/ 	}());
/******/ 	(function(){/* source: css-runtime-stylesheet.ts */
/******/ 	function create(root, namespace, locals, css, depth, id) {
/******/ 	    var dataNamespace = 'data-' + namespace.toLowerCase() + '-';
/******/ 	    function cssStates(stateMapping) {
/******/ 	        return stateMapping
/******/ 	            ? Object.keys(stateMapping).reduce(function (states, key) {
/******/ 	                var stateValue = stateMapping[key];
/******/ 	                if (stateValue === undefined ||
/******/ 	                    stateValue === null ||
/******/ 	                    stateValue === false) {
/******/ 	                    return states;
/******/ 	                }
/******/ 	                states[dataNamespace + key.toLowerCase()] = stateValue;
/******/ 	                return states;
/******/ 	            }, {})
/******/ 	            : {};
/******/ 	    }
/******/ 	    function get(localName) {
/******/ 	        return locals[localName];
/******/ 	    }
/******/ 	    function mapClasses(className) {
/******/ 	        return className
/******/ 	            .split(/\s+/g)
/******/ 	            .map(function (className) { return get(className) || className; })
/******/ 	            .join(' ');
/******/ 	    }
/******/ 	    locals.$root = root;
/******/ 	    locals.$namespace = namespace;
/******/ 	    locals.$depth = depth;
/******/ 	    locals.$id = id;
/******/ 	    locals.$css = css;
/******/ 	    locals.$get = get;
/******/ 	    locals.$cssStates = cssStates;
/******/ 	    function stylable_runtime_stylesheet(className, states, inheritedAttributes) {
/******/ 	        className = className ? mapClasses(className) : '';
/******/ 	        var base = cssStates(states);
/******/ 	        if (inheritedAttributes) {
/******/ 	            for (var k in inheritedAttributes) {
/******/ 	                if (k.match(/^data-/)) {
/******/ 	                    base[k] = inheritedAttributes[k];
/******/ 	                }
/******/ 	            }
/******/ 	            if (inheritedAttributes.className) {
/******/ 	                className += ' ' + inheritedAttributes.className;
/******/ 	            }
/******/ 	        }
/******/ 	        if (className) {
/******/ 	            base.className = className;
/******/ 	        }
/******/ 	        return base;
/******/ 	    }
/******/ 	    Object.setPrototypeOf(stylable_runtime_stylesheet, locals);
/******/ 	    // EDGE CACHE BUG FIX
/******/ 	    stylable_runtime_stylesheet[locals.$root] = locals[locals.$root];
/******/ 	    return stylable_runtime_stylesheet;
/******/ 	}
/******/ 	exports.create = create;
/******/ 	function createTheme(css, depth, id) {
/******/ 	    return { $css: css, $depth: depth, $id: id, $theme: true };
/******/ 	}
/******/ 	exports.createTheme = createTheme;
/******/ 	}());;
/******/ 	return exports;
/******/ 	};
/******/ 	window["__stylable_runtime__"] = __webpack_require__.stylable = window["__stylable_runtime__"] || StylableRuntime();
/******/ 	__webpack_require__(/*! ../node_modules/wix-ui-core/dist/es/src/components/popover/Popover.st.css */ 14);
/******/ 	__webpack_require__(/*! ../node_modules/wix-style-react/dist/es/src/Loader/Loader.st.css */ 28);
/******/ 	__webpack_require__(/*! ../node_modules/wix-ui-core/dist/es/src/components/button-next/button-next.st.css */ 42);
/******/ 	__webpack_require__(/*! ../node_modules/wix-ui-core/dist/es/src/hocs/Focusable/Focusable.st.css */ 49);
/******/ 	__webpack_require__(/*! ../node_modules/wix-style-react/dist/es/src/CloseButton/CloseButton.st.css */ 54);
/******/ 	__webpack_require__(/*! ../node_modules/wix-style-react/dist/es/src/Tooltip/Tooltip.st.css */ 76);
/******/ 	__webpack_require__(/*! ../node_modules/wix-style-react/dist/es/src/Image/Image.st.css */ 80);
/******/ 	__webpack_require__(/*! ../node_modules/wix-style-react/dist/es/src/Text/Text.st.css */ 86);
/******/ 	__webpack_require__(/*! ../node_modules/wix-ui-core/dist/es/src/components/tooltip/Tooltip.st.css */ 89);
/******/ 	__webpack_require__(/*! ../node_modules/wix-style-react/dist/es/src/Heading/Heading.st.css */ 90);
/******/ 	__webpack_require__(/*! ../node_modules/wix-style-react/dist/es/src/StatusIndicator/StatusIndicator.st.css */ 92);
/******/ 	if(typeof window !== 'undefined') { __webpack_require__.stylable.$.init(window); }
/******/ 	var jsonpArray = window["webpackJsonp_enote_client"] = window["webpackJsonp_enote_client"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 157);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 108)();
}


/***/ }),
/* 2 */
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 3 */
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 4 */
/*!********************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/Input/Input.scss ***!
  \********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"D10":"#162D3D","d10":"#162D3D","D20":"#32536A","d20":"#32536A","D30":"#577083","d30":"#577083","D40":"#7A92A5","d40":"#7A92A5","D50":"#B6C1CD","d50":"#B6C1CD","D55":"#CBD3DC","d55":"#CBD3DC","D60":"#DFE5EB","d60":"#DFE5EB","D70":"#F0F4F7","d70":"#F0F4F7","D80":"#fff","d80":"#fff","B00":"#2B81CB","b00":"#2B81CB","B05":"#308DDD","b05":"#308DDD","B10":"#3899EC","b10":"#3899EC","B20":"#4EB7F5","b20":"#4EB7F5","B25":"#A1D7FB","b25":"#A1D7FB","B27":"#B3E0FB","b27":"#B3E0FB","B30":"#C1E4FE","b30":"#C1E4FE","B40":"#DAEFFE","b40":"#DAEFFE","B50":"#EAF7FF","b50":"#EAF7FF","B60":"#F4FAFE","b60":"#F4FAFE","F00":"#AADBFC","f00":"#AADBFC","P00":"#8E21B1","p00":"#8E21B1","P10":"#AA4DC8","p10":"#AA4DC8","P20":"#CD68ED","p20":"#CD68ED","P30":"#E5C9EE","p30":"#E5C9EE","P40":"#EEDBF4","p40":"#EEDBF4","P50":"#FAEEFF","p50":"#FAEEFF","P60":"#FAF7FC","p60":"#FAF7FC","O00":"#EA5F0E","o00":"#EA5F0E","O10":"#FB7D33","o10":"#FB7D33","O20":"#FF9A48","o20":"#FF9A48","R00":"#D6453D","r00":"#D6453D","R05":"#D8504C","r05":"#D8504C","R10":"#EE5951","r10":"#EE5951","R20":"#f66","r20":"#f66","R30":"#FFD7D7","r30":"#FFD7D7","R40":"#FFE1E1","r40":"#FFE1E1","R50":"#FFEBEB","r50":"#FFEBEB","R60":"#FFF5F5","r60":"#FFF5F5","G00":"#44823F","g00":"#44823F","G05":"#61AD5A","g05":"#61AD5A","G10":"#60BC57","g10":"#60BC57","G20":"#80C979","g20":"#80C979","G30":"#C9EEBC","g30":"#C9EEBC","G40":"#DEF4D4","g40":"#DEF4D4","G50":"#EDF9E5","g50":"#EDF9E5","G60":"#F2FBEF","g60":"#F2FBEF","Y00":"#C68801","y00":"#C68801","Y05":"#EDA200","y05":"#EDA200","Y10":"#FDB10C","y10":"#FDB10C","Y20":"#FAC249","y20":"#FAC249","Y30":"#FEF0BA","y30":"#FEF0BA","Y40":"#FEF4CD","y40":"#FEF4CD","Y50":"#FDF7DF","y50":"#FDF7DF","Y60":"#FFFCF0","y60":"#FFFCF0","A1":"#3370FB","a1":"#3370FB","A2":"#7852D2","a2":"#7852D2","A3":"#17B0E2","a3":"#17B0E2","A4":"#C53E99","a4":"#C53E99","A5":"#FDB10C","a5":"#FDB10C","A6":"#3D9FA1","a6":"#3D9FA1","B1":"#EF73C0","b1":"#EF73C0","B2":"#FF8D41","b2":"#FF8D41","B3":"#ED6779","b3":"#ED6779","B4":"#125b8f","b4":"#125b8f","C1":"#4abd81","c1":"#4abd81","C2":"#2682CD","c2":"#2682CD","C3":"#68A4D5","c3":"#68A4D5","C4":"#FF8E8C","c4":"#FF8E8C","D10-05":"rgba(22,45,61,0.05)","d1005":"rgba(22,45,61,0.05)","D10-10":"rgba(22,45,61,0.1)","d1010":"rgba(22,45,61,0.1)","D10-20":"rgba(22,45,61,0.2)","d1020":"rgba(22,45,61,0.2)","D10-30":"rgba(22,45,61,0.3)","d1030":"rgba(22,45,61,0.3)","root":"_3msYJ","readOnly":"_2xzJ5","hasFocus":"_3OPx6","disabled":"_1HjKu","hasHover":"_347dk","input":"_3bzhC","hasError":"_2K9mR","hasWarning":"_39f5G","input-wrapper":"_2-DRc","inputWrapper":"_2-DRc","size-large":"-aF0D","sizeLarge":"-aF0D","roundInput":"_6Za-M","menu-arrow":"ZwnU8","menuArrow":"ZwnU8","suffixes":"_1FI97","suffix":"_1BRwn","size-normal":"_1WuXR","sizeNormal":"_1WuXR","size-medium":"_1o3tA","sizeMedium":"_1o3tA","size-small":"_16L_d","sizeSmall":"_16L_d","noRightBorderRadius":"_3E7D8","noLeftBorderRadius":"B26Iy","prefix":"_3pLpG","size-small-with-selection":"y6ADY","sizeSmallWithSelection":"y6ADY","size-normal-with-selection":"_3hEYB","sizeNormalWithSelection":"_3hEYB","size-medium-with-selection":"_3MUf-","sizeMediumWithSelection":"_3MUf-","size-large-with-selection":"_2TT6s","sizeLargeWithSelection":"_2TT6s","rtl":"_3BXEh","clear-button":"_8wnSc","clearButton":"_8wnSc"};

/***/ }),
/* 5 */
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/*! exports used: __assign, __extends, __rest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __rest; });
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 6 */
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 7 */
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 8 */
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 9 */
/*!*******************************************!*\
  !*** ../node_modules/classnames/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 10 */
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ 47);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 11 */
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 12 */
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 13 */
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),
/* 14 */
/*!*********************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/es/src/components/popover/Popover.st.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "Popover1242101375",
  {"root":"Popover1242101375--root","popoverAnimation":"Popover1242101375--popoverAnimation","popoverAnimation-enter":"Popover1242101375--popoverAnimation-enter","popoverAnimation-enter-active":"Popover1242101375--popoverAnimation-enter-active","popoverAnimation-exit":"Popover1242101375--popoverAnimation-exit","popoverAnimation-exit-active":"Popover1242101375--popoverAnimation-exit-active","popoverContent":"Popover1242101375--popoverContent","arrow":"Popover1242101375--arrow","popover":"Popover1242101375--popover","withArrow":"Popover1242101375--withArrow","popoverElement":"Popover1242101375--popoverElement","contentBackgroundColor":"white","contentBorderWidth":"1px","contentBorderStyle":"solid","contentBorderColor":"black","contentBorderRadius":"initial","contentPadding":"initial","contentArrowSize":"5px"},
  ".Popover1242101375--root{position:relative;display:inline-block}.Popover1242101375--root[data-popover1242101375-fluid]{display:block}.Popover1242101375--popoverContent{background-color:#fff;border-width:1px;border-style:solid;border-color:#000;border-radius:initial;padding:initial}.Popover1242101375--arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px}.Popover1242101375--popover[data-placement*=right].Popover1242101375--withArrow{padding-left:5px}.Popover1242101375--popover[data-placement*=right].Popover1242101375--withArrow .Popover1242101375--arrow{border-width:5px 5px 5px 0;left:-5px;margin-left:5px;margin-right:0;border-color:transparent #000 transparent transparent}.Popover1242101375--popover[data-placement*=left].Popover1242101375--withArrow{padding-right:5px}.Popover1242101375--popover[data-placement*=left].Popover1242101375--withArrow .Popover1242101375--arrow{border-width:5px 0 5px 5px;right:-5px;margin-left:0;margin-right:5px;border-color:transparent transparent transparent #000}.Popover1242101375--popover[data-placement*=bottom].Popover1242101375--withArrow{padding-top:5px}.Popover1242101375--popover[data-placement*=bottom].Popover1242101375--withArrow .Popover1242101375--arrow{border-width:0 5px 5px 5px;top:-5px;margin-top:5px;margin-bottom:0;border-color:transparent transparent #000 transparent}.Popover1242101375--popover[data-placement*=top].Popover1242101375--withArrow{padding-bottom:5px}.Popover1242101375--popover[data-placement*=top].Popover1242101375--withArrow .Popover1242101375--arrow{border-width:5px 5px 0 5px;bottom:-5px;margin-top:0;margin-bottom:5px;border-color:#000 transparent transparent transparent}",
  1,
  "Popover1242101375"
);
__webpack_require__.stylable.$.register(exports.default)


/***/ }),
/* 15 */
/*!**********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inherits.js ***!
  \**********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ 111);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 16 */
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ 112);

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ 3);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 17 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 18 */
/*!****************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/Box/Box.scss ***!
  \****************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"_1nx1e","inline":"A5lov","horizontal":"_33q2k","left":"b6Wfc","center":"phGJG","right":"Neywd","top":"_20vuT","middle":"_2ibrw","bottom":"OCvVX","vertical":"_2arHU","spaceBetween":"_2JAJG"};

/***/ }),
/* 19 */
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 20 */
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),
/* 21 */
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 22 */
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 23 */
/*!**************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/es/src/utils/index.js ***!
  \**************************************************************/
/*! exports provided: buildChildrenObject, createComponentThatRendersItsChildren, noop, isReactElement, isStatelessComponent */
/*! exports used: buildChildrenObject, createComponentThatRendersItsChildren, isStatelessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildChildrenObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createComponentThatRendersItsChildren; });
/* unused harmony export noop */
/* unused harmony export isReactElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isStatelessComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var buildChildrenObject = function (children, childrenObject) {
    return react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).reduce(function (acc, child) {
        if (!react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](child)) {
            return acc;
        }
        if (!child.type || !child.type.displayName) {
            return acc;
        }
        var name = child.type.displayName.split('.').pop();
        acc[name] = child;
        return acc;
    }, childrenObject || {});
};
var createComponentThatRendersItsChildren = function (displayName) {
    var Element = function (_a) {
        var children = _a.children;
        return typeof children === 'string'
            ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]('div', {}, children)
            : children;
    };
    Element.displayName = displayName;
    return Element;
};
var noop = function () { return null; };
var isReactElement = function (child, Element) {
    return child && child.type === Element;
};
var isStatelessComponent = function (Component) {
    return !(Component.prototype && Component.prototype.render);
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 24 */
/*!************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 25 */
/*!***************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/colors.scss ***!
  \***************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"D10":"#162D3D","d10":"#162D3D","D20":"#32536A","d20":"#32536A","D30":"#577083","d30":"#577083","D40":"#7A92A5","d40":"#7A92A5","D50":"#B6C1CD","d50":"#B6C1CD","D55":"#CBD3DC","d55":"#CBD3DC","D60":"#DFE5EB","d60":"#DFE5EB","D70":"#F0F4F7","d70":"#F0F4F7","D80":"#fff","d80":"#fff","B00":"#2B81CB","b00":"#2B81CB","B05":"#308DDD","b05":"#308DDD","B10":"#3899EC","b10":"#3899EC","B20":"#4EB7F5","b20":"#4EB7F5","B25":"#A1D7FB","b25":"#A1D7FB","B27":"#B3E0FB","b27":"#B3E0FB","B30":"#C1E4FE","b30":"#C1E4FE","B40":"#DAEFFE","b40":"#DAEFFE","B50":"#EAF7FF","b50":"#EAF7FF","B60":"#F4FAFE","b60":"#F4FAFE","F00":"#AADBFC","f00":"#AADBFC","P00":"#8E21B1","p00":"#8E21B1","P10":"#AA4DC8","p10":"#AA4DC8","P20":"#CD68ED","p20":"#CD68ED","P30":"#E5C9EE","p30":"#E5C9EE","P40":"#EEDBF4","p40":"#EEDBF4","P50":"#FAEEFF","p50":"#FAEEFF","P60":"#FAF7FC","p60":"#FAF7FC","O00":"#EA5F0E","o00":"#EA5F0E","O10":"#FB7D33","o10":"#FB7D33","O20":"#FF9A48","o20":"#FF9A48","R00":"#D6453D","r00":"#D6453D","R05":"#D8504C","r05":"#D8504C","R10":"#EE5951","r10":"#EE5951","R20":"#f66","r20":"#f66","R30":"#FFD7D7","r30":"#FFD7D7","R40":"#FFE1E1","r40":"#FFE1E1","R50":"#FFEBEB","r50":"#FFEBEB","R60":"#FFF5F5","r60":"#FFF5F5","G00":"#44823F","g00":"#44823F","G05":"#61AD5A","g05":"#61AD5A","G10":"#60BC57","g10":"#60BC57","G20":"#80C979","g20":"#80C979","G30":"#C9EEBC","g30":"#C9EEBC","G40":"#DEF4D4","g40":"#DEF4D4","G50":"#EDF9E5","g50":"#EDF9E5","G60":"#F2FBEF","g60":"#F2FBEF","Y00":"#C68801","y00":"#C68801","Y05":"#EDA200","y05":"#EDA200","Y10":"#FDB10C","y10":"#FDB10C","Y20":"#FAC249","y20":"#FAC249","Y30":"#FEF0BA","y30":"#FEF0BA","Y40":"#FEF4CD","y40":"#FEF4CD","Y50":"#FDF7DF","y50":"#FDF7DF","Y60":"#FFFCF0","y60":"#FFFCF0","A1":"#3370FB","a1":"#3370FB","A2":"#7852D2","a2":"#7852D2","A3":"#17B0E2","a3":"#17B0E2","A4":"#C53E99","a4":"#C53E99","A5":"#FDB10C","a5":"#FDB10C","A6":"#3D9FA1","a6":"#3D9FA1","B1":"#EF73C0","b1":"#EF73C0","B2":"#FF8D41","b2":"#FF8D41","B3":"#ED6779","b3":"#ED6779","B4":"#125b8f","b4":"#125b8f","C1":"#4abd81","c1":"#4abd81","C2":"#2682CD","c2":"#2682CD","C3":"#68A4D5","c3":"#68A4D5","C4":"#FF8E8C","c4":"#FF8E8C","D10-05":"rgba(22,45,61,0.05)","d1005":"rgba(22,45,61,0.05)","D10-10":"rgba(22,45,61,0.1)","d1010":"rgba(22,45,61,0.1)","D10-20":"rgba(22,45,61,0.2)","d1020":"rgba(22,45,61,0.2)","D10-30":"rgba(22,45,61,0.3)","d1030":"rgba(22,45,61,0.3)"};

/***/ }),
/* 26 */
/*!*********************************************************!*\
  !*** ../node_modules/create-react-context/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ 119);

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),
/* 27 */
/*!**************************************!*\
  !*** ./sections/home/hero/hero.scss ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"heading":"_3maLB","paragraph":"nARXf","img":"_1_D-f","input":"i2rWv","btn__cta":"_20uFQ","btnCta":"_20uFQ","mbtn":"_17iTM"};

/***/ }),
/* 28 */
/*!************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/Loader/Loader.st.css ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "Loader3169868174",
  {"root":"Loader3169868174--root","statusIndicator":"Loader3169868174--statusIndicator","arcsContainer":"Loader3169868174--arcsContainer","darkArc":"Loader3169868174--darkArc","lightArc":"Loader3169868174--lightArc","text":"Loader3169868174--text","rotation":"Loader3169868174--rotation","staggered-rotation":"Loader3169868174--staggered-rotation"},
  "@keyframes Loader3169868174--rotation{100%{transform:rotate(360deg)}}@keyframes Loader3169868174--staggered-rotation{50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.Loader3169868174--root{display:inline-flex;flex-direction:column;align-items:center}.Loader3169868174--statusIndicator{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.Loader3169868174--statusIndicator svg{height:14px;width:19px}.Loader3169868174--root[data-loader3169868174-size=tiny] .Loader3169868174--statusIndicator svg{height:8px;width:10px}.Loader3169868174--root[data-loader3169868174-size=small] .Loader3169868174--statusIndicator svg{height:8px;width:11px}.Loader3169868174--arcsContainer{position:relative}.Loader3169868174--darkArc{stroke:#2b81cb;position:absolute;top:0;left:0;width:100%;height:100%;fill:none;stroke-linecap:round}.Loader3169868174--lightArc{position:absolute;top:0;left:0;width:100%;height:100%;fill:none;stroke-linecap:round}.Loader3169868174--text{margin-top:18px;max-width:150px;word-wrap:break-word;text-align:center}.Loader3169868174--root[data-loader3169868174-status=success]{color:#2b81cb}.Loader3169868174--root[data-loader3169868174-status=success][data-loader3169868174-size=tiny]{color:#fff}.Loader3169868174--root[data-loader3169868174-status=success][data-loader3169868174-size=tiny] .Loader3169868174--darkArc{fill:#2b81cb}.Loader3169868174--root[data-loader3169868174-status=error]{color:#ee5951}.Loader3169868174--root[data-loader3169868174-status=error] .Loader3169868174--darkArc{stroke:#ee5951}.Loader3169868174--root[data-loader3169868174-status=error][data-loader3169868174-size=tiny]{color:#fff}.Loader3169868174--root[data-loader3169868174-status=error][data-loader3169868174-size=tiny] .Loader3169868174--darkArc{fill:#ee5951}.Loader3169868174--root[data-loader3169868174-status=loading][data-loader3169868174-size=tiny] .Loader3169868174--arcsContainer .Loader3169868174--lightArc{animation:Loader3169868174--rotation 2s linear infinite}.Loader3169868174--root[data-loader3169868174-status=loading][data-loader3169868174-size=tiny] .Loader3169868174--arcsContainer .Loader3169868174--darkArc{animation:Loader3169868174--rotation 666ms linear infinite}.Loader3169868174--root[data-loader3169868174-status=loading][data-loader3169868174-size=small] .Loader3169868174--arcsContainer .Loader3169868174--lightArc{animation:Loader3169868174--rotation 2s linear infinite}.Loader3169868174--root[data-loader3169868174-status=loading][data-loader3169868174-size=small] .Loader3169868174--arcsContainer .Loader3169868174--darkArc{animation:Loader3169868174--rotation .5s linear infinite}.Loader3169868174--root[data-loader3169868174-status=loading][data-loader3169868174-size=medium] .Loader3169868174--arcsContainer{animation:Loader3169868174--rotation 2s linear infinite}.Loader3169868174--root[data-loader3169868174-status=loading][data-loader3169868174-size=medium] .Loader3169868174--arcsContainer .Loader3169868174--lightArc{animation:Loader3169868174--rotation 666ms ease-in-out infinite}.Loader3169868174--root[data-loader3169868174-status=loading][data-loader3169868174-size=large] .Loader3169868174--arcsContainer{animation:Loader3169868174--rotation 2s linear infinite}.Loader3169868174--root[data-loader3169868174-status=loading][data-loader3169868174-size=large] .Loader3169868174--arcsContainer .Loader3169868174--lightArc{animation:Loader3169868174--staggered-rotation 2s ease-in-out infinite}.Loader3169868174--root[data-loader3169868174-color=blue] .Loader3169868174--lightArc{stroke:#c1e4fe}.Loader3169868174--root[data-loader3169868174-color=white] .Loader3169868174--lightArc{stroke:#fff}",
  2,
  "Loader3169868174"
);
__webpack_require__.stylable.$.register(exports.default)


/***/ }),
/* 29 */
/*!**************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/Input/Affix/Affix.scss ***!
  \**************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"D10":"#162D3D","d10":"#162D3D","D20":"#32536A","d20":"#32536A","D30":"#577083","d30":"#577083","D40":"#7A92A5","d40":"#7A92A5","D50":"#B6C1CD","d50":"#B6C1CD","D55":"#CBD3DC","d55":"#CBD3DC","D60":"#DFE5EB","d60":"#DFE5EB","D70":"#F0F4F7","d70":"#F0F4F7","D80":"#fff","d80":"#fff","B00":"#2B81CB","b00":"#2B81CB","B05":"#308DDD","b05":"#308DDD","B10":"#3899EC","b10":"#3899EC","B20":"#4EB7F5","b20":"#4EB7F5","B25":"#A1D7FB","b25":"#A1D7FB","B27":"#B3E0FB","b27":"#B3E0FB","B30":"#C1E4FE","b30":"#C1E4FE","B40":"#DAEFFE","b40":"#DAEFFE","B50":"#EAF7FF","b50":"#EAF7FF","B60":"#F4FAFE","b60":"#F4FAFE","F00":"#AADBFC","f00":"#AADBFC","P00":"#8E21B1","p00":"#8E21B1","P10":"#AA4DC8","p10":"#AA4DC8","P20":"#CD68ED","p20":"#CD68ED","P30":"#E5C9EE","p30":"#E5C9EE","P40":"#EEDBF4","p40":"#EEDBF4","P50":"#FAEEFF","p50":"#FAEEFF","P60":"#FAF7FC","p60":"#FAF7FC","O00":"#EA5F0E","o00":"#EA5F0E","O10":"#FB7D33","o10":"#FB7D33","O20":"#FF9A48","o20":"#FF9A48","R00":"#D6453D","r00":"#D6453D","R05":"#D8504C","r05":"#D8504C","R10":"#EE5951","r10":"#EE5951","R20":"#f66","r20":"#f66","R30":"#FFD7D7","r30":"#FFD7D7","R40":"#FFE1E1","r40":"#FFE1E1","R50":"#FFEBEB","r50":"#FFEBEB","R60":"#FFF5F5","r60":"#FFF5F5","G00":"#44823F","g00":"#44823F","G05":"#61AD5A","g05":"#61AD5A","G10":"#60BC57","g10":"#60BC57","G20":"#80C979","g20":"#80C979","G30":"#C9EEBC","g30":"#C9EEBC","G40":"#DEF4D4","g40":"#DEF4D4","G50":"#EDF9E5","g50":"#EDF9E5","G60":"#F2FBEF","g60":"#F2FBEF","Y00":"#C68801","y00":"#C68801","Y05":"#EDA200","y05":"#EDA200","Y10":"#FDB10C","y10":"#FDB10C","Y20":"#FAC249","y20":"#FAC249","Y30":"#FEF0BA","y30":"#FEF0BA","Y40":"#FEF4CD","y40":"#FEF4CD","Y50":"#FDF7DF","y50":"#FDF7DF","Y60":"#FFFCF0","y60":"#FFFCF0","A1":"#3370FB","a1":"#3370FB","A2":"#7852D2","a2":"#7852D2","A3":"#17B0E2","a3":"#17B0E2","A4":"#C53E99","a4":"#C53E99","A5":"#FDB10C","a5":"#FDB10C","A6":"#3D9FA1","a6":"#3D9FA1","B1":"#EF73C0","b1":"#EF73C0","B2":"#FF8D41","b2":"#FF8D41","B3":"#ED6779","b3":"#ED6779","B4":"#125b8f","b4":"#125b8f","C1":"#4abd81","c1":"#4abd81","C2":"#2682CD","c2":"#2682CD","C3":"#68A4D5","c3":"#68A4D5","C4":"#FF8E8C","c4":"#FF8E8C","D10-05":"rgba(22,45,61,0.05)","d1005":"rgba(22,45,61,0.05)","D10-10":"rgba(22,45,61,0.1)","d1010":"rgba(22,45,61,0.1)","D10-20":"rgba(22,45,61,0.2)","d1020":"rgba(22,45,61,0.2)","D10-30":"rgba(22,45,61,0.3)","d1030":"rgba(22,45,61,0.3)","custom":"vg9Yr","disabled":"_1n2xC","inSuffix":"_2bP6b","inPrefix":"_1UnRU","rtl":"_1p_Ma"};

/***/ }),
/* 30 */,
/* 31 */
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \***************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 32 */
/*!*******************************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/index.js + 2 modules ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js because of ./client.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/extends.js because of ./client.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js because of ./client.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js because of ./client.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/common/hocUtils.js because of ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsedTooltip.js */
/*! ModuleConcatenation bailout: Cannot concat with external "React" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(10);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(20);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(6);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(19);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(13);

// EXTERNAL MODULE: ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(40);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ../node_modules/@loadable/component/dist/loadable.esm.js







/* eslint-disable import/prefer-default-export */
function invariant(condition, message) {
  if (condition) return;
  var error = new Error("loadable: " + message);
  error.framesToPop = 1;
  error.name = 'Invariant Violation';
  throw error;
}
function warn(message) {
  // eslint-disable-next-line no-console
  console.warn("loadable: " + message);
}

var Context = /*#__PURE__*/
external_React_default.a.createContext();

var LOADABLE_REQUIRED_CHUNKS_KEY = '__LOADABLE_REQUIRED_CHUNKS__';
function getRequiredChunkKey(namespace) {
  return "" + namespace + LOADABLE_REQUIRED_CHUNKS_KEY;
}

var sharedInternals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getRequiredChunkKey: getRequiredChunkKey,
  invariant: invariant,
  Context: Context
});

function resolveConstructor(ctor) {
  if (typeof ctor === 'function') {
    return {
      requireAsync: ctor
    };
  }

  return ctor;
}

var loadable_esm_withChunkExtractor = function withChunkExtractor(Component) {
  return function (props) {
    return external_React_default.a.createElement(Context.Consumer, null, function (extractor) {
      return external_React_default.a.createElement(Component, Object.assign({
        __chunkExtractor: extractor
      }, props));
    });
  };
};

var identity = function identity(v) {
  return v;
};

function createLoadable(_ref) {
  var _ref$resolve = _ref.resolve,
      resolve = _ref$resolve === void 0 ? identity : _ref$resolve,
      _render = _ref.render,
      onLoad = _ref.onLoad;

  function loadable(loadableConstructor, options) {
    if (options === void 0) {
      options = {};
    }

    var ctor = resolveConstructor(loadableConstructor);
    var cache = {};

    function _getCacheKey(props) {
      if (options.cacheKey) {
        return options.cacheKey(props);
      }

      if (ctor.resolve) {
        return ctor.resolve(props);
      }

      return null;
    }

    var InnerLoadable =
    /*#__PURE__*/
    function (_React$Component) {
      Object(inheritsLoose["a" /* default */])(InnerLoadable, _React$Component);

      InnerLoadable.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var cacheKey = _getCacheKey(props);

        return Object(esm_extends["a" /* default */])({}, state, {
          cacheKey: cacheKey,
          loading: state.loading || state.cacheKey !== cacheKey
        });
      };

      function InnerLoadable(props) {
        var _this;

        _this = _React$Component.call(this, props) || this;
        _this.state = {
          result: null,
          error: null,
          loading: true,
          cacheKey: _getCacheKey(props)
        };
        _this.promise = null;
        invariant(!props.__chunkExtractor || ctor.requireSync, 'SSR requires `@loadable/babel-plugin`, please install it'); // Server-side

        if (props.__chunkExtractor) {
          // This module has been marked with no SSR
          if (options.ssr === false) {
            return Object(assertThisInitialized["a" /* default */])(_this);
          } // We run load function, we assume that it won't fail and that it
          // triggers a synchronous loading of the module


          ctor.requireAsync(props)["catch"](function () {}); // So we can require now the module synchronously

          _this.loadSync();

          props.__chunkExtractor.addChunk(ctor.chunkName(props));

          return Object(assertThisInitialized["a" /* default */])(_this);
        } // Client-side with `isReady` method present (SSR probably)
        // If module is already loaded, we use a synchronous loading
        // Only perform this synchronous loading if the component has not
        // been marked with no SSR, else we risk hydration mismatches


        if (options.ssr !== false && ctor.isReady && ctor.isReady(props)) {
          _this.loadSync();
        }

        return _this;
      }

      var _proto = InnerLoadable.prototype;

      _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;

        if (this.state.loading) {
          this.loadAsync();
        } else if (!this.state.error) {
          this.triggerOnLoad();
        }
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        // Component is reloaded if the cacheKey has changed
        if (prevState.cacheKey !== this.state.cacheKey) {
          this.promise = null;
          this.loadAsync();
        }
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };

      _proto.safeSetState = function safeSetState(nextState, callback) {
        if (this.mounted) {
          this.setState(nextState, callback);
        }
      };

      _proto.triggerOnLoad = function triggerOnLoad() {
        var _this2 = this;

        if (onLoad) {
          setTimeout(function () {
            onLoad(_this2.state.result, _this2.props);
          });
        }
      };

      _proto.loadSync = function loadSync() {
        if (!this.state.loading) return;

        try {
          var loadedModule = ctor.requireSync(this.props);
          var result = resolve(loadedModule, {
            Loadable: Loadable
          });
          this.state.result = result;
          this.state.loading = false;
        } catch (error) {
          this.state.error = error;
        }
      };

      _proto.getCacheKey = function getCacheKey() {
        return _getCacheKey(this.props) || JSON.stringify(this.props);
      };

      _proto.getCache = function getCache() {
        return cache[this.getCacheKey()];
      };

      _proto.setCache = function setCache(value) {
        cache[this.getCacheKey()] = value;
      };

      _proto.loadAsync = function loadAsync() {
        var _this3 = this;

        if (!this.promise) {
          var _this$props = this.props,
              __chunkExtractor = _this$props.__chunkExtractor,
              forwardedRef = _this$props.forwardedRef,
              props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["__chunkExtractor", "forwardedRef"]);

          this.promise = ctor.requireAsync(props).then(function (loadedModule) {
            var result = resolve(loadedModule, {
              Loadable: Loadable
            });

            if (options.suspense) {
              _this3.setCache(result);
            }

            _this3.safeSetState({
              result: resolve(loadedModule, {
                Loadable: Loadable
              }),
              loading: false
            }, function () {
              return _this3.triggerOnLoad();
            });
          })["catch"](function (error) {
            _this3.safeSetState({
              error: error,
              loading: false
            });
          });
        }

        return this.promise;
      };

      _proto.render = function render() {
        var _this$props2 = this.props,
            forwardedRef = _this$props2.forwardedRef,
            propFallback = _this$props2.fallback,
            __chunkExtractor = _this$props2.__chunkExtractor,
            props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props2, ["forwardedRef", "fallback", "__chunkExtractor"]);

        var _this$state = this.state,
            error = _this$state.error,
            loading = _this$state.loading,
            result = _this$state.result;

        if (options.suspense) {
          var cachedResult = this.getCache();
          if (!cachedResult) throw this.loadAsync();
          return _render({
            loading: false,
            fallback: null,
            result: cachedResult,
            options: options,
            props: Object(esm_extends["a" /* default */])({}, props, {
              ref: forwardedRef
            })
          });
        }

        if (error) {
          throw error;
        }

        var fallback = propFallback || options.fallback || null;

        if (loading) {
          return fallback;
        }

        return _render({
          loading: loading,
          fallback: fallback,
          result: result,
          options: options,
          props: Object(esm_extends["a" /* default */])({}, props, {
            ref: forwardedRef
          })
        });
      };

      return InnerLoadable;
    }(external_React_default.a.Component);

    var EnhancedInnerLoadable = loadable_esm_withChunkExtractor(InnerLoadable);
    var Loadable = external_React_default.a.forwardRef(function (props, ref) {
      return external_React_default.a.createElement(EnhancedInnerLoadable, Object.assign({
        forwardedRef: ref
      }, props));
    }); // In future, preload could use `<link rel="preload">`

    Loadable.preload = function (props) {
      ctor.requireAsync(props);
    };

    Loadable.load = function (props) {
      return ctor.requireAsync(props);
    };

    return Loadable;
  }

  function lazy(ctor, options) {
    return loadable(ctor, Object(esm_extends["a" /* default */])({}, options, {
      suspense: true
    }));
  }

  return {
    loadable: loadable,
    lazy: lazy
  };
}

function resolveComponent(loadedModule, _ref) {
  var Loadable = _ref.Loadable;
  // eslint-disable-next-line no-underscore-dangle
  var Component = loadedModule.__esModule ? loadedModule["default"] : loadedModule["default"] || loadedModule;
  hoist_non_react_statics_cjs_default()(Loadable, Component, {
    preload: true
  });
  return Component;
}

/* eslint-disable no-use-before-define, react/no-multi-comp */

var _createLoadable =
/*#__PURE__*/
createLoadable({
  resolve: resolveComponent,
  render: function render(_ref) {
    var Component = _ref.result,
        props = _ref.props;
    return external_React_default.a.createElement(Component, props);
  }
}),
    loadable_esm_loadable = _createLoadable.loadable,
    loadable_esm_lazy = _createLoadable.lazy;

/* eslint-disable no-use-before-define, react/no-multi-comp */

var _createLoadable$1 =
/*#__PURE__*/
createLoadable({
  onLoad: function onLoad(result, props) {
    if (result && props.forwardedRef) {
      if (typeof props.forwardedRef === 'function') {
        props.forwardedRef(result);
      } else {
        props.forwardedRef.current = result;
      }
    }
  },
  render: function render(_ref) {
    var result = _ref.result,
        loading = _ref.loading,
        props = _ref.props;

    if (!loading && props.children) {
      return props.children(result);
    }

    return null;
  }
}),
    loadable$1 = _createLoadable$1.loadable,
    lazy$1 = _createLoadable$1.lazy;

/* eslint-disable no-underscore-dangle, camelcase */
var BROWSER = typeof window !== 'undefined';
function loadableReady(done, _temp) {
  if (done === void 0) {
    done = function done() {};
  }

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? '' : _ref$namespace;

  if (!BROWSER) {
    warn('`loadableReady()` must be called in browser only');
    done();
    return Promise.resolve();
  }

  var requiredChunks = null;

  if (BROWSER) {
    var dataElement = document.getElementById(getRequiredChunkKey(namespace));

    if (dataElement) {
      requiredChunks = JSON.parse(dataElement.textContent);
    }
  }

  if (!requiredChunks) {
    warn('`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side');
    done();
    return Promise.resolve();
  }

  var resolved = false;
  return new Promise(function (resolve) {
    window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || [];
    var loadedChunks = window.__LOADABLE_LOADED_CHUNKS__;
    var originalPush = loadedChunks.push.bind(loadedChunks);

    function checkReadyState() {
      if (requiredChunks.every(function (chunk) {
        return loadedChunks.some(function (_ref2) {
          var chunks = _ref2[0];
          return chunks.indexOf(chunk) > -1;
        });
      })) {
        if (!resolved) {
          resolved = true;
          resolve();
          done();
        }
      }
    }

    loadedChunks.push = function () {
      originalPush.apply(void 0, arguments);
      checkReadyState();
    };

    checkReadyState();
  });
}

/* eslint-disable no-underscore-dangle */
var loadable$2 = loadable_esm_loadable;
loadable$2.lib = loadable$1;
var lazy$2 = loadable_esm_lazy;
lazy$2.lib = lazy$1;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sharedInternals;

/* harmony default export */ var loadable_esm = (loadable$2);


// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/utils.js
var retry = function retry(fn) {
  var retriesLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  return new Promise(function (resolve, reject) {
    fn().then(resolve)["catch"](function (error) {
      setTimeout(function () {
        if (retriesLeft === 1) {
          // reject('maximum retries exceeded');
          reject(error);
          return;
        } // Passing on "reject" is the important part


        retry(fn, retriesLeft - 1, interval).then(resolve, reject);
      }, interval);
    });
  });
};
// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/common/hocUtils.js
var hocUtils = __webpack_require__(61);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/index.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/**
 * Here we need to use loadable for now because React.lazy is
 * not supporting SSR yet.
 */




var validTooltipProps = ['flip', 'fixed', 'placement', 'timeout', 'appendTo', 'maxWidth', 'zIndex', 'hideDelay', 'showDelay', 'showTooltip'];

var EllipsisHOC_omit = function omit(props, remove) {
  return Object.keys(props).filter(function (prop) {
    return !remove.includes(prop);
  }).reduce(function (res, key) {
    return _objectSpread(_objectSpread({}, res), {}, defineProperty_default()({}, key, props[key]));
  }, {});
};

var fallbackEllipsis = {
  display: 'inline-block',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxWidth: '100%',
  verticalAlign: 'bottom',
  whiteSpace: 'noWrap'
};
var LazyEllipsisHOC = loadable_esm(function () {
  return retry(function () {
    return __webpack_require__.e(/*! import() | wsr-ellipsisHOC */ 1).then(__webpack_require__.bind(null, /*! ./EllipsisHOC */ 188));
  });
});

var EllipsisHOC_Comp
/** @autodocs-component */
= function Comp(Component) {
  var displayName = Object(hocUtils["a" /* getDisplayName */])(Component);
  var Ellipsed = /*#__PURE__*/external_React_default.a.memo( /*#__PURE__*/external_React_default.a.forwardRef(function (_ref, ref) {
    var ellipsis = _ref.ellipsis,
        props = objectWithoutProperties_default()(_ref, ["ellipsis"]);

    var rest = EllipsisHOC_omit(props, validTooltipProps);

    if (ellipsis) {
      return /*#__PURE__*/external_React_default.a.createElement(LazyEllipsisHOC, {
        ref: ref,
        fallback: /*#__PURE__*/external_React_default.a.createElement(Component, extends_default()({
          style: fallbackEllipsis,
          "data-fallback": true,
          ref: ref
        }, rest)),
        Component: Component,
        props: props
      });
    }

    return /*#__PURE__*/external_React_default.a.createElement(Component, extends_default()({
      ref: ref
    }, rest));
  }));
  Ellipsed.displayName = displayName;
  return Ellipsed;
};

EllipsisHOC_Comp.propTypes = {
  /** should the text get ellipsed with tooltip, or should it get broken into lines when it reaches the end of its container */
  ellipsis: prop_types_default.a.bool,

  /** `ellipsis` prop. Tooltip content calculation relation to a dom element. Can be either:
   *  `'window', 'scrollParent', 'viewport', 'parent'`, `element` or
   * `function` based predicate i.e. (elm) =>
   *  elm.getAttribute('data-hook') === 'value'
   */
  appendTo: prop_types_default.a.oneOfType([prop_types_default.a.oneOf(['window', 'scrollParent', 'viewport', 'parent']), prop_types_default.a.element, prop_types_default.a.func]),

  /** `ellipsis` prop. Whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element. */
  flip: prop_types_default.a.bool,

  /** `ellipsis` prop. Whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary. */
  fixed: prop_types_default.a.bool,

  /** `ellipsis` prop. Tooltip content placement in relation to target element */
  placement: prop_types_default.a.string,

  /** `ellipsis` prop. Tooltip timeout value. */
  timeout: prop_types_default.a.number,

  /** `ellipsis` prop. Tooltip content max width value. */
  maxWidth: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** `ellipsis` prop. Tooltip content zIndex. */
  zIndex: prop_types_default.a.number,

  /** `ellipsis` prop. Tooltip hide delay. */
  hideDelay: prop_types_default.a.number,

  /** `ellipsis` prop. Tooltip show delay. */
  showDelay: prop_types_default.a.number,

  /** `ellipsis` prop. Whether to enable the tooltip when an ellipsis is necessary */
  showTooltip: prop_types_default.a.bool
};
/* harmony default export */ var EllipsisHOC = __webpack_exports__["a"] = (EllipsisHOC_Comp);

/***/ }),
/* 33 */
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ 24);
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ 19);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),
/* 34 */
/*!****************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/Input/Ticker/Ticker.scss ***!
  \****************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"D10":"#162D3D","d10":"#162D3D","D20":"#32536A","d20":"#32536A","D30":"#577083","d30":"#577083","D40":"#7A92A5","d40":"#7A92A5","D50":"#B6C1CD","d50":"#B6C1CD","D55":"#CBD3DC","d55":"#CBD3DC","D60":"#DFE5EB","d60":"#DFE5EB","D70":"#F0F4F7","d70":"#F0F4F7","D80":"#fff","d80":"#fff","B00":"#2B81CB","b00":"#2B81CB","B05":"#308DDD","b05":"#308DDD","B10":"#3899EC","b10":"#3899EC","B20":"#4EB7F5","b20":"#4EB7F5","B25":"#A1D7FB","b25":"#A1D7FB","B27":"#B3E0FB","b27":"#B3E0FB","B30":"#C1E4FE","b30":"#C1E4FE","B40":"#DAEFFE","b40":"#DAEFFE","B50":"#EAF7FF","b50":"#EAF7FF","B60":"#F4FAFE","b60":"#F4FAFE","F00":"#AADBFC","f00":"#AADBFC","P00":"#8E21B1","p00":"#8E21B1","P10":"#AA4DC8","p10":"#AA4DC8","P20":"#CD68ED","p20":"#CD68ED","P30":"#E5C9EE","p30":"#E5C9EE","P40":"#EEDBF4","p40":"#EEDBF4","P50":"#FAEEFF","p50":"#FAEEFF","P60":"#FAF7FC","p60":"#FAF7FC","O00":"#EA5F0E","o00":"#EA5F0E","O10":"#FB7D33","o10":"#FB7D33","O20":"#FF9A48","o20":"#FF9A48","R00":"#D6453D","r00":"#D6453D","R05":"#D8504C","r05":"#D8504C","R10":"#EE5951","r10":"#EE5951","R20":"#f66","r20":"#f66","R30":"#FFD7D7","r30":"#FFD7D7","R40":"#FFE1E1","r40":"#FFE1E1","R50":"#FFEBEB","r50":"#FFEBEB","R60":"#FFF5F5","r60":"#FFF5F5","G00":"#44823F","g00":"#44823F","G05":"#61AD5A","g05":"#61AD5A","G10":"#60BC57","g10":"#60BC57","G20":"#80C979","g20":"#80C979","G30":"#C9EEBC","g30":"#C9EEBC","G40":"#DEF4D4","g40":"#DEF4D4","G50":"#EDF9E5","g50":"#EDF9E5","G60":"#F2FBEF","g60":"#F2FBEF","Y00":"#C68801","y00":"#C68801","Y05":"#EDA200","y05":"#EDA200","Y10":"#FDB10C","y10":"#FDB10C","Y20":"#FAC249","y20":"#FAC249","Y30":"#FEF0BA","y30":"#FEF0BA","Y40":"#FEF4CD","y40":"#FEF4CD","Y50":"#FDF7DF","y50":"#FDF7DF","Y60":"#FFFCF0","y60":"#FFFCF0","A1":"#3370FB","a1":"#3370FB","A2":"#7852D2","a2":"#7852D2","A3":"#17B0E2","a3":"#17B0E2","A4":"#C53E99","a4":"#C53E99","A5":"#FDB10C","a5":"#FDB10C","A6":"#3D9FA1","a6":"#3D9FA1","B1":"#EF73C0","b1":"#EF73C0","B2":"#FF8D41","b2":"#FF8D41","B3":"#ED6779","b3":"#ED6779","B4":"#125b8f","b4":"#125b8f","C1":"#4abd81","c1":"#4abd81","C2":"#2682CD","c2":"#2682CD","C3":"#68A4D5","c3":"#68A4D5","C4":"#FF8E8C","c4":"#FF8E8C","D10-05":"rgba(22,45,61,0.05)","d1005":"rgba(22,45,61,0.05)","D10-10":"rgba(22,45,61,0.1)","d1010":"rgba(22,45,61,0.1)","D10-20":"rgba(22,45,61,0.2)","d1020":"rgba(22,45,61,0.2)","D10-30":"rgba(22,45,61,0.3)","d1030":"rgba(22,45,61,0.3)","root":"_3IZWc","up":"_1tinu","down":"_3XP35","disabled":"_2ACUC"};

/***/ }),
/* 35 */
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 36 */
/*!**************************************************!*\
  !*** ../node_modules/define-properties/index.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ 62);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 37 */
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 38 */
/*!******************************************!*\
  !*** ./sections/home/navbar/NavBar.scss ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"btn":"aZHCE","btn__large":"_1H4vG","btnLarge":"_1H4vG","btn__small":"_13xsA","btnSmall":"_13xsA","nav":"_14FCN","scrolled":"_18_wd"};

/***/ }),
/* 39 */
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),
/* 40 */
/*!***********************************************************************************!*\
  !*** ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ 60);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 41 */
/*!********************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/system/FormFieldError.js ***!
  \********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./../dist/src/system/dist/components/FormFieldError.js */ 117);


/***/ }),
/* 42 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/es/src/components/button-next/button-next.st.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "buttonnext1526300797",
  {"root":"buttonnext1526300797--root","content":"buttonnext1526300797--content","prefix":"buttonnext1526300797--prefix","suffix":"buttonnext1526300797--suffix"},
  ".buttonnext1526300797--root{display:inline-flex;align-items:center;cursor:pointer}.buttonnext1526300797--prefix{flex-shrink:0}.buttonnext1526300797--suffix{flex-shrink:0}.buttonnext1526300797--root[data-buttonnext1526300797-disabled]{cursor:default}.buttonnext1526300797--root[disabled]{pointer-events:none}",
  2,
  "buttonnext1526300797"
);
__webpack_require__.stylable.$.register(exports.default)


/***/ }),
/* 43 */
/*!**********************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/Input/IconAffix/IconAffix.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"D10":"#162D3D","d10":"#162D3D","D20":"#32536A","d20":"#32536A","D30":"#577083","d30":"#577083","D40":"#7A92A5","d40":"#7A92A5","D50":"#B6C1CD","d50":"#B6C1CD","D55":"#CBD3DC","d55":"#CBD3DC","D60":"#DFE5EB","d60":"#DFE5EB","D70":"#F0F4F7","d70":"#F0F4F7","D80":"#fff","d80":"#fff","B00":"#2B81CB","b00":"#2B81CB","B05":"#308DDD","b05":"#308DDD","B10":"#3899EC","b10":"#3899EC","B20":"#4EB7F5","b20":"#4EB7F5","B25":"#A1D7FB","b25":"#A1D7FB","B27":"#B3E0FB","b27":"#B3E0FB","B30":"#C1E4FE","b30":"#C1E4FE","B40":"#DAEFFE","b40":"#DAEFFE","B50":"#EAF7FF","b50":"#EAF7FF","B60":"#F4FAFE","b60":"#F4FAFE","F00":"#AADBFC","f00":"#AADBFC","P00":"#8E21B1","p00":"#8E21B1","P10":"#AA4DC8","p10":"#AA4DC8","P20":"#CD68ED","p20":"#CD68ED","P30":"#E5C9EE","p30":"#E5C9EE","P40":"#EEDBF4","p40":"#EEDBF4","P50":"#FAEEFF","p50":"#FAEEFF","P60":"#FAF7FC","p60":"#FAF7FC","O00":"#EA5F0E","o00":"#EA5F0E","O10":"#FB7D33","o10":"#FB7D33","O20":"#FF9A48","o20":"#FF9A48","R00":"#D6453D","r00":"#D6453D","R05":"#D8504C","r05":"#D8504C","R10":"#EE5951","r10":"#EE5951","R20":"#f66","r20":"#f66","R30":"#FFD7D7","r30":"#FFD7D7","R40":"#FFE1E1","r40":"#FFE1E1","R50":"#FFEBEB","r50":"#FFEBEB","R60":"#FFF5F5","r60":"#FFF5F5","G00":"#44823F","g00":"#44823F","G05":"#61AD5A","g05":"#61AD5A","G10":"#60BC57","g10":"#60BC57","G20":"#80C979","g20":"#80C979","G30":"#C9EEBC","g30":"#C9EEBC","G40":"#DEF4D4","g40":"#DEF4D4","G50":"#EDF9E5","g50":"#EDF9E5","G60":"#F2FBEF","g60":"#F2FBEF","Y00":"#C68801","y00":"#C68801","Y05":"#EDA200","y05":"#EDA200","Y10":"#FDB10C","y10":"#FDB10C","Y20":"#FAC249","y20":"#FAC249","Y30":"#FEF0BA","y30":"#FEF0BA","Y40":"#FEF4CD","y40":"#FEF4CD","Y50":"#FDF7DF","y50":"#FDF7DF","Y60":"#FFFCF0","y60":"#FFFCF0","A1":"#3370FB","a1":"#3370FB","A2":"#7852D2","a2":"#7852D2","A3":"#17B0E2","a3":"#17B0E2","A4":"#C53E99","a4":"#C53E99","A5":"#FDB10C","a5":"#FDB10C","A6":"#3D9FA1","a6":"#3D9FA1","B1":"#EF73C0","b1":"#EF73C0","B2":"#FF8D41","b2":"#FF8D41","B3":"#ED6779","b3":"#ED6779","B4":"#125b8f","b4":"#125b8f","C1":"#4abd81","c1":"#4abd81","C2":"#2682CD","c2":"#2682CD","C3":"#68A4D5","c3":"#68A4D5","C4":"#FF8E8C","c4":"#FF8E8C","D10-05":"rgba(22,45,61,0.05)","d1005":"rgba(22,45,61,0.05)","D10-10":"rgba(22,45,61,0.1)","d1010":"rgba(22,45,61,0.1)","D10-20":"rgba(22,45,61,0.2)","d1020":"rgba(22,45,61,0.2)","D10-30":"rgba(22,45,61,0.3)","d1030":"rgba(22,45,61,0.3)","icon":"_3hdEn","disabled":"_35dxz"};

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 48 */
/*!******************************************!*\
  !*** ../node_modules/warning/warning.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),
/* 49 */
/*!*******************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/es/src/hocs/Focusable/Focusable.st.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "Focusable1599081949",
  {"root":"Focusable1599081949--root","focus-box":"Focusable1599081949--focus-box","focus-box-error":"Focusable1599081949--focus-box-error"},
  ".Focusable1599081949--focus-box{outline:0}.Focusable1599081949--focus-box-error{outline:0}",
  1,
  "Focusable1599081949"
);
__webpack_require__.stylable.$.register(exports.default)


/***/ }),
/* 50 */
/*!***********************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/system/CircleLoaderCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./../dist/src/system/dist/components/CircleLoaderCheck.js */ 116);


/***/ }),
/* 51 */
/*!********************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/FontUpgrade/FontUpgrade.scss ***!
  \********************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"_1FcxT"};

/***/ }),
/* 52 */
/*!****************************************************!*\
  !*** ../node_modules/popper.js/dist/esm/popper.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses injected variables (global) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 35)))

/***/ }),
/* 53 */
/*!****************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/system/CloseLarge.js ***!
  \****************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./../dist/src/system/dist/components/CloseLarge.js */ 149);


/***/ }),
/* 54 */
/*!**********************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/CloseButton/CloseButton.st.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "CloseButton3376103321",
  {"root":"CloseButton3376103321--root"},
  ".CloseButton3376103321--root{width:18px;height:18px;border-radius:18px;padding:0;box-sizing:border-box;text-align:center;border:none;outline:0;transition-duration:.1s;transition-timing-function:linear;transition-property:background-color,color,border-color;border-color:transparent;background-color:transparent;color:#3899ec}.CloseButton3376103321--root[data-focusable1599081949-focus-visible]{box-shadow:0 0 0 3px #aadbfc}.CloseButton3376103321--root:hover{color:#4eb7f5}.CloseButton3376103321--root:active{color:#3899ec}.CloseButton3376103321--root[data-buttonnext1526300797-disabled]{color:rgba(22,45,61,.3)}.CloseButton3376103321--root .buttonnext1526300797--content{line-height:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.CloseButton3376103321--root[data-closebutton3376103321-skin=standardFilled]{background-color:#eaf7ff;color:#3899ec}.CloseButton3376103321--root[data-closebutton3376103321-skin=standardFilled]:hover{background-color:#daeffe;color:#3899ec}.CloseButton3376103321--root[data-closebutton3376103321-skin=standardFilled]:active{background-color:#c1e4fe;color:#3899ec}.CloseButton3376103321--root[data-closebutton3376103321-skin=standardFilled][data-buttonnext1526300797-disabled]{color:#fff;background-color:rgba(22,45,61,.3)}.CloseButton3376103321--root[data-closebutton3376103321-skin=light]{color:#fff}.CloseButton3376103321--root[data-closebutton3376103321-skin=light]:hover{color:#eaf7ff}.CloseButton3376103321--root[data-closebutton3376103321-skin=light]:active{color:#daeffe}.CloseButton3376103321--root[data-closebutton3376103321-skin=light][data-buttonnext1526300797-disabled]{color:rgba(255,255,255,.7)}.CloseButton3376103321--root[data-closebutton3376103321-skin=dark]{color:#162d3d}.CloseButton3376103321--root[data-closebutton3376103321-skin=dark]:hover{color:#32536a}.CloseButton3376103321--root[data-closebutton3376103321-skin=dark]:active{color:#162d3d}.CloseButton3376103321--root[data-closebutton3376103321-skin=dark][data-buttonnext1526300797-disabled]{color:rgba(22,45,61,.3)}.CloseButton3376103321--root[data-closebutton3376103321-skin=lightFilled]{background-color:rgba(22,45,61,.24);color:#fff}.CloseButton3376103321--root[data-closebutton3376103321-skin=lightFilled]:hover{background-color:rgba(22,45,61,.3);color:#fff}.CloseButton3376103321--root[data-closebutton3376103321-skin=lightFilled]:active{background-color:rgba(22,45,61,.36);color:#fff}.CloseButton3376103321--root[data-closebutton3376103321-skin=lightFilled][data-buttonnext1526300797-disabled]{color:#fff;background-color:rgba(22,45,61,.3)}.CloseButton3376103321--root[data-closebutton3376103321-skin=transparent]{background-color:rgba(50,83,106,.48);color:#fff}.CloseButton3376103321--root[data-closebutton3376103321-skin=transparent]:hover{background-color:rgba(50,83,106,.54);color:#fff}.CloseButton3376103321--root[data-closebutton3376103321-skin=transparent]:active{background-color:rgba(50,83,106,.6);color:#fff}.CloseButton3376103321--root[data-closebutton3376103321-skin=transparent][data-buttonnext1526300797-disabled]{background-color:rgba(22,45,61,.2);color:rgba(255,255,255,.7)}.CloseButton3376103321--root[data-closebutton3376103321-size=medium]{width:24px;height:24px}.CloseButton3376103321--root[data-closebutton3376103321-size=large]{width:30px;height:30px}",
  7,
  "CloseButton3376103321"
);
__webpack_require__.stylable.$.register(exports.default)


/***/ }),
/* 55 */
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ 150);

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ 151);

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ 103);

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ 152);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 56 */
/*!*******************************************************************!*\
  !*** ../node_modules/mini-create-react-context/dist/esm/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses injected variables (global) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ 13);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext || createReactContext;

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 35)))

/***/ }),
/* 57 */
/*!***********************************************!*\
  !*** ../node_modules/path-to-regexp/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ 156)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 58 */,
/* 59 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/isObjectLike.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 60 */
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-is.production.min.js */ 121);
} else {}


/***/ }),
/* 61 */
/*!**********************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/common/hocUtils.js ***!
  \**********************************************************************/
/*! exports provided: getDisplayName, wrapDisplayName, isStatelessComponent */
/*! exports used: getDisplayName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDisplayName; });
/* unused harmony export wrapDisplayName */
/* unused harmony export isStatelessComponent */
// these are taken from Recompose:
// https://github.com/acdlite/recompose/tree/7918e23eebb74dc930e6ff2d32eb1ead4750f061
//
// TODO: consider using the Recompose package
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};
var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return "".concat(hocName, "(").concat(getDisplayName(BaseComponent), ")");
};
var isStatelessComponent = function isStatelessComponent(Component) {
  return !(Component.prototype && Component.prototype.render);
};

/***/ }),
/* 62 */
/*!********************************************!*\
  !*** ../node_modules/object-keys/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ 63);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ 122);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 63 */
/*!**************************************************!*\
  !*** ../node_modules/object-keys/isArguments.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 64 */
/*!*******************************************************!*\
  !*** ../node_modules/es-abstract/helpers/callBind.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ 65);

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ 126);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

module.exports.apply = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};


/***/ }),
/* 65 */
/*!**********************************************!*\
  !*** ../node_modules/function-bind/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ 125);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 66 */
/*!********************************************!*\
  !*** ../node_modules/has-symbols/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ 127);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 35)))

/***/ }),
/* 67 */
/*!***************************************************!*\
  !*** ../node_modules/object-is/implementation.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),
/* 68 */
/*!*********************************************!*\
  !*** ../node_modules/object-is/polyfill.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ 67);

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),
/* 69 */
/*!****************************************************************!*\
  !*** ../node_modules/regexp.prototype.flags/implementation.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Object = Object;
var $TypeError = TypeError;

module.exports = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};


/***/ }),
/* 70 */
/*!**********************************************************!*\
  !*** ../node_modules/regexp.prototype.flags/polyfill.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ 69);

var supportsDescriptors = __webpack_require__(/*! define-properties */ 36).supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var $TypeError = TypeError;

module.exports = function getPolyfill() {
	if (!supportsDescriptors) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation;
};


/***/ }),
/* 71 */
/*!************************************************************!*\
  !*** ../node_modules/react-transition-group/Transition.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ 1));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 0));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ 17));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ 72);

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ 73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  false ? undefined : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),
/* 72 */
/*!*****************************************************************************!*\
  !*** ../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \*****************************************************************************/
/*! exports provided: polyfill */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ../node_modules/react-modal/lib/components/Modal.js (referenced with cjs require), ../node_modules/react-transition-group/Transition.js (referenced with cjs require), ../node_modules/react-transition-group/TransitionGroup.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),
/* 73 */
/*!*****************************************************************!*\
  !*** ../node_modules/react-transition-group/utils/PropTypes.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ 1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  false ? undefined : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  false ? undefined : null;
exports.classNamesShape = classNamesShape;

/***/ }),
/* 74 */
/*!*****************************************************************!*\
  !*** ../node_modules/react-transition-group/TransitionGroup.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ 1));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 0));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ 72);

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ 139);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 75 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/_Symbol.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 102);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 76 */
/*!**************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/Tooltip/Tooltip.st.css ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "Tooltip3499130446",
  {"root":"Tooltip3499130446--root","contentArrowSize":"8px"},
  ".Tooltip3499130446--root{display:inline}.Tooltip3499130446--root[data-hook*=popover-portal]{display:block}.Tooltip3499130446--root .Popover1242101375--popoverContent{border:none;border-radius:8px;box-sizing:border-box;box-shadow:0 6px 6px 0 rgba(22,45,61,.06),0 0 18px 0 rgba(22,45,61,.12);-webkit-font-smoothing:antialiased;font-size:14px;line-height:18px;font-weight:400;font-weight:var(--wsr-font-weight-regular,400);font-family:HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;padding:12px 24px;color:#fff;background:#162d3d}.Tooltip3499130446--root[data-tooltip3499130446-size=small] .Popover1242101375--popoverContent{border:none;border-radius:8px;box-sizing:border-box;box-shadow:0 6px 6px 0 rgba(22,45,61,.06),0 0 18px 0 rgba(22,45,61,.12);-webkit-font-smoothing:antialiased;font-size:12px;line-height:15px;font-weight:400;font-weight:var(--wsr-font-weight-regular,400);font-family:HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;padding:8px 12px 7px 12px;color:#fff;background:#162d3d}.Tooltip3499130446--root .Popover1242101375--popover .Popover1242101375--arrow{box-sizing:border-box;width:8px;height:8px;background:0 0;border-color:transparent #162d3d #162d3d transparent;transform:rotateZ(45deg);box-shadow:3px 3px 6px rgba(0,0,0,.1)}.Tooltip3499130446--root .Popover1242101375--popover[data-placement] .Popover1242101375--arrow{border-width:5px;border-color:transparent #162d3d #162d3d transparent;margin:0}.Tooltip3499130446--root[data-tooltip3499130446-size=small] .Popover1242101375--popover[data-placement*=right] .Popover1242101375--arrow{display:none}.Tooltip3499130446--root .Popover1242101375--popover[data-placement*=right].Popover1242101375--root .Popover1242101375--withArrow{padding-left:6px}.Tooltip3499130446--root .Popover1242101375--popover[data-placement*=right] .Popover1242101375--arrow{transform:rotateZ(135deg);left:2px;margin-top:8px;margin-bottom:8px}.Tooltip3499130446--root[data-tooltip3499130446-size=small] .Popover1242101375--popover[data-placement*=left] .Popover1242101375--arrow{display:none}.Tooltip3499130446--root .Popover1242101375--popover[data-placement*=left].Popover1242101375--root .Popover1242101375--withArrow{padding-right:6px}.Tooltip3499130446--root .Popover1242101375--popover[data-placement*=left] .Popover1242101375--arrow{transform:rotateZ(-45deg);right:2px;margin-top:8px;margin-bottom:8px}.Tooltip3499130446--root[data-tooltip3499130446-size=small] .Popover1242101375--popover[data-placement*=top] .Popover1242101375--arrow{display:none}.Tooltip3499130446--root .Popover1242101375--popover[data-placement*=top].Popover1242101375--root .Popover1242101375--withArrow{padding-bottom:6px}.Tooltip3499130446--root .Popover1242101375--popover[data-placement*=top] .Popover1242101375--arrow{transform:rotateZ(45deg);bottom:2px;margin-left:8px;margin-right:8px}.Tooltip3499130446--root[data-tooltip3499130446-size=small] .Popover1242101375--popover[data-placement*=bottom] .Popover1242101375--arrow{display:none}.Tooltip3499130446--root .Popover1242101375--popover[data-placement*=bottom].Popover1242101375--root .Popover1242101375--withArrow{padding-top:6px}.Tooltip3499130446--root .Popover1242101375--popover[data-placement*=bottom] .Popover1242101375--arrow{transform:rotateZ(-135deg);top:2px;margin-left:8px;margin-right:8px}.Tooltip3499130446--root .Popover1242101375--popoverAnimation-enter{opacity:0;transform:scale(.9)}.Tooltip3499130446--root .Popover1242101375--popoverAnimation-enter-active{opacity:1;transform:scale(1);transition:opacity 150ms cubic-bezier(0,0,.2,1),transform 150ms cubic-bezier(0,0,.2,1)}.Tooltip3499130446--root .Popover1242101375--popoverAnimation-exit{opacity:1;transform:scale(1)}.Tooltip3499130446--root .Popover1242101375--popoverAnimation-exit-active{opacity:0;transform:scale(.9);transition:opacity .1s cubic-bezier(.4,0,1,1),transform .1s cubic-bezier(.4,0,1,1)}",
  7,
  "Tooltip3499130446"
);
__webpack_require__.stylable.$.register(exports.default)


/***/ }),
/* 77 */
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 78 */
/*!************************************************!*\
  !*** ./layouts/Frontpage/FrontpageLayout.scss ***!
  \************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"BS62b"};

/***/ }),
/* 79 */
/*!*****************************************************************!*\
  !*** ../node_modules/react-responsive/dist/react-responsive.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! exports used: useMediaQuery */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

!function(root, factory) {
     true ? module.exports = factory(__webpack_require__(/*! react */ 0)) : undefined;
}("undefined" != typeof self ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 7);
    }([ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
            if (o) {
                if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                return "Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n ? Array.from(o) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
            }
        }
        function _arrayLikeToArray(arr, len) {
            (null == len || len > arr.length) && (len = arr.length);
            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
            return arr2;
        }
        function _iterableToArrayLimit(arr, i) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(arr)) {
                var _arr = [], _n = !0, _d = !1, _e = void 0;
                try {
                    for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                    !i || _arr.length !== i); _n = !0) ;
                } catch (err) {
                    _d = !0, _e = err;
                } finally {
                    try {
                        _n || null == _i.return || _i.return();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
        }
        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__), __WEBPACK_IMPORTED_MODULE_1_matchmediaquery__ = __webpack_require__(8), __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_matchmediaquery__), __WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__ = __webpack_require__(10), __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__), __WEBPACK_IMPORTED_MODULE_4__toQuery__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_5__Context__ = __webpack_require__(6), makeQuery = function(settings) {
            return settings.query || Object(__WEBPACK_IMPORTED_MODULE_4__toQuery__.a)(settings);
        }, hyphenateKeys = function(obj) {
            if (!obj) return null;
            var keys = Object.keys(obj);
            return 0 === keys.length ? null : keys.reduce(function(result, key) {
                return result[Object(__WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__.a)(key)] = obj[key], 
                result;
            }, {});
        }, useIsUpdate = function() {
            var ref = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useRef(!1);
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                ref.current = !0;
            }, []), ref.current;
        }, useDevice = function(deviceFromProps) {
            var deviceFromContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useContext(__WEBPACK_IMPORTED_MODULE_5__Context__.a), getDevice = function() {
                return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
            }, _React$useState = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getDevice), _React$useState2 = _slicedToArray(_React$useState, 2), device = _React$useState2[0], setDevice = _React$useState2[1];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                var newDevice = getDevice();
                __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default()(device, newDevice) || setDevice(newDevice);
            }, [ deviceFromProps, deviceFromContext ]), device;
        }, useQuery = function(settings) {
            var getQuery = function() {
                return makeQuery(settings);
            }, _React$useState3 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getQuery), _React$useState4 = _slicedToArray(_React$useState3, 2), query = _React$useState4[0], setQuery = _React$useState4[1];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                var newQuery = getQuery();
                query !== newQuery && setQuery(newQuery);
            }, [ settings ]), query;
        }, useMatchMedia = function(query, device) {
            var getMatchMedia = function() {
                return __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default()(query, device || {}, !!device);
            }, _React$useState5 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getMatchMedia), _React$useState6 = _slicedToArray(_React$useState5, 2), mq = _React$useState6[0], setMq = _React$useState6[1], isUpdate = useIsUpdate();
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                return isUpdate && setMq(getMatchMedia()), function() {
                    mq.dispose();
                };
            }, [ query, device ]), mq;
        }, useMatches = function(mediaQuery) {
            var _React$useState7 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(mediaQuery.matches), _React$useState8 = _slicedToArray(_React$useState7, 2), matches = _React$useState8[0], setMatches = _React$useState8[1];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                var updateMatches = function() {
                    setMatches(mediaQuery.matches);
                };
                return mediaQuery.addListener(updateMatches), updateMatches(), function() {
                    mediaQuery.removeListener(updateMatches);
                };
            }, [ mediaQuery ]), matches;
        }, useMediaQuery = function(settings, device, onChange) {
            var deviceSettings = useDevice(device), query = useQuery(settings);
            if (!query) throw new Error("Invalid or missing MediaQuery!");
            var mq = useMatchMedia(query, deviceSettings), matches = useMatches(mq), isUpdate = useIsUpdate();
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                isUpdate && onChange && onChange(matches);
            }, [ matches ]), matches;
        };
        __webpack_exports__.a = useMediaQuery;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function toHyphenLower(match) {
            return "-" + match.toLowerCase();
        }
        function hyphenateStyleName(name) {
            if (cache.hasOwnProperty(name)) return cache[name];
            var hName = name.replace(uppercasePattern, toHyphenLower);
            return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
        }
        var uppercasePattern = /[A-Z]/g, msPattern = /^ms-/, cache = {};
        __webpack_exports__.a = hyphenateStyleName;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_1__mediaQuery__ = __webpack_require__(11), negate = function(cond) {
            return "not ".concat(cond);
        }, keyVal = function(k, v) {
            var realKey = Object(__WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__.a)(k);
            return "number" == typeof v && (v = "".concat(v, "px")), !0 === v ? realKey : !1 === v ? negate(realKey) : "(".concat(realKey, ": ").concat(v, ")");
        }, join = function(conds) {
            return conds.join(" and ");
        }, toQuery = function(obj) {
            var rules = [];
            return Object.keys(__WEBPACK_IMPORTED_MODULE_1__mediaQuery__.a.all).forEach(function(k) {
                var v = obj[k];
                null != v && rules.push(keyVal(k, v));
            }), join(rules);
        };
        __webpack_exports__.a = toQuery;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(13);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__), Context = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();
        __webpack_exports__.a = Context;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__Component__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__toQuery__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__Context__ = __webpack_require__(6);
        __webpack_require__.d(__webpack_exports__, "default", function() {
            return __WEBPACK_IMPORTED_MODULE_1__Component__.a;
        }), __webpack_require__.d(__webpack_exports__, "useMediaQuery", function() {
            return __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a;
        }), __webpack_require__.d(__webpack_exports__, "toQuery", function() {
            return __WEBPACK_IMPORTED_MODULE_2__toQuery__.a;
        }), __webpack_require__.d(__webpack_exports__, "Context", function() {
            return __WEBPACK_IMPORTED_MODULE_3__Context__.a;
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function Mql(query, values, forceStatic) {
            function addListener(listener) {
                mql && mql.addListener(listener);
            }
            function removeListener(listener) {
                mql && mql.removeListener(listener);
            }
            function update(evt) {
                self.matches = evt.matches, self.media = evt.media;
            }
            function dispose() {
                mql && mql.removeListener(update);
            }
            var self = this;
            if (dynamicMatch && !forceStatic) {
                var mql = dynamicMatch.call(window, query);
                this.matches = mql.matches, this.media = mql.media, mql.addListener(update);
            } else this.matches = staticMatch(query, values), this.media = query;
            this.addListener = addListener, this.removeListener = removeListener, this.dispose = dispose;
        }
        function matchMedia(query, values, forceStatic) {
            return new Mql(query, values, forceStatic);
        }
        var staticMatch = __webpack_require__(9).match, dynamicMatch = "undefined" != typeof window ? window.matchMedia : null;
        module.exports = matchMedia;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function matchQuery(mediaQuery, values) {
            return parseQuery(mediaQuery).some(function(query) {
                var inverse = query.inverse, typeMatch = "all" === query.type || values.type === query.type;
                if (typeMatch && inverse || !typeMatch && !inverse) return !1;
                var expressionsMatch = query.expressions.every(function(expression) {
                    var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
                    if (!value) return !1;
                    switch (feature) {
                      case "orientation":
                      case "scan":
                        return value.toLowerCase() === expValue.toLowerCase();

                      case "width":
                      case "height":
                      case "device-width":
                      case "device-height":
                        expValue = toPx(expValue), value = toPx(value);
                        break;

                      case "resolution":
                        expValue = toDpi(expValue), value = toDpi(value);
                        break;

                      case "aspect-ratio":
                      case "device-aspect-ratio":
                      case "device-pixel-ratio":
                        expValue = toDecimal(expValue), value = toDecimal(value);
                        break;

                      case "grid":
                      case "color":
                      case "color-index":
                      case "monochrome":
                        expValue = parseInt(expValue, 10) || 1, value = parseInt(value, 10) || 0;
                    }
                    switch (modifier) {
                      case "min":
                        return value >= expValue;

                      case "max":
                        return value <= expValue;

                      default:
                        return value === expValue;
                    }
                });
                return expressionsMatch && !inverse || !expressionsMatch && inverse;
            });
        }
        function parseQuery(mediaQuery) {
            return mediaQuery.split(",").map(function(query) {
                query = query.trim();
                var captures = query.match(RE_MEDIA_QUERY), modifier = captures[1], type = captures[2], expressions = captures[3] || "", parsed = {};
                return parsed.inverse = !!modifier && "not" === modifier.toLowerCase(), parsed.type = type ? type.toLowerCase() : "all", 
                expressions = expressions.match(/\([^\)]+\)/g) || [], parsed.expressions = expressions.map(function(expression) {
                    var captures = expression.match(RE_MQ_EXPRESSION), feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
                    return {
                        modifier: feature[1],
                        feature: feature[2],
                        value: captures[2]
                    };
                }), parsed;
            });
        }
        function toDecimal(ratio) {
            var numbers, decimal = Number(ratio);
            return decimal || (numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/), decimal = numbers[1] / numbers[2]), 
            decimal;
        }
        function toDpi(resolution) {
            var value = parseFloat(resolution);
            switch (String(resolution).match(RE_RESOLUTION_UNIT)[1]) {
              case "dpcm":
                return value / 2.54;

              case "dppx":
                return 96 * value;

              default:
                return value;
            }
        }
        function toPx(length) {
            var value = parseFloat(length);
            switch (String(length).match(RE_LENGTH_UNIT)[1]) {
              case "em":
              case "rem":
                return 16 * value;

              case "cm":
                return 96 * value / 2.54;

              case "mm":
                return 96 * value / 2.54 / 10;

              case "in":
                return 96 * value;

              case "pt":
                return 72 * value;

              case "pc":
                return 72 * value / 12;

              default:
                return value;
            }
        }
        exports.match = matchQuery, exports.parse = parseQuery;
        var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/, RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/, RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function shallowEqualObjects(objA, objB) {
            if (objA === objB) return !0;
            if (!objA || !objB) return !1;
            var aKeys = Object.keys(objA), bKeys = Object.keys(objB), len = aKeys.length;
            if (bKeys.length !== len) return !1;
            for (var i = 0; i < len; i++) {
                var key = aKeys[i];
                if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) return !1;
            }
            return !0;
        }
        module.exports = shallowEqualObjects;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                })), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
            return target;
        }
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__), stringOrNumber = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([ __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number ]), matchers = {
            orientation: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([ "portrait", "landscape" ]),
            scan: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([ "progressive", "interlace" ]),
            aspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            deviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            height: stringOrNumber,
            deviceHeight: stringOrNumber,
            width: stringOrNumber,
            deviceWidth: stringOrNumber,
            color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            colorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            monochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            resolution: stringOrNumber
        }, features = _objectSpread({
            minAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            maxAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            minDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            maxDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            minHeight: stringOrNumber,
            maxHeight: stringOrNumber,
            minDeviceHeight: stringOrNumber,
            maxDeviceHeight: stringOrNumber,
            minWidth: stringOrNumber,
            maxWidth: stringOrNumber,
            minDeviceWidth: stringOrNumber,
            maxDeviceWidth: stringOrNumber,
            minColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            maxColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            minColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            maxColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            minMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            maxMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            minResolution: stringOrNumber,
            maxResolution: stringOrNumber
        }, matchers), types = {
            all: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            grid: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            aural: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            braille: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            handheld: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            print: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            projection: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            screen: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            tty: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            tv: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            embossed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
        }, all = _objectSpread(_objectSpread({}, types), features);
        matchers.type = Object.keys(types), __webpack_exports__.a = {
            all: all,
            types: types,
            matchers: matchers,
            features: features
        };
    }, function(module, exports, __webpack_require__) {
        var ReactIs = __webpack_require__(4);
        module.exports = __webpack_require__(14)(ReactIs.isElement, !0);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        !function() {
            function isValidElementType(type) {
                return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
            }
            function typeOf(object) {
                if ("object" == typeof object && null !== object) {
                    var $$typeof = object.$$typeof;
                    switch ($$typeof) {
                      case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch (type) {
                          case REACT_ASYNC_MODE_TYPE:
                          case REACT_CONCURRENT_MODE_TYPE:
                          case REACT_FRAGMENT_TYPE:
                          case REACT_PROFILER_TYPE:
                          case REACT_STRICT_MODE_TYPE:
                          case REACT_SUSPENSE_TYPE:
                            return type;

                          default:
                            var $$typeofType = type && type.$$typeof;
                            switch ($$typeofType) {
                              case REACT_CONTEXT_TYPE:
                              case REACT_FORWARD_REF_TYPE:
                              case REACT_LAZY_TYPE:
                              case REACT_MEMO_TYPE:
                              case REACT_PROVIDER_TYPE:
                                return $$typeofType;

                              default:
                                return $$typeof;
                            }
                        }

                      case REACT_PORTAL_TYPE:
                        return $$typeof;
                    }
                }
            }
            function isAsyncMode(object) {
                return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, 
                console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), 
                isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
            }
            function isConcurrentMode(object) {
                return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }
            function isContextConsumer(object) {
                return typeOf(object) === REACT_CONTEXT_TYPE;
            }
            function isContextProvider(object) {
                return typeOf(object) === REACT_PROVIDER_TYPE;
            }
            function isElement(object) {
                return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
            }
            function isForwardRef(object) {
                return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }
            function isFragment(object) {
                return typeOf(object) === REACT_FRAGMENT_TYPE;
            }
            function isLazy(object) {
                return typeOf(object) === REACT_LAZY_TYPE;
            }
            function isMemo(object) {
                return typeOf(object) === REACT_MEMO_TYPE;
            }
            function isPortal(object) {
                return typeOf(object) === REACT_PORTAL_TYPE;
            }
            function isProfiler(object) {
                return typeOf(object) === REACT_PROFILER_TYPE;
            }
            function isStrictMode(object) {
                return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }
            function isSuspense(object) {
                return typeOf(object) === REACT_SUSPENSE_TYPE;
            }
            var hasSymbol = "function" == typeof Symbol && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113, REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120, REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116, REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121, REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117, REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118, REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119, AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element = REACT_ELEMENT_TYPE, ForwardRef = REACT_FORWARD_REF_TYPE, Fragment = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1;
            exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, 
            exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef, 
            exports.Fragment = Fragment, exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, 
            exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, 
            exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, 
            exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, 
            exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, 
            exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, 
            exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isValidElementType = isValidElementType, 
            exports.typeOf = typeOf;
        }();
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function emptyFunctionThatReturnsNull() {
            return null;
        }
        var ReactIs = __webpack_require__(4), assign = __webpack_require__(15), ReactPropTypesSecret = __webpack_require__(5), checkPropTypes = __webpack_require__(16), has = Function.call.bind(Object.prototype.hasOwnProperty), printWarning = function() {};
        printWarning = function(text) {
            var message = "Warning: " + text;
            "undefined" != typeof console && console.error(message);
            try {
                throw new Error(message);
            } catch (x) {}
        }, module.exports = function(isValidElement, throwOnDirectAccess) {
            function getIteratorFn(maybeIterable) {
                var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                if ("function" == typeof iteratorFn) return iteratorFn;
            }
            function is(x, y) {
                return x === y ? 0 !== x || 1 / x == 1 / y : x !== x && y !== y;
            }
            function PropTypeError(message) {
                this.message = message, this.stack = "";
            }
            function createChainableTypeChecker(validate) {
                function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                    if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, 
                    secret !== ReactPropTypesSecret) {
                        if (throwOnDirectAccess) {
                            var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                            throw err.name = "Invariant Violation", err;
                        }
                        if ("undefined" != typeof console) {
                            var cacheKey = componentName + ":" + propName;
                            !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), 
                            manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
                        }
                    }
                    return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `null`." : "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `undefined`.") : null : validate(props, propName, componentName, location, propFullName);
                }
                var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0, chainedCheckType = checkType.bind(null, !1);
                return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
            }
            function createPrimitiveTypeChecker(expectedType) {
                function validate(props, propName, componentName, location, propFullName, secret) {
                    var propValue = props[propName];
                    if (getPropType(propValue) !== expectedType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPreciseType(propValue) + "` supplied to `" + componentName + "`, expected `" + expectedType + "`.");
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createArrayOfTypeChecker(typeChecker) {
                function validate(props, propName, componentName, location, propFullName) {
                    if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                    var propValue = props[propName];
                    if (!Array.isArray(propValue)) {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected an array.");
                    }
                    for (var i = 0; i < propValue.length; i++) {
                        var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                        if (error instanceof Error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createInstanceTypeChecker(expectedClass) {
                function validate(props, propName, componentName, location, propFullName) {
                    if (!(props[propName] instanceof expectedClass)) {
                        var expectedClassName = expectedClass.name || ANONYMOUS;
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getClassName(props[propName]) + "` supplied to `" + componentName + "`, expected instance of `" + expectedClassName + "`.");
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createEnumTypeChecker(expectedValues) {
                function validate(props, propName, componentName, location, propFullName) {
                    for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
                    var valuesString = JSON.stringify(expectedValues, function(key, value) {
                        return "symbol" === getPreciseType(value) ? String(value) : value;
                    });
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` supplied to `" + componentName + "`, expected one of " + valuesString + ".");
                }
                return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : (printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), 
                emptyFunctionThatReturnsNull);
            }
            function createObjectOfTypeChecker(typeChecker) {
                function validate(props, propName, componentName, location, propFullName) {
                    if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an object.");
                    for (var key in propValue) if (has(propValue, key)) {
                        var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error instanceof Error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createUnionTypeChecker(arrayOfTypeCheckers) {
                function validate(props, propName, componentName, location, propFullName) {
                    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                        if (null == (0, arrayOfTypeCheckers[i])(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
                    }
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`.");
                }
                if (!Array.isArray(arrayOfTypeCheckers)) return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), 
                emptyFunctionThatReturnsNull;
                for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                    var checker = arrayOfTypeCheckers[i];
                    if ("function" != typeof checker) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), 
                    emptyFunctionThatReturnsNull;
                }
                return createChainableTypeChecker(validate);
            }
            function createShapeTypeChecker(shapeTypes) {
                function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                    for (var key in shapeTypes) {
                        var checker = shapeTypes[key];
                        if (checker) {
                            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                            if (error) return error;
                        }
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createStrictShapeTypeChecker(shapeTypes) {
                function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                    var allKeys = assign({}, props[propName], shapeTypes);
                    for (var key in allKeys) {
                        var checker = shapeTypes[key];
                        if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
                        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function isNode(propValue) {
                switch (typeof propValue) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;

                  case "boolean":
                    return !propValue;

                  case "object":
                    if (Array.isArray(propValue)) return propValue.every(isNode);
                    if (null === propValue || isValidElement(propValue)) return !0;
                    var iteratorFn = getIteratorFn(propValue);
                    if (!iteratorFn) return !1;
                    var step, iterator = iteratorFn.call(propValue);
                    if (iteratorFn !== propValue.entries) {
                        for (;!(step = iterator.next()).done; ) if (!isNode(step.value)) return !1;
                    } else for (;!(step = iterator.next()).done; ) {
                        var entry = step.value;
                        if (entry && !isNode(entry[1])) return !1;
                    }
                    return !0;

                  default:
                    return !1;
                }
            }
            function isSymbol(propType, propValue) {
                return "symbol" === propType || !!propValue && ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
            }
            function getPropType(propValue) {
                var propType = typeof propValue;
                return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
            }
            function getPreciseType(propValue) {
                if (void 0 === propValue || null === propValue) return "" + propValue;
                var propType = getPropType(propValue);
                if ("object" === propType) {
                    if (propValue instanceof Date) return "date";
                    if (propValue instanceof RegExp) return "regexp";
                }
                return propType;
            }
            function getPostfixForTypeWarning(value) {
                var type = getPreciseType(value);
                switch (type) {
                  case "array":
                  case "object":
                    return "an " + type;

                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + type;

                  default:
                    return type;
                }
            }
            function getClassName(propValue) {
                return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
            }
            var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator", ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
                array: createPrimitiveTypeChecker("array"),
                bool: createPrimitiveTypeChecker("boolean"),
                func: createPrimitiveTypeChecker("function"),
                number: createPrimitiveTypeChecker("number"),
                object: createPrimitiveTypeChecker("object"),
                string: createPrimitiveTypeChecker("string"),
                symbol: createPrimitiveTypeChecker("symbol"),
                any: function() {
                    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
                }(),
                arrayOf: createArrayOfTypeChecker,
                element: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!isValidElement(propValue)) {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement.");
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }(),
                elementType: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!ReactIs.isValidElementType(propValue)) {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement type.");
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }(),
                instanceOf: createInstanceTypeChecker,
                node: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`, expected a ReactNode.");
                    }
                    return createChainableTypeChecker(validate);
                }(),
                objectOf: createObjectOfTypeChecker,
                oneOf: createEnumTypeChecker,
                oneOfType: createUnionTypeChecker,
                shape: createShapeTypeChecker,
                exact: createStrictShapeTypeChecker
            };
            return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, 
            ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, 
            ReactPropTypes;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function toObject(val) {
            if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(val);
        }
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
        var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
        module.exports = function() {
            try {
                if (!Object.assign) return !1;
                var test1 = new String("abc");
                if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
                for (var test2 = {}, i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(test2).map(function(n) {
                    return test2[n];
                }).join("")) return !1;
                var test3 = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                    test3[letter] = letter;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
            } catch (err) {
                return !1;
            }
        }() ? Object.assign : function(target, source) {
            for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);
                for (var key in from) hasOwnProperty.call(from, key) && (to[key] = from[key]);
                if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
                }
            }
            return to;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
            for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
                var error;
                try {
                    if ("function" != typeof typeSpecs[typeSpecName]) {
                        var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                        throw err.name = "Invariant Violation", err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), 
                error instanceof Error && !(error.message in loggedTypeFailures)) {
                    loggedTypeFailures[error.message] = !0;
                    var stack = getStack ? getStack() : "";
                    printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
                }
            }
        }
        var printWarning = function() {}, ReactPropTypesSecret = __webpack_require__(5), loggedTypeFailures = {}, has = Function.call.bind(Object.prototype.hasOwnProperty);
        printWarning = function(text) {
            var message = "Warning: " + text;
            "undefined" != typeof console && console.error(message);
            try {
                throw new Error(message);
            } catch (x) {}
        }, checkPropTypes.resetWarningCache = function() {
            loggedTypeFailures = {};
        }, module.exports = checkPropTypes;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function _objectWithoutProperties(source, excluded) {
            if (null == source) return {};
            var key, i, target = _objectWithoutPropertiesLoose(source, excluded);
            if (Object.getOwnPropertySymbols) {
                var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                for (i = 0; i < sourceSymbolKeys.length; i++) key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key, i, target = {}, sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
        }
        function MediaQuery(_ref) {
            var children = _ref.children, device = _ref.device, onChange = _ref.onChange, settings = _objectWithoutProperties(_ref, [ "children", "device", "onChange" ]), matches = Object(__WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a)(settings, device, onChange);
            return "function" == typeof children ? children(matches) : matches ? children : null;
        }
        __webpack_exports__.a = MediaQuery;
        var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __webpack_require__(0);
    } ]);
});
//# sourceMappingURL=react-responsive.js.map

/***/ }),
/* 80 */
/*!**********************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/Image/Image.st.css ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "Image3831962174",
  {"root":"Image3831962174--root"},
  ".Image3831962174--root{display:inline-block;overflow:hidden;border-radius:6px;font-size:0;background-color:#dfe5eb;max-width:100%;max-height:100%;text-indent:100vw}.Image3831962174--root[data-image3831962174-tiled]{background-repeat:repeat;object-position:-100vw;object-fit:none}",
  2,
  "Image3831962174"
);
__webpack_require__.stylable.$.register(exports.default)


/***/ }),
/* 81 */
/*!*****************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/get.js ***!
  \*****************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ 110);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 82 */
/*!****************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/system/FormFieldWarningFilled.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./../dist/src/system/dist/components/FormFieldWarningFilled.js */ 113);


/***/ }),
/* 83 */
/*!**************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/system/ToggleOn.js ***!
  \**************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./../dist/src/system/dist/components/ToggleOn.js */ 114);


/***/ }),
/* 84 */
/*!****************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/system/CircleLoaderCheckSmall.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./../dist/src/system/dist/components/CircleLoaderCheckSmall.js */ 115);


/***/ }),
/* 85 */
/*!*************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/system/FormFieldErrorSmall.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./../dist/src/system/dist/components/FormFieldErrorSmall.js */ 118);


/***/ }),
/* 86 */
/*!********************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/Text/Text.st.css ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "Text1679870139",
  {"root":"Text1679870139--root","listIconUrl":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M9.5,14.4393398 L16.9393398,7 C17.232233,6.70710678 17.7071068,6.70710678 18,7 C18.2928932,7.29289322 18.2928932,7.76776695 18,8.06066017 L9.5,16.5606602 L6,13.0606602 C5.70710678,12.767767 5.70710678,12.2928932 6,12 C6.29289322,11.7071068 6.76776695,11.7071068 7.06066017,12 L9.5,14.4393398 Z'/%3E%3C/svg%3E\")","listIconSmallUrl":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath d='M11.9393398,6 C12.232233,5.70710678 12.7071068,5.70710678 13,6 C13.2928932,6.29289322 13.2928932,6.76776695 13,7.06066017 L7.5,12.5606602 L5,10.0606602 C4.70710678,9.76776695 4.70710678,9.29289322 5,9 C5.29289322,8.70710678 5.76776695,8.70710678 6.06066017,9 L7.5,10.4393398 L11.9393398,6 Z'/%3E%3C/svg%3E\")"},
  ".Text1679870139--root{white-space:pre-line}.Text1679870139--root[data-text1679870139-weight=thin][data-text1679870139-size=tiny]{font-size:12px;line-height:15px;font-weight:400;font-weight:var(--wsr-font-weight-regular,400);font-family:HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif}.Text1679870139--root[data-text1679870139-weight=thin][data-text1679870139-size=small]{font-size:14px;line-height:18px;font-weight:400;font-weight:var(--wsr-font-weight-regular,400);font-family:HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif}.Text1679870139--root[data-text1679870139-weight=thin][data-text1679870139-size=medium]{font-size:16px;line-height:24px;font-weight:400;font-weight:var(--wsr-font-weight-regular,400);font-family:HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif}.Text1679870139--root[data-text1679870139-weight=normal][data-text1679870139-size=tiny]{font-size:12px;line-height:15px;font-weight:400;font-weight:var(--wsr-font-weight-regular,400);font-family:HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif}.Text1679870139--root[data-text1679870139-weight=normal][data-text1679870139-size=small]{font-size:14px;line-height:18px;font-weight:400;font-weight:var(--wsr-font-weight-regular,400);font-family:HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif}.Text1679870139--root[data-text1679870139-weight=normal][data-text1679870139-size=medium]{font-size:16px;line-height:24px;font-weight:400;font-weight:var(--wsr-font-weight-regular,400);font-family:HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif}.Text1679870139--root[data-text1679870139-weight=bold][data-text1679870139-size=tiny]{font-size:12px;line-height:15px;font-weight:400;font-weight:var(--wsr-font-weight-bold,400);font-family:HelveticaNeueW01-75Bold,HelveticaNeueW02-75Bold,HelveticaNeueW10-75Bold,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-75Bold,HelveticaNeueW02-75Bold,HelveticaNeueW10-75Bold),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif}.Text1679870139--root[data-text1679870139-weight=bold][data-text1679870139-size=small]{font-size:14px;line-height:18px;font-weight:400;font-weight:var(--wsr-font-weight-bold,400);font-family:HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif}.Text1679870139--root[data-text1679870139-weight=bold][data-text1679870139-size=medium]{font-size:16px;line-height:24px;font-weight:400;font-weight:var(--wsr-font-weight-bold,400);font-family:HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif}.Text1679870139--root[data-text1679870139-skin=standard]{color:#162d3d}.Text1679870139--root[data-text1679870139-skin=standard][data-text1679870139-light]{color:#fff}.Text1679870139--root[data-text1679870139-skin=standard][data-text1679870139-secondary]{color:#32536a}.Text1679870139--root[data-text1679870139-skin=standard][data-text1679870139-light][data-text1679870139-secondary]{color:#7a92a5}.Text1679870139--root[data-text1679870139-skin=success]{color:#60bc57}.Text1679870139--root[data-text1679870139-skin=error]{color:#ee5951}.Text1679870139--root[data-text1679870139-skin=premium]{color:#aa4dc8}.Text1679870139--root[data-text1679870139-skin=disabled]{color:rgba(22,45,61,.3)}.Text1679870139--root[data-text1679870139-skin=disabled][data-text1679870139-light]{color:rgba(255,255,255,.7)}.Text1679870139--root[data-text1679870139-skin=primary]{color:#3899ec}.Text1679870139--root>a{color:#3899ec;text-decoration:none}.Text1679870139--root>a:hover{color:#4eb7f5}.Text1679870139--root>ul{padding:0;list-style-type:none}.Text1679870139--root>ul ul{padding:6px 0;list-style-type:none}.Text1679870139--root>ul li{position:relative;padding-left:30px}.Text1679870139--root>ul li::before{content:'';position:absolute;display:block;width:24px;height:24px;left:0;top:1px;background-color:currentColor;-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M9.5,14.4393398 L16.9393398,7 C17.232233,6.70710678 17.7071068,6.70710678 18,7 C18.2928932,7.29289322 18.2928932,7.76776695 18,8.06066017 L9.5,16.5606602 L6,13.0606602 C5.70710678,12.767767 5.70710678,12.2928932 6,12 C6.29289322,11.7071068 6.76776695,11.7071068 7.06066017,12 L9.5,14.4393398 Z'/%3E%3C/svg%3E\") no-repeat center/contain;mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M9.5,14.4393398 L16.9393398,7 C17.232233,6.70710678 17.7071068,6.70710678 18,7 C18.2928932,7.29289322 18.2928932,7.76776695 18,8.06066017 L9.5,16.5606602 L6,13.0606602 C5.70710678,12.767767 5.70710678,12.2928932 6,12 C6.29289322,11.7071068 6.76776695,11.7071068 7.06066017,12 L9.5,14.4393398 Z'/%3E%3C/svg%3E\") no-repeat center/contain}.Text1679870139--root[data-text1679870139-size=small]>ul li{padding-left:25px}.Text1679870139--root[data-text1679870139-size=small]>ul li::before{width:21px;height:21px;top:-1px}.Text1679870139--root[data-text1679870139-size=tiny]>ul li{padding-left:21px}.Text1679870139--root[data-text1679870139-size=tiny]>ul li::before{width:18px;height:18px;top:-1px;-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath d='M11.9393398,6 C12.232233,5.70710678 12.7071068,5.70710678 13,6 C13.2928932,6.29289322 13.2928932,6.76776695 13,7.06066017 L7.5,12.5606602 L5,10.0606602 C4.70710678,9.76776695 4.70710678,9.29289322 5,9 C5.29289322,8.70710678 5.76776695,8.70710678 6.06066017,9 L7.5,10.4393398 L11.9393398,6 Z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath d='M11.9393398,6 C12.232233,5.70710678 12.7071068,5.70710678 13,6 C13.2928932,6.29289322 13.2928932,6.76776695 13,7.06066017 L7.5,12.5606602 L5,10.0606602 C4.70710678,9.76776695 4.70710678,9.29289322 5,9 C5.29289322,8.70710678 5.76776695,8.70710678 6.06066017,9 L7.5,10.4393398 L11.9393398,6 Z'/%3E%3C/svg%3E\")}",
  2,
  "Text1679870139"
);
__webpack_require__.stylable.$.register(exports.default)


/***/ }),
/* 87 */
/*!*******************************************!*\
  !*** ../node_modules/deep-equal/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var objectKeys = __webpack_require__(/*! object-keys */ 62);
var isArguments = __webpack_require__(/*! is-arguments */ 123);
var is = __webpack_require__(/*! object-is */ 124);
var isRegex = __webpack_require__(/*! is-regex */ 129);
var flags = __webpack_require__(/*! regexp.prototype.flags */ 130);
var isDate = __webpack_require__(/*! is-date-object */ 132);

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && flags(a) === flags(b);
  }

  if (isDate(a) && isDate(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

module.exports = deepEqual;


/***/ }),
/* 88 */
/*!*******************************************************!*\
  !*** ../node_modules/react-transition-group/index.js ***!
  \*******************************************************/
/*! no static exports found */
/*! exports used: CSSTransition */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ 133));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ 138));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ 74));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ 71));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),
/* 89 */
/*!*********************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/es/src/components/tooltip/Tooltip.st.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "Tooltip3591000031",
  {"root":"Tooltip3591000031--root"},
  ".Tooltip3591000031--root .Popover1242101375--popoverContent{overflow-wrap:break-word;word-wrap:break-word;word-break:break-word}",
  2,
  "Tooltip3591000031"
);
__webpack_require__.stylable.$.register(exports.default)


/***/ }),
/* 90 */
/*!**************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/Heading/Heading.st.css ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "Heading3924271493",
  {"root":"Heading3924271493--root"},
  ".Heading3924271493--root{font-weight:400;margin:0}.Heading3924271493--root[data-heading3924271493-appearance=H1]{font-family:HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-weight:400;font-weight:var(--wsr-font-weight-bold,400);font-size:36px;line-height:48px;color:#162d3d}.Heading3924271493--root[data-heading3924271493-appearance=H2]{font-family:HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-weight:400;font-weight:var(--wsr-font-weight-bold,400);font-size:28px;line-height:36px;color:#162d3d}.Heading3924271493--root[data-heading3924271493-appearance=H3]{font-family:HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-weight:400;font-weight:var(--wsr-font-weight-regular,400);font-size:20px;line-height:24px;color:#162d3d}.Heading3924271493--root[data-heading3924271493-appearance=H4]{font-family:HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-weight:400;font-weight:var(--wsr-font-weight-regular,400);font-size:18px;line-height:24px;color:#162d3d}.Heading3924271493--root[data-heading3924271493-appearance=H5]{font-family:HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-weight:400;font-weight:var(--wsr-font-weight-bold,400);font-size:12px;line-height:24px;color:#32536a;text-transform:uppercase;letter-spacing:1px}.Heading3924271493--root[data-heading3924271493-appearance=H6]{font-family:HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi,\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-family:var(--wsr-font-family,HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi),\"Helvetica Neue\",Helvetica,Arial,\"\\30E1\\30A4\\30EA\\30AA\",meiryo,\"\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   pro w3\",\"hiragino kaku gothic pro\",sans-serif;font-weight:400;font-weight:var(--wsr-font-weight-bold,400);font-size:10px;line-height:18px;color:#162d3d;text-transform:uppercase;letter-spacing:1.2px}.Heading3924271493--root[data-heading3924271493-light]{color:#fff}",
  2,
  "Heading3924271493"
);
__webpack_require__.stylable.$.register(exports.default)


/***/ }),
/* 91 */
/*!**************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/system/FormFieldErrorFilled.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./../dist/src/system/dist/components/FormFieldErrorFilled.js */ 147);


/***/ }),
/* 92 */
/*!******************************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/StatusIndicator/StatusIndicator.st.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "StatusIndicator1867065572",
  {"root":"StatusIndicator1867065572--root"},
  ".StatusIndicator1867065572--root{width:18px;height:18px;color:#ee5951}.StatusIndicator1867065572--root[data-statusindicator1867065572-status=warning]{color:#fdb10c;height:16px;margin:1px 0}",
  2,
  "StatusIndicator1867065572"
);
__webpack_require__.stylable.$.register(exports.default)


/***/ }),
/* 93 */
/*!***********************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/system/Close.js ***!
  \***********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./../dist/src/system/dist/components/Close.js */ 148);


/***/ }),
/* 94 */
/*!************************************************************!*\
  !*** ../node_modules/hoist-non-react-methods/lib/index.js ***!
  \************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hoistNonReactMethods;
var REACT_PROTOTYPE = {
  autobind: true,
  childContextTypes: true,
  componentDidMount: true,
  componentDidUpdate: true,
  componentWillMount: true,
  componentWillReceiveProps: true,
  componentWillUnmount: true,
  componentWillUpdate: true,
  contextTypes: true,
  displayName: true,
  forceUpdate: true,
  getChildContext: true,
  getDefaultProps: true,
  getDOMNode: true,
  getInitialState: true,
  isMounted: true,
  mixins: true,
  propTypes: true,
  render: true,
  replaceProps: true,
  replaceState: true,
  setProps: true,
  setState: true,
  shouldComponentUpdate: true,
  statics: true,
  updateComponent: true
};

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  mixins: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  arguments: true,
  arity: true
};

var defaultConfig = {
  delegateTo: function delegateTo(w) {
    return w.refs.child;
  },
  hoistStatics: true
};

function hoistNonReactMethods(targetComponent, sourceComponent, config) {
  var targetComponentName = targetComponent.displayName || targetComponent.name || 'Wrapper';
  var sourceComponentName = sourceComponent.displayName || sourceComponent.name || 'WrappedComponent';
  var hoistStatics = config && typeof config.hoistStatics !== 'undefined' ? config.hoistStatics : defaultConfig.hoistStatics;
  var delegateTo = config && typeof config.delegateTo !== 'undefined' ? config.delegateTo : defaultConfig.delegateTo;
  // backwards compatible where config option is delegateTo function
  if (typeof config === 'function') delegateTo = config;

  if (hoistStatics) {
    var statics = Object.getOwnPropertyNames(sourceComponent).filter(function (k) {
      return !REACT_STATICS[k] && !KNOWN_STATICS[k];
    });

    statics.forEach(function (methodName) {
      if (targetComponent[methodName]) console.warn('Static method ' + methodName + ' already exists in wrapper component ' + targetComponentName + ', and won\'t be hoisted. Consider changing the name on ' + sourceComponentName + '.');
      targetComponent[methodName] = sourceComponent[methodName];
    });
  }

  var methods = Object.getOwnPropertyNames(sourceComponent.prototype).filter(function (k) {
    return !REACT_PROTOTYPE[k];
  });

  methods.forEach(function (methodName) {
    if (targetComponent.prototype[methodName]) {
      console.warn('Method ' + methodName + ' already exists in wrapper component ' + targetComponentName + ', and won\'t be hoisted. Consider changing the name on ' + sourceComponentName + '.');
      return;
    }

    targetComponent.prototype[methodName] = function () {
      var _sourceComponent$prot;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_sourceComponent$prot = sourceComponent.prototype[methodName]).call.apply(_sourceComponent$prot, [delegateTo.call(this, this)].concat(args));
    };
  });

  return targetComponent;
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 95 */
/*!*******************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/system/DropDownArrow.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./../dist/src/system/dist/components/DropDownArrow.js */ 153);


/***/ }),
/* 96 */
/*!************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/system/FormFieldSpinnerUp.js ***!
  \************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./../dist/src/system/dist/components/FormFieldSpinnerUp.js */ 154);


/***/ }),
/* 97 */
/*!**************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/system/FormFieldSpinnerDown.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./../dist/src/system/dist/components/FormFieldSpinnerDown.js */ 155);


/***/ }),
/* 98 */
/*!**************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/Input/Group/Group.scss ***!
  \**************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"_3xj3S"};

/***/ }),
/* 99 */
/*!***************************!*\
  !*** ./routes/index.scss ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"IC_FR"};

/***/ }),
/* 100 */,
/* 101 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseGetTag.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 75),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ 143),
    objectToString = __webpack_require__(/*! ./_objectToString */ 144);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 102 */
/*!***************************************!*\
  !*** ../node_modules/lodash/_root.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 142);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 103 */
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ 104);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 104 */
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 105 */,
/* 106 */,
/* 107 */
/*!***************************************************************!*\
  !*** ./locales lazy ^\.\/messages_.*\.json$ namespace object ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./messages_en.json": [
		158,
		2
	],
	"./messages_uk.json": [
		159,
		3
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 107;
module.exports = webpackAsyncContext;

/***/ }),
/* 108 */
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithThrowingShims.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 109);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 109 */
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 110 */
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ 7);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 111 */
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 112 */
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 113 */
/*!*****************************************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/dist/src/system/dist/components/FormFieldWarningFilled.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/* tslint:disable */
var React = __webpack_require__(/*! react */ 0);
var FormFieldWarningFilled = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement("svg", __assign({ viewBox: "0 0 18 16", fill: "currentColor", width: size || "18", height: size || "16" }, props),
        React.createElement("path", { d: "M17.6762281,12.4439502 C18.3394859,13.5746099 17.9511638,15.0233988 16.8088864,15.6799109 C16.4440973,15.8895697 16.0297764,16 15.6079519,16 L2.3916543,16 C1.0707801,16 2.65526967e-16,14.9401105 0,13.6326705 C0,13.2151362 0.11156502,12.8050293 0.323378097,12.4439502 L6.93152689,1.17899911 C7.59478473,0.0483394554 9.05846025,-0.336033117 10.2007377,0.32047894 C10.560335,0.527153794 10.8592808,0.823059086 11.0680793,1.17899911 L17.6762281,12.4439502 Z M9,4 C8.44771525,4 8,4.44771525 8,5 L8,9 C8,9.55228475 8.44771525,10 9,10 C9.55228475,10 10,9.55228475 10,9 L10,5 C10,4.44771525 9.55228475,4 9,4 Z M9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 C9.55228475,14 10,13.5522847 10,13 C10,12.4477153 9.55228475,12 9,12 Z" })));
};
FormFieldWarningFilled.displayName = 'FormFieldWarningFilled';
exports.default = FormFieldWarningFilled;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=FormFieldWarningFilled.js.map

/***/ }),
/* 114 */
/*!***************************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/dist/src/system/dist/components/ToggleOn.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/* tslint:disable */
var React = __webpack_require__(/*! react */ 0);
var ToggleOn = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement("svg", __assign({ viewBox: "0 0 10 8", fill: "currentColor", width: size || "10", height: size || "8" }, props),
        React.createElement("path", { d: "M3.8 5L1.2 2.5 0 3.7 3.8 7.5 10 1.2 8.8 0z" })));
};
ToggleOn.displayName = 'ToggleOn';
exports.default = ToggleOn;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=ToggleOn.js.map

/***/ }),
/* 115 */
/*!*****************************************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/dist/src/system/dist/components/CircleLoaderCheckSmall.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/* tslint:disable */
var React = __webpack_require__(/*! react */ 0);
var CircleLoaderCheckSmall = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement("svg", __assign({ viewBox: "0 0 11 8", fill: "currentColor", width: size || "11", height: size || "8" }, props),
        React.createElement("path", { d: "M1.70710678,3.29289322 C1.31658249,2.90236893 0.683417511,2.90236893 0.292893219,3.29289322 C-0.0976310729,3.68341751 -0.0976310729,4.31658249 0.292893219,4.70710678 L3.29289322,7.70710678 C3.68341751,8.09763107 4.31658249,8.09763107 4.70710678,7.70710678 L10.7071068,1.70710678 C11.0976311,1.31658249 11.0976311,0.683417511 10.7071068,0.292893219 C10.3165825,-0.0976310729 9.68341751,-0.0976310729 9.29289322,0.292893219 L4,5.58578644 L1.70710678,3.29289322 Z" })));
};
CircleLoaderCheckSmall.displayName = 'CircleLoaderCheckSmall';
exports.default = CircleLoaderCheckSmall;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=CircleLoaderCheckSmall.js.map

/***/ }),
/* 116 */
/*!************************************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/dist/src/system/dist/components/CircleLoaderCheck.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/* tslint:disable */
var React = __webpack_require__(/*! react */ 0);
var CircleLoaderCheck = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement("svg", __assign({ viewBox: "0 0 19 14", fill: "currentColor", width: size || "19", height: size || "14" }, props),
        React.createElement("path", { d: "M16.4482656,0.439339828 C17.034052,-0.146446609 17.9837995,-0.146446609 18.5695859,0.439339828 C19.1553723,1.02512627 19.1553723,1.97487373 18.5695859,2.56066017 L7.56066017,13.5695859 C6.97487373,14.1553723 6.02512627,14.1553723 5.43933983,13.5695859 L0.439339828,8.5695859 C-0.146446609,7.98379946 -0.146446609,7.03405199 0.439339828,6.44826555 C1.02512627,5.86247912 1.97487373,5.86247912 2.56066017,6.44826555 L6.5,10.3876054 L16.4482656,0.439339828 Z" })));
};
CircleLoaderCheck.displayName = 'CircleLoaderCheck';
exports.default = CircleLoaderCheck;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=CircleLoaderCheck.js.map

/***/ }),
/* 117 */
/*!*********************************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/dist/src/system/dist/components/FormFieldError.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/* tslint:disable */
var React = __webpack_require__(/*! react */ 0);
var FormFieldError = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement("svg", __assign({ viewBox: "0 0 2 10", fill: "currentColor", width: size || "2", height: size || "10" }, props),
        React.createElement("path", { d: "M1.72673061,0.273269394 C1.91828145,0.464820242 2.01788194,0.72969704 2,1 L2,5 C2.01788194,5.27030296 1.91828145,5.53517976 1.72673061,5.72673061 C1.53517976,5.91828145 1.27030296,6.01788194 1,6 C0.72969704,6.01788194 0.464820242,5.91828145 0.273269394,5.72673061 C0.0817185472,5.53517976 -0.0178819397,5.27030296 -3.39950724e-13,5 L-3.39950724e-13,1 C-0.0178819397,0.72969704 0.0817185472,0.464820242 0.273269394,0.273269394 C0.464820242,0.0817185472 0.72969704,-0.0178819397 1,1.22124533e-15 C1.27030296,-0.0178819397 1.53517976,0.0817185472 1.72673061,0.273269394 Z M1.72673061,8.27326939 C1.91828145,8.46482024 2.01788194,8.72969704 2,9 C2.01788194,9.27030296 1.91828145,9.53517976 1.72673061,9.72673061 C1.53517976,9.91828145 1.27030296,10.0178819 1,10 C0.72969704,10.0178819 0.464820242,9.91828145 0.273269394,9.72673061 C0.0817185472,9.53517976 -0.0178819397,9.27030296 -3.40054807e-13,9 C-0.0178819397,8.72969704 0.0817185472,8.46482024 0.273269394,8.27326939 C0.464820242,8.08171855 0.72969704,7.98211806 1,8 C1.27030296,7.98211806 1.53517976,8.08171855 1.72673061,8.27326939 Z" })));
};
FormFieldError.displayName = 'FormFieldError';
exports.default = FormFieldError;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=FormFieldError.js.map

/***/ }),
/* 118 */
/*!**************************************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/dist/src/system/dist/components/FormFieldErrorSmall.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/* tslint:disable */
var React = __webpack_require__(/*! react */ 0);
var FormFieldErrorSmall = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement("svg", __assign({ viewBox: "0 0 2 10", fill: "currentColor", width: size || "2", height: size || "10" }, props),
        React.createElement("path", { d: "M1,0 C1.55228475,0 2,0.44771525 2,1 L2,5 C2,5.55228475 1.55228475,6 1,6 C0.44771525,6 0,5.55228475 0,5 L0,1 C0,0.44771525 0.44771525,0 1,0 L1,0 Z M1,8 C1.55228475,8 2,8.44771525 2,9 C2,9.55228475 1.55228475,10 1,10 C0.44771525,10 0,9.55228475 0,9 C0,8.44771525 0.44771525,8 1,8 L1,8 Z", fillRule: "evenodd" })));
};
FormFieldErrorSmall.displayName = 'FormFieldErrorSmall';
exports.default = FormFieldErrorSmall;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=FormFieldErrorSmall.js.map

/***/ }),
/* 119 */
/*!******************************************************************!*\
  !*** ../node_modules/create-react-context/lib/implementation.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ 120);

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! warning */ 48);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),
/* 120 */
/*!************************************!*\
  !*** ../node_modules/gud/index.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 35)))

/***/ }),
/* 121 */
/*!***************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.production.min.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 122 */
/*!*****************************************************!*\
  !*** ../node_modules/object-keys/implementation.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ 63); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),
/* 123 */
/*!*********************************************!*\
  !*** ../node_modules/is-arguments/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),
/* 124 */
/*!******************************************!*\
  !*** ../node_modules/object-is/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ 36);
var callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ 64);

var implementation = __webpack_require__(/*! ./implementation */ 67);
var getPolyfill = __webpack_require__(/*! ./polyfill */ 68);
var shim = __webpack_require__(/*! ./shim */ 128);

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),
/* 125 */
/*!*******************************************************!*\
  !*** ../node_modules/function-bind/implementation.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 126 */
/*!***************************************************!*\
  !*** ../node_modules/es-abstract/GetIntrinsic.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ 66)();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ 65);
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),
/* 127 */
/*!********************************************!*\
  !*** ../node_modules/has-symbols/shams.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 128 */
/*!*****************************************!*\
  !*** ../node_modules/object-is/shim.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(/*! ./polyfill */ 68);
var define = __webpack_require__(/*! define-properties */ 36);

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),
/* 129 */
/*!*****************************************!*\
  !*** ../node_modules/is-regex/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = __webpack_require__(/*! has-symbols */ 66)();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';
var regexExec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	regexExec = Function.call.bind(RegExp.prototype.exec);
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		try {
			regexExec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return toStr.call(value) === regexClass;
	};


/***/ }),
/* 130 */
/*!*******************************************************!*\
  !*** ../node_modules/regexp.prototype.flags/index.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ 36);
var callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ 64);

var implementation = __webpack_require__(/*! ./implementation */ 69);
var getPolyfill = __webpack_require__(/*! ./polyfill */ 70);
var shim = __webpack_require__(/*! ./shim */ 131);

var flagsBound = callBind(implementation);

define(flagsBound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = flagsBound;


/***/ }),
/* 131 */
/*!******************************************************!*\
  !*** ../node_modules/regexp.prototype.flags/shim.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var supportsDescriptors = __webpack_require__(/*! define-properties */ 36).supportsDescriptors;
var getPolyfill = __webpack_require__(/*! ./polyfill */ 70);
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};


/***/ }),
/* 132 */
/*!***********************************************!*\
  !*** ../node_modules/is-date-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 133 */
/*!***************************************************************!*\
  !*** ../node_modules/react-transition-group/CSSTransition.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ 1));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ 134));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ 137));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 0));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ 71));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ 73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? undefined : {};
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 134 */
/*!*****************************************************!*\
  !*** ../node_modules/dom-helpers/class/addClass.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 135);

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ 136));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),
/* 135 */
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 136 */
/*!*****************************************************!*\
  !*** ../node_modules/dom-helpers/class/hasClass.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),
/* 137 */
/*!********************************************************!*\
  !*** ../node_modules/dom-helpers/class/removeClass.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 138 */
/*!*******************************************************************!*\
  !*** ../node_modules/react-transition-group/ReplaceTransition.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ 1));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 0));

var _reactDom = __webpack_require__(/*! react-dom */ 17);

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ 74));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  false ? undefined : {};
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 139 */
/*!********************************************************************!*\
  !*** ../node_modules/react-transition-group/utils/ChildMapping.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ 0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),
/* 140 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/isElement.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObjectLike = __webpack_require__(/*! ./isObjectLike */ 59),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ 141);

/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */
function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

module.exports = isElement;


/***/ }),
/* 141 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/isPlainObject.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 101),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ 145),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 59);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 142 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_freeGlobal.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 35)))

/***/ }),
/* 143 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_getRawTag.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 75);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 144 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_objectToString.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 145 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_getPrototype.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 146);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 146 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_overArg.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 147 */
/*!***************************************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/dist/src/system/dist/components/FormFieldErrorFilled.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/* tslint:disable */
var React = __webpack_require__(/*! react */ 0);
var FormFieldErrorFilled = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement("svg", __assign({ viewBox: "0 0 18 18", fill: "currentColor", width: size || "18", height: size || "18" }, props),
        React.createElement("path", { d: "M9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 Z M9,4 C8.44771525,4 8,4.44771525 8,5 L8,9 C8,9.55228475 8.44771525,10 9,10 C9.55228475,10 10,9.55228475 10,9 L10,5 C10,4.44771525 9.55228475,4 9,4 Z M9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 C9.55228475,14 10,13.5522847 10,13 C10,12.4477153 9.55228475,12 9,12 Z", fillRule: "evenodd" })));
};
FormFieldErrorFilled.displayName = 'FormFieldErrorFilled';
exports.default = FormFieldErrorFilled;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=FormFieldErrorFilled.js.map

/***/ }),
/* 148 */
/*!************************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/dist/src/system/dist/components/Close.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/* tslint:disable */
var React = __webpack_require__(/*! react */ 0);
var Close = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement("svg", __assign({ viewBox: "0 0 6 6", fill: "currentColor", width: size || "6", height: size || "6" }, props),
        React.createElement("path", { d: "M5.2 0L3 2.2 0.8 0 0 0.8 2.2 3 0 5.3 0.8 6 3 3.8 5.2 6 6 5.3 3.8 3 6 0.8z" })));
};
Close.displayName = 'Close';
exports.default = Close;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=Close.js.map

/***/ }),
/* 149 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/dist/src/system/dist/components/CloseLarge.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/* tslint:disable */
var React = __webpack_require__(/*! react */ 0);
var CloseLarge = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement("svg", __assign({ viewBox: "0 0 8 8", fill: "currentColor", width: size || "8", height: size || "8" }, props),
        React.createElement("path", { d: "M7.2 0L4 3.2 0.8 0 0.1 0.7 3.3 4 0 7.3 0.7 8 4 4.7 7.3 8 8 7.3 4.7 4 7.9 0.7z" })));
};
CloseLarge.displayName = 'CloseLarge';
exports.default = CloseLarge;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=CloseLarge.js.map

/***/ }),
/* 150 */
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 151 */
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 152 */
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 153 */
/*!********************************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/dist/src/system/dist/components/DropDownArrow.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/* tslint:disable */
var React = __webpack_require__(/*! react */ 0);
var DropDownArrow = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement("svg", __assign({ viewBox: "0 0 10 6", fill: "currentColor", width: size || "10", height: size || "6" }, props),
        React.createElement("path", { d: "M5 4.1L0.7 0 0 0.7 5 5.6 10 0.7 9.3 0z" })));
};
DropDownArrow.displayName = 'DropDownArrow';
exports.default = DropDownArrow;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=DropDownArrow.js.map

/***/ }),
/* 154 */
/*!*************************************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/dist/src/system/dist/components/FormFieldSpinnerUp.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/* tslint:disable */
var React = __webpack_require__(/*! react */ 0);
var FormFieldSpinnerUp = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement("svg", __assign({ viewBox: "0 0 8 5", fill: "currentColor", width: size || "8", height: size || "5" }, props),
        React.createElement("path", { d: "M0 4L0.8 4.8 4 1.5 7.3 4.8 8 4 4 0z" })));
};
FormFieldSpinnerUp.displayName = 'FormFieldSpinnerUp';
exports.default = FormFieldSpinnerUp;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=FormFieldSpinnerUp.js.map

/***/ }),
/* 155 */
/*!***************************************************************************************************!*\
  !*** ../node_modules/wix-ui-icons-common/dist/src/system/dist/components/FormFieldSpinnerDown.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/* tslint:disable */
var React = __webpack_require__(/*! react */ 0);
var FormFieldSpinnerDown = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return (React.createElement("svg", __assign({ viewBox: "0 0 8 5", fill: "currentColor", width: size || "8", height: size || "5" }, props),
        React.createElement("path", { d: "M4 3.2L0.7 0 0 0.8 4 4.8 8 0.8 7.2 0z" })));
};
FormFieldSpinnerDown.displayName = 'FormFieldSpinnerDown';
exports.default = FormFieldSpinnerDown;
/* tslint:enable */
/* eslint-enable */
//# sourceMappingURL=FormFieldSpinnerDown.js.map

/***/ }),
/* 156 */
/*!********************************************************************!*\
  !*** ../node_modules/path-to-regexp/node_modules/isarray/index.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 157 */
/*!*********************************!*\
  !*** ./client.tsx + 48 modules ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/assertThisInitialized.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js because of ../node_modules/rc-slider/es/Range.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js because of ../node_modules/rc-slider/es/Range.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/createClass.js because of ../node_modules/rc-slider/es/Range.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/defineProperty.js because of ../node_modules/rc-slider/es/Slider.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/extends.js because of ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsedTooltip.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js because of ../node_modules/rc-slider/es/Range.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/inherits.js because of ../node_modules/rc-slider/es/Range.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js because of ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsedTooltip.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js because of ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsedTooltip.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js because of ../node_modules/rc-slider/es/Range.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/esm/typeof.js because of ../node_modules/rc-slider/es/Range.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/get.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/slicedToArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/create-react-context/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/hoist-non-react-methods/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/mini-create-react-context/dist/esm/index.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Box/Box.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Input/Affix/Affix.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Input/Group/Group.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Input/IconAffix/IconAffix.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Input/Input.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Input/Ticker/Ticker.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/colors.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./layouts/Frontpage/FrontpageLayout.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./routes/index.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./sections/home/hero/hero.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./sections/home/navbar/NavBar.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/path-to-regexp/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-responsive/dist/react-responsive.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/tslib/tslib.es6.js because of ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsedTooltip.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/CloseButton/CloseButton.st.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Heading/Heading.st.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Image/Image.st.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Loader/Loader.st.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/StatusIndicator/StatusIndicator.st.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Tooltip/Tooltip.js because of ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsedTooltip.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/index.js because of ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsedTooltip.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-core/dist/es/src/components/button-next/button-next.st.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-core/dist/es/src/hocs/Focusable/Focusable.st.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-core/dist/es/src/utils/index.js because of ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/EllipsedTooltip.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-icons-common/system/CircleLoaderCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-icons-common/system/CircleLoaderCheckSmall.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-icons-common/system/Close.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-icons-common/system/CloseLarge.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-icons-common/system/DropDownArrow.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-icons-common/system/FormFieldError.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-icons-common/system/FormFieldErrorFilled.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-icons-common/system/FormFieldErrorSmall.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-icons-common/system/FormFieldSpinnerDown.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-icons-common/system/FormFieldSpinnerUp.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-icons-common/system/FormFieldWarningFilled.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-icons-common/system/ToggleOn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "React" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "ReactDOM" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(17);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(11);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ../node_modules/react-i18next/dist/es/context.js




function context_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { context_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { context_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: true
};
var i18nInstance;
var I18nContext = external_React_default.a.createContext();
function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = _objectSpread({}, defaultOptions, {}, options);
}
function getDefaults() {
  return defaultOptions;
}
var context_ReportNamespaces = function () {
  function ReportNamespaces() {
    classCallCheck_default()(this, ReportNamespaces);

    this.usedNamespaces = {};
  }

  createClass_default()(ReportNamespaces, [{
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(namespaces) {
      var _this = this;

      namespaces.forEach(function (ns) {
        if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }]);

  return ReportNamespaces;
}();
function setI18n(instance) {
  i18nInstance = instance;
}
function getI18n() {
  return i18nInstance;
}
var initReactI18next = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
function composeInitialProps(ForComponent) {
  return function (ctx) {
    return new Promise(function (resolve) {
      var i18nInitialProps = getInitialProps();

      if (ForComponent.getInitialProps) {
        ForComponent.getInitialProps(ctx).then(function (componentsInitialProps) {
          resolve(_objectSpread({}, componentsInitialProps, {}, i18nInitialProps));
        });
      } else {
        resolve(i18nInitialProps);
      }
    });
  };
}
function getInitialProps() {
  var i18n = getI18n();
  var namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
  var ret = {};
  var initialI18nStore = {};
  i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
    });
  });
  ret.initialI18nStore = initialI18nStore;
  ret.initialLanguage = i18n.language;
  return ret;
}
// CONCATENATED MODULE: ../node_modules/react-i18next/dist/es/I18nextProvider.js


function I18nextProvider(_ref) {
  var i18n = _ref.i18n,
      defaultNS = _ref.defaultNS,
      children = _ref.children;
  return Object(external_React_["createElement"])(I18nContext.Provider, {
    value: {
      i18n: i18n,
      defaultNS: defaultNS
    }
  }, children);
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(24);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var esm_defineProperty = __webpack_require__(77);

// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectSpread.js

function objectSpread_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(esm_defineProperty["a" /* default */])(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var esm_classCallCheck = __webpack_require__(21);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/createClass.js
var esm_createClass = __webpack_require__(22);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(33);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(37);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(19);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(39);

// CONCATENATED MODULE: ../node_modules/i18next/dist/esm/i18next.js









var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};

var i18next_Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(esm_classCallCheck["a" /* default */])(this, Logger);

    this.init(concreteLogger, options);
  }

  Object(esm_createClass["a" /* default */])(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, objectSpread_objectSpread({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }, this.options));
    }
  }]);

  return Logger;
}();

var baseLogger = new i18next_Logger();

var i18next_EventEmitter = function () {
  function EventEmitter() {
    Object(esm_classCallCheck["a" /* default */])(this, EventEmitter);

    this.observers = {};
  }

  Object(esm_createClass["a" /* default */])(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event]) return;

      if (!listener) {
        delete this.observers[event];
        return;
      }

      this.observers[event] = this.observers[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    object = object[key];
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);

  if (value !== undefined) {
    return value;
  }

  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop in target) {
      if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
        if (overwrite) target[prop] = source[prop];
      } else {
        deepExtend(target[prop], source[prop], overwrite);
      }
    } else {
      target[prop] = source[prop];
    }
  }

  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
function i18next_escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}
var isIE10 = typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;

var i18next_ResourceStore = function (_EventEmitter) {
  Object(inherits["a" /* default */])(ResourceStore, _EventEmitter);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    Object(esm_classCallCheck["a" /* default */])(this, ResourceStore);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ResourceStore).call(this));

    if (isIE10) {
      i18next_EventEmitter.call(Object(assertThisInitialized["a" /* default */])(_this));
    }

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    return _this;
  }

  Object(esm_createClass["a" /* default */])(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      return getPath(this.data, path);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = objectSpread_objectSpread({}, pack, resources);
      }

      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === 'v1') return objectSpread_objectSpread({}, {}, this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(i18next_EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

var checkedLoadedFor = {};

var i18next_Translator = function (_EventEmitter) {
  Object(inherits["a" /* default */])(Translator, _EventEmitter);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(esm_classCallCheck["a" /* default */])(this, Translator);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Translator).call(this));

    if (isIE10) {
      i18next_EventEmitter.call(Object(assertThisInitialized["a" /* default */])(_this));
    }

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, Object(assertThisInitialized["a" /* default */])(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  Object(esm_createClass["a" /* default */])(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator || this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS;

      if (nsSeparator && key.indexOf(nsSeparator) > -1) {
        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options) {
      var _this2 = this;

      if (Object(esm_typeof["a" /* default */])(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {};
      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)];
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          return namespace + nsSeparator + key;
        }

        return key;
      }

      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, options) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        }

        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy$$1 = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy$$1[m] = this.translate(deepKey, objectSpread_objectSpread({}, options, {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy$$1[m] === deepKey) copy$$1[m] = res[m];
            }
          }

          res = copy$$1;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options);
      } else {
        var usedDefault = false;
        var usedKey = false;

        if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
          usedDefault = true;

          if (options.count !== undefined) {
            var suffix = this.pluralResolver.getSuffix(lng, options.count);
            res = options["defaultValue".concat(suffix)];
          }

          if (!res) res = options.defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }

        var updateMissing = options.defaultValue && options.defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? options.defaultValue : res);

          if (keySeparator) {
            var fk = this.resolve(key, objectSpread_objectSpread({}, options, {
              keySeparator: false
            }));
            if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
          }

          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k) {
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (l) {
                var plurals = _this2.pluralResolver.getPluralFormsOfKey(l, key);

                plurals.forEach(function (p) {
                  return send([l], p);
                });
              });
            } else {
              send(lngs, key);
            }
          }
        }

        res = this.extendTranslation(res, keys, options, resolved);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);
        if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
      }

      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation) this.interpolator.init(objectSpread_objectSpread({}, options, {
          interpolation: objectSpread_objectSpread({}, this.options.interpolation, options.interpolation)
        }));
        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = objectSpread_objectSpread({}, this.options.interpolation.defaultVariables, data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          return _this3.translate.apply(_this3, arguments);
        }, options);
        if (options.interpolation) this.interpolator.reset();
      }

      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? objectSpread_objectSpread({
          i18nResolved: resolved
        }, options) : options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys];
      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;

          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;

            _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          }

          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKey = key;
            var finalKeys = [finalKey];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count);
              if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);
              if (needsContextHandling) finalKeys.push(finalKey += "".concat(_this4.options.contextSeparator).concat(options.context));
              if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
            }

            var possibleKey;

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }]);

  return Translator;
}(i18next_EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var i18next_LanguageUtil = function () {
  function LanguageUtil(options) {
    Object(esm_classCallCheck["a" /* default */])(this, LanguageUtil);

    this.options = options;
    this.whitelist = this.options.supportedLngs || false;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }

  Object(esm_createClass["a" /* default */])(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      if (p[p.length - 1].toLowerCase() === 'x') return null;
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase();
          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isWhitelisted",
    value: function isWhitelisted(code) {
      this.logger.deprecate('languageUtils.isWhitelisted', 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.');
      return this.isSupportedCode(code);
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;

      if (!codes) return null;
      var found;
      codes.forEach(function (code) {
        if (found) return;

        var cleanedLng = _this.formatLanguageCode(code);

        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
      });

      if (!found && this.options.supportedLngs) {
        codes.forEach(function (code) {
          if (found) return;

          var lngOnly = _this.getLanguagePartFromCode(code);

          if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
          found = _this.options.supportedLngs.find(function (supportedLng) {
            if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
          });
        });
      }

      if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var i18next_PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(esm_classCallCheck["a" /* default */])(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    this.rules = createRules();
  }

  Object(esm_createClass["a" /* default */])(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var rule = this.getRule(code);
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var _this = this;

      var ret = [];
      var rule = this.getRule(code);
      if (!rule) return ret;
      rule.numbers.forEach(function (n) {
        var suffix = _this.getSuffix(code, n);

        ret.push("".concat(key).concat(suffix));
      });
      return ret;
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var _this2 = this;

      var rule = this.getRule(code);

      if (rule) {
        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx];

        if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        var returnSuffix = function returnSuffix() {
          return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
        };

        if (this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return '';
          if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
          return returnSuffix();
        } else if (this.options.compatibilityJSON === 'v2') {
          return returnSuffix();
        } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          return returnSuffix();
        }

        return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }]);

  return PluralResolver;
}();

var i18next_Interpolator = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(esm_classCallCheck["a" /* default */])(this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.options = options;

    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };

    this.init(options);
  }

  Object(esm_createClass["a" /* default */])(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : i18next_escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
      this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path = getPathWithDefaults(data, defaultData, key);
          return _this.alwaysFormat ? _this.format(path, undefined, lng) : path;
        }

        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, options);
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      replaces = 0;

      while (match = this.regexpUnescape.exec(str)) {
        value = handleFormat(match[1].trim());

        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            var temp = missingInterpolationHandler(str, match, options);
            value = typeof temp === 'string' ? temp : '';
          } else {
            this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));
            value = '';
          }
        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
          value = makeString(value);
        }

        str = str.replace(match[0], regexSafe(value));
        this.regexpUnescape.lastIndex = 0;
        replaces++;

        if (replaces >= this.maxReplaces) {
          break;
        }
      }

      replaces = 0;

      while (match = this.regexp.exec(str)) {
        value = handleFormat(match[1].trim());

        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            var _temp = missingInterpolationHandler(str, match, options);

            value = typeof _temp === 'string' ? _temp : '';
          } else {
            this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));
            value = '';
          }
        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
          value = makeString(value);
        }

        value = this.escapeValue ? regexSafe(this.escape(value)) : regexSafe(value);
        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
        replaces++;

        if (replaces >= this.maxReplaces) {
          break;
        }
      }

      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var _this2 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = objectSpread_objectSpread({}, options);

      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;

      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0) return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = objectSpread_objectSpread({}, inheritedOptions, clonedOptions);
        } catch (e) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
          return "".concat(key).concat(sep).concat(optionsString);
        }

        delete clonedOptions.defaultValue;
        return key;
      }

      while (match = this.nestingRegexp.exec(str)) {
        var formatters = [];
        var doReduce = false;

        if (match[0].includes(this.formatSeparator) && !/{.*}/.test(match[1])) {
          var r = match[1].split(this.formatSeparator).map(function (elem) {
            return elem.trim();
          });
          match[1] = r.shift();
          formatters = r;
          doReduce = true;
        }

        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && typeof value !== 'string') return value;
        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        }

        if (doReduce) {
          value = formatters.reduce(function (v, f) {
            return _this2.format(v, f, options.lng, options);
          }, value.trim());
        }

        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var i18next_Connector = function (_EventEmitter) {
  Object(inherits["a" /* default */])(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    Object(esm_classCallCheck["a" /* default */])(this, Connector);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Connector).call(this));

    if (isIE10) {
      i18next_EventEmitter.call(Object(assertThisInitialized["a" /* default */])(_this));
    }

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  Object(esm_createClass["a" /* default */])(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      var toLoad = [];
      var pending = [];
      var toLoadLanguages = [];
      var toLoadNamespaces = [];
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending.indexOf(name) < 0) pending.push(name);
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending.indexOf(name) < 0) pending.push(name);
            if (toLoad.indexOf(name) < 0) toLoad.push(name);
            if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
          }
        });
        if (!hasAllNamespaces) toLoadLanguages.push(lng);
      });

      if (toLoad.length || pending.length) {
        this.queue.push({
          pending: pending,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: toLoad,
        pending: pending,
        toLoadLanguages: toLoadLanguages,
        toLoadNamespaces: toLoadNamespaces
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }

      this.state[name] = err ? -1 : 2;
      var loaded = {};
      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        remove(q.pending, name);
        if (err) q.errors.push(err);

        if (q.pending.length === 0 && !q.done) {
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = [];

            if (q.loaded[l].length) {
              q.loaded[l].forEach(function (ns) {
                if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
              });
            }
          });
          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      });
      this.emit('loaded', loaded);
      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 350;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {});
      return this.backend[fcName](lng, ns, function (err, data) {
        if (err && data && tried < 5) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        callback(err, data);
      });
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback();
        return null;
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        return;
      }

      if (key === undefined || key === null || key === '') return;

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null, objectSpread_objectSpread({}, options, {
          isUpdate: isUpdate
        }));
      }

      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(i18next_EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    whitelist: false,
    nonExplicitWhitelist: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (Object(esm_typeof["a" /* default */])(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if (Object(esm_typeof["a" /* default */])(args[2]) === 'object' || Object(esm_typeof["a" /* default */])(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

  if (options.whitelist) {
    if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
      options.whitelist = options.whitelist.concat(['cimode']);
    }

    options.supportedLngs = options.whitelist;
  }

  if (options.nonExplicitWhitelist) {
    options.nonExplicitSupportedLngs = options.nonExplicitWhitelist;
  }

  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }

  return options;
}

function noop() {}

var i18next_I18n = function (_EventEmitter) {
  Object(inherits["a" /* default */])(I18n, _EventEmitter);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    Object(esm_classCallCheck["a" /* default */])(this, I18n);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(I18n).call(this));

    if (isIE10) {
      i18next_EventEmitter.call(Object(assertThisInitialized["a" /* default */])(_this));
    }

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };

    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return Object(possibleConstructorReturn["a" /* default */])(_this, Object(assertThisInitialized["a" /* default */])(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  Object(esm_createClass["a" /* default */])(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (options.whitelist && !options.supportedLngs) {
        this.logger.deprecate('whitelist', 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.');
      }

      if (options.nonExplicitWhitelist && !options.nonExplicitSupportedLngs) {
        this.logger.deprecate('whitelist', 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.');
      }

      this.options = objectSpread_objectSpread({}, get(), this.options, transformOptions(options));
      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      }

      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var lu = new i18next_LanguageUtil(this.options);
        this.store = new i18next_ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new i18next_PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        s.interpolator = new i18next_Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new i18next_Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new i18next_Translator(this.services, this.options);
        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      }

      if (!this.modules.languageDetector && !this.options.lng) {
        this.logger.warn('init: no languageDetector is used and no lng is defined');
      }

      var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var deferred = defer();

      var load = function load() {
        _this2.changeLanguage(_this2.options.lng, function (err, t) {
          _this2.isInitialized = true;

          _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t);
          callback(err, t);
        });
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === 'string' ? language : this.language;
      if (typeof language === 'function') usedCallback = language;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, usedCallback);
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
      if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');

      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit('languageChanging', lng);

      var done = function done(err, l) {
        if (l) {
          _this4.language = l;
          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);

          _this4.translator.changeLanguage(l);

          _this4.isLanguageChangingTo = undefined;

          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        } else {
          _this4.isLanguageChangingTo = undefined;
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(lngs) {
        var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);

        if (l) {
          if (!_this4.language) {
            _this4.language = l;
            _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
          }

          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(l, function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options;

        if (Object(esm_typeof["a" /* default */])(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = objectSpread_objectSpread({}, opts);
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        return _this5.t(key, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isInitialized) {
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
        return false;
      }

      if (!this.languages || !this.languages.length) {
        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
        return false;
      }

      var lng = this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === 'cimode') return true;

      var loadNotPending = function loadNotPending(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

        return loadState === -1 || loadState === 2;
      };

      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== undefined) return preResult;
      }

      if (this.hasResourceBundle(lng, ns)) return true;
      if (!this.services.backendConnector.backend) return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      });

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
    }
  }, {
    key: "createInstance",
    value: function createInstance() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      return new I18n(options, callback);
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = objectSpread_objectSpread({}, this.options, options, {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this8[m];
      });
      clone.services = objectSpread_objectSpread({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new i18next_Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }]);

  return I18n;
}(i18next_EventEmitter);

var i18next = new i18next_I18n();

/* harmony default export */ var esm_i18next = (i18next);

// CONCATENATED MODULE: ./i18n.ts

function i18n_i18n(locale) {
    void esm_i18next
        .use({
        type: 'backend',
        read: function (language, namespace, callback) {
            // We configure how i18next should fetch a translation resource when it
            // needs it: We use Webpack's dynamic imports to fetch resources without
            // increasing our bundle size.
            //
            // See https://webpack.js.org/guides/code-splitting/#dynamic-imports for
            // more information.
            return __webpack_require__(107)("./messages_" + language + ".json")
                .then(function (translation) {
                return callback(null, translation);
            })
                .catch(function (error) { return callback(error); });
        },
    })
        .init({
        // Initial language
        lng: locale,
        // Fallback language
        fallbackLng: 'en',
        // Don't use a key separator (no support for nested translation objects)
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            prefix: '{',
            suffix: '}',
        },
        // Wait for translation data to be available before rendering a component
        react: {
            wait: true,
        },
    });
    return esm_i18next;
}

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(13);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(6);

// CONCATENATED MODULE: ../node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);

// CONCATENATED MODULE: ../node_modules/value-equal/esm/value-equal.js
function value_equal_valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = value_equal_valueOf(a);
    var bValue = value_equal_valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);

// CONCATENATED MODULE: ../node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = "production" === 'production';
var tiny_invariant_esm_prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(tiny_invariant_esm_prefix);
    }
    throw new Error(tiny_invariant_esm_prefix + ": " + (message || ''));
}

/* harmony default export */ var tiny_invariant_esm = (invariant);

// CONCATENATED MODULE: ../node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(esm_extends["a" /* default */])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? undefined : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? undefined : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(esm_extends["a" /* default */])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(esm_extends["a" /* default */])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? undefined : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? undefined : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(esm_extends["a" /* default */])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}



// EXTERNAL MODULE: ../node_modules/mini-create-react-context/dist/esm/index.js
var esm = __webpack_require__(56);

// EXTERNAL MODULE: ../node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(57);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// EXTERNAL MODULE: ../node_modules/react-is/index.js
var react_is = __webpack_require__(60);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(20);

// EXTERNAL MODULE: ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(40);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ../node_modules/react-router/esm/react-router.js













// TODO: Replace with React.createContext once we can assume React 16+

var react_router_createNamedContext = function createNamedContext(name) {
  var context = Object(esm["a" /* default */])();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
react_router_createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = Object(esm["a" /* default */])();
  context.displayName = name;
  return context;
};

var react_router_context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var react_router_Router =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return external_React_default.a.createElement(react_router_context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, external_React_default.a.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(external_React_default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var react_router_MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return external_React_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(external_React_default.a.Component);

if (false) {}

var react_router_Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(external_React_default.a.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return external_React_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp_default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : Object(esm_extends["a" /* default */])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return external_React_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, Object(esm_extends["a" /* default */])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp_default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return external_React_default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? undefined : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var react_router_Route =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return external_React_default.a.createElement(react_router_context.Consumer, null, function (context$1) {
      !context$1 ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = Object(esm_extends["a" /* default */])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return external_React_default.a.createElement(react_router_context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? undefined : children(props) : children : component ? external_React_default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? undefined : children(props) : null);
    });
  };

  return Route;
}(external_React_default.a.Component);

if (false) {}

function react_router_addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return Object(esm_extends["a" /* default */])({}, location, {
    pathname: react_router_addLeadingSlash(basename) + location.pathname
  });
}

function react_router_stripBasename(basename, location) {
  if (!basename) return location;
  var base = react_router_addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return Object(esm_extends["a" /* default */])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}

function staticHandler(methodName) {
  return function () {
      false ? undefined : tiny_invariant_esm(false) ;
  };
}

function react_router_noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var react_router_StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return react_router_noop;
    };

    _this.handleBlock = function () {
      return react_router_noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, createLocation(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return react_router_addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: react_router_stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return external_React_default.a.createElement(react_router_Router, Object(esm_extends["a" /* default */])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(external_React_default.a.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var react_router_Switch =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      external_React_default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && external_React_default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, Object(esm_extends["a" /* default */])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? external_React_default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(external_React_default.a.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["wrappedComponentRef"]);

    return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      return external_React_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoist_non_react_statics_cjs_default()(C, Component);
}

var useContext = external_React_default.a.useContext;
function useHistory() {
  if (false) {}

  return useContext(historyContext);
}
function useLocation() {
  if (false) {}

  return useContext(react_router_context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(react_router_context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  var location = useLocation();
  var match = useContext(react_router_context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, react_router_key, global; }


//# sourceMappingURL=react-router.js.map

// CONCATENATED MODULE: ../node_modules/react-router-dom/esm/react-router-dom.js











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var react_router_dom_BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return external_React_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(external_React_default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var react_router_dom_HashRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return external_React_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(external_React_default.a.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var react_router_dom_normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = external_React_default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = Object(esm_extends["a" /* default */])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return external_React_default.a.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref2, ["component", "replace", "to", "innerRef"]);

  return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var history = context.history;
    var location = react_router_dom_normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = Object(esm_extends["a" /* default */])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return external_React_default.a.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = external_React_default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = react_router_dom_normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? Object(esm_extends["a" /* default */])({}, styleProp, {}, activeStyle) : styleProp;

    var props = Object(esm_extends["a" /* default */])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return external_React_default.a.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(10);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(9);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/colors.scss
var colors = __webpack_require__(25);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Box/Box.scss
var Box_Box = __webpack_require__(18);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_Box);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Box/Box.js



function Box_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Box_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Box_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Box_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/** Defined according to the design system */

var spacingUnit = 6;
var directions = {
  horizontal: Box_default.a.horizontal,
  vertical: Box_default.a.vertical
};
var horizontalAlignmentValues = {
  left: Box_default.a.left,
  center: Box_default.a.center,
  right: Box_default.a.right,
  'space-between': Box_default.a.spaceBetween
};
var verticalAlignmentValues = {
  top: Box_default.a.top,
  middle: Box_default.a.middle,
  bottom: Box_default.a.bottom,
  'space-between': Box_default.a.spaceBetween
};
var spacingValues = {
  tiny: "".concat(spacingUnit, "px"),
  small: "".concat(spacingUnit * 2, "px"),
  medium: "".concat(spacingUnit * 3, "px"),
  large: "".concat(spacingUnit * 4, "px")
};
/** In case the value is a number, it's multiplied by the defined spacing unit.
 *  Otherwise - there're two options:
 *   1. A predefined spacing value with semantic name (tiny, small, etc.)
 *   2. Space-separated values that are represented by a string (for example: "3px 3px")
 * */

var formatSpacingValue = function formatSpacingValue(value) {
  if (typeof value !== 'undefined') return isFinite(value) ? "".concat(value * spacingUnit, "px") : spacingValues[value] || "".concat(value);
};

var formatSizeValue = function formatSizeValue(value) {
  if (typeof value !== 'undefined') return isFinite(value) ? "".concat(value, "px") : "".concat(value);
};

var Box_Box_Box = function Box(_ref) {
  var _classNames;

  var dataHook = _ref.dataHook,
      children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      inline = _ref.inline,
      direction = _ref.direction,
      align = _ref.align,
      verticalAlign = _ref.verticalAlign,
      padding = _ref.padding,
      paddingTop = _ref.paddingTop,
      paddingRight = _ref.paddingRight,
      paddingBottom = _ref.paddingBottom,
      paddingLeft = _ref.paddingLeft,
      margin = _ref.margin,
      marginTop = _ref.marginTop,
      marginRight = _ref.marginRight,
      marginBottom = _ref.marginBottom,
      marginLeft = _ref.marginLeft,
      minWidth = _ref.minWidth,
      maxWidth = _ref.maxWidth,
      width = _ref.width,
      minHeight = _ref.minHeight,
      maxHeight = _ref.maxHeight,
      height = _ref.height,
      color = _ref.color,
      backgroundColor = _ref.backgroundColor,
      border = _ref.border,
      borderColor = _ref.borderColor,
      borderTopColor = _ref.borderTopColor,
      borderRightColor = _ref.borderRightColor,
      borderBottomColor = _ref.borderBottomColor,
      borderLeftColor = _ref.borderLeftColor,
      dataHookByKebabCase = _ref['data-hook'],
      flexDirection = _ref.flexDirection,
      justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      nativeStyles = objectWithoutProperties_default()(_ref, ["dataHook", "children", "className", "style", "inline", "direction", "align", "verticalAlign", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height", "color", "backgroundColor", "border", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "data-hook", "flexDirection", "justifyContent", "alignItems"]);

  var rootClassNames = classnames_default()(Box_default.a.root, className, (_classNames = {}, defineProperty_default()(_classNames, Box_default.a.inline, inline), defineProperty_default()(_classNames, directions[direction], direction), defineProperty_default()(_classNames, horizontalAlignmentValues[align], align), defineProperty_default()(_classNames, verticalAlignmentValues[verticalAlign], verticalAlign), _classNames));

  var rootStyles = Box_objectSpread(Box_objectSpread(Box_objectSpread(Box_objectSpread(Box_objectSpread(Box_objectSpread(Box_objectSpread({}, style), {}, {
    // Spacing
    padding: formatSpacingValue(padding),
    paddingTop: formatSpacingValue(paddingTop),
    paddingRight: formatSpacingValue(paddingRight),
    paddingBottom: formatSpacingValue(paddingBottom),
    paddingLeft: formatSpacingValue(paddingLeft),
    margin: formatSpacingValue(margin),
    marginTop: formatSpacingValue(marginTop),
    marginRight: formatSpacingValue(marginRight),
    marginBottom: formatSpacingValue(marginBottom),
    marginLeft: formatSpacingValue(marginLeft),
    // Sizing
    minWidth: formatSizeValue(minWidth),
    maxWidth: formatSizeValue(maxWidth),
    width: formatSizeValue(width),
    minHeight: formatSizeValue(minHeight),
    maxHeight: formatSizeValue(maxHeight),
    height: formatSizeValue(height),
    // Styling
    color: colors_default.a[color] || color,
    backgroundColor: colors_default.a[backgroundColor] || backgroundColor,
    border: border
  }, borderColor && {
    borderColor: colors_default.a[borderColor] || borderColor
  }), borderTopColor && {
    borderTopColor: colors_default.a[borderTopColor] || borderTopColor
  }), borderRightColor && {
    borderRightColor: colors_default.a[borderRightColor] || borderRightColor
  }), borderBottomColor && {
    borderBottomColor: colors_default.a[borderBottomColor] || borderBottomColor
  }), borderLeftColor && {
    borderLeftColor: colors_default.a[borderLeftColor] || borderLeftColor
  }), nativeStyles); // Filter undefined values


  var rootStylesFiltered = Object.fromEntries(Object.entries(rootStyles).filter(function (entry) {
    return typeof entry[1] !== 'undefined';
  }));
  return /*#__PURE__*/external_React_default.a.createElement("div", {
    "data-hook": dataHook,
    className: rootClassNames,
    style: rootStylesFiltered
  }, children);
};

Box_Box_Box.displayName = 'Box';
Box_Box_Box.propTypes = {
  /** Any element to be rendered inside */
  children: prop_types_default.a.node,

  /** Define styles through a classname */
  className: prop_types_default.a.string,

  /** Defines if the box behaves as an inline element */
  inline: prop_types_default.a.bool,

  /** Defines how the children are ordered (horizontally or vertically) */
  direction: prop_types_default.a.oneOf(Object.keys(directions)),

  /** Defines how the children are aligned according to the X axis */
  align: prop_types_default.a.oneOf(Object.keys(horizontalAlignmentValues)),

  /** Defines how the children are aligned according to the Y axis */
  verticalAlign: prop_types_default.a.oneOf(Object.keys(verticalAlignmentValues)),

  /** Sets padding on all sides.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * or a string of space-separated values ("3px 3px") */
  padding: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets padding on the top.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * or a string of space-separated values ("3px 3px") */
  paddingTop: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets padding on the right.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * or a string of space-separated values ("3px 3px") */
  paddingRight: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets padding on the bottom.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * or a string of space-separated values ("3px 3px") */
  paddingBottom: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets padding on the left.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * or a string of space-separated values ("3px 3px") */
  paddingLeft: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets margin on all sides.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * or a string of space-separated values ("3px 3px") */
  margin: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets margin on the top.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * or a string of space-separated values ("3px 3px") */
  marginTop: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets margin on the right.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * or a string of space-separated values ("3px 3px") */
  marginRight: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets margin on the bottom.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * or a string of space-separated values ("3px 3px") */
  marginBottom: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets margin on the left.
   * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
   * or a string of space-separated values ("3px 3px") */
  marginLeft: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets the minimum width of the box (pixels) */
  minWidth: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets the maximum width of the box (pixels) */
  maxWidth: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets the width of the box (pixels) */
  width: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets the minimum height of the box (pixels) */
  minHeight: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets the maximum height of the box (pixels) */
  maxHeight: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets the height of the box (pixels) */
  height: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Sets a text color by a key from the color palette or natively supported value (Hex, RGB, etc.) */
  color: prop_types_default.a.string,

  /** Sets a background color by a key from the color palette or natively supported value (Hex, RGB, etc.) */
  backgroundColor: prop_types_default.a.string,

  /** Sets a border color by a key from the color palette or natively supported value (Hex, RGB, etc.) */
  borderColor: prop_types_default.a.string,

  /** Sets a border top color by a key from the color palette or natively supported value (Hex, RGB, etc.) */
  borderTopColor: prop_types_default.a.string,

  /** Sets a border right color by a key from the color palette or natively supported value (Hex, RGB, etc.) */
  borderRightColor: prop_types_default.a.string,

  /** Sets a border bottom color by a key from the color palette or natively supported value (Hex, RGB, etc.) */
  borderBottomColor: prop_types_default.a.string,

  /** Sets a border left color by a key from the color palette or natively supported value (Hex, RGB, etc.) */
  borderLeftColor: prop_types_default.a.string,

  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: prop_types_default.a.string
};
Box_Box_Box.defaultProps = {
  direction: 'horizontal',
  inline: false
};
/* harmony default export */ var src_Box_Box = (Box_Box_Box);
// EXTERNAL MODULE: ./layouts/Frontpage/FrontpageLayout.scss
var FrontpageLayout = __webpack_require__(78);
var FrontpageLayout_default = /*#__PURE__*/__webpack_require__.n(FrontpageLayout);

// CONCATENATED MODULE: ./layouts/Frontpage/FrontpageLayout.tsx



var FrontpageLayout_FrontpageLayout = function (_a) {
    var children = _a.children;
    return (external_React_["createElement"](src_Box_Box, { className: FrontpageLayout_default.a.main, minHeight: "100vh", height: "100vh", width: "100vw", direction: "vertical" }, children));
};
/* harmony default export */ var Frontpage_FrontpageLayout = (FrontpageLayout_FrontpageLayout);

// CONCATENATED MODULE: ./layouts/Frontpage/index.ts



// CONCATENATED MODULE: ./layouts/index.ts



// EXTERNAL MODULE: ./sections/home/navbar/NavBar.scss
var NavBar = __webpack_require__(38);
var NavBar_default = /*#__PURE__*/__webpack_require__.n(NavBar);

// CONCATENATED MODULE: ./sections/home/navbar/Navbar.tsx




var Logo = function () { return (external_React_["createElement"]("svg", { className: "d-block", width: "130", height: "40", viewBox: "0 0 885 272" },
    external_React_["createElement"]("g", { fill: "#fff", "fill-rule": "evenodd" },
        external_React_["createElement"]("path", { d: "M723.294 178.59c-12.77 5.203-22.85 23.18-38.176 33.4-.95.632-1.9.95-2.534.95-1.267 0-2.85-1.268-2.85-6.97 0-19.642 6.335-29.146 11.72-43.085 18.692-48.47 50.688-89.97 79.2-135.274 2.218-3.484 3.485-7.285 3.485-11.404 0-3.484-1.268-6.336-2.852-9.82C770.02 3.534 764.318 1 757.982 1c-3.484 0-6.652.317-10.77.317-14.89 0-18.058 21.86-21.543 27.56-23.76 40.235-51.006 89.973-64.945 125.137-3.057 7.883-6.36 15.767-8.868 23.857-13.775 3.99-24.095 23.358-40.236 34.12-.95.632-1.9.95-2.534.95-1.267 0-2.85-1.268-2.85-6.97 0-19.642 6.335-29.146 11.72-43.085 18.692-48.47 50.69-89.97 79.2-135.274 2.218-3.484 3.486-7.285 3.486-11.404 0-3.484-1.268-6.336-2.852-9.82C696.523 3.534 690.82 1 684.485 1c-3.485 0-6.653.317-10.77.317-14.89 0-18.06 21.86-21.544 27.56-23.76 40.235-51.004 89.973-64.943 125.137-1.108 2.858-2.248 5.716-3.372 8.584-.346.185-.7.386-1.063.604-16.157 9.504-29.78 26.294-49.42 37.7-3.802 2.216-15.524 10.453-25.028 10.453-2.218 0-4.118-.633-6.02-1.584-2.85-1.266-5.702-7.285-5.702-9.186 0-1.584.317-1.9 3.485-3.802 27.88-16.79 50.688-40.867 70.33-64.944 7.286-8.87 16.79-26.294 16.79-38.966 0-8.237-2.85-17.74-12.672-21.226-6.97-2.534-14.89-3.8-21.225-3.8-16.79 0-29.146 7.602-36.116 14.888-7.095 7.575-13.958 15.353-20.335 23.405-6.663-5.753-16.06-8.2-24.968-8.2-10.454 0-30.096 12.99-40.234 20.593-1.584 1.267-2.534 1.9-3.168 1.9-.316 0-.633-.316-.633-.95 0-.317.633-3.168.633-8.237 0-4.435-.95-10.137-5.068-17.107-.95-1.585-6.653-5.07-13.623-5.07-8.554 0-16.474 4.12-16.474 8.554 0 3.168 2.85 4.435 2.85 7.286 0 1.584-1.266 8.87-3.167 15.84-5.387 20.276-12.04 40.234-19.01 60.192-3.8 11.088-16.473 20.91-16.473 32.948 0 3.8 2.535 8.87 6.02 12.672 5.702 6.336 9.187 8.553 14.255 8.553 2.218 0 4.752-.633 6.97-2.534 4.752-4.118 7.286-8.236 8.554-13.938 8.236-37.383 31.996-62.727 58.29-79.517 8.87-5.703 20.91-11.722 22.494-11.722 1.624 0 4.164.75 6.724 1.48-7.35 11.99-13.306 24.632-17.18 38.12-1.266 4.435-1.9 8.554-1.9 12.99 0 7.285 1.584 14.89 4.12 22.175 3.484 10.138 9.186 19.008 17.106 23.126 14.573 7.604 25.027 11.722 34.53 11.722 5.387 0 9.505-.95 13.94-3.485 20.823-11.78 33.59-20.718 42.807-28.656.253 8.05 1.84 12.508 7.565 18.52 5.702 6.02 14.572 11.404 26.294 13.94 1.9.316 3.802.632 5.702.632 13.41 0 26.318-10.9 36.27-21.706 1.152 2.358 2.827 4.61 5.23 7.134 5.704 6.02 14.574 11.404 26.296 13.94 1.9.316 3.8.632 5.702.632 15.71 0 30.727-14.957 41.114-27.2 3.462 7.162 13.137 14.24 24.78 19.914 3.168 1.584 6.97 2.534 10.455 2.534 13.622 0 23.443-11.088 31.046-19.324 19.643-21.543 30.414-48.154 38.65-81.735.634-2.534 1.585-3.485 2.852-3.485 3.168 0 7.286 0 11.722-.633 8.553-1.267 15.206-4.12 23.126-5.386 4.752-.95 4.118-2.533 8.554-4.117 3.168-1.267 5.702-2.535 5.702-5.703 0-5.385-9.82-11.088-24.71-11.088-11.722 0-18.692.95-23.444.95-7.286 0-9.187-2.217-13.94-14.572 0 0 4.753 12.355 0 0-.95-2.534-1.9-3.802-4.75-6.336-6.654-5.702-14.89-7.603-21.543-7.603-15.84 0-29.464 16.158-38.968 29.78-2.217 3.168-5.385 5.702-7.603 9.187-13.05 19.575-25.545 41.65-27.086 65.443zM318.264 70.696c7.92 0 12.355-.634 13.306-.634.95 0 1.584.317 1.584 1.268 0 .633-.317 1.584-2.535 6.336-19.326 41.5-32.63 83.635-44.353 130.204-.317 1.268-1.267 6.02-1.267 10.772 0 4.435 1.267 9.187 5.702 11.72 8.554 5.07 15.524 7.288 20.276 7.288 6.97 0 10.454-4.436 10.454-11.722 0-6.336.317-12.99 1.267-18.058 8.87-46.57 22.175-83 42.767-121.017 9.82-18.058 11.088-19.008 11.088-20.592 0-.633-.317-1.583-.95-2.534 12.672-2.85 27.878-4.752 41.817-4.752 1.584 0 7.92 2.218 8.87 3.168 2.218 2.218 4.436 4.436 8.238 4.436 3.168 0 8.553-2.218 10.454-3.485 4.435-3.168 6.653-6.653 6.653-12.355 0-5.386-19.96-18.692-33.898-18.692-17.108 0-32.63 2.218-47.204 5.07-6.336 1.266-29.146 4.75-45.62 4.75-15.84 0-14.89-2.216-21.542-2.216-3.8 0-5.702 1.9-7.286 3.484-1.584 1.584-2.534 7.92-2.534 13.623 0 2.85 0 5.07 1.584 6.97 4.752 5.702 13.94 6.97 23.126 6.97 0 0-9.187 0 0 0zm234.75 25.66c0 2.852-.952 4.753-4.753 10.772-3.8 6.02-2.217 6.02-6.97 12.355-9.186 12.355-20.59 24.71-35.48 38.333-4.12 3.802-4.752 3.802-5.386 3.802-.317 0-.95-.317-.95-.95 0-.95.316-2.218 3.484-8.87 9.82-20.593 21.86-34.216 35.165-47.52 7.287-7.288 11.722-9.822 13.306-9.822.95 0 1.583.317 1.583 1.9 0 0 0-1.583 0 0zm243.618 8.238c.317 0 .634.316.95.95.317.95.95 1.9 2.535 3.168 1.267.95 1.267 5.386 1.267 8.87 0 30.73-17.424 56.074-34.53 81.735-3.803 5.702-6.02 6.653-7.92 6.653-1.585 0-4.12-4.12-5.07-6.653-1.267-3.485-1.584-7.603-1.584-9.187 0-24.71 23.443-61.46 38.966-81.735 2.535-3.485 4.436-3.8 5.386-3.8 0 0-.95 0 0 0z" }),
        external_React_["createElement"]("path", { d: "M75 36c-13.807 0-25 11.2-25 25v150c0 13.806 11.2 25 25 25h150c13.806 0 25-11.2 25-25V61c0-13.807-11.2-25-25-25H75zm99.997 26C168.37 62 163 67.372 163 74.006v63.988c0 6.63 5.373 12.006 11.997 12.006h37.006c6.626 0 11.997-5.372 11.997-12.006V74.006C224 67.376 218.627 62 212.003 62h-37.006zm-87 0C81.37 62 76 67.367 76 74.005v113.99C76 194.625 81.373 200 87.997 200h37.006c6.626 0 11.997-5.367 11.997-12.005V74.005C137 67.375 131.627 62 125.003 62H87.997z" })))); };
var NavWrapper = function (_a) {
    var children = _a.children;
    var _b = external_React_["useState"](false), scrolled = _b[0], setScrolled = _b[1];
    var handleScroll = function () {
        var offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    };
    external_React_["useEffect"](function () {
        window.addEventListener('scroll', handleScroll);
    });
    var x = NavBar_default.a.nav;
    if (scrolled) {
        x = classnames_default()(x, NavBar_default.a.scrolled);
    }
    return external_React_["createElement"]("div", { className: x }, children);
};
var NavButtons = function () { return (external_React_["createElement"](src_Box_Box, { width: "154px", align: "space-between", marginRight: "0.625em" },
    external_React_["createElement"]("button", { className: NavBar_default.a.btn__small }, "Log In"),
    external_React_["createElement"]("button", { className: NavBar_default.a.btn__large }, "Sign Up"))); };
var Navbar_NavBar = function () {
    return (external_React_["createElement"](NavWrapper, null,
        external_React_["createElement"](src_Box_Box, { width: "98.5%", height: "100%", direction: "horizontal", verticalAlign: "middle", align: "space-between", marginLeft: "0.813em" },
            external_React_["createElement"](Logo, null),
            external_React_["createElement"](NavButtons, null))));
};
/* harmony default export */ var Navbar = (Navbar_NavBar);

// CONCATENATED MODULE: ./sections/home/navbar/index.ts



// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Image/Image.st.css
var Image_st = __webpack_require__(80);
var Image_st_default = /*#__PURE__*/__webpack_require__.n(Image_st);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Image/Image.js




function Image_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Image_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Image_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Image_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var placeholderSource = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='164' height='120' viewBox='0 0 164 120'%3E%3Cg fill='none'%3E%3Crect width='164' height='120' fill='%23DAEFFE'/%3E%3Cpath fill='%23B9E3FF' d='M-8.52651283e-14,120 L49.0917544,74.9616932 C52.151039,72.1550101 56.848961,72.1550101 59.9082456,74.9616932 L71.293,85.4057534 L96.9019846,59.8591624 C100.0299,56.7386931 105.095216,56.744729 108.215685,59.8726439 C108.284098,59.9412201 108.35126,60.0110332 108.417137,60.0820486 L164,120 L-8.52651283e-14,120 Z'/%3E%3Ccircle cx='67.5' cy='43.5' r='10.5' fill='%23F5FBFF'/%3E%3C/g%3E%3C/svg%3E%0A";
var placeholderStyle = {
  objectFit: 'cover'
};

var Image_Image = function Image(_ref) {
  var dataHook = _ref.dataHook,
      src = _ref.src,
      fit = _ref.fit,
      position = _ref.position,
      style = _ref.style,
      otherProps = objectWithoutProperties_default()(_ref, ["dataHook", "src", "fit", "position", "style"]);

  var source = src || placeholderSource;
  var isTiled = !!src && fit === 'tile';
  var imgStyle = !src ? placeholderStyle : isTiled ? {
    backgroundPosition: position,
    backgroundImage: source ? "url(\"".concat(source, "\")") : undefined
  } : {
    objectFit: fit,
    objectPosition: position
  };
  return /*#__PURE__*/external_React_default.a.createElement("img", extends_default()({}, otherProps, Image_st_default()('root', {
    tiled: isTiled
  }, otherProps), {
    "data-hook": dataHook,
    src: source,
    style: Image_objectSpread(Image_objectSpread({}, style), imgStyle)
  }));
};

Image_Image.propTypes = {
  /** Hook for testing purposes. */
  dataHook: prop_types_default.a.string,

  /** Image asset source. A default placeholder image is displayed when source is not provided. */
  src: prop_types_default.a.string,

  /** Width of the image element box. */
  width: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /** Height of the image element box. */
  height: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),

  /**
   * Image source content fit mode inside a box. The special `tile` value is used to
   * enable tiled fit mode. Other values directly map to
   * [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
   * CSS property values.
   */
  fit: prop_types_default.a.oneOf(['contain', 'cover', 'tile', 'none']),

  /**
   * Image source content position inside an element box. Any valid
   * [CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value)
   * value.
   */
  position: prop_types_default.a.string
};
Image_Image.defaultProps = {
  width: '100%',
  fit: 'cover',
  position: 'center'
};
Image_Image.displayName = 'Image';
/* harmony default export */ var src_Image_Image = (Image_Image);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var helpers_assertThisInitialized = __webpack_require__(3);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(helpers_assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/get.js
var helpers_get = __webpack_require__(81);
var get_default = /*#__PURE__*/__webpack_require__.n(helpers_get);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var helpers_inherits = __webpack_require__(15);
var inherits_default = /*#__PURE__*/__webpack_require__.n(helpers_inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var helpers_possibleConstructorReturn = __webpack_require__(16);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(helpers_possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var helpers_getPrototypeOf = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(helpers_getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/wix-ui-icons-common/system/FormFieldSpinnerUp.js
var FormFieldSpinnerUp = __webpack_require__(96);
var FormFieldSpinnerUp_default = /*#__PURE__*/__webpack_require__.n(FormFieldSpinnerUp);

// EXTERNAL MODULE: ../node_modules/wix-ui-icons-common/system/FormFieldSpinnerDown.js
var FormFieldSpinnerDown = __webpack_require__(97);
var FormFieldSpinnerDown_default = /*#__PURE__*/__webpack_require__.n(FormFieldSpinnerDown);

// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Input/Ticker/Ticker.scss
var Ticker_Ticker = __webpack_require__(34);
var Ticker_default = /*#__PURE__*/__webpack_require__.n(Ticker_Ticker);

// EXTERNAL MODULE: ../node_modules/create-react-context/lib/index.js
var lib = __webpack_require__(26);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Input/InputContext.js

var InputContext = lib_default()();
// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Input/InputConsumer/InputConsumer.js



var InputConsumer_InputConsumer = function InputConsumer(props) {
  if (typeof props.children !== 'function') {
    throw new Error("child of ".concat(props.consumerCompName, " must be a context consumer function"));
  }

  return /*#__PURE__*/external_React_default.a.createElement(InputContext.Consumer, null, function (context) {
    if (!context) {
      throw new Error("".concat(props.consumerCompName, " cannot be rendered outside the Input component"));
    }

    return props.children(context);
  });
};
InputConsumer_InputConsumer.propTypes = {
  children: prop_types_default.a.any.isRequired,
  consumerCompName: prop_types_default.a.string
};
InputConsumer_InputConsumer.defaultProps = {
  consumerCompName: 'InputConsumer'
};
// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Input/Ticker/constants.js
var dataHooks = {
  tickerUp: 'ticker-up-button',
  tickerDown: 'ticker-down-button'
};
// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Input/Ticker/Ticker.js










var Ticker_Ticker_Ticker = function Ticker(_ref) {
  var onUp = _ref.onUp,
      onDown = _ref.onDown,
      upDisabled = _ref.upDisabled,
      downDisabled = _ref.downDisabled,
      dataHook = _ref.dataHook;
  return /*#__PURE__*/external_React_default.a.createElement(InputConsumer_InputConsumer, {
    consumerCompName: Ticker.displayName
  }, function (_ref2) {
    var disabled = _ref2.disabled,
        readOnly = _ref2.readOnly;
    var isUpDisabled = upDisabled || disabled || readOnly;
    var isDownDisabled = downDisabled || disabled || readOnly;
    return /*#__PURE__*/external_React_default.a.createElement("div", {
      className: Ticker_default.a.root,
      "data-hook": dataHook
    }, /*#__PURE__*/external_React_default.a.createElement("div", {
      "data-hook": dataHooks.tickerUp,
      "data-disabled": isUpDisabled,
      className: classnames_default()(Ticker_default.a.up, defineProperty_default()({}, Ticker_default.a.disabled, isUpDisabled)),
      onClick: isUpDisabled ? null : onUp
    }, /*#__PURE__*/external_React_default.a.createElement(FormFieldSpinnerUp_default.a, null)), /*#__PURE__*/external_React_default.a.createElement("div", {
      "data-hook": dataHooks.tickerDown,
      "data-disabled": isDownDisabled,
      className: classnames_default()(Ticker_default.a.down, defineProperty_default()({}, Ticker_default.a.disabled, isDownDisabled)),
      onClick: isDownDisabled ? null : onDown
    }, /*#__PURE__*/external_React_default.a.createElement(FormFieldSpinnerDown_default.a, null)));
  });
};

Ticker_Ticker_Ticker.displayName = 'Input.Ticker';
Ticker_Ticker_Ticker.propTypes = {
  onUp: prop_types_default.a.func,
  onDown: prop_types_default.a.func,
  upDisabled: prop_types_default.a.bool,
  downDisabled: prop_types_default.a.bool,
  dataHook: prop_types_default.a.string
};
/* harmony default export */ var Input_Ticker_Ticker = (Ticker_Ticker_Ticker);
// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Input/IconAffix/IconAffix.scss
var IconAffix_IconAffix = __webpack_require__(43);
var IconAffix_default = /*#__PURE__*/__webpack_require__.n(IconAffix_IconAffix);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Input/IconAffix/IconAffix.js







var IconAffix_IconAffix_IconAffix = function IconAffix(_ref) {
  var children = _ref.children,
      dataHook = _ref.dataHook;
  return /*#__PURE__*/external_React_default.a.createElement(InputConsumer_InputConsumer, {
    consumerCompName: IconAffix.displayName
  }, function (_ref2) {
    var _classNames;

    var size = _ref2.size,
        inSuffix = _ref2.inSuffix,
        onInputClicked = _ref2.onInputClicked,
        disabled = _ref2.disabled;
    var className = classnames_default()(IconAffix_default.a.icon, (_classNames = {}, defineProperty_default()(_classNames, IconAffix_default.a.inSuffix, inSuffix), defineProperty_default()(_classNames, IconAffix_default.a.disabled, disabled), _classNames));
    return /*#__PURE__*/external_React_default.a.createElement("div", {
      onClick: !disabled ? onInputClicked : undefined,
      className: className,
      "data-hook": dataHook
    }, /*#__PURE__*/external_React_default.a.cloneElement(children, {
      size: size === 'small' ? '18px' : '24px'
    }));
  });
};

IconAffix_IconAffix_IconAffix.displayName = 'Input.IconAffix';
IconAffix_IconAffix_IconAffix.propTypes = {
  children: prop_types_default.a.element.isRequired,
  dataHook: prop_types_default.a.string
};
/* harmony default export */ var Input_IconAffix_IconAffix = (IconAffix_IconAffix_IconAffix);
// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Input/Affix/Affix.scss
var Affix_Affix = __webpack_require__(29);
var Affix_default = /*#__PURE__*/__webpack_require__.n(Affix_Affix);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Input/Affix/Affix.js







var Affix_Affix_Affix = function Affix(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return /*#__PURE__*/external_React_default.a.createElement(InputConsumer_InputConsumer, {
    consumerCompName: Affix.displayName
  }, function (_ref2) {
    var _classNames;

    var size = _ref2.size,
        inSuffix = _ref2.inSuffix,
        inPrefix = _ref2.inPrefix,
        onInputClicked = _ref2.onInputClicked,
        disabled = _ref2.disabled,
        rtl = _ref2.rtl;
    var className = classnames_default()(Affix_default.a.custom, (_classNames = {}, defineProperty_default()(_classNames, Affix_default.a.inSuffix, inSuffix), defineProperty_default()(_classNames, Affix_default.a.inPrefix, inPrefix), defineProperty_default()(_classNames, Affix_default.a.small, size === 'small'), defineProperty_default()(_classNames, Affix_default.a.disabled, !!disabled), defineProperty_default()(_classNames, Affix_default.a.rtl, !!rtl), _classNames));
    return /*#__PURE__*/external_React_default.a.createElement("div", {
      onClick: onInputClicked,
      className: className,
      "data-hook": "custom-affix"
    }, value || children);
  });
};

Affix_Affix_Affix.displayName = 'Input.Affix';
Affix_Affix_Affix.propTypes = {
  children: prop_types_default.a.node,
  value: prop_types_default.a.string
};
/* harmony default export */ var Input_Affix_Affix = (Affix_Affix_Affix);
// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Input/Group/Group.scss
var Group_Group = __webpack_require__(98);
var Group_default = /*#__PURE__*/__webpack_require__.n(Group_Group);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Input/Group/Group.js





var Group_Group_Group = function Group(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/external_React_default.a.createElement(InputConsumer_InputConsumer, {
    consumerCompName: Group.displayName
  }, function () {
    return /*#__PURE__*/external_React_default.a.createElement("div", {
      className: Group_default.a.root
    }, children);
  });
};

Group_Group_Group.displayName = 'Input.Group';
Group_Group_Group.propTypes = {
  children: prop_types_default.a.node
};
/* harmony default export */ var Input_Group_Group = (Group_Group_Group);
// EXTERNAL MODULE: ../node_modules/wix-ui-icons-common/system/DropDownArrow.js
var DropDownArrow = __webpack_require__(95);
var DropDownArrow_default = /*#__PURE__*/__webpack_require__.n(DropDownArrow);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(55);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/utils/generateDataAttr.js



function generateDataAttr_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function generateDataAttr_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { generateDataAttr_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { generateDataAttr_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var generateDataAttr_generateDataAttr = function generateDataAttr(props, filter) {
  return Object.entries(props).filter(function (_ref) {
    var _ref2 = slicedToArray_default()(_ref, 1),
        key = _ref2[0];

    return filter && filter.includes(key);
  }).reduce(function (output, _ref3) {
    var _ref4 = slicedToArray_default()(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    return generateDataAttr_objectSpread(generateDataAttr_objectSpread({}, output), {}, defineProperty_default()({}, "data-".concat(key.toLowerCase()), value));
  }, {});
};
// EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(5);

// EXTERNAL MODULE: ../node_modules/hoist-non-react-methods/lib/index.js
var hoist_non_react_methods_lib = __webpack_require__(94);
var hoist_non_react_methods_lib_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_methods_lib);

// CONCATENATED MODULE: ../node_modules/wix-ui-core/dist/es/src/hocs/utils.js
var getDisplayName = function (Component) {
    if (typeof Component === 'string') {
        return Component;
    }
    if (!Component) {
        return;
    }
    return Component.displayName || Component.name || 'Component';
};
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ../node_modules/wix-ui-core/dist/es/src/hocs/Focusable/Focusable.st.css
var Focusable_st = __webpack_require__(49);
var Focusable_st_default = /*#__PURE__*/__webpack_require__.n(Focusable_st);

// EXTERNAL MODULE: ../node_modules/wix-ui-core/dist/es/src/utils/index.js
var utils = __webpack_require__(23);

// CONCATENATED MODULE: ../node_modules/wix-ui-core/dist/es/src/hocs/Focusable/FocusableHOC.js






/**
 * Singleton for managing current input method (keyboard or mouse).
 */
var inputMethod = new (/** @class */ (function () {
    function class_1() {
        var _this = this;
        // Default is keyboard in case an element is focused programmatically.
        this.method = 'keyboard';
        this.subscribers = new Map();
        this.subscribe = function (target, callback) {
            return _this.subscribers.set(target, callback);
        };
        this.unsubscribe = function (target) { return _this.subscribers.delete(target); };
        /**
         * Is the current input method `keyboard`. if `false` is means it is `mouse`
         */
        this.isKeyboard = function () { return _this.method === 'keyboard'; };
        if (typeof window !== 'undefined') {
            window.addEventListener('mousedown', function () { return _this.setMethod('mouse'); });
            window.addEventListener('keydown', function () { return _this.setMethod('keyboard'); });
            // We need to listen on keyUp, in case a TAB is made from the browser's address-bar,
            // so the keyDown is not fired, only the keyUp.
            window.addEventListener('keyup', function () { return _this.setMethod('keyboard'); });
        }
    }
    class_1.prototype.setMethod = function (method) {
        if (method !== this.method) {
            this.method = method;
            this.subscribers.forEach(function (f) { return f(); });
        }
    };
    return class_1;
}()))();
/*
 * TODO: Consider adding 'disabled' state to this HOC, since:
 * - When component is focused and then it becomes disabled, then the focus needs to be blured.
 *
 * TODO: Consider using [Recompose](https://github.com/acdlite/recompose/tree/master/src/packages/recompose) to do:
 *  - the static hoisting
 *  - set displayName
 */
var withFocusable = function (Component) {
    var FocusableHOC = /** @class */ (function (_super) {
        Object(tslib_es6["b" /* __extends */])(FocusableHOC, _super);
        function FocusableHOC() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.focusedByMouse = false;
            _this.wrappedComponentRef = null;
            _this.state = {
                focus: false,
                focusVisible: false,
            };
            _this.focus = function () {
                if (_this.wrappedComponentRef && _this.wrappedComponentRef.focus) {
                    _this.wrappedComponentRef.focus();
                }
            };
            _this.markAsFocused = function () {
                _this.setState({ focus: true, focusVisible: inputMethod.isKeyboard() });
                inputMethod.subscribe(_this, function () {
                    if (inputMethod.isKeyboard()) {
                        _this.setState({ focusVisible: true });
                    }
                });
            };
            _this.markAsBlurred = function () {
                inputMethod.unsubscribe(_this);
                _this.setState({ focus: false, focusVisible: false });
            };
            _this.onFocus = function (event) {
                var onFocus = _this.props.onFocus;
                onFocus
                    ? onFocus(event, {
                        blur: _this.markAsBlurred,
                        focus: _this.markAsFocused,
                    })
                    : _this.markAsFocused();
            };
            _this.onBlur = function (event) {
                var onBlur = _this.props.onBlur;
                onBlur
                    ? onBlur(event, { blur: _this.markAsBlurred, focus: _this.markAsFocused })
                    : _this.markAsBlurred();
            };
            return _this;
        }
        FocusableHOC.prototype.componentWillUnmount = function () {
            inputMethod.unsubscribe(this);
        };
        FocusableHOC.prototype.componentDidUpdate = function (prevProps) {
            /*
              in case when button was focused and then become disabled,
              we need to trigger blur logic and remove all listers, as disabled button
              do not trigger onFocus and onBlur events
            */
            var isFocused = this.state.focus || this.state.focusVisible;
            var isBecomeDisabled = !prevProps.disabled && this.props.disabled;
            if (isFocused && isBecomeDisabled) {
                this.onBlur({});
            }
        };
        FocusableHOC.prototype.render = function () {
            var _this = this;
            var reference = Object(utils["c" /* isStatelessComponent */])(Component)
                ? undefined
                : function (ref) { return (_this.wrappedComponentRef = ref); };
            return (external_React_["createElement"](Component, Object(tslib_es6["a" /* __assign */])({}, this.props, { ref: reference, focusableOnFocus: this.onFocus, focusableOnBlur: this.onBlur }, Focusable_st_default()('root', {
                focus: this.state.focus,
                'focus-visible': this.state.focusVisible,
            }, this.props))));
        };
        FocusableHOC.displayName = getDisplayName(Component);
        FocusableHOC.defaultProps = Component.defaultProps;
        return FocusableHOC;
    }(external_React_["Component"]));
    return Object(utils["c" /* isStatelessComponent */])(Component)
        ? FocusableHOC
        : hoist_non_react_methods_lib_default()(FocusableHOC, Component, {
            delegateTo: function (c) { return c.wrappedComponentRef; },
            hoistStatics: true,
        });
};
//# sourceMappingURL=FocusableHOC.js.map
// EXTERNAL MODULE: ../node_modules/wix-ui-core/dist/es/src/components/button-next/button-next.st.css
var button_next_st = __webpack_require__(42);
var button_next_st_default = /*#__PURE__*/__webpack_require__.n(button_next_st);

// CONCATENATED MODULE: ../node_modules/wix-ui-core/dist/es/src/components/button-next/button-next.js





var _addAffix = function (Affix, styleClass) {
    return Affix &&
        external_React_["cloneElement"](Affix, {
            className: classnames(button_next_st_default.a[styleClass], Affix.props.className),
        });
};
/**
 * ButtonNext
 */
var button_next_ButtonNextComponent = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(ButtonNextComponent, _super);
    function ButtonNextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonNextComponent.prototype.focus = function () {
        if (this.innerComponentRef && this.innerComponentRef.focus) {
            this.innerComponentRef.focus();
        }
    };
    ButtonNextComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, Component = _a.as, suffixIcon = _a.suffixIcon, prefixIcon = _a.prefixIcon, children = _a.children, disabled = _a.disabled, focusableOnFocus = _a.focusableOnFocus, focusableOnBlur = _a.focusableOnBlur, href = _a.href, rest = Object(tslib_es6["c" /* __rest */])(_a, ["as", "suffixIcon", "prefixIcon", "children", "disabled", "focusableOnFocus", "focusableOnBlur", "href"]);
        var htmlTabIndex = disabled ? -1 : rest.tabIndex || 0;
        var htmlHref = disabled ? undefined : href;
        var reference = Object(utils["c" /* isStatelessComponent */])(Component) && typeof Component !== 'string'
            ? undefined
            : function (ref) { return (_this.innerComponentRef = ref); };
        return (external_React_["createElement"](Component, Object(tslib_es6["a" /* __assign */])({}, rest, { onFocus: focusableOnFocus, onBlur: focusableOnBlur, disabled: href ? undefined : disabled, href: htmlHref, ref: reference, tabIndex: htmlTabIndex, "aria-disabled": disabled }, button_next_st_default()('root', { disabled: disabled }, rest)),
            _addAffix(prefixIcon, 'prefix'),
            external_React_["createElement"]("span", { className: button_next_st_default.a.content }, children),
            _addAffix(suffixIcon, 'suffix')));
    };
    ButtonNextComponent.defaultProps = { as: 'button', type: 'button' };
    ButtonNextComponent.displayName = 'ButtonNext';
    return ButtonNextComponent;
}(external_React_["Component"]));
var ButtonNext = button_next_ButtonNextComponent;
//# sourceMappingURL=button-next.js.map
// CONCATENATED MODULE: ../node_modules/wix-ui-core/dist/es/src/components/button-next/index.js


var button_next_ButtonNext = withFocusable(ButtonNext);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../node_modules/wix-ui-icons-common/system/Close.js
var Close = __webpack_require__(93);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close);

// EXTERNAL MODULE: ../node_modules/wix-ui-icons-common/system/CloseLarge.js
var CloseLarge = __webpack_require__(53);
var CloseLarge_default = /*#__PURE__*/__webpack_require__.n(CloseLarge);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/CloseButton/constants.js
var SKINS = {
  standard: 'standard',
  standardFilled: 'standardFilled',
  light: 'light',
  lightFilled: 'lightFilled',
  dark: 'dark',
  transparent: 'transparent'
};
var SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};
// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/CloseButton/CloseButton.st.css
var CloseButton_st = __webpack_require__(54);
var CloseButton_st_default = /*#__PURE__*/__webpack_require__.n(CloseButton_st);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/CloseButton/CloseButton.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var CloseButton_CloseButton = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(CloseButton, _PureComponent);

  var _super = _createSuper(CloseButton);

  function CloseButton() {
    classCallCheck_default()(this, CloseButton);

    return _super.apply(this, arguments);
  }

  createClass_default()(CloseButton, [{
    key: "_renderCloseIcon",
    value: function _renderCloseIcon(size) {
      var CloseIcon;

      if (size === SIZES.small) {
        // fallback to Close icon if children not provided (current behavior)
        CloseIcon = /*#__PURE__*/external_React_default.a.createElement(Close_default.a, {
          "data-hook": "close"
        });
      } else if (size === SIZES.medium) {
        CloseIcon = /*#__PURE__*/external_React_default.a.createElement(CloseLarge_default.a, {
          "data-hook": "close-medium"
        });
      } else {
        CloseIcon = /*#__PURE__*/external_React_default.a.createElement(CloseLarge_default.a, {
          "data-hook": "close-large",
          size: "12"
        });
      }

      return CloseIcon;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          skin = _this$props.skin,
          size = _this$props.size,
          userClassName = _this$props.className,
          dataHook = _this$props.dataHook,
          children = _this$props.children,
          rest = objectWithoutProperties_default()(_this$props, ["skin", "size", "className", "dataHook", "children"]);

      var childSize = '18px';

      var _styles = CloseButton_st_default()('root', {
        skin: skin,
        size: size
      }),
          className = _styles.className;

      var classNames = classnames_default()(className, userClassName);
      return /*#__PURE__*/external_React_default.a.createElement(button_next_ButtonNext, extends_default()({}, rest, CloseButton_st_default()('root', {
        skin: skin,
        size: size
      }, this.props), generateDataAttr_generateDataAttr(this.props, ['skin', 'size']), {
        "data-hook": dataHook,
        className: classNames
      }), children ? /*#__PURE__*/external_React_default.a.cloneElement(children, {
        size: childSize,
        width: childSize,
        height: childSize
      }) : this._renderCloseIcon(size));
    }
  }]);

  return CloseButton;
}(external_React_["PureComponent"]);

defineProperty_default()(CloseButton_CloseButton, "displayName", 'CloseButton');

defineProperty_default()(CloseButton_CloseButton, "propTypes", {
  /** render as some other component or DOM tag */
  as: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.object, prop_types_default.a.string]),

  /** additional css classes */
  className: prop_types_default.a.string,

  /** Used for passing any wix-style-react icon. For external icon make sure to follow ux sizing guidelines */
  children: prop_types_default.a.node,

  /** skins of closebutton */
  skin: prop_types_default.a.oneOf(['standard', 'standardFilled', 'light', 'lightFilled', 'dark', 'transparent']),

  /** size of closebutton */
  size: prop_types_default.a.oneOf(['small', 'medium', 'large']),

  /** Click event handler  */
  onClick: prop_types_default.a.func,

  /** applies disabled styles */
  disabled: prop_types_default.a.bool,

  /** string based data hook for testing */
  dataHook: prop_types_default.a.string
});

defineProperty_default()(CloseButton_CloseButton, "defaultProps", {
  skin: 'standard',
  size: 'small',
  disabled: false
});

/* harmony default export */ var src_CloseButton_CloseButton = (CloseButton_CloseButton);
// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/StatusIndicator/StatusIndicator.st.css
var StatusIndicator_st = __webpack_require__(92);
var StatusIndicator_st_default = /*#__PURE__*/__webpack_require__.n(StatusIndicator_st);

// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Tooltip/Tooltip.js + 20 modules
var Tooltip = __webpack_require__(176);

// EXTERNAL MODULE: ../node_modules/wix-ui-icons-common/system/FormFieldWarningFilled.js
var FormFieldWarningFilled = __webpack_require__(82);
var FormFieldWarningFilled_default = /*#__PURE__*/__webpack_require__.n(FormFieldWarningFilled);

// EXTERNAL MODULE: ../node_modules/wix-ui-icons-common/system/FormFieldErrorFilled.js
var FormFieldErrorFilled = __webpack_require__(91);
var FormFieldErrorFilled_default = /*#__PURE__*/__webpack_require__.n(FormFieldErrorFilled);

// EXTERNAL MODULE: ../node_modules/wix-ui-icons-common/system/FormFieldError.js
var FormFieldError = __webpack_require__(41);
var FormFieldError_default = /*#__PURE__*/__webpack_require__.n(FormFieldError);

// EXTERNAL MODULE: ../node_modules/wix-ui-icons-common/system/FormFieldErrorSmall.js
var FormFieldErrorSmall = __webpack_require__(85);
var FormFieldErrorSmall_default = /*#__PURE__*/__webpack_require__.n(FormFieldErrorSmall);

// EXTERNAL MODULE: ../node_modules/wix-ui-icons-common/system/ToggleOn.js
var ToggleOn = __webpack_require__(83);
var ToggleOn_default = /*#__PURE__*/__webpack_require__.n(ToggleOn);

// EXTERNAL MODULE: ../node_modules/wix-ui-icons-common/system/CircleLoaderCheck.js
var CircleLoaderCheck = __webpack_require__(50);
var CircleLoaderCheck_default = /*#__PURE__*/__webpack_require__.n(CircleLoaderCheck);

// EXTERNAL MODULE: ../node_modules/wix-ui-icons-common/system/CircleLoaderCheckSmall.js
var CircleLoaderCheckSmall = __webpack_require__(84);
var CircleLoaderCheckSmall_default = /*#__PURE__*/__webpack_require__.n(CircleLoaderCheckSmall);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Loader/Arc.js

 // taken from https://stackoverflow.com/a/18473154

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}
/* eslint-disable max-params */


function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  var d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
  return d;
}
/* eslint-enable */


var Arc_Arc = function Arc(_ref) {
  var className = _ref.className,
      strokeWidth = _ref.strokeWidth,
      viewBoxSize = _ref.viewBoxSize,
      angle = _ref.angle;
  var d = describeArc(0, 0, (viewBoxSize - strokeWidth) / 2, 0, angle);
  var viewBox = "-".concat(viewBoxSize / 2, " -").concat(viewBoxSize / 2, " ").concat(viewBoxSize, " ").concat(viewBoxSize);
  return /*#__PURE__*/external_React_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: viewBox,
    className: className
  }, /*#__PURE__*/external_React_default.a.createElement("path", {
    strokeWidth: strokeWidth,
    d: d
  }));
};

Arc_Arc.propTypes = {
  angle: prop_types_default.a.number,
  className: prop_types_default.a.string,
  strokeWidth: prop_types_default.a.number,
  viewBoxSize: prop_types_default.a.number
};
Arc_Arc.displayName = 'Arc';
/* harmony default export */ var Loader_Arc = (Arc_Arc);
// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/index.js + 2 modules
var EllipsisHOC = __webpack_require__(32);

// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Heading/Heading.st.css
var Heading_st = __webpack_require__(90);
var Heading_st_default = /*#__PURE__*/__webpack_require__.n(Heading_st);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Heading/Heading.js



function Heading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Heading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Heading_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Heading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var APPEARANCES = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  H5: 'H5',
  H6: 'H6'
};

var Heading_Heading = function Heading(_ref) {
  var light = _ref.light,
      appearance = _ref.appearance,
      children = _ref.children,
      rest = objectWithoutProperties_default()(_ref, ["light", "appearance", "children"]);

  var dataHook = rest.dataHook,
      headingProps = objectWithoutProperties_default()(rest, ["dataHook"]);

  return /*#__PURE__*/external_React_default.a.createElement(appearance.toLowerCase(), Heading_objectSpread(Heading_objectSpread(Heading_objectSpread({}, headingProps), {}, {
    'data-hook': dataHook
  }, Heading_st_default()('root', {
    light: light,
    appearance: appearance
  }, rest)), {}, {
    'data-appearance': appearance,
    'data-light': light
  }), children);
};

Heading_Heading.displayName = 'Heading';
Heading_Heading.propTypes = Heading_objectSpread({
  dataHook: prop_types_default.a.string,

  /** any nodes to be rendered (usually text nodes) */
  children: prop_types_default.a.any,

  /** is the text has dark or light skin */
  light: prop_types_default.a.bool,

  /** typography of the heading */
  appearance: prop_types_default.a.oneOf(Object.keys(APPEARANCES))
}, EllipsisHOC["a" /* default */].propTypes);
Heading_Heading.defaultProps = {
  appearance: APPEARANCES.H1,
  light: false
};
/* harmony default export */ var src_Heading_Heading = (Object(EllipsisHOC["a" /* default */])(Heading_Heading));
// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Loader/Loader.st.css
var Loader_st = __webpack_require__(28);
var Loader_st_default = /*#__PURE__*/__webpack_require__.n(Loader_st);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Loader/Loader.js








function Loader_createSuper(Derived) { var hasNativeReflectConstruct = Loader_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Loader_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var arcsAngles = {
  tiny: {
    light: 216,
    dark: 144
  },
  small: {
    light: 216,
    dark: 144
  },
  medium: {
    light: 108,
    dark: 108
  },
  large: {
    light: 180,
    dark: 180
  }
};
var strokeWidths = {
  tiny: 3,
  small: 4,
  medium: 4,
  large: 4
};
var sizesInPx = {
  tiny: 18,
  small: 30,
  medium: 54,
  large: 102
};
var FULL_CIRCLE_ANGLE = 359;
var sizeToSuccessIcon = {
  tiny: /*#__PURE__*/external_React_default.a.createElement(ToggleOn_default.a, null),
  small: /*#__PURE__*/external_React_default.a.createElement(CircleLoaderCheckSmall_default.a, null),
  medium: /*#__PURE__*/external_React_default.a.createElement(CircleLoaderCheck_default.a, null),
  large: /*#__PURE__*/external_React_default.a.createElement(CircleLoaderCheck_default.a, null)
};
var sizeToErrorIcon = {
  tiny: /*#__PURE__*/external_React_default.a.createElement(FormFieldError_default.a, null),
  small: /*#__PURE__*/external_React_default.a.createElement(FormFieldErrorSmall_default.a, null),
  medium: /*#__PURE__*/external_React_default.a.createElement(FormFieldError_default.a, null),
  large: /*#__PURE__*/external_React_default.a.createElement(FormFieldError_default.a, null)
};

var Loader_Loader = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(Loader, _React$PureComponent);

  var _super = Loader_createSuper(Loader);

  function Loader() {
    classCallCheck_default()(this, Loader);

    return _super.apply(this, arguments);
  }

  createClass_default()(Loader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dataHook = _this$props.dataHook,
          size = _this$props.size,
          color = _this$props.color,
          text = _this$props.text,
          status = _this$props.status,
          statusMessage = _this$props.statusMessage;
      var sizeInPx = sizesInPx[size];
      var shouldShowFullCircle = status !== 'loading';
      var lightArcAngle = !shouldShowFullCircle ? arcsAngles[size].light : FULL_CIRCLE_ANGLE;
      var darkArcAngle = !shouldShowFullCircle ? arcsAngles[size].dark : FULL_CIRCLE_ANGLE;
      var shouldShowText = size !== 'tiny';
      var successIcon = sizeToSuccessIcon[size];
      var errorIcon = sizeToErrorIcon[size];
      var strokeWidth = strokeWidths[size];
      var loader = /*#__PURE__*/external_React_default.a.createElement("div", {
        className: Loader_st_default.a.arcsContainer,
        style: {
          width: "".concat(sizeInPx, "px"),
          height: "".concat(sizeInPx, "px")
        }
      }, /*#__PURE__*/external_React_default.a.createElement(Loader_Arc, {
        angle: lightArcAngle,
        className: Loader_st_default.a.lightArc,
        strokeWidth: strokeWidth,
        viewBoxSize: sizeInPx
      }), /*#__PURE__*/external_React_default.a.createElement(Loader_Arc, {
        angle: darkArcAngle,
        className: Loader_st_default.a.darkArc,
        strokeWidth: strokeWidth,
        viewBoxSize: sizeInPx
      }), status !== 'loading' && /*#__PURE__*/external_React_default.a.createElement("div", {
        className: Loader_st_default.a.statusIndicator
      }, status === 'success' && successIcon, status === 'error' && errorIcon));
      return /*#__PURE__*/external_React_default.a.createElement("div", extends_default()({}, Loader_st_default()('root', {
        size: size,
        color: color,
        status: status
      }, {}), {
        "data-hook": dataHook,
        "data-size": size,
        "data-color": color,
        "data-status": status
      }), statusMessage ? /*#__PURE__*/external_React_default.a.createElement(Tooltip["a" /* default */], {
        content: statusMessage,
        appendTo: "window",
        dataHook: "loader-tooltip"
      }, loader) : loader, shouldShowText && text && /*#__PURE__*/external_React_default.a.createElement("div", {
        className: Loader_st_default.a.text
      }, /*#__PURE__*/external_React_default.a.createElement(src_Heading_Heading, {
        appearance: "H6",
        dataHook: "loader-text"
      }, this.props.text)));
    }
  }]);

  return Loader;
}(external_React_default.a.PureComponent);

defineProperty_default()(Loader_Loader, "displayName", 'Loader');

defineProperty_default()(Loader_Loader, "propTypes", {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: prop_types_default.a.string,

  /** The size of the loader */
  size: prop_types_default.a.oneOf(['tiny', 'small', 'medium', 'large']),

  /** The color of the loader */
  color: prop_types_default.a.oneOf(['blue', 'white']),

  /** Node (usually text) to be shown below the loader */
  text: prop_types_default.a.node,

  /** The status of the loader */
  status: prop_types_default.a.oneOf(['loading', 'success', 'error']),

  /** Text to be shown in the tooltip **/
  statusMessage: prop_types_default.a.string
});

defineProperty_default()(Loader_Loader, "defaultProps", {
  size: 'medium',
  color: 'blue',
  status: 'loading'
});

/* harmony default export */ var src_Loader_Loader = (Loader_Loader);
// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/StatusIndicator/constants.js
var constants_dataHooks = {
  tooltip: 'status-indicator-tooltip'
};
var STATUS = {
  ERROR: 'error',
  WARNING: 'warning',
  LOADING: 'loading'
};
var TOOLTIP_PLACEMENT = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left'
};
// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/StatusIndicator/StatusIndicator.js









function StatusIndicator_createSuper(Derived) { var hasNativeReflectConstruct = StatusIndicator_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function StatusIndicator_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









/** StatusIndicator */

var StatusIndicator_StatusIndicator = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(StatusIndicator, _React$PureComponent);

  var _super = StatusIndicator_createSuper(StatusIndicator);

  function StatusIndicator() {
    var _this;

    classCallCheck_default()(this, StatusIndicator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "_renderStatus", function () {
      switch (_this.props.status) {
        case STATUS.WARNING:
          return /*#__PURE__*/external_React_default.a.createElement(FormFieldWarningFilled_default.a, null);

        case STATUS.LOADING:
          return /*#__PURE__*/external_React_default.a.createElement(src_Loader_Loader, {
            size: "tiny"
          });

        case STATUS.ERROR:
        default:
          return /*#__PURE__*/external_React_default.a.createElement(FormFieldErrorFilled_default.a, null);
      }
    });

    return _this;
  }

  createClass_default()(StatusIndicator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dataHook = _this$props.dataHook,
          status = _this$props.status,
          message = _this$props.message,
          tooltipPlacement = _this$props.tooltipPlacement;
      return /*#__PURE__*/external_React_default.a.createElement("div", extends_default()({}, StatusIndicator_st_default()('root', {
        status: status
      }, this.props), {
        "data-hook": dataHook,
        "data-status": status
      }), message ? /*#__PURE__*/external_React_default.a.createElement(Tooltip["a" /* default */], {
        dataHook: constants_dataHooks.tooltip,
        appendTo: "window",
        placement: tooltipPlacement,
        exitDelay: 100,
        content: message,
        maxWidth: 250
      }, this._renderStatus()) : this._renderStatus());
    }
  }]);

  return StatusIndicator;
}(external_React_default.a.PureComponent);

StatusIndicator_StatusIndicator.displayName = 'StatusIndicator';
StatusIndicator_StatusIndicator.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: prop_types_default.a.string,

  /** A css class to be applied to the component's root element */
  className: prop_types_default.a.string,

  /** The indication type */
  status: prop_types_default.a.oneOf(['error', 'warning', 'loading']),

  /** A tooltip message */
  message: prop_types_default.a.string,

  /** The tooltip Placement */
  tooltipPlacement: prop_types_default.a.oneOf(['top', 'right', 'bottom', 'left'])
};
StatusIndicator_StatusIndicator.defaultProps = {
  status: 'error',
  tooltipPlacement: 'top'
};
/* harmony default export */ var src_StatusIndicator_StatusIndicator = (StatusIndicator_StatusIndicator);
// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Input/Input.scss
var Input_Input = __webpack_require__(4);
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_Input);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Input/constants.js
var Input_constants_dataHooks = {
  status: 'input-status'
};
var constants_SIZES = {
  small: 'small',
  medium: 'medium',
  normal: 'normal',
  large: 'large'
};
// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Input/InputSuffix.js









var isFixVisible = function isFixVisible(fix) {
  return fix.isVisible;
};

var suffixRules = {
  inputStatusSuffix: function inputStatusSuffix(_ref) {
    var status = _ref.status,
        disabled = _ref.disabled;
    return status && !disabled;
  },
  clearButton: function clearButton(_ref2) {
    var isClearButtonVisible = _ref2.isClearButtonVisible;
    return isClearButtonVisible;
  },
  menuArrow: function menuArrow(_ref3) {
    var _menuArrow = _ref3.menuArrow,
        isClearButtonVisible = _ref3.isClearButtonVisible;
    return _menuArrow && !isClearButtonVisible;
  },
  customSuffix: function customSuffix(_ref4) {
    var suffix = _ref4.suffix;
    return !!suffix;
  }
};

var getVisibleSuffixCount = function getVisibleSuffixCount(args) {
  return Object.keys(suffixRules).map(function (key) {
    return suffixRules[key];
  }).map(function (fn) {
    return fn(args);
  }).filter(function (x) {
    return x;
  }).length;
};

var InputSuffix_InputSuffix = function InputSuffix(_ref5) {
  var statusMessage = _ref5.statusMessage,
      status = _ref5.status,
      disabled = _ref5.disabled,
      onIconClicked = _ref5.onIconClicked,
      isClearButtonVisible = _ref5.isClearButtonVisible,
      onClear = _ref5.onClear,
      clearButtonSize = _ref5.clearButtonSize,
      menuArrow = _ref5.menuArrow,
      suffix = _ref5.suffix,
      tooltipPlacement = _ref5.tooltipPlacement;
  var suffixes = [{
    component: function component() {
      return /*#__PURE__*/external_React_default.a.createElement(src_Box_Box, {
        margin: 1,
        lineHeight: "initial"
      }, /*#__PURE__*/external_React_default.a.createElement(src_StatusIndicator_StatusIndicator, {
        dataHook: Input_constants_dataHooks.status,
        status: status,
        message: statusMessage,
        tooltipPlacement: tooltipPlacement
      }));
    },
    isVisible: suffixRules.inputStatusSuffix({
      status: status,
      disabled: disabled
    })
  }, {
    component: function component() {
      return /*#__PURE__*/external_React_default.a.createElement("div", {
        className: Input_default.a.clearButton
      }, /*#__PURE__*/external_React_default.a.createElement(src_CloseButton_CloseButton, {
        dataHook: "input-clear-button",
        size: clearButtonSize,
        onClick: onClear
      }));
    },
    isVisible: suffixRules.clearButton({
      isClearButtonVisible: isClearButtonVisible
    })
  }, {
    component: function component() {
      return suffix;
    },
    isVisible: suffixRules.customSuffix({
      suffix: suffix
    })
  }, {
    component: function component() {
      return /*#__PURE__*/external_React_default.a.createElement("div", {
        className: Input_default.a.menuArrow,
        disabled: disabled,
        onClick: onIconClicked
      }, /*#__PURE__*/external_React_default.a.createElement(DropDownArrow_default.a, null));
    },
    isVisible: suffixRules.menuArrow({
      menuArrow: menuArrow,
      isClearButtonVisible: isClearButtonVisible
    })
  }].filter(isFixVisible);
  return /*#__PURE__*/external_React_default.a.createElement("div", {
    className: Input_default.a.suffixes
  }, suffixes.map(function (s, i) {
    return /*#__PURE__*/external_React_default.a.createElement("div", {
      key: i,
      className: Input_default.a.suffix
    }, s.component());
  }));
};

InputSuffix_InputSuffix.propTypes = {
  suffixes: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    component: prop_types_default.a.func.isRequired,
    isVisible: prop_types_default.a.bool.isRequired
  })),
  statusMessage: prop_types_default.a.node,
  status: prop_types_default.a.oneOf(['loading', 'error', 'warning']),
  disabled: prop_types_default.a.bool,
  onIconClicked: prop_types_default.a.func,
  isClearButtonVisible: prop_types_default.a.bool,
  onClear: prop_types_default.a.func,
  clearButtonSize: prop_types_default.a.oneOf(['small', 'medium']),
  menuArrow: prop_types_default.a.bool,
  suffix: prop_types_default.a.node,
  tooltipPlacement: prop_types_default.a.string
};
/* harmony default export */ var Input_InputSuffix = (InputSuffix_InputSuffix);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Input/Input.js









var _clearButtonSizeMap;

function Input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Input_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Input_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Input_createSuper(Derived) { var hasNativeReflectConstruct = Input_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Input_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var clearButtonSizeMap = (_clearButtonSizeMap = {}, defineProperty_default()(_clearButtonSizeMap, constants_SIZES.small, 'small'), defineProperty_default()(_clearButtonSizeMap, constants_SIZES.medium, 'medium'), defineProperty_default()(_clearButtonSizeMap, constants_SIZES.normal, 'medium'), defineProperty_default()(_clearButtonSizeMap, constants_SIZES.large, 'medium'), _clearButtonSizeMap);

var Input_Input_Input = /*#__PURE__*/function (_Component) {
  inherits_default()(Input, _Component);

  var _super = Input_createSuper(Input);

  function Input(_props) {
    var _this;

    classCallCheck_default()(this, Input);

    _this = _super.call(this, _props);

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      focus: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onCompositionChange", function (isComposing) {
      if (_this.props.onCompositionChange) {
        _this.props.onCompositionChange(isComposing);
      }

      _this.isComposing = isComposing;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "extractRef", function (ref) {
      var inputRef = _this.props.inputRef;
      _this.input = ref;

      if (inputRef) {
        inputRef(ref);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSuffixOnClear", function (e) {
      _this.focus();

      _this.clear(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "focus", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this._onFocus();

      _this.input && _this.input.focus(options);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "blur", function () {
      _this.input && _this.input.blur();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "select", function () {
      _this.input && _this.input.select();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "_onFocus", function (e) {
      _this.setState({
        focus: true
      });

      _this.props.onFocus && _this.props.onFocus(e);

      if (_this.props.autoSelect) {
        // Set timeout is needed here since onFocus is called before react
        // gets the reference for the input (specifically when autoFocus
        // is on. So setTimeout ensures we have the ref.input needed in select)
        setTimeout(function () {
          /**
            here we trying to cover edge case with chrome forms autofill,
            after user will trigger chrome form autofill, onFocus will be called for each input,
            each input will cause this.select, select may(mostly all time) cause new onFocus,
            which will cause new this.select, ..., we have recursion which will all time randomly cause
            inputs to become focused.
            To prevent this, we check, that current input node is equal to focused node.
          */
          if (document && document.activeElement === _this.input) {
            _this.select();
          }
        }, 0);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "_onBlur", function (e) {
      _this.setState({
        focus: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "_onClick", function (e) {
      _this.props.onInputClicked && _this.props.onInputClicked(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "_onKeyDown", function (e) {
      if (_this.isComposing) {
        return;
      }

      _this.props.onKeyDown && _this.props.onKeyDown(e);

      if (e.keyCode === 13
      /* enter */
      ) {
          _this.props.onEnterPressed && _this.props.onEnterPressed(e);
        } else if (e.keyCode === 27
      /* esc */
      ) {
          _this.props.onEscapePressed && _this.props.onEscapePressed(e);
        }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "_isInvalidNumber", function (value) {
      return _this.props.type === 'number' && !/^[\d.,\-+]*$/.test(value);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "_onChange", function (e) {
      if (_this._isInvalidNumber(e.target.value)) {
        return;
      }

      _this.props.onChange && _this.props.onChange(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "_onKeyPress", function (e) {
      if (_this._isInvalidNumber(e.key)) {
        e.preventDefault();
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "clear", function (event) {
      var onClear = _this.props.onClear;

      if (!_this._isControlled) {
        _this.input.value = '';
      }

      onClear && onClear(event);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "_triggerOnChangeHandlerOnClearEvent", function (event) {
      if (!event) {
        /* We cannot dispatch a proper new event,
         * using this.input.dispatchEvent(new Event('change'))),
         * because react listens only to SyntheticEvents.
         * There is this react-trigger-changes library which is a hack for testing only (https://github.com/vitalyq/react-trigger-change).
         * The solution of creating a new pseudo event object, works for passing along tha target.value, but e.preventDefault() and e.stopPropagation() won't work.
         */
        event = new Event('change', {
          bubbles: true
        });
        Object.defineProperty(event, 'target', {
          writable: true,
          value: _this.input
        });
      }
      /* FIXME: The event (e) could be any event type, and even it's target may not be the input.
       * So it would be better to do e.target = this.input.
       * We don't use `clear` in WSR except in InputWithTags which does not pass an event, so it's ok.
       * But if some consumer is using <Input/> directly, then this might be a breaking change.
       */


      Object.defineProperty(event, 'target', {
        writable: false,
        value: Input_objectSpread(Input_objectSpread({}, event.target), {}, {
          value: ''
        })
      });

      _this._onChange(event);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "_renderInput", function (props) {
      var CustomInputComponent = props.customInput,
          ref = props.ref,
          rest = objectWithoutProperties_default()(props, ["customInput", "ref"]);

      var inputProps = Input_objectSpread({}, CustomInputComponent ? Input_objectSpread(Input_objectSpread({
        ref: ref
      }, rest), {}, {
        'data-hook': 'wsr-custom-input'
      }) : Input_objectSpread({
        ref: ref
      }, rest));

      return /*#__PURE__*/external_React_default.a.cloneElement(CustomInputComponent ? /*#__PURE__*/external_React_default.a.createElement(CustomInputComponent, null) : /*#__PURE__*/external_React_default.a.createElement("input", null), inputProps);
    });

    _this._isMounted = false;
    return _this;
  }

  createClass_default()(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      var _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          value = _this$props.value;

      if (autoFocus) {
        this._onFocus(); // Multiply by 2 to ensure the cursor always ends up at the end;
        // Opera sometimes sees a carriage return as 2 characters.


        value && this.input.setSelectionRange(value.length * 2, value.length * 2);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _classNames;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props2 = this.props,
          id = _this$props2.id,
          name = _this$props2.name,
          value = _this$props2.value,
          placeholder = _this$props2.placeholder,
          menuArrow = _this$props2.menuArrow,
          defaultValue = _this$props2.defaultValue,
          tabIndex = _this$props2.tabIndex,
          clearButton = _this$props2.clearButton,
          onClear = _this$props2.onClear,
          autoFocus = _this$props2.autoFocus,
          onKeyUp = _this$props2.onKeyUp,
          onPaste = _this$props2.onPaste,
          disableEditing = _this$props2.disableEditing,
          readOnly = _this$props2.readOnly,
          prefix = _this$props2.prefix,
          suffix = _this$props2.suffix,
          type = _this$props2.type,
          maxLength = _this$props2.maxLength,
          textOverflow = _this$props2.textOverflow,
          disabled = _this$props2.disabled,
          status = _this$props2.status,
          statusMessage = _this$props2.statusMessage,
          tooltipPlacement = _this$props2.tooltipPlacement,
          autocomplete = _this$props2.autocomplete,
          min = _this$props2.min,
          max = _this$props2.max,
          step = _this$props2.step,
          required = _this$props2.required,
          hideStatusSuffix = _this$props2.hideStatusSuffix,
          customInput = _this$props2.customInput,
          pattern = _this$props2.pattern,
          size = _this$props2.size;

      var onIconClicked = function onIconClicked(e) {
        if (!disabled) {
          _this2.input && _this2.input.focus();
          _this2._isMounted && _this2._onFocus();

          _this2._onClick(e);
        }
      }; // this doesn't work for uncontrolled, "value" refers only to controlled input


      var isClearButtonVisible = this._isClearFeatureEnabled && !!value && !status && !disabled;
      var visibleSuffixCount = getVisibleSuffixCount({
        status: hideStatusSuffix ? undefined : status,
        statusMessage: statusMessage,
        disabled: disabled,
        isClearButtonVisible: isClearButtonVisible,
        menuArrow: menuArrow,
        suffix: suffix
      });
      var ariaAttribute = {};
      Object.keys(this.props).filter(function (key) {
        return key.startsWith('aria');
      }).map(function (key) {
        return ariaAttribute['aria-' + key.substr(4).toLowerCase()] = _this2.props[key];
      });
      /* eslint-disable no-unused-vars */

      var className = props.className,
          inputElementProps = objectWithoutProperties_default()(props, ["className"]);

      var inputElement = this._renderInput(Input_objectSpread(Input_objectSpread({
        min: min,
        max: max,
        step: step,
        'data-hook': 'wsr-input',
        style: {
          textOverflow: textOverflow
        },
        ref: this.extractRef,
        className: classnames_default()(Input_default.a.input, (_classNames = {}, defineProperty_default()(_classNames, Input_default.a.disabled, !!disabled), defineProperty_default()(_classNames, Input_default.a.withPrefix, !!prefix), defineProperty_default()(_classNames, Input_default.a.withSuffix, visibleSuffixCount), defineProperty_default()(_classNames, Input_default.a.withSuffixes, visibleSuffixCount > 1), _classNames)),
        id: id,
        name: name,
        disabled: disabled,
        defaultValue: defaultValue,
        value: value,
        onChange: this._onChange,
        onKeyPress: this._onKeyPress,
        maxLength: maxLength,
        onFocus: this._onFocus,
        onBlur: this._onBlur,
        onKeyDown: this._onKeyDown,
        onPaste: onPaste,
        placeholder: placeholder,
        tabIndex: tabIndex,
        autoFocus: autoFocus,
        onClick: this._onClick,
        onKeyUp: onKeyUp,
        readOnly: readOnly || disableEditing,
        type: type,
        required: required,
        autoComplete: autocomplete,
        onCompositionStart: function onCompositionStart() {
          return _this2.onCompositionChange(true);
        },
        onCompositionEnd: function onCompositionEnd() {
          return _this2.onCompositionChange(false);
        },
        customInput: customInput,
        pattern: pattern
      }, ariaAttribute), inputElementProps));

      return /*#__PURE__*/external_React_default.a.createElement("div", {
        className: Input_default.a.inputWrapper
      }, prefix && /*#__PURE__*/external_React_default.a.createElement("div", {
        className: Input_default.a.prefix
      }, /*#__PURE__*/external_React_default.a.createElement(InputContext.Provider, {
        value: Input_objectSpread(Input_objectSpread({}, this.props), {}, {
          inPrefix: true
        })
      }, /*#__PURE__*/external_React_default.a.createElement("span", null, prefix))), inputElement, /*#__PURE__*/external_React_default.a.createElement(InputContext.Provider, {
        value: Input_objectSpread(Input_objectSpread({}, this.props), {}, {
          inSuffix: true
        })
      }, visibleSuffixCount > 0 && /*#__PURE__*/external_React_default.a.createElement(Input_InputSuffix, {
        status: hideStatusSuffix ? undefined : status,
        statusMessage: statusMessage,
        disabled: disabled,
        onIconClicked: onIconClicked,
        isClearButtonVisible: isClearButtonVisible,
        onClear: this.handleSuffixOnClear,
        clearButtonSize: clearButtonSizeMap[size],
        menuArrow: menuArrow,
        suffix: suffix,
        tooltipPlacement: tooltipPlacement
      })));
    }
  }, {
    key: "_isClearFeatureEnabled",
    get: function get() {
      return !!this.props.onClear || !!this.props.clearButton;
    }
  }, {
    key: "_isControlled",
    get: function get() {
      return this.props.value !== undefined;
    }
  }]);

  return Input;
}(external_React_["Component"]);

defineProperty_default()(Input_Input_Input, "Ticker", Input_Ticker_Ticker);

defineProperty_default()(Input_Input_Input, "IconAffix", Input_IconAffix_IconAffix);

defineProperty_default()(Input_Input_Input, "Affix", Input_Affix_Affix);

defineProperty_default()(Input_Input_Input, "Group", Input_Group_Group);

defineProperty_default()(Input_Input_Input, "StatusError", 'error');

defineProperty_default()(Input_Input_Input, "StatusWarning", 'warning');

defineProperty_default()(Input_Input_Input, "StatusLoading", 'loading');

Input_Input_Input.displayName = 'Input';
Input_Input_Input.defaultProps = {
  autoSelect: true,
  size: 'normal',
  roundInput: false,
  textOverflow: 'clip',
  maxLength: 524288,
  withSelection: false,
  clearButton: false,
  hideStatusSuffix: false
};

var borderRadiusValidator = function borderRadiusValidator(props, propName) {
  var value = props[propName];

  if (typeof value === 'string') {
    throw new Error('Passing a string (for className) is deprecated. Use new className prop.');
  } else if (typeof value === 'undefined' || typeof value === 'boolean') {
    return null;
  } else {
    return new Error('Invalid type. boolean expected.');
  }
};

Input_Input_Input.propTypes = {
  ariaControls: prop_types_default.a.string,
  ariaDescribedby: prop_types_default.a.string,

  /** Used to define a string that labels the current element in case where a text label is not visible on the screen. */
  ariaLabel: prop_types_default.a.string,

  /** Standard React Input autoFocus (focus the element on mount) */
  autoFocus: prop_types_default.a.bool,

  /** Standard React Input autoSelect (select the entire text of the element on focus) */
  autoSelect: prop_types_default.a.bool,

  /** Sets value of autocomplete attribute (consult the [HTML spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete) for possible values  */
  autocomplete: prop_types_default.a.string,

  /** Specifies a data-hook for tests */
  dataHook: prop_types_default.a.string,

  /** Default value for those who wants to use this component un-controlled */
  defaultValue: prop_types_default.a.string,

  /** when set to true this component is disabled */
  disabled: prop_types_default.a.bool,

  /** Sets UI to indicate a status */
  status: prop_types_default.a.oneOf([Input_Input_Input.StatusError, Input_Input_Input.StatusWarning, Input_Input_Input.StatusLoading]),

  /** The status message to display when hovering the status icon, if not given or empty there will be no tooltip */
  statusMessage: prop_types_default.a.node,

  /** When set to true, this input won't display status suffix */
  hideStatusSuffix: prop_types_default.a.bool,
  forceFocus: prop_types_default.a.bool,
  forceHover: prop_types_default.a.bool,
  id: prop_types_default.a.string,

  /** Input max length */
  maxLength: prop_types_default.a.number,

  /** Should the component include a menu arrow */
  menuArrow: prop_types_default.a.bool,

  /** Displays clear button (X) on a non-empty input */
  clearButton: prop_types_default.a.bool,

  /** A single CSS class name to be appended to the Input's wrapper element. */
  className: prop_types_default.a.string,

  /** Used to reference element data when a form is submitted. */
  name: prop_types_default.a.string,

  /** When set to true, this input will have no rounded corners on its left */
  noLeftBorderRadius: borderRadiusValidator,

  /** When set to true, this input will have no rounded corners on its right */
  noRightBorderRadius: borderRadiusValidator,

  /** Standard input onBlur callback */
  onBlur: prop_types_default.a.func,

  /** Standard input onChange callback */
  onChange: prop_types_default.a.func,

  /** Displays clear button (X) on a non-empty input and calls callback with no arguments */
  onClear: prop_types_default.a.func,
  onCompositionChange: prop_types_default.a.func,

  /** Called when user presses -enter- */
  onEnterPressed: prop_types_default.a.func,

  /** Called when user presses -escape- */
  onEscapePressed: prop_types_default.a.func,

  /** Standard input onFocus callback */
  onFocus: prop_types_default.a.func,

  /** Standard input onClick callback */
  onInputClicked: prop_types_default.a.func,

  /** Standard input onKeyDown callback */
  onKeyDown: prop_types_default.a.func,
  onKeyUp: prop_types_default.a.func,

  /** called when user pastes text from clipboard (using mouse or keyboard shortcut) */
  onPaste: prop_types_default.a.func,

  /** Placeholder to display */
  placeholder: prop_types_default.a.string,

  /** Component you want to show as the prefix of the input */
  prefix: prop_types_default.a.node,

  /** Sets the input to readOnly */
  readOnly: prop_types_default.a.bool,

  /** When set to true, this input will not be editable */
  disableEditing: prop_types_default.a.bool,

  /** When set to true, this input will be rounded */
  roundInput: prop_types_default.a.bool,

  /** Flip the magnify glass image so it be more suitable to rtl */
  rtl: prop_types_default.a.bool,

  /** Specifies the size of the input */
  size: prop_types_default.a.oneOf(['small', 'normal', 'medium', 'large']),

  /** Component you want to show as the suffix of the input */
  suffix: prop_types_default.a.node,

  /** Standard component tabIndex */
  tabIndex: prop_types_default.a.number,

  /** Text overflow behaviour */
  textOverflow: prop_types_default.a.string,

  /** Placement of status tooltips */
  tooltipPlacement: prop_types_default.a.string,

  /** Specifies the type of <input> element to display.default is text. */
  type: prop_types_default.a.string,

  /** Inputs value */
  value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  withSelection: prop_types_default.a.bool,
  required: prop_types_default.a.bool,

  /** Minimum value input can have - similar to html5 min attribute */
  min: prop_types_default.a.number,

  /** Maximum value input can have - similar to html5 max attribute */
  max: prop_types_default.a.number,

  /** Step steps to increment/decrement - similar to html5 step attribute */
  step: prop_types_default.a.number,

  /** Use a customized input component instead of the default html input tag */
  customInput: prop_types_default.a.elementType ? prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.node, prop_types_default.a.elementType]) : prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.node]),

  /** Pattern the value must match to be valid (regex) */
  pattern: prop_types_default.a.string
};
/* harmony default export */ var src_Input_Input = (Input_Input_Input);
// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Input/DataAttr.js
/* harmony default export */ var DataAttr = ({
  DATA_SIZE: 'data-size',
  DATA_STATUS: 'data-status'
});
// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Input/ThemedInput.js










function ThemedInput_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ThemedInput_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ThemedInput_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ThemedInput_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ThemedInput_createSuper(Derived) { var hasNativeReflectConstruct = ThemedInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ThemedInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var ThemedInput_ThemedInput = /*#__PURE__*/function (_Input) {
  inherits_default()(ThemedInput, _Input);

  var _super = ThemedInput_createSuper(ThemedInput);

  function ThemedInput() {
    var _this;

    classCallCheck_default()(this, ThemedInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "getDataAttr", function (_ref) {
      var _ref2;

      var dataHook = _ref.dataHook,
          size = _ref.size,
          status = _ref.status;
      return _ref2 = {
        'data-hook': dataHook
      }, defineProperty_default()(_ref2, DataAttr.DATA_SIZE, size), defineProperty_default()(_ref2, DataAttr.DATA_STATUS, status), _ref2;
    });

    return _this;
  }

  createClass_default()(ThemedInput, [{
    key: "render",
    value: function render() {
      var _classes;

      var _this$props = this.props,
          size = _this$props.size,
          dataHook = _this$props.dataHook,
          rtl = _this$props.rtl,
          status = _this$props.status,
          disabled = _this$props.disabled,
          forceHover = _this$props.forceHover,
          forceFocus = _this$props.forceFocus,
          roundInput = _this$props.roundInput,
          className = _this$props.className,
          noLeftBorderRadius = _this$props.noLeftBorderRadius,
          noRightBorderRadius = _this$props.noRightBorderRadius,
          readOnly = _this$props.readOnly,
          withSelection = _this$props.withSelection;
      var classes = (_classes = {}, defineProperty_default()(_classes, Input_default.a.rtl, !!rtl), defineProperty_default()(_classes, Input_default.a.disabled, disabled), defineProperty_default()(_classes, Input_default.a.hasError, status === src_Input_Input.StatusError), defineProperty_default()(_classes, Input_default.a.hasWarning, status === src_Input_Input.StatusWarning), defineProperty_default()(_classes, Input_default.a.hasHover, forceHover), defineProperty_default()(_classes, Input_default.a.hasFocus, forceFocus || this.state.focus), defineProperty_default()(_classes, Input_default.a.roundInput, roundInput), defineProperty_default()(_classes, Input_default.a.noRightBorderRadius, noRightBorderRadius === true), defineProperty_default()(_classes, Input_default.a.noLeftBorderRadius, noLeftBorderRadius === true), defineProperty_default()(_classes, noRightBorderRadius, typeof noRightBorderRadius === 'string'), defineProperty_default()(_classes, noLeftBorderRadius, typeof noLeftBorderRadius === 'string'), _classes);
      var placeholder = this.props.placeholder;
      return /*#__PURE__*/external_React_default.a.createElement("div", extends_default()({
        className: classnames_default()(classes, Input_default.a.root, Input_default.a["size-".concat(size).concat(withSelection ? '-with-selection' : '')], className, defineProperty_default()({}, Input_default.a.readOnly, readOnly))
      }, this.getDataAttr({
        dataHook: dataHook,
        size: size,
        status: status
      })), get_default()(getPrototypeOf_default()(ThemedInput.prototype), "render", this).call(this, {
        placeholder: placeholder
      }));
    }
  }]);

  return ThemedInput;
}(src_Input_Input);

ThemedInput_ThemedInput.propTypes = ThemedInput_objectSpread({}, src_Input_Input.propTypes);
/* harmony default export */ var Input_ThemedInput = (ThemedInput_ThemedInput);
// EXTERNAL MODULE: ./sections/home/hero/hero.scss
var hero = __webpack_require__(27);
var hero_default = /*#__PURE__*/__webpack_require__.n(hero);

// EXTERNAL MODULE: ../node_modules/react-responsive/dist/react-responsive.js
var react_responsive = __webpack_require__(79);

// CONCATENATED MODULE: ./sections/home/hero/hero.tsx




var Hero = function () {
    var isTabletOrMobileDevice = Object(react_responsive["useMediaQuery"])({
        query: '(max-device-width: 1224px)',
    });
    return (external_React_["createElement"](src_Box_Box, { minHeight: "100vh", align: "center", verticalAlign: "middle", width: "100vw" },
        external_React_["createElement"](src_Box_Box, { height: "31em", width: "71.250em", direction: "vertical" },
            external_React_["createElement"](src_Box_Box, { height: "21.438em", width: "100%", align: "space-between", direction: isTabletOrMobileDevice ? 'vertical' : 'horizontal', marginBottom: "1em" },
                external_React_["createElement"](src_Box_Box, { width: "27.813em", height: "21.438em", direction: "vertical" },
                    external_React_["createElement"]("h1", { className: hero_default.a.heading }, "Trello lets you work more collaboratively and get more done."),
                    external_React_["createElement"]("p", { className: hero_default.a.paragraph }, "Trello\u2019s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way."),
                    isTabletOrMobileDevice && (external_React_["createElement"]("button", { className: hero_default.a.mbtn }, "Sign Up - It's Free!"))),
                external_React_["createElement"](src_Box_Box, { width: isTabletOrMobileDevice ? '100%' : '33.750em', height: "25.563em", verticalAlign: "top", marginTop: isTabletOrMobileDevice ? '3em' : '-3em' },
                    external_React_["createElement"](src_Image_Image, { src: "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg", fit: isTabletOrMobileDevice ? 'contain' : 'cover', className: hero_default.a.img, position: isTabletOrMobileDevice ? 'center' : 'top', loading: "lazy", width: "100%", height: "100%" }))),
            !isTabletOrMobileDevice && (external_React_["createElement"](src_Box_Box, { height: "5.438em", width: "60%", verticalAlign: "middle" },
                external_React_["createElement"](Input_ThemedInput, { className: hero_default.a.input, placeholder: "Email" }),
                external_React_["createElement"]("button", { className: hero_default.a.btn__cta }, "Sign Up - It's Free!"))))));
};
/* harmony default export */ var hero_hero = (Hero);

// CONCATENATED MODULE: ./sections/home/hero/index.ts



// CONCATENATED MODULE: ./sections/home/index.ts




// CONCATENATED MODULE: ./sections/index.ts



// CONCATENATED MODULE: ./routes/Home.tsx




var Home = function () {
    return (external_React_["createElement"](Frontpage_FrontpageLayout, null,
        external_React_["createElement"](Navbar, null),
        external_React_["createElement"](hero_hero, null),
        external_React_["createElement"](src_Box_Box, { height: "100vh", backgroundColor: "#fff" }, "HI")));
};
/* harmony default export */ var routes_Home = (Home);

// EXTERNAL MODULE: ./routes/index.scss
var routes = __webpack_require__(99);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./routes/index.tsx




var IndexRouter = function () {
    return (external_React_["createElement"]("div", { className: routes_default.a.main },
        external_React_["createElement"](react_router_dom_BrowserRouter, null,
            external_React_["createElement"]("div", null,
                external_React_["createElement"](react_router_Switch, null,
                    external_React_["createElement"](react_router_Route, { path: "/" },
                        external_React_["createElement"](routes_Home, null)))))));
};
/* harmony default export */ var routes_0 = (IndexRouter);

// CONCATENATED MODULE: ./client.tsx





var baseURL = window.__BASEURL__;
var client_locale = window.__LOCALE__;
external_ReactDOM_default.a.render(external_React_default.a.createElement(external_React_["Suspense"], { fallback: '...loading' },
    external_React_default.a.createElement(I18nextProvider, { i18n: i18n_i18n(client_locale) },
        external_React_default.a.createElement(routes_0, null))), document.getElementById('root'));


/***/ }),
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */
/*!***********************************************************************************!*\
  !*** ../node_modules/wix-style-react/dist/es/src/Tooltip/Tooltip.js + 20 modules ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/assertThisInitialized.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/inheritsLoose.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/create-react-context/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/deep-equal/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/FontUpgrade/FontUpgrade.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/popper.js/dist/esm/popper.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-transition-group/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/tslib/tslib.es6.js because of ./client.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/warning/warning.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Text/Text.st.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/Tooltip/Tooltip.st.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/index.js because of ./client.tsx */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-core/dist/es/src/components/popover/Popover.st.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-core/dist/es/src/components/tooltip/Tooltip.st.css (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/wix-ui-core/dist/es/src/utils/index.js because of ./client.tsx */
/*! ModuleConcatenation bailout: Cannot concat with external "React" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "ReactDOM" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(10);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(11);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(3);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(15);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(16);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(5);

// EXTERNAL MODULE: ../node_modules/wix-ui-core/dist/es/src/components/tooltip/Tooltip.st.css
var Tooltip_st = __webpack_require__(89);
var Tooltip_st_default = /*#__PURE__*/__webpack_require__.n(Tooltip_st);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(17);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);

// CONCATENATED MODULE: ../node_modules/react-onclickoutside/dist/react-onclickoutside.es.js



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * Check whether some DOM node is our Component's node.
 */
function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }

  return current.classList.contains(ignoreClass);
}
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */

function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // If source=local then this event came from 'somewhere'
  // inside and should be ignored. We could handle this with
  // a layered approach, too, but that requires going back to
  // thinking in terms of Dom node nesting, running counter
  // to React's 'you shouldn't care about the DOM' philosophy.


  while (current.parentNode) {
    if (isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }

    current = current.parentNode;
  }

  return current;
}
/**
 * Check if the browser scrollbar was clicked
 */

function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}

// ideally will get replaced with external dep
// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
var testPassiveEventSupport = function testPassiveEventSupport() {
  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    return;
  }

  var passive = false;
  var options = Object.defineProperty({}, 'passive', {
    get: function get() {
      passive = true;
    }
  });

  var noop = function noop() {};

  window.addEventListener('testPassiveEventSupport', noop, options);
  window.removeEventListener('testPassiveEventSupport', noop, options);
  return passive;
};

function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }

  return function () {
    return ++seed;
  };
}

var uid = autoInc();

var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ['touchstart', 'touchmove'];
var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
/**
 * Options for addEventHandler and removeEventHandler
 */

function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = null;
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

  if (isTouchEvent && passiveEventSupport) {
    handlerOptions = {
      passive: !instance.props.preventDefault
    };
  }

  return handlerOptions;
}
/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */


function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;

  var componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(onClickOutside, _Component);

    function onClickOutside(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _this.__outsideClickHandler = function (event) {
        if (typeof _this.__clickOutsideHandlerProp === 'function') {
          _this.__clickOutsideHandlerProp(event);

          return;
        }

        var instance = _this.getInstance();

        if (typeof instance.props.handleClickOutside === 'function') {
          instance.props.handleClickOutside(event);
          return;
        }

        if (typeof instance.handleClickOutside === 'function') {
          instance.handleClickOutside(event);
          return;
        }

        throw new Error("WrappedComponent: " + componentName + " lacks a handleClickOutside(event) function for processing outside click events.");
      };

      _this.__getComponentNode = function () {
        var instance = _this.getInstance();

        if (config && typeof config.setClickOutsideRef === 'function') {
          return config.setClickOutsideRef()(instance);
        }

        if (typeof instance.setClickOutsideRef === 'function') {
          return instance.setClickOutsideRef();
        }

        return Object(external_ReactDOM_["findDOMNode"])(instance);
      };

      _this.enableOnClickOutside = function () {
        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
          return;
        }

        if (typeof passiveEventSupport === 'undefined') {
          passiveEventSupport = testPassiveEventSupport();
        }

        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;

        if (!events.forEach) {
          events = [events];
        }

        handlersMap[_this._uid] = function (event) {
          if (_this.componentNode === null) return;

          if (_this.props.preventDefault) {
            event.preventDefault();
          }

          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }

          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
          var current = event.target;

          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }

          _this.__outsideClickHandler(event);
        };

        events.forEach(function (eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_this, eventName));
        });
      };

      _this.disableOnClickOutside = function () {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];

        if (fn && typeof document !== 'undefined') {
          var events = _this.props.eventTypes;

          if (!events.forEach) {
            events = [events];
          }

          events.forEach(function (eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_this, eventName));
          });
          delete handlersMap[_this._uid];
        }
      };

      _this.getRef = function (ref) {
        return _this.instanceRef = ref;
      };

      _this._uid = uid();
      return _this;
    }
    /**
     * Access the WrappedComponent's instance.
     */


    var _proto = onClickOutside.prototype;

    _proto.getInstance = function getInstance() {
      if (!WrappedComponent.prototype.isReactComponent) {
        return this;
      }

      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };

    /**
     * Add click listeners to the current document,
     * linked to this component's state.
     */
    _proto.componentDidMount = function componentDidMount() {
      // If we are in an environment without a DOM such
      // as shallow rendering or snapshots then we exit
      // early to prevent any unhandled errors being thrown.
      if (typeof document === 'undefined' || !document.createElement) {
        return;
      }

      var instance = this.getInstance();

      if (config && typeof config.handleClickOutside === 'function') {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

        if (typeof this.__clickOutsideHandlerProp !== 'function') {
          throw new Error("WrappedComponent: " + componentName + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
        }
      }

      this.componentNode = this.__getComponentNode(); // return early so we dont initiate onClickOutside

      if (this.props.disableOnClickOutside) return;
      this.enableOnClickOutside();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = this.__getComponentNode();
    };
    /**
     * Remove all document's event listeners for this component
     */


    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    };
    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */


    /**
     * Pass-through render
     */
    _proto.render = function render() {
      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          excludeScrollbar = _props.excludeScrollbar,
          props = _objectWithoutProperties(_props, ["excludeScrollbar"]);

      if (WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }

      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return Object(external_React_["createElement"])(WrappedComponent, props);
    };

    return onClickOutside;
  }(external_React_["Component"]), _class.displayName = "OnClickOutside(" + componentName + ")", _class.defaultProps = {
    eventTypes: ['mousedown', 'touchstart'],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function () {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}


/* harmony default export */ var react_onclickoutside_es = (onClickOutsideHOC);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(47);
var objectWithoutPropertiesLoose_default = /*#__PURE__*/__webpack_require__.n(objectWithoutPropertiesLoose);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(31);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ../node_modules/deep-equal/index.js
var deep_equal = __webpack_require__(87);
var deep_equal_default = /*#__PURE__*/__webpack_require__.n(deep_equal);

// EXTERNAL MODULE: ../node_modules/popper.js/dist/esm/popper.js
var esm_popper = __webpack_require__(52);

// EXTERNAL MODULE: ../node_modules/create-react-context/lib/index.js
var lib = __webpack_require__(26);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ../node_modules/react-popper/lib/esm/Manager.js





var ManagerReferenceNodeContext = lib_default()();
var ManagerReferenceNodeSetterContext = lib_default()();

var Manager_Manager =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(Manager, _React$Component);

  function Manager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    defineProperty_default()(assertThisInitialized_default()(_this), "referenceNode", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "setReferenceNode", function (newReferenceNode) {
      if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
        _this.referenceNode = newReferenceNode;

        _this.forceUpdate();
      }
    });

    return _this;
  }

  var _proto = Manager.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.referenceNode = null;
  };

  _proto.render = function render() {
    return external_React_["createElement"](ManagerReferenceNodeContext.Provider, {
      value: this.referenceNode
    }, external_React_["createElement"](ManagerReferenceNodeSetterContext.Provider, {
      value: this.setReferenceNode
    }, this.props.children));
  };

  return Manager;
}(external_React_["Component"]);


// CONCATENATED MODULE: ../node_modules/react-popper/lib/esm/utils.js
/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Does a shallow equality check of two objects by comparing the reference
 * equality of each value.
 */

var shallowEqual = function shallowEqual(objA, objB) {
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);

  if (bKeys.length !== aKeys.length) {
    return false;
  }

  for (var i = 0; i < bKeys.length; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};
// CONCATENATED MODULE: ../node_modules/react-popper/lib/esm/Popper.js










var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var Popper_InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      data: undefined,
      placement: undefined
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "popperInstance", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "popperNode", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "arrowNode", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      setRef(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: extends_default()({}, _this.props.modifiers, {
          arrow: extends_default()({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : extends_default()({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = assertThisInitialized_default()(_this),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new esm_popper["a" /* default */](referenceElement, popperNode, _this.getOptions());
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !deep_equal_default()(this.props.modifiers, prevProps.modifiers, {
      strict: true
    })) {
      // develop only check that modifiers isn't being updated needlessly
      if (false) {}

      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    setRef(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return unwrapArray(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(external_React_["Component"]);

defineProperty_default()(Popper_InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});

var placements = esm_popper["a" /* default */].placements;

function Popper(_ref) {
  var referenceElement = _ref.referenceElement,
      props = objectWithoutPropertiesLoose_default()(_ref, ["referenceElement"]);

  return external_React_["createElement"](ManagerReferenceNodeContext.Consumer, null, function (referenceNode) {
    return external_React_["createElement"](Popper_InnerPopper, extends_default()({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}
// EXTERNAL MODULE: ../node_modules/warning/warning.js
var warning = __webpack_require__(48);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// CONCATENATED MODULE: ../node_modules/react-popper/lib/esm/Reference.js









var Reference_InnerReference =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    defineProperty_default()(assertThisInitialized_default()(_this), "refHandler", function (node) {
      setRef(_this.props.innerRef, node);
      safeInvoke(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    setRef(this.props.innerRef, null);
  };

  _proto.render = function render() {
    warning_default()(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return unwrapArray(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(external_React_["Component"]);

function Reference(props) {
  return external_React_["createElement"](ManagerReferenceNodeSetterContext.Consumer, null, function (setReferenceNode) {
    return external_React_["createElement"](Reference_InnerReference, extends_default()({
      setReferenceNode: setReferenceNode
    }, props));
  });
}
// EXTERNAL MODULE: ../node_modules/react-transition-group/index.js
var react_transition_group = __webpack_require__(88);

// CONCATENATED MODULE: ../node_modules/react-portal/es/utils.js
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
// CONCATENATED MODULE: ../node_modules/react-portal/es/Portal.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Portal_Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return external_ReactDOM_default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(external_React_default.a.Component);

Portal_Portal.propTypes = {
  children: prop_types_default.a.node.isRequired,
  node: prop_types_default.a.any
};

/* harmony default export */ var es_Portal = (Portal_Portal);
// CONCATENATED MODULE: ../node_modules/react-portal/es/LegacyPortal.js
var LegacyPortal_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function LegacyPortal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LegacyPortal_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function LegacyPortal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This file is a fallback for a consumer who is not yet on React 16
// as createPortal was introduced in React 16





var LegacyPortal_Portal = function (_React$Component) {
  LegacyPortal_inherits(Portal, _React$Component);

  function Portal() {
    LegacyPortal_classCallCheck(this, Portal);

    return LegacyPortal_possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  LegacyPortal_createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      external_ReactDOM_default.a.unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = external_React_default.a.cloneElement(this.props.children);
      }

      this.portal = external_ReactDOM_default.a.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(external_React_default.a.Component);

/* harmony default export */ var LegacyPortal = (LegacyPortal_Portal);


LegacyPortal_Portal.propTypes = {
  children: prop_types_default.a.node.isRequired,
  node: prop_types_default.a.any
};
// CONCATENATED MODULE: ../node_modules/react-portal/es/PortalCompat.js





var PortalCompat_Portal = void 0;

if (external_ReactDOM_default.a.createPortal) {
  PortalCompat_Portal = es_Portal;
} else {
  PortalCompat_Portal = LegacyPortal;
}

/* harmony default export */ var PortalCompat = (PortalCompat_Portal);
// EXTERNAL MODULE: ../node_modules/wix-ui-core/dist/es/src/components/popover/Popover.st.css
var Popover_st = __webpack_require__(14);
var Popover_st_default = /*#__PURE__*/__webpack_require__.n(Popover_st);

// CONCATENATED MODULE: ../node_modules/wix-ui-core/dist/es/src/components/popover/modifiers.js

var getUnit = function (value) {
    if (typeof value === 'string') {
        return value;
    }
    return value + "px";
};
var calculateOffset = function (_a) {
    var moveBy = _a.moveBy, _b = _a.placement, placement = _b === void 0 ? '' : _b;
    /*
     * For `right` and `left` placements, we need to flip the `x` and `y` values as Popper.JS will use
     * the first value for the main axis. As per Popper.js docs:
     *
     *   if the placement is top or bottom, the length will be the width. In case of left or right, it
     *   will be the height.
     *
     */
    if (placement.includes('right') || placement.includes('left')) {
        return (moveBy ? moveBy.y : 0) + "px, " + (moveBy ? moveBy.x : 0) + "px";
    }
    return (moveBy ? moveBy.x : 0) + "px, " + (moveBy ? moveBy.y : 0) + "px";
};
var resolveWidth = function (_a) {
    var width = _a.width, minWidth = _a.minWidth, dynamicWidth = _a.dynamicWidth, referenceWidth = _a.referenceWidth;
    return {
        minWidth: dynamicWidth ? referenceWidth + "px" : getUnit(minWidth),
        width: width || 'auto',
    };
};
var createModifiers = function (_a) {
    var width = _a.width, moveBy = _a.moveBy, appendTo = _a.appendTo, shouldAnimate = _a.shouldAnimate, flip = _a.flip, fixed = _a.fixed, placement = _a.placement, isTestEnv = _a.isTestEnv, minWidth = _a.minWidth, dynamicWidth = _a.dynamicWidth;
    var preventOverflow = !fixed;
    var modifiers = {
        offset: {
            offset: calculateOffset({ moveBy: moveBy, placement: placement }),
        },
        computeStyle: {
            gpuAcceleration: !shouldAnimate,
        },
        flip: {
            enabled: typeof flip !== 'undefined' ? flip : !moveBy,
        },
        preventOverflow: {
            enabled: preventOverflow,
        },
        hide: {
            enabled: preventOverflow,
        },
    };
    if (dynamicWidth || minWidth || width) {
        modifiers.setPopperWidth = {
            enabled: true,
            order: 840,
            fn: function (data) {
                var referenceWidth = data.offsets.reference.width;
                data.styles = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, data.styles), resolveWidth({
                    width: width,
                    referenceWidth: referenceWidth,
                    minWidth: minWidth,
                    dynamicWidth: dynamicWidth,
                }));
                return data;
            },
        };
    }
    if (isTestEnv) {
        modifiers.computeStyle = { enabled: false };
    }
    if (appendTo) {
        modifiers.preventOverflow = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, modifiers.preventOverflow), { boundariesElement: appendTo });
    }
    return modifiers;
};
//# sourceMappingURL=modifiers.js.map
// CONCATENATED MODULE: ../node_modules/wix-ui-core/dist/es/src/utils/stylableUtils.js
var attachStylesToNode = function (node, stylesObj) {
    if (node) {
        stylesObj.className
            .split(' ')
            .forEach(function (className) { return node.classList.add(className); });
        Object.keys(stylesObj)
            .filter(function (key) { return key.startsWith('data-'); })
            .forEach(function (key) { return node.setAttribute(key, String(stylesObj[key])); });
    }
};
var detachStylesFromNode = function (node, stylesObj) {
    if (node) {
        stylesObj.className
            .split(' ')
            .forEach(function (className) { return node.classList.remove(className); });
        Object.keys(stylesObj)
            .filter(function (key) { return key.startsWith('data-'); })
            .forEach(function (key) { return node.removeAttribute(key); });
    }
};
//# sourceMappingURL=stylableUtils.js.map
// EXTERNAL MODULE: ../node_modules/wix-ui-core/dist/es/src/utils/index.js
var utils = __webpack_require__(23);

// CONCATENATED MODULE: ../node_modules/wix-ui-core/dist/es/src/components/popover/helpers.js
/** specific functions and variables for test environment purposes */
var popoverTestUtils = {
    createRange: function () {
        document.createRange = function () {
            return ({
                setStart: function () { return null; },
                setEnd: function () { return null; },
                commonAncestorContainer: document.documentElement.querySelector('body'),
            });
        };
    },
    generateId: function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    },
};
//# sourceMappingURL=helpers.js.map
// CONCATENATED MODULE: ../node_modules/wix-ui-core/dist/es/src/components/popover/utils/utils.js
function getParentNode(element) {
    if (element.nodeName === 'HTML') {
        return element;
    }
    return element.parentNode || element.host;
}
function getStyleComputedProperty(element) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    return window.getComputedStyle(element, null);
}
function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
        return document.body;
    }
    switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
            return element.ownerDocument.body;
        case '#document':
            return element.body;
        default:
    }
    // Firefox want us to check `-x` and `-y` variations as well
    var _a = getStyleComputedProperty(element), overflow = _a.overflow, overflowX = _a.overflowX, overflowY = _a.overflowY;
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
        return element;
    }
    return getScrollParent(getParentNode(element));
}
//# sourceMappingURL=utils.js.map
// CONCATENATED MODULE: ../node_modules/wix-ui-core/dist/es/src/components/popover/utils/getAppendToElement.js

var isElement = __webpack_require__(/*! lodash/isElement */ 140);
function getAppendToElement(appendTo, node) {
    if (!appendTo) {
        return null;
    }
    if (typeof appendTo === 'string') {
        switch (appendTo) {
            case 'window':
            case 'viewport':
                return document.body;
            case 'scrollParent':
                return getScrollParent(node);
            default:
                return;
        }
    }
    if (typeof appendTo === 'function') {
        return getByPredicate(appendTo, node);
    }
    if (isElement(appendTo)) {
        return appendTo;
    }
    return;
}
function getByPredicate(predicate, element) {
    if (!element) {
        return;
    }
    var node = searchParent(predicate, element);
    if (node) {
        return node;
    }
    return;
}
function searchParent(predicate, element) {
    if (!element) {
        return;
    }
    if (predicate(element)) {
        return element;
    }
    return searchParent(predicate, getParentNode(element));
}
//# sourceMappingURL=getAppendToElement.js.map
// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(9);

// CONCATENATED MODULE: ../node_modules/wix-ui-core/dist/es/src/components/popover/Popover.js













// This is here and not in the test setup because we don't want consumers to need to run it as well
var testId;
var Popover_isTestEnv = "production" === 'test';
if (Popover_isTestEnv && typeof document !== 'undefined' && !document.createRange) {
    popoverTestUtils.createRange();
}
if (Popover_isTestEnv) {
    testId = popoverTestUtils.generateId();
}
var omit = function (key, obj) {
    var _a = key, omitted = obj[_a], rest = Object(tslib_es6["c" /* __rest */])(obj, [typeof _a === "symbol" ? _a : _a + ""]);
    return rest;
};
var shouldAnimatePopover = function (_a) {
    var timeout = _a.timeout;
    if (typeof timeout === 'object') {
        var enter = timeout.enter, exit = timeout.exit;
        return (typeof enter !== 'undefined' &&
            typeof exit !== 'undefined' &&
            (enter > 0 || exit > 0));
    }
    return !!timeout;
};
var getArrowShift = function (shift, direction) {
    var _a;
    if (!shift && !Popover_isTestEnv) {
        return {};
    }
    return _a = {},
        _a[direction === 'top' || direction === 'bottom'
            ? 'left'
            : 'top'] = shift + "px",
        _a;
};
// We're declaring a wrapper for the clickOutside machanism and not using the
// HOC because of Typings errors.
var ClickOutsideWrapper = react_onclickoutside_es(/** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(class_1, _super);
    function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_1.prototype.handleClickOutside = function () {
        this.props.handleClickOutside();
    };
    class_1.prototype.render = function () {
        return this.props.children;
    };
    return class_1;
}(external_React_["Component"])));
/**
 * Popover
 */
var Popover_Popover = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Popover, _super);
    function Popover(props) {
        var _this = _super.call(this, props) || this;
        _this.targetRef = null;
        _this.portalNode = null;
        _this.stylesObj = null;
        _this.appendToNode = null;
        _this.popperScheduleUpdate = null;
        // Timer instances for the show/hide delays
        _this._hideTimeout = null;
        _this._showTimeout = null;
        _this._handleClickOutside = function () {
            var _a = _this.props, onClickOutsideCallback = _a.onClickOutside, shown = _a.shown, disableClickOutsideWhenClosed = _a.disableClickOutsideWhenClosed;
            if (onClickOutsideCallback && !(disableClickOutsideWhenClosed && !shown)) {
                onClickOutsideCallback();
            }
        };
        _this.state = {
            isMounted: false,
            shown: props.shown || false,
        };
        _this.contentHook = "popover-content-" + (props['data-hook'] || '') + "-" + testId;
        return _this;
    }
    Popover.prototype.getPopperContentStructure = function (childrenObject) {
        var _this = this;
        var _a = this.props, moveBy = _a.moveBy, appendTo = _a.appendTo, placement = _a.placement, showArrow = _a.showArrow, moveArrowTo = _a.moveArrowTo, flip = _a.flip, fixed = _a.fixed, customArrow = _a.customArrow, role = _a.role, id = _a.id, zIndex = _a.zIndex, minWidth = _a.minWidth, maxWidth = _a.maxWidth, width = _a.width, dynamicWidth = _a.dynamicWidth;
        var shouldAnimate = shouldAnimatePopover(this.props);
        var modifiers = createModifiers({
            minWidth: minWidth,
            width: width,
            dynamicWidth: dynamicWidth,
            moveBy: moveBy,
            appendTo: appendTo,
            shouldAnimate: shouldAnimate,
            flip: flip,
            placement: placement,
            fixed: fixed,
            isTestEnv: Popover_isTestEnv,
        });
        var popper = (external_React_["createElement"](Popper, { modifiers: modifiers, placement: placement }, function (_a) {
            var _b;
            var ref = _a.ref, popperStyles = _a.style, popperPlacement = _a.placement, arrowProps = _a.arrowProps, scheduleUpdate = _a.scheduleUpdate;
            _this.popperScheduleUpdate = scheduleUpdate;
            return (external_React_["createElement"]("div", { ref: ref, "data-hook": "popover-content", "data-content-element": _this.contentHook, style: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, popperStyles), { zIndex: zIndex, maxWidth: maxWidth }), "data-placement": popperPlacement || placement, className: classnames(Popover_st_default.a.popover, (_b = {},
                    _b[Popover_st_default.a.withArrow] = showArrow,
                    _b[Popover_st_default.a.popoverContent] = !showArrow,
                    _b)) },
                showArrow &&
                    _this.renderArrow(arrowProps, moveArrowTo, popperPlacement || placement, customArrow),
                external_React_["createElement"]("div", { key: "popover-content", id: id, role: role, className: showArrow ? Popover_st_default.a.popoverContent : '' }, childrenObject.Content)));
        }));
        return this.wrapWithAnimations(popper);
    };
    Popover.prototype.applyStylesToPortaledNode = function () {
        var shown = this.state.shown;
        var shouldAnimate = shouldAnimatePopover(this.props);
        if (shouldAnimate || shown) {
            attachStylesToNode(this.portalNode, this.stylesObj);
        }
        else {
            detachStylesFromNode(this.portalNode, this.stylesObj);
        }
    };
    Popover.prototype.wrapWithAnimations = function (popper) {
        var _this = this;
        var timeout = this.props.timeout;
        var shown = this.state.shown;
        var shouldAnimate = shouldAnimatePopover(this.props);
        return shouldAnimate ? (external_React_["createElement"](react_transition_group["CSSTransition"], { in: shown, timeout: timeout, unmountOnExit: true, classNames: {
                enter: Popover_st_default.a['popoverAnimation-enter'],
                enterActive: Popover_st_default.a['popoverAnimation-enter-active'],
                exit: Popover_st_default.a['popoverAnimation-exit'],
                exitActive: Popover_st_default.a['popoverAnimation-exit-active'],
            }, onExited: function () { return detachStylesFromNode(_this.portalNode, _this.stylesObj); } }, popper)) : (popper);
    };
    Popover.prototype.renderPopperContent = function (childrenObject) {
        var popper = this.getPopperContentStructure(childrenObject);
        return this.portalNode ? (external_React_["createElement"](PortalCompat, { node: this.portalNode }, popper)) : (popper);
    };
    Popover.prototype.renderArrow = function (arrowProps, moveArrowTo, placement, customArrow) {
        var commonProps = {
            ref: arrowProps.ref,
            key: 'popover-arrow',
            'data-hook': 'popover-arrow',
            style: Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, arrowProps.style), getArrowShift(moveArrowTo, placement)),
        };
        if (customArrow) {
            return customArrow(placement, commonProps);
        }
        return external_React_["createElement"]("div", Object(tslib_es6["a" /* __assign */])({}, commonProps, { className: Popover_st_default.a.arrow }));
    };
    Popover.prototype.componentDidMount = function () {
        this.initAppendToNode();
        this.setState({ isMounted: true });
    };
    Popover.prototype.initAppendToNode = function () {
        var appendTo = this.props.appendTo;
        this.appendToNode = getAppendToElement(appendTo, this.targetRef);
        if (this.appendToNode) {
            this.portalNode = document.createElement('div');
            this.portalNode.setAttribute('data-hook', 'popover-portal');
            /**
             * reset overlay wrapping layer
             * so that styles from copied classnames
             * won't break the overlay:
             * - content is position relative to body
             * - overlay layer is hidden
             */
            Object.assign(this.portalNode.style, {
                position: 'static',
                top: 0,
                left: 0,
                width: 0,
                height: 0,
            });
            this.appendToNode.appendChild(this.portalNode);
        }
    };
    Popover.prototype.hidePopover = function () {
        var _this = this;
        var isMounted = this.state.isMounted;
        var hideDelay = this.props.hideDelay;
        if (!isMounted || this._hideTimeout) {
            return;
        }
        if (this._showTimeout) {
            clearTimeout(this._showTimeout);
            this._showTimeout = null;
        }
        if (hideDelay) {
            this._hideTimeout = setTimeout(function () {
                _this.setState({ shown: false });
            }, hideDelay);
        }
        else {
            this.setState({ shown: false });
        }
    };
    Popover.prototype.showPopover = function () {
        var _this = this;
        var isMounted = this.state.isMounted;
        var showDelay = this.props.showDelay;
        if (!isMounted || this._showTimeout) {
            return;
        }
        if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
            this._hideTimeout = null;
        }
        if (showDelay) {
            this._showTimeout = setTimeout(function () {
                _this.setState({ shown: true });
            }, showDelay);
        }
        else {
            this.setState({ shown: true });
        }
    };
    Popover.prototype.componentWillUnmount = function () {
        if (this.portalNode && this.appendToNode.children.length) {
            // FIXME: What if component is updated with a different appendTo? It is a far-fetched use-case,
            // but we would need to remove the portaled node, and created another one.
            this.appendToNode.removeChild(this.portalNode);
        }
        this.portalNode = null;
        if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
            this._hideTimeout = null;
        }
        if (this._showTimeout) {
            clearTimeout(this._showTimeout);
            this._showTimeout = null;
        }
    };
    Popover.prototype.updatePosition = function () {
        if (this.popperScheduleUpdate) {
            this.popperScheduleUpdate();
        }
    };
    Popover.prototype.componentDidUpdate = function (prevProps) {
        var shown = this.props.shown;
        if (this.portalNode) {
            // Re-calculate the portal's styles
            this.stylesObj = Popover_st_default()('root', {}, omit('data-hook', this.props));
            // Apply the styles to the portal
            this.applyStylesToPortaledNode();
        }
        // Update popover visibility
        if (prevProps.shown !== shown) {
            if (shown) {
                this.showPopover();
            }
            else {
                this.hidePopover();
            }
        }
        else {
            // Update popper's position
            this.updatePosition();
        }
    };
    Popover.prototype.render = function () {
        var _this = this;
        var _a = this.props, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, onKeyDown = _a.onKeyDown, onClick = _a.onClick, children = _a.children, inlineStyles = _a.style, id = _a.id, excludeClass = _a.excludeClass, fluid = _a.fluid;
        var _b = this.state, isMounted = _b.isMounted, shown = _b.shown;
        var childrenObject = Object(utils["a" /* buildChildrenObject */])(children, {
            Element: null,
            Content: null,
        });
        var shouldAnimate = shouldAnimatePopover(this.props);
        var shouldRenderPopper = isMounted && (shouldAnimate || shown);
        return (external_React_["createElement"](Manager_Manager, null,
            external_React_["createElement"](ClickOutsideWrapper, { handleClickOutside: this._handleClickOutside, outsideClickIgnoreClass: excludeClass || Popover_st_default.a.popover },
                external_React_["createElement"]("div", Object(tslib_es6["a" /* __assign */])({ style: inlineStyles, "data-hook": this.props['data-hook'], "data-content-hook": this.contentHook }, Popover_st_default()('root', { fluid: fluid }, this.props), { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, id: id }),
                    external_React_["createElement"](Reference, { innerRef: function (r) { return (_this.targetRef = r); } }, function (_a) {
                        var ref = _a.ref;
                        return (external_React_["createElement"]("div", { ref: ref, className: Popover_st_default.a.popoverElement, "data-hook": "popover-element", onClick: onClick, onKeyDown: onKeyDown }, childrenObject.Element));
                    }),
                    shouldRenderPopper && this.renderPopperContent(childrenObject)))));
    };
    Popover.displayName = 'Popover';
    Popover.defaultProps = {
        flip: true,
        fixed: false,
        zIndex: 1000,
    };
    Popover.Element = Object(utils["b" /* createComponentThatRendersItsChildren */])('Popover.Element');
    Popover.Content = Object(utils["b" /* createComponentThatRendersItsChildren */])('Popover.Content');
    return Popover;
}(external_React_["Component"]));

//# sourceMappingURL=Popover.js.map
// CONCATENATED MODULE: ../node_modules/wix-ui-core/dist/es/src/components/tooltip/Tooltip.js




/**
 * Tooltip
 */
var Tooltip_Tooltip = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isOpen: false };
        _this._handleClickOutside = function () {
            var _a = _this.props, onClickOutside = _a.onClickOutside, shouldCloseOnClickOutside = _a.shouldCloseOnClickOutside;
            if (shouldCloseOnClickOutside) {
                _this.props.onHide();
                _this.setState({ isOpen: false });
            }
            return onClickOutside ? onClickOutside() : null;
        };
        _this._renderElement = function () {
            var _a = _this.props, children = _a.children, ariaDescribedBy = _a["aria-describedby"];
            if (typeof children === 'string' || !children) {
                return children || '';
            }
            return external_React_["cloneElement"](children, {
                onFocus: _this._onFocus,
                onBlur: _this._onBlur,
                'aria-describedby': ariaDescribedBy,
            });
        };
        _this.open = function () {
            _this.props.onShow();
            _this.setState({ isOpen: true });
        };
        _this.close = function () {
            var shouldCloseOnClickOutside = _this.props.shouldCloseOnClickOutside;
            if (!shouldCloseOnClickOutside) {
                _this.props.onHide();
                _this.setState({ isOpen: false });
            }
        };
        _this._onFocus = function (event, handlers) {
            var focusableHOC = handlers && handlers.focus;
            _this.open();
            return focusableHOC ? handlers.focus() : null;
        };
        _this._onBlur = function (event, handlers) {
            var focusableHOC = handlers && handlers.blur;
            _this.close();
            return focusableHOC ? handlers.blur() : null;
        };
        return _this;
    }
    Tooltip.prototype.render = function () {
        var _a = this.props, placement = _a.placement, content = _a.content, moveBy = _a.moveBy, timeout = _a.timeout, showArrow = _a.showArrow, moveArrowTo = _a.moveArrowTo, appendTo = _a.appendTo, flip = _a.flip, fixed = _a.fixed, hideDelay = _a.hideDelay, showDelay = _a.showDelay, disabled = _a.disabled, customArrow = _a.customArrow, zIndex = _a.zIndex, minWidth = _a.minWidth, maxWidth = _a.maxWidth, ariaDescribedBy = _a["aria-describedby"];
        return (external_React_["createElement"](Popover_Popover, Object(tslib_es6["a" /* __assign */])({}, Tooltip_st_default()('root', {}, this.props), (this.props['data-hook']
            ? { 'data-hook': this.props['data-hook'] }
            : {}), { placement: placement, shown: disabled ? false : this.state.isOpen, showArrow: showArrow, onMouseEnter: disabled ? undefined : this.open, onMouseLeave: disabled ? undefined : this.close, timeout: timeout, hideDelay: hideDelay, showDelay: showDelay, moveBy: moveBy, moveArrowTo: moveArrowTo, appendTo: appendTo, flip: flip, fixed: fixed, onClickOutside: this._handleClickOutside, customArrow: customArrow, id: ariaDescribedBy, role: "tooltip", zIndex: zIndex, minWidth: minWidth, maxWidth: maxWidth }),
            external_React_["createElement"](Popover_Popover.Element, null, this._renderElement()),
            external_React_["createElement"](Popover_Popover.Content, null, content)));
    };
    Tooltip.displayName = 'Tooltip';
    Tooltip.defaultProps = {
        placement: 'top',
        appendTo: 'parent',
        onShow: function () { return ({}); },
        onHide: function () { return ({}); },
        timeout: 150,
        showDelay: 0,
        hideDelay: 0,
        showArrow: true,
    };
    return Tooltip;
}(external_React_["PureComponent"]));

//# sourceMappingURL=Tooltip.js.map
// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/common/EllipsisHOC/index.js + 2 modules
var EllipsisHOC = __webpack_require__(32);

// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Text/Text.st.css
var Text_st = __webpack_require__(86);
var Text_st_default = /*#__PURE__*/__webpack_require__.n(Text_st);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Text/Text.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/*
 * Temporary fix: SIZES, SKINS, WEIGHTS constants are copied here from constants.js
 * in order to have AutoDocs able to parse them.
 * See this issue: https://github.com/wix/wix-ui/issues/784
 */

var SIZES = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium'
};
var SKINS = {
  standard: 'standard',
  error: 'error',
  success: 'success',
  premium: 'premium',
  disabled: 'disabled'
};
var WEIGHTS = {
  thin: 'thin',
  normal: 'normal',
  bold: 'bold'
};

var getStyleDataAttributes = function getStyleDataAttributes(styleAttributes) {
  return Object.keys(styleAttributes).reduce(function (acc, styleKey) {
    acc["data-".concat(styleKey)] = styleAttributes[styleKey];
    return acc;
  }, {});
};

var Text_Text = function Text(_ref) {
  var size = _ref.size,
      secondary = _ref.secondary,
      skin = _ref.skin,
      light = _ref.light,
      weight = _ref.weight,
      tagName = _ref.tagName,
      children = _ref.children,
      rest = objectWithoutProperties_default()(_ref, ["size", "secondary", "skin", "light", "weight", "tagName", "children"]);

  /* eslint-disable no-unused-vars */
  var dataHook = rest.dataHook,
      textProps = objectWithoutProperties_default()(rest, ["dataHook"]);

  var styleAttributes = {
    size: size,
    secondary: secondary,
    skin: skin,
    light: light,
    weight: weight
  };
  var styleDataAttributes = getStyleDataAttributes(styleAttributes);
  return /*#__PURE__*/external_React_default.a.createElement(tagName, _objectSpread(_objectSpread(_objectSpread({}, textProps), {}, {
    'data-hook': dataHook
  }, Text_st_default()('root', styleAttributes, rest)), styleDataAttributes), children);
};

Text_Text.displayName = 'Text';
Text_Text.propTypes = _objectSpread({
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: prop_types_default.a.string,

  /** tag name that will be rendered */
  tagName: prop_types_default.a.string,

  /** class to be applied to the root element */
  className: prop_types_default.a.string,

  /** font size of the text */
  size: prop_types_default.a.oneOf(Object.keys(SIZES)),

  /** any nodes to be rendered (usually text nodes) */
  children: prop_types_default.a.any,

  /** is the text type is secondary. Affects the font color */
  secondary: prop_types_default.a.bool,

  /** skin color of the text */
  skin: prop_types_default.a.oneOf(Object.keys(SKINS)),

  /** make the text color lighter */
  light: prop_types_default.a.bool,

  /** font weight of the text */
  weight: prop_types_default.a.oneOf(Object.keys(WEIGHTS))
}, EllipsisHOC["a" /* default */].propTypes);
Text_Text.defaultProps = {
  size: SIZES.medium,
  secondary: false,
  skin: SKINS.standard,
  light: false,
  weight: WEIGHTS.thin,
  tagName: 'span'
};
/* harmony default export */ var src_Text_Text = (Object(EllipsisHOC["a" /* default */])(Text_Text));
// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/Tooltip/Tooltip.st.css
var Tooltip_Tooltip_st = __webpack_require__(76);
var Tooltip_Tooltip_st_default = /*#__PURE__*/__webpack_require__.n(Tooltip_Tooltip_st);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Tooltip/constants.js
var dataHooks = {
  tooltipText: 'tooltip-text'
};
var TIMEOUT = {
  enter: 100,
  exit: 150
};
// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/FontUpgrade/context.js

var FontUpgradeContext = lib_default()({});
// EXTERNAL MODULE: ../node_modules/wix-style-react/dist/es/src/FontUpgrade/FontUpgrade.scss
var FontUpgrade_FontUpgrade = __webpack_require__(51);
var FontUpgrade_default = /*#__PURE__*/__webpack_require__.n(FontUpgrade_FontUpgrade);

// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/FontUpgrade/FontUpgrade.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var FontUpgrade_FontUpgrade_FontUpgrade = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(FontUpgrade, _React$PureComponent);

  var _super = _createSuper(FontUpgrade);

  function FontUpgrade() {
    classCallCheck_default()(this, FontUpgrade);

    return _super.apply(this, arguments);
  }

  createClass_default()(FontUpgrade, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dataHook = _this$props.dataHook,
          _this$props$active = _this$props.active,
          active = _this$props$active === void 0 ? true : _this$props$active,
          children = _this$props.children;
      return /*#__PURE__*/external_React_default.a.createElement(FontUpgradeContext.Provider, {
        value: {
          active: active,
          styles: FontUpgrade_default.a
        }
      }, /*#__PURE__*/external_React_default.a.createElement("span", {
        "data-hook": dataHook,
        className: active ? FontUpgrade_default.a.root : null,
        children: children
      }));
    }
  }]);

  return FontUpgrade;
}(external_React_default.a.PureComponent);

FontUpgrade_FontUpgrade_FontUpgrade.propTypes = {
  /** Applied as data-hook HTML attribute that can be used to create driver in testing */
  dataHook: prop_types_default.a.string,

  /** Sets the Madefor font upgrade active when true (which is by default) */
  active: prop_types_default.a.bool,

  /** A renderable node */
  children: prop_types_default.a.node
};
/* harmony default export */ var src_FontUpgrade_FontUpgrade = (FontUpgrade_FontUpgrade_FontUpgrade);
// CONCATENATED MODULE: ../node_modules/wix-style-react/dist/es/src/Tooltip/Tooltip.js










function Tooltip_createSuper(Derived) { var hasNativeReflectConstruct = Tooltip_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Tooltip_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









/**
 * Next Tooltip
 */

var Tooltip_Tooltip_Tooltip = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(Tooltip, _React$PureComponent);

  var _super = Tooltip_createSuper(Tooltip);

  function Tooltip() {
    var _this;

    classCallCheck_default()(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      disabled: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "_renderContent", function () {
      var _this$props = _this.props,
          content = _this$props.content,
          textAlign = _this$props.textAlign,
          size = _this$props.size;
      var textSize = size === 'small' ? 'tiny' : 'small';
      return /*#__PURE__*/external_React_default.a.createElement(FontUpgradeContext.Consumer, null, function (context) {
        return /*#__PURE__*/external_React_default.a.createElement("div", {
          style: {
            textAlign: textAlign
          }
        }, /*#__PURE__*/external_React_default.a.createElement(src_FontUpgrade_FontUpgrade, {
          active: !!context.active
        }, typeof content === 'string' ? /*#__PURE__*/external_React_default.a.createElement(src_Text_Text, {
          dataHook: dataHooks.tooltipText,
          size: textSize,
          weight: "normal",
          light: true
        }, content) : content));
      });
    });

    return _this;
  }

  createClass_default()(Tooltip, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          exitDelay = _this$props2.exitDelay,
          enterDelay = _this$props2.enterDelay,
          children = _this$props2.children,
          content = _this$props2.content,
          size = _this$props2.size,
          dataHook = _this$props2.dataHook,
          disabled = _this$props2.disabled,
          rest = objectWithoutProperties_default()(_this$props2, ["exitDelay", "enterDelay", "children", "content", "size", "dataHook", "disabled"]);

      return /*#__PURE__*/external_React_default.a.createElement(Tooltip_Tooltip, extends_default()({}, rest, dataHook ? {
        'data-hook': dataHook
      } : {}, Tooltip_Tooltip_st_default()('root', {
        size: size
      }, this.props), {
        content: this._renderContent(),
        hideDelay: exitDelay,
        showDelay: enterDelay,
        disabled: disabled === undefined ? children.props && children.props.disabled : disabled,
        showArrow: true,
        timeout: TIMEOUT
      }), children);
    }
  }]);

  return Tooltip;
}(external_React_default.a.PureComponent);

defineProperty_default()(Tooltip_Tooltip_Tooltip, "displayName", 'Tooltip');

defineProperty_default()(Tooltip_Tooltip_Tooltip, "propTypes", {
  /** applied as data-hook HTML attribute that can be used to create driver in testing */
  dataHook: prop_types_default.a.string,

  /** tooltip trigger element. Can be either string or renderable node */
  children: prop_types_default.a.node.isRequired,

  /** tooltip content. Can be either string or renderable node */
  content: prop_types_default.a.node,

  /** align tooltip content */
  textAlign: prop_types_default.a.oneOf(['start', 'center']),

  /** time in milliseconds to wait before showing the tooltip */
  enterDelay: prop_types_default.a.number,

  /**  time in milliseconds to wait before hiding the tooltip. Defaults to 0. */
  exitDelay: prop_types_default.a.number,

  /** moves tooltip content relative to the parent by x or y */
  moveBy: prop_types_default.a.shape({
    x: prop_types_default.a.number,
    y: prop_types_default.a.number
  }),

  /** tooltips content calculation relation to a dom element. Can be either:
   *  `'window', 'scrollParent', 'viewport', 'parent'`, `element` or
   * `function` based predicate i.e. (elm) =>
   *  elm.getAttribute('data-hook') === 'value'
   */
  appendTo: prop_types_default.a.oneOfType([prop_types_default.a.oneOf(['window', 'scrollParent', 'viewport', 'parent']), prop_types_default.a.element, prop_types_default.a.func]),

  /** whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element. */
  flip: prop_types_default.a.bool,

  /** whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary. */
  fixed: prop_types_default.a.bool,

  /** tooltip content container width in pixels */
  maxWidth: prop_types_default.a.number,

  /** callback on tooltips content show event */
  onShow: prop_types_default.a.func,

  /** callback on tooltips content hide event */
  onHide: prop_types_default.a.func,

  /** tooltip content placement in relation to target element */
  placement: prop_types_default.a.string,

  /** disables tooltip element trigger behaviour */
  disabled: prop_types_default.a.bool,

  /** sets size of the tooltip */
  size: prop_types_default.a.oneOf(['small', 'medium']),

  /** establishes a relationship between tooltip element and tooltip content for a11y purposes */
  'aria-describedby': prop_types_default.a.string,

  /** tooltips content zindex */
  zIndex: prop_types_default.a.number
});

defineProperty_default()(Tooltip_Tooltip_Tooltip, "defaultProps", {
  content: '',
  appendTo: 'window',
  placement: 'top',
  enterDelay: 0,
  exitDelay: 0,
  maxWidth: 204,
  flip: true,
  fixed: false,
  textAlign: 'start',
  size: 'medium',
  zIndex: 6000
});

/* harmony default export */ var src_Tooltip_Tooltip = __webpack_exports__["a"] = (Tooltip_Tooltip_Tooltip);

/***/ })
/******/ ]);