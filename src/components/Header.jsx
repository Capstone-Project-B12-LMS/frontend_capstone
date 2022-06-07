import React from "react";
import Popup from "reactjs-popup";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Header = () => {
  return (
    <header>
      <div>
        <div className="relative">
          <div className="flex w-full bg-transparent grid grid-cols-3 ">
            <div>
              <div className="absolute rounded-full w-[80px] h-[80px] ml-[80px] mt-[15px] bg-[#000000]"></div>
            </div>

            <div></div>
            <div>
              <Popup
                trigger={
                  <button
                    type="submit"
                    className="w-full h-[52px] w-[113px] ml-[100px] mt-[20px] rounded-[10px] text-xl leading-[30px] font-medium mb-5 "
                  >
                    Login
                  </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      <div className="text-black">X</div>
                    </button>
                    <Login />
                  </div>
                )}
              </Popup>

              <Popup
                id="2"
                trigger={
                  <button
                    type="submit"
                    className="w-full h-[52px] w-[117px] ml-[50px] mt-[20px] rounded-[10px] text-xl leading-[30px] font-medium mb-5 bg-transparent outline outline-2 outline-[#415A80] text-[#415A80]  "
                  >
                    Sign up
                  </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      <div className="text-black">X</div>
                    </button>
                    <Register />
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
