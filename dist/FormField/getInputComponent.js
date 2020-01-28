"use strict";

exports.__esModule = true;
exports.T = exports.getInputComponent = void 0;

var _antd = require("antd");

var getInputComponent = function getInputComponent(inputType) {
  switch (inputType) {
    case T.TEXT:
      return _antd.Input;

    case T.PASSWORD:
      return _antd.Input.Password;

    case T.DATE:
      return _antd.DatePicker;

    case T.DATERANGE:
      return _antd.DatePicker.RangePicker;

    case T.DATEMONTH:
      return _antd.DatePicker.MonthPicker;

    case T.NUMERIC:
      return _antd.InputNumber;

    case T.TEXTAREA:
      return _antd.Input.TextArea;

    case T.RADIOWRAPPER:
      return _antd.Radio.Group;

    case T.RADIO:
      return _antd.Radio;

    case T.CHECKBOX:
      return _antd.Checkbox;

    case T.CHECKBOXGROUP:
      return _antd.Checkbox.Group;

    case T.TEAL:
      return _antd.Radio.Button;

    case T.SELECT:
      return _antd.Select;

    case T.DROPDOWN:
      return _antd.Select.Option;

    case T.SWITCH:
      return _antd.Switch;

    case T.SLIDER:
      return _antd.Slider;

    default:
      return _antd.Input;
  }
};

exports.getInputComponent = getInputComponent;
var T = {
  TEXT: 'text',
  PASSWORD: 'password',
  DATE: 'date',
  DATERANGE: 'daterange',
  DATEMONTH: 'datemonth',
  NUMERIC: 'numeric',
  TEXTAREA: 'textarea',
  RADIO: 'radio',
  TEAL: 'teal',
  CHECKBOX: 'checkbox',
  CHECKBOXGROUP: 'checkboxgroup',
  RADIOWRAPPER: 'radiowrapper',
  SELECT: 'select',
  DROPDOWN: 'dropdown',
  SWITCH: 'switch',
  SLIDER: 'slider'
};
exports.T = T;