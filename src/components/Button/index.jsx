import React from "react";

const Button = ({ text, formBtn, styling, handleClick }) => {
  return (
    <button
      type={formBtn ? "submit" : ""}
      className={styling}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
