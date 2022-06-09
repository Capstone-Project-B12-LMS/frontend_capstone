import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  setUsername,
  setPassword,
  setEmail,
  registerSubmit,
  setIsValid,
  setIsSuccess,
} from "../redux/registerSlice";


import Popup from "reactjs-popup";
import Login from "./Login";

// Component

import { Button , Input , PasswordWarning , RegisterAlert } from '../components'


const Register = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.register);
  const { email } = useSelector((state) => state.register);
  const { password } = useSelector((state) => state.register);
  const { isValid } = useSelector((state) => state.register);
  const { isSuccess } = useSelector((state) => state.register);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsSuccess(false));
    }, 4000);
  }, [isSuccess]);
  const handleRegister = (e) => {
    e.preventDefault();
    if (
      password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
      )
    ) {
      dispatch(registerSubmit());
      dispatch(setIsSuccess(true));
      dispatch(setIsValid(true));
      return;
    }
    dispatch(setIsValid(false));
  };

  return (
    <div className="flex items-center justify-center mt-[6%]" id="register">
      <div className="max-w-[1000px] w-4/5 max-h-[800px] h-4/5 flex flex-col items-center justify-center bg-[#fff] rounded-[30px]">
        <h2 className="text-[32px] leading-[48px] mb-[7px]">Register</h2>
        <h4 className="text-2xl font-medium mb-[16px]">Create your account</h4>
        {isSuccess && <RegisterAlert />}
        <form
          className="max-w-[640px] w-4/5 flex flex-col items-center"
          onSubmit={handleRegister}
        >
          <Input
            icon={require("../assets/img/person.png")}
            name="username"
            value={username}
            setValue={(value) => dispatch(setUsername(value))}
          />
          <Input
            icon={require("../assets/img/email.png")}
            name="email"
            value={email}
            setValue={(value) => dispatch(setEmail(value))}
          />
          {isValid ? (
            <Input
              icon={require("../assets/img/lock.png")}
              name="password"
              value={password}
              setValue={(value) => dispatch(setPassword(value))}
            />
          ) : (
            <PasswordWarning />
          )}
          <Button 
              text='Daftar'
              formBtn={true}
              styling='py-4 mb-8 text-xl font-medium w-full rounded-[20px]'
          />
          <p className="text-2xl leading-9 text-[#ADADAD]">
            Already have an account?
            <Popup
              trigger={
                <a
                  href="#login"
                  className="text-[#000] font-semibold hover:underline"
                >
                  Login
                </a>
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
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
