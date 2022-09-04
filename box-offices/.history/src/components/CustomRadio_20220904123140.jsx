import React from 'react';

function CustomRadio() {
  return (
    <label htmlFor="shows-search">
      Shows
      <input
        id="shows-search"
        type="radio"
        value="shows"
        checked={isShowsSearch}
        onChange={onRadioChange}
      />
    </label>
  );
}

export default CustomRadio;
