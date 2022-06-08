import React from "react";

const Button = ({buttonText, width, height, type, handleOnClick}) => {
  return (
    <button
      type={!type ? "submit" : type}
      className={`${width} ${height} rounded-[20px] text-xl leading-[30px] font-medium mb-5`}
      onClick={handleOnClick}
    >
     {buttonText}
    </button>
  );
};

export default Button;
