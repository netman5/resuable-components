import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  className = '',
  disabled = false,
  required = true,
  label,
}) => (
  <div className="mt-6">
    {label && <label htmlFor={name} className="block text-sm font-medium leading-5 text-gray-700">{label}</label>}

    <div className="mt-1 roundem">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={className}
        onChange={onChange}
      />
    </div>
  </div>

);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  required: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
