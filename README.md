# redux-form-ant-design
redux-form-ant-design is a wrapper for redux form and ant design components.

## Installation
```
npm install redux-form-ant-design

```

## Usage and Example
```

import React from 'react';
import { reduxForm } from 'redux-form';
import { Form, FormField } from 'redux-form-ant-design';

const requiredField = v => (v ? undefined : 'This is required field.');

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '1' },
  { label: 'Option 3', value: '1' },
  { label: 'Option 4', value: '1' }
]

const fields = [
  {
    label: 'Textbox',
    name: 'textbox',
    fieldType: 'text'
  },
  {
    label: 'Password',
    name: 'password',
    fieldType: 'password'
  },
  {
    label: 'Numeric',
    name: 'numeric',
    fieldType: 'numeric'
  },
  {
    label: 'Text Area',
    name: 'textarea',
    fieldType: 'textarea'
  },
  {
    label: 'Required Validation',
    name: 'requiredValidation',
    fieldType: 'text',
    required: true,
    validate: [requiredField]
  },
  {
    label: 'Date Picker',
    name: 'date',
    fieldType: 'date'
  },
  {
    label: 'Date Range Picker',
    name: 'daterange',
    fieldType: 'daterange',
    showTime: true,
    showExtraFooter: true
  },
  {
    label: 'Radio Buttons',
    name: 'radio',
    fieldType: 'radio',
    options: options
  },
  {
    label: 'Checkbox',
    name: 'checkbox',
    fieldType: 'checkbox'
  },
  {
    label: 'Dropdown',
    name: 'dropdown',
    fieldType: 'dropdown',
    options: options
  },
  {
    label: 'Multi Select Dropdown',
    name: 'multipledropdown',
    fieldType: 'dropdown',
    mode: 'multiple',
    options: options
  }
]

const mapSectionFields = () => (field, i) => (
  <FormField
    key={i + field.name}
    {...field}
  />
);

const SimpleForm = props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
      {fields.map(mapSectionFields())}
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </Form>
  )
};

export default reduxForm({
  form: 'simple'
})(SimpleForm);

```