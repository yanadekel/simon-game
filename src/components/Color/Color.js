import React from 'react';
import PropTypes from 'prop-types';
import './Color.scss';

function color({color, light, onClick, disabled}) {
    return (
        <button
        className={`color-wrapper ${color} ${light ? light : ""}`}
        onClick={onClick}
        disabled={disabled}>
        </button>
    )
}

color.propTypes = {
color: PropTypes.string,
light: PropTypes.string,
onClick: PropTypes.func,
}

export default color;

