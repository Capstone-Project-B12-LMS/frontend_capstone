import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <div className="flex">
          <div className="w-full bg-transparent grid grid-cols-3 ">
            <div className="absolute rounded-full w-[60px] h-[60px] ml-[64px] mt-[15px] bg-[#000000]"></div>
            <button
              type="submit"
              className=" h-[52px] w-[113px] ml-[1028px] mt-[20px] rounded-[10px] text-xl font-medium mb-5 bg-[FF997A] "
            >
              Login{" "}
            </button>
            <button
              type="submit"
              className="w-full h-[52px] w-[117px] ml-[710px] mt-[20px] rounded-[10px] text-xl leading-[30px] font-medium mb-5 bg-transparent outline outline-2 outline-[#415A80] text-[#415A80]"
            >
              Sign up{" "}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
