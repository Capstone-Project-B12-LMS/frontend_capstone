import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputComponent from "../components/InputComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  setUsername,
  setPassword,
  setEmail,
  registerSubmit,
  setIsValid,
} from "../redux/registerSlice";
import PasswordWarning from "../components/PasswordWarning";

const Register = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.register);
  const { email } = useSelector((state) => state.register);
  const { password } = useSelector((state) => state.register);
  const { isValid } = useSelector((state) => state.register);
  const handleRegister = (e) => {
    e.preventDefault();
    if (
      password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
      )
    ) {
      dispatch(registerSubmit());
      dispatch(setIsValid(true));
      return;
    }
    dispatch(setIsValid(false));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-[1000px] w-4/5 max-h-[800px] h-4/5 flex flex-col items-center justify-center bg-[#fff] rounded-[30px]">
        <h2 className="text-[32px] leading-[48px] mb-[7px]">Register</h2>
        <h4 className="text-2xl font-medium mb-10">Create your account</h4>
        <form
          className="max-w-[640px] w-4/5 flex flex-col items-center"
          onSubmit={handleRegister}
        >
          <InputComponent
            icon={require("../assets/img/person.png")}
            name="username"
            value={username}
            setValue={(value) => dispatch(setUsername(value))}
          />
          <InputComponent
            icon={require("../assets/img/email.png")}
            name="email"
            value={email}
            setValue={(value) => dispatch(setEmail(value))}
          />
          {isValid ? (
            <InputComponent
              icon={require("../assets/img/lock.png")}
              name="password"
              value={password}
              setValue={(value) => dispatch(setPassword(value))}
            />
          ) : (
            <PasswordWarning />
          )}
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
