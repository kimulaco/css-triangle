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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/docs/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hyperapp/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/hyperapp/src/index.js ***!
  \********************************************/
/*! exports provided: Lazy, h, app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Lazy\", function() { return Lazy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\nvar RECYCLED_NODE = 1\nvar LAZY_NODE = 2\nvar TEXT_NODE = 3\nvar EMPTY_OBJ = {}\nvar EMPTY_ARR = []\n\nvar map = EMPTY_ARR.map\nvar isArray = Array.isArray\nvar defer = requestAnimationFrame || setTimeout\n\nvar createClass = function(obj) {\n  var out = \"\"\n\n  if (typeof obj === \"string\") return obj\n\n  if (isArray(obj) && obj.length > 0) {\n    for (var k = 0, tmp; k < obj.length; k++) {\n      if ((tmp = createClass(obj[k])) !== \"\") {\n        out += (out && \" \") + tmp\n      }\n    }\n  } else {\n    for (var k in obj) {\n      if (obj[k]) {\n        out += (out && \" \") + k\n      }\n    }\n  }\n\n  return out\n}\n\nvar merge = function(a, b) {\n  var out = {}\n\n  for (var k in a) out[k] = a[k]\n  for (var k in b) out[k] = b[k]\n\n  return out\n}\n\nvar batch = function(list) {\n  return list.reduce(function(out, item) {\n    return out.concat(\n      !item || item === true\n        ? false\n        : typeof item[0] === \"function\"\n        ? [item]\n        : batch(item)\n    )\n  }, EMPTY_ARR)\n}\n\nvar isSameAction = function(a, b) {\n  return isArray(a) && isArray(b) && a[0] === b[0] && typeof a[0] === \"function\"\n}\n\nvar shouldRestart = function(a, b) {\n  for (var k in merge(a, b)) {\n    if (a[k] !== b[k] && !isSameAction(a[k], b[k])) return true\n    b[k] = a[k]\n  }\n}\n\nvar patchSubs = function(oldSubs, newSubs, dispatch) {\n  for (\n    var i = 0, oldSub, newSub, subs = [];\n    i < oldSubs.length || i < newSubs.length;\n    i++\n  ) {\n    oldSub = oldSubs[i]\n    newSub = newSubs[i]\n    subs.push(\n      newSub\n        ? !oldSub ||\n          newSub[0] !== oldSub[0] ||\n          shouldRestart(newSub[1], oldSub[1])\n          ? [\n              newSub[0],\n              newSub[1],\n              newSub[0](newSub[1], dispatch),\n              oldSub && oldSub[2]()\n            ]\n          : oldSub\n        : oldSub && oldSub[2]()\n    )\n  }\n  return subs\n}\n\nvar patchProperty = function(node, key, oldValue, newValue, listener, isSvg) {\n  if (key === \"key\") {\n  } else if (key === \"style\") {\n    for (var k in merge(oldValue, newValue)) {\n      oldValue = newValue == null || newValue[k] == null ? \"\" : newValue[k]\n      if (k[0] === \"-\") {\n        node[key].setProperty(k, oldValue)\n      } else {\n        node[key][k] = oldValue\n      }\n    }\n  } else if (key[0] === \"o\" && key[1] === \"n\") {\n    if (\n      !((node.actions || (node.actions = {}))[(key = key.slice(2))] = newValue)\n    ) {\n      node.removeEventListener(key, listener)\n    } else if (!oldValue) {\n      node.addEventListener(key, listener, newValue.passive ? newValue : false)\n    }\n  } else if (!isSvg && key !== \"list\" && key in node) {\n    node[key] = newValue == null ? \"\" : newValue\n  } else if (\n    newValue == null ||\n    newValue === false ||\n    (key === \"class\" && !(newValue = createClass(newValue)))\n  ) {\n    node.removeAttribute(key)\n  } else {\n    node.setAttribute(key, newValue)\n  }\n}\n\nvar createNode = function(vnode, listener, isSvg) {\n  var node =\n    vnode.type === TEXT_NODE\n      ? document.createTextNode(vnode.name)\n      : (isSvg = isSvg || vnode.name === \"svg\")\n      ? document.createElementNS(\"http://www.w3.org/2000/svg\", vnode.name)\n      : document.createElement(vnode.name)\n  var props = vnode.props\n\n  for (var k in props) {\n    patchProperty(node, k, null, props[k], listener, isSvg)\n  }\n\n  for (var i = 0, len = vnode.children.length; i < len; i++) {\n    node.appendChild(\n      createNode(\n        (vnode.children[i] = getVNode(vnode.children[i])),\n        listener,\n        isSvg\n      )\n    )\n  }\n\n  return (vnode.node = node)\n}\n\nvar getKey = function(vnode) {\n  return vnode == null ? null : vnode.key\n}\n\nvar patch = function(parent, node, oldVNode, newVNode, listener, isSvg) {\n  if (oldVNode === newVNode) {\n  } else if (\n    oldVNode != null &&\n    oldVNode.type === TEXT_NODE &&\n    newVNode.type === TEXT_NODE\n  ) {\n    if (oldVNode.name !== newVNode.name) node.nodeValue = newVNode.name\n  } else if (oldVNode == null || oldVNode.name !== newVNode.name) {\n    node = parent.insertBefore(\n      createNode((newVNode = getVNode(newVNode)), listener, isSvg),\n      node\n    )\n    if (oldVNode != null) parent.removeChild(oldVNode.node)\n  } else {\n    var tmpVKid\n    var oldVKid\n\n    var oldKey\n    var newKey\n\n    var oldVProps = oldVNode.props\n    var newVProps = newVNode.props\n\n    var oldVKids = oldVNode.children\n    var newVKids = newVNode.children\n\n    var oldHead = 0\n    var newHead = 0\n    var oldTail = oldVKids.length - 1\n    var newTail = newVKids.length - 1\n\n    isSvg = isSvg || newVNode.name === \"svg\"\n\n    for (var i in merge(oldVProps, newVProps)) {\n      if (\n        (i === \"value\" || i === \"selected\" || i === \"checked\"\n          ? node[i]\n          : oldVProps[i]) !== newVProps[i]\n      ) {\n        patchProperty(node, i, oldVProps[i], newVProps[i], listener, isSvg)\n      }\n    }\n\n    while (newHead <= newTail && oldHead <= oldTail) {\n      if (\n        (oldKey = getKey(oldVKids[oldHead])) == null ||\n        oldKey !== getKey(newVKids[newHead])\n      ) {\n        break\n      }\n\n      patch(\n        node,\n        oldVKids[oldHead].node,\n        oldVKids[oldHead],\n        (newVKids[newHead] = getVNode(\n          newVKids[newHead++],\n          oldVKids[oldHead++]\n        )),\n        listener,\n        isSvg\n      )\n    }\n\n    while (newHead <= newTail && oldHead <= oldTail) {\n      if (\n        (oldKey = getKey(oldVKids[oldTail])) == null ||\n        oldKey !== getKey(newVKids[newTail])\n      ) {\n        break\n      }\n\n      patch(\n        node,\n        oldVKids[oldTail].node,\n        oldVKids[oldTail],\n        (newVKids[newTail] = getVNode(\n          newVKids[newTail--],\n          oldVKids[oldTail--]\n        )),\n        listener,\n        isSvg\n      )\n    }\n\n    if (oldHead > oldTail) {\n      while (newHead <= newTail) {\n        node.insertBefore(\n          createNode(\n            (newVKids[newHead] = getVNode(newVKids[newHead++])),\n            listener,\n            isSvg\n          ),\n          (oldVKid = oldVKids[oldHead]) && oldVKid.node\n        )\n      }\n    } else if (newHead > newTail) {\n      while (oldHead <= oldTail) {\n        node.removeChild(oldVKids[oldHead++].node)\n      }\n    } else {\n      for (var i = oldHead, keyed = {}, newKeyed = {}; i <= oldTail; i++) {\n        if ((oldKey = oldVKids[i].key) != null) {\n          keyed[oldKey] = oldVKids[i]\n        }\n      }\n\n      while (newHead <= newTail) {\n        oldKey = getKey((oldVKid = oldVKids[oldHead]))\n        newKey = getKey(\n          (newVKids[newHead] = getVNode(newVKids[newHead], oldVKid))\n        )\n\n        if (\n          newKeyed[oldKey] ||\n          (newKey != null && newKey === getKey(oldVKids[oldHead + 1]))\n        ) {\n          if (oldKey == null) {\n            node.removeChild(oldVKid.node)\n          }\n          oldHead++\n          continue\n        }\n\n        if (newKey == null || oldVNode.type === RECYCLED_NODE) {\n          if (oldKey == null) {\n            patch(\n              node,\n              oldVKid && oldVKid.node,\n              oldVKid,\n              newVKids[newHead],\n              listener,\n              isSvg\n            )\n            newHead++\n          }\n          oldHead++\n        } else {\n          if (oldKey === newKey) {\n            patch(\n              node,\n              oldVKid.node,\n              oldVKid,\n              newVKids[newHead],\n              listener,\n              isSvg\n            )\n            newKeyed[newKey] = true\n            oldHead++\n          } else {\n            if ((tmpVKid = keyed[newKey]) != null) {\n              patch(\n                node,\n                node.insertBefore(tmpVKid.node, oldVKid && oldVKid.node),\n                tmpVKid,\n                newVKids[newHead],\n                listener,\n                isSvg\n              )\n              newKeyed[newKey] = true\n            } else {\n              patch(\n                node,\n                oldVKid && oldVKid.node,\n                null,\n                newVKids[newHead],\n                listener,\n                isSvg\n              )\n            }\n          }\n          newHead++\n        }\n      }\n\n      while (oldHead <= oldTail) {\n        if (getKey((oldVKid = oldVKids[oldHead++])) == null) {\n          node.removeChild(oldVKid.node)\n        }\n      }\n\n      for (var i in keyed) {\n        if (newKeyed[i] == null) {\n          node.removeChild(keyed[i].node)\n        }\n      }\n    }\n  }\n\n  return (newVNode.node = node)\n}\n\nvar propsChanged = function(a, b) {\n  for (var k in a) if (a[k] !== b[k]) return true\n  for (var k in b) if (a[k] !== b[k]) return true\n}\n\nvar getVNode = function(newVNode, oldVNode) {\n  return newVNode.type === LAZY_NODE\n    ? ((!oldVNode || propsChanged(oldVNode.lazy, newVNode.lazy)) &&\n        ((oldVNode = newVNode.lazy.view(newVNode.lazy)).lazy = newVNode.lazy),\n      oldVNode)\n    : newVNode\n}\n\nvar createVNode = function(name, props, children, node, key, type) {\n  return {\n    name: name,\n    props: props,\n    children: children,\n    node: node,\n    type: type,\n    key: key\n  }\n}\n\nvar createTextVNode = function(value, node) {\n  return createVNode(value, EMPTY_OBJ, EMPTY_ARR, node, null, TEXT_NODE)\n}\n\nvar recycleNode = function(node) {\n  return node.nodeType === TEXT_NODE\n    ? createTextVNode(node.nodeValue, node)\n    : createVNode(\n        node.nodeName.toLowerCase(),\n        EMPTY_OBJ,\n        map.call(node.childNodes, recycleNode),\n        node,\n        null,\n        RECYCLED_NODE\n      )\n}\n\nvar Lazy = function(props) {\n  return {\n    lazy: props,\n    type: LAZY_NODE\n  }\n}\n\nvar h = function(name, props) {\n  for (var vnode, rest = [], children = [], i = arguments.length; i-- > 2; ) {\n    rest.push(arguments[i])\n  }\n\n  while (rest.length > 0) {\n    if (isArray((vnode = rest.pop()))) {\n      for (var i = vnode.length; i-- > 0; ) {\n        rest.push(vnode[i])\n      }\n    } else if (vnode === false || vnode === true || vnode == null) {\n    } else {\n      children.push(typeof vnode === \"object\" ? vnode : createTextVNode(vnode))\n    }\n  }\n\n  props = props || EMPTY_OBJ\n\n  return typeof name === \"function\"\n    ? name(props, children)\n    : createVNode(name, props, children, null, props.key)\n}\n\nvar app = function(props, enhance) {\n  var state = {}\n  var lock = false\n  var view = props.view\n  var node = props.node\n  var vdom = node && recycleNode(node)\n  var subscriptions = props.subscriptions\n  var subs = []\n\n  var listener = function(event) {\n    var action = this.actions[event.type]\n    if (action.preventDefault) event.preventDefault()\n    if (action.stopPropagation) event.stopPropagation()\n    dispatch(action.action || action, event)\n  }\n\n  var setState = function(newState) {\n    return (\n      state === newState || lock || defer(render, (lock = true)),\n      (state = newState)\n    )\n  }\n\n  var dispatch = (enhance ||\n    function(a) {\n      return a\n    })(function(action, props) {\n    return typeof action === \"function\"\n      ? dispatch(action(state, props))\n      : isArray(action)\n      ? typeof action[0] === \"function\"\n        ? dispatch(\n            action[0],\n            typeof action[1] === \"function\" ? action[1](props) : action[1]\n          )\n        : (batch(action.slice(1)).map(function(fx) {\n            fx && fx[0](fx[1], dispatch)\n          }, setState(action[0])),\n          state)\n      : setState(action)\n  })\n\n  var render = function() {\n    lock = false\n    if (subscriptions) {\n      subs = patchSubs(subs, batch(subscriptions(state)), dispatch)\n    }\n    if (view) {\n      node = patch(\n        node.parentNode,\n        node,\n        vdom,\n        typeof (vdom = view(state)) === \"string\" ? createTextVNode(vdom) : vdom,\n        listener\n      )\n    }\n  }\n\n  dispatch(props.init)\n}\n\n\n//# sourceURL=webpack:///./node_modules/hyperapp/src/index.js?");

/***/ }),

