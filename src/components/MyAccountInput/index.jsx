import React from "react";

const MyAccountInput = ({inputFor}) => {
  return (
    <div className="mb-8 w-full">
      <label htmlFor={inputFor} className="text-2xl leading-9 mb-2 capitalize">
        {inputFor}
      </label>
      <div className="flex items-center">
        <input
          type="text"
          placeholder={inputFor}
          name={inputFor}
          className={`border-[1px] px-4 rounded-[10px] border-[#D9D9D9] focus:outline-none w-full h-[62px] placeholder:text-[20px] placeholder:leading-[30px] placeholder:capitalize placeholder:text-black`}
        />
        <img src={require("../../assets/img/pencil.png")} alt="pencil" className="cursor-pointer -ml-12 object-contain"/>
      </div>
    </div>
  );
};

export default MyAccountInput;
