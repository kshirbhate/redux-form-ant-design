import React from "react";
import { Form } from "antd";
import { getInputComponent } from "./getInputComponent";

const getErrors = props => {
  const errors = {};
  if (props.showError) {
    errors.validateStatus = "error";
    errors.help = props.error;
    errors.hasFeedback = props.hasFeedback;
  }
  return errors;
};

const Field = ({ label, children, onBlur, ...rest }) => (
  <Form.Item
    label={label}
    onBlur={e => onBlur(e.value)}
    onFocus={() => { }}
    {...getErrors(rest)}
  >
    {children}
  </Form.Item>
);

const getWrapperComponent = type => {
  if (type === "teal" || type === "radio")
    return getInputComponent("radiowrapper");
  if (type === "dropdown") return getInputComponent("select");
  return null;
};

const ReduxFormField = props => {
  const {
    input,
    hasFeedback,
    label,
    error,
    required,
    onBlur,
    children,
    ...rest
  } = props;
  const showError =
    required && "error" in props && error && error !== "" && error !== null;

  if (props.fieldType === "plaintext") {
    return (
      <Field label={label} hasFeedback={hasFeedback} showError={showError}>
        <span>{props.value}</span>
      </Field>
    );
  }

  const WrapperComponent = getWrapperComponent(props.fieldType);
  const Component = getInputComponent(props.fieldType);

  return (
    <Field
      error={error}
      label={label}
      onBlur={onBlur}
      hasFeedback={hasFeedback}
      showError={showError}
    >
      {WrapperComponent ? (
        <WrapperComponent
          defaultValue={props.defaultValue}
          buttonStyle={props.buttonStyle}
          onChange={props.onChange}
          mode={props.mode}
        >
          {props.options &&
            props.options.map(item => (
              <Component key={item.value} value={item.value}>
                {item.label}
              </Component>
            ))}
        </WrapperComponent>
      ) : (
          <Component
            {...input}
            {...rest}
            children={children}
            onBlur={() => { }}
            onFocus={() => { }}
          />
        )}
    </Field>
  );
};

export default ReduxFormField;
