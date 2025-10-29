import React from "react";

const CommonInput = ({
  label,
  id,
  type,
  placeholder,
  handleChangeInput,
  name,
  value,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        type={type || "text"}
        id={id}
        placeholder={placeholder || "Enter the Value"}
        onChange={handleChangeInput || (() => {})}
      />
    </div>
  );
};

export default CommonInput;
