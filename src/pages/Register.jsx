import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputComponent from "../components/InputComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  setUsername,
  setPassword,
  setEmail,
  registerSubmit,
} from "../redux/registerSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.register);
  const { email } = useSelector((state) => state.register);
  const { password } = useSelector((state) => state.register);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[1000px] h-[800px] flex flex-col items-center justify-center bg-[#fff] rounded-[30px]">
        <h2 className="text-[32px] leading-[48px] mb-[7px]">Register</h2>
        <h4 className="text-2xl font-medium mb-10">Create your account</h4>
        <form
          className="w-[640px] flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(registerSubmit());
          }}
        >
          <InputComponent
            name="username"
            value={username}
            setValue={(value) => dispatch(setUsername(value))}
          />
          <InputComponent
            name="email"
            value={email}
            setValue={(value) => dispatch(setEmail(value))}
          />
          <InputComponent
            name="password"
            value={password}
            setValue={(value) => dispatch(setPassword(value))}
          />
          <Button buttonValue="Daftar" />
          <p className="text-2xl leading-9 text-[#ADADAD]">
            Already have an account?
            <Link
              to="/login"
              className="text-[#000] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
