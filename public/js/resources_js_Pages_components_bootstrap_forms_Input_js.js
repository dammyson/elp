(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_components_bootstrap_forms_Input_js"],{

/***/ "./resources/js/Pages/components/bootstrap/forms/Input.js":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/components/bootstrap/forms/Input.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../layout/Portal/Portal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Validation'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var _excluded = ["type", "id", "name", "className", "required", "placeholder", "autoComplete", "ariaDescribedby", "ariaLabelledby", "ariaLabel", "list", "title", "size", "disabled", "readOnly", "multiple", "value", "min", "max", "step", "isValid", "isTouched", "invalidFeedback", "validFeedback", "isValidMessage", "isTooltipFeedback", "onBlur", "onChange", "onFocus", "onInput", "onInvalid", "onSelect", "component", "mask", "format"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Input = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _classNames;

  var type = _ref.type,
      id = _ref.id,
      name = _ref.name,
      className = _ref.className,
      required = _ref.required,
      placeholder = _ref.placeholder,
      autoComplete = _ref.autoComplete,
      ariaDescribedby = _ref.ariaDescribedby,
      ariaLabelledby = _ref.ariaLabelledby,
      ariaLabel = _ref.ariaLabel,
      list = _ref.list,
      title = _ref.title,
      size = _ref.size,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      multiple = _ref.multiple,
      value = _ref.value,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      isValid = _ref.isValid,
      isTouched = _ref.isTouched,
      invalidFeedback = _ref.invalidFeedback,
      validFeedback = _ref.validFeedback,
      isValidMessage = _ref.isValidMessage,
      isTooltipFeedback = _ref.isTooltipFeedback,
      _onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      _onFocus = _ref.onFocus,
      _onInput = _ref.onInput,
      _onInvalid = _ref.onInvalid,
      _onSelect = _ref.onSelect,
      component = _ref.component,
      mask = _ref.mask,
      format = _ref.format,
      props = _objectWithoutProperties(_ref, _excluded);

  var _props = _objectSpread({
    id: id,
    name: name === null ? id : name,
    type: !list ? type : null,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {
      'form-control': readOnly !== 'plaintext' && type !== 'range',
      'form-range': type === 'range',
      'form-control-plaintext': readOnly === 'plaintext',
      'form-control-color': type === 'color'
    }, _defineProperty(_classNames, "form-control-".concat(size), size), _defineProperty(_classNames, 'is-invalid', !isValid && isTouched && invalidFeedback), _defineProperty(_classNames, 'is-valid', !isValid && isTouched && !invalidFeedback), _classNames), className),
    required: required,
    placeholder: placeholder,
    title: title,
    list: list ? "".concat(id, "-list") : null,
    disabled: disabled,
    readOnly: !!readOnly,
    multiple: multiple,
    autoComplete: autoComplete,
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    value: value,
    min: min,
    max: max,
    step: step,
    onBlur: _onBlur,
    onChange: readOnly ? null : onChange,
    onFocus: _onFocus,
    onInput: _onInput,
    onInvalid: _onInvalid,
    onSelect: _onSelect
  }, props);

  var _numberFormatProps = {
    mask: mask,
    format: format,
    onBlur: function onBlur() {
      return _onBlur;
    },
    onChange: readOnly ? null : function () {
      return onChange;
    },
    onFocus: function onFocus() {
      return _onFocus;
    },
    onInput: function onInput() {
      return _onInput;
    },
    onInvalid: function onInvalid() {
      return _onInvalid;
    },
    onSelect: function onSelect() {
      return _onSelect;
    }
  };
  var _maskProps = {
    mask: mask
  };

  var _list = list && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../layout/Portal/Portal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("datalist", {
    id: "".concat(id, "-list")
  }, list.map(function (option) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: option,
      "aria-labelledby": option,
      value: option
    });
  })));

  var _validation = isValidMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module './Validation'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    isTouched: isTouched,
    invalidFeedback: invalidFeedback,
    validFeedback: validFeedback,
    isTooltip: isTooltipFeedback
  });

  if (component === 'NumberFormat' || format) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_number_format__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      ref: ref
    }, _props, _numberFormatProps)), _list, _validation);
  }

  if (component === 'InputMask' || mask) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_input_mask__WEBPACK_IMPORTED_MODULE_3___default()), _extends({
      ref: ref
    }, _props, _maskProps)), _list, _validation);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
    ref: ref
  }, _props)), _list, _validation);
});
Input.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['NumberFormat', 'InputMask']),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['text', 'email', 'password', 'file', 'color', 'date', 'datetime-local', 'hidden', 'month', 'number', 'range', 'search', 'tel', 'time', 'url', 'week']),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /**
   * If the name value is left blank, the id value is assigned.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['lg', 'sm']),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /**
   * The *title* global attribute contains text representing advisory information related to the element it belongs to.
   */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /**
   * Contains pre-defined options for an *Input* component.
   */
  list: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /**
   * A *disabled* element isn't editable and isn't sent on submit.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * The multiple attribute works with the following input types: email, and file.
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * A *readOnly* element is just not editable, but gets sent when the according *form* submits.
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['plaintext'])]),
  ariaDescribedby: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  ariaLabelledby: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  ariaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /**
   * For formik ***`formik.values.ID_OR_NAME`***
   */
  // eslint-disable-next-line react/require-default-props
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),
  min: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  max: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  step: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /**
   * For formik ***`formik.touched.ID_OR_NAME`***
   */
  isTouched: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * For formik ***`formik.isValid`***
   */
  isValid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * For formik ***`formik.errors.ID_OR_NAME`***
   */
  invalidFeedback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  validFeedback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isValidMessage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isTooltipFeedback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * Fires the moment that the element loses focus. For formik ***`formik.handleBlur`***
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * Fires the moment when the value of the element is changed. For formik ***`formik.handleChange`***
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * Fires the moment when the element gets focus
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * Script to be run when an element gets user input
   */
  onInput: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * Script to be run when an element is invalid
   */
  onInvalid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * Fires after some text has been selected in an element
   */
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * More information, [react-input-mask](https://github.com/sanniassin/react-input-mask#react-input-mask).
   */
  mask: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /**
   * More information, [react-number-format](https://github.com/s-yadav/react-number-format#readme).
   */
  format: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Input.defaultProps = {
  component: null,
  type: 'text',
  id: null,
  name: null,
  size: null,
  className: null,
  required: false,
  placeholder: null,
  title: null,
  list: null,
  autoComplete: null,
  disabled: false,
  multiple: false,
  readOnly: false,
  ariaDescribedby: null,
  ariaLabelledby: null,
  ariaLabel: null,
  value: undefined,
  min: null,
  max: null,
  step: null,
  isTouched: false,
  isValid: false,
  invalidFeedback: null,
  validFeedback: null,
  isValidMessage: true,
  isTooltipFeedback: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  onInput: null,
  onInvalid: null,
  onSelect: null,
  mask: null,
  format: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
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

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/react-input-mask/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-input-mask/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./lib/react-input-mask.development.js */ "./node_modules/react-input-mask/lib/react-input-mask.development.js");
}


/***/ }),

/***/ "./node_modules/react-input-mask/lib/react-input-mask.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-input-mask/lib/react-input-mask.development.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var invariant = _interopDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

function _defaults2(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _defaults2(subClass, superClass);
}

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function setInputSelection(input, start, end) {
  if ('selectionStart' in input && 'selectionEnd' in input) {
    input.selectionStart = start;
    input.selectionEnd = end;
  } else {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveStart('character', start);
    range.moveEnd('character', end - start);
    range.select();
  }
}
function getInputSelection(input) {
  var start = 0;
  var end = 0;

  if ('selectionStart' in input && 'selectionEnd' in input) {
    start = input.selectionStart;
    end = input.selectionEnd;
  } else {
    var range = document.selection.createRange();

    if (range.parentElement() === input) {
      start = -range.moveStart('character', -input.value.length);
      end = -range.moveEnd('character', -input.value.length);
    }
  }

  return {
    start: start,
    end: end,
    length: end - start
  };
}

var defaultFormatChars = {
  '9': '[0-9]',
  'a': '[A-Za-z]',
  '*': '[A-Za-z0-9]'
};
var defaultMaskChar = '_';

function parseMask (mask, maskChar, formatChars) {
  var parsedMaskString = '';
  var prefix = '';
  var lastEditablePosition = null;
  var permanents = [];

  if (maskChar === undefined) {
    maskChar = defaultMaskChar;
  }

  if (formatChars == null) {
    formatChars = defaultFormatChars;
  }

  if (!mask || typeof mask !== 'string') {
    return {
      maskChar: maskChar,
      formatChars: formatChars,
      mask: null,
      prefix: null,
      lastEditablePosition: null,
      permanents: []
    };
  }

  var isPermanent = false;
  mask.split('').forEach(function (character) {
    if (!isPermanent && character === '\\') {
      isPermanent = true;
    } else {
      if (isPermanent || !formatChars[character]) {
        permanents.push(parsedMaskString.length);

        if (parsedMaskString.length === permanents.length - 1) {
          prefix += character;
        }
      } else {
        lastEditablePosition = parsedMaskString.length + 1;
      }

      parsedMaskString += character;
      isPermanent = false;
    }
  });
  return {
    maskChar: maskChar,
    formatChars: formatChars,
    prefix: prefix,
    mask: parsedMaskString,
    lastEditablePosition: lastEditablePosition,
    permanents: permanents
  };
}

