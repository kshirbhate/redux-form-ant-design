"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _getInputComponent = require("./getInputComponent");

var getErrors = function getErrors(props) {
  var errors = {};

  if (props.showError) {
    errors.validateStatus = "error";
    errors.help = props.error;
    errors.hasFeedback = props.hasFeedback;
  }

  return errors;
};

var Field = function Field(_ref) {
  var label = _ref.label,
      children = _ref.children,
      _onBlur = _ref.onBlur,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["label", "children", "onBlur"]);
  return _react["default"].createElement(_antd.Form.Item, Object.assign({
    label: label,
    onBlur: function onBlur(e) {
      return _onBlur(e.value);
    },
    onFocus: function onFocus() {}
  }, getErrors(rest)), children);
};

var getWrapperComponent = function getWrapperComponent(type) {
  if (type === "teal" || type === "radio") return (0, _getInputComponent.getInputComponent)("radiowrapper");
  if (type === "dropdown") return (0, _getInputComponent.getInputComponent)("select");
  return null;
};

var ReduxFormField = function ReduxFormField(props) {
  var input = props.input,
      hasFeedback = props.hasFeedback,
      label = props.label,
      error = props.error,
      required = props.required,
      onBlur = props.onBlur,
      children = props.children,
      rest = (0, _objectWithoutProperties2["default"])(props, ["input", "hasFeedback", "label", "error", "required", "onBlur", "children"]);
  var showError = required && "error" in props && error && error !== "" && error !== null;

  if (props.fieldType === "plaintext") {
    return _react["default"].createElement(Field, {
      label: label,
      hasFeedback: hasFeedback,
      showError: showError
    }, _react["default"].createElement("span", null, props.value));
  }

  var WrapperComponent = getWrapperComponent(props.fieldType);
  var Component = (0, _getInputComponent.getInputComponent)(props.fieldType);
  return _react["default"].createElement(Field, {
    error: error,
    label: label,
    onBlur: onBlur,
    hasFeedback: hasFeedback,
    showError: showError
  }, WrapperComponent ? _react["default"].createElement(WrapperComponent, {
    defaultValue: props.defaultValue,
    buttonStyle: props.buttonStyle,
    onChange: props.onChange,
    mode: props.mode
  }, props.options && props.options.map(function (item) {
    return _react["default"].createElement(Component, {
      key: item.value,
      value: item.value
    }, item.label);
  })) : _react["default"].createElement(Component, Object.assign({}, input, rest, {
    children: children,
    onBlur: function onBlur() {},
    onFocus: function onFocus() {}
  })));
};

var _default = ReduxFormField;
exports["default"] = _default;