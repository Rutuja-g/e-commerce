import React from 'react';

function CustomRadio({ label, ...restProps }) {
  return (
    <label htmlFor={...restProps.id}>
      {label}
      <input {...restProps} type="radio" />
    </label>
  );
}

export default CustomRadio;
