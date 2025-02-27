import React from "react";

const Toolbar = () => {
  return (
    <div className="flex space-x-4 p-2 border-b">
      <button className="p-2 bg-gray-200">Bold</button>
      <button className="p-2 bg-gray-200">Italic</button>
      <button className="p-2 bg-gray-200">Font Size</button>
    </div>
  );
};

export default Toolbar;
