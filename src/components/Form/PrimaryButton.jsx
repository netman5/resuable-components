import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({
  width,
  height,
  backgroundColor,
  color,
  border,
  borderColor,
  fontSize,
  buttonText,
}) => (
  <div>
    <button
      type="button"
      style={{
        width,
        height,
        backgroundColor,
        color,
        border,
        borderColor,
        fontSize,
      }}
    >
      {buttonText}
    </button>
  </div>
);

PrimaryButton.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default PrimaryButton;