/* eslint no-use-before-define: ["error", { functions: false }] */
function isPermanentCharacter(maskOptions, pos) {
  return maskOptions.permanents.indexOf(pos) !== -1;
}
function isAllowedCharacter(maskOptions, pos, character) {
  var mask = maskOptions.mask,
      formatChars = maskOptions.formatChars;

  if (!character) {
    return false;
  }

  if (isPermanentCharacter(maskOptions, pos)) {
    return mask[pos] === character;
  }

  var ruleChar = mask[pos];
  var charRule = formatChars[ruleChar];
  return new RegExp(charRule).test(character);
}
function isEmpty(maskOptions, value) {
  return value.split('').every(function (character, i) {
    return isPermanentCharacter(maskOptions, i) || !isAllowedCharacter(maskOptions, i, character);
  });
}
function getFilledLength(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    while (value.length > prefix.length && isPermanentCharacter(maskOptions, value.length - 1)) {
      value = value.slice(0, value.length - 1);
    }

    return value.length;
  }

  var filledLength = prefix.length;

  for (var i = value.length; i >= prefix.length; i--) {
    var character = value[i];
    var isEnteredCharacter = !isPermanentCharacter(maskOptions, i) && isAllowedCharacter(maskOptions, i, character);

    if (isEnteredCharacter) {
      filledLength = i + 1;
      break;
    }
  }

  return filledLength;
}
function isFilled(maskOptions, value) {
  return getFilledLength(maskOptions, value) === maskOptions.mask.length;
}
function formatValue(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    value = insertString(maskOptions, '', value, 0);

    if (value.length < prefix.length) {
      value = prefix;
    }

    while (value.length < mask.length && isPermanentCharacter(maskOptions, value.length)) {
      value += mask[value.length];
    }

    return value;
  }

  if (value) {
    var emptyValue = formatValue(maskOptions, '');
    return insertString(maskOptions, emptyValue, value, 0);
  }

  for (var i = 0; i < mask.length; i++) {
    if (isPermanentCharacter(maskOptions, i)) {
      value += mask[i];
    } else {
      value += maskChar;
    }
  }

  return value;
}
function clearRange(maskOptions, value, start, len) {
  var end = start + len;
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;
  var arrayValue = value.split('');

  if (!maskChar) {
    // remove any permanent chars after clear range, they will be added back by formatValue
    for (var i = end; i < arrayValue.length; i++) {
      if (isPermanentCharacter(maskOptions, i)) {
        arrayValue[i] = '';
      }
    }

    start = Math.max(prefix.length, start);
    arrayValue.splice(start, end - start);
    value = arrayValue.join('');
    return formatValue(maskOptions, value);
  }

  return arrayValue.map(function (character, i) {
    if (i < start || i >= end) {
      return character;
    }

    if (isPermanentCharacter(maskOptions, i)) {
      return mask[i];
    }

    return maskChar;
  }).join('');
}
function insertString(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;
  var arrayInsertStr = insertStr.split('');
  var isInputFilled = isFilled(maskOptions, value);

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  var isUsableCharacter = function isUsableCharacter(character, pos) {
    return !maskChar || !isPermanentCharacter(maskOptions, pos) || character !== maskChar;
  };

  if (!maskChar && insertPosition > value.length) {
    value += mask.slice(value.length, insertPosition);
  }

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      if (insertPosition >= value.length) {
        value += mask[insertPosition];
      }

      if (!isUsableCharacter(insertCharacter, insertPosition)) {
        return true;
      }

      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (!isAllowed) {
      return true;
    }

    if (insertPosition < value.length) {
      if (maskChar || isInputFilled || insertPosition < prefix.length) {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition + 1);
      } else {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition);
        value = formatValue(maskOptions, value);
      }
    } else if (!maskChar) {
      value += insertCharacter;
    }

    insertPosition++; // stop iteration if maximum value length reached

    return insertPosition < mask.length;
  });
  return value;
}
function getInsertStringLength(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar;
  var arrayInsertStr = insertStr.split('');
  var initialInsertPosition = insertPosition;

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (isAllowed) {
      insertPosition++;
    } // stop iteration if maximum value length reached


    return insertPosition < mask.length;
  });
  return insertPosition - initialInsertPosition;
}
function getLeftEditablePosition(maskOptions, pos) {
  for (var i = pos; i >= 0; --i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getRightEditablePosition(maskOptions, pos) {
  var mask = maskOptions.mask;

  for (var i = pos; i < mask.length; ++i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getStringValue(value) {
  return !value && value !== 0 ? '' : value + '';
}

function processChange(maskOptions, value, selection, previousValue, previousSelection) {
  var mask = maskOptions.mask,
      prefix = maskOptions.prefix,
      lastEditablePosition = maskOptions.lastEditablePosition;
  var newValue = value;
  var enteredString = '';
  var formattedEnteredStringLength = 0;
  var removedLength = 0;
  var cursorPosition = Math.min(previousSelection.start, selection.start);

  if (selection.end > previousSelection.start) {
    enteredString = newValue.slice(previousSelection.start, selection.end);
    formattedEnteredStringLength = getInsertStringLength(maskOptions, previousValue, enteredString, cursorPosition);

    if (!formattedEnteredStringLength) {
      removedLength = 0;
    } else {
      removedLength = previousSelection.length;
    }
  } else if (newValue.length < previousValue.length) {
    removedLength = previousValue.length - newValue.length;
  }

  newValue = previousValue;

  if (removedLength) {
    if (removedLength === 1 && !previousSelection.length) {
      var deleteFromRight = previousSelection.start === selection.start;
      cursorPosition = deleteFromRight ? getRightEditablePosition(maskOptions, selection.start) : getLeftEditablePosition(maskOptions, selection.start);
    }

    newValue = clearRange(maskOptions, newValue, cursorPosition, removedLength);
  }

  newValue = insertString(maskOptions, newValue, enteredString, cursorPosition);
  cursorPosition = cursorPosition + formattedEnteredStringLength;

  if (cursorPosition >= mask.length) {
    cursorPosition = mask.length;
  } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
    cursorPosition = prefix.length;
  } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
    cursorPosition = getRightEditablePosition(maskOptions, cursorPosition);
  }

  newValue = formatValue(maskOptions, newValue);

  if (!enteredString) {
    enteredString = null;
  }

  return {
    value: newValue,
    enteredString: enteredString,
    selection: {
      start: cursorPosition,
      end: cursorPosition
    }
  };
}

function isWindowsPhoneBrowser() {
  var windows = new RegExp('windows', 'i');
  var phone = new RegExp('phone', 'i');
  var ua = navigator.userAgent;
  return windows.test(ua) && phone.test(ua);
}

function isFunction(value) {
  return typeof value === 'function';
}

function getRequestAnimationFrame() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
}

function getCancelAnimationFrame() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
}

function defer(fn) {
  var hasCancelAnimationFrame = !!getCancelAnimationFrame();
  var deferFn;

  if (hasCancelAnimationFrame) {
    deferFn = getRequestAnimationFrame();
  } else {
    deferFn = function deferFn() {
      return setTimeout(fn, 1000 / 60);
    };
  }

  return deferFn(fn);
}
function cancelDefer(deferId) {
  var cancelFn = getCancelAnimationFrame() || clearTimeout;
  cancelFn(deferId);
}

