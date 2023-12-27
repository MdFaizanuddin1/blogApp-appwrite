/* eslint-disable react/prop-types */
import React, { useId } from "react";

// eslint-disable-next-line react-refresh/only-export-components
function Select({ options = [], label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className=" w-full">
      {label && <label htmlFor={id} className=""></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.forwardRef(Select);
