import React from 'react';
import PropTypes from 'prop-types';

const handleFunc = () => {};

const Button = ({
  type = 'button',
  buttonText,
  onClick = handleFunc,
  loading,
  className = '',
}) => {
  const handleClick = (e) => {
    if (!loading) {
      onClick(e);
    }
  };

  return (
    <div className="mt-6">
      <button
        type={type}
        onClick={handleClick}
        className={className}
        disabled={loading}>

        {loading ? 'Loading....' : buttonText}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