var InputElement =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InputElement, _React$Component);

  function InputElement(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.focused = false;
    _this.mounted = false;
    _this.previousSelection = null;
    _this.selectionDeferId = null;
    _this.saveSelectionLoopDeferId = null;

    _this.saveSelectionLoop = function () {
      _this.previousSelection = _this.getSelection();
      _this.saveSelectionLoopDeferId = defer(_this.saveSelectionLoop);
    };

    _this.runSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId === null) {
        _this.saveSelectionLoop();
      }
    };

    _this.stopSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId !== null) {
        cancelDefer(_this.saveSelectionLoopDeferId);
        _this.saveSelectionLoopDeferId = null;
        _this.previousSelection = null;
      }
    };

    _this.getInputDOMNode = function () {
      if (!_this.mounted) {
        return null;
      }

      var input = reactDom.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this)));
      var isDOMNode = typeof window !== 'undefined' && input instanceof window.Element; // workaround for react-test-renderer
      // https://github.com/sanniassin/react-input-mask/issues/147

      if (input && !isDOMNode) {
        return null;
      }

      if (input.nodeName !== 'INPUT') {
        input = input.querySelector('input');
      }

      if (!input) {
        throw new Error('react-input-mask: inputComponent doesn\'t contain input node');
      }

      return input;
    };

    _this.getInputValue = function () {
      var input = _this.getInputDOMNode();

      if (!input) {
        return null;
      }

      return input.value;
    };

    _this.setInputValue = function (value) {
      var input = _this.getInputDOMNode();

      if (!input) {
        return;
      }

      _this.value = value;
      input.value = value;
    };

    _this.setCursorToEnd = function () {
      var filledLength = getFilledLength(_this.maskOptions, _this.value);
      var pos = getRightEditablePosition(_this.maskOptions, filledLength);

      if (pos !== null) {
        _this.setCursorPosition(pos);
      }
    };

    _this.setSelection = function (start, end, options) {
      if (options === void 0) {
        options = {};
      }

      var input = _this.getInputDOMNode();

      var isFocused = _this.isFocused(); // don't change selection on unfocused input
      // because Safari sets focus on selection change (#154)


      if (!input || !isFocused) {
        return;
      }

      var _options = options,
          deferred = _options.deferred;

      if (!deferred) {
        setInputSelection(input, start, end);
      }

      if (_this.selectionDeferId !== null) {
        cancelDefer(_this.selectionDeferId);
      } // deferred selection update is required for pre-Lollipop Android browser,
      // but for consistent behavior we do it for all browsers


      _this.selectionDeferId = defer(function () {
        _this.selectionDeferId = null;
        setInputSelection(input, start, end);
      });
      _this.previousSelection = {
        start: start,
        end: end,
        length: Math.abs(end - start)
      };
    };

    _this.getSelection = function () {
      var input = _this.getInputDOMNode();

      return getInputSelection(input);
    };

    _this.getCursorPosition = function () {
      return _this.getSelection().start;
    };

    _this.setCursorPosition = function (pos) {
      _this.setSelection(pos, pos);
    };

    _this.isFocused = function () {
      return _this.focused;
    };

    _this.getBeforeMaskedValueChangeConfig = function () {
      var _this$maskOptions = _this.maskOptions,
          mask = _this$maskOptions.mask,
          maskChar = _this$maskOptions.maskChar,
          permanents = _this$maskOptions.permanents,
          formatChars = _this$maskOptions.formatChars;
      var alwaysShowMask = _this.props.alwaysShowMask;
      return {
        mask: mask,
        maskChar: maskChar,
        permanents: permanents,
        alwaysShowMask: !!alwaysShowMask,
        formatChars: formatChars
      };
    };

    _this.isInputAutofilled = function (value, selection, previousValue, previousSelection) {
      var input = _this.getInputDOMNode(); // only check for positive match because it will be false negative
      // in case of autofill simulation in tests
      //
      // input.matches throws an exception if selector isn't supported


      try {
        if (input.matches(':-webkit-autofill')) {
          return true;
        }
      } catch (e) {} // if input isn't focused then change event must have been triggered
      // either by autofill or event simulation in tests


      if (!_this.focused) {
        return true;
      } // if cursor has moved to the end while previousSelection forbids it
      // then it must be autofill


      return previousSelection.end < previousValue.length && selection.end === value.length;
    };

    _this.onChange = function (event) {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          beforePasteState = _assertThisInitialize.beforePasteState;

      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          previousSelection = _assertThisInitialize2.previousSelection;

      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;

      var value = _this.getInputValue();

      var previousValue = _this.value;

      var selection = _this.getSelection(); // autofill replaces entire value, ignore old one
      // https://github.com/sanniassin/react-input-mask/issues/113


      if (_this.isInputAutofilled(value, selection, previousValue, previousSelection)) {
        previousValue = formatValue(_this.maskOptions, '');
        previousSelection = {
          start: 0,
          end: 0,
          length: 0
        };
      } // set value and selection as if we haven't
      // cleared input in onPaste handler


      if (beforePasteState) {
        previousSelection = beforePasteState.selection;
        previousValue = beforePasteState.value;
        selection = {
          start: previousSelection.start + value.length,
          end: previousSelection.start + value.length,
          length: 0
        };
        value = previousValue.slice(0, previousSelection.start) + value + previousValue.slice(previousSelection.end);
        _this.beforePasteState = null;
      }

      var changedState = processChange(_this.maskOptions, value, selection, previousValue, previousSelection);
      var enteredString = changedState.enteredString;
      var newSelection = changedState.selection;
      var newValue = changedState.value;

      if (isFunction(beforeMaskedValueChange)) {
        var modifiedValue = beforeMaskedValueChange({
          value: newValue,
          selection: newSelection
        }, {
          value: previousValue,
          selection: previousSelection
        }, enteredString, _this.getBeforeMaskedValueChangeConfig());
        newValue = modifiedValue.value;
        newSelection = modifiedValue.selection;
      }

      _this.setInputValue(newValue);

      if (isFunction(_this.props.onChange)) {
        _this.props.onChange(event);
      }

      if (_this.isWindowsPhoneBrowser) {
        _this.setSelection(newSelection.start, newSelection.end, {
          deferred: true
        });
      } else {
        _this.setSelection(newSelection.start, newSelection.end);
      }
    };

    _this.onFocus = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var _this$maskOptions2 = _this.maskOptions,
          mask = _this$maskOptions2.mask,
          prefix = _this$maskOptions2.prefix;
      _this.focused = true; // if autoFocus is set, onFocus triggers before componentDidMount

      _this.mounted = true;

      if (mask) {
        if (!_this.value) {
          var emptyValue = formatValue(_this.maskOptions, prefix);
          var newValue = formatValue(_this.maskOptions, emptyValue);
          var filledLength = getFilledLength(_this.maskOptions, newValue);
          var cursorPosition = getRightEditablePosition(_this.maskOptions, filledLength);
          var newSelection = {
            start: cursorPosition,
            end: cursorPosition
          };

          if (isFunction(beforeMaskedValueChange)) {
            var modifiedValue = beforeMaskedValueChange({
              value: newValue,
              selection: newSelection
            }, {
              value: _this.value,
              selection: null
            }, null, _this.getBeforeMaskedValueChangeConfig());
            newValue = modifiedValue.value;
            newSelection = modifiedValue.selection;
          }

          var isInputValueChanged = newValue !== _this.getInputValue();

          if (isInputValueChanged) {
            _this.setInputValue(newValue);
          }

          if (isInputValueChanged && isFunction(_this.props.onChange)) {
            _this.props.onChange(event);
          }

          _this.setSelection(newSelection.start, newSelection.end);
        } else if (getFilledLength(_this.maskOptions, _this.value) < _this.maskOptions.mask.length) {
          _this.setCursorToEnd();
        }

        _this.runSaveSelectionLoop();
      }

      if (isFunction(_this.props.onFocus)) {
        _this.props.onFocus(event);
      }
    };

    _this.onBlur = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var mask = _this.maskOptions.mask;

      _this.stopSaveSelectionLoop();

      _this.focused = false;

      if (mask && !_this.props.alwaysShowMask && isEmpty(_this.maskOptions, _this.value)) {
        var newValue = '';

        if (isFunction(beforeMaskedValueChange)) {
          var modifiedValue = beforeMaskedValueChange({
            value: newValue,
            selection: null
          }, {
            value: _this.value,
            selection: _this.previousSelection
          }, null, _this.getBeforeMaskedValueChangeConfig());
          newValue = modifiedValue.value;
        }

        var isInputValueChanged = newValue !== _this.getInputValue();

        if (isInputValueChanged) {
          _this.setInputValue(newValue);
        }

        if (isInputValueChanged && isFunction(_this.props.onChange)) {
          _this.props.onChange(event);
        }
      }

      if (isFunction(_this.props.onBlur)) {
        _this.props.onBlur(event);
      }
    };

    _this.onMouseDown = function (event) {
      // tiny unintentional mouse movements can break cursor
      // position on focus, so we have to restore it in that case
      //
      // https://github.com/sanniassin/react-input-mask/issues/108
      if (!_this.focused && document.addEventListener) {
        _this.mouseDownX = event.clientX;
        _this.mouseDownY = event.clientY;
        _this.mouseDownTime = new Date().getTime();

        var mouseUpHandler = function mouseUpHandler(mouseUpEvent) {
          document.removeEventListener('mouseup', mouseUpHandler);

          if (!_this.focused) {
            return;
          }

          var deltaX = Math.abs(mouseUpEvent.clientX - _this.mouseDownX);
          var deltaY = Math.abs(mouseUpEvent.clientY - _this.mouseDownY);
          var axisDelta = Math.max(deltaX, deltaY);

          var timeDelta = new Date().getTime() - _this.mouseDownTime;

          if (axisDelta <= 10 && timeDelta <= 200 || axisDelta <= 5 && timeDelta <= 300) {
            _this.setCursorToEnd();
          }
        };

        document.addEventListener('mouseup', mouseUpHandler);
      }

      if (isFunction(_this.props.onMouseDown)) {
        _this.props.onMouseDown(event);
      }
    };

    _this.onPaste = function (event) {
      if (isFunction(_this.props.onPaste)) {
        _this.props.onPaste(event);
      } // event.clipboardData might not work in Android browser
      // cleaning input to get raw text inside onChange handler


      if (!event.defaultPrevented) {
        _this.beforePasteState = {
          value: _this.getInputValue(),
          selection: _this.getSelection()
        };

        _this.setInputValue('');
      }
    };

    _this.handleRef = function (ref) {
      if (_this.props.children == null && isFunction(_this.props.inputRef)) {
        _this.props.inputRef(ref);
      }
    };

    var _mask = props.mask,
        _maskChar = props.maskChar,
        _formatChars = props.formatChars,
        _alwaysShowMask = props.alwaysShowMask,
        _beforeMaskedValueChange = props.beforeMaskedValueChange;
    var defaultValue = props.defaultValue,
        _value = props.value;
    _this.maskOptions = parseMask(_mask, _maskChar, _formatChars);

    if (defaultValue == null) {
      defaultValue = '';
    }

    if (_value == null) {
      _value = defaultValue;
    }

    var _newValue = getStringValue(_value);

    if (_this.maskOptions.mask && (_alwaysShowMask || _newValue)) {
      _newValue = formatValue(_this.maskOptions, _newValue);

      if (isFunction(_beforeMaskedValueChange)) {
        var oldValue = props.value;

        if (props.value == null) {
          oldValue = defaultValue;
        }

        oldValue = getStringValue(oldValue);

        var modifiedValue = _beforeMaskedValueChange({
          value: _newValue,
          selection: null
        }, {
          value: oldValue,
          selection: null
        }, null, _this.getBeforeMaskedValueChangeConfig());

        _newValue = modifiedValue.value;
      }
    }

    _this.value = _newValue;
    return _this;
  }

  var _proto = InputElement.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true; // workaround for react-test-renderer
    // https://github.com/sanniassin/react-input-mask/issues/147

    if (!this.getInputDOMNode()) {
      return;
    }

    this.isWindowsPhoneBrowser = isWindowsPhoneBrowser();

    if (this.maskOptions.mask && this.getInputValue() !== this.value) {
      this.setInputValue(this.value);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var previousSelection = this.previousSelection;
    var _this$props = this.props,
        beforeMaskedValueChange = _this$props.beforeMaskedValueChange,
        alwaysShowMask = _this$props.alwaysShowMask,
        mask = _this$props.mask,
        maskChar = _this$props.maskChar,
        formatChars = _this$props.formatChars;
    var previousMaskOptions = this.maskOptions;
    var showEmpty = alwaysShowMask || this.isFocused();
    var hasValue = this.props.value != null;
    var newValue = hasValue ? getStringValue(this.props.value) : this.value;
    var cursorPosition = previousSelection ? previousSelection.start : null;
    this.maskOptions = parseMask(mask, maskChar, formatChars);

    if (!this.maskOptions.mask) {
      if (previousMaskOptions.mask) {
        this.stopSaveSelectionLoop(); // render depends on this.maskOptions and this.value,
        // call forceUpdate to keep it in sync

        this.forceUpdate();
      }

      return;
    } else if (!previousMaskOptions.mask && this.isFocused()) {
      this.runSaveSelectionLoop();
    }

    var isMaskChanged = this.maskOptions.mask && this.maskOptions.mask !== previousMaskOptions.mask;

    if (!previousMaskOptions.mask && !hasValue) {
      newValue = this.getInputValue();
    }

    if (isMaskChanged || this.maskOptions.mask && (newValue || showEmpty)) {
      newValue = formatValue(this.maskOptions, newValue);
    }

    if (isMaskChanged) {
      var filledLength = getFilledLength(this.maskOptions, newValue);

      if (cursorPosition === null || filledLength < cursorPosition) {
        if (isFilled(this.maskOptions, newValue)) {
          cursorPosition = filledLength;
        } else {
          cursorPosition = getRightEditablePosition(this.maskOptions, filledLength);
        }
      }
    }

    if (this.maskOptions.mask && isEmpty(this.maskOptions, newValue) && !showEmpty && (!hasValue || !this.props.value)) {
      newValue = '';
    }

    var newSelection = {
      start: cursorPosition,
      end: cursorPosition
    };

    if (isFunction(beforeMaskedValueChange)) {
      var modifiedValue = beforeMaskedValueChange({
        value: newValue,
        selection: newSelection
      }, {
        value: this.value,
        selection: this.previousSelection
      }, null, this.getBeforeMaskedValueChangeConfig());
      newValue = modifiedValue.value;
      newSelection = modifiedValue.selection;
    }

    this.value = newValue;
    var isValueChanged = this.getInputValue() !== this.value; // render depends on this.maskOptions and this.value,
    // call forceUpdate to keep it in sync

    if (isValueChanged) {
      this.setInputValue(this.value);
      this.forceUpdate();
    } else if (isMaskChanged) {
      this.forceUpdate();
    }

    var isSelectionChanged = false;

    if (newSelection.start != null && newSelection.end != null) {
      isSelectionChanged = !previousSelection || previousSelection.start !== newSelection.start || previousSelection.end !== newSelection.end;
    }

    if (isSelectionChanged || isValueChanged) {
      this.setSelection(newSelection.start, newSelection.end);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;

    if (this.selectionDeferId !== null) {
      cancelDefer(this.selectionDeferId);
    }

    this.stopSaveSelectionLoop();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        mask = _this$props2.mask,
        alwaysShowMask = _this$props2.alwaysShowMask,
        maskChar = _this$props2.maskChar,
        formatChars = _this$props2.formatChars,
        inputRef = _this$props2.inputRef,
        beforeMaskedValueChange = _this$props2.beforeMaskedValueChange,
        children = _this$props2.children,
        restProps = _objectWithoutPropertiesLoose(_this$props2, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]);

    var inputElement;
     true ? warning( // parse mask to test against actual mask prop as this.maskOptions
    // will be updated later in componentDidUpdate
    !restProps.maxLength || !parseMask(mask, maskChar, formatChars).mask, 'react-input-mask: maxLength property shouldn\'t be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.') : 0;

    if (children) {
      !isFunction(children) ?  true ? invariant(false, 'react-input-mask: children must be a function') : 0 : void 0;
      var controlledProps = ['onChange', 'onPaste', 'onMouseDown', 'onFocus', 'onBlur', 'value', 'disabled', 'readOnly'];

      var childrenProps = _extends({}, restProps);

      controlledProps.forEach(function (propId) {
        return delete childrenProps[propId];
      });
      inputElement = children(childrenProps);
      var conflictProps = controlledProps.filter(function (propId) {
        return inputElement.props[propId] != null && inputElement.props[propId] !== restProps[propId];
      });
      !!conflictProps.length ?  true ? invariant(false, "react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: " + conflictProps.join(', ')) : 0 : void 0;
       true ? warning(!inputRef, 'react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead') : 0;
    } else {
      inputElement = React.createElement("input", _extends({
        ref: this.handleRef
      }, restProps));
    }

    var changedProps = {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };

    if (this.maskOptions.mask) {
      if (!restProps.disabled && !restProps.readOnly) {
        changedProps.onChange = this.onChange;
        changedProps.onPaste = this.onPaste;
        changedProps.onMouseDown = this.onMouseDown;
      }

      if (restProps.value != null) {
        changedProps.value = this.value;
      }
    }

    inputElement = React.cloneElement(inputElement, changedProps);
    return inputElement;
  };

  return InputElement;
}(React.Component);

