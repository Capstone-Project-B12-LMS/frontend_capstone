import React, { useState } from "react";

const MyAccountInput = ({ inputFor, value, handleChange }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  return (
    <div className="mb-8 w-full">
      <label htmlFor={inputFor} className="text-2xl leading-9 mb-2 capitalize">
        {inputFor}
      </label>
      <div className="flex items-center">
        {isEditClicked ? (
          <input
            type="text"
            value={value}
            onChange={(e) =>
              handleChange(
                inputFor === "name" ? "fullName" : inputFor,
                e.target.value
              )
            }
            name={inputFor}
            className={`border-[1px] px-4 rounded-[10px] border-[#D9D9D9] focus:outline-none w-full h-[62px] placeholder:text-[20px] placeholder:leading-[30px] placeholder:text-black`}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) =>
              handleChange(
                inputFor === "name" ? "fullName" : inputFor,
                e.target.value
              )
            }
            name={inputFor}
            className={`border-[1px] px-4 rounded-[10px] border-[#D9D9D9] focus:outline-none w-full h-[62px] placeholder:text-[20px] placeholder:leading-[30px] placeholder:text-black`}
            readOnly
          />
        )}

        {isEditClicked ? (
          <img
            src={require("../../assets/img/pencil_off.png")}
            alt="pencil"
            className="cursor-pointer -ml-12 w-[25px]"
            onClick={() => setIsEditClicked(!isEditClicked)}
          />
        ) : (
          <img
            src={require("../../assets/img/pencil.png")}
            alt="pencil"
            className="cursor-pointer -ml-12 object-contain"
            onClick={() => setIsEditClicked(!isEditClicked)}
          />
        )}
      </div>
    </div>
  );
};

export default MyAccountInput;
