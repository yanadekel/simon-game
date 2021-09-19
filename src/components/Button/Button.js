import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ text, className, onClick, disabled, type, value }) => {
  return (
    <button
      onClick={onClick}
      className={`${className}`}
      disabled={disabled}
      type={type}
      value={value}
    >
      <h5 className="text">{text}</h5>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
