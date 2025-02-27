import React, { useState } from "react";

const FormulaBar = () => {
  const [formula, setFormula] = useState("");

  return (
    <div className="border p-2">
      <input
        type="text"
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        className="w-full p-1"
        placeholder="Enter formula..."
      />
    </div>
  );
};

export default FormulaBar;
