import React from "react";

const DataValidation = ({ value, onChange, type }) => {
  const validateInput = (input) => {
    if (type === "number" && isNaN(input)) {
      return "Invalid number!";
    }
    if (type === "text" && /\d/.test(input)) {
      return "No numbers allowed!";
    }
    return null;
  };

  return (
    <div>
      <input
        className="border p-1 w-40"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="text-red-500 text-sm">{validateInput(value)}</span>
    </div>
  );
};

export default DataValidation;
