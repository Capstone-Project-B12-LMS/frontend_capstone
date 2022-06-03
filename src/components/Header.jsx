import React from "react";

const Header = () => {
  return (
    <div>
      <div className="relative w-[1365px] h-[100px] bg-[#A5CECD]">
        <div className="grid grid-cols-3 ">
          <div className="absolute w-[80px] h-[80px] ml-[64px] mt-[15px] bg-[#000000]"></div>
          <button
            type="submit"
            className=" h-[52px] w-[113px] ml-[1028px] mt-[30px] rounded-[10px] text-xl font-medium mb-5 bg-[#FFFFFF] text-[#A5CECD]"
          >
            Login{" "}
          </button>
          <button
            type="submit"
            className="w-full h-[52px] w-[117px] ml-[710px] mt-[30px] rounded-[10px] text-xl leading-[30px] font-medium mb-5 bg-transparent outline outline-2"
          >
            Sign up{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
