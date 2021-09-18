import React from 'react';
import PropTypes from 'prop-types';
import './Color.scss';

function color({color, light, onClick, disabled, value}) {
    return (
        <button
        className={`color-wrapper ${color} ${light ? light : ""}`}
        onClick={onClick}
        disabled={disabled}
        value={value}>
        </button>
    )
}

color.propTypes = {
color: PropTypes.string.isRequired,
light: PropTypes.string,
onClick: PropTypes.func,
disabled: PropTypes.bool,
value: PropTypes.string.isRequired,
}

export default color;