module.exports = InputElement;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
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

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
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
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-number-format/dist/react-number-format.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-number-format/dist/react-number-format.es.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/**
 * react-number-format - 4.8.0
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2021 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */



//     

                                                               

// basic noop function
function noop() {}
function returnTrue() {
  return true;
}

function charIsNumber(char         ) {
  return !!(char || '').match(/\d/);
}

function isNil(val     ) {
  return val === null || val === undefined;
}

function escapeRegExp(str        ) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}

function getThousandsGroupRegex(thousandsGroupStyle        ) {
  switch (thousandsGroupStyle) {
    case 'lakh':
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case 'wan':
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case 'thousand':
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}

function applyThousandSeparator(
  str        ,
  thousandSeparator        ,
  thousandsGroupStyle        
) {
  var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
  var index = str.search(/[1-9]/);
  index = index === -1 ? str.length : index;
  return (
    str.substring(0, index) +
    str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator)
  );
}

//spilt a float number into different parts beforeDecimal, afterDecimal, and negation
function splitDecimal(numStr        , allowNegative) {
  if ( allowNegative === void 0 ) allowNegative          = true;

  var hasNagation = numStr[0] === '-';
  var addNegation = hasNagation && allowNegative;
  numStr = numStr.replace('-', '');

  var parts = numStr.split('.');
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || '';

  return {
    beforeDecimal: beforeDecimal,
    afterDecimal: afterDecimal,
    hasNagation: hasNagation,
    addNegation: addNegation,
  };
}

function fixLeadingZero(numStr         ) {
  if (!numStr) { return numStr; }
  var isNegative = numStr[0] === '-';
  if (isNegative) { numStr = numStr.substring(1, numStr.length); }
  var parts = numStr.split('.');
  var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
  var afterDecimal = parts[1] || '';

  return ("" + (isNegative ? '-' : '') + beforeDecimal + (afterDecimal ? ("." + afterDecimal) : ''));
}

/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */
function limitToScale(numStr        , scale        , fixedDecimalScale         ) {
  var str = '';
  var filler = fixedDecimalScale ? '0' : '';
  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }
  return str;
}

function repeat(str, count) {
  return Array(count + 1).join(str);
}

function toNumericString(num) {
  num += ''; // typecast number to string

  // store the sign and remove it from the number.
  var sign = num[0] === '-' ? '-' : '';
  if (sign) { num = num.substring(1); }

  // split the number into cofficient and exponent
  var ref = num.split(/[eE]/g);
  var coefficient = ref[0];
  var exponent = ref[1];

  // covert exponent to number;
  exponent = Number(exponent);

  // if there is no exponent part or its 0, return the coffiecient with sign
  if (!exponent) { return sign + coefficient; }

  coefficient = coefficient.replace('.', '');

  /**
   * for scientific notation the current decimal index will be after first number (index 0)
   * So effective decimal index will always be 1 + exponent value
   */
  var decimalIndex = 1 + exponent;

  var coffiecientLn = coefficient.length;

  if (decimalIndex < 0) {
    // if decimal index is less then 0 add preceding 0s
    // add 1 as join will have
    coefficient = '0.' + repeat('0', Math.abs(decimalIndex)) + coefficient;
  } else if (decimalIndex >= coffiecientLn) {
    // if decimal index is less then 0 add leading 0s
    coefficient = coefficient + repeat('0', decimalIndex - coffiecientLn);
  } else {
    // else add decimal point at proper index
    coefficient =
      (coefficient.substring(0, decimalIndex) || '0') + '.' + coefficient.substring(decimalIndex);
  }

  return sign + coefficient;
}

