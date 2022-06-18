giimport React from "react";

const Button = ({ text, formBtn, styling, handleClick , icon }) => {
  return (
    <button
      type={formBtn ? "submit" : ""}
      className={styling}
      onClick={handleClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
