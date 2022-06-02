import React from "react";

const Button = ({buttonValue}) => {
  return (
    <button
      type="submit"
      className="w-full h-[62px] rounded-[20px] text-xl leading-[30px] font-medium mb-5"
    >
     {buttonValue}
    </button>
  );
};

export default Button;
