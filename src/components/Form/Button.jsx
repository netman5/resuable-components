/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Buttons = ({
  size, children, variant, type,
}) => {
  const [btnType] = useState(type);
  const [btnSize] = useState(size);
  const [btnVariant] = useState(variant);

  return (
    <button type={btnType} className={`${btnSize} ${btnVariant}`}>{children}</button>
  );
};

Buttons.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Buttons;
