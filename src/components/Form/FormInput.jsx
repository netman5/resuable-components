import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  type, name, placeholder, value, onChange,
}) => {
  const [inputType] = useState(type);
  const [inputPlaceholder] = useState(placeholder);
  const [inputName] = useState(name);

  return (
    <div className="mt-6">
      <label htmlFor={inputName} className="block text-sm font-medium leading-5 text-gray-700">{inputName}</label>
      <input type={inputType} name={inputName} placeholder={inputPlaceholder} value={value} onChange={onChange} className="appearance-none block min-w-min px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