/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */
function roundToPrecision(numStr        , scale        , fixedDecimalScale         ) {
  //if number is empty don't do anything return empty string
  if (['', '-'].indexOf(numStr) !== -1) { return numStr; }

  var shoudHaveDecimalSeparator = numStr.indexOf('.') !== -1 && scale;
  var ref = splitDecimal(numStr);
  var beforeDecimal = ref.beforeDecimal;
  var afterDecimal = ref.afterDecimal;
  var hasNagation = ref.hasNagation;
  var floatValue = parseFloat(("0." + (afterDecimal || '0')));
  var floatValueStr =
    afterDecimal.length <= scale ? ("0." + afterDecimal) : floatValue.toFixed(scale);
  var roundedDecimalParts = floatValueStr.split('.');
  var intPart = beforeDecimal
    .split('')
    .reverse()
    .reduce(function (roundedStr, current, idx) {
      if (roundedStr.length > idx) {
        return (
          (Number(roundedStr[0]) + Number(current)).toString() +
          roundedStr.substring(1, roundedStr.length)
        );
      }
      return current + roundedStr;
    }, roundedDecimalParts[0]);

  var decimalPart = limitToScale(
    roundedDecimalParts[1] || '',
    Math.min(scale, afterDecimal.length),
    fixedDecimalScale
  );
  var negation = hasNagation ? '-' : '';
  var decimalSeparator = shoudHaveDecimalSeparator ? '.' : '';
  return ("" + negation + intPart + decimalSeparator + decimalPart);
}

/** set the caret positon in an input field **/
function setCaretPosition(el                  , caretPos        ) {
  el.value = el.value;
  // ^ this is used to not only get 'focus', but
  // to make sure we don't have it everything -selected-
  // (it causes an issue in chrome, and having it doesn't hurt any other browser)
  if (el !== null) {
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.move('character', caretPos);
      range.select();
      return true;
    }
    // (el.selectionStart === 0 added for Firefox bug)
    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    }

    // fail city, fortunately this never happens (as far as I've tested) :)
    el.focus();
    return false;
  }
}

/**
  Given previous value and newValue it returns the index
  start - end to which values have changed.
  This function makes assumption about only consecutive
  characters are changed which is correct assumption for caret input.
*/
function findChangedIndex(prevValue        , newValue        ) {
  var i = 0,
    j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;
  while (prevValue[i] === newValue[i] && i < prevLength) { i++; }

  //check what has been changed from last
  while (
    prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] &&
    newLength - j > i &&
    prevLength - j > i
  ) {
    j++;
  }

  return { start: i, end: prevLength - j };
}

/*
  Returns a number whose value is limited to the given range
*/
function clamp(num        , min        , max        ) {
  return Math.min(Math.max(num, min), max);
}

function getCurrentCaretPosition(el                  ) {
  /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
  return Math.max(el.selectionStart, el.selectionEnd);
}

function addInputMode(format                                   ) {
  return (
    format ||
    (typeof navigator !== 'undefined' &&
      !(navigator.platform && /iPhone|iPod/.test(navigator.platform)))
  );
}

