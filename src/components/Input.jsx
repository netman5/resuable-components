import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
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
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${className}`}
      />
    </div>
  </div>

);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  required: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
