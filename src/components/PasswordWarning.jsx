import React from "react";
import { useDispatch } from "react-redux";
import { setIsValid } from "../redux/registerSlice";

const PasswordWarning = () => {
  const dispatch = useDispatch();
  return (
    <div className={`w-full mb-10`}>
      <label
        htmlFor="password"
        className="text-2xl leading-9 mb-2 capitalize text-[#C9161D]"
      >
        Password
      </label>
      <div className="flex items-center relative">
        <img
          src={require("../assets/img/lock-red.png")}
          alt="lock"
          className="absolute left-5 top-4"
        />
        <div
          className="border-[1px] rounded-[10px] border-[#D9D9D9] focus:outline-none w-full h-[62px] flex items-center justify-center text-sm text-[#C9161D] font-medium"
          placeholder="password"
        >
          <p className="w-4/5">
            Password must be 8-20 characters, no spaces and must contain at
            least 3 of these characters: 1 uppercase, 1 number, 1 symbols.
          </p>
        </div>
        <img
          src={require("../assets/img/eye-open-red.png")}
          alt="eye"
          className="cursor-pointer -ml-12 object-contain"
          onClick={() => dispatch(setIsValid(true))}
        />
      </div>
    </div>
  );
};

export default PasswordWarning;