/***/ "./src/docs/app.ts":
/*!*************************!*\
  !*** ./src/docs/app.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/* eslint no-unused-vars: off */\n/* eslint @typescript-eslint/no-unused-vars: off */\nvar hyperapp_1 = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\nvar css_triangle_1 = __importDefault(__webpack_require__(/*! ../lib/css-triangle */ \"./src/lib/css-triangle.ts\"));\nvar State = /** @class */ (function () {\n    function State(css) {\n        this.css = css;\n        console.log(css);\n    }\n    return State;\n}());\nvar Actions = /** @class */ (function () {\n    function Actions() {\n    }\n    Actions.prototype.init = function () {\n        return function (state) {\n            return state;\n        };\n    };\n    return Actions;\n}());\nvar view = function (state, actions) {\n    return hyperapp_1.h('main', {}, [\n        hyperapp_1.h('div', {}, JSON.stringify(state.css, null, '  '))\n    ]);\n};\nhyperapp_1.app(new State(css_triangle_1.default.generate()), new Actions(), view, document.body);\n\n\n//# sourceURL=webpack:///./src/docs/app.ts?");

/***/ }),

/***/ "./src/lib/css-triangle.ts":
/*!*********************************!*\
  !*** ./src/lib/css-triangle.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * CssTriangle\n * @constructor\n */\nvar CssTriangle = /** @class */ (function () {\n    function CssTriangle() {\n        this.option = {\n            'width': 100,\n            'height': 100,\n            'color': '#999',\n            'direction': 'top'\n        };\n    }\n    CssTriangle.prototype.generate = function (option) {\n        if (option === void 0) { option = {}; }\n        this.option = Object.assign(this.option, option);\n        return __assign({ 'width': 0, 'height': 0, 'border-style': 'solid', 'border-color': 'transparent', 'border-width': this.getBorderWidth() }, this.getBorderDirection());\n    };\n    CssTriangle.prototype.getBorderWidth = function () {\n        var widthHerf = Number(this.option.width) / 2;\n        var heightHerf = Number(this.option.height) / 2;\n        switch (this.option.direction) {\n            case 'top':\n                return \"0 \" + widthHerf + \"px \" + this.option.height + \"px \" + widthHerf + \"px\";\n            case 'bottom':\n                return this.option.height + \"px \" + widthHerf + \"px 0 \" + widthHerf + \"px\";\n            case 'right':\n                return heightHerf + \"px 0 \" + heightHerf + \"px \" + this.option.width + \"px\";\n            case 'left':\n                return heightHerf + \"px \" + this.option.width + \"px \" + heightHerf + \"px 0\";\n            default:\n                return \"0 \" + widthHerf + \"px \" + this.option.height + \"px \" + widthHerf + \"px\";\n        }\n    };\n    CssTriangle.prototype.getBorderDirection = function () {\n        switch (this.option.direction) {\n            case 'top':\n                return { 'border-bottom-color': this.option.color };\n            case 'bottom':\n                return { 'border-top-color': this.option.color };\n            case 'right':\n                return { 'border-left-color': this.option.color };\n            case 'left':\n                return { 'border-right-color': this.option.color };\n            default:\n                return { 'border-bottom-color': this.option.color };\n        }\n    };\n    return CssTriangle;\n}());\nvar cssTriangle = new CssTriangle();\nexports.default = cssTriangle;\nmodule.exports = cssTriangle;\n\n\n//# sourceURL=webpack:///./src/lib/css-triangle.ts?");

/***/ })

/******/ });