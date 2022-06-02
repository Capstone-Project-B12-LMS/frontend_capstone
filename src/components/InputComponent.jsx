import React from "react";

const InputComponent = ({ name, value, setValue }) => {
  return (
    <div className={name !== `password` ? `w-full mb-8` : `w-full mb-10`} >
      <label htmlFor={name} className="text-2xl leading-9 mb-2 capitalize">
        {name}
      </label>
      <input
        className="border-[1px] rounded-[10px] border-[#D9D9D9] focus:outline-none w-full h-[62px] placeholder:text-[20px] placeholder:leading-[30px] placeholder:capitalize"
        placeholder={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={name !== `password` ? `text` : `password`}
        name={name}
        required
      />
    </div>
  );
};

export default InputComponent;
