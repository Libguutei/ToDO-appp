import React from "react";

export const Button = ({ allButton, onButtonClick, isActiveted }) => {
  return (
    <button
      onClick={onButtonClick}
      className={`px-5 py-2 rounded-xl text-sm font-medium  ${
        isActiveted
          ? "bg-[#4F80FF] text-white "
          : "bg-white text-gray-500 border border-gray-200"
      }`}
    >
      {allButton}
    </button>
  );
};

export default Button;
