import React from "react";
import PropTypes from "prop-types";

const Image = ({
  src,
  height,
  width,
  alt,
  className,
  title,
  style,
  onChange,
}) => {
  return (
    <div className={`image-wrapper ${className}`} onChange={onChange}>
      <img
        src={src}
        title={title}
        alt={alt}
        height={height}
        width={width}
        style={style}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  alt: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Image;
