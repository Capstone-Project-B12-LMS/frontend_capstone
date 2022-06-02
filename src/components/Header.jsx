import React from "react";

const Header = () => {
  return (
    <div>
      <div className="absolute w-[1512px] h-[120px] bg-[#D9D9D9]">
        <div className="grid grid-cols-3 ">
          <div className="absolute w-[80px] h-[80px] ml-[64px] mt-[20px] bg-[#000000]"></div>
          <button
            type="submit"
            className="w-full h-[52px] w-[113px] ml-[1078px] mt-[34px] rounded-[10px] text-xl leading-[30px] font-medium mb-5"
          >
            Login{" "}
          </button>
          <button
            type="submit"
            className="w-full h-[52px] w-[117px] ml-[710px] mt-[34px] rounded-[10px] text-xl leading-[30px] font-medium mb-5"
          >
            Sign up{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
