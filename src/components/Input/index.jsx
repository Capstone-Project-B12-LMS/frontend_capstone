import React, { useState } from "react";

const InputComponent = ({ name, value, setValue, icon, type }) => {
  const [isEyeClicked, setIsEyeClicked] = useState(false);
  const passwordType = () => {
    return isEyeClicked ? "text" : "password";
  };

  return (
    <div className="w-full mb-4">
      <label htmlFor={name} className="block text-xl mb-4 capitalize">
        {name}
      </label>
      <div className="flex items-center relative">
        {icon ? <img src={icon} alt={name} className="absolute left-5 top-4" /> : false}
        <input
          className={`${name} border-[1px] py-4 ${icon ? "px-14" : "px-6"} rounded-[10px] border-[#D9D9D9] focus:outline-none w-full h-[62px] placeholder:text-[20px] placeholder:leading-[30px] placeholder:capitalize`}
          placeholder={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          // type={name !== `password` ? `text` : passwordType()}
          type={type === ('password' && passwordType()) || type}
          name={name}
          required
        />
        {name === "password" &&
          (!isEyeClicked ? (
            <img
              src={require("../../assets/img/eye-open.png")}
              alt="eye"
              className="cursor-pointer -ml-12 object-contain"
              onClick={() => setIsEyeClicked(true)}
            />
          ) : (
            <img
              src={require("../../assets/img/eye-closed.png")}
              alt="eye"
              className="cursor-pointer -ml-12 object-contain"
              onClick={() => setIsEyeClicked(false)}
            />
          ))}
      </div>
    </div>
  );
};

export default InputComponent;
