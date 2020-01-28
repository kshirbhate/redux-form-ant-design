import { Input, DatePicker, InputNumber, Radio, Checkbox, Select, Switch, Slider } from 'antd';

export const getInputComponent = inputType => {
  switch (inputType) {
    case T.TEXT:
      return Input;
    case T.PASSWORD:
      return Input.Password;
    case T.DATE:
      return DatePicker;
    case T.DATERANGE:
      return DatePicker.RangePicker;
    case T.DATEMONTH:
      return DatePicker.MonthPicker;
    case T.NUMERIC:
      return InputNumber;
    case T.TEXTAREA:
      return Input.TextArea;
    case T.RADIOWRAPPER:
      return Radio.Group;
    case T.RADIO:
      return Radio;
    case T.CHECKBOX:
      return Checkbox;
    case T.CHECKBOXGROUP:
      return Checkbox.Group;
    case T.TEAL:
      return Radio.Button;
    case T.SELECT:
      return Select;
    case T.DROPDOWN:
      return Select.Option;
    case T.SWITCH:
      return Switch;
    case T.SLIDER:
      return Slider;
    default:
      return Input;
  }
};

export const T = {
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
