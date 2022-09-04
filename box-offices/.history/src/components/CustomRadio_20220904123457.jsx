import React from 'react';

function CustomRadio({ label, ...restProps }) {
  return (
    <label htmlFor="shows-search">
      Shows
      <input {...restProps} type="radio" />
    </label>
  );
}

export default CustomRadio;