//     
function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var defaultProps = {
  displayType: 'input',
  decimalSeparator: '.',
  thousandsGroupStyle: 'thousand',
  fixedDecimalScale: false,
  prefix: '',
  suffix: '',
  allowNegative: true,
  allowEmptyFormatting: false,
  allowLeadingZeros: false,
  isNumericString: false,
  type: 'text',
  onValueChange: noop,
  onChange: noop,
  onKeyDown: noop,
  onMouseUp: noop,
  onFocus: noop,
  onBlur: noop,
  isAllowed: returnTrue,
};
var NumberFormat = /*@__PURE__*/(function (superclass) {
  function NumberFormat(props        ) {
    superclass.call(this, props);
    var defaultValue = props.defaultValue;

    //validate props
    this.validateProps();

    var formattedValue = this.formatValueProp(defaultValue);

    this.state = {
      value: formattedValue,
      numAsString: this.removeFormatting(formattedValue),
      mounted: false,
    };

    this.selectionBeforeInput = {
      selectionStart: 0,
      selectionEnd: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  if ( superclass ) NumberFormat.__proto__ = superclass;
  NumberFormat.prototype = Object.create( superclass && superclass.prototype );
  NumberFormat.prototype.constructor = NumberFormat;

  NumberFormat.prototype.componentDidMount = function componentDidMount () {
    // set mounted state
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      mounted: true,
    });
  };

  NumberFormat.prototype.componentDidUpdate = function componentDidUpdate (prevProps        ) {
    this.updateValueIfRequired(prevProps);
  };

  NumberFormat.prototype.componentWillUnmount = function componentWillUnmount () {
    clearTimeout(this.focusTimeout);
    clearTimeout(this.caretPositionTimeout);
  };

  NumberFormat.prototype.updateValueIfRequired = function updateValueIfRequired (prevProps        ) {
    var ref = this;
    var props = ref.props;
    var state = ref.state;
    var focusedElm = ref.focusedElm;
    var stateValue = state.value;
    var lastNumStr = state.numAsString; if ( lastNumStr === void 0 ) lastNumStr = '';

    // If only state changed no need to do any thing
    if (prevProps !== props) {
      //validate props
      this.validateProps();

      var lastValueWithNewFormat = this.formatNumString(lastNumStr);

      var formattedValue = isNil(props.value) ? lastValueWithNewFormat : this.formatValueProp();
      var numAsString = this.removeFormatting(formattedValue);

      var floatValue = parseFloat(numAsString);
      var lastFloatValue = parseFloat(lastNumStr);

      if (
        //while typing set state only when float value changes
        ((!isNaN(floatValue) || !isNaN(lastFloatValue)) && floatValue !== lastFloatValue) ||
        //can also set state when float value is same and the format props changes
        lastValueWithNewFormat !== stateValue ||
        //set state always when not in focus and formatted value is changed
        (focusedElm === null && formattedValue !== stateValue)
      ) {
        this.updateValue({
          formattedValue: formattedValue,
          numAsString: numAsString,
          input: focusedElm,
          source: 'prop',
          event: null,
        });
      }
    }
  };

  /** Misc methods **/
  NumberFormat.prototype.getFloatString = function getFloatString (num) {
    if ( num === void 0 ) num         = '';

    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    var numRegex = this.getNumberRegex(true);

    //remove negation for regex check
    var hasNegation = num[0] === '-';
    if (hasNegation) { num = num.replace('-', ''); }

    //if decimal scale is zero remove decimal and number after decimalSeparator
    if (decimalSeparator && decimalScale === 0) {
      num = num.split(decimalSeparator)[0];
    }

    num = (num.match(numRegex) || []).join('').replace(decimalSeparator, '.');

    //remove extra decimals
    var firstDecimalIndex = num.indexOf('.');

    if (firstDecimalIndex !== -1) {
      num = (num.substring(0, firstDecimalIndex)) + "." + (num
        .substring(firstDecimalIndex + 1, num.length)
        .replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), ''));
    }

    //add negation back
    if (hasNegation) { num = '-' + num; }

    return num;
  };

  //returned regex assumes decimalSeparator is as per prop
  NumberFormat.prototype.getNumberRegex = function getNumberRegex (g         , ignoreDecimalSeparator          ) {
    var ref = this.props;
    var format = ref.format;
    var decimalScale = ref.decimalScale;
    var customNumerals = ref.customNumerals;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    return new RegExp(
      '[0-9' +
        (customNumerals ? customNumerals.join('') : '') +
        ']' +
        (decimalSeparator && decimalScale !== 0 && !ignoreDecimalSeparator && !format
          ? '|' + escapeRegExp(decimalSeparator)
          : ''),
      g ? 'g' : undefined
    );
  };

  NumberFormat.prototype.getSeparators = function getSeparators () {
    var ref = this.props;
    var decimalSeparator = ref.decimalSeparator;
    var ref$1 = this.props;
    var thousandSeparator = ref$1.thousandSeparator;
    var allowedDecimalSeparators = ref$1.allowedDecimalSeparators;

    if (thousandSeparator === true) {
      thousandSeparator = ',';
    }
    if (!allowedDecimalSeparators) {
      allowedDecimalSeparators = [decimalSeparator, '.'];
    }

    return {
      decimalSeparator: decimalSeparator,
      thousandSeparator: thousandSeparator,
      allowedDecimalSeparators: allowedDecimalSeparators,
    };
  };

  NumberFormat.prototype.getMaskAtIndex = function getMaskAtIndex (index        ) {
    var ref = this.props;
    var mask = ref.mask; if ( mask === void 0 ) mask = ' ';
    if (typeof mask === 'string') {
      return mask;
    }

    return mask[index] || ' ';
  };

  NumberFormat.prototype.getValueObject = function getValueObject (formattedValue        , numAsString        ) {
    var floatValue = parseFloat(numAsString);

    return {
      formattedValue: formattedValue,
      value: numAsString,
      floatValue: isNaN(floatValue) ? undefined : floatValue,
    };
  };

  NumberFormat.prototype.validateProps = function validateProps () {
    var ref = this.props;
    var mask = ref.mask;

    //validate decimalSeparator and thousandSeparator
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    var thousandSeparator = ref$1.thousandSeparator;

    if (decimalSeparator === thousandSeparator) {
      throw new Error(("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: " + thousandSeparator + " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n          decimalSeparator: " + decimalSeparator + " (default value for decimalSeparator is .)\n       "));
    }

    //validate mask
    if (mask) {
      var maskAsStr = mask === 'string' ? mask : mask.toString();
      if (maskAsStr.match(/\d/g)) {
        throw new Error(("\n          Mask " + mask + " should not contain numeric character;\n        "));
      }
    }
  };
  /** Misc methods end **/

  /** caret specific methods **/
  NumberFormat.prototype.setPatchedCaretPosition = function setPatchedCaretPosition (el                  , caretPos        , currentValue        ) {
    /* setting caret position within timeout of 0ms is required for mobile chrome,
    otherwise browser resets the caret position after we set it
    We are also setting it without timeout so that in normal browser we don't see the flickering */
    setCaretPosition(el, caretPos);
    this.caretPositionTimeout = setTimeout(function () {
      if (el.value === currentValue) { setCaretPosition(el, caretPos); }
    }, 0);
  };

  /* This keeps the caret within typing area so people can't type in between prefix or suffix */
  NumberFormat.prototype.correctCaretPosition = function correctCaretPosition (value        , caretPos        , direction         ) {
    var ref = this.props;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var format = ref.format;

    //if value is empty return 0
    if (value === '') { return 0; }

    //caret position should be between 0 and value length
    caretPos = clamp(caretPos, 0, value.length);

    //in case of format as number limit between prefix and suffix
    if (!format) {
      var hasNegation = value[0] === '-';
      return clamp(caretPos, prefix.length + (hasNegation ? 1 : 0), value.length - suffix.length);
    }

    //in case if custom format method don't do anything
    if (typeof format === 'function') { return caretPos; }

    /* in case format is string find the closest # position from the caret position */

    //in case the caretPos have input value on it don't do anything
    if (format[caretPos] === '#' && charIsNumber(value[caretPos])) {
      return caretPos;
    }

    //if caretPos is just after input value don't do anything
    if (format[caretPos - 1] === '#' && charIsNumber(value[caretPos - 1])) {
      return caretPos;
    }

    //find the nearest caret position
    var firstHashPosition = format.indexOf('#');
    var lastHashPosition = format.lastIndexOf('#');

    //limit the cursor between the first # position and the last # position
    caretPos = clamp(caretPos, firstHashPosition, lastHashPosition + 1);

    var nextPos = format.substring(caretPos, format.length).indexOf('#');
    var caretLeftBound = caretPos;
    var caretRightBound = caretPos + (nextPos === -1 ? 0 : nextPos);

    //get the position where the last number is present
    while (
      caretLeftBound > firstHashPosition &&
      (format[caretLeftBound] !== '#' || !charIsNumber(value[caretLeftBound]))
    ) {
      caretLeftBound -= 1;
    }

    var goToLeft =
      !charIsNumber(value[caretRightBound]) ||
      (direction === 'left' && caretPos !== firstHashPosition) ||
      caretPos - caretLeftBound < caretRightBound - caretPos;

    if (goToLeft) {
      //check if number should be taken after the bound or after it
      //if number preceding a valid number keep it after
      return charIsNumber(value[caretLeftBound]) ? caretLeftBound + 1 : caretLeftBound;
    }

    return caretRightBound;
  };

  NumberFormat.prototype.getCaretPosition = function getCaretPosition (inputValue        , formattedValue        , caretPos        ) {
    var ref = this.props;
    var format = ref.format;
    var stateValue = this.state.value;
    var numRegex = this.getNumberRegex(true);
    var inputNumber = (inputValue.match(numRegex) || []).join('');
    var formattedNumber = (formattedValue.match(numRegex) || []).join('');
    var j, i;

    j = 0;

    for (i = 0; i < caretPos; i++) {
      var currentInputChar = inputValue[i] || '';
      var currentFormatChar = formattedValue[j] || '';
      //no need to increase new cursor position if formatted value does not have those characters
      //case inputValue = 1a23 and formattedValue =  123
      if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) {
        continue;
      }

      //When we are striping out leading zeros maintain the new cursor position
      //Case inputValue = 00023 and formattedValue = 23;
      if (
        currentInputChar === '0' &&
        currentFormatChar.match(numRegex) &&
        currentFormatChar !== '0' &&
        inputNumber.length !== formattedNumber.length
      ) {
        continue;
      }

      //we are not using currentFormatChar because j can change here
      while (currentInputChar !== formattedValue[j] && j < formattedValue.length) {
        j++;
      }
      j++;
    }

    if (typeof format === 'string' && !stateValue) {
      //set it to the maximum value so it goes after the last number
      j = formattedValue.length;
    }

    //correct caret position if its outside of editable area
    j = this.correctCaretPosition(formattedValue, j);

    return j;
  };
  /** caret specific methods ends **/

  /** methods to remove formattting **/
  NumberFormat.prototype.removePrefixAndSuffix = function removePrefixAndSuffix (val        ) {
    var ref = this.props;
    var format = ref.format;
    var prefix = ref.prefix;
    var suffix = ref.suffix;

    //remove prefix and suffix
    if (!format && val) {
      var isNegative = val[0] === '-';

      //remove negation sign
      if (isNegative) { val = val.substring(1, val.length); }

      //remove prefix
      val = prefix && val.indexOf(prefix) === 0 ? val.substring(prefix.length, val.length) : val;

      //remove suffix
      var suffixLastIndex = val.lastIndexOf(suffix);
      val =
        suffix && suffixLastIndex !== -1 && suffixLastIndex === val.length - suffix.length
          ? val.substring(0, suffixLastIndex)
          : val;

      //add negation sign back
      if (isNegative) { val = '-' + val; }
    }

    return val;
  };

  NumberFormat.prototype.removePatternFormatting = function removePatternFormatting (val        ) {
    var ref = this.props;
    var format = ref.format;
    var formatArray = format.split('#').filter(function (str) { return str !== ''; });
    var start = 0;
    var numStr = '';

    for (var i = 0, ln = formatArray.length; i <= ln; i++) {
      var part = formatArray[i] || '';

      //if i is the last fragment take the index of end of the value
      //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##
      var index = i === ln ? val.length : val.indexOf(part, start);

      /* in any case if we don't find the pattern part in the value assume the val as numeric string
      This will be also in case if user has started typing, in any other case it will not be -1
      unless wrong prop value is provided */
      if (index === -1) {
        numStr = val;
        break;
      } else {
        numStr += val.substring(start, index);
        start = index + part.length;
      }
    }

    return (numStr.match(/\d/g) || []).join('');
  };

  NumberFormat.prototype.removeFormatting = function removeFormatting (val        ) {
    var ref = this.props;
    var format = ref.format;
    var removeFormatting = ref.removeFormatting;
    if (!val) { return val; }

    if (!format) {
      val = this.removePrefixAndSuffix(val);
      val = this.getFloatString(val);
    } else if (typeof format === 'string') {
      val = this.removePatternFormatting(val);
    } else if (typeof removeFormatting === 'function') {
      //condition need to be handled if format method is provide,
      val = removeFormatting(val);
    } else {
      val = (val.match(/\d/g) || []).join('');
    }
    return val;
  };
  /** methods to remove formattting end **/

  /*** format specific methods start ***/
  /**
   * Format when # based string is provided
   * @param  {string} numStr Numeric String
   * @return {string}        formatted Value
   */
  NumberFormat.prototype.formatWithPattern = function formatWithPattern (numStr        ) {
    var ref = this.props;
    var format = ref.format;
    var hashCount = 0;
    var formattedNumberAry = format.split('');
    for (var i = 0, ln = format.length; i < ln; i++) {
      if (format[i] === '#') {
        formattedNumberAry[i] = numStr[hashCount] || this.getMaskAtIndex(hashCount);
        hashCount += 1;
      }
    }
    return formattedNumberAry.join('');
  };
  /**
   * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
   * @return {string} formatted Value
   */
  NumberFormat.prototype.formatAsNumber = function formatAsNumber (numStr        ) {
    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var allowNegative = ref.allowNegative;
    var thousandsGroupStyle = ref.thousandsGroupStyle;
    var ref$1 = this.getSeparators();
    var thousandSeparator = ref$1.thousandSeparator;
    var decimalSeparator = ref$1.decimalSeparator;

    var hasDecimalSeparator = numStr.indexOf('.') !== -1 || (decimalScale && fixedDecimalScale);
    var ref$2 = splitDecimal(numStr, allowNegative);
    var beforeDecimal = ref$2.beforeDecimal;
    var afterDecimal = ref$2.afterDecimal;
    var addNegation = ref$2.addNegation; // eslint-disable-line prefer-const

    //apply decimal precision if its defined
    if (decimalScale !== undefined) {
      afterDecimal = limitToScale(afterDecimal, decimalScale, fixedDecimalScale);
    }

    if (thousandSeparator) {
      beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
    }

    //add prefix and suffix
    if (prefix) { beforeDecimal = prefix + beforeDecimal; }
    if (suffix) { afterDecimal = afterDecimal + suffix; }

    //restore negation sign
    if (addNegation) { beforeDecimal = '-' + beforeDecimal; }

    numStr = beforeDecimal + ((hasDecimalSeparator && decimalSeparator) || '') + afterDecimal;

    return numStr;
  };

  NumberFormat.prototype.formatNumString = function formatNumString (numStr) {
    if ( numStr === void 0 ) numStr         = '';

    var ref = this.props;
    var format = ref.format;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var customNumerals = ref.customNumerals;
    var formattedValue = numStr;

    if (customNumerals && customNumerals.length === 10) {
      var customNumeralRegex = new RegExp('[' + customNumerals.join('') + ']', 'g');
      formattedValue = numStr.replace(customNumeralRegex, function (digit) { return customNumerals.indexOf(digit).toString(); }
      );
    }

    if (numStr === '' && !allowEmptyFormatting) {
      formattedValue = '';
    } else if (numStr === '-' && !format) {
      formattedValue = '-';
    } else if (typeof format === 'string') {
      formattedValue = this.formatWithPattern(formattedValue);
    } else if (typeof format === 'function') {
      formattedValue = format(formattedValue);
    } else {
      formattedValue = this.formatAsNumber(formattedValue);
    }

    return formattedValue;
  };

  NumberFormat.prototype.formatValueProp = function formatValueProp (defaultValue                 ) {
    var ref = this.props;
    var format = ref.format;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var ref$1 = this.props;
    var value = ref$1.value;
    var isNumericString = ref$1.isNumericString;

    // if value is undefined or null, use defaultValue instead
    value = isNil(value) ? defaultValue : value;

    var isNonNumericFalsy = !value && value !== 0;

    if (isNonNumericFalsy && allowEmptyFormatting) {
      value = '';
    }

    // if value is not defined return empty string
    if (isNonNumericFalsy && !allowEmptyFormatting) { return ''; }

    if (typeof value === 'number') {
      value = toNumericString(value);
      isNumericString = true;
    }

    //change infinity value to empty string
    if (value === 'Infinity' && isNumericString) {
      value = '';
    }

    //round the number based on decimalScale
    //format only if non formatted value is provided
    if (isNumericString && !format && typeof decimalScale === 'number') {
      value = roundToPrecision(value, decimalScale, fixedDecimalScale);
    }

    var formattedValue = isNumericString ? this.formatNumString(value) : this.formatInput(value);

    return formattedValue;
  };

  NumberFormat.prototype.formatNegation = function formatNegation (value) {
    if ( value === void 0 ) value         = '';

    var ref = this.props;
    var allowNegative = ref.allowNegative;
    var negationRegex = new RegExp('(-)');
    var doubleNegationRegex = new RegExp('(-)(.)*(-)');

    // Check number has '-' value
    var hasNegation = negationRegex.test(value);

    // Check number has 2 or more '-' values
    var removeNegation = doubleNegationRegex.test(value);

    //remove negation
    value = value.replace(/-/g, '');

    if (hasNegation && !removeNegation && allowNegative) {
      value = '-' + value;
    }

    return value;
  };

  NumberFormat.prototype.formatInput = function formatInput (value) {
    if ( value === void 0 ) value         = '';

    var ref = this.props;
    var format = ref.format;

    //format negation only if we are formatting as number
    if (!format) {
      value = this.removePrefixAndSuffix(value);
      value = this.formatNegation(value);
    }

    //remove formatting from number
    value = this.removeFormatting(value);

    return this.formatNumString(value);
  };

  /*** format specific methods end ***/
  NumberFormat.prototype.isCharacterAFormat = function isCharacterAFormat (caretPos        , value        ) {
    var ref = this.props;
    var format = ref.format;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;

    //check within format pattern
    if (typeof format === 'string' && format[caretPos] !== '#') { return true; }

    //check in number format
    if (
      !format &&
      (caretPos < prefix.length ||
        caretPos >= value.length - suffix.length ||
        (decimalScale && fixedDecimalScale && value[caretPos] === decimalSeparator))
    ) {
      return true;
    }

    return false;
  };

  /**
   * This will check if any formatting got removed by the delete or backspace and reset the value
   * It will also work as fallback if android chome keyDown handler does not work
   **/
  NumberFormat.prototype.correctInputValue = function correctInputValue (caretPos        , lastValue        , value        ) {
    var this$1 = this;

    var ref = this.props;
    var format = ref.format;
    var allowNegative = ref.allowNegative;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var allowedDecimalSeparators = ref$1.allowedDecimalSeparators;
    var decimalSeparator = ref$1.decimalSeparator;
    var lastNumStr = this.state.numAsString || '';
    var ref$2 = this.selectionBeforeInput;
    var selectionStart = ref$2.selectionStart;
    var selectionEnd = ref$2.selectionEnd;
    var ref$3 = findChangedIndex(lastValue, value);
    var start = ref$3.start;
    var end = ref$3.end;

    /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */
    if (
      !format &&
      start === end &&
      allowedDecimalSeparators.indexOf(value[selectionStart]) !== -1
    ) {
      var separator = decimalScale === 0 ? '' : decimalSeparator;
      return (
        value.substr(0, selectionStart) + separator + value.substr(selectionStart + 1, value.length)
      );
    }

    var leftBound = !!format ? 0 : prefix.length;
    var rightBound = lastValue.length - (!!format ? 0 : suffix.length);

    if (
      // don't do anything if something got added
      value.length > lastValue.length ||
      // or if the new value is an empty string
      !value.length ||
      // or if nothing has changed, in which case start will be same as end
      start === end ||
      // or in case if whole input is selected and new value is typed
      (selectionStart === 0 && selectionEnd === lastValue.length) ||
      // or in case if the whole content is replaced by browser, example (autocomplete)
      (start === 0 && end === lastValue.length) ||
      // or if charcters between prefix and suffix is selected.
      // For numeric inputs we apply the format so, prefix and suffix can be ignored
      (selectionStart === leftBound && selectionEnd === rightBound)
    ) {
      return value;
    }

    // check whether the deleted portion has a character that is part of a format
    var deletedValues = lastValue.substr(start, end - start);
    var formatGotDeleted = !![].concat( deletedValues ).find(function (deletedVal, idx) { return this$1.isCharacterAFormat(idx + start, lastValue); }
    );

    // if it has, only remove characters that are not part of the format
    if (formatGotDeleted) {
      var deletedValuePortion = lastValue.substr(start);
      var recordIndexOfFormatCharacters = {};
      var resolvedPortion = [];
      [].concat( deletedValuePortion ).forEach(function (currentPortion, idx) {
        if (this$1.isCharacterAFormat(idx + start, lastValue)) {
          recordIndexOfFormatCharacters[idx] = currentPortion;
        } else if (idx > deletedValues.length - 1) {
          resolvedPortion.push(currentPortion);
        }
      });

      Object.keys(recordIndexOfFormatCharacters).forEach(function (idx) {
        if (resolvedPortion.length > idx) {
          resolvedPortion.splice(idx, 0, recordIndexOfFormatCharacters[idx]);
        } else {
          resolvedPortion.push(recordIndexOfFormatCharacters[idx]);
        }
      });

      value = lastValue.substr(0, start) + resolvedPortion.join('');
    }

    //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
    //clear all numbers in such case while keeping the - sign
    if (!format) {
      var numericString = this.removeFormatting(value);
      var ref$4 = splitDecimal(
        numericString,
        allowNegative
      );
      var beforeDecimal = ref$4.beforeDecimal;
      var afterDecimal = ref$4.afterDecimal;
      var addNegation = ref$4.addNegation; // eslint-disable-line prefer-const

      //clear only if something got deleted
      var isBeforeDecimalPoint = caretPos < value.indexOf(decimalSeparator) + 1;
      if (
        numericString.length < lastNumStr.length &&
        isBeforeDecimalPoint &&
        beforeDecimal === '' &&
        !parseFloat(afterDecimal)
      ) {
        return addNegation ? '-' : '';
      }
    }

    return value;
  };

  /** Update value and caret position */
  NumberFormat.prototype.updateValue = function updateValue (params   
                           
                        
                       
                            
                               
                   
                     
                              
   ) {
    var formattedValue = params.formattedValue;
    var input = params.input;
    var setCaretPosition = params.setCaretPosition; if ( setCaretPosition === void 0 ) setCaretPosition = true;
    var source = params.source;
    var event = params.event;
    var numAsString = params.numAsString;
    var caretPos = params.caretPos;
    var ref = this.props;
    var onValueChange = ref.onValueChange;
    var ref$1 = this.state;
    var lastValue = ref$1.value;

    if (input) {
      //set caret position, and value imperatively when element is provided
      if (setCaretPosition) {
        //calculate caret position if not defined
        if (!caretPos) {
          var inputValue = params.inputValue || input.value;

          var currentCaretPosition = getCurrentCaretPosition(input);

          /**
           * set the value imperatively, this is required for IE fix
           * This is also required as if new caret position is beyond the previous value.
           * Caret position will not be set correctly
           */
          input.value = formattedValue;

          //get the caret position
          caretPos = this.getCaretPosition(inputValue, formattedValue, currentCaretPosition);
        }

        //set caret position
        this.setPatchedCaretPosition(input, caretPos, formattedValue);
      } else {
        /**
         * if we are not setting caret position set the value imperatively.
         * This is required on onBlur method
         */
        input.value = formattedValue;
      }
    }

    //calculate numeric string if not passed
    if (numAsString === undefined) {
      numAsString = this.removeFormatting(formattedValue);
    }

    //update state if value is changed
    if (formattedValue !== lastValue) {
      this.setState({ value: formattedValue, numAsString: numAsString });

      // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287
      onValueChange(this.getValueObject(formattedValue, numAsString), { event: event, source: source });
    }
  };

  NumberFormat.prototype.onChange = function onChange (e                     ) {
    var el = e.target;
    var inputValue = el.value;
    var ref = this;
    var state = ref.state;
    var props = ref.props;
    var isAllowed = props.isAllowed;
    var lastValue = state.value || '';

    var currentCaretPosition = getCurrentCaretPosition(el);

    inputValue = this.correctInputValue(currentCaretPosition, lastValue, inputValue);

    var formattedValue = this.formatInput(inputValue) || '';
    var numAsString = this.removeFormatting(formattedValue);

    var valueObj = this.getValueObject(formattedValue, numAsString);
    var isChangeAllowed = isAllowed(valueObj);

    if (!isChangeAllowed) {
      formattedValue = lastValue;
    }

    this.updateValue({
      formattedValue: formattedValue,
      numAsString: numAsString,
      inputValue: inputValue,
      input: el,
      event: e,
      source: 'event',
    });

    if (isChangeAllowed) {
      props.onChange(e);
    }
  };

  NumberFormat.prototype.onBlur = function onBlur (e                     ) {
    var ref = this;
    var props = ref.props;
    var state = ref.state;
    var format = props.format;
    var onBlur = props.onBlur;
    var allowLeadingZeros = props.allowLeadingZeros;
    var numAsString = state.numAsString;
    var lastValue = state.value;
    this.focusedElm = null;

    clearTimeout(this.focusTimeout);
    clearTimeout(this.caretPositionTimeout);

    if (!format) {
      // if the numAsString is not a valid number reset it to empty
      if (isNaN(parseFloat(numAsString))) {
        numAsString = '';
      }

      if (!allowLeadingZeros) {
        numAsString = fixLeadingZero(numAsString);
      }

      var formattedValue = this.formatNumString(numAsString);

      //change the state
      if (formattedValue !== lastValue) {
        // the event needs to be persisted because its properties can be accessed in an asynchronous way
        this.updateValue({
          formattedValue: formattedValue,
          numAsString: numAsString,
          input: e.target,
          setCaretPosition: false,
          event: e,
          source: 'event',
        });
        onBlur(e);
        return;
      }
    }
    onBlur(e);
  };

  NumberFormat.prototype.onKeyDown = function onKeyDown (e                             ) {
    var el = e.target;
    var key = e.key;
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value; if ( value === void 0 ) value = '';
    var expectedCaretPosition;
    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var format = ref.format;
    var onKeyDown = ref.onKeyDown;
    var ignoreDecimalSeparator = decimalScale !== undefined && fixedDecimalScale;
    var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
    var negativeRegex = new RegExp('-');
    var isPatternFormat = typeof format === 'string';

    this.selectionBeforeInput = {
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
    };

    //Handle backspace and delete against non numerical/decimal characters or arrow keys
    if (key === 'ArrowLeft' || key === 'Backspace') {
      expectedCaretPosition = selectionStart - 1;
    } else if (key === 'ArrowRight') {
      expectedCaretPosition = selectionStart + 1;
    } else if (key === 'Delete') {
      expectedCaretPosition = selectionStart;
    }

    //if expectedCaretPosition is not set it means we don't want to Handle keyDown
    //also if multiple characters are selected don't handle
    if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
      onKeyDown(e);
      return;
    }

    var newCaretPosition = expectedCaretPosition;
    var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
    var rightBound = isPatternFormat ? format.lastIndexOf('#') + 1 : value.length - suffix.length;

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      var direction = key === 'ArrowLeft' ? 'left' : 'right';
      newCaretPosition = this.correctCaretPosition(value, expectedCaretPosition, direction);
    } else if (
      key === 'Delete' &&
      !numRegex.test(value[expectedCaretPosition]) &&
      !negativeRegex.test(value[expectedCaretPosition])
    ) {
      while (!numRegex.test(value[newCaretPosition]) && newCaretPosition < rightBound) {
        newCaretPosition++;
      }
    } else if (key === 'Backspace' && !numRegex.test(value[expectedCaretPosition])) {
      /* NOTE: This is special case when backspace is pressed on a
      negative value while the cursor position is after prefix. We can't handle it on onChange because
      we will not have any information of keyPress
      */
      if (selectionStart <= leftBound + 1 && value[0] === '-' && typeof format === 'undefined') {
        var newValue = value.substring(1);
        this.updateValue({
          formattedValue: newValue,
          caretPos: newCaretPosition,
          input: el,
          event: e,
          source: 'event',
        });
      } else if (!negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition - 1]) && newCaretPosition > leftBound) {
          newCaretPosition--;
        }
        newCaretPosition = this.correctCaretPosition(value, newCaretPosition, 'left');
      }
    }

    if (
      newCaretPosition !== expectedCaretPosition ||
      expectedCaretPosition < leftBound ||
      expectedCaretPosition > rightBound
    ) {
      e.preventDefault();
      this.setPatchedCaretPosition(el, newCaretPosition, value);
    }

    /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
            Remove this when you find different solution */
    if (e.isUnitTestRun) {
      this.setPatchedCaretPosition(el, newCaretPosition, value);
    }

    onKeyDown(e);
  };

  /** required to handle the caret position when click anywhere within the input **/
  NumberFormat.prototype.onMouseUp = function onMouseUp (e                          ) {
    var el = e.target;

    /**
     * NOTE: we have to give default value for value as in case when custom input is provided
     * value can come as undefined when nothing is provided on value prop.
     */
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value; if ( value === void 0 ) value = '';

    if (selectionStart === selectionEnd) {
      var caretPosition = this.correctCaretPosition(value, selectionStart);
      if (caretPosition !== selectionStart) {
        this.setPatchedCaretPosition(el, caretPosition, value);
      }
    }

    this.props.onMouseUp(e);
  };

  NumberFormat.prototype.onFocus = function onFocus (e                     ) {
    var this$1 = this;

    // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
    // (onFocus event target selectionStart is always 0 before setTimeout)
    e.persist();

    this.focusedElm = e.target;
    this.focusTimeout = setTimeout(function () {
      var el = e.target;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value = el.value; if ( value === void 0 ) value = '';

      var caretPosition = this$1.correctCaretPosition(value, selectionStart);

      //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)
      if (
        caretPosition !== selectionStart &&
        !(selectionStart === 0 && selectionEnd === value.length)
      ) {
        this$1.setPatchedCaretPosition(el, caretPosition, value);
      }

      this$1.props.onFocus(e);
    }, 0);
  };

  NumberFormat.prototype.render = function render () {
    var ref = this.props;
    var type = ref.type;
    var displayType = ref.displayType;
    var customInput = ref.customInput;
    var renderText = ref.renderText;
    var getInputRef = ref.getInputRef;
    var format = ref.format;
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var thousandsGroupStyle = ref.thousandsGroupStyle;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var removeFormatting = ref.removeFormatting;
    var mask = ref.mask;
    var defaultValue = ref.defaultValue;
    var isNumericString = ref.isNumericString;
    var allowNegative = ref.allowNegative;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var allowLeadingZeros = ref.allowLeadingZeros;
    var onValueChange = ref.onValueChange;
    var isAllowed = ref.isAllowed;
    var customNumerals = ref.customNumerals;
    var onChange = ref.onChange;
    var onKeyDown = ref.onKeyDown;
    var onMouseUp = ref.onMouseUp;
    var onFocus = ref.onFocus;
    var onBlur = ref.onBlur;
    var propValue = ref.value;
    var rest = objectWithoutProperties( ref, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "thousandSeparator", "decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "decimalScale", "fixedDecimalScale", "prefix", "suffix", "removeFormatting", "mask", "defaultValue", "isNumericString", "allowNegative", "allowEmptyFormatting", "allowLeadingZeros", "onValueChange", "isAllowed", "customNumerals", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value"] );
    var otherProps = rest;
    var ref$1 = this.state;
    var value = ref$1.value;
    var mounted = ref$1.mounted;

    // add input mode on element based on format prop and device once the component is mounted
    var inputMode = mounted && addInputMode(format) ? 'numeric' : undefined;

    var inputProps = Object.assign({ inputMode: inputMode }, otherProps, {
      type: type,
      value: value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
      onMouseUp: this.onMouseUp,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    });

    if (displayType === 'text') {
      return renderText ? (
        renderText(value, otherProps) || null
      ) : (
        react__WEBPACK_IMPORTED_MODULE_0__.createElement( 'span', Object.assign({}, otherProps, { ref: getInputRef }),
          value
        )
      );
    } else if (customInput) {
      var CustomInput = customInput;
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement( CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement( 'input', Object.assign({}, inputProps, { ref: getInputRef }));
  };

  return NumberFormat;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

NumberFormat.defaultProps = defaultProps;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberFormat);


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/***/ ((module) => {

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

var __DEV__ = "development" !== 'production';

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


/***/ })

}]);