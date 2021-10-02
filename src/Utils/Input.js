import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

function Input({
  id,
  label,
  value,
  error,
  onChange,
  variant,
  defaultValue,
  size,
  type,
  InputProps,
  disabled
}) {
  return (
    <div>
      <TextField
        error={error}
        disabled={disabled}
        id={id}
        type={type}
        label={label}
        value={value}
        helperText={error}
        variant={variant}
        defaultValue={defaultValue}
        onChange={onChange}
        size={size}
        InputProps={InputProps}
      />
    </div>
  );
};

Input.propTypes = {
 error:PropTypes.bool,
 id:PropTypes.string,
 size:PropTypes.string,
//  type:PropTypes.string,
 label:PropTypes.string,
//  value:PropTypes.string,
//  input:PropTypes.object,
 variant:PropTypes.string,
//  defaultValue:PropTypes.string,
 onChange: PropTypes.func   
}

export default Input;
