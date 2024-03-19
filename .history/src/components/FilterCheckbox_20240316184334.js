import React from "react";
import { CustomInput } from "reactstrap";

const FilterCheckbox = ({ id, name, checked, onChange, label }) => {
  return (
    <div>
      <CustomInput
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        label={{ innerText: label }} // Corrected label prop assignment
      />
    </div>
  );
};

export default FilterCheckbox;
