"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.FieldDecorations = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _reduxForm = require("redux-form");

var _ReduxFormField = _interopRequireDefault(require("./ReduxFormField"));

var FormGroup = function FormGroup(props) {
  return _react["default"].createElement("div", {
    className: "form-group ".concat(props.className ? props.className : '')
  }, props.children);
};

var isSelect = function isSelect(type) {
  return type === 'select';
};

var DefaultInputComponent = function DefaultInputComponent(props) {
  if (!isSelect(props.fieldType)) return _react["default"].createElement(_antd.Input, props);
  return _react["default"].createElement(_antd.Input, props, props.options);
};

var FieldDecorations = function FieldDecorations(props) {
  var inputName = props.input.name;
  var id = 'formField_' + inputName;
  var _props$meta = props.meta,
      touched = _props$meta.touched,
      error = _props$meta.error;
  var ReduxFormFieldWrapper = _ReduxFormField["default"] || DefaultInputComponent;
  var value = props.fieldType === 'slider' && props.range ? Array.isArray(props.input.value) ? props.input.value : [0] : props.input.value;
  return _react["default"].createElement(FormGroup, {
    className: props.className
  }, _react["default"].createElement(ReduxFormFieldWrapper, Object.assign({
    htmlFor: id
  }, props, props.input, {
    format: props.dateFormat,
    value: value,
    error: touched ? error : null
  })));
};

exports.FieldDecorations = FieldDecorations;

var FormField = function FormField(props) {
  return _react["default"].createElement(_reduxForm.Field, Object.assign({
    validate: props.validate,
    key: props.name
  }, props, {
    component: FieldDecorations
  }));
};

var _default = FormField;
exports["default"] = _default;