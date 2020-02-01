import React from 'react';
import { Input } from 'antd';
import { Field } from 'redux-form';
import ReduxFormField from './ReduxFormField'

const FormGroup = props => <div className={`form-group ${props.className ? props.className : ''}`}>{props.children}</div>;

const isSelect = type => type === 'select';

const DefaultInputComponent = props => {
  if (!isSelect(props.fieldType)) return <Input {...props} />;
  return <Input {...props}>{props.options}</Input>;
};

export const FieldDecorations = props => {
  const inputName = props.input.name;
  const id = 'formField_' + inputName;
  const { touched, error } = props.meta;
  const ReduxFormFieldWrapper = ReduxFormField || DefaultInputComponent;
  const value = props.fieldType === 'slider' && props.range ? (Array.isArray(props.input.value) ? props.input.value : [0]) : props.input.value;
  return (
    <FormGroup className={props.className}>
      <ReduxFormFieldWrapper htmlFor={id} {...props} {...props.input} format={props.dateFormat} value={value} error={touched ? error : null} />
    </FormGroup>
  );
};

const FormField = props => <Field validate={props.validate} key={props.name} {...props} component={FieldDecorations} />;

export default FormField;
